# Wiring checklist

Do every item for every new subunit. Copy the neighbouring entry's exact shape. For orientation, `git show 30a4c5b --stat` (the Term 2 commit) shows every file touched last time.

The sections in this codebase: Unit 1 (`1.x`, section/category `'unit1'`), "Unit 2 - Finance" (`3.x`, `'unit2'`) and the BM Toolkit (`bmt-*`, `'bmt'`). A new syllabus unit (e.g. Unit 4 Marketing) needs a new section value. Search for `'unit2'` everywhere and mirror it: tabs in `src/app/page.tsx` and `src/app/study/page.tsx`, `getUnitCategory` in `src/app/study/page.tsx`, heatmap sections, and `GroupTopicSelector`.

1. `src/types/curriculum.ts`: id in the `SyllabusSubunit` union (done in Phase 2).
2. `src/data/added-chapters.ts`: import the study export and question exports, then append to `ADDED_FINANCE_UNITS` / `ADDED_BMT_UNITS` (or a new `ADDED_<SECTION>_UNITS` array, also spread into `STUDY_UNITS` in `src/data/study-content.ts`), and to each `ADDED_MCQS`, `ADDED_TWO_MARK`, `ADDED_FOUR_MARK`, `ADDED_SIX_MARK`, `ADDED_CRAM_*` array.
3. `src/lib/utils.ts`: a case in `getSubunitLabel` (e.g. `'3.5 Ratio Analysis'`) and in `getSubunitShortBadge` (e.g. `'Unit 3.5'`, `'BCG'`).
4. `src/app/page.tsx` `SYLLABUS_MODULES`: a card in the right section, in syllabus order, with real `mcqs` and `shortAnswer` (2+4+6-mark total) counts from check_content. Update the section tab count text, e.g. `Unit 2 - Finance (7)`.
5. `src/components/dashboard/MasteryHeatmap.tsx`: an entry in `subunits` with a `section`.
6. `src/data/content-groups.ts`:
   - an `ALL_CONTENT_TOPICS` entry (`shortTitle`, `category`, `categoryLabel`, `description`)
   - add the id to the matching presets (`unit2-all`, `bmt-all`, `bmt-matrices` for matrix tools), updating their names and descriptions ("All 7 Modules")
   - update the `all` preset's `shortBadge` topic count ("All 20 Topics")
   - for a test screenshot, add a preset named after the test
7. `src/components/exam/ExamPractice.tsx`: add the id to the `PRESET_GROUPS_MAP` groups, plus an `<option>` in the right `<optgroup>`. Update group option labels and add the test group option if one was created.
8. `src/components/common/GroupTopicSelector.tsx`: section heading ranges (e.g. "Units 3.1–3.8").
9. `src/app/study/page.tsx`: tab count; `src/app/layout.tsx`: footer summary text.
10. BMT tools: set `studyLink` in `src/components/toolkit/ToolkitHub.tsx` to `/study/<id>`. Check the tool's drills in `src/data/matrix-master.ts`, `src/components/drills/MatrixMaster.tsx` and `src/data/cram-mode.ts` against the textbook.
11. `public/finance/MANIFEST.md`: append the agents' figure rows.
12. Final sweep: `grep -rn "<previous last id, e.g. 3.8-investment-appraisal>" src`. Every file listing the previous last id should now list the new ones too.
