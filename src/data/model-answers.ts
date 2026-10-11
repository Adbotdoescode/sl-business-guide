import {
  FourMarkQuestion,
  SixMarkQuestion
} from '@/types/curriculum';

// ============================================================================
// 1. FOUR-MARK QUESTIONS (AO2 PEEL)
// ============================================================================

export const FOUR_MARK_QUESTIONS: FourMarkQuestion[] = [
  {
    id: 'q4m-01',
    subunit: '1.1-what-is-a-business',
    questionNumber: 'Question 1.1a',
    question: 'Distinguish between revenue and costs.',
    caseStimulus:
      'Education is big business. Schools can earn revenue from numerous sources, such as tuition fees (for fee-paying schools), grants from the government and fund-raising events. They might also lease out their facilities (such as classrooms, sports facilities, drama studios and swimming pools) during the evenings, weekends and school holidays.\n\nSchools use these revenues to finance their costs, such as staff salaries, utility bills and the maintenance of the buildings. In addition to school fees, parents might also have to pay for items such as school uniform, textbooks, stationery, sports equipment and food.',
    contextTitle: 'School Revenue and Operating Costs',
    marks: 4,
    commandTerm: 'Distinguish',
    assessmentObjective: 'AO2',
    peelModelAnswer: {
      point1: {
        title: 'Revenue Definition & School Application',
        point: 'Revenue represents the total gross cash inflows and monetary proceeds generated from an organization\'s core operations and trading activities over a specified period.',
        evidence: 'In the school context, revenue is accrued from tuition fees paid by fee-paying parents, statutory government grants, fund-raising events, and commercial leasing of sports facilities or swimming pools during evenings and holidays.',
        explanation: 'These receipts represent incoming monetary value before any expenses, depreciation, or operating overheads are deducted.',
        link: 'Generating diversified revenue streams is crucial for the school to establish an operating budget capable of funding its educational programs.'
      },
      point2: {
        title: 'Costs Definition & Contrast with School Context',
        point: 'In contrast, costs represent the financial expenditures and resource outflows that an organization must disburse to deliver its services.',
        evidence: 'For the school, costs encompass fixed and variable operating expenditures, specifically teaching and administrative staff salaries, classroom utility bills, building maintenance, and facility overheads.',
        explanation: 'Unlike revenue, which expands financial reserves, costs deplete capital; an operational surplus occurs only when total revenue exceeds cumulative operating costs (Surplus = Total Revenue - Total Costs).',
        link: 'Rigorous cost containment on utilities and maintenance protects the school\'s ongoing financial solvency.'
      }
    },
    rubricChecklist: [
      {
        id: 'q4m-01-c1',
        criterion: 'Clear definition and explanation of revenue as gross operational cash inflows',
        mark: 1
      },
      {
        id: 'q4m-01-c2',
        criterion: 'Revenue directly applied to school context (tuition fees, grants, facility leasing)',
        mark: 1
      },
      {
        id: 'q4m-01-c3',
        criterion: 'Clear definition and explanation of costs as operational expenditures and resource outflows',
        mark: 1
      },
      {
        id: 'q4m-01-c4',
        criterion: 'Costs directly applied to school context (staff salaries, utility bills, maintenance)',
        mark: 1
      }
    ]
  },
  {
    id: 'q4m-02',
    subunit: '1.2-types-of-business-entities',
    questionNumber: 'Question 2.1a',
    question: 'Distinguish between the aims of public and private sector organizations.',
    caseStimulus: 'Education, housing and healthcare services can be provided by both private sector businesses and the public sector.',
    contextTitle: 'Public vs Private Sector Service Provision',
    marks: 4,
    commandTerm: 'Distinguish',
    assessmentObjective: 'AO2',
    peelModelAnswer: {
      point1: {
        title: 'Public Sector Primary Aims & Service Orientation',
        point: 'Public sector organizations are state-owned bodies whose overarching aim is social welfare maximization, equity, and universal accessibility rather than financial profitability.',
        evidence: 'In state schooling, public healthcare, and social housing, services are provided universally to all citizens regardless of income, funded primarily through general taxation.',
        explanation: 'Because their mandate is supplying merit goods and essential infrastructure that free markets would under-provide, public sector bodies prioritize societal well-being and service reliability over commercial margins.',
        link: 'Institutional success is measured by social welfare indicators (e.g., patient wait times, literacy rates, housing availability) rather than net bottom-line earnings.'
      },
      point2: {
        title: 'Private Sector Primary Aims & Commercial Return',
        point: 'In contrast, private sector commercial enterprises are privately owned entities whose principal aim is profit maximization and maximizing shareholder returns.',
        evidence: 'Private hospitals, independent fee-charging schools, and commercial property developers charge market-driven prices to generate a financial return on invested equity capital.',
        explanation: 'Commercial firms survive only if customer revenues exceed operating expenditures; hence, they allocate resources based on consumer purchasing power, operational efficiency, and profit margins.',
        link: 'Failure to generate profit threatens the private enterprise with insolvency, making profitability and market competitiveness non-negotiable strategic priorities.'
      }
    },
    rubricChecklist: [
      {
        id: 'q4m-02-c1',
        criterion: 'Identifies and explains public sector primary aim as social welfare and universal access',
        mark: 1
      },
      {
        id: 'q4m-02-c2',
        criterion: 'Public sector aim applied to healthcare, state education, or social housing context',
        mark: 1
      },
      {
        id: 'q4m-02-c3',
        criterion: 'Identifies and explains private sector primary aim as profit maximization and shareholder wealth',
        mark: 1
      },
      {
        id: 'q4m-02-c4',
        criterion: 'Private sector aim applied to fee-charging hospitals, private schools, or commercial property context',
        mark: 1
      }
    ]
  },
  {
    id: 'q4m-03',
    subunit: '1.2-types-of-business-entities',
    questionNumber: 'Question 2.3b',
    question: 'Explain two advantages of running EXP as a partnership.',
    caseStimulus:
      'EXP is a small Chinese restaurant with take-away service located in London. It was established in 2016 by partners Keith and Tonina Hoang. EXP is run as a partnership with each partner having 50% of the stake in the business. They have a workforce of 12 people, including chefs, counter staff and delivery crew. EXP relies heavily on local customers but faces competition from nearby pizza outlets and Indian and Italian restaurants.\n\nEXP\'s popularity has grown with a loyal customer base. Keith and Tonina had to discontinue with the distribution of take-away menus in the local area as EXP is already operating near full capacity. Keith and Tonina thought it best to maintain the quality of their food and the punctuality of their home deliveries to maintain the reputation that they have established.',
    contextTitle: 'EXP Chinese Takeaway Partnership',
    marks: 4,
    commandTerm: 'Explain',
    assessmentObjective: 'AO2',
    peelModelAnswer: {
      point1: {
        title: 'Workload Sharing & Functional Specialization',
        point: 'A major advantage of operating EXP as a partnership is executive workload sharing and functional management specialization between the two partners.',
        evidence: 'Operating a busy 12-person restaurant running at "near full capacity" involves managing chefs, counter staff, and delivery crew punctuality while maintaining food quality.',
        explanation: 'Having a 50/50 partnership allows Keith and Tonina to divide daily responsibilities—one partner managing culinary kitchen operations and quality assurance while the other oversees delivery logistics, front-of-house service, and finances.',
        link: 'This division of labor reduces operational burnout and ensures EXP maintains the punctuality and food quality essential to its brand reputation.'
      },
      point2: {
        title: 'Pooled Capital & Shared Financial Risk',
        point: 'A second advantage is access to larger initial capital and shared financial risk compared to a sole trader structure.',
        evidence: 'Establishing and expanding a London restaurant in 2016 required substantial upfront capital for commercial kitchen fit-outs, dining furniture, delivery vehicles, and wage reserves for 12 employees.',
        explanation: 'By combining the personal savings and borrowing capacities of both Keith and Tonina, EXP secured necessary startup funding without taking on extortionate debt, while sharing the financial burden of business liabilities equally (50% stake each).',
        link: 'This shared financial foundation strengthened EXP\'s balance sheet, allowing it to compete effectively against surrounding pizza, Indian, and Italian restaurant rivals.'
      }
    },
    rubricChecklist: [
      {
        id: 'q4m-03-c1',
        criterion: 'Explains executive workload sharing and functional management specialization',
        mark: 1
      },
      {
        id: 'q4m-03-c2',
        criterion: 'Specialization applied to EXP context (12 staff, kitchen quality vs delivery logistics, full capacity)',
        mark: 1
      },
      {
        id: 'q4m-03-c3',
        criterion: 'Explains pooled financial capital and shared liability/risk compared to a sole trader',
        mark: 1
      },
      {
        id: 'q4m-03-c4',
        criterion: 'Capital/risk applied to EXP context (London setup costs, 50/50 equity, Italian/Indian competition)',
        mark: 1
      }
    ]
  },
  {
    id: 'q4m-04',
    subunit: '1.3-business-objectives',
    questionNumber: 'Question 3.1b',
    question: 'Explain the role of vision and mission statements in business organizations.',
    caseStimulus:
      'Examples of organizational vision and mission statements include:\n- To be the most successful premium manufacturer in the industry – BMW\n- The company exists to benefit and refresh everyone it touches – Coca-Cola\n- To organise the world\'s information and make it universally accessible and useful – Google\n- Creating the finest ice cream – Häagen-Dazs\n- Inspire and develop the builders of tomorrow – Lego\n- To help people and businesses throughout the world realise their full potential – Microsoft\n- A just world without poverty – Oxfam\n- To make people happy – Walt Disney Company',
    contextTitle: 'Corporate Vision & Mission Statements',
    marks: 4,
    commandTerm: 'Explain',
    assessmentObjective: 'AO2',
    peelModelAnswer: {
      point1: {
        title: 'Strategic Direction & Operational Alignment',
        point: 'Vision and mission statements establish clear strategic direction, aligning all departmental activities and employees toward unified corporate goals.',
        evidence: 'Google\'s mission "To organise the world\'s information and make it universally accessible and useful" and BMW\'s vision to be the "most successful premium manufacturer" provide an unambiguous operating compass.',
        explanation: 'When functional teams formulate operational strategies—such as software engineering algorithms at Google or vehicle platform styling at BMW—these statements filter out misaligned initiatives, concentrating capital on core competencies.',
        link: 'This strategic alignment prevents fragmented decision-making across global subsidiaries, ensuring corporate coherence.'
      },
      point2: {
        title: 'Stakeholder Motivation & Corporate Culture',
        point: 'Secondly, these statements serve as vital motivational tools that build corporate culture, unify employee pride, and communicate ethical purpose to external stakeholders.',
        evidence: 'Lego\'s ambition to "Inspire and develop the builders of tomorrow" and Oxfam\'s vision of "A just world without poverty" emotionally engage employees and benefactors beyond transactional exchanges.',
        explanation: 'A compelling vision provides employees with an intrinsic sense of purpose, driving engagement and job retention, while signaling shared ethical values to consumers and donors.',
        link: 'Consequently, strong mission statements elevate brand loyalty and employee productivity, driving sustainable organizational success.'
      }
    },
    rubricChecklist: [
      {
        id: 'q4m-04-c1',
        criterion: 'Explains the role of establishing strategic direction and corporate alignment',
        mark: 1
      },
      {
        id: 'q4m-04-c2',
        criterion: 'Strategic direction applied to stimulus examples (Google information accessibility / BMW premium manufacturing)',
        mark: 1
      },
      {
        id: 'q4m-04-c3',
        criterion: 'Explains the role of motivating stakeholders and fostering unified corporate culture',
        mark: 1
      },
      {
        id: 'q4m-04-c4',
        criterion: 'Motivation applied to stimulus examples (Lego builders of tomorrow / Oxfam poverty-free world)',
        mark: 1
      }
    ]
  },
  {
    id: 'q4m-05',
    subunit: '1.3-business-objectives',
    questionNumber: 'Question 3.2b',
    question: 'Explain why it is important for Lenovo to specify its organizational objectives.',
    caseStimulus:
      'Chinese multinational technology company Lenovo acquired the personal computers division of IBM in 2005. Lenovo\'s goal was to establish itself outside of the Asian market by owning IBM\'s globally recognized brands such as ThinkPad laptops. Lenovo is committed to four key values: Customer service, Trust and integrity, Teamwork across cultures, Innovation and entrepreneurial spirit.\n\nLenovo strives to increase its market presence by sponsoring key sporting events and teams, such as McLaren, the British Formula One Team, the Williams Formula One team, the NBA, and the 2008 Beijing Olympic Games. In 2012, Lenovo became the official sponsor of the NFL, its largest sponsorship in America. Its strategy has helped the company to gain market share around the world.',
    contextTitle: 'Lenovo Global Expansion & Objectives',
    marks: 4,
    commandTerm: 'Explain',
    assessmentObjective: 'AO2',
    peelModelAnswer: {
      point1: {
        title: 'Guiding Cross-Border Post-Merger Integration',
        point: 'Specifying organizational objectives is critical to guide complex cross-border strategies and align disparate international divisions following major acquisitions.',
        evidence: 'After acquiring IBM\'s PC division in 2005, Lenovo set the explicit strategic objective to "establish itself outside of the Asian market" using the ThinkPad brand.',
        explanation: 'A well-defined strategic objective enabled senior executives to channel capital and marketing efforts into Western territories, bridging Chinese corporate leadership with American operations under shared corporate values like "teamwork across cultures."',
        link: 'Without this clear objective, Lenovo risked post-merger culture clash, operational paralysis, and failing to monetize IBM\'s brand assets.'
      },
      point2: {
        title: 'Benchmarking Marketing ROI & Accountability',
        point: 'Explicit objectives provide measurable performance benchmarks that allow management to monitor, assess, and justify major financial marketing expenditures.',
        evidence: 'Lenovo committed massive financial capital to high-profile sports marketing (McLaren F1, NBA, Beijing Olympics, and NFL in America) and the case states that this strategy helped the company to gain market share.',
        explanation: 'Clear objectives enable marketing directors to evaluate return on investment (ROI): managers can track whether brand awareness metrics and global PC market share increased in regions where NFL and F1 sponsorships aired.',
        link: 'This measurement function ensures financial accountability and justifies ongoing multi-million-dollar marketing outlays to company shareholders.'
      }
    },
    rubricChecklist: [
      {
        id: 'q4m-05-c1',
        criterion: 'Explains strategic guidance and alignment during international post-merger integration',
        mark: 1
      },
      {
        id: 'q4m-05-c2',
        criterion: 'Integration applied to Lenovo acquiring IBM PC division and expanding outside Asia',
        mark: 1
      },
      {
        id: 'q4m-05-c3',
        criterion: 'Explains performance benchmarking, ROI monitoring, and marketing expenditure control',
        mark: 1
      },
      {
        id: 'q4m-05-c4',
        criterion: 'Control applied to Lenovo sports sponsorships (NFL, NBA, F1) and global market share targets',
        mark: 1
      }
    ]
  },
  {
    id: 'q4m-06',
    subunit: '1.3-business-objectives',
    questionNumber: 'Question 3.3b',
    question: 'In the context of the case studies, explain the meaning of ethical business behaviour.',
    caseStimulus:
      'Ronald McDonald House Charities (RMHC) is a non-profit organization, created by McDonald\'s. The charity\'s mission statement is to "directly improve the health and well-being of children". Operating in 64 countries and regions, RMHC has helped to make a difference to millions of seriously ill children and their families.\n\nBurger King, the world\'s second largest fast-food chain and the largest rival of McDonald\'s, has used humanely sourced meats and eggs since 2007. This means Burger King gives priority and better deals to suppliers that provide cage-free chickens and free-range pigs. Burger King operates two national charitable organizations: the Have It Your Way Foundation and the McLamore Foundation.',
    contextTitle: 'Ethical Practices: RMHC and Burger King',
    marks: 4,
    commandTerm: 'Explain',
    assessmentObjective: 'AO2',
    peelModelAnswer: {
      point1: {
        title: 'Voluntary Moral Standards Exceeding Statutory Law',
        point: 'Ethical business behaviour refers to organizational actions, decisions, and practices guided by moral principles, fairness, and welfare that go well beyond statutory legal minimums.',
        evidence: 'Burger King actively implemented policies using "humanely sourced meats and eggs since 2007," giving priority and better deals to suppliers providing "cage-free chickens and free-range pigs."',
        explanation: 'While conventional battery cage farming was legally permissible, Burger King adopted moral accountability for animal welfare, accepting higher supply chain procurement costs to uphold humane ethical standards.',
        link: 'This demonstrates ethical behavior because the company prioritizes animal welfare and moral principles over unconstrained cost minimization.'
      },
      point2: {
        title: 'Philanthropic Responsibility toward Community Stakeholders',
        point: 'Ethical behavior also entails active corporate social responsibility (CSR) where commercial enterprises dedicate resources to improve the welfare of wider societal stakeholders.',
        evidence: 'McDonald\'s established and supports Ronald McDonald House Charities (RMHC), operating in 64 countries and regions to "directly improve the health and well-being of children", and has made a difference to millions of seriously ill children and their families.',
        explanation: 'Rather than focusing solely on commercial fast-food sales, McDonald\'s directs resources, through a separate non-profit charity, into supporting seriously ill children and their families.',
        link: 'Upholding such philanthropic commitments builds public trust, elevates corporate reputation, and fulfills moral obligations to society.'
      }
    },
    rubricChecklist: [
      {
        id: 'q4m-06-c1',
        criterion: 'Explains voluntary moral standards and practices that exceed legal compliance',
        mark: 1
      },
      {
        id: 'q4m-06-c2',
        criterion: 'Applied to Burger King sourcing cage-free eggs and free-range pork despite higher costs',
        mark: 1
      },
      {
        id: 'q4m-06-c3',
        criterion: 'Explains philanthropic stakeholder responsibility and corporate social responsibility (CSR)',
        mark: 1
      },
      {
        id: 'q4m-06-c4',
        criterion: 'Applied to McDonald\'s RMHC supporting seriously ill children and their families in 64 countries and regions',
        mark: 1
      }
    ]
  },
  {
    id: 'q4m-07',
    subunit: '1.3-business-objectives',
    questionNumber: 'Question 3.3c',
    question: 'Distinguish between vision and mission statements in the context of RMHC and Burger King.',
    caseStimulus:
      'Ronald McDonald House Charities (RMHC) is a non-profit organization, created by McDonald\'s. The charity\'s mission statement is to "directly improve the health and well-being of children". Operating in 64 countries and regions, RMHC has helped to make a difference to millions of seriously ill children and their families.\n\nBurger King operates two national charitable organizations: the Have It Your Way Foundation (which focuses on hunger alleviation, disease prevention and community education) and the McLamore Foundation (providing scholarships to students since 2000).',
    contextTitle: 'Vision vs Mission: RMHC & Burger King',
    marks: 4,
    commandTerm: 'Distinguish',
    assessmentObjective: 'AO2',
    peelModelAnswer: {
      point1: {
        title: 'Mission Statement Definition & Operational Focus',
        point: 'A mission statement articulates an organization\'s current core operational purpose, target beneficiaries, and day-to-day actionable values.',
        evidence: 'RMHC\'s explicit mission statement is to "directly improve the health and well-being of children" across 64 operating countries and regions.',
        explanation: 'This provides immediate operational guidance on where current funds and staffing must be allocated—specifically building accommodation, providing amenities, and supporting families of hospitalized children in the present.',
        link: 'The mission statement outlines the tangible operational baseline by which daily charitable performance is executed and managed.'
      },
      point2: {
        title: 'Vision Statement Contrast & Aspirational Horizon',
        point: 'In contrast, a vision statement is long-term and aspirational, outlining the ultimate future state or inspiring dream the organization strives to achieve.',
        evidence: 'While Burger King\'s Have It Your Way Foundation tackles current hunger alleviation and scholarships, its overarching vision would be an inspiring future state—such as "a world free from childhood hunger and educational inequality."',
        explanation: 'Unlike the grounded mission statement ("what we do today"), the vision statement is inspirational ("where we aspire to be tomorrow"), motivating stakeholders toward long-term systemic change.',
        link: 'While the mission describes the practical vehicle, the vision depicts the ultimate destination.'
      }
    },
    rubricChecklist: [
      {
        id: 'q4m-07-c1',
        criterion: 'Defines mission statement as present operational purpose, target scope, and values',
        mark: 1
      },
      {
        id: 'q4m-07-c2',
        criterion: 'Mission applied to RMHC\'s daily commitment to improve children\'s health in 64 countries',
        mark: 1
      },
      {
        id: 'q4m-07-c3',
        criterion: 'Defines vision statement as long-term aspirational future state and organizational dream',
        mark: 1
      },
      {
        id: 'q4m-07-c4',
        criterion: 'Vision applied to Burger King Foundations\' ultimate aspiration of eradicating hunger and educational poverty',
        mark: 1
      }
    ]
  },
  {
    id: 'q4m-08',
    subunit: 'bmt-ansoff-matrix',
    questionNumber: 'Question 45.1a',
    question: 'Apply the Ansoff matrix to Cadbury launching new confectionery products to compete with rivals.',
    caseStimulus: 'Cadbury, the chocolate manufacturer, launches new products under the names of Crème Eggs, Flake, Crunchie and Heroes to compete with existing rival brands.',
    contextTitle: 'Cadbury Product Range Extensions',
    marks: 4,
    commandTerm: 'Apply',
    assessmentObjective: 'AO2',
    peelModelAnswer: {
      point1: {
        title: 'Quadrant Classification & Product Novelty',
        point: 'In the Ansoff Matrix, Cadbury\'s strategy is classified as Product Development.',
        evidence: 'Cadbury is introducing newly created confectionery lines ("Crème Eggs, Flake, Crunchie, and Heroes") targeted at its existing market of chocolate and sweet consumers to compete against rival brands.',
        explanation: 'Because Cadbury already commands established brand equity and distribution channels in supermarkets, it leverages its existing customer base while innovating new physical recipes, textures, and product formats.',
        link: 'This strategy allows Cadbury to revitalize consumer interest and defend its shelf space against confectionery rivals.'
      },
      point2: {
        title: 'Risk Profile & Operational Mechanism',
        point: 'Product development carries a moderate level of risk due to product unfamiliarity balanced by market familiarity.',
        evidence: 'Developing distinct chocolate bars and assorted boxes (Heroes) requires substantial research and development (R&D) outlays, recipe trials, packaging redesign, and promotional launch campaigns.',
        explanation: 'However, because the target chocolate market is already deeply understood and consumer loyalty to the master Cadbury brand is high, the commercial risk of consumer rejection is significantly mitigated compared to entering an unknown market.',
        link: 'Consequently, Cadbury captures incremental sales revenue from existing chocolate shoppers while containing market entry risks.'
      }
    },
    rubricChecklist: [
      {
        id: 'q4m-08-c1',
        criterion: 'Correctly classifies the strategy into the Product Development quadrant of the Ansoff Matrix',
        mark: 1
      },
      {
        id: 'q4m-08-c2',
        criterion: 'Directly links new products (Crème Eggs, Flake, Crunchie, Heroes) to the existing chocolate consumer market',
        mark: 1
      },
      {
        id: 'q4m-08-c3',
        criterion: 'Explains the operational mechanism of leveraging existing retail distribution and brand equity',
        mark: 1
      },
      {
        id: 'q4m-08-c4',
        criterion: 'Analyzes the moderate risk profile (R&D expenditures balanced by existing market familiarity)',
        mark: 1
      }
    ]
  },
  {
    id: 'q4m-09',
    subunit: 'bmt-ansoff-matrix',
    questionNumber: 'Question 45.1b',
    question: 'Apply the Ansoff matrix to Toyota launching a new line of upmarket cars under the Lexus brand.',
    caseStimulus: 'Toyota, the world\'s largest car manufacturer, launches a new line of upmarket cars under the Lexus brand to cater for wealthier customers.',
    contextTitle: 'Toyota Launch of Lexus Luxury Marque',
    marks: 4,
    commandTerm: 'Apply',
    assessmentObjective: 'AO2',
    peelModelAnswer: {
      point1: {
        title: 'Quadrant Classification & Strategic Repositioning',
        point: 'In the Ansoff Matrix, Toyota\'s strategy is classified as Diversification (specifically related diversification).',
        evidence: 'Toyota engineered an entirely new line of upmarket luxury vehicles (the new product line under the "Lexus" marque) specifically to cater to wealthier consumers (a brand-new customer demographic segment distinct from mass-market Toyota buyers).',
        explanation: 'Toyota recognized that its core brand identity was synonymous with affordable, reliable family cars, which could not appeal to luxury buyers; thus, it required both a new product platform and a distinct brand identity.',
        link: 'Creating the separate Lexus marque allowed Toyota to penetrate executive automotive segments previously unserved by the firm.'
      },
      point2: {
        title: 'Risk Profile: Related Diversification',
        point: 'Diversification is the riskiest of the four Ansoff growth options, but the textbook classes Lexus as related diversification, which is less risky because it builds on existing product and market knowledge (p.613).',
        evidence: 'Toyota had to compete directly against entrenched European luxury incumbents such as Mercedes-Benz and BMW, building dedicated premium dealerships and bespoke customer service standards.',
        explanation: 'Toyota stayed within the broader confines of the car industry, so it could draw on its existing engineering and manufacturing know-how; the new risks lay in winning wealthier buyers who did not associate the Toyota name with luxury.',
        link: 'So the strategy carried more risk than market penetration, but less than unrelated diversification into an industry Toyota did not know.'
      }
    },
    rubricChecklist: [
      {
        id: 'q4m-09-c1',
        criterion: 'Correctly classifies strategy as Diversification (or related diversification)',
        mark: 1
      },
      {
        id: 'q4m-09-c2',
        criterion: 'Directly links new product line (Lexus luxury cars) to new market segment (wealthier executive buyers)',
        mark: 1
      },
      {
        id: 'q4m-09-c3',
        criterion: 'Explains strategic necessity of creating a separate brand identity to overcome economy brand perceptions',
        mark: 1
      },
      {
        id: 'q4m-09-c4',
        criterion: 'Analyzes the risk profile (diversification is the riskiest option, but related diversification builds on existing industry knowledge)',
        mark: 1
      }
    ]
  },
  {
    id: 'q4m-10',
    subunit: 'bmt-ansoff-matrix',
    questionNumber: 'Question 45.1c',
    question: 'Apply the Ansoff matrix to Tesco providing petrol and financial services to its customers.',
    caseStimulus: 'Tesco, one of the world\'s largest supermarket chains, expands by providing petrol and financial services to its customers.',
    contextTitle: 'Tesco Forecourt Fuel and Financial Services',
    marks: 4,
    commandTerm: 'Apply',
    assessmentObjective: 'AO2',
    peelModelAnswer: {
      point1: {
        title: 'Quadrant Classification & Service Innovation',
        point: 'In the Ansoff Matrix, Tesco\'s expansion strategy is classified as Product Development.',
        evidence: 'Tesco introduced entirely new service offerings—forecourt petrol filling stations and personal banking/credit services (new products/services)—tailored specifically to its vast existing supermarket shopper base.',
        explanation: 'Rather than seeking new geographic or demographic customer groups, Tesco leveraged the existing footfall of millions of weekly grocery shoppers to cross-sell non-grocery convenience and financial products.',
        link: 'This allowed Tesco to capture a higher share of wallet from existing consumers during routine grocery visits.'
      },
      point2: {
        title: 'Operational Synergy & Moderate Risk Profile',
        point: 'This product development strategy entails moderate risk, balancing operational complexity with customer loyalty advantages.',
        evidence: 'Operating forecourt petrol pumps and banking services required new regulatory compliance and specialized supply chains, integrated with Tesco\'s Clubcard loyalty rewards program.',
        explanation: 'While entering banking and fuel retailing involved substantial capital setup and compliance risk, customer trust in the Tesco brand and loyalty point incentives minimized customer acquisition costs.',
        link: 'Consequently, Tesco maximized customer retention and revenue per customer without bearing the hazards of entering an unfamiliar market.'
      }
    },
    rubricChecklist: [
      {
        id: 'q4m-10-c1',
        criterion: 'Correctly classifies strategy into the Product Development quadrant of the Ansoff Matrix',
        mark: 1
      },
      {
        id: 'q4m-10-c2',
        criterion: 'Directly links new service offerings (petrol forecourts, banking services) to existing supermarket customer base',
        mark: 1
      },
      {
        id: 'q4m-10-c3',
        criterion: 'Explains operational mechanism of cross-selling and leveraging Clubcard loyalty infrastructure',
        mark: 1
      },
      {
        id: 'q4m-10-c4',
        criterion: 'Analyzes moderate risk profile (regulatory and capital demands offset by established consumer trust)',
        mark: 1
      }
    ]
  },
  {
    id: 'q4m-11',
    subunit: 'bmt-ansoff-matrix',
    questionNumber: 'Question 45.1d',
    question: 'Apply the Ansoff matrix to McDonald\'s introducing wedding services under the McWedding brand name.',
    caseStimulus: 'McDonald\'s introduces wedding services under the McWedding brand name.',
    contextTitle: 'McDonald\'s McWedding Banquet Services',
    marks: 4,
    commandTerm: 'Apply',
    assessmentObjective: 'AO2',
    peelModelAnswer: {
      point1: {
        title: 'Quadrant Classification & Radical Market Shift',
        point: 'In the Ansoff Matrix, McDonald\'s introduction of McWedding services is classified as Diversification (specifically unrelated / conglomerate diversification).',
        evidence: 'McDonald\'s launched formal event management and wedding reception hosting (an entirely new service) into the celebratory matrimonial events sector (an entirely new market segment far removed from fast-food dining).',
        explanation: 'McDonald\'s departed completely from its core competence of rapid, standardized fast-food burger preparation to offer bespoke celebration ceremonies, balloon decorations, and wedding favors.',
        link: 'This strategy moves the corporation into an unproven commercial arena with zero operational overlap with its primary restaurant business.'
      },
      point2: {
        title: 'Extreme Risk Profile & Brand Dilution Hazard',
        point: 'Unrelated diversification carries the highest risk of commercial failure in the Ansoff framework.',
        evidence: 'McDonald\'s had no prior expertise in high-end hospitality or matrimonial event planning, targeting couples seeking unconventional, budget-conscious wedding celebrations.',
        explanation: 'Because the firm faced dual unfamiliarity—untested service delivery and an unfamiliar celebratory customer mindset—it faced the grave risk of brand dilution if consumers perceived fast-food dining as cheapening a once-in-a-lifetime marital milestone.',
        link: 'Therefore, while generating novelty PR, the initiative carried substantial reputational and commercial vulnerability.'
      }
    },
    rubricChecklist: [
      {
        id: 'q4m-11-c1',
        criterion: 'Correctly classifies strategy as Diversification (specifically unrelated / conglomerate diversification)',
        mark: 1
      },
      {
        id: 'q4m-11-c2',
        criterion: 'Directly links new service (wedding reception hosting) to new market segment (matrimonial couples)',
        mark: 1
      },
      {
        id: 'q4m-11-c3',
        criterion: 'Explains operational challenge of departing from standardized fast food into bespoke event management',
        mark: 1
      },
      {
        id: 'q4m-11-c4',
        criterion: 'Analyzes extreme risk profile and brand dilution hazard from conflicting brand perceptions',
        mark: 1
      }
    ]
  },
  {
    id: 'q4m-12',
    subunit: 'bmt-ansoff-matrix',
    questionNumber: 'Question 45.2c',
    question: 'Explain one advantage and one disadvantage of Adidas\'s market development strategy.',
    caseStimulus:
      'According to its corporate website, Adidas strives "to be the best sports brand in the world." This mission statement is supported by the company\'s growth strategy of market development across the world... The COVID-19 pandemic caused sales revenues at Adidas to fall by 16% in 2020 to €19.84bn ($22.44bn). This caused the company to change its growth strategy to develop new distribution channels, with a shift from selling its goods in retail outlets to using e-commerce and mail order. The company\'s growth strategy includes plans to double its e-commerce business to €9bn ($10.2bn) by 2025.',
    contextTitle: 'Adidas E-Commerce Channel Pivot',
    marks: 4,
    commandTerm: 'Explain',
    assessmentObjective: 'AO2',
    peelModelAnswer: {
      point1: {
        title: 'Advantage: Direct Customer Access & Higher Profit Margins',
        point: 'A primary advantage of Adidas\'s market development strategy via direct-to-consumer e-commerce is expanding global reach and capturing higher gross profit margins.',
        evidence: 'Shifting from physical third-party retail stores to proprietary e-commerce platforms targeting €9bn ($10.2bn) by 2025 allows Adidas to bypass retail intermediaries.',
        explanation: 'Selling directly to consumers over the Internet eliminates the wholesale margin discounts demanded by independent sports department stores. Additionally, e-commerce reaches online shoppers 24/7 globally, bypassing lockdowns and geographic physical barriers.',
        link: 'This drives higher net profit margins and builds strategic operational resilience against physical retail store disruptions.'
      },
      point2: {
        title: 'Disadvantage: High Fulfillment Capital & Return Logistics',
        point: 'A significant disadvantage is the substantial capital expenditure, logistics complexity, and customer return costs associated with digital direct fulfillment.',
        evidence: 'Doubling e-commerce sales to €9bn necessitates massive capital investments in automated warehouse distribution centers, digital cybersecurity, and reverse-logistics infrastructure.',
        explanation: 'Unlike bulk shipping to retail outlets, e-commerce requires picking, packaging, and shipping individual shoeboxes to residential addresses, leading to elevated shipping costs and the cost of handling customer returns.',
        link: 'These elevated fulfillment and customer return expenses can squeeze operating margins and expose Adidas to supply chain bottlenecks.'
      }
    },
    rubricChecklist: [
      {
        id: 'q4m-12-c1',
        criterion: 'Explains advantage of market development via e-commerce (bypassing intermediaries, higher margins, 24/7 reach)',
        mark: 1
      },
      {
        id: 'q4m-12-c2',
        criterion: 'Advantage applied to Adidas context (€9bn online sales target, store closures, pandemic resilience)',
        mark: 1
      },
      {
        id: 'q4m-12-c3',
        criterion: 'Explains disadvantage of digital channel expansion (logistics capital outlays, high return rates)',
        mark: 1
      },
      {
        id: 'q4m-12-c4',
        criterion: 'Disadvantage applied to Adidas context (automated distribution centers, online apparel return costs)',
        mark: 1
      }
    ]
  },
{
  "id": "q4m-13",
  "subunit": "bmt-steeple-analysis",
  "questionNumber": "Adapted from Question 46.3 (original 4-mark question)",
  "question": "Explain how demographic and technological shifts in the external macro-environment contributed to the commercial success of the Nintendo Wii.",
  "caseStimulus": "The Nintendo Wii was a massive commercial hit. Launched in 2006, Nintendo's games console appealed to entirely new customer segments, including women and the elderly. Demand was particularly high in Asia, Europe and the USA, helping Nintendo sell its 100 millionth console by the end of 2013. Its most popular game, Wii Sports, sold over 83 million copies worldwide by 2021.",
  "contextTitle": "Nintendo Wii: Demographic & Technological Exploitation",
  "marks": 4,
  "commandTerm": "Explain",
  "assessmentObjective": "AO2",
  "peelModelAnswer": {
    "point1": {
      "title": "Social Demographic Broadening",
      "point": "Nintendo successfully identified and exploited an external Social demographic opportunity by expanding its target audience beyond traditional hardcore teenage male gamers.",
      "evidence": "In the case stimulus, the Wii appealed to new market segments including women and the elderly, helping Nintendo sell its 100 millionth console by the end of 2013.",
      "explanation": "By designing family-friendly entertainment for groups that did not traditionally play video games, Nintendo opened up demand that was not being served by rival consoles.",
      "link": "Responding to social and demographic opportunities in the external environment widened Nintendo's customer base and raised sales."
    },
    "point2": {
      "title": "Technological Motion-Sensing Innovation",
      "point": "Technologically, Nintendo innovated by introducing intuitive, low-barrier motion-sensing controllers (the Wii Remote) rather than competing on ultra-high graphics processing power.",
      "evidence": "This accessible technological interface allowed games like Wii Sports (over 83 million copies sold) to be played instantly by grandparents and children without complex button memorization.",
      "explanation": "This differentiated technological approach made the console easy to use for first-time players, turning a technological opportunity into a source of competitive advantage.",
      "link": "Aligning technological interface design with user ergonomics transformed the console into a universal household staple."
    }
  },
  "rubricChecklist": [
    {
      "id": "q4m-13-c1",
      "criterion": "Explains external Social demographic factor (broadening customer segments to elderly, women, families)",
      "mark": 1
    },
    {
      "id": "q4m-13-c2",
      "criterion": "Social factor directly applied to Nintendo Wii case evidence (100M consoles, multi-generational appeal)",
      "mark": 1
    },
    {
      "id": "q4m-13-c3",
      "criterion": "Explains external Technological innovation factor (motion-sensing remote, accessible interface)",
      "mark": 1
    },
    {
      "id": "q4m-13-c4",
      "criterion": "Technological factor applied to Nintendo Wii context (Wii Sports 83M copies, low barrier to play)",
      "mark": 1
    }
  ]
},
{
  "id": "q4m-14",
  "subunit": "bmt-steeple-analysis",
  "questionNumber": "Adapted from Question 46.5c",
  "question": "Explain how exchange rate fluctuations impact the purchase costs and profitability of an importing retail business.",
  "caseStimulus": "Gijs Van Oosten Jeans sells jeans to customers in the Netherlands. The company buys an average of 15,000 pairs of jeans per month from a supplier in the USA at a cost of $25 each, and sells them at \u20ac35 each.",
  "contextTitle": "Gijs Van Oosten Jeans: Currency Volatility & Retail Profit Margins",
  "marks": 4,
  "commandTerm": "Explain",
  "assessmentObjective": "AO2",
  "peelModelAnswer": {
    "point1": {
      "title": "Impact of a Stronger Domestic Currency (Euro Appreciation)",
      "point": "When the domestic currency (the Euro) strengthens against the foreign currency (the US Dollar), the euro cost of imported stock falls.",
      "evidence": "For Gijs Van Oosten Jeans, if \u20ac1 rises from $1.30 to $1.45, the euro cost of a $25 pair of jeans falls from about \u20ac19.23 to \u20ac17.24, saving about \u20ac1.99 per pair, or roughly \u20ac29,840 a month on 15,000 pairs.",
      "explanation": "Because the retail selling price remains constant at \u20ac35, the lower procurement cost widens the firm's gross profit margin and expands monthly operating liquidity.",
      "link": "A stronger domestic exchange rate directly enhances retail operating profitability for merchandise importers."
    },
    "point2": {
      "title": "Impact of a Weaker Domestic Currency (Euro Depreciation)",
      "point": "Conversely, a depreciation of the Euro against the US Dollar severely inflates import costs, squeezing operating profit margins unless prices are raised.",
      "evidence": "If the euro weakens from \u20ac1 = $1.45 to \u20ac1 = $1.30, the cost per pair rises from about \u20ac17.24 to \u20ac19.23, cutting profit per pair from about \u20ac17.76 to \u20ac15.77.",
      "explanation": "If Gijs attempts to pass these cost increases onto consumers by raising prices above \u20ac35, price-sensitive consumers may switch to domestic apparel competitors, causing sales volume to contract.",
      "link": "Unhedged currency depreciation exposes retailers to serious cost inflation and margin compression."
    }
  },
  "rubricChecklist": [
    {
      "id": "q4m-14-c1",
      "criterion": "Explains economic impact of currency appreciation on import purchasing costs (imports become cheaper in euros)",
      "mark": 1
    },
    {
      "id": "q4m-14-c2",
      "criterion": "Currency appreciation applied to Gijs Van Oosten Jeans (\u20ac35 retail price, $25 cost, margin expansion)",
      "mark": 1
    },
    {
      "id": "q4m-14-c3",
      "criterion": "Explains economic impact of currency depreciation on import cost inflation and margin compression",
      "mark": 1
    },
    {
      "id": "q4m-14-c4",
      "criterion": "Currency depreciation applied to retail context (risk of consumer backlash if retail prices are raised)",
      "mark": 1
    }
  ]
},
{
  "id": "q4m-15",
  "subunit": "bmt-toolkit",
  "questionNumber": "Question 47.1",
  "question": "Explain how a diversified multinational business uses the Boston Consulting Group (BCG) matrix to balance its corporate cash flows.",
  "caseStimulus": "Unilever is an Anglo-Dutch multinational consumer goods giant owning over 400 commercial brands across food, beverages, and personal care. Its diverse portfolio includes mature global staples such as Dove soap, Hellmann's mayonnaise, and Knorr bouillon, alongside rapidly growing premium plant-based food ventures and boutique organic skincare lines.",
  "contextTitle": "Unilever: Cross-Portfolio Cash Flow Circulation",
  "marks": 4,
  "commandTerm": "Explain",
  "assessmentObjective": "AO2",
  "peelModelAnswer": {
    "point1": {
      "title": "Cash Cow Harvesting for Capital Generation",
      "point": "Unilever utilizes mature Cash Cow brands in low-growth markets to harvest reliable, high-volume operational liquidity.",
      "evidence": "In the case stimulus, well-established household brands like Dove soap and Knorr hold high market share in stable, saturated consumer packaged goods markets with minimal need for additional factory capacity investment.",
      "explanation": "Because these established product lines require minimal capital expenditure, they generate massive cash surpluses that exceed their operational running costs.",
      "link": "These harvested cash cow surpluses provide the self-funded corporate liquidity required to finance high-risk ventures without accumulating excessive bank debt."
    },
    "point2": {
      "title": "Reinvesting Cash into Question Marks and Stars",
      "point": "Management redeploys this surplus liquidity to pursue a 'Build' strategy across high-potential Question Marks and market-leading Stars in high-growth industries.",
      "evidence": "Unilever channels capital into premium plant-based food lines and organic skincare brands that compete in rapidly expanding, high-growth consumer wellness sectors.",
      "explanation": "Without continuous cash injections for R&D, product placement, and advertising, these Question Marks would fail to gain sufficient scale and risk degenerating into unprofitable Dogs.",
      "link": "Circulating cash flow from mature Cash Cows into emerging Stars ensures long-term corporate survival as older brands eventually face decline."
    }
  },
  "rubricChecklist": [
    {
      "id": "q4m-15-c1",
      "criterion": "Explains role of Cash Cows in generating surplus net cash flow in low-growth markets",
      "mark": 1
    },
    {
      "id": "q4m-15-c2",
      "criterion": "Cash Cow concept applied to Unilever portfolio (Dove, Knorr, mature household staples)",
      "mark": 1
    },
    {
      "id": "q4m-15-c3",
      "criterion": "Explains redeployment of surplus cash to 'Build' Question Marks and Stars in high-growth sectors",
      "mark": 1
    },
    {
      "id": "q4m-15-c4",
      "criterion": "Reinvestment strategy applied to Unilever context (plant-based foods, organic skincare, brand portfolio renewal)",
      "mark": 1
    }
  ]
},
{
  "id": "q4m-16",
  "subunit": "bmt-toolkit",
  "questionNumber": "Question 51.1",
  "question": "Explain one advantage and one disadvantage for a manufacturing enterprise transitioning from a linear business model to a circular supply model.",
  "caseStimulus": "A multinational athletic footwear and apparel brand currently manufactures sneakers using virgin synthetic plastics, petroleum-based foams, and chemically treated dyes. Facing tightening European landfill regulations, escalating raw material volatility, and consumer boycotts, the board is evaluating a strategic transition toward a circular supply and resource recovery model using recycled ocean plastics and biodegradable algae.",
  "contextTitle": "Footwear Manufacturer: Transitioning to Circular Business Models",
  "marks": 4,
  "commandTerm": "Explain",
  "assessmentObjective": "AO2",
  "peelModelAnswer": {
    "point1": {
      "title": "Advantage: Shielding Against Volatility & Enhancing Brand Equity",
      "point": "A circular supply model significantly shields the manufacturer from raw material price volatility while creating a compelling, premium brand positioning.",
      "evidence": "By replacing petroleum-based foams and virgin plastics with recovered ocean plastics and renewable algae, the firm reduces its exposure to fluctuating crude oil commodity prices.",
      "explanation": "Furthermore, aligning manufacturing with ethical and environmental values appeals directly to environmentally conscious consumers willing to pay premium prices, attracting institutional ESG investors.",
      "link": "This circular transition protects gross profit margins from commodity shocks while driving consumer brand loyalty."
    },
    "point2": {
      "title": "Disadvantage: Heavy Upfront Capital Costs & Reverse Logistics Complexity",
      "point": "However, transitioning requires massive initial capital expenditures for material engineering and establishes complex, expensive reverse logistics networks.",
      "evidence": "The firm must redesign shoe assembly lines, invest in testing biodegradable adhesives, and create collection infrastructures to reclaim worn footwear from customers.",
      "explanation": "These elevated operational expenditures increase average unit production costs in the short run, potentially dampening net profit margins if consumer sales volume does not expand quickly.",
      "link": "Significant capital outlays create short-term cash flow strain before circular efficiencies are realized."
    }
  },
  "rubricChecklist": [
    {
      "id": "q4m-16-c1",
      "criterion": "Explains advantage of circular supply model (resource security, brand equity, price volatility hedge)",
      "mark": 1
    },
    {
      "id": "q4m-16-c2",
      "criterion": "Advantage applied to footwear manufacturing context (recycled ocean plastics, bio-algae, crude oil hedge)",
      "mark": 1
    },
    {
      "id": "q4m-16-c3",
      "criterion": "Explains disadvantage of circular supply model (high R&D outlays, reverse logistics, unit cost increases)",
      "mark": 1
    },
    {
      "id": "q4m-16-c4",
      "criterion": "Disadvantage applied to footwear context (re-engineering adhesives, collection networks, short-term margin pressure)",
      "mark": 1
    }
  ]
},
{
  id: 'q4m-17',
  subunit: '1.4-stakeholders',
  questionNumber: 'Question 4.1b',
  question: "Explain the difference between Nokia's shareholders and stakeholders.",
  caseStimulus:
    "Nokia was once the pride of Europe having been the market leader in the mobile phones industry from 1998 to 2008, enjoying up to 49.4% market share. In 2005, the Finnish company sold its one billionth mobile phone. By 2007, its market value was a staggering $150 billion, making it the 5th most valuable brand in the world.\n\nHowever, the huge popularity of Apple and Samsung smartphones eventually forced Nokia to be sold to Microsoft for 'just' €5.4bn ($7.3bn) in November 2013. An overwhelming 99.5% of Nokia's 3,900 shareholders voted in favour of the deal after seeing its share price drop by 93% and its market share continually decline to only 3%. The company's 32,000 employees who worked in the mobile phones division were transferred to Microsoft Mobile in early 2014.",
  contextTitle: "Nokia & Microsoft: Shareholders vs. Broader Stakeholders",
  marks: 4,
  commandTerm: 'Explain',
  assessmentObjective: 'AO2',
  peelModelAnswer: {
    point1: {
      title: 'Shareholders: Legal Equity Owners Seeking Financial Return',
      point: 'Shareholders are the legal owners of a limited liability company who hold equity shares, maintain statutory voting rights at AGMs, and seek returns through dividends and share price appreciation.',
      evidence: "In Nokia's context, there were 3,900 shareholders who owned the equity of the Finnish PLC; facing a 93% collapse in share price, an overwhelming 99.5% voted in favor of the €5.4bn sale to Microsoft.",
      explanation: 'Their primary objective is financial capital preservation and maximizing return on their invested risk capital.',
      link: 'Shareholders thus constitute a narrow, powerful sub-group of financial owners with statutory corporate governance authority.'
    },
    point2: {
      title: 'Stakeholders: The Broad Umbrella of All Impacted Groups',
      point: 'In contrast, stakeholders encompass all individuals, groups, and organizations with a direct interest in or impacted by the business operations, regardless of equity ownership.',
      evidence: "Beyond the 3,900 shareholders, Nokia's stakeholders included 32,000 mobile division employees transferred to Microsoft Mobile, component suppliers, Finnish taxpayers, the Finnish government, and millions of global customers.",
      explanation: 'Unlike shareholders who were concerned with salvaging capital, the 32,000 employees had stakes in job security and career preservation, while the Finnish government had a stake in national tax revenues and technological employment.',
      link: "All of Nokia's shareholders are stakeholders, but its 32,000 workers and suppliers are stakeholders without being shareholders."
    }
  },
  rubricChecklist: [
    {
      id: 'q4m-17-c1',
      criterion: 'Accurately defines shareholders as legal equity owners entitled to voting rights, dividends, and capital gains',
      mark: 1
    },
    {
      id: 'q4m-17-c2',
      criterion: "Shareholder concept applied to Nokia context (3,900 shareholders, 93% share price drop, 99.5% buyout vote)",
      mark: 1
    },
    {
      id: 'q4m-17-c3',
      criterion: 'Accurately defines stakeholders as the broad umbrella of all parties affected by or interested in the business',
      mark: 1
    },
    {
      id: 'q4m-17-c4',
      criterion: "Stakeholder concept applied to Nokia context (32,000 transferred employees, suppliers, Finnish government, customers)",
      mark: 1
    }
  ]
},
{
  id: 'q4m-18',
  subunit: '1.4-stakeholders',
  questionNumber: 'Adapted from Question 4.4c (textbook: Outline, 2 marks)',
  question: "Explain one source of conflict that arose between Skoda Auto's employees and senior directors during its European operations and international expansion.",
  caseStimulus:
    "Founded in 1895, Skoda Auto is one of the oldest automobile manufacturers in the world. In early 2007, the Czech company, which became part of the Volkswagen Group in 2000, entered China as part of its growth strategy. However, in the same year, its workforce in Europe went on strike over concerns regarding the remuneration of employees.\n\nIt was reported that industrial action cost Skoda Auto, the country's largest exporter, 60 million crowns ($2.9m) per day in lost output. Nevertheless, China became Skoda's main market; by 2013, the company had produced its 1 millionth car in China. Today, one in four Skoda cars is sold in China.",
  contextTitle: "Skoda Auto: Industrial Strike over Employee Remuneration",
  marks: 4,
  commandTerm: 'Explain',
  assessmentObjective: 'AO2',
  peelModelAnswer: {
    point1: {
      title: 'Core Conflict: Employee Remuneration vs. Growth Objectives',
      point: 'A major source of stakeholder conflict arose over remuneration: employees wanted better pay and benefits, whereas senior directors were pursuing a growth strategy and the profits wanted by the owners (the Volkswagen Group).',
      evidence: 'In early 2007 Skoda entered China as part of its growth strategy; in the same year its workforce in Europe went on strike over remuneration.',
      explanation: 'The firm\'s finances are limited, so money spent on higher pay is not available for growth or for the owners\' profits; the textbook notes that one group\'s demands (such as a greater share of profits) can mean cuts to staff benefits (p.58).',
      link: 'This clash of objectives led to industrial action that cost the company 60 million crowns ($2.9m) per day in lost output.'
    },
    point2: {
      title: 'Short-Term Operational Disruption vs. Long-Term Growth Objectives',
      point: "This conflict pitted employees' immediate objective of higher pay against management's strategic objective of international market development.",
      evidence: 'Workers exercised their collective bargaining leverage by halting assembly lines, threatening Skoda\'s status as the Czech Republic\'s largest exporter.',
      explanation: 'Senior executives were forced to recognize that ignoring workforce remuneration directly endangered output and delivery schedules, creating counterproductive operational losses.',
      link: 'The case does not say how the strike was settled, but China still became Skoda\'s main market, with its 1 millionth car produced there by 2013.'
    }
  },
  rubricChecklist: [
    {
      id: 'q4m-18-c1',
      criterion: 'Clearly identifies valid source of conflict (remuneration / pay demands vs growth and profit objectives)',
      mark: 1
    },
    {
      id: 'q4m-18-c2',
      criterion: 'Conflict accurately applied to Skoda Auto context (European assembly workers vs Volkswagen/Skoda directors)',
      mark: 1
    },
    {
      id: 'q4m-18-c3',
      criterion: 'Explains why the conflict occurred (finite corporate funds, competing priorities between short-term pay and expansion)',
      mark: 1
    },
    {
      id: 'q4m-18-c4',
      criterion: 'Analyzes business consequences of the conflict (industrial strike action, 60m crowns/day in lost output)',
      mark: 1
    }
  ]
},
{
  id: 'q4m-19',
  subunit: '1.5-growth-and-evolution',
  questionNumber: 'Question 5.1b',
  question: 'Describe two methods of internal growth that British discount retailer Poundland might use.',
  caseStimulus:
    "British discount retailer Poundland has built a reputation for internal growth. Founded in 1990, Poundland opened its 500th store in 2014 and had more than 800 stores at the start of 2022. Poundland, which sells most of its products for £1 ($1.40) or less, serves 7 million customers each week and has reported annual increases in profits by as much as 29%. Its growth strategy is to focus on expansion in Ireland, the Netherlands and the UK in order to gain greater market share.",
  contextTitle: 'Poundland: Methods of Internal Growth',
  marks: 4,
  commandTerm: 'Describe',
  assessmentObjective: 'AO2',
  peelModelAnswer: {
    point1: {
      title: 'Capital Expenditure on New Locations',
      point: 'Poundland can grow internally through increased capital expenditure (investment spending) on new stores in Ireland, the Netherlands and the UK, financed from retained profits or borrowing.',
      evidence: 'Poundland, founded in 1990, opened its 500th store in 2014 and had more than 800 stores at the start of 2022, serving 7 million customers each week.',
      explanation: 'Each new store is an expansion to a new location that reaches more customers, raising sales revenue without relying on outside organizations.',
      link: 'This supports Poundland\'s stated aim of gaining greater market share, although investment risks might not pay off.'
    },
    point2: {
      title: 'Price and Value for Money',
      point: 'A second internal growth method is using price and overall value for money to win more sales from existing and new customers.',
      evidence: 'Poundland sells most of its products for £1 ($1.40) or less and has reported annual increases in profits of as much as 29%.',
      explanation: 'In a highly competitive market, demand is price elastic, so low prices can generate proportionately more sales revenue; customers also judge value for money on quality and brand image, not price alone.',
      link: 'Offering strong value for money helps Poundland keep attracting its 7 million weekly customers and grow its sales revenue organically.'
    }
  },
  rubricChecklist: [
    {
      id: 'q4m-19-c1',
      criterion: 'Accurately describes first internal growth method (capital expenditure on new stores / locations)',
      mark: 1
    },
    {
      id: 'q4m-19-c2',
      criterion: 'Applies store expansion method directly to Poundland context (500th store in 2014, 800+ stores in 2022, expansion in Ireland, the Netherlands and the UK)',
      mark: 1
    },
    {
      id: 'q4m-19-c3',
      criterion: 'Accurately describes a second, distinct internal growth method (e.g. price / value for money, promotion, products, training)',
      mark: 1
    },
    {
      id: 'q4m-19-c4',
      criterion: 'Applies the second method to Poundland context (£1 price point, 7m weekly customers, profit growth of up to 29%)',
      mark: 1
    }
  ]
},
{
  id: 'q4m-20',
  subunit: '1.5-growth-and-evolution',
  questionNumber: 'Case study box, p.66 (Airbus A380)',
  question: 'Using the Airbus A380 program, explain one economy of scale and one potential diseconomy of scale for a large commercial aircraft manufacturer.',
  caseStimulus:
    "The Airbus A380, the world's largest passenger plane, has 49% more seating capacity than its rival Boeing 787 Dreamliner, yet burns 17% less fuel per seat. Hence, the average cost of fuel for Airbus is lower. This is particularly important for airline carriers operating in a highly competitive industry where fuel accounts for a large proportion of operating costs, and aircraft are hugely expensive ($418m per A380 vs $257m for Boeing 787). However, low demand from airline carriers (especially following the COVID-19 pandemic) meant that Airbus ceased to produce the A380 at the end of 2021.",
  contextTitle: 'Airbus A380: Mega-Scale Technical Economies vs. Coordination Diseconomies',
  marks: 4,
  commandTerm: 'Explain',
  assessmentObjective: 'AO2',
  peelModelAnswer: {
    point1: {
      title: 'Technical Economy of Scale: Fuel Efficiency per Passenger Seat',
      point: 'Airbus exploited technical economies of scale through engineering a super-jumbo double-decker airframe that maximizes aerodynamic and engine efficiency per unit of capacity.',
      evidence: 'The A380 offers 49% more seating capacity than the Boeing 787 while burning 17% less fuel per passenger seat.',
      explanation: 'Because the aircraft\'s fuel and other operating costs are spread across more passenger seats, the average fuel cost per seat is lower.',
      link: 'This technical economy lowers average operating costs for long-haul routes connecting high-density hub airports.'
    },
    point2: {
      title: 'Potential Internal Diseconomy of Scale: Lack of Control and Coordination',
      point: 'Conversely, a manufacturer operating on the scale of Airbus risks internal diseconomies of scale, such as a lack of control and coordination when operations are spread across different locations (p.68).',
      evidence: 'The case itself gives low demand from airline carriers, not diseconomies of scale, as the reason Airbus ceased A380 production at the end of 2021, so this point applies the general theory rather than a reported fact.',
      explanation: 'As a firm grows, the span of control widens, communication slows and coordinating operations in different locations becomes harder, which raises average costs.',
      link: 'Beyond the optimal level of output, such problems mean that being larger no longer lowers unit costs.'
    }
  },
  rubricChecklist: [
    {
      id: 'q4m-20-c1',
      criterion: 'Accurately defines and explains technical economy of scale with engine/seating efficiency mechanism',
      mark: 1
    },
    {
      id: 'q4m-20-c2',
      criterion: 'Applies technical economy to Airbus A380 data (49% greater capacity, 17% fuel burn reduction per seat, $418m cost)',
      mark: 1
    },
    {
      id: 'q4m-20-c3',
      criterion: 'Accurately defines and explains diseconomy of scale (coordination difficulties across multinational production sites)',
      mark: 1
    },
    {
      id: 'q4m-20-c4',
      criterion: 'Applies the diseconomy to a large aircraft manufacturer such as Airbus (coordination across locations) without misstating why A380 production ended (low demand)',
      mark: 1
    }
  ]
},
{
    id: 'q4m-A1-01',
    subunit: '1.2-types-of-business-entities',
    questionNumber: 'Textbook p.28 (A1)',
    question: 'Explain why a limited liability company must produce a Memorandum of Association and obtain a Certificate of Incorporation before it can begin trading.',
    contextTitle: 'Registering a Limited Company',
    marks: 4,
    commandTerm: 'Explain',
    assessmentObjective: 'AO2',
    peelModelAnswer: {
      point1: {
        title: 'Memorandum of Association: core registration details',
        point: 'The Memorandum of Association is a relatively brief document that must be produced and submitted before a limited company can begin trading.',
        evidence: 'It sets out the company\'s trading name, main purpose, registered business address and the amount of share capital invested.',
        explanation: 'These details define the company\'s identity and scope, which the authorities review before the company is allowed to trade.',
        link: 'Because the Certificate of Incorporation is issued only after these documents are accepted, the registration process is the route to trading as a limited company.'
      },
      point2: {
        title: 'Certificate of Incorporation: legal recognition',
        point: 'The Certificate of Incorporation is issued once the authorities are satisfied with the submitted documents and an application fee has been paid.',
        evidence: 'It recognises the business as a separate legal entity from its owners (shareholders) and allows it to start trading as a limited company.',
        explanation: 'Separate legal status means the company, not its shareholders, owns assets, signs contracts and is liable for its debts, so shareholders\' personal assets are protected.',
        link: 'Without the certificate the business cannot begin trading as a limited company, so the Memorandum and certificate together secure the owners\' limited liability.'
      }
    },
    rubricChecklist: [
      { id: 'q4m-A1-01-c1', criterion: 'Explains the Memorandum of Association as a brief document containing core registration details', mark: 1 },
      { id: 'q4m-A1-01-c2', criterion: 'Applies the Memorandum contents to the requirement: trading name, purpose, registered address, share capital', mark: 1 },
      { id: 'q4m-A1-01-c3', criterion: 'Explains the Certificate of Incorporation is issued after authorities are satisfied and a fee is paid', mark: 1 },
      { id: 'q4m-A1-01-c4', criterion: 'Explains the certificate recognises the company as a separate legal entity, allowing it to trade and protecting shareholders', mark: 1 }
    ]
  },
  {
    id: 'q4m-A1-02',
    subunit: '1.1-what-is-a-business',
    questionNumber: 'Textbook p.16 (A1)',
    question: 'Explain how identifying a niche in the market can help a new business overcome marketing problems.',
    caseStimulus: 'New businesses often struggle to attract customers away from well-established competitors, and small businesses may lack the expertise to supply the right products to the right customers at the right price.',
    contextTitle: 'Marketing Problems for New Businesses',
    marks: 4,
    commandTerm: 'Explain',
    assessmentObjective: 'AO2',
    peelModelAnswer: {
      point1: {
        title: 'A niche avoids head-on competition',
        point: 'Identifying a niche (or gap) in the market allows a new business to serve customers whose needs are not being fully met by established competitors.',
        evidence: 'The textbook cites easyJet and Ryanair, which identified the niche market for no-frills (budget) air travel early on.',
        explanation: 'Competing in an under-served segment reduces the need to attract customers away from entrenched rivals, which is a major start-up marketing challenge.',
        link: 'This helps the business avoid the poor sales and lack of profitability that marketing problems cause.'
      },
      point2: {
        title: 'Serving a gap builds loyalty over time',
        point: 'A business that meets a specific need well can gradually build the customer base it lacks at start-up.',
        evidence: 'The textbook notes that customer loyalty is built over a period of time, and that Amazon identified huge opportunities in using the Internet as a channel of distribution for books and other products in the 1990s.',
        explanation: 'Repeat purchases from loyal customers generate the sales and profitability a new business needs to survive.',
        link: 'Spotting an opportunity that others have missed is therefore the first step to solving a new business\'s marketing problems.'
      }
    },
    rubricChecklist: [
      { id: 'q4m-A1-02-c1', criterion: 'Defines a niche (or gap) as an under-served part of the market that a business can identify and fill', mark: 1 },
      { id: 'q4m-A1-02-c2', criterion: 'Applies the niche idea to the start-up problem of attracting customers from established competitors', mark: 1 },
      { id: 'q4m-A1-02-c3', criterion: 'Explains that a niche supports loyalty and repeat sales over time', mark: 1 },
      { id: 'q4m-A1-02-c4', criterion: 'Links the niche to sales and profitability, the outcomes of marketing problems', mark: 1 }
    ]
  },
{
    id: 'q4m-A2-01',
    subunit: '1.2-types-of-business-entities',
    questionNumber: 'A2-4m-01',
    question: 'Explain how the Grameen Bank meets the economic and social aims of the triple bottom line.',
    caseStimulus: 'In 1983, social entrepreneur Muhammad Yunus established the Grameen Bank in Dhaka, Bangladesh, to provide small loans (microfinance) to people living in poverty. Unlike commercial banks, the Grameen Bank does not require any collateral (financial security) from its borrowers. According to its website, over 97 percent of borrowers are women. The bank has assets in excess of $2.8bn and employs more than 20,000 workers.',
    contextTitle: 'Grameen Bank and the Triple Bottom Line',
    marks: 4,
    commandTerm: 'Explain',
    assessmentObjective: 'AO2',
    peelModelAnswer: {
      point1: {
        title: 'Economic Aim: Surplus Reinvested in the Business',
        point: 'The economic aim of a social enterprise is to earn a surplus and reinvest it back into the business for societal benefit.',
        evidence: 'The Grameen Bank has assets in excess of $2.8bn, which shows that it has grown into a substantial, sustainable organization.',
        explanation: 'A social enterprise cannot deliver its social good if it does not manage its financial health, so the surplus must be sufficient to keep the bank operating and lending.',
        link: 'Economic sustainability allows the Grameen Bank to keep providing loans to people in poverty over the long term.'
      },
      point2: {
        title: 'Social Aim: Benefits to People in Society',
        point: 'The social aim is to provide benefits to people in society, such as job opportunities and support for less-advantaged members of society.',
        evidence: 'The bank lends to people living in poverty without collateral, over 97 percent of its borrowers are women, and it employs more than 20,000 workers.',
        explanation: 'Lending without collateral reaches people who could not borrow from commercial banks, and the bank creates employment in the local economy.',
        link: 'The bank therefore meets its social aim by reducing poverty and creating jobs, which is the social benefit the triple bottom line requires.'
      }
    },
    rubricChecklist: [
      { id: 'q4m-A2-01-c1', criterion: 'Defines the economic aim as earning a surplus and reinvesting it in the business', mark: 1 },
      { id: 'q4m-A2-01-c2', criterion: 'Applies the economic aim to the Grameen Bank with evidence (assets over $2.8bn or the need for financial health)', mark: 1 },
      { id: 'q4m-A2-01-c3', criterion: 'Defines the social aim as benefits to people in society (jobs, support for the less advantaged)', mark: 1 },
      { id: 'q4m-A2-01-c4', criterion: 'Applies the social aim to the Grameen Bank with evidence (lending to the poor without collateral, 97% women borrowers, 20,000+ workers)', mark: 1 }
    ]
  },
  {
    id: 'q4m-A2-02',
    subunit: '1.3-business-objectives',
    questionNumber: 'A2-4m-02',
    question: 'Explain how an ethical code of practice could help a business avoid the kind of unethical treatment of staff seen in Case 3.1.',
    caseStimulus: 'In 2006, Indian Airlines (now merged with Air India) was heavily criticised by the mass media for grounding female flight attendants for being too overweight to travel. In 2010, female workers at Hooters, an American fast-food chain, filed lawsuits against the company after at least one worker was placed on weight probation. Many businesses adopt an ethical code of practice and publish it in their annual reports.',
    contextTitle: 'Weight Discrimination Cases and Ethical Codes of Practice',
    marks: 4,
    commandTerm: 'Explain',
    assessmentObjective: 'AO2',
    peelModelAnswer: {
      point1: {
        title: 'Clear Written Standards',
        point: 'An ethical code of practice documents the beliefs and philosophies of a business and states what is acceptable and unacceptable behaviour.',
        evidence: 'Indian Airlines was criticised in 2006 for grounding female flight attendants judged too overweight to travel, and Hooters faced lawsuits in 2010 after a worker was placed on weight probation.',
        explanation: 'A written code gives managers and employees clear guidance on expected behaviour, so decisions about staff are less likely to be made on unacceptable grounds.',
        link: 'Clear standards reduce the risk of the kind of discrimination that led to media criticism and lawsuits.'
      },
      point2: {
        title: 'Consistency Across the Workplace',
        point: 'A code of ethics provides a framework for consistency and uniformity in the workplace, because people hold different values.',
        evidence: 'The code is published in the business\'s annual reports, so both staff and external stakeholders can see the standard the business has set.',
        explanation: 'When the same ethical standards apply to every manager and employee, treatment of staff does not depend on individual values or judgement.',
        link: 'Published, consistent standards support the business\'s reputation and help protect the corporate image.'
      }
    },
    rubricChecklist: [
      { id: 'q4m-A2-02-c1', criterion: 'Defines an ethical code of practice as documented beliefs stating acceptable and unacceptable behaviour', mark: 1 },
      { id: 'q4m-A2-02-c2', criterion: 'Applies clear standards to the weight discrimination examples in the case', mark: 1 },
      { id: 'q4m-A2-02-c3', criterion: 'Explains consistency and uniformity across the workplace', mark: 1 },
      { id: 'q4m-A2-02-c4', criterion: 'Links the code to publication in annual reports and the corporate image', mark: 1 }
    ]
  },
{
  id: 'q4m-A3-01',
  subunit: '1.4-stakeholders',
  questionNumber: 'Box 4.1 / Case study 4.1',
  question: 'Explain how pressure groups can use lobbying and public relations to influence business behaviour.',
  caseStimulus:
    "Pressure groups consist of individuals with a common interest who seek to place demands on organizations to act in a particular way. Lobbying means using the power of pressure groups to influence key issues with employers, legal representatives and the government, such as petitioning the government to legislate against socially undesirable business activities. Public relations involves getting positive publicity about a specific opinion or cause. Pressure group campaigns such as anti-smoking or anti-littering have led to support from the general public, mass media and governments in many countries. For example, cigarette advertising is banned in Australia whilst littering carries a heavy financial and imprisonment penalty in Singapore. Animal protection groups, such as the World Wildlife Fund, use ethical marketing techniques to gain positive press coverage.",
  contextTitle: 'Pressure Groups in Practice: Anti-Smoking and Animal Welfare Campaigns',
  marks: 4,
  commandTerm: 'Explain',
  assessmentObjective: 'AO2',
  peelModelAnswer: {
    point1: {
      title: 'Lobbying: Pressuring Government to Legislate',
      point: 'Pressure groups use lobbying to influence employers, legal representatives and government on key issues, such as petitioning for legislation against socially undesirable business activities.',
      evidence: 'Anti-smoking campaigns have gained support from governments in many countries, and cigarette advertising is banned in Australia.',
      explanation: 'Once legislation is passed, businesses must change their behaviour whatever their own preferences.',
      link: 'Lobbying can therefore force a business to change its activities or objectives to comply with the law.'
    },
    point2: {
      title: 'Public Relations: Building Public Support',
      point: 'Pressure groups use public relations to gain positive publicity for their cause and to raise public awareness and support.',
      evidence: 'Animal protection groups such as the World Wildlife Fund use ethical marketing techniques to gain positive press coverage.',
      explanation: 'Positive coverage increases public concern about the issue, so customers, the media and governments put more pressure on businesses.',
      link: 'A business that ignores this pressure risks adverse publicity and damage to its corporate image.'
    }
  },
  rubricChecklist: [
    { id: 'q4m-A3-01-c1', criterion: 'Defines lobbying as using pressure group power to influence employers, legal representatives and government', mark: 1 },
    { id: 'q4m-A3-01-c2', criterion: 'Applies lobbying to anti-smoking campaigns and the Australian cigarette advertising ban', mark: 1 },
    { id: 'q4m-A3-01-c3', criterion: 'Defines public relations as getting positive publicity for a cause', mark: 1 },
    { id: 'q4m-A3-01-c4', criterion: 'Applies public relations to WWF ethical marketing and links it to pressure on businesses', mark: 1 }
  ]
},
{
  id: 'q4m-A3-02',
  subunit: '1.3-business-objectives',
  questionNumber: 'Question 3.4 (adapted)',
  question: 'Explain one internal factor and one external factor that could lead Walmart to change its business objectives.',
  caseStimulus:
    "Walmart is the world's largest retailer and largest private sector employer in America. The company has, on numerous occasions, been fined millions of dollars by the US government for violating air and water pollution legislation. Labour unions have criticised Walmart's unethical business practices, which have caused labour turnover rates of around 70% in some stores. Walmart has also been taken to court for alleged cases of not paying some employees for overtime, forcing them to work without proper rest breaks and discriminating against female workers for pay and promotion.",
  contextTitle: 'Walmart: Internal Crisis and External Pressure',
  marks: 4,
  commandTerm: 'Explain',
  assessmentObjective: 'AO2',
  peelModelAnswer: {
    point1: {
      title: 'Internal Factor: Crisis of Labour Turnover',
      point: 'An internal crisis, such as unexpectedly high labour turnover, can force a business to change its objectives.',
      evidence: 'Labour unions have criticised Walmart, and its labour turnover rates have reached around 70% in some stores.',
      explanation: 'A staffing crisis of this size disrupts operations and motivation, so management may need to revise objectives towards retaining staff and improving working conditions.',
      link: 'The internal crisis shifts the business\'s priorities away from expansion towards workforce stability.'
    },
    point2: {
      title: 'External Factor: Government Constraints',
      point: 'External factors such as government constraints change business objectives by requiring firms to meet legal standards.',
      evidence: 'Walmart has been fined millions of dollars by the US government for violating air and water pollution legislation.',
      explanation: 'Fines and legislation raise compliance costs and damage the firm\'s image, so environmental compliance becomes a priority objective.',
      link: 'Walmart\'s objectives may shift towards environmental protection to avoid further penalties.'
    }
  },
  rubricChecklist: [
    { id: 'q4m-A3-02-c1', criterion: 'Identifies an internal crisis (labour turnover) as an internal factor that changes objectives', mark: 1 },
    { id: 'q4m-A3-02-c2', criterion: 'Applies the 70% labour turnover case evidence to the internal factor', mark: 1 },
    { id: 'q4m-A3-02-c3', criterion: 'Identifies government constraints as an external factor that changes objectives', mark: 1 },
    { id: 'q4m-A3-02-c4', criterion: 'Applies the pollution fines to the external factor and explains the effect on objectives', mark: 1 }
  ]
},
{
    id: 'q4m-A4-01',
    subunit: '1.5-growth-and-evolution',
    questionNumber: '1.5-A4-Tiffany',
    question: 'Explain two advantages to Swatch of forming a joint venture with Tiffany & Co. rather than acquiring it.',
    caseStimulus: 'In 2007, Swatch struck a joint venture deal with jewellery chain Tiffany & Co. to make watches together under the brand Tiffany Watch Co. The contract was to last 20 years, giving Swatch the rights to sell watches in Tiffany\'s retail outlets and other high-end outlets. Disputes began in 2011 and the collaboration was cancelled. Swatch had accused Tiffany of blocking the development of their business, having already invested millions of dollars to develop the watches.',
    contextTitle: 'Swatch and Tiffany & Co. Joint Venture',
    marks: 4,
    commandTerm: 'Explain',
    assessmentObjective: 'AO2',
    peelModelAnswer: {
      point1: {
        title: 'Lower cost and risk of market entry',
        point: 'A joint venture allowed Swatch to reach Tiffany\'s high-end retail outlets without buying control of Tiffany.',
        evidence: 'The 20-year contract gave Swatch the rights to sell its watches in Tiffany\'s retail outlets and other high-end outlets.',
        explanation: 'A joint venture typically splits costs, responsibilities and profits between the partners, so the financial burden and risk are shared. An acquisition would require Swatch to buy a controlling interest, and external growth methods are generally more expensive than internal ones.',
        link: 'Swatch gained a premium retail channel while keeping its capital at lower risk.'
      },
      point2: {
        title: 'Keeping individual corporate identities',
        point: 'A joint venture lets both firms keep their corporate identities, unlike an acquisition in which one firm takes control of the other.',
        evidence: 'Swatch is the world\'s largest watchmaker, and it could continue to develop its own business while working with Tiffany on the joint brand.',
        explanation: 'Joint ventures allow organizations to enjoy the benefits of M&As without losing their individual corporate identities. This avoids the loss of control and culture clash that an acquisition could bring.',
        link: 'Swatch kept its own brand and management, which reduced the integration risk that an acquisition would have created.'
      }
    },
    rubricChecklist: [
      { id: 'r1', criterion: 'Identifies a valid advantage of a JV over an acquisition (lower cost/risk or keeping corporate identity)', mark: 1 },
      { id: 'r2', criterion: 'Explains the economic mechanism (shared costs and risks; control, identity and integration risk avoided)', mark: 1 },
      { id: 'r3', criterion: 'Applies the advantage to Swatch and Tiffany, using the case evidence (20-year contract, retail outlets, watchmaker)', mark: 1 },
      { id: 'r4', criterion: 'Gives a second, distinct advantage with explanation and link to Swatch', mark: 1 }
    ]
  },
  {
    id: 'q4m-A4-02',
    subunit: '1.5-growth-and-evolution',
    questionNumber: '1.5-A4-Star',
    question: 'Explain how a strategic alliance such as Star Alliance can allow airlines to gain economies of scale without forming a new legal entity.',
    caseStimulus: 'Star Alliance was set up in 1997 by five founding airlines to share the costs and benefits of airline operations. It has grown to 26 members and includes 40 non-voting affiliated carriers, which enables the alliance to serve almost every country. Members of a strategic alliance remain independent organizations and do not form a new legal entity.',
    contextTitle: 'Star Alliance: Strategic Alliance in the Airline Industry',
    marks: 4,
    commandTerm: 'Explain',
    assessmentObjective: 'AO2',
    peelModelAnswer: {
      point1: {
        title: 'Sharing operating costs',
        point: 'Member airlines can share operations so that their combined resources are used more efficiently.',
        evidence: 'Two airlines could collaborate by using a single full aeroplane, cutting the costs of airline crew and fuel, and splitting the profits.',
        explanation: 'Sharing a single aircraft spreads crew and fuel costs over more passengers, so the cost per passenger falls as the alliance operates on a larger scale.',
        link: 'Lower average costs allow the alliance members to compete on price or earn higher margins, without any merger.'
      },
      point2: {
        title: 'Operating on a larger scale and offering a wider network',
        point: 'A larger combined network gives members access to more customers and a wider range of value-added services.',
        evidence: 'Star Alliance has 26 members and 40 affiliated carriers, and before the pandemic carried 762.27 million passengers.',
        explanation: 'As the network becomes larger, more customers can be served through shared channels of distribution, and the alliance\'s fixed costs are spread over a larger number of passengers.',
        link: 'The larger scale of the alliance lowers unit costs and attracts customers, while members remain independent businesses.'
      }
    },
    rubricChecklist: [
      { id: 'r1', criterion: 'Identifies a valid source of economies of scale in a strategic alliance (shared operating costs or a larger network)', mark: 1 },
      { id: 'r2', criterion: 'Explains the mechanism: shared costs spread over more passengers or flights reduce average cost', mark: 1 },
      { id: 'r3', criterion: 'Applies the point to Star Alliance using case evidence (26 members, 40 affiliates, shared aircraft)', mark: 1 },
      { id: 'r4', criterion: 'Explains why this works without a new legal entity (members remain independent)', mark: 1 }
    ]
  },
{
    id: 'q4m-A5-01',
    subunit: '1.6-multinational-companies',
    questionNumber: 'Original question (Coca-Cola stimulus adapted from Question 6.1)',
    question: 'Explain two reasons why businesses may strive to become multinational companies.',
    caseStimulus: 'The Coca-Cola Company is the largest beverages company in the world, with annual sales revenue of over $37.3bn. It sells its drinks in more than 200 economies. Its brand awareness and brand loyalty have been secured by sponsorship of prominent sporting events such as the Olympic Games and the FIFA World Cup. The company has a long-established market presence in many countries, but operates in a mature market.',
    contextTitle: 'The Coca-Cola Company: Going Global',
    marks: 4,
    commandTerm: 'Explain',
    assessmentObjective: 'AO2',
    peelModelAnswer: {
      point1: {
        title: 'Increased customer base',
        point: 'Expanding internationally gives a business access to a larger customer base, which raises its sales revenue.',
        evidence: 'Coca-Cola sells its drinks in more than 200 economies, and it operates in a mature market, so customers in other countries are a source of growth.',
        explanation: 'More countries means more potential customers, so the total volume and value of sales can increase without the company having to grow its share in a saturated market.',
        link: 'A larger customer base strengthens the company\'s ability to earn sales revenue and to fund further expansion.'
      },
      point2: {
        title: 'Brand development and brand value',
        point: 'Operating on an international scale can enhance brand development and brand value.',
        evidence: 'Coca-Cola has secured brand awareness and brand loyalty through the sponsorship of the Olympic Games, the FIFA World Cup and other global events.',
        explanation: 'Global marketing strategies enhance brand recognition and brand loyalty, which strengthens the company\'s competitive advantage in overseas markets.',
        link: 'A globally recognized brand is a strong basis for entering new overseas markets.'
      }
    },
    rubricChecklist: [
      { id: 'q4m-A5-01-c1', criterion: 'Identifies the first reason (larger customer base or higher sales revenue)', mark: 1 },
      { id: 'q4m-A5-01-c2', criterion: 'Supports the first reason with evidence from the case (more than 200 economies)', mark: 1 },
      { id: 'q4m-A5-01-c3', criterion: 'Identifies a second, distinct reason (brand development and brand value)', mark: 1 },
      { id: 'q4m-A5-01-c4', criterion: 'Explains the second reason with evidence and a link to overseas success', mark: 1 }
    ]
  },
  {
    id: 'q4m-A5-02',
    subunit: '1.6-multinational-companies',
    questionNumber: 'Original question (stimulus from pp.90-91)',
    question: 'Explain two negative impacts of multinational companies on host countries.',
    caseStimulus: 'Walmart\'s sales revenues exceed the GDP of Nigeria and Pakistan, two of the world\'s most populous countries. In 2012, the French retailing giant Carrefour pulled out of Turkey, Poland, Romania, Malaysia, Indonesia and Singapore.',
    contextTitle: 'Market Power and Footloose MNCs',
    marks: 4,
    commandTerm: 'Explain',
    assessmentObjective: 'AO2',
    peelModelAnswer: {
      point1: {
        title: 'Market power and social responsibility',
        point: 'Large MNCs can have market power that host nations are unable to control, and their social responsibility is a concern for anti-globalization groups.',
        evidence: 'Walmart\'s sales revenues exceed the GDP of Nigeria and Pakistan.',
        explanation: 'Because of this sheer market power, host nations are often unable to control the actions of large MNCs. This market power can be challenged, especially if an MNC does little to support the local communities in which it operates.',
        link: 'The host country loses control over an MNC that is larger than its economy, which weakens its ability to protect local communities.'
      },
      point2: {
        title: 'Vulnerability: footloose MNCs',
        point: 'MNCs are not bound to a specific location and can leave a host country at very short notice when cost advantages change.',
        evidence: 'In 2012, Carrefour pulled out of Turkey, Poland, Romania, Malaysia, Indonesia and Singapore.',
        explanation: 'A sudden withdrawal reverses the benefits the MNC brought, such as investment and job creation, and leaves the host country without them.',
        link: 'Footloose MNCs make long-term planning for jobs, investment and tax revenue more difficult for host governments.'
      }
    },
    rubricChecklist: [
      { id: 'q4m-A5-02-c1', criterion: 'Identifies the first negative impact (market power or social responsibility)', mark: 1 },
      { id: 'q4m-A5-02-c2', criterion: 'Supports the first impact with the Walmart evidence (revenues exceed GDP of Nigeria and Pakistan)', mark: 1 },
      { id: 'q4m-A5-02-c3', criterion: 'Identifies a second, distinct negative impact (vulnerability or footloose behaviour)', mark: 1 },
      { id: 'q4m-A5-02-c4', criterion: 'Explains the second impact with the Carrefour evidence and a link to host-country planning', mark: 1 }
    ]
  },
  {
    id: 'q4m-A5-03',
    subunit: '1.5-growth-and-evolution',
    questionNumber: 'Question 5.8b',
    question: 'Explain two reasons for Pizza Hut\'s decision to use franchising as its main method of growth.',
    caseStimulus: 'Founded in 1958, Pizza Hut is the world\'s largest chain of pizza restaurants. Within a year of opening, the company launched its first franchise. Today, its operations span the globe with over 18,700 restaurants in over 95 countries. The company has a dedicated website with everything potential franchisees need to know about becoming a Pizza Hut franchisee.',
    contextTitle: 'Pizza Hut: Franchising as a Growth Strategy',
    marks: 4,
    commandTerm: 'Explain',
    assessmentObjective: 'AO2',
    peelModelAnswer: {
      point1: {
        title: 'Rapid growth without the high costs of internal growth',
        point: 'Franchising allows a business to grow nationally or internationally without the higher costs of internal growth or M&As, because the franchisee helps to finance the expansion.',
        evidence: 'Pizza Hut operates over 18,700 restaurants in over 95 countries, and it has a dedicated website to recruit potential franchisees.',
        explanation: 'Because franchisees pay the start-up costs of their own outlets, Pizza Hut does not have to fund each new restaurant from its own capital.',
        link: 'Pizza Hut can expand its presence quickly while keeping its own capital free for other uses.'
      },
      point2: {
        title: 'Avoiding running costs and earning royalty income',
        point: 'As franchisor, Pizza Hut does not have to worry about the running costs of each outlet, and it receives royalty payments from its franchisees.',
        evidence: 'Franchisors receive royalty payments, usually a percentage of sales revenues, and do not have to pay for recruitment, training, staff salaries or stock for each franchised outlet.',
        explanation: 'This means Pizza Hut earns income from each franchised restaurant without carrying the full cost of running it.',
        link: 'Regular royalty income supports the company\'s continued growth into new locations and countries.'
      }
    },
    rubricChecklist: [
      { id: 'q4m-A5-03-c1', criterion: 'Identifies the first reason (growth without high internal costs or M&As)', mark: 1 },
      { id: 'q4m-A5-03-c2', criterion: 'Supports the first reason with Pizza Hut evidence (18,700 restaurants, 95 countries, franchisee website)', mark: 1 },
      { id: 'q4m-A5-03-c3', criterion: 'Identifies a second, distinct reason (avoiding running costs or royalty income)', mark: 1 },
      { id: 'q4m-A5-03-c4', criterion: 'Explains the second reason with a link to Pizza Hut\'s growth', mark: 1 }
    ]
  },
{
    id: 'q4m-bmt-steeple-A6-01',
    subunit: 'bmt-steeple-analysis',
    questionNumber: '46.A6-4m-1',
    question: 'Explain how a business could cope with a recession.',
    contextTitle: 'Coping with a recession (Box 46.2)',
    marks: 4,
    commandTerm: 'Explain',
    assessmentObjective: 'AO2',
    peelModelAnswer: {
      point1: {
        title: 'Cost reductions protect cash flow',
        point: 'A business can reduce its costs to protect its cash flow during a recession.',
        evidence: 'Box 46.2 suggests cutting energy bills, finding alternative suppliers that offer better prices, relocating to cheaper premises, or making some staff redundant.',
        explanation: 'Sales fall in a recession, so lower costs keep money coming in to pay the business\'s bills. Poor cash flow is a common reason for closure in a trough.',
        link: 'This helps the business survive the downturn until recovery begins.'
      },
      point2: {
        title: 'Price cuts or branding sustain sales',
        point: 'A business can cut prices or rely on brand loyalty to keep customers buying.',
        evidence: 'People become more price sensitive during a recession, and customers stay loyal to a brand irrespective of changes in their incomes.',
        explanation: 'Lower prices appeal to price-sensitive customers, while brand loyalty keeps sales volume steady when incomes fall.',
        link: 'The business can protect its revenue and market share through the recession.'
      }
    },
    rubricChecklist: [
      { id: 'rc-1', criterion: 'Identifies a relevant recession strategy as a point (e.g., cost reduction)', mark: 1 },
      { id: 'rc-2', criterion: 'Explains how the strategy protects cash flow or sales during the downturn', mark: 1 },
      { id: 'rc-3', criterion: 'Develops a second, distinct strategy (e.g., price cuts, branding, outsourcing)', mark: 1 },
      { id: 'rc-4', criterion: 'Links each strategy to the business\'s survival or revenue', mark: 1 }
    ]
  },
{
    id: 'q4m-A7-01',
    subunit: 'bmt-business-plan',
    questionNumber: '48.A7.4',
    question: 'Explain how a business plan could help an entrepreneur obtain external finance.',
    caseStimulus: 'Denis Sagide is a recent Business Management graduate who plans to open a bakery in Nairobi, Kenya, as a sole trader. He has produced a detailed business plan to secure external finance to start the business (adapted from Question 48.1).',
    contextTitle: 'DS Bakery',
    marks: 4,
    commandTerm: 'Explain',
    assessmentObjective: 'AO2',
    peelModelAnswer: {
      point1: {
        title: 'Reassuring the lender',
        point: 'A business plan reassures lenders that the entrepreneur has researched the business idea and has reasons to support the proposal.',
        evidence: 'Denis has produced a detailed business plan for DS Bakery to secure external finance, and he has considered the risks and benefits of the venture.',
        explanation: 'Banks and business angels want to judge the chances of success and the ability to repay, so a well-researched plan lowers their uncertainty about lending.',
        link: 'This makes it more likely that DS Bakery obtains the external finance it needs to start.'
      },
      point2: {
        title: 'Showing how the loan will be managed',
        point: 'The finance section of the plan sets out proposed sources of finance, a break-even analysis and cash flow forecasts.',
        evidence: 'Table 48.1 lists these as contents of the finance component, and poor cash flow management is one of the main causes of business failure.',
        explanation: 'A lender needs to see how the business will be funded, when it will break even and how cash shortfalls will be covered before lending.',
        link: 'These forecasts reduce the perceived risk of default, which strengthens DS Bakery\'s case for funding.'
      }
    },
    rubricChecklist: [
      { id: 'rub-A7-01-a', criterion: 'Explains that a business plan reassures lenders or investors about the business idea.', mark: 1 },
      { id: 'rub-A7-01-b', criterion: 'Applies the point to DS Bakery using the case stimulus.', mark: 1 },
      { id: 'rub-A7-01-c', criterion: 'Explains the mechanism: lenders can judge the chances of success and the ability to repay.', mark: 1 },
      { id: 'rub-A7-01-d', criterion: 'Uses finance-section content (sources of finance, break-even, cash flow forecasts) as a second point.', mark: 1 }
    ]
  },
  {
    id: 'q4m-A7-02',
    subunit: 'bmt-descriptive-statistics',
    questionNumber: '50.A7.4',
    question: 'Examine how descriptive statistics might be of use to Esswood Campers.',
    caseStimulus: 'Nicola Esswood runs a camping site in New Plymouth, New Zealand. Sales are strong in summer and weak in winter. Her sales forecasts for the next twelve months are: Mar $3,500; Apr $3,000; May $3,000; Jun $2,500; Jul $2,800; Aug $2,600; Sep $2,900; Oct $3,000; Nov $3,600; Dec $4,500; Jan $4,200; Feb $4,000 (adapted from Question 50.2).',
    contextTitle: 'Esswood Campers',
    marks: 4,
    commandTerm: 'Examine',
    assessmentObjective: 'AO2',
    peelModelAnswer: {
      point1: {
        title: 'Averages as a planning benchmark',
        point: 'The mean and median summarise the twelve monthly forecasts into a single figure that Nicola can use as a benchmark for budgeting.',
        evidence: 'The forecasts total $39,600, so the mean is $3,300 a month (derived), and the median is $3,000 (derived).',
        explanation: 'A benchmark helps her compare each month with a typical level of sales and set a realistic budget.',
        link: 'However, the average hides the summer peak and the winter trough, so it must be read alongside other measures.'
      },
      point2: {
        title: 'Range to show seasonal spread',
        point: 'The range shows how widely monthly sales vary across the year.',
        evidence: 'Sales range from $2,500 in June to $4,500 in December, a range of $2,000 (derived).',
        explanation: 'A large range signals strong seasonality, so Nicola needs to plan cash flow and staffing for the winter months.',
        link: 'Descriptive statistics therefore support better decisions than an average alone, because the textbook notes that using the mode as the average monthly sales figure might not reveal large seasonal fluctuations (p.660).'
      }
    },
    rubricChecklist: [
      { id: 'rub-A7-02-a', criterion: 'Explains how an average (mean or median) summarises the forecast data.', mark: 1 },
      { id: 'rub-A7-02-b', criterion: 'Applies the point to Esswood Campers with a figure from the case.', mark: 1 },
      { id: 'rub-A7-02-c', criterion: 'Explains how the range or quartiles show the spread of sales across seasons.', mark: 1 },
      { id: 'rub-A7-02-d', criterion: 'Recognises the limitation that an average may hide seasonal fluctuations.', mark: 1 }
    ]
  }
];

// ============================================================================
// 2. SIX-MARK QUESTIONS (AO2/AO3 ANALYSIS & EVALUATION)
// ============================================================================

export const SIX_MARK_QUESTIONS: SixMarkQuestion[] = [
  {
    id: 'q6m-01',
    subunit: '1.1-what-is-a-business',
    questionNumber: 'Question 1.1b',
    question: 'Examine how business functions operate in an organization such as a school.',
    caseStimulus:
      'Education is big business. Schools can earn revenue from numerous sources, such as tuition fees (for fee-paying schools), grants from the government and fund-raising events. They might also lease out their facilities (such as classrooms, sports facilities, drama studios and swimming pools) during the evenings, weekends and school holidays.\n\nSchools use these revenues to finance their costs, such as staff salaries, utility bills and the maintenance of the buildings. In addition to school fees, parents might also have to pay for items such as school uniform, textbooks, stationery, sports equipment and food.',
    contextTitle: 'Functional Interdependence in School Operations',
    marks: 6,
    commandTerm: 'Examine',
    assessmentObjective: 'AO2/AO3',
    levelBreakdown: [
      {
        range: '1-2',
        descriptor: 'Simple listing of the four business functions (HRM, Finance, Operations, Marketing) without direct school context or operational detail.'
      },
      {
        range: '3-4',
        descriptor: 'Explains how 2 or 3 business functions operate in a school with some application, but lacks discussion of departmental interdependence or trade-offs.'
      },
      {
        range: '5-6',
        descriptor: 'Thorough examination of all four business functions applied specifically to the school context, highlighting deep functional interdependence and conflicting operational priorities.'
      }
    ],
    perspective1: {
      title: 'Operations Management and Human Resource Management (HRM)',
      points: [
        {
          subPoint: 'Curriculum Delivery & Classroom Scheduling (Operations)',
          elaboration: 'In a school, Operations Management forms the core service delivery system, responsible for scheduling timetables, delivering curriculum lessons, managing sports facilities and science laboratories, and maintaining campus health and safety.'
        },
        {
          subPoint: 'Faculty Recruitment & Staff Cost Dependency (HRM)',
          elaboration: 'Because education is an intensely labor-dependent service, operations relies fundamentally on Human Resource Management (HRM) to recruit, vet, train, and retain accredited teachers. As the case notes, the school\'s primary operating cost is "staff salaries"; if HRM fails to retain teachers, operational quality collapses, resulting in overcrowded classrooms.'
        }
      ]
    },
    perspective2: {
      title: 'Finance & Accounts and Marketing Interdependence',
      points: [
        {
          subPoint: 'Budgetary Control & Expense Financing (Finance)',
          elaboration: 'Finance and Accounts manages the school\'s financial resources—budgeting tuition fee collections, securing government grants, administering facility leasing, and controlling operating disbursements like "utility bills and building maintenance."'
        },
        {
          subPoint: 'Enrollment Promotion & Commercial Leasing (Marketing)',
          elaboration: 'Finance cannot generate revenue in isolation; it depends directly on Marketing to promote academic reputation, host open-house days, and advertise rentable facilities ("drama studios and swimming pools") during evenings and holidays. Without effective marketing, enrollment falls, creating cash deficits that force budget cuts on facilities and faculty.'
        }
      ]
    },
    synthesisAndEvaluation:
      'In conclusion, business functions in a school do not operate in functional silos; they are intensely interdependent. A decision made by the Finance department to curtail building maintenance or freeze salary bands directly hampers HRM\'s ability to retain accredited teachers and degrades Operations\' educational quality. Conversely, effective operational teaching and sporting achievements equip Marketing with compelling success stories to drive future enrollment. Therefore, institutional success relies entirely on cross-functional alignment, where financial constraints are harmonized with educational delivery.',
    rubricChecklist: [
      {
        id: 'q6m-01-c1',
        criterion: 'Accurate identification and explanation of core business functions (HRM, Finance, Operations, Marketing)',
        marks: 1
      },
      {
        id: 'q6m-01-c2',
        criterion: 'Detailed examination of Operations and HRM applied to school context (teaching delivery, staff salaries)',
        marks: 1
      },
      {
        id: 'q6m-01-c3',
        criterion: 'Detailed examination of Finance and Marketing applied to school context (tuition fees, facility leasing)',
        marks: 1
      },
      {
        id: 'q6m-01-c4',
        criterion: 'Balanced analysis demonstrating functional interdependence and trade-offs between departments',
        marks: 1
      },
      {
        id: 'q6m-01-c5',
        criterion: 'Explicit integration of case stimulus evidence throughout both perspectives',
        marks: 1
      },
      {
        id: 'q6m-01-c6',
        criterion: 'Coherent evaluative synthesis evaluating how cross-functional coordination determines institutional viability',
        marks: 1
      }
    ]
  },
  {
    id: 'q6m-02',
    subunit: '1.1-what-is-a-business',
    questionNumber: 'Question 1.2a & b',
    question:
      'Identify countries A, B, and C (France, Bangladesh, Philippines) and comparatively examine their economic sector employment distribution.',
    caseStimulus:
      'Study the data below and answer the questions that follow. A, B and C represent three countries: France, Bangladesh and the Philippines (although not necessarily in that order).\n\n| Sector | Country A (%) | Country B (%) | Country C (%) |\n| :--- | :---: | :---: | :---: |\n| Agriculture | 33 | 4 | 45 |\n| Manufacturing | 15 | 24 | 30 |\n| Services | 52 | 72 | 25 |\n\n(a) Identify the countries A, B and C. [3 marks]\n(b) With reference to the data above, explain your answer to Question 1.2 (a). [6 marks]',
    contextTitle: 'Sector Employment Distribution in France, Bangladesh & Philippines',
    marks: 9,
    commandTerm: 'Examine',
    assessmentObjective: 'AO2/AO3',
    levelBreakdown: [
      {
        range: '1-2',
        descriptor: 'Identifies general sector trends without quoting specific data percentages or linking them directly to national stages of economic development.'
      },
      {
        range: '3-4',
        descriptor: 'Explains the allocation of one or two countries using data percentages, but lacks comparative depth across primary, secondary, and tertiary sectors.'
      },
      {
        range: '5-6',
        descriptor: 'Rigorous, data-backed comparative examination justifying all three country identifications based on economic development patterns, deindustrialization, industrialization, and tertiary sector dominance.'
      }
    ],
    perspective1: {
      title: 'Economically Developed Post-Industrial Nation (Country B - France)',
      points: [
        {
          subPoint: 'Tertiary Dominance & Agricultural Mechanization',
          elaboration: 'Country B is conclusively France, representing an economically advanced, post-industrial developed nation. Economically developed countries exhibit a massive concentration of national labor in the tertiary (service) sector (72%), alongside minimal employment in primary agriculture (4%) due to extensive technological mechanization in farming.'
        },
        {
          subPoint: 'Automated Secondary Manufacturing Base',
          elaboration: 'France maintains a 24% manufacturing base, characteristic of high-technology, capital-intensive secondary industries. As national GDP per capita rises, consumer demand shifts from basic physical commodities toward intangible health, financial, leisure, and professional services, fully corroborating France\'s 72% tertiary profile.'
        }
      ]
    },
    perspective2: {
      title: 'Developing and Transitioning Economies (Country C - Bangladesh & Country A - Philippines)',
      points: [
        {
          subPoint: 'Agrarian Base & Garment Assembly Hub (Country C - Bangladesh)',
          elaboration: 'Country C represents Bangladesh, an emerging economy in the earlier phases of industrialization. It exhibits the highest agricultural employment at 45%, showing that nearly half the populace relies on primary farming. Notably, its manufacturing sector stands at 30%, which is significantly higher than Country A (15%) and Country B (24%), aligning directly with Bangladesh\'s global role as a prime labor-intensive textile and garment assembly hub.'
        },
        {
          subPoint: 'Transitional Economy & BPO Service Boom (Country A - Philippines)',
          elaboration: 'Country A corresponds to the Philippines, a middle-income developing nation. It displays a transitional structure: 33% in agriculture (reflecting ongoing rural farming) and 15% in manufacturing. Crucially, 52% of employment is situated in services, driven by the nation\'s global dominance in business process outsourcing (BPO), call centers, and telecommunications serving Western multinationals.'
        }
      ]
    },
    synthesisAndEvaluation:
      'In summary, the progression from Country C (Bangladesh: 45% primary, 30% secondary, 25% tertiary) to Country A (Philippines: 33% primary, 15% secondary, 52% tertiary) and Country B (France: 4% primary, 24% secondary, 72% tertiary) illustrates the structural economic transformation of labor along the chain of production. As an economy industrializes, labor migrates from agricultural extraction to secondary factory production; as national wealth and capital accumulation mature, deindustrialization occurs, and employment shifts predominantly to high-value tertiary and quaternary services.',
    rubricChecklist: [
      {
        id: 'q6m-02-c1',
        criterion: 'Correct identification of all three countries: A = Philippines, B = France, C = Bangladesh (Part a)',
        marks: 3
      },
      {
        id: 'q6m-02-c2',
        criterion: 'Accurate comparative analysis of Country B (France) citing 72% tertiary and 4% primary data',
        marks: 1
      },
      {
        id: 'q6m-02-c3',
        criterion: 'Accurate comparative analysis of Country C (Bangladesh) citing 45% agriculture and 30% manufacturing hub',
        marks: 1
      },
      {
        id: 'q6m-02-c4',
        criterion: 'Accurate comparative analysis of Country A (Philippines) citing transitional 33% primary and 52% BPO services',
        marks: 1
      },
      {
        id: 'q6m-02-c5',
        criterion: 'Detailed explanation of industrialization, mechanization, and deindustrialization drivers',
        marks: 1
      },
      {
        id: 'q6m-02-c6',
        criterion: 'Evaluative synthesis explaining the structural macroeconomic transformation of labor across sectors',
        marks: 2
      }
    ]
  },
  {
    id: 'q6m-03',
    subunit: '1.2-types-of-business-entities',
    questionNumber: 'Question 2.1b',
    question: 'Examine how housing provided by a housing cooperative might differ from that provided by a private sector business.',
    caseStimulus: 'Education, housing and healthcare services can be provided by both private sector businesses and the public sector.',
    contextTitle: 'Cooperative Housing vs Commercial Private Developers',
    marks: 6,
    commandTerm: 'Examine',
    assessmentObjective: 'AO2/AO3',
    levelBreakdown: [
      {
        range: '1-2',
        descriptor: 'Basic definitions of a cooperative and a private business with generalized remarks about rent prices.'
      },
      {
        range: '3-4',
        descriptor: 'Explains differences in aims, ownership, or pricing, but remains largely one-sided or fails to examine potential limitations of the cooperative model.'
      },
      {
        range: '5-6',
        descriptor: 'Balanced, nuanced examination analyzing differences in organizational objectives, governance, pricing structures, and maintenance quality, while weighing capital constraints of cooperatives against profit motives of private developers.'
      }
    ],
    perspective1: {
      title: 'Housing Cooperative: Social Mission, Cost-Based Rents & Democratic Empowerment',
      points: [
        {
          subPoint: 'Member Ownership & Democratic Governance',
          elaboration: 'A housing cooperative is a member-owned, for-profit social enterprise governed by the democratic principle of "one member, one vote." Resident members have equal voting rights over community rules, repair schedules, and rent adjustments, ensuring that decisions reflect tenant interests rather than outside investor returns.'
        },
        {
          subPoint: 'Cost-Based Pricing & Tenure Security',
          elaboration: 'Because the co-op\'s primary objective is affordable, stable shelter rather than maximizing shareholder dividends, rents are pegged directly to actual operational and maintenance costs rather than speculative market rates, shielding tenants from arbitrary evictions and predatory rent increases.'
        }
      ]
    },
    perspective2: {
      title: 'Private Sector Business: Commercial Capital Scaling vs. Profit Maximization',
      points: [
        {
          subPoint: 'Capital Mobilization & Luxury Amenities',
          elaboration: 'Private commercial property developers possess access to massive commercial loans and equity capital, enabling them to build large-scale housing complexes rapidly, implement cutting-edge smart building technologies, and offer premium amenities (concierges, fitness centers, secure parking) that cooperatives rarely afford.'
        },
        {
          subPoint: 'Profit Motive, Market Rents & Eviction Hazards',
          elaboration: 'However, private developers treat tenants as commercial customers; rent is set at whatever the market will bear. Failure to pay leads to immediate legal eviction, and maintenance can be deferred if landlords cut costs to protect net profit margins. Conversely, housing cooperatives suffer from capital constraints, slow volunteer committee governance, and long waiting lists.'
        }
      ]
    },
    synthesisAndEvaluation:
      'In conclusion, the fundamental difference centers on social utility versus commercial profitability. Housing cooperatives provide high tenure security, democratic empowerment, and below-market rental stability, making them superior for long-term community affordability. However, private sector housing delivers greater responsiveness to aggregate housing demand, faster construction scaling, and higher luxury specifications, albeit at the expense of tenant affordability and security of tenure.',
    rubricChecklist: [
      {
        id: 'q6m-03-c1',
        criterion: 'Demonstrates clear knowledge of cooperative entity structure and democratic governance ("one member, one vote")',
        marks: 1
      },
      {
        id: 'q6m-03-c2',
        criterion: 'Analyzes cooperative benefits: cost-based rental rates, tenure security, and community cohesion',
        marks: 1
      },
      {
        id: 'q6m-03-c3',
        criterion: 'Analyzes private commercial developer capabilities: capital access, fast scaling, and luxury specifications',
        marks: 1
      },
      {
        id: 'q6m-03-c4',
        criterion: 'Analyzes private sector drawbacks: profit maximization, market-driven rents, and eviction risk',
        marks: 1
      },
      {
        id: 'q6m-03-c5',
        criterion: 'Evaluates operational limitations of cooperatives: capital raising bottlenecks and committee delays',
        marks: 1
      },
      {
        id: 'q6m-03-c6',
        criterion: 'Concludes with balanced synthesis contrasting social affordability with commercial efficiency',
        marks: 1
      }
    ]
  },
  {
    id: 'q6m-04',
    subunit: '1.2-types-of-business-entities',
    questionNumber: 'Question 2.2b',
    question: 'Examine the costs and benefits to Cam Tran operating her business as a sole trader.',
    caseStimulus:
      'Cam Tran is a sole trader who operates a small florist shop called Flowers by Cam in Montpellier, France. She arranges and delivers flowers to local hospitals, hotels and schools in the local area. At times, she receives large orders for weddings and funerals. She is also busy as a single mother of two school-aged children.',
    contextTitle: 'Flowers by Cam: Sole Trader Structure',
    marks: 6,
    commandTerm: 'Examine',
    assessmentObjective: 'AO2/AO3',
    levelBreakdown: [
      {
        range: '1-2',
        descriptor: 'Lists generic advantages and disadvantages of sole traders (keeps profit, unlimited liability) with no mention of Cam\'s floral business or family circumstances.'
      },
      {
        range: '3-4',
        descriptor: 'Analyzes costs and benefits applied to the florist context, but lacks balance or fails to weigh her dual role as a business owner and single mother.'
      },
      {
        range: '5-6',
        descriptor: 'Comprehensive, balanced examination directly contrasting strategic autonomy and profit retention with unlimited liability, operational overload, and lack of continuity, tightly integrated with case facts.'
      }
    ],
    perspective1: {
      title: 'Strategic & Personal Benefits to Cam Tran',
      points: [
        {
          subPoint: 'Autonomy & Schedule Flexibility for Family',
          elaboration: 'Operating as a sole trader grants Cam complete operational autonomy over flower sourcing, pricing, and working hours without needing partner consent. This schedule flexibility is invaluable for managing her domestic commitments as a single mother of two school-aged children.'
        },
        {
          subPoint: '100% Profit Retention & Direct Client Relationships',
          elaboration: 'Cam retains 100% of all after-tax profits, providing strong financial motivation to capitalize on lucrative seasonal order spikes like weddings and funerals. Furthermore, delivering personally to local hospitals, hotels, and schools fosters close, loyal commercial relationships while maintaining full financial privacy.'
        }
      ]
    },
    perspective2: {
      title: 'Operational Vulnerabilities & Financial Costs',
      points: [
        {
          subPoint: 'Unlimited Liability Hazard',
          elaboration: 'Because Flowers by Cam is unincorporated, there is no legal distinction between Cam and her business. If a commercial contract defaults or debts accumulate, Cam carries unlimited liability, putting her personal savings and family home at risk of seizure by creditors.'
        },
        {
          subPoint: 'Operational Overload & Zero Continuity',
          elaboration: 'Cam must single-handedly juggle floral design, perishable stock management, physical deliveries, marketing, and accounting. During large wedding and funeral spikes, the workload becomes crushing. Crucially, as a sole operator, if Cam falls ill, the business has zero continuity and stops trading immediately, jeopardizing household income.'
        }
      ]
    },
    synthesisAndEvaluation:
      'In conclusion, the sole trader structure suits Cam Tran\'s current small-scale local operating model by granting her the scheduling agility required to raise two school-aged children while capturing all financial profits. However, as wedding order volumes grow and commercial contracts expand, managing perishable inventory, physical deliveries, and unlimited liability single-handedly becomes unsustainable. In the medium term, Cam should convert the business into a private limited company (Ltd) or hire assistants to shield her personal assets and secure operational continuity.',
    rubricChecklist: [
      {
        id: 'q6m-04-c1',
        criterion: 'Demonstrates sound knowledge of sole trader legal structure and unlimited liability',
        marks: 1
      },
      {
        id: 'q6m-04-c2',
        criterion: 'Analyzes strategic benefits applied to Cam (scheduling flexibility for 2 children, 100% profit retention)',
        marks: 1
      },
      {
        id: 'q6m-04-c3',
        criterion: 'Analyzes customer relationship benefits (direct deliveries to local hospitals, hotels, schools)',
        marks: 1
      },
      {
        id: 'q6m-04-c4',
        criterion: 'Analyzes operational vulnerabilities (excessive workload during wedding spikes, perishable floral inventory)',
        marks: 1
      },
      {
        id: 'q6m-04-c5',
        criterion: 'Analyzes critical risks: unlimited liability threatening personal home and lack of business continuity if ill',
        marks: 1
      },
      {
        id: 'q6m-04-c6',
        criterion: 'Coherent evaluative conclusion weighing short-term flexibility against medium-term Ltd incorporation',
        marks: 1
      }
    ]
  },
  {
    id: 'q6m-05',
    subunit: '1.3-business-objectives',
    questionNumber: 'Question 3.2c',
    question: 'Examine the barriers that might prevent Lenovo meeting its objectives.',
    caseStimulus:
      'Chinese multinational technology company Lenovo acquired the personal computers division of IBM in 2005. Lenovo\'s goal was to establish itself outside of the Asian market by owning IBM\'s globally recognized brands such as ThinkPad laptops. Lenovo is committed to four key values: Customer service, Trust and integrity, Teamwork across cultures, Innovation and entrepreneurial spirit.\n\nLenovo strives to increase its market presence by sponsoring key sporting events and teams, such as McLaren, the British Formula One Team, the Williams Formula One racing team, the National Basketball Association (NBA) and the 2008 Beijing Olympic Games. In 2012, Lenovo became the official sponsor of the National Football League (NFL), its largest sponsorship in America. Its strategy has helped the company to gain market share around the world.',
    contextTitle: 'Lenovo Global Objectives & Strategic Barriers',
    marks: 6,
    commandTerm: 'Examine',
    assessmentObjective: 'AO2/AO3',
    levelBreakdown: [
      {
        range: '1-2',
        descriptor: 'Descriptive list of barriers (competition, lack of money) without application to Lenovo\'s PC business or global sponsorships.'
      },
      {
        range: '3-4',
        descriptor: 'Explains two barriers applied to Lenovo (high sponsorship costs and cultural integration), but lacks analytical depth or counterbalancing considerations.'
      },
      {
        range: '5-6',
        descriptor: 'Sophisticated examination of multiple internal and external barriers confronting Lenovo (cultural integration, aggressive PC rivalry, escalating sponsorship overhead, technological substitution), evaluating their relative severity against mitigations.'
      }
    ],
    perspective1: {
      title: 'Internal Barriers: Post-Merger Cultural Integration & Fixed Marketing Overhead',
      points: [
        {
          subPoint: 'Cross-Cultural Friction & Governance Differences',
          elaboration: 'Acquiring IBM\'s PC division required fusing two different corporate cultures—a Chinese technology firm and a long-established American multinational. Despite championing "teamwork across cultures," friction in leadership styles, decision protocols, and communication channels can slow product innovation and operational responsiveness.'
        },
        {
          subPoint: 'Heavy Fixed Sponsorship Commitments vs. ROI',
          elaboration: 'Lenovo committed massive financial capital to high-profile sports marketing (McLaren F1, Williams F1, NBA, Beijing Olympics, and the NFL). Sponsoring the NFL represented its single largest marketing outlay in the US. If consumer conversion softens or enterprise clients look past sports marketing, these heavy fixed marketing commitments deplete cash reserves needed for technical R&D.'
        }
      ]
    },
    perspective2: {
      title: 'External Barriers: Hyper-Competition, Technological Disruption & Geopolitics',
      points: [
        {
          subPoint: 'Aggressive PC Rivalry & Margin Erosion',
          elaboration: 'Lenovo operates in a saturated global PC industry against formidable rivals like Dell, HP, Apple, and Asus. Intense price competition on commodity laptops compresses gross profit margins, eroding Lenovo\'s pricing power and constraining retained profits.'
        },
        {
          subPoint: 'Hardware Substitution, Chip Bottlenecks & Geopolitics',
          elaboration: 'Consumer demand is continuously substituting traditional PC laptops with tablets, smartphones, and cloud devices. Furthermore, global semiconductor chip shortages, supply chain disruptions, and US-China geopolitical tensions regarding technology standards threaten Lenovo\'s lucrative enterprise hardware contracts in Western governmental and corporate markets.'
        }
      ]
    },
    synthesisAndEvaluation:
      'In conclusion, while Lenovo\'s sports sponsorship strategy has successfully built global brand awareness, external market saturation and geopolitical friction pose existential threats to its market share objectives. The critical barrier is not merely marketing visibility, but internal product innovation. To ensure sustainable long-term success, Lenovo must embody its core value of "innovation and entrepreneurial spirit" by diversifying beyond commodity laptop hardware into high-margin cloud infrastructure, enterprise servers, and AI solutions, ensuring it is not out-innovated by rivals.',
    rubricChecklist: [
      {
        id: 'q6m-05-c1',
        criterion: 'Identifies internal organizational barriers (post-merger cross-cultural integration between IBM and Lenovo)',
        marks: 1
      },
      {
        id: 'q6m-05-c2',
        criterion: 'Analyzes internal financial barriers (heavy fixed marketing expenditures across NFL, NBA, and F1)',
        marks: 1
      },
      {
        id: 'q6m-05-c3',
        criterion: 'Identifies external competitive barriers (aggressive pricing and rivalry from Dell, HP, Apple)',
        marks: 1
      },
      {
        id: 'q6m-05-c4',
        criterion: 'Analyzes external technological and macro barriers (device substitution, chip shortages, geopolitics)',
        marks: 1
      },
      {
        id: 'q6m-05-c5',
        criterion: 'Integrates specific case facts and core company values ("teamwork across cultures", "innovation")',
        marks: 1
      },
      {
        id: 'q6m-05-c6',
        criterion: 'Coherent evaluative synthesis weighing marketing visibility against long-term R&D diversification',
        marks: 1
      }
    ]
  },
  {
    id: 'q6m-06',
    subunit: 'bmt-swot-analysis',
    questionNumber: 'Original question (based on pp.609-610; textbook Question 44.1 is the Kidzplay S/W/O/T exercise)',
    question: 'Examine the usefulness and limitations of SWOT analysis as a strategic planning tool for a growing business.',
    caseStimulus:
      'SWOT analysis is widely used by commercial businesses for strategic planning due to its visual simplicity. However, business theorists and critics argue that it is overly simplistic, static, and prone to subjective managerial bias.',
    contextTitle: 'SWOT Analysis: Diagnostic Utility & Methodological Flaws',
    marks: 6,
    commandTerm: 'Examine',
    assessmentObjective: 'AO2/AO3',
    levelBreakdown: [
      {
        range: '1-2',
        descriptor: 'Defines the four quadrants of SWOT with generic comments on business planning.'
      },
      {
        range: '3-4',
        descriptor: 'Explains benefits and drawbacks of SWOT analysis, but remains largely theoretical without concrete business context or strategic synthesis.'
      },
      {
        range: '5-6',
        descriptor: 'Rigorous, balanced examination evaluating both the practical planning utility and methodological limitations of SWOT analysis, demonstrating why it must be integrated with tools like STEEPLE and Ansoff.'
      }
    ],
    perspective1: {
      title: 'Planning Utility: Holistic Synthesis & Strategy Formulation',
      points: [
        {
          subPoint: 'Comprehensive Internal and External Environmental Audit',
          elaboration: 'SWOT analysis provides significant diagnostic utility by forcing managers to look simultaneously inward at operational competencies (Strengths like proprietary patents, strong brand equity, liquid reserves) and deficiencies (Weaknesses like liquidity shortages, outdated machinery), while scanning the external macro-environment for Opportunities and Threats.'
        },
        {
          subPoint: 'Cross-Functional Strategy Formulation (Offensive, Defensive, Reorientation, Survival)',
          elaboration: 'By cross-referencing quadrants (such as pairing internal Strengths with external Opportunities to craft offensive strategies, Figure 44.2), managers systematically design growth moves that exploit core capabilities. Its 2x2 visual clarity encourages collaborative strategic dialogue across marketing, finance, and operations directors without requiring complex statistical modeling.'
        }
      ]
    },
    perspective2: {
      title: 'Methodological Limitations: Subjectivity, Static Snapshot & Zero Weighting',
      points: [
        {
          subPoint: 'Subjective Managerial Bias & Over-Optimism',
          elaboration: 'SWOT is predominantly qualitative and vulnerable to cognitive confirmation bias. Managers frequently overstate internal strengths to protect departmental prestige while downplaying or concealing critical internal weaknesses, leading to flawed strategic conclusions.'
        },
        {
          subPoint: 'Static Cross-Sectional Snapshot & Lack of Quantification',
          elaboration: 'A standard SWOT matrix represents a static snapshot in time that quickly becomes obsolete in volatile markets characterized by rapid tech innovation, fluctuating exchange rates, and competitor moves. Crucially, it assigns zero numerical probabilities or monetary weights to listed factors, leaving leaders unable to determine whether a major opportunity outweighs an existential threat.'
        }
      ]
    },
    synthesisAndEvaluation:
      'In conclusion, SWOT analysis is an exceptional diagnostic starting framework for initial brainstorming and environmental scanning, but it is deeply insufficient if relied upon in isolation. To make rigorous, capital-intensive investment decisions, executive leaders must pair SWOT with macro-scanning frameworks like STEEPLE analysis (to substantiate external opportunities and threats), alongside tools that do what SWOT cannot: decision trees and force field analysis add quantitative assessment and help to prioritise issues (p.610), while the Ansoff matrix frames the growth options (although it does not quantify their risks either).',
    rubricChecklist: [
      {
        id: 'q6m-06-c1',
        criterion: 'Demonstrates accurate knowledge of SWOT quadrants and internal vs external boundaries',
        marks: 1
      },
      {
        id: 'q6m-06-c2',
        criterion: 'Analyzes planning utility: holistic environmental audit and visual executive simplicity',
        marks: 1
      },
      {
        id: 'q6m-06-c3',
        criterion: 'Analyzes strategic formulation utility: pairing quadrants (e.g. S-O offensive strategies)',
        marks: 1
      },
      {
        id: 'q6m-06-c4',
        criterion: 'Analyzes methodological limitation: executive subjectivity and confirmation bias',
        marks: 1
      },
      {
        id: 'q6m-06-c5',
        criterion: 'Analyzes structural limitation: static temporal snapshot and lack of quantitative financial weighting',
        marks: 1
      },
      {
        id: 'q6m-06-c6',
        criterion: 'Evaluative synthesis concluding that SWOT must be integrated with STEEPLE and quantitative tools',
        marks: 1
      }
    ]
  },
  {
    id: 'q6m-07',
    subunit: 'bmt-ansoff-matrix',
    questionNumber: 'Original question (based on pp.611-614; Chapter 45 has only Questions 45.1 and 45.2)',
    question: 'Examine the strategic risks and rewards of an Ansoff diversification strategy compared to market penetration.',
    caseStimulus:
      'The Ansoff Matrix categorizes corporate growth pathways across products and markets. Market penetration represents the lowest-risk quadrant, focusing on existing markets and existing products. In contrast, diversification represents the highest-risk quadrant, requiring completely new products targeted at completely new markets.',
    contextTitle: 'Ansoff Matrix: Market Penetration vs Diversification',
    marks: 6,
    commandTerm: 'Examine',
    assessmentObjective: 'AO2/AO3',
    levelBreakdown: [
      {
        range: '1-2',
        descriptor: 'Simple identification that market penetration is safe and diversification is risky.'
      },
      {
        range: '3-4',
        descriptor: 'Explains risks and rewards of both quadrants with moderate depth, but lacks balanced analytical comparison.'
      },
      {
        range: '5-6',
        descriptor: 'Detailed, balanced examination contrasting operational safety and saturation limits of market penetration against transformative rewards and catastrophic failure risks of diversification, concluding with a nuanced strategic synthesis.'
      }
    ],
    perspective1: {
      title: 'Market Penetration: Operational Certainty vs. Saturation Limits',
      points: [
        {
          subPoint: 'Low Risk & Brand Exploitation (Rewards)',
          elaboration: 'Market penetration (selling existing products to existing markets) is the lowest-risk growth strategy in Ansoff\'s framework. The business capitalizes on its established brand reputation, operational manufacturing competencies, and existing customer loyalty. By utilizing aggressive marketing, price discounts, or loyalty schemes, the firm captures market share from rivals without incurring high R&D or factory retooling expenses.'
        },
        {
          subPoint: 'Market Saturation & Retaliatory Price Wars (Risks)',
          elaboration: 'However, market penetration is severely constrained by market saturation ceilings. If the existing industry reaches maturity, aggressive discounting triggers destructive price wars that erode profit margins. Furthermore, placing all corporate capital into a single mature product category exposes the business to existential risk if consumer tastes suddenly shift.'
        }
      ]
    },
    perspective2: {
      title: 'Diversification: Strategic Portfolio Resilience vs. Double Unfamiliarity',
      points: [
        {
          subPoint: 'Escaping Declining Industries & Risk Spreading (Rewards)',
          elaboration: 'In sharp contrast, Diversification (new products in new markets) enables companies to escape saturated or declining core industries. Successful diversification unlocks lucrative new revenue streams and spreads systemic business risk across uncorrelated industries (such as a conglomerate operating in both transport and entertainment).'
        },
        {
          subPoint: 'The Double Unfamiliarity Hazard & Capital Destruction (Risks)',
          elaboration: 'However, diversification carries extreme commercial risk due to "double unfamiliarity"—the firm lacks technical manufacturing experience for the new product and has zero customer insight or brand credibility in the new market segment. Lacking established distribution channels, capital outlays for R&D, market entry, and promotional launch are enormous, resulting in historically high commercial failure rates.'
        }
      ]
    },
    synthesisAndEvaluation:
      'In conclusion, the strategic choice between market penetration and diversification hinges upon the firm\'s market lifecycle stage and free cash flow reserves. In growing or stable core markets, market penetration is the prudent, capital-efficient choice to consolidate industry dominance. Diversification should only be pursued by well-capitalized corporations facing terminal saturation in their core operations, and should ideally be executed via joint ventures or corporate acquisitions rather than greenfield organic development to mitigate operational unfamiliarity.',
    rubricChecklist: [
      {
        id: 'q6m-07-c1',
        criterion: 'Demonstrates clear knowledge of Ansoff dimensions (Products vs Markets) and the risk continuum',
        marks: 1
      },
      {
        id: 'q6m-07-c2',
        criterion: 'Analyzes market penetration rewards: operational certainty, brand leveraging, economies of scale',
        marks: 1
      },
      {
        id: 'q6m-07-c3',
        criterion: 'Analyzes market penetration risks: market saturation ceiling and retaliatory price wars',
        marks: 1
      },
      {
        id: 'q6m-07-c4',
        criterion: 'Analyzes diversification rewards: escaping dying sectors, creating new revenue, risk spreading',
        marks: 1
      },
      {
        id: 'q6m-07-c5',
        criterion: 'Analyzes diversification risks: "double unfamiliarity", high failure rates, massive capital destruction',
        marks: 1
      },
      {
        id: 'q6m-07-c6',
        criterion: 'Coherent evaluative synthesis weighing market maturity, corporate capital reserves, and acquisition entry',
        marks: 1
      }
    ]
  },
{
  "id": "q6m-08",
  "subunit": "bmt-steeple-analysis",
  "questionNumber": "Original question (based on pp.617-633; Chapter 46 has Questions 46.1-46.7)",
  "question": "Examine the usefulness and limitations of STEEPLE analysis as a strategic planning tool for a multinational business expanding into a foreign market.",
  "caseStimulus": "A European electric vehicle (EV) manufacturer is evaluating plans to establish manufacturing facilities and retail networks in an emerging Southeast Asian market. The target nation offers high GDP growth and low labor costs, but exhibits political regime volatility, frequent revisions to foreign direct investment (FDI) tax codes, and an underdeveloped national electrical charging grid.",
  "contextTitle": "EV Manufacturer: Foreign Expansion & STEEPLE Evaluation",
  "marks": 6,
  "commandTerm": "Examine",
  "assessmentObjective": "AO2/AO3",
  "levelBreakdown": [
    {
      "range": "1-2",
      "descriptor": "Defines STEEPLE dimensions with generic, theoretical comments on foreign market entry."
    },
    {
      "range": "3-4",
      "descriptor": "Explains practical usefulness and drawbacks of STEEPLE analysis applied to the foreign expansion context, but lacks balanced evaluative synthesis."
    },
    {
      "range": "5-6",
      "descriptor": "Rigorous, balanced examination evaluating both the proactive environmental auditing benefits and structural limitations of STEEPLE analysis, concluding with strategic synthesis."
    }
  ],
  "perspective1": {
    "title": "Diagnostic Utility & Proactive Risk Auditing",
    "points": [
      {
        "subPoint": "Technological & Infrastructure Vulnerability Identification",
        "elaboration": "STEEPLE analysis provides exceptional strategic utility by systematically uncovering multidimensional macro risks before capital is irreversibly committed. In the EV context, examining Technological factors exposes that the host country's electrical grid cannot support rapid consumer adoption, alerting executives to adapt product engineering (e.g., hybrid battery options) or invest in decentralized solar charging infrastructure."
      },
      {
        "subPoint": "Political & Legal Compliance Pre-emption",
        "elaboration": "Simultaneously, auditing Political and Legal dimensions reveals volatile foreign direct investment (FDI) tax codes and potential ownership restrictions. Identifying these legal constraints early allows the European manufacturer to structure a joint venture with a domestic partner, securing local political goodwill and safeguarding against unexpected statutory asset seizures."
      }
    ]
  },
  "perspective2": {
    "title": "Methodological Deficiencies & Dynamic Environmental Limitations",
    "points": [
      {
        "subPoint": "Static Obsolescence & Qualitative Bias",
        "elaboration": "Conversely, STEEPLE analysis represents a static snapshot that quickly becomes obsolete in volatile emerging markets where geopolitical alignments and tax laws change overnight. Furthermore, compiling information across seven broad domains produces enormous qualitative data overload, creating confirmation bias where managers selectively emphasize favorable economic growth while downplaying political instability."
      },
      {
        "subPoint": "Absence of Quantitative Financial Payoffs",
        "elaboration": "Crucially, although each opportunity and threat can be weighted (p.619), STEEPLE does not calculate financial payoffs\u2014it cannot produce net present value (NPV), payback periods, or the exact probability of political expropriation, and it does not suggest a strategy (p.633). It tells executives what environmental factors exist, but cannot prescribe whether the multi-million-dollar investment will yield an acceptable return on capital."
      }
    ]
  },
  "synthesisAndEvaluation": "In conclusion, STEEPLE analysis is an indispensable diagnostic framework for initial environmental scanning, but it is fundamentally insufficient if relied upon in isolation. To make a prudent capital commitment, executive management must synthesize qualitative STEEPLE findings with a quantitative tool such as Decision Trees (to calculate probability-weighted financial payoffs under political risk) and with the Ansoff Matrix (to frame the choice between market development and diversification, although Ansoff does not quantify risks either). Ultimately, the usefulness of STEEPLE depends on whether the company updates its environmental scanning continuously and pairs it with dynamic contingency planning rather than treating it as a static one-off report.",
  "rubricChecklist": [
    {
      "id": "q6m-08-c1",
      "criterion": "Demonstrates accurate knowledge of STEEPLE dimensions and external macro scanning",
      "marks": 1
    },
    {
      "id": "q6m-08-c2",
      "criterion": "Analyzes practical usefulness of STEEPLE in mitigating foreign expansion risks (grid infrastructure, legal compliance)",
      "marks": 1
    },
    {
      "id": "q6m-08-c3",
      "criterion": "Analyzes methodological limitations of STEEPLE (static obsolescence, qualitative bias, lack of quantitative payoffs)",
      "marks": 1
    },
    {
      "id": "q6m-08-c4",
      "criterion": "Evaluates the balance between qualitative environmental scanning and financial quantitative decision modeling",
      "marks": 1
    },
    {
      "id": "q6m-08-c5",
      "criterion": "Deeply applied throughout to foreign EV manufacturing expansion context",
      "marks": 1
    },
    {
      "id": "q6m-08-c6",
      "criterion": "Coherent evaluative synthesis concluding that STEEPLE must be paired with quantitative tools (Decision Trees) and dynamic updates",
      "marks": 1
    }
  ]
},
{
  "id": "q6m-09",
  "subunit": "bmt-toolkit",
  "questionNumber": "Question 49.2",
  "question": "Evaluate whether a commercial business should rely primarily on quantitative decision trees when choosing between major capital investment projects.",
  "caseStimulus": "A commercial logistics and freight corporation is deciding between two mutually exclusive capital investments: Option 1 involves investing $40 million to automate its primary fulfillment center with robotics, yielding an estimated 70% probability of high demand ($70M payoff) and 30% probability of low demand ($20M payoff). Option 2 involves acquiring a regional courier fleet for $25 million with uncertain regulatory approval. The CFO advocates choosing solely based on the highest Net Expected Monetary Value (EMV).",
  "contextTitle": "Logistics Corporation: Decision Tree Appraisal vs Qualitative Reality",
  "marks": 6,
  "commandTerm": "Evaluate",
  "assessmentObjective": "AO2/AO3",
  "levelBreakdown": [
    {
      "range": "1-2",
      "descriptor": "Defines decision trees and EMV with basic calculation comments."
    },
    {
      "range": "3-4",
      "descriptor": "Analyzes the mathematical advantages and limitations of decision trees, but lacks balanced strategic evaluation of qualitative factors."
    },
    {
      "range": "5-6",
      "descriptor": "Balanced, sophisticated evaluation weighing quantitative EMV precision against qualitative human, ethical, and competitive variables, culminating in a nuanced decision verdict."
    }
  ],
  "perspective1": {
    "title": "Objective Scientific Modeling & Probability Discipline",
    "points": [
      {
        "subPoint": "Rigorous Risk-Adjusted Payoff Calculation",
        "elaboration": "Decision trees provide an objective, scientifically disciplined decision framework that forces executives to quantify probability and risk rather than relying on gut instinct. Calculating Net Expected Monetary Value for Option 1 ([0.70 x $70M + 0.30 x $20M] - $40M = $55M - $40M = $15M Net EMV) establishes an unambiguous financial benchmark that accounts for uncertain future states of nature."
      },
      {
        "subPoint": "Executive Transparency & Pet-Project De-biasing",
        "elaboration": "Diagrammatic visual mapping prevents board members from pursuing irrational, emotionally charged pet projects. By forcing planners to explicitly assign monetary values and probability estimates to every chance outcome, decision trees provide clear governance transparency for corporate shareholders."
      }
    ]
  },
  "perspective2": {
    "title": "False Mathematical Precision & Qualitative Blindness",
    "points": [
      {
        "subPoint": "GIGO Vulnerability (Garbage In, Garbage Out)",
        "elaboration": "However, relying solely on decision trees creates dangerous 'false precision' because the mathematical model is completely dependent on subjective probability estimates. If management over-optimistically estimates the probability of high demand as 70% instead of a realistic 40%, the resulting EMV is deeply distorted, leading to catastrophic capital misallocation."
      },
      {
        "subPoint": "Complete Omission of Qualitative Human & Regulatory Dynamics",
        "elaboration": "Furthermore, decision trees completely ignore critical qualitative variables. Automating fulfillment centers with robotics could trigger severe labor union strikes, employee demoralization, and costly severance disputes. Meanwhile, acquiring courier fleets involves complex antitrust regulatory hurdles and cultural friction that no probability node can accurately calculate."
      }
    ]
  },
  "synthesisAndEvaluation": "In conclusion, a commercial business must never rely *primarily* or exclusively on quantitative decision trees when selecting capital investments. While decision trees are exceptionally valuable for establishing a rational financial baseline and calculating expected payoffs, they must be treated as an analytical starting point rather than the final verdict. Executive leadership must synthesize quantitative Net EMV calculations with qualitative strategic tools\u2014specifically STEEPLE analysis (to audit regulatory approval risks for the courier acquisition) and stakeholder impact analyses (to mitigate workforce backlash against automation). The final capital commitment must balance mathematical returns against organizational risk tolerance, corporate liquidity reserves, and stakeholder ethics.",
  "rubricChecklist": [
    {
      "id": "q6m-09-c1",
      "criterion": "Demonstrates accurate knowledge of decision tree mechanics, chance nodes, and Net EMV calculation",
      "marks": 1
    },
    {
      "id": "q6m-09-c2",
      "criterion": "Analyzes the advantages of objective probability-weighted decision modeling (Option 1 EMV calculation)",
      "marks": 1
    },
    {
      "id": "q6m-09-c3",
      "criterion": "Analyzes the limitations of decision trees (false precision, GIGO, subjective probabilities, qualitative omission)",
      "marks": 1
    },
    {
      "id": "q6m-09-c4",
      "criterion": "Evaluates qualitative factors (labor strikes, redundancy morale, cultural integration, regulatory approval)",
      "marks": 1
    },
    {
      "id": "q6m-09-c5",
      "criterion": "Deeply applied throughout to logistics automation vs courier fleet acquisition case context",
      "marks": 1
    },
    {
      "id": "q6m-09-c6",
      "criterion": "Coherent evaluative synthesis concluding that quantitative EMV must be balanced with STEEPLE and stakeholder analysis",
      "marks": 1
    }
  ]
},
{
  id: 'q6m-10',
  subunit: '1.4-stakeholders',
  questionNumber: 'Question 4.1c',
  question: "Examine how different stakeholder groups are likely to be affected by Microsoft's takeover of Nokia's mobile phones division.",
  caseStimulus:
    "Nokia was once the pride of Europe having been the market leader in the mobile phones industry from 1998 to 2008, enjoying up to 49.4% market share. In 2005, the Finnish company sold its one billionth mobile phone. By 2007, its market value was a staggering $150 billion, making it the 5th most valuable brand in the world.\n\nHowever, the huge popularity of Apple and Samsung smartphones eventually forced Nokia to be sold to Microsoft for 'just' €5.4bn ($7.3bn) in November 2013. An overwhelming 99.5% of Nokia's 3,900 shareholders voted in favour of the deal after seeing its share price drop by 93% and its market share continually decline to only 3%. The company's 32,000 employees who worked in the mobile phones division were transferred to Microsoft Mobile in early 2014.",
  contextTitle: "Microsoft Takeover of Nokia: Divergent Stakeholder Repercussions",
  marks: 6,
  commandTerm: 'Examine',
  assessmentObjective: 'AO2/AO3',
  levelBreakdown: [
    {
      range: '1-2',
      descriptor: 'Simple descriptive commentary regarding shareholders or employees with minimal case application or theoretical rigor.'
    },
    {
      range: '3-4',
      descriptor: 'Explains how two distinct stakeholder groups are affected by the takeover with direct case context, but lacks balanced evaluation or stakeholder conflict synthesis.'
    },
    {
      range: '5-6',
      descriptor: 'Balanced, critical examination evaluating conflicting stakeholder impacts (shareholders vs 32,000 employees vs Finnish community), synthesizing short-term equity recovery against long-term employment disruption.'
    }
  ],
  perspective1: {
    title: 'Shareholders & Core Business: Capital Salvage & Strategic Refocus',
    points: [
      {
        subPoint: 'Stemming Catastrophic Financial Losses & Salvaging Equity',
        elaboration: "For Nokia's 3,900 shareholders, the takeover was overwhelmingly advantageous given the circumstances. With Nokia's market share crashing from 49.4% to 3% and its share price plunging by 93%, the mobile business was hemorrhaging cash. Securing €5.4bn in cash from Microsoft offered shareholders immediate liquidity and salvaged remaining equity value, explaining why an overwhelming 99.5% voted in favor of the transaction."
      },
      {
        subPoint: 'Strategic Refocusing on Profitable Network Infrastructure',
        elaboration: 'Divesting the loss-making handset division allowed surviving Nokia management to eliminate cash burn and redirect organizational capital toward high-margin telecommunications infrastructure (Nokia Networks) and lucrative intellectual property patent licensing.'
      }
    ]
  },
  perspective2: {
    title: 'Employees & Finnish Community: Redundancy Anxiety & Industrial Shock',
    points: [
      {
        subPoint: 'Acute Job Insecurity and Cultural Marginalization for 32,000 Staff',
        elaboration: "In stark contrast, the 32,000 employees transferred to Microsoft Mobile faced intense disruption. Cross-border acquisitions frequently create organizational culture clashes, loss of employee autonomy, and severe corporate restructuring. Transferring into a foreign American tech giant was likely to create anxiety over plant closures and possible redundancies as Microsoft consolidated its hardware teams."
      },
      {
        subPoint: 'National Economic and Technological Trauma for Finland',
        elaboration: 'For the Finnish government and local community, Nokia had been one of the country\'s best-known companies. The loss of Finnish ownership of the phones business could threaten local engineering jobs, tax revenues and national prestige.'
      }
    ]
  },
  synthesisAndEvaluation: "In conclusion, Microsoft's takeover of Nokia demonstrates how extreme business distress polarizes stakeholder interests. For Nokia's 3,900 equity shareholders, the deal was a pragmatic, highly welcome financial rescue (reflected in the 99.5% affirmative vote) that halted equity destruction and unlocked immediate cash liquidity. However, this financial rescue came at a heavy human cost for internal labor and the external community: 32,000 transferred employees bore the burden of corporate uncertainty, cultural upheaval and possible downsizing, while Finland risked losing jobs and tax revenue. This reflects the textbook point that a limited liability company is accountable to its shareholders (owners) and so tends to give them priority when stakeholder needs conflict (p.58).",
  rubricChecklist: [
    {
      id: 'q6m-10-c1',
      criterion: 'Accurate understanding of stakeholder theory and the distinction between shareholder and stakeholder interests',
      marks: 1
    },
    {
      id: 'q6m-10-c2',
      criterion: 'Detailed analysis of positive shareholder impacts (equity salvage, 93% share drop context, 99.5% vote, €5.4bn liquidity)',
      marks: 1
    },
    {
      id: 'q6m-10-c3',
      criterion: 'Detailed analysis of adverse employee impacts (32,000 transferred staff, culture clash, restructuring, redundancy anxiety)',
      marks: 1
    },
    {
      id: 'q6m-10-c4',
      criterion: 'Analysis of external stakeholder effects (Finnish government tax losses, local community engineering clusters)',
      marks: 1
    },
    {
      id: 'q6m-10-c5',
      criterion: 'Case stimulus thoroughly and accurately integrated across both analytical perspectives',
      marks: 1
    },
    {
      id: 'q6m-10-c6',
      criterion: 'Balanced evaluative conclusion weighing financial rescue of owners against the human/economic burden on labor and community',
      marks: 1
    }
  ]
},
{
  id: 'q6m-11',
  subunit: '1.5-growth-and-evolution',
  questionNumber: 'Original scenario (not a textbook question)',
  question: 'Examine the arguments for and against an independent craft food producer scaling up its operations to exploit economies of scale.',
  caseStimulus:
    "Artisan Harvest is a thriving independent regional producer of organic preserves and condiments founded by two food scientists. Currently operating from a single commercial kitchen, it commands premium retail pricing ($8.50 per jar) and high brand loyalty for its small-batch quality and local farm sourcing. However, a major national supermarket chain has offered a nationwide distribution contract requiring Artisan Harvest to increase monthly production tenfold from 10,000 jars to 100,000 jars. Scaling up will require investing $1.2m in automated industrial bottling equipment and a centralized factory lease.",
  contextTitle: 'Artisan Harvest: Mass-Production Scale vs. Craft Niche Stability',
  marks: 6,
  commandTerm: 'Examine',
  assessmentObjective: 'AO2/AO3',
  levelBreakdown: [
    {
      range: '1-2',
      descriptor: 'Limited descriptive identification of economies or diseconomies of scale without application to Artisan Harvest context.'
    },
    {
      range: '3-4',
      descriptor: 'One-sided analysis or unbalanced explanation of scale economies without weighing operational risks, loss of craft identity, or diseconomies.'
    },
    {
      range: '5-6',
      descriptor: 'Balanced, two-sided examination analyzing technical/purchasing scale economies against capital risk, dilution of brand premium, and potential diseconomies, supported by a reasoned evaluative conclusion.'
    }
  ],
  perspective1: {
    title: 'Arguments For Scaling Up: Significant Unit Cost Reductions & Commercial Leverage',
    points: [
      {
        subPoint: 'Technical and Purchasing Economies of Scale',
        elaboration:
          'Expanding output tenfold from 10,000 to 100,000 jars enables Artisan Harvest to replace manual kitchen labor with automated high-speed bottling lines. Furthermore, purchasing organic fruit, glass jars, and pectin in massive bulk volumes secures substantial wholesale discounts, dramatically lowering Average Total Cost (ATC) per jar.'
      },
      {
        subPoint: 'National Market Presence and Revenue Transformation',
        elaboration:
          'Supplying a nationwide supermarket chain transforms total sales revenue and brand visibility, locking in steady contracted volume that spreads fixed management salaries, equipment leases, and marketing overheads over a vast output base.'
      }
    ]
  },
  perspective2: {
    title: 'Arguments Against Scaling Up: High Capital Exposure, Diseconomies, and Brand Dilution',
    points: [
      {
        subPoint: 'Heavy Financial Exposure and High Break-Even Burden',
        elaboration:
          'Borrowing $1.2m for automated equipment and factory leases introduces massive fixed interest and depreciation costs. If supermarket consumer demand softens or the retailer delists the product, Artisan Harvest faces catastrophic cash flow deficits.'
      },
      {
        subPoint: 'Loss of Craft Premium Pricing & Risk of Managerial Diseconomies',
        elaboration:
          'Mass-market supermarket distribution may erode the brand\'s perceived "artisanal, small-batch" exclusivity, forcing price discounting. Furthermore, managing a factory workforce and national supply chain can trigger coordination friction, communication silos, and worker alienation.'
      }
    ]
  },
  synthesisAndEvaluation:
    'In conclusion, whether Artisan Harvest should scale up depends on contract guarantees and operational risk appetite. While tenfold expansion unlocks undeniable technical and purchasing economies of scale, it radically alters the business model from an agile high-margin artisanal producer to a capital-intensive volume manufacturer. To mitigate these risks, the founders should negotiate guaranteed minimum purchase orders and price protections with the supermarket chain, or pursue a phased expansion (such as contract manufacturing or regional pilot distribution) before committing to irreversible $1.2m capital debt, thereby avoiding outsized diseconomies of scale.',
  rubricChecklist: [
    {
      id: 'q6m-11-c1',
      criterion: 'Accurately analyzes technical and purchasing economies of scale (automated bottling lines, bulk raw material discounts, lower ATC)',
      marks: 1
    },
    {
      id: 'q6m-11-c2',
      criterion: 'Accurately analyzes revenue transformation and national market share benefits from supermarket contract',
      marks: 1
    },
    {
      id: 'q6m-11-c3',
      criterion: 'Detailed analysis of financial and capital risks ($1.2m debt, fixed depreciation overheads, high break-even output)',
      marks: 1
    },
    {
      id: 'q6m-11-c4',
      criterion: 'Detailed analysis of brand dilution risks and internal diseconomies (loss of artisanal premium, coordination friction, alienating workforce)',
      marks: 1
    },
    {
      id: 'q6m-11-c5',
      criterion: 'Case context thoroughly applied throughout both perspectives (Artisan Harvest, 10k to 100k jars, $8.50 price, $1.2m capital outlay)',
      marks: 1
    },
    {
      id: 'q6m-11-c6',
      criterion: 'Balanced evaluative judgment providing a nuanced strategic synthesis with risk mitigation recommendations (phased pilot rollout, contract guarantees)',
      marks: 1
    }
  ]
},
{
    id: 'q6m-A2-01',
    subunit: '1.2-types-of-business-entities',
    questionNumber: 'Adapted from Question 2.5b (textbook: 10 marks)',
    question: 'Discuss the decision of the Hong Kong Special Administrative Region government to expand Hong Kong Disneyland (HKDL) as a public sector company.',
    caseStimulus: 'Hong Kong Disneyland (HKDL) is a theme park with three on-site hotels. The theme park is jointly owned by the Hong Kong Special Administrative Region of the People\'s Republic of China (the majority shareholder) and the Walt Disney Company. HKDL opened on 12 September 2005, having created 36,000 jobs. It is the smallest of all Disneyland theme parks in the world. HKDL did not earn a profit until 2012, declaring a net profit of HK$109m ($13.97m). Analysts estimated that the theme park would generate HK$148bn ($19bn) in net benefits to the economy over a 40-year period as the public sector company continues to expand its operations in Hong Kong.',
    contextTitle: 'HKDL: Public Sector Expansion, Benefits and Financial Risk',
    marks: 6,
    commandTerm: 'Discuss',
    assessmentObjective: 'AO2/AO3',
    levelBreakdown: [
      {
        range: '1-2',
        descriptor: 'Describes the public sector company or HKDL ownership without linking the expansion decision to benefits or risks.'
      },
      {
        range: '3-4',
        descriptor: 'Explains either the economic and employment benefits or the financial risk of expansion, with some application to HKDL.'
      },
      {
        range: '5-6',
        descriptor: 'Discusses both the benefits and the financial risks of the expansion using HKDL evidence, and reaches a justified judgement on the decision.'
      }
    ],
    perspective1: {
      title: 'Economic and Social Case for Expansion',
      points: [
        {
          subPoint: 'Government Revenue and Economic Benefit',
          elaboration: 'A public sector company helps to raise much-needed government revenues while providing services. Analysts estimated that HKDL would generate HK$148bn ($19bn) in net benefits to the economy over 40 years, which is the wider public purpose behind government ownership.'
        },
        {
          subPoint: 'Employment and Public Welfare',
          elaboration: 'HKDL has already created 36,000 jobs. Government ownership allows the expansion to pursue employment and economic aims alongside financial returns, which a purely commercial shareholder might weigh differently.'
        }
      ]
    },
    perspective2: {
      title: 'Financial Risk and Commercial Pressure',
      points: [
        {
          subPoint: 'Years Without Profit',
          elaboration: 'HKDL did not earn a profit until 2012, so an expansion carries financial risk for the government as majority shareholder. The case for expansion depends on whether the park can sustain returns once it has grown.'
        },
        {
          subPoint: 'Shared Ownership and Control',
          elaboration: 'Because the Walt Disney Company is a joint owner, the expansion decision is shared rather than controlled by the government alone. The government must balance its public aims with the commercial interests of the partner.'
        }
      ]
    },
    synthesisAndEvaluation: 'A justified judgement weighs the economic and employment benefits (HK$148bn estimated net benefit over 40 years; 36,000 jobs) against the financial risk of a park that did not make a profit until 2012. The decision is more defensible if the expansion is expected to generate sustained returns and wider economic benefit for Hong Kong. The evaluation depends on analysts\' estimates, which the case presents as forecasts rather than certain outcomes.',
    rubricChecklist: [
      { id: 'q6m-A2-01-c1', criterion: 'Explains HKDL as a public sector company with government as majority shareholder', marks: 1 },
      { id: 'q6m-A2-01-c2', criterion: 'Explains economic and employment benefits of expansion with HKDL evidence', marks: 2 },
      { id: 'q6m-A2-01-c3', criterion: 'Explains financial risk, such as the years without profit and shared ownership', marks: 1 },
      { id: 'q6m-A2-01-c4', criterion: 'Reaches a justified judgement that weighs benefits against risk', marks: 2 }
    ]
  },
{
  id: 'q6m-A3-01',
  subunit: '1.4-stakeholders',
  questionNumber: 'Question 4.5b (adapted to 6 marks)',
  question: 'Examine the extent to which a global company such as Shell should allow environmental and human rights groups to influence its decision-making.',
  caseStimulus:
    "Royal Dutch Shell (or Shell for short) is Europe's largest energy and oil company. It was formed in 1907 by the merger of Royal Dutch from The Netherlands and Shell from the UK. In 2020, the Anglo-Dutch company earned net income of $21.5 billion (that's $2.45m per hour). This staggering figure obviously drew the attention of Shell's internal stakeholders. However, being a global energy and oil company also means that Shell's activities are carefully scrutinised by pressure groups, such as Greenpeace. In 2020, Shell's sales revenue exceeded $180.5 billion (about a fifth of the GDP of the Netherlands).",
  contextTitle: 'Royal Dutch Shell: Pressure Groups and Corporate Decision-Making',
  marks: 6,
  commandTerm: 'Examine',
  assessmentObjective: 'AO2/AO3',
  levelBreakdown: [
    {
      range: '1-2',
      descriptor: 'Describes pressure groups or Shell\'s stakeholders with little application to the case and no judgement on the extent of influence.'
    },
    {
      range: '3-4',
      descriptor: 'Explains how environmental and human rights groups could influence Shell, or how other stakeholders would be affected, with case application but limited balance.'
    },
    {
      range: '5-6',
      descriptor: 'Examines both the benefits of pressure group influence and the limits set by shareholder accountability and the need for a best-fit compromise, applies the Shell figures and reaches a justified judgement on the extent of influence.'
    }
  ],
  perspective1: {
    title: 'For Greater Influence: Pressure Groups Represent Wider Concerns',
    points: [
      {
        subPoint: 'Close scrutiny of a global company',
        elaboration: 'Because Shell is a global energy and oil company, its activities are carefully scrutinised by pressure groups such as Greenpeace. Digital social media has increased the influence of these groups, so environmental and human rights concerns are harder for Shell to ignore.'
      },
      {
        subPoint: 'Protecting reputation and society',
        elaboration: 'Pressure groups use boycotts, lobbying, public relations and direct action. Shell\'s scale (sales revenue over $180.5 billion) means that its environmental and human rights impacts reach a large share of society, so ignoring pressure groups risks adverse publicity and damage to its corporate image.'
      }
    ]
  },
  perspective2: {
    title: 'Limits on Influence: Shareholder Accountability and Balanced Stakeholders',
    points: [
      {
        subPoint: 'Accountability to shareholders',
        elaboration: 'A limited liability company is accountable to its shareholders (owners), so it will have to give them priority. Shell earned net income of $21.5 billion, and its owners expect a return on that capital, so management cannot simply hand control to pressure groups.'
      },
      {
        subPoint: 'Pressure groups represent special interests',
        elaboration: 'Pressure groups are organized around one common concern, such as environmental protection. Giving one group full control would breach the principle that it is unrealistic or undesirable to maximize the needs of just one stakeholder group. Employees, customers and suppliers also have legitimate interests.'
      }
    ]
  },
  synthesisAndEvaluation: 'In conclusion, Shell should allow environmental and human rights groups to influence its decisions to a meaningful but limited extent. Their scrutiny is valuable: digital social media has increased the attention given to ethical behaviour, and the scale of Shell\'s operations means its impacts matter to society. However, as a limited liability company accountable to its shareholders, Shell must balance these demands against the interests of its owners, employees, customers and suppliers. The most defensible approach is a best-fit compromise, in which pressure groups are consulted and their concerns are weighed, while management keeps responsibility for decisions that serve all stakeholders.',
  rubricChecklist: [
    { id: 'q6m-A3-01-c1', criterion: 'Accurate definition of pressure groups and their tactics (boycotting, lobbying, PR, direct action)', marks: 1 },
    { id: 'q6m-A3-01-c2', criterion: 'Case application of Shell\'s scrutiny by pressure groups and its $21.5bn net income and $180.5bn revenue', marks: 1 },
    { id: 'q6m-A3-01-c3', criterion: 'Analysis of the case for greater pressure group influence (wider concerns, reputation, scale)', marks: 1 },
    { id: 'q6m-A3-01-c4', criterion: 'Analysis of shareholder accountability as a limit on influence', marks: 1 },
    { id: 'q6m-A3-01-c5', criterion: 'Analysis of the need to balance the interests of all stakeholder groups', marks: 1 },
    { id: 'q6m-A3-01-c6', criterion: 'Justified judgement on the extent of influence, reaching a best-fit compromise', marks: 1 }
  ]
},
{
    id: 'q6m-A4-01',
    subunit: '1.5-growth-and-evolution',
    questionNumber: '1.5-A4-IKEA',
    question: 'Examine whether IKEA should pursue external rather than internal growth.',
    caseStimulus: 'IKEA was founded in 1943. It opened its first overseas stores in neighbouring Norway in 1963 and in Denmark in 1969. It has since grown to over 445 stores in 50 countries and employs more than 225,000 people. IKEA is a privately held company: its founding family wants the business to remain under its control rather than under external owners and directors.',
    contextTitle: 'IKEA: Internal or External Growth?',
    marks: 6,
    commandTerm: 'Examine',
    assessmentObjective: 'AO2/AO3',
    levelBreakdown: [
      { range: '1-2', descriptor: 'Describes internal or external growth with little reference to IKEA or to the trade-offs of control, risk and speed.' },
      { range: '3-4', descriptor: 'Analyses at least one advantage and one disadvantage of external growth for IKEA, using case evidence, with a partly developed link.' },
      { range: '5-6', descriptor: 'Examines both sides of the choice for IKEA, weighs control, risk, culture and speed against the firm\'s aims, and reaches a justified judgment.' }
    ],
    perspective1: {
      title: 'Arguments for external growth',
      points: [
        { subPoint: 'Faster growth and entry to new markets', elaboration: 'External methods such as M&As and joint ventures use external resources and finance to grow more quickly than opening new stores with retained profits, and they can provide entry to foreign markets where local partners have knowledge.' },
        { subPoint: 'Synergies and economies of scale', elaboration: 'Combining with another business brings synergy (the whole is greater than the sum of the parts) and can lower unit costs through a larger operation.' }
      ]
    },
    perspective2: {
      title: 'Arguments for internal growth',
      points: [
        { subPoint: 'Control and private ownership', elaboration: 'IKEA is privately held because its founders want to keep control. External growth through M&As or takeovers can dilute ownership and control, which runs against this aim.' },
        { subPoint: 'Culture and risk', elaboration: 'Internal growth maintains corporate culture and is less risky. Merging with another firm can cause culture clashes, conflict and greater risks from unfamiliar markets.' },
        { subPoint: 'Cost and diseconomies', elaboration: 'Internal growth is relatively inexpensive, funded mainly by retained profits. Acquisitions are more expensive and can bring diseconomies of scale from added bureaucracy.' }
      ]
    },
    synthesisAndEvaluation: 'The answer depends on IKEA\'s aims. If the founding family values control and culture above speed, internal growth, such as new stores and products funded by retained profits, is the better choice. External growth may still be justified to enter a foreign market quickly, but a joint venture, which keeps each firm\'s corporate identity, is a stronger option than a full acquisition. IKEA\'s scale and global brand suggest that it can afford controlled internal expansion, so a mix of methods is likely to be the most appropriate.',
    rubricChecklist: [
      { id: 'r1', criterion: 'Defines or describes internal and external growth accurately', marks: 1 },
      { id: 'r2', criterion: 'Analyses at least one advantage of external growth for IKEA with a clear mechanism', marks: 1 },
      { id: 'r3', criterion: 'Analyses at least one disadvantage of external growth for IKEA, linked to control or culture', marks: 1 },
      { id: 'r4', criterion: 'Uses the IKEA case evidence (private ownership, 445 stores, 50 countries) to support the analysis', marks: 1 },
      { id: 'r5', criterion: 'Examines both perspectives and considers the trade-off between control and speed', marks: 1 },
      { id: 'r6', criterion: 'Reaches a justified judgment linked to the firm\'s aims and the wider context', marks: 1 }
    ]
  },
{
    id: 'q6m-A5-01',
    subunit: '1.6-multinational-companies',
    questionNumber: 'Question 6.2c',
    question: 'Examine the benefits to multinational companies operating in foreign countries such as the UAE.',
    caseStimulus: 'Multinational companies are attracted to the United Arab Emirates (UAE) because of the low taxes, political stability and high gross domestic product (GDP) per capita. Microsoft, Marriott Group, DHL and Ericsson all have operations in the UAE. The influx of engineering, law and accountancy firms brings managers from many countries and creates a demand for goods and services. The UAE does not have any federal income tax, and there is also a 0% corporate tax rate. Dubai, one of the seven Emirates that make up the UAE, has gained a reputation as a destination for shopping, attracting many tourists from around the world.',
    contextTitle: 'MNCs Operating in the UAE',
    marks: 6,
    commandTerm: 'Examine',
    assessmentObjective: 'AO2/AO3',
    levelBreakdown: [
      { range: '1-2', descriptor: 'Identifies one or two benefits to MNCs in the UAE with limited or no reference to the case; little or no explanation.' },
      { range: '3-4', descriptor: 'Explains benefits (for example tax, market demand, stability) with reference to the case, but with limited development of how each benefit helps the MNC.' },
      { range: '5-6', descriptor: 'Examines a range of benefits, applying the case evidence, and reaches a supported judgement on their significance for an MNC in a foreign country.' }
    ],
    perspective1: {
      title: 'Financial and market benefits in the UAE',
      points: [
        { subPoint: 'Lower tax costs', elaboration: 'The UAE has no federal income tax and a 0% corporate tax rate, so an MNC operating there retains more of its profit than it would if it paid corporate tax.' },
        { subPoint: 'A wealthy, stable market', elaboration: 'High GDP per capita and political stability give an MNC a market with purchasing power and lower political risk. The influx of engineering, law and accountancy firms creates demand for goods and services.' }
      ]
    },
    perspective2: {
      title: 'Strategic and brand benefits',
      points: [
        { subPoint: 'Reduced risk and a broader presence', elaboration: 'A politically stable base supports a long-term presence in the region. Operating in more than one country also spreads risk, so problems in one region do not necessarily damage the overall business.' },
        { subPoint: 'Access to customers and brand value', elaboration: 'Dubai attracts many tourists and shoppers from around the world, so an MNC based there can reach a wide customer base and enhance its brand recognition through its presence.' }
      ]
    },
    synthesisAndEvaluation: 'The benefits are strongest where a low-tax environment, political stability and high GDP per capita combine with demand from international managers. Their significance, however, depends on the MNC\'s sector and its reasons for entering the market. An MNC must also adjust to foreign customs and cultures and to local laws, so the benefits should be weighed against the cultural and ethical adjustments the business must make.',
    rubricChecklist: [
      { id: 'q6m-A5-01-c1', criterion: 'Identifies and explains the tax benefit with reference to the 0% corporate tax rate', marks: 1 },
      { id: 'q6m-A5-01-c2', criterion: 'Explains the market benefit (GDP per capita, demand from international firms and managers)', marks: 1 },
      { id: 'q6m-A5-01-c3', criterion: 'Explains the risk and stability benefit (political stability, spreading risk)', marks: 1 },
      { id: 'q6m-A5-01-c4', criterion: 'Explains the customer and brand benefit (tourists, shoppers, brand recognition)', marks: 1 },
      { id: 'q6m-A5-01-c5', criterion: 'Evaluates the benefits, reaching a supported judgement on their significance for the MNC', marks: 2 }
    ]
  },
  {
    id: 'q6m-A5-02',
    subunit: '1.5-growth-and-evolution',
    questionNumber: 'Question 5.8c',
    question: 'Examine the potential problems of Pizza Hut\'s growth strategy.',
    caseStimulus: 'Founded in 1958, Pizza Hut is the world\'s largest chain of pizza restaurants. Within a year of opening, the company launched its first franchise. Today, its operations span the globe with over 18,700 restaurants in over 95 countries. The company plans to continue opening more stores in existing and new locations. The company has a dedicated website with everything potential franchisees need to know about becoming a Pizza Hut franchisee.',
    contextTitle: 'Pizza Hut: Problems of Franchising',
    marks: 6,
    commandTerm: 'Examine',
    assessmentObjective: 'AO2/AO3',
    levelBreakdown: [
      { range: '1-2', descriptor: 'Identifies one or two problems of franchising with limited or no reference to Pizza Hut.' },
      { range: '3-4', descriptor: 'Explains problems for the franchisor and/or franchisee with reference to the case, but with limited development of consequences for Pizza Hut\'s growth.' },
      { range: '5-6', descriptor: 'Examines problems for both the franchisor and the franchisees, applies them to Pizza Hut\'s global growth, and reaches a supported judgement on the strategy.' }
    ],
    perspective1: {
      title: 'Problems for the franchisor (Pizza Hut)',
      points: [
        { subPoint: 'Reputational risk', elaboration: 'Allowing other parties to use the franchisor\'s name is a huge risk: unsuccessful franchisees can damage the reputation of the entire franchise business.' },
        { subPoint: 'Difficult quality control', elaboration: 'It can be difficult to control the daily operations of all franchisees and to make them meet the quality standards that the franchisor sets, which matters across 18,700 restaurants in over 95 countries.' },
        { subPoint: 'Slower than M&As', elaboration: 'Franchising is faster than internal growth, but it is not as quick as other external methods such as M&As.' }
      ]
    },
    perspective2: {
      title: 'Problems for franchisees, and so for growth',
      points: [
        { subPoint: 'Limited autonomy', elaboration: 'Franchisees cannot simply use their own initiative to try out new ideas, because they must follow the franchisor and the formal agreement. This can hinder entrepreneurial talent.' },
        { subPoint: 'High cost with no guarantee of return', elaboration: 'Buying a franchise can be very expensive, yet there is no guarantee that the investment will ever be recouped. This can affect the willingness of would-be franchisees to join.' },
        { subPoint: 'Payments to the franchisor', elaboration: 'Franchisees have to pay a significant percentage of their sales revenues to the franchisor, which reduces the profit they keep.' }
      ]
    },
    synthesisAndEvaluation: 'The problems can be weighed against the benefits of franchising: rapid growth without heavy capital and royalty income for Pizza Hut. Their importance depends on whether Pizza Hut can keep brand standards high and franchisees profitable. A single failed franchisee can harm the brand across the whole network, so Pizza Hut must balance short-term expansion against long-term control.',
    rubricChecklist: [
      { id: 'q6m-A5-02-c1', criterion: 'Explains a franchisor problem (reputational risk or quality control)', marks: 1 },
      { id: 'q6m-A5-02-c2', criterion: 'Explains a second franchisor problem (slower than M&As or difficult control)', marks: 1 },
      { id: 'q6m-A5-02-c3', criterion: 'Explains a franchisee problem (limited autonomy, cost or payments)', marks: 1 },
      { id: 'q6m-A5-02-c4', criterion: 'Applies the problems to Pizza Hut\'s growth using the case evidence', marks: 1 },
      { id: 'q6m-A5-02-c5', criterion: 'Evaluates the strategy and reaches a supported judgement', marks: 2 }
    ]
  },
{
    id: 'q6m-bmt-steeple-A6-01',
    subunit: 'bmt-steeple-analysis',
    questionNumber: '46.A6-6m-1',
    question: 'Examine the opportunities and threats that technology, such as self-checkout tills, presents to Tesco.',
    caseStimulus: 'In June 2010, Tesco opened the UK\'s first supermarket without checkout staff. One person was hired to supervise five checkouts, mainly to help customers who had not used self-service before. Tesco, the UK\'s largest retailer with over 28% of the grocery market, employs over 423,000 people. Critics argued that such technology would cause mass job losses. Self-checkout tills are now commonplace in retailing.',
    contextTitle: 'Tesco and self-checkout technology',
    marks: 6,
    commandTerm: 'Examine',
    assessmentObjective: 'AO2/AO3',
    levelBreakdown: [
      { range: '1-2', descriptor: 'Identifies a technological opportunity or threat with little or no development, and with little or no reference to Tesco.' },
      { range: '3-4', descriptor: 'Explains at least one opportunity or threat for Tesco, using case evidence, but the answer is one-sided.' },
      { range: '5-6', descriptor: 'Examines both opportunities and threats for Tesco using case evidence and reaches a justified judgement on which outweighs the other.' }
    ],
    perspective1: {
      title: 'Opportunities of technology for Tesco',
      points: [
        {
          subPoint: 'Lower labour cost per transaction',
          elaboration: 'One supervisor can oversee five checkouts, so fewer staff are needed at the tills, which reduces labour costs.'
        },
        {
          subPoint: 'Productivity and efficiency',
          elaboration: 'Automated systems can be faster and more consistent than people, and can keep trading for long periods without breaks.'
        }
      ]
    },
    perspective2: {
      title: 'Threats of technology for Tesco',
      points: [
        {
          subPoint: 'Job losses and staff relations',
          elaboration: 'Critics argue self-checkout would cause mass job losses across a workforce of over 423,000. Tesco must manage redundancies carefully, and resistance to change can reduce morale.'
        },
        {
          subPoint: 'Costs and reliability',
          elaboration: 'Technology carries purchase, installation, maintenance, depreciation and replacement costs, and systems can fail or be hacked. Equipment also becomes obsolete more quickly.'
        }
      ]
    },
    synthesisAndEvaluation: 'The balance depends on how Tesco manages the change. The case shows that customers new to self-service still needed help, so a gradual roll-out with staff redeployed to customer support can reduce the job-loss threat while keeping the cost saving. Tesco\'s scale (over 28% market share) allows it to absorb the costs of investment, while smaller retailers may find it harder to keep up with shorter product life cycles.',
    rubricChecklist: [
      { id: 'rc-1', criterion: 'Identifies at least one technological opportunity for Tesco', marks: 1 },
      { id: 'rc-2', criterion: 'Identifies at least one technological threat for Tesco', marks: 1 },
      { id: 'rc-3', criterion: 'Uses case evidence (e.g., one supervisor for five checkouts; 423,000 employees; critics\' job-loss claim)', marks: 2 },
      { id: 'rc-4', criterion: 'Reaches a justified judgement on the balance of opportunities and threats', marks: 2 }
    ]
  },
{
    id: 'q6m-A7-01',
    subunit: 'bmt-business-plan',
    questionNumber: '48.A7.6',
    question: 'Examine the usefulness of a business plan for DS Bakery as it seeks external finance and plans to start trading.',
    caseStimulus: 'Denis Sagide is a recent Business Management graduate who plans to open a bakery in Nairobi, Kenya, as a sole trader. He is aware of the risks and potential benefits of the business, has found suitable premises and feels confident about recruiting staff. He has produced a detailed business plan to secure external finance (adapted from Question 48.1).',
    contextTitle: 'DS Bakery: Business Plan',
    marks: 6,
    commandTerm: 'Examine',
    assessmentObjective: 'AO2/AO3',
    levelBreakdown: [
      { range: '1-2', descriptor: 'Describes the business plan or its contents with little or no link to DS Bakery. Little or no evaluation.' },
      { range: '3-4', descriptor: 'Explains how the plan helps DS Bakery obtain finance or plan operations, with some application to the case. Limited evaluation.' },
      { range: '5-6', descriptor: 'Examines the usefulness for DS Bakery from two perspectives, applies the case in depth and reaches a justified judgement about how far the plan is useful, considering its limitations.' }
    ],
    perspective1: {
      title: 'Securing external finance',
      points: [
        { subPoint: 'Lender reassurance', elaboration: 'The plan shows that Denis has researched the idea and has reasons to support it, which helps banks and business angels judge the chances of success and the ability to repay.' },
        { subPoint: 'Finance section', elaboration: 'Proposed sources of finance, break-even analysis, collateral and cash flow forecasts show how the loan will be used and how shortfalls will be covered, which reduces the perceived risk for lenders.' }
      ]
    },
    perspective2: {
      title: 'Managing the start-up and planning for change',
      points: [
        { subPoint: 'Strategic focus', elaboration: 'The plan sets out the business objectives and the operations, personnel and marketing plans, giving Denis a framework to keep the bakery focused on its goals.' },
        { subPoint: 'Contingency planning', elaboration: 'Contingency plans and a SWOT analysis show what he will do if things do not go as planned, which matters because he is aware of the risks.' }
      ]
    },
    synthesisAndEvaluation: 'The plan is most useful at the start-up stage because it helps DS Bakery secure finance and sets a planning framework. Its usefulness depends on how accurate the sales and cost forecasts are, and on whether the strategies are implemented effectively in a changing business environment. A plan cannot eliminate risk, so it should be reviewed regularly against key performance indicators, such as sales growth and market share. On balance, the plan is very useful for an entrepreneur with the research to support it, but it is not a guarantee of success.',
    rubricChecklist: [
      { id: 'rub-A7-6m-01', criterion: 'Defines or describes the business plan and its main contents.', marks: 1 },
      { id: 'rub-A7-6m-02', criterion: 'Explains the usefulness for securing finance, with application to DS Bakery.', marks: 2 },
      { id: 'rub-A7-6m-03', criterion: 'Explains the usefulness for planning and managing the start-up, with application.', marks: 2 },
      { id: 'rub-A7-6m-04', criterion: 'Evaluates by weighing the usefulness against limitations (forecast accuracy, implementation, risk).', marks: 1 }
    ]
  }
];
