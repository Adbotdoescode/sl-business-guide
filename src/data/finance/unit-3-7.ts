import { StudyUnit } from '@/types/curriculum';

// Unit 3.7 Cash Flow. Source: Paul Hoang, Business Management (5th ed., IBID 2022), Chapter 20, pp. 299-314.

export const UNIT_3_7: StudyUnit = {
  id: '3.7-cash-flow',
  title: 'Cash Flow',
  unitCode: 'Unit 3.7',
  subtitle: 'Profit vs Cash Flow, Cash Flow Forecasts, Investment and Cash, Causes of and Strategies for Cash Flow Problems',
  estimatedReadTime: '16 min read',
  description:
    'Cash is the lifeblood of a business. This unit covers why profit is not the same as cash, how to construct and complete a cash flow forecast in the IB format, the working capital cycle, the relationship between investment, profit and cash flow, the main causes of cash flow problems, the three generic strategies for dealing with them, and the limitations of cash flow forecasting.',
  sections: [
    {
      id: 'sec-3.7-profit-vs-cash',
      title: '1. The Difference Between Profit and Cash Flow',
      content: `> *"Don't empty the water jar until the rain falls."* — English Proverb

Cash is often described as the **lifeblood of a business** because every organization needs cash to pay daily costs such as wages and electricity. Failure to pay suppliers and trade creditors may eventually result in a business being declared **bankrupt**.

- **Cash** is a current asset: the money a business actually receives from selling goods and services. It is held *in hand* (cash in the business) or *at bank* (cash in a bank account) (p.299).
- **Profit** in its simplest form is the positive difference between a firm's total sales revenue and its total costs of production for a given time period (p.299).

$$\\text{Profit} = \\text{Total revenue} - \\text{Total cost}$$

---

### Why profit is not the same as cash: credit sales

Paying by **credit** means customers buy now and pay later (e.g. a 30-day credit period). The firm earns a contribution on the sale immediately, but profit is made before the cash is received.

**Textbook example (p.299):** a firm sells $50,000 of goods in a month and 60% of customers pay by cash.

| Item | Value |
| :--- | :--- |
| Sales revenue (counts towards profit) | $50,000 |
| Cash inflow this month (60%) | $30,000 |
| Received at end of credit period (40%) | $20,000 |

So sales revenue ($50,000) is **not** the same as the cash inflow ($30,000) during the month.

---

### Profitable but cash deficient, or cash rich but unprofitable

| Situation | Why it happens (p.300) |
| :--- | :--- |
| **Profitable but cash deficient** | Poor credit control; expanding too quickly so the firm runs out of cash; seasonal demand causing short-term liquidity problems. |
| **Cash rich but unprofitable** | The initial hype for a new product brings in plenty of cash, but if the firm cannot control its costs (including fixed and indirect costs) it will not be profitable. |

**Liquidity** is the ability of a business to convert assets into cash quickly without a fall in its value (p.300). Ultimately, a lack of cash will eventually lead to a firm going bankrupt, however profitable it is.

> **Case study 20.1 - Marks & Spencer (p.300):** In 2018 M&S announced it would close 100 stores by 2022 due to declining profits and cash flow problems (first phase cost over £321m). COVID-19 then caused major cash flow issues and losses of £200m.

> **Common mistake (p.306):** A positive cash flow figure does **not** mean a business is profitable. Profitability is shown in the **profit and loss account**, not a cash flow forecast.`,
      keyTakeaways: [
        'Cash is a current asset held in hand or at bank; profit = total revenue - total cost.',
        'Credit sales create revenue (and profit) before the cash arrives, so profit is not cash.',
        'A firm can be profitable but cash deficient (poor credit control, rapid expansion, seasonality) or cash rich but unprofitable (poor cost control).',
        'Without enough cash to pay suppliers, employees and financiers, even a profitable firm can go bankrupt.',
      ],
      examTips: [
        'Never say a positive net cash flow proves the firm is profitable: profit is shown in the profit and loss account.',
        'Use numbers to show the gap: e.g. $50,000 sales with 60% cash = only $30,000 cash inflow this month.',
      ],
    },
    {
      id: 'sec-3.7-cash-flow-forecasts',
      title: '2. Cash Flow Forecasts: Components and Purpose',
      content: `A **cash flow forecast** is a financial tool used to show the expected movement of cash into and out of a business, for a given period of time (p.301). It has three key elements plus two balances:

| Component | Meaning (pp.301-302) | Examples |
| :--- | :--- | :--- |
| **Opening balance** | Cash at the **beginning** of a trading period; equal to the previous month's closing balance. | 31 July close $3,000 = 1 Aug open $3,000 |
| **Cash inflows** | Cash that comes into a business during a given time period, usually from sales revenue when customers pay. | Cash sales, payments by debtors, bank loans, interest on savings, sale of fixed assets, rental income |
| **Cash outflows** | Cash that leaves a business during a given time period, such as when invoices or bills have to be paid. | Rent, wages, stock purchases, taxes, payments to creditors, advertising, loan and interest repayments, dividends |
| **Net cash flow** | The difference between cash inflows and cash outflows for a given period, usually per month. | Ideally positive; negative can be survived only temporarily |
| **Closing balance** | Cash at the **end** of a trading period. | Becomes next month's opening balance |

$$\\text{Net cash flow} = \\text{Cash inflows} - \\text{Cash outflows}$$
$$\\text{Closing balance} = \\text{Opening balance} + \\text{Net cash flow}$$

---

### Reasons for cash flow forecasts (p.301)

1. **Securing finance:** banks and other lenders require a forecast to assess the financial health of a business seeking external finance.
2. **Anticipating liquidity problems:** managers can identify periods of cash deficiency and plan, e.g. arrange an overdraft or adjust the timing of inflows and outflows.
3. **Business planning and control:** forecasts help achieve organizational objectives, and can be compared with actual cash flows to improve future predictions.

---

### Forecast vs statement

> **Textbook Exam tip (p.302):** A **cash flow statement** records the actual cash inflows and outflows for a given period (usually 12 months). A **cash flow forecast** is a prediction. Statements help prepare subsequent forecasts.

> **Textbook Exam tip (p.305):** Sales revenue is **not** the same as cash inflows. Sales revenue comes from one source (customers). Cash inflows can also come from non-revenue sources: selling dormant assets, bank loans, donations or government grants.

**Quick check (Question 20.2, Garima Khurana Enterprises, p.301):** Opening balance MAD33,000, total inflows MAD135,000, total outflows MAD103,000.
Net cash flow = 135,000 - 103,000 = **MAD32,000**; closing balance = 33,000 + 32,000 = **MAD65,000**.`,
      keyTakeaways: [
        'A cash flow forecast shows the expected movement of cash into and out of a business for a given period.',
        'Net cash flow = cash inflows - cash outflows; closing balance = opening balance + net cash flow.',
        "Each month's opening balance equals the previous month's closing balance.",
        'Forecasts help secure finance, anticipate liquidity problems and aid planning and control.',
      ],
      examTips: [
        'Distinguish a forecast (prediction) from a statement (actual, historical record).',
        'Do not include the opening balance in net cash flow: net cash flow only uses inflows and outflows for that month.',
      ],
    },
    {
      id: 'sec-3.7-constructing-forecasts',
      title: '3. Constructing and Completing Cash Flow Forecasts',
      content: `### The IB-prescribed layout (Textbook Exam tip, p.304)

Use this order in the exam (it applies to for-profit and non-profit entities). Negative numbers are commonly shown in **brackets**.

![Cash flow forecast in the IB-prescribed format (figures in $'000)](/finance/unit-3-7-ib-forecast-format.png)
*Source: Hoang (2022), Exam tip (adapted from IB Business Management Guide), p.304.*

---

### Worked example: Rachel Proffitt Trading Co. (Table 20.1, p.302)

The firm receives $4,000 of rental income in November.

![Table 20.1 - Simplified cash flow forecast for Rachel Proffitt Trading Co.](/finance/unit-3-7-rachel-proffitt-forecast.png)
*Source: Hoang (2022), Table 20.1, p.302.*

- July: net cash flow is negative $2,000, but the closing balance is +$3,000 thanks to the $5,000 opening balance.
- The negative closing balances in September and October warn of a cash shortage; a **bank overdraft** is a short-term solution.

---

### Worked example: missing values (Textbook Exam tip, p.303)

| ($) | Sept | Oct | Nov | Dec |
| :--- | ---: | ---: | ---: | ---: |
| Opening balance | 1,000 | **(c) 800** | 1,600 | 1,900 |
| Cash inflows | 2,000 | 2,000 | **(d) 3,000** | 4,000 |
| Stock purchases | 600 | 600 | 900 | 1,200 |
| Rent | 1,000 | 0 | 1,000 | 0 |
| Other costs | 600 | 600 | 800 | 1,000 |
| Net cash flow | **(a) (200)** | 800 | 300 | 1,800 |
| Closing balance | **(b) 800** | 1,600 | 1,900 | **(e) 3,700** |

1. (a) Outflows = 600 + 1,000 + 600 = 2,200, so net cash flow = 2,000 - 2,200 = **($200)**.
2. (b) Closing = 1,000 + (200) = **$800**.
3. (c) October opening = September closing = **$800**.
4. (d) Outflows = 900 + 1,000 + 800 = 2,700; inflows must be 2,700 + 300 = **$3,000**.
5. (e) Closing = 1,900 + 1,800 = **$3,700**.

---

### Worked example: Menelao Stationers (Question 20.3, p.304)

Initial capital $6,500 (opening balance on 1 August). Sales: $2,000, $5,500, $3,200, $3,000. Stock = half of sales. Rent $2,000 every two months from September. Utilities $500/month. Other expenses $1,800 in month 1, then $1,100.

| ($) | Aug | Sept | Oct | Nov |
| :--- | ---: | ---: | ---: | ---: |
| Opening balance | 6,500 | 5,200 | 4,350 | 4,350 |
| Cash sales | 2,000 | 5,500 | 3,200 | 3,000 |
| **Total cash inflows** | 2,000 | 5,500 | 3,200 | 3,000 |
| Stock purchases | 1,000 | 2,750 | 1,600 | 1,500 |
| Rent | 0 | 2,000 | 0 | 2,000 |
| Utilities | 500 | 500 | 500 | 500 |
| Other expenses | 1,800 | 1,100 | 1,100 | 1,100 |
| **Total cash outflows** | 3,300 | 6,350 | 3,200 | 5,100 |
| **Net cash flow** | (1,300) | (850) | 0 | (2,100) |
| **Closing balance** | 5,200 | 4,350 | 4,350 | 2,250 |

Liquidity: the closing balance stays positive, but net cash flow is negative in three of four months, so the initial capital is being run down.

> **Watch out for credit sales! (p.310):** If $10,000 of goods are sold in July on 30 days credit, the $10,000 cash inflow is recorded in **August**, not July.`,
      keyTakeaways: [
        'Order: opening balance, cash inflows (total), cash outflows (total), net cash flow, closing balance.',
        "Closing balance = opening balance + net cash flow, and it becomes next month's opening balance.",
        'Show negative figures in brackets, e.g. (2,000).',
        'Credit sales are recorded as cash inflows in the month the cash is actually received.',
      ],
      examTips: [
        'Always label every row and include totals for inflows and outflows; method marks are awarded for layout.',
        'For missing values, work backwards: inflows = outflows + net cash flow; opening = previous closing.',
        'Check your final closing balance by adding all net cash flows to the first opening balance.',
      ],
    },
    {
      id: 'sec-3.7-investment-working-capital',
      title: '4. Investment, Profit, Cash Flow and the Working Capital Cycle',
      content: `**Investment** is the spending on capital or productive assets, such as production facilities, business premises and machinery (p.306).

| Action | Short-term cash flow | Profit |
| :--- | :--- | :--- |
| **Investment** (buying an asset) | Falls (cash outflow) | May improve **in the future** |
| **Divestment** (selling an asset) | Improves (cash inflow) | Usually happens due to **falling** profits |

- A new franchisee may be cash rich (lots of customers) but unprofitable due to huge short-term investment costs (buildings, equipment, training, stock). Later, financing growth (more outlets) could make the owner **cash deficient**.
- Investment does not guarantee future profit. **Case study 20.2 - Lenovo:** Lenovo bought Motorola from Google for $3bn in 2014; Google lost more than $9bn, having paid $12.5bn in 2011.
- **How investment is financed matters:** diversified, cash-rich firms can fund deals from existing revenue streams (Microsoft bought Skype for $8.5bn in 2011; Facebook (Meta) bought Instagram for $1bn and WhatsApp for $19.3bn).
- Poor cash flow means **missed investment opportunities**. Pharmaceutical firms can take around 17 years to commercialize a drug.
- **Case study 20.3 - Amazon:** founded 1994, forecast up to 5 years to make a profit; first profit ($5m) came in 2001 on sales of over $1bn.

---

### The working capital cycle

The **working capital cycle** refers to the time interval between cash outflows for costs of production and cash inflows from customers who receive their finished goods and services (pp.313-314).

\`\`\`
Cash out (materials, labour) -> Production -> Finished goods/services
        ^                                              |
        |                                              v
        +------ Cash in from customers <------ Sale (cash or credit)
\`\`\`

- **Long cycle:** producers of luxury yachts or construction firms need huge amounts of cash to complete projects; adverse changes during this time can jeopardize operations.
- **Short cycle:** mobile caterers are paid almost immediately (Figure 20.4).
- Strategies for cash flow require managing **current assets** (cash, debtors, stocks) and **current liabilities** (overdrafts, trade creditors, short-term loans) (p.307).`,
      keyTakeaways: [
        'Investment reduces cash flow now but may raise profit later; divestment raises cash now but often reflects falling profits.',
        'Investment does not guarantee future profit (Google/Motorola lost over $9bn).',
        'The working capital cycle is the time between paying production costs and receiving cash from customers.',
        'The longer the working capital cycle, the more cash a business needs.',
      ],
      examTips: [
        'Link investment questions to timing: cash leaves now, profits (if any) arrive later.',
        'Mention cash-rich diversified firms (e.g. Microsoft, Meta) when discussing how investment is financed.',
      ],
    },
    {
      id: 'sec-3.7-causes',
      title: '5. Causes of Cash Flow Problems',
      content: `All businesses need healthy cash flow to pay staff, suppliers, financiers and landlords. The main causes (p.307):

| Cause | What happens |
| :--- | :--- |
| **Overtrading** | Expanding too quickly without sufficient resources, e.g. accepting more orders than capacity allows. Production costs are paid before any revenue arrives; buying fixed assets for rapid expansion also consumes cash. |
| **Over borrowing** | The more capital raised externally, the higher the cash outflow on **interest**. Rising interest rates add further pressure on net cash flow and liquidity. |
| **Overstocking** | Ineffective stock control: stocks cost money to buy, produce and store, can be damaged, expire or become obsolete, and tie up money that could be used elsewhere. |
| **Poor credit control** | Prolonged credit periods (perhaps for competitive advantage) mean trading without sufficient cash inflows. Offering credit to too many customers raises the chance of **bad debts**. |
| **Unforeseen changes** | Unexpected changes in demand or machinery breakdown delay payments from customers. |
| **Seasonal fluctuations** | Temporary, somewhat predictable issues, e.g. Valentine's cards, Easter eggs, Halloween and 'Back to School' products. |

- **Credit control** is the process of monitoring and managing debtors, such as ensuring only suitable customers are given trade credit and that customers do not exceed the agreed credit period (p.307).
- **Bad debts** exist when debtors are unable to pay their outstanding invoices (bills), which reduces the cash inflows of the vendor (p.307).

> **Question 20.4 - Wincent Computing (p.305):** customers get up to **60 days** credit, but suppliers give only **14 days**. Cash goes out long before it comes in, a classic poor credit control and working capital problem.`,
      keyTakeaways: [
        'Main causes: overtrading, over borrowing, overstocking, poor credit control, unforeseen changes and seasonal demand.',
        'Overtrading: costs are paid before revenue is received from the extra orders.',
        'Poor credit control raises the risk of bad debts and delays cash inflows.',
        'A mismatch between long customer credit and short supplier credit drains cash.',
      ],
      examTips: [
        'Always tie the cause to the case: compare the credit period given to customers with that received from suppliers.',
        'The best solution usually deals directly with the cause (e.g. overstocking calls for better stock control).',
      ],
    },
    {
      id: 'sec-3.7-strategies',
      title: '6. Strategies for Dealing with Cash Flow Problems',
      content: `There are **three generic ways** to deal with cash flow problems (p.307).

| Lower cash outflows | Raise cash inflows | Additional finance |
| :--- | :--- | :--- |
| Preferential credit terms | Tighter credit control | Overdrafts |
| Seek alternative suppliers | Cash payments only | Sale of fixed assets |
| Better stock control | Change pricing policy | Debt factoring |
| Reduce unnecessary expenses | Broaden product portfolio | Government assistance |
| Leasing or renting | | |

*Source: Hoang (2022), Table 20.2, p.310.*

---

### (i) Reducing cash outflows (pp.308-309)

| Strategy | How it helps | Limitation |
| :--- | :--- | :--- |
| Preferential credit terms | Lengthen time taken to pay suppliers/creditors | Admin costs and time to negotiate; may make little difference |
| Alternative suppliers | More competitive prices | Cheaper inputs may mean lower quality |
| Better stock control (JIT) | Less liquidity tied up in stocks | Less suitable for services (airlines) or firms with little stock (hair salons) |
| Leasing | Cheaper than buying assets, at least short term | Asset is not owned |
| Reduce expenses | Cut overheads without hurting quality, e.g. fewer free airline snacks, no luxury company cars | Cuts may affect quality or morale |

### (ii) Improving cash inflows (p.309)

| Strategy | How it helps | Limitation |
| :--- | :--- | :--- |
| Tighter credit control | Limit credit or shorten the credit period; discounts for early payment; interim payments | Customers may switch to competitors |
| Cash payments only | Removes the delay from credit sales | Customers may prefer rivals who offer credit |
| Change pricing policy | Price cuts convert excess stocks into cash | Works best for price-elastic products or those at the end of their life cycle |
| Improved product portfolio | More revenue streams; poor sales in one market offset by others (Agnes B) | Raises costs and risks; no guarantee of positive net cash flow |

### (iii) Additional sources of finance (pp.309-310)

| Strategy | How it helps | Limitation |
| :--- | :--- | :--- |
| Overdrafts | Immediate access to cash in times of negative net cash flow | Interest can be expensive; hard to get during a liquidity crisis |
| Selling fixed assets | Dormant assets generate much-needed cash | One-off; assets are needed to operate and expand |
| Debt factoring | An external party collects money owed by debtors and pays the firm immediately (minus charges) | Handling charges reduce the cash received |
| Government assistance | Grants, subsidies or low-interest loans | Only some businesses qualify (often strategic industries) |

> **Case study 20.5 - Arsenal FC (p.310):** Adidas shirt sponsorship worth £60m a year plus Emirates £40m a year: cash injections that boost the club's ability to compete.

---

### Liquidity vs profit dilemma

Granting credit to more customers can raise sales and profit, but delays cash receipts; cash-only will drive customers away. The right balance depends on **organizational culture, customer expectations and competitors' actions**. In reality firms combine methods; the **Pareto Principle (80-20 Rule)** suggests spending 80% of time and resources on boosting inflows and 20% on cost-cutting (p.310).

> **Textbook Exam tip (p.310):** These strategies deal with **cash flow** problems, not profitability problems. Profitability is seen in the profit and loss account and ratio analysis.`,
      keyTakeaways: [
        'Three generic strategies: reduce cash outflows, improve cash inflows, obtain additional finance.',
        'Every strategy has a limitation, often lost customers, lower quality or extra cost (interest, charges).',
        'Managers must balance liquidity (positive net cash flow) against profit (credit attracts sales).',
        'Pareto Principle: focus 80% on boosting inflows, 20% on cost-cutting.',
      ],
      examTips: [
        'For "examine options" questions, pick one strategy from at least two of the three categories and give a limitation for each.',
        'Match the strategy to the cause and the time frame: an overdraft suits a temporary, seasonal shortage.',
      ],
    },
    {
      id: 'sec-3.7-limitations',
      title: '7. Limitations of Cash Flow Forecasting and Cash Flow in Strategy',
      content: `Forecasts predict the future based on assumptions, so inaccuracies arise from (pp.311-312):

| Source of inaccuracy | Example |
| :--- | :--- |
| **Marketing** | Poor market research gives wrong sales forecasts; a distasteful campaign upsets customers. |
| **Human resources** | Demoralised staff are less productive and give poor service; unmanaged disputes lead to industrial unrest. |
| **Operations management** | Machine failure and poor stock control cause production delays (Airbus A380 delays forced huge compensation; production ended Dec 2021). |
| **Competitors** | Rivals' behaviour is hard to predict (Toyota's marketing hit GM, Ford, Chrysler). |
| **Changing fashion and tastes** | Products may become unpredictably popular or unpopular. |
| **Economic change** | Lower interest rates boost spending; higher inflation harms confidence. |
| **External shocks** | Wars, oil crises, stock market crashes, health scares, severe weather. |

- Forecasts cover only the **immediate and foreseeable future**; distant predictions are highly inaccurate.
- Forecasts are **static** (one point in time) and should be **updated regularly** as a continuous process.
- Usefulness depends on how well prepared and accurate the estimates are.
- Firms often keep a **contingency fund** for unexpected changes and emergencies.

---

### Cash flow and business strategy (pp.312-313)

- **Human resources strategy:** cash is needed to pay staff on time; lack of pay demotivates and can trigger disputes, so firms have an ethical obligation to manage cash flow.
- **Marketing strategy:** new product development and mass-media advertising need funding, often from **cash cows**.
- **Production strategy:** long working capital cycles (yachts, construction) need large amounts of cash; suppliers must be paid to keep the supply chain efficient.

> **Summary (p.313):** Cash is more important than profit in the short term; profit is vital for long-term prosperity. Profitable firms will not survive in the long run without sustained positive net cash flows.

**TOK:** Forecasts are summaries without every item of cash flow. Does this simplification limit our knowledge? To what extent do cash flow statements reveal the 'truth' about a business?`,
      keyTakeaways: [
        'Forecasts can be inaccurate due to marketing, HR, operations, competitors, tastes, economic change and external shocks.',
        'Forecasts are static, short-term and must be updated regularly.',
        'Cash is more important than profit in the short term; profit matters most in the long term.',
        'Cash flow supports HR, marketing and production strategies.',
      ],
      examTips: [
        'In evaluation, always state that a forecast is only as good as its assumptions and estimates.',
        'Conclude with the short-term (cash) vs long-term (profit) distinction.',
      ],
    },
  ],
  highYieldTerms: [
    { term: 'Cash', definition: 'A current asset that represents the actual money a business has, held as cash in hand (in the business) or cash at bank (in a bank account) (p.314).' },
    { term: 'Cash flow', definition: 'The transfer or movement of money into and out of an organization (p.314).' },
    { term: 'Profit', definition: "In its simplest form, the positive difference between a firm's total sales revenue and its total costs of production for a given time period (p.314)." },
    { term: 'Liquidity', definition: 'The ability of a business to convert assets into cash quickly without a fall in its value (p.300).' },
    { term: 'Cash flow forecast', definition: 'A financial tool used to show the expected movement of cash into and out of a business, for a given period of time (p.314).' },
    { term: 'Cash flow statement', definition: 'The financial document that records the actual cash inflows and cash outflows of a business during a specified trading period, usually 12 months (p.314).' },
    { term: 'Cash inflows', definition: 'The cash that comes into a business during a given time period, usually from sales revenue when customers pay for the products they have purchased (p.314).' },
    { term: 'Cash outflows', definition: 'Cash that leaves a business during a given time period, such as when invoices or bills have to be paid (p.314).' },
    { term: 'Net cash flow', definition: "The difference between a firm's cash inflows and cash outflows for a given time period, usually per month (p.314)." },
    { term: 'Opening balance', definition: 'The value of cash in a business at the beginning of a trading period; equal to the closing balance of the previous month (p.314).' },
    { term: 'Closing balance', definition: 'The amount of cash left in a business at the end of each trading period. Closing balance = Opening balance + Net cash flow (p.314).' },
    { term: 'Investment', definition: 'The spending on capital or productive assets, such as production facilities, business premises and machinery (p.306).' },
    { term: 'Working capital cycle', definition: 'The time between cash outflows for production costs and cash inflows from customers who pay upon receipt of their finished goods and services (p.314).' },
    { term: 'Overtrading', definition: 'When a business attempts to expand too quickly without the sufficient resources to do so, usually by accepting too many orders, thus harming its cash flow (p.314).' },
    { term: 'Credit control', definition: 'The process of monitoring and managing debtors, such as ensuring only suitable customers are permitted trade credit and that customers do not exceed the agreed credit period (p.314).' },
    { term: 'Bad debts', definition: 'Exist when debtors are unable to pay their outstanding invoices (bills), which reduces the cash inflows of the vendor (p.314).' },
  ],
};
