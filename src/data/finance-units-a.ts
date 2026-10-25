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
    estimatedReadTime: '9 min read',
    description:
      'Learn why every business needs finance, then tell capital expenditure (buying things that last) apart from revenue expenditure (paying for today).',
    sections: [
      {
        id: 'sec-3.1-why-money',
        title: '1. Why every business needs money',
        content: `**In one line:** finance is the money a business needs to start, run and grow, plus the decisions managers make about spending it.

A business needs money for three jobs:

- **Starting up:** premises, equipment and the first stock of goods.
- **Running day to day:** wages, rent, energy and bills, often paid before customers pay the business.
- **Growing or coping with surprises:** a second shop, or an unexpected repair.

> **Think of it like a car:** you can spend money on a new engine (it lasts for years) or on petrol for the next trip (it is used up today). Both are needed, but they are different kinds of spending.

### Three questions before any spending or borrowing

- **Availability:** can we actually get the money?
- **Cost:** how much will it cost us, usually as interest?
- **Time:** how long do we have to pay it back?`,
        keyTakeaways: [
          'Finance pays for starting up, running day to day, and growing.',
          'Before choosing money, a manager checks availability, cost and the time to repay.',
        ],
        examTips: [
          'Use the three factors (availability, cost, time) to structure any question about choosing a source of finance.',
        ],
      },
      {
        id: 'sec-3.1-capex',
        title: '2. Capital expenditure: buying things that last',
        content: `**In one line:** capital expenditure (CapEx) is money spent on **fixed assets**, which are used again and again for many years to earn revenue.

A fixed asset is something the business owns, has a monetary value, uses over more than one year, and does not plan to resell within 12 months. Examples are buildings, machines and vehicles.

![Eight examples of capital expenditure: capital equipment, furniture and fittings, computers and IT systems, intellectual property, machinery, mergers and acquisitions, property and premises, and vehicles.](/study-images/finance/3.1-capital-expenditure-examples.png "Capital expenditure buys things that last and keep earning.")

### Typical examples

- Capital equipment, machinery, vehicles
- Furniture, fixtures and fittings
- Computers and IT systems
- Intellectual property (for example a patent)
- Property and premises
- Mergers and acquisitions

### Why it matters: capital spending creates change

Capital spending is how a firm changes: new machines, new systems, new ways of selling. A firm that does not invest can fall behind.

![Table of three failed businesses. Borders, Kodak and Toys R Us each failed to invest in the capital spending needed for digital products or online sales.](/study-images/finance/3.1-failed-businesses-capex-table.png "Three firms that under-invested in capital expenditure.")

Blockbuster is a clear case. In the source it was once a global video-rental leader valued at about USD 3 billion. By 2010 it had filed for bankruptcy with almost USD 1 billion of debt.`,
        keyTakeaways: [
          'Capital expenditure buys fixed assets that last for years and generate revenue.',
          'Capital spending drives change; without it a firm can fall behind competitors.',
        ],
        examTips: [
          'Do not judge by size. A small purchase that lasts for years is still capital spending.',
        ],
      },
      {
        id: 'sec-3.1-revex',
        title: '3. Revenue expenditure: paying for today',
        content: `**In one line:** revenue expenditure (RevEx) is money spent on the everyday running of the business. Its benefit is used up quickly, usually within the year.

![Eight examples of revenue expenditure: advertising and promotion, energy costs, freight and delivery, insurance, office supplies and administration, raw materials and components, rent, and wages and salaries.](/study-images/finance/3.1-revenue-expenditure-examples.png "Revenue expenditure pays for running the business each day.")

### Typical examples

- Advertising and promotion
- Energy costs
- Freight and delivery
- Insurance
- Office supplies and administration
- Raw materials and components
- Rent
- Wages and salaries

### Why it matters: running costs keep the business alive

Revenue spending keeps the business sustainable. Without wages, stock and energy, nothing gets made or sold. A firm can own excellent new machines and still fail if it cannot pay its daily bills.`,
        keyTakeaways: [
          'Revenue expenditure pays for daily running costs, and the benefit is used up quickly.',
          'Revenue spending keeps a business sustainable; capital spending drives change.',
        ],
        examTips: [
          'Rent is revenue expenditure even though it is large. Ask: is the benefit used up within the year?',
        ],
      },
      {
        id: 'sec-3.1-test',
        title: '4. The test: capital or revenue?',
        content: `Sort each item with two questions:

1. **What is the money buying?** A thing that lasts for years (capital), or something used up in running the business (revenue)?
2. **Does the benefit last longer than a year?** If yes, it is usually capital.

| Item | Capital or revenue? | Why |
| --- | --- | --- |
| New delivery van | Capital | Lasts for years and earns revenue |
| Fuel for the delivery van | Revenue | Used up on every trip |
| Extension to the factory building | Capital | Fixed asset (property) |
| Monthly rent for the shop | Revenue | Day-to-day running cost |
| Office computer system | Capital | Fixed asset (IT) |
| Printer paper and stationery | Revenue | Used up quickly |
| Patent for a new product design | Capital | Intellectual property that lasts |
| Wages | Revenue | Running cost paid each period |

### Check yourself

<details>
<summary>A firm spends $30,000 on a new machine and $30,000 on advertising. Which one is capital expenditure?</summary>

The machine. It is a fixed asset that lasts for years and earns revenue. The advertising is revenue expenditure: its benefit is used up in the period.

</details>`,
        keyTakeaways: [
          'Capital versus revenue depends on what the spending buys and how long the benefit lasts, not on the amount.',
        ],
        examTips: [
          'Common trap: "big spending means capital". Always check whether the item lasts and earns money over several years.',
        ],
      },
    ],
    highYieldTerms: [
      { term: 'Finance', definition: 'The money and capital a business needs to start, run and grow.' },
      { term: 'Capital expenditure (CapEx)', definition: 'Spending on fixed assets, such as buildings, machinery and vehicles, that are used for many years to earn revenue.' },
      { term: 'Revenue expenditure (RevEx)', definition: 'Spending on the everyday running of the business. The benefit is used up quickly.' },
      { term: 'Fixed asset', definition: 'A long-term asset with monetary value that is used repeatedly and is not intended for resale within 12 months.' },
      { term: 'Intangible asset', definition: 'A non-physical fixed asset that is valuable to the firm, such as a brand, patent, copyright, trademark or goodwill.' },
      { term: 'Collateral', definition: 'An asset pledged as security for a loan. If the loan is not repaid, the lender can take the asset.' },
      { term: 'Liquidity crisis', definition: 'A situation in which a business cannot pay its short-term debts, which can lead to bankruptcy.' },
    ],
  },
  {
    id: '3.2-sources-of-finance',
    title: 'Sources of Finance',
    unitCode: 'Unit 3.2',
    subtitle: 'Internal and external sources, time frames, and how to choose the right one',
    estimatedReadTime: '14 min read',
    description:
      'Compare internal sources (from inside the business) and external sources (from outside), then match each source to the purpose and time frame of the spending.',
    sections: [
      {
        id: 'sec-3.2-overview',
        title: '1. Where does the money come from?',
        content: `**In one line:** an **internal** source comes from inside the business. An **external** source involves a third party outside the business.

The simplest test: **is someone outside the business involved?** If not, the source is internal.

| Source | Internal or external? | Time frame | Typical use |
| --- | --- | --- | --- |
| Personal funds | Internal | No repayment date | Start-up (sole traders, partnerships) |
| Retained profit | Internal | No repayment date | Capital and revenue |
| Sale of assets | Internal | One-off | Capital (revenue only in a liquidity crisis) |
| Share capital | External | Long term (no repayment date) | Capital |
| Loan capital | External | Long term (repaid over years) | Capital |
| Overdraft | External | Short term | Revenue |
| Trade credit | External | Short term (about 30 to 60 days) | Revenue |
| Crowdfunding | External | Depends on campaign terms | Capital |
| Leasing | External | Long term (contract length) | Capital |
| Microfinance | External | Depends on loan term | Capital |
| Business angels | External | Long term | Capital |

> **Note:** the source's own answer key labels some of these differently. This guide classifies each source by its actual terms, as the Unit 3 conventions require.`,
        keyTakeaways: [
          'Internal = no third party involved. External = a third party such as a bank, shareholder, supplier or investor is involved.',
          'Classify a source by its actual terms (how long the money stays and how it is repaid), not by a label.',
        ],
        examTips: [
          'In AO2 questions, name the source, state whether it is internal or external, and give one advantage and one disadvantage.',
        ],
      },
      {
        id: 'sec-3.2-internal',
        title: '2. Internal sources: money from inside the business',
        content: `### Personal funds

The owner's own savings, usually used to start a business. This is the main source for sole traders and partnerships.

- **Advantage:** no interest to pay.
- **Disadvantage:** the amount is limited to what the owner has saved.

### Retained profit

Profit kept in the business after tax and dividends have been paid.

$$ Retained profit = Profit for the period - Dividends $$

- **Advantage:** no interest to pay.
- **Disadvantage:** a loss leaves nothing to retain, and high dividends leave less to reinvest.

> **Watch out:** retained profit is an accounting figure, not a bank balance. The profit may already have been spent on stock, machinery or debt repayments. Do not treat it as cash sitting in a fund.

### Sale of assets

Selling assets the business no longer needs, such as old machinery, replaced computers, or land and buildings.

- **Advantage:** no interest to pay.
- **Disadvantage:** if the asset is obsolete or nobody wants to buy it, the money cannot be raised.

### Check yourself

<details>
<summary>Why is retained profit not the same as the cash in the bank?</summary>

Retained profit is an accounting figure: the profit left after tax and dividends. That profit may already have been spent on stock, equipment or debts, so there may be no matching cash.

</details>`,
        keyTakeaways: [
          'Personal funds, retained profit and sale of assets have no interest cost, but each is limited.',
          'Retained profit is an accounting figure, not cash in a bank account.',
        ],
        examTips: [
          'A good disadvantage links to the case: a loss-making firm has no retained profit; a firm with obsolete machinery cannot sell it.',
        ],
      },
      {
        id: 'sec-3.2-equity',
        title: '3. External equity: selling part of the business',
        content: `### Share capital

Money raised by selling shares. Only **public limited companies** can sell shares to the general public on a stock exchange. Private companies cannot.

- **Initial public offering (IPO):** the first time a company sells shares to the public.
- **Share issue:** a public company selling more shares to raise finance.

> **Key point:** when a company issues new shares, it receives the cash. When investors trade shares with each other later on the stock market, the company receives nothing.

- **Advantage:** can raise very large sums, especially for public companies.
- **Disadvantage:** expensive and time-consuming to prepare, with no guarantee that investors will buy. New shareholders also share control.

### Business angels

Extremely wealthy individuals who invest their own money in businesses with high growth potential (high risk, high return). They usually take an active role. Angels look at the return on investment, the business plan, the people and the track record.

- **Advantage:** funding for firms that banks will not lend to.
- **Disadvantage:** some loss of control, and the business may later have to buy back the angels' stake.

### Crowdfunding

Raising small amounts of money from many people, usually through an online platform.

- **Advantage:** potentially high reward with low initial risk, and feedback from potential customers.
- **Disadvantage:** platform fees, and a low chance of reaching the target because of competition for funds.

### Check yourself

<details>
<summary>A shareholder sells 100 shares to another investor on the stock market. Does the company receive any cash?</summary>

No. Shares traded between investors do not bring cash into the company. Only a new share issue or IPO does.

</details>`,
        keyTakeaways: [
          'Share capital brings cash only when new shares are issued.',
          'Business angels and crowdfunding can fund firms that banks will not lend to, but they cost control or fees.',
        ],
        examTips: [
          'Explain how equity dilutes control: new shareholders own part of the business and share in decisions.',
        ],
      },
      {
        id: 'sec-3.2-debt',
        title: '4. External debt and credit',
        content: `### Loan capital

Money borrowed from lenders such as banks, usually repaid in instalments with interest over a fixed period. Mortgages and debentures are examples.

> **Debentures** are long-term loans to a company, usually repaid on a set date. The source does not define them, so check the definition with your teacher.

- **Advantage:** repaying in instalments gives time to earn the money back.
- **Disadvantage:** interest can be high. If collateral (such as the property bought with a mortgage) is provided and the business fails, the lender can take it.

### Overdraft

Permission to take out more money than is in the bank account, for a short time.

- **Advantage:** flexible for unexpected cash outflows.
- **Disadvantage:** high interest compared with other borrowing.

### Trade credit: buy now, pay later

Suppliers let the business receive goods now and pay about 30 to 60 days later.

![Restaurant cycle showing the trade-credit steps: ingredients arrive from the supplier, meals are sold to customers, customers pay the restaurant, and the restaurant pays the supplier.](/study-images/finance/3.2-trade-credit-restaurant-cycle.png "Trade credit lets the restaurant sell meals before it pays for the ingredients.")

- **Advantage:** time to turn the goods into revenue before paying.
- **Disadvantage:** late payment brings penalties.

> **Creditor or debtor?** A **creditor** is a supplier the business owes money to. A **debtor** is a customer who owes the business money.

### Leasing and sale and leaseback

- **Leasing:** renting an asset for a contract period. The lessor owns it; the lessee pays rent. Repairs depend on the contract.
- **Sale and leaseback:** the business sells an asset it owns and leases it back. It gets cash now but must keep paying the lease.
- **Hire purchase** (not covered in the source, but often compared): the buyer pays in instalments and owns the asset only after the final instalment.

- **Advantage of leasing:** no large upfront cost.
- **Disadvantage of leasing:** over the long run, leasing can cost more than buying outright.

### Microfinance

Small loans for entrepreneurs who cannot borrow from banks, often in disadvantaged communities. Lenders include social and commercial providers, so do not assume every provider is for profit.

- **Advantage:** access to finance and job creation.
- **Disadvantage:** high risk of default, so loans are small and borrowers must prove they can repay.

### Check yourself

<details>
<summary>What is the difference between a creditor and a debtor?</summary>

A creditor is a supplier that the business owes money to. A debtor is a customer that owes the business money.

</details>`,
        keyTakeaways: [
          'Overdrafts and trade credit are short-term; loans and leases are usually long-term.',
          'Debt gives control away only if the lender takes collateral; it always brings a repayment obligation.',
        ],
        examTips: [
          'Compare two sources on one criterion (for example cost) rather than listing advantages and disadvantages separately.',
        ],
      },
      {
        id: 'sec-3.2-choose',
        title: '5. Choosing the right source',
        content: `### Match the time frame to the purpose

- **Short term:** repayable within the next 12 months. Use for daily running costs (revenue expenditure).
- **Long term:** more than 12 months. Use for long-lived assets (capital expenditure).

> The source's table says "more than five years" for long term, which leaves 1 to 5 years undefined. This guide uses 12 months as the dividing line.

### The decision flowchart

![Flowchart for choosing a source of finance. Revenue expenditure and capital expenditure each ask whether internal sources are sufficient. Small capital spending uses short-term external sources; large capital spending uses long-term sources.](/study-images/finance/3.2-sources-of-finance-decision-flowchart.png "Decision flowchart for choosing a source of finance.")

The flowchart does not say where "small" ends and "large" begins. Treat it as a judgement based on the size of the spending compared with the firm's size and resources.

### SPACED: the checklist for evaluating a source

- **S**ize of firm
- **P**urpose of finance
- **A**mount required
- **C**osts
- **E**xternal influences
- **D**uration required

### Worked example: which project should the software firm fund?

A small software firm has three options. The numbers below are from the source's decision tree.

| Option | Source of finance | Cost | Outcome if successful (chance) | Outcome if unsuccessful (chance) |
| --- | --- | --- | --- | --- |
| A | Business angel for 40% equity | 400,000 | 800,000 (50%) | 450,000 (50%) |
| B | Crowdfunding plus loan capital | 500,000 | 1,200,000 (60%) | 600,000 (40%) |
| C | Retained profit (almost all of it) | 300,000 | 1,500,000 (50%) | (1,200,000) (50%) |

The source's tree labels these outcomes "expected value" but does not calculate it. Our working:

$$ Expected outcome = (chance of success x success outcome) + (chance of failure x failure outcome) $$

| Option | Expected outcome | Less cost | Expected net value |
| --- | --- | --- | --- |
| A | 0.5 x 800,000 + 0.5 x 450,000 = 625,000 | 400,000 | 225,000 |
| B | 0.6 x 1,200,000 + 0.4 x 600,000 = 960,000 | 500,000 | 460,000 |
| C | 0.5 x 1,500,000 + 0.5 x (1,200,000) = 150,000 | 300,000 | (150,000) |

Option B has the highest expected value, but it depends on crowdfunding, which has a low success rate, and it adds borrowing to a firm that already has high debt. Option A gives away 40% of the business. Option C uses almost all retained profit and would leave little reserve if it fails. A decision tree shows the numbers and the risks. It does not make the decision for the manager.

### Check yourself

<details>
<summary>For Option A, what is the expected outcome before subtracting the cost?</summary>

0.5 x 800,000 + 0.5 x 450,000 = 625,000. Subtracting the 400,000 cost gives an expected net value of 225,000.

</details>`,
        keyTakeaways: [
          'Match the time frame of the source to the purpose: short-term money for running costs, long-term money for long-lived assets.',
          'A decision tree shows expected values, but qualitative factors such as control and risk tolerance still decide the choice.',
        ],
        examTips: [
          'For a 6-mark evaluation, weigh the numbers from the case against the SPACED factors, then reach a justified recommendation.',
        ],
      },
    ],
    highYieldTerms: [
      { term: 'Internal source of finance', definition: 'Finance from inside the business, such as personal funds, retained profit or the sale of assets.' },
      { term: 'External source of finance', definition: 'Finance from outside the business, usually with a third party such as a bank, investor or supplier.' },
      { term: 'Retained profit', definition: 'Profit kept in the business after tax and dividends have been paid. It is an accounting figure, not cash.' },
      { term: 'Initial public offering (IPO)', definition: 'The first sale of a company\'s shares to the public on a stock exchange.' },
      { term: 'Business angel', definition: 'A wealthy individual who invests their own money in high-growth, high-risk businesses and often takes an active role.' },
      { term: 'Crowdfunding', definition: 'Raising small amounts of money from many people, usually online.' },
      { term: 'Overdraft', definition: 'Permission to withdraw more money than is in a bank account, for a short time, at a high interest rate.' },
      { term: 'Trade credit', definition: 'Buying goods now and paying the supplier later, usually within 30 to 60 days.' },
      { term: 'Sale and leaseback', definition: 'Selling an owned asset and leasing it back, which releases cash but creates a lease obligation.' },
      { term: 'Microfinance', definition: 'Small loans for entrepreneurs who cannot borrow from banks, often for social purposes.' },
      { term: 'Dividend', definition: 'A payment from profit after interest and tax to the company\'s shareholders.' },
    ],
  },
];
