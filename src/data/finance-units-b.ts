import { StudyUnit } from '@/types/curriculum';

// Unit 3.3 and 3.4 guides. Formulas use the corrected profit-and-loss order
// (gross profit, then profit before interest and tax, then profit before tax).
// Every worked example below has been checked by hand.

export const FINANCE_UNITS_B: StudyUnit[] = [
  {
    id: '3.3-costs-and-revenues',
    title: 'Costs and Revenues',
    unitCode: 'Unit 3.3',
    subtitle: 'Fixed, variable and total costs, average cost, revenue and profit',
    estimatedReadTime: '14 min read',
    description:
      'Classify costs, read cost graphs, calculate total and average cost, and work out revenue and profit, with the common "10% higher" and "margin is not profit" traps.',
    sections: [
      {
        id: 'sec-3.3-costs',
        title: '1. Costs: what it takes to do business',
        content: `**In one line:** a cost is money the business pays out to make and sell its products. Costs are split into **start-up costs** (paid once, to set up) and **running costs** (paid again and again to keep trading).

![Twelve items for a clothing shop, each to be classified as start-up or running: rental deposit, packaging, fixtures and fittings, utility bills, initial stock, wages, renovation, repairs, connecting utilities, marketing, legal fees, and replenishing stock.](/study-images/finance/3.3-start-up-vs-running-costs-list.png "Start-up costs are one-off; running costs repeat.")

- **Start-up:** rental deposit, fixtures and fittings, initial stock, renovation, connecting utilities, legal fees.
- **Running:** utility bills, wages, packaging, repairs, marketing, replenishing stock.

> **Watch out:** the slide's memory trick ("even numbers are running, odd numbers are start-up") works only for that list. Learn the principle instead: one-off set-up or repeated day-to-day.`,
        keyTakeaways: [
          'Start-up costs are paid once to set up; running costs repeat while the business trades.',
        ],
        examTips: [
          'Do not rely on list-specific tricks. Explain why a cost is start-up or running.',
        ],
      },
      {
        id: 'sec-3.3-fixed-variable',
        title: '2. Fixed, variable and total costs',
        content: `### Fixed costs (TFC)

Costs that stay the same whatever the output, even if nothing is made. Examples: rent, loan interest, management salaries, insurance, advertising.

Think of them as **a bill you pay whether the shop is busy or empty**. On a graph, total fixed cost is a flat horizontal line.

![Graph of costs against output with total fixed cost drawn as a flat horizontal line at 5,000.](/study-images/finance/3.3-fixed-cost-graph.png "Fixed costs stay flat as output rises.")

### Variable costs (TVC)

Costs that rise and fall with output. Make more, pay more. At zero output, variable cost is zero. Examples: raw materials, packaging, commission, energy used in production.

![Graph of costs against output with total variable cost rising in a straight line from the origin.](/study-images/finance/3.3-variable-cost-graph.png "Variable costs start at zero and rise with output.")

### Total cost (TC)

$$ TC = TFC + TVC $$

Total cost sits above variable cost by exactly the fixed-cost amount.

![Graph showing total cost above total variable cost, with the gap between them equal to total fixed cost.](/study-images/finance/3.3-total-cost-graph.png "Total cost = fixed cost + variable cost.")

**Worked example:** at 300 units, TFC is 20,000 and TVC is 14,500, so TC = 20,000 + 14,500 = **34,500**.

> **Simplification:** the diagrams draw variable cost as a straight line. Real data often bends, as the table in section 4 shows. Use the real numbers when a question gives them.

### Check yourself

<details>
<summary>A bakery pays $2,000 a month for its shop and $0.50 of flour for each loaf. Which cost is fixed and which is variable?</summary>

The $2,000 rent is fixed: it is paid whatever the output. The flour is variable: it rises with every loaf made.

</details>`,
        keyTakeaways: [
          'Fixed costs stay flat; variable costs start at zero and rise with output.',
          'Total cost = total fixed cost + total variable cost.',
        ],
        examTips: [
          'When asked to plot costs, draw TFC as flat, TVC from the origin, and TC above TVC by the TFC gap.',
        ],
      },
      {
        id: 'sec-3.3-direct-indirect',
        title: '3. Direct and indirect costs',
        content: `- **Direct costs:** costs you can clearly trace to one product, service or project, such as raw materials or the wage of a barista making drinks.
- **Indirect (overhead) costs:** costs you cannot easily trace to one product, such as insurance, admin salaries or whole-business advertising.

> **Important:** direct does not mean variable, and indirect does not mean fixed. The answer depends on the **cost object** (what you are costing: one cup of coffee, one flight, one outlet, one project), the output driver and the period.

The source's coffee-house table shows the usual answers:

| Cost | Fixed or variable | Direct or indirect |
| --- | --- | --- |
| Rent for premises | Fixed | Indirect for one cup of coffee; direct only if the cost object is the whole outlet |
| Advertising | Fixed | Indirect |
| Wages for baristas | Variable | Direct |
| Legal expenses | Fixed | Indirect |
| Utilities | Variable | Direct (depends on the cost object) |
| Admin salaries | Fixed | Indirect |
| Raw materials | Variable | Direct |
| Insurance | Fixed | Indirect |

### Check yourself

<details>
<summary>Is a pilot's salary direct or indirect for an airline? Is it fixed or variable?</summary>

It is usually fixed, because it does not change with the number of passengers. It can be traced to a particular flight, so it can be direct when the cost object is that flight. The answer depends on the cost object.

</details>`,
        keyTakeaways: [
          'Direct and indirect describe traceability to a cost object; fixed and variable describe behaviour as output changes.',
          'Classification depends on the cost object, so always say what you are costing.',
        ],
        examTips: [
          'Common trap: writing "direct = variable". Justify your classification with the cost object.',
        ],
      },
      {
        id: 'sec-3.3-average-cost',
        title: '4. Average cost: cost per unit',
        content: `**In one line:** average cost (AC) is the cost of each unit on average.

$$ AC = TC / Q $$

(Q is the quantity of output. AC is undefined at Q = 0, because you cannot divide by zero and nothing has been made.)

### Worked table: Kompothekra Glass Technologies

TFC is 20,000 at every output level.

| Output (units) | Total variable cost | Total cost | Average cost |
| --- | --- | --- | --- |
| 0 | 0 | 20,000 | undefined |
| 100 | 5,000 | 25,000 | 250 |
| 200 | 10,000 | 30,000 | 150 |
| 300 | 14,500 | 34,500 | 115 |
| 400 | 18,000 | 38,000 | 95 |
| 500 | 25,000 | 45,000 | 90 |
| 600 | 38,200 | 58,200 | 97 |

Variable cost per unit is not constant in this data: the extra variable cost for each block of 100 units changes. Keep the real numbers rather than forcing a straight line.

### Why the average falls and then rises

- **Early on, AC falls:** the fixed cost of 20,000 is spread across more and more units.
- **Later, AC rises:** variable costs start growing faster, for example through overtime or extra machines.

This gives the "U-shape" of average cost.

### Check yourself

<details>
<summary>Using the table, what is the average cost at 200 units?</summary>

AC = TC / Q = 30,000 / 200 = 150 per unit.

</details>`,
        keyTakeaways: [
          'AC = TC / Q, and it is undefined at zero output.',
          'Average cost falls while fixed costs are spread, then rises when variable costs grow faster.',
        ],
        examTips: [
          'Use the real figures in the table to explain the shape of the curve, not just the formula.',
        ],
      },
      {
        id: 'sec-3.3-revenue-profit',
        title: '5. Revenue, average revenue and profit',
        content: `### Total revenue

$$ TR = P x Q $$

Total revenue is price multiplied by quantity sold. For several products, add up each price multiplied by quantity.

![Order table with three items priced in HKD: two tea towels at 145 each and an apron at 255, with the total of 545 HKD.](/study-images/finance/3.3-sales-revenue-calculation-table.png "Sales revenue for several products is the sum of price x quantity for each one.")

**Worked example:** 145 x 1 + 255 x 1 + 145 x 1 = **HK$545**. The order is in HKD, so keep that currency.

### Average revenue

$$ AR = TR / Q $$

Average revenue is revenue per unit. If every unit sells at the same price, AR equals P. With several prices it is a weighted average, not one price.

### Profit

$$ Profit = TR - TC $$

On the break-even graph, the point where total revenue crosses total cost is **break-even**: revenue just covers costs.

![Graph showing total revenue, total cost, total variable cost and total fixed cost. Total revenue crosses total cost at the break-even point.](/study-images/finance/3.3-total-revenue-and-cost-graph-break-even.png "Break-even is where total revenue crosses total cost.")

### Two traps from the source

**Trap 1: the "10% higher" question.** Big Bao sold 31,790 meals in 2021, which was 10% more than in 2020. Find 2020 by dividing, not by subtracting 10%:

- Correct: 31,790 / 1.10 = **28,900** meals in 2020
- Wrong: 31,790 x 0.90 = 28,611 (this takes 10% off the bigger number)

At an average price of $6.50, 2020 sales revenue = 28,900 x 6.50 = **$187,850**.

**Trap 2: a margin is not profit.** A supplier buys 50 kg of tomatoes at $0.80 per kg (cost $40) and sells them at $1.20 per kg (revenue $60). The surplus is 60 - 40 = **$20**, but this is only the margin before other costs. Whole-business profit also needs the $1,200 monthly rent and other period costs.

### Check yourself

<details>
<summary>A business sells 50 kg of product at $1.20 per kg. What is its average revenue per kg?</summary>

Total revenue = 50 x 1.20 = $60. AR = TR / Q = 60 / 50 = $1.20 per kg. This equals the price because every kilogram sells at the same price.

</details>`,
        keyTakeaways: [
          'TR = P x Q; for several products, sum each price times quantity.',
          'Profit = TR - TC. A margin before other costs is not the same as profit.',
        ],
        examTips: [
          'When a question says "10% higher", divide the new figure by 1.10 to find the original.',
        ],
      },
      {
        id: 'sec-3.3-streams',
        title: '6. Revenue streams',
        content: `**In one line:** a revenue stream is one way a business earns money. Many businesses have several.

Examples include ticket sales, food and drink, merchandise, sponsorship, advertising, subscriptions, transaction fees, franchise fees, royalties and interest earned.

### Rules to apply

- Merchandise, food and drink sales are **sales revenue**, even when they are extra to the main activity.
- **Loan proceeds and new share issues are finance, not revenue.** They bring in cash but do not come from trading.
- **Dividends received** from investments in other companies are income for the investor. **Dividends paid** to your own shareholders are a distribution of profit.

### Historical example: Manchester United

The source's figures are historical, so treat them as examples rather than current facts. In 2006 the club chose a four-year sponsorship from AIG worth $90.5 million, turning down a four-year offer from Mansion worth over $100 million. The higher offer was not automatically the better choice; the question asks students to judge that choice.

### Check yourself

<details>
<summary>A company borrows $5 million from a bank. Is this sales revenue?</summary>

No. Loan proceeds are finance, not revenue. They bring cash into the business but do not come from selling goods or services.

</details>`,
        keyTakeaways: [
          'Revenue comes from trading; loans and share issues are finance.',
          'A revenue stream can be a sale, a fee, a sponsorship or income from investments.',
        ],
        examTips: [
          'For "examine a revenue stream" questions, link the stream to the business in the case and to a benefit or risk.',
        ],
      },
      {
        id: 'sec-3.3-steeple',
        title: '7. Change, sustainability and STEEPLE',
        content: `### STEEPLE: external factors

STEEPLE is a checklist for the external environment that affects a business:

- **S**ocial
- **T**echnological
- **E**conomic
- **E**nvironmental
- **P**olitical
- **L**egal
- **E**thical

Use STEEPLE to list external factors that change revenue or costs. For example, rising ingredient prices are an economic factor that can push a bakery to reduce the size of its products.

### Change or sustainability?

- In times of change, a firm may choose to **maximise revenue** (for example, a green energy company investing in projects that fit its mission).
- In other times it may choose **cost control** to survive (for example, an airline cutting costs during COVID-19).

Neither is always right. The choice depends on the situation.

> **Classification to confirm:** the source's speaker notes call a pandemic-driven fall in spending "environmental". The usual mechanism is social, health or economic, so confirm the expected category with your teacher before using it in an exam.

### Check yourself

<details>
<summary>Give one external factor from STEEPLE that would raise a bakery's costs.</summary>

Several answers work. For example, an economic factor such as rising flour prices, or a political factor such as a new tax on ingredients.

</details>`,
        keyTakeaways: [
          'STEEPLE lists external factors; the central idea is that the business does not control them.',
          'Use revenue focus or cost control depending on the situation, and justify the choice.',
        ],
        examTips: [
          'Make sure each STEEPLE factor you name links to a specific effect on revenue or cost.',
        ],
      },
    ],
    highYieldTerms: [
      { term: 'Start-up costs', definition: 'One-off costs needed to set up a business, such as a rental deposit, fixtures and initial stock.' },
      { term: 'Running costs', definition: 'Costs paid repeatedly while the business trades, such as utilities, wages and marketing.' },
      { term: 'Fixed costs (TFC)', definition: 'Costs that do not change with output, such as rent and management salaries.' },
      { term: 'Variable costs (TVC)', definition: 'Costs that rise and fall with output, such as raw materials and packaging.' },
      { term: 'Total cost (TC)', definition: 'Total fixed costs plus total variable costs: TC = TFC + TVC.' },
      { term: 'Average cost (AC)', definition: 'Cost per unit: AC = TC / Q. Undefined at zero output.' },
      { term: 'Direct costs', definition: 'Costs that can be clearly traced to a product, service or project.' },
      { term: 'Indirect costs (overheads)', definition: 'Costs that cannot easily be traced to one product or project, such as insurance and admin salaries.' },
      { term: 'Total revenue (TR)', definition: 'Price multiplied by quantity sold: TR = P x Q.' },
      { term: 'Average revenue (AR)', definition: 'Revenue per unit sold: AR = TR / Q, which equals the price when all units sell at one price.' },
      { term: 'Break-even', definition: 'The level of output at which total revenue equals total cost.' },
      { term: 'Revenue stream', definition: 'One source of a business\'s income, such as ticket sales, sponsorship or merchandise.' },
    ],
  },
  {
    id: '3.4-final-accounts',
    title: 'Final Accounts & Circular Business Models',
    unitCode: 'Unit 3.4',
    subtitle: 'The profit and loss account, the balance sheet, intangible assets and depreciation',
    estimatedReadTime: '18 min read',
    description:
      'Build a profit and loss account step by step, read a balance sheet as a snapshot, and understand intangible assets, ethics and (for HL) depreciation.',
    sections: [
      {
        id: 'sec-3.4-purpose',
        title: '1. Why final accounts exist',
        content: `**In one line:** final accounts are the summary financial statements a business produces at the end of each period.

They have two parts:

1. **Profit and loss account** (statement of profit or loss): how much the business earned over a period.
2. **Balance sheet** (statement of financial position): what the business owned and owed at one point in time.

Final accounts show financial control and support planning. For many firms they are a legal requirement.

### Who uses them?

| Stakeholder | What they want to know |
| --- | --- |
| Shareholders | Where money was spent and how their investment performed |
| Employees | Whether pay rises and job security are likely |
| Managers | Efficiency, targets and strategy |
| Competitors | How their performance compares |
| Government | Tax |
| Lenders (financiers) | Whether debt can be repaid |
| Suppliers | Whether to offer trade credit |
| Potential investors | Whether to invest |

### Check yourself

<details>
<summary>Name one internal stakeholder and one external stakeholder who would read final accounts.</summary>

Internal: employees, managers or shareholders. External: lenders, suppliers, competitors, government or potential investors.

</details>`,
        keyTakeaways: [
          'Final accounts are the profit and loss account (a period) and the balance sheet (a point in time).',
        ],
        examTips: [
          'When a question asks about stakeholders, match each stakeholder to the specific decision it helps them make.',
        ],
      },
      {
        id: 'sec-3.4-pl',
        title: '2. The profit and loss account, step by step',
        content: `**In one line:** start with sales revenue, subtract costs one level at a time, and each subtotal tells you something different.

### The ladder (in order)

1. **Sales revenue**
2. **Cost of sales** (costs directly linked to making what you sell)
3. **Gross profit** = sales revenue - cost of sales
4. **Expenses** (listed individually: wages, rent, advertising, utilities)
5. **Profit before interest and tax (PBIT)** = gross profit - expenses
6. **Interest**
7. **Profit before tax (PBT)** = PBIT - interest
8. **Tax**
9. **Profit for the period** = PBT - tax
10. **Dividends**
11. **Retained profit** = profit for the period - dividends

> **Watch out:** the source's printed formula slides subtract the wrong subtotal for profit before tax (they read "Profit BI&T - Profit BT"). The correct rule is always: PBT = PBIT - interest.

### Cost of sales

$$ Cost of sales = Opening stock + Purchases - Closing stock $$

Include each cost **once**: either in cost of sales or in expenses, depending on the case. Costs linked to making the product (raw materials, packaging, production wages) are cost of sales. Costs for the business as a whole (rent, advertising, utilities) are expenses.

### Worked example: Arabicadabra Coffee Ltd (year ended 31 March 2022, $000)

| Line | Working | Figure |
| --- | --- | --- |
| Sales revenue | given | 100 |
| Cost of sales | given | (25) |
| **Gross profit** | 100 - 25 | **75** |
| Salaries | given | (5) |
| Rent | given | (5) |
| Advertising | given | (3) |
| Utilities | given | (2) |
| **Profit before interest and tax** | 75 - 15 | **60** |
| Interest | given | (5) |
| **Profit before tax** | 60 - 5 | **55** |
| Tax | given | (3) |
| **Profit for the period** | 55 - 3 | **52** |
| Dividends | given | (2) |
| **Retained profit** | 52 - 2 | **50** |

### Improving each subtotal

- **Gross profit:** raise prices or sell more; buy from cheaper suppliers or in bulk for discounts.
- **Profit before interest and tax:** cut expenses, for example a cheaper location, energy-efficient machines or cheaper insurance.

### Check yourself

<details>
<summary>Sales 80, cost of sales 30, expenses 20, interest 4, tax 6, dividends 5. Find gross profit, PBIT, PBT, profit for the period and retained profit.</summary>

- Gross profit = 80 - 30 = **50**
- PBIT = 50 - 20 = **30**
- PBT = 30 - 4 = **26**
- Profit for the period = 26 - 6 = **20**
- Retained profit = 20 - 5 = **15**

</details>`,
        keyTakeaways: [
          'Each subtotal is a checkpoint: gross profit tests buying and pricing; PBIT tests running costs; retained profit is what the business keeps.',
          'PBT = PBIT - interest. Do not subtract a later subtotal.',
        ],
        examTips: [
          'Show each subtotal with its working. Examiners give method marks even when a later figure is wrong.',
        ],
      },
      {
        id: 'sec-3.4-nonprofit',
        title: '3. Non-profit organisations: surplus, not profit',
        content: `**In one line:** a non-profit uses the same ladder but calls its result a **surplus**, and it reinvests the whole surplus.

- Profit is distributed to shareholders as dividends and/or reinvested as retained profit.
- Surplus is all reinvested as **retained surplus**. There are no dividends.
- Tax is zero only where the case states it. Do not assume a blanket tax exemption.

![Side-by-side definitions of profit and surplus. Profit is distributed or reinvested; surplus is all reinvested.](/study-images/finance/3.4-profit-vs-surplus-comparison.jpg "Profit versus surplus: the same ladder, a different name for the result.")

### Worked example: Caring for Classrooms (year ended 30 June 2022, $000)

| Line | Working | Figure |
| --- | --- | --- |
| Sales revenue | given | 200 |
| Cost of sales | given | (50) |
| **Gross surplus** | 200 - 50 | **150** |
| Salaries | given | (10) |
| Rent | given | (5) |
| Utilities | given | (4) |
| Insurance | given | (1) |
| **Surplus before interest and tax** | 150 - 20 | **130** |
| Interest | given | (5) |
| **Surplus before tax** | 130 - 5 | **125** |
| Tax | given (zero) | 0 |
| **Surplus for the period** | 125 - 0 | **125** |
| **Retained surplus** | all reinvested | **125** |

### Check yourself

<details>
<summary>A charity has gross surplus of $60,000 and expenses of $45,000 with no interest or tax. What is its retained surplus?</summary>

Surplus before interest and tax = 60,000 - 45,000 = 15,000. With no interest or tax, the surplus for the period is 15,000, and all of it is reinvested as retained surplus.

</details>`,
        keyTakeaways: [
          'A non-profit reports surplus, not profit, and reinvests all of it.',
        ],
        examTips: [
          'Use the words surplus and retained surplus in non-profit answers. Using "profit" marks you down.',
        ],
      },
      {
        id: 'sec-3.4-bs',
        title: '4. The balance sheet: a snapshot',
        content: `**In one line:** the balance sheet is a photograph of the business on one day. It shows what the business owns (assets), what it owes (liabilities) and the owners' stake (equity).

$$ Net assets = Total assets - Total liabilities = Total equity $$

### Classify each item

- **Non-current assets:** used for more than 12 months (property, machinery, vehicles).
- **Current assets:** likely to become cash within 12 months (cash, debtors, stock).
- **Current liabilities:** due within 12 months (overdraft, trade creditors, short-term loans).
- **Non-current liabilities:** due after 12 months (bank loans, mortgages, debentures).
- **Equity:** share capital and retained earnings.

### Formulae

- Net non-current assets = cost (or property, plant and equipment) - accumulated depreciation
- Current assets = cash + debtors + stock
- Total assets = net non-current assets + current assets
- Current liabilities = overdraft + trade creditors + other short-term loans
- Total liabilities = current + non-current liabilities
- Total equity = share capital + retained earnings

### Worked example: Arabicadabra Coffee Ltd, as at 31 March 2022 ($000)

| Line | Working | Figure |
| --- | --- | --- |
| Property, plant and equipment | given | 500 |
| Accumulated depreciation | given | (20) |
| **Net non-current assets** | 500 - 20 | **480** |
| Cash | given | 10 |
| Debtors | given | 12 |
| Stock | given | 35 |
| **Current assets** | 10 + 12 + 35 | **57** |
| **Total assets** | 480 + 57 | **537** |
| Bank overdraft | given | 5 |
| Trade creditors | given | 15 |
| Other short-term loans | given | 22 |
| **Current liabilities** | 5 + 15 + 22 | **42** |
| Borrowings (long term) | given | 300 |
| **Total liabilities** | 42 + 300 | **342** |
| **Net assets** | 537 - 342 | **195** |
| Share capital | given | 110 |
| Retained earnings | given | 85 |
| **Total equity** | 110 + 85 | **195** |

Net assets (195) equal total equity (195), so the balance sheet balances.

> **Watch out:** retained earnings on the balance sheet (85) are **cumulative**, built up over many years. They are not this year's retained profit (50).

### Check yourself: classify these items

<details>
<summary>Reveal the answers</summary>

| Item | Classification |
| --- | --- |
| Retained profit | Equity |
| Cash | Current asset |
| Trade creditors | Current liability |
| Profit tax bill | Current liability |
| Debtors | Current asset |
| Overdraft | Current liability |
| Share capital | Equity |
| Mortgage | Non-current liability |
| Land | Non-current asset |
| Stock | Current asset |

![Answer grid classifying ten items into non-current assets, current assets, current liabilities, non-current liabilities and equity.](/study-images/finance/3.4-classification-answers.png "Classification answers for the balance sheet items.")

</details>`,
        keyTakeaways: [
          'Net assets always equal total equity if the balance sheet is prepared correctly.',
          'Retained earnings are cumulative; this year\'s retained profit is only one part of them.',
        ],
        examTips: [
          'Use the 12-month line to classify: within 12 months is current; beyond 12 months is non-current.',
        ],
      },
      {
        id: 'sec-3.4-intangibles',
        title: '5. Intangible assets',
        content: `**In one line:** intangible assets are valuable things with no physical form. They can still earn money for the business.

- **Brand:** a registered name used in trading.
- **Patent:** legal protection for a product design created by an inventor.
- **Copyright:** legal protection for creative work such as songs, novels, films and art.
- **Goodwill:** the established reputation of a business. Bought goodwill appears on the balance sheet when a business is acquired; a reputation built up internally is not automatically recognised.
- **Registered trademark:** legal protection for a logo or name.

Together these are the **intellectual property** of the business.

### Why they are hard to value

- Valuations are estimates.
- One feature (for example a logo) can belong to several categories, but the accounts do not automatically add it up several times.
- A valuable reputation is not automatically a balance-sheet asset.

> **Historical example:** TIME estimated the Harry Potter brand at over $25 billion. That figure is an estimate, and it is historical, not a current valuation.

### Check yourself

<details>
<summary>A company\'s logo is registered and also linked to its reputation. Which intangible categories could it belong to?</summary>

It could be a registered trademark (the logo itself) and a brand, and the reputation it supports could be goodwill. Those categories overlap, so the value is not automatically counted several times.

</details>`,
        keyTakeaways: [
          'Intangible assets are real value without physical form: brands, patents, copyrights, goodwill and trademarks.',
          'Intangible valuations are estimates, and a strong reputation is not automatically on the balance sheet.',
        ],
        examTips: [
          'When defining intangible assets, say they are non-physical fixed assets and give one example.',
        ],
      },
      {
        id: 'sec-3.4-depreciation',
        title: '6. Depreciation (HL only)',
        content: `> **Higher Level only.** Depreciation is not on the SL syllabus.

**In one line:** depreciation spreads the cost of a non-current asset over its useful life. It is an accounting expense, not a cash payment.

Assets lose value through **wear and tear** (repeated use) and **obsolescence** (better technology makes them redundant).

### Key terms

| Term | Meaning |
| --- | --- |
| Lifespan | Estimated useful life of the asset |
| Residual value | Estimated value at the end of the lifespan (scrap or trade-in value) |
| Accumulated depreciation | The total depreciation charged so far: the sum of the charges to date |
| Net book value (NBV) | Historical cost less accumulated depreciation |

> **Note:** land is normally not depreciated; buildings can be (IAS 16). The source's blanket exception for "land and buildings" is too broad.

### Method 1: straight line

$$ Annual depreciation = (Cost - Residual value) / Lifespan $$

**Worked example:** an oven costs $30,000, has a residual value of $6,000 and a lifespan of 3 years.

- Annual depreciation = (30,000 - 6,000) / 3 = **8,000**

| Year | Annual depreciation | Net book value (end of year) | Accumulated depreciation |
| --- | --- | --- | --- |
| 1 | (30,000 - 6,000) / 3 = 8,000 | 30,000 - 8,000 = 22,000 | 8,000 |
| 2 | 8,000 | 22,000 - 8,000 = 14,000 | 8,000 + 8,000 = 16,000 |
| 3 | 8,000 | 14,000 - 8,000 = 6,000 | 16,000 + 8,000 = 24,000 |

Straight line: the same charge each year, so NBV falls by the same amount.

Straight line is simple, but unrealistic for assets such as vehicles that lose more value early.

### Method 2: units of production

$$ Depreciation per unit = (Cost - Residual value) / Total units over lifetime $$

Then multiply the rate by the units produced in each year.

**Worked example (same oven, 60,000 loaves in total):**

- Rate = (30,000 - 6,000) / 60,000 = **$0.40 per loaf**
- Year 1: 24,000 x 0.40 = 9,600, NBV = 20,400
- Year 2: 20,000 x 0.40 = 8,000, NBV = 12,400
- Year 3: 16,000 x 0.40 = 6,400, NBV = 6,000 (equal to the residual value)

![Worked units-of-production depreciation example for the same oven, showing the rate per loaf, annual charge and net book value each year.](/study-images/finance/3.4-units-of-production-worked-example.png "Units of production: the charge follows output.")

Units of production follows real use and matches cost to output, but it takes more work to calculate.

### Choosing a method (AO3)

- Straight line suits assets with an even pattern of use and value loss.
- Units of production suits assets whose use varies (for example machines or vehicles measured by mileage).

The choice affects the reported profit each year.

### Check yourself

<details>
<summary>A machine costs $250,000, has a residual value of $50,000, and is expected to produce 500,000 units. It produces 90,000 units in year 1. What is its depreciation in year 1?</summary>

Rate per unit = (250,000 - 50,000) / 500,000 = $0.40. Year 1 depreciation = 90,000 x 0.40 = **$36,000**.

</details>`,
        keyTakeaways: [
          'Straight line: (cost - residual value) / lifespan. Units of production: rate per unit x units produced.',
          'Net book value = cost - accumulated depreciation.',
        ],
        examTips: [
          'Check whether the question asks for the annual charge, the accumulated depreciation or the NBV. They are different figures.',
        ],
      },
      {
        id: 'sec-3.4-ethics',
        title: '7. Ethics and the limits of final accounts',
        content: `### Five ethical principles for accountants

![Table of five ACCA ethical principles: integrity, objectivity, professional competence and due care, confidentiality, and professional behaviour, with their meanings.](/study-images/finance/3.4-acca-ethics-principles-table.png "The five ACCA principles. ACCA is the Association of Chartered Certified Accountants.")

### Case: Luckin Coffee (2020)

Luckin Coffee, a Chinese coffee chain, was listed on the US Nasdaq exchange in 2019. In 2020 it admitted that it had inflated its 2019 sales revenue. Discuss which principles were broken and why managers might have been tempted. Treat bonus or IPO motives as possible incentives, not proven intent.

### Limits of final accounts

- They show the **past**, not the future.
- They are based on **estimates** (for example depreciation and the value of intangibles).
- They leave out non-financial information such as customer satisfaction or staff morale.
- They can be **window dressed**: managed to look better than they really are.

### Check yourself

<details>
<summary>Which ACCA principle is breached if an accountant uses confidential client information to make a personal trade?</summary>

Confidentiality. Information must not be used for personal gain.

</details>`,
        keyTakeaways: [
          'The five ACCA principles are integrity, objectivity, professional competence and due care, confidentiality and professional behaviour.',
          'Final accounts are historical and estimated, so they should be read alongside other information.',
        ],
        examTips: [
          'For an ethics question, name the principle, link it to the case facts, and explain the consequence for stakeholders.',
        ],
      },
      {
        id: 'sec-3.4-cbm',
        title: '8. Circular business models and final accounts',
        content: `**In one line:** a circular business model keeps products and materials in use for longer. Its financial effect shows up in the final accounts.

![Circular business model diagram with four stages: reduce, reuse, repair and recycle, arranged in a loop.](/study-images/finance/3.4-circular-business-model-diagram.png "Reduce, reuse, repair, recycle: the loop of a circular business model.")

**Product life extension** is one circular strategy: repairing and reusing products so they stay in use longer.

- Revenue: repaired or refurbished products can earn extra sales.
- Costs: buying fewer new materials can reduce cost of sales.
- Balance sheet: spare parts held in stock are current assets.

Evaluate whether a named firm's circular strategy improves profit and the financial position.

### Check yourself

<details>
<summary>How could a product-life-extension strategy affect the profit and loss account?</summary>

It can increase sales revenue (refurbished products sold again) and reduce cost of sales (fewer new materials bought). Both raise gross profit, and so PBIT and profit, if other costs are controlled.

</details>`,
        keyTakeaways: [
          'A circular business model affects revenue, cost of sales and the balance sheet.',
        ],
        examTips: [
          'Link any circular-model claim to a specific line in the final accounts.',
        ],
      },
    ],
    highYieldTerms: [
      { term: 'Final accounts', definition: 'The summary statements at the end of a period: the profit and loss account and the balance sheet.' },
      { term: 'Cost of sales', definition: 'Costs directly linked to making what is sold: opening stock + purchases - closing stock.' },
      { term: 'Gross profit', definition: 'Sales revenue minus cost of sales.' },
      { term: 'Profit before interest and tax (PBIT)', definition: 'Gross profit minus expenses.' },
      { term: 'Retained profit', definition: 'Profit for the period minus dividends. It stays in the business.' },
      { term: 'Surplus', definition: 'The non-profit equivalent of profit: what is left after expenses. It is reinvested in full.' },
      { term: 'Balance sheet (statement of financial position)', definition: 'A snapshot of assets, liabilities and equity on one date.' },
      { term: 'Net assets', definition: 'Total assets minus total liabilities. Equal to total equity.' },
      { term: 'Retained earnings', definition: 'Cumulative profit kept in the business over time, shown in equity.' },
      { term: 'Intangible assets', definition: 'Non-physical fixed assets such as brands, patents, copyrights, goodwill and trademarks.' },
      { term: 'Depreciation (HL)', definition: 'The spreading of a non-current asset\'s cost over its useful life.' },
      { term: 'Net book value (HL)', definition: 'Cost minus accumulated depreciation.' },
      { term: 'Residual value (HL)', definition: 'The estimated value of an asset at the end of its useful life.' },
    ],
  },
];
