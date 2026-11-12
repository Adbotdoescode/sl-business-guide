# Per-chapter agent brief (fill in the <PLACEHOLDERS>)

You are adding one textbook chapter to an IB Business Management study website (Next.js). Work ONLY in the worktree `<WORKTREE>`. All content is typed TS data. Your chapter: **<CHAPTER TITLE> (Hoang 5th ed, Chapter <N>)**. Subunit id: `'<SUBUNIT_ID>'` (already in the `SyllabusSubunit` union in `src/types/curriculum.ts`).

SOURCE OF TRUTH: `<WORKTREE>/.textbook_extracts/<SLUG>.txt` (PDF pages <A>-<B><EXTRA PAGES NOTE> of `/Users/adam/Developer/botest1-1/Business Management - Paul Hoang - Fifth Edition - IBID 2022.pdf`). Read the whole extract. The extract can scramble columns and tables. When anything is unclear, render the page with `pdftoppm -f N -l N -r 110 -png "<pdf>" <SCRATCH>/p` and Read the PNG. Scratch dir: `<SCRATCH>`.

Rules:
- Definitions MUST be the textbook's (its wording, lightly tightened at most), with printed page refs written "(p.274)". Do not invent definitions or use the web. If the textbook doesn't define something a question needs, say so in the content.
- Formulas, account and forecast layouts, and model mappings must match the textbook exactly. Worked examples use the textbook's cases and numbers. Check all arithmetic.
- Cover every subheading, syllabus point and boxed exam tip in the chapter, concisely: short paragraphs, tables, bullets, worked examples. Label HL-only material "HL only".
- If the textbook contains an error (mislabelled table, inconsistent figure), use the consistent reading and add a short note saying so.

House style: read `src/data/finance/unit-3-3.ts`, `src/data/finance/unit-3-4.ts` and `src/data/finance/questions-3-4.ts` first, and match them:
- `const S = '<SUBUNIT_ID>' as const` in the questions file.
- **Bold** key terms, *italic* sparingly. NO `==highlight==`, NO `<u>`, NO `> [!TIP]`/`[!NOTE]`/`[!WARNING]`/`[!IMPORTANT]` callouts (the renderer prints them literally). Write tips as "Textbook Exam tip (p.X): ...".
- `$...$` / `$$...$$` math, markdown tables, code blocks for account layouts.
- If you use template literals, double the LaTeX backslashes.

Figures: add the 1-3 textbook figures or tables that genuinely help (diagrams, matrices, layout tables). Render at ~150 dpi with pdftoppm, crop tightly with Python PIL (`python3 -I`), Read each crop to confirm it is clean and legible, and save as `public/finance/<FILE_PREFIX>-<name>.png`. Embed as `![Caption](/finance/<file>.png)` followed by `*Source: Hoang (2022), Figure N, p.X.*`. Skip figures that contain a textbook error. Do NOT edit MANIFEST.md. Return manifest rows in your reply in this format: `| /finance/<file>.png | <unit> | <page> | <caption> | <where it goes> |`.

DELIVERABLE: two new files, and no edits to any other file (other agents are writing other chapters in parallel; the lead does all wiring):
1. `<STUDY_FILE>` exporting `<STUDY_EXPORT>: StudyUnit`, with id `'<SUBUNIT_ID>'`, title, unitCode `'<UNIT_CODE>'`, subtitle, estimatedReadTime, description, 5-8 sections (each with keyTakeaways and examTips), and 10-16 highYieldTerms with textbook definitions.
2. `<QUESTIONS_FILE>` exporting:
   - `MCQ_<CODE>` (7, ids `mcq-<code>-01`...)
   - `TWO_MARK_<CODE>` (5-6, ids `q2m-<code>-01`...)
   - `FOUR_MARK_<CODE>` (2, ids `q4m-<code>-01`..., with `scrambledSentences`; calculation or "construct" questions where the chapter is quantitative)
   - `SIX_MARK_<CODE>` (1-2, ids `q6m-<code>-01`...)
   - `CRAM_DEFINITIONS_<CODE>` (8-12, ids `def-<code>-01`...), `CRAM_DISTINCTIONS_<CODE>` (2-4, `dist-<code>-..`), `CRAM_GOLDEN_RULES_<CODE>` (1-3, `rule-<code>-..`, category `<CATEGORY>`)

   Grep the existing data files to make sure no id collides.

Verify: `cd <WORKTREE> && npx tsc --noEmit -p . 2>&1 | grep -i <FILE_PREFIX>` prints nothing.

Final reply (brief): sections list, counts, figures and manifest rows, textbook errors or ambiguities and how you resolved them, any answers that are your own working rather than textbook answers, and any inaccuracies you noticed in EXISTING site content about this topic (report them, don't edit).
