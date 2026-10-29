import { MCQQuestion, TwoMarkQuestion } from '@/types/curriculum';
import { MCQ_3_1, TWO_MARK_3_1 } from './finance/questions-3-1';
import { MCQ_3_2, TWO_MARK_3_2 } from './finance/questions-3-2';
import { MCQ_3_3, TWO_MARK_3_3 } from './finance/questions-3-3';
import { MCQ_3_4, TWO_MARK_3_4 } from './finance/questions-3-4';

// ============================================================================
// 1. Multiple Choice Questions (MCQs) - 124 Questions Total
//    Per subunit: 1.1 = 11, 1.2 = 16, 1.3 = 13, 1.4 = 10, 1.5 = 17, 1.6 = 9,
//    SWOT = 8, Ansoff = 7, STEEPLE = 13, BMT toolkit = 8, Business plan = 6,
//    Descriptive statistics = 6. Block comments below count only their own block.
// ============================================================================

export const MCQ_QUESTIONS: MCQQuestion[] = [
  // --------------------------------------------------------------------------
  // Unit 1.1: What is a Business? (Q1–Q6)
  // --------------------------------------------------------------------------
  {
    id: 'mcq-1.1-01',
    subunit: '1.1-what-is-a-business',
    topicTag: 'Core Definition & Purpose',
    questionNumber: 1,
    question: 'What is the fundamental economic purpose of business activity?',
    options: [
      { key: 'A', text: 'To maximize tax revenue paid to national governments.' },
      { key: 'B', text: 'To combine inputs through a transformation process to produce goods and services that satisfy human needs and wants.' },
      { key: 'C', text: 'To convert non-renewable natural resources exclusively into consumer durable goods.' },
      { key: 'D', text: 'To eliminate market competition by creating monopolistic barriers to entry.' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'Businesses function as transformation systems combining inputs (factors of production: land, labor, capital, enterprise) into finished goods and services that fulfill human needs and wants.',
      distractorAnalysis: 'Tax revenue (A) is a government benefit/externality; businesses do not exclusively produce durable goods (C); eliminating competition (D) describes anti-competitive strategy, not the fundamental purpose of business activity.'
    }
  },
  {
    id: 'mcq-1.1-02',
    subunit: '1.1-what-is-a-business',
    topicTag: 'Factors of Production',
    questionNumber: 2,
    question: 'Which factor of production encompasses the human skill, initiative, and financial risk-taking required to manage and coordinate resources in pursuit of business opportunities?',
    options: [
      { key: 'A', text: 'Land' },
      { key: 'B', text: 'Labor' },
      { key: 'C', text: 'Capital' },
      { key: 'D', text: 'Enterprise' }
    ],
    correctAnswer: 'D',
    explanation: {
      correctRationale: 'Enterprise (entrepreneurship) organizes land, labor, and capital while bearing financial risk to identify and monetize market opportunities.',
      distractorAnalysis: 'Land (A) comprises natural physical resources, Labor (B) is physical/mental workforce effort, and Capital (C) encompasses man-made assets like machinery and finance.'
    }
  },
  {
    id: 'mcq-1.1-03',
    subunit: '1.1-what-is-a-business',
    topicTag: 'Product Classification',
    questionNumber: 3,
    question: 'How do capital goods differ fundamentally from consumer goods?',
    options: [
      { key: 'A', text: 'Capital goods are sold to final households for immediate consumption, whereas consumer goods are sold to corporations.' },
      { key: 'B', text: 'Capital goods are physical goods used by other businesses to produce further goods and services, whereas consumer goods satisfy individual end-user desires.' },
      { key: 'C', text: 'Capital goods are always intangible services, whereas consumer goods are tangible physical products.' },
      { key: 'D', text: 'Capital goods do not depreciate in financial value over time.' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'Capital goods (producer goods like industrial machinery or delivery vans) are purchased by commercial firms to produce other outputs, whereas consumer goods directly satisfy final consumer wants.',
      distractorAnalysis: 'Final households buy consumer goods, not capital goods (A); capital goods are tangible and do depreciate (C & D).'
    }
  },
  {
    id: 'mcq-1.1-04',
    subunit: '1.1-what-is-a-business',
    topicTag: 'Sector Classification',
    questionNumber: 4,
    question: 'An economy experiences a long-term structural shift where national employment moves from agricultural farming and mineral extraction to electronic manufacturing and industrial assembly. Which sector transition does this represent?',
    options: [
      { key: 'A', text: 'Primary sector to Secondary sector' },
      { key: 'B', text: 'Secondary sector to Tertiary sector' },
      { key: 'C', text: 'Tertiary sector to Quaternary sector' },
      { key: 'D', text: 'Quaternary sector to Primary sector' }
    ],
    correctAnswer: 'A',
    explanation: {
      correctRationale: 'Agriculture and extraction define the primary sector, whereas electronic manufacturing and assembly define the secondary sector, marking classical industrialization.',
      distractorAnalysis: 'Shifting to retail/banking represents tertiary (B), knowledge/R&D represents quaternary (C), and D is an inverted regression rarely seen in modern industrialization.'
    }
  },
  {
    id: 'mcq-1.1-05',
    subunit: '1.1-what-is-a-business',
    topicTag: 'Functional Interdependence',
    questionNumber: 5,
    question: 'Which business function is directly responsible for identifying consumer needs, determining competitive pricing, promoting brand awareness, and managing channels of product distribution?',
    options: [
      { key: 'A', text: 'Operations Management' },
      { key: 'B', text: 'Finance and Accounts' },
      { key: 'C', text: 'Human Resource Management' },
      { key: 'D', text: 'Marketing' }
    ],
    correctAnswer: 'D',
    explanation: {
      correctRationale: 'Marketing identifies, anticipates, and satisfies customer requirements profitably via the 4 Ps (Product, Price, Place, Promotion).',
      distractorAnalysis: 'Operations (A) handles input-to-output transformation, Finance (B) oversees budgeting and cash flow, and HRM (C) oversees workforce management.'
    }
  },
  {
    id: 'mcq-1.1-06',
    subunit: '1.1-what-is-a-business',
    topicTag: 'Startup Challenges',
    questionNumber: 6,
    question: 'Why do approximately 20% to 25% of new business start-ups fail within their first year of trading?',
    options: [
      { key: 'A', text: 'Over-reliance on public stock exchange equity flotation.' },
      { key: 'B', text: 'Poor cash flow management and insufficient working capital to survive extended customer credit periods.' },
      { key: 'C', text: 'Being subjected to corporate income taxes before making any revenue.' },
      { key: 'D', text: 'An excess of skilled labor and high production capacity.' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'Startups routinely experience cash flow crises when customer credit delays cash inflows while fixed supplier, rent, and wage liabilities fall due immediately.',
      distractorAnalysis: 'Startups cannot execute public stock exchange flotations (A); corporate income tax is levied exclusively on net profits, not pre-revenue operations (C); excess capacity is rarely a startup problem (D).'
    }
  },

  // --------------------------------------------------------------------------
  // Unit 1.2: Types of Business Entities (Q7–Q13)
  // --------------------------------------------------------------------------
  {
    id: 'mcq-1.2-01',
    subunit: '1.2-types-of-business-entities',
    topicTag: 'Sole Traders & Partnerships',
    questionNumber: 7,
    question: 'What is the legal consequence of operating as an unincorporated business entity, such as a sole trader or ordinary partnership?',
    options: [
      { key: 'A', text: 'The business has a legal personality completely distinct from its owners.' },
      { key: 'B', text: 'The owners possess limited liability restricted to their invested capital.' },
      { key: 'C', text: 'The owners have unlimited liability, meaning personal assets can be seized to settle business debts.' },
      { key: 'D', text: 'The business is mandated by law to publish audited financial statements publicly.' }
    ],
    correctAnswer: 'C',
    explanation: {
      correctRationale: 'Unincorporated entities lack a separate legal personhood; the owners are the business, meaning creditors can legally seize private personal assets to settle unpaid debts.',
      distractorAnalysis: 'Separate legal identity (A) and limited liability (B) belong to incorporated companies; unincorporated entities enjoy financial privacy and do not publish accounts (D).'
    }
  },
  {
    id: 'mcq-1.2-02',
    subunit: '1.2-types-of-business-entities',
    topicTag: 'Partnerships',
    questionNumber: 8,
    question: 'Which document formally sets out the finance contributed by each partner, their roles and responsibilities, how profits or losses are shared, and the procedures for ending the partnership?',
    options: [
      { key: 'A', text: 'Memorandum of Association' },
      { key: 'B', text: 'Articles of Association' },
      { key: 'C', text: 'Deed of Partnership' },
      { key: 'D', text: 'Certificate of Incorporation' }
    ],
    correctAnswer: 'C',
    explanation: {
      correctRationale: 'The Deed of Partnership is the formal contract regulating profit shares, capital contributions, responsibilities, and dissolution rules between partners.',
      distractorAnalysis: 'The Memorandum, Articles of Association, and Certificate of Incorporation (A, B, D) are legal documents specifically governing incorporated limited companies.'
    }
  },
  {
    id: 'mcq-1.2-03',
    subunit: '1.2-types-of-business-entities',
    topicTag: 'Ltd vs. PLC',
    questionNumber: 9,
    question: 'How does a privately held company (private limited company / Ltd) differ from a publicly held company (public limited company / PLC)?',
    options: [
      { key: 'A', text: 'A privately held company cannot offer its shares to the general public on an open stock exchange.' },
      { key: 'B', text: 'A privately held company is owned by the government, whereas a publicly held company is privately owned.' },
      { key: 'C', text: 'A privately held company\'s owners face unlimited liability.' },
      { key: 'D', text: 'A publicly held company cannot issue shares with voting rights.' }
    ],
    correctAnswer: 'A',
    explanation: {
      correctRationale: 'Privately held companies (Ltd) sell equity privately with board approval and are prohibited from advertising or trading shares on a public stock exchange.',
      distractorAnalysis: 'Neither is state-owned (B); both enjoy limited liability (C); PLC shareholders hold voting shares, usually one vote per share, and vote at the AGM (D).'
    }
  },
  {
    id: 'mcq-1.2-04',
    subunit: '1.2-types-of-business-entities',
    topicTag: 'Limited Liability',
    questionNumber: 10,
    question: 'What primary protection does the concept of limited liability provide to corporate shareholders?',
    options: [
      { key: 'A', text: 'It limits the maximum tax rate paid by the corporation to 10%.' },
      { key: 'B', text: 'It restricts a shareholder\'s potential financial loss to the exact amount of money invested in purchasing company shares.' },
      { key: 'C', text: 'It prevents the company from ever declaring bankruptcy.' },
      { key: 'D', text: 'It protects company directors from civil lawsuits involving employee negligence.' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'Limited liability legally ring-fences a shareholder\'s personal assets so that maximum financial loss is capped strictly at their share purchase capital.',
      distractorAnalysis: 'Limited liability does not alter statutory corporation tax rates (A), prevent corporate insolvency (C), or shield negligent directors from personal tort liability (D).'
    }
  },
  {
    id: 'mcq-1.2-05',
    subunit: '1.2-types-of-business-entities',
    topicTag: 'Social Enterprises: Cooperatives',
    questionNumber: 11,
    question: 'What is the core governance principle distinguishing a cooperative from a standard joint-stock limited company?',
    options: [
      { key: 'A', text: 'Voting rights in a cooperative are proportional to the number of shares owned (1 share = 1 vote).' },
      { key: 'B', text: 'Cooperatives operate strictly as non-profit charitable bodies exempt from commercial competition.' },
      { key: 'C', text: 'Cooperatives operate on democratic member control where each member has one vote regardless of capital contributed (1 member = 1 vote).' },
      { key: 'D', text: 'Cooperatives cannot hire salaried non-member employees.' }
    ],
    correctAnswer: 'C',
    explanation: {
      correctRationale: 'Cooperatives are democratic member-owned social enterprises operating under "one member, one vote," preventing wealth-based domination.',
      distractorAnalysis: 'Standard companies use 1 share = 1 vote (A); cooperatives are for-profit social enterprises seeking commercial surplus for members (B); cooperatives frequently employ salaried staff (D).'
    }
  },
  {
    id: 'mcq-1.2-06',
    subunit: '1.2-types-of-business-entities',
    topicTag: 'Social Enterprises: NGOs',
    questionNumber: 12,
    question: 'Which characteristic uniquely identifies a Non-Governmental Organization (NGO)?',
    options: [
      { key: 'A', text: 'It is established, funded, and managed directly by central government ministries.' },
      { key: 'B', text: 'It operates within the private sector, pursues social or environmental objectives, and does not distribute profits to private shareholders.' },
      { key: 'C', text: 'It sells equity shares to retail investors on national stock exchanges to fund operations.' },
      { key: 'D', text: 'It operates exclusively within primary extraction industries.' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'NGOs are private sector, not-for-profit social enterprises that reinvest 100% of operational surplus into their humanitarian, social, or ecological missions.',
      distractorAnalysis: 'NGOs are completely independent of state ministries (A), cannot issue public stock equity (C), and are not extraction entities (D).'
    }
  },
  {
    id: 'mcq-1.2-07',
    subunit: '1.2-types-of-business-entities',
    topicTag: 'Public Sector Companies',
    questionNumber: 13,
    question: 'Hong Kong Disneyland is jointly owned by the Hong Kong Special Administrative Region (HKSAR) Government, as majority shareholder, and The Walt Disney Company. How is this entity categorized in IB Business Management?',
    options: [
      { key: 'A', text: 'A sole proprietorship' },
      { key: 'B', text: 'A public sector company, with the government as majority shareholder' },
      { key: 'C', text: 'An unincorporated worker cooperative' },
      { key: 'D', text: 'A non-governmental charitable foundation' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'Hong Kong Disneyland is a public sector company. The HKSAR Government is the majority shareholder, and the company is run in a commercial way for financial gain, as public sector companies are.',
      distractorAnalysis: 'It is not a sole proprietorship (A) or an unincorporated cooperative (C), and it is not a charity (D) because it operates commercially for financial gain.'
    }
  },

  // --------------------------------------------------------------------------
  // Unit 1.3: Business Objectives (Q14–Q20)
  // --------------------------------------------------------------------------
  {
    id: 'mcq-1.3-01',
    subunit: '1.3-business-objectives',
    topicTag: 'Vision vs Mission',
    questionNumber: 14,
    question: 'Which statement accurately differentiates a vision statement from a mission statement?',
    options: [
      { key: 'A', text: 'A vision statement explains the daily operational tasks, whereas a mission statement outlines the historical origin of the founders.' },
      { key: 'B', text: 'A vision statement sets out an organization\'s long-term aspirational future ("where we want to be"), while a mission statement declares its current core purpose and identity ("what we do and why").' },
      { key: 'C', text: 'A vision statement contains quantitative financial targets, while a mission statement never changes.' },
      { key: 'D', text: 'Vision statements are required by law for incorporation, whereas mission statements are purely voluntary.' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'Vision is future-oriented and aspirational ("where we strive to go"), whereas mission is present-oriented and action-focused ("who we are and what we do today").',
      distractorAnalysis: 'Daily operations describe tactics (A); neither is a statutory legal document required for incorporation (D); quantified targets belong to objectives, not vision statements, and mission statements are updated more often than vision statements (C) (textbook pp.39-41).'
    }
  },
  {
    id: 'mcq-1.3-02',
    subunit: '1.3-business-objectives',
    topicTag: 'Strategic vs Tactical Objectives',
    questionNumber: 15,
    question: 'How do strategic objectives differ from tactical objectives?',
    options: [
      { key: 'A', text: 'Strategic objectives are the longer-term goals of the business as a whole, while tactical objectives are short-term goals that guide the daily functioning of certain departments or operations.' },
      { key: 'B', text: 'Strategic objectives are short-term departmental targets, whereas tactical objectives govern long-term corporate vision.' },
      { key: 'C', text: 'Strategic objectives are unquantifiable, whereas tactical objectives are always ethical.' },
      { key: 'D', text: 'Tactical objectives cannot be revised once declared.' }
    ],
    correctAnswer: 'A',
    explanation: {
      correctRationale: 'The textbook defines strategic objectives as the longer-term goals of a business, such as profit maximization, growth, market standing and market share, and tactical objectives as short-term goals (usually the next 12 months or sooner) that affect a section of the organization and guide the daily functioning of certain departments or operations (pp.45, 52).',
      distractorAnalysis: 'Option B reverses the relationship; objectives are generally specific and quantifiable, and tactical objectives are not defined by ethics (C); objectives can change over time (D).'
    }
  },
  {
    id: 'mcq-1.3-03',
    subunit: '1.3-business-objectives',
    topicTag: 'Core Objectives',
    questionNumber: 16,
    question: 'What does the term market share measure?',
    options: [
      { key: 'A', text: 'The total monetary profit generated by a firm divided by its capital employed.' },
      { key: 'B', text: 'The proportion of total sales revenue (or unit volume) within a specific industry held by a particular business.' },
      { key: 'C', text: 'The percentage of shares owned by institutional investors on the stock market.' },
      { key: 'D', text: 'The market value of a business divided by its total liabilities.' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'Market share expresses a business\'s sales revenue (or volume) as a percentage of aggregate industry sales: (Firm Sales / Total Market Sales) * 100%.',
      distractorAnalysis: 'Profit over capital employed is ROCE (A); stock owned by institutions is equity distribution (C); market value over liabilities is a solvency ratio (D).'
    }
  },
  {
    id: 'mcq-1.3-04',
    subunit: '1.3-business-objectives',
    topicTag: 'Ethical Objectives',
    questionNumber: 17,
    question: 'A company implements an Ethical Code of Practice. What is the direct operational purpose of this document?',
    options: [
      { key: 'A', text: 'To guarantee minimum legal compliance while avoiding tax payments.' },
      { key: 'B', text: 'To mandate that customer satisfaction overrides company solvency in every transaction.' },
      { key: 'C', text: 'To replace external commercial law with company-specific internal rules.' },
      { key: 'D', text: 'To provide employees and managers with clear behavioral guidelines reflecting organizational morals and acceptable practices.' }
    ],
    correctAnswer: 'D',
    explanation: {
      correctRationale: 'An ethical code outlines explicit moral principles and professional standards that govern decision-making across workplace safety, diversity, and fair dealing.',
      distractorAnalysis: 'Dodging taxes is unethical and illegal (A); customer satisfaction cannot compromise basic financial solvency (B); internal corporate codes cannot supersede external statutory law (C).'
    }
  },
  {
    id: 'mcq-1.3-05',
    subunit: '1.3-business-objectives',
    topicTag: 'Business Objectives & Stakeholders',
    questionNumber: 18,
    question: 'Which of the following scenarios illustrates a classic internal stakeholder conflict arising from business objectives?',
    options: [
      { key: 'A', text: 'Suppliers demanding higher bulk orders while shipping companies lower freight rates.' },
      { key: 'B', text: 'Shareholders demanding maximum short-term dividend payouts while management seeks to retain profits to fund long-term R&D and improve worker remuneration.' },
      { key: 'C', text: 'Local community members and environmental groups both lobbying for reduced carbon emissions.' },
      { key: 'D', text: 'Customers demanding premium product quality while competing rivals leave the market.' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'Shareholders prioritize immediate dividend distributions and stock appreciation, conflicting directly with executive managers who prioritize retained capital for R&D and fair employee wages.',
      distractorAnalysis: 'Option A involves external suppliers/transporters; Option C shows aligned external stakeholders; Option D does not depict internal corporate resource competition.'
    }
  },
  {
    id: 'mcq-1.3-06',
    subunit: '1.3-business-objectives',
    topicTag: 'Human Resources Metrics',
    questionNumber: 19,
    question: 'Which of the following defines labour turnover?',
    options: [
      { key: 'A', text: 'Total revenue divided by total employees in a financial year.' },
      { key: 'B', text: 'The average number of overtime hours worked by factory personnel.' },
      { key: 'C', text: 'The percentage of an organization\'s workforce that leaves the business during a specified time period, usually one year.' },
      { key: 'D', text: 'The ratio of senior executives to frontline workers.' }
    ],
    correctAnswer: 'C',
    explanation: {
      correctRationale: 'Labour turnover measures the proportion of personnel leaving during a year: (Number of Leavers / Average Staff Employed) * 100%.',
      distractorAnalysis: 'Revenue per worker measures labor productivity (A); overtime hours measure labor utilization (B); executive ratios measure management span of control (D).'
    }
  },
  {
    id: 'mcq-1.3-07',
    subunit: '1.3-business-objectives',
    topicTag: 'Corporate Social Responsibility',
    questionNumber: 20,
    question: 'Which of the following is a primary internal commercial benefit to a multinational corporation of adopting genuine Corporate Social Responsibility (CSR) policies?',
    options: [
      { key: 'A', text: 'Instant immunity from all national regulatory laws.' },
      { key: 'B', text: 'Enhanced corporate brand reputation, facilitating customer brand loyalty and attracting higher-calibre job applicants.' },
      { key: 'C', text: 'Elimination of all operational and compliance costs.' },
      { key: 'D', text: 'A guaranteed short-term reduction in production expenses.' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'Genuine CSR builds premium brand equity, secures customer goodwill, and attracts motivated, high-retention talent who value ethical employers.',
      distractorAnalysis: 'CSR does not grant regulatory immunity (A). CSR adds compliance costs (p.48), so it cannot eliminate all costs (C); some ethical practices can cut costs, such as less packaging and fewer legal costs (Table 3.1), but no immediate saving is guaranteed (D).'
    }
  },

  // --------------------------------------------------------------------------
  // Unit 1.4: Stakeholders (Q21–Q26)
  // --------------------------------------------------------------------------
  {
    id: 'mcq-1.4-01',
    subunit: '1.4-stakeholders',
    topicTag: 'Stakeholder vs Shareholder Distinction',
    questionNumber: 21,
    question: 'Which statement accurately defines the difference between a stakeholder and a shareholder?',
    options: [
      { key: 'A', text: 'All stakeholders are shareholders, but shareholders only hold fixed-interest corporate bonds.' },
      { key: 'B', text: 'A stakeholder is any party affected by or interested in the business, whereas a shareholder is a legal equity owner of a limited company.' },
      { key: 'C', text: 'Stakeholders have statutory voting rights at the Annual General Meeting, whereas shareholders only receive hourly wages.' },
      { key: 'D', text: 'Stakeholders are exclusively internal employees, while shareholders are exclusively external regulators.' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'Stakeholders represent the broad umbrella of all individuals and organizations with a direct interest in the firm (employees, customers, suppliers, community, owners). Shareholders are the specific equity owners of a limited liability company entitled to dividends and AGM voting rights.',
      distractorAnalysis: 'Option A is incorrect because not all stakeholders own shares; Option C reverses corporate governance rights; Option D is false as both groups have internal and external participants.'
    }
  },
  {
    id: 'mcq-1.4-02',
    subunit: '1.4-stakeholders',
    topicTag: 'Internal Stakeholder Prioritization',
    questionNumber: 22,
    question: 'Sir Richard Branson (Virgin Group) operates by the leadership philosophy: "Employees first, customers second, and shareholders third." What is the strategic rationale underlying this stakeholder prioritization?',
    options: [
      { key: 'A', text: 'Disgruntled workers are legally barred from taking industrial action in aviation.' },
      { key: 'B', text: 'Employees legally hold 100% of the voting equity in public limited companies.' },
      { key: 'C', text: 'Highly motivated and valued employees deliver superior customer service, which generates customer loyalty and ultimately maximizes long-term shareholder returns.' },
      { key: 'D', text: 'Shareholders expect zero financial return when employee wages are increased.' }
    ],
    correctAnswer: 'C',
    explanation: {
      correctRationale: 'Under modern stakeholder theory and Branson\'s triad, investing in staff welfare and morale produces superior service and product quality. This delights customers, generating brand loyalty and robust long-term profitability that rewards shareholders.',
      distractorAnalysis: 'Disgruntled workers can and do take industrial strike action (A); workers rarely own 100% of PLCs (B); shareholders always expect a financial return on equity (D).'
    }
  },
  {
    id: 'mcq-1.4-03',
    subunit: '1.4-stakeholders',
    topicTag: 'Competitors as Stakeholders',
    questionNumber: 23,
    question: 'Why are competing businesses classified as external stakeholders of an organization in IB Business Management?',
    options: [
      { key: 'A', text: 'Competitors must legally approve all retail price changes before market launch.' },
      { key: 'B', text: 'Competitors benchmark key performance indicators against each other and frequently hold strategic equity cross-shareholdings in rival firms.' },
      { key: 'C', text: 'Competitors are statutory guarantors of each other\'s corporate debt obligations.' },
      { key: 'D', text: 'Competitors are required by law to pool advertising budgets in duopoly markets.' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'Competitors maintain a direct external interest in a firm\'s actions to benchmark performance (sales turnover, market share) to maintain market competitiveness. Furthermore, it is common for competitors to hold shares in each other (e.g. Air China holding 28.2% of Cathay Pacific and Qatar Airways 9.4%; Porsche owning more than 31% of Audi).',
      distractorAnalysis: 'Competitors do not approve each other\'s prices (A, which would be illegal price-fixing cartel behavior); they do not guarantee debt (C) or pool advertising (D).'
    }
  },
  {
    id: 'mcq-1.4-04',
    subunit: '1.4-stakeholders',
    topicTag: 'Stakeholder Conflict & Executive Pay',
    questionNumber: 24,
    question: 'Which of the following scenarios best exemplifies a classic internal stakeholder conflict between senior directors and company shareholders?',
    options: [
      { key: 'A', text: 'Suppliers refusing to deliver raw materials unless paid cash on delivery.' },
      { key: 'B', text: 'Senior directors awarding themselves substantial bonuses and share options during a period of falling net profits, which depresses shareholder dividend distributions.' },
      { key: 'C', text: 'Local residents protesting against nighttime factory traffic and noise pollution.' },
      { key: 'D', text: 'Customers switching to alternative brands due to inflationary retail price increases.' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'Executive remuneration is a primary flashpoint for internal conflict. When directors receive large bonuses and perks while profits fall, shareholders object that corporate wealth is being siphoned away from dividend payouts.',
      distractorAnalysis: 'Suppliers (A), local residents (C), and customers (D) are external stakeholders, not an internal clash between directors and shareholders.'
    }
  },
  {
    id: 'mcq-1.4-05',
    subunit: '1.4-stakeholders',
    topicTag: 'Stakeholder Mapping: Quadrant B',
    questionNumber: 25,
    question: 'According to the textbook\'s stakeholder mapping model (Figure 4.3), what is the recommended approach for stakeholders positioned in Quadrant B (Low Power, High Interest), such as local residents living next to a proposed chemical warehouse?',
    options: [
      { key: 'A', text: 'Minimum effort (ignore until legally challenged)' },
      { key: 'B', text: 'Keep informed (maintain open communication, newsletters, and informational consultations to build goodwill)' },
      { key: 'C', text: 'Keep satisfied (appease with corporate board seats)' },
      { key: 'D', text: 'Maximum effort (grant full executive veto authority over project design)' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'Quadrant B stakeholders have high personal interest but low direct power. Management must \'keep them informed\' through town halls, newsletters, and informational consultations. This builds goodwill and prevents them from organizing to build collective power (e.g. through viral media campaigns or lobbying).',
      distractorAnalysis: 'Minimum effort (A) applies to Quadrant A (Low Power, Low Interest); keep satisfied (C) applies to Quadrant C (High Power, Low Interest), perhaps by consulting them on strategic decisions; maximum effort (D) applies to Quadrant D (High Power, High Interest), the key stakeholders. Board seats and vetoes are not textbook strategies.'
    }
  },
  {
    id: 'mcq-1.4-06',
    subunit: '1.4-stakeholders',
    topicTag: 'Stakeholder Conflict in Takeovers',
    questionNumber: 26,
    question: 'In November 2013, 99.5% of Nokia\'s 3,900 shareholders voted in favour of selling to Microsoft for €5.4bn ($7.3bn) after the share price had dropped by 93%, and the 32,000 employees of the mobile phones division were transferred to Microsoft Mobile in early 2014. Why did this deal reflect divergent stakeholder priorities?',
    options: [
      { key: 'A', text: 'Employees sought to liquidate the company to claim government subsidies, whereas shareholders wanted continued manufacturing.' },
      { key: 'B', text: 'Shareholders prioritized salvaging remaining capital and stemming equity losses, whereas employees prioritized long-term job security and preserving Finnish organizational culture.' },
      { key: 'C', text: 'The Finnish government legally mandated that all domestic tech companies be acquired by American enterprises.' },
      { key: 'D', text: 'Microsoft offered guaranteed lifetime employment contracts to all transferred staff.' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'Shareholders had seen a 93% fall in the share price and overwhelmingly voted for the sale to recover remaining capital. In contrast, the 32,000 transferred employees cared about job security and faced the loss of their established corporate identity under Microsoft.',
      distractorAnalysis: 'Nothing in the case suggests employees wanted liquidation (A) or that the Finnish government mandated the sale (C); the case gives no guarantee of lifetime jobs (D), only that staff were transferred to Microsoft Mobile.'
    }
  },

  // --------------------------------------------------------------------------
  // Chapter 44: SWOT Analysis Toolkit (Q27–Q31)
  // --------------------------------------------------------------------------
  {
    id: 'mcq-bmt-swot-01',
    subunit: 'bmt-swot-analysis',
    topicTag: 'SWOT Matrix Quadrants',
    questionNumber: 21,
    question: 'In a SWOT analysis, which elements represent internal factors that are directly under the operational control of the organization?',
    options: [
      { key: 'A', text: 'Strengths and Opportunities' },
      { key: 'B', text: 'Opportunities and Threats' },
      { key: 'C', text: 'Strengths and Weaknesses' },
      { key: 'D', text: 'Weaknesses and Threats' }
    ],
    correctAnswer: 'C',
    explanation: {
      correctRationale: 'Strengths (core assets, patents) and Weaknesses (deficiencies, high debt) are internal to the firm, whereas Opportunities and Threats stem from the macro-environment.',
      distractorAnalysis: 'Opportunities and Threats (B) are external macro-variables (STEEPLE); A and D blend internal and external quadrants.'
    }
  },
  {
    id: 'mcq-bmt-swot-02',
    subunit: 'bmt-swot-analysis',
    topicTag: 'Factor Classification',
    questionNumber: 22,
    question: 'A small London bakery faces rising wholesale flour prices due to poor global wheat harvests and severe supply chain delays. In the bakery\'s SWOT matrix, how should this factor be classified?',
    options: [
      { key: 'A', text: 'Weakness' },
      { key: 'B', text: 'Threat' },
      { key: 'C', text: 'Strength' },
      { key: 'D', text: 'Opportunity' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'Global wheat shortages and climatic harvest shocks originate externally in the macro-environment and adversely affect the bakery\'s costs, classifying it as an external Threat.',
      distractorAnalysis: 'A Weakness (A) must be an internal controllable flaw (such as inefficient ovens); Strengths (C) and Opportunities (D) are positive factors.'
    }
  },
  {
    id: 'mcq-bmt-swot-03',
    subunit: 'bmt-swot-analysis',
    topicTag: 'SWOT Strategic Combinations',
    questionNumber: 23,
    question: 'In Figure 44.2 (SWOT analysis and business strategies), what does an offensive strategy entail?',
    options: [
      { key: 'A', text: 'Utilizing internal strengths to exploit external market opportunities.' },
      { key: 'B', text: 'Using external opportunities to rectify internal company weaknesses.' },
      { key: 'C', text: 'Minimizing internal weaknesses to defend against external environmental threats.' },
      { key: 'D', text: 'Leveraging internal strengths to neutralize external market threats.' }
    ],
    correctAnswer: 'A',
    explanation: {
      correctRationale: 'An offensive strategy applies when a strength meets an opportunity, which the textbook calls the ideal situation: the firm uses its internal strengths to make the most of external opportunities. (Some other sources call this an SO or "Maxi-Maxi" strategy; the Hoang textbook does not use that label.)',
      distractorAnalysis: 'Deploying strengths to capture opportunities is the offensive strategy (A). Overcoming weaknesses with opportunities is W-O Reorientation (B); minimizing weaknesses against threats is W-T Survival (C); leveraging strengths against threats is S-T Defensive (D).'
    }
  },
  {
    id: 'mcq-bmt-swot-04',
    subunit: 'bmt-swot-analysis',
    topicTag: 'Critical Evaluation',
    questionNumber: 24,
    question: 'Which of the following is a recognized methodological limitation of SWOT analysis?',
    options: [
      { key: 'A', text: 'It requires complex linear programming and expensive regression software to compute.' },
      { key: 'B', text: 'It focuses exclusively on macroeconomic variables and ignores internal departments.' },
      { key: 'C', text: 'It is qualitative, descriptive, and prone to subjective managerial bias without assigning numerical weightings or prioritizing issues.' },
      { key: 'D', text: 'It automatically generates operational implementation budgets.' }
    ],
    correctAnswer: 'C',
    explanation: {
      correctRationale: 'SWOT is a static, qualitative framework that does not calculate monetary values, assign probabilities, or rank issues by strategic urgency, making it vulnerable to subjective bias.',
      distractorAnalysis: 'SWOT requires zero complex software (A); it explicitly examines internal departments via Strengths and Weaknesses (B); it does not produce budgets (D).'
    }
  },
  {
    id: 'mcq-bmt-swot-05',
    subunit: 'bmt-swot-analysis',
    topicTag: 'Factor Classification',
    questionNumber: 25,
    question: 'Kidzplay Bouncy Castles operates a party rental business in London. If the firm possesses a brand-new, mobile-responsive e-commerce website but currently engages in minimal digital marketing, this lack of promotional visibility is classified as:',
    options: [
      { key: 'A', text: 'An external Threat' },
      { key: 'B', text: 'An internal Weakness' },
      { key: 'C', text: 'An external Opportunity' },
      { key: 'D', text: 'An internal Strength' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'Marketing expenditure and promotional campaigns are internal management decisions within the firm\'s direct operational control, making promotional failure an internal Weakness.',
      distractorAnalysis: 'A Threat (A) arises from external competitors or legislation; Opportunities (C) and Strengths (D) represent favorable conditions.'
    }
  },

  // --------------------------------------------------------------------------
  // Chapter 45: Ansoff Matrix Toolkit (Q26–Q30)
  // --------------------------------------------------------------------------
  {
    id: 'mcq-bmt-ansoff-01',
    subunit: 'bmt-ansoff-matrix',
    topicTag: 'Ansoff Foundations',
    questionNumber: 26,
    question: 'What are the two foundational dimensions used in Igor Ansoff\'s Growth Matrix to categorize strategic growth options?',
    options: [
      { key: 'A', text: 'Price Level and Product Quality' },
      { key: 'B', text: 'Market Share and Industry Growth Rate' },
      { key: 'C', text: 'Products (Existing vs New) and Markets (Existing vs New)' },
      { key: 'D', text: 'Internal Strengths and External Weaknesses' }
    ],
    correctAnswer: 'C',
    explanation: {
      correctRationale: 'Ansoff\'s 2x2 matrix categorizes corporate growth pathways across Products (Existing vs New) and Markets (Existing vs New).',
      distractorAnalysis: 'Price/Quality defines Bowman\'s Strategy Clock (A); Market Share/Growth Rate defines the Boston Consulting Group (BCG) Matrix (B); Strengths/Weaknesses belongs to SWOT (D).'
    }
  },
  {
    id: 'mcq-bmt-ansoff-02',
    subunit: 'bmt-ansoff-matrix',
    topicTag: 'Market Penetration',
    questionNumber: 27,
    question: 'A supermarket chain runs a promotional campaign offering loyalty card reward points and 2-for-1 bundle discounts on its existing brand-name cereal lines to existing neighborhood customers. Which Ansoff growth strategy is being executed?',
    options: [
      { key: 'A', text: 'Product Development' },
      { key: 'B', text: 'Market Development' },
      { key: 'C', text: 'Market Penetration' },
      { key: 'D', text: 'Diversification' }
    ],
    correctAnswer: 'C',
    explanation: {
      correctRationale: 'Selling existing products to existing markets using discounts and loyalty schemes to grow market share is the textbook definition of Market Penetration.',
      distractorAnalysis: 'Product Development requires a new product (A); Market Development requires a new geographic or demographic market (B); Diversification requires both to be new (D).'
    }
  },
  {
    id: 'mcq-bmt-ansoff-03',
    subunit: 'bmt-ansoff-matrix',
    topicTag: 'Diversification vs Product Dev',
    questionNumber: 28,
    question: 'Toyota, an established automotive manufacturer, creates a completely new luxury marque called Lexus to target high-net-worth consumers seeking luxury vehicles, a segment Toyota previously did not serve. In Ansoff\'s matrix, this is primarily classified as:',
    options: [
      { key: 'A', text: 'Market Penetration' },
      { key: 'B', text: 'Diversification' },
      { key: 'C', text: 'Market Development' },
      { key: 'D', text: 'Product Development' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'Developing a newly engineered luxury automobile (new product) for wealthy executive motorists previously unserved by mass-market Toyota (new market) represents Diversification. The textbook (p.613) gives Toyota\'s Lexus as an example of related diversification.',
      distractorAnalysis: 'It cannot be Penetration (A) as neither product nor target customer was existing; it differs from pure Product Development (D) because mass-market economy buyers were not the target.'
    }
  },
  {
    id: 'mcq-bmt-ansoff-04',
    subunit: 'bmt-ansoff-matrix',
    topicTag: 'Ansoff Risk Continuum',
    questionNumber: 29,
    question: 'Why is Diversification classified as the highest-risk strategy in the Ansoff Matrix?',
    options: [
      { key: 'A', text: 'It requires selling existing products at predatory pricing below cost.' },
      { key: 'B', text: 'It forces the business to enter an unfamiliar market with a product it has never previously manufactured, lacking both operational expertise and customer familiarity.' },
      { key: 'C', text: 'It violates international antitrust trade regulations.' },
      { key: 'D', text: 'It requires the business to convert from a limited company into an unincorporated partnership.' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'Diversification carries "double unfamiliarity"—the firm lacks engineering experience for the new product and possesses no established customer goodwill or distribution in the new market.',
      distractorAnalysis: 'Predatory pricing is an anti-competitive tactic in penetration (A); diversification is fully legal under trade law (C); business legal structure is unrelated to Ansoff vectors (D).'
    }
  },
  {
    id: 'mcq-bmt-ansoff-05',
    subunit: 'bmt-ansoff-matrix',
    topicTag: 'Market Development',
    questionNumber: 30,
    question: 'During the COVID-19 pandemic, sportswear brand Adidas experienced retail store closures and responded by shifting its distribution from physical retail stores to expanding its direct-to-consumer e-commerce and mail-order platforms, targeting new global online shopper demographics with its athletic merchandise. This strategy is an example of:',
    options: [
      { key: 'A', text: 'Market Development' },
      { key: 'B', text: 'Product Development' },
      { key: 'C', text: 'Defensive Retrenchment' },
      { key: 'D', text: 'Backward Vertical Integration' }
    ],
    correctAnswer: 'A',
    explanation: {
      correctRationale: 'Selling existing athletic footwear and apparel into new customer segments via digital channels and direct-to-consumer e-commerce defines Market Development.',
      distractorAnalysis: 'Product Development requires a new physical product line (B); retrenchment entails downsizing (C); backward integration involves acquiring suppliers (D).'
    }
  },
{
  "id": "mcq-steeple-01",
  "subunit": "bmt-steeple-analysis",
  "topicTag": "STEEPLE Core Purpose",
  "questionNumber": 31,
  "question": "What is the primary analytical objective of conducting a STEEPLE analysis?",
  "options": [
    {
      "key": "A",
      "text": "To audit the internal operational efficiencies and departmental cash flow balances of a business."
    },
    {
      "key": "B",
      "text": "To systematically scan and examine the external macro-environment to identify opportunities and threats beyond the firm's direct control."
    },
    {
      "key": "C",
      "text": "To categorize a firm's multi-product portfolio into cash-generating versus cash-draining business units."
    },
    {
      "key": "D",
      "text": "To calculate the probability-weighted expected monetary returns of mutually exclusive capital investments."
    }
  ],
  "correctAnswer": "B",
  "explanation": {
    "correctRationale": "STEEPLE analysis audits the seven broad external macro-environmental dimensions (Social, Tech, Economic, Environmental, Political, Legal, Ethical) to identify opportunities and threats that the firm cannot directly govern.",
    "distractorAnalysis": "Internal operational efficiency (A) belongs to SWOT internal analysis; product portfolio classification (C) describes the BCG Matrix; expected monetary return calculations (D) describes Decision Trees."
  }
},
{
  "id": "mcq-steeple-02",
  "subunit": "bmt-steeple-analysis",
  "topicTag": "Social Demographics",
  "questionNumber": 32,
  "question": "In many developed nations, an aging population combined with declining birth rates is creating a demographic shift. For a private residential care provider, this macro-environmental trend represents:",
  "options": [
    {
      "key": "A",
      "text": "An internal operational strength resulting from proprietary nursing competencies."
    },
    {
      "key": "B",
      "text": "An external Social opportunity that expands aggregate market demand for eldercare services."
    },
    {
      "key": "C",
      "text": "An external Political threat stemming from state healthcare legislative mandates."
    },
    {
      "key": "D",
      "text": "An internal organizational weakness due to higher employee turnover."
    }
  ],
  "correctAnswer": "B",
  "explanation": {
    "correctRationale": "Demographic aging is an external Social trend in the macro-environment that increases aggregate customer demand and commercial viability for private care providers.",
    "distractorAnalysis": "An aging population is an external macro phenomenon, not an internal strength (A) or weakness (D); demographic population changes fall under Social rather than Political factors (C)."
  }
},
{
  "id": "mcq-steeple-03",
  "subunit": "bmt-steeple-analysis",
  "topicTag": "Economic & Exchange Rates",
  "questionNumber": 33,
  "question": "What is the anticipated commercial impact when a country's domestic currency experiences a substantial appreciation (a higher exchange rate)?",
  "options": [
    {
      "key": "A",
      "text": "Imported raw materials become cheaper, but domestically manufactured exports become dearer and less price-competitive abroad."
    },
    {
      "key": "B",
      "text": "Imported raw materials become more expensive, but export profit margins in overseas markets expand automatically."
    },
    {
      "key": "C",
      "text": "Both imports and exports become cheaper simultaneously, stimulating national trade surpluses."
    },
    {
      "key": "D",
      "text": "Domestic consumer inflation increases dramatically due to elevated import purchase tariffs."
    }
  ],
  "correctAnswer": "A",
  "explanation": {
    "correctRationale": "The textbook (p.626) explains that a higher exchange rate (appreciation) makes export prices relatively higher, reducing exporters' price competitiveness, while a lower exchange rate makes imported raw materials and components dearer. So an appreciation makes imports cheaper and exports dearer. (Some teachers remember this as SPICED, 'Strong Pound, Imports Cheaper, Exports Dearer'; the textbook does not use that mnemonic.)",
    "distractorAnalysis": "B reverses the currency effect; a stronger currency does not make exports cheaper (C); cheaper imports generally suppress rather than accelerate domestic inflation (D)."
  }
},
{
  "id": "mcq-steeple-04",
  "subunit": "bmt-steeple-analysis",
  "topicTag": "Legal vs Political",
  "questionNumber": 34,
  "question": "A national parliament passes statutory legislation mandating a 15% increase in the national minimum wage, accompanied by severe financial penalties for non-compliant employers. In a STEEPLE analysis, this development is classified as:",
  "options": [
    {
      "key": "A",
      "text": "A Political factor because politicians debated the bill in parliament."
    },
    {
      "key": "B",
      "text": "A Legal factor because it is an enacted, legally enforceable statute carrying criminal or civil penalties."
    },
    {
      "key": "C",
      "text": "An Ethical factor because paying higher wages reflects altruistic corporate generosity."
    },
    {
      "key": "D",
      "text": "An Environmental factor because workers operate in a physical factory environment."
    }
  ],
  "correctAnswer": "B",
  "explanation": {
    "correctRationale": "Once legislation is formally enacted into enforceable law carrying statutory penalties, it operates as a Legal factor. Political factors encompass government policy direction, taxation debates, and political stability.",
    "distractorAnalysis": "Even though politicians vote on legislation, enacted laws are Legal (A); compliance with statutory mandates is legally required, not voluntary CSR/Ethical altruism (C); worker environments do not constitute ecological Environmental factors (D)."
  }
},
{
  "id": "mcq-steeple-05",
  "subunit": "bmt-steeple-analysis",
  "topicTag": "Technological Obsolescence",
  "questionNumber": 35,
  "question": "Rapid cycles of technological innovation and automated product obsolescence in consumer electronics (e.g. video game consoles and smartphones) primarily present which external threat to incumbent manufacturers?",
  "options": [
    {
      "key": "A",
      "text": "Rising trade tariffs imposed by foreign customs authorities."
    },
    {
      "key": "B",
      "text": "Shortened product life cycles requiring continuous, expensive R&D expenditures to avoid commercial irrelevance."
    },
    {
      "key": "C",
      "text": "Strict statutory employment laws prohibiting automated factory robotics."
    },
    {
      "key": "D",
      "text": "A mandatory transition to unlimited shareholder liability under commercial law."
    }
  ],
  "correctAnswer": "B",
  "explanation": {
    "correctRationale": "Technological disruption compresses product life cycles, forcing hardware companies into continuous, capital-intensive R&D cycles to prevent legacy products from becoming obsolete.",
    "distractorAnalysis": "Tariffs (A) are Political/Legal trade barriers; labor laws (C) are Legal; shareholder liability (D) is a corporate governance rule unaffected by technological innovation."
  }
},
{
  "id": "mcq-steeple-06",
  "subunit": "bmt-steeple-analysis",
  "topicTag": "Ethical Sourcing & CSR",
  "questionNumber": 36,
  "question": "How does an Ethical factor in STEEPLE differ fundamentally from a Legal factor?",
  "options": [
    {
      "key": "A",
      "text": "Ethical factors represent mandatory statutory requirements, whereas Legal factors are voluntary guidelines."
    },
    {
      "key": "B",
      "text": "Ethical factors reflect voluntary moral standards and social responsibilities that exceed legal minimums, whereas Legal factors are enforceable statutory requirements."
    },
    {
      "key": "C",
      "text": "Ethical factors only apply to charitable non-governmental organizations, whereas Legal factors apply to public limited companies."
    },
    {
      "key": "D",
      "text": "Ethical factors are exclusively concerned with monetary profit maximization for equity shareholders."
    }
  ],
  "correctAnswer": "B",
  "explanation": {
    "correctRationale": "Ethics concerns moral judgment and voluntary corporate social responsibility (CSR) beyond statutory minimums (e.g. fair trade pricing, carbon neutrality), whereas laws are state-enforced mandates.",
    "distractorAnalysis": "A reverses the definitions; ethical standards apply to all commercial firms, not just NGOs (C); profit maximization without regard to morals violates ethical principles (D)."
  }
},
{
  "id": "mcq-bmt-01",
  "subunit": "bmt-toolkit",
  "topicTag": "BCG Matrix Stars",
  "questionNumber": 37,
  "question": "In the Boston Consulting Group (BCG) Matrix, which quadrant characterizes a product holding a dominant market share in a rapidly growing industry?",
  "options": [
    {
      "key": "A",
      "text": "Cash Cow"
    },
    {
      "key": "B",
      "text": "Star"
    },
    {
      "key": "C",
      "text": "Question Mark (Problem Child)"
    },
    {
      "key": "D",
      "text": "Dog"
    }
  ],
  "correctAnswer": "B",
  "explanation": {
    "correctRationale": "Stars possess high relative market share in high-growth markets, generating high sales revenues but requiring heavy continuous investment to sustain dominance.",
    "distractorAnalysis": "Cash Cows (A) have high market share in low-growth markets; Question Marks (C) have low market share in high-growth markets; Dogs (D) have low share in low-growth markets."
  }
},
{
  "id": "mcq-bmt-02",
  "subunit": "bmt-toolkit",
  "topicTag": "BCG Cash Flow Dynamics",
  "questionNumber": 38,
  "question": "What is the primary cash flow role of a 'Cash Cow' product within a diversified corporate portfolio?",
  "options": [
    {
      "key": "A",
      "text": "To absorb massive capital reinvestment to aggressively expand existing manufacturing capacity."
    },
    {
      "key": "B",
      "text": "To generate substantial surplus cash flow that can be harvested to fund promising Question Marks and support Stars."
    },
    {
      "key": "C",
      "text": "To undergo immediate liquidation through a divestment strategy to cut ongoing operational losses."
    },
    {
      "key": "D",
      "text": "To operate at a continuous financial deficit in order to depress competitors' share prices."
    }
  ],
  "correctAnswer": "B",
  "explanation": {
    "correctRationale": "Cash Cows are mature, highly profitable products with established infrastructure in stable markets, generating surplus liquidity used to finance growth products elsewhere in the portfolio.",
    "distractorAnalysis": "Cash Cows require low, not massive, capital reinvestment (A); liquidation/divestment (C) applies to Dogs; operating at a deliberate loss (D) describes predatory pricing, not cash cow strategy."
  }
},
{
  "id": "mcq-bmt-03",
  "subunit": "bmt-toolkit",
  "topicTag": "BCG Strategic Prescriptions",
  "questionNumber": 39,
  "question": "A multinational technology conglomerate owns an experimental smart-home division that holds a 4% market share in an industry expanding by 28% annually. Under the BCG Matrix, which strategic choice faces executive management?",
  "options": [
    {
      "key": "A",
      "text": "Harvest the division immediately to maximize short-term cash extraction."
    },
    {
      "key": "B",
      "text": "Pursue a Build strategy by investing cash-cow reserves to capture market share, or Divest if long-term leadership is unachievable."
    },
    {
      "key": "C",
      "text": "Hold current operations with zero marketing expenditure because the market is already mature."
    },
    {
      "key": "D",
      "text": "Convert the product into a sole proprietorship to shield corporate shareholders from liability."
    }
  ],
  "correctAnswer": "B",
  "explanation": {
    "correctRationale": "The product is a Question Mark (low share in high-growth market). Executives must either commit heavy capital to 'Build' it into a Star or 'Divest' before it drains corporate cash reserves.",
    "distractorAnalysis": "Harvesting (A) is the strategy for Cash Cows; Holding with zero investment (C) fails in high-growth competitive markets; converting to a sole proprietorship (D) is legally nonsensical for a conglomerate division."
  }
},
{
  "id": "mcq-bmt-04",
  "subunit": "bmt-toolkit",
  "topicTag": "Circular Business Models",
  "questionNumber": 40,
  "question": "Lighting manufacturer Philips provides illumination systems to Schiphol Airport under a model where Philips retains ownership of all lighting fixtures, handles all maintenance, and charges the airport based on light usage. This exemplifies which Circular Business Model?",
  "options": [
    {
      "key": "A",
      "text": "Linear Take-Make-Waste Extraction Model"
    },
    {
      "key": "B",
      "text": "Product-Service System (PSS) Model"
    },
    {
      "key": "C",
      "text": "Predatory Pricing Model"
    },
    {
      "key": "D",
      "text": "Unrelated Conglomerate Diversification Model"
    }
  ],
  "correctAnswer": "B",
  "explanation": {
    "correctRationale": "In a Product-Service System (PSS) model, the business retains asset ownership and sells the functional service or utility of the product, incentivizing durable, energy-efficient engineering.",
    "distractorAnalysis": "Linear models (A) sell disposable hardware to customers who discard them; predatory pricing (C) is an illegal pricing strategy; diversification (D) is an Ansoff growth strategy."
  }
},
{
  "id": "mcq-bmt-05",
  "subunit": "bmt-toolkit",
  "topicTag": "Decision Tree Symbology",
  "questionNumber": 41,
  "question": "In a formal quantitative Decision Tree diagram, what do square nodes and circular nodes represent respectively?",
  "options": [
    {
      "key": "A",
      "text": "Squares represent Chance Nodes (external probabilities); Circles represent Decision Nodes (managerial choices)."
    },
    {
      "key": "B",
      "text": "Squares represent Decision Nodes (points of managerial control); Circles represent Chance Nodes (points of uncertainty with assigned probabilities)."
    },
    {
      "key": "C",
      "text": "Squares represent Gross Revenues; Circles represent Net Operating Losses."
    },
    {
      "key": "D",
      "text": "Squares represent Internal Strengths; Circles represent External Threats."
    }
  ],
  "correctAnswer": "B",
  "explanation": {
    "correctRationale": "Decision Trees use standardized symbology: Squares designate Decision Nodes where management decides between options; Circles designate Chance Nodes where external outcomes occur with probabilistic distributions.",
    "distractorAnalysis": "A reverses the shapes; revenues and losses (C) are numerical payoffs on branch tips; strengths and threats (D) belong to SWOT matrices."
  }
},
{
  "id": "mcq-bmt-06",
  "subunit": "bmt-toolkit",
  "topicTag": "Decision Tree Net EMV",
  "questionNumber": 42,
  "question": "A retail firm is appraising an expansion project costing $200,000. Market research indicates a 60% probability of high demand yielding $500,000 payoff, and a 40% probability of low demand yielding $100,000 payoff. What is the Net Expected Monetary Value (Net EMV) of this decision?",
  "options": [
    {
      "key": "A",
      "text": "$340,000"
    },
    {
      "key": "B",
      "text": "$140,000"
    },
    {
      "key": "C",
      "text": "$300,000"
    },
    {
      "key": "D",
      "text": "$60,000"
    }
  ],
  "correctAnswer": "B",
  "explanation": {
    "correctRationale": "Gross EV = (0.60 * $500,000) + (0.40 * $100,000) = $300,000 + $40,000 = $340,000. Net EMV = Gross EV - Initial Capital Cost = $340,000 - $200,000 = $140,000.",
    "distractorAnalysis": "$340,000 (A) is the gross EV before deducting initial expenditure; $300,000 (C) is only the high demand expected value; $60,000 (D) results from calculation errors."
  }
},

  // --------------------------------------------------------------------------
  // Unit 1.5: Growth & Evolution - Economies of Scale (6 Questions)
  // --------------------------------------------------------------------------
  {
    id: 'mcq-1.5-01',
    subunit: '1.5-growth-and-evolution',
    topicTag: 'Definition & Mathematical Mechanism of Economies of Scale',
    questionNumber: 49,
    question: 'How are economies of scale defined and mathematically experienced by an expanding business enterprise?',
    options: [
      { key: 'A', text: 'An increase in total gross profit generated by expanding retail shop floor area.' },
      { key: 'B', text: 'A reduction in the average total cost per unit of output (ATC) as the scale of business operations increases.' },
      { key: 'C', text: 'A continuous reduction in total variable costs as production output expands.' },
      { key: 'D', text: 'An increase in selling price per unit made possible by monopolistic brand dominance.' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'Economies of scale refer to cost-saving benefits resulting in a decrease in average cost of production (ATC = TC / Q) as a firm expands its scale of operations. Spreading constant total fixed costs (TFC) over higher output continuously lowers average fixed costs (AFC), driving down ATC.',
      distractorAnalysis: 'Total variable costs (C) always rise with output even if AVC falls; economies of scale describe unit costs (B), not total gross profit (A) or selling prices (D).'
    }
  },
  {
    id: 'mcq-1.5-02',
    subunit: '1.5-growth-and-evolution',
    topicTag: 'Internal Economies: Technical vs. Purchasing',
    questionNumber: 50,
    question: 'The Philips factory in Shenzhen, China uses sophisticated capital and machinery to produce complete audio systems within a few seconds, spreading its high fixed costs over a huge scale of output. Which type of economy of scale does this illustrate?',
    options: [
      { key: 'A', text: 'Purchasing economies of scale' },
      { key: 'B', text: 'Technical economies of scale' },
      { key: 'C', text: 'Financial economies of scale' },
      { key: 'D', text: 'Risk-bearing economies of scale' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'Technical economies of scale occur when large-scale enterprises employ sophisticated, high-capacity machinery and automated production lines to mass produce goods, spreading heavy capital equipment costs across enormous output volumes.',
      distractorAnalysis: 'Purchasing economies (A) involve bulk discounts on bought-in inventory; financial economies (C) involve lower bank borrowing interest rates; risk-bearing economies (D) involve conglomerate product diversification.'
    }
  },
  {
    id: 'mcq-1.5-03',
    subunit: '1.5-growth-and-evolution',
    topicTag: 'Risk-Bearing Economies in Conglomerates',
    questionNumber: 51,
    question: 'How does an industrial conglomerate like Reliance Industries achieve risk-bearing economies of scale?',
    options: [
      { key: 'A', text: 'By forcing sole suppliers to deliver all raw materials on 180-day interest-free trade credit.' },
      { key: 'B', text: 'By replacing human production workers with automated robotic machinery across all factories.' },
      { key: 'C', text: 'By maintaining a diversified portfolio of business units across different industries so losses in one market are cushioned by profits in others.' },
      { key: 'D', text: 'By converting from a public limited company into a state-owned natural monopoly.' }
    ],
    correctAnswer: 'C',
    explanation: {
      correctRationale: 'Risk-bearing economies of scale are enjoyed by conglomerates with diversified portfolios operating in varied markets (e.g., energy, telecoms, retail). Spreading fixed costs and risks across multiple sectors ensures that a cyclical downturn in one area does not jeopardize the overall company.',
      distractorAnalysis: 'Option A describes purchasing/monopsony power; Option B describes technical economies; Option D describes nationalization, not risk-bearing scale.'
    }
  },
  {
    id: 'mcq-1.5-04',
    subunit: '1.5-growth-and-evolution',
    topicTag: 'External Economies of Scale & Regional Agglomeration',
    questionNumber: 52,
    question: 'Why do independent artisanal glassmakers clustered on the island of Murano in Venice experience external economies of scale?',
    options: [
      { key: 'A', text: 'Each workshop has merged under a single multinational holding corporation.' },
      { key: 'B', text: 'All workshops benefit from shared local access to specialized furnace technicians, raw material merchants, and a world-renowned regional reputation.' },
      { key: 'C', text: 'The Italian government exempts all island businesses from corporate income and sales taxes.' },
      { key: 'D', text: 'Individual workshop owners share corporate board directors to coordinate monopoly pricing.' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'External economies of scale arise outside individual firms due to favorable location or regional industrial specialization (agglomeration). In Murano, glassmakers benefit from access to specialist labour, sub-contractors and suppliers, and the area\'s reputation for glass allows its firms to charge premium prices (p.68).',
      distractorAnalysis: 'Murano workshops remain independent (not merged, A); external economies stem from regional industrial clustering, not tax holidays (C) or illegal price-fixing cartels (D).'
    }
  },
  {
    id: 'mcq-1.5-05',
    subunit: '1.5-growth-and-evolution',
    topicTag: 'Internal Diseconomies: Mismanagement & Bureaucracy',
    questionNumber: 53,
    question: 'Which of the following is a classic cause of internal diseconomies of scale in an over-expanded enterprise?',
    options: [
      { key: 'A', text: 'Municipal roads near the factory become congested with delivery freight.' },
      { key: 'B', text: 'Local commercial landlords double office lease rates across the central business district.' },
      { key: 'C', text: 'A tall hierarchy and excessive bureaucratic approval layers cause communication distortion, decision paralysis, and employee alienation.' },
      { key: 'D', text: 'A competitor opens a modern facility nearby and poaches junior apprentices.' }
    ],
    correctAnswer: 'C',
    explanation: {
      correctRationale: 'Internal diseconomies of scale stem from internal mismanagement as a firm grows too large: tall hierarchies, slow bureaucracy, widening spans of control, and worker alienation cause unit production costs to increase.',
      distractorAnalysis: 'Traffic congestion (A), soaring CBD office rents (B), and local talent poaching (D) are external diseconomies caused by factors outside the individual firm in the broader industry or region.'
    }
  },
  {
    id: 'mcq-1.5-06',
    subunit: '1.5-growth-and-evolution',
    topicTag: 'Optimal Level of Output',
    questionNumber: 54,
    question: 'On a firm\'s U-shaped average cost curve (textbook Figure 5.1), what occurs at the optimal level of output?',
    options: [
      { key: 'A', text: 'Total fixed costs equal total variable costs.' },
      { key: 'B', text: 'Average total cost of production (ATC) reaches its lowest possible point before diseconomies set in.' },
      { key: 'C', text: 'The business achieves 100% monopolistic market share in its domestic market.' },
      { key: 'D', text: 'Marginal revenue drops to zero.' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'The optimal level of output is the most efficient scale of operation, where average cost per unit is minimized (pp.66, 87). Expanding beyond it brings diseconomies of scale, causing unit costs to rise. (Economics courses call a related idea minimum efficient scale on the long-run average cost curve; the textbook does not use those terms.)',
      distractorAnalysis: 'TFC does not have to equal TVC at optimal output (A); optimal scale is an operational cost-minimization concept, not 100% market share (C) or zero marginal revenue (D).'
    }
  },
{
    id: 'mcq-1.1-A1-01',
    subunit: '1.1-what-is-a-business',
    topicTag: 'Economic Sectors',
    questionNumber: 55,
    question: 'In high-income countries such as the USA and UK, approximately what share of the labour force works in the tertiary sector?',
    options: [
      { key: 'A', text: '20%' },
      { key: 'B', text: '40%' },
      { key: 'C', text: '80%' },
      { key: 'D', text: '95%' }
    ],
    correctAnswer: 'C',
    explanation: {
      correctRationale: 'The textbook states that in the USA and UK around 80% of the labour force work in the tertiary sector, which is the most substantial sector in high-income countries in terms of both employment and output.',
      distractorAnalysis: 'A and B understate the scale of tertiary employment in high-income economies. D overstates it; the textbook gives around 80%.'
    }
  },
  {
    id: 'mcq-1.1-A1-02',
    subunit: '1.1-what-is-a-business',
    topicTag: 'Economic Sectors',
    questionNumber: 56,
    question: 'Which activity is best classified as part of the quaternary sector?',
    options: [
      { key: 'A', text: 'Operating a public bus network' },
      { key: 'B', text: 'Assembling cars on a factory production line' },
      { key: 'C', text: 'Researching and developing new medicines in a pharmaceutical laboratory' },
      { key: 'D', text: 'Extracting crude oil from an offshore field' }
    ],
    correctAnswer: 'C',
    explanation: {
      correctRationale: 'The quaternary sector is a sub-category of the tertiary sector involving intellectual and knowledge-based activities that generate and share information, such as ICT, research and development, consultancy and scientific research. The textbook notes that pharmaceutical companies invest heavily in R&D.',
      distractorAnalysis: 'A is a tertiary transport service, since public transportation is part of the tertiary sector. B is secondary manufacturing. D is primary extraction of a natural resource.'
    }
  },
  {
    id: 'mcq-1.1-A1-03',
    subunit: '1.1-what-is-a-business',
    topicTag: 'Entrepreneurship',
    questionNumber: 57,
    question: 'Which term describes the trait of business leaders who are distinctive in their temperament, attitude and outlook, and who drive the business to achieve its organizational goals?',
    options: [
      { key: 'A', text: 'Capital growth' },
      { key: 'B', text: 'Entrepreneurship' },
      { key: 'C', text: 'Labour' },
      { key: 'D', text: 'Chain of production' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'The textbook defines entrepreneurship as the trait of business leaders who tend to be distinctive in their temperament, attitude and outlook, and who drive the business to achieve its organizational goals. The term was coined by Richard Cantillon.',
      distractorAnalysis: 'A (capital growth) is the increase in the value of a business or property over time. C (labour) is one of the four factors of production: the physical and mental effort of workers. D (chain of production) describes the stages a product passes through from extraction to the consumer.'
    }
  },
  {
    id: 'mcq-1.1-A1-04',
    subunit: '1.1-what-is-a-business',
    topicTag: 'Challenges of Starting a Business',
    questionNumber: 58,
    question: 'A new business sells its products on credit. Which range does the textbook give as the typical credit period customers may demand before paying?',
    options: [
      { key: 'A', text: '7 to 14 days' },
      { key: 'B', text: '30 to 60 days' },
      { key: 'C', text: '90 to 120 days' },
      { key: 'D', text: '180 to 365 days' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'The textbook states that customers might demand a lengthy credit period, typically between 30 and 60 days. During this time the business still has to pay wages, rent, utility bills, taxes and loan interest, which creates cash flow problems.',
      distractorAnalysis: 'A is shorter than the textbook range. C and D are much longer than the typical period the textbook describes.'
    }
  },
  {
    id: 'mcq-1.1-A1-05',
    subunit: '1.1-what-is-a-business',
    topicTag: 'Marketing Problems for Start-Ups',
    questionNumber: 59,
    question: 'According to the textbook, what is often the key to small business success in a market already served by established competitors?',
    options: [
      { key: 'A', text: 'Matching the price of the largest competitor exactly in every market segment' },
      { key: 'B', text: 'Identifying a niche (or gap) in the market and filling it' },
      { key: 'C', text: 'Relying on bulk-buying discounts from suppliers' },
      { key: 'D', text: 'Waiting for established competitors to leave the market' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'The textbook says that the key to small business success is often to identify a niche (or gap) in the market and then fill it. It cites easyJet and Ryanair, which identified the niche market for no-frills (budget) air travel.',
      distractorAnalysis: 'A is not presented as a niche strategy in the textbook. C describes an advantage of large, established businesses through economies of scale rather than a route open to small start-ups. D is passive; the textbook presents success as the result of identifying and filling a gap.'
    }
  },
  {
    id: 'mcq-1.2-A1-06',
    subunit: '1.2-types-of-business-entities',
    topicTag: 'Incorporation',
    questionNumber: 60,
    question: 'Which document must be produced and submitted before a limited liability company can begin trading, and states the company\'s trading name, main purpose, registered business address and amount of share capital?',
    options: [
      { key: 'A', text: 'Articles of Association' },
      { key: 'B', text: 'Memorandum of Association' },
      { key: 'C', text: 'Deed of Partnership' },
      { key: 'D', text: 'Certificate of Incorporation' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'The Memorandum of Association is a relatively brief document outlining the fundamental details of the company, including its trading name, main purpose, registered business address and the amount of share capital. It is produced and submitted to the appropriate authorities before trading begins.',
      distractorAnalysis: 'A is the longer document setting out internal regulations, the roles and powers of the BOD and shareholders, and administrative procedures such as the AGM. C is the contract governing a partnership, not a company. D is issued by the authorities once the documents are accepted and the fee is paid; it recognises the company as a separate legal entity.'
    }
  },
  {
    id: 'mcq-1.2-A1-07',
    subunit: '1.2-types-of-business-entities',
    topicTag: 'Business vs Company',
    questionNumber: 61,
    question: 'Which statement about businesses and companies is correct?',
    options: [
      { key: 'A', text: 'All businesses are companies, because sole traders are registered as companies.' },
      { key: 'B', text: 'All companies are businesses, but not all businesses are companies.' },
      { key: 'C', text: 'There are three types of company: sole traders, partnerships and publicly held companies.' },
      { key: 'D', text: 'Companies are owned by their directors rather than by their shareholders.' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'The textbook states that companies are owned by shareholders, that there are only two types of company (privately held and publicly held), and that the term business also includes sole traders and partnerships.',
      distractorAnalysis: 'A is wrong because sole traders and partnerships are businesses that are not companies. C wrongly treats sole traders and partnerships as companies; there are only two types of company. D reverses ownership: shareholders own the company, and the BOD runs it on their behalf.'
    }
  },
  {
    id: 'mcq-1.2-A1-08',
    subunit: '1.2-types-of-business-entities',
    topicTag: 'Partnerships',
    questionNumber: 62,
    question: 'What is a silent (or sleeping) partner in a partnership?',
    options: [
      { key: 'A', text: 'A partner who has no right to any share of the partnership profits.' },
      { key: 'B', text: 'An investor who provides finance and is eligible for a portion of profits without taking an active part in running the partnership.' },
      { key: 'C', text: 'A partner who has been elected to have limited liability for the firm\'s debts.' },
      { key: 'D', text: 'A shareholder in a publicly held company who votes at its AGM.' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'The textbook explains that silent partners have a financial stake in the partnership and are eligible for a portion of any profits earned, but they do not take an active part in running it.',
      distractorAnalysis: 'A is wrong because silent partners are eligible for a portion of profits. C describes a limited liability partner, the rare exception to unlimited liability; that concerns liability, not involvement in running the firm. D describes a shareholder in a company, which is not a partnership concept.'
    }
  },
  {
    id: 'mcq-1.2-A1-09',
    subunit: '1.2-types-of-business-entities',
    topicTag: 'Public Sector',
    questionNumber: 63,
    question: 'Which organization is the best example of a public sector company (state-owned enterprise) according to the textbook?',
    options: [
      { key: 'A', text: 'Chanel, a privately held fashion and cosmetics company in France' },
      { key: 'B', text: 'Canada Post, which provides postal services' },
      { key: 'C', text: 'Ernst & Young, a privately held accounting company in the USA' },
      { key: 'D', text: 'Virgin Group, a privately held global conglomerate in the UK' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'Public sector companies are partially or wholly owned by government. The textbook lists Canada Post (postal services) alongside Transport for London, Singapore Airlines and the Airports Authority of India.',
      distractorAnalysis: 'A, C and D are all examples the textbook classifies as privately held companies, so they are not owned by government.'
    }
  },
{
    id: 'mcq-1.2-A2-01',
    subunit: '1.2-types-of-business-entities',
    topicTag: 'Public Sector Companies',
    questionNumber: 64,
    question: 'Which statement best describes a public sector company operating as a for-profit social enterprise?',
    options: [
      { key: 'A', text: 'A charity funded entirely by government grants that is prohibited from earning any revenue.' },
      { key: 'B', text: 'A company owned wholly or partly by the government that trades commercially for financial gain while providing services that may be inefficient if left solely to the private sector.' },
      { key: 'C', text: 'A privately owned cooperative whose members vote on all operational decisions.' },
      { key: 'D', text: 'A limited liability company whose shares are sold to the general public on a stock exchange.' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'Public sector companies are state-owned, wholly or partly, and run in a commercial way for financial gain. They raise government revenue and provide essential services that may be inefficient or undesirable if left solely to the private sector.',
      distractorAnalysis: 'Option A is wrong because public sector companies earn revenue from trading. Option C describes a member-owned cooperative, which is private sector. Option D describes a publicly held company (PLC), which is a private-sector business.'
    }
  },
  {
    id: 'mcq-1.2-A2-02',
    subunit: '1.2-types-of-business-entities',
    topicTag: 'Triple Bottom Line',
    questionNumber: 65,
    question: 'Which set of aims makes up the triple bottom line that social enterprises pursue?',
    options: [
      { key: 'A', text: 'Economic, legal and political aims.' },
      { key: 'B', text: 'Economic, social and environmental aims.' },
      { key: 'C', text: 'Profit, dividend and capital appreciation aims.' },
      { key: 'D', text: 'Social, technological and competitive aims.' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'The triple bottom line, coined by John Elkington in 1994, has economic aims (earning a surplus and reinvesting it), social aims (benefits to people in society) and environmental aims (protecting the planet).',
      distractorAnalysis: 'Legal and political aims (A) are not part of the framework. Profit, dividends and capital appreciation (C) are shareholder value mechanisms, not the three aims. Technological and competitive factors (D) are external STEEPLE influences, not the triple bottom line.'
    }
  },
  {
    id: 'mcq-1.2-A2-03',
    subunit: '1.2-types-of-business-entities',
    topicTag: 'Publicly Held vs Public Corporation',
    questionNumber: 66,
    question: 'Which statement correctly distinguishes a publicly held company from a public corporation?',
    options: [
      { key: 'A', text: 'A publicly held company is owned by the government, whereas a public corporation sells its shares on a stock exchange.' },
      { key: 'B', text: 'A publicly held company is a limited liability company in the private sector that offers its shares to the public on a stock exchange, whereas a public corporation is owned and operated by the government on behalf of the general public.' },
      { key: 'C', text: 'A publicly held company and a public corporation both have unlimited liability for their debts.' },
      { key: 'D', text: 'A public corporation is a cooperative run by its employees.' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'The word "public" in publicly held refers to the public trading of shares. A public corporation is government-owned and operated for the public as a whole.',
      distractorAnalysis: 'Option A reverses the two terms. Option C is wrong because publicly held companies are incorporated and have limited liability. Option D describes a worker cooperative, which is not a public corporation.'
    }
  },
  {
    id: 'mcq-1.2-A2-04',
    subunit: '1.2-types-of-business-entities',
    topicTag: 'Cooperatives: Advantages and Disadvantages',
    questionNumber: 67,
    question: 'Which of the following is a disadvantage of a cooperative as a form of business entity?',
    options: [
      { key: 'A', text: 'Employees have a stake in the cooperative, which can enhance their motivation and productivity.' },
      { key: 'B', text: 'Decision-making is likely to be slower because every member has a voice in a democratic process.' },
      { key: 'C', text: 'Cooperatives generate social benefits that can be enjoyed by the wider community.' },
      { key: 'D', text: 'Cooperatives tend to attract public support because people want them to succeed.' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'Table 2.4 lists slower decision-making as a disadvantage, because democratic decisions involve every member.',
      distractorAnalysis: 'Option A is an advantage (incentives to work). Option C is an advantage (social benefits). Option D is an advantage (public support).'
    }
  },
  {
    id: 'mcq-1.2-A2-05',
    subunit: '1.2-types-of-business-entities',
    topicTag: 'NGOs: Two Conditions',
    questionNumber: 68,
    question: 'According to the textbook, which two conditions must an organization meet to be classed as a non-governmental organization (NGO)?',
    options: [
      { key: 'A', text: 'It is funded by government ministries and its shares are listed on a stock exchange.' },
      { key: 'B', text: 'It is independent of government or direct public sector influence, and it is not-for-profit.' },
      { key: 'C', text: 'It is a limited liability company owned by shareholders who receive dividends.' },
      { key: 'D', text: 'It is owned by its members, and each member has one vote.' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'The textbook (p.35) says an NGO, sometimes called a private voluntary organization (PVO), can be any kind of organization so long as it is independent of the government or direct public sector influence and it is not-for-profit. The term itself was coined in Article 71 of the UN Charter (1945).',
      distractorAnalysis: 'Option A contradicts the independence condition and describes a PLC. Option C describes a company, which distributes dividends. Option D describes a cooperative, which is a different type of social enterprise.'
    }
  },
  {
    id: 'mcq-1.3-A2-06',
    subunit: '1.3-business-objectives',
    topicTag: 'Limitations of Vision and Mission',
    questionNumber: 69,
    question: 'Which criticism is commonly made of vision and mission statements?',
    options: [
      { key: 'A', text: 'They are legally required for every business before incorporation.' },
      { key: 'B', text: 'They may be no more than a public relations stunt, because the ultimate purpose of most businesses is to maximize profits and protect shareholder value.' },
      { key: 'C', text: 'They always contain quantified targets that managers can measure against actual results.' },
      { key: 'D', text: 'They are written once and never revised, even as markets change.' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'Critics argue that vision and mission statements can be a public relations exercise, since most businesses ultimately aim to make profits and protect shareholder value. They are also time-consuming to construct and may not be supported by everyone.',
      distractorAnalysis: 'Option A is not stated in the textbook. Option C describes objectives, which are generally specific and quantifiable; the textbook states that a vision need not be an actual target and that mission statements tend to be qualitative. Option D is wrong because mission statements can be revised as operations and markets evolve.'
    }
  },
  {
    id: 'mcq-1.3-A2-07',
    subunit: '1.3-business-objectives',
    topicTag: 'Unethical Business Behaviour',
    questionNumber: 70,
    question: 'A business deliberately misrepresents its financial accounts. Which type of unethical behaviour does this represent?',
    options: [
      { key: 'A', text: 'Exploitation of consumers' },
      { key: 'B', text: 'Environmental neglect and damage' },
      { key: 'C', text: 'Financial dishonesty' },
      { key: 'D', text: 'Exploitation of suppliers' }
    ],
    correctAnswer: 'C',
    explanation: {
      correctRationale: 'Financial dishonesty occurs when a business mismanages its finances, such as deliberately misrepresenting its financial accounts. The textbook notes that this is also illegal.',
      distractorAnalysis: 'Exploitation of consumers (A) involves harmful products or excessive prices. Environmental neglect (B) involves pollution or resource depletion. Exploitation of suppliers (D) involves forcing suppliers to cut prices.'
    }
  },
  {
    id: 'mcq-1.3-A2-08',
    subunit: '1.3-business-objectives',
    topicTag: 'Sales Revenue vs Profit',
    questionNumber: 71,
    question: 'A firm achieves high sales revenue but makes little or no profit. According to IB Business Management, what is the most likely long-term consequence?',
    options: [
      { key: 'A', text: 'It will certainly be taken over by a rival firm.' },
      { key: 'B', text: 'It will survive indefinitely because a high sales level guarantees its market share.' },
      { key: 'C', text: 'It will struggle to survive in the long term.' },
      { key: 'D', text: 'It will automatically become a public sector company.' }
    ],
    correctAnswer: 'C',
    explanation: {
      correctRationale: 'Sales revenue is not the same as profit, which is the surplus remaining after all costs are paid. In the long term, a firm with high sales revenue but low or no profit will struggle to survive.',
      distractorAnalysis: 'A takeover is a risk discussed in Chapter 5, not a certainty (A). High sales do not guarantee survival or market share (B). A firm does not become a public sector company because it makes low profits (D).'
    }
  },
{
    id: 'mcq-1.3-A3-01',
    subunit: '1.3-business-objectives',
    topicTag: 'CSR: Corporate Giving',
    questionNumber: 72,
    question: 'According to Fortune magazine, what proportion of their post-tax profits do the top 500 American firms donate to charity?',
    options: [
      { key: 'A', text: 'Less than 0.5%' },
      { key: 'B', text: 'Over 2%' },
      { key: 'C', text: 'Exactly 10%' },
      { key: 'D', text: 'Over 50%' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'Fortune magazine reports that the top 500 American firms donate over 2% of their post-tax profits to charity. Businesses see a good reputation as a competitive advantage, which is one reason for giving.',
      distractorAnalysis: 'Option A understates the reported figure. Options C and D are not figures the textbook gives for this statistic; the textbook states "over 2%".'
    }
  },
  {
    id: 'mcq-1.3-A3-02',
    subunit: '1.3-business-objectives',
    topicTag: 'Changing Objectives',
    questionNumber: 73,
    question: 'Why might a business change its objectives even when no external factor has changed?',
    options: [
      { key: 'A', text: 'Because the law requires every objective to be rewritten each year.' },
      { key: 'B', text: 'Because its original goals have been achieved, so new goals need to be set for a sustainable future.' },
      { key: 'C', text: 'Because objectives cannot be measured once they are achieved.' },
      { key: 'D', text: 'Because the mission statement must be replaced whenever a goal is met.' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'The textbook states that organizations change their objectives over time simply because the original goals have been achieved, so new ones need to be set for a sustainable future.',
      distractorAnalysis: 'Option A invents a legal requirement that the textbook does not state. Option C is incorrect because achieved objectives are measured against targets. Option D is wrong because the mission is revised as operations evolve, not automatically when a goal is met.'
    }
  },
  {
    id: 'mcq-1.3-A3-03',
    subunit: '1.3-business-objectives',
    topicTag: 'Ethics vs Morals',
    questionNumber: 74,
    question: 'Which statement correctly distinguishes ethics from morals?',
    options: [
      { key: 'A', text: 'Ethics are the moral principles that guide decision-making and business strategy, whereas morals are concerned with what is considered right or wrong from society\'s point of view.' },
      { key: 'B', text: 'Morals are a company\'s written internal rules, whereas ethics are the national laws it must obey.' },
      { key: 'C', text: 'Ethics concern only financial profit, whereas morals concern only employee welfare.' },
      { key: 'D', text: 'Ethics and morals are identical terms with no difference in business use.' }
    ],
    correctAnswer: 'A',
    explanation: {
      correctRationale: 'Ethics are the moral principles that guide decision-making and business strategy. Morals are concerned with what is considered right or wrong from society\'s point of view.',
      distractorAnalysis: 'Option B swaps the meanings and confuses ethics with law. Option C assigns each term a narrow, invented focus. Option D is incorrect because the textbook defines the two terms separately.'
    }
  },
  {
    id: 'mcq-1.4-A3-01',
    subunit: '1.4-stakeholders',
    topicTag: 'Government Interests',
    questionNumber: 75,
    question: 'Which of the following is NOT typically listed as an interest of the government as an external stakeholder?',
    options: [
      { key: 'A', text: 'The correct amount of corporate tax being paid from net profits.' },
      { key: 'B', text: 'Compliance with employment legislation.' },
      { key: 'C', text: 'Consumer protection laws being upheld.' },
      { key: 'D', text: 'Guaranteeing annual dividend payments to a company\'s shareholders.' }
    ],
    correctAnswer: 'D',
    explanation: {
      correctRationale: 'The government\'s interests include correct tax payment, employment law compliance, consumer protection, health and safety and avoidance of unfair practices. Dividend payments are an interest of shareholders, not of the government.',
      distractorAnalysis: 'Options A, B and C are each listed in the textbook\'s account of government interests. Option D is a shareholder interest (dividends from profit), so it is the exception.'
    }
  },
  {
    id: 'mcq-1.4-A3-02',
    subunit: '1.4-stakeholders',
    topicTag: 'Managing Stakeholder Conflict',
    questionNumber: 76,
    question: 'When deciding how to deal with conflicting stakeholder needs, which of the following is NOT one of the three key issues managers need to examine?',
    options: [
      { key: 'A', text: 'The type of business entity.' },
      { key: 'B', text: 'The goals and objectives of the business.' },
      { key: 'C', text: 'The source and degree of power (influence) of each stakeholder group.' },
      { key: 'D', text: 'The location of the company\'s head office.' }
    ],
    correctAnswer: 'D',
    explanation: {
      correctRationale: 'The textbook identifies three key issues: the type of business entity, the goals and objectives of the business, and the source and degree of power (influence) of each stakeholder group.',
      distractorAnalysis: 'Options A, B and C are the three key issues named in the textbook. The location of the head office is not one of them.'
    }
  },
  {
    id: 'mcq-1.4-A3-03',
    subunit: '1.4-stakeholders',
    topicTag: 'Pressure Group Tactics',
    questionNumber: 77,
    question: 'A pressure group stages mass protests and takes legal action against a firm it believes has behaved illegally. Which pressure group tactic is this?',
    options: [
      { key: 'A', text: 'Boycotting' },
      { key: 'B', text: 'Lobbying' },
      { key: 'C', text: 'Public relations' },
      { key: 'D', text: 'Direct action' }
    ],
    correctAnswer: 'D',
    explanation: {
      correctRationale: 'Direct action is taking action to achieve the cause, such as staging mass protests or taking legal action against firms that may have behaved illegally.',
      distractorAnalysis: 'Boycotting is refusing to buy a business\'s products (A). Lobbying is influencing employers, legal representatives and government (B). Public relations is getting positive publicity for a cause (C).'
    }
  },
  {
    id: 'mcq-1.4-A3-04',
    subunit: '1.4-stakeholders',
    topicTag: 'Best-Fit Compromise',
    questionNumber: 78,
    question: 'Why do most strategies for managing stakeholder conflict aim for a \'best fit\' compromise?',
    options: [
      { key: 'A', text: 'Because it is unrealistic or undesirable to maximize the needs of just one stakeholder group, and a group that is not catered for can cause problems for the business.' },
      { key: 'B', text: 'Because stakeholder conflict is banned by law in all countries.' },
      { key: 'C', text: 'Because a business can fully satisfy every stakeholder group at all times.' },
      { key: 'D', text: 'Because shareholders are the only stakeholders whose needs must be met.' }
    ],
    correctAnswer: 'A',
    explanation: {
      correctRationale: 'The textbook states that it is unrealistic or undesirable to maximize the needs of just one stakeholder group, so most strategies aim for a best-fit compromise in which all groups are reasonably addressed.',
      distractorAnalysis: 'Option B invents a legal ban. Option C contradicts the textbook, which says a business is unlikely to meet all objectives at the same time. Option D ignores the textbook\'s point that every stakeholder group matters.'
    }
  },
{
    id: 'mcq-1.5-A4-01',
    subunit: '1.5-growth-and-evolution',
    topicTag: 'Internal Growth Methods',
    questionNumber: 79,
    question: 'Which of the following is an example of internal (organic) growth?',
    options: [
      { key: 'A', text: 'Merging with a rival to form a new company with its own legal identity.' },
      { key: 'B', text: 'Opening new company-owned stores, funded by retained profits.' },
      { key: 'C', text: 'Forming a joint venture with a foreign partner to build a bottling plant.' },
      { key: 'D', text: 'Buying a controlling interest in a supplier with the supplier board\'s agreement.' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'Internal growth uses the firm\'s own resources to expand its operations and sales. Opening new stores with retained profits is organic growth, as with Poundland\'s store expansion.',
      distractorAnalysis: 'A (merger), C (joint venture) and D (acquisition) all involve an outside organization, so they are external (inorganic) growth methods.'
    }
  },
  {
    id: 'mcq-1.5-A4-02',
    subunit: '1.5-growth-and-evolution',
    topicTag: 'Takeovers and Hostile Takeovers',
    questionNumber: 80,
    question: 'One company buys a majority stake in another company without the permission of that company\'s board. Which term describes this?',
    options: [
      { key: 'A', text: 'Merger' },
      { key: 'B', text: 'Takeover (hostile takeover)' },
      { key: 'C', text: 'Joint venture' },
      { key: 'D', text: 'Strategic alliance' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'A takeover is the purchase of a controlling stake in another company without the agreement of its board. Takeovers are also called hostile takeovers.',
      distractorAnalysis: 'A merger creates a new company with the agreement of both sides (A). A joint venture (C) and strategic alliance (D) are cooperative arrangements that do not involve buying control of another firm.'
    }
  },
  {
    id: 'mcq-1.5-A4-03',
    subunit: '1.5-growth-and-evolution',
    topicTag: 'Mergers vs Acquisitions',
    questionNumber: 81,
    question: 'Which statement best distinguishes a merger from an acquisition?',
    options: [
      { key: 'A', text: 'In an acquisition, two firms create a new company with a new legal identity.' },
      { key: 'B', text: 'In a merger, one firm buys a controlling interest in another with the target board\'s permission, and the target usually keeps its name.' },
      { key: 'C', text: 'In a merger, two or more firms agree to create a new company with its own legal identity; in an acquisition, a buyer gains a controlling interest in another firm.' },
      { key: 'D', text: 'In an acquisition, the firms must share costs and profits equally.' }
    ],
    correctAnswer: 'C',
    explanation: {
      correctRationale: 'A merger creates a new company with its own legal identity, usually with a new name. An acquisition is the purchase of a controlling interest with the target board\'s permission, and the acquired firm often keeps its name (for example, Whole Foods under Amazon).',
      distractorAnalysis: 'A reverses the two terms. B describes an acquisition but labels it a merger. D describes an equal-share joint venture, not an acquisition.'
    }
  },
  {
    id: 'mcq-1.5-A4-04',
    subunit: '1.5-growth-and-evolution',
    topicTag: 'Forward Vertical Integration',
    questionNumber: 82,
    question: 'A coffee manufacturer acquires a chain of coffee shops that sell its products directly to consumers. Which type of integration is this?',
    options: [
      { key: 'A', text: 'Horizontal integration' },
      { key: 'B', text: 'Forward vertical integration' },
      { key: 'C', text: 'Backward vertical integration' },
      { key: 'D', text: 'Lateral integration' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'Forward vertical integration combines a firm with businesses closer to the final consumer. A coffee shop chain is at a later stage of production than the manufacturer.',
      distractorAnalysis: 'A (horizontal) would combine firms in the same stage of the same industry. C (backward) would move towards suppliers of raw materials. D (lateral) combines firms with similar operations that do not directly compete.'
    }
  },
  {
    id: 'mcq-1.5-A4-05',
    subunit: '1.5-growth-and-evolution',
    topicTag: 'Lateral Integration',
    questionNumber: 83,
    question: 'Which statement describes lateral integration?',
    options: [
      { key: 'A', text: 'Two firms in the same industry that compete directly merge.' },
      { key: 'B', text: 'Firms at different stages of production combine.' },
      { key: 'C', text: 'Firms in completely distinct markets combine.' },
      { key: 'D', text: 'Firms with similar operations that do not directly compete combine.' }
    ],
    correctAnswer: 'D',
    explanation: {
      correctRationale: 'Lateral integration is an M&A between firms with similar operations that do not directly compete with each other. Tata Motors acquiring Jaguar and Land Rover, which target different brand segments, is the textbook example.',
      distractorAnalysis: 'A describes horizontal integration. B describes vertical integration. C describes conglomerate M&A.'
    }
  },
  {
    id: 'mcq-1.5-A4-06',
    subunit: '1.5-growth-and-evolution',
    topicTag: 'Joint Ventures',
    questionNumber: 84,
    question: 'Two firms form a joint venture to build a new plant, splitting costs, risks and profits 50:50. What is the main advantage of this joint venture compared with a merger?',
    options: [
      { key: 'A', text: 'It guarantees each firm 100% control of the new plant.' },
      { key: 'B', text: 'Each firm keeps its own corporate identity while still sharing the risks and rewards.' },
      { key: 'C', text: 'It requires no cooperation between the two parties.' },
      { key: 'D', text: 'It removes any possibility of culture clash.' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'A joint venture allows organizations to enjoy benefits similar to a merger or acquisition without losing their individual corporate identities. Costs, risks and profits are shared.',
      distractorAnalysis: 'A is false because a JV splits control and profits between the partners. C is false because a JV depends on close cooperation. D is false because culture clashes are still possible in a JV, as the textbook notes.'
    }
  },
  {
    id: 'mcq-1.5-A4-07',
    subunit: '1.5-growth-and-evolution',
    topicTag: 'Strategic Alliances',
    questionNumber: 85,
    question: 'Which statement about a strategic alliance is correct?',
    options: [
      { key: 'A', text: 'It always creates a new legal business entity owned 50:50.' },
      { key: 'B', text: 'The member businesses remain independent organizations and do not form a new legal entity.' },
      { key: 'C', text: 'It is always formed through a hostile takeover.' },
      { key: 'D', text: 'Its first stage is contract negotiation.' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'A strategic alliance is a cooperative venture in which businesses remain independent and do not form a new legal entity. They share costs of product development, operations and marketing.',
      distractorAnalysis: 'A describes a joint venture, not an alliance. C describes a takeover. D is incorrect because a strategic alliance begins with a feasibility study; contract negotiation is the third stage.'
    }
  },
  {
    id: 'mcq-1.5-A4-08',
    subunit: '1.5-growth-and-evolution',
    topicTag: 'Reasons to Stay Small',
    questionNumber: 86,
    question: 'A small electrician is the only firm providing services in a remote town. Which reason for staying small does this best illustrate?',
    options: [
      { key: 'A', text: 'Government aid' },
      { key: 'B', text: 'Local monopoly power' },
      { key: 'C', text: 'Loss of control' },
      { key: 'D', text: 'Financial risks' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'A small business may enjoy local monopoly power when it is the only firm in a particular location, such as a remote town. Large businesses may be reluctant to locate there.',
      distractorAnalysis: 'A is about grants and subsidies, not market position. C describes the dilution of owners\' control through M&A. D describes the high financial risk of running a large global business.'
    }
  },
  {
    id: 'mcq-1.5-A4-09',
    subunit: '1.5-growth-and-evolution',
    topicTag: 'Disadvantages of Internal Growth',
    questionNumber: 87,
    question: 'A business grows mainly internally, financing expansion through retained profits. Which is a disadvantage of this approach compared with external growth?',
    options: [
      { key: 'A', text: 'A higher risk of culture clash between merging firms' },
      { key: 'B', text: 'Loss of control of the business to a parent company' },
      { key: 'C', text: 'A higher cost of external finance' },
      { key: 'D', text: 'Slower growth' }
    ],
    correctAnswer: 'D',
    explanation: {
      correctRationale: 'Internal growth is slower than external growth, which uses external resources and finance to grow quickly. Internal growth is otherwise relatively inexpensive and less risky.',
      distractorAnalysis: 'A and B are disadvantages of external growth. C is also a disadvantage of external growth, which is more expensive; internal growth is relatively inexpensive because it is financed mainly from retained profits (Table 5.1).'
    }
  },
{
    id: 'mcq-1.6-A5-01',
    subunit: '1.6-multinational-companies',
    topicTag: 'MNC Definition',
    questionNumber: 88,
    question: 'Which of the following best defines a multinational company (MNC)?',
    options: [
      { key: 'A', text: 'A business that exports goods from its home country to customers abroad but has no operations outside its home country.' },
      { key: 'B', text: 'An organization that operates in two or more countries, usually with its head office based in the home country.' },
      { key: 'C', text: 'A business owned and run by the government of more than one country.' },
      { key: 'D', text: 'A firm that operates in a single country but buys its raw materials from suppliers in several countries.' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'An MNC operates in two or more countries and usually has its head office based in its home country (textbook definition, Chapter 6).',
      distractorAnalysis: 'A is wrong because export-only trade involves no operations in other countries. C is wrong because MNCs are defined by their international operations, not by government ownership. D is wrong because the firm operates in only one country, so it fails the two-or-more-countries test even though it buys from abroad.'
    }
  },
  {
    id: 'mcq-1.6-A5-02',
    subunit: '1.6-multinational-companies',
    topicTag: 'MNC vs Transnational Corporation',
    questionNumber: 89,
    question: 'Some commentators distinguish a multinational company from a transnational corporation. Which statement reflects this distinction?',
    options: [
      { key: 'A', text: 'An MNC is always state-owned, whereas a transnational corporation is privately owned.' },
      { key: 'B', text: 'An MNC has its head office based in the home country, whereas a transnational corporation has regional head offices rather than a single international base.' },
      { key: 'C', text: 'An MNC operates in one country only, whereas a transnational corporation operates in several.' },
      { key: 'D', text: 'An MNC is a non-profit organization, whereas a transnational corporation is a for-profit business.' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'The textbook notes that the terms are often used interchangeably, but some commentators distinguish an MNC (head office in the home country) from a transnational corporation (regional head offices rather than a single international base).',
      distractorAnalysis: 'A is wrong because the textbook draws no ownership distinction. C is wrong because it reverses the definition: an MNC operates in two or more countries. D is wrong because the textbook draws no distinction based on profit status; both are businesses.'
    }
  },
  {
    id: 'mcq-1.6-A5-03',
    subunit: '1.6-multinational-companies',
    topicTag: 'Motives: Cheaper Production Costs',
    questionNumber: 90,
    question: 'Adidas, BMW and Volkswagen have production facilities overseas. According to the textbook, which factor best explains this decision?',
    options: [
      { key: 'A', text: 'Overseas governments require all sportswear and car production to be carried out by local firms.' },
      { key: 'B', text: 'High labour costs in Germany, partly caused by minimum wage legislation, make readily available labour overseas more affordable.' },
      { key: 'C', text: 'Overseas production removes all taxes on profits in every country.' },
      { key: 'D', text: 'Germany has no access to readily available labour for manufacturing.' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'The textbook states that the relatively high cost of labour in Germany, partly due to minimum wage legislation, has meant these businesses have access to readily available labour at a more affordable cost overseas.',
      distractorAnalysis: 'A is wrong because the textbook gives no such requirement; the MNCs choose overseas production rather than being forced into it. C is wrong because the textbook does not say overseas production removes all taxes. D is wrong because the textbook says German labour is expensive, not unavailable, and the MNCs seek affordable labour overseas.'
    }
  },
  {
    id: 'mcq-1.6-A5-04',
    subunit: '1.6-multinational-companies',
    topicTag: 'Avoiding Protectionist Policies',
    questionNumber: 91,
    question: 'Toyota, Honda and Nissan have established factories in the European Union and North America. Which textbook reason best explains this?',
    options: [
      { key: 'A', text: 'To avoid protectionist policies, such as tariffs, that the host country might impose on imported vehicles.' },
      { key: 'B', text: 'To gain legal protection from competition in the Japanese domestic market.' },
      { key: 'C', text: 'To avoid reporting to the regulators of their home country.' },
      { key: 'D', text: 'To reduce their brand value and stop global marketing.' }
    ],
    correctAnswer: 'A',
    explanation: {
      correctRationale: 'By producing within a particular country, MNCs can usually avoid protectionist policies that the country might impose on imports, such as tariffs and quotas.',
      distractorAnalysis: 'B is wrong because protection of the Japanese market does not explain why firms build plants abroad, and the textbook does not state it. C is wrong because the textbook gives no reporting-avoidance motive. D is wrong because the textbook says global marketing enhances brand recognition and loyalty; it does not reduce brand value.'
    }
  },
  {
    id: 'mcq-1.6-A5-05',
    subunit: '1.6-multinational-companies',
    topicTag: 'Protectionist Policies: Quotas',
    questionNumber: 92,
    question: 'Which protectionist policy is a quantitative limit on the sale of imported products, which reduces their supply and forces up their price?',
    options: [
      { key: 'A', text: 'A tariff' },
      { key: 'B', text: 'A quota' },
      { key: 'C', text: 'A restrictive trade practice' },
      { key: 'D', text: 'Repatriation of profits' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'A quota is a quantitative limit on the sale of imports. It lowers the supply or availability of imported products, thereby forcing up import prices (Box 6.1).',
      distractorAnalysis: 'A is wrong because a tariff is a tax on imports that adds to their price; it is a price measure, not a quantity limit. C is wrong because restrictive trade practices discriminate through administrative procedures and safety standards, not quantity limits. D is wrong because repatriation of profits is the flow of profit back to the home country, not a protectionist policy.'
    }
  },
  {
    id: 'mcq-1.6-A5-06',
    subunit: '1.6-multinational-companies',
    topicTag: 'Spreading Risks',
    questionNumber: 93,
    question: 'A multinational with production in several regions is hit by a natural disaster in one country. Which advantage of being an MNC explains why the overall business may not be seriously damaged?',
    options: [
      { key: 'A', text: 'Its ability to spread risks internationally, so unfavourable conditions in one country or region do not necessarily damage the whole business.' },
      { key: 'B', text: 'Immunity from all competition in every region in which it operates.' },
      { key: 'C', text: 'Automatic transfer of its tax obligations to the host government.' },
      { key: 'D', text: 'Guaranteed sales revenue in every country regardless of market conditions.' }
    ],
    correctAnswer: 'A',
    explanation: {
      correctRationale: 'The textbook explains that MNCs can spread risks: unfavourable conditions in one country or region might not damage the overall business if its risks are spread internationally.',
      distractorAnalysis: 'B is wrong because the textbook says MNCs intensify competition in host countries; it does not describe immunity from competition. C is wrong because no such tax transfer is described. D is wrong because the textbook warns that over-specialization in one region could reduce profits; it does not guarantee sales.'
    }
  },
  {
    id: 'mcq-1.6-A5-07',
    subunit: '1.6-multinational-companies',
    topicTag: 'Positive Impacts: Knowledge Transfer',
    questionNumber: 94,
    question: 'Which example best illustrates knowledge and technology transfer as a positive impact of MNCs on a host country?',
    options: [
      { key: 'A', text: 'Japanese firms introducing lean production and quality management models, such as kaizen and just-in-time, into other economies.' },
      { key: 'B', text: 'An MNC repatriating its profits to the home country, reducing the host country\'s tax revenues.' },
      { key: 'C', text: 'An MNC closing a factory in a host country at very short notice to cut costs.' },
      { key: 'D', text: 'An MNC whose sales revenues exceed the GDP of a host country, giving it market power.' }
    ],
    correctAnswer: 'A',
    explanation: {
      correctRationale: 'The textbook describes Japanese firms introducing lean production and quality management (kaizen, just-in-time, quality circles, TQM) to other economies, which raises production efficiency in the host country.',
      distractorAnalysis: 'B is wrong because repatriation of profits is a negative impact. C is wrong because footloose vulnerability is a negative impact. D is wrong because market power that exceeds a host country\'s GDP is a negative social-responsibility concern.'
    }
  },
  {
    id: 'mcq-1.6-A5-08',
    subunit: '1.6-multinational-companies',
    topicTag: 'Negative Impacts: Repatriation of Profits',
    questionNumber: 95,
    question: 'A multinational earns large profits from its factory in a host country and sends them to its home country. Which impact on the host country does the textbook identify?',
    options: [
      { key: 'A', text: 'An increase in the host country\'s tax revenues from the MNC.' },
      { key: 'B', text: 'A negative effect on the host country\'s tax revenues and on the size and frequency of foreign direct investment, because the profits do not remain in the host country.' },
      { key: 'C', text: 'An automatic increase in the host country\'s import tariffs.' },
      { key: 'D', text: 'A rise in the number of domestic firms able to take over the MNC.' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'The textbook states that whilst MNCs create wealth in a host country, profits are repatriated to the home country. This can reduce the host country\'s tax revenues and the size and frequency of FDI.',
      distractorAnalysis: 'A is wrong because repatriation reduces host tax revenues, it does not increase them. C is wrong because tariffs are government policies, and the textbook does not link repatriation to tariffs. D is wrong because the textbook describes domestic firms as prone to takeover bids from MNCs, not the reverse.'
    }
  },
  {
    id: 'mcq-1.6-A5-09',
    subunit: '1.6-multinational-companies',
    topicTag: 'Footloose MNCs',
    questionNumber: 96,
    question: 'Which term describes an MNC that is not bound to a specific location and can change its location at very short notice to obtain cost advantages?',
    options: [
      { key: 'A', text: 'Protectionist' },
      { key: 'B', text: 'Footloose' },
      { key: 'C', text: 'Brand-loyal' },
      { key: 'D', text: 'Repatriated' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'The textbook describes MNCs as increasingly footloose: they are not bound to a specific location and can change at very short notice for cost advantages. Carrefour pulling out of several countries in 2012 is its example.',
      distractorAnalysis: 'A is wrong because protectionist describes government policy that restricts imports, not a firm\'s mobility. C is wrong because brand loyalty is a customer attitude, not a description of a firm\'s location. D is wrong because repatriated describes profits sent home, not the firm\'s location.'
    }
  },
  {
    id: 'mcq-1.5-A5-01',
    subunit: '1.5-growth-and-evolution',
    topicTag: 'Franchising: Benefits for the Franchisor',
    questionNumber: 97,
    question: 'Which of the following is a benefit to a franchisor of using franchising as a method of external growth?',
    options: [
      { key: 'A', text: 'The franchisor must pay all start-up costs for every new outlet itself.' },
      { key: 'B', text: 'The franchisor can expand nationally or internationally without the higher costs of internal growth or M&As, because the franchisee helps to finance the expansion.' },
      { key: 'C', text: 'The franchisor keeps full day-to-day control over every franchisee\'s quality standards.' },
      { key: 'D', text: 'The franchisee pays the franchisor a fixed monthly salary.' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'Table 5.6 states that franchising gives a national or international presence without the higher costs of internal growth or M&As, as the franchisee helps to finance the expansion.',
      distractorAnalysis: 'A is wrong because the franchisee helps to fund expansion, so the franchisor does not bear all outlet start-up costs. C is wrong because difficulty controlling daily operations and quality is a drawback (Table 5.7). D is wrong because franchisees pay a licence fee and royalty payments, usually a percentage of sales revenue, not a salary.'
    }
  },
  {
    id: 'mcq-1.5-A5-02',
    subunit: '1.5-growth-and-evolution',
    topicTag: 'Takeover vs Acquisition',
    questionNumber: 98,
    question: 'Which statement best describes a takeover?',
    options: [
      { key: 'A', text: 'Two firms agree to amalgamate and form a new organization, losing their original identities.' },
      { key: 'B', text: 'A company buys a controlling interest in another firm without the prior agreement or approval of the target company\'s Board of Directors.' },
      { key: 'C', text: 'Two or more firms share resources and technology without setting up a new separate legal entity.' },
      { key: 'D', text: 'A company sells off part of its business, separating into two or more businesses.' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'The textbook defines a takeover (also referred to as a hostile takeover) as a company buying a controlling interest in another firm without the prior agreement or approval of the target company\'s Board of Directors.',
      distractorAnalysis: 'A describes a merger. C describes a strategic alliance. D describes a demerger.'
    }
  },
  {
    id: 'mcq-bmt-A5-01',
    subunit: 'bmt-toolkit',
    topicTag: 'BMT Structure',
    questionNumber: 99,
    question: 'How many of the 15 tools in the Business Management Toolkit are HL-only tools?',
    options: [
      { key: 'A', text: '6' },
      { key: 'B', text: '7' },
      { key: 'C', text: '8' },
      { key: 'D', text: '15' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'Eight of the 15 tools apply to both SL and HL students, and seven are HL only (for example Gantt charts, critical path analysis and Hofstede\'s cultural dimensions).',
      distractorAnalysis: 'A is wrong because it miscounts; the textbook lists seven HL-only tools. C is wrong because eight is the number of tools that apply to SL students, not HL-only tools. D is wrong because 15 is the total number of tools, which HL students are expected to use.'
    }
  },
  {
    id: 'mcq-bmt-A5-02',
    subunit: 'bmt-toolkit',
    topicTag: 'BMT Classification',
    questionNumber: 100,
    question: 'A manager asks, "Where do we want to get to?" Which BMT tool is a planning tool suited to answering this question?',
    options: [
      { key: 'A', text: 'SWOT analysis' },
      { key: 'B', text: 'Business plan' },
      { key: 'C', text: 'Ansoff matrix' },
      { key: 'D', text: 'STEEPLE analysis' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'The textbook classifies the business plan as a planning tool: an official guiding document that sets out strategic goals and how the business intends to achieve them.',
      distractorAnalysis: 'A is wrong because SWOT is a situational tool that answers "Where are we now?". C is wrong because the Ansoff matrix is a decision-making tool that answers "How do we get there?". D is wrong because STEEPLE is a situational tool that scans the external environment (where are we now).'
    }
  },
{
    id: 'mcq-bmt-swot-A6-01',
    subunit: 'bmt-swot-analysis',
    topicTag: 'SWOT Classification (External Threat)',
    questionNumber: 101,
    question: 'Kidzplay Bouncy Castles, a private limited company in London, is told that large profit margins could attract new competitors. Which SWOT category does this best describe?',
    options: [
      { key: 'A', text: 'Strength' },
      { key: 'B', text: 'Weakness' },
      { key: 'C', text: 'Opportunity' },
      { key: 'D', text: 'Threat' }
    ],
    correctAnswer: 'D',
    explanation: {
      correctRationale: 'A threat is an external factor that hinders the prospects of an organisation. The risk comes from outside the business, namely new competitors, so it is a threat.',
      distractorAnalysis: 'A (Strength) is wrong because strengths are internal and favourable compared with competitors; this item is an external risk. B (Weakness) is wrong because weaknesses are internal and unfavourable; the issue here is an outside entrant. C (Opportunity) is wrong because an opportunity is an external possibility for future development, whereas new competitors hinder the business.'
    }
  },
  {
    id: 'mcq-bmt-swot-A6-02',
    subunit: 'bmt-swot-analysis',
    topicTag: 'SWOT Classification (Internal Weakness)',
    questionNumber: 102,
    question: 'Kidzplay Bouncy Castles has limited marketing on its new website. Which SWOT category does this best describe?',
    options: [
      { key: 'A', text: 'Opportunity' },
      { key: 'B', text: 'Weakness' },
      { key: 'C', text: 'Threat' },
      { key: 'D', text: 'Strength' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'Weaknesses are internal factors that are unfavourable when compared with rivals. Limited marketing is within the business\'s control and is unfavourable, so it is a weakness.',
      distractorAnalysis: 'A (Opportunity) is wrong because opportunities are external possibilities. The marketing gap is internal. C (Threat) is wrong because threats are external factors that hinder the business. D (Strength) is wrong because strengths are internal and favourable; limited marketing is unfavourable.'
    }
  },
  {
    id: 'mcq-bmt-swot-A6-03',
    subunit: 'bmt-swot-analysis',
    topicTag: 'SWOT Exam Technique',
    questionNumber: 103,
    question: 'When a SWOT analysis is used in an IB exam answer, which approach is most likely to earn credit?',
    options: [
      { key: 'A', text: 'Present the four quadrants as a 2x2 table with keywords only' },
      { key: 'B', text: 'Write bullet points with explanations and justifications under each SWOT heading' },
      { key: 'C', text: 'List factors without linking them to the case stimulus' },
      { key: 'D', text: 'Present a single table and omit explanations to save time' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'The textbook says examiners prefer written explanations and justifications. Bullet points under each SWOT heading show the reasoning behind each factor.',
      distractorAnalysis: 'A is wrong because the textbook warns against presenting SWOT in tabular form, which encourages squeezing answers into small boxes. C is wrong because factors must be tied to the case, and unlinked lists earn little credit. D is wrong because a table without explanation omits the reasoning examiners look for.'
    }
  },
  {
    id: 'mcq-bmt-ansoff-A6-01',
    subunit: 'bmt-ansoff-matrix',
    topicTag: 'Ansoff Related Diversification',
    questionNumber: 104,
    question: 'Toyota launches the Lexus brand to cater for wealthier customers. Which Ansoff growth strategy does this best represent?',
    options: [
      { key: 'A', text: 'Market penetration' },
      { key: 'B', text: 'Product development' },
      { key: 'C', text: 'Market development' },
      { key: 'D', text: 'Diversification' }
    ],
    correctAnswer: 'D',
    explanation: {
      correctRationale: 'Lexus is a new product aimed at new customers, so both product and market are new. The textbook gives Toyota\'s Lexus as an example of related diversification, which is a form of diversification.',
      distractorAnalysis: 'A (Market penetration) is wrong because it sells existing products to existing customers, and Lexus is a new product. B (Product development) is wrong because it sells new products to existing customers, while Lexus targets a new customer group. C (Market development) is wrong because it sells existing products in new markets, and Lexus is a new product.'
    }
  },
  {
    id: 'mcq-bmt-ansoff-A6-02',
    subunit: 'bmt-ansoff-matrix',
    topicTag: 'Ansoff Unrelated Diversification',
    questionNumber: 105,
    question: 'Honda produces cars, motorcycles, lawnmowers and airplanes. In Ansoff terms, which description best fits its lawnmower and airplane businesses?',
    options: [
      { key: 'A', text: 'Related diversification' },
      { key: 'B', text: 'Unrelated diversification' },
      { key: 'C', text: 'Product development' },
      { key: 'D', text: 'Market penetration' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'The textbook cites Honda\'s lawnmowers and airplanes as unrelated diversification: completely new products in untapped markets, with no link to the broader industry.',
      distractorAnalysis: 'A (Related diversification) is wrong because related diversification stays within the broader confines of the same industry, as with Lexus or Acura. C (Product development) is wrong because it keeps the firm in its existing markets. D (Market penetration) is wrong because it sells existing products to existing customers.'
    }
  },
  {
    id: 'mcq-bmt-steeple-A6-01',
    subunit: 'bmt-steeple-analysis',
    topicTag: 'STEEPLE Legal Factors (India)',
    questionNumber: 106,
    question: 'In the textbook\'s STEEPLE analysis of multinational companies in India, "heavy penalties for tax evasion" is best classified as which dimension?',
    options: [
      { key: 'A', text: 'Political' },
      { key: 'B', text: 'Legal' },
      { key: 'C', text: 'Economic' },
      { key: 'D', text: 'Ethical' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'Legal factors are enacted statutes with enforceable penalties. Heavy penalties for tax evasion are set by law, so the dimension is Legal.',
      distractorAnalysis: 'A (Political) is wrong because political factors concern government stability, trade relations and policy. C (Economic) is wrong because economic factors concern national output, inflation, growth and employment. D (Ethical) is wrong because ethical factors concern moral conduct and norms, not enforceable penalties.'
    }
  },
  {
    id: 'mcq-bmt-steeple-A6-02',
    subunit: 'bmt-steeple-analysis',
    topicTag: 'STEEPLE Political vs Legal (Enforcement)',
    questionNumber: 107,
    question: 'In the same India example, the textbook notes "poor enforcement of patents and copyrights might discourage technology transfer to India." Which dimension does the textbook assign to this factor?',
    options: [
      { key: 'A', text: 'Technological' },
      { key: 'B', text: 'Political' },
      { key: 'C', text: 'Legal' },
      { key: 'D', text: 'Ethical' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'The textbook places poor enforcement of patents and copyrights under Political factors. The factor concerns how government enforces rules, alongside its stability and trade relations.',
      distractorAnalysis: 'A (Technological) is tempting because the factor involves technology transfer, but the textbook classifies the factor by its government-enforcement cause. C (Legal) is tempting because patents and copyrights are laws; the textbook places the enforcement issue under Political. D (Ethical) is wrong because the textbook places this factor under political concerns, not ethical conduct.'
    }
  },
  {
    id: 'mcq-bmt-steeple-A6-03',
    subunit: 'bmt-steeple-analysis',
    topicTag: 'Business Cycle: Recession',
    questionNumber: 108,
    question: 'Which definition best describes a recession?',
    options: [
      { key: 'A', text: 'A continual rise in the general level of prices in an economy' },
      { key: 'B', text: 'A fall in GDP for two consecutive quarters' },
      { key: 'C', text: 'The bottom of a recession, with high unemployment and very low spending' },
      { key: 'D', text: 'A period in which GDP starts rising again after a slump' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'The textbook defines a recession as a fall in GDP for two consecutive quarters (six months).',
      distractorAnalysis: 'A describes inflation, not a recession. C describes the trough, the last stage of a recession. D describes recovery, which begins after the slump.'
    }
  },
  {
    id: 'mcq-bmt-steeple-A6-04',
    subunit: 'bmt-steeple-analysis',
    topicTag: 'Unemployment Types',
    questionNumber: 109,
    question: 'A beach resort has few tourists in winter, a regular and predictable pattern each year. Which type of unemployment does this most closely reflect?',
    options: [
      { key: 'A', text: 'Frictional' },
      { key: 'B', text: 'Technological' },
      { key: 'C', text: 'Seasonal' },
      { key: 'D', text: 'Cyclical' }
    ],
    correctAnswer: 'C',
    explanation: {
      correctRationale: 'Seasonal unemployment is caused by periodic and reoccurring changes in demand. The textbook uses beach resorts with few winter tourists as its example.',
      distractorAnalysis: 'A (Frictional) is wrong because it arises from the time lag when people change jobs. B (Technological) is wrong because it results from labour-saving technology. D (Cyclical) is wrong because it is caused by a lack of demand across the economy during a recession and is the most severe type, not a predictable annual pattern.'
    }
  },
// ------------------------------------------------------------------
  // Business plans (Chapter 48)
  // ------------------------------------------------------------------
  {
    id: 'mcq-bmt-bp-A7-01',
    subunit: 'bmt-business-plan',
    topicTag: 'Definition',
    questionNumber: 110,
    question: 'Which of the following best defines a business plan?',
    options: [
      { key: 'A', text: 'A legal document that registers a company\'s ownership and share capital.' },
      { key: 'B', text: 'A formal report detailing the key aspects of a business idea or proposition and how the organization sets out to achieve it.' },
      { key: 'C', text: 'A daily record of all cash receipts and payments made by the business.' },
      { key: 'D', text: 'A one-page synopsis placed at the front of a report, summarising its conclusions.' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'The textbook defines a business plan as a formal report detailing the key aspects of a business idea or proposition and how the organization sets out to achieve this. It is a management planning tool.',
      distractorAnalysis: 'A describes a company registration document, which is not a business plan (A). C describes a cash book, which records transactions but does not plan the business (C). D describes an executive summary, which is one optional part of a business plan, not the whole document (D).'
    }
  },
  {
    id: 'mcq-bmt-bp-A7-02',
    subunit: 'bmt-business-plan',
    topicTag: 'Uses for lenders',
    questionNumber: 111,
    question: 'Why do commercial banks and business angels look closely at a business plan before lending or investing?',
    options: [
      { key: 'A', text: 'It guarantees that the loan will be repaid on time.' },
      { key: 'B', text: 'It is a legal filing that every sole trader must submit to a bank.' },
      { key: 'C', text: 'It reassures them that the entrepreneur has researched the business idea and has given reasons to support the proposal.' },
      { key: 'D', text: 'It removes the need for the lender to assess the risks of the venture.' }
    ],
    correctAnswer: 'C',
    explanation: {
      correctRationale: 'The textbook states that a business plan reassures financial lenders such as commercial banks and business angels that the entrepreneur has comprehensively researched the idea and has reasons to support the proposal. Investors assess both opportunities and risks in the plan.',
      distractorAnalysis: 'A plan does not guarantee repayment; the textbook says success is not guaranteed by having a plan (A). The textbook states there is no universally accepted format and does not describe a legal filing requirement (B). A business plan helps lenders see risks, but it does not remove the need to assess them (D).'
    }
  },
  {
    id: 'mcq-bmt-bp-A7-03',
    subunit: 'bmt-business-plan',
    topicTag: 'Contents: finance',
    questionNumber: 112,
    question: 'Which item would appear in the "finance" component of a typical business plan?',
    options: [
      { key: 'A', text: 'Break-even analysis.' },
      { key: 'B', text: 'Market research and test marketing.' },
      { key: 'C', text: 'The organizational structure of human resources.' },
      { key: 'D', text: 'Competitor analysis, including market share.' }
    ],
    correctAnswer: 'A',
    explanation: {
      correctRationale: 'Table 48.1 lists break-even analysis under "The finance", alongside proposed sources of finance, collateral, cash flow forecasts, a forecast profit and loss account, a forecast balance sheet and a forecast rate of return.',
      distractorAnalysis: 'Market research and test marketing belong to "The marketing" (B). The organizational structure of human resources belongs to "The personnel" (C). Competitor analysis belongs to "The market" (D).'
    }
  },
  {
    id: 'mcq-bmt-bp-A7-04',
    subunit: 'bmt-business-plan',
    topicTag: 'Limitations',
    questionNumber: 113,
    question: 'Which is a limitation of business plans, as identified in the textbook?',
    options: [
      { key: 'A', text: 'Having a business plan guarantees the success of the business.' },
      { key: 'B', text: 'Business plans are quick and costless to produce.' },
      { key: 'C', text: 'Business plans eliminate all business risk once they are approved.' },
      { key: 'D', text: 'Owners with limited experience may produce plans that lack depth and breadth of data.' }
    ],
    correctAnswer: 'D',
    explanation: {
      correctRationale: 'The textbook notes that new business owners often have limited experience, so their plans may lack depth and breadth of data. The usefulness of a plan also depends on how accurate its forecasts are and whether strategies are implemented effectively.',
      distractorAnalysis: 'The textbook says simply having a plan does not guarantee success (A). Producing a comprehensive plan is described as time consuming and costly, not quick or costless (B). The textbook states that no amount of forward planning can eliminate risks (C).'
    }
  },
  {
    id: 'mcq-bmt-bp-A7-05',
    subunit: 'bmt-business-plan',
    topicTag: 'Executive summary',
    questionNumber: 114,
    question: 'What is the purpose of an executive summary placed at the front of a business plan?',
    options: [
      { key: 'A', text: 'To provide a full first-year cash flow forecast.' },
      { key: 'B', text: 'To give a synopsis of the main report, highlighting key points and conclusions, so a busy bank manager can decide whether to read the rest.' },
      { key: 'C', text: 'To list all references and appendices supporting the plan.' },
      { key: 'D', text: 'To set out the contingency plan if the business does not go as planned.' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'The textbook explains that an executive summary is written when a plan is too long for a busy bank manager. It summarises the main report and can be read within minutes to decide whether to read the rest.',
      distractorAnalysis: 'A cash flow forecast is a separate component in "The finance" (A). References and appendices are supporting material placed at the back (C). A contingency plan is a separate section of the business plan (D).'
    }
  },
  {
    id: 'mcq-bmt-bp-A7-06',
    subunit: 'bmt-business-plan',
    topicTag: 'Contents: market',
    questionNumber: 115,
    question: 'Which set of items belongs to "The market" component of a business plan?',
    options: [
      { key: 'A', text: 'The type of business organization, such as a sole trader or partnership.' },
      { key: 'B', text: 'The pricing methods to be used.' },
      { key: 'C', text: 'The expected growth of the market, with competitor analysis of market share, strengths and weaknesses.' },
      { key: 'D', text: 'The payment systems, such as wages, salaries and remuneration packages.' }
    ],
    correctAnswer: 'C',
    explanation: {
      correctRationale: 'Table 48.1 lists the expected number of customers or forecast sales, the nature of the market (customer profiles and segmentation), the expected market growth and competitor analysis (market share, strengths and weaknesses) under "The market".',
      distractorAnalysis: 'The type of business organization belongs to "The business" (A). Pricing methods belong to "The product" (B). Payment systems belong to "The personnel" (D).'
    }
  },

  // ------------------------------------------------------------------
  // Descriptive statistics (Chapter 50)
  // ------------------------------------------------------------------
  {
    id: 'mcq-bmt-ds-A7-01',
    subunit: 'bmt-descriptive-statistics',
    topicTag: 'Mean',
    questionNumber: 116,
    question: 'The number of meals sold at a restaurant over five days was 320, 310, 320, 360 and 405. What is the mean number of meals sold per day?',
    options: [
      { key: 'A', text: '320' },
      { key: 'B', text: '343' },
      { key: 'C', text: '1,256' },
      { key: 'D', text: '1,715' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'The mean is the sum of all the numbers divided by the number of items. The total is 1,715, and 1,715 / 5 = 343.',
      distractorAnalysis: '320 is the median (the middle value when ranked: 310, 320, 320, 360, 405) and also the mode, not the mean (A). 1,256 is the average of the squared deviations (the variance; the textbook\'s table labels it "average deviation"), whose square root gives the standard deviation of 35.44, not the mean (C). 1,715 is the total, which has not been divided by the number of days (D).'
    }
  },
  {
    id: 'mcq-bmt-ds-A7-02',
    subunit: 'bmt-descriptive-statistics',
    topicTag: 'Median',
    questionNumber: 117,
    question: 'What is the median of the following eight values: 5, 7, 3, 9, 3, 6, 2, 6?',
    options: [
      { key: 'A', text: '5.125' },
      { key: 'B', text: '5' },
      { key: 'C', text: '5.5' },
      { key: 'D', text: '6' }
    ],
    correctAnswer: 'C',
    explanation: {
      correctRationale: 'Ranked in order the values are 2, 3, 3, 5, 6, 6, 7, 9. With an even number of items, the median is the midpoint of the two central values: (5 + 6) / 2 = 5.5.',
      distractorAnalysis: '5.125 is the mean (41 / 8), not the median (A). 5 is only the lower of the two central values (B). 6 is only the upper of the two central values (D).'
    }
  },
  {
    id: 'mcq-bmt-ds-A7-03',
    subunit: 'bmt-descriptive-statistics',
    topicTag: 'Quartiles',
    questionNumber: 118,
    question: 'A data set contains the nine values 1 to 9. What is the lower quartile?',
    options: [
      { key: 'A', text: '2' },
      { key: 'B', text: '3' },
      { key: 'C', text: '4' },
      { key: 'D', text: '5' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'The median is 5. The textbook\'s worked example for the values 1 to 9 gives a lower quartile of 3.',
      distractorAnalysis: '2 (A) and 4 (C) are not the textbook lower quartile for this data set. 5 is the median, not a quartile (D).'
    }
  },
  {
    id: 'mcq-bmt-ds-A7-04',
    subunit: 'bmt-descriptive-statistics',
    topicTag: 'Interquartile range',
    questionNumber: 119,
    question: 'Test scores for 19 students have a five-point summary of 16 (lowest), 18 (lower quartile), 20 (median), 21 (upper quartile) and 24 (highest). What is the inter-quartile range?',
    options: [
      { key: 'A', text: '8' },
      { key: 'B', text: '20' },
      { key: 'C', text: '3' },
      { key: 'D', text: '4' }
    ],
    correctAnswer: 'C',
    explanation: {
      correctRationale: 'The inter-quartile range is the difference between the upper and lower quartiles: 21 - 18 = 3. It shows the spread of the middle 50% of the scores.',
      distractorAnalysis: '8 is the full range (24 - 16), which uses the lowest and highest values rather than the quartiles (A). 20 is the median, which is a measure of average, not of spread (B). 4 is the difference between the highest score and the median (24 - 20), which is not a measure used here (D).'
    }
  },
  {
    id: 'mcq-bmt-ds-A7-05',
    subunit: 'bmt-descriptive-statistics',
    topicTag: 'Standard deviation and the normal distribution',
    questionNumber: 120,
    question: 'A survey of 100 employees finds that they spend an average of $5.50 per day on lunch, with a standard deviation of $1. Assuming a normal distribution, between which two amounts would roughly 95% of employees spend?',
    options: [
      { key: 'A', text: '$4.50 and $6.50' },
      { key: 'B', text: '$3.50 and $7.50' },
      { key: 'C', text: '$2.50 and $8.50' },
      { key: 'D', text: '$5.00 and $6.00' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'Within two standard deviations of the mean there is coverage of around 95% of data points. Two standard deviations either side of $5.50 is $3.50 to $7.50.',
      distractorAnalysis: '$4.50 to $6.50 covers one standard deviation either side of the mean, which is about 68% of employees (A). $2.50 to $8.50 covers three standard deviations, which the textbook says covers almost all the data (C). $5.00 to $6.00 has no link to the mean and standard deviation given (D).'
    }
  },
  {
    id: 'mcq-bmt-ds-A7-06',
    subunit: 'bmt-descriptive-statistics',
    topicTag: 'Standard deviation interpretation',
    questionNumber: 121,
    question: 'Which statement about standard deviation is correct?',
    options: [
      { key: 'A', text: 'A higher standard deviation means the values are clustered closer to the mean.' },
      { key: 'B', text: 'The standard deviation is always expressed in a different unit of measurement from the variable.' },
      { key: 'C', text: 'A lower standard deviation means the measured values are distributed closer to the arithmetic mean.' },
      { key: 'D', text: 'The standard deviation is always equal to the median of the data set.' }
    ],
    correctAnswer: 'C',
    explanation: {
      correctRationale: 'The textbook states that a lower standard deviation means the values are distributed closer to the arithmetic mean, while a higher standard deviation means the values are more dispersed.',
      distractorAnalysis: 'A higher standard deviation means greater dispersion, not clustering (A). The textbook exam tip says the standard deviation is expressed in the same unit as the variable (B). The standard deviation is a measure of dispersion around the mean and is not equal to the median (D).'
    }
  },

  // ------------------------------------------------------------------
  // STEEPLE gaps
  // ------------------------------------------------------------------
  {
    id: 'mcq-bmt-steeple-A7-01',
    subunit: 'bmt-steeple-analysis',
    topicTag: 'Types of unemployment',
    questionNumber: 122,
    question: 'Job losses caused by a lack of demand across the whole economy during a recession are best described as which type of unemployment?',
    options: [
      { key: 'A', text: 'Frictional' },
      { key: 'B', text: 'Seasonal' },
      { key: 'C', text: 'Cyclical (demand deficient)' },
      { key: 'D', text: 'Technological' }
    ],
    correctAnswer: 'C',
    explanation: {
      correctRationale: 'Cyclical or demand deficient unemployment is caused by a lack of demand in the economy during an economic recession. The textbook calls it the most severe type, because it affects all industries.',
      distractorAnalysis: 'Frictional unemployment is the time lag between leaving one job and finding another (A). Seasonal unemployment comes from periodic and recurring changes in demand, such as a beach resort quiet in winter (B). Technological unemployment results from labour-saving technology (D).'
    }
  },
  {
    id: 'mcq-bmt-steeple-A7-02',
    subunit: 'bmt-steeple-analysis',
    topicTag: 'Protectionist measures',
    questionNumber: 123,
    question: 'Which protectionist measure is a physical ban on international trade with a particular country, usually for strategic or political reasons?',
    options: [
      { key: 'A', text: 'Tariff' },
      { key: 'B', text: 'Quota' },
      { key: 'C', text: 'Embargo' },
      { key: 'D', text: 'Subsidy' }
    ],
    correctAnswer: 'C',
    explanation: {
      correctRationale: 'An embargo is a physical ban on international trade with a certain country, usually due to strategic reasons, severe health and safety concerns or political conflicts (Box 46.3).',
      distractorAnalysis: 'A tariff is a tax on imported products, not a ban (A). A quota is a quantitative limit on the volume or value of imports, not a total ban (B). A subsidy is a payment to domestic businesses to reduce their production costs (D).'
    }
  },
  {
    id: 'mcq-bmt-steeple-A7-03',
    subunit: 'bmt-steeple-analysis',
    topicTag: 'External costs',
    questionNumber: 124,
    question: 'Which of the following is an example of an external cost of business activity?',
    options: [
      { key: 'A', text: 'The interest paid on a bank loan taken out to buy machinery.' },
      { key: 'B', text: 'Air pollution from a factory that is borne by the local community.' },
      { key: 'C', text: 'The wages paid to the firm\'s own employees.' },
      { key: 'D', text: 'The advertising expenditure needed to launch a new product.' }
    ],
    correctAnswer: 'B',
    explanation: {
      correctRationale: 'External costs are costs incurred by society rather than by the buyer or seller. The textbook lists air and noise pollution as examples.',
      distractorAnalysis: 'Interest on a bank loan (A), wages (C) and advertising (D) are costs the firm pays itself, so they are internal costs, not external costs.'
    }
  },
  ...MCQ_3_1, ...MCQ_3_2, ...MCQ_3_3, ...MCQ_3_4
];

// ============================================================================
// 2. 2-Mark Questions (AO1 Knowledge & Definition) - 98 Questions Total
//    Per subunit: 1.1 = 9, 1.2 = 16, 1.3 = 13, 1.4 = 13, 1.5 = 14, 1.6 = 4,
//    SWOT = 6, Ansoff = 5, STEEPLE = 8, BMT toolkit = 4, Business plan = 3,
//    Descriptive statistics = 3. Block comments below count only their own block.
// ============================================================================

export const TWO_MARK_QUESTIONS: TwoMarkQuestion[] = [
  // --------------------------------------------------------------------------
  // Unit 1.1: What is a Business? (7 Questions)
  // --------------------------------------------------------------------------
  {
    id: 'q2m-1.1-01',
    subunit: '1.1-what-is-a-business',
    questionNumber: '1.1.1',
    question: 'What is a business?',
    marks: 2,
    commandTerm: 'What is',
    assessmentObjective: 'AO1',
    modelAnswer: 'A business is a decision-making entity that combines inputs—namely the factors of production (land, labor, capital, and enterprise)—through a transformation process to produce finished goods or provide services that satisfy customer needs and wants.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies decision-making entity combining inputs / factors of production (land, labor, capital, enterprise)' },
      { mark: 1, criterion: 'Explains output satisfies customer needs and wants through goods or services' }
    ],
    examinerTips: 'Avoid colloquial definitions like "a place where you buy stuff". Mention the factors of production and the satisfaction of needs/wants for full marks.'
  },
  {
    id: 'q2m-1.1-02',
    subunit: '1.1-what-is-a-business',
    questionNumber: '1.1.2',
    question: 'How do goods and services differ from each other?',
    marks: 2,
    commandTerm: 'Distinguish',
    assessmentObjective: 'AO1',
    modelAnswer: 'Goods are tangible physical products that can be touched, inspected, stored, and ownership transferred, whereas services are intangible activities, deeds, or benefits consumed simultaneously as they are delivered without physical ownership.',
    markBreakdown: [
      { mark: 1, criterion: 'Defines goods as tangible physical products capable of being stored or inventoried' },
      { mark: 1, criterion: 'Defines services as intangible activities consumed simultaneously at delivery without physical ownership' }
    ],
    examinerTips: 'Always provide the contrasting feature for both terms (tangible vs intangible, can be stored vs perishable/consumed at point of delivery).'
  },
  {
    id: 'q2m-1.1-03',
    subunit: '1.1-what-is-a-business',
    questionNumber: '1.1.3',
    question: 'How do consumer needs and wants differ?',
    marks: 2,
    commandTerm: 'Distinguish',
    assessmentObjective: 'AO1',
    modelAnswer: 'Needs are essential goods and services required for human physiological survival (e.g., food, clean water, shelter), whereas wants are non-essential human desires for goods and services that enhance living standards or provide luxury.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies needs as essential goods and services required for human physical survival' },
      { mark: 1, criterion: 'Identifies wants as discretionary non-essential human desires that enhance living standards' }
    ],
    examinerTips: 'Cite examples (e.g. basic water vs luxury soda) to clearly ground your conceptual contrast.'
  },
  {
    id: 'q2m-1.1-04',
    subunit: '1.1-what-is-a-business',
    questionNumber: '1.1.4',
    question: 'How do customers and consumers differ from each other?',
    marks: 2,
    commandTerm: 'Distinguish',
    assessmentObjective: 'AO1',
    modelAnswer: 'A customer is the individual or entity that purchases and pays for a good or service, whereas a consumer is the end-user who actually utilizes, consumes, or benefits from the product.',
    markBreakdown: [
      { mark: 1, criterion: 'Defines customer as the purchaser/buyer who pays for the product' },
      { mark: 1, criterion: 'Defines consumer as the end-user who consumes or utilizes the product' }
    ],
    examinerTips: 'A parent buying baby food is the customer; the infant is the consumer. Use this classic contrast to keep them straight.'
  },
  {
    id: 'q2m-1.1-05',
    subunit: '1.1-what-is-a-business',
    questionNumber: '1.1.5',
    question: 'What is meant by adding value?',
    marks: 2,
    commandTerm: 'What is meant by',
    assessmentObjective: 'AO1',
    modelAnswer: 'Adding value is the practice of producing a good or service that is worth more than the cost of the resources used in the production process, so that there is a positive difference between the selling price of the product and the cost of producing it.',
    markBreakdown: [
      { mark: 1, criterion: 'Explains increasing the worth of inputs during the production process' },
      { mark: 1, criterion: 'Explains that the selling price exceeds the cost of the resources used to produce the good or service' }
    ],
    examinerTips: 'Use the textbook wording: added value is the positive difference between the selling price of a product and the cost of producing it (p.12), or producing something worth more than the cost of the resources used (key term, p.20).'
  },
  {
    id: 'q2m-1.1-06',
    subunit: '1.1-what-is-a-business',
    questionNumber: '1.1.6',
    question: 'What is meant by the chain of production?',
    marks: 2,
    commandTerm: 'What is meant by',
    assessmentObjective: 'AO1',
    modelAnswer: 'The chain of production refers to the sequential, interrelated stages of economic activity through which raw materials pass across economic sectors (primary extraction, secondary manufacturing, and tertiary/quaternary distribution) to reach the final consumer.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies sequential stages moving from raw material extraction to final product delivery' },
      { mark: 1, criterion: 'References progression across economic sectors (primary, secondary, tertiary, quaternary)' }
    ],
    examinerTips: 'Explicitly reference the movement across economic sectors to earn full credit.'
  },
  {
    id: 'q2m-1.1-07',
    subunit: '1.1-what-is-a-business',
    questionNumber: '1.1.7',
    question: 'State two common challenges faced by business start-ups.',
    marks: 2,
    commandTerm: 'State',
    assessmentObjective: 'AO1',
    modelAnswer: '1. Cash flow and working capital deficiencies: Inability to maintain sufficient liquidity to service rent, wages, and suppliers before customer sales receipts arrive.\n2. Lack of brand awareness and customer base: Difficulty attracting customers away from established competitors due to a lack of market presence.',
    markBreakdown: [
      { mark: 1, criterion: 'Valid first startup challenge clearly stated (e.g. liquidity / cash flow shortages)' },
      { mark: 1, criterion: 'Valid second distinct startup challenge clearly stated (e.g. unestablished customer base / high fixed costs)' }
    ],
    examinerTips: 'Keep the two points clearly distinct (e.g., one financial issue like working capital, one operational/market issue like brand awareness).'
  },

  // --------------------------------------------------------------------------
  // Unit 1.2: Types of Business Entities (8 Questions)
  // --------------------------------------------------------------------------
  {
    id: 'q2m-1.2-01',
    subunit: '1.2-types-of-business-entities',
    questionNumber: '1.2.1',
    question: 'Define the term sole trader.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'A sole trader is an unincorporated commercial business owned, financed, and operated by a single individual who retains all net profits after tax and carries unlimited liability for all business debts.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies commercial business owned and operated by one individual' },
      { mark: 1, criterion: 'Specifies unincorporated legal status with unlimited liability for debts' }
    ],
    examinerTips: 'Merely saying "a one-man business" gets 1 mark; add unlimited liability or unincorporated status for the second mark. Note: textbook Question 2.2(a) (Flowers by Cam, p.24) prints this definition as [4 marks], which is unusual; every other "Define" question in Unit 1.2 is worth 2 marks, so it is treated here as a 2-mark definition.'
  },
  {
    id: 'q2m-1.2-02',
    subunit: '1.2-types-of-business-entities',
    questionNumber: '1.2.2',
    question: 'Define the term partnership in the context of business entities.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'A partnership is an unincorporated commercial business structure owned and operated by two or more individuals (traditionally 2 to 20 partners) who pool capital, share management, distribute net profits, and (usually all) bear unlimited liability for its debts.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies business owned and operated by two or more individuals pooling capital and sharing profits' },
      { mark: 1, criterion: 'Specifies unincorporated status with unlimited liability (at least one partner, typically all)' }
    ],
    examinerTips: 'Mentioning unlimited liability or the Deed of Partnership shows thorough syllabus mastery. The textbook says partners are liable "wholly or severally" (p.25).'
  },
  {
    id: 'q2m-1.2-03',
    subunit: '1.2-types-of-business-entities',
    questionNumber: '1.2.3',
    question: 'Define the term privately held company.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'A privately held company (private limited company / Ltd) is an incorporated business entity possessing limited liability and a separate legal personality, whose shares are held privately by family, friends, or private investors and cannot be traded on an open stock exchange.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies incorporated business entity possessing limited liability and separate legal personality' },
      { mark: 1, criterion: 'Explains equity shares are sold privately and cannot be advertised or traded on a public stock exchange' }
    ],
    examinerTips: 'Key discriminator: shares CANNOT be offered to the general public or traded on an open stock exchange.'
  },
  {
    id: 'q2m-1.2-04',
    subunit: '1.2-types-of-business-entities',
    questionNumber: '1.2.4',
    question: 'Define the term shareholder.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'A shareholder is an individual or institution that owns at least one equity share in an incorporated limited liability company, representing fractional ownership, voting rights at AGMs, and entitlement to declared dividends.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies individual or institution owning equity shares in an incorporated company' },
      { mark: 1, criterion: 'Notes rights to declared dividends and voting control at annual general meetings' }
    ],
    examinerTips: 'Remember that shareholders are the owners of the company, distinct from directors who manage it.'
  },
  {
    id: 'q2m-1.2-05',
    subunit: '1.2-types-of-business-entities',
    questionNumber: '1.2.5',
    question: 'Define the term public sector company.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'A public sector company (or state-owned enterprise) is a business entity that is partially or wholly owned by the government, run in a commercial way for financial gain while providing essential services and raising government revenue.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies an enterprise partially or wholly owned by the state / government' },
      { mark: 1, criterion: 'Specifies commercial operation to deliver essential public services/infrastructure' }
    ],
    examinerTips: 'Do not confuse public sector companies (state-owned enterprises) with public limited companies (PLCs in the private sector).'
  },
  {
    id: 'q2m-1.2-06',
    subunit: '1.2-types-of-business-entities',
    questionNumber: '1.2.6',
    question: 'State the meaning of limited liability.',
    marks: 2,
    commandTerm: 'State',
    assessmentObjective: 'AO1',
    modelAnswer: 'Limited liability is a legal protection applicable to incorporated companies where the financial liability of shareholders for business debts is capped at the amount they invested in the company, protecting their personal assets from creditors.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies legal status capping shareholder financial loss strictly to the amount of capital invested' },
      { mark: 1, criterion: 'Explicitly notes personal assets and private wealth are protected from corporate creditors in liquidation' }
    ],
    examinerTips: 'Always clarify what is limited: the investor\'s liability for debt is limited to their invested capital, not the company\'s liability to pay.'
  },
  {
    id: 'q2m-1.2-07',
    subunit: '1.2-types-of-business-entities',
    questionNumber: '1.2.7',
    question: 'What is a cooperative?',
    marks: 2,
    commandTerm: 'What is',
    assessmentObjective: 'AO1',
    modelAnswer: 'A cooperative is a for-profit social enterprise set up, owned and run by its members (such as employees and/or customers), democratically governed with equal voting rights for members (one member, one vote), with any profits shared between the members.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies member-owned social enterprise established to meet common economic and social needs' },
      { mark: 1, criterion: 'Specifies democratic governance under the principle of "one member, one vote"' }
    ],
    examinerTips: 'Stress both ownership by members and democratic control: the textbook says members have equal voting rights (Table 2.4).'
  },
  {
    id: 'q2m-1.2-08',
    subunit: '1.2-types-of-business-entities',
    questionNumber: '1.2.8',
    question: 'What is a non-governmental organization (NGO)?',
    marks: 2,
    commandTerm: 'What is',
    assessmentObjective: 'AO1',
    modelAnswer: 'A Non-Governmental Organization (NGO) is a private-sector, not-for-profit social enterprise operating independently of state control to pursue humanitarian, developmental, or environmental objectives, reinvesting all operational surpluses.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies private sector not-for-profit entity operating independently of government control' },
      { mark: 1, criterion: 'Notes purpose of advancing humanitarian, social, or environmental missions with surplus reinvestment' }
    ],
    examinerTips: 'Emphasize both "non-governmental" (independent of state) and "not-for-profit" (reinvests surplus).'
  },

  // --------------------------------------------------------------------------
  // Unit 1.3: Business Objectives (7 Questions)
  // --------------------------------------------------------------------------
  {
    id: 'q2m-1.3-01',
    subunit: '1.3-business-objectives',
    questionNumber: '1.3.1',
    question: 'Define the term mission statement.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'A mission statement is a formal declaration of an organization\'s fundamental purpose, core operational values, and ongoing activities, defining what the business does, whom it serves, and how it delivers value in the present.',
    markBreakdown: [
      { mark: 1, criterion: 'Defines formal declaration of core organizational purpose and primary operational values' },
      { mark: 1, criterion: 'Emphasizes present operational focus (what the business does, whom it serves, and how)' }
    ],
    examinerTips: 'Mission is current/present focus ("what we do today"), while vision is future/aspirational focus ("where we want to be").'
  },
  {
    id: 'q2m-1.3-02',
    subunit: '1.3-business-objectives',
    questionNumber: '1.3.2',
    question: 'Define the term strategy.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'A strategy is a broad, long-term plan of action formulated by senior management that coordinates resources and directs organizational activities toward achieving corporate objectives and sustainable competitive advantage.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies broad, long-term plan of action formulated by senior management' },
      { mark: 1, criterion: 'Notes coordination of resources to achieve corporate objectives and competitive advantage' }
    ],
    examinerTips: 'Differentiate strategy (long-term, senior leadership) from tactics (short-term, departmental level).'
  },
  {
    id: 'q2m-1.3-03',
    subunit: '1.3-business-objectives',
    questionNumber: '1.3.3',
    question: 'Define the term market share.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'Market share is the percentage of total industry sales revenue (or unit volume) captured by a specific business entity over a specified period: Market Share = (Firm Sales / Total Industry Sales) * 100%.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies proportion of total industry sales revenue or volume captured by a specific firm' },
      { mark: 1, criterion: 'Expresses as a percentage or mathematical formula: (Firm Sales / Total Market Sales) * 100%' }
    ],
    examinerTips: 'Always state whether it is measured in value (revenue) or volume (units), and include the formula.'
  },
  {
    id: 'q2m-1.3-04',
    subunit: '1.3-business-objectives',
    questionNumber: '1.3.4',
    question: 'Define the term non-profit organization.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'A non-profit organization (NPO) is a legally registered entity that operates for public, social, or charitable benefit rather than for commercial gain, strictly retaining and reinvesting all financial surplus into fulfilling its mission.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies organization established for social, educational, or charitable benefit rather than profit' },
      { mark: 1, criterion: 'Specifies 100% of financial surplus is retained and reinvested into the mission rather than paid as dividends' }
    ],
    examinerTips: 'State that NPOs can earn a surplus (profit), but that surplus cannot be distributed to private owners.'
  },
  {
    id: 'q2m-1.3-05',
    subunit: '1.3-business-objectives',
    questionNumber: '1.3.5',
    question: 'Define the term labour turnover.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'Labour turnover is a human resource metric measuring the percentage of a firm\'s total workforce that voluntarily or involuntarily leaves the organization during a specified period (typically one year): (Number of Leavers / Average Staff) * 100%.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies proportion of workforce leaving the organization over a specified timeframe' },
      { mark: 1, criterion: 'States annual percentage formula: (Number of leavers / Average staff employed) * 100%' }
    ],
    examinerTips: 'Provide the formula: (Number of staff leaving / Average number of staff employed) * 100.'
  },
  {
    id: 'q2m-1.3-06',
    subunit: '1.3-business-objectives',
    questionNumber: '1.3.6',
    question: 'State two possible barriers to a business behaving in a corporate socially responsible way.',
    marks: 2,
    commandTerm: 'State',
    assessmentObjective: 'AO1',
    modelAnswer: '1. High financial compliance and procurement costs: Heavy outlays required to source ethically certified inputs and pay above-market living wages, which compress operating profit margins.\n2. Short-term shareholder pressure: Demands from external equity investors for immediate quarterly earnings, disincentivizing long-term ethical capital allocations.',
    markBreakdown: [
      { mark: 1, criterion: 'States first valid barrier (e.g. high compliance / ethical sourcing costs compressing margins)' },
      { mark: 1, criterion: 'States second valid distinct barrier (e.g. short-term shareholder pressure for immediate dividend maximization)' }
    ],
    examinerTips: 'Name two distinct barriers—cost/margin compression and shareholder return conflict are ideal.'
  },
  {
    id: 'q2m-1.3-07',
    subunit: '1.3-business-objectives',
    questionNumber: '1.3.7',
    question: 'Define Corporate Social Responsibility (CSR).',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'Corporate Social Responsibility (CSR) is the conscientious consideration of ethical and environmental practice related to business activity. A business that adopts CSR acts morally towards all of its various stakeholder groups and the well-being of society as a whole.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies conscientious consideration of ethical and environmental practice in business activity' },
      { mark: 1, criterion: 'States that the business acts morally towards all its stakeholder groups and the well-being of society as a whole' }
    ],
    examinerTips: 'Use the textbook key term (p.52): both the ethical/environmental element and the moral duty to all stakeholders and society are needed.'
  },

  // --------------------------------------------------------------------------
  // Unit 1.4: Stakeholders (6 Questions)
  // --------------------------------------------------------------------------
  {
    id: 'q2m-stakeholders-01',
    subunit: '1.4-stakeholders',
    questionNumber: '1.4.1',
    question: 'Define the term stakeholder.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'A stakeholder is any individual, group, or organization with a direct interest or involvement in the decisions, operations, and performance of a business, who is impacted by its activities.',
    markBreakdown: [
      { mark: 1, criterion: 'Defines an individual or group with a direct interest/involvement (or "stake") in an organization' },
      { mark: 1, criterion: 'Notes that stakeholders are directly affected by or have influence over organizational activities and performance' }
    ],
    examinerTips: 'Do not simply say "people who work in a business"—emphasize "any individual or group with a direct interest or affected by the operations".'
  },
  {
    id: 'q2m-stakeholders-02',
    subunit: '1.4-stakeholders',
    questionNumber: '1.4.2',
    question: 'Distinguish between internal stakeholders and external stakeholders.',
    marks: 2,
    commandTerm: 'Distinguish',
    assessmentObjective: 'AO1',
    modelAnswer: 'Internal stakeholders are direct members of the organization operating from within the business (e.g., employees, managers, directors), whereas external stakeholders are outside individuals or entities affected by business activities (e.g., customers, suppliers, government).',
    markBreakdown: [
      { mark: 1, criterion: 'Accurately defines internal stakeholders as members operating within the business, with a valid example' },
      { mark: 1, criterion: 'Accurately defines external stakeholders as outside entities affected by operations, with a valid example' }
    ],
    examinerTips: 'Always provide one specific example for each category (e.g. employees vs customers) to ensure maximum precision.'
  },
  {
    id: 'q2m-stakeholders-03',
    subunit: '1.4-stakeholders',
    questionNumber: '1.4.3',
    question: 'State two reasons why shareholders are considered a powerful stakeholder group in a company.',
    marks: 2,
    commandTerm: 'State',
    assessmentObjective: 'AO1',
    modelAnswer: '1. Voting rights: Shareholders hold legal voting power at the Annual General Meeting (AGM) to elect or dismiss the Board of Directors.\n2. Capital provision: Shareholders provide vital equity capital; without their financial investment, the company cannot finance long-term growth.',
    markBreakdown: [
      { mark: 1, criterion: 'States legal voting rights at AGMs / power to appoint or remove company directors' },
      { mark: 1, criterion: 'States ownership of equity capital / ability to buy or sell shares impacting company market value' }
    ],
    examinerTips: 'Focus on governance authority (voting power) and financial ownership (supplying risk capital).'
  },
  {
    id: 'q2m-stakeholders-04',
    subunit: '1.4-stakeholders',
    questionNumber: '1.4.4',
    question: 'Define the term remuneration (Question 4.4b).',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'Remuneration is the pay and benefits (the total reward package) given to an employee or executive in exchange for their work, such as basic pay, overtime, bonuses, allowances and fringe benefits.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies compensation/payment provided for labor or professional services' },
      { mark: 1, criterion: 'Explicitly notes comprehensive package nature (e.g. wages/salaries plus bonuses, allowances, or benefits)' }
    ],
    examinerTips: 'Use the phrase "total reward package including basic salary and additional financial/fringe benefits".'
  },
  {
    id: 'q2m-stakeholders-05',
    subunit: '1.4-stakeholders',
    questionNumber: '1.4.5',
    question: 'Outline what is meant by stakeholder conflict.',
    marks: 2,
    commandTerm: 'Outline',
    assessmentObjective: 'AO1',
    modelAnswer: 'Stakeholder conflict refers to the friction, disagreement, or tension that arises when the varying needs, priorities, and objectives of different stakeholder groups are incompatible and cannot be satisfied simultaneously.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies disagreement, tension, or friction between different stakeholder groups' },
      { mark: 1, criterion: 'Explains that conflict occurs because stakeholder objectives are mutually incompatible given finite resources' }
    ],
    examinerTips: 'Mentioning that resources are finite or objectives are incompatible ensures both marks.'
  },
  {
    id: 'q2m-stakeholders-06',
    subunit: '1.4-stakeholders',
    questionNumber: '1.4.6',
    question: 'Outline the role of the government as an external stakeholder in business activity.',
    marks: 2,
    commandTerm: 'Outline',
    assessmentObjective: 'AO1',
    modelAnswer: 'The government acts as a regulatory external stakeholder ensuring businesses comply with statutory employment and safety legislation, pay corporate taxes from profits, and operate without engaging in unfair anti-competitive practices.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies government\'s role in statutory regulation, legal compliance, or consumer/worker protection' },
      { mark: 1, criterion: 'Notes government\'s fiscal interest in collecting corporate tax revenues or stimulating national economic employment' }
    ],
    examinerTips: 'Pair legal enforcement (employment/environmental law) with fiscal interests (corporate taxation).'
  },

  // --------------------------------------------------------------------------
  // Chapter 44: SWOT Analysis Toolkit (6 Questions)
  // --------------------------------------------------------------------------
  {
    id: 'q2m-1.4-01',
    subunit: 'bmt-swot-analysis',
    questionNumber: '1.4.1',
    question: 'What is a SWOT analysis?',
    marks: 2,
    commandTerm: 'What is',
    assessmentObjective: 'AO1',
    modelAnswer: 'A SWOT analysis is a situational tool used to assess the internal strengths and weaknesses and the external opportunities and threats of a business, so that managers can assess its current position and plan strategy.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies strategic situational analysis tool evaluating internal S&W and external O&T' },
      { mark: 1, criterion: 'Explains strategic role in guiding managerial planning and decision-making' }
    ],
    examinerTips: 'Explicitly categorize Strengths/Weaknesses as INTERNAL and Opportunities/Threats as EXTERNAL.'
  },
  {
    id: 'q2m-1.4-02',
    subunit: 'bmt-swot-analysis',
    questionNumber: '1.4.2a',
    question: 'Kidzplay Bouncy Castles SWOT factor classification: Limited competition in a niche market.',
    marks: 2,
    commandTerm: 'Outline',
    assessmentObjective: 'AO1',
    modelAnswer: 'Classification: Opportunity (External Favourable).\nJustification: Limited rivalry in a specialized niche market is an external market condition that allows the firm to capture high market share and maintain pricing power without aggressive price wars.',
    markBreakdown: [
      { mark: 1, criterion: 'Accurately classifies factor as an external Opportunity (or internal Strength if exclusive market dominance)' },
      { mark: 1, criterion: 'Provides valid contextual justification linking niche lack of rivalry to pricing power / market capture' }
    ],
    examinerTips: 'Always provide both the classification quadrant and a sentence of justification connecting it to the case context.'
  },
  {
    id: 'q2m-1.4-03',
    subunit: 'bmt-swot-analysis',
    questionNumber: '1.4.2b',
    question: 'Kidzplay Bouncy Castles SWOT factor classification: Limited marketing on its new website.',
    marks: 2,
    commandTerm: 'Outline',
    assessmentObjective: 'AO1',
    modelAnswer: 'Classification: Weakness (Internal Unfavourable).\nJustification: Marketing expenditure and web promotion are direct operational responsibilities of management; failing to promote its digital storefront restricts customer reach and sales conversion.',
    markBreakdown: [
      { mark: 1, criterion: 'Accurately classifies factor as an internal Weakness' },
      { mark: 1, criterion: 'Provides valid justification explaining marketing budgets and promotional efforts are controllable internal operations' }
    ],
    examinerTips: 'Because promotional spending is completely within managerial control, it is unequivocally an internal Weakness.'
  },
  {
    id: 'q2m-1.4-04',
    subunit: 'bmt-swot-analysis',
    questionNumber: '1.4.2c',
    question: 'Kidzplay Bouncy Castles SWOT factor classification: Issues of recruiting and retaining staff.',
    marks: 2,
    commandTerm: 'Outline',
    assessmentObjective: 'AO1',
    modelAnswer: 'Classification: Weakness (Internal Unfavourable).\nJustification: Inability to recruit and retain dependable event staff is an internal human resource vulnerability that disrupts booking fulfillment and raises labor turnover costs.',
    markBreakdown: [
      { mark: 1, criterion: 'Accurately classifies factor as an internal Weakness' },
      { mark: 1, criterion: 'Provides valid justification identifying human resource management and staff retention as an internal operational capability' }
    ],
    examinerTips: 'Staff retention and recruitment policies reflect internal HRM practices, making this an internal factor.'
  },
  {
    id: 'q2m-1.4-05',
    subunit: 'bmt-swot-analysis',
    questionNumber: '1.4.2d',
    question: 'Kidzplay Bouncy Castles SWOT factor classification: Demand in the winter months is low.',
    marks: 2,
    commandTerm: 'Outline',
    assessmentObjective: 'AO1',
    modelAnswer: 'Classification: Threat (External Unfavourable).\nJustification: Seasonality and unfavorable winter weather patterns in the UK are external climatic variables beyond the firm\'s control that depress customer demand for outdoor bouncy castle rentals.',
    markBreakdown: [
      { mark: 1, criterion: 'Accurately classifies factor as an external Threat' },
      { mark: 1, criterion: 'Provides valid justification recognizing seasonal weather patterns as uncontrollable external macro-environmental factors' }
    ],
    examinerTips: 'Weather and seasonal climate patterns cannot be controlled by management, making winter drop-off an external Threat.'
  },
  {
    id: 'q2m-1.4-06',
    subunit: 'bmt-swot-analysis',
    questionNumber: '1.4.2e',
    question: 'Kidzplay Bouncy Castles SWOT factor classification: Large profit margins could attract new competitors.',
    marks: 2,
    commandTerm: 'Outline',
    assessmentObjective: 'AO1',
    modelAnswer: 'Classification: Threat (External Unfavourable).\nJustification: High profitability signals commercial attractiveness, creating an external threat that entrepreneurial competitors will enter the niche market, increasing rivalry and eroding margins.',
    markBreakdown: [
      { mark: 1, criterion: 'Accurately classifies factor as an external Threat' },
      { mark: 1, criterion: 'Provides valid justification explaining that potential new entrants represent external competitive threats to market share and pricing' }
    ],
    examinerTips: 'While high profit itself is a strength, the threat of new entrants drawn by profits is an external Threat (the textbook SWOT template lists "new entrants in the marketplace" as a threat).'
  },

  // --------------------------------------------------------------------------
  // Chapter 45: Ansoff Matrix Toolkit (4 Questions)
  // --------------------------------------------------------------------------
  {
    id: 'q2m-1.5-01',
    subunit: 'bmt-ansoff-matrix',
    questionNumber: '1.5.1',
    question: 'Define the term market development.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'Market development is a medium-risk growth strategy in the Ansoff Matrix whereby a business seeks to sell its existing products into new markets, such as entering new international geographic regions or targeting new demographic segments.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies selling existing products into new markets' },
      { mark: 1, criterion: 'Provides valid examples such as entering new geographic territories, new demographic segments, or new channels' }
    ],
    examinerTips: 'Product = Existing, Market = New. Mentioning geographic expansion or new demographics secures full marks.'
  },
  {
    id: 'q2m-1.5-02',
    subunit: 'bmt-ansoff-matrix',
    questionNumber: '1.5.2',
    question: 'Define the term distribution channels.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'A distribution channel is the intermediate pathway, network, or series of commercial entities (such as wholesalers, retailers, distributors, and e-commerce platforms) through which goods and services pass from the producer to the final end-consumer.',
    markBreakdown: [
      { mark: 1, criterion: 'Defines pathway or network of intermediaries moving products from manufacturer/producer to final consumer' },
      { mark: 1, criterion: 'Names specific channel intermediaries (wholesalers, retailers, distributors, e-commerce platforms)' }
    ],
    examinerTips: 'List at least two intermediaries (e.g., wholesalers and retailers) to demonstrate concrete operational knowledge.'
  },
  {
    id: 'q2m-1.5-03',
    subunit: 'bmt-ansoff-matrix',
    questionNumber: '1.5.3',
    question: 'Define market penetration.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'Market penetration is a low-risk growth strategy in the Ansoff Matrix that focuses on increasing the sales volume and market share of existing products within existing markets, achieved through competitive pricing, loyalty programs, or intensive promotion.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies selling existing products to existing markets' },
      { mark: 1, criterion: 'Notes low risk profile and strategic focus on increasing sales volume or market share' }
    ],
    examinerTips: 'Product = Existing, Market = Existing. Note that this is the lowest-risk quadrant because products and customer habits are known.'
  },
  {
    id: 'q2m-1.5-04',
    subunit: 'bmt-ansoff-matrix',
    questionNumber: '1.5.4',
    question: 'Define diversification.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'Diversification is the highest-risk growth strategy in the Ansoff Matrix in which a business develops and markets entirely new products targeted at completely new markets outside its core operational domain, spreading business risk across varied industries.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies launching new products into new, unfamiliar markets' },
      { mark: 1, criterion: 'Emphasizes highest risk profile arising from dual unfamiliarity with product engineering and customer segment' }
    ],
    examinerTips: 'Product = New, Market = New. Highlighting the double-unfamiliarity risk profile guarantees top marks.'
  },
{
  "id": "q2m-steeple-01",
  "subunit": "bmt-steeple-analysis",
  "questionNumber": "46.1",
  "question": "Define the term STEEPLE analysis.",
  "marks": 2,
  "commandTerm": "Define",
  "assessmentObjective": "AO1",
  "modelAnswer": "STEEPLE analysis is an analytical situational management framework used by organizations to examine and evaluate opportunities and threats in the external macro-environment across social, technological, economic, environmental, political, legal, and ethical dimensions.",
  "markBreakdown": [
    {
      "mark": 1,
      "criterion": "Identifies STEEPLE as an external macro-environmental scanning or situational tool"
    },
    {
      "mark": 1,
      "criterion": "Identifies examining opportunities and threats across the seven dimensions (or lists key STEEPLE dimensions)"
    }
  ],
  "examinerTips": "Mentioning that STEEPLE focuses on external forces outside the direct control of the business guarantees the second mark."
},
{
  "id": "q2m-steeple-02",
  "subunit": "bmt-steeple-analysis",
  "questionNumber": "46.2",
  "question": "Define the term exchange rate.",
  "marks": 2,
  "commandTerm": "Define",
  "assessmentObjective": "AO1",
  "modelAnswer": "An exchange rate is the price or financial value of one national currency measured in terms of another currency in the foreign exchange market.",
  "markBreakdown": [
    {
      "mark": 1,
      "criterion": "Defines exchange rate as the price, value, or purchasing power of one currency"
    },
    {
      "mark": 1,
      "criterion": "States comparison in terms of another foreign currency"
    }
  ],
  "examinerTips": "Keep it direct: 'The value of one currency expressed in terms of another currency.'"
},
{
  "id": "q2m-steeple-03",
  "subunit": "bmt-steeple-analysis",
  "questionNumber": "46.3",
  "question": "Distinguish between external opportunities and external threats.",
  "marks": 2,
  "commandTerm": "Distinguish",
  "assessmentObjective": "AO1",
  "modelAnswer": "External opportunities are favourable macro-environmental conditions or trends that an enterprise can exploit to increase sales, market share, or profit margins, whereas external threats are unfavourable external shifts or constraints that pose risks of financial loss, cost increases, or competitive decline.",
  "markBreakdown": [
    {
      "mark": 1,
      "criterion": "Defines opportunities as favourable external developments providing commercial or profit advantages"
    },
    {
      "mark": 1,
      "criterion": "Defines threats as unfavourable external developments creating risks, costs, or commercial obstacles"
    }
  ],
  "examinerTips": "Use contrasting language: 'Opportunities provide potential commercial gains, whereas threats impose potential commercial harm or losses.'"
},
{
  "id": "q2m-steeple-04",
  "subunit": "bmt-steeple-analysis",
  "questionNumber": "46.4",
  "question": "Outline one way an aging population presents a commercial opportunity for businesses.",
  "marks": 2,
  "commandTerm": "Outline",
  "assessmentObjective": "AO1",
  "modelAnswer": "An aging population expands consumer demand for specialized goods and services tailored to senior demographics, creating commercial growth opportunities for healthcare providers, pharmaceutical firms, retirement housing developers, and asset wealth management services.",
  "markBreakdown": [
    {
      "mark": 1,
      "criterion": "Identifies increasing demand for senior-focused goods or services"
    },
    {
      "mark": 1,
      "criterion": "Provides relevant commercial examples (healthcare, pharmaceuticals, assisted living, retirement finance)"
    }
  ],
  "examinerTips": "Support the mechanism with a concrete commercial sector like healthcare, pharmaceuticals, or retirement housing."
},
{
  "id": "q2m-steeple-05",
  "subunit": "bmt-steeple-analysis",
  "questionNumber": "46.5",
  "question": "Define the term inflation.",
  "marks": 2,
  "commandTerm": "Define",
  "assessmentObjective": "AO1",
  "modelAnswer": "Inflation is a sustained, general increase in the average price level of goods and services throughout an entire economy over a period of time, resulting in a fall in the purchasing power of money.",
  "markBreakdown": [
    {
      "mark": 1,
      "criterion": "Identifies a sustained or general increase in the average price level"
    },
    {
      "mark": 1,
      "criterion": "Notes the consequence of declining purchasing power or value of money"
    }
  ],
  "examinerTips": "Do not just say 'prices go up'. The textbook wording is 'the continual rise in the general level of prices in an economy' (p.623)."
},
{
  "id": "q2m-steeple-06",
  "subunit": "bmt-steeple-analysis",
  "questionNumber": "46.6",
  "question": "State two examples of consumer protection legislation that impact commercial businesses.",
  "marks": 2,
  "commandTerm": "State",
  "assessmentObjective": "AO1",
  "modelAnswer": "Examples of consumer protection legislation include laws governing product safety and quality standards (preventing hazardous or defective merchandise) and statutory fair advertising regulations (prohibiting misleading product claims or false promotional descriptions).",
  "markBreakdown": [
    {
      "mark": 1,
      "criterion": "States product safety/standards laws or refund rights"
    },
    {
      "mark": 1,
      "criterion": "States truthful advertising/trade descriptions or anti-fraud laws"
    }
  ],
  "examinerTips": "Stating 'product safety laws' and 'truthful advertising regulations' directly secures full marks."
},
{
  "id": "q2m-bmt-01",
  "subunit": "bmt-toolkit",
  "questionNumber": "47.1",
  "question": "Define the Boston Consulting Group (BCG) matrix.",
  "marks": 2,
  "commandTerm": "Define",
  "assessmentObjective": "AO1",
  "modelAnswer": "The Boston Consulting Group (BCG) matrix is a situational and decision-making product portfolio management framework that assesses and categorizes a business's products into stars, cash cows, question marks, and dogs based on market growth rate and relative market share.",
  "markBreakdown": [
    {
      "mark": 1,
      "criterion": "Identifies the BCG Matrix as a portfolio management or situational tool"
    },
    {
      "mark": 1,
      "criterion": "Identifies the two evaluation axes: market growth rate and relative market share (or the four quadrants)"
    }
  ],
  "examinerTips": "Mentioning 'market growth' and 'market share' as the two core axes ensures full marks."
},
{
  "id": "q2m-bmt-02",
  "subunit": "bmt-toolkit",
  "questionNumber": "47.2",
  "question": "Distinguish between stars and cash cows in the BCG matrix.",
  "marks": 2,
  "commandTerm": "Distinguish",
  "assessmentObjective": "AO1",
  "modelAnswer": "In the BCG matrix, both stars and cash cows hold high relative market share; however, stars operate in high-growth markets requiring heavy continuous capital investment to defend leadership, whereas cash cows operate in mature, low-growth markets requiring minimal reinvestment and generating substantial surplus cash.",
  "markBreakdown": [
    {
      "mark": 1,
      "criterion": "Distinguishes market growth rate (stars = high-growth, cash cows = low-growth/mature)"
    },
    {
      "mark": 1,
      "criterion": "Contrasts cash flow dynamics (stars absorb heavy investment, cash cows generate surplus net cash)"
    }
  ],
  "examinerTips": "Contrast both the market growth environment and the net cash flow generated."
},
{
  "id": "q2m-bmt-03",
  "subunit": "bmt-toolkit",
  "questionNumber": "49.1",
  "question": "Define the term expected monetary value (EMV) in a decision tree.",
  "marks": 2,
  "commandTerm": "Define",
  "assessmentObjective": "AO1",
  "modelAnswer": "Expected monetary value (EMV) is the probability-weighted average financial outcome of an uncertain decision option, calculated by multiplying the financial payoff of each probable outcome by its respective probability and summing the results.",
  "markBreakdown": [
    {
      "mark": 1,
      "criterion": "Identifies EMV as a probability-weighted average financial outcome"
    },
    {
      "mark": 1,
      "criterion": "Explains calculation as the sum of each outcome's payoff multiplied by its probability"
    }
  ],
  "examinerTips": "Writing the formula EV = Sum(Probability x Payoff) or stating 'probability-weighted average financial return' awards full marks."
},
{
  "id": "q2m-bmt-04",
  "subunit": "bmt-toolkit",
  "questionNumber": "51.1",
  "question": "Outline what is meant by a circular business model.",
  "marks": 2,
  "commandTerm": "Outline",
  "assessmentObjective": "AO1",
  "modelAnswer": "A circular business model is a sustainable commercial operating model designed to eliminate waste and resource depletion by closing resource loops, focusing on the reuse, repair, recycling, and prolonged operational lifecycle of materials and products rather than traditional linear disposal.",
  "markBreakdown": [
    {
      "mark": 1,
      "criterion": "Explains closing loops or eliminating waste/pollution through reuse, recycling, or sharing"
    },
    {
      "mark": 1,
      "criterion": "Contrasts with traditional linear 'take-make-waste' consumption"
    }
  ],
  "examinerTips": "Mentioning 'closing loops' or 'decoupling economic activity from finite resource consumption' shows deep conceptual understanding."
},

  // --------------------------------------------------------------------------
  // Unit 1.5: Growth and Evolution - Economies of Scale (6 Questions)
  // --------------------------------------------------------------------------
  {
    id: 'q2m-1.5-eos-01',
    subunit: '1.5-growth-and-evolution',
    questionNumber: '1.5.1',
    question: 'Define the term economies of scale.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'Economies of scale refer to the cost-saving benefits enjoyed by a business as it increases its scale of operations, leading to a fall in its average cost of production (cost per unit).',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies fall or reduction in average cost of production (cost per unit / ATC)' },
      { mark: 1, criterion: 'Identifies increase in the scale of business operations / output expansion' }
    ],
    examinerTips: 'Do not define this solely as bulk buying! Bulk buying is only purchasing economies. Full marks require mentioning "fall in average cost per unit" as output/scale increases.'
  },
  {
    id: 'q2m-1.5-eos-02',
    subunit: '1.5-growth-and-evolution',
    questionNumber: '1.5.2',
    question: 'Define the term diseconomies of scale.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'Diseconomies of scale refer to an increase in the average cost of production as a business expands in size beyond its optimal level of output, usually caused by problems of communication, coordination, and control.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies increase in average cost of production per unit (ATC)' },
      { mark: 1, criterion: 'Identifies growth beyond optimal size or causes such as communication/coordination breakdown' }
    ],
    examinerTips: 'Focus on rising average unit costs as a business becomes too large and outsized.'
  },
  {
    id: 'q2m-1.5-eos-03',
    subunit: '1.5-growth-and-evolution',
    questionNumber: '1.5.3',
    question: 'Distinguish between internal and external economies of scale.',
    marks: 2,
    commandTerm: 'Distinguish',
    assessmentObjective: 'AO1',
    modelAnswer: 'Internal economies of scale arise from within the organization and are under its direct operational control as the individual firm expands (e.g., technical or financial economies), whereas external economies of scale occur outside the firm across the entire industry due to location or industry growth (e.g., local skilled labor pools or shared infrastructure).',
    markBreakdown: [
      { mark: 1, criterion: 'Accurately defines internal economies as originating inside the individual firm and within its control' },
      { mark: 1, criterion: 'Accurately defines external economies as arising outside the firm across the whole industry/location beyond its control' }
    ],
    examinerTips: 'Use the phrase "inside the firm vs outside in the wider industry" and cite a quick example for each to secure both marks.'
  },
  {
    id: 'q2m-1.5-eos-04',
    subunit: '1.5-growth-and-evolution',
    questionNumber: '1.5.4',
    question: 'Explain what is meant by the optimal level of output.',
    marks: 2,
    commandTerm: 'Explain',
    assessmentObjective: 'AO1',
    modelAnswer: 'The optimal level of output is the most efficient scale of operation for a business where the average cost of production is minimized, representing the tipping point before diseconomies of scale begin to occur.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies the level of output where average cost of production (ATC) is minimized' },
      { mark: 1, criterion: 'Identifies it as the threshold/tipping point between economies and diseconomies of scale' }
    ],
    examinerTips: 'Mention that it occurs at the lowest point of the U-shaped average cost curve (Figure 5.1). (Economics courses call a related idea minimum efficient scale; the textbook does not use that term.)'
  },
  {
    id: 'q2m-1.5-eos-05',
    subunit: '1.5-growth-and-evolution',
    questionNumber: '1.5.5',
    question: 'Outline two types of internal economies of scale.',
    marks: 2,
    commandTerm: 'Outline',
    assessmentObjective: 'AO1',
    modelAnswer: 'One type is technical economies, where a firm uses specialized mass-production machinery to spread high fixed capital costs over vast output. A second type is financial economies, where large, established firms borrow capital at lower interest rates from banks due to lower perceived lending risk.',
    markBreakdown: [
      { mark: 1, criterion: 'Outlines first valid internal economy (e.g., technical, financial, managerial, specialization, marketing, purchasing, risk-bearing)' },
      { mark: 1, criterion: 'Outlines second valid internal economy with brief mechanism' }
    ],
    examinerTips: 'Choose from technical, financial, managerial, specialization, marketing, purchasing, or risk-bearing economies.'
  },
  {
    id: 'q2m-1.5-eos-06',
    subunit: '1.5-growth-and-evolution',
    questionNumber: '1.5.6',
    question: 'State two causes of internal diseconomies of scale.',
    marks: 2,
    commandTerm: 'State',
    assessmentObjective: 'AO1',
    modelAnswer: 'Two causes are communication problems (information distortion and delays through tall organizational hierarchies) and worker alienation (demotivation, boredom, and lower productivity due to extreme division of labor).',
    markBreakdown: [
      { mark: 1, criterion: 'States first valid internal cause (e.g., communication breakdown, coordination/control difficulties, bureaucracy)' },
      { mark: 1, criterion: 'States second valid internal cause (e.g., worker alienation/morale, complacency, boredom from specialization)' }
    ],
    examinerTips: 'Do not state external causes such as traffic congestion or rising city rents; internal causes must stem from mismanagement within the firm.'
  },
{
    id: 'q2m-1.1-A1-01',
    subunit: '1.1-what-is-a-business',
    questionNumber: '1.1.A1-1',
    question: 'Define the term entrepreneurship.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'Entrepreneurship refers to the collective knowledge, skills and experiences of entrepreneurs. It also describes the trait of business leaders who are distinctive in their temperament, attitude and outlook and who drive the business to achieve its organizational goals.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies the collective knowledge, skills and experiences of entrepreneurs' },
      { mark: 1, criterion: 'Identifies the trait of business leaders (temperament, attitude and outlook) who drive organizational goals' }
    ],
    examinerTips: 'Do not define entrepreneurship as the person; that is an entrepreneur. Use the textbook wording for the first mark.'
  },
  {
    id: 'q2m-1.1-A1-02',
    subunit: '1.1-what-is-a-business',
    questionNumber: '1.1.A1-2',
    question: 'Define the term niche.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'A niche (or gap) is a part of the market that is not fully served by existing businesses, which a business can identify and fill with its products or services.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies a niche as a gap or under-served part of the market' },
      { mark: 1, criterion: 'Explains that a business can identify and fill the niche with products or services' }
    ],
    examinerTips: 'Link the niche to the start-up marketing problem: a new business that fills a gap avoids competing head-on with established rivals.'
  },
  {
    id: 'q2m-1.2-A1-03',
    subunit: '1.2-types-of-business-entities',
    questionNumber: '1.2.A1-3',
    question: 'Define the term silent partner.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'A silent (or sleeping) partner is a person who provides finance to a partnership and is eligible for a portion of its profits, but who does not take an active part in running the business.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies a person who provides finance to the partnership' },
      { mark: 1, criterion: 'Specifies eligibility for a portion of profits without taking an active part in running the business' }
    ],
    examinerTips: 'Do not confuse a silent partner with a limited liability partner: the second concerns liability, not involvement.'
  },
  {
    id: 'q2m-1.2-A1-04',
    subunit: '1.2-types-of-business-entities',
    questionNumber: '1.2.A1-4',
    question: 'Define the term limited liability partner.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'A limited liability partner is a partner who has been elected to have limited liability, which is the rare exception to the usual position in which partners share unlimited liability for the firm\'s debts.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies a partner who has been elected to have limited liability' },
      { mark: 1, criterion: 'Explains that this is the rare exception to the usual unlimited liability of partners' }
    ],
    examinerTips: 'State the exception clearly: ordinary partners have unlimited liability, and limited liability partners are the rare exception.'
  },
  {
    id: 'q2m-1.2-A1-05',
    subunit: '1.2-types-of-business-entities',
    questionNumber: '1.2.A1-5',
    question: 'Distinguish between a business and a company.',
    marks: 2,
    commandTerm: 'Distinguish',
    assessmentObjective: 'AO1',
    modelAnswer: 'All companies are businesses, but not all businesses are companies. A company is owned by its shareholders, whereas a business can also be a sole trader or a partnership, which are not companies.',
    markBreakdown: [
      { mark: 1, criterion: 'States that all companies are businesses but not all businesses are companies' },
      { mark: 1, criterion: 'Identifies that companies are owned by shareholders, while sole traders and partnerships are other forms of business' }
    ],
    examinerTips: 'Avoid using business and company as synonyms, which the textbook flags as a common mistake.'
  },
  {
    id: 'q2m-1.2-A1-06',
    subunit: '1.2-types-of-business-entities',
    questionNumber: '1.2.A1-6',
    question: 'State two documents that must be produced and submitted before a limited liability company can begin trading.',
    marks: 2,
    commandTerm: 'State',
    assessmentObjective: 'AO1',
    modelAnswer: 'The Memorandum of Association, which gives the trading name, main purpose, registered address and amount of share capital; and the Articles of Association, which set out the internal regulations, roles and procedures of the company.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies the Memorandum of Association with one of its contents' },
      { mark: 1, criterion: 'Identifies the Articles of Association with one of its contents' }
    ],
    examinerTips: 'The Certificate of Incorporation is issued by the authorities after these documents are accepted, so it is not one of the two documents the company submits.'
  },
  {
    id: 'q2m-1.2-A1-07',
    subunit: '1.2-types-of-business-entities',
    questionNumber: '1.2.A1-7',
    question: 'State two processes that take place at an Annual General Meeting (AGM).',
    marks: 2,
    commandTerm: 'State',
    assessmentObjective: 'AO1',
    modelAnswer: 'Shareholders vote on resolutions and on the re-election of the Board of Directors; shareholders ask questions to the CEO, directors and Chairperson; and shareholders approve the previous year\'s financial accounts after the annual report is presented.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies voting on resolutions and the re-election (or election) of directors' },
      { mark: 1, criterion: 'Identifies questions to management or approval of the financial accounts and annual report' }
    ],
    examinerTips: 'Any two of the three textbook processes earn full marks; name the process, not just the AGM.'
  },
{
    id: 'q2m-1.2-A2-01',
    subunit: '1.2-types-of-business-entities',
    questionNumber: '1.2.A2.1',
    question: 'Define the term triple bottom line.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'The triple bottom line is an accounting framework, coined by John Elkington in 1994, in which an organization pursues three broad aims: economic (earning a surplus and reinvesting it), social (benefits to people in society) and environmental (protecting the planet).',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies the triple bottom line as an accounting framework with three aims' },
      { mark: 1, criterion: 'Names the economic, social and environmental aims, or explains one of them' }
    ],
    examinerTips: 'Naming all three aims without explanation gets one mark. Explaining at least one aim gets the second mark.'
  },
  {
    id: 'q2m-1.2-A2-02',
    subunit: '1.2-types-of-business-entities',
    questionNumber: '1.2.A2.2',
    question: 'State two advantages of cooperatives as a form of business entity.',
    marks: 2,
    commandTerm: 'State',
    assessmentObjective: 'AO1',
    modelAnswer: 'Cooperatives give employees an incentive to work because they have a stake in how the business performs. They also give members decision-making power through a democratic system with equal voting rights.',
    markBreakdown: [
      { mark: 1, criterion: 'States an advantage with a brief reason, such as incentives to work because employees have a stake in the business' },
      { mark: 1, criterion: 'States a second, different advantage, such as decision-making power through democratic voting, social benefits or public support' }
    ],
    examinerTips: 'The word "democratic" alone is not enough. Explain whose voting power is involved and why it is an advantage.'
  },
  {
    id: 'q2m-1.2-A2-03',
    subunit: '1.2-types-of-business-entities',
    questionNumber: '1.2.A2.3',
    question: 'Outline one difference between a publicly held company and a public corporation.',
    marks: 2,
    commandTerm: 'Outline',
    assessmentObjective: 'AO1',
    modelAnswer: 'A publicly held company is a limited liability company in the private sector that sells its shares to the public on a stock exchange, whereas a public corporation is owned and operated by the government on behalf of the general public.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies a publicly held company as a private-sector, limited liability company whose shares trade on a stock exchange' },
      { mark: 1, criterion: 'Identifies a public corporation as owned and operated by the government' }
    ],
    examinerTips: 'Do not describe a publicly held company as government-owned. The word "public" in publicly held describes how the shares are traded.'
  },
  {
    id: 'q2m-1.3-A2-01',
    subunit: '1.3-business-objectives',
    questionNumber: '1.3.A2.1',
    question: 'State two criticisms of vision and mission statements.',
    marks: 2,
    commandTerm: 'State',
    assessmentObjective: 'AO1',
    modelAnswer: 'Critics argue that such statements are no more than a public relations stunt, because the ultimate purpose of most businesses is to maximize profits and protect shareholder value. They are also time-consuming to construct and may not be supported by everyone, such as part-time or temporary employees.',
    markBreakdown: [
      { mark: 1, criterion: 'States that the statements may be a public relations stunt, with a reason such as the profit or shareholder value purpose' },
      { mark: 1, criterion: 'States that they are time-consuming to construct, or not supported by all staff' }
    ],
    examinerTips: 'A criticism needs a reason. Saying "they are a PR stunt" alone is not enough.'
  },
  {
    id: 'q2m-1.3-A2-02',
    subunit: '1.3-business-objectives',
    questionNumber: '1.3.A2.2',
    question: 'Outline why survival may be a tactical objective for a new business.',
    marks: 2,
    commandTerm: 'Outline',
    assessmentObjective: 'AO1',
    modelAnswer: 'New businesses often lack brand recognition and a large customer base, and they may face intense rivalry from existing firms. Survival through these early problems therefore becomes a key short-term objective, pursued through tactics.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies a problem facing new businesses, such as lack of brand recognition, small customer base or intense rivalry' },
      { mark: 1, criterion: 'Links these problems to survival as a short-term (tactical) objective' }
    ],
    examinerTips: 'The tactical link is the second mark. State that survival is a short-term, immediate aim (p.45). Note that p.46 adds that survival can become a key strategic objective if a firm faces a hostile takeover.'
  },
  {
    id: 'q2m-1.3-A2-03',
    subunit: '1.3-business-objectives',
    questionNumber: '1.3.A2.3',
    question: 'State two examples of ethical objectives a business might set.',
    marks: 2,
    commandTerm: 'State',
    assessmentObjective: 'AO1',
    modelAnswer: 'A business might reduce pollution by using more environmentally friendly technologies and production processes. It might also increase the recycling of waste materials, or dispose of waste in an environmentally safe manner.',
    markBreakdown: [
      { mark: 1, criterion: 'States one ethical objective, such as reducing pollution or increasing recycling' },
      { mark: 1, criterion: 'States a second, different ethical objective, such as safe waste disposal or fairer trade with low-income countries' }
    ],
    examinerTips: 'Ethical objectives are targets grounded in moral principles, so name a specific action rather than a general aim such as "be ethical".'
  },
{
    id: 'q2m-1.3-A3-01',
    subunit: '1.3-business-objectives',
    questionNumber: '1.3.8',
    question: 'Define the term ethical code of practice.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'An ethical code of practice is the documented beliefs and philosophies of an organization, setting out what is considered acceptable or not acceptable within the organization so that people know the standards expected of them.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies documented beliefs and philosophies of an organization' },
      { mark: 1, criterion: 'States that it sets out what is acceptable or unacceptable within the organization' }
    ],
    examinerTips: 'Use the word "documented" to show that the code is a written standard that people can refer to.'
  },
  {
    id: 'q2m-1.3-A3-02',
    subunit: '1.3-business-objectives',
    questionNumber: '1.3.9',
    question: 'Define the term ethical objectives.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'Ethical objectives are organizational goals based on moral guidelines, determined by the business and/or society, which direct and determine decision-making.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies organizational goals based on moral guidelines' },
      { mark: 1, criterion: 'Notes that they are set by the business and/or society and direct decision-making' }
    ],
    examinerTips: 'Include both "moral guidelines" and "direct decision-making" to secure both marks.'
  },
  {
    id: 'q2m-1.3-A3-03',
    subunit: '1.3-business-objectives',
    questionNumber: '1.3.10',
    question: 'Define the term strategic objectives.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'Strategic objectives are the longer-term goals of a business, such as profit maximization, growth, market standing and increased market share.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies longer-term goals of the business' },
      { mark: 1, criterion: 'Gives valid examples such as profit maximization, growth, market standing or market share' }
    ],
    examinerTips: 'Contrast with tactical objectives, which are short-term and affect a single unit of the organization.'
  },
  {
    id: 'q2m-1.4-A3-01',
    subunit: '1.4-stakeholders',
    questionNumber: '1.4.7',
    question: 'Define the term shareholder.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'A shareholder (or stockholder) is an owner of a limited liability company who holds shares in it. Shares can be held by individuals and other organizations.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies an owner of a limited liability company who holds shares' },
      { mark: 1, criterion: 'Notes that shares may be held by individuals and other organizations' }
    ],
    examinerTips: 'Shareholders are one stakeholder group, not all stakeholders. Do not use the two terms as synonyms.'
  },
  {
    id: 'q2m-1.4-A3-02',
    subunit: '1.4-stakeholders',
    questionNumber: '1.4.8',
    question: 'Define the term pressure group.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'A pressure group is an organized group of individuals with a common concern, such as environmental protection, who seek to place demands on organizations to act in a particular way or to influence a change in their behaviour.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies an organized group of individuals with a common concern' },
      { mark: 1, criterion: 'States that it seeks to place demands on organizations or influence a change in their behaviour' }
    ],
    examinerTips: 'Give one example of a common concern (e.g. environmental protection) to show the shared interest.'
  },
  {
    id: 'q2m-1.4-A3-03',
    subunit: '1.4-stakeholders',
    questionNumber: '1.4.9',
    question: 'Distinguish between internal and external stakeholders of a high school, giving one example of each.',
    marks: 2,
    commandTerm: 'Distinguish',
    assessmentObjective: 'AO1',
    modelAnswer: 'Internal stakeholders are members of the organization who operate from within it, such as teaching staff (employees) or senior managers and directors. External stakeholders are outside the school but have a direct interest in its activities, such as the government or the local community.',
    markBreakdown: [
      { mark: 1, criterion: 'Defines internal stakeholders as members operating within the school, with a valid example' },
      { mark: 1, criterion: 'Defines external stakeholders as outside parties with an interest in the school, with a valid example' }
    ],
    examinerTips: 'Name a specific school example for each category; "teaching staff" and "the local community" are clear examples.'
  },
  {
    id: 'q2m-1.4-A3-04',
    subunit: '1.4-stakeholders',
    questionNumber: '1.4.10',
    question: 'Identify two external stakeholder groups of Škoda Auto.',
    marks: 2,
    commandTerm: 'Identify',
    assessmentObjective: 'AO1',
    modelAnswer: '1. Customers: buyers of Škoda cars, such as the one in four Škoda cars sold in China. 2. Suppliers: businesses that provide components and services to Škoda and sit outside the company.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies a valid external stakeholder group (customers) with the Škoda case context' },
      { mark: 1, criterion: 'Identifies a second distinct external group (e.g. suppliers)' }
    ],
    examinerTips: 'Choose external groups from the textbook list (customers, suppliers, financiers, pressure groups, competitors, government) and avoid internal groups such as employees.'
  },
  {
    id: 'q2m-1.4-A3-05',
    subunit: '1.4-stakeholders',
    questionNumber: '1.4.11',
    question: 'Outline what is meant by RBS Group having a "stake" in Bank of China.',
    marks: 2,
    commandTerm: 'Outline',
    assessmentObjective: 'AO1',
    modelAnswer: 'RBS Group held a 4.26% equity shareholding in Bank of China. This gave RBS a financial interest in, and ownership of part of, that bank.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies the stake as an equity shareholding (4.26%) in Bank of China' },
      { mark: 1, criterion: 'Explains that it gives RBS a financial interest or ownership in Bank of China' }
    ],
    examinerTips: 'Use the word "equity" or "shareholding" to define a stake; a stake is an ownership interest, not just a business relationship.'
  },
  {
    id: 'q2m-1.4-A3-06',
    subunit: '1.4-stakeholders',
    questionNumber: '1.4.12',
    question: 'State two reasons why the shareholders of RBS Group might be concerned about its performance.',
    marks: 2,
    commandTerm: 'State',
    assessmentObjective: 'AO1',
    modelAnswer: '1. Falling share value: the share price dropped from £3.54 to £0.11, so the value of shareholders\' investment collapsed. 2. Record losses: RBS Group reported a £24.1bn loss in 2008, and the UK government came to own over 80% of its shares.',
    markBreakdown: [
      { mark: 1, criterion: 'States a valid reason, such as the share price falling from £3.54 to £0.11' },
      { mark: 1, criterion: 'States a second distinct reason, such as the record £24.1bn loss or the government buying over 80% of the shares' }
    ],
    examinerTips: 'Use the case figures. Share price and losses are the strongest reasons because they affect dividends and capital gains.'
  },
  {
    id: 'q2m-1.4-A3-07',
    subunit: '1.4-stakeholders',
    questionNumber: '1.4.13',
    question: 'Define the term internal stakeholders.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'Internal stakeholders are members of the business organization who operate from within it, namely its employees, managers, directors and shareholders (owners).',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies members of the business who operate from within it' },
      { mark: 1, criterion: 'Lists employees, managers, directors and shareholders (owners)' }
    ],
    examinerTips: 'List all four groups; many students omit shareholders, who are internal owners.'
  },
{
    id: 'q2m-1.5-A4-01',
    subunit: '1.5-growth-and-evolution',
    questionNumber: '1.5-A4-01',
    question: 'Define the term acquisition.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'An acquisition is when one company buys a controlling interest in another company, with the permission and agreement of the target company\'s board of directors.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies the purchase of a controlling interest (a majority stake) in another company' },
      { mark: 1, criterion: 'Notes that the purchase is made with the permission and agreement of the target\'s board of directors' }
    ],
    examinerTips: 'Both the controlling interest and the board permission are needed for full marks. Without board permission, the event is a takeover.'
  },
  {
    id: 'q2m-1.5-A4-02',
    subunit: '1.5-growth-and-evolution',
    questionNumber: '1.5-A4-02',
    question: 'Define the term takeover.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'A takeover is when one company purchases a controlling stake (a majority of shares) in another company without the permission and agreement of its board of directors. It is also called a hostile takeover.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies the purchase of a controlling stake or majority of shares in another company' },
      { mark: 1, criterion: 'Notes that the purchase is made without the agreement of the target\'s board, or calls it a hostile takeover' }
    ],
    examinerTips: 'The key contrast with an acquisition is the absence of board permission.'
  },
  {
    id: 'q2m-1.5-A4-03',
    subunit: '1.5-growth-and-evolution',
    questionNumber: '1.5-A4-03',
    question: 'Define the term merger.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'A merger is when two or more firms agree to combine and create a new company with its own legal identity, usually with a new name and a board drawn from all the companies involved.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies that two or more firms agree to combine' },
      { mark: 1, criterion: 'States that the result is a new company with its own legal identity' }
    ],
    examinerTips: 'Mention the new legal identity. This is what separates a merger from an acquisition.'
  },
  {
    id: 'q2m-1.5-A4-04',
    subunit: '1.5-growth-and-evolution',
    questionNumber: '1.5-A4-04',
    question: 'Outline two methods of internal growth that a business may use.',
    marks: 2,
    commandTerm: 'Outline',
    assessmentObjective: 'AO1',
    modelAnswer: 'Improved promotion: advertising and promotion remind and persuade customers to buy the product. Increased capital expenditure: investment in new locations or production processes to raise output and productivity.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies a valid internal growth method (for example, improved promotion, placement, preferential credit, capital expenditure or training)' },
      { mark: 1, criterion: 'Gives a brief description of how the method increases the business\'s own scale or sales' }
    ],
    examinerTips: 'Use methods that grow the firm from its own resources. Mergers, takeovers and joint ventures are external methods.'
  },
  {
    id: 'q2m-1.5-A4-05',
    subunit: '1.5-growth-and-evolution',
    questionNumber: '1.5-A4-05',
    question: 'State two reasons why a business might choose to remain small.',
    marks: 2,
    commandTerm: 'State',
    assessmentObjective: 'AO1',
    modelAnswer: 'To keep cost control and avoid diseconomies of scale and higher unit costs, and to offer personalised services to customers.',
    markBreakdown: [
      { mark: 1, criterion: 'States one valid reason for staying small (cost control, loss of control, lower financial risk, government aid, local monopoly power, personalised services, flexibility, or small market size)' },
      { mark: 1, criterion: 'States a second, distinct valid reason' }
    ],
    examinerTips: 'Name the reasons directly. Full sentences of explanation are not required for a State question.'
  },
  {
    id: 'q2m-1.5-A4-06',
    subunit: '1.5-growth-and-evolution',
    questionNumber: '1.5-A4-06',
    question: 'Define the term synergy.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'Synergy is the benefit gained when two or more integrated businesses produce a combined result greater than the sum of their individual parts, so that they create greater output and improved efficiency (1 + 1 = 3).',
    markBreakdown: [
      { mark: 1, criterion: 'States that the combined result is greater than the sum of the individual parts' },
      { mark: 1, criterion: 'Links synergy to integration of businesses and improved output or efficiency' }
    ],
    examinerTips: 'The textbook calls synergy a major reason why organizations seek to grow inorganically (p.77). Use the 1 + 1 = 3 idea to show understanding.'
  },
{
    id: 'q2m-1.6-A5-01',
    subunit: '1.6-multinational-companies',
    questionNumber: '1.6.1',
    question: 'Define the term multinational company.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'A multinational company (MNC) is an organization that operates in two or more countries, usually with its head office based in the home country.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies operations in two or more countries' },
      { mark: 1, criterion: 'Identifies a head office usually based in the home country' }
    ],
    examinerTips: 'Do not define an MNC simply as a large business. Full marks need both the multi-country operations and the home-country head office.'
  },
  {
    id: 'q2m-1.6-A5-02',
    subunit: '1.6-multinational-companies',
    questionNumber: '1.6.2',
    question: 'Define the term host country.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'A host country is any nation that allows a multinational company to set up in its country.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies any nation (country) as the location' },
      { mark: 1, criterion: 'States that the nation allows an MNC to set up its operations there' }
    ],
    examinerTips: 'Do not confuse the host country with the home country, where the MNC\'s head office is based.'
  },
  {
    id: 'q2m-1.6-A5-03',
    subunit: '1.6-multinational-companies',
    questionNumber: '1.6.3',
    question: 'Define the term protectionist policies.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'Protectionist policies are measures imposed by a country to reduce the competitiveness of imports, such as tariffs (taxes on imports), quotas and restrictive trade practices.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies measures imposed by a country to reduce the competitiveness of imports' },
      { mark: 1, criterion: 'Gives an example such as tariffs, quotas or restrictive trade practices' }
    ],
    examinerTips: 'Name a specific policy as the example. Vague statements such as "protecting local business" alone do not earn the second mark.'
  },
  {
    id: 'q2m-1.6-A5-04',
    subunit: '1.6-multinational-companies',
    questionNumber: '1.6.4',
    question: 'Outline two positive impacts of multinational companies on host countries.',
    marks: 2,
    commandTerm: 'Outline',
    assessmentObjective: 'AO1',
    modelAnswer: 'Job creation: MNCs create job opportunities in the host country, typically offering higher pay than local firms. Knowledge and technology transfer: MNCs introduce new skills and technologies, such as lean production, which raise the efficiency of production in the host country.',
    markBreakdown: [
      { mark: 1, criterion: 'Outlines a first positive impact, such as job creation, higher national income (GDP) or knowledge and technology transfer' },
      { mark: 1, criterion: 'Outlines a second, distinct positive impact, such as increased competition or higher national income' }
    ],
    examinerTips: 'Outline means give a brief explanation of each impact, not just name it. Two different impacts are needed.'
  },
  {
    id: 'q2m-1.5-A5-01',
    subunit: '1.5-growth-and-evolution',
    questionNumber: '1.5.A5.1',
    question: 'Define the term franchising.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'Franchising is an agreement in which a franchisor sells its rights to other businesses (franchisees), allowing them to sell products under its corporate name in return for a fee and regular royalty payments.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies the franchisor licensing its rights or name to franchisees' },
      { mark: 1, criterion: 'Identifies the franchisee paying a fee and regular royalty payments' }
    ],
    examinerTips: 'Include the payment in your definition. Franchising is not simply a shop being owned by another company.'
  },
  {
    id: 'q2m-1.5-A5-02',
    subunit: '1.5-growth-and-evolution',
    questionNumber: '1.5.A5.2',
    question: 'Define the term demerger.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'A demerger occurs when a company sells off a part of its business, thereby separating into two or more businesses.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies that a company sells off or separates a part of its business' },
      { mark: 1, criterion: 'Identifies that this results in two or more separate businesses' }
    ],
    examinerTips: 'A demerger is the reverse of a merger. Do not describe a demerger as two firms forming a new organization.'
  },
{
    id: 'q2m-bmt-steeple-A6-01',
    subunit: 'bmt-steeple-analysis',
    questionNumber: '46.4(a)',
    question: 'Define the term inflation.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'Inflation is the continual rise in the general level of prices in an economy.',
    markBreakdown: [
      { mark: 1, criterion: 'States a continual (sustained) rise in prices' },
      { mark: 1, criterion: 'Refers to the general level of prices in the economy as a whole' }
    ],
    examinerTips: 'Do not define inflation as a single price rising; it is a general, continuing increase across the economy.'
  },
  {
    id: 'q2m-bmt-steeple-A6-02',
    subunit: 'bmt-steeple-analysis',
    questionNumber: '46.4(b) (adapted)',
    question: 'State two causes of inflation.',
    marks: 2,
    commandTerm: 'State',
    assessmentObjective: 'AO1',
    modelAnswer: '(1) Excessive demand in the economy, where households, firms, government or foreign buyers spend more than the economy can supply. (2) Higher costs of production, such as wage increases from trade union action, soaring energy prices or higher rents.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies excessive demand (too much spending) as a cause' },
      { mark: 1, criterion: 'Identifies higher costs of production as a second, distinct cause' }
    ],
    examinerTips: 'Give two different causes: one from demand and one from costs. Two examples of the same cause earn one mark.'
  },
  {
    id: 'q2m-bmt-ansoff-A6-01',
    subunit: 'bmt-ansoff-matrix',
    questionNumber: 'Key term, p.615',
    question: 'Define the term holding company.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'A holding company (or parent company) is a diversified business that owns a controlling interest in other diverse companies, meaning enough shares to take control of them. Those companies are its subsidiaries.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies a diversified business that owns a controlling interest in other companies' },
      { mark: 1, criterion: 'Explains that it holds enough shares to take control, with the owned firms as subsidiaries' }
    ],
    examinerTips: 'Use "controlling interest" in your definition. Saying only that a holding company "owns other companies" leaves out the control element.'
  },
{
    id: 'q2m-bmt-bp-A7-01',
    subunit: 'bmt-business-plan',
    questionNumber: '48.A7.1',
    question: 'Define the term business plan.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'A formal report detailing the key aspects of a business idea or proposition and how the organization sets out to achieve it.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies the business plan as a formal report or document.' },
      { mark: 1, criterion: 'States that it details the business idea or proposition and how the organization will achieve it.' }
    ]
  },
  {
    id: 'q2m-bmt-bp-A7-02',
    subunit: 'bmt-business-plan',
    questionNumber: '48.A7.2',
    question: 'State two key elements of a business plan.',
    marks: 2,
    commandTerm: 'State',
    assessmentObjective: 'AO1',
    modelAnswer: 'Any two of: the marketing plan (for example market research or the distribution plan); the finance section (for example a cash flow forecast or break-even analysis); the personnel section (for example the number and roles of workers); the product section (for example pricing methods).',
    markBreakdown: [
      { mark: 1, criterion: 'Names one valid component or element of a business plan.' },
      { mark: 1, criterion: 'Names a second, distinct element from a different component.' }
    ]
  },
  {
    id: 'q2m-bmt-bp-A7-03',
    subunit: 'bmt-business-plan',
    questionNumber: '48.A7.3',
    question: 'Outline the purpose of an executive summary within a business plan.',
    marks: 2,
    commandTerm: 'Outline',
    assessmentObjective: 'AO1',
    modelAnswer: 'It is a synopsis of the main report that highlights the key points and conclusions, placed at the front so that a busy bank manager can decide whether to read the rest of the plan.',
    markBreakdown: [
      { mark: 1, criterion: 'States that it is a synopsis or summary of the main report, with its key points and conclusions.' },
      { mark: 1, criterion: 'Explains that it is placed at the front so a busy reader can decide whether to read the rest.' }
    ]
  },
  {
    id: 'q2m-bmt-ds-A7-01',
    subunit: 'bmt-descriptive-statistics',
    questionNumber: '50.A7.1',
    question: 'Define the term standard deviation.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'A statistical measure of the dispersion (variation) of the values in a data set around the arithmetic mean, showing the average distance of all points from the mean.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies it as a measure of dispersion or variation.' },
      { mark: 1, criterion: 'States that it measures spread around the arithmetic mean.' }
    ]
  },
  {
    id: 'q2m-bmt-ds-A7-02',
    subunit: 'bmt-descriptive-statistics',
    questionNumber: '50.A7.2',
    question: 'Define the term interquartile range.',
    marks: 2,
    commandTerm: 'Define',
    assessmentObjective: 'AO1',
    modelAnswer: 'The difference between the first (lower) and third (upper) quartiles, which shows the spread of the middle of the data.',
    markBreakdown: [
      { mark: 1, criterion: 'States that it is the difference between the first and third quartiles.' },
      { mark: 1, criterion: 'Explains that it shows the spread of the middle of the data.' }
    ]
  },
  {
    id: 'q2m-bmt-ds-A7-03',
    subunit: 'bmt-descriptive-statistics',
    questionNumber: '50.A7.3',
    question: 'Identify the modal flavour of ice cream in Figure 50.1 and state its frequency.',
    marks: 2,
    commandTerm: 'Identify',
    assessmentObjective: 'AO1',
    modelAnswer: 'Raspberry, with 28 votes, the most frequent answer in the survey.',
    markBreakdown: [
      { mark: 1, criterion: 'Identifies raspberry as the modal flavour.' },
      { mark: 1, criterion: 'States its frequency as 28 votes.' }
    ]
  },
  ...TWO_MARK_3_1, ...TWO_MARK_3_2, ...TWO_MARK_3_3, ...TWO_MARK_3_4
];
