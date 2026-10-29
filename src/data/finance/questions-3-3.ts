import { MCQQuestion, TwoMarkQuestion, FourMarkQuestion, SixMarkQuestion } from '@/types/curriculum';

// ============================================================================
// Unit 3.3: Costs and Revenues - Question Bank
// Source: Paul Hoang, Business Management (5th ed.), Chapter 16
// ============================================================================

const S = '3.3-costs-and-revenues' as const;

export const MCQ_3_3: MCQQuestion[] = [
  {
    id: 'mcq-3.3-01', subunit: S, topicTag: 'Cost vs Price', questionNumber: 1,
    question: 'A customer says a shirt "cost $25" at a retailer. In business terminology, the $25 is best described as:',
    options: [
      { key: 'A', text: 'The cost of production' },
      { key: 'B', text: 'The price' },
      { key: 'C', text: 'A running cost' },
      { key: 'D', text: 'A direct cost' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'Price is the sum paid by the customer to purchase a good or service. Cost is the expenditure incurred by the producer.',
      distractorAnalysis: 'A, C and D all describe expenditure by the business, not the amount paid by the customer.'
    }
  },
  {
    id: 'mcq-3.3-02', subunit: S, topicTag: 'Set-up vs Running Costs', questionNumber: 2,
    question: 'Which of the following is a set-up cost for a new clothes retailer?',
    options: [
      { key: 'A', text: 'Replenishing stocks from suppliers' },
      { key: 'B', text: 'Monthly electricity bills' },
      { key: 'C', text: 'Legal fees for business registration and licensing' },
      { key: 'D', text: 'Depreciation on capital equipment' }
    ],
    correctAnswer: 'C',
    explanation: {
      correctRationale: 'Table 16.1 lists legal and professional fees, including registration and licensing, as set-up costs needed to start the business.',
      distractorAnalysis: 'A, B and D are ongoing running costs of operating the business.'
    }
  },
  {
    id: 'mcq-3.3-03', subunit: S, topicTag: 'Fixed Costs', questionNumber: 3,
    question: 'Which of the following is an example of a fixed cost?',
    options: [
      { key: 'A', text: 'Commission earned by sales staff' },
      { key: 'B', text: 'Interest payments on bank loans' },
      { key: 'C', text: 'Packaging costs directly associated with output' },
      { key: 'D', text: 'Hourly wages of production workers' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'Loan interest must be paid regardless of how much the business produces or sells, so it is a fixed cost.',
      distractorAnalysis: 'A, C and D are textbook examples of variable costs, which change in proportion with output or sales.'
    }
  },
  {
    id: 'mcq-3.3-04', subunit: S, topicTag: 'Fixed Costs Can Change', questionNumber: 4,
    question: "A landlord raises the rent on a firm's factory because property prices in the economy have risen. Which statement is correct?",
    options: [
      { key: 'A', text: 'Rent is now a variable cost because it has changed' },
      { key: 'B', text: 'Rent remains a fixed cost because the change is independent of the level of output' },
      { key: 'C', text: 'Rent becomes a direct cost' },
      { key: 'D', text: 'Total variable costs will rise' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'The textbook notes that fixed costs can change, but this happens independently of output - so rent is still a fixed cost.',
      distractorAnalysis: 'A confuses "changing" with "varying with output". C is wrong: rent is an overhead. D is wrong: rent is not a variable cost.'
    }
  },
  {
    id: 'mcq-3.3-05', subunit: S, topicTag: 'Cost Diagrams', questionNumber: 5,
    question: 'On a cost diagram, where does the total cost (TC) line begin?',
    options: [
      { key: 'A', text: 'At the origin' },
      { key: 'B', text: 'At the value of total variable costs' },
      { key: 'C', text: 'At the value of total fixed costs' },
      { key: 'D', text: 'At the break-even point' }
    ],
    correctAnswer: 'C',
    explanation: {
      correctRationale: 'Fixed costs must be paid even if there is no output, so at zero output TC = TFC (Figure 16.3).',
      distractorAnalysis: 'A describes the TVC line. B is wrong because TVC is zero at zero output. D is not part of this cost diagram.'
    }
  },
  {
    id: 'mcq-3.3-06', subunit: S, topicTag: 'TC and TVC Gap', questionNumber: 6,
    question: 'The vertical distance between the TC line and the TVC line at any level of output is equal to:',
    options: [
      { key: 'A', text: 'Average cost' },
      { key: 'B', text: 'Total fixed costs' },
      { key: 'C', text: 'Profit' },
      { key: 'D', text: 'Total revenue' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'Since TC = TFC + TVC, TC - TVC = TFC at every level of output.',
      distractorAnalysis: 'Average cost is TC / Q; profit and revenue are not shown by cost lines alone.'
    }
  },
  {
    id: 'mcq-3.3-07', subunit: S, topicTag: 'Average Cost Calculation', questionNumber: 7,
    question: 'A firm has total fixed costs of $20,000 and total variable costs of $14,500 at an output of 300 units. What is its average cost?',
    options: [
      { key: 'A', text: '$48.33' },
      { key: 'B', text: '$66.67' },
      { key: 'C', text: '$115.00' },
      { key: 'D', text: '$345.00' }
    ],
    correctAnswer: 'C',
    explanation: {
      correctRationale: 'TC = $20,000 + $14,500 = $34,500. AC = $34,500 / 300 = $115.',
      distractorAnalysis: 'A uses TVC only ($14,500 / 300). B uses TFC only ($20,000 / 300). D divides TC by 100.'
    }
  },
  {
    id: 'mcq-3.3-08', subunit: S, topicTag: 'Direct vs Variable', questionNumber: 8,
    question: 'Which statement about direct costs is correct?',
    options: [
      { key: 'A', text: 'Direct costs are always variable costs' },
      { key: 'B', text: 'Direct costs cannot be traced to a particular product' },
      { key: 'C', text: 'Direct costs can be fixed costs, as they are not necessarily related to the level of output' },
      { key: 'D', text: 'Direct costs are another name for overheads' }
    ],
    correctAnswer: 'C',
    explanation: {
      correctRationale: 'The textbook states that unlike variable costs, direct costs are not necessarily related to output - they can be fixed (e.g. solicitor\'s fees for buying a commercial building).',
      distractorAnalysis: 'A is too absolute. B describes indirect costs. D is wrong: overheads are indirect costs.'
    }
  },
  {
    id: 'mcq-3.3-09', subunit: S, topicTag: 'Airline Catering', questionNumber: 9,
    question: 'For a no-frills budget airline such as Ryanair, catering costs are classified as direct costs rather than variable costs because:',
    options: [
      { key: 'A', text: 'Meals are included in the ticket price of every passenger' },
      { key: 'B', text: 'Food and drinks are related to the flight, but not all passengers demand them as they are paid for individually' },
      { key: 'C', text: 'Catering costs are shared across all areas of the airline' },
      { key: 'D', text: 'Catering costs must be paid even if no flights take place' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'The textbook explains catering is directly related to the flight, but passengers pay for meals individually, so it does not rise in proportion to passenger numbers.',
      distractorAnalysis: 'A describes a mainstream airline such as Singapore Airlines (variable cost). C describes overheads. D describes fixed costs.'
    }
  },
  {
    id: 'mcq-3.3-10', subunit: S, topicTag: 'Indirect Costs', questionNumber: 10,
    question: 'A business sells many products. Which of the following is most likely to be an indirect cost (overhead)?',
    options: [
      { key: 'A', text: 'Raw materials for one product line' },
      { key: 'B', text: 'Salaries for administrative staff' },
      { key: 'C', text: 'Packaging for a specific product' },
      { key: 'D', text: 'Commission on sales of one product' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'Administrative salaries cannot be clearly traced to the production or sale of any single product, so they are overheads.',
      distractorAnalysis: 'A, C and D can each be traced to a particular product, so they are direct costs.'
    }
  },
  {
    id: 'mcq-3.3-11', subunit: S, topicTag: 'Revenue Calculation', questionNumber: 11,
    question: "Church's charges $300 on average for each pair of bespoke shoes and sells 3,000 pairs in a week. What is its weekly total revenue?",
    options: [
      { key: 'A', text: '$90,000' },
      { key: 'B', text: '$300,000' },
      { key: 'C', text: '$900,000' },
      { key: 'D', text: '$1,500,000' }
    ],
    correctAnswer: 'C',
    explanation: {
      correctRationale: 'TR = P x Q = $300 x 3,000 = $900,000.',
      distractorAnalysis: 'A and B are arithmetic errors. D uses the maximum capacity of 5,000 pairs rather than the quantity sold.'
    }
  },
  {
    id: 'mcq-3.3-12', subunit: S, topicTag: 'Average Revenue', questionNumber: 12,
    question: 'Average revenue (AR) is equal to:',
    options: [
      { key: 'A', text: 'Total revenue minus total costs' },
      { key: 'B', text: 'Price' },
      { key: 'C', text: 'Total costs divided by quantity' },
      { key: 'D', text: 'Price multiplied by quantity' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'AR = TR / Q, and since TR = P x Q, AR = P.',
      distractorAnalysis: 'A is profit. C is average cost. D is total revenue.'
    }
  },
  {
    id: 'mcq-3.3-13', subunit: S, topicTag: 'Percentage Change Calculation', questionNumber: 13,
    question: 'Big Bao sold 31,790 meals in 2021, a 10% increase on 2020, when the average price was $6.50. What was its 2020 sales revenue?',
    options: [
      { key: 'A', text: '$185,971.50' },
      { key: 'B', text: '$187,850' },
      { key: 'C', text: '$206,635' },
      { key: 'D', text: '$227,298.50' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: '2020 volume = 31,790 / 1.10 = 28,900 meals. Revenue = 28,900 x $6.50 = $187,850.',
      distractorAnalysis: 'A wrongly subtracts 10% of 31,790 (28,611 x $6.50). C is the 2021 volume x $6.50. D adds a further 10%.'
    }
  },
  {
    id: 'mcq-3.3-14', subunit: S, topicTag: 'Profit', questionNumber: 14,
    question: 'Ian Goff buys 50 kg of tomatoes at $0.80 per kg and sells them all at $1.20 per kg. What is his profit on tomatoes?',
    options: [
      { key: 'A', text: '$0.40' },
      { key: 'B', text: '$20' },
      { key: 'C', text: '$40' },
      { key: 'D', text: '$60' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'Revenue = 50 x $1.20 = $60; cost = 50 x $0.80 = $40; profit = $60 - $40 = $20.',
      distractorAnalysis: 'A is profit per kg. C is the cost. D is the revenue.'
    }
  },
  {
    id: 'mcq-3.3-15', subunit: S, topicTag: 'Revenue Streams - Advertising', questionNumber: 15,
    question: 'Under a "cost per click" arrangement, advertisers pay:',
    options: [
      { key: 'A', text: 'Based on the number of times their adverts are displayed' },
      { key: 'B', text: 'Only when customers actually click on the advert' },
      { key: 'C', text: 'A fixed annual subscription fee' },
      { key: 'D', text: 'A royalty based on the sales revenue of the advertiser' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'Google and Facebook offer cost per click, where advertisers pay only when customers click the advert.',
      distractorAnalysis: 'A describes cost per thousand impressions. C and D describe subscription fees and royalties.'
    }
  },
  {
    id: 'mcq-3.3-16', subunit: S, topicTag: 'Revenue Streams - Subventions', questionNumber: 16,
    question: 'Subsidies offered by the government to certain businesses to help reduce their costs of production are known as:',
    options: [
      { key: 'A', text: 'Donations' },
      { key: 'B', text: 'Dividends' },
      { key: 'C', text: 'Subventions' },
      { key: 'D', text: 'Royalties' }
    ],
    correctAnswer: 'C',
    explanation: {
      correctRationale: 'Subventions are government subsidies, usually given to organizations that benefit society (e.g. private schools, hospitals) or to fund R&D.',
      distractorAnalysis: 'Donations are gifts from individuals or organizations; dividends are a share of profits paid to shareholders; royalties are paid for use of a brand, patent or copyright.'
    }
  },
  {
    id: 'mcq-3.3-17', subunit: S, topicTag: 'Revenue Streams - Dividends', questionNumber: 17,
    question: 'Volkswagen holds shares in Porsche, Suzuki and Scania. Which revenue stream does this give Volkswagen?',
    options: [
      { key: 'A', text: 'Dividends' },
      { key: 'B', text: 'Sponsorship revenue' },
      { key: 'C', text: 'Transaction fees' },
      { key: 'D', text: 'Interest earnings' }
    ],
    correctAnswer: 'A',
    explanation: {
      correctRationale: 'Being a shareholder of other companies entitles a business to any declared dividends - a share of net profits distributed to shareholders.',
      distractorAnalysis: 'Interest comes from cash deposits; sponsorship and transaction fees are unrelated to share ownership.'
    }
  },
  {
    id: 'mcq-3.3-18', subunit: S, topicTag: 'Cost Control', questionNumber: 18,
    question: 'According to the UK Institute of Management, successful businesses focus their business strategy:',
    options: [
      { key: 'A', text: '80% on cost-cutting and 20% on raising revenue' },
      { key: 'B', text: '50% on cost-cutting and 50% on raising revenue' },
      { key: 'C', text: '80% on raising revenue and 20% on cost-cutting' },
      { key: 'D', text: 'Entirely on cost-cutting through the FORCE approach' }
    ],
    correctAnswer: 'C',
    explanation: {
      correctRationale: 'The textbook cites the UK Institute of Management: 80% on ways to raise revenues and only 20% on cost-cutting.',
      distractorAnalysis: 'A reverses the figures; B and D are not supported by the textbook.'
    }
  }
];

export const TWO_MARK_3_3: TwoMarkQuestion[] = [
  {
    id: 'q2m-3.3-01', subunit: S, questionNumber: '3.3.1',
    question: 'Distinguish between cost and price.',
    marks: 2, commandTerm: 'Distinguish', assessmentObjective: 'AO1',
    modelAnswer: 'Cost is the sum of money incurred by a business in the production process (e.g. raw materials, wages, rent) and is paid by the producer. Price is the amount of money a product is sold for, paid by the customer to purchase the good or service.',
    markBreakdown: [
      { mark: 1, criterion: 'Cost defined as expenditure incurred by the business/producer in production' },
      { mark: 1, criterion: 'Price defined as the amount paid by the customer for the product' }
    ],
    examinerTips: 'Make clear who pays each: the producer pays costs; the customer pays the price.'
  },
  {
    id: 'q2m-3.3-02', subunit: S, questionNumber: '3.3.2',
    question: 'Define the term fixed costs.',
    marks: 2, commandTerm: 'Define', assessmentObjective: 'AO1',
    modelAnswer: 'Fixed costs are costs of production that do not vary with the level of output or sales, such as rent or interest on loans. They must be paid even if there is no output.',
    markBreakdown: [
      { mark: 1, criterion: 'Costs that do not vary with / are independent of output or sales' },
      { mark: 1, criterion: 'Must be paid even at zero output, or a valid example (rent, loan interest, management salaries)' }
    ],
    examinerTips: "Avoid circular answers such as 'costs that are fixed'."
  },
  {
    id: 'q2m-3.3-03', subunit: S, questionNumber: '3.3.3',
    question: 'Distinguish between fixed costs and variable costs.',
    marks: 2, commandTerm: 'Distinguish', assessmentObjective: 'AO1',
    modelAnswer: 'Fixed costs do not change with the level of output and must be paid even if nothing is produced (e.g. rent). Variable costs change in proportion with output, so if output doubles they double, and they are zero at zero output (e.g. raw materials).',
    markBreakdown: [
      { mark: 1, criterion: 'Fixed costs independent of output (with example or zero-output point)' },
      { mark: 1, criterion: 'Variable costs change in proportion with output (with example)' }
    ],
    examinerTips: 'The textbook Common mistake box warns specifically against circular definitions for this question.'
  },
  {
    id: 'q2m-3.3-04', subunit: S, questionNumber: '3.3.4',
    question: 'Define the term direct costs.',
    marks: 2, commandTerm: 'Define', assessmentObjective: 'AO1',
    modelAnswer: 'Direct costs are costs specifically attributed to the production or sale of a particular good or service (or project), such as raw materials. They can be traced to a product or cost centre and would not be incurred without it.',
    markBreakdown: [
      { mark: 1, criterion: 'Costs attributed/traced to a particular product, project or cost centre' },
      { mark: 1, criterion: 'Would not be incurred without that product, or a valid example' }
    ]
  },
  {
    id: 'q2m-3.3-05', subunit: S, questionNumber: '3.3.5',
    question: 'Define the term indirect costs (overheads).',
    marks: 2, commandTerm: 'Define', assessmentObjective: 'AO1',
    modelAnswer: 'Indirect costs, or overheads, are costs that cannot be clearly traced to the production or sale of any single product, because they relate to all areas of the business, e.g. rent, lighting, administrative salaries and insurance.',
    markBreakdown: [
      { mark: 1, criterion: 'Cannot be traced to / do not directly relate to a specific product' },
      { mark: 1, criterion: 'Valid example (rent, lighting, admin salaries, insurance, utility bills)' }
    ]
  },
  {
    id: 'q2m-3.3-06', subunit: S, questionNumber: '3.3.6',
    question: 'Distinguish between set-up costs and running costs.',
    marks: 2, commandTerm: 'Distinguish', assessmentObjective: 'AO1',
    modelAnswer: 'Set-up costs are the items of expenditure needed to start a business, such as premises, machinery and the initial stock. Running costs are the ongoing costs of operating the business, such as wages, insurance premiums and replenishing stock.',
    markBreakdown: [
      { mark: 1, criterion: 'Set-up costs: needed to start the business, with example' },
      { mark: 1, criterion: 'Running costs: ongoing costs of operating, with example' }
    ]
  },
  {
    id: 'q2m-3.3-07', subunit: S, questionNumber: 'Question 16.3a',
    question: 'Outline the meaning of sales volume.',
    marks: 2, commandTerm: 'Outline', assessmentObjective: 'AO1',
    modelAnswer: 'Sales volume is the quantity (number of units) of a product sold over a period of time, e.g. Big Bao sold 31,790 lunchtime meals in 2021. Multiplying sales volume by price gives sales revenue.',
    markBreakdown: [
      { mark: 1, criterion: 'Number of units sold' },
      { mark: 1, criterion: 'Over a time period, or distinguished from sales revenue (value)' }
    ]
  },
  {
    id: 'q2m-3.3-08', subunit: S, questionNumber: 'Question 16.3b',
    question: "Big Bao sold 31,790 meals in 2021, a 10% increase on 2020, when the average price was $6.50. Calculate Big Bao's sales revenue in 2020.",
    marks: 2, commandTerm: 'Apply', assessmentObjective: 'AO1',
    modelAnswer: '2020 sales volume = 31,790 / 1.10 = 28,900 meals. 2020 sales revenue = 28,900 x $6.50 = $187,850.',
    markBreakdown: [
      { mark: 1, criterion: 'Correct 2020 volume of 28,900 units' },
      { mark: 1, criterion: 'Correct answer of $187,850' }
    ],
    examinerTips: 'Divide by 1.10; subtracting 10% of 31,790 gives the wrong base figure.'
  },
  {
    id: 'q2m-3.3-09', subunit: S, questionNumber: 'Question 16.4d',
    question: 'Ian Goff bought 100 kg of apples and sold 80 kg at $2 per kg. He sold the remaining stock at $1.50 per kg. Calculate the total revenue from the sale of apples.',
    marks: 2, commandTerm: 'Apply', assessmentObjective: 'AO1',
    modelAnswer: '80 kg x $2 = $160; 20 kg x $1.50 = $30. Total revenue = $160 + $30 = $190.',
    markBreakdown: [
      { mark: 1, criterion: 'Correct revenue from each batch ($160 and $30)' },
      { mark: 1, criterion: 'Correct total of $190' }
    ]
  },
  {
    id: 'q2m-3.3-10', subunit: S, questionNumber: 'Question 16.5a',
    question: 'Define the term revenue streams.',
    marks: 2, commandTerm: 'Define', assessmentObjective: 'AO1',
    modelAnswer: 'Revenue streams refer to the money coming into a business from its various business activities, not only from sales of goods and services, such as sponsorship deals, merchandise and royalty payments.',
    markBreakdown: [
      { mark: 1, criterion: 'Money coming into a business from its various activities' },
      { mark: 1, criterion: 'Valid example(s) such as sponsorship, merchandise, royalties, subscriptions' }
    ]
  },
  {
    id: 'q2m-3.3-11', subunit: S, questionNumber: '3.3.11',
    question: 'State the formulae for total revenue and average revenue.',
    marks: 2, commandTerm: 'State', assessmentObjective: 'AO1',
    modelAnswer: 'Total revenue = Price x Quantity sold (TR = P x Q). Average revenue = Total revenue / Quantity sold (AR = TR / Q), which equals price.',
    markBreakdown: [
      { mark: 1, criterion: 'TR = P x Q' },
      { mark: 1, criterion: 'AR = TR / Q (= P)' }
    ],
    examinerTips: 'These formulae are not given in the exam.'
  },
  {
    id: 'q2m-3.3-12', subunit: S, questionNumber: '3.3.12',
    question: 'Define the term profit.',
    marks: 2, commandTerm: 'Define', assessmentObjective: 'AO1',
    modelAnswer: "Profit exists if there is a positive difference between a firm's total revenues and its total costs, i.e. profit = total revenue - total costs.",
    markBreakdown: [
      { mark: 1, criterion: 'Difference between total revenue and total costs' },
      { mark: 1, criterion: 'Positive difference (revenue exceeds costs) / formula' }
    ]
  }
];

export const FOUR_MARK_3_3: FourMarkQuestion[] = [
  {
    id: 'q4m-3.3-01', subunit: S, questionNumber: 'Question 16.1b',
    question: 'In the context of the airline industry, distinguish between direct and indirect costs.',
    caseStimulus: "Catering costs on a mainstream airline such as Singapore Airlines are included in the ticket price. On 'no-frills' budget airlines such as Ryanair, easyJet and AirAsia, passengers pay for food and drinks individually. All airlines also pay for advertising and promotions and the remuneration of ground staff.",
    contextTitle: 'Airline Costs',
    marks: 4, commandTerm: 'Distinguish', assessmentObjective: 'AO2',
    peelModelAnswer: {
      point1: {
        title: 'Direct costs',
        point: 'Direct costs are costs specifically attributed to a particular product, project or flight, and would not be incurred without it.',
        evidence: 'For Ryanair, easyJet and AirAsia, catering costs are direct costs: food and drinks are directly related to the flight.',
        explanation: 'However, not all passengers demand meals, as these are paid for individually, so the cost is traced to the flight rather than rising in proportion to passengers.',
        link: 'Direct costs can therefore be fixed or variable, but they can always be traced to a specific flight or route.'
      },
      point2: {
        title: 'Indirect costs (overheads)',
        point: 'Indirect costs cannot be clearly traced to the production or sale of any single product or flight.',
        evidence: 'Advertising and promotions and the remuneration of ground staff are shared across all of an airline\'s flights.',
        explanation: 'These costs relate to all areas of the airline, so they cannot be assigned to one flight.',
        link: 'Unlike direct costs, overheads must be spread across the whole business.'
      }
    },
    rubricChecklist: [
      { id: 'q4m-3.3-01-c1', criterion: 'Accurate definition of direct costs', mark: 1 },
      { id: 'q4m-3.3-01-c2', criterion: 'Direct cost applied to airlines (e.g. catering on budget airlines)', mark: 1 },
      { id: 'q4m-3.3-01-c3', criterion: 'Accurate definition of indirect costs/overheads', mark: 1 },
      { id: 'q4m-3.3-01-c4', criterion: 'Indirect cost applied to airlines (e.g. advertising, ground staff)', mark: 1 }
    ]
  },
  {
    id: 'q4m-3.3-02', subunit: S, questionNumber: 'Question 16.4b',
    question: 'Apart from the loan, outline two other indirect costs that Ian Goff might have to pay.',
    caseStimulus: "Ian Goff owns and manages Goff's Organic Fresh Fruits in a small town in California, USA. Each morning he drives his delivery van to an out-of-town wholesale market to buy fresh organic produce. During peak seasons he employs two people to help at the market stall. He pays $1,200 rent to the landlady each month. He also pays for the loan on his one-year-old vehicle plus other running costs such as power and lighting.",
    contextTitle: "Goff's Organic Fresh Fruits",
    marks: 4, commandTerm: 'Outline', assessmentObjective: 'AO2',
    peelModelAnswer: {
      point1: {
        title: 'Rent',
        point: 'Rent is an indirect cost (overhead) because it cannot be traced to the sale of any single product.',
        evidence: 'Ian Goff pays $1,200 rent to the landlady each month.',
        explanation: 'The rent covers the premises used to sell all of his fruits and vegetables, whether he sells tomatoes or apples.',
        link: 'It must be paid regardless of how much he sells.'
      },
      point2: {
        title: 'Power and lighting',
        point: 'Power and lighting are overheads that relate to all areas of the business.',
        evidence: 'The case states he must pay other running costs such as power and lighting.',
        explanation: 'Like the rent, these costs cannot be clearly linked to the sale of one product such as tomatoes.',
        link: 'They must therefore be covered by revenue from all his products.'
      }
    },
    rubricChecklist: [
      { id: 'q4m-3.3-02-c1', criterion: 'First valid indirect cost identified (e.g. rent)', mark: 1 },
      { id: 'q4m-3.3-02-c2', criterion: 'First cost outlined in context (e.g. $1,200 per month, shared across all products)', mark: 1 },
      { id: 'q4m-3.3-02-c3', criterion: 'Second valid indirect cost identified (e.g. power and lighting, vehicle running costs)', mark: 1 },
      { id: 'q4m-3.3-02-c4', criterion: 'Second cost outlined in context', mark: 1 }
    ]
  },
  {
    id: 'q4m-3.3-03', subunit: S, questionNumber: 'Question 16.5b',
    question: 'Explain why businesses such as Adidas and Pepsi might want to sponsor a large football club such as MUFC.',
    caseStimulus: 'In 2013, Manchester United Football Club (MUFC) became the world\'s first sports club to be valued at over $3 billion. Being one of the most widely supported sports teams in the world, the club attracts a huge amount of sponsorship money. In 2015 MUFC signed a 10-year shirt sponsorship deal with Adidas worth around $108m a year. MUFC has also benefited from sponsorship deals with the Commercial Bank of Qatar, Emirates NBD Bank and Pepsi.',
    contextTitle: 'Manchester United Football Club',
    marks: 4, commandTerm: 'Explain', assessmentObjective: 'AO2',
    peelModelAnswer: {
      point1: {
        title: 'Prominent promotional display',
        point: "Sponsorship is a form of below-the-line promotion where the sponsor gets prominent display of its brand in return for financial support.",
        evidence: 'MUFC is one of the most widely supported sports teams in the world; Adidas paid around $108m a year for a shirt deal.',
        explanation: "The sponsor's brand is seen by the club's huge global fan base every time the shirts are worn or matches are shown.",
        link: 'This raises brand awareness for Adidas and Pepsi around the world.'
      },
      point2: {
        title: 'Exclusive advertising rights and association',
        point: 'Sponsors also receive exclusive advertising rights linked to the club.',
        evidence: 'MUFC was the first sports club valued at over $3 billion, so it is a highly prestigious brand.',
        explanation: 'Exclusive rights stop rival firms advertising with the club, and the sponsor is associated with a successful, well-known brand.',
        link: 'This can help Adidas and Pepsi increase their sales revenue.'
      }
    },
    rubricChecklist: [
      { id: 'q4m-3.3-03-c1', criterion: 'First reason explained (brand display / awareness)', mark: 1 },
      { id: 'q4m-3.3-03-c2', criterion: 'First reason applied to MUFC (global support, $108m Adidas deal)', mark: 1 },
      { id: 'q4m-3.3-03-c3', criterion: 'Second reason explained (exclusive advertising rights / association)', mark: 1 },
      { id: 'q4m-3.3-03-c4', criterion: 'Second reason applied to MUFC ($3bn value, prestige)', mark: 1 }
    ]
  },
  {
    id: 'q4m-3.3-04', subunit: S, questionNumber: 'Question 16.2c (adapted to 4 marks)',
    question: 'Using the cost data for Kompothekra Glass Technologies, explain the shape of the total fixed cost (TFC) and total cost (TC) curves.',
    caseStimulus: 'Anna Kompothekra owns a factory that produces fine glass ornaments in Agia Paraskevi, Greece. Total fixed costs are $20,000 at every level of output. Total variable costs are $5,000 at 100 units and $10,000 at 200 units. Total costs are $34,500 at 300 units and $38,000 at 400 units.',
    contextTitle: 'Kompothekra Glass Technologies',
    marks: 4, commandTerm: 'Explain', assessmentObjective: 'AO2',
    peelModelAnswer: {
      point1: {
        title: 'TFC curve',
        point: 'The TFC curve is a horizontal line because fixed costs do not vary with the level of output.',
        evidence: 'TFC is $20,000 at every level of output, including zero output.',
        explanation: 'Costs such as rent must be paid regardless of how many ornaments are produced.',
        link: 'So TFC is drawn flat at $20,000.'
      },
      point2: {
        title: 'TC curve',
        point: 'The TC curve starts at the level of TFC and rises with output, because TC = TFC + TVC.',
        evidence: 'At zero output TC = $20,000; at 100 units TC = $20,000 + $5,000 = $25,000; at 400 units TC = $38,000.',
        explanation: 'As more ornaments are produced, variable costs such as raw materials rise, so TC rises; the gap between TC and TVC is always $20,000.',
        link: 'The TC line therefore runs above the TVC line by the amount of TFC.'
      }
    },
    rubricChecklist: [
      { id: 'q4m-3.3-04-c1', criterion: 'Explains TFC is horizontal because fixed costs are independent of output', mark: 1 },
      { id: 'q4m-3.3-04-c2', criterion: 'Applies $20,000 TFC', mark: 1 },
      { id: 'q4m-3.3-04-c3', criterion: 'Explains TC starts at TFC and rises because TC = TFC + TVC', mark: 1 },
      { id: 'q4m-3.3-04-c4', criterion: 'Applies case data (e.g. $25,000 at 100 units, gap of $20,000)', mark: 1 }
    ]
  },
  {
    id: 'q4m-3.3-05', subunit: S, questionNumber: 'Case Study 16.2',
    question: 'Explain two revenue streams, other than ticket sales, that budget airlines can use.',
    caseStimulus: 'SpiceJet Ltd. charges for hot meals, snacks and beverages. Jetstar and Scoot lend out iPads to passengers for a fee. AirAsia customers can pay for the privilege of being seated in a children-free quiet zone. Ryanair failed in its attempt to charge passengers for the use of toilets, but now offers advertising space on its planes, including on the wing tips. According to the Wall Street Journal, low-cost airlines earn around 20% of their revenue from these alternative revenue streams.',
    contextTitle: 'Revenue Streams in the Budget-Airline Industry',
    marks: 4, commandTerm: 'Explain', assessmentObjective: 'AO2',
    peelModelAnswer: {
      point1: {
        title: 'Transaction fees for extras',
        point: 'Budget airlines charge transaction fees for optional extras and services.',
        evidence: 'SpiceJet charges for meals and snacks, Jetstar and Scoot rent out iPads, and AirAsia sells seats in a quiet zone.',
        explanation: 'Low base fares attract customers, and extra revenue is earned from those who choose to pay for extras.',
        link: 'These streams provide around 20% of low-cost airlines\' revenue.'
      },
      point2: {
        title: 'Advertising revenue',
        point: 'Airlines can sell advertising space to other businesses.',
        evidence: 'Ryanair offers advertising space on its planes, including the wing tips.',
        explanation: 'Its planes are seen by many passengers, so other firms will pay to display adverts there.',
        link: 'This brings in revenue without needing to sell more tickets.'
      }
    },
    rubricChecklist: [
      { id: 'q4m-3.3-05-c1', criterion: 'First revenue stream explained (transaction fees / extras)', mark: 1 },
      { id: 'q4m-3.3-05-c2', criterion: 'First stream applied (SpiceJet, Jetstar/Scoot, AirAsia)', mark: 1 },
      { id: 'q4m-3.3-05-c3', criterion: 'Second revenue stream explained (advertising)', mark: 1 },
      { id: 'q4m-3.3-05-c4', criterion: 'Second stream applied (Ryanair wing-tip advertising)', mark: 1 }
    ]
  }
];

export const SIX_MARK_3_3: SixMarkQuestion[] = [
  {
    id: 'q6m-3.3-01', subunit: S, questionNumber: 'Question 16.5c',
    question: 'Examine the view that the senior management team at MUFC were correct to choose AIG as their sponsor despite the larger offer from Mansion at the time.',
    caseStimulus: "Manchester United Football Club (MUFC) is one of the most widely supported sports teams in the world. Match-day revenues account for less than 30% of MUFC's total revenue streams, which also include broadcasting rights, sponsorship deals and merchandise sales across the globe. In 2021, the club signed a five-year shirt sponsorship deal worth around $340m with TeamViewer. Back in 2006, MUFC chose to reject a four-year sponsorship deal worth over $100m with Mansion, an online gambling company. Instead, the senior management team opted to sign a four-year sponsorship deal with American International Group (AIG) in a deal worth $90.5m.",
    contextTitle: 'MUFC: AIG vs Mansion Sponsorship',
    marks: 6, commandTerm: 'Examine', assessmentObjective: 'AO2/AO3',
    levelBreakdown: [
      { range: '1-2', descriptor: 'Describes sponsorship or revenue streams with little application to MUFC and no judgement.' },
      { range: '3-4', descriptor: 'Explains arguments for or against the AIG decision with application, but lacks balance or a supported judgement.' },
      { range: '5-6', descriptor: 'Balanced examination of the lost revenue against ethical/brand considerations, applying the case figures, with a justified conclusion.' }
    ],
    perspective1: {
      title: 'Against the decision: lost revenue',
      points: [
        { subPoint: 'Revenue forgone', elaboration: 'Mansion offered over $100m compared with $90.5m from AIG, so MUFC gave up at least $9.5m of sponsorship revenue over four years.' },
        { subPoint: 'Importance of sponsorship', elaboration: 'Match-day revenue is less than 30% of total revenue, so sponsorship is a key revenue stream; more revenue could fund players and raise profit.' }
      ]
    },
    perspective2: {
      title: 'For the decision: ethics and brand image',
      points: [
        { subPoint: 'Ethical considerations', elaboration: "Sponsorship gives the sponsor prominent display of its brand. Promoting an online gambling company to MUFC's huge global fan base could be viewed as unethical and damage the club's image." },
        { subPoint: 'Protecting future revenue streams', elaboration: "A strong reputation helps attract other sponsors and merchandise sales; MUFC later attracted Adidas, Pepsi and a $340m TeamViewer deal, suggesting its brand value was protected." }
      ]
    },
    synthesisAndEvaluation: "On balance, management were probably correct. The difference of around $9.5m is small relative to a club valued at over $3 billion with many revenue streams (broadcasting, merchandise, sponsorship). Raising revenue matters, but the textbook notes that ethics affects costs and revenues; associating the club with gambling risked damaging the brand that underpins its other streams. The answer depends on the reaction of fans and other sponsors, which is hard to measure, but protecting long-term revenue streams justifies the smaller deal.",
    rubricChecklist: [
      { id: 'q6m-3.3-01-c1', criterion: 'Understanding of sponsorship as a revenue stream', marks: 1 },
      { id: 'q6m-3.3-01-c2', criterion: 'Application of case figures ($100m vs $90.5m, <30% match-day revenue)', marks: 1 },
      { id: 'q6m-3.3-01-c3', criterion: 'Analysis of the argument against (revenue forgone)', marks: 1 },
      { id: 'q6m-3.3-01-c4', criterion: 'Analysis of the argument for (ethics, brand image, future streams)', marks: 1 },
      { id: 'q6m-3.3-01-c5', criterion: 'Justified judgement', marks: 2 }
    ]
  },
  {
    id: 'q6m-3.3-02', subunit: S, questionNumber: 'Key concept (FORCE)',
    question: "Discuss the extent to which a 'FORCE' (Focus On Reducing Costs Everywhere) approach is a sustainable strategy for a business to stay competitive.",
    caseStimulus: "Some businesses use the 'FORCE' approach (Focus On Reducing Costs Everywhere) as a strategy for staying competitive. Cost control is crucial if a business is to maintain and/or improve its profitability. However, the UK Institute of Management suggests that successful businesses focus 80% of their business strategy on ways to raise revenues and only 20% on cost-cutting. For example, Kering, the French retail conglomerate, bought luxury brands Gucci and Yves Saint Laurent in order to earn more revenue - not to save on its costs.",
    contextTitle: 'Cost Cutting vs Raising Revenue',
    marks: 6, commandTerm: 'Discuss', assessmentObjective: 'AO2/AO3',
    levelBreakdown: [
      { range: '1-2', descriptor: 'Describes cost-cutting with little analysis and no judgement.' },
      { range: '3-4', descriptor: 'Explains benefits or limitations of cost-cutting, with some use of the stimulus, but one-sided or unsupported judgement.' },
      { range: '5-6', descriptor: 'Balanced discussion of benefits and limitations (including ethics and the role of revenue), with a justified judgement on sustainability.' }
    ],
    perspective1: {
      title: 'Benefits of FORCE',
      points: [
        { subPoint: 'Control and profitability', elaboration: 'Being aware of costs allows managers to control finances, especially in times of change and uncertainty; cost control helps maintain or improve profitability.' },
        { subPoint: 'Efficiency', elaboration: 'Cost-cutting can be justified if it leads to improved and sustained efficiency and profitability, helping the firm stay competitive.' }
      ]
    },
    perspective2: {
      title: 'Limitations of FORCE',
      points: [
        { subPoint: 'Does not automatically raise profit', elaboration: 'Cost-cutting does not automatically raise profitability. Successful firms focus 80% of strategy on raising revenue, as Kering did by buying Gucci and Yves Saint Laurent.' },
        { subPoint: 'Ethical problems', elaboration: 'Cutting costs everywhere can lead to poorer working conditions, limited training and development, pay cuts or job losses, harming motivation and reputation.' }
      ]
    },
    synthesisAndEvaluation: 'FORCE is only sustainable to a limited extent. Costs can only be cut so far, and cutting everywhere risks ethical problems and lower staff morale, whereas revenue growth has no such ceiling. The extent also depends on organizational culture and management preferences. A sustainable strategy combines cost control (supported by budgets, variance analysis and cost/profit centres) with creative ways of raising revenue.',
    rubricChecklist: [
      { id: 'q6m-3.3-02-c1', criterion: 'Understanding of cost control / FORCE', marks: 1 },
      { id: 'q6m-3.3-02-c2', criterion: 'Use of stimulus (80/20, Kering)', marks: 1 },
      { id: 'q6m-3.3-02-c3', criterion: 'Analysis of benefits of cost-cutting', marks: 1 },
      { id: 'q6m-3.3-02-c4', criterion: 'Analysis of limitations (ethics, no automatic profit rise)', marks: 1 },
      { id: 'q6m-3.3-02-c5', criterion: 'Justified judgement on sustainability', marks: 2 }
    ]
  }
];
