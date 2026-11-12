import {
  MCQQuestion,
  TwoMarkQuestion,
  FourMarkQuestion,
  SixMarkQuestion,
  DefinitionItem,
  DistinctionItem,
  GoldenMatrixRule,
} from '@/types/curriculum';

// Unit 3.5 questions and cram content. Source: Hoang (2022), Chapter 18, pp.273-286.
const S = '3.5-profitability-and-liquidity-ratios' as const;

// ----------------------------------------------------
// MCQs
// ----------------------------------------------------
export const MCQ_3_5: MCQQuestion[] = [
  {
    id: 'mcq-3.5-01',
    subunit: S,
    topicTag: 'Gross Profit Margin',
    questionNumber: 1,
    question: 'A business has a gross profit of $120 million from sales revenue of $200 million. What is its gross profit margin?',
    options: [
      { key: 'A', text: '40%' },
      { key: 'B', text: '60%' },
      { key: 'C', text: '166.7%' },
      { key: 'D', text: '80%' },
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'GPM = Gross profit / Sales revenue × 100 = 120 / 200 × 100 = 60% (p.275). For every $100 of sales, $60 is gross profit.',
      distractorAnalysis: 'A (40%) is the share taken by cost of goods sold. C inverts the formula (200 / 120). D has no basis in the data.',
    },
  },
  {
    id: 'mcq-3.5-02',
    subunit: S,
    topicTag: 'ROCE',
    questionNumber: 2,
    question: 'Dan & Glover has a gross profit of $150m, expenses of $30m and capital employed of $400m. What is its ROCE?',
    options: [
      { key: 'A', text: '37.5%' },
      { key: 'B', text: '7.5%' },
      { key: 'C', text: '30%' },
      { key: 'D', text: '45%' },
    ],
    correctAnswer: 'C',
    explanation: {
      correctRationale: 'Profit = 150 - 30 = $120m. ROCE = 120 / 400 × 100 = 30% (Question 18.3, p.279).',
      distractorAnalysis: 'A uses gross profit (150 / 400) instead of profit after expenses. B uses expenses only. D adds expenses to gross profit.',
    },
  },
  {
    id: 'mcq-3.5-03',
    subunit: S,
    topicTag: 'Capital Employed',
    questionNumber: 3,
    question: 'How is capital employed calculated?',
    options: [
      { key: 'A', text: 'Current assets + Non-current assets' },
      { key: 'B', text: 'Non-current liabilities + Equity' },
      { key: 'C', text: 'Current assets - Current liabilities' },
      { key: 'D', text: 'Share capital - Retained earnings' },
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'Capital employed = Non-current liabilities + Equity, i.e. all long-term sources of finance (p.278).',
      distractorAnalysis: 'A is total assets. C is working capital. D subtracts retained earnings, which are actually part of equity.',
    },
  },
  {
    id: 'mcq-3.5-04',
    subunit: S,
    topicTag: 'Current Ratio',
    questionNumber: 4,
    question: 'Bjorn Bowls has cash $50,000, debtors $35,000, stocks $45,000, overdrafts $15,000, tax owed $25,000 and trade creditors $50,000. What is its current ratio?',
    options: [
      { key: 'A', text: '0.94:1' },
      { key: 'B', text: '1.44:1' },
      { key: 'C', text: '2.00:1' },
      { key: 'D', text: '2.60:1' },
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'Current assets = 50,000 + 35,000 + 45,000 = $130,000. Current liabilities = 15,000 + 25,000 + 50,000 = $90,000. 130,000 / 90,000 = 1.44:1 (Question 18.4, p.280).',
      distractorAnalysis: 'A is the acid test ratio (stock removed). C omits tax from current liabilities (130 / 65 = 2.00). D uses only trade creditors as liabilities.',
    },
  },
  {
    id: 'mcq-3.5-05',
    subunit: S,
    topicTag: 'Acid Test Ratio',
    questionNumber: 5,
    question: 'Why is the acid test ratio often considered more meaningful than the current ratio?',
    options: [
      { key: 'A', text: 'It includes non-current assets' },
      { key: 'B', text: 'It ignores stock, which is not always easily converted into cash' },
      { key: 'C', text: 'It uses profit before interest and tax' },
      { key: 'D', text: 'It ignores debtors, which might become bad debts' },
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'The acid test ratio removes stock because not all stocks are highly liquid, e.g. work-in-progress or Boeing aircraft cannot be sold quickly at a good price (p.280).',
      distractorAnalysis: 'A: neither liquidity ratio uses non-current assets. C: PBIT is used in profitability ratios. D: debtors are included in the acid test ratio.',
    },
  },
  {
    id: 'mcq-3.5-06',
    subunit: S,
    topicTag: 'GPM vs Profit Margin',
    questionNumber: 6,
    question: 'A firm cuts its price. Sales rise from $1,000 to $1,200, COGS rises from $600 to $740, and indirect costs stay at $300. What happens to its ratios?',
    options: [
      { key: 'A', text: 'GPM rises; profit margin falls' },
      { key: 'B', text: 'Both GPM and profit margin fall' },
      { key: 'C', text: 'GPM falls from 40.0% to 38.3%; profit margin rises from 10.0% to 13.3%' },
      { key: 'D', text: 'Both GPM and profit margin rise' },
    ],
    correctAnswer: 'C',
    explanation: {
      correctRationale: 'Gross profit goes 400 to 460 (GPM 40.0% to 38.3%). Profit goes 100 to 160 (profit margin 10.0% to 13.3%) because indirect costs are constant while sales volume rose (Textbook Exam tip, p.278).',
      distractorAnalysis: 'A reverses the effects. B ignores that fixed indirect costs are spread over more sales. D ignores that the lower price squeezes the gross margin.',
    },
  },
  {
    id: 'mcq-3.5-07',
    subunit: S,
    topicTag: 'Limitations of Ratio Analysis',
    questionNumber: 7,
    question: 'Which of the following is a limitation of financial ratio analysis?',
    options: [
      { key: 'A', text: 'It cannot be used for historical comparisons' },
      { key: 'B', text: 'It ignores qualitative factors such as staff motivation' },
      { key: 'C', text: 'It cannot be used by trade creditors' },
      { key: 'D', text: 'It only uses data from the balance sheet' },
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'Qualitative factors such as staff motivation and customer perceptions of quality are totally ignored in ratio analysis (p.282).',
      distractorAnalysis: 'A: historical comparison is a main use. C: trade creditors use liquidity ratios. D: ratios also use the profit and loss account.',
    },
  },
];

// ----------------------------------------------------
// 2-mark questions
// ----------------------------------------------------
export const TWO_MARK_3_5: TwoMarkQuestion[] = [
  {
    id: 'q2m-3.5-01',
    subunit: S,
    questionNumber: '3.5.1',
    question: 'Define the term quick ratio.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'The quick (acid test) ratio is a liquidity ratio that measures a firm\'s ability to meet its short-term debts. It ignores stock because not all inventories can be easily turned into cash in a short time frame: (Current assets - Stock) / Current liabilities.',
    markBreakdown: [
      { mark: 1, criterion: 'Liquidity ratio measuring ability to meet short-term debts / current liabilities' },
      { mark: 1, criterion: 'Excludes stock because it may not be quickly turned into cash (or gives the formula)' },
    ],
    examinerTips: 'Question 18.6(a), p.283. The reason for excluding stock is what earns the second mark.',
  },
  {
    id: 'q2m-3.5-02',
    subunit: S,
    questionNumber: '3.5.2',
    question: 'Define the term return on capital employed (ROCE).',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'ROCE is a profitability ratio that measures the financial performance of a firm based on the amount of capital invested, calculated as profit before interest and tax / capital employed × 100.',
    markBreakdown: [
      { mark: 1, criterion: 'Profitability ratio measuring performance relative to capital invested' },
      { mark: 1, criterion: 'Formula: PBIT / Capital employed × 100 (capital employed = non-current liabilities + equity)' },
    ],
  },
  {
    id: 'q2m-3.5-03',
    subunit: S,
    questionNumber: '3.5.3',
    question: 'Calculate Dan & Glover\'s ROCE, given gross profit of $150m, expenses of $30m and capital employed of $400m.',
    marks: 2,
    commandTerm: 'Calculate',
    assessmentObjective: 'AO1',
    modelAnswer: 'Profit = $150m - $30m = $120m. ROCE = 120 / 400 × 100 = 30.00%.',
    markBreakdown: [
      { mark: 1, criterion: 'Correct profit figure: $120m (with working)' },
      { mark: 1, criterion: 'Correct ROCE: 30% (with % unit)' },
    ],
    examinerTips: 'Question 18.3(b), p.279. Deduct expenses from gross profit first.',
  },
  {
    id: 'q2m-3.5-04',
    subunit: S,
    questionNumber: '3.5.4',
    question: 'Calculate the current ratio for Bjorn Bowls: cash $50,000, debtors $35,000, overdrafts $15,000, stocks $45,000, tax $25,000, trade creditors $50,000.',
    marks: 2,
    commandTerm: 'Calculate',
    assessmentObjective: 'AO1',
    modelAnswer: 'Current assets = 50,000 + 35,000 + 45,000 = $130,000. Current liabilities = 15,000 + 25,000 + 50,000 = $90,000. Current ratio = 130,000 / 90,000 = 1.44:1.',
    markBreakdown: [
      { mark: 1, criterion: 'Correct totals: current assets $130,000 and current liabilities $90,000' },
      { mark: 1, criterion: 'Correct answer 1.44:1 (two decimal places)' },
    ],
    examinerTips: 'Question 18.4(b), p.280. Tax owed and overdrafts are current liabilities.',
  },
  {
    id: 'q2m-3.5-05',
    subunit: S,
    questionNumber: '3.5.5',
    question: 'Define the term liquid assets.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'Liquid assets are the possessions of a business that can be turned into cash quickly without losing their value, i.e. cash, stocks and debtors.',
    markBreakdown: [
      { mark: 1, criterion: 'Possessions that can be turned into cash quickly without losing value' },
      { mark: 1, criterion: 'Examples: cash, stocks, debtors' },
    ],
  },
  {
    id: 'q2m-3.5-06',
    subunit: S,
    questionNumber: '3.5.6',
    question: 'Outline why profit before interest and tax is used to calculate the profit margin.',
    marks: 2,
    commandTerm: 'Outline',
    assessmentObjective: 'AO1',
    modelAnswer: 'Interest rates and tax rates fluctuate over time and are beyond the control of the business. Using profit before interest and tax removes these distortions, allowing fair historical comparisons of underlying performance.',
    markBreakdown: [
      { mark: 1, criterion: 'Interest and tax rates change and are outside the firm\'s control' },
      { mark: 1, criterion: 'So PBIT allows valid historical comparison of underlying performance' },
    ],
  },
];

// ----------------------------------------------------
// 4-mark questions
// ----------------------------------------------------
export const FOUR_MARK_3_5: FourMarkQuestion[] = [
  {
    id: 'q4m-3.5-01',
    subunit: S,
    questionNumber: 'Question 18.1(b)',
    question: 'Calculate the GPM and the profit margin ratios for JKL Ltd. in both years (show all your working).',
    caseStimulus: 'JKL Ltd. (figures in $\'000s). Year 2: sales revenue 1,000, cost of goods sold 500, profit before interest and tax 400. Year 1: sales revenue 850, cost of goods sold 350, profit before interest and tax 360.',
    contextTitle: 'JKL Ltd. Profit Margins',
    marks: 4,
    commandTerm: 'Calculate',
    assessmentObjective: 'AO2',
    peelModelAnswer: {
      point1: {
        title: 'Gross Profit Margin',
        point: 'GPM = Gross profit / Sales revenue × 100, where gross profit = sales revenue - COGS.',
        evidence: 'Year 2: (1,000 - 500) / 1,000 × 100 = 50.00%. Year 1: (850 - 350) / 850 × 100 = 58.82%.',
        explanation: 'COGS rose by 42.9% while sales rose by only 17.6%, so each dollar of sales generated less gross profit.',
        link: 'JKL\'s GPM therefore fell by 8.82 percentage points, signalling weaker control of direct costs or lower prices.',
      },
      point2: {
        title: 'Profit Margin',
        point: 'Profit margin = Profit before interest and tax / Sales revenue × 100.',
        evidence: 'Year 2: 400 / 1,000 × 100 = 40.00%. Year 1: 360 / 850 × 100 = 42.35%.',
        explanation: 'The profit margin fell less than the GPM because expenses fell from $140k to $100k.',
        link: 'The narrower gap between GPM and profit margin shows JKL improved overhead control even though gross margins weakened.',
      },
    },
    rubricChecklist: [
      { id: 'q4m-3.5-01-c1', criterion: 'Correct GPM Year 2: 50.00% with working', mark: 1 },
      { id: 'q4m-3.5-01-c2', criterion: 'Correct GPM Year 1: 58.82% with working', mark: 1 },
      { id: 'q4m-3.5-01-c3', criterion: 'Correct profit margin Year 2: 40.00% with working', mark: 1 },
      { id: 'q4m-3.5-01-c4', criterion: 'Correct profit margin Year 1: 42.35% with working', mark: 1 },
    ],
    scrambledSentences: [
      { id: 'q4m-3.5-01-s1', type: 'point', text: 'The GPM is gross profit (sales revenue minus COGS) divided by sales revenue, multiplied by 100.', order: 1 },
      { id: 'q4m-3.5-01-s2', type: 'evidence', text: 'JKL\'s GPM fell from 500 / 850 = 58.82% in Year 1 to 500 / 1,000 = 50.00% in Year 2.', order: 2 },
      { id: 'q4m-3.5-01-s3', type: 'explanation', text: 'This is because COGS grew faster than sales, so less gross profit was earned per dollar of sales.', order: 3 },
      { id: 'q4m-3.5-01-s4', type: 'link', text: 'The profit margin fell only from 42.35% to 40.00%, because expenses fell from $140k to $100k, showing better overhead control.', order: 4 },
    ],
  },
  {
    id: 'q4m-3.5-02',
    subunit: S,
    questionNumber: 'Question 18.5(a)',
    question: 'Calculate the current ratio and the acid test ratio for JKL Ltd. for both years.',
    caseStimulus: 'JKL Ltd. (figures in $\'000s). Year 2: cash 200, debtors 150, stock 350 (current assets 700); current liabilities 300. Year 1: cash 50, debtors 200, stock 250 (current assets 500); current liabilities 200.',
    contextTitle: 'JKL Ltd. Liquidity Position',
    marks: 4,
    commandTerm: 'Calculate',
    assessmentObjective: 'AO2',
    peelModelAnswer: {
      point1: {
        title: 'Current Ratio',
        point: 'Current ratio = Current assets / Current liabilities.',
        evidence: 'Year 2: 700 / 300 = 2.33:1. Year 1: 500 / 200 = 2.50:1.',
        explanation: 'JKL has over $2 of current assets for every $1 of short-term debt, above the 1.5 to 2.0 guideline.',
        link: 'It can comfortably pay its current liabilities, though it may be holding too much stock or cash.',
      },
      point2: {
        title: 'Acid Test Ratio',
        point: 'Acid test ratio = (Current assets - Stock) / Current liabilities.',
        evidence: 'Year 2: (700 - 350) / 300 = 1.17:1. Year 1: (500 - 250) / 200 = 1.25:1.',
        explanation: 'Even without stock, JKL\'s liquid assets exceed its current liabilities, above the 1:1 guideline.',
        link: 'Both ratios fell slightly, so liquidity is healthy but should be monitored, especially the rise in stock from 250 to 350.',
      },
    },
    rubricChecklist: [
      { id: 'q4m-3.5-02-c1', criterion: 'Current ratio Year 2: 2.33:1', mark: 1 },
      { id: 'q4m-3.5-02-c2', criterion: 'Current ratio Year 1: 2.50:1', mark: 1 },
      { id: 'q4m-3.5-02-c3', criterion: 'Acid test ratio Year 2: 1.17:1', mark: 1 },
      { id: 'q4m-3.5-02-c4', criterion: 'Acid test ratio Year 1: 1.25:1', mark: 1 },
    ],
    scrambledSentences: [
      { id: 'q4m-3.5-02-s1', type: 'point', text: 'The current ratio divides current assets by current liabilities; the acid test ratio removes stock first.', order: 1 },
      { id: 'q4m-3.5-02-s2', type: 'evidence', text: 'JKL\'s current ratio fell from 2.50:1 to 2.33:1 and its acid test ratio fell from 1.25:1 to 1.17:1.', order: 2 },
      { id: 'q4m-3.5-02-s3', type: 'explanation', text: 'Both ratios stay above their guidelines (1.5 to 2.0 and 1:1), so JKL can meet its short-term debts.', order: 3 },
      { id: 'q4m-3.5-02-s4', type: 'link', text: 'However, the rise in stock from $250k to $350k suggests JKL should watch for excess stock tying up working capital.', order: 4 },
    ],
  },
];

// ----------------------------------------------------
// 6-mark question
// ----------------------------------------------------
export const SIX_MARK_3_5: SixMarkQuestion[] = [
  {
    id: 'q6m-3.5-01',
    subunit: S,
    questionNumber: 'Question 18.6',
    question: 'Using financial ratio analysis, examine the relative attractiveness of Howald-Lee & Co. and Quintanilla Inc. to potential investors.',
    caseStimulus: 'Ratios over three years (Year 1, Year 2, Year 3).\nGross profit margin (%): Howald-Lee 50, 45, 40; Quintanilla 50, 40, 45.\nProfit margin (%): Howald-Lee 20, 20, 20; Quintanilla 19, 18, 20.\nROCE (%): Howald-Lee 15, 13, 14; Quintanilla 12, 10, 15.\nQuick ratio: Howald-Lee 2.5, 2.2, 1.5; Quintanilla 1.5, 1.9, 1.1.',
    contextTitle: 'Howald-Lee & Co. vs Quintanilla Inc.',
    marks: 6,
    commandTerm: 'Examine',
    assessmentObjective: 'AO2/AO3',
    levelBreakdown: [
      { range: '1-2', descriptor: 'Lists or restates ratios with little interpretation of trends or relevance to investors.' },
      { range: '3-4', descriptor: 'Interprets profitability and liquidity trends for both firms, but comparison or evaluation is limited.' },
      { range: '5-6', descriptor: 'Balanced comparison of trends across several ratios for both firms, with limitations of the data and a reasoned judgement for investors.' },
    ],
    perspective1: {
      title: 'Case for Howald-Lee & Co.',
      points: [
        { subPoint: 'Stable profit margin and consistent ROCE', elaboration: 'Howald-Lee\'s profit margin is a steady 20% in all three years and its ROCE has stayed between 13% and 15%, so returns are predictable. Its GPM fell from 50% to 40% while its profit margin held, meaning it cut expenses to protect profit.' },
        { subPoint: 'Stronger but declining liquidity', elaboration: 'Its quick ratio is above 1:1 throughout (2.5, 2.2, 1.5). The early figures suggest idle cash, but the steady fall is a trend investors should watch.' },
      ],
    },
    perspective2: {
      title: 'Case for Quintanilla Inc.',
      points: [
        { subPoint: 'Improving profitability momentum', elaboration: 'Quintanilla\'s ROCE rose from 10% to 15% in Year 3, overtaking Howald-Lee (14%), and its GPM recovered from 40% to 45% while its profit margin reached 20%. This upward trend may promise better future returns.' },
        { subPoint: 'Weaker liquidity', elaboration: 'Its quick ratio fell from 1.9 to 1.1 in Year 3, only just above the 1:1 guideline, so it has less safety margin against a liquidity crisis.' },
      ],
    },
    synthesisAndEvaluation: 'Quintanilla looks more attractive to an investor seeking higher returns, as its Year 3 ROCE (15%) is the higher of the two and still rising, but it carries more liquidity risk. Howald-Lee suits a risk-averse investor because of its stable margins and stronger liquidity. Ratios are historical, so the judgement also depends on missing information: industry averages, future plans, the state of the economy, the interest rate available on bank deposits, and qualitative factors such as management quality and brand reputation.',
    rubricChecklist: [
      { id: 'q6m-3.5-01-c1', criterion: 'Accurate interpretation of profitability trends (GPM, profit margin, ROCE) for both firms', marks: 2 },
      { id: 'q6m-3.5-01-c2', criterion: 'Accurate interpretation of liquidity (quick ratio) trends and risk', marks: 2 },
      { id: 'q6m-3.5-01-c3', criterion: 'Reasoned judgement for investors, noting limitations / missing information', marks: 2 },
    ],
  },
];

// ----------------------------------------------------
// Cram mode
// ----------------------------------------------------
export const CRAM_DEFINITIONS_3_5: DefinitionItem[] = [
  {
    id: 'def-3.5-01',
    term: 'Ratio Analysis',
    subunit: S,
    definition: 'A quantitative management tool that compares different financial figures to examine and judge the financial performance of a business (p.286).',
    keyExamTokens: ['quantitative tool', 'compares financial figures', 'judge financial performance'],
    formulaOrExample: 'Compared historically (trends) and inter-firm (rivals in the same industry)',
  },
  {
    id: 'def-3.5-02',
    term: 'Gross Profit Margin (GPM)',
    subunit: S,
    definition: 'A profitability ratio that shows gross profit as a percentage of sales revenue (p.286).',
    keyExamTokens: ['gross profit', 'percentage of sales revenue'],
    formulaOrExample: 'GPM = Gross profit / Sales revenue × 100. E.g. 120 / 200 × 100 = 60%',
  },
  {
    id: 'def-3.5-03',
    term: 'Profit Margin',
    subunit: S,
    definition: 'The percentage of sales revenue that turns into profit, i.e. what is left after all direct and indirect costs have been paid (p.286).',
    keyExamTokens: ['percentage of sales revenue', 'after direct and indirect costs', 'PBIT'],
    formulaOrExample: 'Profit margin = Profit before interest and tax / Sales revenue × 100',
  },
  {
    id: 'def-3.5-04',
    term: 'Return on Capital Employed (ROCE)',
    subunit: S,
    definition: 'A profitability ratio that measures financial performance based on the amount of capital invested (p.286).',
    keyExamTokens: ['capital invested', 'key ratio', 'beat bank interest rate'],
    formulaOrExample: 'ROCE = PBIT / Capital employed × 100. Dan & Glover: 120 / 400 × 100 = 30%',
  },
  {
    id: 'def-3.5-05',
    term: 'Capital Employed',
    subunit: S,
    definition: 'The value of all long-term sources of finance: non-current liabilities plus equity (p.286).',
    keyExamTokens: ['long-term sources of finance', 'non-current liabilities', 'equity'],
    formulaOrExample: 'Capital employed = Non-current liabilities + Equity',
  },
  {
    id: 'def-3.5-06',
    term: 'Current Ratio',
    subunit: S,
    definition: 'A short-term liquidity ratio that calculates the ability of a business to meet its debts within the next twelve months (p.286).',
    keyExamTokens: ['short-term liquidity', 'debts within twelve months', '1.5 to 2.0'],
    formulaOrExample: 'Current ratio = Current assets / Current liabilities. E.g. 300,000 / 120,000 = 2.5',
  },
  {
    id: 'def-3.5-07',
    term: 'Acid Test (Quick) Ratio',
    subunit: S,
    definition: 'A liquidity ratio measuring a firm\'s ability to meet its short-term debts. It ignores stock because not all inventories can be easily turned into cash in a short time frame (p.286).',
    keyExamTokens: ['ignores stock', 'short-term debts', 'at least 1:1'],
    formulaOrExample: 'Acid test = (Current assets - Stock) / Current liabilities',
  },
  {
    id: 'def-3.5-08',
    term: 'Liquid Assets',
    subunit: S,
    definition: 'Possessions of a business that can be turned into cash quickly without losing their value, i.e. cash, stocks and debtors (p.286).',
    keyExamTokens: ['turned into cash quickly', 'without losing value', 'cash, stocks, debtors'],
  },
  {
    id: 'def-3.5-09',
    term: 'Liquidity Crisis',
    subunit: S,
    definition: 'A situation where a firm is unable to pay its short-term debts, i.e. current liabilities exceed current assets (p.286).',
    keyExamTokens: ['unable to pay short-term debts', 'current liabilities exceed current assets'],
  },
  {
    id: 'def-3.5-10',
    term: 'Working Capital',
    subunit: S,
    definition: 'The numerical difference between current assets and current liabilities (p.279).',
    keyExamTokens: ['current assets minus current liabilities', 'negative working capital can cause bankruptcy'],
    formulaOrExample: 'Working capital = Current assets - Current liabilities',
  },
];

export const CRAM_DISTINCTIONS_3_5: DistinctionItem[] = [
  {
    id: 'dist-3.5-01',
    conceptA: 'Gross Profit Margin (GPM)',
    conceptB: 'Profit Margin',
    comparisonCriteria: 'Costs accounted for',
    contrastStatement: 'The **GPM** only accounts for direct costs (cost of sales); the **profit margin** uses PBIT so it accounts for both direct costs and expenses (indirect costs), making it a better measure of profitability. The gap between the two represents expenses.',
    examTrapWarning: 'A price cut can lower the GPM yet raise the profit margin if higher sales volume spreads constant indirect costs (40.0% to 38.3% GPM, 10.0% to 13.3% profit margin).',
  },
  {
    id: 'dist-3.5-02',
    conceptA: 'Current Ratio',
    conceptB: 'Acid Test (Quick) Ratio',
    comparisonCriteria: 'Treatment of stock and benchmark',
    contrastStatement: 'The **current ratio** uses all current assets (benchmark 1.5 to 2.0); the **acid test ratio** removes stock because it may not be quickly converted to cash (benchmark at least 1:1).',
    examTrapWarning: 'Too high is also a problem: idle cash, too many debtors (bad debt risk) or too much stock (storage and insurance costs).',
  },
  {
    id: 'dist-3.5-03',
    conceptA: 'Historical Comparisons',
    conceptB: 'Inter-firm Comparisons',
    comparisonCriteria: 'What is compared',
    contrastStatement: '**Historical** comparisons look at the same ratio for the same business over time (trends); **inter-firm** comparisons look at the same ratios across businesses in the same industry (relative performance).',
    examTrapWarning: 'Inter-firm comparisons are only valid like-for-like: similar size, same industry, similar accounting policies.',
  },
];

export const CRAM_GOLDEN_RULES_3_5: GoldenMatrixRule[] = [
  {
    id: 'rule-3.5-01',
    ruleTitle: 'Finance Rule: Formula, Working, Unit, Two Decimals',
    category: 'Finance',
    corePrinciple: 'Every ratio answer must show the formula, substitution and answer with the correct unit (% for GPM, profit margin, ROCE; :1 for current and acid test), to two decimal places unless told otherwise.',
    actionProtocol: 'Use PBIT (not net profit after tax) for profit margin and ROCE; use non-current liabilities + equity for capital employed; include tax owed and overdrafts in current liabilities.',
    examApplicationTip: 'Never stop at the number. Interpret it against a benchmark (1.5 to 2.0, 1:1, bank interest rate) and the previous year.',
  },
  {
    id: 'rule-3.5-02',
    ruleTitle: 'Finance Rule: Profit Is Not Liquidity',
    category: 'Finance',
    corePrinciple: 'Financial health needs profitability, liquidity and efficiency together. Lack of working capital is the single largest cause of business failure.',
    actionProtocol: 'When evaluating, look across both ratio families and ask what data are missing: industry averages, objectives, the economy, qualitative factors.',
    examApplicationTip: 'In 10-mark ratio questions, weigh higher returns against liquidity risk, then add limitations (historical data, accounting policies, window dressing) before judging.',
  },
];
