---
name: chapter-forge
description: Adds new textbook chapters to the SL Business Guide site (IB Business Management, Paul Hoang 5th ed.). Takes chapter names/unit codes (e.g. "3.6, 3.9, BMT decision trees") or a screenshot of a test/syllabus list, extracts each chapter from the textbook PDF, runs one agent per chapter to write a study guide, question bank and cram items with textbook definitions and figures, wires everything into the site, verifies it in a browser, and deploys to Vercel. Use whenever the user asks to add chapters, units, topics or a test's content to the website.
---

# chapter-forge

Turns "these chapters" into finished, live study pages that match the existing Unit 3 pages in quality and style. Follow every phase in order. Do not skip verification.

Project facts (verify they still hold before starting):
- Repo: `/Users/adam/Developer/botest1-1` (GitHub `Adbotdoescode/sl-business-guide`). Vercel project `sl-business-guide` deploys production on every push to `main`. Live URL: https://sl-business-guide.vercel.app
- Textbook: `Business Management - Paul Hoang - Fifth Edition - IBID 2022.pdf` in the repo root (766 pages). Printed page number ≈ PDF page − 2.
- Content is typed TS data. Study units are `StudyUnit` objects; questions are `MCQQuestion`, `TwoMarkQuestion`, `FourMarkQuestion`, `SixMarkQuestion`; cram items are `DefinitionItem`, `DistinctionItem`, `GoldenMatrixRule` (all in `src/types/curriculum.ts`).
- New chapters register in ONE place: `src/data/added-chapters.ts`. It is already spread into `STUDY_UNITS`, `MCQ_QUESTIONS`, `TWO_MARK_QUESTIONS`, `FOUR_MARK_QUESTIONS`, `SIX_MARK_QUESTIONS` and the three `CRAM_*` arrays.

## Phase 0: Work on a fresh copy of main

The user's main folder often has an old branch checked out with uncommitted work. Never build on it and never touch it.

```bash
cd /Users/adam/Developer/botest1-1 && git fetch -q
git worktree add -b add-<slug> ../botest1-1-<slug> origin/main
cd ../botest1-1-<slug> && npm install --silent
```
Do all edits in that worktree. The PDF lives only in the original folder; reference it by absolute path.

## Phase 1: Resolve the request into chapters

1. If given a screenshot, read it and list every topic code (e.g. "3.5, 3.7, 3.8, BCM"). Expand abbreviations: BCM/BCG = BMT 4 BCG matrix, CBM = circular business models, SWOT/Ansoff/STEEPLE/decision trees etc. are BMT tools (Chapters 44–51).
2. Skip topics already on the site: `grep -n "id:" src/data/content-groups.ts`. Tell the user which were skipped.
3. Locate each chapter's PDF page range:
   ```bash
   python3 .claude/skills/chapter-forge/scripts/find_chapters.py "<pdf>" "3.6" "Decision trees"
   ```
   It prints chapter start pages and writes `.textbook_extracts/<slug>.txt` (each page prefixed `=== PDF PAGE n ===`). Check the range ends where the next chapter starts. Some topics are also introduced in another chapter (BCG appears in Ch 27 p.396-398); grep the full text for the topic name and append those pages.
4. Pick subunit ids in the existing pattern: `'3.6-debt-equity-ratio-analysis'`, `'bmt-decision-trees'`. Short code for file and export names: `3_6` / `3-6`, or a tool name like `BCG` / `bcg`.

State the plan to the user in a few lines (chapters, page ranges, ids) and continue without waiting unless something is ambiguous.

## Phase 2: Prepare shared types (before agents start)

In `src/types/curriculum.ts` add each new id to the `SyllabusSubunit` union. If the agents will need them, add command terms (`'Calculate'`, `'Construct'` exist) or a `GoldenMatrixRule` category. Run `npx tsc --noEmit -p .` to confirm the baseline is clean.

## Phase 3: One agent per chapter, in parallel

Launch one `general-purpose` agent per chapter in a single message. Use the brief in `references/agent-brief.md`, filling in the placeholders. Agents write only their own new files; you do all shared wiring. While they run, do Phase 4.

When each agent reports back, read its summary for textbook errors or ambiguities and decide on them. Where a claim affects existing content (as with BCG's strategy mapping), check the textbook page yourself: render it with `pdftoppm -f N -l N -r 80 -png` and Read the PNG. The textbook wins over existing site content and over the web.

## Phase 4: Wire the site

Follow `references/wiring-checklist.md` item by item. It lists every registry that names subunits: labels, dashboard cards, heatmap, content groups, practice selector, tab counts, toolkit links, figure manifest. Missing one leaves a topic invisible in some part of the site.

If the request came from a test screenshot, also add a preset group named after the test (the "Term 2 Finance Test" group is the model).

## Phase 5: Verify (all must pass)

```bash
npx tsc --noEmit -p .
cp .claude/skills/chapter-forge/scripts/check_content.ts src/__chk.ts && npx -y tsx --tsconfig tsconfig.json src/__chk.ts <ids...>; rm src/__chk.ts
npm run build
npx next start -p 3124 &   # then:
node .claude/skills/chapter-forge/scripts/render_check.mjs 3124 <ids...>
```
- `check_content.ts`: no duplicate ids; every new subunit has a study unit and nonzero MCQ/2/4/6-mark counts. Put the real counts on the dashboard cards (`mcqs` = MCQs, `shortAnswer` = 2+4+6-mark total).
- `render_check.mjs`: every page returns 200; no literal markdown in visible text (`**`, `==x`, `$$`, `\frac`, `[!TIP]` and other `[!...]` callouts, which this renderer does NOT support); no horizontal overflow at 1280px or 390px; no broken images after scrolling. Fix and re-run until clean.
- Look at one screenshot per page (written to the scratchpad) to confirm tables and figures look right.

## Phase 6: Ship

1. Commit in the worktree with a message listing chapters and textbook chapters used.
2. `git fetch` and confirm `origin/main` hasn't moved; if it has, rebase.
3. Push to main: `git push origin add-<slug>:main`. The user asked for content to be hosted, which covers this; if unsure, ask first.
4. Wait for `vercel ls` to show a new Production deployment as Ready, then curl each `/study/<id>` and one figure on https://sl-business-guide.vercel.app and confirm 200.
5. Stop local servers.

## Phase 7: Report

Tell the user, without markdown headings (see `/Users/adam/Developer/AGENTS.md` terminal formatting rules):
- the live URL and what was added per chapter (sections, figures, question counts)
- textbook errors found and how they were handled
- any answers that are your own working rather than textbook answers
- any existing site content changed to match the textbook
- anything skipped and why

## Quality bar (what "same quality" means)

- Definitions come from the textbook, in its wording, with "(p.X)" page refs. Never invent definitions or take them from the web. If the textbook doesn't define a term the question needs, say so in the content.
- Formulas, layouts (cash flow forecast, P&L, balance sheet) and strategy mappings match the textbook exactly. All arithmetic is checked.
- Worked examples use the textbook's own cases and numbers.
- Every syllabus point and boxed exam tip in the chapter is covered, concisely: short paragraphs, tables, bullets. HL-only material is labelled "HL only".
- Style matches `src/data/finance/unit-3-3.ts`/`unit-3-4.ts`: **bold** key terms, *italic* sparingly, no `==highlight==`, no `<u>`, no `[!TIP]` callouts. Write tips as "Textbook Exam tip (p.X): ...". Use `$...$`/`$$...$$` for formulas.
- Figures are cropped from the PDF, checked by eye, stored in `public/finance/`, embedded as `![Caption](/finance/<file>.png)` followed by `*Source: Hoang (2022), Figure N, p.X.*`, and listed in `public/finance/MANIFEST.md`. Figures containing a textbook error are left out.
- Textbook errors are noted in the content, not silently copied.
