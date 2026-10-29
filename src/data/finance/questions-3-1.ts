import type { MCQQuestion, TwoMarkQuestion, FourMarkQuestion, SixMarkQuestion } from '@/types/curriculum';

const S = '3.1-introduction-to-finance' as const;

const mcq = (
  n: number, topicTag: string, question: string,
  opts: [string, string, string, string], correctAnswer: 'A' | 'B' | 'C' | 'D',
  correctRationale: string, distractorAnalysis: string
): MCQQuestion => ({
  id: `mcq-3.1-${String(n).padStart(2, '0')}`,
  subunit: S,
  topicTag,
  questionNumber: n,
  question,
  options: (['A', 'B', 'C', 'D'] as const).map((key, i) => ({ key, text: opts[i] })),
  correctAnswer,
  explanation: { correctRationale, distractorAnalysis }
});

export const MCQ_3_1: MCQQuestion[] = [
  mcq(1, 'Definition of Capital Expenditure', 'Which of the following best defines capital expenditure?',
    ['Spending on the day-to-day running of a business', 'Investment spending on fixed assets such as machinery, land and buildings', 'The financial guarantee used to secure a bank loan', 'Payments of indirect costs such as insurance'],
    'B', 'Capital expenditure is investment spending on fixed assets, such as machinery, equipment, land and buildings (p. 224).',
    'A describes revenue expenditure; C defines collateral; D describes indirect costs, which are part of revenue expenditure.'),
  mcq(2, 'Definition of Revenue Expenditure', 'Revenue expenditure refers to:',
    ['Spending on the day-to-day running of a business', 'Spending on assets used repeatedly for production', 'Money raised by selling shares on a stock exchange', 'Spending that determines the scale of operations'],
    'A', 'Revenue expenditure is spending on the day-to-day running of a business, such as rent, wages, salaries and utility bills.',
    'B and D describe capital expenditure; C is a source of finance, not a type of expenditure.'),
  mcq(3, 'Table 14.1 Classification', 'Which of the following is an example of revenue expenditure?',
    ['Machinery', 'Intellectual property', 'Freight and delivery', 'Furniture, fixtures and fittings'],
    'C', 'Table 14.1 lists freight and delivery as revenue expenditure.',
    'Machinery, intellectual property and furniture/fixtures/fittings are all listed as capital expenditures in Table 14.1.'),
  mcq(4, 'Table 14.1 Classification', 'Which of the following is classed as capital expenditure in Table 14.1?',
    ['Office supplies and administration', 'Mergers and acquisitions', 'Energy costs', 'Insurance'],
    'B', 'Mergers and acquisitions appear in the capital expenditures column of Table 14.1.',
    'Office supplies, energy costs and insurance are all revenue expenditures.'),
  mcq(5, 'Fixed Assets', 'Which statement about fixed (non-current) assets is correct?',
    ['They are intended to be sold quickly for profit', 'They are used up within one production cycle', 'They have a long-term function and can be used repeatedly for production', 'They include wages and raw materials'],
    'C', 'Fixed assets are items of monetary value with a long-term function, used repeatedly for production, and not intended to be sold in the short term.',
    'A contradicts the definition; B and D describe revenue items.'),
  mcq(6, 'Reasons for Capital Expenditure', 'Which of the following is NOT a reason for capital expenditure given in the textbook?',
    ['To add extra production capacity as the business grows', 'To replace worn-out or obsolete machinery', 'To comply with changing legislation, such as green technologies', 'To pay the monthly utility bills'],
    'D', 'Paying utility bills is revenue expenditure. The textbook\'s four reasons for capital expenditure are capacity, efficiency, replacement and compliance.',
    'A, B and C are all listed reasons for capital expenditure.'),
  mcq(7, 'Collateral', 'Collateral refers to:',
    ['The interest charged on a loan', 'A financial guarantee for securing external loan capital', 'Spending on advertising and promotion', 'The profit left after all costs'],
    'B', 'Collateral is the financial guarantee for securing external loan capital to finance investment for growth; fixed assets can provide it.',
    'A, C and D are not definitions of collateral.'),
  mcq(8, 'Financing Capital Expenditure', 'Why does capital expenditure tend to be financed from long-term sources?',
    ['Because of the high cost of financing fixed assets', 'Because fixed assets are sold within a year', 'Because revenue expenditure must be paid first', 'Because sole traders cannot buy assets'],
    'A', 'The textbook states long-term sources are used because of the high cost of financing fixed assets.',
    'Fixed assets are not intended to be sold in the short term (B); C and D are not given as reasons.'),
  mcq(9, 'Challenges of Capital Expenditure', 'The main challenges of capital expenditure for most businesses are:',
    ['Low costs and too many sources of finance', 'High costs and limited sources of finance', 'Short-term benefits and high staff turnover', 'Rising rent and utility bills'],
    'B', 'The textbook identifies the high costs involved and the limited sources of finance available, so some investments are not feasible.',
    'A is the opposite; C and D are unrelated to capital expenditure challenges.'),
  mcq(10, 'Sources of Finance by Business Type', 'According to the textbook, the main source of finance for sole traders is typically:',
    ['Selling shares on a stock exchange', 'Collateral', 'Personal savings', 'Mergers and acquisitions'],
    'C', 'The main source of finance for sole traders is typically their personal savings.',
    'Selling shares is available to larger, established businesses; collateral is a guarantee, not a source; M&A is capital expenditure.'),
  mcq(11, 'Case Study: London Olympics', 'Transport for London introduced Britain\'s first high-speed "bullet" trains for the 2012 Olympics. This is an example of:',
    ['Revenue expenditure, as it was for a single event', 'Capital expenditure, as the trains are fixed assets with a long-term function', 'An indirect cost', 'Collateral'],
    'B', 'Trains are fixed assets (vehicles) used repeatedly over the long term, so their purchase is capital expenditure.',
    'Being linked to an event does not make it revenue expenditure (A); it is not an indirect cost (C) or a guarantee (D).'),
  mcq(12, 'Revenue Expenditure and Profit', 'Why must revenue expenditure be controlled?',
    ['So that sales revenue is sufficient to cover production costs and the business earns profit', 'So that fixed assets can be sold', 'Because it determines the scale of operations', 'Because it is financed by selling shares'],
    'A', 'Costs must be controlled so that sales revenue covers production costs, enabling the business to earn profit.',
    'B and C relate to fixed assets/capital expenditure; D is not stated.'),
  mcq(13, 'Sustainability', 'The textbook states that businesses can collapse because of:',
    ['Too much revenue expenditure on remuneration', 'A lack of sufficient capital expenditure to adapt to external change', 'Using collateral to secure loans', 'Paying invoices on time'],
    'B', 'Businesses can collapse through a lack of sufficient capital expenditure to adapt to changes such as changing consumer trends and competitors\' strategies.',
    'Competitive remuneration is described as motivating (A); C and D are not causes of collapse in the text.')
];

export const TWO_MARK_3_1: TwoMarkQuestion[] = [
  {
    id: 'q2m-3.1-01', subunit: S, questionNumber: 'Review Q1', question: 'Define capital expenditure.', marks: 2, commandTerm: 'Define', assessmentObjective: 'AO1',
    modelAnswer: 'Capital expenditure is investment spending on fixed (non-current) assets, such as the purchase of machinery, equipment, land and buildings, which have a long-term function and are used repeatedly.',
    markBreakdown: [{ mark: 1, criterion: 'Investment spending on fixed / non-current assets' }, { mark: 1, criterion: 'Valid example or reference to long-term, repeated use' }],
    examinerTips: 'Name "fixed assets" explicitly - "spending on big items" will not earn full marks.'
  },
  {
    id: 'q2m-3.1-02', subunit: S, questionNumber: 'Review Q3', question: 'Define revenue expenditure.', marks: 2, commandTerm: 'Define', assessmentObjective: 'AO1',
    modelAnswer: 'Revenue expenditure is spending on the day-to-day running of a business, such as payment of rent, wages, salaries and utility bills.',
    markBreakdown: [{ mark: 1, criterion: 'Spending on day-to-day running / daily operations' }, { mark: 1, criterion: 'Valid example (rent, wages, salaries, utility bills, raw materials)' }]
  },
  {
    id: 'q2m-3.1-03', subunit: S, questionNumber: 'Key term', question: 'Define fixed assets.', marks: 2, commandTerm: 'Define', assessmentObjective: 'AO1',
    modelAnswer: 'Fixed assets (non-current assets) are items of monetary value that have a long-term function for businesses, so can be used repeatedly for the purpose of production, e.g. land, buildings and machinery.',
    markBreakdown: [{ mark: 1, criterion: 'Items of monetary value with a long-term function' }, { mark: 1, criterion: 'Used repeatedly for production / not intended to be sold in short term' }]
  },
  {
    id: 'q2m-3.1-04', subunit: S, questionNumber: 'Key term', question: 'Define collateral.', marks: 2, commandTerm: 'Define', assessmentObjective: 'AO1',
    modelAnswer: 'Collateral is the financial guarantee (such as a fixed asset) used to secure external loan capital to finance investment expenditure for business growth.',
    markBreakdown: [{ mark: 1, criterion: 'Financial guarantee' }, { mark: 1, criterion: 'Used to secure external loan capital for investment/growth' }]
  },
  {
    id: 'q2m-3.1-05', subunit: S, questionNumber: 'Review Q2', question: 'State two examples of capital expenditure.', marks: 2, commandTerm: 'State', assessmentObjective: 'AO1',
    modelAnswer: 'Any two from Table 14.1: capital equipment; furniture, fixtures and fittings; computer and IT systems; intellectual property; machinery; mergers and acquisitions; property and premises; vehicles.',
    markBreakdown: [{ mark: 1, criterion: 'First valid example' }, { mark: 1, criterion: 'Second valid example' }]
  },
  {
    id: 'q2m-3.1-06', subunit: S, questionNumber: 'Review Q4', question: 'State two examples of revenue expenditure.', marks: 2, commandTerm: 'State', assessmentObjective: 'AO1',
    modelAnswer: 'Any two from Table 14.1: advertising and promotion; energy costs; freight and delivery; insurance; office supplies and administration; raw materials and components; rent; wages and salaries.',
    markBreakdown: [{ mark: 1, criterion: 'First valid example' }, { mark: 1, criterion: 'Second valid example' }]
  },
  {
    id: 'q2m-3.1-07', subunit: S, questionNumber: 'Content', question: 'Outline two reasons why a business might undertake capital expenditure.', marks: 2, commandTerm: 'Outline', assessmentObjective: 'AO1',
    modelAnswer: 'Any two: to add extra production capacity as the business grows; to improve efficiency using the latest technologies (IT and production technologies); to replace worn-out, damaged or obsolete equipment; to comply with changing legislation, such as green technologies.',
    markBreakdown: [{ mark: 1, criterion: 'First valid reason outlined' }, { mark: 1, criterion: 'Second valid reason outlined' }]
  },
  {
    id: 'q2m-3.1-08', subunit: S, questionNumber: 'Content', question: 'Outline two challenges of capital expenditure.', marks: 2, commandTerm: 'Outline', assessmentObjective: 'AO1',
    modelAnswer: 'First, the high costs involved mean some investments are simply not feasible. Second, there are limited sources of finance available for such investments.',
    markBreakdown: [{ mark: 1, criterion: 'High costs involved' }, { mark: 1, criterion: 'Limited sources of finance available' }]
  },
  {
    id: 'q2m-3.1-09', subunit: S, questionNumber: 'Review Q5', question: 'Distinguish between capital expenditure and revenue expenditure.', marks: 2, commandTerm: 'Distinguish', assessmentObjective: 'AO1',
    modelAnswer: 'Capital expenditure is spending on fixed assets (e.g. machinery) with long-term benefits, whereas revenue expenditure is spending on day-to-day running costs (e.g. wages, rent) that generates value today rather than in the future.',
    markBreakdown: [{ mark: 1, criterion: 'Capital expenditure: fixed assets / long-term' }, { mark: 1, criterion: 'Revenue expenditure: day-to-day running / value today, with clear comparison' }],
    examinerTips: 'Use "whereas" to make the distinction explicit.'
  }
];

export const FOUR_MARK_3_1: FourMarkQuestion[] = [
  {
    id: 'q4m-3.1-01', subunit: S, questionNumber: 'Question 14.1a',
    question: 'With reference to the case study, distinguish between revenue expenditure and capital expenditure.',
    caseStimulus: "London made history by becoming the first city to host the modern Olympic Games three times (1908, 1948 and 2012). The commercial benefits were welcomed by the UK construction industry, with around half a million new jobs added to the industry in preparation for the most-watched global sporting event. Transport for London, the local government body responsible for most of the transport networks in London, funded numerous improvements in preparation for 2012, including expansion of railway networks and the introduction of Britain's first 'bullet' (high-speed rail) trains.",
    contextTitle: 'The London Olympic Games', marks: 4, commandTerm: 'Distinguish', assessmentObjective: 'AO2',
    peelModelAnswer: {
      point1: {
        title: 'Capital Expenditure: Long-Term Transport Assets',
        point: 'Capital expenditure is investment spending on fixed assets that have a long-term function and are used repeatedly.',
        evidence: "Transport for London funded the expansion of railway networks and introduced Britain's first 'bullet' high-speed trains.",
        explanation: 'Railway lines and trains are fixed assets that keep providing transport services long after the 2012 Games, and their high cost means they are funded from long-term sources.',
        link: 'This spending therefore delivers long-term benefits to London rather than value only during the Games.'
      },
      point2: {
        title: 'Revenue Expenditure: Day-to-Day Construction Costs',
        point: 'Revenue expenditure, by contrast, is spending on the day-to-day running of operations, generating value today rather than in the future.',
        evidence: 'Around half a million new jobs were added to the UK construction industry, whose wages and salaries had to be paid.',
        explanation: 'Wages, salaries and raw materials are recurring running costs used up in producing the facilities, unlike the trains which remain as assets.',
        link: 'So the workers\' wages are revenue expenditure, whereas the railway expansion and trains are capital expenditure.'
      }
    },
    rubricChecklist: [
      { id: 'q4m-3.1-01-c1', criterion: 'Defines capital expenditure (fixed assets, long-term)', mark: 1 },
      { id: 'q4m-3.1-01-c2', criterion: 'Applies capital expenditure to railway expansion / bullet trains', mark: 1 },
      { id: 'q4m-3.1-01-c3', criterion: 'Defines revenue expenditure (day-to-day running, value today)', mark: 1 },
      { id: 'q4m-3.1-01-c4', criterion: 'Applies revenue expenditure to wages of ~500,000 construction jobs / materials', mark: 1 }
    ]
  },
  {
    id: 'q4m-3.1-02', subunit: S, questionNumber: 'Content (p. 223)',
    question: 'Explain two reasons why a business might need capital expenditure in response to the growth of working from home.',
    caseStimulus: 'The growing number of people working from home has meant that businesses have had to invest in computer hardware and software to support their employees working remotely. This includes expenses on mobile devices, such as laptops and smartphones, as well as subscriptions to cloud-based software platforms.',
    contextTitle: 'Capital Expenditure and Remote Working', marks: 4, commandTerm: 'Explain', assessmentObjective: 'AO2',
    peelModelAnswer: {
      point1: {
        title: 'Implementing Change',
        point: 'Capital expenditure is important for implementing change in business organizations.',
        evidence: 'Businesses have had to invest in computer hardware such as laptops and smartphones for remote employees.',
        explanation: 'These are fixed assets (computer and IT systems in Table 14.1) used repeatedly over the long term, enabling staff to work outside the office.',
        link: 'Without this investment the business could not adapt its operations to remote working.'
      },
      point2: {
        title: 'Improving Efficiency and Staying Competitive',
        point: 'Capital expenditure improves efficiency by utilizing the latest technologies, including IT systems.',
        evidence: 'Investment in software and cloud-based platforms supports employees working remotely.',
        explanation: 'Up-to-date IT systems keep staff productive, and the textbook warns that firms can collapse if they fail to invest enough to adapt to changes in the external environment.',
        link: 'Capital expenditure therefore helps the business remain relevant, competitive and sustainable.'
      }
    },
    rubricChecklist: [
      { id: 'q4m-3.1-02-c1', criterion: 'Identifies implementing change / adapting to the external environment', mark: 1 },
      { id: 'q4m-3.1-02-c2', criterion: 'Applies to laptops, smartphones as fixed assets', mark: 1 },
      { id: 'q4m-3.1-02-c3', criterion: 'Identifies improving efficiency / remaining competitive', mark: 1 },
      { id: 'q4m-3.1-02-c4', criterion: 'Applies to software / cloud platforms and explains the consequence', mark: 1 }
    ]
  },
  {
    id: 'q4m-3.1-03', subunit: S, questionNumber: 'Content (p. 221)',
    question: 'Explain two reasons why a manufacturing business might undertake capital expenditure.',
    caseStimulus: 'Illustrative example (not from the textbook): A furniture manufacturer has seen demand rise steadily. Several of its cutting machines are over 15 years old and frequently break down, and new regulations require cleaner, greener production technologies.',
    contextTitle: 'Illustrative Example: Furniture Manufacturer', marks: 4, commandTerm: 'Explain', assessmentObjective: 'AO2',
    peelModelAnswer: {
      point1: {
        title: 'Replacing Worn-Out and Obsolete Machinery',
        point: 'Businesses undertake capital expenditure to replace worn-out, damaged and/or obsolete capital equipment and machinery.',
        evidence: 'The manufacturer\'s cutting machines are over 15 years old and frequently break down.',
        explanation: 'New machinery is a fixed asset that can be used repeatedly, reducing breakdowns and improving efficiency through the latest production technology.',
        link: 'This allows the firm to keep up with its rising demand.'
      },
      point2: {
        title: 'Complying with Changing Legislation',
        point: 'Capital expenditure may be needed to comply with changing legislation and regulations, such as green technologies.',
        evidence: 'New regulations require cleaner, greener production technologies.',
        explanation: 'Investing in compliant equipment avoids breaking the law, although the high costs and limited sources of finance may make some investments unfeasible.',
        link: 'The firm may need long-term finance and investment appraisal before committing.'
      }
    },
    rubricChecklist: [
      { id: 'q4m-3.1-03-c1', criterion: 'Identifies replacement of worn-out/obsolete machinery (or capacity/efficiency)', mark: 1 },
      { id: 'q4m-3.1-03-c2', criterion: 'Applies to the old cutting machines / rising demand', mark: 1 },
      { id: 'q4m-3.1-03-c3', criterion: 'Identifies compliance with legislation (green technologies)', mark: 1 },
      { id: 'q4m-3.1-03-c4', criterion: 'Applies to new regulations with explanation', mark: 1 }
    ]
  },
  {
    id: 'q4m-3.1-04', subunit: S, questionNumber: 'Content (pp. 222-223)',
    question: 'Explain why revenue expenditure is important for a business.',
    caseStimulus: 'Revenue expenditure refers to finance spent on the daily operations of a business, such as wages, salaries, raw materials, rent and utility bills. Attractive and competitive remuneration packages help to motivate the workforce.',
    contextTitle: 'The Role of Revenue Expenditure', marks: 4, commandTerm: 'Explain', assessmentObjective: 'AO2',
    peelModelAnswer: {
      point1: {
        title: 'Generating Revenue Today',
        point: 'Revenue expenditure generates value to the business today.',
        evidence: 'Spending on raw materials, rent and utility bills allows goods and services to be produced.',
        explanation: 'Producing goods and services in turn generates sales revenue, but costs must be controlled so revenue covers production costs.',
        link: 'Well-controlled revenue expenditure therefore enables the business to earn profit.'
      },
      point2: {
        title: 'Motivating the Workforce',
        point: 'Revenue expenditure on remuneration helps motivate the workforce.',
        evidence: 'Attractive and competitive remuneration packages (wages and salaries) are revenue expenditure.',
        explanation: 'Motivated staff improve productivity and employee loyalty to the organization.',
        link: 'Together with capital expenditure, this makes revenue expenditure vital for business sustainability.'
      }
    },
    rubricChecklist: [
      { id: 'q4m-3.1-04-c1', criterion: 'Explains revenue expenditure generates value today / enables production', mark: 1 },
      { id: 'q4m-3.1-04-c2', criterion: 'Links to sales revenue covering costs and profit', mark: 1 },
      { id: 'q4m-3.1-04-c3', criterion: 'Identifies remuneration motivating the workforce', mark: 1 },
      { id: 'q4m-3.1-04-c4', criterion: 'Links to productivity, loyalty or sustainability', mark: 1 }
    ]
  }
];

const levels = (low: string, mid: string, high: string) => [
  { range: '1-2' as const, descriptor: low },
  { range: '3-4' as const, descriptor: mid },
  { range: '5-6' as const, descriptor: high }
];

export const SIX_MARK_3_1: SixMarkQuestion[] = [
  {
    id: 'q6m-3.1-01', subunit: S, questionNumber: 'Question 14.1b',
    question: 'Examine the benefits of the Olympic Games being held in London to various stakeholder groups.',
    caseStimulus: "London made history by becoming the first city to host the modern Olympic Games three times (1908, 1948 and 2012). The commercial benefits were welcomed by the UK construction industry, with around half a million new jobs added to the industry in preparation for the most-watched global sporting event. Transport for London, the local government body responsible for most of the transport networks in London, funded numerous improvements in preparation for 2012, including expansion of railway networks and the introduction of Britain's first 'bullet' (high-speed rail) trains.",
    contextTitle: 'The London Olympic Games', marks: 6, commandTerm: 'Examine', assessmentObjective: 'AO2/AO3',
    levelBreakdown: levels(
      'Lists stakeholder groups with little explanation or use of the case.',
      'Explains benefits to two or more stakeholder groups with some application to the case.',
      'Balanced examination of benefits to several stakeholder groups, using case evidence, with a reasoned judgement (e.g. on long-term vs short-term benefits).'
    ),
    perspective1: {
      title: 'Businesses and Employees in the Construction Industry',
      points: [
        { subPoint: 'Construction firms', elaboration: 'The UK construction industry welcomed the commercial benefits: preparing for the most-watched global sporting event generated large orders and sales revenue.' },
        { subPoint: 'Workers', elaboration: 'Around half a million new jobs were added to the construction industry, giving workers employment and wages (revenue expenditure for their employers).' }
      ]
    },
    perspective2: {
      title: 'Government, Local Community and Customers',
      points: [
        { subPoint: 'Transport for London / local government', elaboration: 'Capital expenditure on railway expansion and Britain\'s first bullet trains created fixed assets with a long-term function that keep serving London after 2012.' },
        { subPoint: 'Commuters and residents', elaboration: 'Residents and visitors benefit from improved, high-speed transport networks used repeatedly for years, not just during the Games.' }
      ]
    },
    synthesisAndEvaluation: 'The benefits differ in duration: many construction jobs were tied to preparation for the event, while the capital expenditure on railways and high-speed trains delivers long-term benefits to the community and government. The largest lasting gain is therefore arguably to London residents and transport users, although the high cost of such capital expenditure must be financed from long-term sources.',
    rubricChecklist: [
      { id: 'q6m-3.1-01-c1', criterion: 'Identifies relevant stakeholder groups', marks: 1 },
      { id: 'q6m-3.1-01-c2', criterion: 'Explains benefits to construction firms/workers using case evidence (half a million jobs)', marks: 2 },
      { id: 'q6m-3.1-01-c3', criterion: 'Explains benefits to government/community using case evidence (railways, bullet trains)', marks: 2 },
      { id: 'q6m-3.1-01-c4', criterion: 'Reasoned judgement', marks: 1 }
    ]
  },
  {
    id: 'q6m-3.1-02', subunit: S, questionNumber: 'Key concepts (p. 223)',
    question: 'Examine the importance of capital expenditure and revenue expenditure for the sustainability of a business.',
    caseStimulus: 'Businesses have to invest in their future in order to remain relevant and competitive in the market. Businesses can collapse because of the lack of sufficient capital expenditure in order to adapt to changes in the external environment, such as changing consumer trends and competitors moving in a different strategic direction. Furthermore, revenue expenditure, such as attractive and competitive remuneration packages, helps to motivate the workforce and improve productivity and employee loyalty.',
    contextTitle: 'Finance and Business Sustainability', marks: 6, commandTerm: 'Examine', assessmentObjective: 'AO2/AO3',
    levelBreakdown: levels(
      'Defines the two types of expenditure with little analysis.',
      'Explains the role of each type in sustainability with some development, but limited balance or judgement.',
      'Balanced analysis of both types, including challenges (high cost, limited finance), with a supported conclusion.'
    ),
    perspective1: {
      title: 'Capital Expenditure: Investing in the Future',
      points: [
        { subPoint: 'Adapting to change', elaboration: 'Investment in fixed assets lets a firm adapt to changing consumer trends and competitors; a lack of it can cause collapse.' },
        { subPoint: 'Capacity and efficiency', elaboration: 'Extra capacity and the latest technologies support growth, and fixed assets can act as collateral for further loans.' },
        { subPoint: 'Challenges', elaboration: 'High costs and limited sources of finance mean some investments are not feasible, so managers use investment appraisal.' }
      ]
    },
    perspective2: {
      title: 'Revenue Expenditure: Sustaining Daily Operations',
      points: [
        { subPoint: 'Generating value today', elaboration: 'Spending on raw materials, rent and utilities enables production that generates sales revenue now.' },
        { subPoint: 'Motivation', elaboration: 'Competitive remuneration motivates staff and improves productivity and loyalty.' },
        { subPoint: 'Cost control', elaboration: 'Revenue expenditure must be controlled so sales revenue covers production costs and the firm earns profit.' }
      ]
    },
    synthesisAndEvaluation: 'The textbook concludes that both revenue and capital expenditure are vital for sustainability. Revenue expenditure keeps the business running and profitable today, while capital expenditure secures its competitiveness in the future. The right balance depends on the firm\'s access to finance - a sole trader relying on personal savings has fewer options than a large firm able to sell shares.',
    rubricChecklist: [
      { id: 'q6m-3.1-02-c1', criterion: 'Accurate definitions of both types of expenditure', marks: 1 },
      { id: 'q6m-3.1-02-c2', criterion: 'Analysis of capital expenditure and sustainability (incl. challenges)', marks: 2 },
      { id: 'q6m-3.1-02-c3', criterion: 'Analysis of revenue expenditure and sustainability', marks: 2 },
      { id: 'q6m-3.1-02-c4', criterion: 'Supported conclusion', marks: 1 }
    ]
  }
];
