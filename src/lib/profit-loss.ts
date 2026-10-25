// Pure profit-and-loss arithmetic for the Profit & Loss Lab. Keeps the rules
// (corrected order: gross profit, then PBIT, then PBT, then profit, then
// retained profit) in one place so the drill and the working never disagree.

export interface ExpenseItem {
  label: string;
  amount: number;
}

export interface PLInputs {
  sales: number;
  openingStock: number;
  purchases: number;
  closingStock: number;
  expenses: ExpenseItem[];
  interest: number;
  tax: number;
  dividends: number;
}

export type PLLineKey = 'costOfSales' | 'grossProfit' | 'pbit' | 'pbt' | 'profit' | 'retained';

// Deliberate mistakes for the "Spot the error" drill. Each one breaks exactly
// one formula, so the first wrong line is the one that was changed.
export type MistakeKind =
  | 'cos-adds-closing-stock'
  | 'gross-profit-deducts-expenses'
  | 'pbt-deducts-tax'
  | 'retained-ignores-dividends';

export const COMPUTED_LINES: PLLineKey[] = ['costOfSales', 'grossProfit', 'pbit', 'pbt', 'profit', 'retained'];

export const MISTAKE_LINE: Record<MistakeKind, PLLineKey> = {
  'cos-adds-closing-stock': 'costOfSales',
  'gross-profit-deducts-expenses': 'grossProfit',
  'pbt-deducts-tax': 'pbt',
  'retained-ignores-dividends': 'retained',
};

export function sumExpenses(expenses: ExpenseItem[]): number {
  return expenses.reduce((total, item) => total + item.amount, 0);
}

export function labelFor(key: PLLineKey, nonProfit: boolean): string {
  const word = nonProfit ? 'Surplus' : 'Profit';
  switch (key) {
    case 'costOfSales':
      return 'Cost of sales';
    case 'grossProfit':
      return nonProfit ? 'Gross surplus' : 'Gross profit';
    case 'pbit':
      return `${word} before interest and tax`;
    case 'pbt':
      return `${word} before tax`;
    case 'profit':
      return nonProfit ? 'Surplus for the period' : 'Profit for the period';
    case 'retained':
      return nonProfit ? 'Retained surplus' : 'Retained profit';
  }
}

export function formulaFor(key: PLLineKey, nonProfit: boolean): string {
  const word = nonProfit ? 'surplus' : 'profit';
  switch (key) {
    case 'costOfSales':
      return 'Opening stock + purchases - closing stock';
    case 'grossProfit':
      return 'Sales revenue - cost of sales';
    case 'pbit':
      return `Gross ${word} - expenses`;
    case 'pbt':
      return `${nonProfit ? 'Surplus' : 'PBIT'} - interest`;
    case 'profit':
      return `${nonProfit ? 'Surplus' : 'PBT'} - tax`;
    case 'retained':
      return `${nonProfit ? 'Surplus' : 'Profit'} for the period - dividends`;
  }
}

// Works through the statement in order and returns the value of every computed
// line. When a mistake is supplied, that one line uses the wrong formula and
// every line below it follows the printed (wrong) value.
export function calculate(inputs: PLInputs, mistake?: MistakeKind): Record<PLLineKey, number> {
  const expenses = sumExpenses(inputs.expenses);

  let costOfSales = inputs.openingStock + inputs.purchases - inputs.closingStock;
  if (mistake === 'cos-adds-closing-stock') costOfSales = inputs.openingStock + inputs.purchases + inputs.closingStock;

  let grossProfit = inputs.sales - costOfSales;
  if (mistake === 'gross-profit-deducts-expenses') grossProfit = inputs.sales - costOfSales - expenses;

  const pbit = grossProfit - expenses;

  let pbt = pbit - inputs.interest;
  if (mistake === 'pbt-deducts-tax') pbt = pbit - inputs.tax;

  const profit = pbt - inputs.tax;

  let retained = profit - inputs.dividends;
  if (mistake === 'retained-ignores-dividends') retained = profit;

  return { costOfSales, grossProfit, pbit, pbt, profit, retained };
}

// The value a line should have, given the figures printed on the lines above it.
// A line that differs from this has broken its own rule.
export function expectedValue(key: PLLineKey, inputs: PLInputs, printed: Record<PLLineKey, number>): number {
  switch (key) {
    case 'costOfSales':
      return inputs.openingStock + inputs.purchases - inputs.closingStock;
    case 'grossProfit':
      return inputs.sales - printed.costOfSales;
    case 'pbit':
      return printed.grossProfit - sumExpenses(inputs.expenses);
    case 'pbt':
      return printed.pbit - inputs.interest;
    case 'profit':
      return printed.pbt - inputs.tax;
    case 'retained':
      return printed.profit - inputs.dividends;
  }
}

export function formatAmount(value: number): string {
  const rounded = Math.round(value * 100) / 100;
  const text = Math.abs(rounded).toLocaleString('en-US', { maximumFractionDigits: 2 });
  return rounded < 0 ? `(${text})` : text;
}

export function matches(entered: number, correct: number): boolean {
  return Math.abs(entered - correct) < 0.005;
}
