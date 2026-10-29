import { MCQQuestion, TwoMarkQuestion, FourMarkQuestion, SixMarkQuestion } from '@/types/curriculum';

// Unit 3.2 Sources of finance — questions based on Paul Hoang (5th ed.), Chapter 15.

const S = '3.2-sources-of-finance' as const;

// ============================================================================
// MCQs
// ============================================================================
export const MCQ_3_2: MCQQuestion[] = [
  {
    id: 'mcq-3.2-01', subunit: S, topicTag: 'Internal vs External Finance', questionNumber: 1,
    question: 'Which of the following is an internal source of finance?',
    options: [
      { key: 'A', text: 'Trade credit' },
      { key: 'B', text: 'Retained profit' },
      { key: 'C', text: 'Debentures' },
      { key: 'D', text: 'Crowdfunding' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'The three internal sources in the syllabus are personal funds, retained profit and the sale of assets. Retained profit is generated within the business.',
      distractorAnalysis: 'Trade credit (A), debentures (C) and crowdfunding (D) all come from outside the business (suppliers, lenders, the public), so they are external sources.'
    }
  },
  {
    id: 'mcq-3.2-02', subunit: S, topicTag: 'Retained Profit', questionNumber: 2,
    question: 'Retained profit is best defined as the profit kept by a business after paying:',
    options: [
      { key: 'A', text: 'wages to employees and interest to banks' },
      { key: 'B', text: 'suppliers and creditors' },
      { key: 'C', text: 'corporate taxes to the government and dividends to shareholders' },
      { key: 'D', text: 'interest to debenture holders only' }
    ],
    correctAnswer: 'C',
    explanation: {
      correctRationale: 'The textbook defines retained profit as the surplus kept after paying corporate taxes to the government and dividend payments to shareholders.',
      distractorAnalysis: 'A and B describe costs deducted before profit is calculated; D leaves out tax and dividends.'
    }
  },
  {
    id: 'mcq-3.2-03', subunit: S, topicTag: 'IPO vs Share Issue', questionNumber: 3,
    question: 'An existing publicly held company raises further finance by selling more of its shares. This is known as:',
    options: [
      { key: 'A', text: 'an initial public offering' },
      { key: 'B', text: 'a share issue (share placement)' },
      { key: 'C', text: 'a debenture' },
      { key: 'D', text: 'sale-and-leaseback' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'A share issue (or share placement) is when an already public company sells more shares to raise further finance.',
      distractorAnalysis: 'An IPO (A) is a first-time flotation. A debenture (C) is a long-term loan. Sale-and-leaseback (D) involves selling a fixed asset and leasing it back.'
    }
  },
  {
    id: 'mcq-3.2-04', subunit: S, topicTag: 'Secondary Market', questionNumber: 4,
    question: 'Shareholder X sells 1,000 shares in a public limited company to investor Y on the stock exchange. How much finance does the company receive?',
    options: [
      { key: 'A', text: 'The full value of the 1,000 shares' },
      { key: 'B', text: 'Nothing, as the shares are traded on the secondary market' },
      { key: 'C', text: 'Only the profit made by shareholder X' },
      { key: 'D', text: 'A commission set by the stock exchange' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'Textbook exam tip: when shareholders sell their shares, the company receives none of the money because these are second-hand shares traded on the secondary market. No new shares are issued.',
      distractorAnalysis: 'A, C and D all wrongly assume the company gains from trade between investors.'
    }
  },
  {
    id: 'mcq-3.2-05', subunit: S, topicTag: 'Debentures', questionNumber: 5,
    question: 'Which statement about debentures is correct?',
    options: [
      { key: 'A', text: 'Debenture holders have voting rights at the AGM.' },
      { key: 'B', text: 'Debenture holders are only paid interest when the business makes a profit.' },
      { key: 'C', text: 'Debenture holders are paid interest before shareholders receive dividends.' },
      { key: 'D', text: 'Issuing debentures reduces a firm\'s gearing ratio.' }
    ],
    correctAnswer: 'C',
    explanation: {
      correctRationale: 'Debenture holders receive interest even if the business makes a loss and before shareholders are paid any dividends.',
      distractorAnalysis: 'A: debenture holders have no ownership or voting rights. B: interest is paid even when the firm makes a loss. D: debentures increase gearing.'
    }
  },
  {
    id: 'mcq-3.2-06', subunit: S, topicTag: 'Overdrafts', questionNumber: 6,
    question: 'What is a major disadvantage of an overdraft?',
    options: [
      { key: 'A', text: 'It is repayable on demand from the lender.' },
      { key: 'B', text: 'Interest is charged on the full limit even when it is not used.' },
      { key: 'C', text: 'It dilutes the ownership of the business.' },
      { key: 'D', text: 'It must be secured against land or buildings.' }
    ],
    correctAnswer: 'A',
    explanation: {
      correctRationale: 'The textbook states that a major disadvantage of overdrafts is that they are repayable on demand from the lender.',
      distractorAnalysis: 'B: interest is charged daily only if the business overdraws. C applies to share capital. D describes a mortgage.'
    }
  },
  {
    id: 'mcq-3.2-07', subunit: S, topicTag: 'Trade Credit', questionNumber: 7,
    question: 'A supplier allows a retailer 60 days to pay for goods delivered today. In this arrangement the retailer is the:',
    options: [
      { key: 'A', text: 'creditor' },
      { key: 'B', text: 'lessor' },
      { key: 'C', text: 'debtor' },
      { key: 'D', text: 'business angel' }
    ],
    correctAnswer: 'C',
    explanation: {
      correctRationale: 'Organizations offering trade credit are creditors. The customers who owe money (here, the retailer) are debtors.',
      distractorAnalysis: 'A: the supplier is the creditor. B: a lessor hires out assets. D: business angels are wealthy investors.'
    }
  },
  {
    id: 'mcq-3.2-08', subunit: S, topicTag: 'Leasing vs Hire Purchase', questionNumber: 8,
    question: 'What is the main difference between hire purchase and leasing?',
    options: [
      { key: 'A', text: 'With hire purchase, the buyer eventually owns the asset after the last instalment.' },
      { key: 'B', text: 'With leasing, interest is charged but no rent is paid.' },
      { key: 'C', text: 'With hire purchase, the lessor is responsible for repairs and maintenance.' },
      { key: 'D', text: 'Leasing always works out cheaper than hire purchase in the long term.' }
    ],
    correctAnswer: 'A',
    explanation: {
      correctRationale: 'HP differs from leasing because the buyer eventually owns the asset when the final instalment is paid. With leasing, the lessor remains the legal owner.',
      distractorAnalysis: 'B: the lessee pays rent. C: lessor maintenance applies to leasing. D: in the long term leasing is more expensive than HP or buying outright.'
    }
  },
  {
    id: 'mcq-3.2-09', subunit: S, topicTag: 'Sale-and-Leaseback', questionNumber: 9,
    question: 'In 2013 Wizz Air sold six Airbus A320 aircraft to COB Leasing Co. and immediately leased them back. Which statement is true?',
    options: [
      { key: 'A', text: 'Wizz Air kept legal ownership of the aircraft.' },
      { key: 'B', text: 'Wizz Air raised finance while still using the aircraft.' },
      { key: 'C', text: 'COB Leasing Co. became the lessee.' },
      { key: 'D', text: 'This is a form of hire purchase.' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'Sale-and-leaseback transfers ownership to raise finance ($549 million for Wizz Air), but the asset does not physically leave the business.',
      distractorAnalysis: 'A: ownership transfers to COB. C: COB is the lessor and Wizz Air the lessee. D: with HP the buyer ends up owning the asset.'
    }
  },
  {
    id: 'mcq-3.2-10', subunit: S, topicTag: 'Microfinance', questionNumber: 10,
    question: 'Which is a disadvantage of microfinance providers identified in the textbook?',
    options: [
      { key: 'A', text: 'Job creation' },
      { key: 'B', text: 'Accessibility' },
      { key: 'C', text: 'Limited eligibility' },
      { key: 'D', text: 'Social wellbeing' }
    ],
    correctAnswer: 'C',
    explanation: {
      correctRationale: 'Table 15.1 lists limited eligibility (not all poor people qualify, because for-profit providers must check that borrowers can repay) as a disadvantage, alongside immorality and limited finance.',
      distractorAnalysis: 'Job creation, accessibility and social wellbeing are all listed as advantages.'
    }
  },
  {
    id: 'mcq-3.2-11', subunit: S, topicTag: 'Business Angels', questionNumber: 11,
    question: 'Which is a disadvantage to the owner of using a business angel?',
    options: [
      { key: 'A', text: 'The owner loses some control, as the angel takes a proactive role.' },
      { key: 'B', text: 'Interest is charged daily.' },
      { key: 'C', text: 'The finance is repayable on demand.' },
      { key: 'D', text: 'The angel has no business experience to offer.' }
    ],
    correctAnswer: 'A',
    explanation: {
      correctRationale: 'Business angels usually take a proactive role in running the venture, so the owner loses some control. The firm may also have to buy out the angel\'s stake later.',
      distractorAnalysis: 'B and C describe overdrafts. D is wrong: angels bring an abundance of experience.'
    }
  },
  {
    id: 'mcq-3.2-12', subunit: S, topicTag: 'Ownership and Sources (Table 15.2)', questionNumber: 12,
    question: 'According to Table 15.2, which source of finance is available to a private limited company but NOT to a sole trader?',
    options: [
      { key: 'A', text: 'Overdrafts' },
      { key: 'B', text: 'Share capital' },
      { key: 'C', text: 'Trade credit' },
      { key: 'D', text: 'Leasing' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'Share capital is money raised from selling shares in a limited liability company, so it is only available to private and public limited companies.',
      distractorAnalysis: 'Overdrafts, trade credit and leasing are available to all five types of organization in Table 15.2.'
    }
  },
  {
    id: 'mcq-3.2-13', subunit: S, topicTag: 'Short- vs Long-Term Finance', questionNumber: 13,
    question: 'Which source of finance would be most appropriate to buy a new factory?',
    options: [
      { key: 'A', text: 'Overdraft' },
      { key: 'B', text: 'Trade credit' },
      { key: 'C', text: 'Mortgage' },
      { key: 'D', text: 'Credit card' }
    ],
    correctAnswer: 'C',
    explanation: {
      correctRationale: 'Under the Duration factor, long-term capital expenditure such as a new factory suits long-term loans such as mortgages or debentures.',
      distractorAnalysis: 'Overdrafts, trade credit and credit cards are short-term sources for working capital and day-to-day running.'
    }
  },
  {
    id: 'mcq-3.2-14', subunit: S, topicTag: 'SPACED Factors', questionNumber: 14,
    question: 'In the SPACED framework for choosing a source of finance, the letter "E" stands for:',
    options: [
      { key: 'A', text: 'Economies of scale' },
      { key: 'B', text: 'External factors' },
      { key: 'C', text: 'Equity' },
      { key: 'D', text: 'Expenditure' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'SPACED = Size and status of firm, Purpose, Amount required, Cost, External factors (e.g. the economy and interest rates), Duration.',
      distractorAnalysis: 'Economies of scale are part of "Size and status". Equity and expenditure are not SPACED headings.'
    }
  },
  {
    id: 'mcq-3.2-15', subunit: S, topicTag: 'Calculation: Wizz Air Passengers', questionNumber: 15,
    question: 'Wizz Air carried 40 million passengers in 2019 and 16.6 million in 2020. By how many passengers did numbers fall?',
    options: [
      { key: 'A', text: '16.6 million' },
      { key: 'B', text: '23.4 million' },
      { key: 'C', text: '24.4 million' },
      { key: 'D', text: '56.6 million' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: '40 million - 16.6 million = 23.4 million. (16.6 / 40 = 41.5%, which the textbook rounds to 42% of the previous year.)',
      distractorAnalysis: 'A is the 2020 figure, C is an arithmetic slip, and D adds the two figures together.'
    }
  },
  {
    id: 'mcq-3.2-16', subunit: S, topicTag: 'Gearing & External Factors', questionNumber: 16,
    question: 'Why are businesses with a high gearing ratio regarded as high risk by lenders?',
    options: [
      { key: 'A', text: 'They have too much retained profit.' },
      { key: 'B', text: 'They already have debt commitments and are more vulnerable when interest rates rise.' },
      { key: 'C', text: 'They cannot use trade credit.' },
      { key: 'D', text: 'Their shareholders have no voting rights.' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'Gearing is long-term external borrowing as a percentage of capital employed. Highly geared firms have existing debt commitments, and rising interest rates raise their repayments.',
      distractorAnalysis: 'A, C and D are unrelated to gearing.'
    }
  }
];

// ============================================================================
// 2-mark questions (AO1)
// ============================================================================
export const TWO_MARK_3_2: TwoMarkQuestion[] = [
  {
    id: 'q2m-3.2-01', subunit: S, questionNumber: '3.2.1', question: 'Define the term sources of finance.', marks: 2, commandTerm: 'Define', assessmentObjective: 'AO1',
    modelAnswer: 'Sources of finance is the general term for where or how businesses obtain their funds, for example from personal funds, retained profits, loan capital or share capital. They can be internal or external.',
    markBreakdown: [
      { mark: 1, criterion: 'Where or how a business obtains its funds' },
      { mark: 1, criterion: 'Valid example(s) or the internal/external split' }
    ]
  },
  {
    id: 'q2m-3.2-02', subunit: S, questionNumber: '3.2.2', question: 'Define the term initial public offering (IPO).', marks: 2, commandTerm: 'Define', assessmentObjective: 'AO1',
    modelAnswer: 'An IPO is when a business converts its legal status to a publicly traded company by floating (selling) its shares on a stock exchange for the first time, e.g. Agricultural Bank of China raised $22.1 billion in 2010.',
    markBreakdown: [
      { mark: 1, criterion: 'Selling/floating shares on a stock exchange' },
      { mark: 1, criterion: 'For the first time / becoming a publicly traded company' }
    ],
    examinerTips: 'Textbook Question 15.1(a). The words "first time" separate an IPO from a share issue.'
  },
  {
    id: 'q2m-3.2-03', subunit: S, questionNumber: '3.2.3', question: 'Define the term debentures.', marks: 2, commandTerm: 'Define', assessmentObjective: 'AO1',
    modelAnswer: 'Debentures are long-term loans issued by a business. Holders receive interest even if the business makes a loss and before shareholders are paid dividends, but they have no ownership or voting rights.',
    markBreakdown: [
      { mark: 1, criterion: 'Long-term loan issued by a business' },
      { mark: 1, criterion: 'Interest paid regardless of profit / before dividends / no ownership or voting rights' }
    ],
    examinerTips: 'Textbook Question 15.2(a).'
  },
  {
    id: 'q2m-3.2-04', subunit: S, questionNumber: '3.2.4', question: 'Describe the meaning of sale-and-leaseback as a source of finance.', marks: 2, commandTerm: 'Describe', assessmentObjective: 'AO1',
    modelAnswer: 'Sale-and-leaseback is when a business sells a fixed asset to raise finance and immediately leases it back. Ownership transfers to the buyer, but the asset does not physically leave the business, e.g. Wizz Air raised $549 million on six A320 aircraft.',
    markBreakdown: [
      { mark: 1, criterion: 'Selling a fixed asset to raise finance' },
      { mark: 1, criterion: 'Immediately leasing it back, so the asset stays in use' }
    ],
    examinerTips: 'Textbook Question 15.3(a).'
  },
  {
    id: 'q2m-3.2-05', subunit: S, questionNumber: '3.2.5', question: 'Define the term business angels.', marks: 2, commandTerm: 'Define', assessmentObjective: 'AO1',
    modelAnswer: 'Business angels are extremely wealthy individuals who risk their own money by investing in small to medium-sized businesses with high growth potential, i.e. high-risk, high-return ventures.',
    markBreakdown: [
      { mark: 1, criterion: 'Wealthy individuals investing their own money' },
      { mark: 1, criterion: 'In small/medium businesses with high growth potential (high risk, high return)' }
    ],
    examinerTips: 'Textbook Question 15.4(a).'
  },
  {
    id: 'q2m-3.2-06', subunit: S, questionNumber: '3.2.6', question: 'Define the term retained profit.', marks: 2, commandTerm: 'Define', assessmentObjective: 'AO1',
    modelAnswer: 'Retained profit is the value of the surplus a business keeps to use within the business after paying corporate taxes to the government and dividends to shareholders.',
    markBreakdown: [
      { mark: 1, criterion: 'Profit kept within the business' },
      { mark: 1, criterion: 'After tax and dividends have been paid' }
    ]
  },
  {
    id: 'q2m-3.2-07', subunit: S, questionNumber: '3.2.7', question: 'Distinguish between a creditor and a debtor.', marks: 2, commandTerm: 'Distinguish', assessmentObjective: 'AO1',
    modelAnswer: 'A creditor is an organization that offers credit (such as a supplier giving trade credit) and is owed money. A debtor is the customer who has bought on credit and owes the money, usually within 30-60 days.',
    markBreakdown: [
      { mark: 1, criterion: 'Creditor: offers credit / is owed money' },
      { mark: 1, criterion: 'Debtor: owes money / buys now, pays later' }
    ],
    examinerTips: 'Textbook review question 13.'
  },
  {
    id: 'q2m-3.2-08', subunit: S, questionNumber: '3.2.8', question: 'Define the term crowdfunding.', marks: 2, commandTerm: 'Define', assessmentObjective: 'AO1',
    modelAnswer: 'Crowdfunding is raising finance for a business venture or project by getting small amounts of money from a large number of people, usually through online platforms.',
    markBreakdown: [
      { mark: 1, criterion: 'Small amounts from a large number of people' },
      { mark: 1, criterion: 'For a venture/project, usually via online platforms' }
    ]
  },
  {
    id: 'q2m-3.2-09', subunit: S, questionNumber: '3.2.9', question: 'Distinguish between short-term and long-term sources of finance.', marks: 2, commandTerm: 'Distinguish', assessmentObjective: 'AO1',
    modelAnswer: 'Short-term sources are available for less than one year and pay for daily or routine operations (e.g. overdrafts, trade credit). Long-term sources are available for more than 12 months and pay for fixed assets or expansion (e.g. mortgages, debentures, share capital).',
    markBreakdown: [
      { mark: 1, criterion: 'Short term: under 12 months, daily operations, with an example' },
      { mark: 1, criterion: 'Long term: over 12 months, fixed assets/expansion, with an example' }
    ]
  },
  {
    id: 'q2m-3.2-10', subunit: S, questionNumber: '3.2.10', question: 'Outline why Kellett School might have decided to sell debentures.', marks: 2, commandTerm: 'Outline', assessmentObjective: 'AO1',
    modelAnswer: 'Kellett School needed a large amount of long-term finance for capital expenditure: its move to a new HK$200m campus. Debentures (up to HK$10m each) raise this finance without the school losing any control, because debenture holders have no ownership or voting rights.',
    markBreakdown: [
      { mark: 1, criterion: 'Need for long-term finance for the new HK$200m campus (capital expenditure)' },
      { mark: 1, criterion: 'Benefit of debentures, e.g. no loss of control / common in Hong Kong international schools' }
    ],
    examinerTips: 'Textbook Question 15.2(b). Use case figures.'
  },
  {
    id: 'q2m-3.2-11', subunit: S, questionNumber: '3.2.11', question: 'State two internal sources of finance.', marks: 2, commandTerm: 'State', assessmentObjective: 'AO1',
    modelAnswer: 'Any two of: personal funds, retained profit, sale of assets.',
    markBreakdown: [
      { mark: 1, criterion: 'First valid internal source' },
      { mark: 1, criterion: 'Second valid internal source' }
    ]
  }
];

// ============================================================================
// 4-mark questions (AO2)
// ============================================================================
const ABC_STIMULUS = 'In August 2010, Agricultural Bank of China (ABC) completed its initial public offering (IPO) in Shanghai and Hong Kong, raising $22.1 billion. Despite the weak market sentiment in Asian stock markets and fears that shares were generally overvalued at the time, investors poured money into one of China\'s largest lenders. Today, ABC has over 320 million customers across 24,000 branches. ABC\'s flotation proved to be the world\'s largest ever at the time, beating the previous record of $21.9 billion set by the IPO of China\'s largest bank, Industrial and Commercial Bank of China (ICBC) in October 2006.';

const KELLETT_STIMULUS = 'In 2013, Kellett School in Hong Kong introduced record-breaking debentures up to the value of HK$10m (US$1.29m), refundable when students eventually leave the school. Parents with more than one child at the school would get a small discount. Its school fees ranged from HK$123,500 to HK$168,800 per year (US$15,930 to US$21,775). The timing coincided with the school\'s move to a new HK$200m (US$25.8m) campus with much-improved facilities such as a large auditorium, swimming pool, Astroturf multisport areas, an extensive library and state-of-the-art classrooms. Critics argued the enormous cost of education would diminish Hong Kong\'s competitiveness by putting off highly skilled expats and their families from moving to Hong Kong. Rival school Harrow International offers non-interest-bearing debentures of up to HK$3m (US$387,000). Capital expenditure and the costs of land construction mean that debentures are common in international schools in Hong Kong.';

const WIZZ_STIMULUS = 'In late 2013, Hungary\'s low-cost airline carrier Wizz Air signed a sale-and-leaseback agreement with China\'s COB Leasing Co. to finance six Airbus A320 aircraft. The deal raised $549 million to finance Wizz Air\'s expansion plans with new routes to Barcelona, Bologna, Dortmund and Rome from 2014. The COVID-19 pandemic devastated all airline companies. In 2020, Wizz Air registered a total of 16.6 million passengers, which was only 42% of the 40 million passengers who flew with the airline during the previous year. Established in 2003, the airline flies to 150 destinations in 44 countries.';

const TAWFEER_STIMULUS = 'Tawfeer Market is an Egyptian online grocery retail business founded in 2020. The business delivers groceries to customers in Alexandria, Egypt\'s second most populated city. In early 2022, Tawfeer Market raised $500,000 from business angels. Online grocery retail is expected to grow exponentially in Egypt. Ahmad Fasseeh, co-founder and CEO of Tawfeer, reported that Egypt\'s grocery retail market exceeds $50 billion, so the owners expect more competitors to enter the market.';

export const FOUR_MARK_3_2: FourMarkQuestion[] = [
  {
    id: 'q4m-3.2-01', subunit: S, questionNumber: 'Question 15.1b',
    question: 'Explain why Agricultural Bank of China (ABC) might have decided to float its shares on the stock market.',
    caseStimulus: ABC_STIMULUS, contextTitle: 'Agricultural Bank of China IPO', marks: 4, commandTerm: 'Explain', assessmentObjective: 'AO2',
    peelModelAnswer: {
      point1: {
        title: 'Access to a huge amount of finance',
        point: 'The key advantage of share capital is that it can provide a huge amount of finance.',
        evidence: 'ABC\'s IPO in Shanghai and Hong Kong raised $22.1 billion, the world\'s largest flotation at the time.',
        explanation: 'No commercial lender could easily provide a sum of this size, and share capital does not have to be repaid with interest like loan capital.',
        link: 'Floating its shares gave ABC a large permanent source of finance to support one of China\'s largest lenders.'
      },
      point2: {
        title: 'Size and status of the firm attract investors',
        point: 'As a large, established organization, ABC could exploit investor confidence that smaller firms lack.',
        evidence: 'ABC has over 320 million customers across 24,000 branches, and investors poured money in despite weak market sentiment.',
        explanation: 'The SPACED factor "size and status" means large firms can raise finance from a wider range of sources; a popular IPO is oversubscribed, which pushes up the share price.',
        link: 'ABC\'s scale made an IPO a realistic and attractive way to raise funds, even though ownership becomes diluted.'
      }
    },
    rubricChecklist: [
      { id: 'q4m-3.2-01-c1', criterion: 'Reason 1 explained (large amount of finance)', mark: 1 },
      { id: 'q4m-3.2-01-c2', criterion: 'Reason 1 applied to ABC ($22.1bn, world record)', mark: 1 },
      { id: 'q4m-3.2-01-c3', criterion: 'Reason 2 explained (size/status, investor confidence)', mark: 1 },
      { id: 'q4m-3.2-01-c4', criterion: 'Reason 2 applied to ABC (320m customers, 24,000 branches)', mark: 1 }
    ]
  },
  {
    id: 'q4m-3.2-02', subunit: S, questionNumber: 'Question 15.2d',
    question: 'Explain two potential drawbacks to a fee-paying school like Kellett School that chooses to raise finance through the sale of debentures.',
    caseStimulus: KELLETT_STIMULUS, contextTitle: 'Kellett School Debentures', marks: 4, commandTerm: 'Explain', assessmentObjective: 'AO2',
    peelModelAnswer: {
      point1: {
        title: 'Higher gearing and debt commitments',
        point: 'Debentures are long-term loans, so issuing them increases the school\'s gearing ratio.',
        evidence: 'Kellett issued record-breaking debentures of up to HK$10m (US$1.29m) each, refundable when students leave.',
        explanation: 'More borrowing as a percentage of capital employed makes the school more vulnerable, especially if interest rates rise, and it must repay the debenture when each student leaves.',
        link: 'This creates a large future liability that the school must plan its cash for.'
      },
      point2: {
        title: 'Reputational risk and fewer applicants',
        point: 'The high cost of debentures on top of fees may deter families.',
        evidence: 'Fees are already HK$123,500 to HK$168,800 a year, and critics argue the enormous cost puts off skilled expats; rival Harrow International offers debentures of only up to HK$3m.',
        explanation: 'If parents see the school as too expensive compared with rivals, demand for places could fall, reducing fee revenue.',
        link: 'So raising finance via debentures could harm Kellett\'s competitiveness against other international schools.'
      }
    },
    rubricChecklist: [
      { id: 'q4m-3.2-02-c1', criterion: 'Drawback 1 explained (gearing / repayment / interest-rate risk)', mark: 1 },
      { id: 'q4m-3.2-02-c2', criterion: 'Drawback 1 applied (HK$10m, refundable on leaving)', mark: 1 },
      { id: 'q4m-3.2-02-c3', criterion: 'Drawback 2 explained (deterring families / competitiveness)', mark: 1 },
      { id: 'q4m-3.2-02-c4', criterion: 'Drawback 2 applied (fee levels, critics, Harrow HK$3m)', mark: 1 }
    ]
  },
  {
    id: 'q4m-3.2-03', subunit: S, questionNumber: 'Question 15.3c',
    question: 'Explain two advantages to Wizz Air of choosing to lease some of its aircraft.',
    caseStimulus: WIZZ_STIMULUS, contextTitle: 'Wizz Air Sale-and-Leaseback', marks: 4, commandTerm: 'Explain', assessmentObjective: 'AO2',
    peelModelAnswer: {
      point1: {
        title: 'Releases cash for expansion',
        point: 'Leasing releases cash for other purposes, and sale-and-leaseback raises a lump sum from assets already owned.',
        evidence: 'The deal with COB Leasing Co. raised $549 million for new routes to Barcelona, Bologna, Dortmund and Rome.',
        explanation: 'Wizz Air keeps using the six A320 aircraft, as the asset does not physically leave the business, while turning them into cash.',
        link: 'This finances growth without the airline needing to find the initial capital itself.'
      },
      point2: {
        title: 'Maintenance and tax benefits',
        point: 'Under leasing, repairs and maintenance are the lessor\'s responsibility, and lease payments are a business expense.',
        evidence: 'Aircraft are very expensive assets, and the airline industry was devastated by COVID-19 (passengers fell to 16.6 million, 42% of the previous year).',
        explanation: 'Transferring maintenance responsibility and reducing the tax bill lowers costs at a time of falling revenue.',
        link: 'Leasing therefore helps Wizz Air to protect its finances in a volatile industry.'
      }
    },
    rubricChecklist: [
      { id: 'q4m-3.2-03-c1', criterion: 'Advantage 1 explained (releases cash / no initial capital)', mark: 1 },
      { id: 'q4m-3.2-03-c2', criterion: 'Advantage 1 applied ($549m, new routes)', mark: 1 },
      { id: 'q4m-3.2-03-c3', criterion: 'Advantage 2 explained (maintenance by lessor / tax-deductible expense)', mark: 1 },
      { id: 'q4m-3.2-03-c4', criterion: 'Advantage 2 applied to Wizz Air context', mark: 1 }
    ]
  },
  {
    id: 'q4m-3.2-04', subunit: S, questionNumber: 'Question 15.4b',
    question: 'Explain two limitations of using business angels as a source of finance.',
    caseStimulus: TAWFEER_STIMULUS, contextTitle: 'Tawfeer Market and Business Angels', marks: 4, commandTerm: 'Explain', assessmentObjective: 'AO2',
    peelModelAnswer: {
      point1: {
        title: 'Loss of control',
        point: 'Business angels usually take a proactive role in setting up or running the business.',
        evidence: 'Tawfeer Market raised $500,000 from business angels in early 2022.',
        explanation: 'In return for their money, the angels gain influence over decisions, so the co-founders lose some control.',
        link: 'Tawfeer\'s owners may not be able to run the business entirely their own way.'
      },
      point2: {
        title: 'Cost of buying out the stake',
        point: 'The business may eventually need to buy out the angel\'s stake to regain full control and ownership.',
        evidence: 'With a grocery market worth over $50 billion and expected exponential growth, a successful Tawfeer would make the angels\' stake far more valuable.',
        explanation: 'Buying back a stake in a fast-growing firm could cost far more than the original $500,000.',
        link: 'This future cost is a key limitation of business angel finance for Tawfeer.'
      }
    },
    rubricChecklist: [
      { id: 'q4m-3.2-04-c1', criterion: 'Limitation 1 explained (proactive role, loss of control)', mark: 1 },
      { id: 'q4m-3.2-04-c2', criterion: 'Limitation 1 applied to Tawfeer ($500,000)', mark: 1 },
      { id: 'q4m-3.2-04-c3', criterion: 'Limitation 2 explained (buying out the stake)', mark: 1 },
      { id: 'q4m-3.2-04-c4', criterion: 'Limitation 2 applied to Tawfeer (growth market)', mark: 1 }
    ]
  },
  {
    id: 'q4m-3.2-05', subunit: S, questionNumber: 'Question 15.4c',
    question: 'Explain how the profitability of a business, such as Tawfeer Market, affects its ability to obtain external sources of finance.',
    caseStimulus: TAWFEER_STIMULUS, contextTitle: 'Profitability and Access to Finance', marks: 4, commandTerm: 'Explain', assessmentObjective: 'AO2',
    peelModelAnswer: {
      point1: {
        title: 'Return on investment and track record',
        point: 'Investors such as business angels demand a positive return and assess the firm\'s track record (earning history) before investing.',
        evidence: 'Tawfeer was founded only in 2020, yet raised $500,000 in early 2022 in a market expected to grow exponentially.',
        explanation: 'Most start-ups fail outright, so a business that shows profit potential reassures investors that it can deliver high returns.',
        link: 'The more profitable Tawfeer appears, the easier it is to attract equity investors.'
      },
      point2: {
        title: 'Ability to repay lenders',
        point: 'Lenders such as banks assess whether a business can repay loans and interest; profitable firms are lower risk.',
        evidence: 'With more competitors expected to enter Egypt\'s $50 billion+ grocery market, Tawfeer\'s future profits are uncertain.',
        explanation: 'A record of profit shows a firm can meet repayments, whereas a loss-making firm may be refused or charged more.',
        link: 'Higher profitability therefore widens Tawfeer\'s access to loan capital as well as investment.'
      }
    },
    rubricChecklist: [
      { id: 'q4m-3.2-05-c1', criterion: 'Link between profit and investor return / track record explained', mark: 1 },
      { id: 'q4m-3.2-05-c2', criterion: 'Applied to Tawfeer (start-up, $500,000, growth market)', mark: 1 },
      { id: 'q4m-3.2-05-c3', criterion: 'Link between profit and ability to repay lenders explained', mark: 1 },
      { id: 'q4m-3.2-05-c4', criterion: 'Applied to Tawfeer (competition, uncertain future profits)', mark: 1 }
    ]
  },
  {
    id: 'q4m-3.2-06', subunit: S, questionNumber: 'Question 15.3b',
    question: 'Explain two advantages to businesses such as COB Leasing Co. of opting to lease expensive assets to established companies such as Wizz Air.',
    caseStimulus: WIZZ_STIMULUS, contextTitle: 'Lessor Perspective: COB Leasing Co.', marks: 4, commandTerm: 'Explain', assessmentObjective: 'AO2',
    peelModelAnswer: {
      point1: {
        title: 'Regular rental income',
        point: 'The lessor receives rental income from the lessee for the length of the lease.',
        evidence: 'COB Leasing Co. leases six Airbus A320 aircraft back to Wizz Air.',
        explanation: 'Because leasing is more expensive than buying outright in the long term, the total rent the lessor collects can exceed the $549 million it paid.',
        link: 'Leasing the aircraft is therefore a profitable investment for COB.'
      },
      point2: {
        title: 'Retains legal ownership and deals with an established client',
        point: 'The lessor remains the legal owner of the assets throughout the lease.',
        evidence: 'Wizz Air is established (since 2003), flying to 150 destinations in 44 countries.',
        explanation: 'Keeping ownership protects COB if the lessee fails to pay, and an established airline is a lower-risk customer than a new one.',
        link: 'This reduces COB\'s risk on very expensive assets.'
      }
    },
    rubricChecklist: [
      { id: 'q4m-3.2-06-c1', criterion: 'Advantage 1 explained (rental income / leasing dearer long term)', mark: 1 },
      { id: 'q4m-3.2-06-c2', criterion: 'Advantage 1 applied (six A320s, $549m)', mark: 1 },
      { id: 'q4m-3.2-06-c3', criterion: 'Advantage 2 explained (keeps legal ownership / lower risk)', mark: 1 },
      { id: 'q4m-3.2-06-c4', criterion: 'Advantage 2 applied (established since 2003, 150 destinations)', mark: 1 }
    ]
  }
];

// ============================================================================
// 6-mark questions (AO2/AO3)
// ============================================================================
const LEVELS = (topic: string) => [
  { range: '1-2' as const, descriptor: `Limited knowledge of ${topic}; little or no application to the case; descriptive.` },
  { range: '3-4' as const, descriptor: `Some knowledge of ${topic} with partial application; analysis is one-sided or lacks depth.` },
  { range: '5-6' as const, descriptor: `Good knowledge of ${topic}, applied well to the case, with balanced analysis and a reasoned judgement.` }
];

export const SIX_MARK_3_2: SixMarkQuestion[] = [
  {
    id: 'q6m-3.2-01', subunit: S, questionNumber: 'Question 15.2e',
    question: 'Examine two alternative sources of finance that Kellett School could have used to finance its capital expenditure.',
    caseStimulus: KELLETT_STIMULUS, contextTitle: 'Financing Kellett School\'s New Campus', marks: 6, commandTerm: 'Examine', assessmentObjective: 'AO2/AO3',
    levelBreakdown: LEVELS('alternative long-term sources of finance'),
    perspective1: {
      title: 'Mortgage (loan capital)',
      points: [
        { subPoint: 'Suits the purpose and duration', elaboration: 'The new HK$200m campus is long-term capital expenditure on land and buildings, which the SPACED factors (purpose, cost, duration) match to a mortgage: a secured loan for property repaid in instalments over e.g. 10 or 25 years.' },
        { subPoint: 'Drawbacks', elaboration: 'Interest is charged (and may be variable), gearing rises, and if the school defaults, the lender can repossess the campus. Unlike debentures, parents\' money is not used, so the school bears the full debt.' }
      ]
    },
    perspective2: {
      title: 'Retained profit (surplus) or sale-and-leaseback / leasing',
      points: [
        { subPoint: 'Retained surplus', elaboration: 'Fee income of HK$123,500 to HK$168,800 per student per year may produce a surplus. Retained profit incurs no interest charges and no new debt, but a surplus large enough for HK$200m is unlikely, so it could only fund part of the project.' },
        { subPoint: 'Sale of the old site / leasing', elaboration: 'Because the school relocated, it could sell its old land and buildings (sale of assets), or lease facilities rather than build them. Leasing needs no initial capital, but is more expensive in the long term and the school would not own the asset.' }
      ]
    },
    synthesisAndEvaluation: 'A mortgage best suits the size (HK$200m) and long duration of the campus project, but it raises gearing and interest-rate risk. Retained surplus or selling the old site avoid interest but are unlikely to cover the full cost alone. A combination, such as selling the old site plus a mortgage, is likely the most appropriate. This also helps explain why debentures, which use parents\' interest-free money, are common in Hong Kong international schools.',
    rubricChecklist: [
      { id: 'q6m-3.2-01-c1', criterion: 'Two appropriate long-term sources identified', marks: 1 },
      { id: 'q6m-3.2-01-c2', criterion: 'Source 1 benefits analysed in context', marks: 1 },
      { id: 'q6m-3.2-01-c3', criterion: 'Source 1 limitations analysed', marks: 1 },
      { id: 'q6m-3.2-01-c4', criterion: 'Source 2 benefits analysed in context', marks: 1 },
      { id: 'q6m-3.2-01-c5', criterion: 'Source 2 limitations analysed', marks: 1 },
      { id: 'q6m-3.2-01-c6', criterion: 'Reasoned judgement using SPACED factors', marks: 1 }
    ]
  },
  {
    id: 'q6m-3.2-02', subunit: S, questionNumber: '3.2 AO3',
    question: 'Examine the appropriateness of share capital versus loan capital for Agricultural Bank of China (ABC) to finance its expansion.',
    caseStimulus: ABC_STIMULUS, contextTitle: 'Equity vs Debt at ABC', marks: 6, commandTerm: 'Examine', assessmentObjective: 'AO2/AO3',
    levelBreakdown: LEVELS('share capital and loan capital'),
    perspective1: {
      title: 'Share capital (IPO)',
      points: [
        { subPoint: 'Scale of funds', elaboration: 'Share capital can provide a huge amount of finance: ABC raised $22.1 billion, beating ICBC\'s $21.9 billion record. Popular IPOs are oversubscribed, so ABC\'s size and status (320m customers) attracted investors despite weak sentiment.' },
        { subPoint: 'Costs', elaboration: 'Ownership and control are diluted among new shareholders, and the process involves many legal and administrative procedures and costs.' }
      ]
    },
    perspective2: {
      title: 'Loan capital (e.g. debentures)',
      points: [
        { subPoint: 'Control retained', elaboration: 'Debenture holders have no ownership or voting rights, so ABC would keep control, and finance is long term.' },
        { subPoint: 'Risk', elaboration: 'Interest must be paid even if a loss is made, and borrowing of this size would raise ABC\'s gearing ratio sharply, increasing vulnerability to rising interest rates.' }
      ]
    },
    synthesisAndEvaluation: 'Given the amount required ($22.1bn) and ABC\'s size and status, share capital was more appropriate: it raised a record sum without adding interest payments or gearing. Dilution of control is the main cost. Loan capital keeps control but is riskier at this scale. The decision depends on the SPACED factors, especially amount, cost and external factors such as market sentiment and interest rates.',
    rubricChecklist: [
      { id: 'q6m-3.2-02-c1', criterion: 'Accurate knowledge of share and loan capital', marks: 1 },
      { id: 'q6m-3.2-02-c2', criterion: 'Share capital benefits applied to ABC', marks: 1 },
      { id: 'q6m-3.2-02-c3', criterion: 'Share capital drawbacks (dilution, admin costs)', marks: 1 },
      { id: 'q6m-3.2-02-c4', criterion: 'Loan capital benefits (control retained)', marks: 1 },
      { id: 'q6m-3.2-02-c5', criterion: 'Loan capital drawbacks (interest, gearing)', marks: 1 },
      { id: 'q6m-3.2-02-c6', criterion: 'Justified judgement', marks: 1 }
    ]
  },
  {
    id: 'q6m-3.2-03', subunit: S, questionNumber: '3.2 AO3',
    question: 'Examine whether business angels or crowdfunding would be the more appropriate source of finance for a start-up such as Tawfeer Market.',
    caseStimulus: TAWFEER_STIMULUS, contextTitle: 'Start-up Finance Choices', marks: 6, commandTerm: 'Examine', assessmentObjective: 'AO2/AO3',
    levelBreakdown: LEVELS('business angels and crowdfunding'),
    perspective1: {
      title: 'Business angels',
      points: [
        { subPoint: 'Fit with high-growth ventures', elaboration: 'Angels fund high-risk, high-return firms that cannot get enough bank finance. Tawfeer is in a fast-growing grocery market worth over $50bn and raised $500,000. Angels also bring experience that boosts survival and success.' },
        { subPoint: 'Drawbacks', elaboration: 'The owners lose some control to a proactive angel, and may have to buy out the stake later. Angels judge return on investment, the business plan, people and track record, and Tawfeer\'s track record is short (founded 2020).' }
      ]
    },
    perspective2: {
      title: 'Crowdfunding',
      points: [
        { subPoint: 'Benefits', elaboration: 'Raises small amounts from many people online and lets the start-up pitch its idea. A consumer-facing grocery brand ("Tawfeer" means "savings") may appeal to the public.' },
        { subPoint: 'Drawbacks', elaboration: 'Platforms charge fees, crowdfunding is heavily regulated in many countries, it often leads to some loss of ownership as investors demand shares, and it is not a typical source for most businesses. It brings no expert guidance.' }
      ]
    },
    synthesisAndEvaluation: 'Business angels appear more appropriate for Tawfeer: they can provide a substantial sum ($500,000) plus expertise to compete as more rivals enter the market. Crowdfunding spreads ownership less predictably and offers no mentoring. However, if the owners value control, crowdfunding (especially donation-based) may be preferred. Both cost some ownership, so the choice depends on amount required, cost and how much control the founders will give up.',
    rubricChecklist: [
      { id: 'q6m-3.2-03-c1', criterion: 'Knowledge of both sources', marks: 1 },
      { id: 'q6m-3.2-03-c2', criterion: 'Business angel benefits applied to Tawfeer', marks: 1 },
      { id: 'q6m-3.2-03-c3', criterion: 'Business angel drawbacks/criteria', marks: 1 },
      { id: 'q6m-3.2-03-c4', criterion: 'Crowdfunding benefits', marks: 1 },
      { id: 'q6m-3.2-03-c5', criterion: 'Crowdfunding drawbacks', marks: 1 },
      { id: 'q6m-3.2-03-c6', criterion: 'Justified judgement', marks: 1 }
    ]
  }
];
