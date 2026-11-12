#!/usr/bin/env python3
"""Locate textbook chapters in the Hoang PDF and write per-chapter text extracts.

Usage:
  python3 find_chapters.py "<pdf>" "3.6" "Decision trees" ...
Each query is a unit code (e.g. 3.6) or a topic/BMT tool name. For each one this prints
the chapter's start page, its probable end (the next chapter start) and other pages that
mention it, then writes .textbook_extracts/<slug>.txt in the current directory.
Use --pages A-B to force a range: python3 find_chapters.py "<pdf>" "3.6" --pages 287-298
"""
import os, re, subprocess, sys, tempfile

def load(pdf):
    cache = os.path.join(tempfile.gettempdir(), 'hoang_layout.txt')
    if not os.path.exists(cache) or os.path.getmtime(cache) < os.path.getmtime(pdf):
        subprocess.run(['pdftotext', '-layout', pdf, cache], check=True)
    return open(cache, encoding='utf-8', errors='replace').read().split('\f')

def chapter_starts(pages):
    starts = {}
    for i, p in enumerate(pages):
        m = re.match(r'\s*Chapter\s*(\d+)', p)
        if m:
            starts.setdefault(int(m.group(1)), i + 1)
    return starts

def main():
    args = sys.argv[1:]
    if len(args) < 2:
        print(__doc__); sys.exit(1)
    pdf, queries = args[0], args[1:]
    force = None
    if '--pages' in queries:
        k = queries.index('--pages'); a, b = queries[k + 1].split('-'); force = (int(a), int(b))
        queries = queries[:k] + queries[k + 2:]
    pages = load(pdf)
    starts = chapter_starts(pages)
    ordered = sorted(starts.items(), key=lambda x: x[1])
    os.makedirs('.textbook_extracts', exist_ok=True)
    for q in queries:
        # pdftotext often drops spaces in headings ("BusinessManagement"), so match space-insensitively.
        squash = lambda t: re.sub(r'\s+', '', t).lower()
        key = ('unit' + q) if re.fullmatch(r'\d\.\d+', q) else squash(q)
        hit = (lambda t: re.search(re.escape(key) + r'(?!\d)', squash(t)) is not None)
        start = None
        for ch, pg in ordered:
            if hit(pages[pg - 1][:700]):
                start = (ch, pg); break
        mentions = [i + 1 for i, p in enumerate(pages) if hit(p)]
        if force:
            a, b = force
        elif start:
            a = start[1]
            nxt = [pg for _, pg in ordered if pg > a]
            b = (nxt[0] - 1) if nxt else min(a + 15, len(pages))
        else:
            print(f'[{q}] no chapter heading found. Pages mentioning it: {mentions[:40]}')
            continue
        slug = re.sub(r'[^a-z0-9]+', '-', q.lower()).strip('-')
        out = f'.textbook_extracts/{slug}.txt'
        with open(out, 'w') as f:
            f.write('\n'.join(f'=== PDF PAGE {i} ===\n' + pages[i - 1] for i in range(a, b + 1)))
        outside = [m for m in mentions if m < a or m > b]
        label = f'Chapter {start[0]}' if start else 'forced range'
        print(f'[{q}] {label}: PDF pages {a}-{b} -> {out}')
        print(f'      first line: {pages[a - 1].strip().splitlines()[0][:90] if pages[a - 1].strip() else ""}')
        print(f'      mentions outside the range (check for extra coverage): {outside[:25]}')

if __name__ == '__main__':
    main()
