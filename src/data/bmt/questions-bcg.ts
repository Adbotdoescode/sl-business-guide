import type {
  MCQQuestion,
  TwoMarkQuestion,
  FourMarkQuestion,
  SixMarkQuestion,
  DefinitionItem,
  DistinctionItem,
  GoldenMatrixRule,
} from '@/types/curriculum';

// BMT 4 BCG matrix questions and cram items. Based on Paul Hoang, Business Management (5th ed.), Chapter 47.

const S = 'bmt-bcg-matrix' as const;

// ----------------------------------------------------
// MCQs
// ----------------------------------------------------
export const MCQ_BCG: MCQQuestion[] = [
  {
    id: 'mcq-bcg-01',
    subunit: S,
    topicTag: 'BCG Dimensions',
    questionNumber: 1,
    question: 'Which two dimensions does the Boston Consulting Group (BCG) matrix use to classify products?',
    options: [
      { key: 'A', text: 'Products and markets (existing vs new)' },
      { key: 'B', text: 'Market share and market growth' },
      { key: 'C', text: 'Internal strengths and external threats' },
      { key: 'D', text: 'Price and product quality' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'The BCG matrix looks at market share and market growth to assess products in terms of their market potential (p.635).',
      distractorAnalysis: 'A describes the Ansoff matrix; C describes SWOT; D is not the basis of the BCG matrix.'
    }
  },
  {
    id: 'mcq-bcg-02',
    subunit: S,
    topicTag: 'BCG Quadrants',
    questionNumber: 2,
    question: 'A product has low market share in a high growth market. In the BCG matrix it is a:',
    options: [
      { key: 'A', text: 'Star' },
      { key: 'B', text: 'Cash cow' },
      { key: 'C', text: 'Question mark' },
      { key: 'D', text: 'Dog' }
    ],
    correctAnswer: 'C',
    explanation: {
      correctRationale: 'Question marks (problem children / wild cards) compete in high market growth industries but have low market share (p.639).',
      distractorAnalysis: 'Stars have high share in high growth (A); cash cows have high share in low growth (B); dogs have low share in low growth (D).'
    }
  },
  {
    id: 'mcq-bcg-03',
    subunit: S,
    topicTag: 'BCG Cash Flow',
    questionNumber: 3,
    question: 'According to the BCG matrix, which category is the main user of cash?',
    options: [
      { key: 'A', text: 'Question marks' },
      { key: 'B', text: 'Cash cows' },
      { key: 'C', text: 'Dogs' },
      { key: 'D', text: 'Stars' }
    ],
    correctAnswer: 'A',
    explanation: {
      correctRationale: 'Question marks are the main users of cash whilst cash cows are the main generators of cash (p.637).',
      distractorAnalysis: 'Cash cows generate cash (B); dogs generate little cash but do not absorb heavy investment (C); stars need spending but also generate high cash (D).'
    }
  },
  {
    id: 'mcq-bcg-04',
    subunit: S,
    topicTag: 'BCG Strategies',
    questionNumber: 4,
    question: 'Which BCG strategy involves investing the necessary resources to turn question marks into stars?',
    options: [
      { key: 'A', text: 'Hold' },
      { key: 'B', text: 'Harvest' },
      { key: 'C', text: 'Divest' },
      { key: 'D', text: 'Build' }
    ],
    correctAnswer: 'D',
    explanation: {
      correctRationale: 'Build turns question marks into stars by investing resources to increase market share; otherwise cash is drained from the business (p.637).',
      distractorAnalysis: 'Hold keeps cash cows in position (A); harvest reaps profits and turns stars into cash cows (B); divest phases out dogs (C).'
    }
  },
  {
    id: 'mcq-bcg-05',
    subunit: S,
    topicTag: 'BCG Strategies',
    questionNumber: 5,
    question: 'In Figure 47.3 of the textbook, which strategy is matched to cash cows, requiring only minimal investment because market growth is low?',
    options: [
      { key: 'A', text: 'Build' },
      { key: 'B', text: 'Hold' },
      { key: 'C', text: 'Divest' },
      { key: 'D', text: 'Diversify' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'Hold involves investing enough resources to keep cash cows in their current position; investment is likely to be minimal (p.637).',
      distractorAnalysis: 'Build is for question marks (A); divest is for dogs (C); diversification is an Ansoff growth strategy, not a BCG strategy (D).'
    }
  },
  {
    id: 'mcq-bcg-06',
    subunit: S,
    topicTag: 'BCG and PLC',
    questionNumber: 6,
    question: 'Which stage of the product life cycle is most closely associated with a cash cow?',
    options: [
      { key: 'A', text: 'Introduction' },
      { key: 'B', text: 'Growth' },
      { key: 'C', text: 'Maturity' },
      { key: 'D', text: 'Decline' }
    ],
    correctAnswer: 'C',
    explanation: {
      correctRationale: 'Figure 27.3 links question mark to introduction, star to growth, cash cow to maturity and dog to decline (p.397). Cash cows have high share in a mature, low-growth market.',
      distractorAnalysis: 'Introduction = question mark (A); growth = star (B); decline = dog (D).'
    }
  },
  {
    id: 'mcq-bcg-07',
    subunit: S,
    topicTag: 'BCG Evaluation',
    questionNumber: 7,
    question: 'Disneyland Paris made huge losses between 2002 and 2006 despite high revenue and high market share. Which limitation of the BCG matrix does this illustrate?',
    options: [
      { key: 'A', text: 'It assumes higher market share leads to higher profits' },
      { key: 'B', text: 'It ignores the number of products in the portfolio' },
      { key: 'C', text: 'It can only be used by conglomerates' },
      { key: 'D', text: 'It measures market growth inaccurately' }
    ],
    correctAnswer: 'A',
    explanation: {
      correctRationale: 'A criticism of the BCG matrix is the assumption that higher profits come from higher sales or market share; Disneyland Paris shows this is not necessarily the case (p.636).',
      distractorAnalysis: 'The matrix maps every product in the portfolio (B); it can be used by any multi-product business (C); the Disney case is about profitability, not measurement of growth (D).'
    }
  }
];

// ----------------------------------------------------
// 2-mark questions
// ----------------------------------------------------
export const TWO_MARK_BCG: TwoMarkQuestion[] = [
  {
    id: 'q2m-bcg-01',
    subunit: S,
    questionNumber: 'Question 47.1a',
    question: 'Define the term product portfolio.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'A product portfolio is the collection of all the products (or brands / strategic business units) owned by a business at a point in time, such as Mattel\'s Barbie, Hot Wheels, UNO and Scrabble.',
    markBreakdown: [
      { mark: 1, criterion: 'Refers to the collection/range of all products owned by a business' },
      { mark: 1, criterion: 'States "at a point in time" or gives a relevant example (e.g. Mattel brands)' }
    ],
    examinerTips: 'Textbook Exam tip: this definition appears in Questions 27.1, 47.1 and 47.2. Learn the textbook wording (p.396).'
  },
  {
    id: 'q2m-bcg-02',
    subunit: S,
    questionNumber: 'Review Question 1',
    question: 'What is the Boston Consulting Group (BCG) matrix?',
    marks: 2,
    commandTerm: 'What is',
    assessmentObjective: 'AO1',
    modelAnswer: 'The BCG matrix is a situational and decision-making tool used for analysing the product portfolio of a business. It shows whether products have a high or low market share and operate in high or low market growth industries.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies it as a tool for analysing a firm\'s product portfolio' },
      { mark: 1, criterion: 'Refers to both dimensions: market share and market growth' }
    ],
    examinerTips: 'Both axes must be named for the second mark (p.639).'
  },
  {
    id: 'q2m-bcg-03',
    subunit: S,
    questionNumber: 'Key Term',
    question: 'Define the term cash cow.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'A cash cow is any product in a firm\'s portfolio that generates significant money (cash and profit) due to its large market share in a mature (low-growth) market.',
    markBreakdown: [
      { mark: 1, criterion: 'High/large market share in a mature or low-growth market' },
      { mark: 1, criterion: 'Generates significant cash/profit for the business' }
    ]
  },
  {
    id: 'q2m-bcg-04',
    subunit: S,
    questionNumber: 'Key Term',
    question: 'Define the term question mark (in the BCG matrix).',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'Question marks (or wild cards) are products that compete in high market growth industries but have low market share. They consume lots of cash but do not generate much profit, if any.',
    markBreakdown: [
      { mark: 1, criterion: 'Low market share in a high growth market' },
      { mark: 1, criterion: 'Consume lots of cash but generate little or no profit' }
    ]
  },
  {
    id: 'q2m-bcg-05',
    subunit: S,
    questionNumber: 'Question 47.2a',
    question: 'Define the term conglomerate.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'A conglomerate is a large business that operates a diverse product portfolio across several unrelated markets or industries, such as CK Hutchison Holdings with ports, retail, infrastructure and telecommunications.',
    markBreakdown: [
      { mark: 1, criterion: 'A business operating in a range of different (unrelated) industries/markets' },
      { mark: 1, criterion: 'Relevant elaboration or example (e.g. CK Hutchison\'s four SBUs)' }
    ],
    examinerTips: 'Chapter 47 does not define conglomerate itself; the answer reflects how the textbook uses the term for CK Hutchison and Hitachi (pp. 635, 638).'
  }
];

// ----------------------------------------------------
// 4-mark questions
// ----------------------------------------------------
export const FOUR_MARK_BCG: FourMarkQuestion[] = [
  {
    id: 'q4m-bcg-01',
    subunit: S,
    questionNumber: 'Original question (based on Question 47.2)',
    question: 'Apply the BCG matrix to explain how CK Hutchison Holdings could use cash from an established division to support a newer one.',
    caseStimulus: 'CK Hutchison Holdings is a large conglomerate with four core SBUs: ports and related services, retail, infrastructure and telecommunications. It is one of the world\'s leading container terminal operators, with 52 ports in 26 countries. It is also a leading operator of global mobile telecommunications and data services, including mobile broadband.',
    contextTitle: 'CK Hutchison Holdings Portfolio',
    marks: 4,
    commandTerm: 'Apply',
    assessmentObjective: 'AO2',
    peelModelAnswer: {
      point1: {
        title: 'Ports as a Cash Cow',
        point: 'CK Hutchison\'s ports division is likely to be a cash cow.',
        evidence: 'It is one of the world\'s leading container terminal operators, with 52 ports in 26 countries.',
        explanation: 'Leading operators hold high market share in a mature, low-growth industry, so this SBU generates significant cash with minimal investment needed to hold its position.',
        link: 'This surplus cash can be redirected to other parts of the portfolio.'
      },
      point2: {
        title: 'Mobile Broadband as a Star or Question Mark',
        point: 'Mobile broadband services operate in a higher growth market and may be a star or question mark.',
        evidence: 'CK Hutchison provides global mobile telecommunications and data services, including mobile broadband.',
        explanation: 'Products in high growth markets need investment to build market share; cash from the ports cash cow can fund this without new borrowing.',
        link: 'This keeps the portfolio balanced and safeguards CK Hutchison\'s future earnings.'
      }
    },
    rubricChecklist: [
      { id: 'q4m-bcg-01-c1', criterion: 'Correctly classifies the ports SBU as a cash cow (high share, low growth)', mark: 1 },
      { id: 'q4m-bcg-01-c2', criterion: 'Uses case evidence (52 ports in 26 countries; mobile broadband)', mark: 1 },
      { id: 'q4m-bcg-01-c3', criterion: 'Classifies a high-growth SBU as a star or question mark needing investment', mark: 1 },
      { id: 'q4m-bcg-01-c4', criterion: 'Explains the flow of cash from cash cow to build/support the newer SBU', mark: 1 }
    ],
    scrambledSentences: [
      { id: 'q4m-bcg-01-s1', type: 'point', text: 'CK Hutchison\'s ports division is likely to be a cash cow.', order: 1 },
      { id: 'q4m-bcg-01-s2', type: 'evidence', text: 'It is one of the world\'s leading container terminal operators, with 52 ports in 26 countries.', order: 2 },
      { id: 'q4m-bcg-01-s3', type: 'explanation', text: 'High market share in a mature industry means it generates significant cash with minimal investment.', order: 3 },
      { id: 'q4m-bcg-01-s4', type: 'link', text: 'This cash can be used to build market share for high-growth SBUs such as mobile broadband.', order: 4 }
    ]
  },
  {
    id: 'q4m-bcg-02',
    subunit: S,
    questionNumber: 'Original question (based on Question 47.1)',
    question: 'Explain two reasons why a balanced product portfolio is important for Mattel.',
    caseStimulus: 'Mattel is one of the world\'s largest toy manufacturers. Its brands include Barbie dolls, Fisher-Price, Hot Wheels, Matchbox, Tyco, UNO, Pictionary and Scrabble. Its market dominance is backed by other products in its broad portfolio, such as strong sales of toys based on Pixar\'s Cars and Toy Story.',
    contextTitle: 'Mattel Toy Portfolio',
    marks: 4,
    commandTerm: 'Explain',
    assessmentObjective: 'AO2',
    peelModelAnswer: {
      point1: {
        title: 'Spreading Risk',
        point: 'A balanced portfolio spreads risk.',
        evidence: 'Mattel sells many brands, from Barbie to Scrabble and Pixar-licensed toys.',
        explanation: 'A decline in sales of one product, such as a film tie-in toy once the film\'s popularity fades, may be offset by favourable sales of others.',
        link: 'This protects Mattel\'s overall revenue and market dominance.'
      },
      point2: {
        title: 'Cash Flow for Future Products',
        point: 'A balanced portfolio supports cash flow and future growth.',
        evidence: 'Established brands such as Barbie and UNO are likely cash cows in mature markets.',
        explanation: 'Their cash can fund new toys (question marks) such as new film tie-ins, helping them become stars.',
        link: 'This ensures Mattel always has products to replace those in decline.'
      }
    },
    rubricChecklist: [
      { id: 'q4m-bcg-02-c1', criterion: 'Identifies risk spreading as a reason', mark: 1 },
      { id: 'q4m-bcg-02-c2', criterion: 'Explains offsetting of falling sales with reference to Mattel brands', mark: 1 },
      { id: 'q4m-bcg-02-c3', criterion: 'Identifies cash flow / funding new products as a reason', mark: 1 },
      { id: 'q4m-bcg-02-c4', criterion: 'Uses BCG terms (cash cows funding question marks/stars) applied to Mattel', mark: 1 }
    ],
    scrambledSentences: [
      { id: 'q4m-bcg-02-s1', type: 'point', text: 'A balanced portfolio spreads risk for Mattel.', order: 1 },
      { id: 'q4m-bcg-02-s2', type: 'evidence', text: 'Mattel sells many brands, from Barbie to Scrabble and Pixar-licensed toys.', order: 2 },
      { id: 'q4m-bcg-02-s3', type: 'explanation', text: 'Falling sales of one toy can be offset by favourable sales of others.', order: 3 },
      { id: 'q4m-bcg-02-s4', type: 'link', text: 'This protects Mattel\'s overall revenue and market dominance.', order: 4 }
    ]
  }
];

// ----------------------------------------------------
// 6-mark questions
// ----------------------------------------------------
export const SIX_MARK_BCG: SixMarkQuestion[] = [
  {
    id: 'q6m-bcg-01',
    subunit: S,
    questionNumber: 'Question 47.2c',
    question: 'Examine the reasons why CK Hutchison Holdings needs a different marketing mix for each of its distinct products and services.',
    caseStimulus: 'CK Hutchison Holdings is a large conglomerate multinational with operations in over 50 countries and four core SBUs: ports and related services, retail, infrastructure and telecommunications. It operates 52 ports in 26 countries. Its retail division spans health and beauty, supermarkets and consumer electronics in 16,200 stores worldwide. Its infrastructure division invests in energy, transportation, water, waste management and household infrastructure. It is also a leading operator of mobile telecommunications and data services, including mobile broadband.',
    contextTitle: 'CK Hutchison Holdings',
    marks: 6,
    commandTerm: 'Examine',
    assessmentObjective: 'AO2/AO3',
    levelBreakdown: [
      { range: '1-2', descriptor: 'Limited understanding; generic reasons with little or no reference to CK Hutchison.' },
      { range: '3-4', descriptor: 'Some reasons explained with some application, but one-sided or lacking BCG/PLC analysis.' },
      { range: '5-6', descriptor: 'Well-developed reasons using BCG and PLC concepts, clearly applied to CK Hutchison\'s SBUs, with a balanced, substantiated conclusion.' }
    ],
    perspective1: {
      title: 'Different Positions in the BCG Matrix and Product Life Cycle',
      points: [
        {
          subPoint: 'Cash cows need a "hold" marketing mix',
          elaboration: 'The ports division is a world leader in a mature market, so it is likely a cash cow. Its mix focuses on reminder promotion, competitive pricing to maintain share and minimal investment (hold), maximising cash generation.'
        },
        {
          subPoint: 'Growing services need a "build" marketing mix',
          elaboration: 'Mobile broadband operates in a higher growth market. If it is a question mark or star, it needs persuasive advertising, penetration or competitive pricing and wider distribution to build market share.'
        }
      ]
    },
    perspective2: {
      title: 'Different Customers and Markets',
      points: [
        {
          subPoint: 'B2B versus B2C customers',
          elaboration: 'Ports and infrastructure serve business and government clients (shipping lines, utilities), so personal selling and long-term contracts matter. Retail (16,200 stores) serves consumers, so place, merchandising and promotion are critical.'
        },
        {
          subPoint: 'Limits of a portfolio approach',
          elaboration: 'However, the BCG matrix only gives a snapshot and does not explain why an SBU sits where it does. Operating in over 50 countries, local STEEPLE conditions may matter more than the SBU\'s quadrant when designing the mix, and shared branding may allow some common elements.'
        }
      ]
    },
    synthesisAndEvaluation: 'CK Hutchison needs distinct marketing mixes mainly because its SBUs sit in different BCG quadrants and life cycle stages and serve very different customers: ports require a low-cost hold strategy while telecoms may require heavy investment to build share. A single mix would starve growing SBUs or waste money on mature ones. The precise mix should, however, also reflect local market conditions, so the BCG matrix should be combined with other tools such as STEEPLE and Ansoff.',
    rubricChecklist: [
      { id: 'q6m-bcg-01-c1', criterion: 'Shows understanding of the marketing mix and BCG/PLC concepts', marks: 1 },
      { id: 'q6m-bcg-01-c2', criterion: 'Applies BCG classification to at least two CK Hutchison SBUs', marks: 2 },
      { id: 'q6m-bcg-01-c3', criterion: 'Explains how customer type/market differences require different mixes', marks: 2 },
      { id: 'q6m-bcg-01-c4', criterion: 'Reaches a balanced, substantiated conclusion', marks: 1 }
    ]
  },
  {
    id: 'q6m-bcg-02',
    subunit: S,
    questionNumber: 'Question 47.1b',
    question: 'Explain the importance of a broad product portfolio for a business such as Mattel.',
    caseStimulus: 'Mattel, established in 1945, is one of the world\'s largest toy manufacturers. It has profited from products such as Elmo cuddly toys. Its brands include Barbie dolls, Fisher-Price, Hot Wheels, Matchbox, Tyco, UNO, Pictionary and Scrabble. Its market dominance is backed by other products in its broad portfolio, such as strong sales of toys based on Pixar\'s Cars and Toy Story.',
    contextTitle: 'Mattel',
    marks: 6,
    commandTerm: 'Explain',
    assessmentObjective: 'AO2',
    levelBreakdown: [
      { range: '1-2', descriptor: 'Simple statements about having many products, little application.' },
      { range: '3-4', descriptor: 'Explains one or two reasons with some application to Mattel.' },
      { range: '5-6', descriptor: 'Detailed explanation of several reasons using BCG terms, clearly applied to Mattel\'s brands.' }
    ],
    perspective1: {
      title: 'Risk Spreading and Revenue Streams',
      points: [
        {
          subPoint: 'Spreading risk',
          elaboration: 'Toy demand is fashion-driven; Pixar tie-ins may fade when films age. Falling sales of one product can be offset by favourable sales of Barbie, UNO or Scrabble.'
        },
        {
          subPoint: 'Multiple revenue streams',
          elaboration: 'Selling to a single market limits revenue; Mattel covers infants (Fisher-Price), collectors (Hot Wheels) and families (board and card games).'
        }
      ]
    },
    perspective2: {
      title: 'Cash Flow Across the Portfolio',
      points: [
        {
          subPoint: 'Cash cows fund new products',
          elaboration: 'Long-established brands such as Barbie and Scrabble act as cash cows in mature markets, funding question marks such as new licensed toys.'
        },
        {
          subPoint: 'Future success and limits',
          elaboration: 'New products can become stars and later cash cows, replacing dogs. However, a broad portfolio is costly to manage and high market share does not guarantee profit.'
        }
      ]
    },
    synthesisAndEvaluation: 'A broad, balanced portfolio is vital for Mattel because it spreads risk in a fashion-driven industry and lets mature cash cows fund new products, supporting its market dominance over time.',
    rubricChecklist: [
      { id: 'q6m-bcg-02-c1', criterion: 'Explains risk spreading with Mattel examples', marks: 2 },
      { id: 'q6m-bcg-02-c2', criterion: 'Explains cash flow/cash cows funding new products', marks: 2 },
      { id: 'q6m-bcg-02-c3', criterion: 'Uses BCG terminology accurately', marks: 1 },
      { id: 'q6m-bcg-02-c4', criterion: 'Sustained application to Mattel throughout', marks: 1 }
    ]
  }
];

// ----------------------------------------------------
// Cram mode
// ----------------------------------------------------
export const CRAM_DEFINITIONS_BCG: DefinitionItem[] = [
  {
    id: 'def-bcg-01',
    term: 'Product Portfolio',
    subunit: S,
    definition: 'The **collection of all the products** owned by a business **at a point in time** (p.396).',
    keyExamTokens: ['collection of all products', 'owned by a business', 'point in time']
  },
  {
    id: 'def-bcg-02',
    term: 'Boston Consulting Group (BCG) Matrix',
    subunit: S,
    definition: 'A **situational and decision-making tool** for analysing the *product portfolio* of a business, showing whether products have **high or low market share** and operate in **high or low market growth** industries (p.639).',
    keyExamTokens: ['situational and decision-making tool', 'product portfolio', 'market share', 'market growth'],
    formulaOrExample: 'Devised by Bruce D. Henderson (1970).'
  },
  {
    id: 'def-bcg-03',
    term: 'Stars',
    subunit: S,
    definition: 'Products with **high or rising market share** in a **high growth market**; they have the potential to become *cash cows* if funded and marketed appropriately (p.639).',
    keyExamTokens: ['high market share', 'high growth', 'potential cash cows']
  },
  {
    id: 'def-bcg-04',
    term: 'Cash Cow (BCG)',
    subunit: S,
    definition: 'Any product that **generates significant money** due to its **large market share in a mature market** (p.639).',
    keyExamTokens: ['significant money', 'large market share', 'mature market'],
    formulaOrExample: 'Coca-Cola in soft drinks; Apple iPhone in smartphones (p.636).'
  },
  {
    id: 'def-bcg-05',
    term: 'Question Marks (Wild Cards)',
    subunit: S,
    definition: 'Products in **high market growth** industries with **low market share**; they *consume lots of cash* but generate little profit, if any (p.639).',
    keyExamTokens: ['high market growth', 'low market share', 'consume lots of cash']
  },
  {
    id: 'def-bcg-06',
    term: 'Dogs',
    subunit: S,
    definition: 'Products with **low market share** in **low growth or stagnant markets**; they do not generate much cash or profit (p.639).',
    keyExamTokens: ['low market share', 'low growth / stagnant', 'little cash or profit']
  },
  {
    id: 'def-bcg-07',
    term: 'Build (BCG Strategy)',
    subunit: S,
    definition: 'Investing the necessary resources to **increase market share** in order to **turn question marks into stars** (p.637).',
    keyExamTokens: ['invest resources', 'increase market share', 'question marks into stars']
  },
  {
    id: 'def-bcg-08',
    term: 'Harvest / Hold / Divest',
    subunit: S,
    definition: '**Harvest (milk):** reap profits, turning **stars into cash cows**. **Hold:** minimal investment to **keep cash cows** in position. **Divest:** **phase out or sell off dogs** to free resources (p.637).',
    keyExamTokens: ['harvest = stars to cash cows', 'hold = keep cash cows', 'divest = sell off dogs']
  }
];

export const CRAM_DISTINCTIONS_BCG: DistinctionItem[] = [
  {
    id: 'dist-bcg-01',
    conceptA: 'Question Marks',
    conceptB: 'Dogs',
    comparisonCriteria: 'Market growth and cash use',
    contrastStatement: 'Both have **low market share**, but **question marks** are in high growth markets and are the *main users of cash* (worth building if they can become stars), whereas **dogs** are in low growth or stagnant markets, generate little cash and are usually *divested* or revived with extension strategies.',
    examTrapWarning: 'Do not label every low-share product a dog: check the **market growth** first.'
  },
  {
    id: 'dist-bcg-02',
    conceptA: 'Market Share',
    conceptB: 'Market Growth',
    comparisonCriteria: 'What each BCG axis measures',
    contrastStatement: '**Market share** describes the **product\'s position against rivals** (largely within the firm\'s control), whereas **market growth** describes the **industry\'s growth rate** (largely outside the firm\'s control).',
    examTrapWarning: 'A falling-sales product is not automatically a dog: a product can lose share in a growing market (question mark).'
  }
];

export const CRAM_GOLDEN_RULES_BCG: GoldenMatrixRule[] = [
  {
    id: 'rule-bcg-01',
    ruleTitle: 'BCG Rule: The Textbook Strategy Map',
    category: 'BCG',
    corePrinciple: '**Figure 47.3 Strategy Map:** each quadrant has one product strategy (p.637).',
    actionProtocol: '**Question mark** -> **Build** | **Star** -> **Harvest** (turn into cash cow) | **Cash cow** -> **Hold** (minimal investment) | **Dog** -> **Divest** (or extension strategy).',
    examApplicationTip: 'Always add the cash flow link: cash cows are the main generators of cash, question marks the main users.'
  },
  {
    id: 'rule-bcg-02',
    ruleTitle: 'BCG Rule: Share Is Not Profit',
    category: 'BCG',
    corePrinciple: '**High market share does not guarantee profit**, and the matrix is only a snapshot.',
    actionProtocol: 'Evaluate with **Disneyland Paris** (high share, huge losses 2002-2006) and **COVID-19 PPE** (unpredictable growth) -> recommend using BCG with Ansoff, SWOT and STEEPLE.',
    examApplicationTip: 'In evaluation questions, state that the BCG matrix does not explain *why* a product sits in a quadrant.'
  }
];
