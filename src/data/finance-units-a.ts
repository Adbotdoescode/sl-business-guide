import { StudyUnit } from '@/types/curriculum';

// Unit 3.1 and 3.2 guides. Rewritten for clarity: plain-English first, then
// the exam wording, with a worked example and a self-check in every section.
// Source corrections follow the Unit 3 conventions file.

export const FINANCE_UNITS_A: StudyUnit[] = [
  {
    id: '3.1-intro-to-finance',
    title: 'Introduction to Finance',
    unitCode: 'Unit 3.1',
    subtitle: 'Why businesses need money, and the difference between capital and revenue spending',
    estimatedReadTime: '12 min read',
    description:
      'Learn why every business needs finance, then tell capital expenditure (buying fixed assets that last) apart from revenue expenditure (paying for the daily running of the business).',
    sections: [
      {
        id: 'sec-3.1-why-money',
        title: '1. Why every business needs money',
        content: `**In one line:** finance is the money a business has available to fund its activities, and managers decide how to spend it. The role of finance for businesses falls into two kinds of spending: capital expenditure and revenue expenditure (textbook p.221; Table 14.1 is on p.222).

Every business needs money for its activities. Three common jobs are:

- **Setting up and equipping:** premises, machinery, equipment and vehicles. These are long-term tools, so this is capital spending.
- **Running day to day:** wages, salaries, raw materials, rent and utility bills. This is revenue spending.
- **Growing and adapting:** more production capacity, new technology, or replacing worn-out equipment. This is capital spending.

> **Think of it like a car:** you can spend money on a new engine (it lasts for years) or on petrol for the next trip (it is used up today). Both are needed, but they are different kinds of spending.

### Who can get finance?

Different businesses have different access to sources of finance (see Chapter 15, textbook p.223). The typical main source of finance for a sole trader is personal savings. Larger and more established businesses can seek other sources for capital expenditure, such as selling shares on a stock exchange.

### Three factors when choosing a source of finance

The teacher deck lists three factors a firm must weigh when selecting a source of finance:

- **Availability:** can the business actually get the money?
- **Cost of finance:** usually the interest charged on borrowed money.
- **Time period of repayment:** how long the business has to pay the money back.

The sources themselves are covered in Unit 3.2. This guide is about what the money is spent on.`,
        keyTakeaways: [
          'Finance pays for two kinds of spending: capital expenditure (lasting assets) and revenue expenditure (daily running costs).',
          'Access to finance differs: sole traders usually rely on personal savings, while larger firms can raise money such as by selling shares.',
          'Before choosing a source, managers weigh availability, cost (interest) and the time period of repayment.',
        ],
        examTips: [
          'Use the three factors (availability, cost, time) to structure any question about choosing a source of finance.',
        ],
      },
      {
        id: 'sec-3.1-capex',
        title: '2. Capital expenditure: buying things that last',
        content: `**In one line:** capital expenditure (CapEx) is finance spent on **fixed assets** (also called non-current assets): items of monetary value that have a long-term function and are used repeatedly to produce goods or services (textbook p.221).

The textbook definition: capital expenditure is the finance spent on fixed assets. These are items that can be used repeatedly. Fixed assets are not intended to be sold in the short term but are used for production. Examples include land, buildings, equipment, machinery and commercial vehicles (textbook p.221). Figure 14.1 in the textbook (p.221) shows office equipment as an example.

![Eight examples of capital expenditure: capital equipment, furniture and fittings, computers and IT systems, intellectual property, machinery, mergers and acquisitions, property and premises, and vehicles.](/study-images/finance/3.1-capital-expenditure-examples.png "Capital expenditure buys things that last and keep earning.")

### Typical examples (Table 14.1, textbook p.222)

- Capital equipment
- Furniture, fixtures and fittings
- Computer and IT systems
- Intellectual property
- Machinery
- Mergers and acquisitions
- Property and premises
- Vehicles

### What capital spending does for the firm (textbook p.221)

- **Long-term benefits:** spending on fixed assets gives benefits for years and determines the scale of the organization's operations.
- **Long-term funding:** fixed assets are costly, so the finance usually comes from long-term sources (see Chapter 15) rather than short-term sources.
- **Collateral:** fixed assets can provide **collateral** (a financial guarantee) for securing additional loan capital to finance investment for business growth.

> **Watch out:** capital expenditure is judged by what the item does and how long it lasts, not by its size. A small item that is used for years in production can still be capital expenditure.`,
        keyTakeaways: [
          'Capital expenditure buys fixed (non-current) assets: items of monetary value used repeatedly in production over the long term.',
          'Because fixed assets are costly, they are usually funded from long-term sources, and they can act as collateral for further borrowing.',
        ],
        examTips: [
          'Do not judge by size. A small purchase that lasts for years is capital spending; a large bill that is used up in the current period is not.',
        ],
      },
      {
        id: 'sec-3.1-capex-reasons',
        title: '3. Why firms invest: reasons for capital expenditure',
        content: `**In one line:** firms make capital expenditure to grow, to become more efficient, to replace old equipment and to meet the law. The textbook also calls this investment expenditure (textbook p.221).

The textbook gives four reasons for capital expenditure:

1. **Extra capacity:** to add production capacity as the business grows.
2. **Efficiency:** to improve efficiency by using the latest technologies, including IT systems and production technologies.
3. **Replacement:** to replace worn-out, damaged and/or obsolete (outdated) capital equipment and machinery.
4. **Compliance:** to comply with changing legislation and regulations, such as green technologies.

### Example: working from home (textbook p.223)

The textbook notes that more people working from home (see Chapter 7) has meant businesses invest in computer hardware and software for their staff. This includes mobile devices such as laptops and smartphones, and subscriptions to cloud-based software platforms.

### Why capital spending is difficult (textbook p.221)

The main challenges are the high costs involved and the limited sources of finance available. So, despite the opportunities, some investments are simply not feasible. Managers therefore consider the expected return on investment, using methods of investment appraisal (see Chapter 21). Investment is capital expenditure made with the intention of a financial return on this spending (teacher key-terms list).`,
        keyTakeaways: [
          'Firms invest for four reasons: extra capacity, efficiency and technology, replacing worn-out or obsolete equipment, and complying with legislation such as green technologies.',
          'High cost and limited finance mean not every investment is feasible, so managers test the expected return using investment appraisal.',
        ],
        examTips: [
          'Name the specific asset and the specific benefit from the case (for example, which machines add capacity), rather than writing "to grow".',
        ],
      },
      {
        id: 'sec-3.1-revex',
        title: '4. Revenue expenditure: paying for today',
        content: `**In one line:** revenue expenditure (RevEx) is finance spent on the daily, regular operations of a business. Its benefit is used up in the current period (textbook p.222).

The textbook definition: revenue expenditure refers to finance spent on the daily operations of a business, such as the payment for wages, salaries, raw materials, rent and utility bills (textbook p.222). The key terms list describes it as spending on the day-to-day running of a business (textbook p.224).

![Eight examples of revenue expenditure: advertising and promotion, energy costs, freight and delivery, insurance, office supplies and administration, raw materials and components, rent, and wages and salaries.](/study-images/finance/3.1-revenue-expenditure-examples.png "Revenue expenditure pays for running the business each day.")

### Typical examples (Table 14.1, textbook p.222)

- Advertising and promotion
- Energy costs
- Freight and delivery
- Insurance
- Office supplies and administration
- Raw materials and components
- Rent
- Wages and salaries

### Indirect costs are revenue spending too (textbook p.222)

Revenue expenditure also includes the payment of indirect costs (see Chapter 15), such as insurance and advertising spending. Indirect costs are overhead expenses that do not belong to one specific product. Figure 14.2 (textbook p.222) shows payment of bills (invoices) as an example, and Figure 14.3 (textbook p.224) shows paying invoices and bills as part of a firm's revenue expenditure.

### Why it matters: value today, with costs under control (textbook p.222)

Revenue expenditure generates value to the business today, rather than in the future. Expenses are incurred as a result of producing goods and services, which in turn generates revenue. Costs must be controlled, though, so that sales revenue is sufficient to cover production costs and the business can earn a profit.

A firm can own excellent new machines and still fail if it cannot pay its daily bills. This is why both kinds of spending are needed.`,
        keyTakeaways: [
          'Revenue expenditure pays for daily operations such as wages, salaries, raw materials, rent, utility bills, insurance and advertising.',
          'Its benefit is current: it generates value today, and costs must be controlled so that sales revenue covers production costs and profit is possible.',
        ],
        examTips: [
          'Rent is revenue expenditure even though it is large. Ask: is the benefit used up in the day-to-day running of the business, or does it last for years?',
        ],
      },
      {
        id: 'sec-3.1-test',
        title: '5. The test: capital or revenue?',
        content: `Sort each item with three questions:

1. **Is it a fixed asset used repeatedly to produce goods or services?** Land, buildings, equipment, machinery, commercial vehicles and intellectual property are capital. If yes, it is capital expenditure.
2. **Is it spent on the daily running of the business?** Wages, salaries, raw materials, rent, utility bills, insurance and advertising are revenue. If yes, it is revenue expenditure.
3. **Check the time frame.** A fixed asset is not intended for resale within the next twelve months, and it works for years. If the benefit is used up in the current period, it is revenue.

| Item | Capital or revenue? | Why |
| --- | --- | --- |
| New delivery van | Capital | Vehicle that lasts for years and earns revenue |
| Fuel for the delivery van | Revenue | Used up on every trip |
| Extension to the factory building | Capital | Property and premises (fixed asset) |
| Monthly rent for the shop | Revenue | Day-to-day running cost |
| Office computer system | Capital | Computer and IT system (fixed asset) |
| Printer paper and stationery | Revenue | Office supplies, used up quickly |
| Patent for a new product design | Capital | Intellectual property that lasts |
| Wages | Revenue | Running cost paid each period |

The table applies the textbook definitions to typical items. The teacher deck includes a restaurant video activity (identify capital and revenue examples). The video is not in these sources, so use the Table 14.1 lists and the three questions above to classify what you see.

### Check yourself

<details>
<summary>(Illustrative figures) A firm spends $30,000 on a new machine and $30,000 on advertising. Which one is capital expenditure?</summary>

The machine. It is a fixed asset that is used repeatedly in production and lasts for years. The advertising is revenue expenditure: its benefit is used up in the current period, and advertising is listed in Table 14.1 as revenue spending.

</details>`,
        keyTakeaways: [
          'Capital versus revenue depends on what the spending buys and how long the benefit lasts, not on the amount.',
        ],
        examTips: [
          'Common trap: "big spending means capital". Always check whether the item lasts and earns money over several years.',
        ],
      },
      {
        id: 'sec-3.1-change-failures',
        title: '6. Textbook detail: change, sustainability and failed businesses',
        content: `**In one line:** capital expenditure drives change, revenue expenditure sustains the business, and firms that neglect either can fail (textbook pp.223-224).

### The key concepts (textbook p.223)

- Capital expenditure is important for implementing change in organizations. Businesses must invest in their future to remain relevant and competitive.
- A business can collapse because of insufficient capital expenditure to adapt to changes in the external environment, such as changing consumer trends or competitors moving in a different strategic direction.
- Revenue expenditure is also vital. Competitive remuneration packages motivate the workforce (see Chapter 10) and improve productivity and employee loyalty.
- Hence both revenue and capital expenditure are vital for the sustainability of business organizations.

### Box 14.1: five examples of failed businesses (textbook p.223)

The textbook box gives these historical examples, with figures as printed in the textbook:

- **Blockbuster Video:** founded in 1985, the global leader in video rentals once employed 84,300 workers across 9,094 stores worldwide. It collapsed in 2010 because it could not transition to digital technologies such as online streaming services.
- **Borders:** an international book and music retailer with stores around the world. It failed to transition to digital and online books and music, and went bankrupt in 2011.
- **Kodak:** once the world's largest film company. Its hesitation to fully embrace digital production technologies, including digital cameras for the mass market, led to its demise in 2012.
- **Tower Records:** a mega-store music retailer founded in 1960. It moved online in 1995 but accrued excessive debts and failed to keep up with digital disruption, leading to bankruptcy in 2004.
- **Toys "R" Us:** once the world's largest toy retailer. It missed the early opportunity to develop its own e-commerce presence. It announced a $100 million plan to revamp its e-commerce platform in May 2017, but debts of $1bn and intense online competition led to bankruptcy in September 2017.

### Teacher deck cases (historical)

The teacher deck's table summarizes three of these firms. Borders, Kodak and Toys R Us each failed to invest in capital expenditure needed for digital products or online sales, and the deck states the reason for each (see the image below).

![Table of three failed businesses. Borders, Kodak and Toys R Us each failed to invest in the capital spending needed for digital products or online sales.](/study-images/finance/3.1-failed-businesses-capex-table.png "Three firms that under-invested in capital expenditure.")

The deck also covers Blockbuster. It was once a global leader in video rental, valued at USD$3 billion. By 2010 it had filed for bankruptcy with almost USD$1 billion in debt. These are historical figures from the deck, not current values.

### Check yourself

<details>
<summary>Deck questions: (1) Identify an opportunity for capital expenditure that could have changed Blockbuster's fortunes. (2) Identify an opportunity for revenue expenditure that could have sustained its success. (3) With reference to change and sustainability, explain why Blockbuster failed.</summary>

Suggested answers (not a source mark scheme):

1. Investing in digital technology, such as online streaming services. The textbook says Blockbuster could not make this transition.
2. Revenue spending that keeps the existing stores running, such as staff wages, rent and stock, so that current customers stay while the change is made.
3. Blockbuster failed to change: it did not invest in digital technology, so it could not adapt to new consumer trends. Its position was not sustained, and it ended up with almost USD$1 billion in debt and filed for bankruptcy.

</details>`,
        keyTakeaways: [
          'Capital expenditure drives change; without it a firm can fall behind changing consumer trends and competitors.',
          'Revenue expenditure sustains the business; both are needed for long-term sustainability.',
        ],
        examTips: [
          'For an "explain why it failed" question, link the failure to change (capital) and sustainability (revenue), using the case figures or events.',
        ],
      },
      {
        id: 'sec-3.1-contribution-hl',
        title: '7. Business Management Toolkit: contribution analysis (HL only)',
        content: `**In one line (HL only):** contribution analysis is a tool for judging which revenue expenditure items bring the greatest financial benefit (teacher deck; see Chapter 57 of the textbook, p.246).

The teacher deck uses a cinema chain. The finance manager wants to know which revenue expenditure items will be of greatest financial benefit. The deck's Table 1 lists ten items:

- Leasing movies suited to mature audiences
- Leasing movies suited to younger audiences
- Leasing movies suited to audiences of all ages
- Ingredients for popcorn
- Soft drinks
- Advertisements at bus stops all over the city
- Advertisements at bus stops located near schools
- Rent
- Wages and salaries
- Energy costs

The task is to rank the items from highest to lowest priority, using contribution analysis, and to justify the ranking.

> **Watch out:** the deck does not give a formula or any figures for Table 1. The ranking must be argued from the reasoning, not calculated from numbers. The standard meaning used in contribution analysis is: contribution = the revenue an item brings in minus the variable costs of that item. Items with a higher contribution help more to cover fixed costs and profit. This definition is standard teaching, not from the deck.`,
        keyTakeaways: [
          '(HL only) Contribution analysis ranks revenue expenditure items by how much each helps cover fixed costs and profit.',
        ],
        examTips: [
          'When ranking, state each assumption (for example, which items earn revenue directly) and justify each position.',
        ],
      },
      {
        id: 'sec-3.1-discussion',
        title: '8. Discussion: knowledge, creativity and the external environment',
        content: `**In one line:** the textbook ends this topic with three questions for discussion. They link finance decisions to the wider business environment, to knowledge and to creativity.

- **Business Management Toolkit (textbook p.223):** How might knowledge of the external environment (see Chapter 46) help managers make better-informed decisions about revenue and capital expenditure? Use the Box 14.1 examples: consumer trends and competitors are part of the external environment.
- **Theory of Knowledge (textbook p.223):** How can managers know what to invest in? Consider the evidence available, the uncertainty about future markets, and how investment appraisal (Chapter 21) reduces that uncertainty.
- **Key concept: creativity (textbook p.223):** Discuss whether capital expenditure enhances or limits creativity in business organizations. Consider that investment can fund new ideas and technologies, while high costs and limited finance may restrict the risks a firm is willing to take.`,
        keyTakeaways: [
          'Finance decisions should be informed by knowledge of the external environment, such as consumer trends and competitors.',
          'The creativity question asks whether capital spending helps or limits new ideas; argue both sides with a clear judgement.',
        ],
        examTips: [
          'For discussion or evaluation questions, use the textbook link between capital spending and change, and state the conditions under which your judgement holds.',
        ],
      },
      {
        id: 'sec-3.1-olympics-practice',
        title: '9. Exam practice: London Olympic Games (textbook Question 14.1)',
        content: `**Case (textbook p.222):** London became the first city to host the modern Olympic Games three times (1908, 1948 and 2012). The commercial benefits were welcomed by the UK construction industry, with around half a million new jobs added to the industry. Transport for London funded improvements such as expansion of railway networks and the introduction of Britain's first "bullet" (high-speed rail) trains.

**Questions (textbook p.222):**

- (a) With reference to the case study, distinguish between revenue expenditure and capital expenditure. [4 marks]
- (b) Examine the benefits of the Olympic Games being held in London to various stakeholder groups. [6 marks]

### Suggested approach (not a textbook mark scheme)

- **Part (a):** Define each term in one sentence (a fixed asset used repeatedly, versus the daily running of the business). Then match a case item to each. The railway expansion and the high-speed trains are fixed assets used for years, so they are capital. The case does not name a revenue item directly; a logical example is wages for the new jobs, which are used up in the current period. Make the time frame explicit: long-term use versus benefit today.
- **Part (b):** Use the stakeholder groups named or implied in the case: the construction industry and its new workers, Transport for London and local government, rail passengers, and the wider business community. For each, state a benefit, link it to the case, and consider whether it is short-term or long-term.`,
        keyTakeaways: [
          'In Question 14.1 part (a), define both terms, match a case item to each, and make the time frame of the benefit explicit.',
          'In part (b), tie each stakeholder benefit to a specific detail of the case.',
        ],
        examTips: [
          'Use the case details (railway expansion, bullet trains, half a million new jobs) in your answer rather than generic examples.',
        ],
      },
      {
        id: 'sec-3.1-review',
        title: '10. Review questions (textbook p.224)',
        content: `The textbook ends the topic with five review questions. Answers are given below, based on the textbook wording.

### Check yourself

<details>
<summary>1. What is capital expenditure?</summary>

Spending on fixed assets (non-current assets): items of monetary value that have a long-term function and are used repeatedly for the purpose of production, not intended to be sold in the short term (textbook pp.221, 224).

</details>

<details>
<summary>2. What are some typical examples of capital expenditure?</summary>

Land, buildings, equipment, machinery and commercial vehicles (textbook p.221). Table 14.1 also lists capital equipment, furniture, fixtures and fittings, computer and IT systems, intellectual property, mergers and acquisitions, property and premises, and vehicles (textbook p.222).

</details>

<details>
<summary>3. What is revenue expenditure?</summary>

Finance spent on the daily operations of a business, such as wages, salaries, raw materials, rent and utility bills (textbook p.222). Its benefit is used up in the current period.

</details>

<details>
<summary>4. What are some typical examples of revenue expenditure?</summary>

Advertising and promotion, energy costs, freight and delivery, insurance, office supplies and administration, raw materials and components, rent, and wages and salaries (textbook p.222, Table 14.1).

</details>

<details>
<summary>5. How does capital expenditure differ from revenue expenditure?</summary>

Capital expenditure buys fixed assets that give long-term benefits and determine the scale of operations; it is usually financed from long-term sources and can provide collateral (textbook p.221). Revenue expenditure pays for daily operations and generates value today; its costs must be controlled so that sales revenue covers production costs (textbook p.222).

</details>`,
        keyTakeaways: [
          'Capital expenditure is for long-term fixed assets; revenue expenditure is for daily operations.',
        ],
        examTips: [
          'For "how does X differ from Y" questions, compare on at least two points: the time frame of the benefit and the type of finance used.',
        ],
      },
    ],
    highYieldTerms: [
      { term: 'Finance', definition: 'The various available money that an organization has to fund its business activities.' },
      { term: 'Capital expenditure (CapEx)', definition: 'Spending on fixed assets, such as property, machinery, equipment and tools, that are used repeatedly for production over the long term to generate revenue.' },
      { term: 'Revenue expenditure (RevEx)', definition: 'Spending on the daily operations and running of a business, such as wages, salaries, raw materials, rent and utility bills. Its benefit is used up in the current period.' },
      { term: 'Fixed assets (non-current assets)', definition: 'Items of monetary value with a long-term function that are used repeatedly for production and are not intended for resale within the next twelve months.' },
      { term: 'Current assets', definition: 'Short-term assets that will last in the business for up to 12 months, such as cash, debtors and stock.' },
      { term: 'Intangible assets', definition: 'Non-physical fixed assets that are valuable to a firm\'s survival and success, such as brand value, goodwill, copyrights, trademarks and patents.' },
      { term: 'Intellectual property rights (IPRs)', definition: 'A firm\'s fixed, intangible assets with a monetary value, comprising goodwill, patents, copyrights and trademarks.' },
      { term: 'Collateral', definition: 'The financial guarantee used to secure external loan capital that finances investment expenditure for business growth. If the loan is not repaid, the lender can take the asset.' },
      { term: 'Investment', definition: 'Capital expenditure made with the intention of a financial return at some point in the future.' },
      { term: 'Investment appraisal', definition: 'The formal process of quantifying the financial risks of an investment decision, to establish whether the expenditure can be justified financially (see Chapter 21).' },
      { term: 'Depreciation', definition: 'The fall in the value of a fixed asset over time, mainly due to wear and tear and obsolescence.' },
      { term: 'Indirect costs', definition: 'Overhead expenses that are not linked to one specific good or service, such as insurance and advertising.' },
      { term: 'Long-term finance', definition: 'Sources of finance of more than five years, used to buy long-term fixed assets or to fund growth, such as in overseas markets.' },
      { term: 'Bankruptcy', definition: 'A situation in which a person or business declares that it can no longer pay its debts, so the entity collapses.' },
      { term: 'Liquidity crisis', definition: 'A situation in which a business cannot pay its short-term debts, which can eventually lead to bankruptcy.' },
      { term: 'Contribution analysis (HL only)', definition: 'A Business Management Toolkit tool for ranking revenue expenditure items by how much each contributes to covering fixed costs and profit (see Chapter 57).' },
    ],
  },

  {
    id: '3.2-sources-of-finance',
    title: 'Sources of Finance',
    unitCode: 'Unit 3.2',
    subtitle: 'Internal and external sources, short and long time frames, and how to choose the right one',
    estimatedReadTime: '22 min read',
    description:
      'Compare internal sources (from inside the business) and external sources (from outside), classify each by its time frame and terms, and use SPACED and a decision tree to choose between them.',
    sections: [
      {
        id: 'sec-3.2-overview',
        title: '1. Where does the money come from?',
        content: `**In one line:** sources of finance are the places a business gets its money from. An **internal** source comes from inside the business. An **external** source involves a third party outside the business (textbook pp.225-226).

A business needs finance for three purposes: to set up (start-up), to pay for its day-to-day running (**revenue expenditure**), and to expand or buy long-lived assets (**capital expenditure**) (textbook p.225). Figure 15.1 in the textbook makes the point that all businesses need finance to operate. It is not reproduced here.

The simplest test: **is someone outside the business involved?** If not, the source is internal.

| Source | Internal or external? | Time frame | Typical use |
| --- | --- | --- | --- |
| Personal funds | Internal | Short term (Table 15.3) | Start-up (sole traders, partnerships); capital and revenue |
| Retained profit | Internal | Short and long term (Table 15.3) | Capital and revenue |
| Sale of assets | Internal | Short term in Table 15.3 (sale of fixed assets) | Capital; revenue only in a liquidity crisis |
| Share capital | External | Long term | Capital (see the Watch out in section 3) |
| Loan capital | External | Long term (medium to long term) | Capital |
| Overdraft | External | Short term | Revenue |
| Trade credit | External | Short term (normal 30 to 60 days) | Revenue |
| Crowdfunding | External | Short and long term (Table 15.3) | Capital |
| Leasing | External | Long term | Capital |
| Microfinance providers | External | Long term (text p.233) | Capital |
| Business angels | External | Long term | Capital |

> **Watch out:** the time-frame column follows the Unit 3 conventions. The textbook's Table 15.3 and the teacher's answer key both tick trade credit as short and long term. Ordinary trade credit (30 to 60 days) is short term. Classify a longer credit arrangement by its actual terms.

Classify every source by its actual terms: how long the money stays in the business and how it is repaid. Do not classify by a label alone.`,
        keyTakeaways: [
          'Internal = no third party is involved. External = a third party such as a bank, shareholder, supplier or investor provides the money (textbook p.226).',
          'Classify a source by its actual terms (how long the money stays and how it is repaid), not by a label.',
        ],
        examTips: [
          'In AO2 questions, name the source, state whether it is internal or external, and give one advantage and one disadvantage.',
        ],
      },
      {
        id: 'sec-3.2-internal',
        title: '2. Internal sources: money from inside the business',
        content: `### Personal funds (textbook p.226)

The entrepreneur's own savings, also called owner's capital. It is usually used to finance business start-ups, and it is the main source of finance for **sole traders** (see Chapter 2). Partnerships also use it (Table 15.2, p.233).

Textbook example: Jamie Oliver hired fifteen unknown recruits for his restaurant "Fifteen" using £500,000 ($720,000) of his own money. For most sole traders, personal funds are not enough, so they need additional sources.

- **Advantage:** no interest to pay. The teacher deck adds that the cost is zero unless the money is borrowed from friends or family who expect repayment with interest.
- **Disadvantage:** the amount is limited to the owner's savings.

> **Watch out:** family and friends are not named in the syllabus, but the textbook says they are a popular source in many cultures, especially for sole traders and partnerships (p.235). Borrowing from them is often simpler and cheaper than a bank loan, which may need collateral. It is usually very limited, and it often causes conflict and disputes.

### Retained profit (textbook p.226)

The value of the profit a business keeps for use within the business, after it has paid taxes and dividends to its shareholders. It is often used for capital expenditure, and some may be kept in a contingency fund for emergencies (see Chapter 41).

$$ Retained profit = Profit after tax - Dividends $$

- **Advantage:** no interest charges.
- **Disadvantages:** if the business makes a loss, this source is not available. If shareholders receive high dividends, little is left to reinvest (teacher deck).

> **Watch out:** retained profit is an accounting figure, the surplus left after tax and dividends. It is not automatically cash. The profit may already have been spent on stock, machinery or debt repayments, so there may be no matching money in the bank.

### Sale of assets (textbook p.226)

Businesses can sell **dormant assets** (unused, such as old machinery and computer equipment that has been replaced) and **obsolete assets** (outdated). If a business relocates (see Chapter 38), it may raise finance by selling its land and buildings.

- **Advantage:** no interest to pay.
- **Disadvantage:** if an asset is obsolete (for example, outdated technology) or nobody wants to buy it, the money cannot be raised (teacher deck).

> **Watch out:** the textbook says that in an extreme liquidity threat, a business can raise finance by selling subsidiaries, and it calls this external finance (p.226). Selling a subsidiary is a sale to outside buyers, so treat it as a last resort, not a typical internal source.

### Check yourself

<details>
<summary>Why is retained profit not the same as the cash in the bank?</summary>

Retained profit is an accounting figure: the profit left after tax and dividends. That profit may already have been spent on stock, equipment or debts, so there may be no matching cash.

</details>`,
        keyTakeaways: [
          'Personal funds, retained profit and sale of assets have no interest cost, but each is limited by the owner\'s savings, the profit made, or the assets available.',
          'Retained profit is an accounting figure (after tax and dividends), not cash in a bank account.',
        ],
        examTips: [
          'A good disadvantage links to the case: a loss-making firm has no retained profit; a firm with obsolete machinery cannot sell it.',
        ],
      },
      {
        id: 'sec-3.2-share-capital',
        title: '3. External equity: share capital and share issues',
        content: `### Share capital (textbook pp.226-227)

Share capital is the money raised from selling shares in a limited liability company. It is the main source of finance for most limited liability companies and is recorded in the balance sheet (see Chapter 17).

- **Private companies cannot sell their shares to the general public.** Publicly held companies can issue shares on a stock exchange.
- **Initial public offering (IPO):** the first time a company sells (floats) its shares on a stock exchange, which converts it to a publicly traded company. Popular IPOs are heavily oversubscribed, which pushes up the share price (textbook p.226).
- **Share issue (or share placement):** an existing publicly held company raises further finance by selling more of its shares.

The **stock exchange** (stock market) has two main functions: it lets companies raise capital, and it provides a market for second-hand shares and government stocks. The London, Tokyo and New York exchanges are among the largest in the world (textbook p.226). Figure 15.2 in the textbook shows the New York Stock Exchange. It is not reproduced here.

- **Advantage:** can raise a very large amount of finance, especially for publicly held companies. Textbook example (historical): the Brazilian oil company Petrobras raised a world-record $70 billion from a public share issue in September 2010.
- **Disadvantages:** ownership and control become diluted, because new shareholders own part of the business. The process involves many legalities and administrative procedures, with their associated costs (textbook p.226). The teacher deck adds that it is time-consuming and expensive to prepare, and that there is no guarantee investors will buy.

> **Key point (textbook p.227):** when shareholders sell their shares to each other, the company receives none of that money. Those shares are traded on the secondary market, and no new shares are issued. Only a new share issue or an IPO brings cash into the company.

> **Watch out (common mistake, textbook p.227):** a fall in share price does not usually cause a fall in profit. Poor performance lowers the company's value, and the share price then declines.

> **Watch out (source label):** the teacher deck's answer slide lists share capital under "revenue expenditure". The textbook and the rest of the deck describe it as long-term, capital finance for expansion. Use it for capital expenditure.

### Textbook detail: Question 15.1, Agricultural Bank of China (textbook p.227)

In August 2010, Agricultural Bank of China (ABC) completed its IPO in Shanghai and Hong Kong, raising $22.1 billion (historical). ABC's flotation was then the world's largest, beating the $21.9 billion IPO of ICBC in October 2006. ABC had over 320 million customers across 24,000 branches. Investors bought despite weak market sentiment and fears that shares were overvalued.

- (a) Define initial public offering. [2 marks]
- (b) Explain why ABC might have floated its shares. [4 marks]
- (c) Explain why investors might have been keen to buy ABC shares despite the weak sentiment. [4 marks]

Points to draw on (the textbook gives no mark scheme): in (a), a business converting to a public company by selling shares on a stock exchange for the first time. In (b), the very large sums a share issue can raise for growth. In (c), the bank's size (320 million customers, 24,000 branches) and the strong demand the IPO attracted.

### Check yourself

<details>
<summary>A shareholder sells 100 shares to another investor on the stock market. Does the company receive any cash?</summary>

No. Shares traded between investors do not bring cash into the company. Only a new share issue or an IPO does.

</details>`,
        keyTakeaways: [
          'Share capital brings cash into the company only when new shares are issued (through an IPO or a share issue).',
          'Selling shares dilutes the control of the existing owners, and the process is costly.',
        ],
        examTips: [
          'Explain how equity dilutes control: new shareholders own part of the business and share in decisions.',
          'When a question says shares are bought on the stock market, check whether new shares are issued. If not, the company gets no money.',
        ],
      },
      {
        id: 'sec-3.2-angels-crowdfunding',
        title: '4. External equity: business angels and crowdfunding',
        content: `### Business angels (textbook pp.231-232)

**In one line:** extremely wealthy individuals who invest their own money in businesses with high growth potential. These are high-risk, high-return ventures.

Angels fund firms that cannot raise enough from commercial banks, or that are too small to attract shareholders or other investors. They usually take a proactive role in setting up or running the business. The teacher deck notes that angels differ from **venture capitalists**, which operate as pools of professionally managed funds.

- **Advantage:** funding for firms that banks will not lend to. With their experience and financial backing, angels can be a major advantage to the survival and success of a new business.
- **Disadvantages:** the owner loses some control. The business may later have to buy back the angel's stake to regain full ownership.

**What angels check before investing (textbook p.232):**

- **Return on investment:** investors demand a positive return. Most start-ups fail outright, so each investment must have good potential to be highly profitable.
- **The business plan:** it sets out the purpose and goals of the business, which gives direction and identity. Angels need to see that the firm understands its market and can compete in a high-growth market with few competitors. Creative and original ideas help convince investors.
- **People:** no single person has all the skills, experience and contacts needed to run a business. Ineffective people management is a major cause of failure.
- **Track record:** the past earnings of the business and its management, including whether it has repaid previous lenders on time, and the entrepreneurs' past achievements.

Textbook case study 15.2 (UK): about 18,000 business angels invest about £1.5 billion ($2.1bn) each year. A typical angel invests about £40,000 ($65,500) and stays invested for up to eight years. Only about 5% of Britain's angel investors are female. Figure 15.6 in the textbook shows business angels backing business ideas. It is not reproduced here.

### Crowdfunding (textbook p.229; teacher deck)

**In one line:** raising small amounts of money from a large number of people, usually through an online platform, to finance a new venture or project. It is the opposite of borrowing a large sum from a few lenders.

Crowdfunding relies on social media platforms, which charge hosting fees. It also depends on networks of friends, family and work colleagues. In many countries it is heavily regulated to protect donors and to prevent fraud.

- **Donation crowdfunding:** people contribute money that the business does not have to pay back.
- **Advantages (teacher deck):** potentially high reward with low initial risk, and feedback from potential investors can be valuable market research. The more creative or innovative the idea, the more likely it is to succeed.
- **Disadvantages (teacher deck and textbook):** hosting fees, and a low success rate because of competition for funds. Start-ups usually give up some ownership and control, because investors demand shares in the new company.

Time frame: short and long term (Table 15.3, p.234).

> **Watch out:** the same source appears under short-term examples on p.233 and under both columns in Table 15.3. Classify by the actual terms of the campaign.

### Check yourself

<details>
<summary>Does crowdfunding always cost the business some ownership?</summary>

No. Donation crowdfunding needs no payback and gives no ownership. But when investors receive shares in the new company, the founders lose part of the ownership and control.

</details>`,
        keyTakeaways: [
          'Business angels can fund firms that banks will not lend to, but the owner loses some control and may have to buy back the angel\'s stake.',
          'Angels judge return on investment, the business plan, the people and the track record. Crowdfunding trades off low initial risk against fees and a low success rate.',
        ],
        examTips: [
          'For business angels, use the four criteria (return, business plan, people, track record) to show what an angel will check before investing.',
          'Textbook example for an angel case: Tawfeer Market (Egypt) raised $500,000 from business angels in early 2022. Use its facts to support a limitation of angel finance (see section 13).',
        ],
      },
      {
        id: 'sec-3.2-debt',
        title: '5. External debt: loan capital and overdrafts',
        content: `### Loan capital (textbook p.228)

**In one line:** medium- to long-term interest-bearing finance borrowed from commercial lenders such as banks. Loan capital is also called debt capital.

Interest is fixed or variable, depending on the agreement between borrower and lender. The amount borrowed is repaid in instalments over a set period, such as 5, 10 or 25 years.

- **Mortgages:** secured loans to buy property (land or buildings). If the borrower defaults, the lender can repossess the property.
- **Business development loans:** flexible loans for the borrower's specific needs, such as starting or expanding a business, buying specialist equipment, or improving cash flow (see Chapter 20).
- **Debentures:** see below.

- **Advantage:** repaying in instalments gives the business time to earn revenue to repay the loan.
- **Disadvantages:** the cost of borrowing may be high, depending on the interest rate. If collateral (such as the property bought with a mortgage) is provided and the business fails, the lender can take it.

### Debentures (textbook p.228)

**In one line:** long-term loans issued by a business. Debenture holders (individuals, governments or other businesses) are paid interest even if the business makes a loss, and before shareholders receive any dividends. The interest can be fixed or variable.

Debenture holders have no ownership or voting rights, so the business keeps its control. But issuing debentures raises the firm's **gearing ratio** (long-term borrowing as a percentage of capital employed). A higher gearing ratio makes the firm more vulnerable if interest rates rise. Textbook example: debentures were used to help build the Emirates Stadium in London (Figure 15.3). The teacher deck does not define debentures. The textbook definition above is the one to use.

Textbook case study 15.2 (Kellett School, historical): in 2013, the Hong Kong school issued record debentures worth up to HK$10m (US$1.29m), refundable when the students leave. Parents with more than one child got a small discount. Fees were HK$123,500 to HK$168,800 a year, and the school was moving to a new HK$200m (US$25.8m) campus. Critics argued the cost would reduce Hong Kong's competitiveness by deterring skilled expats. A rival, Harrow International, offered non-interest-bearing debentures of up to HK$3m (US$387,000). Debentures are common in Hong Kong's international schools because capital expenditure and land costs are high.

### Overdraft (textbook pp.229, 236; teacher deck)

**In one line:** permission to take out more money than is in the bank account, up to a pre-set limit. It is the most flexible form of borrowing for most businesses in the short term.

- **Use:** minor cash flow problems (see Chapter 20). Large, short-term cash outflows, such as a retailer stocking up before a peak trading season. Businesses that have sold goods on trade credit and are waiting for customers to pay.
- **Cost:** interest is charged daily, and only on the days the business is overdrawn. The textbook says the rate is relatively high, but an overdraft is usually more cost effective than a bank loan because it is used for short periods.
- **Advantage:** flexible finance for unexpected large cash outflows.
- **Disadvantages:** overdrafts are repayable on demand, so the lender can ask for the money back at any time. The rate of interest is relatively high.

> **Watch out (source conflict):** the textbook says overdrafts are usually more cost-effective than bank loans. The teacher deck says the cost of borrowing is high compared with other loan-bearing sources. Compare the total cost, using the case figures, before deciding.

### Check yourself

<details>
<summary>Why are debentures described as a long-term source that does not reduce control?</summary>

Debentures are long-term loans. Debenture holders receive interest but have no ownership or voting rights, so the existing owners keep control. The trade-off is a higher gearing ratio, which increases risk.

</details>`,
        keyTakeaways: [
          'Loan capital is medium- to long-term debt repaid in instalments. An overdraft is short-term, flexible and repayable on demand.',
          'Debt does not dilute ownership, but it always brings interest and repayment obligations, and collateral can be lost if the business fails.',
        ],
        examTips: [
          'Compare two sources on one criterion (for example cost or time frame) rather than listing advantages and disadvantages separately.',
          'When a question involves borrowing, mention gearing: a higher gearing ratio means higher risk, especially when interest rates rise.',
        ],
      },
      {
        id: 'sec-3.2-trade-credit',
        title: '6. Trade credit and credit cards: buy now, pay later',
        content: `### Trade credit (textbook p.229; teacher deck)

**In one line:** trade credit lets a business postpone payment for goods or services. The business has the goods now and pays the supplier later.

The sale is made at the time of purchase, but the seller (the creditor) receives no cash until a later date. Creditors usually allow their customers (debtors) between 30 and 60 days to pay.

The teacher deck illustrates a restaurant: (1) the supplier provides the food ingredients on credit; (2) the restaurant sells meals to customers; (3) customers pay the restaurant; (4) the restaurant pays the supplier.

![Restaurant cycle showing the trade-credit steps: ingredients arrive from the supplier, meals are sold to customers, customers pay the restaurant, and the restaurant pays the supplier.](/study-images/finance/3.2-trade-credit-restaurant-cycle.png "Trade credit lets the restaurant sell meals before it pays for the ingredients.")

- **Advantage:** time to process the goods into products or services and earn revenue before paying. This is why trade credit is a revenue (day-to-day) source.
- **Disadvantage:** if payment is late, the business can be charged overdue payment penalties (teacher deck).

Time frame: **short term** for normal 30 to 60 day credit.

> **Watch out (source correction):** the textbook's Table 15.3 and the teacher's answer key both tick trade credit as short and long term. The prose and key terms describe normal trade credit as short term. Teach ordinary trade credit as short term. If credit is extended well beyond the usual period, classify it by its actual terms.

### Creditor or debtor? (textbook p.229; review question 13)

- **Creditor:** the organization that offers trade credit. From a buying business's point of view, it is a supplier the business owes money to.
- **Debtor:** a customer allowed time to pay. It is a customer who owes the business money.

> **Watch out:** creditor and debtor are defined from the point of view of the business in question. The textbook uses the seller's view: the organization offering trade credit is the creditor, and its customers are the debtors (p.229).

### Credit cards (textbook p.229)

Credit cards are similar to trade credit, except that the creditor is a financial institution, such as a commercial bank or card provider (the textbook names American Express and Visa), rather than a supplier. In effect, using a credit card is a cash advance to the card holder. The textbook calls credit cards a vital source of external finance for sole traders and partnerships.

### Check yourself

<details>
<summary>What is the difference between a creditor and a debtor?</summary>

A creditor is a supplier that the business owes money to. A debtor is a customer that owes the business money. The textbook defines them from the seller's view: the organization offering trade credit is the creditor, and its customers are the debtors.

</details>`,
        keyTakeaways: [
          'Trade credit is buy now, pay later. The supplier receives no cash until a later date, usually 30 to 60 days after the sale.',
          'A creditor is a supplier the business owes money to. A debtor is a customer who owes the business money.',
        ],
        examTips: [
          'Trade credit suits revenue expenditure, because it pays for stock that is turned into sales. Say so when the case involves day-to-day running costs.',
        ],
      },
      {
        id: 'sec-3.2-leasing',
        title: '7. Leasing, hire purchase and sale and leaseback',
        content: `### Leasing (textbook pp.229-230; teacher deck)

**In one line:** hiring an asset under a contract. The **lessor** is the legal owner of the asset. The **lessee** pays rent to use it.

Leased assets include machinery, equipment, computers, motor vehicles and buildings (textbook). Figure 15.4 in the textbook shows police cars financed by leasing. It is not reproduced here. Leasing suits businesses that do not have the capital to buy such assets, and it releases cash for other purposes. The textbook also says it can be cheaper than buying, especially in the short to medium term. Leasing counts as a business expense, which can reduce the lessee's tax bill.

- **Advantage:** no large upfront cost. Repairs and maintenance are, according to the textbook, the lessor's responsibility (p.230).
- **Disadvantage:** in the long term, leasing is more expensive than hire purchase or buying the asset outright.

> **Watch out:** the textbook says repairs and maintenance are the lessor's responsibility. The Unit 3 conventions say the allocation depends on the contract. In a case, check the lease terms before deciding who pays for maintenance.

Time frame: long term (Table 15.3).

### Hire purchase (textbook p.230; review question 16)

Hire purchase (HP) is not on the syllabus list of sources, but the textbook covers it and compares it with leasing and sale and leaseback. HP lets a business pay its creditor in instalments, usually over 12 or 24 months.

- A **deposit** (down payment) is usually needed to secure the deal.
- The asset is legally the property of the creditor until all payments have been made. The buyer owns it after the final instalment.
- If the buyer falls behind on repayments (defaults), the lender can repossess the asset.
- Interest is charged on the amount borrowed.

### Sale and leaseback (textbook p.230; teacher deck)

**In one line:** the business sells a fixed asset it owns, to raise finance, and immediately leases it back. Ownership transfers to the new owner, but the asset does not physically leave the business.

It releases cash from an asset the business already has. It also creates a lease obligation, so the business must keep paying rent.

### Textbook example: Wizz Air (textbook p.230, historical)

In late 2013, Hungary's low-cost airline Wizz Air signed a sale-and-leaseback agreement with China's CDB Leasing Co. (printed "COB" in the textbook) to finance six Airbus A320 aircraft. The deal raised $549 million for expansion, including new routes from 2014. In 2020, COVID-19 cut Wizz Air's passengers to 16.6 million, only 42% of the 40 million who flew the year before.

- (a) Describe the meaning of sale and leaseback as a source of finance. [2 marks]
- (b) Explain two advantages to the leasing company of leasing expensive assets to established companies such as Wizz Air. [4 marks]
- (c) Explain two advantages to Wizz Air of leasing some of its aircraft. [4 marks]

### Comparing the three arrangements

| Feature | Leasing | Hire purchase | Sale and leaseback |
| --- | --- | --- | --- |
| Who owns the asset? | The lessor is the legal owner throughout | The creditor, until the final instalment | The new owner (the lessor) after the sale; the business still uses the asset |
| What the business pays | Rent under the contract | Deposit, then instalments with interest | Rent under the lease after receiving cash for the asset |
| Upfront cash | No large upfront cost | Usually a deposit | Business receives cash from selling its own asset |
| Owner at the end | Not stated in the textbook; the lessor stays the legal owner | The buyer, after the final instalment | Not the business (it sold the asset) |`,
        keyTakeaways: [
          'Leasing: the lessor owns the asset and the lessee pays rent. Hire purchase: the buyer owns it only after the final instalment. Sale and leaseback: the business sells its own asset and leases it back.',
          'Leasing avoids a large upfront cost but can cost more than buying over the long run.',
        ],
        examTips: [
          'Review question 16 asks how sale and leaseback differs from hire purchase. Answer by ownership: in sale and leaseback the business gives up ownership of its own asset. In hire purchase the buyer becomes the owner at the end.',
        ],
      },
      {
        id: 'sec-3.2-microfinance',
        title: '8. Microfinance providers',
        content: `**In one line:** microfinance is a financial service that gives small loans to entrepreneurs of small businesses who cannot borrow from banks. These are often women and people on low incomes. Its aim is to help disadvantaged people gain access to essential financial services and to help eradicate poverty (textbook p.231).

Without microfinance, small businesses often have access to banking and insurance only at very limited levels. Their finance can come only from unofficial money lenders, at extremely high costs. According to the World Bank, over 500 million individuals have directly benefited from microfinance, and nearly 3 billion people in low-income countries have little or no access to official financial services (textbook p.231). Figure 15.5 shows microfinance helping women in Vietnam to earn a living. It is not reproduced here.

**Textbook case study 15.1, BRAC:** formerly the Bangladesh Rural Advancement Committee, BRAC is the largest microfinance provider in Bangladesh. It was founded in 1972 and is headquartered in Dhaka. Figures as printed in the textbook: over 97,700 staff, most of them women, and more than 126 million people helped in 11 countries.

### Advantages and disadvantages (textbook Table 15.1, p.231)

| Advantages | Disadvantages |
| --- | --- |
| **Accessibility:** helps people in poverty become financially independent. Commercial banks do not usually lend such small amounts to this group. | **Ethics (criticism):** critics argue that microfinance is unethical because providers are for-profit organizations that profit from the poor and unemployed. |
| **Job creation:** effective use can create new jobs, with benefits for society as a whole. | **Limited finance:** providers lend only small amounts because of the high risk of default (failure to repay). |
| **Social well-being:** successful applicants can give their children better access to education, and their families better access to healthcare. | **Limited eligibility:** not all poor people qualify. Providers must minimize their own risks by checking that borrowers can repay. |

Time frame: long term (textbook p.233 lists microfinance as a long-term source). Note that Table 15.3 does not list it.

> **Watch out (source correction):** the textbook and deck describe microfinance providers as for-profit. Not all of them are. Some are social enterprises or non-profits, and some are commercial. Check the specific provider's legal form and conduct. The "for-profit" criticism is disputed, and it is not assessed in the quiz or test.

> **Watch out (source wording):** the textbook says successful borrowers are less likely to pull their children out of school. Teach the intended benefit as improved access to education. Do not teach children leaving school as a benefit.

### Check yourself

<details>
<summary>What is the main purpose of microfinance?</summary>

To give small loans to entrepreneurs (especially women and people on low incomes) who cannot borrow from banks, so that they can start or grow businesses and help reduce poverty.

</details>`,
        keyTakeaways: [
          'Microfinance gives small loans to entrepreneurs who cannot borrow from banks. Its aim is to help reduce poverty.',
          'Providers differ. Social and commercial providers should not be treated as the same, and the "for-profit" criticism is disputed.',
        ],
        examTips: [
          'When you use a disadvantage from Table 15.1, state it as a view ("critics argue"), because the ethical criticism is disputed.',
        ],
      },
      {
        id: 'sec-3.2-time-frame',
        title: '9. Short-term and long-term sources of finance',
        content: `### Definitions (textbook p.233; Unit 3 conventions)

- **Short-term sources of finance:** available for a period of less than one year, used for the daily or routine operations of the business. For external sources, this means money that must be repaid to creditors within the current fiscal (tax) year or the next 12 months. Examples: trade credit, overdrafts and crowdfunding.
- **Long-term sources of finance:** available for any period of more than 12 months from the accounting period. Used to buy fixed assets or to finance the expansion of a business. Examples: long-term loans (mortgages and debentures), share capital, leasing, microfinance and business angels.

This guide uses **12 months** as the dividing line, as the Unit 3 conventions do. The teacher's key-terms list describes long-term finance as "more than five years", which leaves 1 to 5 years undefined. Do not use that wording in an exam answer.

The textbook stresses that definitions vary between businesses and industries (pp.233-234). Research-heavy firms, such as space technology or pharmaceuticals, may see long term as ten or more years. Fast-paced industries such as ICT and fashion may see five years as too long to plan.

### Time frame by source (textbook Table 15.3, p.234)

| Source | Short term | Long term | Note |
| --- | --- | --- | --- |
| Personal funds | Yes | | Table 15.3 |
| Retained profit | Yes | Yes | Table 15.3 ticks both |
| Sale of fixed assets (divestment) | Yes | | One-off inflow; judge by purpose |
| Business angels | | Yes | |
| Crowdfunding | Yes | Yes | |
| Debentures | | Yes | |
| Leasing | | Yes | |
| Loan capital | | Yes | |
| Overdrafts | Yes | | |
| Share capital | | Yes | |
| Trade credit | Yes | Yes | Normal credit is short term (see section 6) |
| Microfinance | | Long term | Listed in the text (p.233), not in Table 15.3 |

> **Watch out:** the textbook and the teacher's answer key place the sale of fixed assets in the short-term column. Its one-off nature makes the label less useful than the purpose: in practice, it usually funds capital expenditure.

### Matching the time frame to the purpose (textbook p.234)

- **Purpose:** overdrafts suit improving short-term cash flow problems (see Chapter 20). Leasing suits financing new and expensive capital equipment.
- **Duration:** long-term loans or debentures suit a long-term need, such as a new factory. Short-term sources, such as trade credit and overdrafts, suit working capital for the day-to-day running of the business.
- **Repayment periods:** financial managers must know the repayment periods of every source. The aim is for cash coming in to cover cash going out (teacher deck).
- **Why it matters:** serious cash flow problems, when a business cannot pay its short-term debts, can lead to liquidation or bankruptcy (textbook p.235).

### Check yourself

<details>
<summary>A firm needs money for a new factory that it will use for 20 years. Is a short-term source suitable?</summary>

Usually not. A new factory is a long-lived fixed asset (capital expenditure). Long-term sources such as mortgages, debentures or share capital match that purpose. A short-term overdraft is repayable on demand and suits daily running costs and short cash flow gaps.

</details>`,
        keyTakeaways: [
          'Short term: less than one year, or repayable within 12 months, for daily running costs. Long term: more than 12 months, for fixed assets and expansion.',
          'Match the repayment period to the purpose and the amount needed, so that cash coming in covers cash going out.',
        ],
        examTips: [
          'State the 12-month dividing line in any time-frame answer, and note that the boundary varies by industry (textbook pp.233-234).',
          'Classify by actual terms. Ordinary trade credit is short term; a loan repaid over 25 years is long term.',
        ],
      },
      {
        id: 'sec-3.2-choose',
        title: '10. Choosing the right source: SPACED and the decision flowchart',
        content: `### SPACED: the checklist for evaluating a source (textbook pp.234-235)

The textbook says managers consider several interlinked factors when choosing between sources. These can be remembered as **SPACED**.

- **S: Size and status of firm.** An established, large multinational finds it much easier to raise finance from a wider range of sources than a sole trader. Large firms can offer higher collateral and can get cheaper finance through financial economies of scale (see Chapter 6). A sole trader that becomes a private company and later a public company gains access to more sources. Growth strategies such as mergers, takeovers and strategic alliances (see Chapter 5) open up a broader range of finance.
- **P: Purpose of finance.** Daily running (short term) or replacing fixed assets (long term). Overdrafts suit short-term cash flow problems. Leasing suits expensive capital equipment.
- **A: Amount required.** Large amounts may come from an IPO or secured long-term bank loans. A small amount may be covered by retained profit or an overdraft. Lenders also check the **gearing ratio** (long-term external borrowing as a percentage of capital employed). A business with high gearing is high risk, because it already has debt payments to make, and it is more vulnerable when interest rates rise.
- **C: Cost of finance.** Consider the purchase cost of the asset and associated costs, such as administrative fees and maintenance charges. Higher costs usually call for long-term sources, such as mortgages to buy land and buildings.
- **E: External factors.** The state of the economy, consumer confidence (see Chapter 46), interest rates and stock market volatility all affect the choice. Low interest rates tend to stimulate investment because borrowing costs are lower.
- **D: Duration required.** Long-term capital needs (a new factory) suit mortgages or debentures. Working capital for day-to-day running suits trade credit and overdrafts.

> **Watch out:** the teacher deck's list uses the words "size of firm", "external influences" and "costs". These mean the same as the textbook's "size and status", "external factors" and "cost of finance". Use the textbook wording in exam answers.

### The decision flowchart (teacher deck, not in the textbook)

![Flowchart for choosing a source of finance. Revenue expenditure and capital expenditure each ask whether internal sources are sufficient. Small capital spending uses short-term external sources; large capital spending uses long-term sources.](/study-images/finance/3.2-sources-of-finance-decision-flowchart.png "Decision flowchart for choosing a source of finance.")

Read the flowchart from the top:

1. **What type of expenditure is it?** Revenue or capital.
2. **Are sufficient internal sources available?** If yes, use internal sources. If no:
   - Revenue expenditure: use short-term external sources.
   - Capital expenditure: ask whether the spending is small or large. Small: use short-term external sources. Large: use long-term sources.

The flowchart does not say where "small" ends and "large" begins. Treat it as a judgement, comparing the size of the spending with the size and resources of the firm.

> **Class discussion (teacher deck):** "Would you invest £1 million ($1.2m) in a bathtub?" Fredy Vasilev has invented a self-controlling bath system that fills a tub to the user's chosen temperature and volume through an app, and he needs £1m to start his business. Use SPACED to explain your decision.

### Check yourself

<details>
<summary>A firm needs a small amount of money to pay for stock for the next season. Which route on the flowchart applies?</summary>

Revenue expenditure (stock for trading is a day-to-day cost). If internal sources are not sufficient, use short-term external sources, such as an overdraft or trade credit.

</details>`,
        keyTakeaways: [
          'Use SPACED (size and status, purpose, amount, cost, external factors, duration) to justify any choice of source.',
          'The flowchart starts with the type of expenditure, checks internal sources, and for large capital spending uses long-term sources.',
        ],
        examTips: [
          'For a 6-mark evaluation, weigh the numbers from the case against the SPACED factors, then reach a justified recommendation.',
          'Use textbook wording for SPACED, and do not assume small or large without saying what you are comparing it with.',
        ],
      },
      {
        id: 'sec-3.2-decision-tree',
        title: '11. Worked example: which project should the software firm fund?',
        content: `**Source:** the teacher deck's Business Management Toolkit decision tree (slides 32-33). A small software development firm is considering three projects. The tree shows the cost of each option and the outcome of success or failure. The source gives no currency, so the figures are shown in $, which is the default for Unit 3.

| Option | Source of finance | Cost | Outcome if successful (chance) | Outcome if unsuccessful (chance) |
| --- | --- | --- | --- | --- |
| A | Business angel for 40% equity | $400,000 | $800,000 (50%) | $450,000 (50%) |
| B | Crowdfunding plus loan capital to cover any shortfall (the firm already has high debt) | $500,000 | $1,200,000 (60%) | $600,000 (40%) |
| C | Retained profit (almost all of it) | $300,000 | $1,500,000 (50%) | ($1,200,000) (50%) |

> **Watch out (source label):** the deck's tree labels these outcomes "expected value", but it does not calculate an expected value. The working below is our own, labelled as such. It is not in the source.

**Our working** (no time-value adjustment is made, and the cost is subtracted once):

$$ Expected outcome = (chance of success x success outcome) + (chance of failure x failure outcome) $$

| Option | Expected outcome | Less cost | Expected net value |
| --- | --- | --- | --- |
| A | 0.5 x $800,000 + 0.5 x $450,000 = $625,000 | $400,000 | $225,000 |
| B | 0.6 x $1,200,000 + 0.4 x $600,000 = $960,000 | $500,000 | $460,000 |
| C | 0.5 x $1,500,000 + 0.5 x ($1,200,000) = $150,000 | $300,000 | ($150,000) |

**Reading the result:** Option B has the highest expected net value, but it depends on crowdfunding, which has a low success rate. It also adds borrowing to a firm that already has high debt. Option A gives away 40% of the business. Option C uses almost all of the retained profit, so there is little reserve if the project fails, and its failure outcome is a loss of $1,200,000. A decision tree shows the numbers and the risks. It does not make the decision for the manager. Qualitative factors, such as control and the firm's tolerance for risk, still matter.

**Deck questions:** (1) Explain how decision trees aid decision-making in evaluating the suitability of sources of finance. (2) Recommend which project the firm should pursue, and justify your answer.

### Check yourself

<details>
<summary>For Option A, what is the expected outcome before subtracting the cost?</summary>

0.5 x $800,000 + 0.5 x $450,000 = $625,000. Subtracting the $400,000 cost gives an expected net value of $225,000.

</details>`,
        keyTakeaways: [
          'A decision tree shows expected values, but qualitative factors such as control, debt and risk tolerance still decide the choice.',
          'Option B has the highest expected net value in this tree, but it carries the most risk from the crowdfunding and existing debt.',
        ],
        examTips: [
          'In a decision-tree question, show each multiplication and subtraction, and state any assumption (for example, no time-value adjustment).',
        ],
      },
      {
        id: 'sec-3.2-ownership',
        title: '12. Textbook detail: who can use which source, and culture and ethics',
        content: `### Which business types can use which source (textbook Table 15.2, p.233)

| Source | Sole traders | Partnerships | Private limited company | Public limited company | Non-profit organization |
| --- | --- | --- | --- | --- | --- |
| Business angels | Yes | Yes | Yes | | |
| Crowdfunding | Yes | Yes | Yes | | |
| Donations / gifts | | | | | Yes |
| Leasing | Yes | Yes | Yes | Yes | Yes |
| Loan capital | Yes | Yes | Yes | Yes | Yes |
| Microfinance providers | Yes | | | | Yes |
| Overdrafts | Yes | Yes | Yes | Yes | Yes |
| Personal funds | Yes | Yes | | | |
| Retained profit (surplus) | Yes | Yes | Yes | Yes | Yes |
| Sale of assets | | | Yes | Yes | |
| Share capital | | | Yes | Yes | |
| Trade credit | Yes | Yes | Yes | Yes | Yes |

Only public limited companies can sell shares to the general public on a stock exchange (see section 3). Table 15.2 shows share capital for private limited companies too, because they can issue shares privately.

### Culture, ethics and the wider view (textbook pp.233, 235)

- **Culture:** culture (see Chapters 11 and 54) affects which sources are available and used. Family and friends are not in the syllabus, but they are a popular source in many cultures, such as India.
- **Ethics:** the strategic choice and control of finance affect the firm's overall financial performance. Financial accounts must be reported legally and transparently, so that they show how well the strategy works (see Chapter 17).
- **Sustainability:** an effective business strategy must consider the sources of finance, so that the firm has enough funds to run in a sustainable way. Serious cash flow problems can cause liquidation or bankruptcy (see Chapter 20).
- **Growth:** as a firm grows and changes (see Chapter 5), it can access more sources of finance.

**Key concept (textbook p.233):** Is creativity compromised due to the lack of access to sources of finance for many businesses?

**Key concept (textbook p.235):** For an organization of your choice, discuss how different sources of finance influence change and creativity.

**Theory of knowledge (teacher deck):** Does a lack of access to sources of finance for businesses hinder their innovation?

### Check yourself

<details>
<summary>Why might a sole trader borrow from family rather than a bank, and what is the main risk?</summary>

Borrowing from family and friends is often simpler and cheaper than a bank loan, which may need collateral. The main risk is that the amount is usually very limited, and such borrowing often causes conflict and disputes.

</details>`,
        keyTakeaways: [
          'Use Table 15.2 to check which sources a business type can use. Sale of assets and share capital are for limited companies only.',
          'Culture and family relationships affect the availability of finance, and borrowing from family is often limited and can cause conflict.',
        ],
        examTips: [
          'When a question asks about access to finance for a sole trader, check the table first: personal funds, overdrafts, trade credit, retained profit, leasing, loans and microfinance are possible, but share capital is not.',
        ],
      },
      {
        id: 'sec-3.2-review',
        title: '13. Review questions and textbook case questions',
        content: `The textbook's review questions (pp.235-236) are answered below. The textbook's case questions (Questions 15.1 to 15.4) are listed with the points to draw on. The textbook gives no mark schemes.

### Review questions (textbook pp.235-236)

<details>
<summary>1. What is meant by sources of finance?</summary>

The general term for where or how a business obtains its funds, such as personal funds, retained profit, loan capital and share capital (textbook p.236).

</details>

<details>
<summary>2. What are internal sources of finance?</summary>

Funds generated from within the organization: personal funds, retained profit and the sale of assets (textbook p.236).

</details>

<details>
<summary>3. How do internal sources of finance differ from external sources?</summary>

Internal sources come from within the business and do not involve a third party. External sources come from outside the business, such as debt (overdrafts and loan capital), share capital and business angels (textbook p.236).

</details>

<details>
<summary>4. What are personal funds?</summary>

The entrepreneur's own savings, usually used to finance the start-up of a business, mainly sole traders (textbook p.226).

</details>

<details>
<summary>5. What are retained profits?</summary>

The surplus a business keeps to use within the business, after paying corporate taxes and dividends to shareholders (textbook p.236).

</details>

<details>
<summary>6. How is the sale of assets a source of internal finance?</summary>

The business sells existing items of value it owns, such as dormant (unused) assets or obsolete assets. The cash comes from within the business, not from a lender or investor (textbook pp.226, 236).

</details>

<details>
<summary>7. What is share capital?</summary>

The money raised from selling shares in a limited liability company (textbook p.236).

</details>

<details>
<summary>8. What is an initial public offering (IPO)?</summary>

When a business converts to a publicly traded company by selling (floating) its shares on a stock exchange for the first time (textbook p.236).

</details>

<details>
<summary>9. What is a share issue (or share placement)?</summary>

When an existing publicly held company raises further finance by selling more of its shares (textbook p.236).

</details>

<details>
<summary>10. What is loan capital?</summary>

Medium- to long-term, interest-bearing finance from commercial lenders such as banks, repaid in instalments. Examples are mortgages, business development loans and debentures (textbook p.236).

</details>

<details>
<summary>11. When is it appropriate to use an overdraft?</summary>

For minor cash flow problems and short-term needs, such as a large cash outflow before a peak season, or while waiting for customers who bought on trade credit to pay (textbook pp.229, 236).

</details>

<details>
<summary>12. What is trade credit?</summary>

A way to postpone payment for goods or services ("buy now and pay later"). The supplier receives no cash until a later date, usually 30 to 60 days after the sale (textbook p.236).

</details>

<details>
<summary>13. How does a creditor differ from a debtor?</summary>

The creditor is the organization that offers trade credit. Its customers, who are allowed time to pay, are the debtors (textbook p.229). See section 6 for the view from the buying business.

</details>

<details>
<summary>14. What is crowdfunding?</summary>

Raising finance for a business venture or project by getting small amounts of money from a large number of people, usually through online platforms (textbook p.236).

</details>

<details>
<summary>15. What is leasing?</summary>

A form of hiring in which a lessee pays rental income to use assets owned by the lessor, the legal owner (textbook p.236).

</details>

<details>
<summary>16. How does sale and leaseback differ from hire purchase?</summary>

In sale and leaseback, the business sells an asset it owns and leases it back. It gets cash now but keeps paying rent, and the asset stays in use. In hire purchase, the buyer pays by instalments after a deposit. The lender owns the asset until the final instalment, after which the buyer owns it (textbook p.230).

</details>

<details>
<summary>17. What is microfinance?</summary>

A financial service that gives small loans to entrepreneurs of small businesses, especially women and people on low incomes, who cannot borrow from banks. Its aim is to help reduce poverty (textbook pp.231, 236).

</details>

<details>
<summary>18. Who are business angels?</summary>

Extremely wealthy individuals who invest their own money in businesses with high growth potential (high risk, high return) (textbook pp.232, 236).

</details>

<details>
<summary>19. How do short-term sources of finance differ from long-term sources?</summary>

Short-term sources are available for less than one year (repayable within 12 months) and pay for daily or routine operations, such as trade credit, overdrafts and crowdfunding. Long-term sources are available for more than 12 months and pay for fixed assets or expansion, such as long-term loans, mortgages, debentures, share capital, leasing, microfinance and business angels (textbook pp.233, 236).

</details>

<details>
<summary>20. What factors do managers need to decide on before choosing their source(s) of finance?</summary>

The SPACED factors: size and status of the firm, purpose of finance, amount required, cost of finance, external factors and duration (textbook pp.234-235). See section 10.

</details>

### Textbook case questions (Questions 15.1 to 15.4)

- **Question 15.1, Agricultural Bank of China** (p.227). Answer all parts. Points are in section 3.
- **Question 15.2, Kellett School** (p.228). (a) Define debentures [2]. (b) Outline why Kellett School might sell debentures [2]. (c) Despite the high price, suggest why most parents might agree to buy them [4]. (d) Explain two potential drawbacks for a fee-paying school that raises finance through debentures [4]. (e) Examine two alternative sources of finance the school could have used for its capital expenditure [6].
  - Points to draw on: (a) see section 5. (b) the HK$200m campus is capital expenditure. (c) the debentures are refundable when students leave, and a discount is given to families with more than one child. (d) gearing rises, and critics argue the cost may deter skilled expats. (e) choose two that suit capital expenditure, for example loan capital or leasing, and apply SPACED. A school's legal form decides whether share capital is possible.
- **Question 15.3, Wizz Air** (p.230). Points are in section 7.
- **Question 15.4, Tawfeer Market** (p.232). Tawfeer Market is an Egyptian online grocery business founded in 2020. In early 2022 it raised $500,000 from business angels. (a) Define business angels [2]. (b) Explain two limitations of using business angels as a source of finance [4]. (c) Explain how the profitability of a business such as Tawfeer Market affects its ability to obtain external sources of finance [4].
  - Points to draw on: (a) see section 4. (b) loss of some control, because angels take a proactive role; the business may have to buy back the angel's stake. (c) return on investment and track record are the criteria angels use, and a record of earnings supports them; retained profit (internal) also depends on profit.

### Teacher deck practice (slides 32-33 and 34)

- Decision-tree questions: see section 11.
- Theory of knowledge: see section 12.`,
        keyTakeaways: [
          'The textbook review questions cover the definitions and the key distinctions: internal and external, equity and debt, short and long term, and the SPACED factors.',
          'Case questions use textbook examples (ABC, Kellett School, Wizz Air, Tawfeer Market). Answer them with the definitions in this guide and the specific facts in the case.',
        ],
        examTips: [
          'Give the definition first, then the case application. Most case questions give 2 to 6 marks, so match the number of points to the marks.',
        ],
      },
    ],
    highYieldTerms: [
      { term: 'Sources of finance', definition: 'Where or how a business obtains the funds it needs for its activities, such as personal funds, retained profit, loan capital and share capital.' },
      { term: 'Internal source of finance', definition: 'Finance from inside the organization, namely personal funds, retained profit and the sale of assets.' },
      { term: 'External source of finance', definition: 'Finance from outside the organization, through debt, share capital or business angels, usually involving a third party.' },
      { term: 'Personal funds', definition: 'The entrepreneur\'s own savings, usually used to finance the start-up of a business, mainly for sole traders.' },
      { term: 'Retained profit', definition: 'The surplus a business keeps after paying corporate taxes and dividends. It is an accounting figure and is not automatically cash.' },
      { term: 'Sale of assets', definition: 'Selling existing items of value, such as dormant (unused) or obsolete assets, to raise finance.' },
      { term: 'Divestment', definition: 'Selling fixed assets to raise finance. Table 15.3 lists the sale of fixed assets (divestment) as a short-term source.' },
      { term: 'Dormant assets', definition: 'Assets that a business owns but no longer uses, such as old machinery or replaced computer equipment.' },
      { term: 'Obsolete assets', definition: 'Assets that are outdated and may be hard to sell.' },
      { term: 'Share capital', definition: 'The money raised from selling shares in a limited liability company. It is recorded in the balance sheet.' },
      { term: 'Initial public offering (IPO)', definition: 'When a business converts to a publicly traded company by selling (floating) its shares on a stock exchange for the first time.' },
      { term: 'Share issue (or share placement)', definition: 'When an existing publicly held company raises further finance by selling more of its shares.' },
      { term: 'Stock exchange', definition: 'A highly regulated marketplace where individuals and businesses buy and sell shares in publicly traded companies.' },
      { term: 'Secondary market', definition: 'The market where existing shares are traded between investors. The company receives no cash from these sales.' },
      { term: 'Dilution of control', definition: 'When new shares are issued, the existing owners own a smaller share of the business and share decisions with new shareholders.' },
      { term: 'Business angel', definition: 'An extremely wealthy individual who invests their own money in businesses with high growth potential (high risk, high return), and who often takes a proactive role.' },
      { term: 'Venture capitalist', definition: 'A provider of finance that operates as a pool of professionally managed funds (teacher deck). Business angels are different because they invest their own money.' },
      { term: 'Crowdfunding', definition: 'Raising small amounts of money from a large number of people, usually through online platforms, for a venture or project.' },
      { term: 'Donation crowdfunding', definition: 'Crowdfunding in which contributors give money that the business does not have to pay back.' },
      { term: 'Loan capital (debt capital)', definition: 'Medium- to long-term, interest-bearing finance from commercial lenders, repaid in instalments over a set period.' },
      { term: 'Debentures', definition: 'Long-term loans issued by a business. Holders receive interest before shareholders receive dividends and have no ownership or voting rights.' },
      { term: 'Mortgage', definition: 'A secured loan to buy property, such as land or buildings. The lender can repossess the property if the borrower defaults.' },
      { term: 'Business development loan', definition: 'A flexible loan designed for the specific needs of a borrower, such as starting or expanding a business or improving cash flow.' },
      { term: 'Collateral', definition: 'An asset pledged as security for a loan. The lender can take it if the borrower fails to repay.' },
      { term: 'Gearing ratio', definition: 'The percentage of a firm\'s capital employed that comes from long-term external borrowing. A high ratio means high risk.' },
      { term: 'Overdraft', definition: 'Permission to take out more money than is in a bank account, up to a pre-set limit. It is usually short term and repayable on demand.' },
      { term: 'Trade credit', definition: 'A way to postpone payment for goods or services ("buy now and pay later"), usually for 30 to 60 days.' },
      { term: 'Creditor', definition: 'The organization that offers trade credit. From a buying business\'s point of view, a supplier it owes money to.' },
      { term: 'Debtor', definition: 'A customer that has bought goods or services on trade credit and owes money to the business.' },
      { term: 'Credit card', definition: 'A form of credit from a financial institution that acts as a cash advance to the card holder. It is a vital external source for sole traders and partnerships.' },
      { term: 'Leasing', definition: 'A form of hiring in which a lessee pays rent to use an asset owned by the lessor.' },
      { term: 'Lessor', definition: 'The legal owner of a leased asset.' },
      { term: 'Lessee', definition: 'The customer who hires a leased asset and pays rent to the lessor.' },
      { term: 'Hire purchase (HP)', definition: 'Buying an asset by paying instalments after a deposit. The buyer owns the asset only after the final instalment, and the lender can repossess it on default.' },
      { term: 'Sale and leaseback', definition: 'Selling a fixed asset the business owns and leasing it back. The business gets cash now but must keep paying the lease.' },
      { term: 'Microfinance', definition: 'A financial service that gives small loans to entrepreneurs of small businesses, especially women and people on low incomes, who cannot borrow from banks. It aims to help reduce poverty.' },
      { term: 'Short-term sources of finance', definition: 'Sources available for less than one year (repayable within 12 months), used for the daily or routine operations of the business, such as trade credit, overdrafts and crowdfunding.' },
      { term: 'Long-term sources of finance', definition: 'Sources available for more than 12 months, used to buy fixed assets or finance expansion, such as long-term loans, share capital, leasing, microfinance and business angels.' },
      { term: 'Revenue expenditure', definition: 'Business spending on its everyday, regular operations, usually financed by short-term sources.' },
      { term: 'Capital expenditure', definition: 'Business spending on fixed assets, such as buildings, machinery and equipment, usually financed by long-term sources.' },
      { term: 'Liquidity crisis', definition: 'A situation in which a business cannot pay its short-term debts, which can lead to bankruptcy.' },
      { term: 'SPACED', definition: 'The six factors for evaluating a source of finance: size and status of firm, purpose of finance, amount required, cost of finance, external factors and duration required.' },
      { term: 'Dividend', definition: 'A payment from a company\'s profit, after interest and tax, to its shareholders.' },
    ],
  },
];
