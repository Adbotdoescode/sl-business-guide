# SL Business Guide (sl-business-guide)

A production-grade, editorial light-mode Next.js study application and revision suite for SL Business Guide, covering Units 1.1, 1.2, 1.3, 1.4, 1.5 (Economies of Scale), 1.6 (Multinational Companies), SWOT Analysis, Ansoff Matrix, STEEPLE Analysis, BCG Matrix, the BMT Business Plan, BMT Descriptive Statistics, and the Business Management Toolkit (BMT). Built with Next.js 15 (App Router), React 19, and Tailwind CSS.

---

## Key Features

1. **Matrix Master (Interactive Studio & Average Cost Curve Simulator):**
   - Native HTML5 drag-and-drop on desktop with tap-to-place fallback for mobile touchscreens.
   - **6 Interactive Classification Modes:**
     - **Ansoff Growth Matrix** (17 real-world cards)
     - **SWOT Analysis** (12 cards + 4 strategy pairings from Hoang Figure 44.2: S-O offensive, S-T defensive, W-O reorientation, W-T survival)
     - **STEEPLE Analysis** (18 cards across Social, Tech, Econ, Env, Pol, Legal, Ethical)
     - **BCG Matrix** (10 cards across Stars, Cash Cows, Question Marks, Dogs)
     - **Stakeholder Mapping** (12 cards across Quadrants A, B, C, D, following Hoang Figure 4.3)
     - **Economies of Scale Quadrant Sorter** (20 real-world cards across Internal/External Economies & Diseconomies)
   - **Interactive Average Cost Curve Simulator:**
     - Dynamic output slider (*Q* = 1,000 to 20,000 units)
     - Real-time mathematical calculation of *TC*, *AFC*, *AVC*, *ATC*
     - Visual SVG U-shaped average cost curve (Hoang Figure 5.1) with dynamic output coordinate marker
     - Phase indicator (Economies of Scale → Optimal Level of Output → Diseconomies of Scale)
     - 4 knowledge deep-dive tabs (7 Internal Economies, 4 External Economies, 5 Internal Diseconomies, 3 External Diseconomies)

2. **Rapid Blitz MCQ Sprint:**
   - 3 challenge modes via mode picker: **120-Second Sprint** (with +1 rapid bonus for answers under 3 seconds), **60-Second Sudden Death** (1 mistake ends run), and **Endless Mastery** (3 heart lives, untimed).
   - Topic filtering across all units: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, SWOT, Ansoff, STEEPLE, BMT Core, Business Plan, Descriptive Statistics.
   - Instant 2-sentence pedagogical rationale (correct explanation + distractor breakdown).
   - Keyboard accelerators (`1`, `2`, `3`, `4` or `A`, `B`, `C`, `D`).

3. **Entity Showdown & Matchmaker:**
   - 8-dimension comparative matrix for 5 business entities (Sole Trader, Partnership, Ltd, PLC, Social Enterprises).
   - Interactive Entity Matchmaker with realistic startup case challenges and distractor explanations.

4. **Exam Practice & Written Rubrics:**
   - **2-Mark Bank:** 98 definitions with 2-point mark breakdown checklists and examiner advice.
   - **4-Mark Applied Questions:** 34 applied questions featuring **Split-Screen Editor** with real-time auto-saving, **Live Markdown Preview** toggle (`[Write] | [Preview]`), and **Study Model Exemplar** with color-coded PEEL tokens (Point, Explanation, Evidence, Link).
   - **6-Mark Analytical Questions:** 18 analytical questions with level markbands (Levels 1–3) and criterion rubrics.
   - **Production Markdown Rendering:** Universal `MarkdownRenderer` built on `react-markdown`, `remark-gfm`, and `rehype-raw` supporting GFM tables, ASCII box-drawing diagrams, dual inline/block modes, and editorial styling.

5. **Custom Content Test Builder (Multi-Topic Group Testing):**
   - Test yourself with questions from a **chosen group of content** rather than only all or just a single topic.
   - **Predefined Content Groups:** Unit 1 Foundations (1.1–1.3), Scale & Global Operations (1.4–1.6), Complete Unit 1 (1.1–1.6), Strategic Matrices (SWOT, Ansoff, STEEPLE), and Full BM Toolkit (all 6 tools).
   - **Custom Topic Matrix:** Checkbox selector allowing any combination of the 12 syllabus modules.
   - **Flexible Formats & Modes:** Multiple choice (MCQ), 2-Mark definitions (AO1), or Mixed formats; choose 5, 10, 15, 20, or all matching questions.
   - **Practice vs. Exam Mode:** Immediate distractor rationale reveal vs. timed exam simulation with submission grading.
   - **Topic-by-Topic Performance Scorecard:** Visual mastery breakdown showing accuracy per subunit within the chosen group, question jump palette, flagged question bookmarks, and one-click "Retest Missed Questions".

6. **10-Minute High-Yield Cram Mode:**
   - One-click filterable review of **117 Definitions**, **42 High-Stakes Exam Distinctions**, and **15 Golden Matrix Decision Rules**.
   - "Got it / Hide" toggles to isolate remaining uncertainties.

7. **GET CASH Mnemonic Vault:**
   - Flippable flashcards for startup motives (Growth, Earnings, Transference, Challenge, Autonomy, Security, Hobbies).
   - 30-Second Speed Matcher mini-game matching entrepreneur quotes to motives.
   - Sibling tabs for SMART Objectives (standard IB teaching, not in the Hoang textbook) and the PEEL Framework.

8. **Confidence & Mastery Heatmap:**
   - Color-coded mastery grid across all subunits and assessment tiers.
   - One-click "Weakness Workout" targeting lowest-scoring topics.

9. **Comprehensive Academic Study Guides:**
   - Complete syllabus readers covering Units 1.1, 1.2, 1.3, 1.4, 1.5, and 1.6, plus the BMT Business Plan and BMT Descriptive Statistics guides, with collapsible sections, key takeaways, and examiner tip callouts.

---

## Getting Started

### Prerequisites
- Node.js >= 18.18 (tested on Node v26.5.0)
- npm >= 9.0 (tested on npm 11.17.0)

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build & Verification
```bash
# Build production bundle
npm run build

# Start production server
npm start
```

### Static Analysis
```bash
npm run lint
```

---

## Curriculum Coverage & Data Integrity

| Dataset Component | Count | Verification Status |
| :--- | :---: | :---: |
| Multiple Choice Questions (MCQs) | **124** | Verified (11 in 1.1, 16 in 1.2, 13 in 1.3, 10 in 1.4, 17 in 1.5, 9 in 1.6, 8 in SWOT, 7 in Ansoff, 13 in STEEPLE, 8 in BMT Toolkit, 6 in BMT Business Plan, 6 in BMT Descriptive Statistics) |
| 2-Mark Short Answer (AO1) | **98** | Verified (with 2-point criteria breakdown and examiner tips; 9 in 1.1, 16 in 1.2, 13 in 1.3, 13 in 1.4, 14 in 1.5, 4 in 1.6, 6 in SWOT, 5 in Ansoff, 8 in STEEPLE, 4 in BMT Toolkit, 3 in BMT Business Plan, 3 in BMT Descriptive Statistics) |
| 4-Mark Applied PEEL (AO2) | **34** | Verified (Point 1 & Point 2 PEEL + 4-point rubric checklist) |
| 6-Mark Analytical Questions (AO2/AO3) | **18** | Verified (Two perspectives, synthesis, and 3-level markbands) |
| Economies of Scale Scenario Cards | **20** | Verified (8 Internal Economies, 4 External Economies, 4 Internal Diseconomies, 4 External Diseconomies) |
| Ansoff Scenario Cards | **17** | Verified (across all 4 quadrants + related/unrelated) |
| SWOT Scenario Cards | **12** | Verified (with STEEPLE tags) + 4 Strategy Pairs (Figure 44.2) |
| STEEPLE Scenario Cards | **18** | Verified (at least 2 scenarios per STEEPLE dimension; 5 technological, 3 economic) |
| BCG Scenario Cards | **10** | Verified (Stars, Cash Cows, Question Marks, Dogs) |
| Stakeholder Scenario Cards | **12** | Verified (3 per stakeholder-mapping quadrant A–D, Hoang Figure 4.3) |
| High-Yield Cram Definitions | **117** | Verified (including Unit 1.5 scale and optimal level of output definitions) |
| High-Stakes Exam Distinctions | **42** | Verified (including Internal vs External Economies and Scale vs Bulk Buying) |
| Golden Matrix Decision Rules | **15** | Verified (including the optimal-output tipping point and the 7-factor internal scale checklist) |
| Complete Study Units | **12** | Verified (Units 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, BMT SWOT, BMT Ansoff, BMT STEEPLE, BMT Toolkit, BMT Business Plan, and BMT Descriptive Statistics with 213 high-yield defined terms in total) |
