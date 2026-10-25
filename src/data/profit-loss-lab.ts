import type { MistakeKind, PLInputs } from '@/lib/profit-loss';

// Scenarios for the Profit & Loss Lab. Figures are entered as given; the drill
// works out the computed lines. Source-based scenarios use the corrected
// formulas from the Unit 3 conventions (PBT = PBIT - interest).

export interface PLScenario {
  id: string;
  business: string;
  brief: string;
  nonProfit: boolean;
  unit: string;
  inputs: PLInputs;
  note?: string;
}

export const PL_SCENARIOS: PLScenario[] = [
  {
    id: 'arabicadabra',
    business: 'Arabicadabra Coffee Ltd',
    brief: 'A coffee shop with a steady year. Year ended 31 March 2022.',
    nonProfit: false,
    unit: '$000',
    inputs: {
      sales: 100,
      openingStock: 5,
      purchases: 30,
      closingStock: 10,
      expenses: [
        { label: 'Salaries', amount: 5 },
        { label: 'Rent', amount: 5 },
        { label: 'Advertising', amount: 3 },
        { label: 'Utilities', amount: 2 },
      ],
      interest: 5,
      tax: 3,
      dividends: 2,
    },
  },
  {
    id: 'clockworks',
    business: 'Clockworks',
    brief: 'A small shop selling handmade clocks, in dollars.',
    nonProfit: false,
    unit: '$',
    inputs: {
      sales: 105000,
      openingStock: 15000,
      purchases: 50000,
      closingStock: 20000,
      expenses: [
        { label: 'Wages', amount: 12000 },
        { label: 'Rent', amount: 9000 },
        { label: 'Delivery', amount: 3000 },
      ],
      interest: 0,
      tax: 9000,
      dividends: 5000,
    },
  },
  {
    id: 'bakery',
    business: 'Corner Bakery',
    brief: 'A bakery with a good month of sales. In dollars.',
    nonProfit: false,
    unit: '$',
    inputs: {
      sales: 60000,
      openingStock: 8000,
      purchases: 22000,
      closingStock: 14000,
      expenses: [
        { label: 'Wages', amount: 14000 },
        { label: 'Rent', amount: 6000 },
        { label: 'Energy', amount: 5000 },
      ],
      interest: 2000,
      tax: 4250,
      dividends: 3000,
    },
  },
  {
    id: 'masks',
    business: 'Masks-R-Us',
    brief: 'A small business with no dividends paid this year.',
    nonProfit: false,
    unit: '$000',
    inputs: {
      sales: 140,
      openingStock: 10,
      purchases: 35,
      closingStock: 12,
      expenses: [
        { label: 'Wages', amount: 9 },
        { label: 'Rent', amount: 4 },
        { label: 'Utilities', amount: 4 },
      ],
      interest: 5,
      tax: 12.75,
      dividends: 0,
    },
    note: 'Tax is 15% of profit before tax. Dividends are zero, so retained profit equals profit for the period.',
  },
  {
    id: 'toys',
    business: 'TOYS',
    brief: 'A children\'s toy retailer, Year 2. Figures in $000.',
    nonProfit: false,
    unit: '$000',
    inputs: {
      sales: 500,
      openingStock: 60,
      purchases: 170,
      closingStock: 30,
      expenses: [
        { label: 'Wages', amount: 55 },
        { label: 'Rent', amount: 30 },
        { label: 'Marketing', amount: 15 },
      ],
      interest: 10,
      tax: 48,
      dividends: 10,
    },
  },
  {
    id: 'loss-cafe',
    business: 'Riverside Cafe',
    brief: 'A cafe that made a loss this year. In dollars.',
    nonProfit: false,
    unit: '$',
    inputs: {
      sales: 80000,
      openingStock: 20000,
      purchases: 70000,
      closingStock: 25000,
      expenses: [
        { label: 'Rent', amount: 12000 },
        { label: 'Wages', amount: 18000 },
      ],
      interest: 4000,
      tax: 0,
      dividends: 0,
    },
    note: 'The case states that no tax is due on this loss, so tax is zero. A loss shows as a negative figure in brackets.',
  },
  {
    id: 'pizza',
    business: 'Slice Pizza Ltd',
    brief: 'A busy takeaway. Tax is 20% of profit before tax. In dollars.',
    nonProfit: false,
    unit: '$',
    inputs: {
      sales: 150000,
      openingStock: 12000,
      purchases: 48000,
      closingStock: 15000,
      expenses: [
        { label: 'Wages', amount: 55000 },
        { label: 'Rent', amount: 20000 },
        { label: 'Marketing', amount: 8000 },
        { label: 'Utilities', amount: 6000 },
      ],
      interest: 3000,
      tax: 2600,
      dividends: 0,
    },
    note: 'Profit before tax is 13,000, so tax at 20% is 2,600.',
  },
  {
    id: 'classrooms',
    business: 'Caring for Classrooms',
    brief: 'A non-profit that reinvests all of its surplus. Year ended 30 June 2022, $000.',
    nonProfit: true,
    unit: '$000',
    inputs: {
      sales: 200,
      openingStock: 20,
      purchases: 40,
      closingStock: 10,
      expenses: [
        { label: 'Salaries', amount: 10 },
        { label: 'Rent', amount: 5 },
        { label: 'Utilities', amount: 4 },
        { label: 'Insurance', amount: 1 },
      ],
      interest: 5,
      tax: 0,
      dividends: 0,
    },
    note: 'A non-profit reports surplus, not profit. There are no dividends, and the whole surplus is retained.',
  },
];

// The "Spot the error" drill uses profit-making statements only, each with one
// formula broken. The student finds the first line that does not follow its rule.
export const PL_SPOT_ITEMS: { scenarioId: string; mistake: MistakeKind }[] = [
  { scenarioId: 'arabicadabra', mistake: 'pbt-deducts-tax' },
  { scenarioId: 'clockworks', mistake: 'cos-adds-closing-stock' },
  { scenarioId: 'bakery', mistake: 'retained-ignores-dividends' },
  { scenarioId: 'toys', mistake: 'gross-profit-deducts-expenses' },
  { scenarioId: 'pizza', mistake: 'pbt-deducts-tax' },
  { scenarioId: 'masks', mistake: 'cos-adds-closing-stock' },
];
