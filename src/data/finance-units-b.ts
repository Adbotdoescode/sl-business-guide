import { StudyUnit } from '@/types/curriculum';

// Unit 3.3 and 3.4 guides. Formulas use the corrected profit-and-loss order
// (gross profit, then profit before interest and tax, then profit before tax).
// Every worked example below has been checked by hand.

export const FINANCE_UNITS_B: StudyUnit[] = [
  {
    id: '3.3-costs-and-revenues',
    title: 'Costs and Revenues',
    unitCode: 'Unit 3.3',
    subtitle: 'Fixed, variable, direct and indirect costs, average cost, revenue, profit and break-even',
    estimatedReadTime: '20 min read',
    description:
      'Classify costs, read cost graphs, calculate total and average cost, work out revenue and profit, and understand revenue streams, with the common "10% higher" and "margin is not profit" traps.',
    sections: [
      {
        id: 'sec-3.3-costs',
        title: '1. Costs: start-up and running',
        content: `**In one line:** a cost is money the business spends to produce and sell its goods or services. Costs are either **set-up costs** (paid to start the business) or **running costs** (paid repeatedly while it trades). (textbook p.237)

**Cost is not price.** Cost is what the business spends. Price is the sum the customer pays. In everyday speech a shirt "cost $25", but in business language the correct term is "the price is $25". Keep the two words apart in exam answers. (textbook pp.237-238)

**Set-up costs** are the items needed to start a business: suitable premises, machinery and equipment, and deposits paid to utility companies. **Running costs** are the ongoing costs of operating: wages and salaries, insurance premiums and the purchase of stock (inventories). (textbook p.237)

Table 16.1 in the textbook gives a clothes-retailer example. (textbook p.238)

**Set-up costs (Table 16.1):**
- Premises: down payment on a mortgage, or a rent deposit
- Buildings: maintenance or physical alterations
- Furniture, fixtures and fittings: changing rooms, signage, counters, shelving
- Capital equipment: cash registers, telephones, computers, printers, office stationery
- Connection and installation of utilities and power
- Legal and professional fees, including business registration and licensing
- Initial stock of supplies (inventories)
- Recruitment costs of hiring, training and inducting new staff

**Running costs (Table 16.1):**
- Regular mortgage, rent or lease payments
- Packaging materials, such as gift boxes, gift tags and wrapping paper
- Repairs and maintenance on buildings, furniture, fixtures and fittings
- Depreciation on capital equipment, and replacement costs for obsolete (outdated or broken) equipment
- Payment of utilities and insurance premiums
- Marketing costs, such as in-store promotions and advertising
- Replenishing stocks from suppliers
- Wages, salaries and other staffing costs, including uniforms

Note that the same asset can appear in both lists. Buying capital equipment is a set-up cost, but the depreciation on it is a running cost. (textbook p.238)

![Twelve items for a clothing shop, each to be classified as start-up or running: rental deposit, packaging, fixtures and fittings, utility bills, initial stock, wages, renovation, repairs, connecting utilities, marketing, legal fees, and replenishing stock.](/study-images/finance/3.3-start-up-vs-running-costs-list.png "Teacher deck exercise: start-up costs are one-off; running costs repeat.")

Teacher deck answer for its 12-item list. Start-up: rental deposit, fixtures and fittings, initial stock, renovation, connecting utilities, legal fees. Running: packaging, utility bills, wages, repairs, marketing, replenishing stock.

> **Watch out:** the deck's memory trick ("even numbers are running, odd numbers are start-up") works only for its own 12-item list. Learn the principle instead: a one-off cost to set up, or a cost that repeats while the business trades.`,
        keyTakeaways: [
          'Cost is what the business spends; price is what the customer pays.',
          'Set-up costs are one-off items to start trading; running costs repeat while the business trades.',
        ],
        examTips: [
          'Do not rely on list-specific tricks. Explain why an item is set-up or running: one-off, or repeated day-to-day.',
        ],
      },
      {
        id: 'sec-3.3-fixed-variable',
        title: '2. Fixed, variable and total costs',
        content: `### Fixed costs (TFC)

**Fixed costs** are the costs of production that a business has to pay regardless of how much it produces or sells. They have to be paid even if there is no output. (textbook p.238)

Examples in the textbook: rent on leased premises, interest payments on bank loans, advertising expenditure, market research, management salaries, office stationery, security and professional accountancy fees. (textbook p.238)

Fixed costs can still change. A landlord may raise rent because property prices have risen, or directors may be paid more because living costs have risen. Fixed costs then increase, but not because output has increased. (textbook p.238)

On a graph, total fixed cost (TFC) is a flat horizontal line. The textbook's Figure 16.1 shows TFC of $5,000. (textbook p.238)

![Graph of costs against output with total fixed cost drawn as a flat horizontal line at 5,000.](/study-images/finance/3.3-fixed-cost-graph.png "Fixed costs stay flat as output rises.")

### Variable costs (TVC)

**Variable costs** are the costs of production that change in proportion with the level of output or sales. As output rises, TVC rises. In the textbook's idealised case, doubling output would double variable costs. In theory, if there is no production, variable costs are zero. (textbook p.238)

Examples in the textbook: raw materials (a textiles firm making more curtains), sales commission, hourly wages of production workers, and packaging costs directly linked to output. (textbook pp.238-239)

On a graph, TVC starts at the origin. The straight line in the textbook's Figure 16.2 is an idealised, proportional case. (textbook p.239)

![Graph of costs against output with total variable cost rising in a straight line from the origin.](/study-images/finance/3.3-variable-cost-graph.png "Variable costs start at zero and rise with output.")

### Total cost (TC)

$$ TC = TFC + TVC $$

Total cost starts at the level of fixed cost, because fixed costs are paid even at zero output. The vertical gap between the TC line and the TVC line equals TFC at every level of output. (textbook p.239, Figure 16.3)

![Graph showing total cost above total variable cost, with the gap between them equal to total fixed cost.](/study-images/finance/3.3-total-cost-graph.png "Total cost = fixed cost + variable cost.")

**Worked example (Kompothekra, teacher data):** at 300 units, TFC is 20,000 and TVC is 14,500, so TC = 20,000 + 14,500 = **34,500**. This matches the figure in textbook Question 16.2 (p.241).

> **Watch out:** the textbook warns against "circular answers". Saying "fixed costs are costs that are fixed" does not define anything. Define each term in your own words, with the reason it is fixed or variable. (textbook p.239)

> **Simplification:** the diagrams draw variable cost as a straight line. Real data often bends, as the Kompothekra table in section 4 shows. Use the real numbers when a question gives them.`,
        keyTakeaways: [
          'Fixed costs stay flat as output changes; variable costs start at zero and rise with output.',
          'Total cost = total fixed cost + total variable cost. The TC line sits above TVC by exactly the TFC amount.',
        ],
        examTips: [
          'When asked to plot costs, draw TFC as flat, TVC from the origin, and TC above TVC by the TFC gap.',
        ],
      },
      {
        id: 'sec-3.3-direct-indirect',
        title: '3. Direct and indirect costs',
        content: `**Direct costs** are specifically related to an individual project, or to the output of a particular product. You would not incur them without that project or product. They can include variable costs such as raw materials, but they are not necessarily related to the level of output: a direct cost can be fixed. Direct costs can be traced back to a product and/or a specific cost centre. (textbook p.239)

The textbook's example is the purchase of a commercial building. Consultancy costs, solicitor's fees, telephone bills, postage, photocopying and bank charges are direct costs of that purchase, and none of them is variable. (textbook p.239)

**Indirect costs (overheads)** cannot be clearly traced to the production or sale of any single product. Rent and lighting relate to all areas of a business. Other generic overheads include advertising, legal expenses, administrative salaries, insurance premiums, security, office stationery, shipping and postage, utility bills and accounting fees. Indirect costs can be fixed, but unlike fixed costs they are not easily linked to one business activity. (textbook p.239)

> **Important:** direct does not mean variable, and indirect does not mean fixed. Whether a cost is direct or indirect depends on the **cost object**, which is what you are costing: one cup of coffee, one flight, one outlet, one project. The output driver and the period also matter.

**Airline example (textbook p.239):** catering on a mainstream airline, such as Singapore Airlines, is variable, because more passengers means more food and drink. For a no-frills budget airline, such as Ryanair, easyJet or AirAsia, the same catering is treated as direct, because it is directly tied to the flight even though passengers buy it individually. The cost is the same; the classification depends on the business model. (textbook p.239) The same logic applies elsewhere: airport fees can be charged per passenger or per flight, and salaries can be fixed costs that are still traceable to one flight (teacher conventions).

**Exam tip from the textbook (p.240):** "direct" and "indirect" are used for businesses that run cost centres and profit centres (multi-product firms). "Fixed" and "variable" are used in break-even analysis for a business that makes a single product. Choose the pair that fits the question.

### Coffee-house classification (teacher deck)

The deck classifies costs for a coffee house. The table below keeps the deck's answers, with the cost-object caveat added.

| Cost | Fixed or variable | Direct or indirect | Note |
| --- | --- | --- | --- |
| Rent for premises | Fixed | Direct (deck answer) | Direct only if the cost object is the outlet or project. For one cup of coffee, rent is indirect. |
| Advertising | Fixed | Indirect | |
| Wages for baristas | Variable | Direct | |
| Legal expenses | Fixed | Indirect | |
| Utilities | Variable | Direct (deck answer) | Textbook lists utility bills as overheads (p.239). See the note below. |
| Salaries for administrative staff | Fixed | Indirect | Examples: finance manager, marketing manager |
| Raw materials | Variable | Direct | Examples: coffee beans, milk, paper cups |
| Insurance | Fixed | Indirect | |

> **Confirm in class:** the deck classifies **rent for premises as direct**. Rent is normally indirect to a cup of coffee, and is direct only when the cost object is the outlet or project (the whole coffee-house location). Use the outlet or project cost object if you need the deck's answer, and confirm the expected test convention with your teacher. The disputed classification is not part of the memory sheet.

> **Confirm in class (utilities):** the deck answer treats utilities as direct for the coffee house, but the textbook lists utility bills among indirect overheads (p.239). Both answers depend on the cost object. Say what you are costing, justify your choice, and check the expected answer with your teacher.

The textbook's Question 16.1 (p.240) asks you to classify airline costs as fixed or variable, and to distinguish direct from indirect costs in the airline industry. No answer key is given in this guide. Apply the cost-object reasoning above.`,
        keyTakeaways: [
          'Direct and indirect describe traceability to a cost object; fixed and variable describe how cost behaves as output changes.',
          'Classification depends on the cost object, so always state what you are costing.',
        ],
        examTips: [
          'Common trap: writing "direct = variable". Justify your classification with the cost object and the period.',
          'Use "direct and indirect" for multi-product firms with cost centres, and "fixed and variable" for single-product break-even questions.',
        ],
      },
      {
        id: 'sec-3.3-average-cost',
        title: '4. Average cost: cost per unit',
        content: `**In one line:** average cost (AC) is the cost of each unit of output on average. (textbook p.247)

$$ AC = TC / Q $$

Q is the quantity of output. AC is undefined at Q = 0: nothing has been made, so there is nothing to divide by. (textbook p.247, teacher conventions)

### Kompothekra Glass Technologies

Textbook Question 16.2 (p.241) asks you to complete a cost table for a glass-ornament factory and then plot and explain the TFC, TVC and TC curves. The full completed table below is the teacher's version.

| Output (units) | Total fixed cost | Total variable cost | Total cost | Average cost |
| --- | --- | --- | --- | --- |
| 0 | 20,000 | 0 | 20,000 | undefined |
| 100 | 20,000 | 5,000 | 25,000 | 250 |
| 200 | 20,000 | 10,000 | 30,000 | 150 |
| 300 | 20,000 | 14,500 | 34,500 | 115 |
| 400 | 20,000 | 18,000 | 38,000 | 95 |
| 500 | 20,000 | 25,000 | 45,000 | 90 |
| 600 | 20,000 | 38,200 | 58,200 | 97 |

Variable cost per unit is not constant in this data, so keep the actual figures rather than forcing a straight line.

### Why average cost falls, then rises

Average cost is the sum of two per-unit amounts: fixed cost per unit (TFC / Q) plus variable cost per unit (TVC / Q). The table gives:

| Output | Fixed cost per unit | Variable cost per unit | AC |
| --- | --- | --- | --- |
| 100 | 200 | 50 | 250 |
| 200 | 100 | 50 | 150 |
| 300 | 66.67 | 48.33 | 115 |
| 400 | 50 | 45 | 95 |
| 500 | 40 | 50 | 90 |
| 600 | 33.33 | 63.67 | 97 |

*(Per-unit figures are calculated from the table above.)*

- **Early on, AC falls.** The 20,000 of fixed cost is spread over more units, so the fixed cost per unit keeps shrinking. (The variable cost per unit is roughly flat or slightly lower over this range.)
- **Later, AC rises.** Between 500 and 600 units, total variable cost rises by 13,200, against 7,000 in the previous 100 units. Variable cost per unit jumps from 50 to about 64, which is more than the falling fixed share can offset.

This gives the "U-shape" of average cost. The textbook's Question 16.2(c) asks you to explain the shape of all three curves: TFC is flat because it does not depend on output, TVC rises with output but not in a straight line in this data, and TC runs parallel to TVC, 20,000 above it at every level. (textbook p.241)

### Worked check

The average cost at 200 units is TC / Q = 30,000 / 200 = **150 per unit**.`,
        keyTakeaways: [
          'AC = TC / Q, and it is undefined at zero output.',
          'Average cost = fixed cost per unit + variable cost per unit. It falls while fixed costs are spread, then rises when variable costs per unit grow.',
        ],
        examTips: [
          'Use the real figures to explain the shape of the average-cost curve, not just the formula.',
        ],
      },
      {
        id: 'sec-3.3-revenue-profit',
        title: '5. Revenue, average revenue and profit',
        content: `### Total revenue (TR)

**Revenue** is the money coming into a business, usually from selling goods or services. It is also called sales revenue or total revenue. (textbook p.241)

$$ TR = P x Q $$

Total revenue is price multiplied by quantity sold. Textbook example: Church's, the English shoemaker, charges $300 on average for each pair of its bespoke shoes and sells 3,000 pairs in a week, so its total sales revenue of $300 x 3,000 = **$900,000** for that week. (textbook p.241)

For several products, add up price times quantity for each product. The teacher deck's order has three items priced in HKD: two tea towels at HK$145 and an apron at HK$255. Total sales revenue = (145 x 1) + (255 x 1) + (145 x 1) = **HK$545**. Keep the source currency. (teacher deck)

![Order table with three items priced in HKD: two tea towels at 145 each and an apron at 255, with the total of 545 HKD.](/study-images/finance/3.3-sales-revenue-calculation-table.png "Sales revenue for several products is the sum of price x quantity for each one.")

### Average revenue (AR)

$$ AR = TR / Q $$

Average revenue is the value of sales received per unit sold. Since P = TR / Q, average revenue equals the price: AR = P. AR is undefined at Q = 0, as AC is. (textbook p.242, Box 16.2; textbook p.247)

If every unit sells at the same price, AR equals that price. With several prices, AR is a weighted average, not one price. The textbook notes that these revenue formulae are not given to candidates in the examination, so learn them.

### Profit

A business earns profit when there is a positive difference between its total revenue and its total costs. (textbook p.247)

$$ Profit = TR - TC $$

If TR is less than TC, the difference is negative and the business makes a loss. Profit is the financial surplus after all costs, including expenses, have been paid. (teacher key-terms list)

> **Watch out:** a margin is not profit. A margin is the surplus on a single product before the other costs of the business are deducted. Section 6 shows the tomato example.

> **Watch out:** the old "10% higher" trap. To find the earlier figure from a later figure that is 10% higher, divide by 1.10. Do not subtract 10%. Section 6 works through the Big Bao case.`,
        keyTakeaways: [
          'TR = P x Q; for several products, add up price times quantity for each product.',
          'AR = TR / Q, which equals the price when every unit sells at one price.',
          'Profit = TR - TC. A margin on one product before other costs is not profit.',
        ],
        examTips: [
          'When a question says "10% higher", divide the new figure by 1.10 to find the original.',
          'The revenue formulae are not given in the exam. Know TR = P x Q, AR = TR / Q and Profit = TR - TC.',
        ],
      },
      {
        id: 'sec-3.3-worked-examples',
        title: '6. Worked examples: textbook and deck cases',
        content: `These worked examples use the textbook's own cases (Questions 16.3 and 16.4) and the deck's numbers. They show the method. They are not model answers to the exam wording.

### Big Bao: finding last year's revenue (textbook Question 16.3, p.242)

Big Bao sold 31,790 lunchtime meals in 2021. Sales volume is the number of units sold in a period (general definition). The 2021 figure was 10% higher than in 2020, when the average price was $6.50.

- Correct: 2020 quantity = 31,790 / 1.10 = **28,900 meals**
- Wrong: 31,790 x 0.90 = 28,611. This takes 10% off the larger number, so it is the wrong base.
- 2020 sales revenue = 28,900 x 6.50 = **$187,850**

### Goff's tomatoes: a margin is not profit (textbook Question 16.4(c), p.243)

Ian Goff buys 50 kg of tomatoes at $0.80 per kg and sells them at $1.20 per kg.

- Cost of tomatoes = 50 x 0.80 = **$40**
- Revenue from tomatoes = 50 x 1.20 = **$60**
- Surplus on tomatoes = 60 - 40 = **$20**

This $20 is a surplus before other costs. The source loosely calls it profit. It is not whole-business profit. Goff also pays $1,200 rent each month, the loan on his vehicle, staff during peak seasons, power and lighting. Whole-business profit must deduct those period costs as well, and the data here do not allow that calculation. Deducting only the $1,200 monthly rent gives 20 - 1,200 = -$1,180, a loss. The other period costs have no figures in the source, so the whole-business result is at most this loss.

### Goff's apples: revenue from two price groups (textbook Question 16.4(d), p.243)

Goff bought 100 kg of apples. He sold 80 kg at the usual price of $2 per kg, then cut the price of the remaining 20 kg to $1.50 per kg to clear the stock.

- 80 kg x $2.00 = $160
- 20 kg x $1.50 = $30
- Total revenue from apples = **$190**

This assumes all 100 kg were sold across the two price groups. (teacher deck)

### Two prices, one average

For a product sold at two prices, total revenue is the sum of each price times quantity. Average revenue is then total revenue divided by total quantity. In the apples example, AR = 190 / 100 = $1.90 per kg. It is not $2 or $1.50, because AR is a weighted average. (illustrative; follows from AR = TR / Q)`,
        keyTakeaways: [
          'The "10% higher" question is solved by dividing by 1.10, not by taking 10% off.',
          'A surplus on one product is a margin before other costs. Whole-business profit deducts every cost in the period.',
        ],
        examTips: [
          'When a question gives the tomato-style figures, state clearly whether your answer is before or after the other costs.',
        ],
      },
      {
        id: 'sec-3.3-streams',
        title: '7. Revenue streams',
        content: `**In one line:** a revenue stream is one way a business earns money. Revenue does not come only from selling goods and services. (textbook p.243)

The textbook calls these sources **revenue streams**, which can be sales revenue (from selling goods or services) or non-sales revenue. Additional or alternative non-sales sources are listed below. (textbook pp.243-245)

- **Advertising revenue.** Google, Twitter and Facebook depend on it. Google and Facebook charge either cost per click (advertisers pay only when a customer clicks) or cost per thousand impressions (advertisers pay for each thousand times the advert is shown). The textbook says more than 80% of Twitter's revenue comes from text and display advertising. (textbook p.243)
- **Transaction fees.** Ryanair charges customers who pay with an American Express card a fee of €7 ($9.5) and a 2% commission. Budget airlines charge for checked baggage, pre-assigned seats, excess baggage and onboard retailing. The Wall Street Journal, cited in the textbook, reports that low-cost airlines earn around 20% of revenue from alternative streams. (textbook p.243)
- **Franchise costs and royalties.** A franchisee (for example, a McDonald's, Burger King or KFC outlet) pays a fee to the franchisor for the right to use its brand, logos and trademarks, and also pays a royalty based on sales revenue. Royalties are also received by the holders of patents and copyrights. The IB earns royalties from textbooks printed by the publishers it endorses. (textbook pp.243-244)
- **Sponsorship.** Sponsorship is a form of below-the-line promotion (see Chapter 29). The sponsor financially supports an organisation in return for prominent display of its brand and exclusive advertising rights. Section 8 covers the examples. (textbook p.244)
- **Subscription fees.** Charges on customers who use or access a good or service under a formal agreement. Examples: fitness-club and credit-card annual fees, telephone service fees and streaming services such as Netflix and Spotify. (textbook p.245)
- **Merchandise.** Entertainment businesses such as cinemas, concerts, theatres and theme parks sell souvenirs and food alongside admission. (textbook p.245) The deck's application: a theme park such as Disneyland earns sales revenue from tickets, and additional revenue from food, drinks and branded merchandise (teacher deck).
- **Dividends.** A company that holds shares in other companies is entitled to dividends declared on them. A dividend is a share of net profit paid to shareholders at the end of the tax year. Volkswagen holds shares in Porsche, Suzuki and Scania, for example. (textbook p.245)
- **Donations.** Financial gifts from individuals or organisations, relied on heavily by charities, schools, hospitals and universities. Donors usually get no direct benefit, although some donations carry conditions such as acknowledgement of the donor's name. Donations are not a common revenue source for most private-sector businesses. (textbook p.245)
- **Subventions.** Government subsidies that help certain businesses reduce production costs, usually organisations that generate benefits for society, such as private schools and hospitals, or research and development. The textbook counts them as non-sales revenue. (textbook p.245)
- **Interest earnings.** A business with a positive cash balance can earn interest on deposits at a commercial bank. For very cash-rich businesses this can be an important revenue stream. Figure 16.4 in the textbook uses Apple's cash balance as the example. Historical figures cited in the textbook (2021): Pfizer $12.2bn, Apple $63bn, Microsoft $130bn, Google $137bn. Depositing $1bn at 1% a year yields $27,397 per day. (textbook p.245)

**IB examples (textbook p.243):** annual fee charged to all IB World Schools; authorisation and evaluation fees; donations; examination fees; IB Global and Regional Conferences; royalties from publications; and workshops (training events for teachers).

### Rules to apply

- Merchandise, food and drink sales are **sales revenue**, even when they are extra to the main activity. (teacher conventions)
- **Loan proceeds and new share issues are finance, not revenue.** They bring in cash, but they do not come from trading. (teacher conventions)
- **Dividends received** from investments in other companies are income for the investor. **Dividends paid** to your own shareholders are a distribution of profit. (teacher conventions)

**Key concept (textbook p.245):** what role does creativity have in developing the revenue streams of businesses? Discuss with a named business.`,
        keyTakeaways: [
          'Revenue comes from trading; loans and new share issues are finance, not revenue.',
          'A revenue stream can be a sale, a fee, a royalty, a sponsorship, an interest earning or a subsidy. Explain which one applies.',
        ],
        examTips: [
          'For "examine a revenue stream" questions, link the stream to the business in the case and to a benefit or a risk for it.',
          'Define revenue streams in your own words: money coming into a business from its various activities, not only from sales.',
        ],
      },
      {
        id: 'sec-3.3-sponsorship-mufc',
        title: '8. Sponsorship and the Manchester United case (historical)',
        content: `**In one line:** sponsorship pays a business to display its brand prominently. The textbook uses football clubs to show how large sponsorship deals can be. All figures in this section are **historical**, as the textbook cites them, and are not current facts. (textbook pp.244-245)

### Table 16.2: shirt sponsorship deals (textbook p.244)

The textbook reproduces a table from Statista (2021) of the most valuable football-club shirt sponsorship deals. The values are in £ million, not dollars.

| Football club | Shirt sponsor | £ million |
| --- | --- | --- |
| Real Madrid | Emirates | 413 |
| Tottenham Hotspurs | AIA | 400 |
| Manchester United | TeamViewer | 325 |
| FC Barcelona | Rakuten | 324 |
| Bayern Munich | Deutsche Telekom | 283 |
| Arsenal FC | Emirates | 280 |
| Liverpool FC | Standard Chartered | 221 |
| Paris Saint-Germain | Accor | 171 |
| Chelsea FC | Three | 166 |
| Juventus | Jeep | 159 |

### Manchester United Football Club (textbook Question 16.5, p.244)

- In 2013 MUFC became the first sports club valued at over $3 billion. Forbes data shows match-day revenues are less than 30% of its total revenue streams. The other streams include broadcasting rights, sponsorship deals and merchandise sales. (textbook p.244)
- 2015: a 10-year shirt sponsorship deal with Adidas, worth around $108m a year. (textbook p.244)
- 2021: a five-year shirt sponsorship deal with TeamViewer, worth around $340m. (textbook p.244)
- Other sponsors: Commercial Bank of Qatar, Emirates NBD Bank and Pepsi. (textbook p.244)
- 2006: MUFC rejected a four-year sponsorship offer worth over $100m from Mansion, an online gambling company. It signed a four-year deal with American International Group (AIG) worth $90.5m. The difference is more than $9.5m. (textbook p.244; teacher conventions)

**Why a business sponsors a big club (textbook Question 16.5(b), p.244):** the sponsor gains prominent brand display and exclusive advertising rights, so its brand is seen by the club's large and widely supported audience. Use this reasoning for businesses such as Adidas or Pepsi.

**The judgement question (textbook Question 16.5(c), p.244):** the textbook asks whether the MUFC management team was right to choose the smaller AIG offer over the larger Mansion offer. Weigh the money against other factors, such as brand fit, risk and reputation. No answer key is given here.

Creativity in building revenue streams is covered in section 10 (the Kering example).`,
        keyTakeaways: [
          'Sponsorship gives a sponsor brand exposure and advertising rights in return for money.',
          'A larger sponsorship offer is not automatically the better choice. Judge it against the business\'s goals and risks.',
        ],
        examTips: [
          'Keep the currencies apart: Table 16.2 is in £ million, and the MUFC deals are in dollars.',
          'For a judgement question, make both sides of the decision explicit and reach a conclusion.',
        ],
      },
      {
        id: 'sec-3.3-break-even',
        title: '9. Break-even: where revenue meets cost',
        content: `**In one line:** **break-even** is the level of output at which total revenue equals total cost, so profit is zero. (teacher key-terms list)

The textbook covers the full break-even analysis in Chapter 39. In this chapter it appears only as a cross-reference (p.240). The core idea is the same as the profit definition in section 5.

$$ Profit = TR - TC $$

- **Break-even point (BEP):** the output where the TR and TC lines cross. Revenue just covers costs. (teacher key-terms list)
- **Below break-even:** TC is above TR, so profit is negative (a loss). (derived from the profit formula)
- **Above break-even:** TR is above TC, so profit is positive. (derived from the profit formula)

Break-even quantity (BEQ), from the teacher key-terms list: BEQ = Fixed costs / (Price - Average variable cost). The full method and worked examples are in Chapter 39 of the textbook, which is not in these pages.

![Graph showing total revenue, total cost, total variable cost and total fixed cost. Total revenue crosses total cost at the break-even point.](/study-images/finance/3.3-total-revenue-and-cost-graph-break-even.png "Break-even is where total revenue crosses total cost.")

The break-even diagram uses straight lines as a simplification. With real data, such as the Kompothekra table in section 4, read the crossing point from the actual TR and TC figures.

> **Remember:** fixed and variable costs are the terms used in break-even analysis for a single product. Direct and indirect costs are used for businesses with several products and cost centres. (textbook p.240)`,
        keyTakeaways: [
          'Break-even is where TR = TC, so profit is zero. It is the crossing point on the graph.',
          'Left of break-even is a loss, and right of it is a profit, because profit = TR - TC.',
        ],
        examTips: [
          'When a question asks about break-even, state the crossing point on the graph and explain what happens on either side of it.',
        ],
      },
      {
        id: 'sec-3.3-cost-control-change',
        title: '10. Cost control, revenue and sustainability',
        content: `**In one line:** cost control keeps costs under control, but raising revenue is at least as important. (textbook p.245)

### Why cost control matters

- Managers need to know their costs to stay in control of finances, especially during change and uncertainty. (textbook p.245)
- Cost control is crucial to maintaining or improving profitability. Large businesses measure the financial performance of each division. (textbook p.245)
- **Cost-cutting does not automatically raise profitability.** It can help keep costs under control. It is justified when it leads to improved and sustained efficiency. (textbook p.245)
- **Ethics:** cost-cutting becomes an ethical concern when it harms staff through poorer working conditions, limited training, pay cuts or job losses. (textbook p.246)

### Why revenue matters just as much

- The UK Institute of Management, cited in the textbook, suggests successful businesses focus 80% of their strategy on raising revenues and only 20% on cost-cutting. (textbook p.246)
- Creative, forward-looking businesses can spend more when revenues and profits allow it. The textbook's example is the French luxury group Kering, which bought Gucci and Yves Saint Laurent to earn more revenue, not to save costs. (textbook p.246)
- A business's culture and its management's preferences shape how much it focuses on cost control. (textbook p.245)

The textbook's management tools for controlling costs and revenue include cost and profit centres, budgets and variance analysis (Chapter 22), and contribution analysis (Chapter 57). (textbook p.246)

**FORCE approach (textbook p.246):** some businesses use Focus On Reducing Costs Everywhere as a competitive strategy. This is one option, not the only one.

### Change: revenue focus or cost control?

The teacher deck sets out the choice:

- **Opportunities:** maximising revenue is the priority. Cost control is less critical to survival.
- **Threats:** cost control matters more, because it is difficult to generate revenue.

Every business aims to maximise revenue and reduce costs. Times of change decide which strategy financial managers should pursue for a sustainable future. (teacher deck)

- **Revenue focus (deck example, historical):** Fortescue Future Industries (FFI) is a green energy company whose mission is to produce zero-carbon fuel. It invests in projects that fit that mission and maximise its revenues.
- **Cost control (deck example, historical):** Cathay Pacific was severely affected by the COVID-19 pandemic. It undertook drastic cost control to adapt and to ensure its survival.

Neither approach is always right. The choice depends on the situation, and you should justify it.

**Business Management Toolkit (textbook p.246):** discuss how knowledge and application of contribution analysis (Chapter 57) can help businesses to have better cost control.

**Theory of knowledge (teacher deck; extension, not assessed):** discuss the view that there is no role for memory or intuition in knowing about a firm's costs and revenues.`,
        keyTakeaways: [
          'Cost-cutting does not automatically raise profit; it must lead to sustained efficiency and must not harm staff.',
          'Successful businesses usually put more weight on raising revenue, but the balance depends on the situation.',
        ],
        examTips: [
          'Justify a cost-control or revenue-focus strategy with the situation: an opportunity, a threat, and what it will do to profit.',
        ],
      },
      {
        id: 'sec-3.3-steeple',
        title: '11. External change: STEEPLE',
        content: `### STEEPLE: external factors

STEEPLE is a checklist for the external environment that affects a business. It comes from the Business Management Toolkit in the teacher deck, not from the textbook pages. (teacher deck)

- **S**ocial
- **T**echnological
- **E**conomic
- **E**nvironmental
- **P**olitical
- **L**egal
- **E**thical

Use STEEPLE to list the external factors that change revenue or costs. The deck's Business Management Toolkit case: in 2022, more and more bakeries in the Philippines reduced the size of their pandesal (breakfast rolls) because costs were rising. The deck gives rising costs as the reason, so the pressure is an economic one in the usual sense. (teacher deck)

> **Confirm in class:** the deck's speaker notes classify a pandemic-driven fall in spending as **environmental** in STEEPLE. The usual mechanism is social, health or economic, because the effect is on spending. Environmental normally means ecological influences. Do not treat the environmental classification as settled. Confirm the expected category with your teacher. The disputed classification is not part of the memory sheet.

### Check the link to a business effect

Each STEEPLE factor you name should link to a specific effect on revenue or costs. For example, a new tax on ingredients (political, illustrative) raises costs, and a fall in consumer spending (social or economic, illustrative) reduces revenue.`,
        keyTakeaways: [
          'STEEPLE lists external factors the business does not control; use it to find the causes of change.',
          'Link each STEEPLE factor to a specific effect on revenue or costs.',
        ],
        examTips: [
          'Name the STEEPLE category and say what it does to revenue or costs. Do not just list the factor.',
        ],
      },
    ],
    highYieldTerms: [
      { term: 'Cost', definition: 'The money a business spends to produce and sell its goods or services. Cost is paid by the producer; price is paid by the customer.' },
      { term: 'Price', definition: 'The amount of money a product is sold for. It is the sum the customer pays.' },
      { term: 'Set-up costs', definition: 'One-off items of expenditure needed to start a business, such as premises, machinery, initial stock and legal fees.' },
      { term: 'Running costs', definition: 'The ongoing costs of operating a business while it trades, such as wages, utility bills, insurance and replenishing stock.' },
      { term: 'Fixed costs (TFC)', definition: 'Costs of production that do not change with the level of output and must be paid even at zero output, such as rent and management salaries.' },
      { term: 'Variable costs (TVC)', definition: 'Costs of production that change in proportion with the level of output, such as raw materials, sales commission and hourly production wages.' },
      { term: 'Total cost (TC)', definition: 'The sum of all fixed and all variable costs of production: TC = TFC + TVC.' },
      { term: 'Average cost (AC)', definition: 'The cost per unit of output: AC = TC / Q. Undefined at zero output.' },
      { term: 'Direct costs', definition: 'Costs specifically attributed to the production or sale of a particular product, service or project. Can be traced to a cost object; not necessarily variable.' },
      { term: 'Indirect costs (overheads)', definition: 'Costs that cannot be clearly traced to the production or sale of a single product, such as insurance, administrative salaries and advertising.' },
      { term: 'Cost object', definition: 'What is being costed, such as one cup of coffee, one flight, one outlet or one project. Direct and indirect classifications depend on it.' },
      { term: 'Cost centre / profit centre', definition: 'A section of a business responsible for its own costs (cost centre), or for both its costs and revenues (profit centre). Chapter 22.' },
      { term: 'Revenue', definition: 'The money a business earns from selling goods and services: the unit price of each product times the quantity sold.' },
      { term: 'Total revenue (TR)', definition: 'Money coming into a business, usually from selling goods or services: TR = P x Q.' },
      { term: 'Average revenue (AR)', definition: 'Revenue per unit sold: AR = TR / Q, which equals the price when all units sell at one price.' },
      { term: 'Profit', definition: 'The positive difference between total revenue and total costs: Profit = TR - TC. A negative difference is a loss.' },
      { term: 'Margin', definition: 'The surplus on a product before other costs are deducted. A margin is not the same as profit.' },
      { term: 'Sales volume', definition: 'The number of units sold in a period. (General definition; the textbook asks students to outline it in Question 16.3.)' },
      { term: 'Break-even point (BEP)', definition: 'The output at which total revenue equals total cost, shown where the TR and TC lines cross. Profit is zero.' },
      { term: 'Break-even quantity (BEQ)', definition: 'The sales volume needed to break even: BEQ = Fixed costs / (Price - Average variable cost). Full analysis is in Chapter 39.' },
      { term: 'Revenue stream', definition: 'One of the different sources of money coming into a business from its activities, such as sponsorship, merchandise, royalties or interest earned.' },
      { term: 'Advertising revenue', definition: 'Income earned from advertisers, for example on a cost-per-click or cost-per-thousand-impressions basis.' },
      { term: 'Transaction fee', definition: 'A charge levied on a customer for a payment or service, such as a card-payment fee or a fee for checked baggage.' },
      { term: 'Franchise fee and royalty', definition: 'A franchisee pays a fee to use a brand, and a royalty based on sales revenue. A royalty is also received from the use of patents and copyrights.' },
      { term: 'Sponsorship', definition: 'Financial support from a sponsor in return for prominent display of its brand and exclusive advertising rights. A form of below-the-line promotion.' },
      { term: 'Subscription fee', definition: 'A charge on customers who use or access a good or service under a formal agreement, such as an annual membership.' },
      { term: 'Merchandise', definition: 'Goods sold alongside a main service or activity, such as souvenirs at a theme park. Counted as sales revenue.' },
      { term: 'Dividends', definition: 'Payments of a share of net profit to shareholders. Dividends received are a revenue stream for the investor; dividends paid are a distribution to the business\'s own shareholders.' },
      { term: 'Donations', definition: 'Financial gifts from individuals or organisations, usually with no direct benefit to the donor.' },
      { term: 'Subvention', definition: 'A government subsidy to help a business reduce its costs of production, usually for organisations that generate social benefits or fund research.' },
      { term: 'Interest earnings', definition: 'Interest earned on a business\'s cash deposits at a commercial bank.' },
      { term: 'Cost control', definition: 'Managing costs so that they stay under control. Cost control alone does not automatically raise profitability.' },
      { term: 'FORCE approach', definition: 'Focus On Reducing Costs Everywhere: a competitive strategy that centres on cutting costs.' },
      { term: 'STEEPLE', definition: 'A checklist of external factors: Social, Technological, Economic, Environmental, Political, Legal and Ethical.' },
    ],
  },

  {
    id: '3.4-final-accounts',
    title: 'Final Accounts & Circular Business Models',
    unitCode: 'Unit 3.4',
    subtitle: 'The profit and loss account, the balance sheet, intangible assets, ethics and (HL) depreciation',
    estimatedReadTime: '25 min read',
    description:
      'Build a profit and loss account step by step, read a balance sheet as a snapshot, and understand intangible assets, ethics, circular business models and (for HL) depreciation.',
    sections: [
      {
        id: 'sec-3.4-purpose',
        title: '1. Why final accounts exist',
        content: `**In one line:** final accounts are the summary financial statements a business produces at the end of each accounting period. They show what the business earned and what it owns and owes.

They have two parts (textbook p.249):

1. **Profit and loss account** (statement of profit or loss): the revenues and costs over a period, usually one year. It answers: did the business make money?
2. **Balance sheet** (statement of financial position): the assets, liabilities and owners' equity at one point in time. It answers: what does the business own and owe today?

Final accounts support financial control and planning. In most countries, companies must produce them, and they must usually be audited by independent chartered accountants who certify that they are accurate and truthful (textbook p.249). There is no single universal format, so reporting has some flexibility, but it must follow the rules and regulations of the country (textbook p.250).

### Who reads them, and why

| Stakeholder | Internal or external (teacher deck) | What they want to know (textbook p.250) |
| --- | --- | --- |
| Shareholders | Internal | Where their money was spent and the return on their investment; whether to hold, sell or buy shares |
| Employees | Internal | The likelihood of pay rises and the degree of job security |
| Managers | Internal | Operational efficiency; target setting and strategic planning |
| Competitors | External | How their financial performance compares with rivals |
| Government | External | Whether the correct tax is paid on corporate profits |
| Financiers (banks, business angels) | External | Whether the business can repay debt; they scrutinise accounts before approving funds |
| Suppliers | External | Whether to offer trade credit, which depends on the firm being financially stable |
| Potential investors | External | Whether an investment would be financially worthwhile (profitability, gearing and liquidity) |

Internal stakeholders use the accounts to manage the business. External stakeholders use them to make judgements, such as whether the firm can pay its suppliers or repay its lenders (textbook p.250).

> **Think of it like...:** the accounts are a report card read by different people. The bank reads the same report card as the shareholder, but asks a different question.

### Textbook Question 17.1 (Nestlé, p.251)

- **(a)** Outline the meaning of a stock exchange [2 marks]. A market where shares in listed companies are bought and sold. Nestlé is listed on the Swiss stock exchange in Zurich.
- **(b)** Identify two stakeholder groups of Nestlé [2 marks]. Any two from the table above, such as shareholders, employees, managers, financiers or suppliers.
- **(c)** Examine the importance of final accounts to both groups named in (b) [6 marks]. Use the "what they want to know" column of the table, and link each point to a detail in the case, such as the Zurich listing or the 352,000 employees.

### Check yourself

<details>
<summary>Name one internal stakeholder and one external stakeholder who would read final accounts, and the decision each one makes.</summary>

Internal: managers, who use the accounts for target setting and strategic planning. External: a financier (bank), which uses the accounts to decide whether the business can repay a loan.

</details>`,
        keyTakeaways: [
          'Final accounts are two statements: the profit and loss account (over a period) and the balance sheet (at one date).',
          'Each stakeholder reads the accounts to answer a different question, so match the stakeholder to the decision.',
          'Companies are legally obliged to produce final accounts, and they are usually audited, to ensure transparency in the use of company funds.',
        ],
        examTips: [
          'For a stakeholder question, name the stakeholder, name the decision it informs and point to the figure it would look at.',
        ],
      },
      {
        id: 'sec-3.4-pl',
        title: '2. The profit and loss account, step by step',
        content: `**In one line:** start with sales revenue, subtract costs one level at a time, and each subtotal tells you something different.

The IB format is a statement titled "Statement of profit or loss for [company name], for the year ended [date]", with the money scale stated (textbook pp.253-254, Tables 17.1 and 17.2). The textbook notes that the trading account, the profit statement and the appropriation account are normally combined into one P&L account, and that examination questions are set on the P&L account as a whole (textbook pp.253, 255).

### The ladder (in order)

1. **Sales revenue:** the value of goods or services sold to customers.
2. **Cost of sales** (also called cost of goods sold): the direct costs of the goods that were sold.
3. **Gross profit** = sales revenue - cost of sales.
4. **Expenses:** indirect or fixed costs, listed individually (rent, salaries, advertising, utilities, insurance, administration).
5. **Profit before interest and tax (PBIT)** = gross profit - expenses.
6. **Interest:** the charge paid to lenders such as commercial banks.
7. **Profit before tax (PBT)** = PBIT - interest.
8. **Tax:** corporate tax on the company's profits.
9. **Profit for the period** = PBT - tax.
10. **Dividends:** the part of profit paid to shareholders. The board proposes them and the annual general meeting approves them. They are usually paid twice a year, as an interim dividend and a final dividend (textbook p.253).
11. **Retained profit** = profit for the period - dividends. It is kept for the business's own use, and it is transferred to equity as retained earnings (textbook p.253).

Interest and tax are shown as separate lines because both rates change over time and are outside the business's control. Profit might fall one year only because tax or interest rates rose. Showing PBIT lets firms compare like with like over time (textbook p.254).

> **Watch out:** the teacher deck's printed formula slides subtract the wrong subtotal for profit before tax (they read "Profit BI&T - Profit BT"). The correct rule is always PBT = PBIT - interest.

### Cost of sales

$$ Cost of sales = Opening stock + Purchases - Closing stock $$

Textbook example (p.251): a business opens with $5,000 of stock, buys $25,000 more, and has $3,800 left at the end of the day. Cost of goods sold = $5,000 + $25,000 - $3,800 = **$26,200**. If the stock sells for three times its cost, sales revenue is $78,600, and gross profit = $78,600 - $26,200 = **$52,400**.

Stock figures must belong to the same accounting period. Include each cost **once**: either in cost of sales or in expenses, depending on the case.

### Cost of sales versus expenses

Cost of sales (direct costs) are costs you can easily connect to the good or service produced. Expenses (indirect costs) affect the whole business, not one product (teacher deck; textbook pp.251-252).

| Business | Cost of sales (direct) | Expenses (indirect) |
| --- | --- | --- |
| Coffee shop | Raw materials (beans, milk); packaging (cups, lids, sleeves); baristas' salaries | Salaries of cleaning staff; utilities; advertising; petrol for the delivery van |
| Laundry service | Laundry soap and dry-cleaning chemicals; hangers and clothing protectors; salaries of employees who wash and dry clean clothes | Utilities (water, electricity); advertising; petrol for the delivery van; salary of the delivery driver |

### Improving each subtotal

- **Gross profit:** raise sales revenue (raise the price, or sell more through marketing); reduce cost of sales (cheaper suppliers, or bulk buying for discounts).
- **PBIT:** cut expenses. Textbook ideas (p.253): renegotiate rent or move to cheaper premises; reduce fuel use for heating, lighting and air conditioning; review administration costs by combining jobs or outsourcing. Teacher deck ideas: energy-efficient machinery, cheaper insurance suppliers, and below-the-line rather than above-the-line promotion.

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
          'Each subtotal is a checkpoint: gross profit tests buying and pricing, PBIT tests running costs, and retained profit is what the business keeps.',
          'PBT = PBIT - interest. Never subtract a later subtotal.',
          'Cost of sales = opening stock + purchases - closing stock. A cost goes in cost of sales or in expenses, never both.',
        ],
        examTips: [
          'Show each subtotal with its working. Examiners give method marks even when a later figure is wrong.',
          'Interest and tax are separate lines because they are outside the business control. Say so when a question asks why PBIT matters.',
        ],
      },
      {
        id: 'sec-3.4-pl-examples',
        title: '3. Worked P&L examples: textbook and teacher data',
        content: `**In one line:** these worked examples use the textbook and teacher figures exactly. Each one is fully calculated, so you can check your method against it.

### Florists-R-Us (textbook, $)

The textbook uses this example to show the full format and the appropriation of profit. It labels the year ended 31 December 2022 on p.254 and 2020 on p.255. The figures are the same.

| Line | Working | Figure ($) |
| --- | --- | --- |
| Sales revenue | given | 460,000 |
| Cost of goods sold | given | (230,000) |
| **Gross profit** | 460,000 - 230,000 | **230,000** |
| Rents | given | (90,000) |
| Utility bills | given | (60,000) |
| Other overheads | given | (15,000) |
| **Profit before interest and tax** | 230,000 - 165,000 | **65,000** |
| Interest | given | (10,000) |
| **Profit before tax** | 65,000 - 10,000 | **55,000** |
| Tax (10%) | 10% of 55,000 | (5,500) |
| **Profit for the period** | 55,000 - 5,500 | **49,500** |
| Dividends (30%) | 30% of 49,500 | (14,850) |
| **Retained profit (70%)** | 49,500 - 14,850 | **34,650** |

### Arabicadabra Coffee Ltd. (teacher deck, $000)

Year ended 31 March 2022. Expenses are salaries 5, rent 5, advertising 3 and utilities 2.

| Line | Working | Figure ($000) |
| --- | --- | --- |
| Sales revenue | given | 100 |
| Cost of sales | given | (25) |
| **Gross profit** | 100 - 25 | **75** |
| Expenses | 5 + 5 + 3 + 2 | (15) |
| **Profit before interest and tax** | 75 - 15 | **60** |
| Interest | given | (5) |
| **Profit before tax** | 60 - 5 | **55** |
| Tax | given | (3) |
| **Profit for the period** | 55 - 3 | **52** |
| Dividends | given | (2) |
| **Retained profit** | 52 - 2 | **50** |

> **Watch out:** the deck's formula slide for profit before tax reads "Profit BI&T - Profit BT". The correct rule is PBT = PBIT - interest, as in section 2.

### Masks-R-Us Ltd. (teacher data, $000)

Period ended 31 August. Sales are 14,000 masks at $10 each. Tax is 15% of profit after interest. No dividend figure is supplied.

| Line | Working | Figure ($000) |
| --- | --- | --- |
| Sales revenue | 14,000 x $10 = $140,000 | 140 |
| Opening stock | given | 10 |
| Purchases | given | 35 |
| Closing stock | given | (12) |
| **Cost of sales** | 10 + 35 - 12 | **(33)** |
| **Gross profit** | 140 - 33 | **107** |
| Overheads (expenses) | given | (17) |
| **Profit before interest and tax** | 107 - 17 | **90** |
| Interest | given | (5) |
| **Profit before tax** | 90 - 5 | **85** |
| Tax | 15% x 85 | (12.75) |
| **Profit for the period** | 85 - 12.75 | **72.25** |
| Dividends | not supplied | see note |
| Retained profit | 72.25 - 0 | 72.25 |

> **Watch out:** no dividend figure is supplied. Show retained profit only with an explicit assumption that dividends are zero. Do not invent a dividend figure.

### TOYS (teacher data, $000)

Two years of accounts for a private company. The missing figures (i) to (v) are filled in below.

| Line | Year 1 | Year 2 |
| --- | --- | --- |
| Sales | 450 | 500 |
| Cost of sales | (180) | (200) |
| Gross profit | 270 | 300 |
| Expenses | (90) | (100) |
| Profit before interest and tax | 180 | 200 |
| Interest | 0 | (10) |
| Profit before tax | 180 | 190 |
| Tax | (45) | (48) |
| Profit for the period | 135 | 142 |
| Dividends | (15) | (10) |
| Retained profit | 120 | 132 |

### Clockworks Ltd. (cost of sales, $)

Clockworks sold 3,000 clocks at $35 each. Stock was $15,000 at the start, purchases were $50,000, and closing stock was $20,000.

- Cost of sales = 15,000 + 50,000 - 20,000 = **$45,000**
- Sales revenue = 3,000 x $35 = **$105,000**
- Gross profit = 105,000 - 45,000 = **$60,000**

> **Confirm with your teacher:** the opening stock is dated 1 April 2022, but the reporting year ends 31 March 2022. The stock dates do not fit the same accounting period. The figures above are the teacher-verified ones. Do not invent a corrected year. Confirm the intended accounting year.

### Codfather Seafood Ltd. (teacher deck, $m)

The deck shows an operating subtotal of 1.5 and a retained profit of 0.3. The stated inputs produce different figures.

| Line | Stated inputs | Recalculated from inputs | Deck figure shown |
| --- | --- | --- | --- |
| Sales revenue | 6 | 6 | 6 |
| Cost of sales | (2) | (2) | (2) |
| Gross profit | 6 - 2 | 4 | 4 |
| Expenses | salaries 1.2, rent 0.8, advertising 0.5, utilities 1 | (3.5) | (3.5) |
| Profit before interest and tax | 4 - 3.5 | 0.5 | 1.5 |
| Interest | given | (0.2) | (0.2) |
| Profit before tax | 0.5 - 0.2 | 0.3 | 1.3 |
| Tax | given | (0.5) | (0.5) |
| Profit for the period | 0.3 - 0.5 | (0.2) | 0.8 |
| Dividends | given | (0.5) | (0.5) |
| Retained profit | (0.2) - 0.5 | (0.7) | 0.3 |

> **Confirm with your teacher:** the stated inputs give PBIT of 0.5 and a retained loss of (0.7), not the displayed 1.5 and retained profit of 0.3. Confirm which input is intended before you use this example in an answer.

### Check yourself

<details>
<summary>Using the Masks-R-Us figures, what is cost of sales and why is the closing stock subtracted?</summary>

Cost of sales = 10 + 35 - 12 = **33** ($000). Closing stock is subtracted because the stock still held at the end was not sold during the period, so its cost does not belong in this period's cost of sales.

</details>`,
        keyTakeaways: [
          'Use the textbook and teacher figures exactly. Show each working, as in the tables above.',
          'Where a figure is missing (such as dividends in Masks-R-Us), state an explicit assumption rather than inventing one.',
        ],
        examTips: [
          'Recalculate every subtotal from its inputs before you trust a printed figure. The Codfather deck example shows why.',
        ],
      },
      {
        id: 'sec-3.4-nonprofit',
        title: '4. Non-profit organisations: surplus, not profit',
        content: `**In one line:** a non-profit uses the same ladder but calls its result a **surplus**, and it reinvests the whole surplus.

- A profit-making firm distributes profit as dividends to shareholders, and/or reinvests it as retained profit.
- A non-profit has no shareholders to pay, so all of its surplus is reinvested as **retained surplus** (textbook p.253; teacher deck). There are no dividends.
- The textbook says non-profits must still make a financial surplus to survive (textbook p.249).
- Tax is zero only where the case states it. Do not assume a blanket tax exemption.
- Non-profit methods to improve gross surplus include seeking corporate sponsors and fundraising, as well as the usual sales and cost-of-sales methods. Methods to improve surplus before interest include seeking volunteers to reduce staffing costs (teacher deck).

![Side-by-side definitions of profit and surplus. Profit is distributed or reinvested; surplus is all reinvested.](/study-images/finance/3.4-profit-vs-surplus-comparison.jpg "Profit versus surplus: the same ladder, a different name for the result.")

> **Watch out:** the textbook (p.253) says that for non-profits the term retained surplus is used instead of retained profit. The retained figure goes into equity as retained earnings in both cases.

### Worked example: Caring for Classrooms (year ended 30 June 2022, $000)

Use the original date and labels: utilities 4 and insurance 1. Do not use the changed date or labels that appear in a repeated template.

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
<summary>A charity has gross surplus of $60,000 and expenses of $45,000, with no interest or tax. What is its retained surplus?</summary>

Surplus before interest and tax = 60,000 - 45,000 = 15,000. With no interest or tax, the surplus for the period is 15,000, and all of it is reinvested as retained surplus.

</details>`,
        keyTakeaways: [
          'A non-profit reports surplus, not profit, and reinvests all of it as retained surplus.',
          'Non-profits have no dividends and no share capital.',
        ],
        examTips: [
          'Use the words surplus and retained surplus in non-profit answers. Calling it profit loses marks.',
        ],
      },
      {
        id: 'sec-3.4-bs',
        title: '5. The balance sheet: a snapshot',
        content: `**In one line:** the balance sheet is a photograph of the business on one day (usually the last day of the accounting year). It shows what the business owns (assets), what it owes (liabilities) and the owners' stake (equity).

The balance sheet is prepared after the P&L account, because retained earnings come from the retained profit on the P&L account (teacher deck; textbook p.258). Established firms usually report two consecutive years so that stakeholders can compare them (textbook p.257).

### Three essential parts

**1. Assets** (items of monetary value owned by the business)

- **Non-current assets:** used in business operations, not for resale, and expected to last more than 12 months: property, plant and equipment (buildings, machinery, equipment, vehicles). Shown net of **accumulated depreciation** (see section 9).
- **Current assets:** cash, debtors and stock (inventories). These are likely to become cash within 12 months. Finished stock is more liquid than raw materials (textbook p.257).

**2. Liabilities** (legal obligations to repay lenders or suppliers)

- **Current liabilities:** due within 12 months: bank overdrafts (a short-term source of finance with high interest, repaid quickly), trade creditors (usually repaid within 30 to 60 days), other short-term loans.
- **Non-current liabilities:** due after 12 months: mortgages, bank loans, debentures and other long-term borrowing.

**3. Equity** (the value that belongs to the owners)

- **Share capital:** the money raised when shares were first sold. It shows the value raised at that time, not the current market value. Secondary-market resales between investors do not change it (textbook p.258; teacher deck).
- **Retained earnings:** the accumulated retained profit kept in the business over all past years. It is cumulative.

**Unincorporated businesses (textbook pp.260-261):** sole traders, partnerships and non-profit organisations have no shareholders, so no share capital appears in their balance sheets. Owners' funds are recorded as owners' capital, and money an owner takes out for personal use is called drawings. Limited companies can also raise finance through share capital and debentures.

### Formulae

$$ Net assets = Total assets - Total liabilities = Total equity $$

- Net non-current assets = property, plant and equipment (gross cost) - accumulated depreciation
- Current assets = cash + debtors + stock
- Total assets = net non-current assets + current assets
- Current liabilities = bank overdraft + trade creditors + other short-term loans
- Total liabilities = current liabilities + non-current liabilities
- Net assets = total assets - total liabilities
- Total equity = share capital + retained earnings

> **Watch out:** retained earnings on the balance sheet are **cumulative**, built up over many years. They are not just this year's retained profit. Retained earnings are also not cash. Cash is a separate asset line, so an equity figure does not tell you how much cash the business holds.

### Worked example: Arabicadabra Coffee Ltd, as at 31 March 2022 ($000)

Textbook Table 17.3 (p.260) and teacher deck use these figures.

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

Layout: the inner column holds the individual items, and the outer column holds the subtotals (teacher deck; textbook p.260). Title it "Statement of financial position for [company name] as at [date]", and state the money scale.

> **Watch out:** the retained earnings (85) are cumulative. They are not this year's retained profit (50) from the P&L account.

> **Source typo:** textbook Table 17.3 (p.260) prints total assets as 342. The correct figure is 537 (480 + 57), as in the teacher deck, and it is the figure that balances against net assets of 195.

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
          'Retained earnings are cumulative and are not the same as this year\'s retained profit or a cash balance.',
          'Use the 12-month line to classify: within 12 months is current; beyond 12 months is non-current.',
        ],
        examTips: [
          'Classify each item, then add up. A balance-sheet question usually asks for a classification before a calculation.',
        ],
      },
      {
        id: 'sec-3.4-bs-examples',
        title: '6. Balance sheet worked examples: textbook and teacher data',
        content: `**In one line:** each example below is fully calculated. Check your totals against the subtotals.

### Classroom Cares (non-profit, $000)

A non-profit balance sheet is almost identical to a profit-making one, except that there is **no share capital row**. Equity comes entirely from retained surplus (teacher deck).

| Line | Working | Figure |
| --- | --- | --- |
| Property, plant and equipment | given | 500 |
| Accumulated depreciation | given | (20) |
| **Net non-current assets** | 500 - 20 | **480** |
| Current assets (cash 10, debtors 12, stock 35) | 10 + 12 + 35 | **57** |
| **Total assets** | 480 + 57 | **537** |
| Current liabilities (overdraft 5, creditors 15, other loans 22) | 5 + 15 + 22 | **42** |
| Non-current liabilities (borrowings) | given | **300** |
| **Total liabilities** | 42 + 300 | **342** |
| **Net assets** | 537 - 342 | **195** |
| Equity: retained earnings | all retained surplus | **195** |

### Bellamkonda Restaurants Ltd. (textbook p.259, $'000)

The textbook's example for a restaurant chain, as at 31 October 20XX (the year is a placeholder in the textbook).

| Line | Working | Figure |
| --- | --- | --- |
| Property, plant and equipment | given | 1,700 |
| Machinery and equipment | given | 500 |
| Accumulated depreciation | given | (200) |
| **Net non-current assets** | 1,700 + 500 - 200 | **2,000** |
| Cash | given | 250 |
| Debtors | given | 30 |
| Stocks | given | 200 |
| **Current assets** | 250 + 30 + 200 | **480** |
| **Total assets** | 2,000 + 480 | **2,480** |
| Bank overdraft | given | 15 |
| Trade creditors | given | 250 |
| Other short-term loans | given | 55 |
| **Current liabilities** | 15 + 250 + 55 | **320** |
| Borrowings (long term) | given | 500 |
| **Total liabilities** | 320 + 500 | **820** |
| **Net assets** | 2,480 - 820 | **1,660** |
| Share capital | given | 1,000 |
| Retained earnings | given | 660 |
| **Total equity** | 1,000 + 660 | **1,660** |

### Marc Brothers Motor Repairs (MBMR) (textbook p.261 data, $000)

Reporting date 31 March. Property $630k, machinery and vehicles $230k, accumulated depreciation $144k, stock $30k, cash $12k, debtors $16k, overdraft $13k, long-term bank loan $380k, share capital $300k, retained earnings $81k.

| Line | Working | Figure |
| --- | --- | --- |
| Property + machinery and vehicles | 630 + 230 | 860 |
| Accumulated depreciation | given | (144) |
| **Net non-current assets** | 860 - 144 | **716** |
| **Current assets** | 30 + 12 + 16 | **58** |
| **Total assets** | 716 + 58 | **774** |
| **Current liabilities** (overdraft) | given | **13** |
| **Non-current liabilities** (long-term bank loan) | given | **380** |
| **Total liabilities** | 13 + 380 | **393** |
| **Net assets** | 774 - 393 | **381** |
| **Total equity** | 300 + 81 | **381** |

### Senjaya Fabrics Ltd. (teacher deck, IDR m)

Reporting date 31 March. All figures are in millions of Indonesian rupiah (IDR m).

| Line | Working | Figure (IDR m) |
| --- | --- | --- |
| Property | given | 350 |
| **Net non-current assets** | 350 | **350** |
| Stock, debtors and cash | 60 + 35 + 32 | **127** |
| **Total assets** | 350 + 127 | **477** |
| Overdraft and trade creditors | 30 + 45 | **75** |
| Mortgage (non-current liability) | given | **127** |
| **Total liabilities** | 75 + 127 | **202** |
| **Net assets** | 477 - 202 | **275** |
| Share capital + retained earnings | 175 + 100 | **275** |

### Bajaj Electronics (teacher deck, $'000)

Balance sheets for two years, 31 December each year. The deck lists a separate **mortgage** line, and the non-current liabilities line is shown separately.

| Line | 2021 | 2022 |
| --- | --- | --- |
| Non-current assets | 250 | 250 |
| Stock | 95 | 100 |
| Debtors | 50 | 70 |
| Cash | 20 | 25 |
| **Current assets** | **165** | **195** |
| **Total assets** | **415** | **445** |
| Bank overdraft + creditors | 10 + 20 = 30 | 20 + 50 = 70 |
| **Current liabilities** | **30** | **70** |
| Non-current liabilities line + mortgage | 80 + 50 = 130 | 50 + 50 = 100 |
| **Total liabilities** | **160** | **170** |
| **Net assets** | 415 - 160 = **255** | 445 - 170 = **275** |
| Share capital + retained earnings | 180 + 75 = **255** | 200 + 75 = **275** |

> **Confirm with your teacher:** the mortgage is treated as additional to the separately listed "non-current liabilities" line, interpreted as other long-term borrowings, so that both years balance. Confirm the intended label before you use this in an answer. Note also that the textbook's Question 17.6 (p.262) prints the 2021 creditors as 50 and share capital as 150, not 20 and 180 as in the teacher deck. This guide follows the deck and the Unit 3 conventions. Confirm which 2021 figures your teacher intends.

### Check yourself

<details>
<summary>In the Senjaya example, why does the balance sheet balance?</summary>

Total assets (477) minus total liabilities (202) gives net assets of 275. Total equity is share capital (175) plus retained earnings (100), which is also 275. Net assets equal total equity, so the balance sheet balances.

</details>`,
        keyTakeaways: [
          'Net assets = total assets - total liabilities. It must equal total equity.',
          'A non-profit balance sheet has no share capital row.',
        ],
        examTips: [
          'When a figure does not balance, check the classification of each item first. Most errors come from putting a current item in the non-current section, or the reverse.',
        ],
      },
      {
        id: 'sec-3.4-intangibles',
        title: '7. Intangible assets',
        content: `**In one line:** intangible assets are non-physical fixed assets that can still earn revenue for a business. They are protected by intellectual property rights (textbook p.263).

The main intangible assets that can appear on a balance sheet are:

- **Brands:** a registered name, logo or brand that drives sales and loyalty. Brand recognition and loyalty stay with the company for as long as it exists, so the textbook treats branding as an indefinite asset (textbook p.263).
- **Patents:** legal protection for an invention or design, for a fixed number of years. A patent gives the inventor exclusive rights to commercial production. Other firms must pay a fee to the patent holder to use or copy it. Patents also encourage innovation, because competitors cannot copy the idea for free (textbook p.263).
- **Copyrights:** legal protection for original creative work, such as books, music, films, software, photographs and art. Anyone who wants to reproduce the work must usually get permission from the copyright holder, often for a fee (textbook p.263).
- **Goodwill:** the value of a firm above its book value (the value of its net assets). It includes reputation, corporate image, business connections and loyalty from customers and employees. It is subjective to value. Goodwill is only properly realised when a business is acquired and the buyer pays a premium over the value of the net assets (textbook p.264).
- **Registered trademarks:** distinctive signs that identify a brand, product or business, such as a name, symbol, phrase or image. Examples include the Nike swoosh and the four interlocking rings of Audi. Trademarks can be sold, and the sale is reflected in the firm's balance sheet (textbook p.264).

### Apple: one example of each (teacher deck)

| Intangible asset | Apple example |
| --- | --- |
| Brand | The Apple brand name |
| Patent | Fingerprint recognition technology |
| Copyright | Operating system software |
| Goodwill | Goodwill from brand reputation |
| Registered trademark | The Apple logo |

The textbook gives the Apple brand a value of $264bn in 2021 (citing Statista). This is a historical estimate, not a current valuation.

### Why intangible assets are hard to value

- Valuations are estimates. The textbook says it is usually difficult to place an objective, accurate price on intangible assets (textbook p.263).
- Goodwill is subjective. In early 2022, analysts gave Boots, the UK pharmacy chain, a price range of £5bn to £12bn when it was put up for sale. This is a historical example (textbook p.264).
- Google's brand value was estimated at about $47bn by Forbes and more than $93bn by Interbrand in 2014. This is a historical example of how different estimates can be (textbook p.264).
- A valuable reputation is not automatically a balance-sheet asset. Adding intangible values to the balance sheet can be seen as window dressing, which is legal but can distort the financial picture. Vodafone's 2006 turnaround from a €11bn loss to a €10bn profit, through the legal inclusion of goodwill, is a historical example of this (textbook p.264).
- One feature, such as a logo, can belong to several categories (brand, trademark, goodwill). It is not automatically counted several times.

> **Historical example, not a current fact:** the textbook says that, according to TIME, the Harry Potter brand is worth over $25 billion. Rowling, her publishers and Warner Bros want to protect the franchise's intangible assets, including its international copyrights. Benefits of copyright protection here include control over who reproduces the work (permission usually needs a fee) and income from licensing, such as the film rights Warner Bros bought in 1998. The $25 billion figure depends on subjective valuation, so it is an estimate.

### Check yourself

<details>
<summary>A company logo is registered, and it also supports the company reputation. Which intangible categories could it belong to?</summary>

It could be a registered trademark (the logo itself), a brand (the name it represents), and the reputation it supports could be goodwill. These categories overlap, so the value is not counted several times.

</details>`,
        keyTakeaways: [
          'Intangible assets are non-physical fixed assets that earn revenue: brands, patents, copyrights, goodwill and registered trademarks.',
          'Intangible values are estimates. A strong reputation is not automatically on the balance sheet, and bought goodwill is the premium paid on acquisition.',
        ],
        examTips: [
          'When defining intangible assets, say they are non-physical, non-current assets that earn revenue, and give one example.',
          'Historical brand values (Apple, Harry Potter, Google) are estimates from a particular date. Say so, and do not present them as current facts.',
        ],
      },
      {
        id: 'sec-3.4-limitations',
        title: '8. Limitations and key concepts: textbook detail',
        content: `**In one line:** final accounts are useful, but they are historical, estimated and incomplete. Read them with other information.

### Limitations of the P&L account (textbook p.256)

- It shows past performance, and past performance does not guarantee future success.
- There is no internationally standardised format, so comparing firms across countries is hard.
- **Window dressing** can happen. This is the legal, but misleading, use of creative accounting to make results look better. For example, a firm might include the sale of fixed assets or non-operating income in its P&L to boost profit.
- A business cannot survive long without actual profit. A gross profit can look healthy while expenses leave an overall loss.

### Limitations of the balance sheet (textbook p.261)

- A balance sheet is static. The position can change the next day.
- Figures are estimates. Market value is not necessarily the same as book value, and the true market value of a non-current asset is known only once it is sold.
- The values do not show a detailed breakdown of assets.
- There is no universal format, so comparing firms in the same industry can be hard.
- Intangible assets and human capital are often left out. For example, professional sports clubs do not include their players' market value.

### Limitations of final accounts in general (textbook p.265)

- A single year's accounts give little information. A series of accounts shows trends.
- Human resources are ignored. Employee skills, loyalty and motivation do not appear, but they affect future financial position.
- Non-financial matters, such as culture, community contributions and ethical objectives, are not shown.
- Benchmarking against competitors needs their accounts too, which takes time.
- Companies limit what they disclose, because competitors can read their accounts. The accounts are lawful, but they do not reveal the whole truth.

### Final accounts and the key concepts (textbook pp.269-270)

- **Disclosure and accountability:** used properly and ethically, final accounts reveal financial health and profitability.
- **Profit from one-off sales:** if profit comes mainly from a one-off sale of land or property, underlying profitability is likely to be low.
- **Liquidity:** the balance sheet shows whether the firm can meet its daily running costs (see the liquidity chapter).
- **Intellectual property rights (IPRs):** patents and copyrights can act as a barrier to entry. Global firms such as Coca-Cola, Toyota and The Walt Disney Company use IPRs to protect market share. Legal protection of new products, designs and processes can increase the firm's value on its balance sheet.

> **Watch out:** window dressing is not illegal in itself, but its ethics are questionable. The textbook (p.270) states that wrongdoings, even if not illegal, are unethical.

### Check yourself

<details>
<summary>Why can a healthy-looking gross profit still hide a weak business?</summary>

Gross profit only subtracts cost of sales. If expenses are high, PBIT or profit for the period can be low or negative. A firm with strong gross profit but high overheads can still make an overall loss, and it cannot survive long without actual profit.

</details>`,
        keyTakeaways: [
          'The P&L is historical, the balance sheet is a snapshot, and both rely on estimates.',
          'Window dressing is legal creative accounting that makes results look better than they are.',
        ],
        examTips: [
          'Limitations questions reward specific limitations: name the limitation, explain why it matters and link it to the case.',
        ],
      },
      {
        id: 'sec-3.4-dep-basics',
        title: '9. Depreciation: why assets lose value (HL only)',
        content: `> **Higher Level only.** Depreciation methods and their appropriateness are assessed at HL only.

**In one line:** depreciation spreads the cost of a non-current asset over its useful life. It is an accounting expense, not a cash payment.

Most non-current assets lose value over time, for two reasons (textbook p.266):

- **Wear and tear:** repeated use wears out the asset and raises maintenance costs. Computers and vehicles are examples.
- **Obsolescence:** better products make the existing asset out of date, so its value and demand fall. Older vehicles, computers, equipment, smartphones and software are examples.

**Appreciation** is the opposite: a rise in the value of a non-current asset, such as property, over time (textbook p.266).

### Why depreciation is recorded (textbook p.266)

- To value the business more accurately. Depreciating non-current assets reduces the value of net assets to reflect the true financial position.
- To assess the value of non-current assets realistically over time. Historic cost is unlikely to equal current market value.
- To plan for replacement. Depreciation is also recorded on the P&L account as an expense, because it reflects a fall in value that will eventually need to be replaced.

### Key terms

| Term | Meaning (teacher deck and textbook pp.266-267, 271) |
| --- | --- |
| Lifespan (useful life) | The estimated number of years, or units, the asset will be used before it is replaced |
| Residual value (scrap or trade-in value) | The estimated value of the asset at the end of its life |
| Historic (purchase) cost | The original purchase cost of the asset |
| Accumulated depreciation | The total depreciation charged so far, which is the sum of the charges to date |
| Net book value (NBV) | Historic cost less accumulated depreciation |

> **Watch out:** the teacher deck defines accumulated depreciation as "annual depreciation multiplied by the number of years". That works only when the annual charge is the same each year. The correct rule is the sum of the charges to date. Under the units-of-production method the charge changes each year, so you must add up the actual charges.

> **Watch out:** the textbook (p.266) says that property and land tend to rise in value. That describes market value trends. For accounting depreciation, land is normally not depreciated, but buildings can be (IAS 16, paragraph 58). The deck's blanket exception for "land and buildings" is too broad. Use the IAS 16 rule.

Source for the IAS 16 point: https://www.ifrs.org/content/dam/ifrs/publications/pdf-standards/english/2022/issued/part-a/ias-16-property-plant-and-equipment.pdf

### Check yourself

<details>
<summary>Why is depreciation recorded on the P&L account even though no cash leaves the business in that year?</summary>

Depreciation reflects the fall in value of the asset, which will eventually need to be replaced. It is an expense that matches the cost of using the asset to the period in which it is used. No cash leaves the business when depreciation is charged, so it is a non-cash expense.

</details>`,
        keyTakeaways: [
          'Depreciation is a non-cash accounting expense that spreads an asset\'s cost over its useful life (HL only).',
          'Accumulated depreciation is the sum of the charges to date. NBV = historic cost - accumulated depreciation.',
        ],
        examTips: [
          'Check whether the question asks for the annual charge, the accumulated depreciation or the NBV. They are different figures.',
        ],
      },
      {
        id: 'sec-3.4-dep-sl',
        title: '10. Straight-line depreciation (HL only)',
        content: `> **Higher Level only.**

**In one line:** straight-line depreciation writes off the same amount every year.

$$ Annual depreciation = (Purchase cost - Residual value) / Lifespan $$

If there is no residual value, the formula becomes Purchase cost / Lifespan (textbook p.267).

**Strength:** simple to calculate and understand. **Weakness:** unrealistic for assets such as vehicles that lose more value early in their lives. It also ignores the falling efficiency and rising repair costs of older assets (textbook p.267; teacher deck).

### Worked example 1: commercial bread oven (conventions figures)

Cost $30,000, residual value $6,000, lifespan 3 years.

- Annual depreciation = (30,000 - 6,000) / 3 = **$8,000**

| Year | Annual depreciation | Accumulated depreciation | NBV at year end |
| --- | --- | --- | --- |
| 1 | (30,000 - 6,000) / 3 = 8,000 | 8,000 | 30,000 - 8,000 = **22,000** |
| 2 | 8,000 | 8,000 + 8,000 = 16,000 | 22,000 - 8,000 = **14,000** |
| 3 | 8,000 | 16,000 + 8,000 = 24,000 | 14,000 - 8,000 = **6,000** |

NBV falls by the same amount each year, and at the end of year 3 it equals the residual value.

### Worked example 2: electronic security system (textbook p.267, $)

Bought for $25,000, lifespan 5 years, no residual value.

- Annual depreciation = 25,000 / 5 = **$5,000**
- End of year 1: accumulated 5,000, NBV 20,000. End of year 2: accumulated 10,000, NBV 15,000. End of year 3: accumulated 15,000, NBV 10,000. End of year 4: accumulated 20,000, NBV 5,000. End of year 5: accumulated 25,000, NBV 0.

If the system is expected to sell for $5,000 after 5 years, the annual charge is (25,000 - 5,000) / 5 = **$4,000**, which is $1,000 less each year.

### Worked example 3: Safarie Air Tours (textbook p.267, $m)

A second-hand aircraft bought for $5.2 million, with a useful life of 5 years and an expected residual value of $1.6 million.

- Annual depreciation = (5.2m - 1.6m) / 5 = 3.6m / 5 = **$0.72m, or $720,000 per year**

### Check yourself

<details>
<summary>A vehicle costs $40,000, has a residual value of $4,000 and a lifespan of 4 years. Find the annual depreciation and the NBV at the end of year 2.</summary>

Annual depreciation = (40,000 - 4,000) / 4 = **$9,000**. Accumulated depreciation after year 2 = 9,000 + 9,000 = 18,000. NBV = 40,000 - 18,000 = **$22,000**.

</details>`,
        keyTakeaways: [
          'Straight-line annual depreciation = (cost - residual value) / lifespan. The same charge applies every year.',
          'NBV falls by the same amount each year, so it reaches the residual value at the end of the lifespan.',
        ],
        examTips: [
          'Show the three steps: annual charge, accumulated depreciation to date and NBV. Examiners mark each one.',
        ],
      },
      {
        id: 'sec-3.4-dep-up',
        title: '11. Units-of-production depreciation (HL only)',
        content: `> **Higher Level only.**

**In one line:** units-of-production depreciation charges depreciation according to how much the asset is used, not by time.

Two steps (textbook p.268):

$$ Depreciation per unit = (Purchase cost - Residual value) / Expected number of units over lifetime $$

$$ Depreciation expense = Depreciation per unit x Number of units produced in the period $$

The reduction in value is shown as accumulated depreciation on the balance sheet.

**Strength:** gives better insight into the true running cost of the asset, and matches the cost to output. **Weakness:** more cumbersome to calculate, because the charge has to be recalculated from usage each period (teacher deck; textbook p.269).

### Worked example 1: commercial bread oven (same oven, 60,000 loaves in total, $)

Expected output: 24,000 loaves in year 1, 20,000 in year 2 and 16,000 in year 3.

- Rate = (30,000 - 6,000) / 60,000 = **$0.40 per loaf**

| Year | Output (loaves) | Annual depreciation | Accumulated depreciation | NBV at year end |
| --- | --- | --- | --- | --- |
| 1 | 24,000 | 24,000 x 0.40 = **9,600** | 9,600 | 30,000 - 9,600 = **20,400** |
| 2 | 20,000 | 20,000 x 0.40 = **8,000** | 9,600 + 8,000 = 17,600 | 20,400 - 8,000 = **12,400** |
| 3 | 16,000 | 16,000 x 0.40 = **6,400** | 17,600 + 6,400 = 24,000 | 12,400 - 6,400 = **6,000** |

NBV at the end of year 3 equals the residual value of $6,000. The charge follows output, so it is higher in years with more loaves.

> **Watch out:** the deck's units-of-production table is labelled in $000 per loaf. Use dollars per loaf, as shown above.

### Worked example 2: printing machine (textbook p.268, $)

Bought for $500,000. It is expected to run for 5,000 hours over 5 years and then be sold for $100,000 as scrap.

- Depreciation per unit (hour) = (500,000 - 100,000) / 5,000 = **$80 per hour**
- If the machine runs for 1,500 hours in year 1: depreciation expense = 80 x 1,500 = **$120,000**

### Worked example 3: Neville Stibbs Printers (textbook p.269, $)

Printing machine bought for $250,000. Expected output 500,000 units over four years, then it is expected to be sold for $50,000. Output: year 1 = 90,000 units, year 2 = 110,000 units.

- Depreciation per unit = (250,000 - 50,000) / 500,000 = **$0.40 per unit**
- Year 1 depreciation = 90,000 x 0.40 = **$36,000**
- Year 2 depreciation = 110,000 x 0.40 = **$44,000**
- Accumulated depreciation at the end of year 2 = 36,000 + 44,000 = 80,000
- NBV at the end of year 2 = 250,000 - 80,000 = **$170,000**

### Check yourself

<details>
<summary>A machine costs $250,000, has a residual value of $50,000 and is expected to produce 500,000 units. It produces 90,000 units in year 1. What is its depreciation in year 1?</summary>

Rate per unit = (250,000 - 50,000) / 500,000 = $0.40. Year 1 depreciation = 90,000 x 0.40 = **$36,000**.

</details>`,
        keyTakeaways: [
          'Units-of-production: depreciation per unit = (cost - residual value) / total units. Charge = rate x units produced.',
          'The annual charge changes with output, so accumulated depreciation is the sum of the charges to date.',
        ],
        examTips: [
          'Check the units. A rate per loaf or per hour is a dollar amount per unit, not a figure in thousands.',
        ],
      },
      {
        id: 'sec-3.4-dep-appropriate',
        title: '12. Choosing a depreciation method (HL only, AO3)',
        content: `> **Higher Level only.** Appropriateness is an AO3 skill.

**In one line:** straight line suits an even pattern of use and value loss; units of production suits assets whose use varies.

| | Straight line | Units of production |
| --- | --- | --- |
| How the charge is set | The same amount each year | Rate per unit x units produced |
| Strength | Simple to calculate and understand | Matches cost to actual use and output |
| Weakness | Unrealistic for assets that lose value early (for example vehicles) | More cumbersome to calculate |
| Suits | Assets with a steady pattern of use and value loss | Assets whose use varies, such as machinery, photocopiers or vehicles measured by mileage |

The textbook says that in practice it does not really matter which method is used. What matters is that the business is **consistent** in its method, so that results can be compared over time (textbook p.266).

The method chosen affects reported profit each year. A higher depreciation charge reduces PBIT, PBT and profit for the period. It also reduces the NBV of the asset on the balance sheet.

### Check yourself

<details>
<summary>Give one reason a vehicle business might prefer units of production, and one reason it might prefer straight line.</summary>

Units of production: the charge follows mileage or use, so a heavily used vehicle carries more depreciation in a busy year. Straight line: simple to calculate, and it suits a business that wants the same charge every year for a steady pattern of use. Either way, the firm must stay consistent with its chosen method.

</details>`,
        keyTakeaways: [
          'Straight line suits steady use. Units of production suits variable use.',
          'The method affects profit each year, so a business must stay consistent to make comparisons valid.',
        ],
        examTips: [
          'For an AO3 question, state the method, say why it fits the asset in the case, and name one weakness it has for that asset.',
        ],
      },
      {
        id: 'sec-3.4-ethics',
        title: '13. Ethics and accounting practice',
        content: `**In one line:** accountants must be honest, objective and open in producing final accounts, because stakeholders depend on them.

Textbook p.270: accountants must be open, transparent and honest in recording and reporting financial transactions. Most businesses have an annual audit to check that the accounts are prepared with integrity, objectivity and ethical behaviour. Professional bodies monitor ethical standards in accountancy.

### Five ethical principles (ACCA)

ACCA is the Association of Chartered Certified Accountants.

![Table of five ACCA ethical principles: integrity, objectivity, professional competence and due care, confidentiality, and professional behaviour, with their meanings.](/study-images/finance/3.4-acca-ethics-principles-table.png "The five ACCA principles. ACCA is the Association of Chartered Certified Accountants.")

| Principle | Meaning |
| --- | --- |
| Integrity | Being straightforward and honest in all professional and business relationships |
| Objectivity | Being free from bias, conflicts of interest or undue influence on professional judgement |
| Professional competence and due care | Keeping professional knowledge and skills at the level needed to deliver competent accounting services |
| Confidentiality | Respecting the confidentiality of information from professional relationships, and not using it for personal gain |
| Professional behaviour | Complying with laws and regulations and avoiding conduct that discredits fellow accountants |

**Insider trading** is an example of confidentiality being broken for private gain. Accountants and financial managers see confidential information, and must not use it for their own benefit (teacher deck).

### Case: Enron (textbook case study 17.1, historical)

Enron was a large American energy company, with annual sales above $100 billion and over 20,000 employees. Its dishonest accounting led to bankruptcy in December 2001. Several top executives were jailed for accounting fraud, and the share price fell from over $90 to less than $1 before the bankruptcy. The textbook notes that Luca Pacioli wrote about the principles and ethics of accounting in 1494.

### Case: Luckin Coffee (2020)

Luckin Coffee was one of China's largest coffee chains. In 2020 it was found to have inflated its sales revenue figures for 2019. The teacher deck says it launched an IPO in 2019 and was delisted in 2020.

> **Confirm and correct:** the teacher deck says the IPO was on the New York Stock Exchange. The convention corrects this to the **Nasdaq**, verified by the company notice filed with the US SEC on 19 May 2020: https://www.sec.gov/Archives/edgar/data/1767582/000110465920063497/a20-20057_1ex99d1.htm

Discussion points (teacher deck): identify the ACCA principles breached by the business, and suggest why its senior managers might have inflated sales. Treat bonus or IPO motives as possible incentives, not proven personal intent.

### Check yourself

<details>
<summary>Which ACCA principle is breached if an accountant uses confidential client information to make a personal trade?</summary>

Confidentiality. Information acquired through professional relationships must not be used for personal gain.

</details>`,
        keyTakeaways: [
          'The five ACCA principles are integrity, objectivity, professional competence and due care, confidentiality and professional behaviour.',
          'Ethical breaches are about honesty and transparency, not only legality. Wrongdoing that is not illegal can still be unethical (textbook p.269).',
        ],
        examTips: [
          'For an ethics question, name the principle, link it to the case facts, and explain the consequence for stakeholders.',
        ],
      },
      {
        id: 'sec-3.4-cbm',
        title: '14. Circular business models and final accounts',
        content: `**In one line:** a circular business model keeps products and materials in use for longer, through reduce, reuse, repair and recycle. Its financial effect shows up in the final accounts.

> **Source note:** the textbook pages for this sub-unit (pp.249-272) do not cover circular business models. The material here comes from the teacher deck's Business Management Toolkit slide ("Circular business models and final accounts"). The textbook's own toolkit box (p.270) links final accounts to product portfolio management and the BCG matrix (Chapter 47).

![Circular business model diagram with four stages: reduce, reuse, repair and recycle, arranged in a loop.](/study-images/finance/3.4-circular-business-model-diagram.png "Reduce, reuse, repair, recycle: the loop of a circular business model.")

**Product life extension** is one circular strategy: repairing, refurbishing and reusing products so they stay in use longer. The deck's toolkit task asks students to find a firm that does this, and to assess to what extent the strategy generates profit and improves its financial position.

Link each claim to a specific line of the final accounts. This is illustrative reasoning, not a worked answer for any firm:

- **Sales revenue:** repaired or refurbished products can be sold again, which can add revenue.
- **Cost of sales:** buying fewer new materials can lower cost of sales, which raises gross profit.
- **Expenses:** repair labour and refurbishment work can add costs, which lower PBIT. The net effect depends on the business.
- **Balance sheet:** spare parts and refurbished stock are current assets; equipment kept in use longer stays a non-current asset and is depreciated (HL).

> **Watch out:** a circular claim is only as strong as its numbers. Check a named firm's published accounts for the evidence before you say the strategy improves profit. Do not present a firm's own sustainability claims as financial fact.

### Check yourself

<details>
<summary>How could a product-life-extension strategy affect the profit and loss account?</summary>

It can increase sales revenue (refurbished products sold again) and reduce cost of sales (fewer new materials bought). Both raise gross profit. Repair labour can raise expenses, so the overall effect on PBIT and profit depends on whether the gains outweigh the new costs.

</details>`,
        keyTakeaways: [
          'A circular business model affects revenue, cost of sales, expenses and the balance sheet.',
          'Link any circular-model claim to a specific line of the final accounts, and check it against published numbers.',
        ],
        examTips: [
          'Evaluate the net effect. Revenue and cost savings can be offset by repair or refurbishment costs.',
        ],
      },
      {
        id: 'sec-3.4-tok',
        title: '15. TOK extension (not assessed)',
        content: `> **Extension only.** These prompts come from the textbook's Theory of Knowledge boxes (pp.263-265, 270), plus one key concept and one toolkit box (p.270). They are not assessed, and they do not replace the content above.

- Is it possible to know whether the finances of a company are truly and completely truthful, as presented in its final accounts? (p.263)
- Can the financial data of a business reflect the truth about its corporate culture? (p.264)
- Google's brand value was estimated at about $47bn by Forbes and more than $93bn by Interbrand in 2014. Is there any substance in knowledge claims about brand values? (p.264)
- Thomas Carlyle said, "You may prove anything by figures." To what extent does this apply to knowledge in business management? (p.265)
- Can creativity in financial reporting ever be disregarded as unethical? (p.270)
- Key concept (p.270): with reference to an organization of your choice, discuss how change has affected its final accounts (the balance sheet and/or the profit and loss account).
- Business Management Toolkit (p.270): discuss why product portfolio management, including the BCG matrix (Chapter 47), directly affects a firm's final accounts.

Optional research (textbook Activity 12.1, p.264): Interbrand publishes an annual ranking of the best global brands by market value. Research its current top ten, and the criteria it uses to value them.`,
        keyTakeaways: [
          'The TOK prompts ask how far financial figures can be trusted as knowledge. Use them to extend, not to replace, the exam content.',
        ],
        examTips: [
          'Use TOK ideas only as an extension to an evaluative answer. They are not a substitute for an AO2 or AO4 explanation.',
        ],
      },
    ],
    highYieldTerms: [
      { term: 'Final accounts', definition: 'The summary statements a business produces at the end of each period: the profit and loss account and the balance sheet.' },
      { term: 'Profit and loss account (statement of profit or loss)', definition: 'A statement of a firm\'s revenues, costs and profit or loss over a period, usually one year.' },
      { term: 'Balance sheet (statement of financial position)', definition: 'A snapshot of a firm\'s assets, liabilities and equity at one point in time, usually the last day of the accounting year.' },
      { term: 'Sales revenue', definition: 'The value of goods or services sold to customers.' },
      { term: 'Cost of sales (cost of goods sold)', definition: 'The direct costs of the goods sold: opening stock + purchases - closing stock.' },
      { term: 'Gross profit', definition: 'Sales revenue minus cost of sales.' },
      { term: 'Expenses', definition: 'Indirect or fixed costs of running the business, such as rent, salaries, insurance, utilities and advertising.' },
      { term: 'Profit before interest and tax (PBIT)', definition: 'Gross profit minus expenses.' },
      { term: 'Profit before tax (PBT)', definition: 'PBIT minus interest.' },
      { term: 'Profit for the period', definition: 'Profit before tax minus tax. Also called profit after interest and tax.' },
      { term: 'Dividends', definition: 'The part of profit paid to shareholders, approved at the annual general meeting and usually paid twice a year.' },
      { term: 'Retained profit', definition: 'Profit for the period minus dividends. It is kept in the business and transferred to equity as retained earnings.' },
      { term: 'Surplus', definition: 'The non-profit equivalent of profit: what is left after expenses. A non-profit reinvests all of it.' },
      { term: 'Retained surplus', definition: 'The non-profit equivalent of retained profit: the whole surplus, reinvested.' },
      { term: 'Non-current assets', definition: 'Assets used in business operations, not for resale, and expected to last more than 12 months, such as property, plant and equipment.' },
      { term: 'Current assets', definition: 'Cash and other assets likely to become cash within 12 months: cash, debtors and stock.' },
      { term: 'Current liabilities', definition: 'Debts due within 12 months, such as bank overdrafts, trade creditors and other short-term loans.' },
      { term: 'Non-current liabilities', definition: 'Debts due after 12 months, such as mortgages, bank loans and debentures.' },
      { term: 'Net assets', definition: 'Total assets minus total liabilities. It equals total equity.' },
      { term: 'Equity', definition: 'The value of the business that belongs to its owners: share capital plus retained earnings.' },
      { term: 'Share capital', definition: 'The money raised by selling shares, shown at the value raised when they were first sold, not at current market value.' },
      { term: 'Retained earnings', definition: 'The cumulative retained profit kept in the business over all past periods. It is not this year\'s retained profit and it is not a cash balance.' },
      { term: 'Trade creditors', definition: 'Suppliers who allow a business to buy on trade credit, usually to be repaid within 30 to 60 days. A current liability.' },
      { term: 'Debtors', definition: 'Customers who owe the business money for goods or services bought on credit. A current asset.' },
      { term: 'Book value', definition: 'The value of an asset as shown on the balance sheet (cost less accumulated depreciation).' },
      { term: 'Window dressing', definition: 'The legal but misleading use of creative accounting to make financial results look better than they are.' },
      { term: 'Intangible assets', definition: 'Non-physical fixed assets that earn revenue: brands, patents, copyrights, goodwill and registered trademarks.' },
      { term: 'Goodwill', definition: 'The value of a firm above the book value of its net assets, including reputation, business connections and loyalty.' },
      { term: 'Intellectual property rights (IPRs)', definition: 'Legal protection for intangible assets such as patents, copyrights, trademarks and brands.' },
      { term: 'ACCA ethical principles', definition: 'Integrity, objectivity, professional competence and due care, confidentiality, and professional behaviour, as set by the Association of Chartered Certified Accountants.' },
      { term: 'Depreciation (HL)', definition: 'The spreading of a non-current asset\'s cost over its useful life. It is a non-cash expense.' },
      { term: 'Wear and tear (HL)', definition: 'The fall in an asset\'s value caused by repeated use.' },
      { term: 'Obsolescence (HL)', definition: 'The fall in an asset\'s value because better technology makes it out of date.' },
      { term: 'Residual value (HL)', definition: 'The estimated value of an asset at the end of its useful life (also called scrap or trade-in value).' },
      { term: 'Accumulated depreciation (HL)', definition: 'The total depreciation charged so far: the sum of the charges to date.' },
      { term: 'Net book value (NBV) (HL)', definition: 'Historic cost minus accumulated depreciation.' },
      { term: 'Straight-line method (HL)', definition: 'A method that charges the same depreciation each year: (cost - residual value) / lifespan.' },
      { term: 'Units-of-production method (HL)', definition: 'A method that charges depreciation per unit of output: rate per unit x units produced.' },
      { term: 'Profit', definition: 'The surplus (if any) a business earns after all of its expenses have been paid from its gross profit.' },
      { term: 'Historic cost (HL)', definition: 'The original purchase cost of a non-current asset. It is used in the calculation of depreciation.' },
      { term: 'Lifespan (useful life) (HL)', definition: 'The estimated number of years, or units, a non-current asset will be used before it is replaced.' },
      { term: 'Appreciation', definition: 'An increase in the value of a non-current asset over time, such as property.' },
      { term: 'Circular business model', definition: 'A business model that keeps products and materials in use for longer through reduce, reuse, repair and recycle.' },
      { term: 'Product life extension', definition: 'A circular strategy that repairs, refurbishes and reuses products so they stay in use longer.' },
    ],
  },
];
