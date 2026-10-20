import { DefinitionItem, DistinctionItem, GoldenMatrixRule } from '@/types/curriculum';

export const CRAM_DEFINITIONS: DefinitionItem[] = [
  {
    id: 'def-01',
    term: 'Business',
    subunit: '1.1-what-is-a-business',
    definition: 'A ==decision-making entity== that combines inputs (factors of production: *land, labor, capital, enterprise*) through a **transformation process** to produce finished goods or provide services that <u>satisfy customer needs and wants</u>.',
    keyExamTokens: ['decision-making entity', 'factors of production', 'transformation process', 'satisfy needs and wants']
  },
  {
    id: 'def-02',
    term: 'Factors of Production',
    subunit: '1.1-what-is-a-business',
    definition: 'The four fundamental **economic resources** required for business activity: *Land* (==natural resources==), *Labor* (==human physical/mental effort==), *Capital* (==man-made physical assets & finance==), and *Enterprise* (<u>entrepreneurial risk-taking & coordination</u>).',
    keyExamTokens: ['Land', 'Labor', 'Capital', 'Enterprise', 'risk-taking coordination']
  },
  {
    id: 'def-03',
    term: 'Adding Value',
    subunit: '1.1-what-is-a-business',
    definition: 'The practice of producing a good or service that is ==worth more than the cost of resources used== in the production process. **Added value** occurs when there is a <u>positive difference between the selling price</u> of a product and the *cost of producing it*.',
    keyExamTokens: ['worth more than the cost of resources used', 'selling price minus cost of production', 'products appealing to customers'],
    formulaOrExample: 'Added value = selling price - cost of producing the good or service (positive difference)'
  },
  {
    id: 'def-04',
    term: 'Consumer Goods',
    subunit: '1.1-what-is-a-business',
    definition: '**Physical products** purchased and consumed by *private households* for ==direct personal gratification==, sub-classified into <u>Consumer Durables</u> (*long-lasting items*) and <u>Non-Durables</u> (*fast-consuming items*).',
    keyExamTokens: ['sold to households', 'personal consumption', 'consumer durables vs non-durables']
  },
  {
    id: 'def-05',
    term: 'Capital Goods (Producer Goods)',
    subunit: '1.1-what-is-a-business',
    definition: '==Tangible, man-made physical assets==, machinery, commercial vehicles, and factories **purchased by businesses** to <u>produce other goods or provide services</u> rather than for *household consumption*.',
    keyExamTokens: ['producer goods', 'purchased by businesses', 'used to produce other goods/services']
  },
  {
    id: 'def-06',
    term: 'Chain of Production',
    subunit: '1.1-what-is-a-business',
    definition: 'The ==sequential, interrelated stages of economic activity== through which *raw materials* pass across **economic sectors** (primary extraction → secondary manufacturing → tertiary distribution) to <u>reach the final end-consumer</u>.',
    keyExamTokens: ['sequential stages', 'primary, secondary, tertiary', 'raw material to consumer']
  },
  {
    id: 'def-07',
    term: 'Entrepreneur',
    subunit: '1.1-what-is-a-business',
    definition: 'An ==innovative individual== who conceives a business idea, invests *personal capital*, **coordinates factors of production**, and <u>bears full commercial risk</u> in pursuit of operational *profit* or *social impact*.',
    keyExamTokens: ['innovative individual', 'coordinates factors of production', 'bears commercial risk', 'profit motive']
  },
  {
    id: 'def-08',
    term: 'Sole Trader',
    subunit: '1.2-types-of-business-entities',
    definition: 'An **unincorporated commercial business** <u>owned, managed, and financed by a single individual</u> who ==retains 100% of all net profits== after tax and carries *personal* ==unlimited liability== for all business debts.',
    keyExamTokens: ['unincorporated', 'single individual owner', '100% profit retention', 'unlimited liability']
  },
  {
    id: 'def-09',
    term: 'Partnership',
    subunit: '1.2-types-of-business-entities',
    definition: 'An **unincorporated commercial business** owned by *two or more individuals* (typically 2 to 20) who pool capital and share responsibilities. Partners carry ==unlimited liability== (debts repaid *"wholly or severally"*), formalized via a <u>Deed of Partnership</u>.',
    keyExamTokens: ['unincorporated', '2 to 20 partners', 'pooled capital', 'unlimited liability (wholly or severally)', 'Deed of Partnership']
  },
  {
    id: 'def-10',
    term: 'Limited Liability',
    subunit: '1.2-types-of-business-entities',
    definition: 'A **legal restriction** that ==caps a shareholder’s potential financial loss== at the <u>amount they invested in the company</u>, shielding their *private personal wealth and homes* from corporate creditors upon liquidation.',
    keyExamTokens: ['loss capped at invested capital', 'shields personal assets', 'incorporated companies']
  },
  {
    id: 'def-11',
    term: 'Privately Held Company (Ltd)',
    subunit: '1.2-types-of-business-entities',
    definition: 'An **incorporated business entity** with ==limited liability== whose shares are <u>sold privately</u> (to family and friends) and *cannot be raised from the general public* via a stock exchange without board consent.',
    keyExamTokens: ['incorporated', 'limited liability', 'private share ownership', 'no public stock exchange trading']
  },
  {
    id: 'def-12',
    term: 'Publicly Held Company (PLC)',
    subunit: '1.2-types-of-business-entities',
    definition: 'An **incorporated commercial enterprise** with ==limited liability== that has <u>floated its shares onto an open stock exchange</u> via an *Initial Public Offering (IPO)*, allowing shares to be ==freely traded by the general public==.',
    keyExamTokens: ['incorporated', 'floated on stock exchange', 'IPO', 'freely traded public shares', 'statutory disclosure']
  },
  {
    id: 'def-13',
    term: 'Cooperative',
    subunit: '1.2-types-of-business-entities',
    definition: 'A **member-owned social enterprise** established to serve the shared interests of its members, <u>democratically governed</u> under the principle of =="one member, one vote"==, with surplus distributed as *dividends or patronage rebates*.',
    keyExamTokens: ['member-owned social enterprise', 'one member, one vote', 'democratic governance', 'surplus distribution']
  },
  {
    id: 'def-14',
    term: 'Non-Governmental Organization (NGO)',
    subunit: '1.2-types-of-business-entities',
    definition: 'A **private sector, non-profit social enterprise** operating <u>independently of government</u> for the ==benefit of others==; any surplus is *retained in the organization* rather than distributed to owners.',
    keyExamTokens: ['private sector non-profit', 'independent of government', 'benefit of others', 'surplus retained, not distributed']
  },
  {
    id: 'def-15',
    term: 'Mission Statement',
    subunit: '1.3-business-objectives',
    definition: 'A **concise formal declaration** articulating an organization’s ==core operational purpose== and daily values, defining <u>what the business does and whom it serves in the present</u>.',
    keyExamTokens: ['core operational purpose', 'present identity', 'what we do and whom we serve']
  },
  {
    id: 'def-16',
    term: 'Vision Statement',
    subunit: '1.3-business-objectives',
    definition: 'A **long-term aspirational declaration** outlining an organization’s ==ultimate future goals and desired legacy==, serving as an <u>inspirational guide for where it strives to be</u>.',
    keyExamTokens: ['long-term aspirational future', 'where it wants to be', 'inspirational legacy']
  },
  {
    id: 'def-17',
    term: 'Strategic Objectives',
    subunit: '1.3-business-objectives',
    definition: 'The **longer-term overarching goals** of a business (*profit maximization, growth, market standing*), pursued through ==strategies==: the <u>medium- to long-term plans of action</u> of the organization as a whole.',
    keyExamTokens: ['longer-term goals', 'profit maximization, growth', 'market standing, market share', 'achieved through strategies']
  },
  {
    id: 'def-18',
    term: 'Tactical Objectives',
    subunit: '1.3-business-objectives',
    definition: '**Short-term tactical goals** that guide the <u>daily functioning of specific departments</u>, usually covering the ==next 12 months or sooner== (*e.g. survival, sales revenue targets*).',
    keyExamTokens: ['short-term goals', 'section of the organization', 'daily functioning of departments', '12 months or sooner']
  },
  {
    id: 'def-19',
    term: 'Corporate Social Responsibility (CSR)',
    subunit: '1.3-business-objectives',
    definition: 'The **conscientious consideration** of ==ethical and environmental practices== in business activity, acting *morally* towards <u>all stakeholder groups and the well-being of society as a whole</u>.',
    keyExamTokens: ['conscientious consideration', 'ethical and environmental practice', 'all stakeholder groups', 'well-being of society']
  },
  {
    id: 'def-20',
    term: 'Ansoff Matrix',
    subunit: 'bmt-ansoff-matrix',
    definition: 'A **strategic analytical 2x2 framework** mapping corporate growth across *Products* and *Markets* into ==Market Penetration, Product Development, Market Development, and Diversification== along an <u>escalating risk continuum</u>.',
    keyExamTokens: ['2x2 growth matrix', 'Products vs Markets', '4 growth strategies', 'risk escalation continuum']
  },
{
  "id": "def-21",
  "term": "STEEPLE Analysis",
  "subunit": "bmt-steeple-analysis",
  "definition": "An **analytical management framework** auditing ==external macro-environmental opportunities and threats== across *Social, Technological, Economic, Environmental, Political, Legal, and Ethical* factors <u>beyond direct corporate control</u>.",
  "keyExamTokens": [
    "external macro-environment",
    "opportunities and threats",
    "7 dimensions",
    "beyond direct control"
  ]
},
{
  "id": "def-22",
  "term": "SPICED Rule",
  "subunit": "bmt-steeple-analysis",
  "definition": "An **economic exchange-rate axiom** stating that a ==Strong Pound (or domestic currency) makes Imports Cheaper and Exports Dearer==, <u>lowering costs for raw material importers</u> while *reducing price-competitiveness for domestic exporters*.",
  "keyExamTokens": [
    "Strong Pound",
    "Imports Cheaper",
    "Exports Dearer",
    "currency appreciation"
  ]
},
{
  "id": "def-23",
  "term": "BCG Matrix",
  "subunit": "bmt-toolkit",
  "definition": "A **portfolio planning matrix** categorizing corporate products across *Market Growth Rate* and *Relative Market Share* into ==Stars, Cash Cows, Question Marks, and Dogs== to <u>optimize corporate cash flow allocation</u>.",
  "keyExamTokens": [
    "portfolio planning",
    "Market Growth Rate",
    "Relative Market Share",
    "Stars, Cash Cows, Question Marks, Dogs"
  ]
},
{
  "id": "def-24",
  "term": "Cash Cow",
  "subunit": "bmt-toolkit",
  "definition": "A **mature, highly profitable product** with ==high market share== in a *low-growth market*, requiring minimal reinvestment and <u>generating substantial surplus cash</u> to fund growth elsewhere.",
  "keyExamTokens": [
    "high market share",
    "low market growth",
    "surplus cash generator",
    "minimal reinvestment"
  ]
},
{
  "id": "def-25",
  "term": "Expected Monetary Value (EMV)",
  "subunit": "bmt-toolkit",
  "definition": "The ==probability-weighted average financial outcome== of a chance node, calculated as the **sum of (Probability × Payoff)**; Net EMV <u>always deducts initial capital expenditure</u>.",
  "keyExamTokens": [
    "probability-weighted average",
    "Sum(Probability x Payoff)",
    "decision trees",
    "net expected payoff"
  ]
},
{
  "id": "def-26",
  "term": "Circular Business Model (PSS)",
  "subunit": "bmt-toolkit",
  "definition": "A **regenerative commercial model** where businesses <u>retain asset ownership</u> and sell the *service or functional utility* (Product-Service System), ==decoupling economic profit from resource consumption and waste==.",
  "keyExamTokens": [
    "Product-Service System",
    "retain asset ownership",
    "sell functional utility",
    "closed resource loops"
  ]
},
{
  "id": "def-27",
  "term": "Stakeholder",
  "subunit": "1.4-stakeholders",
  "definition": "Any **individual or group** with a ==direct interest or involvement== in a business, who is <u>impacted by organizational decisions</u> or *exerts influence over corporate conduct*.",
  "keyExamTokens": [
    "direct interest or involvement",
    "impacted by organizational decisions",
    "internal vs external",
    "broad umbrella group"
  ]
},
{
  "id": "def-28",
  "term": "Internal Stakeholders",
  "subunit": "1.4-stakeholders",
  "definition": "**Members of the business organization** who <u>operate from within the enterprise</u> (*employees, managers, directors*), motivated by ==wages, career progression, working conditions, and executive bonuses==.",
  "keyExamTokens": [
    "operate from within",
    "employees, managers, directors",
    "internal owners",
    "daily operational involvement"
  ]
},
{
  "id": "def-29",
  "term": "External Stakeholders",
  "subunit": "1.4-stakeholders",
  "definition": "**Individuals and outside organizations** not part of the firm but having a <u>direct interest in its operations or conduct</u> (*customers, suppliers, financiers, pressure groups, government*), seeking ==competitive pricing, prompt payment, and regulatory compliance==.",
  "keyExamTokens": [
    "outside the business",
    "customers, suppliers, financiers",
    "pressure groups, government",
    "external regulatory/market interest"
  ]
},
{
  "id": "def-30",
  "term": "Stakeholder Conflict",
  "subunit": "1.4-stakeholders",
  "definition": "Differences in the **varying needs and priorities** of different stakeholder groups, meaning it is <u>not possible to satisfy all stakeholder objectives simultaneously</u> (e.g. *higher employee wages* vs ==higher shareholder dividend payouts==).",
  "keyExamTokens": [
    "incompatible priorities",
    "competing stakeholder objectives",
    "cannot meet all objectives simultaneously",
    "remuneration vs dividends"
  ]
},
{
  "id": "def-31",
  "term": "Stakeholder Mapping",
  "subunit": "1.4-stakeholders",
  "definition": "A **strategic analytical model** assessing stakeholders by *Power* and *Interest* into four quadrants: **A** (*low power, low interest* -> <u>minimum effort</u>), **B** (*low power, high interest* -> <u>keep informed</u>), **C** (*high power, low interest* -> <u>keep satisfied</u>), and **D** (==high power, high interest -> maximum effort for key stakeholders==).",
  "keyExamTokens": [
    "power-interest grid",
    "Power vs Interest axes",
    "A minimum effort, B keep informed",
    "C keep satisfied, D maximum effort"
  ]
},
{
  "id": "def-32",
  "term": "Economies of Scale",
  "subunit": "1.5-growth-and-evolution",
  "definition": "==Lower average costs of production== (*ATC* or unit cost) as a firm operates on a **larger scale**, due to an <u>improvement in its productive efficiency</u> (*spreading fixed costs* as *AFC* falls).",
  "keyExamTokens": [
    "reduction in average cost (AC)",
    "expansion in operational scale/output",
    "spreading fixed costs (AFC declines)",
    "not merely bulk buying"
  ]
},
{
  "id": "def-33",
  "term": "Diseconomies of Scale",
  "subunit": "1.5-growth-and-evolution",
  "definition": "The **cost disadvantages of growth** when expanding <u>beyond the optimal level of output</u>, resulting in ==rising average costs of production== (*ATC* increases) due to *lack of control, coordination and communication*.",
  "keyExamTokens": [
    "rising average costs",
    "beyond the optimal level of output",
    "communication breakdown",
    "managerial coordination failure",
    "worker alienation & bureaucracy"
  ]
},
{
  "id": "def-34",
  "term": "Optimal Level of Output",
  "subunit": "1.5-growth-and-evolution",
  "definition": "The <u>most efficient scale of operation</u> for a business: the level of output where ==average cost of production is minimized== (*ATC*\*), located at the **lowest point of the U-shaped average cost curve**.",
  "keyExamTokens": [
    "lowest average cost",
    "most efficient scale of operation",
    "lowest point of the average cost curve",
    "boundary between economies & diseconomies"
  ]
},
{
  "id": "def-35",
  "term": "Internal Economies of Scale",
  "subunit": "1.5-growth-and-evolution",
  "definition": "==Cost-reducing benefits== that originate **inside the organization** and remain <u>directly within managerial control</u> (*technical, financial, managerial, specialization, marketing, purchasing, and risk-bearing*).",
  "keyExamTokens": [
    "within firm's internal control",
    "unique to expanding organization",
    "technical, financial, managerial",
    "purchasing, marketing, risk-bearing"
  ]
},
{
  "id": "def-36",
  "term": "External Economies of Scale",
  "subunit": "1.5-growth-and-evolution",
  "definition": "==Cost savings== that arise **outside the individual organization** due to *location or industry growth*, <u>enjoyed by all competing firms in that region or industry</u>.",
  "keyExamTokens": [
    "outside the individual firm",
    "shared by all industry firms",
    "regional specialisation",
    "skilled local labour",
    "improved transportation networks"
  ]
},
  {
    id: 'def-A1-01',
    term: 'Needs',
    subunit: '1.1-what-is-a-business',
    definition: 'The basic necessities that a person must have to survive, such as food, water, warmth, shelter and clothing.',
    keyExamTokens: ['basic necessities', 'survive', 'food, water, warmth, shelter, clothing']
  },
  {
    id: 'def-A1-02',
    term: 'Wants',
    subunit: '1.1-what-is-a-business',
    definition: 'People\'s desires: the things they would like to have, such as a larger home, a new smartphone, an overseas holiday or a birthday cake.',
    keyExamTokens: ['desires', 'would like to have', 'discretionary']
  },
  {
    id: 'def-A1-03',
    term: 'Goods',
    subunit: '1.1-what-is-a-business',
    definition: 'Physical, tangible products produced and sold to customers, such as laptops, books, contact lenses, perfumes and toys.',
    keyExamTokens: ['physical products', 'tangible', 'produced and sold']
  },
  {
    id: 'def-A1-04',
    term: 'Services',
    subunit: '1.1-what-is-a-business',
    definition: 'Intangible products sold to customers, such as the services provided by airlines, restaurants, cinemas, banks, health and beauty spas, schools and hospitals.',
    keyExamTokens: ['intangible', 'sold to customers', 'product category']
  },
  {
    id: 'def-A1-05',
    term: 'Customer',
    subunit: '1.1-what-is-a-business',
    definition: 'The individual or organization that buys (purchases) the product, transacting financially.',
    keyExamTokens: ['buys', 'financial transaction', 'not necessarily the user']
  },
  {
    id: 'def-A1-06',
    term: 'Consumer',
    subunit: '1.1-what-is-a-business',
    definition: 'The individual or organization that actually uses the product.',
    keyExamTokens: ['actually uses', 'end-user', 'may differ from the customer']
  },
  {
    id: 'def-A1-07',
    term: 'Entrepreneurship',
    subunit: '1.1-what-is-a-business',
    definition: 'The collective knowledge, skills and experiences of entrepreneurs; it also describes the trait of business leaders who are distinctive in their temperament, attitude and outlook.',
    keyExamTokens: ['collective knowledge, skills and experiences', 'trait', 'temperament, attitude and outlook']
  },
  {
    id: 'def-A1-08',
    term: 'Primary Sector',
    subunit: '1.1-what-is-a-business',
    definition: 'Businesses involved in the cultivation or extraction of natural resources, such as farming, mining, quarrying, fishing, oil exploration and forestry.',
    keyExamTokens: ['cultivation', 'extraction', 'natural resources']
  },
  {
    id: 'def-A1-09',
    term: 'Secondary Sector',
    subunit: '1.1-what-is-a-business',
    definition: 'Businesses concerned with the construction and manufacturing of products.',
    keyExamTokens: ['construction', 'manufacturing', 'medium-income countries']
  },
  {
    id: 'def-A1-10',
    term: 'Tertiary Sector',
    subunit: '1.1-what-is-a-business',
    definition: 'Businesses involved with the provision of services to customers, such as retailing, transport, banking, insurance, healthcare, tourism and entertainment.',
    keyExamTokens: ['provision of services', 'retailing', 'high-income countries']
  },
  {
    id: 'def-A1-11',
    term: 'Quaternary Sector',
    subunit: '1.1-what-is-a-business',
    definition: 'A sub-category of the tertiary sector where businesses are involved in intellectual and knowledge-based activities that generate and share information, such as ICT, research and development and consultancy.',
    keyExamTokens: ['sub-category of tertiary', 'knowledge-based', 'generate and share information', 'R&D']
  },
  {
    id: 'def-A1-12',
    term: 'Private Sector',
    subunit: '1.2-types-of-business-entities',
    definition: 'Organizations owned and controlled by private individuals and businesses rather than by government; most of them aim to earn profit.',
    keyExamTokens: ['private individuals', 'not government', 'profit (most, not all)']
  },
  {
    id: 'def-A1-13',
    term: 'Public Sector',
    subunit: '1.2-types-of-business-entities',
    definition: 'Organizations under the ownership and control of government, which typically provide essential goods and services that the private sector would underprovide or provide inefficiently.',
    keyExamTokens: ['government ownership and control', 'essential goods and services', 'underprovided']
  },
  {
    id: 'def-A1-15',
    term: 'Niche',
    subunit: '1.1-what-is-a-business',
    definition: 'A gap, or under-served part, of the market that a business can identify and fill with its products; often the key to small business success.',
    keyExamTokens: ['gap', 'identify and fill', 'small business success']
  },
  {
    id: 'def-A1-16',
    term: 'Silent Partner',
    subunit: '1.2-types-of-business-entities',
    definition: 'A partner who has a financial stake in the partnership and is eligible for a portion of profits, but does not take an active part in running it. Also called a sleeping partner.',
    keyExamTokens: ['financial stake', 'portion of profits', 'not active in running']
  },
  {
    id: 'def-A1-17',
    term: 'Limited Liability Partner',
    subunit: '1.2-types-of-business-entities',
    definition: 'A partner who has been elected to have limited liability; the rare exception to the usual unlimited liability of partners.',
    keyExamTokens: ['elected', 'limited liability', 'rare exception']
  },
  {
    id: 'def-A1-18',
    term: 'Deed of Partnership',
    subunit: '1.2-types-of-business-entities',
    definition: 'The legal contract (partnership deed) setting out each partner\'s finance, roles and responsibilities, how profits and losses are shared, conditions for new partners, withdrawal clauses and procedures for ending the partnership.',
    keyExamTokens: ['legal contract', 'finance', 'profit and loss sharing', 'withdrawal', 'ending the partnership']
  },
  {
    id: 'def-A1-19',
    term: 'Joint-Stock Company',
    subunit: '1.2-types-of-business-entities',
    definition: 'Another name for a corporation: a company whose shares (stock) are jointly held by numerous shareholders.',
    keyExamTokens: ['corporation', 'jointly held shares', 'numerous shareholders']
  },
  {
    id: 'def-A1-20',
    term: 'Memorandum of Association',
    subunit: '1.2-types-of-business-entities',
    definition: 'A brief document, produced and submitted before a limited company trades, stating its trading name, main purpose, registered business address and amount of share capital.',
    keyExamTokens: ['brief document', 'trading name', 'main purpose', 'registered address', 'share capital']
  },
  {
    id: 'def-A1-21',
    term: 'Articles of Association',
    subunit: '1.2-types-of-business-entities',
    definition: 'The longer document, submitted before trading, setting out a company\'s internal regulations, the rights and powers of the BOD and shareholders, AGM procedures, director appointment and profit distribution.',
    keyExamTokens: ['internal regulations', 'rights and powers', 'AGM procedures', 'profit distribution']
  },
  {
    id: 'def-A1-22',
    term: 'Certificate of Incorporation',
    subunit: '1.2-types-of-business-entities',
    definition: 'Issued by the authorities once they are satisfied with the Memorandum and Articles and an application fee has been paid; it recognises the business as a separate legal entity and allows it to start trading.',
    keyExamTokens: ['issued by authorities', 'application fee', 'separate legal entity', 'allows trading']
  },
  {
    id: 'def-A1-23',
    term: 'Board of Directors (BOD)',
    subunit: '1.2-types-of-business-entities',
    definition: 'Directors elected by shareholders, for their skills and expertise, to run the company on their behalf; the BOD is accountable to the shareholders.',
    keyExamTokens: ['elected by shareholders', 'skills and expertise', 'accountable to shareholders']
  },
  {
    id: 'def-A1-24',
    term: 'Annual General Meeting (AGM)',
    subunit: '1.2-types-of-business-entities',
    definition: 'The meeting all companies must hold, where shareholders vote on resolutions and the re-election of directors, question the CEO and directors, and approve the annual report and financial accounts.',
    keyExamTokens: ['all companies must hold', 'resolutions', 're-election of directors', 'approve accounts']
  },
  {
    id: 'def-A1-25',
    term: 'Stock Exchange',
    subunit: '1.2-types-of-business-entities',
    definition: 'A marketplace for trading the shares of publicly held (public limited) companies, such as the London Stock Exchange and the New York Stock Exchange; companies must obey its rules for their shares to be sold on it.',
    keyExamTokens: ['marketplace', 'publicly held companies', 'LSE', 'NYSE', 'listing rules']
  },
  {
    id: 'def-A2-01',
    term: 'Triple Bottom Line',
    subunit: '1.2-types-of-business-entities',
    definition: 'An accounting framework, coined by John Elkington in 1994, under which a social enterprise pursues three broad aims: economic (earning a surplus and reinvesting it), social (benefits to people in society, such as local jobs) and environmental (protecting the planet).',
    keyExamTokens: ['economic aims', 'social aims', 'environmental aims', 'John Elkington 1994', 'surplus reinvested']
  },
  {
    id: 'def-A2-02',
    term: 'Public Sector Company',
    subunit: '1.2-types-of-business-entities',
    definition: 'A state-owned enterprise, wholly or partly owned by the government, that trades commercially for financial gain while providing essential services that may be inefficient or undesirable if left solely to the private sector.',
    keyExamTokens: ['government-owned wholly or partly', 'commercial for financial gain', 'essential services', 'government revenue']
  },
  {
    id: 'def-A2-03',
    term: 'Public Corporation',
    subunit: '1.2-types-of-business-entities',
    definition: 'An organization owned and operated by the government on behalf of the general public or society as a whole. It is not the same as a publicly held company.',
    keyExamTokens: ['government-owned', 'on behalf of the public', 'not a publicly held company']
  },
  {
    id: 'def-A2-05',
    term: 'Non-Profit Organization',
    subunit: '1.2-types-of-business-entities',
    definition: 'An organization run in a commercial-like manner whose main goal is not profit. Any surplus is retained and reinvested for its social goals, self-preservation and growth, rather than distributed to owners or shareholders.',
    keyExamTokens: ['surplus retained', 'reinvested in mission', 'not distributed to owners', 'social goals']
  },
  {
    id: 'def-A2-06',
    term: 'Private Voluntary Organization (PVO)',
    subunit: '1.2-types-of-business-entities',
    definition: 'Another name for a non-governmental organization (NGO): any kind of organization that is independent of government or direct public sector influence and is not-for-profit.',
    keyExamTokens: ['NGO alias', 'independent of government', 'not-for-profit', 'Article 71 UN Charter']
  },
  {
    id: 'def-A2-07',
    term: 'Ethical Code of Practice',
    subunit: '1.3-business-objectives',
    definition: 'A documented statement of a business\'s beliefs and philosophies that sets out what is and is not acceptable behaviour in the organization. It is often published in annual reports and provides consistency and uniformity in the workplace.',
    keyExamTokens: ['documented beliefs', 'acceptable behaviour', 'consistency and uniformity', 'annual reports']
  },
  {
    id: 'def-A2-08',
    term: 'Market Share',
    subunit: '1.3-business-objectives',
    definition: 'A firm\'s sales revenue expressed as a percentage of the industry\'s total sales revenue. A higher market share indicates greater market dominance and a greater ability to compete against rivals.',
    keyExamTokens: ['percentage of industry sales', 'market dominance', 'ability to compete'],
    formulaOrExample: 'Market share (%) = firm\'s sales revenue / industry total sales revenue x 100'
  },
  {
    id: 'def-A2-09',
    term: 'Market Standing',
    subunit: '1.3-business-objectives',
    definition: 'The extent to which a business has a presence in its industry. High or good market standing brings competitive advantages, as seen with Microsoft in computer software or Walmart in retail.',
    keyExamTokens: ['presence in industry', 'competitive advantage', 'market leader']
  },
  {
    id: 'def-A2-10',
    term: 'Dividend',
    subunit: '1.3-business-objectives',
    definition: 'A proportion of a company\'s profits distributed to shareholders as a cash payment. An unprofitable company cannot distribute any dividends.',
    keyExamTokens: ['proportion of profits', 'paid to shareholders', 'no profit, no dividend']
  },
  {
    id: 'def-A3-01',
    term: 'Pressure Group',
    subunit: '1.4-stakeholders',
    definition: 'An organized group of individuals with a common concern (such as environmental protection) who seek to place demands on organizations to act in a particular way or to influence a change in their behaviour. Uses boycotting, lobbying, public relations and direct action.',
    keyExamTokens: ['common concern', 'demands on organizations', 'boycotting, lobbying, PR, direct action', 'influence change in behaviour']
  },
  {
    id: 'def-A3-03',
    term: 'Ethical Objectives',
    subunit: '1.3-business-objectives',
    definition: 'Organizational goals based on moral guidelines, determined by the business and/or society, which direct and determine decision-making.',
    keyExamTokens: ['goals based on moral guidelines', 'set by business and/or society', 'direct decision-making']
  },
  {
    id: 'def-A3-04',
    term: 'Shareholder (Stockholder)',
    subunit: '1.4-stakeholders',
    definition: 'An owner of a limited liability company who holds shares in it. Shares can be held by individuals and other organizations. Shareholders are one stakeholder group.',
    keyExamTokens: ['owner of limited liability company', 'holds shares', 'individuals and organizations', 'one stakeholder group']
  },
  {
    id: 'def-A3-05',
    term: 'Ethics',
    subunit: '1.3-business-objectives',
    definition: 'The moral principles that guide decision-making and business strategy.',
    keyExamTokens: ['moral principles', 'guides decision-making', 'business strategy']
  },
  {
    id: 'def-A4-01',
    term: 'Internal (Organic) Growth',
    subunit: '1.5-growth-and-evolution',
    definition: 'Business expansion achieved using the firm\'s own capabilities and resources, financed by retained profits, borrowing or new share issues.',
    keyExamTokens: ['own resources', 'retained profits', 'slower but less risky', 'keeps control and culture']
  },
  {
    id: 'def-A4-02',
    term: 'External (Inorganic) Growth',
    subunit: '1.5-growth-and-evolution',
    definition: 'Business expansion achieved through dealings with outside organizations, such as mergers, acquisitions, takeovers, joint ventures, strategic alliances and franchising.',
    keyExamTokens: ['outside organizations', 'amalgamation or integration', 'quicker', 'more expensive and riskier']
  },
  {
    id: 'def-A4-03',
    term: 'Merger',
    subunit: '1.5-growth-and-evolution',
    definition: 'An agreement between two or more firms to combine and create a new company with its own legal identity, usually with a new name and a board drawn from all the companies involved.',
    keyExamTokens: ['new legal identity', 'new company', 'agreement of both sides', 'BP Amoco']
  },
  {
    id: 'def-A4-04',
    term: 'Acquisition',
    subunit: '1.5-growth-and-evolution',
    definition: 'The purchase of a controlling interest in another company with the permission and agreement of the target\'s board of directors.',
    keyExamTokens: ['controlling interest', 'board permission', 'acquired firm often keeps its name']
  },
  {
    id: 'def-A4-05',
    term: 'Takeover (Hostile Takeover)',
    subunit: '1.5-growth-and-evolution',
    definition: 'The purchase of a controlling stake (a majority of shares) in another company without the permission and agreement of its board. Offers are usually above the stock market value of the shares.',
    keyExamTokens: ['controlling stake', 'without board permission', 'hostile', 'offer above market value']
  },
  {
    id: 'def-A4-06',
    term: 'Joint Venture',
    subunit: '1.5-growth-and-evolution',
    definition: 'An arrangement in which two or more businesses share the costs, risks, control and rewards of a project by agreeing to set up a new legal business entity, typically splitting costs and profits 50:50.',
    keyExamTokens: ['shared costs and risks', 'new legal entity', '50:50', 'keep corporate identity']
  },
  {
    id: 'def-A4-07',
    term: 'Strategic Alliance',
    subunit: '1.5-growth-and-evolution',
    definition: 'A cooperation in which two or more businesses share the costs of product development, operations and marketing for mutual benefit, while remaining independent organizations with no new legal entity.',
    keyExamTokens: ['remain independent', 'no new legal entity', 'shared costs', 'feasibility study first']
  },
  {
    id: 'def-A4-08',
    term: 'Synergy',
    subunit: '1.5-growth-and-evolution',
    definition: 'The benefit when two or more integrated businesses produce a combined result greater than the sum of their individual parts (1 + 1 = 3), creating greater output and improved efficiency.',
    keyExamTokens: ['whole greater than sum of parts', '1 + 1 = 3', 'greater output and efficiency'],
    formulaOrExample: '1 + 1 = 3'
  },
  {
    id: 'def-A4-09',
    term: 'Horizontal Integration',
    subunit: '1.5-growth-and-evolution',
    definition: 'An M&A between firms operating in the same industry, which increases market share and market power but does not grow the industry itself.',
    keyExamTokens: ['same industry', 'market share', 'market power', 'Nike and Umbro']
  },
  {
    id: 'def-A4-10',
    term: 'Vertical Integration (Forward and Backward)',
    subunit: '1.5-growth-and-evolution',
    definition: 'An M&A between firms at different stages of production. Forward integration moves towards the consumer; backward integration moves towards suppliers and raw materials.',
    keyExamTokens: ['different stages of production', 'forward: towards consumer', 'backward: towards suppliers', 'lower raw material costs']
  },
  {
    id: 'def-A4-11',
    term: 'Lateral Integration',
    subunit: '1.5-growth-and-evolution',
    definition: 'An M&A between firms with similar operations that do not directly compete with each other.',
    keyExamTokens: ['similar operations', 'do not directly compete', 'Tata Motors and Jaguar Land Rover']
  },
  {
    id: 'def-A4-12',
    term: 'Conglomerate M&A',
    subunit: '1.5-growth-and-evolution',
    definition: 'An M&A between businesses operating in completely distinct or diversified markets, which spreads risk across markets.',
    keyExamTokens: ['distinct or diversified markets', 'spreads risk', 'Berkshire Hathaway']
  },
  {
    id: 'def-A5-01',
    term: 'Multinational Company (MNC)',
    subunit: '1.6-multinational-companies',
    definition: 'An organization that operates in two or more countries, usually with its head office based in the home country.',
    keyExamTokens: ['two or more countries', 'head office in home country', 'international operations']
  },
  {
    id: 'def-A5-02',
    term: 'Transnational Corporation',
    subunit: '1.6-multinational-companies',
    definition: 'Some commentators\' term for a multinational with regional head offices rather than a single international base; often used interchangeably with MNC.',
    keyExamTokens: ['regional head offices', 'single international base']
  },
  {
    id: 'def-A5-03',
    term: 'Host Country',
    subunit: '1.6-multinational-companies',
    definition: 'Any nation that allows a multinational company to set up in its country. MNCs have varying impacts on host countries, some beneficial and some detrimental.',
    keyExamTokens: ['any nation', 'allows MNC to set up', 'beneficial and detrimental impacts']
  },
  {
    id: 'def-A5-04',
    term: 'Protectionist Policies',
    subunit: '1.6-multinational-companies',
    definition: 'Measures imposed by a country to reduce the competitiveness of imports: tariffs, quotas and restrictive trade practices.',
    keyExamTokens: ['reduce competitiveness of imports', 'tariffs', 'quotas', 'restrictive trade practices']
  },
  {
    id: 'def-A5-05',
    term: 'Tariff',
    subunit: '1.6-multinational-companies',
    definition: 'A tax on imports that adds to the price of foreign products, making imports less price competitive.',
    keyExamTokens: ['tax on imports', 'adds to price', 'less price competitive']
  },
  {
    id: 'def-A5-06',
    term: 'Quota',
    subunit: '1.6-multinational-companies',
    definition: 'A quantitative limit on the sale of imports. It lowers the supply or availability of imported products and forces up import prices.',
    keyExamTokens: ['quantitative limit', 'lower supply', 'forces up import prices']
  },
  {
    id: 'def-A5-07',
    term: 'Restrictive Trade Practices',
    subunit: '1.6-multinational-companies',
    definition: 'Acts that unfairly, although not illegally, discriminate against foreign firms, such as rigorous administrative procedures and strict safety standards on imports.',
    keyExamTokens: ['unfairly', 'not illegally', 'discriminate against foreign firms']
  },
  {
    id: 'def-A5-08',
    term: 'Repatriation of Profits',
    subunit: '1.6-multinational-companies',
    definition: 'Transfer of profits earned in a host country back to the MNC\'s home country. It can reduce the host country\'s tax revenues and FDI.',
    keyExamTokens: ['profits sent to home country', 'reduces host tax revenues', 'FDI']
  },
  {
    id: 'def-A5-09',
    term: 'Footloose (MNC)',
    subunit: '1.6-multinational-companies',
    definition: 'An MNC not bound to a specific location, so it can change its location at very short notice for cost advantages.',
    keyExamTokens: ['not bound to a location', 'very short notice', 'cost advantages']
  },
  {
    id: 'def-A5-10',
    term: 'Brand Acquisition',
    subunit: '1.6-multinational-companies',
    definition: 'Buying one of the brands of a target company, as an alternative to buying the whole company. Relatively low risk but can be expensive.',
    keyExamTokens: ['one brand of target company', 'alternative to full acquisition', 'low risk but expensive']
  },
  {
    id: 'def-A5-11',
    term: 'Gross Domestic Product (GDP)',
    subunit: '1.6-multinational-companies',
    definition: 'The value of a country\'s annual output or national income.',
    keyExamTokens: ['annual output', 'national income']
  },
  {
    id: 'def-A5-12',
    term: 'Franchising',
    subunit: '1.5-growth-and-evolution',
    definition: 'A franchisor sells its rights to franchisees, who sell products under its corporate name in return for a licence fee and regular royalty payments (usually a percentage of sales revenue).',
    keyExamTokens: ['franchisor', 'franchisee', 'licence fee', 'royalty payments']
  },
  {
    id: 'def-A5-16',
    term: 'Target Company',
    subunit: '1.5-growth-and-evolution',
    definition: 'The organization that is purchased by another in an acquisition or takeover deal.',
    keyExamTokens: ['purchased', 'acquisition or takeover']
  },
  {
    id: 'def-A5-17',
    term: 'Purchaser',
    subunit: '1.5-growth-and-evolution',
    definition: 'The acquiring company in an acquisition, or the buyer of another company in a takeover.',
    keyExamTokens: ['acquiring company', 'buyer']
  },
  {
    id: 'def-A5-20',
    term: 'Demerger',
    subunit: '1.5-growth-and-evolution',
    definition: 'A company sells off part of its business, separating into two or more businesses. Usually follows conflicts, inefficiencies or incompatibilities after a merger.',
    keyExamTokens: ['sells off part', 'two or more businesses', 'after a merger']
  },
  {
    id: 'def-A5-21',
    term: 'Conglomerate',
    subunit: '1.5-growth-and-evolution',
    definition: 'A business that provides a diversified range of products and operates in a range of different industries.',
    keyExamTokens: ['diversified range', 'different industries']
  },
  {
    id: 'def-A5-24',
    term: 'Forward Vertical Integration',
    subunit: '1.5-growth-and-evolution',
    definition: 'Amalgamation with a firm operating at a later stage of the production process (e.g. a book publisher acquiring book retailers).',
    keyExamTokens: ['later stage', 'amalgamation']
  },
  {
    id: 'def-A5-25',
    term: 'Backward Vertical Integration',
    subunit: '1.5-growth-and-evolution',
    definition: 'Amalgamation with a firm operating in an earlier stage of production (e.g. a car manufacturer taking over a tyre supplier).',
    keyExamTokens: ['earlier stage', 'amalgamation']
  },
  {
    id: 'def-A5-26',
    term: 'Situational Tool (BMT)',
    subunit: 'bmt-toolkit',
    definition: 'A BMT tool that assesses the internal and external factors affecting a business. It answers "Where are we now?" (p.604 examples: SWOT, STEEPLE, descriptive statistics; note the p.651 IB box classes descriptive statistics as a decision-making tool, and p.604 says classification often overlaps).',
    keyExamTokens: ['internal and external factors', 'Where are we now?']
  },
  {
    id: 'def-A5-27',
    term: 'Scientific Decision-Making',
    subunit: 'bmt-toolkit',
    definition: 'Using BMT tools to make objective, rational and logical decisions. It reduces the risk of mistakes that intuition alone can cause for strategic decisions.',
    keyExamTokens: ['objective, rational, logical', 'reduces risk of mistakes']
  },
  {
    id: 'def-A6-01',
    term: 'SWOT Analysis',
    subunit: 'bmt-swot-analysis',
    definition: 'A situational tool that assesses a business\'s current position by evaluating its internal Strengths and Weaknesses and its external Opportunities and Threats.',
    keyExamTokens: ['situational tool', 'internal S and W', 'external O and T', 'current position', 'written bullets, not a table']
  },
  {
    id: 'def-A6-02',
    term: 'Holding Company',
    subunit: 'bmt-ansoff-matrix',
    definition: 'A diversified business (also called a parent company) that owns a controlling interest in other diverse companies, called subsidiaries, with enough shares to take control of them.',
    keyExamTokens: ['controlling interest', 'parent company', 'subsidiaries', 'diversification']
  },
  {
    id: 'def-A6-03',
    term: 'Market Penetration',
    subunit: 'bmt-ansoff-matrix',
    definition: 'The Ansoff growth strategy of selling existing products in existing markets to increase sales revenue and market share. It is the lowest-risk option.',
    keyExamTokens: ['existing products', 'existing markets', 'lowest risk', 'market share', 'price-war risk']
  },
  {
    id: 'def-A6-04',
    term: 'Inflation',
    subunit: 'bmt-steeple-analysis',
    definition: 'The continual rise in the general level of prices in an economy. Uncontrolled inflation raises business costs and reduces international price competitiveness.',
    keyExamTokens: ['continual rise', 'general level of prices', 'excessive demand', 'higher costs of production', 'price competitiveness']
  },
  {
    id: 'def-A6-05',
    term: 'Cyclical Unemployment',
    subunit: 'bmt-steeple-analysis',
    definition: 'Unemployment (also called demand deficient unemployment) caused by a lack of demand in the economy during a recession. It is the most severe type because it affects all industries.',
    keyExamTokens: ['demand deficient', 'recession', 'most severe type', 'affects all industries']
  },
  {
    id: 'def-A6-06',
    term: 'Recession',
    subunit: 'bmt-steeple-analysis',
    definition: 'A fall in GDP for two consecutive quarters (six months), caused by a continual decline in spending, investment and export earnings and by rising unemployment.',
    keyExamTokens: ['two consecutive quarters', 'fall in GDP', 'followed by the trough', 'business cycle']
  },
  {
    id: 'def-A7-01',
    term: 'Business Plan',
    subunit: 'bmt-business-plan',
    definition: 'A formal report detailing the key aspects of a business idea or proposition and how the organization sets out to achieve it. It is a management planning tool.',
    keyExamTokens: ['formal report', 'business idea or proposition', 'management planning tool', 'lenders', 'Table 48.1']
  },
  {
    id: 'def-A7-02',
    term: 'Executive Summary',
    subunit: 'bmt-business-plan',
    definition: 'A synopsis or abstract of the main report in a business plan, highlighting the key points and conclusions. It is placed at the front of a longer plan and can be read within a few minutes.',
    keyExamTokens: ['synopsis', 'key points and conclusions', 'placed at the front']
  },
  {
    id: 'def-A7-03',
    term: 'Mean (Arithmetic Mean)',
    subunit: 'bmt-descriptive-statistics',
    definition: 'The most common measure of average, found by dividing the sum of all the numbers in a data set by the total number of items.',
    keyExamTokens: ['sum of all numbers', 'total number of items', 'average'],
    formulaOrExample: 'Meals sold 320, 310, 320, 360, 405: total 1,715 / 5 days = 343'
  },
  {
    id: 'def-A7-04',
    term: 'Interquartile Range',
    subunit: 'bmt-descriptive-statistics',
    definition: 'The difference between the first and third quartiles. It shows the spread of the middle of the data and is used to identify outliers.',
    keyExamTokens: ['first and third quartiles', 'middle spread', 'outliers'],
    formulaOrExample: 'Upper quartile - lower quartile (e.g. 21 - 18 = 3)'
  },
  {
    id: 'def-A7-05',
    term: 'Standard Deviation',
    subunit: 'bmt-descriptive-statistics',
    definition: 'A statistical measure of the dispersion of the values in a data set around the mean. A lower value means the values are closer to the mean; a higher value means they are more spread out.',
    keyExamTokens: ['dispersion', 'around the mean', 'average distance from the mean', 'normal distribution'],
    formulaOrExample: 'Within 1 SD about 68% of data; within 2 SD about 95%; within 3 SD almost all'
  },
  {
    id: 'def-A7-06',
    term: 'Protectionist Measures',
    subunit: 'bmt-steeple-analysis',
    definition: 'Government policies that protect domestic businesses from foreign competitors, such as tariffs, quotas, subsidies, embargoes and technological or safety standards.',
    keyExamTokens: ['tariffs', 'quotas', 'subsidies', 'embargoes', 'barriers to trade']
  }
,
  {
    "id": "def-u2-01",
    "term": "Capital Expenditure (CapEx)",
    "subunit": "3.1-intro-to-finance",
    "definition": "Investment spending on ==fixed assets== (non-current assets) such as *machinery, land, buildings, and vehicles* that have a <u>long-term function</u> and are used repeatedly for production.",
    "keyExamTokens": [
      "investment spending",
      "fixed assets",
      "long-term function",
      "repeated production use"
    ]
  },
  {
    "id": "def-u2-02",
    "term": "Revenue Expenditure (RevEx)",
    "subunit": "3.1-intro-to-finance",
    "definition": "Spending on the ==daily running costs== of a business, such as *wages, raw materials, rent, and utility bills*, providing <u>immediate operational value</u> in the current trading period.",
    "keyExamTokens": [
      "daily running costs",
      "wages and salaries",
      "raw materials",
      "immediate operational value"
    ]
  },
  {
    "id": "def-u2-03",
    "term": "Collateral",
    "subunit": "3.1-intro-to-finance",
    "definition": "A ==financial guarantee or fixed asset== pledged by a commercial borrower to <u>secure external loan capital</u>, reducing lending risk for banks.",
    "keyExamTokens": [
      "financial guarantee",
      "pledged asset",
      "secure loan capital",
      "lender protection"
    ]
  },
  {
    "id": "def-u2-04",
    "term": "Retained Profit",
    "subunit": "3.2-sources-of-finance",
    "definition": "The ==net profit surplus remaining== after deducting interest, corporate tax, and dividend payments, which is <u>reinvested into the business</u> as internal equity.",
    "keyExamTokens": [
      "after interest, tax, dividends",
      "reinvested into business",
      "internal equity",
      "non-debt finance"
    ]
  },
  {
    "id": "def-u2-05",
    "term": "Share Capital",
    "subunit": "3.2-sources-of-finance",
    "definition": "==Permanent equity capital== raised by limited liability companies through the <u>sale of shares</u>, carrying zero mandatory interest payments but diluting ownership control.",
    "keyExamTokens": [
      "permanent equity",
      "sale of shares",
      "no mandatory interest",
      "dilution of control"
    ]
  },
  {
    "id": "def-u2-06",
    "term": "Bank Overdraft",
    "subunit": "3.2-sources-of-finance",
    "definition": "A flexible banking arrangement allowing a firm to ==temporarily withdraw more funds than exist in its account== up to an agreed limit, paying daily interest only on drawn funds.",
    "keyExamTokens": [
      "negative account balance",
      "agreed credit limit",
      "daily interest",
      "callable on demand"
    ]
  },
  {
    "id": "def-u2-07",
    "term": "Trade Credit",
    "subunit": "3.2-sources-of-finance",
    "definition": "A commercial agreement allowing a business to ==receive inventory immediately and defer settlement== for an agreed period (e.g. 30\u201390 days), acting as <u>interest-free short-term financing</u>.",
    "keyExamTokens": [
      "receive goods immediately",
      "defer payment",
      "30-90 days",
      "interest-free supplier finance"
    ]
  },
  {
    "id": "def-u2-08",
    "term": "The Matching Principle",
    "subunit": "3.2-sources-of-finance",
    "definition": "The fundamental financial rule that the ==duration of a funding source must match the economic lifespan of the asset==: funding long-term assets with long-term finance, and short-term needs with short-term finance.",
    "keyExamTokens": [
      "duration matches lifespan",
      "long-term for fixed assets",
      "short-term for working capital",
      "avoids overtrading"
    ]
  },
  {
    "id": "def-u2-09",
    "term": "Fixed Costs (FC)",
    "subunit": "3.3-costs-and-revenues",
    "definition": "Operational costs that ==do not vary with changes in the level of output== in the short run, such as *rent, executive salaries, and insurance* (incurred even if output is zero).",
    "keyExamTokens": [
      "do not vary with output",
      "paid even if zero output",
      "rent and salaries",
      "horizontal cost line"
    ]
  },
  {
    "id": "def-u2-10",
    "term": "Variable Costs (VC)",
    "subunit": "3.3-costs-and-revenues",
    "definition": "Costs of production that ==change in direct proportion to the volume of output==, such as *raw materials, piece-rate wages, and direct packaging* (zero when output is zero).",
    "keyExamTokens": [
      "changes in proportion to output",
      "zero at zero output",
      "raw materials",
      "piece-rate labor"
    ]
  },
  {
    "id": "def-u2-11",
    "term": "Direct Costs",
    "subunit": "3.3-costs-and-revenues",
    "definition": "Expenditures that can be ==clearly and uniquely traced== to the production of a *specific product, project, or dedicated cost centre*.",
    "keyExamTokens": [
      "clearly traced",
      "specific product or cost centre",
      "traceability focus"
    ]
  },
  {
    "id": "def-u2-12",
    "term": "Indirect Costs (Overheads)",
    "subunit": "3.3-costs-and-revenues",
    "definition": "Operational expenses that ==cannot be economically traced to a specific unit of output==, supporting the *general administration and operating infrastructure* of the enterprise.",
    "keyExamTokens": [
      "cannot be traced to single product",
      "enterprise overheads",
      "head office rent",
      "administration"
    ]
  },
  {
    "id": "def-u2-13",
    "term": "Cost of Goods Sold (COGS)",
    "subunit": "3.4-final-accounts",
    "definition": "The ==direct costs incurred in producing or purchasing the inventory sold== during an accounting period: $\\text{COGS} = \\text{Opening Stock} + \\text{Purchases} - \\text{Closing Stock}$.",
    "keyExamTokens": [
      "direct cost of stock sold",
      "Opening + Purchases - Closing",
      "Trading Account deduction"
    ]
  },
  {
    "id": "def-u2-14",
    "term": "Working Capital",
    "subunit": "3.4-final-accounts",
    "definition": "The liquid financial resources available for day-to-day trading: ==Current Assets minus Current Liabilities==, measuring short-term liquidity health.",
    "keyExamTokens": [
      "Current Assets - Current Liabilities",
      "net current assets",
      "day-to-day liquidity",
      "prevents insolvency"
    ]
  },
  {
    "id": "def-u2-15",
    "term": "Straight-Line Depreciation",
    "subunit": "3.4-final-accounts",
    "definition": "A depreciation method spreading the cost of a non-current asset evenly across its useful life: ==$(\\text{Historic Cost} - \\text{Residual Scrap Value}) / \\text{Useful Life in Years}$==.",
    "keyExamTokens": [
      "equal annual reduction",
      "Cost minus Residual Value",
      "divided by useful life"
    ]
  },
  {
    "id": "def-u2-16",
    "term": "Circular Business Model (CBM)",
    "subunit": "3.4-final-accounts",
    "definition": "A business model framework designed to ==eliminate waste and keep resources in economic use for as long as possible== through closed biological and technical loops (the 4 Rs: *reduce, reuse, repair, recycle*).",
    "keyExamTokens": [
      "eliminate waste",
      "keep resources in use",
      "4 Rs",
      "closed restorative loops"
    ]
  },
  {
    "id": "def-u2-17",
    "term": "Product Service System (Servitization)",
    "subunit": "3.4-final-accounts",
    "definition": "An OECD circular business model where companies ==sell the utility, access, or performance of a product as a service== rather than transferring physical ownership to the customer.",
    "keyExamTokens": [
      "sell utility or service",
      "pay-for-use or subscription",
      "firm retains asset ownership",
      "replaces buy-to-own"
    ]
  }
];

export const CRAM_DISTINCTIONS: DistinctionItem[] = [
  {
    id: 'dist-01',
    conceptA: 'Sole Trader',
    conceptB: 'Partnership',
    comparisonCriteria: 'Ownership, Governance & Liability Exposure',
    contrastStatement: 'A **sole trader** has <u>exactly one owner</u> with complete *decision autonomy* and ==100% profit capture==; a **partnership** pools capital from *2 to 20 partners* (formalized via a <u>Deed of Partnership</u>), where partners carry ==unlimited liability wholly or severally==.',
    examTrapWarning: '==Never state that ordinary partnerships have limited liability!== <u>At least one partner must carry unlimited liability</u>, and *typically all partners do*.'
  },
  {
    id: 'dist-02',
    conceptA: 'Private Limited Company (Ltd)',
    conceptB: 'Public Limited Company (PLC)',
    comparisonCriteria: 'Share Flotation, Capital Scale & Financial Secrecy',
    contrastStatement: 'An **Ltd (Private Limited Company)** sells shares <u>privately to family and friends</u> with *board approval* and ==cannot float on an open stock exchange==; a **PLC (Public Limited Company)** <u>floats shares publicly via an IPO</u> on an *exchange*, ==raising large-scale equity capital== but facing *regulatory disclosure* and *takeover risk*.',
    examTrapWarning: '==Both entities are incorporated and possess limited liability!== <u>PLCs are NOT government-owned</u>; they belong to *private and institutional equity shareholders*.'
  },
  {
    id: 'dist-03',
    conceptA: 'Mission Statement',
    conceptB: 'Vision Statement',
    comparisonCriteria: 'Temporal Horizon, Tone & Operational Role',
    contrastStatement: 'A **mission statement** is anchored in <u>present operational reality</u> (*"what we do and whom we serve today"*) with an ==action-oriented focus==; a **vision statement** is anchored in an <u>aspirational future</u> (*"where we strive to go tomorrow"*) with an ==inspirational, long-term legacy purpose==.',
    examTrapWarning: '<u>Do not confuse mission with tactical numerical targets:</u> a **mission statement** declares ==core organizational purpose==, not *short-term sales milestones*.'
  },
  {
    id: 'dist-04',
    conceptA: 'Strategic Objectives',
    conceptB: 'Tactical Objectives',
    comparisonCriteria: 'Time Horizon, Seniority Level & Operational Flexibility',
    contrastStatement: '**Strategic objectives** are the <u>longer-term overarching goals</u> of the business as a whole (*profit maximization, corporate growth, market standing*); **tactical objectives** are ==short-term actionable goals== (usually the <u>next 12 months or sooner</u>) guiding the *daily functioning of specific departmental units*.',
    examTrapWarning: 'The textbook (p.45) classifies ==survival during an acute recession or crisis== as a <u>TACTICAL objective</u>, though it can become **strategic** if resisting an *unsolicited hostile takeover*.'
  },
  {
    id: 'dist-05',
    conceptA: 'Market Development',
    conceptB: 'Product Development',
    comparisonCriteria: 'Product Novelty vs Market Novelty in Ansoff Matrix',
    contrastStatement: '**Market Development** takes an <u>existing, proven product</u> into ==entirely new markets or customer segments== (*international geographical expansion, new demographic niches*); **Product Development** innovates <u>completely new products</u> to sell to the firm’s ==existing, established customer base==.',
    examTrapWarning: 'If a brand sells its existing footwear through an overseas e-commerce platform, that is ==Market Development== (*new geography/channel*), <u>NOT Product Development</u>!'
  },
{
  "id": "dist-06",
  "conceptA": "Political Factors",
  "conceptB": "Legal Factors",
  "comparisonCriteria": "Enforceability, Legislative State, and Sanction Nature",
  "contrastStatement": "**Political factors** encompass <u>government stability, ideological policy priorities, and foreign trade negotiations</u> (*macro-political climate*); **Legal factors** are ==formally enacted, legally binding statutes== (e.g. *statutory minimum wage, health & safety laws*) that carry <u>enforceable civil or criminal penalties</u>.",
  "examTrapWarning": "==Never classify an enacted minimum wage statute as 'Political' merely because politicians debated it;== once passed into statutory legislation, it is strictly a <u>LEGAL compliance mandate</u>!"
},
{
  "id": "dist-07",
  "conceptA": "Social Factors",
  "conceptB": "Ethical Factors",
  "comparisonCriteria": "Demographic & Cultural Trends vs Moral Corporate Values",
  "contrastStatement": "**Social factors** reflect <u>external population demographics, cultural shifts, and changing consumer lifestyles</u> (*aging populations, health trends*); **Ethical factors** represent the ==moral values and principles== (of *what is right and wrong*) that society expects businesses to follow, such as <u>fair trade and corporate social responsibility (CSR)</u>.",
  "examTrapWarning": "Consumer preference for organic food is an external ==SOCIAL demographic trend==; a firm voluntarily paying living wages and auditing supply chains is an <u>ETHICAL moral commitment</u>."
},
{
  "id": "dist-08",
  "conceptA": "BCG Stars",
  "conceptB": "BCG Cash Cows",
  "comparisonCriteria": "Industry Growth Rate & Capital Reinvestment Dynamics",
  "contrastStatement": "Both **Stars** and **Cash Cows** hold ==high relative market share==; however, **Stars** operate in <u>rapidly growing industries</u> requiring *heavy ongoing capital reinvestment* to defend market share, whereas **Cash Cows** operate in <u>mature, low-growth markets</u> and ==generate surplus liquidity== to fund corporate growth elsewhere.",
  "examTrapWarning": "<u>Do not confuse Cash Cows with Stars:</u> **Cash Cows** ==fund the rest of the business== with surplus cash, while **Stars** *absorb substantial investment capital* to <u>maintain market leadership against aggressive rivals</u>."
},
{
  "id": "dist-09",
  "conceptA": "Stakeholders",
  "conceptB": "Shareholders",
  "comparisonCriteria": "Legal Ownership, Governance Rights & Financial Returns",
  "contrastStatement": "**Stakeholders** encompass ==any party with an interest in or affected by business operations== (*employees, customers, suppliers, community, regulators*); **shareholders** are <u>exclusively the legal equity owners</u> of an incorporated company who hold ==AGM voting rights== and earn *dividends and capital gains*.",
  "examTrapWarning": "==All shareholders are stakeholders, but NOT all stakeholders are shareholders!== <u>Never use these two terms interchangeably in IB exams</u>."
},
{
  "id": "dist-10",
  "conceptA": "Internal Stakeholders",
  "conceptB": "External Stakeholders",
  "comparisonCriteria": "Organizational Boundary, Operational Role & Driving Objectives",
  "contrastStatement": "**Internal stakeholders** operate <u>directly within the firm</u> (*employees, managers, directors*) striving for ==wages, career progression, and executive bonuses==; **external stakeholders** reside <u>outside the enterprise</u> (*customers, suppliers, regulators, pressure groups*) seeking ==competitive pricing, prompt invoice payment, and environmental compliance==.",
  "examTrapWarning": "<u>Shareholders can occupy dual roles:</u> *internal* (founder-directors or employees holding equity) or *external* (passive retail or institutional market investors)."
},
{
  "id": "dist-11",
  "conceptA": "Internal Economies of Scale",
  "conceptB": "External Economies of Scale",
  "comparisonCriteria": "Locus of Control, Operational Origin & Competitive Impact",
  "contrastStatement": "**Internal economies** arise strictly <u>within the individual expanding organization</u> and remain under direct executive control (*technical machinery, cheaper borrowing, specialist managers*), giving that specific firm a ==direct cost advantage over rivals==; **external economies** arise <u>outside the firm</u> from *favourable location or industry expansion*, so ==all competing firms in that region/industry benefit==.",
  "examTrapWarning": "<u>Never credit an individual company for building city transit or regional universities!</u> Infrastructure improvements are ==EXTERNAL economies== experienced by *all regional competitors*."
},
{
  "id": "dist-12",
  "conceptA": "Economies of Scale",
  "conceptB": "Bulk Buying (Purchasing Discounts)",
  "comparisonCriteria": "Conceptual Scope, Cost Drivers & Operational Variety",
  "contrastStatement": "==Economies of scale== is the broad economic phenomenon where *average cost per unit* falls across all operating facets as scale expands; **bulk buying** (*purchasing economies*) is <u>only one single sub-type</u> among seven internal economies. **Technical automation**, **managerial division of labor**, and **financial borrowing power** frequently generate far greater unit cost reductions than bulk discounts alone.",
  "examTrapWarning": "The textbook's Common mistake box (p.67) warns against defining economies of scale as 'the benefits of bulk buying', because even small businesses can buy in bulk. <u>Always define it as</u> ==lower average costs as a firm operates on a larger scale==!"
},
  {
    id: 'dist-A1-01',
    conceptA: 'Business',
    conceptB: 'Company',
    comparisonCriteria: 'Scope and ownership',
    contrastStatement: 'All companies are businesses, but not all businesses are companies. A company is an incorporated firm owned by its shareholders; sole traders and partnerships are businesses that are not companies.',
    examTrapWarning: 'Do not use business and company as synonyms. The textbook flags this as a common mistake, and it costs marks in definition answers.'
  },
  {
    id: 'dist-A1-02',
    conceptA: 'Customer',
    conceptB: 'Consumer',
    comparisonCriteria: 'Buying vs using the product',
    contrastStatement: 'The customer purchases the product (transacts financially); the consumer actually uses it. One entity can be both, as when someone buys and eats a meal, but parents who buy toys for their children are customers while the children are consumers.',
    examTrapWarning: 'Do not treat customer and consumer as interchangeable. A case about gifts or school purchasing turns on this distinction.'
  },
  {
    id: 'dist-A1-03',
    conceptA: 'Goods',
    conceptB: 'Services',
    comparisonCriteria: 'Tangibility',
    contrastStatement: 'Goods are physical, tangible products such as smartphones or clothes. Services are intangible, such as haircuts, public transport or healthcare. Both are products.',
    examTrapWarning: 'Do not say a service cannot involve physical items: a restaurant meal includes physical food, but the focus of the service is on the people providing it.'
  },
  {
    id: 'dist-A1-04',
    conceptA: 'Private Sector',
    conceptB: 'Public Sector',
    comparisonCriteria: 'Ownership and main aim',
    contrastStatement: 'Private sector organizations are owned and controlled by private individuals and businesses and most aim to earn profit (sales revenue minus costs). Public sector organizations are owned and controlled by government and typically provide essential services the private sector would underprovide.',
    examTrapWarning: 'Profit is the main aim of most, but not all, private sector organizations. Do not state that every private organization exists only to maximise profit.'
  },
  {
    id: 'dist-A1-05',
    conceptA: 'Consumer Durables',
    conceptB: 'Consumer Non-Durables',
    comparisonCriteria: 'Lifespan and reuse',
    contrastStatement: 'Durables (for example cars, refrigerators and furniture) last a long time and can be used repeatedly. Non-durables (for example food, beverages and newspapers) are consumed shortly after purchase and cannot be reused.',
    examTrapWarning: 'Classify by lifespan and reuse, not by how expensive the product is.'
  },
  {
    id: 'dist-A1-06',
    conceptA: 'Memorandum of Association',
    conceptB: 'Articles of Association',
    comparisonCriteria: 'Purpose and length',
    contrastStatement: 'The Memorandum is a brief document giving the trading name, main purpose, registered address and share capital. The Articles are the longer document setting out internal regulations, the powers of the BOD and shareholders, and AGM procedures.',
    examTrapWarning: 'Both are submitted before trading. The Certificate of Incorporation is issued afterwards by the authorities; it is not a third document the company submits.'
  },
  {
    id: 'dist-A1-07',
    conceptA: 'Silent Partner',
    conceptB: 'Active Partner',
    comparisonCriteria: 'Role in running the partnership',
    contrastStatement: 'A silent partner provides finance and is eligible for a portion of profits without taking an active part in running the business. An active partner takes part in running the partnership.',
    examTrapWarning: 'Silent partners are not limited liability partners. Limited liability partners are the rare exception to unlimited liability; silent partners are defined by their role, not their liability.'
  },
  {
    id: 'dist-A2-01',
    conceptA: 'Publicly Held Company',
    conceptB: 'Public Corporation',
    comparisonCriteria: 'Sector, ownership and how shares are traded',
    contrastStatement: 'A publicly held company is a private-sector limited liability company whose shares are sold to the public on a stock exchange. A public corporation is owned and operated by the government on behalf of the public.',
    examTrapWarning: 'Do not treat "public" as government-owned in a publicly held company. The word describes share trading.'
  },
  {
    id: 'dist-A2-02',
    conceptA: 'Operational NGO',
    conceptB: 'Advocacy NGO',
    comparisonCriteria: 'Main method of pursuing the purpose',
    contrastStatement: 'Operational NGOs (for example Oxfam and UNICEF) run relief-based and community projects. Advocacy NGOs (for example Greenpeace and Amnesty International) promote or defend a cause through awareness-raising, lobbying, public relations and mass demonstrations.',
    examTrapWarning: 'Both types are not-for-profit. The difference is the method, not whether they make a surplus.'
  },
  {
    id: 'dist-A2-03',
    conceptA: 'Non-Profit Organization (surplus retained)',
    conceptB: 'Profit distributed to owners',
    comparisonCriteria: 'What happens to the surplus',
    contrastStatement: 'A non-profit organization retains its surplus and reinvests it in its purpose. Profit in a commercial business is distributed to owners or investors as a reward for risking their money.',
    examTrapWarning: 'Non-profit does not mean no surplus. A private fee-paying school can be a non-profit organization that reinvests its surplus.'
  },
  {
    id: 'dist-A2-04',
    conceptA: 'Cooperative',
    conceptB: 'Company (corporation)',
    comparisonCriteria: 'Who controls the business and how voting works',
    contrastStatement: 'A cooperative is democratically owned and controlled, and each member has an equal vote regardless of capital contributed. A company is owned by its shareholders, who trust the board of directors to run it on their behalf.',
    examTrapWarning: 'Cooperatives are for-profit social enterprises that share profits between members. Do not describe them as non-profit.'
  },
  {
    id: 'dist-A2-05',
    conceptA: 'Sales Revenue',
    conceptB: 'Profit',
    comparisonCriteria: 'What it measures',
    contrastStatement: 'Sales revenue is the money a firm receives from selling its goods or services. Profit is the surplus that remains after all costs are paid.',
    examTrapWarning: 'A firm with high sales revenue but low or no profit will struggle to survive in the long term. Never treat high sales as proof of success.'
  },
  {
    id: 'dist-A3-01',
    conceptA: 'Ethics',
    conceptB: 'Morals',
    comparisonCriteria: 'Role in decision-making and the standard applied',
    contrastStatement: 'Ethics are the moral principles that guide decision-making and business strategy. Morals are concerned with what is considered right or wrong from society\'s point of view.',
    examTrapWarning: 'Do not use "ethics" and "morals" as synonyms when a question asks you to distinguish them.'
  },
  {
    id: 'dist-A3-02',
    conceptA: 'Internal Shareholders',
    conceptB: 'External Shareholders',
    comparisonCriteria: 'Involvement in the daily operations of the business',
    contrastStatement: 'Internal shareholders are directors or employees who hold shares and are involved in running the business. External shareholders own shares but are not directly involved in its daily operations.',
    examTrapWarning: 'Do not treat every shareholder as external. Classify by involvement in operations, not only by share ownership.'
  },
  {
    id: 'dist-A3-03',
    conceptA: 'Lobbying',
    conceptB: 'Direct Action',
    comparisonCriteria: 'Target and method used by the pressure group',
    contrastStatement: 'Lobbying uses pressure group power to influence employers, legal representatives and government, such as petitioning for legislation. Direct action takes action to achieve the cause, such as mass protests or legal action against firms that may have behaved illegally.',
    examTrapWarning: 'Lobbying works by influencing others (employers, legal representatives and the government); direct action is the pressure group acting itself (protests, legal action against firms). State the method clearly.'
  },
  {
    id: 'dist-A4-01',
    conceptA: 'Merger',
    conceptB: 'Acquisition',
    comparisonCriteria: 'Legal identity and control',
    contrastStatement: 'A merger creates a new company with its own legal identity, from two or more firms. An acquisition is the purchase of a controlling interest in another firm, and the acquired firm often keeps its name.',
    examTrapWarning: 'Do not call an acquisition a merger. The defining feature of a merger is the new legal identity.'
  },
  {
    id: 'dist-A4-02',
    conceptA: 'Joint Venture',
    conceptB: 'Strategic Alliance',
    comparisonCriteria: 'Legal entity and shared structure',
    contrastStatement: 'A joint venture sets up a new legal business entity and typically splits costs and profits 50:50. A strategic alliance keeps the businesses independent with no new legal entity, and they share costs of product development, operations and marketing.',
    examTrapWarning: 'A strategic alliance is not a joint venture. The first stage of an alliance is a feasibility study, not a contract.'
  },
  {
    id: 'dist-A4-03',
    conceptA: 'Internal Growth',
    conceptB: 'External Growth',
    comparisonCriteria: 'Source of resources, speed and risk',
    contrastStatement: 'Internal growth uses the firm\'s own resources, usually retained profits, and is slower but less risky. External growth uses outside organizations and finance to grow quickly, but it is more expensive and riskier.',
    examTrapWarning: 'Internal and external are about where the resources come from, not about whether the business gets bigger. Both increase scale.'
  },
  {
    id: 'dist-A4-04',
    conceptA: 'Horizontal Integration',
    conceptB: 'Lateral Integration',
    comparisonCriteria: 'Whether the merging firms compete directly',
    contrastStatement: 'Horizontal integration combines firms in the same industry that compete directly, increasing market share. Lateral integration combines firms with similar operations that do not directly compete with each other.',
    examTrapWarning: 'Read the case carefully: firms in the same industry are not automatically horizontal if the case says they do not compete directly, in which case they are lateral.'
  },
  {
    id: 'dist-A5-01',
    conceptA: 'Multinational Company (MNC)',
    conceptB: 'Transnational Corporation',
    comparisonCriteria: 'Head Office Structure',
    contrastStatement: 'An MNC has its head office based in the home country; a transnational corporation has regional head offices rather than a single international base. Some commentators use the terms interchangeably.',
    examTrapWarning: 'Do not claim the two terms differ in ownership or profit status. The textbook draws the distinction on head-office structure only.'
  },
  {
    id: 'dist-A5-02',
    conceptA: 'Tariff',
    conceptB: 'Quota',
    comparisonCriteria: 'Price vs Quantity Control',
    contrastStatement: 'A tariff is a tax on imports that raises their price; a quota is a quantitative limit on the sale of imports that lowers their supply and forces up their price.',
    examTrapWarning: 'A tariff is not a quantity limit, and a quota is not a tax. Both protect domestic firms, but by different mechanisms.'
  },
  {
    id: 'dist-A5-03',
    conceptA: 'Acquisition',
    conceptB: 'Takeover',
    comparisonCriteria: 'Board Agreement',
    contrastStatement: 'An acquisition buys a controlling interest with the agreement and approval of the target company\'s Board of Directors; a takeover buys a controlling interest without that prior agreement or approval (a hostile takeover).',
    examTrapWarning: 'Do not describe every takeover as friendly. The textbook defines a takeover as hostile, which is different from an acquisition.'
  },
  {
    id: 'dist-A5-06',
    conceptA: 'Forward Vertical Integration',
    conceptB: 'Backward Vertical Integration',
    comparisonCriteria: 'Direction in the Production Chain',
    contrastStatement: 'Forward integration amalgamates with a firm at a later stage of production (e.g. a publisher acquiring retailers). Backward integration amalgamates with a firm at an earlier stage (e.g. a car manufacturer taking over a tyre supplier).',
    examTrapWarning: 'Name the direction carefully: "forward" means later in the chain, "backward" means earlier in the chain.'
  },
  {
    id: 'dist-A6-01',
    conceptA: 'Related Diversification',
    conceptB: 'Unrelated Diversification',
    comparisonCriteria: 'Link to the existing industry or value chain, and risk',
    contrastStatement: 'Related diversification serves new customers within the broader confines of the same industry (e.g., Toyota creating Lexus). Unrelated diversification sells completely new products in untapped markets with no link to the existing industry (e.g., Honda making lawnmowers and airplanes).',
    examTrapWarning: 'Both are diversification, so both involve new products in new markets. Do not call Honda\'s lawnmowers and airplanes related diversification.'
  },
  {
    id: 'dist-A6-02',
    conceptA: 'Seasonal Unemployment',
    conceptB: 'Cyclical Unemployment',
    comparisonCriteria: 'Cause and timing',
    contrastStatement: 'Seasonal unemployment is caused by periodic and reoccurring changes in demand, such as beach resorts with few winter tourists. Cyclical unemployment is caused by a lack of demand across the economy during a recession and is the most severe type.',
    examTrapWarning: 'Seasonal follows the time of year; cyclical follows the business cycle. Do not describe a winter slump at a resort as cyclical.'
  },
  {
    id: 'dist-A6-03',
    conceptA: 'Recession',
    conceptB: 'Trough',
    comparisonCriteria: 'Position in the business cycle',
    contrastStatement: 'A recession is a fall in GDP for two consecutive quarters. The trough is the bottom of that decline and its last stage, with high unemployment and very low consumer spending, investment and export earnings.',
    examTrapWarning: 'Do not say the economy has recovered at the trough. Recovery begins only when GDP starts to rise again after the slump.'
  },
  {
    id: 'dist-A6-04',
    conceptA: 'Offensive Strategy (S-O)',
    conceptB: 'Defensive Strategy (S-T)',
    comparisonCriteria: 'Which external factor the strength meets',
    contrastStatement: 'Both use a strength. An offensive strategy matches the strength with an external opportunity to gain the maximum benefit from a favourable situation. A defensive strategy matches the strength with an external threat, so the business must defend itself and avoid losing market share.',
    examTrapWarning: 'Do not treat a defensive strategy as a favourable situation. A threat presents an element of risk that the business must defend against.'
  },
  {
    id: 'dist-A7-01',
    conceptA: 'Range',
    conceptB: 'Interquartile Range',
    comparisonCriteria: 'Which values are used to measure the spread of the data',
    contrastStatement: 'The range uses the lowest and highest values of the data set. The interquartile range uses only the first and third quartiles, so it describes the middle of the data.',
    examTrapWarning: 'Do not quote the range when the question asks about the middle 50% of the data. Use the interquartile range.'
  },
  {
    id: 'dist-A7-02',
    conceptA: 'Unlawful Conduct',
    conceptB: 'Unethical Conduct',
    comparisonCriteria: 'Whether the act breaks a law, or breaks accepted moral standards',
    contrastStatement: 'Unlawful conduct breaks a law, such as product description laws. Unethical conduct breaks accepted moral standards and may be legal.',
    examTrapWarning: 'Do not assume that an unethical act is also illegal. Question 46.6 asks for both, so give one of each.'
  },
  {
    id: 'dist-A7-03',
    conceptA: 'Appreciation of the Currency',
    conceptB: 'Depreciation of the Currency',
    comparisonCriteria: 'Effect on export prices and on imported input costs',
    contrastStatement: 'An appreciation raises export prices and reduces price competitiveness, but makes imports cheaper. A depreciation makes exports cheaper abroad, but makes imported raw materials and components more expensive.',
    examTrapWarning: 'Students often reverse the effects. Check the direction of the change before writing the effect on exporters.'
  }
,
  {
    "id": "dist-u2-01",
    "conceptA": "Capital Expenditure (CapEx)",
    "conceptB": "Revenue Expenditure (RevEx)",
    "comparisonCriteria": "Time horizon, financial statement recording, and productive purpose.",
    "contrastStatement": "CapEx is long-term investment in non-current assets (>1 year) recorded on the Balance Sheet and depreciated annually, whereas RevEx covers short-term daily operating expenses (<1 year) expensed immediately on the Profit and Loss Account.",
    "examTrapWarning": "Never classify an expense based solely on size. A massive annual electricity or wage bill is still RevEx because it is consumed in the current operating period."
  },
  {
    "id": "dist-u2-02",
    "conceptA": "Fixed Costs (FC)",
    "conceptB": "Variable Costs (VC)",
    "comparisonCriteria": "Behavior in response to output and sales volume changes.",
    "contrastStatement": "Fixed costs remain completely constant regardless of output volume in the short run (e.g. factory rent), whereas variable costs change in direct proportion to production volume (e.g. raw materials).",
    "examTrapWarning": "Avoid tautologies like 'fixed costs stay fixed'. Always state that fixed costs do not vary WITH OUTPUT in the short run."
  },
  {
    "id": "dist-u2-03",
    "conceptA": "Direct Costs",
    "conceptB": "Indirect Costs (Overheads)",
    "comparisonCriteria": "Traceability and attribution to a specific product or cost centre.",
    "contrastStatement": "Direct costs can be clearly and uniquely traced to a specific output (e.g. fabric in a dress), whereas indirect costs support the enterprise broadly and cannot be tied to a single item (e.g. head office heating).",
    "examTrapWarning": "Do not confuse direct/indirect with variable/fixed. A direct cost can be fixed (e.g. specialized equipment leased solely for one product line)."
  },
  {
    "id": "dist-u2-04",
    "conceptA": "Gross Profit",
    "conceptB": "Net / Operating Profit",
    "comparisonCriteria": "Level of cost deduction from sales revenue in the P&L account.",
    "contrastStatement": "Gross profit deducts only direct Cost of Goods Sold from sales revenue, whereas operating net profit also deducts indirect operational overhead expenses (rent, salaries, marketing, depreciation).",
    "examTrapWarning": "A business can have an excellent gross profit margin but still make a net loss if indirect overheads are uncontrolled."
  },
  {
    "id": "dist-u2-05",
    "conceptA": "Linear Economy",
    "conceptB": "Circular Economy",
    "comparisonCriteria": "Resource utilization model and end-of-life product treatment.",
    "contrastStatement": "A linear economy follows a 'take-make-waste' model that extracts finite virgin resources and discards products in landfills, whereas a circular economy designs restorative closed loops that keep materials circulating through reduce, reuse, repair, and recycle.",
    "examTrapWarning": "Circular business models are not merely municipal waste recycling; they encompass product servitization, modular repair, sharing platforms, and circular supply chains."
  }
];

export const CRAM_GOLDEN_RULES: GoldenMatrixRule[] = [
  {
    id: 'rule-01',
    ruleTitle: 'SWOT Rule 1: Offensive Strategy (S + O)',
    category: 'SWOT',
    corePrinciple: '**Offensive Strategy (S-O):** Leverage *internal core strengths* directly to exploit ==high-growth external market opportunities== (the <u>ideal strategic posture</u>).',
    actionProtocol: '**Aggressive capital allocation**, rapid capacity expansion, and offensive marketing campaigns to <u>capture unserved market niches</u> and maximize *market share gains*.',
    examApplicationTip: '==Look for cases== where high cash reserves or strong brand equity coincide with <u>booming demographic trends or fiscal subsidies</u>; advise *offensive expansion*.'
  },
  {
    id: 'rule-02',
    ruleTitle: 'SWOT Rule 2: Defensive Strategy (S + T)',
    category: 'SWOT',
    corePrinciple: '**Defensive Strategy (S-T):** Deploy *robust internal competencies* to <u>neutralize or shield the business</u> against ==hostile external environmental threats==.',
    actionProtocol: 'Leverage **proprietary patents**, certified dealership networks, and customer loyalty schemes to <u>withstand price wars and macro headwinds</u> via *non-price differentiation*.',
    examApplicationTip: '==Use when established incumbents face low-cost foreign entrants==; emphasize *non-price competition* and <u>warranty moats</u>.'
  },
  {
    id: 'rule-03',
    ruleTitle: 'SWOT Rule 3: Reorientation Strategy (W + O)',
    category: 'SWOT',
    corePrinciple: '**Reorientation Strategy (W-O):** Address and eliminate an *acute internal operational weakness* to <u>seize an emerging external market opportunity</u> (turnaround posture).',
    actionProtocol: '==Adjust or reorient corporate policies== to fix the weakness: <u>cut costs to improve liquidity</u>, form *joint ventures*, or upgrade digital technology before entering the market.',
    examApplicationTip: '==Classic exam scenario:== A traditional retailer with *obsolete IT* entering online delivery by <u>partnering with a specialized software vendor</u>.'
  },
  {
    id: 'rule-04',
    ruleTitle: 'SWOT Rule 4: Survival Strategy (W + T)',
    category: 'SWOT',
    corePrinciple: '**Survival Strategy (W-T):** Emergency defensive maneuvers in crisis when <u>severe internal vulnerabilities collide with hostile external threats</u> (worst-case quadrant).',
    actionProtocol: '==Immediate retrenchment:== **shut loss-making store locations**, freeze executive hiring, <u>renegotiate creditor debt covenants</u>, and shed *non-core assets* to preserve liquidity.',
    examApplicationTip: '==Apply in crisis cases== where *high corporate indebtedness* meets <u>stagflation or aggressive competitor disruption</u>.'
  },
  {
    id: 'rule-05',
    ruleTitle: 'Ansoff Gradient Rule: Risk Escalates with Unfamiliarity',
    category: 'Ansoff',
    corePrinciple: '**Ansoff Gradient Rule:** Strategic risk in Ansoff correlates directly with the <u>degree of operational unfamiliarity</u> in *products and markets*.',
    actionProtocol: '**Market Penetration** (==lowest risk: existing product + existing market==) -> **Product/Market Dev** (*moderate risk: 1 unknown variable*) -> **Diversification** (==highest risk: dual unfamiliarity==).',
    examApplicationTip: '<u>Always justify Diversification as highest risk</u> because the firm lacks both *engineering expertise* and ==customer distribution familiarity==.'
  },
{
  "id": "rule-06",
  "ruleTitle": "STEEPLE Rule 1: The SPICED Currency Axiom",
  "category": "STEEPLE",
  "corePrinciple": "**The SPICED Currency Axiom:** Exchange rate fluctuations <u>reverse commercial advantages</u> between *importers* and *exporters*.",
  "actionProtocol": "**Strong domestic currency** -> ==Imports Cheaper== (*raw material importers win*) / ==Exports Dearer== (*foreign export sales contract*). **Weak currency** -> <u>Imports Dearer / Exports Cheaper</u>.",
  "examApplicationTip": "<u>Always evaluate</u> whether the case study business is an ==importer of foreign components== or an ==exporter of finished goods== before assessing *currency fluctuations*."
},
{
  "id": "rule-07",
  "ruleTitle": "BCG Rule: Cash Cow Reinvestment Cycle",
  "category": "BCG",
  "corePrinciple": "**BCG Reinvestment Cycle:** A healthy multi-product enterprise must <u>systematically circulate liquidity</u> across *product lifecycles*.",
  "actionProtocol": "**Harvest Cash Cows** -> ==Reinvest surplus profits== to 'Build' *Question Marks into Stars* -> <u>Transition mature Stars into future Cash Cows</u> -> **Divest unviable Dogs**.",
  "examApplicationTip": "In portfolio evaluation essays, <u>criticize firms that have zero Cash Cows</u> (==severe liquidity strain==) or zero Question Marks/Stars (*future commercial obsolescence*)."
},
{
  "id": "rule-08",
  "ruleTitle": "Decision Tree Rule: Net EMV Deduction",
  "category": "BMT",
  "corePrinciple": "**Decision Tree Deduction Rule:** Gross Expected Value is *not profit*; <u>initial capital expenditure must always be deducted</u> to determine the ==Net Expected Monetary Value (Net EMV)==.",
  "actionProtocol": "Calculate Gross EV at chance node = **Sum(Probability × Payoff)** -> Calculate ==Net EMV = Gross EV - Initial Capital Cost== -> Choose option with <u>highest positive Net EMV</u> (*prune rejected branches*).",
  "examApplicationTip": "<u>Do not stop at gross expected value</u>: comparing options without subtracting the initial cost gives the wrong answer. ==Always show the subtraction of initial capital expenditure==."
},
{
  "id": "rule-09",
  "ruleTitle": "Stakeholder Rule: Stakeholder Mapping (Power-Interest Grid)",
  "category": "Stakeholders",
  "corePrinciple": "**Stakeholder Prioritization Axiom:** Managers use *stakeholder mapping* (Figure 4.3) to <u>prioritize strategic actions and communications</u> based on each group's ==relative power (influence) and interest==.",
  "actionProtocol": "**Quadrant A** (*Low P / Low I*) -> <u>Minimum Effort</u>; **Quadrant B** (*Low P / High I*) -> <u>Keep Informed</u>; **Quadrant C** (*High P / Low I*) -> <u>Keep Satisfied</u>; **Quadrant D** (==High P / High I==) -> ==Maximum Effort (key strategic stakeholders)==.",
  "examApplicationTip": "In 6-mark stakeholder essays, <u>explicitly classify the stakeholder into its quadrant</u> to **justify why management cannot treat all groups equally** and *must resolve trade-offs strategically*."
},
{
  "id": "rule-10",
  "ruleTitle": "The Average Cost Tipping Point: Optimal Level of Output",
  "category": "Scale",
  "corePrinciple": "**The Average Cost Tipping Point:** Operational scale reduces unit costs *only* up to the ==optimal level of output==; expanding beyond it triggers **diseconomies of scale** and <u>surging unit overheads</u>.",
  "actionProtocol": "**Phase 1** (*Q* < *Q*\\*): ==Economies of scale dominate== as *AFC* falls continuously -> **Phase 2** (*Q* = *Q*\\*): ==Optimal level of output==, where *average cost is minimized* -> **Phase 3** (*Q* > *Q*\\*): ==Diseconomies of scale take over== due to <u>bureaucracy, communication failure, and worker alienation</u>.",
  "examApplicationTip": "When sketching the U-shaped average cost curve (Figure 5.1), <u>label the lowest point 'Optimal level of output'</u>. (*LRAC* and *MES* are economics terms not used in the Hoang textbook.)"
},
{
  "id": "rule-11",
  "ruleTitle": "The 7-Factor Internal Scale Checklist",
  "category": "Scale",
  "corePrinciple": "**The 7-Factor Internal Scale Checklist:** Internal economies fall into ==seven distinct operational categories== under <u>direct managerial control</u>: *Technical, Financial, Managerial, Specialization, Marketing, Purchasing, and Risk-Bearing*.",
  "actionProtocol": "1. **Technical** (*automation & machinery*) | 2. **Financial** (*lower borrowing interest*) | 3. **Managerial** (*functional specialist executives*) | 4. **Specialization** (*shopfloor division of labor*) | 5. **Marketing** (*spreading global advertising budgets & bulk selling*) | 6. **Purchasing** (*bulk-order supplier discounts*) | 7. **Risk-Bearing** (*conglomerate portfolio diversification*).",
  "examApplicationTip": "In 4-mark and 6-mark essays, <u>never cite generic 'cost savings'</u>; ==always specify the exact category== and explain its *precise mechanism* (e.g., *spreading high fixed depreciation over volume*)."
},
  {
    id: 'rule-A3-01',
    ruleTitle: 'Stakeholder Rule: Best-Fit Compromise, Not Maximization',
    category: 'Stakeholders',
    corePrinciple: 'It is unrealistic or undesirable to maximize the needs of just one stakeholder group. Most strategies aim for a best-fit compromise so that the needs of all stakeholder groups are reasonably addressed.',
    actionProtocol: 'When a question asks how a business should respond to stakeholder conflict, identify the groups in conflict, then argue for a response that addresses each group\'s core need.',
    examApplicationTip: 'In 6-mark evaluation, use "best fit" as the standard: judge a proposed response by whether it leaves the other stakeholder groups\' needs reasonably addressed.'
  },
  {
    id: 'rule-A4-01',
    ruleTitle: 'Name the integration by the relationship between the merging firms',
    category: 'Scale',
    corePrinciple: 'The type of M&A depends on where the firms sit relative to each other: the same industry, different stages of production, similar but non-competing operations, or distinct markets.',
    actionProtocol: 'Identify the industry of each firm, then its stage of production, then whether the firms compete directly. Use that order to choose horizontal, vertical (forward or backward), lateral or conglomerate.',
    examApplicationTip: 'State the integration type in the first sentence and name the direction for vertical integration. This earns the classification mark before the explanation begins.'
  },
  {
    id: 'rule-A5-01',
    ruleTitle: 'BMT Classification Rule: Where Are We, Where Do We Want to Get To, How Do We Get There?',
    category: 'BMT',
    corePrinciple: 'Situational tools answer "Where are we now?", planning tools answer "Where do we want to get to?" (or "Where do we want to be?"), and decision-making tools answer "How do we get there?" (Hoang p.604). Some tools fit more than one classification, and the textbook itself classes some tools differently on pp.604-606.',
    actionProtocol: 'Identify which of the three questions the case study asks, select a tool from that classification, then evaluate it by its purpose, value and limitations.',
    examApplicationTip: 'State the classification when introducing a tool. In evaluation, argue for scientific decision-making over intuition for strategic, high-risk choices.'
  },
  {
    id: 'rule-A7-01',
    ruleTitle: 'Descriptive Statistics: Average, Spread, Then Interpret',
    category: 'BMT',
    corePrinciple: 'An average (mean, median or mode) describes the centre of the data. A measure of spread (range, interquartile range or standard deviation) shows how reliable that centre is.',
    actionProtocol: 'Calculate the average, then state the spread, then interpret both in the context of the business case.',
    examApplicationTip: 'Never quote an average alone when the question asks about consistency, risk or seasonal change. Add a spread measure and comment on what it shows.'
  }

];
