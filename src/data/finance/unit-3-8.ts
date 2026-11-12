import { StudyUnit } from '@/types/curriculum';

// Unit 3.8 Investment Appraisal. Source: Paul Hoang, Business Management (5th ed., IBID 2022), Chapter 21, pp.315-327.
// NOTE: template literals are used for content, so LaTeX backslashes are doubled (\\frac) and "${" is never used.

export const UNIT_3_8: StudyUnit = {
  id: '3.8-investment-appraisal',
  title: 'Investment Appraisal',
  unitCode: 'Unit 3.8',
  subtitle: 'Payback Period, Average Rate of Return, Net Present Value (HL) and Qualitative Factors',
  estimatedReadTime: '16 min read',
  description:
    'Learn how managers judge whether an investment is worthwhile. Covers the payback period (including the cumulative cash flow method), the average rate of return (ARR), net present value with discount factors (HL only), the advantages and disadvantages of each method, and the qualitative factors (PORSCHE) that affect investment decisions.',
  sections: [
    {
      id: 'sec-3-8-introduction',
      title: '1. Investment and Investment Appraisal',
      content: `### What is investment?
**Investment** refers to the purchase of an asset with the potential to yield future financial benefits, such as upgrading computer equipment or the purchase of a building *(p.315)*. With most investments, resources are risked in a decision that might or might not bring about future financial gains.

### What is investment appraisal?
**Investment appraisal** refers to the quantitative techniques used to calculate the financial costs and benefits of an investment decision. It refers to the different methods used to assess the risks involved in investment decision-making *(p.315)*.

| Method | Syllabus level | Measured in |
| :--- | :--- | :--- |
| Payback period (PBP) | SL and HL | **Time** (e.g. 2 years and 5 months) |
| Average rate of return (ARR) | SL and HL | **Percentage** (e.g. 12.65%) |
| Net present value (NPV) | HL only | **Money** (e.g. $23.65m) |

**Textbook Common mistake (p.324):** marks are often dropped for using the wrong units. PBP is a *time*, ARR is a *percentage*, NPV is a *monetary value*.

### Risk is not a reason to reject
Textbook Exam tip (p.318): students often conclude that because something is 'risky', a business should avoid it. Entrepreneurs regularly take risks, and many businesses have become highly successful by taking huge risks (e.g. Warren Buffett's 2008 $230m investment in a 10% stake in BYD, *Case study 21.1*). The decision is not whether to take risks but whether the benefits of the risks are likely to outweigh the costs involved.`,
      keyTakeaways: [
        'Investment = buying an asset with the potential to yield future financial benefits; resources are risked.',
        'Investment appraisal = quantitative techniques to calculate the financial costs and benefits of an investment decision.',
        'Three methods: payback period, average rate of return, and net present value (HL only).',
        'PBP is measured in time, ARR as a percentage, NPV as a monetary value.',
      ],
      examTips: [
        'Never conclude that a business should avoid a project simply because it is risky; weigh the likely benefits against the costs.',
        'All students must calculate PBP and ARR; HL students must also calculate and interpret NPV (p.325).',
      ],
    },
    {
      id: 'sec-3-8-payback-period',
      title: '2. Payback Period (PBP)',
      content: `### Definition
The **payback period (PBP)** refers to the amount of time needed for an investment project to earn enough profits to repay the initial cost of the investment *(p.316)*.

### Method 1: Constant monthly contribution
$$\\text{PBP} = \\frac{\\text{Initial investment cost}}{\\text{Contribution per month (\\$)}}$$

**Textbook example (p.316): photocopier.** Cost = $10,000; financial gain = $6,000 per year after maintenance.
$$\\text{PBP} = \\frac{\\$10,000}{\\$6,000 \\div 12} = \\frac{\\$10,000}{\\$500} = 20 \\text{ months (1 year 8 months)}$$
The firm will not want to buy the equipment if it becomes obsolete before the payback period.

### Method 2: Cumulative cash flow (when cash flows are not constant)
**Worked example 21.1 (p.316): sports complex costing $1 million.**

| Year | Net cash inflow | Cumulative cash inflow |
| :--- | ---: | ---: |
| 1 | $200,000 | $200,000 |
| 2 | $340,000 | $540,000 |
| 3 | $430,000 | $970,000 |
| 4 | $360,000 | $1,330,000 |

Payback occurs in **Year 4**. Use the three-step months formula:
1. **Shortfall** at the end of Year 3: $1,000,000 - $970,000 = **$30,000**
2. **Average monthly net cash flow** in Year 4: $360,000 ÷ 12 = **$30,000**
3. **Months** = (1) ÷ (2) = $30,000 ÷ $30,000 = **1 month**

$$\\text{Months} = \\frac{\\text{Shortfall at end of previous year}}{\\text{Net cash flow in payback year} \\div 12}$$

PBP = 3 years and 1 month.

> The textbook's opening list shows Year 4 as $430,000, but its cumulative table and working use **$360,000** (which gives the $1,330,000 total). The working above follows the textbook's calculation.

### Practice: Verton Coffee (Question 21.1)
Machinery costs $30,000; annual contribution $8,000. Monthly contribution = $8,000 ÷ 12 = $666.67.
PBP = $30,000 ÷ $666.67 = **45 months = 3 years 9 months**.

### Practice: Mark Allegro Leasing Co. (Question 21.2)
Cost $50,000. Cumulative cash flow: $12,000, $26,000, $41,000, $55,000. Shortfall after Year 3 = $9,000; Year 4 monthly = $14,000 ÷ 12 = $1,166.67; months = 7.7.
PBP ≈ **3 years 8 months** (3 years 7.7 months).`,
      keyTakeaways: [
        'PBP = the time needed for a project to earn enough to repay its initial cost.',
        'Constant flows: PBP = initial investment cost ÷ contribution per month.',
        'Uneven flows: use cumulative cash flow, then months = shortfall ÷ (payback-year net cash flow ÷ 12).',
        'Most projects are only considered if they have a relatively short PBP.',
      ],
      examTips: [
        'Always state the answer in years and months (e.g. 3 years and 1 month), not just a decimal.',
        'Show the shortfall and the monthly cash flow as separate steps to earn method marks.',
      ],
    },
    {
      id: 'sec-3-8-pbp-evaluation',
      title: '3. Advantages and Disadvantages of the Payback Period',
      content: `### Table 21.1 (p.318)

| Advantages of the PBP | Disadvantages of the PBP |
| :--- | :--- |
| The **simplest and quickest** method, hence the most commonly used. | Contribution per month is unlikely to be constant, as demand is prone to **seasonal fluctuations**, so the PBP might take longer. |
| Useful for firms with **cash flow (liquidity) problems**, as they can see how long it takes for the cash to be recouped. | Focuses on **time** rather than on **profits**, the main objective of most private sector businesses. |
| Shows whether the firm can **break even on an asset before it needs replacing**, important in a fast-paced business environment. | Can encourage **short-termism**: managers focus on short-term benefits and ignore potential long-term gains. |
| Can **compare projects with different costs** by finding the quickest PBP of each. | Not suitable for some businesses, e.g. **property developers and cruise liner operators** recoup investments only after many years. |
| Helps managers assess projects that yield a **quick return for shareholders**. | Prone to **errors**, as future cash flows are difficult to predict accurately. |

![Table 21.1 - The advantages and disadvantages of the payback period](/finance/unit-3-8-payback-pros-cons.png)
*Source: Hoang (2022), Table 21.1, p.318.*

Textbook Exam tip (p.318): the biggest potential mistake when relying on the PBP is rejecting a project simply because it will not pay off quickly, even though it may be very profitable in the long term. Context matters.

**Case: Chelsea Football Club (Question 21.3).** Roman Abramovich invested about £440m in 2003 and £240m more in 2006, with large early annual losses, yet the investment reached its payback target in 2010, and the club was sold in 2022 for an estimated £3 billion. A short PBP test alone would have rejected it.`,
      keyTakeaways: [
        'PBP advantages: simple and quick, helps liquidity planning, checks payback before replacement, compares projects, shows quick returns.',
        'PBP disadvantages: ignores profit, encourages short-termism, assumes steady flows, unsuitable for long-life projects, forecasting errors.',
      ],
      examTips: [
        'In evaluation, link the PBP to context: a small firm with liquidity problems values a short PBP; a cruise liner operator does not expect one.',
      ],
    },
    {
      id: 'sec-3-8-arr',
      title: '4. Average Rate of Return (ARR)',
      content: `### Definition
The **average rate of return (ARR)** calculates the average annual profit of an investment project, expressed as a percentage of the initial amount of money invested *(pp.319, 327)*.

### Formula (p.319)
$$\\text{ARR} = \\frac{\\text{Total profit during project's lifespan (\\$)} \\div \\text{number of years of project}}{\\text{Initial amount invested (\\$)}} \\times 100$$

Total profit = total net cash flows minus the initial cost of the investment.

### Worked example: Victoria Mayers Holidays Co. (Question 21.5, p.320)

| Year | Project Atlanta ($) | Project Boston ($) |
| :--- | ---: | ---: |
| 0 | (140,000) | (140,000) |
| 1 | 80,000 | 60,000 |
| 2 | 60,000 | 60,000 |
| 3 | 20,000 | 60,000 |

| Step | Atlanta | Boston |
| :--- | ---: | ---: |
| Total net cash inflow | $160,000 | $180,000 |
| Total profit (minus $140,000) | $20,000 | $40,000 |
| Average annual profit (÷ 3) | $6,667 | $13,333 |
| **ARR** (÷ $140,000 × 100) | **4.76%** | **9.52%** |
| PBP | 2 years exactly | 2 years 4 months |

Atlanta pays back faster, but Boston's ARR is double. With a **savings interest rate of 4.75%**, Atlanta's real return is only about 0.01 percentage points, so it hardly rewards the risk, while Boston earns about 4.8 points above the bank.

### Comparing ARR with interest rates
The ARR can be compared with the **base interest rate** to assess the reward for risk. If McDonald's has an ARR of 7% and savings pay 3%, the real rate of return is **4%**: probably worth it for a large multinational, but perhaps not enough for a start-up selling horse saddles in a niche market when banks offer a guaranteed 3% *(p.319)*.

### Advantages and disadvantages (p.320)
| Advantages | Disadvantages |
| :--- | :--- |
| Easy **comparisons in percentage terms** of returns on different projects. | **Ignores the timing** of net cash flows, so prone to forecasting errors with seasonal factors. |
| If two projects have the same ARR, the **cheaper one** may be preferred as it carries less financial risk. | Needs the project's **useful lifespan**, which might be a pure guess. |
| Can be benchmarked against interest rates. | Errors are more likely the **longer the time period** (no business in 2019 predicted the COVID-19 pandemic). |`,
      keyTakeaways: [
        'ARR = average annual profit as a percentage of the initial amount invested.',
        'Subtract the initial cost from total net cash flows before dividing by the number of years.',
        'Compare ARR with the interest rate on savings to judge the reward for risk.',
        'ARR ignores the timing of cash flows and depends on a guessed lifespan.',
      ],
      examTips: [
        'Always express ARR as a percentage and compare it with the interest rate if one is given.',
        'A common error is forgetting to deduct the initial investment before averaging the profit.',
      ],
    },
    {
      id: 'sec-3-8-npv',
      title: '5. Net Present Value (NPV) and Discounting (HL only)',
      content: `> **HL only.** SL students do not need to calculate NPV.

### The time value of money
Money received today can be saved or invested to earn compound interest, whereas money received in the future will have lost some of its value ('time is money'). At 5% interest, $100 today becomes $105 in one year and $110.25 in two years. So **$105 received in a year's time is worth the same as $100 today** *(p.321)*.

**Case study 21.2:** *America's Got Talent*'s $1 million prize is paid as $25,000 a year for 40 years; at 5% interest and after taxes, its present value is only around **$375,000**.

### Discounting and discount factors
**Discounting** is the reverse of calculating compound interest. A **discount factor** is the number used to reduce the value of a sum of money received in the future in order to determine its present (current) value *(pp.321, 327)*. It can represent **inflation** (a rise in the general price level over time) and/or **interest rates**.

Box 21.2 (p.322), illustration only: discount factor at 5% for 3 years = $1 \\div (1.05)^3 = 0.8638$.
You will not be expected to calculate discount factors; discount tables are given in exams.

Example: $100,000 received in 3 years at 5% has a present value of $100,000 × 0.8638 = **$86,380**.

**Extract of Table 21.2 (discount factors):**
| Year | 4% | 5% | 6% | 8% |
| :--- | ---: | ---: | ---: | ---: |
| 1 | 0.9615 | 0.9524 | 0.9434 | 0.9259 |
| 2 | 0.9246 | 0.9070 | 0.8900 | 0.8573 |
| 3 | 0.8890 | 0.8638 | 0.8396 | 0.7938 |
| 4 | 0.8548 | 0.8227 | 0.7921 | 0.7350 |
| 5 | 0.8219 | 0.7835 | 0.7473 | 0.6806 |

![Table 21.2 - Discount factors at different rates of interest](/finance/unit-3-8-discount-factors.png)
*Source: Hoang (2022), Table 21.2, p.321.*

### NPV formula (p.322)
The **net present value (NPV)** is the sum of all discounted cash flows minus the cost of the investment project.
$$\\text{NPV} = \\text{Sum of present values} - \\text{Cost of investment}$$
$$\\text{Present value} = \\text{Net cash flow} \\times \\text{Discount factor}$$

The original amount invested is called the **principal** or **capital outlay**. If NPV is **positive**, the project is worth pursuing on financial grounds; if **negative**, it is not.

### Worked example 21.3 (p.322)
Mechanization costs $300,000, lasts 5 years, costs $50,000 a year to maintain and raises output value by $150,000 a year. Interest rate = 5%. Net cash flow = $150,000 - $50,000 = **$100,000** per year.

| Year | Net cash flow ($) | Discount factor (5%) | Present value ($) |
| :--- | ---: | ---: | ---: |
| 1 | 100,000 | 0.9524 | 95,240 |
| 2 | 100,000 | 0.9070 | 90,700 |
| 3 | 100,000 | 0.8638 | 86,380 |
| 4 | 100,000 | 0.8227 | 82,270 |
| 5 | 100,000 | 0.7835 | 78,350 |
| **Total** | **500,000** | | **432,940** |

NPV = $432,940 - $300,000 = $132,940 (positive, so the project should go ahead). Without discounting the return would appear to be $200,000.

### Limitations of NPV (p.322)
- The value would be **reduced if interest rates rise** during the project.
- NPV calculations can be **complex**.
- Results are only **comparable if the initial investment cost is the same** between competing projects.
- Strength: it recognises that cash received in the future is worth less than cash today (interest foregone and inflation).`,
      keyTakeaways: [
        'HL only: NPV = sum of present values minus cost of investment.',
        'Present value = net cash flow × discount factor; discount factors are given in exams.',
        'Positive NPV means the project is viable on financial grounds; negative means it is not.',
        'NPV accounts for the time value of money but is complex and sensitive to interest rate changes.',
      ],
      examTips: [
        'Lay out a four-column table (year, net cash flow, discount factor, present value) and subtract the initial cost at the end.',
        'State NPV as a monetary value and say clearly whether it is positive or negative.',
      ],
    },
    {
      id: 'sec-3-8-comparing-methods',
      title: '6. Applying All Three Methods',
      content: `### Asvin Bundhun Construction Co. (Question 21.6, HL): both projects cost $300,000, 6% discount factors

| Year | DF | Colorado NCF | Colorado PV | Delaware NCF | Delaware PV |
| :--- | ---: | ---: | ---: | ---: | ---: |
| 1 | 0.9434 | 50,000 | 47,170 | 100,000 | 94,340 |
| 2 | 0.8900 | 100,000 | 89,000 | 200,000 | 178,000 |
| 3 | 0.8396 | 200,000 | 167,920 | 200,000 | 167,920 |
| 4 | 0.7921 | 200,000 | 158,420 | 50,000 | 39,605 |
| **Sum of PV** | | | **462,510** | | **479,865** |
| **NPV** | | | **$162,510** | | **$179,865** |

Delaware has the higher NPV because its larger cash flows arrive earlier.

### Charnley Consulting Co. (Question 21.7): both cost $300,000, 4% discount factor

| Measure | Adelaide | Brisbane |
| :--- | ---: | ---: |
| Net cash flows (Years 1-4) | 100k, 120k, 150k, 200k | 100k, 200k, 150k, 100k |
| PBP | 2 years 6.4 months | **2 years exactly** |
| ARR | **22.5%** | 20.83% |
| NPV (HL) | **$211,412** | $199,900 |

Brisbane pays back sooner, but Adelaide is more profitable (higher ARR and NPV). The choice depends on whether the firm prioritises liquidity or profit.

### Puri Garments (Question 21.8): cost $230,000; net cash flows $140k, $180k, $150k, $100k; 8% discount
- **PBP:** cumulative $140k, $320k. Shortfall after Year 1 = $90k; $180k ÷ 12 = $15k a month; 90 ÷ 15 = 6 months, so **1 year 6 months**.
- **ARR:** ($570k - $230k) ÷ 4 = $85k; $85k ÷ $230k × 100 = **36.96%**.
- **NPV (HL):** 129,626 + 154,314 + 119,070 + 73,500 = 476,510; NPV = **$246,510**.

*Assumption:* the $10,000 scrap value is treated as already included in the given Year 4 cash flow. If it were added on top, ARR would be 38.04% and NPV would rise by $7,350 (10,000 × 0.7350).`,
      keyTakeaways: [
        'Different methods can rank projects differently: the fastest payback is not always the most profitable.',
        'With equal initial costs, the project whose larger cash flows arrive earlier has the higher NPV.',
        'A recommendation should weigh PBP (liquidity, risk) against ARR/NPV (profitability).',
      ],
      examTips: [
        'For a 10-mark "recommend" question, calculate every method available, compare them, then add qualitative factors before concluding.',
        'Analysing the results matters more than the arithmetic: this is not an accounting course (p.325).',
      ],
    },
    {
      id: 'sec-3-8-qualitative',
      title: '7. Limitations and Qualitative Factors (PORSCHE)',
      content: `### Why quantitative appraisal is not enough (p.325)
- It makes decisions more **objective**, but **risks are not eliminated**.
- Accuracy is only as good as the data: 'Garbage in, garbage out'.
- **Changes in interest rates** affect the potential net gains.
- It may **not capture all relevant costs and benefits**, which can raise ethical questions.
- Culture matters: risk-averse business cultures (e.g. Ethiopia, Bhutan) invest differently from entrepreneurial ones (e.g. USA, Singapore).

### PORSCHE: qualitative factors (p.325)
| Letter | Factor | Key idea |
| :--- | :--- | :--- |
| **P** | Projections | Gut feeling or instinct, e.g. expectations of interest rate changes. |
| **O** | Objectives | A profit-seeking firm favours quantitative methods; a non-profit with strong ethical values may not. |
| **R** | Risk profile | Risk-averse firms avoid high-risk, high-return projects. |
| **S** | State of the economy | High business confidence encourages risk; rising interest rates delay investment. |
| **C** | Corporate image | Public relations and pressure groups (e.g. Greenpeace). |
| **H** | Human relations | Impact on morale, productivity and possible redundancies from automation. |
| **E** | External shocks | Weather, oil crises and natural disasters can invalidate any appraisal. |

**Case study 21.3: Norwich City FC (2021)** turned down a lucrative sponsorship deal with BK8, an online gambling company, because it went against the club's ethical principles, and partnered with local firm Lotus Cars instead. Ethics and sustainability can outweigh favourable numbers.`,
      keyTakeaways: [
        'Quantitative appraisal relies on forecasts: garbage in, garbage out.',
        'PORSCHE: Projections, Objectives, Risk profile, State of the economy, Corporate image, Human relations, External shocks.',
        'Final decisions should consider the wider context and the impact on stakeholders, not just the numbers.',
      ],
      examTips: [
        'In 10-mark questions, use both numerical results and at least two PORSCHE factors applied to the case.',
        'Quote the reliability of forecasts as a limitation of every method.',
      ],
    },
  ],
  highYieldTerms: [
    { term: 'Investment', definition: 'Capital expenditure or the purchase of assets with the potential to yield future financial benefits (pp.315, 327).' },
    { term: 'Investment appraisal', definition: 'A financial decision-making tool that helps managers to determine whether certain investment projects should be undertaken based mainly on quantitative techniques (p.327).' },
    { term: 'Payback period (PBP)', definition: 'An investment appraisal technique that calculates the length of time it takes to recoup (earn back) the initial expenditure on an investment project (p.327).' },
    { term: 'Cumulative net cash flow', definition: "The sum of an investment project's net cash flows for a particular year plus the net cash flows of all previous years (p.327)." },
    { term: 'Average rate of return (ARR)', definition: 'Calculates the average annual profit of an investment project, expressed as a percentage of the initial amount of money invested (p.327).' },
    { term: 'Discount factor (HL)', definition: 'The number used to reduce the value of a sum of money received in the future in order to determine its present (current) value (p.327).' },
    { term: 'Discounted cash flow (HL)', definition: 'Uses a discount factor (the inverse of compound interest) to reduce the value of money received in future years because money loses its value over time (p.327).' },
    { term: 'Discounting (HL)', definition: 'The reverse of calculating compound interest (p.321).' },
    { term: 'Net present value (NPV) (HL)', definition: 'Calculates the total discounted net cash flows minus the initial cost of an investment project. If the NPV is positive, the project is viable on financial grounds (p.327).' },
    { term: 'Principal (capital outlay)', definition: 'The original amount spent on an investment project (p.327).' },
    { term: 'Inflation', definition: 'A rise in the general price level over time (p.321).' },
    { term: 'Quantitative investment appraisal', definition: 'Judging whether an investment project is worthwhile based on numerical (financial) interpretations, namely the PBP, ARR and NPV methods (p.327).' },
    { term: 'Qualitative investment appraisal', definition: 'Judging whether an investment project is worthwhile through non-numerical techniques, such as determining whether the investment is consistent with the corporate culture (p.327).' },
  ],
};
