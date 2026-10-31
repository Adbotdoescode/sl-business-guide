import { MCQQuestion, TwoMarkQuestion, FourMarkQuestion, SixMarkQuestion } from '@/types/curriculum';

// Unit 3.4 Final Accounts questions. Based on Paul Hoang, Business Management (5th ed.), Chapter 17; Circular business models from Chapter 51 (BMT 8).

export const MCQ_3_4: MCQQuestion[] = [
  {
    "id": "mcq-3.4-01",
    "subunit": "3.4-final-accounts",
    "topicTag": "Two Final Accounts",
    "questionNumber": 1,
    "question": "Which two statements make up the final accounts that all companies must provide to their stakeholders?",
    "options": [
      {
        "key": "A",
        "text": "The cash flow forecast and the budget"
      },
      {
        "key": "B",
        "text": "The profit and loss account and the balance sheet"
      },
      {
        "key": "C",
        "text": "The balance sheet and the break-even chart"
      },
      {
        "key": "D",
        "text": "The trading account and the cash flow forecast"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "correctRationale": "Final accounts consist of the profit and loss account (revenues and expenses over a period) and the balance sheet (assets and liabilities at a point in time).",
      "distractorAnalysis": "Cash flow forecasts, budgets and break-even charts are planning tools, not final accounts; the trading account is only one section of the P&L account."
    }
  },
  {
    "id": "mcq-3.4-02",
    "subunit": "3.4-final-accounts",
    "topicTag": "Stakeholder Uses",
    "questionNumber": 2,
    "question": "Which stakeholder group examines a firm's final accounts mainly to decide the extent to which trade credit should be given?",
    "options": [
      {
        "key": "A",
        "text": "Suppliers"
      },
      {
        "key": "B",
        "text": "The tax authority"
      },
      {
        "key": "C",
        "text": "Employees"
      },
      {
        "key": "D",
        "text": "Competitors"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "correctRationale": "Suppliers examine final accounts to decide how much trade credit to give, as they need to know clients are financially stable so they will be paid.",
      "distractorAnalysis": "The tax authority checks the correct tax is paid; employees look at pay rises and job security; competitors compare financial performance."
    }
  },
  {
    "id": "mcq-3.4-03",
    "subunit": "3.4-final-accounts",
    "topicTag": "COGS Calculation",
    "questionNumber": 3,
    "question": "A business has opening stock of $5,000, purchases of $25,000 and closing stock of $3,800. What is its cost of goods sold?",
    "options": [
      {
        "key": "A",
        "text": "$33,800"
      },
      {
        "key": "B",
        "text": "$30,000"
      },
      {
        "key": "C",
        "text": "$26,200"
      },
      {
        "key": "D",
        "text": "$16,200"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "correctRationale": "COGS = Opening stock + Purchases − Closing stock = $5,000 + $25,000 − $3,800 = $26,200.",
      "distractorAnalysis": "$33,800 adds closing stock; $30,000 ignores closing stock; $16,200 subtracts the opening stock instead of adding it ($25,000 − $5,000 − $3,800)."
    }
  },
  {
    "id": "mcq-3.4-04",
    "subunit": "3.4-final-accounts",
    "topicTag": "Gross Profit",
    "questionNumber": 4,
    "question": "Clockworks Ltd sold 3,000 clocks at $35 each. Opening stock was $15,000, purchases $50,000 and closing stock $20,000. What is its gross profit?",
    "options": [
      {
        "key": "A",
        "text": "$40,000"
      },
      {
        "key": "B",
        "text": "$60,000"
      },
      {
        "key": "C",
        "text": "$65,000"
      },
      {
        "key": "D",
        "text": "$105,000"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "correctRationale": "Sales revenue = 3,000 × $35 = $105,000. COGS = $15,000 + $50,000 − $20,000 = $45,000. Gross profit = $105,000 − $45,000 = $60,000.",
      "distractorAnalysis": "$105,000 is sales revenue; $40,000 wrongly deducts $65,000 (opening stock + purchases) as COGS; $65,000 is opening stock plus purchases, i.e. the stock available for sale before closing stock is deducted."
    }
  },
  {
    "id": "mcq-3.4-05",
    "subunit": "3.4-final-accounts",
    "topicTag": "Expenses",
    "questionNumber": 5,
    "question": "Which of the following is classed as an expense (rather than cost of goods sold) in the profit and loss account?",
    "options": [
      {
        "key": "A",
        "text": "Raw materials used in products sold"
      },
      {
        "key": "B",
        "text": "Purchases of stock"
      },
      {
        "key": "C",
        "text": "Opening stock"
      },
      {
        "key": "D",
        "text": "Insurance premiums for buildings"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "correctRationale": "Expenses are indirect or fixed costs such as administration charges, management salaries, insurance premiums, rent and stationery.",
      "distractorAnalysis": "Raw materials, purchases and opening stock are all part of the direct cost of goods sold."
    }
  },
  {
    "id": "mcq-3.4-06",
    "subunit": "3.4-final-accounts",
    "topicTag": "Interest and Tax",
    "questionNumber": 6,
    "question": "Why are interest and tax shown as separate items in the profit and loss account?",
    "options": [
      {
        "key": "A",
        "text": "They are not costs of the business"
      },
      {
        "key": "B",
        "text": "Their rates change over time and are beyond the control of the business, so profit before interest and tax allows like-for-like comparison"
      },
      {
        "key": "C",
        "text": "They are paid to shareholders"
      },
      {
        "key": "D",
        "text": "They are recorded only in the balance sheet"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "correctRationale": "Interest and tax rates change and are outside the firm's control; recording profit before interest and tax allows like-for-like and historical comparison.",
      "distractorAnalysis": "They are costs (A is false); dividends, not interest or tax, go to shareholders (C); they are P&L items (D)."
    }
  },
  {
    "id": "mcq-3.4-07",
    "subunit": "3.4-final-accounts",
    "topicTag": "Appropriation Account",
    "questionNumber": 7,
    "question": "Florists-R-Us has profit after interest and tax of $49,500 and pays 30% as dividends. What is its retained profit?",
    "options": [
      {
        "key": "A",
        "text": "$14,850"
      },
      {
        "key": "B",
        "text": "$34,650"
      },
      {
        "key": "C",
        "text": "$49,500"
      },
      {
        "key": "D",
        "text": "$55,000"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "correctRationale": "Dividends = 30% × $49,500 = $14,850. Retained profit = $49,500 − $14,850 = $34,650 (70%).",
      "distractorAnalysis": "$14,850 is the dividend; $49,500 is profit after interest and tax; $55,000 is profit before tax."
    }
  },
  {
    "id": "mcq-3.4-08",
    "subunit": "3.4-final-accounts",
    "topicTag": "Tax Calculation",
    "questionNumber": 8,
    "question": "A firm's profit before interest and tax is $65,000, interest is $10,000 and tax is charged at 10%. What is profit after interest and tax?",
    "options": [
      {
        "key": "A",
        "text": "$49,500"
      },
      {
        "key": "B",
        "text": "$58,500"
      },
      {
        "key": "C",
        "text": "$55,000"
      },
      {
        "key": "D",
        "text": "$48,500"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "correctRationale": "Profit before tax = $65,000 − $10,000 = $55,000. Tax = 10% × $55,000 = $5,500. Profit after interest and tax = $49,500.",
      "distractorAnalysis": "$58,500 ignores interest and applies 10% tax to $65,000; $55,000 ignores tax; $48,500 deducts interest after taxing $65,000 ($58,500 − $10,000)."
    }
  },
  {
    "id": "mcq-3.4-09",
    "subunit": "3.4-final-accounts",
    "topicTag": "Window Dressing",
    "questionNumber": 9,
    "question": "What is meant by window dressing?",
    "options": [
      {
        "key": "A",
        "text": "The illegal act of hiding losses from the tax authority"
      },
      {
        "key": "B",
        "text": "The legal act of creative accounting by manipulating financial data to make results appear more appealing"
      },
      {
        "key": "C",
        "text": "Spending on shop displays to raise sales revenue"
      },
      {
        "key": "D",
        "text": "Writing down the value of noncurrent assets"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "correctRationale": "Window dressing is the legal act of creative accounting that makes results appear more appealing, e.g. including the sale of fixed assets or goodwill.",
      "distractorAnalysis": "It is legal (A is wrong); C refers to visual merchandising; D describes depreciation."
    }
  },
  {
    "id": "mcq-3.4-10",
    "subunit": "3.4-final-accounts",
    "topicTag": "Current vs Noncurrent",
    "questionNumber": 10,
    "question": "Which item is a current asset?",
    "options": [
      {
        "key": "A",
        "text": "Bank overdraft"
      },
      {
        "key": "B",
        "text": "Debtors"
      },
      {
        "key": "C",
        "text": "Machinery"
      },
      {
        "key": "D",
        "text": "Mortgage"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "correctRationale": "Debtors owe money to the business and are likely to be turned into cash within 12 months, so they are a current asset.",
      "distractorAnalysis": "A bank overdraft is a current liability, machinery is a noncurrent asset and a mortgage is a noncurrent liability."
    }
  },
  {
    "id": "mcq-3.4-11",
    "subunit": "3.4-final-accounts",
    "topicTag": "Net Assets",
    "questionNumber": 11,
    "question": "A firm has total assets of $2,480,000 and total liabilities of $820,000. What is its total equity?",
    "options": [
      {
        "key": "A",
        "text": "$3,300,000"
      },
      {
        "key": "B",
        "text": "$1,000,000"
      },
      {
        "key": "C",
        "text": "$1,660,000"
      },
      {
        "key": "D",
        "text": "$820,000"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "correctRationale": "Net assets = Total assets − Total liabilities = $2,480,000 − $820,000 = $1,660,000, which must equal total equity.",
      "distractorAnalysis": "$3,300,000 adds the figures; $1,000,000 is only Bellamkonda's share capital; $820,000 is total liabilities."
    }
  },
  {
    "id": "mcq-3.4-12",
    "subunit": "3.4-final-accounts",
    "topicTag": "Share Capital",
    "questionNumber": 12,
    "question": "On a balance sheet, share capital shows:",
    "options": [
      {
        "key": "A",
        "text": "The current market value of the company's shares"
      },
      {
        "key": "B",
        "text": "The value raised when the shares were first sold"
      },
      {
        "key": "C",
        "text": "Dividends paid to shareholders this year"
      },
      {
        "key": "D",
        "text": "Profit retained in the business"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "correctRationale": "Share capital is the money raised through the sale of shares, showing the value raised when shares were first sold, not their current market value.",
      "distractorAnalysis": "A is the opposite of the textbook definition; dividends are in the appropriation account; retained profit is recorded as retained earnings."
    }
  },
  {
    "id": "mcq-3.4-13",
    "subunit": "3.4-final-accounts",
    "topicTag": "Unincorporated Businesses",
    "questionNumber": 13,
    "question": "How does the balance sheet of a sole trader differ from that of a limited company?",
    "options": [
      {
        "key": "A",
        "text": "It shows share capital but no retained earnings"
      },
      {
        "key": "B",
        "text": "It records owners' capital instead of share capital, and owners take drawings rather than dividends"
      },
      {
        "key": "C",
        "text": "It does not record any liabilities"
      },
      {
        "key": "D",
        "text": "It must show debentures under long-term liabilities"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "correctRationale": "Sole traders have no shareholders, so funds invested are owners' capital and money taken for personal use is drawings, not dividends.",
      "distractorAnalysis": "There is no share capital (A); liabilities are still recorded (C); debentures are only for limited companies (D)."
    }
  },
  {
    "id": "mcq-3.4-14",
    "subunit": "3.4-final-accounts",
    "topicTag": "Goodwill",
    "questionNumber": 14,
    "question": "Goodwill exists when:",
    "options": [
      {
        "key": "A",
        "text": "The value of a firm exceeds its book value (net assets)"
      },
      {
        "key": "B",
        "text": "A firm's liabilities exceed its assets"
      },
      {
        "key": "C",
        "text": "A firm registers a logo"
      },
      {
        "key": "D",
        "text": "Noncurrent assets fall in value"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "correctRationale": "Goodwill is the intangible asset that exists when the value of a firm exceeds the value of its net assets, reflecting reputation, image, connections and loyalty.",
      "distractorAnalysis": "B describes negative net assets; C is a registered trademark; D is depreciation."
    }
  },
  {
    "id": "mcq-3.4-15",
    "subunit": "3.4-final-accounts",
    "topicTag": "Intangible Assets",
    "questionNumber": 15,
    "question": "Which intangible asset gives legal protection to the original artistic work of an author, photographer, painter or musician?",
    "options": [
      {
        "key": "A",
        "text": "Patent"
      },
      {
        "key": "B",
        "text": "Registered trademark"
      },
      {
        "key": "C",
        "text": "Copyright"
      },
      {
        "key": "D",
        "text": "Goodwill"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "correctRationale": "Copyrights protect original artistic works; others must seek permission, usually for a fee, to reproduce or modify them.",
      "distractorAnalysis": "Patents protect inventions; trademarks protect distinctive signs such as the Nike swoosh; goodwill is value above book value."
    }
  },
  {
    "id": "mcq-3.4-16",
    "subunit": "3.4-final-accounts",
    "topicTag": "Straight Line Depreciation (HL)",
    "questionNumber": 16,
    "question": "Safarie Air Tours buys an airplane for $5.2m with a useful life of 5 years and a residual value of $1.6m. Using the straight line method, what is the annual depreciation?",
    "options": [
      {
        "key": "A",
        "text": "$1.04m"
      },
      {
        "key": "B",
        "text": "$0.72m"
      },
      {
        "key": "C",
        "text": "$0.32m"
      },
      {
        "key": "D",
        "text": "$3.6m"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "correctRationale": "Annual depreciation = (Purchase cost − Residual value) ÷ Lifespan = ($5.2m − $1.6m) ÷ 5 = $0.72m.",
      "distractorAnalysis": "$1.04m ignores the residual value; $0.32m divides only the residual value; $3.6m is the total depreciation over 5 years."
    }
  },
  {
    "id": "mcq-3.4-17",
    "subunit": "3.4-final-accounts",
    "topicTag": "Units of Production (HL)",
    "questionNumber": 17,
    "question": "A printing machine costs $500,000, has a scrap value of $100,000 and is expected to last 5,000 hours. If it is used for 1,500 hours in Year 1, what is the Year 1 depreciation expense?",
    "options": [
      {
        "key": "A",
        "text": "$80,000"
      },
      {
        "key": "B",
        "text": "$100,000"
      },
      {
        "key": "C",
        "text": "$120,000"
      },
      {
        "key": "D",
        "text": "$150,000"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "correctRationale": "Depreciation per hour = ($500,000 − $100,000) ÷ 5,000 = $80. Year 1 expense = $80 × 1,500 = $120,000.",
      "distractorAnalysis": "$150,000 ignores the scrap value ($100 × 1,500); $80,000 is the straight line charge over 5 years; $100,000 is the scrap value."
    }
  },
  {
    "id": "mcq-3.4-18",
    "subunit": "3.4-final-accounts",
    "topicTag": "Causes of Depreciation (HL)",
    "questionNumber": 18,
    "question": "Older versions of smartphones and software losing value because newer, better products are available is an example of:",
    "options": [
      {
        "key": "A",
        "text": "Appreciation"
      },
      {
        "key": "B",
        "text": "Wear and tear"
      },
      {
        "key": "C",
        "text": "Obsolescence"
      },
      {
        "key": "D",
        "text": "Window dressing"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "correctRationale": "Obsolescence occurs when newer and better products reduce demand for, and the value of, existing assets.",
      "distractorAnalysis": "Appreciation is a rise in value; wear and tear comes from repeated use; window dressing is creative accounting."
    }
  },
  {
    "id": "mcq-3.4-19",
    "subunit": "3.4-final-accounts",
    "topicTag": "Linear Business Model (CBM)",
    "questionNumber": 19,
    "question": "Which statement best describes the traditional (linear) business model?",
    "options": [
      {
        "key": "A",
        "text": "Reduce, reuse, repair and recycle"
      },
      {
        "key": "B",
        "text": "Produce, sell, use and throw away"
      },
      {
        "key": "C",
        "text": "Lease, rent, return and remanufacture"
      },
      {
        "key": "D",
        "text": "Share, swap, subscribe and stream"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "correctRationale": "The linear model focuses on producing, selling, using and throwing away products with little consideration of environmental impacts.",
      "distractorAnalysis": "A is the 4 Rs of circular business models; C and D describe features of product service system and sharing models."
    }
  },
  {
    "id": "mcq-3.4-20",
    "subunit": "3.4-final-accounts",
    "topicTag": "Circular Supply Models",
    "questionNumber": 20,
    "question": "Veolia burns poultry litter and scrap wood to generate electricity. This is best described as a:",
    "options": [
      {
        "key": "A",
        "text": "Sharing model"
      },
      {
        "key": "B",
        "text": "Product service system model"
      },
      {
        "key": "C",
        "text": "Circular supply model"
      },
      {
        "key": "D",
        "text": "Product life extension model"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "correctRationale": "Circular supply models replace finite natural resources with renewable, recyclable or recovered inputs, using waste as a resource input.",
      "distractorAnalysis": "Sharing and product service models concern how customers access products; product life extension makes existing products last longer."
    }
  },
  {
    "id": "mcq-3.4-21",
    "subunit": "3.4-final-accounts",
    "topicTag": "Resource Recovery Models",
    "questionNumber": 21,
    "question": "Turning the waste or by-products of one industry into raw materials for another industry is known as:",
    "options": [
      {
        "key": "A",
        "text": "Industrial symbiosis"
      },
      {
        "key": "B",
        "text": "Servitization"
      },
      {
        "key": "C",
        "text": "Cradle-to-cradle design"
      },
      {
        "key": "D",
        "text": "Window dressing"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "correctRationale": "Industrial symbiosis is one of the resource recovery examples given by the textbook.",
      "distractorAnalysis": "Servitization is the product service system model; C2C re-processes end-of-life waste into new resources; window dressing is creative accounting."
    }
  },
  {
    "id": "mcq-3.4-22",
    "subunit": "3.4-final-accounts",
    "topicTag": "Product Life Extension Models",
    "questionNumber": 22,
    "question": "Caterpillar remanufactures used engine parts to like-new condition, and Apple launched 'Self Service Repair'. Both are examples of:",
    "options": [
      {
        "key": "A",
        "text": "Resource recovery models"
      },
      {
        "key": "B",
        "text": "Product life extension models"
      },
      {
        "key": "C",
        "text": "Sharing models"
      },
      {
        "key": "D",
        "text": "Circular supply models"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "correctRationale": "Product life extension models extend the lifespan of products through durability, repair and remanufacturing.",
      "distractorAnalysis": "These firms keep existing products in use rather than recovering raw materials from waste, sharing products, or switching to renewable inputs."
    }
  },
  {
    "id": "mcq-3.4-23",
    "subunit": "3.4-final-accounts",
    "topicTag": "Sharing Models",
    "questionNumber": 23,
    "question": "Which business is the textbook's example of a sharing model that owns no real estate?",
    "options": [
      {
        "key": "A",
        "text": "Michelin"
      },
      {
        "key": "B",
        "text": "Veolia"
      },
      {
        "key": "C",
        "text": "Airbnb"
      },
      {
        "key": "D",
        "text": "Caterpillar"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "correctRationale": "Airbnb uses existing properties being shared rather than new hotels being built.",
      "distractorAnalysis": "Michelin is a product service system example, Veolia circular supply, and Caterpillar product life extension."
    }
  },
  {
    "id": "mcq-3.4-24",
    "subunit": "3.4-final-accounts",
    "topicTag": "Product Service System Models",
    "questionNumber": 24,
    "question": "Michelin's business customers pay for the miles driven rather than buying tyres. This is an example of:",
    "options": [
      {
        "key": "A",
        "text": "A product service system model (servitization)"
      },
      {
        "key": "B",
        "text": "A linear business model"
      },
      {
        "key": "C",
        "text": "Industrial symbiosis"
      },
      {
        "key": "D",
        "text": "A circular supply model"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "correctRationale": "The firm sells the function of the product on a pay-for-use basis and keeps ownership, which is servitization.",
      "distractorAnalysis": "A linear model sells the product to be thrown away; industrial symbiosis and circular supply concern resource inputs."
    }
  },
  {
    "id": "mcq-3.4-25",
    "subunit": "3.4-final-accounts",
    "topicTag": "Limitations of CBMs",
    "questionNumber": 25,
    "question": "Which of the following is a limitation of adopting circular business models according to the textbook?",
    "options": [
      {
        "key": "A",
        "text": "They attract socially responsible investors"
      },
      {
        "key": "B",
        "text": "They reduce the risk of bad publicity"
      },
      {
        "key": "C",
        "text": "They can be highly expensive in the short term"
      },
      {
        "key": "D",
        "text": "They create new revenue streams"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "correctRationale": "Switching to a CBM can be very expensive in the short term, and the linear model is often significantly cheaper.",
      "distractorAnalysis": "A, B and D are advantages of CBMs listed by the textbook."
    }
  },
  {
    "id": "mcq-3.4-26",
    "subunit": "3.4-final-accounts",
    "topicTag": "Resource Recovery Models",
    "questionNumber": 26,
    "question": "According to the OECD, supplying raw materials through recycling rather than from non-renewable natural resources can reduce greenhouse gas emissions by as much as:",
    "options": [
      {
        "key": "A",
        "text": "10%"
      },
      {
        "key": "B",
        "text": "50%"
      },
      {
        "key": "C",
        "text": "80%"
      },
      {
        "key": "D",
        "text": "90%"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "correctRationale": "The textbook cites the OECD figure of up to 90% for resource recovery through recycling.",
      "distractorAnalysis": "80% is the OECD figure for resources and waste saved by remanufacturing under product life extension models."
    }
  }
];

export const TWO_MARK_3_4: TwoMarkQuestion[] = [
  {
    "id": "q2m-3.4-01",
    "subunit": "3.4-final-accounts",
    "questionNumber": "3.4.1",
    "question": "Define the term final accounts.",
    "marks": 2,
    "commandTerm": "Define",
    "assessmentObjective": "AO1",
    "modelAnswer": "Final accounts are the published annual financial statements that all limited liability companies are legally obliged to report, namely the balance sheet and the profit and loss account.",
    "markBreakdown": [
      {
        "mark": 1,
        "criterion": "Published annual financial statements that companies are legally obliged to report"
      },
      {
        "mark": 1,
        "criterion": "Names both: the balance sheet and the profit and loss account"
      }
    ],
    "examinerTips": "Name both statements for the second mark."
  },
  {
    "id": "q2m-3.4-02",
    "subunit": "3.4-final-accounts",
    "questionNumber": "3.4.2",
    "question": "Define the term closing stock. (Question 17.2a, Clockworks Ltd)",
    "marks": 2,
    "commandTerm": "Define",
    "assessmentObjective": "AO1",
    "modelAnswer": "Closing stock is the value of stock (inventory) that remains unsold at the end of the trading period. It is deducted when calculating cost of goods sold (Opening stock + Purchases − Closing stock).",
    "markBreakdown": [
      {
        "mark": 1,
        "criterion": "Value of unsold stock/inventory at the end of the trading period"
      },
      {
        "mark": 1,
        "criterion": "Links to COGS (deducted from opening stock + purchases)"
      }
    ],
    "examinerTips": "Linking to the COGS formula secures the second mark."
  },
  {
    "id": "q2m-3.4-03",
    "subunit": "3.4-final-accounts",
    "questionNumber": "3.4.3",
    "question": "Distinguish between gross profit and net profit.",
    "marks": 2,
    "commandTerm": "Distinguish",
    "assessmentObjective": "AO1",
    "modelAnswer": "Gross profit is sales revenue minus the cost of goods sold (direct costs). Net profit is gross profit minus expenses (indirect or fixed costs such as rent and salaries), i.e. the surplus after all costs and expenses.",
    "markBreakdown": [
      {
        "mark": 1,
        "criterion": "Gross profit = sales revenue − COGS"
      },
      {
        "mark": 1,
        "criterion": "Net profit = gross profit − expenses (indirect/fixed costs)"
      }
    ],
    "examinerTips": "A distinction must state both sides clearly."
  },
  {
    "id": "q2m-3.4-04",
    "subunit": "3.4-final-accounts",
    "questionNumber": "3.4.4",
    "question": "What is meant by retained profit?",
    "marks": 2,
    "commandTerm": "What is meant by",
    "assessmentObjective": "AO1",
    "modelAnswer": "Retained profit is the amount of profit after interest, tax and dividends have been paid. It is kept and reinvested in the business as an internal source of finance and recorded as retained earnings in the balance sheet.",
    "markBreakdown": [
      {
        "mark": 1,
        "criterion": "Profit after interest, tax and dividends"
      },
      {
        "mark": 1,
        "criterion": "Kept/reinvested in the business (internal source of finance; retained earnings in the balance sheet)"
      }
    ],
    "examinerTips": "For non-profit organizations, the term is retained surplus."
  },
  {
    "id": "q2m-3.4-05",
    "subunit": "3.4-final-accounts",
    "questionNumber": "3.4.5",
    "question": "Define the term window dressing.",
    "marks": 2,
    "commandTerm": "Define",
    "assessmentObjective": "AO1",
    "modelAnswer": "Window dressing is the legal act of creative accounting by manipulating financial data (final accounts) to make the results appear more appealing, even though this may disguise the true financial position.",
    "markBreakdown": [
      {
        "mark": 1,
        "criterion": "Legal creative accounting / manipulation of financial data"
      },
      {
        "mark": 1,
        "criterion": "Purpose: make results appear more attractive (disguising the true position)"
      }
    ],
    "examinerTips": "Stress that window dressing is legal, though its ethics may be questioned."
  },
  {
    "id": "q2m-3.4-06",
    "subunit": "3.4-final-accounts",
    "questionNumber": "3.4.6",
    "question": "Define the term overdraft. (Question 17.5a, Marc Brothers Motor Repairs)",
    "marks": 2,
    "commandTerm": "Define",
    "assessmentObjective": "AO1",
    "modelAnswer": "A bank overdraft is a short-term source of finance that enables a business to withdraw more from its bank account than the amount that exists in it. It is a current liability and must be repaid quickly as interest rates tend to be very high.",
    "markBreakdown": [
      {
        "mark": 1,
        "criterion": "Withdrawing more from a bank account than exists (short-term finance)"
      },
      {
        "mark": 1,
        "criterion": "Current liability / must be repaid quickly due to high interest"
      }
    ],
    "examinerTips": "Classify it correctly as a current liability."
  },
  {
    "id": "q2m-3.4-07",
    "subunit": "3.4-final-accounts",
    "questionNumber": "3.4.7",
    "question": "Define the term share capital. (Question 17.7a, Senjaya Fabrics Ltd)",
    "marks": 2,
    "commandTerm": "Define",
    "assessmentObjective": "AO1",
    "modelAnswer": "Share capital is the amount of money raised through the sale of shares. It shows the value raised when the shares were first sold rather than their current market value.",
    "markBreakdown": [
      {
        "mark": 1,
        "criterion": "Money raised from the sale of shares"
      },
      {
        "mark": 1,
        "criterion": "Value at first sale, not current market value"
      }
    ],
    "examinerTips": "Do not confuse share capital with the company's current share price."
  },
  {
    "id": "q2m-3.4-08",
    "subunit": "3.4-final-accounts",
    "questionNumber": "3.4.8",
    "question": "Define the term intangible assets. (Question 17.8a, Harry Potter)",
    "marks": 2,
    "commandTerm": "Define",
    "assessmentObjective": "AO1",
    "modelAnswer": "Intangible assets are noncurrent assets that do not exist in physical form but are of monetary value and can earn revenue, such as goodwill, copyrights, patents, brand names and registered trademarks.",
    "markBreakdown": [
      {
        "mark": 1,
        "criterion": "Non-physical noncurrent/fixed assets"
      },
      {
        "mark": 1,
        "criterion": "Have monetary value / earn revenue, with an example (e.g. copyrights)"
      }
    ],
    "examinerTips": "An example helps secure the second mark."
  },
  {
    "id": "q2m-3.4-09",
    "subunit": "3.4-final-accounts",
    "questionNumber": "3.4.9",
    "question": "Distinguish between current liabilities and noncurrent liabilities.",
    "marks": 2,
    "commandTerm": "Distinguish",
    "assessmentObjective": "AO1",
    "modelAnswer": "Current liabilities are debts that must be settled within one year of the balance sheet date, such as bank overdrafts and trade creditors. Noncurrent liabilities are debts repayable after twelve months of the balance sheet date, such as mortgages, bank loans and debentures.",
    "markBreakdown": [
      {
        "mark": 1,
        "criterion": "Current: repayable within 12 months, with an example"
      },
      {
        "mark": 1,
        "criterion": "Noncurrent: repayable after 12 months, with an example"
      }
    ],
    "examinerTips": "The 12-month boundary from the balance sheet date is the key distinction."
  },
  {
    "id": "q2m-3.4-10",
    "subunit": "3.4-final-accounts",
    "questionNumber": "3.4.10",
    "question": "Define the term depreciation. (HL)",
    "marks": 2,
    "commandTerm": "Define",
    "assessmentObjective": "AO1",
    "modelAnswer": "Depreciation is the fall in the value of noncurrent (fixed) assets over time, caused by wear and tear (repeated use) or obsolescence (becoming out of date).",
    "markBreakdown": [
      {
        "mark": 1,
        "criterion": "Fall in value of noncurrent assets over time"
      },
      {
        "mark": 1,
        "criterion": "Cause: wear and tear or obsolescence"
      }
    ],
    "examinerTips": "Always state at least one cause."
  },
  {
    "id": "q2m-3.4-11",
    "subunit": "3.4-final-accounts",
    "questionNumber": "3.4.11",
    "question": "Define the term residual value. (Question 17.9b, Safarie Air Tours, HL)",
    "marks": 2,
    "commandTerm": "Define",
    "assessmentObjective": "AO1",
    "modelAnswer": "Residual value (or scrap value) is an estimate of the value of a noncurrent asset at the end of its useful life, i.e. how much it is expected to be worth when it is replaced.",
    "markBreakdown": [
      {
        "mark": 1,
        "criterion": "Estimated value of a noncurrent asset"
      },
      {
        "mark": 1,
        "criterion": "At the end of its useful life"
      }
    ],
    "examinerTips": "Many firms use a residual value of zero because estimates may prove inaccurate."
  },
  {
    "id": "q2m-3.4-12",
    "subunit": "3.4-final-accounts",
    "questionNumber": "3.4.12",
    "question": "Neville Stibbs Printers bought a printing machine for $250,000, expected to produce 500,000 units before being sold for $50,000. Year 1 output is 90,000 units. Calculate the Year 1 depreciation expense using the units of production method. (HL)",
    "marks": 2,
    "commandTerm": "Apply",
    "assessmentObjective": "AO1",
    "modelAnswer": "Depreciation per unit = ($250,000 − $50,000) ÷ 500,000 = $0.40 per unit. Year 1 depreciation expense = $0.40 × 90,000 = $36,000.",
    "markBreakdown": [
      {
        "mark": 1,
        "criterion": "Correct depreciation per unit of $0.40 with workings"
      },
      {
        "mark": 1,
        "criterion": "Correct Year 1 expense of $36,000"
      }
    ],
    "examinerTips": "Show workings: the per-unit rate can earn a mark even if the final answer is wrong."
  },
  {
    "id": "q2m-3.4-13",
    "subunit": "3.4-final-accounts",
    "questionNumber": "3.4.13",
    "question": "Define the term circular business model.",
    "marks": 2,
    "commandTerm": "Define",
    "assessmentObjective": "AO1",
    "modelAnswer": "Circular business models are decision-making tools that emphasize the environmental impacts and sustainability of all business activities (unlike traditional models focused on costs, revenues and profits), enabling businesses to reduce, reuse, repair and recycle waste so materials stay in the economy for as long as possible.",
    "markBreakdown": [
      {
        "mark": 1,
        "criterion": "Decision-making tool focused on environmental impacts / sustainability"
      },
      {
        "mark": 1,
        "criterion": "Reduce, reuse, repair and recycle so resources stay in use (contrast with linear model)"
      }
    ],
    "examinerTips": "This is Question 51.1(a) in the textbook. Contrasting with the linear model helps secure the second mark."
  },
  {
    "id": "q2m-3.4-14",
    "subunit": "3.4-final-accounts",
    "questionNumber": "3.4.14",
    "question": "Define the term disposable society.",
    "marks": 2,
    "commandTerm": "Define",
    "assessmentObjective": "AO1",
    "modelAnswer": "A disposable society results from traditional (linear) business models: consumers replace or upgrade products such as smartphones and clothing because they are bored of them, not because they actually need to, so goods are discarded well before the end of their expected life.",
    "markBreakdown": [
      {
        "mark": 1,
        "criterion": "Consumers replace or upgrade products before they need to"
      },
      {
        "mark": 1,
        "criterion": "Result of traditional / linear business models"
      }
    ],
    "examinerTips": "Fast fashion (Case Study 51.1) is a good illustration."
  },
  {
    "id": "q2m-3.4-15",
    "subunit": "3.4-final-accounts",
    "questionNumber": "3.4.15",
    "question": "Define the term product service system model (servitization).",
    "marks": 2,
    "commandTerm": "Define",
    "assessmentObjective": "AO1",
    "modelAnswer": "A circular business model in which a business provides the function or service of a product rather than the physical good (pay-for-use rather than buy-to-own), keeping ownership, e.g. Spotify instead of CDs.",
    "markBreakdown": [
      {
        "mark": 1,
        "criterion": "Business provides the service/function rather than the physical product"
      },
      {
        "mark": 1,
        "criterion": "Customers pay for use (lease/rent) while the firm keeps ownership"
      }
    ],
    "examinerTips": "Do not confuse with sharing models, where customers share existing products."
  },
  {
    "id": "q2m-3.4-16",
    "subunit": "3.4-final-accounts",
    "questionNumber": "3.4.16",
    "question": "Outline two examples of resource recovery models.",
    "marks": 2,
    "commandTerm": "Outline",
    "assessmentObjective": "AO1",
    "modelAnswer": "Closed-loop recycling: waste is collected, recycled and reproduced to make something new. Industrial symbiosis: the waste or by-products of one industry become raw materials for another industry. (Cradle-to-cradle design is also accepted.)",
    "markBreakdown": [
      {
        "mark": 1,
        "criterion": "First valid example, outlined"
      },
      {
        "mark": 1,
        "criterion": "Second valid example, outlined"
      }
    ],
    "examinerTips": "Use the textbook terms: C2C, closed-loop recycling, industrial symbiosis."
  },
  {
    "id": "q2m-3.4-17",
    "subunit": "3.4-final-accounts",
    "questionNumber": "3.4.17",
    "question": "Define the term sharing model.",
    "marks": 2,
    "commandTerm": "Define",
    "assessmentObjective": "AO1",
    "modelAnswer": "A circular business model that offers services where customers share products, which would otherwise have low ownership or usage rates, rather than owning them, e.g. Airbnb or ZipCar.",
    "markBreakdown": [
      {
        "mark": 1,
        "criterion": "Customers share products rather than owning them"
      },
      {
        "mark": 1,
        "criterion": "Makes use of under-used products / low usage rate"
      }
    ],
    "examinerTips": "An example such as Airbnb or Uber supports the definition."
  }
];

export const FOUR_MARK_3_4: FourMarkQuestion[] = [
  {
    "id": "q4m-3.4-01",
    "subunit": "3.4-final-accounts",
    "questionNumber": "Question 3.4.1",
    "question": "Explain the importance of final accounts to two stakeholder groups of Nestlé.",
    "caseStimulus": "Nestlé is the world's largest food company, founded by Henri Nestlé in 1866. Its brands include Kit Kat, Smarties, Nescafé, Nespresso and Maggi. A huge proportion of its revenue comes from confectionery, a market also dominated by rivals Mars and Cadbury's. Nestlé is listed on the Swiss stock exchange in Zurich and employs over 352,000 people worldwide.",
    "contextTitle": "Nestlé: Stakeholder Uses of Final Accounts",
    "marks": 4,
    "commandTerm": "Explain",
    "assessmentObjective": "AO2",
    "peelModelAnswer": {
      "point1": {
        "title": "Shareholders",
        "point": "Shareholders use final accounts to see where their money was spent and the return on their investment.",
        "evidence": "Nestlé is listed on the Swiss stock exchange in Zurich, so its shareholders can buy or sell its shares.",
        "explanation": "Based on the profit shown in the P&L account and dividends paid, they can decide whether to hold, sell or buy more Nestlé shares.",
        "link": "Final accounts therefore guide shareholders' investment decisions."
      },
      "point2": {
        "title": "Employees",
        "point": "Employees use final accounts to assess the likelihood of pay rises and their job security.",
        "evidence": "Nestlé employs over 352,000 people worldwide.",
        "explanation": "Strong profits could support a case for pay rises, while a weak financial position might signal risks to job security.",
        "link": "Final accounts therefore help Nestlé's staff judge their future with the company."
      }
    },
    "rubricChecklist": [
      {
        "id": "q4m-3.4-01-c1",
        "criterion": "Explains the use of final accounts by a first stakeholder group",
        "mark": 1
      },
      {
        "id": "q4m-3.4-01-c2",
        "criterion": "Applies the first stakeholder to the Nestlé context",
        "mark": 1
      },
      {
        "id": "q4m-3.4-01-c3",
        "criterion": "Explains the use of final accounts by a second stakeholder group",
        "mark": 1
      },
      {
        "id": "q4m-3.4-01-c4",
        "criterion": "Applies the second stakeholder to the Nestlé context",
        "mark": 1
      }
    ]
  },
  {
    "id": "q4m-3.4-02",
    "subunit": "3.4-final-accounts",
    "questionNumber": "Question 3.4.2",
    "question": "Using the data, construct a trading account for Clockworks Ltd for the year ended 31 March 2022.",
    "caseStimulus": "Clockworks Ltd data: 3,000 clocks sold at $35 each; closing stock valued at $20,000; purchases valued at $50,000; opening stock valued at $15,000.",
    "contextTitle": "Clockworks Ltd: Trading Account",
    "marks": 4,
    "commandTerm": "Apply",
    "assessmentObjective": "AO2",
    "peelModelAnswer": {
      "point1": {
        "title": "Sales revenue",
        "point": "First calculate sales revenue.",
        "evidence": "3,000 clocks × $35 = $105,000.",
        "explanation": "Sales revenue is the value of products sold to customers and is the top line of the trading account.",
        "link": "This gives the figure from which cost of goods sold is deducted."
      },
      "point2": {
        "title": "Cost of goods sold and gross profit",
        "point": "Then calculate COGS and gross profit.",
        "evidence": "COGS = $15,000 + $50,000 − $20,000 = $45,000; Gross profit = $105,000 − $45,000 = $60,000.",
        "explanation": "Closing stock is deducted because it was not sold; COGS is shown in brackets.",
        "link": "The trading account, titled 'Trading account for Clockworks Ltd for the year ended 31 March 2022', shows a gross profit of $60,000."
      }
    },
    "rubricChecklist": [
      {
        "id": "q4m-3.4-02-c1",
        "criterion": "Appropriate title",
        "mark": 1
      },
      {
        "id": "q4m-3.4-02-c2",
        "criterion": "Correct sales revenue of $105,000",
        "mark": 1
      },
      {
        "id": "q4m-3.4-02-c3",
        "criterion": "Correct COGS of $45,000 with stock workings",
        "mark": 1
      },
      {
        "id": "q4m-3.4-02-c4",
        "criterion": "Correct gross profit of $60,000",
        "mark": 1
      }
    ]
  },
  {
    "id": "q4m-3.4-03",
    "subunit": "3.4-final-accounts",
    "questionNumber": "Question 3.4.3",
    "question": "Explain two benefits of protecting copyrights for the Harry Potter franchise.",
    "caseStimulus": "J.K. Rowling wrote her first Harry Potter novel in 1994. In 1998 Warner Bros bought the film rights. Global sales of the books exceeded 400 million copies in over 65 languages, and TIME valued the Harry Potter brand at over $25 billion. Rowling, her publishers and Warner Bros are keen to protect their intangible assets, including the international copyrights of the books.",
    "contextTitle": "Harry Potter: Protecting Copyrights",
    "marks": 4,
    "commandTerm": "Explain",
    "assessmentObjective": "AO2",
    "peelModelAnswer": {
      "point1": {
        "title": "Revenue from permission fees",
        "point": "Copyrights mean anyone wishing to reproduce or modify the work must seek permission, usually for a fee.",
        "evidence": "Warner Bros purchased the rights for film adaptations of the Harry Potter novels in 1998.",
        "explanation": "Protected copyrights allowed Rowling to earn revenue by selling these rights rather than having the work copied freely.",
        "link": "Copyright protection therefore turns the books into a revenue-earning intangible asset."
      },
      "point2": {
        "title": "Protecting brand value",
        "point": "Copyrights give legal protection against those who might copy the original work.",
        "evidence": "The brand is worth over $25 billion, with sales over 400 million copies.",
        "explanation": "Preventing unauthorised copies protects book sales and the exclusivity of the franchise, protecting its high market value.",
        "link": "This protects the value of the franchise for Rowling, her publishers and Warner Bros."
      }
    },
    "rubricChecklist": [
      {
        "id": "q4m-3.4-03-c1",
        "criterion": "Explains a first benefit of copyright protection",
        "mark": 1
      },
      {
        "id": "q4m-3.4-03-c2",
        "criterion": "Applies the first benefit to Harry Potter",
        "mark": 1
      },
      {
        "id": "q4m-3.4-03-c3",
        "criterion": "Explains a second benefit",
        "mark": 1
      },
      {
        "id": "q4m-3.4-03-c4",
        "criterion": "Applies the second benefit to Harry Potter",
        "mark": 1
      }
    ]
  },
  {
    "id": "q4m-3.4-04",
    "subunit": "3.4-final-accounts",
    "questionNumber": "Question 3.4.4",
    "question": "Comment on how the $25 billion valuation of the Harry Potter brand might be affected by the subjective nature of placing values on intangible assets.",
    "caseStimulus": "According to TIME, the Harry Potter brand is worth over $25 billion. The huge commercial success and high market value of the franchise means that Rowling, her publishers and Warner Bros are keen to protect their intangible assets.",
    "contextTitle": "Harry Potter: Valuing Intangible Assets",
    "marks": 4,
    "commandTerm": "Explain",
    "assessmentObjective": "AO2",
    "peelModelAnswer": {
      "point1": {
        "title": "Valuations differ between sources",
        "point": "Intangible assets are very difficult to value in an objective or scientific way.",
        "evidence": "In 2014, Forbes valued Google's brand at about $47bn while Interbrand valued it at over $93bn.",
        "explanation": "Similarly, TIME's $25bn figure for Harry Potter is one estimate; another analyst could produce a very different value.",
        "link": "So the $25bn should be treated with caution."
      },
      "point2": {
        "title": "Value only realised on sale",
        "point": "The true value of an intangible is only known when it is sold, e.g. goodwill is only realised when a buyer pays a premium.",
        "evidence": "No buyer has paid $25bn for the Harry Potter brand.",
        "explanation": "Including such an estimate in accounts could be seen as window dressing that inflates the value of the business.",
        "link": "The valuation is therefore subjective and may not reflect what the brand would actually fetch."
      }
    },
    "rubricChecklist": [
      {
        "id": "q4m-3.4-04-c1",
        "criterion": "Explains the subjectivity of valuing intangibles",
        "mark": 1
      },
      {
        "id": "q4m-3.4-04-c2",
        "criterion": "Applies to the $25bn Harry Potter valuation",
        "mark": 1
      },
      {
        "id": "q4m-3.4-04-c3",
        "criterion": "Explains a second issue (value realised only on sale / window dressing)",
        "mark": 1
      },
      {
        "id": "q4m-3.4-04-c4",
        "criterion": "Applies the second issue to the case",
        "mark": 1
      }
    ]
  },
  {
    "id": "q4m-3.4-05",
    "subunit": "3.4-final-accounts",
    "questionNumber": "Question 3.4.5",
    "question": "Neville Stibbs Printers (NSP) bought a new printing machine for $250,000. Calculate (a) the depreciation per unit and (b) the book value of the machine at the end of Year 2, using the units of production method. (HL)",
    "caseStimulus": "NSP purchased a new printing machine for $250,000. It is estimated to produce 500,000 units of output over the next four years, after which it is expected to be sold for $50,000. Expected output: Year 1 = 90,000 units; Year 2 = 110,000 units.",
    "contextTitle": "Neville Stibbs Printers: Units of Production Depreciation",
    "marks": 4,
    "commandTerm": "Apply",
    "assessmentObjective": "AO2",
    "peelModelAnswer": {
      "point1": {
        "title": "Depreciation per unit",
        "point": "Depreciation per unit = (Purchase cost − Scrap value) ÷ Expected lifetime units.",
        "evidence": "($250,000 − $50,000) ÷ 500,000 = $0.40 per unit.",
        "explanation": "Each unit printed reduces the machine's value by $0.40.",
        "link": "This rate is applied to each year's output."
      },
      "point2": {
        "title": "Book value at end of Year 2",
        "point": "Depreciation expense = Depreciation per unit × units produced.",
        "evidence": "Year 1: $0.40 × 90,000 = $36,000. Year 2: $0.40 × 110,000 = $44,000. Accumulated depreciation = $80,000.",
        "explanation": "Book value = $250,000 − $80,000 = $170,000.",
        "link": "The machine's book value at the end of Year 2 is $170,000."
      }
    },
    "rubricChecklist": [
      {
        "id": "q4m-3.4-05-c1",
        "criterion": "Correct formula for depreciation per unit",
        "mark": 1
      },
      {
        "id": "q4m-3.4-05-c2",
        "criterion": "Correct answer of $0.40 per unit",
        "mark": 1
      },
      {
        "id": "q4m-3.4-05-c3",
        "criterion": "Correct annual expenses ($36,000 and $44,000)",
        "mark": 1
      },
      {
        "id": "q4m-3.4-05-c4",
        "criterion": "Correct book value of $170,000",
        "mark": 1
      }
    ]
  },
  {
    "id": "q4m-3.4-06",
    "subunit": "3.4-final-accounts",
    "questionNumber": "Question 3.4.6",
    "question": "Using the data, construct a balance sheet for Marc Brothers Motor Repairs (MBMR) as at 31st March.",
    "caseStimulus": "MBMR data: Property = $630,000; Machinery and vehicles = $230,000; Accumulated depreciation = $144,000; Stock = $30,000; Cash = $12,000; Debtors = $16,000; Overdraft = $13,000; Long-term bank loan = $380,000; Share capital = $300,000; Retained earnings = $81,000.",
    "contextTitle": "Marc Brothers Motor Repairs: Balance Sheet",
    "marks": 4,
    "commandTerm": "Apply",
    "assessmentObjective": "AO2",
    "peelModelAnswer": {
      "point1": {
        "title": "Assets",
        "point": "Total noncurrent assets = Property + Machinery and vehicles − Accumulated depreciation.",
        "evidence": "$630,000 + $230,000 − $144,000 = $716,000; current assets = $12,000 + $16,000 + $30,000 = $58,000; total assets = $774,000.",
        "explanation": "Noncurrent assets are shown net of accumulated depreciation; current assets can be turned into cash within 12 months.",
        "link": "Total assets of $774,000 are then reduced by liabilities."
      },
      "point2": {
        "title": "Liabilities and equity",
        "point": "Total liabilities = current + noncurrent liabilities.",
        "evidence": "Overdraft $13,000 + long-term bank loan $380,000 = $393,000; net assets = $774,000 − $393,000 = $381,000; equity = $300,000 + $81,000 = $381,000.",
        "explanation": "Net assets balance with total equity, confirming the balance sheet is correct.",
        "link": "The statement of financial position for MBMR as at 31st March shows net assets and equity of $381,000."
      }
    },
    "rubricChecklist": [
      {
        "id": "q4m-3.4-06-c1",
        "criterion": "Appropriate title and format",
        "mark": 1
      },
      {
        "id": "q4m-3.4-06-c2",
        "criterion": "Correct total noncurrent assets ($716,000) and current assets ($58,000)",
        "mark": 1
      },
      {
        "id": "q4m-3.4-06-c3",
        "criterion": "Correct total liabilities ($393,000) and net assets ($381,000)",
        "mark": 1
      },
      {
        "id": "q4m-3.4-06-c4",
        "criterion": "Correct equity ($381,000) balancing with net assets",
        "mark": 1
      }
    ]
  },
  {
    "id": "q4m-3.4-07",
    "subunit": "3.4-final-accounts",
    "questionNumber": "Question 3.4.7",
    "question": "Explain two reasons why a business such as McDonald's might choose to move away from a traditional business model to a circular business model.",
    "caseStimulus": "McDonald's, the world's largest restaurant chain, phased out CFC foam packaging in 1991 and plastic straws in 2018. In December 2021 it opened its first net-zero carbon restaurant in the UK (Market Drayton), built from natural and recycled materials and powered by wind turbines and solar panels.",
    "contextTitle": "McDonald's: Moving to a Circular Business Model",
    "marks": 4,
    "commandTerm": "Explain",
    "assessmentObjective": "AO2",
    "peelModelAnswer": {
      "point1": {
        "title": "Corporate image and avoiding bad publicity",
        "point": "CBMs let a business act in a socially responsible way.",
        "evidence": "As the world's largest restaurant chain, McDonald's is highly visible; phasing out CFCs and plastic straws and opening a net-zero restaurant shows environmental responsibility.",
        "explanation": "This improves its corporate image and relationships with customers, investors and pressure groups and avoids negative media coverage.",
        "link": "Better image may protect sales and attract socially responsible investors."
      },
      "point2": {
        "title": "Long-term costs and resource security",
        "point": "CBMs reduce dependence on finite, non-renewable resources.",
        "evidence": "The Market Drayton restaurant runs on wind and solar power and uses recycled materials.",
        "explanation": "As finite resources dwindle they become more expensive; green technologies can cut production costs in the long term and protect against supply shortages.",
        "link": "This supports sustainable growth and competitive advantage."
      }
    },
    "rubricChecklist": [
      {
        "id": "q4m-3.4-07-c1",
        "criterion": "First reason identified",
        "mark": 1
      },
      {
        "id": "q4m-3.4-07-c2",
        "criterion": "First reason explained with application to McDonald's",
        "mark": 1
      },
      {
        "id": "q4m-3.4-07-c3",
        "criterion": "Second reason identified",
        "mark": 1
      },
      {
        "id": "q4m-3.4-07-c4",
        "criterion": "Second reason explained with application to McDonald's",
        "mark": 1
      }
    ]
  },
  {
    "id": "q4m-3.4-08",
    "subunit": "3.4-final-accounts",
    "questionNumber": "Question 3.4.8",
    "question": "Distinguish between traditional (linear) and circular business models.",
    "caseStimulus": "Second Chance Bangkok is a social enterprise in Klong Toey, Bangkok, with 16 employees. It uses a circular business model with the mantra \"Recycle, Reuse, Renew\" and focuses on upcycling, selling recycled and upcycled purses, headbands and ties from a small shop.",
    "contextTitle": "Second Chance Bangkok: Linear vs Circular",
    "marks": 4,
    "commandTerm": "Distinguish",
    "assessmentObjective": "AO2",
    "peelModelAnswer": {
      "point1": {
        "title": "Traditional (linear) model",
        "point": "Linear models focus on producing, selling, using and throwing away products.",
        "evidence": "Their main concern is the financial costs of resources, so they choose cheaper inputs (e.g. plastics over glass) to maximise profit.",
        "explanation": "There is little or no consideration of environmental impacts or of what happens to products after consumption, which creates a disposable society.",
        "link": "Waste leaves the economy."
      },
      "point2": {
        "title": "Circular model",
        "point": "CBMs focus on environmental impacts and sustainability, applying reduce, reuse, repair and recycle.",
        "evidence": "Second Chance Bangkok's 'Recycle, Reuse, Renew' mantra and its upcycled purses, headbands and ties turn unwanted products into new ones.",
        "explanation": "Resources are cycled back into production so materials stay in the economy for as long as possible.",
        "link": "So the key difference is profit-focused disposal versus sustainable reuse of resources."
      }
    },
    "rubricChecklist": [
      {
        "id": "q4m-3.4-08-c1",
        "criterion": "Accurate description of the linear model",
        "mark": 1
      },
      {
        "id": "q4m-3.4-08-c2",
        "criterion": "Accurate description of the circular model",
        "mark": 1
      },
      {
        "id": "q4m-3.4-08-c3",
        "criterion": "Clear point of difference (focus/what happens to waste)",
        "mark": 1
      },
      {
        "id": "q4m-3.4-08-c4",
        "criterion": "Application or example",
        "mark": 1
      }
    ]
  },
  {
    "id": "q4m-3.4-09",
    "subunit": "3.4-final-accounts",
    "questionNumber": "Question 3.4.9",
    "question": "Explain two benefits for Second Chance Bangkok of using a circular business model.",
    "caseStimulus": "Second Chance Bangkok is a social enterprise in Klong Toey, Bangkok, with 16 employees. It uses a circular business model with the mantra \"Recycle, Reuse, Renew\" and focuses on upcycling, selling recycled and upcycled purses, headbands and ties from a small shop. It emphasises \"people before profits\", relies on social media marketing for exposure, and faces cash flow problems in off-peak seasons when tourist numbers drop.",
    "contextTitle": "Second Chance Bangkok: Benefits of a CBM",
    "marks": 4,
    "commandTerm": "Explain",
    "assessmentObjective": "AO2",
    "peelModelAnswer": {
      "point1": {
        "title": "Low-cost inputs and new revenue streams",
        "point": "CBMs turn waste into valuable resources and generate new revenue streams.",
        "evidence": "Second Chance Bangkok upcycles existing, unwanted products into items it sells in its shop.",
        "explanation": "Using unwanted materials as inputs can keep costs low and creates products to sell.",
        "link": "This helps a small social enterprise survive, especially given its cash flow problems in off-peak seasons."
      },
      "point2": {
        "title": "Image and stakeholder relationships",
        "point": "CBMs show social responsibility and improve corporate image.",
        "evidence": "Its 'people before profits' approach and 'Recycle, Reuse, Renew' mantra suit social media marketing.",
        "explanation": "A green image can attract customers (such as tourists), donors and loyal staff and strengthen relations with the local community.",
        "link": "This can increase sales revenue and support its social aims."
      }
    },
    "rubricChecklist": [
      {
        "id": "q4m-3.4-09-c1",
        "criterion": "First benefit identified",
        "mark": 1
      },
      {
        "id": "q4m-3.4-09-c2",
        "criterion": "First benefit explained in context",
        "mark": 1
      },
      {
        "id": "q4m-3.4-09-c3",
        "criterion": "Second benefit identified",
        "mark": 1
      },
      {
        "id": "q4m-3.4-09-c4",
        "criterion": "Second benefit explained in context",
        "mark": 1
      }
    ]
  }
];

export const SIX_MARK_3_4: SixMarkQuestion[] = [
  {
    "id": "q6m-3.4-01",
    "subunit": "3.4-final-accounts",
    "questionNumber": "Question 3.4.1",
    "question": "Examine the importance of final accounts to two stakeholder groups of Nestlé (e.g. shareholders and competitors).",
    "caseStimulus": "Nestlé is the world's largest food company, founded by Henri Nestlé in 1866. Its brands include Kit Kat, Smarties, Nescafé, Nespresso and Maggi. A huge proportion of its revenue comes from confectionery, a market also dominated by rivals Mars and Cadbury's. Nestlé is listed on the Swiss stock exchange in Zurich and employs over 352,000 people worldwide.",
    "contextTitle": "Nestlé: Importance of Final Accounts",
    "marks": 6,
    "commandTerm": "Examine",
    "assessmentObjective": "AO2/AO3",
    "levelBreakdown": [
      {
        "range": "1-2",
        "descriptor": "Limited knowledge of final accounts; stakeholders identified with little or no application to Nestlé."
      },
      {
        "range": "3-4",
        "descriptor": "Explains how two stakeholder groups use final accounts with some application to Nestlé, but limited balance or evaluation."
      },
      {
        "range": "5-6",
        "descriptor": "Balanced examination of both stakeholder groups, well applied to Nestlé, including limitations of final accounts and a reasoned judgement."
      }
    ],
    "perspective1": {
      "title": "Shareholders",
      "points": [
        {
          "subPoint": "Return on investment",
          "elaboration": "Nestlé is listed on the Swiss stock exchange, so shareholders use its P&L account to see profit after interest and tax and dividends, and decide whether to hold, sell or buy more shares."
        },
        {
          "subPoint": "Limitation",
          "elaboration": "Final accounts are historical, so past profits from brands such as Nescafé and Kit Kat do not guarantee future returns; a single year in isolation is of little value without trends."
        }
      ]
    },
    "perspective2": {
      "title": "Competitors",
      "points": [
        {
          "subPoint": "Benchmarking",
          "elaboration": "Rivals such as Mars and Cadbury's, which also dominate confectionery, can compare their financial performance with Nestlé's published accounts."
        },
        {
          "subPoint": "Limitation",
          "elaboration": "Firms limit, within reason, what they disclose because accounts are public, and there is no universal format, so comparisons may be difficult and time-consuming."
        }
      ]
    },
    "synthesisAndEvaluation": "Final accounts are important to both groups, but more directly to shareholders, whose investment decisions depend on Nestlé's profit and dividends. For competitors they are a benchmarking tool whose value is reduced by limited disclosure and differing formats. For both, final accounts should be used alongside qualitative factors such as Nestlé's brand strength, which is not fully shown on the balance sheet.",
    "rubricChecklist": [
      {
        "id": "q6m-3.4-01-c1",
        "criterion": "Shows knowledge of the purpose of final accounts",
        "marks": 1
      },
      {
        "id": "q6m-3.4-01-c2",
        "criterion": "Examines use by the first stakeholder group",
        "marks": 1
      },
      {
        "id": "q6m-3.4-01-c3",
        "criterion": "Examines use by the second stakeholder group",
        "marks": 1
      },
      {
        "id": "q6m-3.4-01-c4",
        "criterion": "Applies to Nestlé (stock exchange listing, rivals, brands)",
        "marks": 1
      },
      {
        "id": "q6m-3.4-01-c5",
        "criterion": "Considers limitations of final accounts",
        "marks": 1
      },
      {
        "id": "q6m-3.4-01-c6",
        "criterion": "Reasoned concluding judgement",
        "marks": 1
      }
    ]
  },
  {
    "id": "q6m-3.4-02",
    "subunit": "3.4-final-accounts",
    "questionNumber": "Question 3.4.2",
    "question": "Discuss whether the owners of TOYS would be pleased with the performance of the company.",
    "caseStimulus": "TOYS is a privately held company that sells children's toys in a busy town. Extract from its P&L accounts (years ended 31st March, $'000): Year 1: Sales 450, Cost of sales 180, Gross profit 270, Expenses 90, Profit before interest and tax 180, Interest 0, Taxation 45, Profit after interest and tax 135, Dividends 15, Retained profit 120. Year 2: Sales 500, Cost of sales 200, Gross profit 300, Expenses 100, Profit before interest and tax 200, Interest 10, Taxation 48, Profit after interest and tax 142, Dividends 10, Retained profit 132.",
    "contextTitle": "TOYS: Interpreting the Profit and Loss Account",
    "marks": 6,
    "commandTerm": "Discuss",
    "assessmentObjective": "AO2/AO3",
    "levelBreakdown": [
      {
        "range": "1-2",
        "descriptor": "Limited reference to the P&L figures; one-sided with little judgement."
      },
      {
        "range": "3-4",
        "descriptor": "Uses some P&L figures to explain reasons for and against the owners being pleased, with limited evaluation."
      },
      {
        "range": "5-6",
        "descriptor": "Balanced discussion using accurate figures from both years, considering limitations of final accounts, with a substantiated conclusion."
      }
    ],
    "perspective1": {
      "title": "Reasons the owners would be pleased",
      "points": [
        {
          "subPoint": "Growth in sales and profit",
          "elaboration": "Sales rose from $450,000 to $500,000 and gross profit from $270,000 to $300,000; profit before interest and tax rose from $180,000 to $200,000."
        },
        {
          "subPoint": "Higher retained profit",
          "elaboration": "Profit after interest and tax rose from $135,000 to $142,000, and retained profit rose from $120,000 to $132,000, providing internal finance for reinvestment."
        }
      ]
    },
    "perspective2": {
      "title": "Reasons for concern",
      "points": [
        {
          "subPoint": "Lower dividends and new interest",
          "elaboration": "Dividends fell from $15,000 to $10,000, so owners received less cash; interest of $10,000 appeared in Year 2, suggesting new borrowing."
        },
        {
          "subPoint": "Limits of the data",
          "elaboration": "Expenses rose by $10,000; two years of historical data do not guarantee future performance and ignore qualitative factors such as staff motivation or competition."
        }
      ]
    },
    "synthesisAndEvaluation": "Overall, the owners are likely to be pleased because sales, profit before interest and tax and retained profit all increased. However, the fall in dividends may disappoint owners seeking an immediate return, unless they value the higher retained profit reinvested in the business. A full judgement would also need balance sheet data and qualitative information, since final accounts are historical.",
    "rubricChecklist": [
      {
        "id": "q6m-3.4-02-c1",
        "criterion": "Accurate use of P&L figures",
        "marks": 1
      },
      {
        "id": "q6m-3.4-02-c2",
        "criterion": "Explains reasons owners would be pleased",
        "marks": 1
      },
      {
        "id": "q6m-3.4-02-c3",
        "criterion": "Explains reasons for concern (dividends, interest, expenses)",
        "marks": 1
      },
      {
        "id": "q6m-3.4-02-c4",
        "criterion": "Compares Year 1 and Year 2",
        "marks": 1
      },
      {
        "id": "q6m-3.4-02-c5",
        "criterion": "Considers limitations of final accounts",
        "marks": 1
      },
      {
        "id": "q6m-3.4-02-c6",
        "criterion": "Substantiated conclusion",
        "marks": 1
      }
    ]
  },
  {
    "id": "q6m-3.4-03",
    "subunit": "3.4-final-accounts",
    "questionNumber": "Question 3.4.3",
    "question": "Neville Stibbs Printers (NSP) uses the units of production method of depreciation. Examine the appropriateness of the units of production method compared with the straight line method for NSP. (HL)",
    "caseStimulus": "NSP purchased a new printing machine for $250,000. It is estimated to produce 500,000 units of output over the next four years, after which it is expected to be sold for $50,000. Expected output is 90,000 units in Year 1 and 110,000 units in Year 2.",
    "contextTitle": "Neville Stibbs Printers: Choosing a Depreciation Method",
    "marks": 6,
    "commandTerm": "Examine",
    "assessmentObjective": "AO3",
    "levelBreakdown": [
      {
        "range": "1-2",
        "descriptor": "Describes one or both methods with little application to NSP."
      },
      {
        "range": "3-4",
        "descriptor": "Explains the advantages and disadvantages of both methods with some calculations or application to NSP."
      },
      {
        "range": "5-6",
        "descriptor": "Balanced, well-applied examination using accurate NSP calculations and a reasoned judgement on appropriateness."
      }
    ],
    "perspective1": {
      "title": "Units of production method",
      "points": [
        {
          "subPoint": "Reflects usage",
          "elaboration": "Depreciation per unit = ($250,000 − $50,000) ÷ 500,000 = $0.40, giving $36,000 in Year 1 and $44,000 in Year 2, matching the machine's actual output."
        },
        {
          "subPoint": "Insight but effort",
          "elaboration": "It gives better insight into the true running cost of the printing machine and how quickly its value will be depleted, but it is more cumbersome as it must be recalculated each period."
        }
      ]
    },
    "perspective2": {
      "title": "Straight line method",
      "points": [
        {
          "subPoint": "Simple",
          "elaboration": "Straight line would give ($250,000 − $50,000) ÷ 4 = $50,000 each year, which is simple to calculate and understand."
        },
        {
          "subPoint": "Less realistic",
          "elaboration": "Equal annual charges are not generally realistic and ignore the loss of efficiency and higher repair costs of machinery; in Year 1 NSP would charge $50,000 even though only 90,000 units were produced."
        }
      ]
    },
    "synthesisAndEvaluation": "For a printing machine, whose value falls mainly through use (wear and tear), the units of production method is more appropriate, as the textbook notes that printers and machinery depreciate with usage. The extra calculation effort is justified by more accurate running costs. Whichever method NSP chooses, it must be used consistently to allow meaningful historical comparisons.",
    "rubricChecklist": [
      {
        "id": "q6m-3.4-03-c1",
        "criterion": "Knowledge of both depreciation methods",
        "marks": 1
      },
      {
        "id": "q6m-3.4-03-c2",
        "criterion": "Accurate units of production calculations for NSP",
        "marks": 1
      },
      {
        "id": "q6m-3.4-03-c3",
        "criterion": "Accurate straight line comparison ($50,000 per year)",
        "marks": 1
      },
      {
        "id": "q6m-3.4-03-c4",
        "criterion": "Advantages and disadvantages of each method",
        "marks": 1
      },
      {
        "id": "q6m-3.4-03-c5",
        "criterion": "Application to the nature of the printing machine",
        "marks": 1
      },
      {
        "id": "q6m-3.4-03-c6",
        "criterion": "Reasoned judgement on appropriateness",
        "marks": 1
      }
    ]
  },
  {
    "id": "q6m-3.4-04",
    "subunit": "3.4-final-accounts",
    "questionNumber": "Question 3.4.4",
    "question": "Discuss whether adopting a circular business model is an opportunity or a threat for a soft drinks company that currently uses plastic bottles.",
    "caseStimulus": "A large soft drinks company sells its drinks in plastic bottles because plastic is cheaper than glass. It benefits from large-scale production. Environmental pressure groups criticise it for plastic waste, and some investors want it to adopt a circular business model.",
    "contextTitle": "Soft Drinks: CBM Opportunity or Threat?",
    "marks": 6,
    "commandTerm": "Discuss",
    "assessmentObjective": "AO2/AO3",
    "levelBreakdown": [
      {
        "range": "1-2",
        "descriptor": "Limited knowledge of CBMs; one-sided with little application."
      },
      {
        "range": "3-4",
        "descriptor": "Explains benefits and/or limitations of CBMs with some application, but limited balance or judgement."
      },
      {
        "range": "5-6",
        "descriptor": "Balanced discussion of opportunities and threats, well applied to the soft drinks company, with a substantiated conclusion."
      }
    ],
    "perspective1": {
      "title": "Opportunity",
      "points": [
        {
          "subPoint": "Image and stakeholders",
          "elaboration": "A CBM such as resource recovery (closed-loop recycling of bottles) would reduce criticism from pressure groups, avoid bad publicity and attract investors who want to support socially responsible businesses."
        },
        {
          "subPoint": "Long-term costs and competitive advantage",
          "elaboration": "Recycled materials reduce dependence on finite resources whose prices rise as they dwindle; recycling can cut greenhouse gas emissions by up to 90% and give an advantage over rivals that do not adopt circularity."
        }
      ]
    },
    "perspective2": {
      "title": "Threat",
      "points": [
        {
          "subPoint": "Short-term costs",
          "elaboration": "Switching is highly expensive in the short term; the linear model is significantly cheaper, which is why Coca-Cola uses plastic rather than glass, so prices may need to rise for customers who may not want to pay more."
        },
        {
          "subPoint": "Economies of scale and government",
          "elaboration": "The firm may lose some economies of scale, and without government action on under-priced resources and subsidies a lone firm may be at a cost disadvantage."
        }
      ]
    },
    "synthesisAndEvaluation": "In the short term the CBM is a threat to costs and profit margins, but in the long term it is likely to be an opportunity, as resource costs rise and stakeholder pressure grows. The outcome depends on customers' willingness to pay, the firm's finances and government support. A phased move, starting with resource recovery of its own bottles, could balance both.",
    "rubricChecklist": [
      {
        "id": "q6m-3.4-04-c1",
        "criterion": "Knowledge of CBMs and the linear model",
        "marks": 1
      },
      {
        "id": "q6m-3.4-04-c2",
        "criterion": "Opportunities explained",
        "marks": 1
      },
      {
        "id": "q6m-3.4-04-c3",
        "criterion": "Threats/limitations explained",
        "marks": 1
      },
      {
        "id": "q6m-3.4-04-c4",
        "criterion": "Application to the soft drinks company",
        "marks": 1
      },
      {
        "id": "q6m-3.4-04-c5",
        "criterion": "Balanced analysis",
        "marks": 1
      },
      {
        "id": "q6m-3.4-04-c6",
        "criterion": "Substantiated judgement",
        "marks": 1
      }
    ]
  }
];
