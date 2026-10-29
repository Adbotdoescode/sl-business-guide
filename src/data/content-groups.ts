import { SyllabusSubunit } from '@/types/curriculum';
import { MCQ_QUESTIONS, TWO_MARK_QUESTIONS } from '@/data/question-bank';
import { FOUR_MARK_QUESTIONS, SIX_MARK_QUESTIONS } from '@/data/model-answers';

export interface ContentTopicMeta {
  id: SyllabusSubunit;
  code: string;
  title: string;
  shortTitle: string;
  category: 'unit1' | 'unit2' | 'bmt';
  categoryLabel: string;
  description: string;
}

export const ALL_CONTENT_TOPICS: ContentTopicMeta[] = [
  // ==========================================
  // Section 1: Unit 1 - Business Management
  // ==========================================
  {
    id: '1.1-what-is-a-business',
    code: 'Unit 1.1',
    title: 'What is a Business?',
    shortTitle: '1.1 Business Nature',
    category: 'unit1',
    categoryLabel: 'Unit 1 - Business Management',
    description: 'Inputs, transformation model, goods vs services, economic sectors, chain of production, startup challenges, and GET CASH motives.',
  },
  {
    id: '1.2-types-of-business-entities',
    code: 'Unit 1.2',
    title: 'Types of Business Entities',
    shortTitle: '1.2 Legal Entities',
    category: 'unit1',
    categoryLabel: 'Unit 1 - Business Management',
    description: 'Sole traders, partnerships, privately held Ltd, public PLCs, limited liability, cooperatives, and non-governmental organizations.',
  },
  {
    id: '1.3-business-objectives',
    code: 'Unit 1.3',
    title: 'Business Objectives',
    shortTitle: '1.3 Objectives & CSR',
    category: 'unit1',
    categoryLabel: 'Unit 1 - Business Management',
    description: 'Vision vs mission statements, strategic vs tactical aims, ethics, corporate social responsibility (CSR), and changing objectives.',
  },
  {
    id: '1.4-stakeholders',
    code: 'Unit 1.4',
    title: 'Stakeholders',
    shortTitle: '1.4 Stakeholders',
    category: 'unit1',
    categoryLabel: 'Unit 1 - Business Management',
    description: 'Internal vs external stakeholders, conflict resolution, mutual benefit synergy, and Mendelow power-interest stakeholder mapping.',
  },
  {
    id: '1.5-growth-and-evolution',
    code: 'Unit 1.5',
    title: 'Growth & Economies of Scale',
    shortTitle: '1.5 Scale & Growth',
    category: 'unit1',
    categoryLabel: 'Unit 1 - Business Management',
    description: 'Internal and external economies and diseconomies of scale, optimal output, internal vs external growth, and M&A joint ventures.',
  },
  {
    id: '1.6-multinational-companies',
    code: 'Unit 1.6',
    title: 'Multinational Companies (MNCs)',
    shortTitle: '1.6 Global MNCs',
    category: 'unit1',
    categoryLabel: 'Unit 1 - Business Management',
    description: 'Host country benefits and drawbacks, globalization drivers, transfer pricing, and cultural and ethical operational challenges.',
  },

  // ==========================================
  // Section 2: Unit 2 - Finance
  // ==========================================
  {
    id: '3.1-intro-to-finance',
    code: 'Unit 3.1',
    title: 'Introduction to Finance',
    shortTitle: '3.1 Intro to Finance',
    category: 'unit2',
    categoryLabel: 'Unit 2 - Finance',
    description: 'Role of finance, Capital Expenditure (CapEx) vs Revenue Expenditure (RevEx), fixed assets, collateral, and business investment drivers.',
  },
  {
    id: '3.2-sources-of-finance',
    code: 'Unit 3.2',
    title: 'Sources of Finance',
    shortTitle: '3.2 Sources of Finance',
    category: 'unit2',
    categoryLabel: 'Unit 2 - Finance',
    description: 'Internal sources (personal funds, retained profit, asset sales) and external sources (share capital, loan capital, overdrafts, trade credit, crowdfunding, leasing, microfinance, business angels), plus short- vs long-term finance and SPACED factors.',
  },
  {
    id: '3.3-costs-and-revenues',
    code: 'Unit 3.3',
    title: 'Costs and Revenues',
    shortTitle: '3.3 Costs & Revenues',
    category: 'unit2',
    categoryLabel: 'Unit 2 - Finance',
    description: 'Fixed, variable, total and average costs (TC = TFC + TVC, AC = TC/Q), direct vs indirect costs, revenue, and revenue streams.',
  },
  {
    id: '3.4-final-accounts',
    code: 'Unit 3.4',
    title: 'Final Accounts',
    shortTitle: '3.4 Final Accounts',
    category: 'unit2',
    categoryLabel: 'Unit 2 - Finance',
    description: 'Income statements, statements of financial position, intangible assets, stakeholder uses, ethics of accounting, and HL depreciation (straight-line and units of production).',
  },

  // ==========================================
  // Section 3: Business Management Toolkit (BMT)
  // ==========================================
  {
    id: 'bmt-swot-analysis',
    code: 'BMT: SWOT',
    title: 'SWOT Analysis',
    shortTitle: 'SWOT Analysis',
    category: 'bmt',
    categoryLabel: 'Business Management Toolkit',
    description: 'Internal strengths and weaknesses, external opportunities and threats, and Hoang 4-quadrant strategic pairings (SO, ST, WO, WT).',
  },
  {
    id: 'bmt-ansoff-matrix',
    code: 'BMT: Ansoff',
    title: 'The Ansoff Matrix',
    shortTitle: 'Ansoff Matrix',
    category: 'bmt',
    categoryLabel: 'Business Management Toolkit',
    description: 'Market penetration, product development, market development, and diversification with associated commercial risk tiers.',
  },
  {
    id: 'bmt-steeple-analysis',
    code: 'BMT: STEEPLE',
    title: 'STEEPLE Analysis',
    shortTitle: 'STEEPLE Analysis',
    category: 'bmt',
    categoryLabel: 'Business Management Toolkit',
    description: 'Macro-environmental assessment: Social, Technological, Economic, Environmental, Political, Legal, and Ethical external forces.',
  },
  {
    id: 'bmt-toolkit',
    code: 'BMT: Toolkit',
    title: 'BMT Toolkit Master & Core Tools',
    shortTitle: 'BMT Core Tools',
    category: 'bmt',
    categoryLabel: 'Business Management Toolkit',
    description: 'Core Standard Level toolkit tools including BCG Matrix, decision trees, circular business models, and matrix selection rubrics.',
  },
  {
    id: 'bmt-business-plan',
    code: 'BMT: Plan',
    title: 'BMT Business Plans',
    shortTitle: 'Business Plans',
    category: 'bmt',
    categoryLabel: 'Business Management Toolkit',
    description: 'Structure, elements, financial forecasts, executive summaries, risk assessments, and investor evaluation of business plans.',
  },
  {
    id: 'bmt-descriptive-statistics',
    code: 'BMT: Stats',
    title: 'BMT Descriptive Statistics',
    shortTitle: 'Descriptive Stats',
    category: 'bmt',
    categoryLabel: 'Business Management Toolkit',
    description: 'Measures of central tendency (mean, median, mode), quartiles, IQR, box-and-whisker plots, and standard deviation for business decisions.',
  },
];

export interface ContentGroupPreset {
  id: string;
  name: string;
  shortBadge: string;
  description: string;
  subunits: SyllabusSubunit[];
}

export const PRESET_CONTENT_GROUPS: ContentGroupPreset[] = [
  {
    id: 'all',
    name: 'Full Syllabus (Unit 1, Unit 2 & BMT)',
    shortBadge: 'All 16 Topics',
    description: 'Comprehensive test across Unit 1 Business Management, Unit 2 Finance, and the Business Management Toolkit.',
    subunits: ALL_CONTENT_TOPICS.map((t) => t.id),
  },
  {
    id: 'unit2-all',
    name: 'Unit 2 - Finance (All 4 Modules)',
    shortBadge: 'Unit 2: Finance',
    description: 'All 4 chapters of Unit 2 Finance: CapEx/RevEx, sources of finance, costs & revenues, and final accounts.',
    subunits: [
      '3.1-intro-to-finance',
      '3.2-sources-of-finance',
      '3.3-costs-and-revenues',
      '3.4-final-accounts',
    ],
  },
  {
    id: 'unit1-all',
    name: 'Unit 1 - Business Management (1.1–1.6)',
    shortBadge: 'Unit 1: Business Mgt',
    description: 'All 6 chapters of Unit 1 Introduction to Business Management.',
    subunits: [
      '1.1-what-is-a-business',
      '1.2-types-of-business-entities',
      '1.3-business-objectives',
      '1.4-stakeholders',
      '1.5-growth-and-evolution',
      '1.6-multinational-companies',
    ],
  },
  {
    id: 'unit1-foundations',
    name: 'Unit 1 Foundations (1.1–1.3)',
    shortBadge: '1.1–1.3 Core',
    description: 'Core fundamentals: Business nature, legal forms of ownership, and strategic business objectives.',
    subunits: [
      '1.1-what-is-a-business',
      '1.2-types-of-business-entities',
      '1.3-business-objectives',
    ],
  },
  {
    id: 'unit1-scale-global',
    name: 'Scale & Global Operations (1.4–1.6)',
    shortBadge: '1.4–1.6 Scale',
    description: 'Stakeholder dynamics, economies of scale, cost structures, and multinational companies.',
    subunits: [
      '1.4-stakeholders',
      '1.5-growth-and-evolution',
      '1.6-multinational-companies',
    ],
  },
  {
    id: 'bmt-all',
    name: 'Full BM Toolkit (All 6 Tools)',
    shortBadge: 'All BMT Tools',
    description: 'All 6 toolkit tools: SWOT, Ansoff, STEEPLE, BMT Core, Business Plans, and Descriptive Statistics.',
    subunits: [
      'bmt-swot-analysis',
      'bmt-ansoff-matrix',
      'bmt-steeple-analysis',
      'bmt-toolkit',
      'bmt-business-plan',
      'bmt-descriptive-statistics',
    ],
  },
  {
    id: 'bmt-matrices',
    name: 'Strategic Matrices (SWOT, Ansoff, STEEPLE)',
    shortBadge: 'Matrices Only',
    description: 'The core qualitative decision frameworks: SWOT, Ansoff matrix, and STEEPLE macro-analysis.',
    subunits: [
      'bmt-swot-analysis',
      'bmt-ansoff-matrix',
      'bmt-steeple-analysis',
    ],
  },
];

/**
 * Counts questions available for a given list of subunits.
 */
export function getQuestionCountsForSubunits(subunits: SyllabusSubunit[]) {
  const subunitSet = new Set<string>(subunits);
  // Also treat '1.5-economies-of-scale' as matched if '1.5-growth-and-evolution' is in set
  if (subunitSet.has('1.5-growth-and-evolution')) {
    subunitSet.add('1.5-economies-of-scale');
  }

  const mcq = MCQ_QUESTIONS.filter((q) => subunitSet.has(q.subunit)).length;
  const twoMark = TWO_MARK_QUESTIONS.filter((q) => subunitSet.has(q.subunit)).length;
  const fourMark = FOUR_MARK_QUESTIONS.filter((q) => subunitSet.has(q.subunit)).length;
  const sixMark = SIX_MARK_QUESTIONS.filter((q) => subunitSet.has(q.subunit)).length;

  return {
    mcq,
    twoMark,
    fourMark,
    sixMark,
    total: mcq + twoMark + fourMark + sixMark,
  };
}

/**
 * Helper to get metadata for a specific subunit ID.
 */
export function getTopicMeta(subunitId: string): ContentTopicMeta | undefined {
  return ALL_CONTENT_TOPICS.find(
    (t) => t.id === subunitId || (subunitId === '1.5-economies-of-scale' && t.id === '1.5-growth-and-evolution')
  );
}
