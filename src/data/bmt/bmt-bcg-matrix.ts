import type { StudyUnit } from '@/types/curriculum';

// ============================================================================
// BMT 4: Boston Consulting Group (BCG) matrix
// Source: Paul Hoang, Business Management (5th ed., IBID 2022), Chapter 47, pp.635-639;
// product portfolio and Figure 27.3 from Chapter 27, pp.395-397.
// ============================================================================

const S = 'bmt-bcg-matrix' as const;

export const BMT_BCG: StudyUnit = {
  "id": S,
  "title": "BMT 4: Boston Consulting Group (BCG) Matrix",
  "unitCode": "BMT BCG",
  "subtitle": "Product Portfolio Analysis, the Four Quadrants, Product Strategies and Evaluation",
  "estimatedReadTime": "12 min read",
  "description": "Master Bruce Henderson's BCG matrix: the two dimensions (market share and market growth), the four product categories (stars, cash cows, question marks, dogs) and their cash flows, the four product strategies (build, harvest, hold, divest), the link with the product life cycle, and how to evaluate the tool in IB answers.",
  "sections": [
    {
      "id": "sec-bcg-origin",
      "title": "1. What is the BCG Matrix? Product Portfolios and the Two Dimensions",
      "content": "### Definition\nThe **Boston Consulting Group (BCG) matrix** (or *Boston matrix*) was devised by **Bruce D. Henderson (1970)**. It is a **situational and decision-making tool** used for analysing the **product portfolio** of a business. It shows whether products have a high or low **market share** and operate in high or low **market growth** industries *(pp.635, 639)*.\n\n### Product Portfolio\nA **product portfolio** refers to the collection of all the products owned by a business at a point in time. Product portfolio management enables a firm to have better control over its sales revenues, costs, profits and operational risks (p.396).\n* A portfolio can contain individual products or brands (e.g. **Hitachi**: consumer electronics, car parts, high-speed trains; **Unilever**: over 400 brands such as Dove, Magnum and Persil).\n* It can also contain **strategic business units (SBUs)**: divisions of an organization, such as Gatorade, 7-Up, Lay's, Doritos, Taco Bell, Pizza Hut and KFC, owned by **PepsiCo** (p.635).\n\n### The Two Dimensions\nThe BCG matrix looks at two dimensions in order to assess new and existing products in terms of their **market potential** (p.635):\n\n| Axis | What it measures | Classification |\n| :--- | :--- | :--- |\n| **Market share** (horizontal) | The product's **relative market share** compared with rivals | High (left) / Low (right) |\n| **Market growth** (vertical) | The growth rate of the **industry** the product competes in | High = *growing* (top) / Low = *mature* (bottom) |\n\n> Market share is a feature of the **product**; market growth is a feature of the **market**. A firm can influence its share, but it has little control over the growth of the industry.",
      "keyTakeaways": [
        "Devised by Bruce D. Henderson (1970); it is both a situational and a decision-making tool.",
        "It analyses the product portfolio: the collection of all products owned by a business at a point in time.",
        "Two dimensions: market share (high/low) and market growth (high/low), giving four quadrants.",
        "Portfolios can contain products, brands or strategic business units (SBUs)."
      ],
      "examTips": [
        "When asked to define the BCG matrix, include both dimensions (market share and market growth) and state that it analyses a firm's product portfolio.",
        "Always place the axes correctly: market share across the top (high on the LEFT), market growth down the side (high at the TOP)."
      ]
    },
    {
      "id": "sec-bcg-quadrants",
      "title": "2. The Four Quadrants and their Cash Flows",
      "content": "### The BCG Grid (Figure 47.1)\n\n![Figure 47.1 - The BCG matrix](/finance/bmt-bcg-matrix.png)\n*Source: Hoang (2022), Figure 47.1, p.635.*\n\n| Market growth \\ Market share | **High market share** | **Low market share** |\n| :--- | :--- | :--- |\n| **High growth** | **Stars**<br/>High cash generated, but heavy spending to develop and promote | **Question marks**<br/>(problem children / wild cards)<br/>**Main users of cash** |\n| **Low growth** | **Cash cows**<br/>**Main generators of cash** | **Dogs**<br/>Little cash generated |\n\n### The Four Categories *(pp.636, 639)*\n* **Stars** are products that have **high (or rising) market share** in a **high growth market**. They are successful products that generate high amounts of cash, but businesses spend money to develop and promote them. Cash from stars can be used to turn question marks into stars. They have the potential to become *cash cows* if funded and marketed appropriately.\n* **Cash cows** are products with **high market share** competing in a **low-growth (mature) market**. They are very well established (e.g. *Coca-Cola* in soft drinks, *Apple's iPhone* in smartphones) and generate significant net cash flow and large profits. Some risk becoming dogs, so firms use **extension strategies** to prolong their high earning potential.\n* **Question marks** (or *problem children* / *wild cards*) compete in **high market growth** industries but have **low market share**. This may suggest inferior marketing and/or product quality. They **consume lots of cash** but generate little, if any, profit, so it is not always clear whether the business should invest more in them.\n* **Dogs** have **low market share** in **low growth or stagnant markets**. They do not generate much cash or profit. Firms may use extension strategies or dispose of them (withdraw them from the market). **Too many dogs may cause liquidity problems**.\n\n### A Balanced Portfolio\nThe ideal portfolio is **balanced**: *some stars, a few question marks and several cash cows* (p.636). The matrix is **not static**: money from cash cows is used to turn question marks into stars (otherwise they may quickly become dogs), and stars may ultimately become cash cows.\n\nA **diverse** portfolio matters for cash flow because selling to a single market limits revenue streams, and it **spreads risk**: a decline in sales of one product may be offset by favourable sales of others (e.g. French fashion house **Agnès b** spans clothing, confectionery, flowers, cafés, shoes and accessories).",
      "keyTakeaways": [
        "Stars: high share, high growth. Cash cows: high share, low growth. Question marks: low share, high growth. Dogs: low share, low growth.",
        "Question marks are the main users of cash; cash cows are the main generators of cash.",
        "Ideal portfolio: some stars, a few question marks and several cash cows.",
        "The matrix is dynamic: cash cow money funds question marks into stars; stars may become cash cows; neglected question marks may become dogs."
      ],
      "examTips": [
        "Do not say stars are the main cash generators. Stars generate high cash but also need heavy spending; the textbook names cash cows as the main generators of cash.",
        "Too many dogs or question marks signals a cash flow (liquidity) problem; too few question marks/stars signals a weak future."
      ]
    },
    {
      "id": "sec-bcg-strategies",
      "title": "3. The Four Product Strategies: Build, Harvest, Hold, Divest",
      "content": "The tool suggests four strategies to deal with each category (Figure 47.3, p.637):\n\n![Figure 47.3 - The BCG matrix and product strategy](/finance/bmt-bcg-strategy-grid.png)\n*Source: Hoang (2022), Figure 47.3, p.637.*\n\n| Market growth \\ Market share | **High** | **Low** |\n| :--- | :--- | :--- |\n| **High (growing)** | **Harvest**<br/>(stars) | **Build**<br/>(question marks) |\n| **Low (mature)** | **Hold**<br/>(cash cows) | **Divest**<br/>(dogs) |\n\n* **Build:** used to turn **question marks into stars** by investing the necessary resources to increase market share. If nothing is done to improve market share, cash will be drained from the business.\n* **Harvest (or milk):** reaping the benefits (profits) of a product. The purpose is to turn **stars into cash cows**; this might require huge amounts of advertising. Harvesting or milking cash cows lets the firm use money from established products in established markets to fund stars and question marks, *safeguarding the organization's future*.\n* **Hold:** investing **enough resources to keep cash cows** in their current position. Investment is likely to be minimal as market growth for cash cows is low.\n* **Divest:** **phasing out or selling off dog products**, freeing resources to be used elsewhere (e.g. certain question marks). Some question marks may also face divestment, especially those unlikely to turn into stars.\n\nThe **optimal portfolio strategy** takes advantage of the firm's strengths (**stars and cash cows**) in order to develop other attractive opportunities (turning question marks into stars and possibly reviving or extending the product life cycle of dogs) (p.637).\n\n> Textbook Exam tip: follow the textbook's Figure 47.3 mapping in exams: **Harvest** sits in the star quadrant and **Hold** in the cash cow quadrant. Many websites map these differently, so state the textbook version.",
      "keyTakeaways": [
        "Build: invest to turn question marks into stars.",
        "Harvest (milk): reap profits; turn stars into cash cows and use cash cow money to fund stars and question marks.",
        "Hold: minimal investment to keep cash cows in position.",
        "Divest: phase out or sell off dogs (and question marks unlikely to become stars)."
      ],
      "examTips": [
        "Always link a strategy to cash flow: e.g. divesting a dog frees up cash to build a question mark.",
        "Textbook Exam tip: the alternative to divesting a dog is extension strategies to revive demand (pp.636-637)."
      ]
    },
    {
      "id": "sec-bcg-plc",
      "title": "4. Link to the Product Life Cycle",
      "content": "The relationship between a product's life cycle and the firm's product portfolio is illustrated in Figure 27.3 (pp.396-397):\n\n![Figure 27.3 - The relationship between the product life cycle and a firm's product portfolio](/finance/bmt-bcg-plc-portfolio.png)\n*Source: Hoang (2022), Figure 27.3, p.397.*\n\n| PLC stage | BCG category | Cash flow logic |\n| :--- | :--- | :--- |\n| Introduction (launch) | **Question mark** | Heavy promotion needed; low share in a new, growing market |\n| Growth | **Star** | Sales growth and brand recognition; marketing aims to gain higher market share |\n| Maturity | **Cash cow** | Growth slows but share is significant; high sales and low unit costs (economies of scale) give higher profits that support other products |\n| Decline | **Dog** | Sales revenue and profits fall; extension strategies or withdrawal |\n\n* Managers must decide whether to spend money on **reviving demand for dogs** (through extension strategies) or to withdraw all investment in them, releasing cash for other products.\n* The BCG matrix is a **toolkit** for linking the product life cycle, the product portfolio and the elements of the **marketing mix**: each product at a different stage needs a different marketing mix (Question 27.1 Virgin Group; Question 47.2 CK Hutchison Holdings).",
      "keyTakeaways": [
        "Introduction = question mark; growth = star; maturity = cash cow; decline = dog.",
        "Cash cows in maturity fund new products in their introduction and growth stages.",
        "Extension strategies can delay a cash cow becoming a dog, or revive a dog."
      ],
      "examTips": [
        "In 'explain the importance of a balanced portfolio' answers, use the PLC link: products at different stages smooth the firm's overall cash flow and profit."
      ]
    },
    {
      "id": "sec-bcg-evaluation",
      "title": "5. Evaluation of the BCG Matrix",
      "content": "### Benefits *(pp.636, 638)*\n* Provides a **clear visual overview** (a quick synopsis) of a firm's product portfolio, so managers can see **at a glance whether the portfolio is balanced**.\n* Flags problems: too many dogs or wild cards means the firm may struggle to compete in future; over-reliance on a few cash cows means it should add more promising question marks and stars.\n* Helps decide which products receive **more (or less) investment**, and which should be withdrawn or remarketed.\n* Helps develop growth strategies (Ansoff, Chapter 45) by adding new products to an existing or new range.\n\n### Limitations (pp.636-638)\n* **Only a snapshot** at a point in time; it does not account for changes in the external environment (STEEPLE, Chapter 46).\n* **Does not explain why** a product sits in a quadrant, as many factors determine success or failure.\n* **Assumes higher market share means higher profits**, which is not always true, especially if share was gained at the opportunity cost of lower prices and profit margins. Example: **Disneyland Paris** had high revenue and market share but made huge losses (2002-2006), raised a further $350m through share issues in 2005 to avoid liquidation, carried debt of around 15 times its gross earnings, and needed an extra €1.5bn investment in 2017.\n* **Of little use in predicting the future**: no one predicted the sudden growth in PPE (face masks, hand sanitizers) before COVID-19, and a fast-growing market today may decline rapidly.\n\n### Judgement\nNo tool guarantees success. The BCG matrix should be used **in conjunction with other tools**, such as Ansoff's matrix, SWOT and STEEPLE analysis.",
      "keyTakeaways": [
        "Strength: a simple visual check of portfolio balance and investment priorities.",
        "Limitations: static snapshot, ignores external change, does not explain causes, wrongly assumes share = profit, poor predictor of the future.",
        "Disneyland Paris shows high market share does not guarantee profit.",
        "Use alongside Ansoff, SWOT and STEEPLE."
      ],
      "examTips": [
        "For 10-mark evaluation, pair each benefit with a limitation and finish with 'it depends on' judgement (e.g. reliability of market data, how fast the market is changing).",
        "Use Disneyland Paris or the COVID-19 PPE example as evidence for limitations."
      ]
    }
  ],
  "highYieldTerms": [
    { "term": "Boston Consulting Group (BCG) matrix", "definition": "A situational and decision-making tool used for analysing the product portfolio of a business; it shows whether products have high or low market share and operate in high or low market growth industries (p.639)." },
    { "term": "Product portfolio", "definition": "The collection of all the products owned by a business at a point in time (p.396)." },
    { "term": "Strategic business unit (SBU)", "definition": "A division of an organization, such as Gatorade, Lay's or KFC within PepsiCo, which can be placed in a product portfolio (p.635)." },
    { "term": "Market share", "definition": "The horizontal BCG dimension: a product's relative market share in the industry (high or low) (pp.635-636)." },
    { "term": "Market growth", "definition": "The vertical BCG dimension: whether the industry is high growth (growing) or low growth (mature) (pp.635-637)." },
    { "term": "Stars", "definition": "Products with high or rising market share in a high growth market; they have the potential to become cash cows if funded and marketed appropriately (p.639)." },
    { "term": "Cash cow", "definition": "Any product in a firm's portfolio that generates significant money due to its large market share in a mature market (p.639)." },
    { "term": "Question marks (wild cards / problem children)", "definition": "Products that compete in high market growth industries but have low market share; they consume lots of cash but generate little, if any, profit (p.639)." },
    { "term": "Dogs", "definition": "Products with low market share in low growth or stagnant markets; they do not generate much cash or profit (p.639)." },
    { "term": "Build", "definition": "Investing the necessary resources to increase market share in order to turn question marks into stars (p.637)." },
    { "term": "Harvest (milk)", "definition": "Reaping the benefits (profits) of a product, turning stars into cash cows and using cash cow money to fund stars and question marks (p.637)." },
    { "term": "Hold", "definition": "Investing enough resources to keep cash cows in their current position; investment is likely to be minimal (p.637)." },
    { "term": "Divest", "definition": "Phasing out or selling off dog products to free up resources for use elsewhere (p.637)." },
    { "term": "Balanced portfolio", "definition": "The ideal portfolio, which might include some stars, a few question marks and several cash cows (p.636)." }
  ]
};
