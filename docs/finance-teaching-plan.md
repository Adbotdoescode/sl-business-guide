# Unit 3 Finance: Teaching Plan

Scope: Unit 3.1 to 3.4 (the four finance guides already on the site). Units 3.5 to 3.9 are not on the site yet and are out of scope.

## 1. What was wrong with the old section

- **Dense prose, few entry points.** Each section opened with paragraphs, and the formula or rule came late.
- **Formulas that were wrong or inconsistent with the source.** The source's printed profit-and-loss slides subtract the wrong subtotal for profit before tax. The Unit 3 conventions correct this, and the new guides follow the correction.
- **No visuals.** Cost graphs, the break-even chart, the decision flowchart and the trade-credit cycle were in the source but not on the site.
- **No retrieval.** Nothing asked the reader to recall or apply anything before moving on.
- **No practice for profit and loss.** The Matrix Master and Rapid Blitz have interactive drills; the P&L work had nothing comparable.

## 2. Teaching methods used

| Method | Where it appears |
| --- | --- |
| One-line summary first ("In one line: ...") | Opens every section |
| Plain-English analogy before the term | Car analogy (3.1), "a bill you pay whether the shop is busy or empty" (3.3) |
| Worked example in a table, with the working column | P&L, balance sheet, Kompothekra cost table, depreciation |
| Formula callout, then the formula used with real numbers | `$$...$$` blocks render as Formula callouts |
| Dual coding (text and figure) | Cost graphs, break-even chart, flowchart, trade-credit cycle, capex and revex photos |
| Retrieval practice | "Check yourself" under each section, answers hidden in a collapsible |
| Misconception callouts | "Watch out" boxes: retained profit is not cash; direct is not variable; a margin is not profit; retained earnings are cumulative |
| Exam technique | Examiner Strategy callouts (what to write for 2, 4, 6 mark questions) |
| Interactive practice | Profit & Loss Lab (build statements, then spot the broken line) |

## 3. Keeping the site's general form

- Same unit page template: header, sticky table of contents, sectioned cards, Key Takeaways, Examiner callouts, and a High-Yield glossary. Nothing new was added to the layout.
- Content lives in the same `STUDY_UNITS` data shape (`StudyUnit`, `StudySection`). The old 3.1 to 3.4 objects were removed from `study-content.ts` and replaced by two modules (`finance-units-a.ts`, `finance-units-b.ts`).
- Visual changes are limited to two markdown renderer components: a captioned figure and a styled collapsible for check-yourself blocks. Every other page is unaffected.
- Colours, typography and the card style match the rest of the site.

## 4. Content structure per guide

- **3.1 Introduction to Finance** (4 sections): why business needs money; capital expenditure; revenue expenditure; the capital-or-revenue test.
- **3.2 Sources of Finance** (5 sections): internal vs external; internal sources; external equity; external debt and credit; choosing the right source (time frame, flowchart, SPACED, software-firm decision tree with our own expected-value working).
- **3.3 Costs and Revenues** (7 sections): start-up and running costs; fixed, variable and total; direct and indirect; average cost; revenue, average revenue and profit (with the 10% and margin traps); revenue streams; STEEPLE and change.
- **3.4 Final Accounts & CBMs** (8 sections): purpose and stakeholders; profit and loss step by step; non-profit surplus; balance sheet; intangible assets; depreciation (HL only, labelled); ethics and limits; circular business models.

## 5. The Profit & Loss Lab (new practice section)

Route: `/practice/profit-loss`. Linked from the Practice hub, the Practice & Tools dropdown in the navigation, and the 3.4 guide header.

- **Build the statement.** Eight businesses (profit-making and one non-profit). Given figures are shown; the student enters cost of sales, gross profit, PBIT, PBT, profit for the period and retained profit. "Show working" substitutes the real numbers into each formula.
- **Spot the error.** Six statements, each with one broken formula. The student clicks the line whose figure does not follow from its formula and the line above it. Lines below the mistake are internally consistent, so the student must check each one.
- Arithmetic lives in `src/lib/profit-loss.ts`, separate from the UI. The scenario figures were checked by running the code (see the verification step below).
- **Sourcing of scenarios.** Arabicadabra, Masks-R-Us, TOYS and Caring for Classrooms use the source's figures. Clockworks uses the source's sales, stock and cost-of-sales figures, with illustrative expenses and tax. Corner Bakery, Riverside Cafe and Slice Pizza are illustrative and are labelled as such in the scenario briefs. Treat them as practice data, not source data.

## 6. Source handling

- Source material came from the Unit 3 PDFs in the Business Resources folder and the Unit 3 conventions files.
- Figures were extracted by sub-agents into scratchpad notes and crops, then reviewed by eye. 16 figures are embedded in the site; figures that carried a source error were left out. Examples left out: the Arabicadabra P&L slide (its annotation has the wrong formula), the depreciation key-terms slide (wrong accumulated depreciation definition), and the STEEPLE diagram (mislabels the external environment as internal).
- Where the source is wrong or unclear, the guide says so: the decision-tree "expected value" label, the debentures definition, the long-term definition gap (1 to 5 years), and the share capital "revenue" row.
- Historical case figures (Manchester United, Harry Potter, Luckin Coffee) are marked as historical.

## 7. Open items for the teacher

1. **Codfather P&L (source slide 9).** The printed subtotals do not match the listed expenses. This was not used in the site. Confirm the intended inputs.
2. **Clockworks opening-stock date** is after the year end. The Clockworks scenario in the drill uses the figures from the conventions file, without a date.
3. **Debentures** are not defined in the source. The site gives a standard definition, labelled as not from the source.
4. **STEEPLE classification** of a pandemic-driven fall in spending (environmental or economic). The site flags it for confirmation.
5. **Share capital row** in the source's answer key says "revenue expenditure". The site treats share capital as long-term finance and does not repeat that row.

## 8. Verification

- `npx tsc --noEmit` passes.
- `npm run build` passes and generates every new route and all four finance guides.
- Profit & Loss Lab arithmetic was checked by running the lab logic against each scenario, and each spot-the-error item was checked to break exactly one formula.
- Screenshot review at 1280 px and 390 px covered every finance section, both lab modes, and the Practice hub tile. Every figure loads on both viewports. There is no horizontal overflow. The browser console shows only the Vercel analytics script 404s that appear under local `next start`.

## 9. Next steps (not done)

- Units 3.5 to 3.9 (ratios, cash flow, investment appraisal, budgets) are not on the site. The same template and drill approach would extend to them.
- A balance-sheet drill (the Build mode pattern applied to the balance sheet) would match the P&L Lab.
- Confirm the open items in section 7 before the next test.
