// Registry for chapters added by the chapter-forge skill. Add each new chapter's
// imports here and append them to the matching array below; nothing else imports them.
// Term 2 batch: Units 3.5, 3.7, 3.8 and BMT 4 (BCG matrix).
// Source: Paul Hoang, Business Management (5th ed., IBID 2022), Chapters 18, 20, 21 and 47.
import { UNIT_3_5 } from './finance/unit-3-5';
import { UNIT_3_7 } from './finance/unit-3-7';
import { UNIT_3_8 } from './finance/unit-3-8';
import { BMT_BCG } from './bmt/bmt-bcg-matrix';
import * as q35 from './finance/questions-3-5';
import * as q37 from './finance/questions-3-7';
import * as q38 from './finance/questions-3-8';
import * as qbcg from './bmt/questions-bcg';

// Unit 1 chapters would go in a new ADDED_UNIT1_UNITS array spread into STUDY_UNITS.
export const ADDED_FINANCE_UNITS = [UNIT_3_5, UNIT_3_7, UNIT_3_8];
export const ADDED_BMT_UNITS = [BMT_BCG];
export const ADDED_MCQS = [...q35.MCQ_3_5, ...q37.MCQ_3_7, ...q38.MCQ_3_8, ...qbcg.MCQ_BCG];
export const ADDED_TWO_MARK = [...q35.TWO_MARK_3_5, ...q37.TWO_MARK_3_7, ...q38.TWO_MARK_3_8, ...qbcg.TWO_MARK_BCG];
export const ADDED_FOUR_MARK = [...q35.FOUR_MARK_3_5, ...q37.FOUR_MARK_3_7, ...q38.FOUR_MARK_3_8, ...qbcg.FOUR_MARK_BCG];
export const ADDED_SIX_MARK = [...q35.SIX_MARK_3_5, ...q37.SIX_MARK_3_7, ...q38.SIX_MARK_3_8, ...qbcg.SIX_MARK_BCG];
export const ADDED_CRAM_DEFINITIONS = [...q35.CRAM_DEFINITIONS_3_5, ...q37.CRAM_DEFINITIONS_3_7, ...q38.CRAM_DEFINITIONS_3_8, ...qbcg.CRAM_DEFINITIONS_BCG];
export const ADDED_CRAM_DISTINCTIONS = [...q35.CRAM_DISTINCTIONS_3_5, ...q37.CRAM_DISTINCTIONS_3_7, ...q38.CRAM_DISTINCTIONS_3_8, ...qbcg.CRAM_DISTINCTIONS_BCG];
export const ADDED_CRAM_GOLDEN_RULES = [...q35.CRAM_GOLDEN_RULES_3_5, ...q37.CRAM_GOLDEN_RULES_3_7, ...q38.CRAM_GOLDEN_RULES_3_8, ...qbcg.CRAM_GOLDEN_RULES_BCG];
