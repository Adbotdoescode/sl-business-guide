import { StudyUnit } from '@/types/curriculum';

// Source: Hoang, Business Management (5th ed., IBID 2022), Chapter 18, pp. 273-286.
// Note: Table 18.1 (p.277) mislabels two rows. The internally consistent reading used here is:
// current assets = 700 / 500, total assets = 1,300 / 1,000, current liabilities = 300 / 200 ($'000, Year 2 / Year 1).
// (Total liabilities 550 - non-current liabilities 250 = 300; total assets less current liabilities = 1,000.)

const JKL_TABLES = String.raw`
![Table 18.2 - Ratio analysis summary table: formulas for GPM, profit margin, current ratio, acid test and ROCE](/finance/unit-3-5-ratio-summary-table.png)
*Source: Hoang (2022), Table 18.2, p.282.*

**Table 18.1 - JKL Ltd. statement of financial position ($'000s)** *(p.277)*

| | Year 2 | Year 1 |
|---|---|---|
| Non-current assets | 600 | 500 |
| Cash | 200 | 50 |
| Debtors | 150 | 200 |
| Stock | 350 | 250 |
| **Current assets** | **700** | **500** |
| **Total assets** | 1,300 | 1,000 |
| **Current liabilities** | **300** | **200** |
| Total assets less current liabilities | 1,000 | 800 |
| Non-current liabilities | 250 | 250 |
| Total liabilities | 550 | 450 |
| Net assets = Equity | 750 | 550 |
| (Share capital 500 + Retained earnings) | 500 + 250 | 500 + 50 |

**Table 18.2 - JKL Ltd. statement of profit or loss excerpts ($'000s)**

| | Year 2 | Year 1 |
|---|---|---|
| Sales revenue | 1,000 | 850 |
| Cost of goods sold | 500 | 350 |
| Profit before interest and tax | 400 | 360 |
| Tax | 100 | 90 |
| Dividend | 50 | 220 |
| Retained profit | 250 | 50 |

**Note:** The printed Table 18.1 swaps two labels (it prints 1,300/1,000 beside "Current liabilities"). The figures only add up if current assets total 700/500, total assets are 1,300/1,000 and current liabilities are 300/200, so that is the reading used here.
`;

export const UNIT_3_5: StudyUnit = {
  id: '3.5-profitability-and-liquidity-ratios',
  title: 'Profitability and Liquidity Ratio Analysis',
  unitCode: 'Unit 3.5',
  subtitle: 'GPM, Profit Margin, ROCE, Current Ratio, Acid Test Ratio, Improvement Strategies and Limitations',
  estimatedReadTime: '16 min read',
  description:
    'Learn what ratio analysis is and why it is used, how to calculate and interpret the three profitability ratios (gross profit margin, profit margin, ROCE) and the two liquidity ratios (current ratio, acid test ratio), the strategies to improve each, and the uses and limitations of ratio analysis for stakeholders. Worked examples use the textbook\'s JKL Ltd., Dan & Glover and Bjorn Bowls cases.',
  sections: [
    {
      id: 'sec-3-5-ratio-analysis',
      title: '1. What Ratio Analysis Is and Why It Is Used',
      content: String.raw`### Ratio analysis
A ratio is one number expressed in terms of another (20 men and 30 women gives a ratio of 2:3).

**Ratio analysis** is a quantitative management tool that compares different financial figures to examine and judge the financial performance of a business *(p.273)*. It uses figures from the final accounts: the **balance sheet** and the **profit and loss account** (Unit 3.4).

### Purposes of ratio analysis (p.274)
1. To examine a firm's **financial position**, e.g. its profitability and its short- and long-term liquidity.
2. To assess **financial performance**, e.g. its ability to control expenses.
3. To compare actual figures with projected or budgeted figures (**variance analysis**) to improve financial management.
4. To **aid decision-making**, e.g. whether investors should risk their money in the business.

### Two ways to compare ratios

| Comparison | What it is | Why it helps |
|---|---|---|
| **Historical** | Same ratio, same business, two different time periods | Shows **trends** in performance over time |
| **Inter-firm** | Same ratios for businesses in the **same industry** | Shows **relative** performance against rivals |

Ratios are only of value if you compare like with like. McDonald's should compare itself with similar-sized fast food rivals, not a sole trader with one restaurant or a furniture maker.

### Units of measurement
Some ratios are expressed as a number against another (e.g. **2:1**), others as a **percentage**, others as a **number of days**. Know which is which.

Textbook Exam tip (p.273): Don't just learn the formulae. Ask: How is the business performing? How has it performed over time (trends)? What else matters that is not in the data, e.g. business objectives and external constraints?`,
      keyTakeaways: [
        'Ratio analysis compares financial figures from the final accounts to judge financial performance.',
        'Four purposes: examine financial position, assess performance, variance analysis against budgets, aid decision-making.',
        'Historical comparisons show trends; inter-firm comparisons show performance against rivals in the same industry.',
        'Only compare like with like (similar size, same industry).',
      ],
      examTips: [
        'Always interpret a ratio in the context of the organization in the case; a bare number earns few marks.',
        'State the correct unit: % for GPM, profit margin and ROCE; a ratio (e.g. 2.33:1) for the current and acid test ratios.',
      ],
    },
    {
      id: 'sec-3-5-profitability-gpm',
      title: '2. Profitability Ratios and the Gross Profit Margin (GPM)',
      content: String.raw`### Profitability ratios
**Profitability ratios** examine profit in relation to other figures, comprised of the gross profit margin (GPM), profit margin and return on capital employed (ROCE) ratios *(p.286)*.

The absolute profit figure tells us little on its own. $10 million profit is good for a small partnership selling computer accessories but poor for Lenovo or IBM. In Table 19.1 two firms both make $100m profit, but Firm A uses $200m of capital (50% return) and Firm B uses $250m (40%), so **Firm A is more profitable**.

A key limitation: profitability ratios only really apply to **profit-orientated** businesses, not charities.

### (i) Gross profit margin (GPM)
The **GPM** shows the value of a firm's gross profit expressed as a percentage of its sales revenue *(p.275)*. Figures come from the profit and loss account.

$$\text{GPM} = \frac{\text{Gross profit}}{\text{Sales revenue}} \times 100$$

**Example (p.275):** gross profit $120m, sales $200m. GPM = 120 / 200 × 100 = **60%**. For every $100 of sales, $60 is gross profit and $40 is cost of goods sold. The higher the GPM, the better, as gross profit goes towards paying expenses.

### Strategies to raise the GPM

| Raise sales revenue | Reduce direct costs |
|---|---|
| **Cut price** of products with many substitutes (price elastic) to gain competitive advantage | **Cut direct material costs**: cheaper suppliers or materials (airlines cutting on-board snacks). Risk: lower perceived quality |
| **Raise price** of products with few substitutes (price inelastic, strong brand loyalty) | **Cut direct labour costs**: fewer staff, flexitime, non-financial incentives to raise productivity. Risk: resentment and demotivation |
| **Improved marketing**: special promotions, extension strategies | |
| **Alternative revenue streams**, especially when demand is seasonal or rivalry is intense | |

In reality, firms combine cost-cutting and revenue-raising methods.

Textbook Exam tip (p.275): put figures in context. In 2007 Puma announced a 26% drop in profit to €38.2m, yet sales had risen over 33%: it was using retained profit to finance expansion. Ten years later profit was €135.2m.`,
      keyTakeaways: [
        'Profitability ratios relate profit to sales or capital; absolute profit alone is misleading.',
        'GPM = Gross profit / Sales revenue × 100; higher is better.',
        'GPM rises by raising revenue (price changes based on elasticity, marketing, new revenue streams) or cutting direct costs (materials, labour).',
        'Each strategy has a trade-off: quality perceptions, staff morale, or customer reaction.',
      ],
      examTips: [
        'Link price strategy to price elasticity: cut price only when demand is price elastic, raise it when demand is price inelastic.',
        'Always state a drawback of any cost-cutting strategy to show evaluation (AO3).',
      ],
    },
    {
      id: 'sec-3-5-profit-margin',
      title: '3. The Profit Margin',
      content: String.raw`### (ii) Profit margin
The **profit margin** shows the percentage of sales revenue that turns into profit, i.e. the proportion of sales revenue left over after all direct and indirect costs have been paid *(p.286)*. A 35% profit margin means $35 of every $100 of sales is profit.

$$\text{Profit margin} = \frac{\text{Profit before interest and tax}}{\text{Sales revenue}} \times 100$$

**Why profit before interest and tax?** Interest rates and tax rates change over time and are beyond the control of the business, so using PBIT allows fair historical comparisons.

### Interpreting it
- It is a **better measure than the GPM** because it accounts for both cost of sales (direct costs) **and** expenses (indirect costs).
- The **gap between GPM and profit margin = expenses**. The larger the gap, the harder overhead control tends to be.
- Higher is better.
- **High-volume products** (confectionery, fast food) have low margins, offset by high sales volume. **Low-volume products** (aircraft, luxury watches) have high margins.

### Strategies to raise the profit margin
All the GPM strategies, plus cutting **expenses**:
- **Preferential payment terms** with trade creditors and suppliers: delay payment (helps cash flow) or negotiate discounts for paying on time.
- **Negotiate cheaper rent**, or delay rent payments.
- **Reduce indirect costs** without harming the business: business class instead of first class for executives; cut advertising, stationery, insurance premiums.

### Textbook Exam tip: a price cut can lower GPM but raise the profit margin (p.278)

| | Before ($) | After ($) |
|---|---|---|
| Sales turnover | 1,000 | 1,200 |
| Cost of goods sold | 600 | 740 |
| Gross profit | 400 | 460 |
| **GPM** | **40.0%** | **38.3%** |
| Indirect costs | 300 | 300 |
| Profit | 100 | 160 |
| **Profit margin** | **10.0%** | **13.3%** |

The lower price attracts more customers. Because indirect costs stay constant, the profit margin rises even though the GPM falls.`,
      keyTakeaways: [
        'Profit margin = PBIT / Sales revenue × 100.',
        'PBIT is used because interest and tax rates are outside the firm\'s control and distort comparisons.',
        'GPM minus profit margin reflects expenses: a widening gap signals weak overhead control.',
        'Improve it with GPM strategies plus cutting expenses (payment terms, rent, indirect costs).',
      ],
      examTips: [
        'If GPM is stable but profit margin falls, the problem is expenses (overheads), not direct costs.',
        'Low margins are not automatically bad: high-volume products like fast food rely on volume.',
      ],
    },
    {
      id: 'sec-3-5-roce',
      title: '4. Return on Capital Employed (ROCE)',
      content: String.raw`### (iii) ROCE
The **return on capital employed (ROCE)** is a profitability ratio that measures the financial performance of a firm based on the amount of capital invested *(p.278)*.

$$\text{ROCE} = \frac{\text{Profit before interest and tax}}{\text{Capital employed}} \times 100$$

**Capital employed** is the value of all long-term sources of finance for a business, namely non-current liabilities plus equity *(p.286)*. It is on the balance sheet.

$$\text{Capital employed} = \text{Non-current liabilities} + \text{Equity}$$

### Interpreting ROCE
- A 20% ROCE means **$20 profit for every $100 invested**. Higher is better.
- ROCE should at least **exceed the interest rate at commercial banks**, otherwise investors would simply deposit the money (which is also less risky).
- PBIT is used for the same reason as the profit margin: interest and tax rates change and are outside the firm's control.
- Many see ROCE as the **single most important ratio** ("the key ratio") because it shows how well the firm generates profit from its sources of funds.

### Improving ROCE
Mainly by **boosting profits** (the GPM and profit margin strategies). Mathematically ROCE also rises if capital employed falls while profit stays constant, but in reality this is probably not desirable.

### Worked example: Question 18.3 Dan & Glover Co. (p.279)
Gross profit $150m, expenses $30m, capital employed $400m.
- Profit = 150 - 30 = $120m
- ROCE = 120 / 400 × 100 = **30%**`,
      keyTakeaways: [
        'ROCE = PBIT / Capital employed × 100; capital employed = non-current liabilities + equity.',
        'ROCE is the "key ratio": profit generated per $ of long-term finance.',
        'It should beat the bank interest rate to justify the risk to investors.',
        'Improve ROCE mainly by raising profit; shrinking capital employed is rarely desirable.',
      ],
      examTips: [
        'Compare ROCE with the interest rate in the case to judge whether the return justifies the risk.',
        'Do not use total assets as capital employed. Use non-current liabilities + equity.',
      ],
    },
    {
      id: 'sec-3-5-liquidity',
      title: '5. Liquidity Ratios: Current Ratio and Acid Test Ratio',
      content: String.raw`### Liquidity ratios
**Liquidity ratios** look at the ability of a firm to pay its short-term (current) liabilities, comprised of the current ratio and the acid test (quick) ratio *(p.286)*. Creditors and lenders use them to judge whether they will be repaid; shareholders and investors also care.

**Liquid assets** are the possessions of a business that can be turned into cash quickly without losing their value, i.e. cash, stocks and debtors *(p.286)*.

### (i) Current ratio
The **current ratio** is a short-term liquidity ratio that calculates the ability of a business to meet its debts within the next twelve months *(p.286)*.

$$\text{Current ratio} = \frac{\text{Current assets}}{\text{Current liabilities}}$$

**Example (p.279):** current assets $300,000, current liabilities $120,000. Current ratio = 300,000 / 120,000 = **2.5**, i.e. $2.50 of current assets for every $1 of current liabilities.

| Current ratio | Meaning |
|---|---|
| **Below 1.0** | Short-term debts exceed liquid assets; survival at risk if creditors demand payment |
| **1.5 to 2.0** | Generally desirable: a safety net, as current assets may not sell quickly at full value; sufficient working capital |
| **Too high** | Too much cash (could be used to generate trade), too many debtors (risk of bad debts), or too much stock (storage and insurance costs) |

**Working capital** = current assets - current liabilities. Positive working capital gives the potential to invest and grow; negative working capital can mean problems paying creditors and, at worst, bankruptcy. Context matters: supermarkets may exceed 2:1 acceptably because their stock is highly liquid.

**Improving the current ratio:** raise current assets and/or reduce current liabilities, e.g. replace overdrafts with long-term loans at more attractive interest rates. This frees up working capital in the short term, but may affect long-term liquidity.

### (ii) Acid test (quick) ratio
The **acid test ratio (or quick ratio)** is a liquidity ratio that measures a firm's ability to meet its short-term debts. It ignores stock because not all inventories can be easily turned into cash in a short time frame *(p.286)*.

$$\text{Acid test ratio} = \frac{\text{Current assets} - \text{Stock}}{\text{Current liabilities}}$$

- More meaningful than the current ratio because stock is not always liquid: work-in-progress may not fetch a good price, and expensive stock (Boeing aircraft) cannot be sold quickly.
- Should be **at least 1:1**, otherwise the firm may face working capital difficulties or a **liquidity crisis**.
- Too high suggests too much idle cash.
- Of interest to potential investors and short-term lenders (e.g. commercial banks).

A **liquidity crisis** refers to a situation where a firm is unable to pay its short-term debts, i.e. current liabilities exceed current assets *(p.286)*.

**Improving the acid test ratio:** raise cash or debtors, or cut current liabilities. Raising debtors risks bad debts and holding too much cash has an opportunity cost, so it is more practical to **reduce short-term liabilities** (overdrafts, trade creditors), e.g. negotiate delayed payments to trade creditors.

### Worked example: Question 18.4 Bjorn Bowls (p.280)
Cash $50,000, debtors $35,000, stocks $45,000, overdrafts $15,000, tax $25,000, trade creditors $50,000.
- Current assets = 50,000 + 35,000 + 45,000 = $130,000
- Current liabilities = 15,000 + 25,000 + 50,000 = $90,000
- Current ratio = 130,000 / 90,000 = **1.44:1**, slightly below the 1.5 to 2.0 guideline but still able to cover its short-term debts.
- (Acid test = (130,000 - 45,000) / 90,000 = 0.94:1, just below 1:1.)`,
      keyTakeaways: [
        'Current ratio = Current assets / Current liabilities; 1.5 to 2.0 is generally desirable.',
        'Acid test ratio = (Current assets - Stock) / Current liabilities; should be at least 1:1.',
        'Too low risks a liquidity crisis; too high means idle cash, excess debtors or excess stock.',
        'The most practical way to improve liquidity is to reduce current liabilities (overdrafts, trade creditors).',
      ],
      examTips: [
        'Tax owed and overdrafts are current liabilities; include them in the denominator.',
        'Always relate the benchmark to the industry: a supermarket can safely run a higher current ratio than a manufacturer of expensive goods.',
      ],
    },
    {
      id: 'sec-3-5-jkl-worked-example',
      title: '6. Full Worked Example: JKL Ltd. (Questions 18.1, 18.2, 18.5)',
      content:
        JKL_TABLES +
        String.raw`
### Q18.1 Gross profit, expenses, GPM, profit margin ($'000)

| | Year 2 | Year 1 |
|---|---|---|
| Gross profit = Sales - COGS | 1,000 - 500 = **500** | 850 - 350 = **500** |
| Expenses = Gross profit - PBIT | 500 - 400 = **100** | 500 - 360 = **140** |
| GPM | 500 / 1,000 × 100 = **50.00%** | 500 / 850 × 100 = **58.82%** |
| Profit margin | 400 / 1,000 × 100 = **40.00%** | 360 / 850 × 100 = **42.35%** |

Both margins fell. Sales grew 17.6% but COGS rose faster (350 to 500), so the GPM fell. Expenses actually fell (140 to 100), so the gap between GPM and profit margin narrowed from 16.47 to 10 percentage points: overhead control improved.

### Q18.2 ROCE

| | Year 2 | Year 1 |
|---|---|---|
| Capital employed = NCL + Equity | 250 + 750 = 1,000 | 250 + 550 = 800 |
| ROCE | 400 / 1,000 × 100 = **40.00%** | 360 / 800 × 100 = **45.00%** |

ROCE fell: capital employed rose 25% but PBIT rose only 11.1%. Still, 40% is very likely above bank interest rates.

### Q18.5 Liquidity

| | Year 2 | Year 1 |
|---|---|---|
| Current ratio | 700 / 300 = **2.33:1** | 500 / 200 = **2.50:1** |
| Acid test ratio | (700 - 350) / 300 = **1.17:1** | (500 - 250) / 200 = **1.25:1** |

Both ratios fell slightly but remain healthy: the acid test is above 1:1. The current ratio is above the 1.5 to 2.0 range, which may mean too much stock (up from 250 to 350) or cash (up from 50 to 200) tied up.

### Further information needed
Industry averages and competitors' ratios, more years of data (trends), the firm's objectives, the state of the economy, and qualitative factors (staff motivation, customer perceptions of quality).

**Textbook Common mistake (p.283):** express ratio answers to **two decimal places** unless the question says otherwise.`,
      keyTakeaways: [
        'Gross profit stayed at $500k, but GPM fell from 58.82% to 50.00% as COGS rose faster than sales.',
        'Expenses fell from $140k to $100k, narrowing the gap between GPM and profit margin.',
        'ROCE fell from 45% to 40% as capital employed grew faster than profit.',
        'Liquidity is still sound: current ratio 2.33:1, acid test 1.17:1.',
      ],
      examTips: [
        'Show every step of working: formula, substitution, answer with unit, to two decimal places.',
        'After calculating, always explain the cause of the change and what further data you would want.',
      ],
    },
    {
      id: 'sec-3-5-uses-limitations',
      title: '7. Uses, Limitations and the Key Concepts',
      content: String.raw`### Uses for stakeholders (p.281)

| Stakeholder | Use of ratios |
|---|---|
| **Employees and trade unions** | Likelihood of pay rises and job security |
| **Managers and directors** | Likelihood of bonuses for hitting profitability, liquidity and efficiency targets; identify areas to improve |
| **Trade creditors** | Short-term liquidity: will customers have enough working capital to repay? |
| **Shareholders** | Return compared with other investments (other shares, bank savings) |
| **Financiers** | Enough funds and profitability to repay loans |
| **Local community** | Gauge job opportunities; secure sponsorship for community projects |

### Limitations
- Ratios are **historical**: they do not show the current or future position.
- **External changes** can alter ratios without any change in underlying performance (e.g. higher tax rates cut profitability even if sales rose).
- **No universal reporting method**: different accounting policies (e.g. straight-line vs units of production depreciation) make inter-firm and international comparisons difficult.
- **Qualitative factors are ignored**, e.g. staff motivation and customer perceptions of quality.
- **Objectives differ**: comparing a state-owned airline with a private airline could be meaningless.

### Other considerations for a fuller picture
Historical comparisons (trends and their reasons), inter-firm benchmarking with close rivals, the nature and objectives of the business (MNC vs not-for-profit; firms with a strong social and ethical stance may accept lower profitability), the state of the economy (business cycle), and social factors (pollution, excess packaging, job losses from automation).

### Key concepts
- **Change:** the 2008 global financial crisis and COVID-19 harmed many firms' ratios; favourable economic change or technology can improve them.
- **Ethics:** firms can manipulate accounts (window dressing). A 2013 University of Toronto / University of Chicago study found a 14.5% probability of accounting fraud in any given year, costing investors an average of 22% of funds in those firms.
- **Sustainability:** financial health depends on profitability, liquidity and efficiency together. Lack of working capital is the single largest cause of business failure; profitable firms without liquidity are unlikely to survive.
- **NPOs:** profit ratios suit them poorly; judge them by their own objectives (e.g. a school's exam results or efficiency within budget).

Textbook Exam tip (p.283): in ratio questions it is often more important to consider **what data are not given** than to examine the data provided. Good decisions use both quantitative and qualitative information.`,
      keyTakeaways: [
        'Different stakeholders use ratios for different decisions (pay, bonuses, credit, returns, loans, community).',
        'Ratios are historical, ignore qualitative factors, are distorted by external change and differing accounting policies.',
        'Ratio analysis is partial: combine trends, benchmarking, objectives, the economy and social factors.',
        'Profitability without liquidity is unsustainable; window dressing raises ethical concerns.',
      ],
      examTips: [
        'For 10-mark discussions (e.g. Q18.6 Howald-Lee vs Quintanilla), weigh trends across several ratios, then add the limitations and missing qualitative information before judging.',
        'Name the specific stakeholder and the specific ratio they would focus on (e.g. trade creditors and the acid test ratio).',
      ],
    },
  ],
  highYieldTerms: [
    { term: 'Ratio analysis', definition: 'A quantitative management tool that compares different financial figures to examine and judge the financial performance of a business (p.286).' },
    { term: 'Historical comparisons', definition: 'Comparing the same ratio in two different time periods for the same business, showing trends in financial performance over time (p.274).' },
    { term: 'Inter-firm comparisons', definition: 'Comparing the same ratios of businesses in the same industry to show relative financial performance (p.274).' },
    { term: 'Profitability ratios', definition: 'Ratios that examine profit in relation to other figures, comprised of the gross profit margin (GPM), profit margin and return on capital employed (ROCE) ratios (p.286).' },
    { term: 'Gross profit margin (GPM)', definition: 'A profitability ratio that shows the value of a firm\'s gross profit expressed as a percentage of its sales revenue: Gross profit / Sales revenue × 100 (p.286).' },
    { term: 'Profit margin', definition: 'A ratio that shows the percentage of sales revenue that turns into profit, i.e. the proportion of sales revenue left over after all direct and indirect costs have been paid: PBIT / Sales revenue × 100 (p.286).' },
    { term: 'Return on capital employed (ROCE)', definition: 'A profitability ratio that measures the financial performance of a firm based on the amount of capital invested: PBIT / Capital employed × 100 (p.286).' },
    { term: 'Capital employed', definition: 'The value of all long-term sources of finance for a business, namely non-current liabilities plus equity (p.286).' },
    { term: 'Liquidity ratios', definition: 'Ratios that look at the ability of a firm to pay its short-term (current) liabilities, comprised of the current ratio and the acid test (quick) ratio (p.286).' },
    { term: 'Liquid assets', definition: 'The possessions of a business that can be turned into cash quickly without losing their value, i.e. cash, stocks and debtors (p.286).' },
    { term: 'Current ratio', definition: 'A short-term liquidity ratio that calculates the ability of a business to meet its debts within the next twelve months: Current assets / Current liabilities (p.286).' },
    { term: 'Acid test (quick) ratio', definition: 'A liquidity ratio that measures a firm\'s ability to meet its short-term debts. It ignores stock because not all inventories can be easily turned into cash in a short time frame: (Current assets - Stock) / Current liabilities (p.286).' },
    { term: 'Working capital', definition: 'The numerical difference between current assets and current liabilities (p.279).' },
    { term: 'Liquidity crisis', definition: 'A situation where a firm is unable to pay its short-term debts, i.e. current liabilities exceed current assets (p.286).' },
  ],
};

