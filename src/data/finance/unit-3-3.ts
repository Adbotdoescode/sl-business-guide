import { StudyUnit } from '@/types/curriculum';

// ============================================================================
// Unit 3.3: Costs and Revenues
// Source: Paul Hoang, Business Management (5th ed., IBID 2022), Chapter 16, pp.237-247
// Syllabus (SL/HL, AO2): types of cost - fixed, variable, direct, indirect/overhead;
// total revenue and revenue streams, using examples.
// ============================================================================

export const UNIT_3_3: StudyUnit = {
  id: '3.3-costs-and-revenues',
  title: 'Costs & Revenues',
  unitCode: 'Unit 3.3',
  subtitle: 'Fixed, Variable, Direct and Indirect Costs, Total and Average Revenue, Profit and Revenue Streams',
  estimatedReadTime: '14 min read',
  description:
    'Master the difference between cost and price, set-up vs running costs, the four syllabus types of cost (fixed, variable, direct, indirect/overhead), total and average cost, total and average revenue, profit, and the many revenue streams that bring money into a business beyond sales.',
  sections: [
    {
      id: 'sec-3.3-cost-vs-price',
      title: '1. Cost vs Price, Set-up Costs and Running Costs',
      content: `### Cost is not Price
In everyday language a person might say a shirt "cost $25". In business language the correct terminology is **"the price is $25"** (p.237).

| Term | Meaning | Who pays it? |
| :--- | :--- | :--- |
| **Cost** | The sum of money incurred by a business in the production process, such as raw materials, wages and salaries, insurance, advertising and rent. | The **producer** (the business) |
| **Price** | The amount of money a product is sold for; the sum paid by the customer to purchase a good or service. | The **customer** |

---

### Set-up Costs vs Running Costs
Businesses need to pay for both:

* **Set-up costs** - the items of expenditure needed to **start** a business, such as obtaining suitable premises, purchasing machinery and equipment, and deposits paid to utilities companies (gas, water, electricity and telephone).
* **Running costs** - the **ongoing** costs of operating the business, such as wages and salaries, insurance premiums and the costs of purchasing stocks (inventories).

#### Table 16.1 - Examples of costs for a clothes retailer (p.238)

![Table 16.1 - Set-up vs running costs for a clothes retailer](/finance/unit-3-3-setup-vs-running-costs.png)
*Source: Hoang (2022), Table 16.1, p.238. Reproduced as text below.*

| Set-up costs | Running costs |
| :--- | :--- |
| Premises, such as a down payment on a mortgage or rent deposit | Regular mortgage, rent and/or lease payments |
| Buildings, such as maintenance or physical alterations to the property | Packaging materials, such as gift boxes, gift tags and wrapping paper |
| Furniture, fixtures and fittings, such as changing rooms, signage, counters and shelving | Repairs and maintenance on buildings, furniture, fixtures and fittings due to damage or wear and tear |
| Capital equipment, such as cash registers, telephones, computers, printers and office stationery | Depreciation on capital equipment and replacement of obsolete (outdated or broken) equipment |
| Connection and installation of utilities and power, like telephone lines and electricity | Payment of utilities, such as electricity and telephone bills, and insurance premiums |
| Legal and professional fees, including business registration and licensing | Marketing costs, such as in-store promotions and advertising |
| Initial stock of supplies (inventories) | Replenishing stocks from suppliers |
| Recruitment costs of hiring, training and inducting new staff | Wages, salaries and other staffing costs, including clothing or uniforms for staff |`,
      keyTakeaways: [
        'Cost is the expenditure incurred by the producer; price is the amount paid by the customer.',
        'Set-up costs are needed to start a business (premises, equipment, initial stock); running costs are the ongoing costs of operating it (wages, rent, utilities, restocking).',
        'The same item can appear in both columns in different forms, e.g. a rent deposit (set-up) vs regular rent payments (running).'
      ],
      examTips: [
        "Textbook Exam tip: 'cost' refers to the cost of production (paid by the producer) whereas 'price' refers to the amount the product is sold for (paid by the customer)."
      ]
    },
    {
      id: 'sec-3.3-fixed-variable',
      title: '2. Fixed Costs, Variable Costs, Total Costs and Average Costs',
      content: `The syllabus specifies four types of cost: **(i) fixed, (ii) variable, (iii) direct and (iv) indirect/overhead**.

### (i) Fixed Costs
**Fixed costs** are the costs of production that a business has to pay **regardless of how much it produces or sells**. They are independent of the level of output or sales and **have to be paid even if there is no output**.

* **Textbook examples:** rent on leased premises, interest payments on bank loans, advertising expenditure, market research, management salaries, office stationery, security and professional accountancy fees.
* **Diagram (Figure 16.1):** total fixed costs (TFC) are drawn as a **horizontal line** - the textbook example shows TFC of $5,000 at every level of output.

![Figure 16.1 - Fixed costs: TFC flat at $5,000 regardless of output](/finance/unit-3-3-fixed-costs-graph.png)
*Source: Hoang (2022), Figure 16.1, p.238.*

* **Fixed costs can change**, but this happens *independently* of output. E.g. a landowner raises rents due to higher property prices, or directors are paid higher salaries due to rising costs of living.

### (ii) Variable Costs
**Variable costs** are the costs of production that **change in proportion with the level of output or sales**. If output doubles, variable costs also double.

* **Textbook examples:** raw materials (a textiles firm making more curtains), commission earned by sales staff, hourly wages of production workers, and packaging costs directly associated with output.
* In theory, if there is **no production, variable costs are zero**.
* **Diagram (Figure 16.2):** total variable costs (TVC) are an **upward-sloping line starting from the origin**.

![Figure 16.2 - Variable costs rise in proportion to output, starting at 0](/finance/unit-3-3-variable-costs-graph.png)
*Source: Hoang (2022), Figure 16.2, p.239.*

---

### Total Costs and Average Costs
$$TC = TFC + TVC$$
$$AC = TC / Q$$

* **Total costs (TC)** are the sum of all variable costs and all fixed costs of production.
* **Diagram (Figure 16.3):** the TC line **starts at the value of fixed costs** (not at zero), because fixed costs must be paid even with no output. The **vertical gap between the TC and TVC lines is equal to TFC** at every level of output.

![Figure 16.3 - Total costs: TC = TFC + TVC](/finance/unit-3-3-total-costs-graph.png)
*Source: Hoang (2022), Figure 16.3, p.239.*

* **Average cost (AC)** is the cost per unit of output, where Q is quantity (output level).

| Feature | Fixed costs | Variable costs |
| :--- | :--- | :--- |
| Link to output | Independent of output or sales | Change in proportion with output or sales |
| At zero output | Still have to be paid | Zero (in theory) |
| Shape on a graph | Horizontal line (Fig 16.1) | Upward-sloping line from the origin (Fig 16.2) |
| Examples | Rent, loan interest, advertising, management salaries, security, accountancy fees | Raw materials, sales commission, hourly wages, packaging |`,
      keyTakeaways: [
        'Fixed costs do not vary with output and exist even if there is no output; variable costs change in proportion to output.',
        'TC = TFC + TVC; the TC line begins at the level of TFC and the gap between TC and TVC always equals TFC.',
        'Average cost (cost per unit) = TC / Q.',
        'Fixed costs can still change over time, but not because of a change in output.'
      ],
      examTips: [
        "Textbook Common mistake: avoid 'circular answers'. Saying 'fixed costs are costs that are fixed and variable costs are costs that are variable' earns no credit - define each in terms of its relationship with the level of output.",
        'When drawing TC, start the line at the TFC value on the vertical axis, not at the origin.'
      ]
    },
    {
      id: 'sec-3.3-direct-indirect',
      title: '3. Direct Costs and Indirect Costs (Overheads)',
      content: `### (iii) Direct Costs
A **direct cost** is specifically related to an **individual project or the output of a particular product**, without which the cost would not be incurred.

* Direct costs can include variable costs such as raw materials. **However, unlike variable costs, direct costs are not necessarily related to the level of output - they can be fixed costs.**
* **Textbook example:** the direct costs of purchasing a commercial building include consultancy costs, solicitor's fees, telephone bills, postage, photocopying costs and bank charges.
* Direct costs can be **traced back** to the output of a product and/or to a specific **cost centre** (Chapter 22).

#### What is variable for one business is not necessarily so for another (p.239)
| Airline type | Catering costs classified as... | Why |
| :--- | :--- | :--- |
| **Mainstream carrier** (e.g. Singapore Airlines) | **Variable costs** | Food and drinks are included in the ticket price, so the more passengers, the more food and drink required. |
| **'No-frills' budget airline** (e.g. Ryanair, easyJet, AirAsia) | **Direct costs** | Food and drinks are directly related to the flight, but not all passengers demand meals, as these are paid for individually. |

---

### (iv) Indirect Costs (Overheads)
**Indirect costs**, also known as **overheads**, are costs that **cannot be clearly traced** to the production or sale of any single product.

* E.g. rent and lighting are associated with **all areas** of a business rather than the output of one product.
* **Other textbook examples:** advertising, legal expenses, salaries for administrative staff, insurance premiums, security, office stationery, shipping and postage costs, utility bills and accounting fees.
* Indirect costs **can be fixed costs**, as they do not directly relate to output. **However, unlike fixed costs, indirect costs are not easily identified with a particular business activity or product.**

| Distinction | Direct costs | Indirect costs (overheads) |
| :--- | :--- | :--- |
| Traceability | Can be traced to a specific product, project or cost centre | Cannot be clearly traced to any single product |
| Would it be incurred without the product? | No | Yes - shared across the whole business |
| Relationship to fixed/variable | Can be variable (raw materials) **or** fixed | Usually fixed, but defined by traceability not output |
| Examples | Raw materials; solicitor's and consultancy fees for buying a building | Rent, lighting, administrative salaries, insurance, utility bills, accounting fees |`,
      keyTakeaways: [
        'Direct costs are attributed to a particular good, service or project; indirect costs (overheads) cannot be traced to one product.',
        'Direct costs are not the same as variable costs: a direct cost can be fixed.',
        'Indirect costs are not the same as fixed costs: the key feature is that they cannot be identified with one activity.',
        'Classification depends on the business: catering is a variable cost for Singapore Airlines but a direct cost for Ryanair, easyJet and AirAsia.'
      ],
      examTips: [
        "Textbook Exam tip: 'direct' and 'indirect' costs are used for businesses that produce or sell a range of products and therefore operate cost and profit centres (Chapter 22). These can be fixed or variable depending on the business. 'Fixed' and 'variable' costs, as used in break-even analysis (Chapter 39), refer to the sale or production of just a single type of product.",
        'In a classification question, justify each answer by linking the cost to output (fixed/variable) or to traceability (direct/indirect).'
      ]
    },
    {
      id: 'sec-3.3-worked-costs',
      title: '4. Worked Example: Completing a Cost Table (Kompothekra Glass Technologies)',
      content: `### Question 16.2 (p.241)
Anna Kompothekra owns a factory producing fine glass ornaments in Agia Paraskevi, Greece. Given TFC = $20,000, complete the table.

**Method:** TFC is the same at every output. TC = TFC + TVC, so TVC = TC - TFC. AC = TC / Q, so TC = AC × Q. (The completed figures below are calculated from the textbook data.)

*All cost figures in $.*

| Output (units) | TFC | TVC | TC | AC |
| ---: | ---: | ---: | ---: | ---: |
| 0 | 20,000 | **0** | **20,000** | - |
| 100 | **20,000** | 5,000 | **25,000** | **250.0** |
| 200 | **20,000** | 10,000 | **30,000** | **150.0** |
| 300 | **20,000** | **14,500** | 34,500 | **115.0** |
| 400 | **20,000** | **18,000** | 38,000 | **95.0** |
| 500 | **20,000** | **25,000** | **45,000** | 90.0 |
| 600 | **20,000** | **38,200** | **58,200** | 97.0 |

**Workings (examples):**
* Output 100: TC = $20,000 + $5,000 = $25,000; AC = $25,000 / 100 = $250
* Output 300: TVC = $34,500 - $20,000 = $14,500; AC = $34,500 / 300 = $115
* Output 500: TC = $90 × 500 = $45,000; TVC = $45,000 - $20,000 = $25,000
* Output 600: TC = $97 × 600 = $58,200; TVC = $58,200 - $20,000 = $38,200

### Shapes of the curves (part c)
* **TFC** - horizontal at $20,000, because fixed costs do not change with output.
* **TVC** - starts at zero and rises as output rises, because variable costs change with output.
* **TC** - starts at $20,000 (the TFC) and rises in parallel with TVC; the gap between TC and TVC is always $20,000.
* **AC** falls from $250 to a low of $90 at 500 units as fixed costs are spread over more units, then rises to $97 at 600 units.`,
      keyTakeaways: [
        'Rearrange the formulas: TVC = TC - TFC and TC = AC × Q.',
        'TFC is identical at every level of output, including zero.',
        'At zero output, TVC = 0 and TC = TFC; AC cannot be calculated.'
      ],
      examTips: [
        'Show your workings in calculation questions and include the units ($) in your answer.'
      ]
    },
    {
      id: 'sec-3.3-revenue',
      title: '5. Revenue, Average Revenue and Profit',
      content: `### What is Revenue?
**Revenue** (also called **sales revenue** or **total revenue**) refers to the money coming into a business, usually from the sale of goods and/or services. It is calculated by multiplying the price of a product by the quantity sold.

#### Box 16.2 - Revenue formulae
$$TR = P × Q$$
$$AR = TR / Q$$
Since P = TR / Q, then **AR = P**.

* **Average revenue (AR)** is the value of sales received from customers per unit of a good or service sold - it equals the price.
* **Note:** these revenue formulae are **not given** to candidates in the examination - you must learn them.

### Profit
**Profit** exists if there is a **positive difference** between a firm's total revenues and its total costs (Profit = Total revenue - Total costs).

---

### Case Study 16.1 - Church's (p.242)
Church's is an English producer of high-end luxury footwear, founded in 1873 by Thomas Church and his three sons, with main operations in Northampton, UK. It can produce up to 5,000 pairs of shoes per week, with around 70% exported, and has retail outlets in New York, Milan, Paris, Rome, Madrid, Hong Kong, Singapore and Shanghai. Since 1999 the privately held company has been owned by Prada, in a deal worth $170 million.

* **Worked example:** if Church's charges $300 on average per pair and sells 3,000 pairs in a week, TR = $300 × 3,000 = **$900,000** for that week.

### Question 16.3 - Big Bao (p.242)
Big Bao sells lunchtime meals in Bristol, UK. In 2021 it sold 31,790 units, a 10% increase in sales volume on 2020, when the average price was $6.50.
* **Sales volume** = the quantity (number of units) sold.
* 2020 volume = 31,790 / 1.10 = **28,900 units**
* 2020 sales revenue = 28,900 × $6.50 = **$187,850**

### Question 16.4 - Goff's Organic Fresh Fruits (p.243)
Ian Goff runs a fresh fruit and vegetables business in a small town in California, USA. Each morning he drives his delivery van to an out-of-town **wholesale market** to buy produce *(A wholesale market is not defined in Chapter 16; it is a market where traders buy goods in bulk to resell.)*. He pays $1,200 monthly rent, a loan on his one-year-old vehicle, and other running costs such as power and lighting. In peak seasons he employs two people.
* **Indirect costs** (other than the loan; suggested answers drawn from the case): rent ($1,200 a month), power and lighting, wages of the two seasonal helpers, vehicle running costs.
* **Tomatoes:** buys 50 kg at $0.80/kg and sells at $1.20/kg. Cost = $40; Revenue = $60; **Profit = $20**.
* **Apples:** bought 100 kg; sold 80 kg at $2 = $160 and the remaining 20 kg at $1.50 = $30. **TR = $190**.`,
      keyTakeaways: [
        'TR = P × Q; AR = TR / Q = P.',
        'Profit is the positive difference between total revenue and total costs.',
        'The revenue formulae are not provided in the exam.',
        'When the price changes for part of the stock, calculate revenue for each batch and add them.'
      ],
      examTips: [
        'Read percentage-change questions carefully: if this year is a 10% increase on last year, divide by 1.10 (do not subtract 10% of this year).',
        "Revenue is not profit - Goff's tomatoes earn $60 revenue but only $20 profit."
      ]
    },
    {
      id: 'sec-3.3-revenue-streams',
      title: '6. Revenue Streams',
      content: `### What are Revenue Streams?
A **revenue stream** refers to the money coming into a business from its **various business activities**, such as sponsorship deals, merchandise and receipt of royalty payments. Revenue does not only come from the sale of goods and services.

**Example - the IB's revenue streams:** annual fees charged to all IB World Schools; authorization and evaluation fees; donations; examination fees; IB Global and Regional Conferences; royalties from publications; workshops (training events for teachers).

---

### Non-sales Revenue Streams (pp.243-245)

| Revenue stream | Meaning | Textbook examples |
| :--- | :--- | :--- |
| **Advertising revenue** | Selling advertising space to other firms. | Over 80% of Twitter's revenue comes from text and display ads. Google and Facebook offer **cost per click** (advertisers pay only when customers click the advert) and **cost per thousand impressions** (pay based on the number of times adverts are displayed). |
| **Transaction fees** | Charges added to a transaction or service option. | Ryanair charges customers paying by American Express €7 ($9.5) plus 2% commission. AirAsia and easyJet charge for checked baggage, pre-assigned seats, excess baggage and onboard retailing. Low-cost airlines earn around 20% of revenue from such streams (Wall Street Journal). |
| **Franchise costs and royalties** | Franchisees pay a fee for the right to use the franchisor's brand name, logos and trademarks, plus a royalty based on sales revenue. Holders of patents and copyrights receive royalties for use of their inventions and creations. | McDonald's, Burger King and KFC; the IB earns royalties on textbooks by publishers it endorses. |
| **Sponsorship revenue** | A form of below-the-line promotion: the sponsor financially supports an organization in return for prominent display of its brand and exclusive advertising rights. | Arsenal FC's €132m ($178.4m) 15-year deal with Emirates (2006), extended by $242m in 2012 and $200m in 2018 - 'Fly Emirates'/'Fly Better' shirts until 2024 and the Emirates Stadium name until 2028. |
| **Subscription fees** | Charges for using or accessing a good or service, based on a formal agreement. | Fitness clubs' yearly membership; credit card annual fees; telephone companies' monthly service fees; Netflix and Spotify; Manchester United's subscription TV channel (since 1998). |
| **Dividends** | Payments from owning shares in other companies; a share of the net profits distributed to shareholders at the end of the tax year. | Volkswagen holds shares in Porsche, Suzuki and Scania. |
| **Merchandise** | Selling goods in addition to admission charges. | Cinemas, concerts, theatres and theme parks selling popcorn, beverages, souvenirs and memorabilia; Facebook's gift card service used at Burger King, Outback Steakhouse, Staples and Target. |
| **Interest earnings** | Interest on positive cash balances deposited at a commercial bank - important for cash-rich firms. | 2021 cash balances (Macrotrends): Pfizer $12.2bn, Apple $63bn, Microsoft $130bn, Google $137bn. $1bn at just 1% a year yields $27,397 per day. |
| **Donations** | Financial gifts from individuals or organizations; usually no direct benefit to the donor (except the feel-good factor), though some have conditions such as acknowledgement of donors' names. | Charities and non-profits such as schools, hospitals and universities. Not a common revenue source for most private sector businesses. |
| **Subventions** | Subsidies from the government to certain businesses to help reduce their costs of production. | Usually given to organizations that benefit society, such as private schools and hospitals; often used to help fund research and development. |

### Case Study 16.2 - Budget airlines (p.243)
* SpiceJet charges for hot meals, snacks and beverages.
* Jetstar and Scoot lend iPads to passengers for a fee.
* AirAsia customers can pay to sit in a children-free quiet zone.
* Ryanair failed to charge passengers for using toilets, but now sells advertising space on its planes, including the wing tips.

### Table 16.2 - World's most expensive football shirt sponsorship deals (Statista, 2021, £ million)
| Club | Shirt sponsor | £m |
| :--- | :--- | :--- |
| Real Madrid | Emirates | 413 |
| Tottenham Hotspur | AIA | 400 |
| Manchester United | TeamViewer | 325 |
| FC Barcelona | Rakuten | 324 |
| Bayern Munich | Deutsche Telekom | 283 |
| Arsenal FC | Emirates | 280 |
| Liverpool FC | Standard Chartered | 221 |
| Paris Saint-Germain | Accor | 171 |
| Chelsea FC | Three | 166 |
| Juventus | Jeep | 159 |

### Question 16.5 - Manchester United Football Club (p.244)
* In 2013 MUFC became the world's first sports club valued at over $3 billion.
* Match-day revenues are **less than 30%** of its total revenue (Forbes); other streams include broadcasting rights, sponsorship deals and global merchandise sales.
* 2015: 10-year shirt deal with Adidas worth around $108m a year. 2021: five-year shirt deal worth around $340m with German tech firm TeamViewer. Other sponsors: Commercial Bank of Qatar, Emirates NBD Bank and Pepsi.
* 2006: MUFC **rejected** a four-year deal worth over $100m from Mansion, an online gambling company, and instead signed a four-year deal with American International Group (AIG) worth $90.5m.`,
      keyTakeaways: [
        'Revenue streams are all the sources of money coming into a business, not only sales of goods and services.',
        'Key non-sales streams: advertising, transaction fees, franchise fees and royalties, sponsorship, subscriptions, dividends, merchandise, interest, donations and subventions.',
        'Low-cost airlines earn around 20% of revenue from alternative streams; Twitter earns over 80% from advertising.',
        'Revenue streams depend on the type of firm and its activities: donations suit charities; interest suits cash-rich firms.'
      ],
      examTips: [
        'Use specific named examples (Arsenal-Emirates, MUFC-TeamViewer, Ryanair fees) to apply revenue streams in 4- and 6-mark answers.',
        'Do not confuse dividends received (a revenue stream for the shareholding company) with dividends paid to the firm\'s own shareholders.'
      ]
    },
    {
      id: 'sec-3.3-key-concepts',
      title: '7. Costs, Revenues and the Key Concepts (Change, Creativity, Ethics)',
      content: `### Cost Control
* Being aware of costs allows managers to **control their finances**, especially during times of **change and uncertainty**.
* Cost control is crucial if a business is to **maintain and/or improve profitability**. Large businesses benefit from measuring the financial performance of each division.
* **However, cost-cutting does not automatically raise profitability**, but it can help keep costs under control.
* The focus on cost control depends on **organizational culture** (Chapters 11 and 54) and **management preferences** (Chapter 9).
* Cost-cutting can be justified if it leads to **improved and sustained efficiency and profitability**.

### Ethics
Ethical considerations arise if cost-cutting and cost control harm staff, e.g. **poorer working conditions, limited training and development opportunities, pay cuts or job losses**.

### Raising Revenue vs Cutting Costs
* Raising revenue is **just as important, if not more so**, than cost control.
* The **UK Institute of Management** suggests successful businesses focus **80%** of their strategy on raising revenues and only **20%** on cost-cutting.
* Forward-looking, **creative** businesses can afford to spend more money provided revenues and profits allow it. E.g. **Kering**, the French retail conglomerate, bought luxury brands **Gucci** and **Yves Saint Laurent** to earn more revenue - not to save costs.
* Some businesses use the **'FORCE' approach (Focus On Reducing Costs Everywhere)** to stay competitive - the textbook asks students to discuss the extent to which cost cutting is sustainable.

### Monitoring tools
Managers also use **cost and profit centres**, **budgets** and **variance analysis** (Chapter 22) to control business activity, and **contribution analysis** (Chapter 57, BM Toolkit) can help with better cost control.

| Approach | Benefits | Drawbacks |
| :--- | :--- | :--- |
| **Cost-cutting / cost control** (e.g. FORCE) | Keeps costs under control; can improve efficiency and profitability; important in times of change and uncertainty | Does not automatically raise profit; ethical issues (worse conditions, less training, pay cuts, job losses); limited by culture and management preferences |
| **Raising revenue** (e.g. new revenue streams, acquisitions like Kering) | Successful firms focus 80% of strategy here; creativity can open new streams | Requires spending, which must be supported by revenues and profits |`,
      keyTakeaways: [
        'Cost control helps maintain profitability, but cost-cutting does not automatically raise profit.',
        'Cost-cutting raises ethical issues when it harms staff (pay cuts, job losses, poorer conditions, less training).',
        'Successful businesses focus 80% of strategy on raising revenue and 20% on cost-cutting (UK Institute of Management).',
        'FORCE = Focus On Reducing Costs Everywhere.'
      ],
      examTips: [
        'For evaluation, weigh cost-cutting against revenue-raising and mention ethics and sustainability (e.g. is FORCE sustainable in the long run?).'
      ]
    }
  ],
  highYieldTerms: [
    { term: 'Cost', definition: 'The sum of money incurred by a business in the production process, such as the costs of raw materials, wages and salaries, insurance, advertising and rent.' },
    { term: 'Price', definition: 'The amount of money a product is sold for; the sum paid by the customer to purchase a good or service.' },
    { term: 'Set-up costs', definition: 'The items of expenditure needed to start a business, e.g. premises, machinery and equipment, and deposits paid to utilities companies.' },
    { term: 'Running costs', definition: 'The ongoing costs of operating the business, e.g. wages and salaries, insurance premiums and purchasing stocks.' },
    { term: 'Fixed costs', definition: 'Costs that do not vary with the level of output. They exist even if there is no output (e.g. rent, loan interest, management salaries).' },
    { term: 'Variable costs', definition: 'Costs of production that change in proportion to the level of output, such as raw materials and hourly wages of production workers.' },
    { term: 'Direct costs', definition: 'Costs specifically attributed to the production or sale of a particular good or service; they can be traced to a product or cost centre and can be fixed or variable.' },
    { term: 'Indirect costs (overheads)', definition: 'Costs that do not directly relate to the production or sale of a specific product, e.g. rent, lighting, administrative salaries and insurance.' },
    { term: 'Total costs (TC)', definition: 'The sum of all variable costs and all fixed costs of production: TC = TFC + TVC.' },
    { term: 'Average cost (AC)', definition: 'The cost per unit of output, calculated as AC = TC / Q, where TC is total cost and Q is quantity (output level).' },
    { term: 'Revenue', definition: 'The money that a business earns from the sale of goods and services, calculated by multiplying the unit price of each product by the quantity sold.' },
    { term: 'Total revenue (TR)', definition: 'The money coming into a business, usually from the sale of goods and/or services, calculated as price × quantity sold (TR = P × Q).' },
    { term: 'Average revenue (AR)', definition: 'The value of sales received from customers per unit of a good or service sold: AR = TR / Q = P.' },
    { term: 'Profit', definition: "Exists if there is a positive difference between a firm's total revenues and its total costs." },
    { term: 'Revenue stream', definition: 'The money coming into a business from its various business activities, such as sponsorship deals, merchandise and receipt of royalty payments.' },
    { term: 'Sales volume', definition: 'The quantity (number of units) of a product sold in a period of time.' },
    { term: 'Advertising revenue', definition: 'Revenue earned by selling advertising space, e.g. via cost per click or cost per thousand impressions (Google, Facebook, Twitter).' },
    { term: 'Cost per click', definition: 'An advertising charge where advertisers pay only when customers actually click on the advert.' },
    { term: 'Cost per thousand impressions', definition: 'An advertising charge based on the number of times an advert is displayed.' },
    { term: 'Transaction fees', definition: 'Charges for extras or payment methods, e.g. Ryanair card fees, or baggage and seat fees at AirAsia and easyJet.' },
    { term: 'Royalties', definition: 'Payments based on sales revenue made by franchisees to a franchisor, or to holders of patents and copyrights for the use of their inventions and creations.' },
    { term: 'Sponsorship', definition: "A form of below-the-line promotion whereby the sponsor financially supports an organization in return for prominent display of the sponsor's brand and exclusive advertising rights." },
    { term: 'Subscription fees', definition: 'Charges imposed on customers who use or access a good or service, based on a formal agreement (e.g. gym memberships, Netflix, Spotify).' },
    { term: 'Dividends', definition: 'A share of the net profits distributed to shareholders at the end of the tax year; a revenue stream for a business that owns shares in other companies.' },
    { term: 'Merchandise', definition: 'Goods sold in addition to admission charges, such as popcorn, beverages, souvenirs and memorabilia at cinemas, concerts and theme parks.' },
    { term: 'Interest earnings', definition: 'Interest earned on positive cash balances deposited at a commercial bank; important for cash-rich businesses.' },
    { term: 'Donations', definition: 'Financial gifts from individuals or other organizations to a business, relied on heavily by charities and non-profit organizations.' },
    { term: 'Subventions', definition: 'Subsidies offered by the government to certain businesses to help reduce their costs of production, e.g. for private schools, hospitals or R&D.' },
    { term: 'FORCE', definition: "'Focus On Reducing Costs Everywhere' - a cost-cutting strategy some businesses use to stay competitive." }
  ]
};
