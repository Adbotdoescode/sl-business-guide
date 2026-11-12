// Browser check of new study pages against a running `next start`.
//   node render_check.mjs <port> <subunit-id> [<subunit-id> ...]
// Needs playwright. If it isn't installed:
//   cd <scratchpad>/pw && npm i playwright@1.56.1   (run this script from that dir)
// It uses an already-downloaded Chromium from ~/Library/Caches/ms-playwright when it can find one.
// Screenshots go to $SHOT_DIR (default: cwd).
import fs from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright';

const [port, ...ids] = process.argv.slice(2);
if (!port || !ids.length) { console.log('usage: node render_check.mjs <port> <id...>'); process.exit(1); }
const shotDir = process.env.SHOT_DIR || process.cwd();

function findChromium() {
  const base = path.join(process.env.HOME, 'Library/Caches/ms-playwright');
  if (!fs.existsSync(base)) return undefined;
  for (const d of fs.readdirSync(base).filter((x) => x.startsWith('chromium_headless_shell')).sort().reverse()) {
    for (const sub of fs.readdirSync(path.join(base, d))) {
      const p = path.join(base, d, sub, 'chrome-headless-shell');
      if (fs.existsSync(p)) return p;
    }
  }
}
const b = await chromium.launch({ executablePath: findChromium() });
const RAW = /(\*\*|==\w|\$\$|\\frac|\\times|\\text|\[!(TIP|NOTE|WARNING|IMPORTANT|CAUTION)\])/g;
let failed = false;
for (const [w, tag] of [[1280, 'desktop'], [390, 'mobile']]) {
  const p = await b.newPage({ viewport: { width: w, height: 900 } });
  for (const id of ids) {
    const res = await p.goto(`http://localhost:${port}/study/${id}`, { waitUntil: 'networkidle' });
    await p.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 600) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 60)); }
    });
    await p.waitForTimeout(800);
    const text = await p.evaluate(() => document.body.innerText);
    const raw = []; let m; while ((m = RAW.exec(text))) raw.push(text.slice(Math.max(0, m.index - 50), m.index + 30).replace(/\s+/g, ' '));
    const overflow = await p.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
    const broken = await p.evaluate(() => [...document.images].filter((i) => !i.naturalWidth).map((i) => i.src));
    const ok = res.status() === 200 && !raw.length && !overflow && !broken.length;
    if (!ok) failed = true;
    console.log(`${ok ? 'ok  ' : 'FAIL'} [${tag}] ${id} status=${res.status()} rawMarkup=${raw.length} overflow=${overflow} brokenImages=${broken.length}`);
    raw.slice(0, 5).forEach((r) => console.log('       raw: ' + JSON.stringify(r)));
    broken.forEach((s) => console.log('       broken: ' + s));
    if (tag === 'desktop') {
      await p.evaluate(() => window.scrollTo(0, 0));
      await p.screenshot({ path: path.join(shotDir, `${id}.png`) });
    }
  }
}
await b.close();
process.exit(failed ? 1 : 0);
