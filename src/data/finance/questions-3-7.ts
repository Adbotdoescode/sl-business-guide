import {
  MCQQuestion,
  TwoMarkQuestion,
  FourMarkQuestion,
  SixMarkQuestion,
  DefinitionItem,
  DistinctionItem,
  GoldenMatrixRule,
} from '@/types/curriculum';

// Unit 3.7 Cash Flow questions. Based on Paul Hoang, Business Management (5th ed.), Chapter 20.

const S = '3.7-cash-flow' as const;

// ----------------------------------------------------
// MCQs
// ----------------------------------------------------
export const MCQ_3_7: MCQQuestion[] = [
  {
    id: 'mcq-3.7-01',
    subunit: S,
    topicTag: 'Closing Balance Formula',
    questionNumber: 1,
    question: 'Which formula correctly calculates the closing balance in a cash flow forecast?',
    options: [
      { key: 'A', text: 'Closing balance = Cash inflows - Cash outflows' },
      { key: 'B', text: 'Closing balance = Opening balance + Net cash flow' },
      { key: 'C', text: 'Closing balance = Total revenue - Total cost' },
      { key: 'D', text: 'Closing balance = Opening balance - Cash inflows' },
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'The textbook (p.302) states Closing balance = Opening balance + Net cash flow.',
      distractorAnalysis: 'A is net cash flow, not the closing balance; C is profit; D has no meaning in a forecast.',
    },
  },
  {
    id: 'mcq-3.7-02',
    subunit: S,
    topicTag: 'Profit vs Cash',
    questionNumber: 2,
    question: 'A firm sells $50,000 of goods in a month. 60% of customers pay by cash and the rest on 30 days credit. What is the cash inflow from sales this month?',
    options: [
      { key: 'A', text: '$20,000' },
      { key: 'B', text: '$30,000' },
      { key: 'C', text: '$50,000' },
      { key: 'D', text: '$80,000' },
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: '60% x $50,000 = $30,000 is received this month (p.299). The other $20,000 arrives at the end of the credit period.',
      distractorAnalysis: 'A is the credit portion; C is sales revenue, not cash inflow; D adds unrelated figures.',
    },
  },
  {
    id: 'mcq-3.7-03',
    subunit: S,
    topicTag: 'Completing a Forecast',
    questionNumber: 3,
    question: 'In November, a firm has total cash outflows of $2,700 and net cash flow of $300. What were its cash inflows?',
    options: [
      { key: 'A', text: '$2,400' },
      { key: 'B', text: '$2,700' },
      { key: 'C', text: '$3,000' },
      { key: 'D', text: '$3,300' },
    ],
    correctAnswer: 'C',
    explanation: {
      correctRationale: 'Cash inflows = outflows + net cash flow = $2,700 + $300 = $3,000 (worked example, p.303).',
      distractorAnalysis: 'A subtracts the net cash flow; B ignores it; D double counts it.',
    },
  },
  {
    id: 'mcq-3.7-04',
    subunit: S,
    topicTag: 'Causes of Cash Flow Problems',
    questionNumber: 4,
    question: 'A business accepts more orders than it has the capacity to handle, paying production costs long before revenue arrives. This is known as:',
    options: [
      { key: 'A', text: 'Overstocking' },
      { key: 'B', text: 'Over borrowing' },
      { key: 'C', text: 'Overtrading' },
      { key: 'D', text: 'Debt factoring' },
    ],
    correctAnswer: 'C',
    explanation: {
      correctRationale: 'Overtrading is expanding too quickly without sufficient resources, usually by accepting too many orders (p.307).',
      distractorAnalysis: 'A is holding too much stock; B is excessive external finance raising interest payments; D is a solution, not a cause.',
    },
  },
  {
    id: 'mcq-3.7-05',
    subunit: S,
    topicTag: 'Strategies: Improving Inflows',
    questionNumber: 5,
    question: 'Which strategy improves cash flow by increasing cash inflows rather than reducing outflows?',
    options: [
      { key: 'A', text: 'Leasing machinery instead of buying it' },
      { key: 'B', text: 'Negotiating preferential credit terms with suppliers' },
      { key: 'C', text: 'Tighter credit control on customers' },
      { key: 'D', text: 'Using just-in-time stock control' },
    ],
    correctAnswer: 'C',
    explanation: {
      correctRationale: 'Tighter credit control means cash from customers is received sooner, improving inflows (Table 20.2, p.310).',
      distractorAnalysis: 'A, B and D are all methods of reducing (or delaying) cash outflows.',
    },
  },
  {
    id: 'mcq-3.7-06',
    subunit: S,
    topicTag: 'Investment and Cash Flow',
    questionNumber: 6,
    question: 'What is the most likely short-term effect when a business purchases a new machine (investment)?',
    options: [
      { key: 'A', text: 'Cash flow falls, though profits may improve in the future' },
      { key: 'B', text: 'Cash flow and profits both rise immediately' },
      { key: 'C', text: 'Cash flow rises because assets increase' },
      { key: 'D', text: 'Profit is guaranteed to rise in the future' },
    ],
    correctAnswer: 'A',
    explanation: {
      correctRationale: 'Buying an asset causes a fall in cash flow, although this can improve profits in the future (p.306).',
      distractorAnalysis: 'B and C ignore the cash outflow; D is wrong because investment does not guarantee profit (Google lost over $9bn on Motorola).',
    },
  },
  {
    id: 'mcq-3.7-07',
    subunit: S,
    topicTag: 'Forecast vs Statement',
    questionNumber: 7,
    question: 'Which statement about cash flow forecasts and cash flow statements is correct?',
    options: [
      { key: 'A', text: 'A forecast shows profitability; a statement shows liquidity' },
      { key: 'B', text: 'A statement records actual cash flows; a forecast predicts future cash flows' },
      { key: 'C', text: 'Both record actual historical cash flows' },
      { key: 'D', text: 'A forecast must cover at least 12 months' },
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'A cash flow statement records actual inflows and outflows; a forecast is a prediction (Textbook Exam tip, p.302).',
      distractorAnalysis: 'A is wrong: neither shows profitability (that is the P&L account); C ignores the forecast being a prediction; D is false as forecasts tend to cover the immediate, foreseeable future.',
    },
  },
];

// ----------------------------------------------------
// 2-mark questions
// ----------------------------------------------------
export const TWO_MARK_3_7: TwoMarkQuestion[] = [
  {
    id: 'q2m-3.7-01',
    subunit: S,
    questionNumber: '3.7.1',
    question: 'Define the term cash flow forecast.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'A cash flow forecast is a financial tool used to show the expected movement of cash into and out of a business, for a given period of time (p.314).',
    markBreakdown: [
      { mark: 1, criterion: 'Refers to the expected / predicted movement of cash into and out of a business' },
      { mark: 1, criterion: 'For a given (future) period of time' },
    ],
    examinerTips: 'Stress that it is a prediction; an actual record is a cash flow statement.',
  },
  {
    id: 'q2m-3.7-02',
    subunit: S,
    questionNumber: '3.7.2',
    question: 'Define the term cash inflows.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'Cash inflows refer to the cash that comes into a business during a given time period, usually from sales revenue when customers pay for the products they have purchased. They can also come from debtors, bank loans, interest received, sale of fixed assets or rental income (pp.301, 314).',
    markBreakdown: [
      { mark: 1, criterion: 'Cash coming into a business during a given time period' },
      { mark: 1, criterion: 'Gives the main source (sales revenue when customers pay) or another valid source' },
    ],
  },
  {
    id: 'q2m-3.7-03',
    subunit: S,
    questionNumber: '3.7.3',
    question: 'Garima Khurana Enterprises has total cash inflows of MAD135,000 and total cash outflows of MAD103,000. Calculate its net cash flow.',
    marks: 2,
    commandTerm: 'Calculate',
    assessmentObjective: 'AO1',
    modelAnswer: 'Net cash flow = Cash inflows - Cash outflows = MAD135,000 - MAD103,000 = MAD32,000 (positive).',
    markBreakdown: [
      { mark: 1, criterion: 'Correct method: cash inflows minus cash outflows' },
      { mark: 1, criterion: 'Correct answer MAD32,000 with units' },
    ],
    examinerTips: 'Do not add the opening balance (MAD33,000); that gives the closing balance (MAD65,000), not net cash flow.',
  },
  {
    id: 'q2m-3.7-04',
    subunit: S,
    questionNumber: '3.7.4',
    question: 'Define the term working capital cycle.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'The working capital cycle refers to the time between cash outflows for production costs and cash inflows from customers who pay upon receipt of their finished goods and services (p.314).',
    markBreakdown: [
      { mark: 1, criterion: 'Time interval between cash outflows for production costs ...' },
      { mark: 1, criterion: '... and cash inflows from customers for finished goods/services' },
    ],
  },
  {
    id: 'q2m-3.7-05',
    subunit: S,
    questionNumber: '3.7.5',
    question: "Outline a possible reason why profitable firms like Ducie's Dance Studios Ltd. might experience cash flow problems.",
    marks: 2,
    commandTerm: 'Outline',
    assessmentObjective: 'AO1',
    modelAnswer: 'Profit is made when a sale is recorded, but cash is not received until customers pay. Ducie\'s Dance Studios gives 50% of customers one month\'s credit, so revenue counts towards profit while the cash arrives a month later, leaving too little cash to pay costs now.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies a valid reason, e.g. credit sales / poor credit control / rapid expansion / seasonality' },
      { mark: 1, criterion: 'Explains why this means profit is earned before cash is received' },
    ],
  },
  {
    id: 'q2m-3.7-06',
    subunit: S,
    questionNumber: '3.7.6',
    question: 'Define the term bad debts.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'Bad debts exist when debtors are unable to pay their outstanding invoices (bills), which reduces the cash inflows of the vendor, i.e. the firm that sold the products on credit (p.314).',
    markBreakdown: [
      { mark: 1, criterion: 'Debtors are unable to pay outstanding invoices' },
      { mark: 1, criterion: 'Reduces the cash inflows of the firm that sold on credit' },
    ],
  },
];

// ----------------------------------------------------
// 4-mark questions
// ----------------------------------------------------
export const FOUR_MARK_3_7: FourMarkQuestion[] = [
  {
    id: 'q4m-3.7-01',
    subunit: S,
    questionNumber: 'Question 20.6c',
    question: "Construct a cash flow forecast for Ducie's Dance Studios Ltd. for the period April to June, and comment on its cash flow position.",
    caseStimulus: "Marj Ducie runs a profitable dance company. Sales revenue is $12,000 in March, $10,000 in April, $9,000 in May and $11,000 in June. Customers pay 50% in cash and 50% on one month's credit. Direct costs are $5,500 in April, $4,950 in May and $6,100 in June. Indirect costs are $5,000 each month. The opening cash balance in April is $1,000.",
    contextTitle: "Ducie's Dance Studios Ltd. Cash Flow Forecast",
    marks: 4,
    commandTerm: 'Construct',
    assessmentObjective: 'AO2',
    peelModelAnswer: {
      point1: {
        title: 'Cash inflows from cash and credit sales',
        point: "Each month's cash inflow = 50% of this month's sales (cash) + 50% of last month's sales (credit).",
        evidence: 'April = $5,000 + $6,000 = $11,000; May = $4,500 + $5,000 = $9,500; June = $5,500 + $4,500 = $10,000.',
        explanation: "Credit sales are recorded in the month the cash is received, so March's credit sales ($6,000) appear in April.",
        link: 'Outflows are then deducted: April $10,500, May $9,950, June $11,100.',
      },
      point2: {
        title: 'Net cash flow and closing balances',
        point: 'Net cash flow = inflows - outflows; closing balance = opening balance + net cash flow.',
        evidence: 'Net cash flow: April $500, May ($450), June ($1,100). Closing balance: April $1,500, May $1,050, June ($50).',
        explanation: 'Although the firm is profitable, falling sales in May and higher direct costs in June turn net cash flow negative.',
        link: 'The firm faces a small cash deficit of $50 in June, so it may need an overdraft or tighter credit control.',
      },
    },
    rubricChecklist: [
      { id: 'q4m-3.7-01-c1', criterion: 'Correct cash inflows including the one-month credit lag ($11,000, $9,500, $10,000)', mark: 1 },
      { id: 'q4m-3.7-01-c2', criterion: 'Correct total cash outflows ($10,500, $9,950, $11,100)', mark: 1 },
      { id: 'q4m-3.7-01-c3', criterion: 'Correct net cash flow and closing balances (closing June = ($50))', mark: 1 },
      { id: 'q4m-3.7-01-c4', criterion: 'Correct IB layout (opening balance, inflows, outflows, net cash flow, closing balance) with a comment on the position', mark: 1 },
    ],
    scrambledSentences: [
      { id: 'q4m-3.7-01-s1', type: 'point', text: "Cash inflows each month combine 50% of the current month's sales and 50% of the previous month's sales.", order: 1 },
      { id: 'q4m-3.7-01-s2', type: 'evidence', text: 'April inflows are $5,000 + $6,000 = $11,000, against outflows of $5,500 + $5,000 = $10,500.', order: 2 },
      { id: 'q4m-3.7-01-s3', type: 'explanation', text: 'Net cash flow is $500 in April but turns negative to ($450) in May and ($1,100) in June.', order: 3 },
      { id: 'q4m-3.7-01-s4', type: 'link', text: 'Starting from $1,000, the closing balance falls to ($50) in June, so the profitable firm still faces a cash shortage.', order: 4 },
    ],
  },
  {
    id: 'q4m-3.7-02',
    subunit: S,
    questionNumber: 'Question 20.4b',
    question: 'Explain two possible causes of cash flow problems for Wincent Computing Ltd.',
    caseStimulus: 'Morten Wincent has recently opened a computer hardware business in a busy location. He expects most of his customers will purchase products using credit. His forecast shows an overdraft and a negative closing balance in Month 3, and the firm has yet to spend any money on marketing. Wincent Computing Ltd. allows its customers up to 60 days credit, but its suppliers only give the business trade credit of 14 days.',
    contextTitle: 'Wincent Computing Ltd.',
    marks: 4,
    commandTerm: 'Explain',
    assessmentObjective: 'AO2',
    peelModelAnswer: {
      point1: {
        title: 'Poor credit control',
        point: 'One cause is poor credit control: the firm offers customers a prolonged credit period.',
        evidence: 'Wincent gives customers up to 60 days credit but must pay suppliers within 14 days.',
        explanation: 'Cash leaves the business about 46 days before it comes back in, so the firm trades for long periods without sufficient cash inflows, and more credit customers raises the risk of bad debts.',
        link: 'This mismatch explains why Wincent already relies on an overdraft.',
      },
      point2: {
        title: 'Unforeseen changes / optimistic forecasts',
        point: 'A second cause is that actual sales may fall short of the forecast.',
        evidence: 'Wincent admits the forecast is optimistic, and no money has yet been spent on marketing.',
        explanation: 'If sales are lower than expected, cash inflows fall while costs such as wages and expenses must still be paid; future marketing spending would also add to cash outflows.',
        link: 'This would deepen the negative closing balance forecast for Month 3.',
      },
    },
    rubricChecklist: [
      { id: 'q4m-3.7-02-c1', criterion: 'Identifies and explains first cause (e.g. poor credit control)', mark: 1 },
      { id: 'q4m-3.7-02-c2', criterion: 'Applies first cause to Wincent (60 days vs 14 days credit)', mark: 1 },
      { id: 'q4m-3.7-02-c3', criterion: 'Identifies and explains second cause (e.g. inaccurate sales forecast, unforeseen changes)', mark: 1 },
      { id: 'q4m-3.7-02-c4', criterion: 'Applies second cause to Wincent (optimistic forecast, no marketing yet)', mark: 1 },
    ],
    scrambledSentences: [
      { id: 'q4m-3.7-02-s1', type: 'point', text: 'A key cause of cash flow problems for Wincent Computing Ltd. is poor credit control.', order: 1 },
      { id: 'q4m-3.7-02-s2', type: 'evidence', text: 'The firm allows customers up to 60 days credit, yet suppliers must be paid within 14 days.', order: 2 },
      { id: 'q4m-3.7-02-s3', type: 'explanation', text: 'Cash therefore leaves the business weeks before it returns, so the firm trades without sufficient cash inflows.', order: 3 },
      { id: 'q4m-3.7-02-s4', type: 'link', text: 'This mismatch explains the reliance on an overdraft and the negative closing balance in Month 3.', order: 4 },
    ],
  },
];

// ----------------------------------------------------
// 6-mark questions
// ----------------------------------------------------
export const SIX_MARK_3_7: SixMarkQuestion[] = [
  {
    id: 'q6m-3.7-01',
    subunit: S,
    questionNumber: 'Question 20.5d',
    question: "Examine the cash flow position faced by Bereti's Boutique.",
    caseStimulus: "Nicole Bereti is opening a perfume boutique in Vancouver, Canada, in August with $15,000 of personal funds. Forecast sales for August to November are $5,000, $5,800, $7,000 and $9,500; perfume costs are $3,000, $3,480, $3,850 and $4,750. Advertising is $1,500 in the first month and $1,000 thereafter. Four staff each earn $1,200 per month, and other costs average $600 per month. The completed forecast shows: total cash outflows $9,900, $9,880, $10,250 and $11,150; sales minus outflows (excluding the owner's capital) of ($4,900), ($4,080), ($3,250) and ($1,650); closing bank balance $10,100, $6,020, $2,770 and $1,120.",
    contextTitle: "Bereti's Boutique Cash Flow Position",
    marks: 6,
    commandTerm: 'Examine',
    assessmentObjective: 'AO3',
    levelBreakdown: [
      { range: '1-2', descriptor: 'Limited understanding of cash flow; few or no references to the forecast figures.' },
      { range: '3-4', descriptor: 'Some analysis of the cash flow position using forecast data, but one-sided or lacking a judgement.' },
      { range: '5-6', descriptor: 'Balanced examination of strengths and weaknesses of the position, well supported by forecast figures, with a reasoned conclusion.' },
    ],
    perspective1: {
      title: 'Reasons for concern',
      points: [
        {
          subPoint: 'Negative trading cash flow every month',
          elaboration: "Excluding the owner's $15,000 capital, cash outflows exceed sales inflows in all four months, so the boutique is living off its starting funds. The closing balance falls from $10,100 in August to just $1,120 in November.",
        },
        {
          subPoint: 'High fixed outflows and little safety margin',
          elaboration: 'Staffing costs of $4,800 a month are the largest outflow and do not fall if sales disappoint. Forecasts for a new business are based on assumptions; if sales are lower (e.g. poor market research or a new competitor) the balance could turn negative by December.',
        },
      ],
    },
    perspective2: {
      title: 'Reasons for optimism',
      points: [
        {
          subPoint: 'Improving trend',
          elaboration: 'Sales rise from $5,000 to $9,500 and the monthly cash deficit narrows from ($4,900) to ($1,650), suggesting the boutique may reach positive net cash flow soon if growth continues.',
        },
        {
          subPoint: 'Balance stays positive and costs are controllable',
          elaboration: 'The closing balance never goes negative, and advertising falls after launch. Nicole could improve the position by reducing staff hours, negotiating trade credit with perfume suppliers, or arranging an overdraft as a safety net.',
        },
      ],
    },
    synthesisAndEvaluation: "Overall, Bereti's Boutique has a weak but improving cash flow position. It remains liquid only because of Nicole's $15,000 capital, and a closing balance of $1,120 leaves very little buffer for a new business. The improving sales trend is encouraging, but because forecasts are only predictions, Nicole should update the forecast regularly and arrange an overdraft or preferential supplier credit before November in case sales fall short.",
    rubricChecklist: [
      { id: 'q6m-3.7-01-c1', criterion: 'Uses forecast data accurately (e.g. closing balance falling from $10,100 to $1,120)', marks: 2 },
      { id: 'q6m-3.7-01-c2', criterion: 'Balanced analysis of weaknesses and strengths of the cash flow position', marks: 2 },
      { id: 'q6m-3.7-01-c3', criterion: 'Reasoned judgement, ideally with a relevant strategy or reference to forecast limitations', marks: 2 },
    ],
  },
];

// ----------------------------------------------------
// Cram mode
// ----------------------------------------------------
export const CRAM_DEFINITIONS_3_7: DefinitionItem[] = [
  {
    id: 'def-3.7-01',
    term: 'Cash',
    subunit: S,
    definition: 'A current asset representing the actual money a business has, held as cash in hand or cash at bank (p.314).',
    keyExamTokens: ['current asset', 'actual money', 'in hand', 'at bank'],
  },
  {
    id: 'def-3.7-02',
    term: 'Cash Flow Forecast',
    subunit: S,
    definition: 'A financial tool used to show the expected movement of cash into and out of a business, for a given period of time (p.314).',
    keyExamTokens: ['expected movement of cash', 'into and out of', 'given period of time'],
    formulaOrExample: 'Layout: Opening balance, Cash inflows, Cash outflows, Net cash flow, Closing balance',
  },
  {
    id: 'def-3.7-03',
    term: 'Cash Flow Statement',
    subunit: S,
    definition: 'The financial document that records the actual cash inflows and cash outflows of a business during a specified trading period, usually 12 months (p.314).',
    keyExamTokens: ['actual', 'records', 'specified trading period', '12 months'],
  },
  {
    id: 'def-3.7-04',
    term: 'Net Cash Flow',
    subunit: S,
    definition: "The difference between a firm's cash inflows and cash outflows for a given time period, usually per month (p.314).",
    keyExamTokens: ['inflows minus outflows', 'given time period', 'per month'],
    formulaOrExample: 'Net cash flow = Cash inflows - Cash outflows',
  },
  {
    id: 'def-3.7-05',
    term: 'Closing Balance',
    subunit: S,
    definition: 'The amount of cash left in a business at the end of each trading period, as shown in its cash flow forecast or statement (p.314).',
    keyExamTokens: ['cash left', 'end of trading period', "next month's opening balance"],
    formulaOrExample: 'Closing balance = Opening balance + Net cash flow',
  },
  {
    id: 'def-3.7-06',
    term: 'Opening Balance',
    subunit: S,
    definition: 'The value of cash in a business at the beginning of a trading period; it is equal to the closing balance in the previous month (p.314).',
    keyExamTokens: ['beginning of trading period', "previous month's closing balance"],
  },
  {
    id: 'def-3.7-07',
    term: 'Working Capital Cycle',
    subunit: S,
    definition: 'The time between cash outflows for production costs and cash inflows from customers who pay upon receipt of their finished goods and services (p.314).',
    keyExamTokens: ['time interval', 'cash outflows for production', 'cash inflows from customers'],
    formulaOrExample: 'Long cycle: luxury yachts, construction. Short cycle: mobile caterers.',
  },
  {
    id: 'def-3.7-08',
    term: 'Overtrading',
    subunit: S,
    definition: 'When a business attempts to expand too quickly without the sufficient resources to do so, usually by accepting too many orders, thus harming its cash flow (p.314).',
    keyExamTokens: ['expand too quickly', 'insufficient resources', 'too many orders'],
  },
  {
    id: 'def-3.7-09',
    term: 'Credit Control',
    subunit: S,
    definition: 'The process of monitoring and managing debtors, such as ensuring only suitable customers are permitted trade credit and that customers do not exceed the agreed credit period (p.314).',
    keyExamTokens: ['monitoring debtors', 'suitable customers', 'agreed credit period'],
  },
  {
    id: 'def-3.7-10',
    term: 'Bad Debts',
    subunit: S,
    definition: 'Exist when debtors are unable to pay their outstanding invoices, which reduces the cash inflows of the vendor (p.314).',
    keyExamTokens: ['debtors cannot pay', 'outstanding invoices', 'reduces cash inflows'],
  },
  {
    id: 'def-3.7-11',
    term: 'Liquidity',
    subunit: S,
    definition: 'The ability of a business to convert assets into cash quickly without a fall in its value (p.300).',
    keyExamTokens: ['convert assets into cash', 'quickly', 'without loss of value'],
  },
];

export const CRAM_DISTINCTIONS_3_7: DistinctionItem[] = [
  {
    id: 'dist-3.7-01',
    conceptA: 'Profit',
    conceptB: 'Cash Flow',
    comparisonCriteria: 'Timing, Measurement and Financial Statement',
    contrastStatement: '**Profit** = total revenue - total cost and is recorded when a sale is made (shown in the P&L account). **Cash flow** is the actual movement of money in and out, recorded when payment is received or made. Credit sales create profit before cash.',
    examTrapWarning: 'A positive net cash flow does not mean the firm is profitable, and a profitable firm can still go bankrupt through lack of cash.',
  },
  {
    id: 'dist-3.7-02',
    conceptA: 'Cash Flow Forecast',
    conceptB: 'Cash Flow Statement',
    comparisonCriteria: 'Prediction vs Actual Record',
    contrastStatement: 'A **forecast** shows the expected movement of cash for a future period. A **statement** records the actual cash inflows and outflows for a past period (usually 12 months) and helps prepare future forecasts.',
    examTrapWarning: 'Do not call a forecast "accurate": it is only as reliable as its assumptions.',
  },
  {
    id: 'dist-3.7-03',
    conceptA: 'Sales Revenue',
    conceptB: 'Cash Inflows',
    comparisonCriteria: 'Source and Timing',
    contrastStatement: '**Sales revenue** comes from a single source (customers) and includes credit sales. **Cash inflows** include only cash actually received, and can come from non-revenue sources such as loans, sale of dormant assets, donations or grants.',
    examTrapWarning: "In forecast questions, put credit sales in the month the cash arrives, e.g. July's 30-day credit sales go in August.",
  },
];

export const CRAM_GOLDEN_RULES_3_7: GoldenMatrixRule[] = [
  {
    id: 'rule-3.7-01',
    ruleTitle: 'Finance Rule: The Cash Flow Forecast Chain',
    category: 'Finance',
    corePrinciple: '**Opening balance + (Cash inflows - Cash outflows) = Closing balance**, and each closing balance becomes the next opening balance.',
    actionProtocol: 'Lay out in the IB order: opening balance, itemised inflows and total, itemised outflows and total, net cash flow, closing balance. Show negatives in brackets. Work backwards for missing values.',
    examApplicationTip: 'Check your answer: first opening balance + sum of all net cash flows must equal the final closing balance.',
  },
  {
    id: 'rule-3.7-02',
    ruleTitle: 'Finance Rule: Match the Solution to the Cause',
    category: 'Finance',
    corePrinciple: 'Cash flow problems are solved by reducing outflows, improving inflows or obtaining additional finance, ideally targeting the cause directly.',
    actionProtocol: 'Overstocking: better stock control. Poor credit control: tighter credit control or debt factoring. Seasonal dip: overdraft. Always state a limitation (lost customers, interest, lower quality).',
    examApplicationTip: 'Remember cash is more important than profit in the short term, but profit matters for long-term survival.',
  },
];
