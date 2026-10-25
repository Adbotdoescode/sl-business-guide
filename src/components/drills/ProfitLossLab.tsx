'use client';

import React, { useMemo, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { triggerConfetti } from '@/lib/confetti';
import { cn } from '@/lib/utils';
import {
  calculate,
  COMPUTED_LINES,
  expectedValue,
  formatAmount,
  formulaFor,
  labelFor,
  matches,
  PLLineKey,
  sumExpenses,
} from '@/lib/profit-loss';
import { PL_SCENARIOS, PL_SPOT_ITEMS, PLScenario } from '@/data/profit-loss-lab';
import { CheckCircle2, XCircle, RotateCcw, ArrowRight, Calculator, Search, Lightbulb } from 'lucide-react';

type Mode = 'build' | 'spot';

const EMPTY_ENTRIES: Record<PLLineKey, string> = {
  costOfSales: '',
  grossProfit: '',
  pbit: '',
  pbt: '',
  profit: '',
  retained: '',
};

function parseEntry(text: string): number | null {
  if (text.trim() === '') return null;
  const value = Number(text.replace(/,/g, '').trim());
  return Number.isNaN(value) ? null : value;
}

function plain(value: number): string {
  return (Math.round(value * 100) / 100).toLocaleString('en-US', { maximumFractionDigits: 2 });
}

// Shows the sum for one line with its real numbers, so the student can see where it came from.
function workingFor(key: PLLineKey, scenario: PLScenario, values: Record<PLLineKey, number>): string {
  const i = scenario.inputs;
  const expenses = sumExpenses(i.expenses);
  switch (key) {
    case 'costOfSales':
      return `${plain(i.openingStock)} + ${plain(i.purchases)} - ${plain(i.closingStock)} = ${plain(values.costOfSales)}`;
    case 'grossProfit':
      return `${plain(i.sales)} - ${plain(values.costOfSales)} = ${plain(values.grossProfit)}`;
    case 'pbit':
      return `${plain(values.grossProfit)} - ${plain(expenses)} = ${plain(values.pbit)}`;
    case 'pbt':
      return `${plain(values.pbit)} - ${plain(i.interest)} = ${plain(values.pbt)}`;
    case 'profit':
      return `${plain(values.pbt)} - ${plain(i.tax)} = ${plain(values.profit)}`;
    case 'retained':
      return `${plain(values.profit)} - ${plain(i.dividends)} = ${plain(values.retained)}`;
  }
}

function ScoreChip({ label, value, total }: { label: string; value: number; total: number }) {
  return (
    <span className="text-xs font-medium text-text-secondary">
      {label}: <span className="font-semibold text-text-primary">{value}/{total}</span>
    </span>
  );
}

function BuildMode({ onScore }: { onScore: (firstTryWins: number) => void }) {
  const [index, setIndex] = useState(0);
  const [entries, setEntries] = useState<Record<PLLineKey, string>>(EMPTY_ENTRIES);
  const [checked, setChecked] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [showWorking, setShowWorking] = useState(false);

  const scenario = PL_SCENARIOS[index];
  const correct = useMemo(() => calculate(scenario.inputs), [scenario]);
  const np = scenario.nonProfit;
  const expenses = sumExpenses(scenario.inputs.expenses);

  const rowResult = (key: PLLineKey): 'right' | 'wrong' | 'empty' | null => {
    if (!checked) return null;
    const value = parseEntry(entries[key]);
    if (value === null) return 'empty';
    return matches(value, correct[key]) ? 'right' : 'wrong';
  };

  const allRight = COMPUTED_LINES.every((key) => rowResult(key) === 'right');

  const handleCheck = () => {
    const nextAttempts = attempts + 1;
    setAttempts(nextAttempts);
    setChecked(true);
    const everyRight = COMPUTED_LINES.every((key) => {
      const value = parseEntry(entries[key]);
      return value !== null && matches(value, correct[key]);
    });
    if (everyRight) {
      if (nextAttempts === 1) onScore(1);
      triggerConfetti({ particleCount: 50, spread: 60 });
    }
  };

  const goTo = (nextIndex: number) => {
    setIndex(nextIndex);
    setEntries(EMPTY_ENTRIES);
    setChecked(false);
    setAttempts(0);
    setShowWorking(false);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="ao1">Business {index + 1} of {PL_SCENARIOS.length}</Badge>
            <Badge variant={np ? 'success' : 'neutral'}>{np ? 'Non-profit: surplus' : 'Profit-making'}</Badge>
          </div>
          <span className="text-xs font-mono text-text-muted">{scenario.unit === '$000' ? 'All figures in $000' : 'Figures in $'}</span>
        </CardHeader>
        <CardContent className="space-y-5">
          <div>
            <h2 className="text-lg font-bold text-text-primary tracking-tight">{scenario.business}</h2>
            <p className="text-sm text-text-secondary mt-1">{scenario.brief}</p>
            {scenario.note && <p className="text-xs text-text-muted mt-2 italic">{scenario.note}</p>}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wide text-text-primary">Given figures</h3>
              <div className="rounded-xl border border-border overflow-hidden text-sm">
                <GivenRow label="Sales revenue" value={scenario.inputs.sales} unit={scenario.unit} />
                <GivenRow label="Opening stock" value={scenario.inputs.openingStock} unit={scenario.unit} />
                <GivenRow label="Purchases" value={scenario.inputs.purchases} unit={scenario.unit} />
                <GivenRow label="Closing stock" value={scenario.inputs.closingStock} unit={scenario.unit} />
                {scenario.inputs.expenses.map((item) => (
                  <GivenRow key={item.label} label={item.label} value={item.amount} unit={scenario.unit} />
                ))}
                <GivenRow label="Interest" value={scenario.inputs.interest} unit={scenario.unit} />
                <GivenRow label="Tax" value={scenario.inputs.tax} unit={scenario.unit} />
                <GivenRow label={np ? 'Distributions' : 'Dividends'} value={scenario.inputs.dividends} unit={scenario.unit} last />
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wide text-text-primary">Your answers</h3>
              <div className="space-y-2">
                {COMPUTED_LINES.map((key) => {
                  const result = rowResult(key);
                  return (
                    <div
                      key={key}
                      className={cn(
                        'rounded-xl border p-3 space-y-1.5 transition-colors',
                        result === 'right' && 'border-emerald-300 bg-emerald-50/60',
                        result === 'wrong' && 'border-red-300 bg-red-50/60',
                        result === 'empty' && 'border-amber-300 bg-amber-50/60',
                        result === null && 'border-border bg-white'
                      )}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <label htmlFor={`pl-${key}`} className="text-sm font-semibold text-text-primary">
                          {labelFor(key, np)}
                        </label>
                        {result === 'right' && <CheckCircle2 className="w-4 h-4 text-emerald-600" aria-label="Correct" />}
                        {result === 'wrong' && <XCircle className="w-4 h-4 text-red-600" aria-label="Incorrect" />}
                      </div>
                      <p className="text-[11px] text-text-muted">{formulaFor(key, np)}</p>
                      <input
                        id={`pl-${key}`}
                        inputMode="decimal"
                        value={entries[key]}
                        onChange={(event) => {
                          setEntries((prev) => ({ ...prev, [key]: event.target.value }));
                          setChecked(false);
                        }}
                        placeholder="Type the figure"
                        className="w-full rounded-lg border border-border bg-white px-3 py-1.5 text-sm font-mono focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                      />
                      {result === 'wrong' && (
                        <p className="text-xs text-red-700">Not quite. Correct figure: <span className="font-mono font-semibold">{formatAmount(correct[key])}</span></p>
                      )}
                      {result === 'empty' && <p className="text-xs text-amber-800">Enter a figure for this line.</p>}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Button onClick={handleCheck} icon={<CheckCircle2 className="w-4 h-4" />}>
              Check my answers
            </Button>
            <Button variant="outline" onClick={() => setShowWorking((v) => !v)} icon={<Lightbulb className="w-4 h-4 text-amber-500" />}>
              {showWorking ? 'Hide working' : 'Show working'}
            </Button>
            <Button variant="ghost" onClick={() => goTo((index + 1) % PL_SCENARIOS.length)} icon={<ArrowRight className="w-4 h-4" />}>
              Next business
            </Button>
            <Button variant="ghost" onClick={() => goTo(index)} icon={<RotateCcw className="w-4 h-4" />}>
              Clear
            </Button>
            {checked && allRight && (
              <span className="text-sm font-semibold text-emerald-700">
                All six lines correct{attempts === 1 ? ' on the first try' : ''}.
              </span>
            )}
          </div>

          {showWorking && (
            <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-4 space-y-2">
              <h3 className="text-sm font-bold text-blue-900">Step-by-step working</h3>
              <ol className="list-decimal pl-5 space-y-1.5 text-sm text-text-secondary">
                {COMPUTED_LINES.map((key) => (
                  <li key={key}>
                    <span className="font-semibold text-text-primary">{labelFor(key, np)}:</span>{' '}
                    <span className="font-mono text-xs">{workingFor(key, scenario, correct)}</span>
                  </li>
                ))}
              </ol>
              <p className="text-xs text-text-muted">
                Expenses total {formatAmount(expenses)}. Every line uses the line above it, so one error carries down the statement.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function GivenRow({ label, value, unit, last = false }: { label: string; value: number; unit: string; last?: boolean }) {
  return (
    <div className={cn('flex items-center justify-between px-3 py-2 bg-white', !last && 'border-b border-border/70')}>
      <span className="text-text-secondary">{label}</span>
      <span className="font-mono text-text-primary">
        {unit === '$' ? '$' : ''}
        {formatAmount(value)}
      </span>
    </div>
  );
}

function SpotMode({ onScore }: { onScore: (firstTryWins: number) => void }) {
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<PLLineKey | null>(null);
  const [firstClickDone, setFirstClickDone] = useState(false);

  const item = PL_SPOT_ITEMS[index];
  const scenario = PL_SCENARIOS.find((s) => s.id === item.scenarioId) ?? PL_SCENARIOS[0];
  const printed = useMemo(() => calculate(scenario.inputs, item.mistake), [scenario, item]);
  const expenses = sumExpenses(scenario.inputs.expenses);

  const isBroken = (key: PLLineKey) => !matches(printed[key], expectedValue(key, scenario.inputs, printed));

  const handlePick = (key: PLLineKey) => {
    if (!firstClickDone) {
      setFirstClickDone(true);
      if (isBroken(key)) onScore(1);
    }
    setPicked(key);
  };

  const goTo = (nextIndex: number) => {
    setIndex(nextIndex);
    setPicked(null);
    setFirstClickDone(false);
  };

  const row = (key: PLLineKey) => {
    const active = picked === key;
    const broken = isBroken(key);
    return (
      <tr key={key} className={cn('transition-colors', active && broken && 'bg-emerald-50', active && !broken && 'bg-amber-50')}>
        <td className="p-0">
          <button
            type="button"
            onClick={() => handlePick(key)}
            className="w-full flex items-center justify-between gap-3 px-3 py-2 text-left hover:bg-stone-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-500"
          >
            <span>
              <span className="block font-semibold text-text-primary">{labelFor(key, scenario.nonProfit)}</span>
              <span className="block text-[11px] text-text-muted">{formulaFor(key, scenario.nonProfit)}</span>
            </span>
            <span className="font-mono font-semibold text-text-primary">{formatAmount(printed[key])}</span>
          </button>
        </td>
      </tr>
    );
  };

  const given = (label: string, value: string) => (
    <tr key={label} className="text-text-secondary">
      <td className="px-3 py-1.5 flex items-center justify-between gap-3">
        <span>{label}</span>
        <span className="font-mono">{value}</span>
      </td>
    </tr>
  );

  const pickedBroken = picked !== null && isBroken(picked);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="ao1">Statement {index + 1} of {PL_SPOT_ITEMS.length}</Badge>
            <span className="text-xs text-text-muted">{scenario.business}</span>
          </div>
          <span className="text-xs font-mono text-text-muted">{scenario.unit === '$000' ? '$000' : '$'}</span>
        </CardHeader>
        <CardContent className="space-y-5">
          <div>
            <CardTitle className="text-base">One line in this statement breaks its own formula.</CardTitle>
            <p className="text-sm text-text-secondary mt-1">
              Click the line where the figure does not follow from its formula and the line above it. Lines below a mistake can look right, so check each one against the line above.
            </p>
          </div>

          <div className="rounded-xl border border-border overflow-hidden bg-white">
            <table className="w-full text-sm">
              <tbody className="divide-y divide-border/70">
                {given('Sales revenue', formatAmount(scenario.inputs.sales))}
                {row('costOfSales')}
                {row('grossProfit')}
                {given('Expenses (total)', formatAmount(expenses))}
                {row('pbit')}
                {given('Interest', formatAmount(scenario.inputs.interest))}
                {row('pbt')}
                {given('Tax', formatAmount(scenario.inputs.tax))}
                {row('profit')}
                {given(scenario.nonProfit ? 'Distributions' : 'Dividends', formatAmount(scenario.inputs.dividends))}
                {row('retained')}
              </tbody>
            </table>
          </div>

          {picked === null && (
            <p className="text-sm text-text-muted flex items-center gap-2">
              <Search className="w-4 h-4" /> Choose a line to test it.
            </p>
          )}

          {picked !== null && pickedBroken && (
            <div role="status" className="rounded-xl border border-emerald-300 bg-emerald-50/70 p-4 space-y-1 text-sm">
              <p className="font-semibold text-emerald-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> Found it: {labelFor(picked, scenario.nonProfit)} is wrong.
              </p>
              <p className="text-text-secondary">
                It should be <span className="font-mono font-semibold">{formatAmount(expectedValue(picked, scenario.inputs, printed))}</span> using {formulaFor(picked, scenario.nonProfit).toLowerCase()}.
              </p>
            </div>
          )}

          {picked !== null && !pickedBroken && (
            <div role="status" className="rounded-xl border border-amber-300 bg-amber-50/70 p-4 text-sm">
              <p className="font-semibold text-amber-900 flex items-center gap-2">
                <XCircle className="w-4 h-4" /> This line follows its own formula. Keep looking.
              </p>
              <p className="text-text-secondary mt-1">Check each computed line against the line above it.</p>
            </div>
          )}

          <div className="flex flex-wrap items-center gap-2">
            <Button
              onClick={() => goTo((index + 1) % PL_SPOT_ITEMS.length)}
              icon={<ArrowRight className="w-4 h-4" />}
              disabled={!pickedBroken}
            >
              Next statement
            </Button>
            {!pickedBroken && (
              <span className="text-xs text-text-muted">Find the broken line to move on.</span>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export function ProfitLossLab() {
  const [mode, setMode] = useState<Mode>('build');
  const [buildWins, setBuildWins] = useState(0);
  const [spotWins, setSpotWins] = useState(0);

  return (
    <div className="space-y-8 animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl border border-border shadow-subtle p-6 sm:p-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200 mb-4">
          <Calculator className="w-3.5 h-3.5 text-blue-600" />
          <span>Unit 3.4 Practice</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-text-primary tracking-tight leading-tight">
          Profit &amp; Loss Lab
        </h1>
        <p className="text-sm sm:text-base text-text-secondary mt-3 leading-relaxed max-w-3xl">
          Build profit and loss accounts line by line, then hunt for the one line that breaks its rule. Each line uses the line above it, so catching the first error is the key skill.
        </p>
        <div className="flex flex-wrap items-center gap-2 mt-6">
          <button
            type="button"
            onClick={() => setMode('build')}
            className={cn(
              'text-xs px-3.5 py-1.5 rounded-lg border transition cursor-pointer flex items-center gap-1.5',
              mode === 'build'
                ? 'bg-stone-900 text-white border-stone-900 font-semibold shadow-subtle'
                : 'bg-white text-text-secondary border-border hover:border-stone-400 hover:text-text-primary'
            )}
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>Build the statement</span>
          </button>
          <button
            type="button"
            onClick={() => setMode('spot')}
            className={cn(
              'text-xs px-3.5 py-1.5 rounded-lg border transition cursor-pointer flex items-center gap-1.5',
              mode === 'spot'
                ? 'bg-stone-900 text-white border-stone-900 font-semibold shadow-subtle'
                : 'bg-white text-text-secondary border-border hover:border-stone-400 hover:text-text-primary'
            )}
          >
            <Search className="w-3.5 h-3.5" />
            <span>Spot the error</span>
          </button>
          <div className="ml-auto flex items-center gap-4">
            <ScoreChip label="Built first try" value={buildWins} total={PL_SCENARIOS.length} />
            <ScoreChip label="Errors found first click" value={spotWins} total={PL_SPOT_ITEMS.length} />
          </div>
        </div>
      </div>

      {mode === 'build' ? (
        <BuildMode onScore={(n) => setBuildWins((v) => v + n)} />
      ) : (
        <SpotMode onScore={(n) => setSpotWins((v) => v + n)} />
      )}
    </div>
  );
}
