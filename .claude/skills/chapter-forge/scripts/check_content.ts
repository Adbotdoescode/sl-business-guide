// Run from the repo root (it must sit inside src/ so the @/ aliases resolve):
//   cp .claude/skills/chapter-forge/scripts/check_content.ts src/__chk.ts
//   npx -y tsx --tsconfig tsconfig.json src/__chk.ts 3.6-debt-equity-ratio-analysis bmt-decision-trees
//   rm src/__chk.ts
// Fails (exit 1) on duplicate ids or a new subunit missing a study unit or any question tier.
import { MCQ_QUESTIONS, TWO_MARK_QUESTIONS } from '@/data/question-bank';
import { FOUR_MARK_QUESTIONS, SIX_MARK_QUESTIONS } from '@/data/model-answers';
import { CRAM_DEFINITIONS, CRAM_DISTINCTIONS, CRAM_GOLDEN_RULES } from '@/data/cram-mode';
import { STUDY_UNITS } from '@/data/study-content';

const ids = process.argv.slice(2);
let bad = false;
const pools: Record<string, { id: string }[]> = {
  mcq: MCQ_QUESTIONS, two: TWO_MARK_QUESTIONS, four: FOUR_MARK_QUESTIONS, six: SIX_MARK_QUESTIONS,
  defs: CRAM_DEFINITIONS, dists: CRAM_DISTINCTIONS, rules: CRAM_GOLDEN_RULES, units: STUDY_UNITS,
};
const seen = new Map<string, number>();
for (const arr of Object.values(pools)) for (const x of arr) seen.set(x.id, (seen.get(x.id) || 0) + 1);
const dups = [...seen].filter(([, n]) => n > 1);
if (dups.length) { bad = true; console.log('DUPLICATE IDS:', dups); } else console.log('No duplicate ids.');

for (const s of ids) {
  const unit = STUDY_UNITS.find((u) => u.id === s);
  const n = (a: any[]) => a.filter((q) => q.subunit === s).length;
  const c = { mcq: n(MCQ_QUESTIONS), two: n(TWO_MARK_QUESTIONS), four: n(FOUR_MARK_QUESTIONS), six: n(SIX_MARK_QUESTIONS) };
  const missing = !unit || Object.values(c).some((v) => v === 0);
  if (missing) bad = true;
  console.log(`${missing ? 'FAIL' : 'ok  '} ${s}: unit=${unit ? unit.sections.length + ' sections, ' + unit.highYieldTerms.length + ' terms' : 'MISSING'}` +
    ` | mcqs=${c.mcq} shortAnswer(2+4+6)=${c.two + c.four + c.six} (${c.two}/${c.four}/${c.six})`);
}
process.exit(bad ? 1 : 0);
