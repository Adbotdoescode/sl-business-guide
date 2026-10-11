'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { 
  TrendingDown, 
  TrendingUp, 
  Sliders, 
  CheckCircle2, 
  AlertTriangle, 
  Sparkles,
  Layers,
  Building,
  Globe2,
  Factory,
  ArrowRight,
  ShieldCheck,
  Zap
} from 'lucide-react';

export function LracCostSimulator() {
  const [output, setOutput] = useState<number>(10000);
  const [activeTab, setActiveTab] = useState<'internal-eco' | 'external-eco' | 'internal-dis' | 'external-dis'>('internal-eco');

  // Economic parameters
  const TFC = 120000; // Constant Total Fixed Costs ($120,000)

  // Average Fixed Cost
  const AFC = TFC / output;

  // Realistic Average Variable Cost (AVC) function modeling economies then diseconomies:
  // Down from $20.00 at 1,000 to $15.00 at 10,000, then escalating up to $28.00 at 20,000
  const computeAVC = (q: number): number => {
    if (q <= 10000) {
      // Gentle slope down from 20.0 to 15.0
      return 20 - 5 * (q / 10000);
    } else {
      // Exponential rise past optimal scale
      const excess = (q - 10000) / 10000;
      return 15 + 13 * Math.pow(excess, 1.4);
    }
  };

  const AVC = computeAVC(output);
  const TVC = AVC * output;
  const TC = TFC + TVC;
  const ATC = AFC + AVC;

  // Determine scale phase
  const isOptimal = output >= 9500 && output <= 10500;
  const isEconomies = output < 9500;
  const isDiseconomies = output > 10500;

  // Curve points for SVG visualization (Q from 1,000 to 20,000)
  const samplePoints = [1000, 2500, 5000, 7500, 10000, 12500, 15000, 17500, 20000];
  const curvePoints = samplePoints.map((q) => {
    const afc = TFC / q;
    const avc = computeAVC(q);
    const atc = afc + avc;
    // Map Q (1000..20000) to SVG X (30..470)
    const x = 30 + ((q - 1000) / 19000) * 440;
    // Map ATC (27..140) to SVG Y (180..20)
    const y = 180 - ((atc - 27) / (140 - 27)) * 150;
    return { q, atc, x, y };
  });

  // Current position on SVG
  const currentX = 30 + ((output - 1000) / 19000) * 440;
  const currentY = Math.max(20, Math.min(185, 180 - ((ATC - 27) / (140 - 27)) * 150));

  const svgPathD = curvePoints.reduce((acc, pt, idx) => {
    return idx === 0 ? `M ${pt.x} ${pt.y}` : `${acc} L ${pt.x} ${pt.y}`;
  }, '');

  return (
    <div className="space-y-6 animate-in fade-in duration-150">
      {/* Overview Banner */}
      <div className="bg-white p-5 sm:p-6 rounded-2xl border border-border shadow-subtle flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold font-mono text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-200">
              Interactive Microeconomic Laboratory
            </span>
            <span className="text-xs text-text-muted">• Topic 1.5 Growth & Scale</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight">
            Average Cost Curve Simulator
          </h2>
          <p className="text-xs sm:text-sm text-text-secondary mt-1">
            Drag the output slider to see how spreading fixed costs drives average costs down to the optimal level of output (Hoang Figure 5.1), and where diseconomies of scale make costs rise. Illustrative figures, not from the textbook. (Economics courses call the long-run version of this curve LRAC and its lowest point minimum efficient scale; the Hoang textbook uses neither term.)
          </p>
        </div>

        {/* Quick Presets */}
        <div className="flex items-center gap-2 self-start md:self-auto">
          <button
            onClick={() => setOutput(2500)}
            className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold border transition cursor-pointer ${
              output === 2500
                ? 'bg-blue-600 text-white border-blue-600 shadow-subtle'
                : 'bg-white text-text-secondary border-border hover:bg-surface-subtle'
            }`}
          >
            Startup (2.5k)
          </button>
          <button
            onClick={() => setOutput(10000)}
            className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold border transition cursor-pointer ${
              output === 10000
                ? 'bg-blue-600 text-white border-blue-600 shadow-subtle'
                : 'bg-white text-text-secondary border-border hover:bg-surface-subtle'
            }`}
          >
            Optimal (10k)
          </button>
          <button
            onClick={() => setOutput(16000)}
            className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold border transition cursor-pointer ${
              output === 16000
                ? 'bg-blue-600 text-white border-blue-600 shadow-subtle'
                : 'bg-white text-text-secondary border-border hover:bg-surface-subtle'
            }`}
          >
            Oversized (16k)
          </button>
        </div>
      </div>

      {/* Main Simulator Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Interactive Controls & Metrics (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <Card className="p-5 sm:p-6">
            {/* Slider Control */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="output-slider" className="text-xs font-bold text-text-primary uppercase tracking-wider flex items-center gap-1.5">
                  <Sliders className="w-4 h-4 text-blue-600" />
                  <span>Operational Output Scale (Q):</span>
                </label>
                <span className="text-lg font-black font-mono text-blue-700 bg-blue-50 px-3 py-0.5 rounded-lg border border-blue-200">
                  {output.toLocaleString()} units
                </span>
              </div>
              <input
                id="output-slider"
                type="range"
                min="1000"
                max="20000"
                step="500"
                value={output}
                onChange={(e) => setOutput(Number(e.target.value))}
                className="w-full h-2.5 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[10px] font-mono text-text-muted mt-1.5">
                <span>1,000 units (Low Scale)</span>
                <span className="font-bold text-blue-700">10,000 units (Optimal level of output)</span>
                <span>20,000 units (Overcrowded)</span>
              </div>
            </div>

            {/* Scale Phase Feedback Box */}
            <div className={`p-4 rounded-xl border mb-6 transition-colors ${
              isOptimal
                ? 'bg-blue-50/70 border-blue-300 text-blue-900'
                : isEconomies
                ? 'bg-emerald-50/70 border-emerald-300 text-emerald-900'
                : 'bg-rose-50/70 border-rose-300 text-rose-900'
            }`}>
              <div className="flex items-center gap-2 mb-1">
                {isOptimal ? (
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                ) : isEconomies ? (
                  <TrendingDown className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                ) : (
                  <TrendingUp className="w-5 h-5 text-rose-600 flex-shrink-0" />
                )}
                <span className="font-bold text-sm tracking-tight">
                  {isOptimal
                    ? 'Optimal Level of Output: Average Costs Minimised'
                    : isEconomies
                    ? 'Economies of Scale Phase: Unit Costs Falling'
                    : 'Diseconomies of Scale Phase: Unit Costs Rising'}
                </span>
              </div>
              <p className="text-xs leading-relaxed opacity-90 pl-7">
                {isOptimal
                  ? 'Average Total Cost is minimized at $27.00 per unit. Technical automation, purchasing discounts, and fixed cost spreading are perfectly balanced with management control.'
                  : isEconomies
                  ? `Spreading the constant $120,000 fixed overheads over higher volume causes AFC to fall continuously from $120.00 to $${AFC.toFixed(2)}. Unlocking internal efficiencies lowers ATC by $${(140 - ATC).toFixed(2)}.`
                  : `Organizational outgrowing capacity: Coordination friction, communication delay through tall hierarchies, and assembly line boredom surge variable costs faster than fixed costs can be spread, inflating ATC by +$${(ATC - 27).toFixed(2)} above optimal.`}
              </p>
            </div>

            {/* Cost Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 rounded-xl bg-surface-subtle border border-border">
                <span className="text-[10px] font-bold text-text-muted uppercase block">Total Fixed Cost</span>
                <span className="text-base font-black font-mono text-text-primary block mt-0.5">$120,000</span>
                <span className="text-[10px] text-text-muted block mt-0.5">Constant Rent & Leases</span>
              </div>

              <div className="p-3 rounded-xl bg-surface-subtle border border-border">
                <span className="text-[10px] font-bold text-text-muted uppercase block">Average Fixed (AFC)</span>
                <span className="text-base font-black font-mono text-text-primary block mt-0.5">${AFC.toFixed(2)}</span>
                <span className="text-[10px] text-emerald-600 font-semibold block mt-0.5">AFC = TFC / Q</span>
              </div>

              <div className="p-3 rounded-xl bg-surface-subtle border border-border">
                <span className="text-[10px] font-bold text-text-muted uppercase block">Average Variable (AVC)</span>
                <span className="text-base font-black font-mono text-text-primary block mt-0.5">${AVC.toFixed(2)}</span>
                <span className="text-[10px] text-text-muted block mt-0.5">Direct Labor & Materials</span>
              </div>

              <div className={`p-3 rounded-xl border ${
                isOptimal 
                  ? 'bg-blue-600 text-white border-blue-600 shadow-subtle' 
                  : isEconomies 
                  ? 'bg-emerald-50 text-emerald-900 border-emerald-300' 
                  : 'bg-rose-50 text-rose-900 border-rose-300'
              }`}>
                <span className="text-[10px] font-bold uppercase tracking-wider block opacity-80">Unit Cost (ATC)</span>
                <span className="text-xl font-black font-mono block mt-0.5">${ATC.toFixed(2)}</span>
                <span className="text-[10px] font-semibold block mt-0.5 opacity-90">
                  {isOptimal ? '★ Lowest Possible Cost' : isEconomies ? 'Falling with Scale' : 'Rising with Inefficiency'}
                </span>
              </div>
            </div>

            {/* Total Cost Calculation Banner */}
            <div className="mt-4 pt-4 border-t border-border flex flex-wrap items-center justify-between text-xs text-text-muted gap-2">
              <span>
                Total Cost: <strong className="text-text-primary font-mono">${Math.round(TC).toLocaleString()}</strong>
              </span>
              <span>
                Formula: <code className="bg-stone-100 px-1.5 py-0.5 rounded font-mono text-[11px] text-text-secondary">ATC = AFC ($ {AFC.toFixed(2)}) + AVC ($ {AVC.toFixed(2)})</code>
              </span>
            </div>
          </Card>
        </div>

        {/* Right Column: Dynamic SVG Cost Curve Visualizer (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <Card className="p-5 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-text-primary uppercase tracking-wide flex items-center gap-1.5">
                  <Factory className="w-4 h-4 text-purple-600" />
                  <span>U-Shaped Cost Curve Chart</span>
                </span>
                <span className="text-[10px] font-mono text-text-muted">Average costs (Figure 5.1)</span>
              </div>

              {/* Interactive SVG Diagram */}
              <div className="bg-surface-subtle p-3 rounded-xl border border-border">
                <svg viewBox="0 0 500 210" className="w-full h-auto overflow-visible">
                  {/* Grid Lines */}
                  <line x1="30" y1="180" x2="480" y2="180" stroke="#d6d3d1" strokeWidth="1.5" />
                  <line x1="30" y1="20" x2="30" y2="180" stroke="#d6d3d1" strokeWidth="1.5" />

                  {/* Axis Labels */}
                  <text x="480" y="200" fontSize="10" fill="#78716c" textAnchor="end" fontFamily="monospace">Output (Q)</text>
                  <text x="35" y="15" fontSize="10" fill="#78716c" textAnchor="start" fontFamily="monospace">Cost per unit (ATC)</text>

                  {/* Optimal level of output line */}
                  <line x1="262" y1="20" x2="262" y2="180" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3 3" />
                  <text x="262" y="195" fontSize="9" fill="#2563eb" textAnchor="middle" fontWeight="bold">Q* (10k)</text>

                  {/* Curve Path */}
                  <path
                    d={svgPathD}
                    fill="none"
                    stroke="#4f46e5"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />

                  {/* Live Active Output Marker */}
                  <circle cx={currentX} cy={currentY} r="7" fill={isOptimal ? '#2563eb' : isEconomies ? '#059669' : '#e11d48'} stroke="#ffffff" strokeWidth="2" />
                  
                  {/* Indicator tooltip text on SVG */}
                  <text
                    x={Math.max(60, Math.min(420, currentX))}
                    y={Math.max(25, currentY - 12)}
                    fontSize="11"
                    fontWeight="bold"
                    fill="#1c1917"
                    textAnchor="middle"
                    fontFamily="monospace"
                  >
                    ${ATC.toFixed(2)}
                  </text>
                </svg>
              </div>

              {/* Chart Legend */}
              <div className="grid grid-cols-3 gap-2 text-center text-[10px] mt-3 pt-3 border-t border-border">
                <div className="p-1 rounded bg-emerald-50 text-emerald-800 font-semibold border border-emerald-200">
                  Economies (Q &lt; 10k)
                </div>
                <div className="p-1 rounded bg-blue-50 text-blue-800 font-semibold border border-blue-200">
                  Optimal output (Q*)
                </div>
                <div className="p-1 rounded bg-rose-50 text-rose-800 font-semibold border border-rose-200">
                  Diseconomies (Q &gt; 10k)
                </div>
              </div>
            </div>

            <p className="text-[11px] text-text-muted mt-3 italic text-center">
              Notice that even though fixed cost per unit (AFC) continuously declines, variable costs surge once production capacity is strained beyond 10,000 units.
            </p>
          </Card>
        </div>
      </div>

      {/* Deep-Dive Curated Knowledge Tabs */}
      <Card className="p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-border">
          <div>
            <h3 className="text-sm font-bold text-text-primary uppercase tracking-wide flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-blue-600" />
              <span>Curriculum Scale Breakdown & Case Studies</span>
            </h3>
            <p className="text-xs text-text-secondary mt-0.5">
              Review syllabus mechanisms, textbook formulas, and high-scoring corporate exam exemplars.
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="flex flex-wrap items-center gap-1 p-1 bg-surface-subtle rounded-lg border border-border">
            <button
              onClick={() => setActiveTab('internal-eco')}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition cursor-pointer ${
                activeTab === 'internal-eco'
                  ? 'bg-white text-emerald-700 shadow-subtle'
                  : 'text-text-muted hover:text-text-primary'
              }`}
            >
              7 Internal Economies
            </button>
            <button
              onClick={() => setActiveTab('external-eco')}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition cursor-pointer ${
                activeTab === 'external-eco'
                  ? 'bg-white text-blue-700 shadow-subtle'
                  : 'text-text-muted hover:text-text-primary'
              }`}
            >
              4 External Economies
            </button>
            <button
              onClick={() => setActiveTab('internal-dis')}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition cursor-pointer ${
                activeTab === 'internal-dis'
                  ? 'bg-white text-amber-700 shadow-subtle'
                  : 'text-text-muted hover:text-text-primary'
              }`}
            >
              5 Internal Diseconomies
            </button>
            <button
              onClick={() => setActiveTab('external-dis')}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition cursor-pointer ${
                activeTab === 'external-dis'
                  ? 'bg-white text-rose-700 shadow-subtle'
                  : 'text-text-muted hover:text-text-primary'
              }`}
            >
              3 External Diseconomies
            </button>
          </div>
        </div>

        {/* Tab 1: 7 Internal Economies (Hoang p.67) */}
        {activeTab === 'internal-eco' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/20">
              <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wide block">1. Technical</span>
              <h4 className="text-sm font-bold text-text-primary mt-0.5">Automated Capital & High Output</h4>
              <p className="text-xs text-text-secondary mt-1.5 leading-relaxed">
                Spreading heavy capital depreciation over huge production volumes. Small firms cannot afford multi-million-dollar robotics.
              </p>
              <span className="inline-block text-[10px] text-emerald-800 bg-emerald-100/60 px-2 py-0.5 rounded font-medium mt-2">
                Case: Philips automated audio lines in Shenzhen
              </span>
            </div>

            <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/20">
              <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wide block">2. Financial</span>
              <h4 className="text-sm font-bold text-text-primary mt-0.5">Lower Borrowing Interest Rates</h4>
              <p className="text-xs text-text-secondary mt-1.5 leading-relaxed">
                Lenders see large firms as less risky, so they lend large sums at lower rates of interest; financiers compete to lend to large, reputable businesses.
              </p>
              <span className="inline-block text-[10px] text-emerald-800 bg-emerald-100/60 px-2 py-0.5 rounded font-medium mt-2">
                Case: smaller firms pay higher interest because of higher risk
              </span>
            </div>

            <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/20">
              <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wide block">3. Managerial</span>
              <h4 className="text-sm font-bold text-text-primary mt-0.5">Executive Specialization</h4>
              <p className="text-xs text-text-secondary mt-1.5 leading-relaxed">
                Large firms employ specialist managers, avoiding duplication of effort; a sole trader often has to be marketer, accountant and production manager.
              </p>
              <span className="inline-block text-[10px] text-emerald-800 bg-emerald-100/60 px-2 py-0.5 rounded font-medium mt-2">
                Case: Dedicated procurement directors & labor lawyers
              </span>
            </div>

            <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/20">
              <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wide block">4. Specialization</span>
              <h4 className="text-sm font-bold text-text-primary mt-0.5">Shopfloor Division of Labor</h4>
              <p className="text-xs text-text-secondary mt-1.5 leading-relaxed">
                Like managerial economies, but from division of labour among the workforce rather than the management, raising productivity.
              </p>
              <span className="inline-block text-[10px] text-emerald-800 bg-emerald-100/60 px-2 py-0.5 rounded font-medium mt-2">
                Case: car makers&apos; specialist designers, engineers and production staff
              </span>
            </div>

            <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/20">
              <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wide block">5. Marketing</span>
              <h4 className="text-sm font-bold text-text-primary mt-0.5">Spreading Global Campaigns & Bulk Selling</h4>
              <p className="text-xs text-text-secondary mt-1.5 leading-relaxed">
                Selling in bulk saves time and transaction costs, and global firms (McDonald&apos;s, Nike) spread advertising costs by using the same campaign across the world.
              </p>
              <span className="inline-block text-[10px] text-emerald-800 bg-emerald-100/60 px-2 py-0.5 rounded font-medium mt-2">
                Case: Coca-Cola sells 1,000 cans to a supermarket in one transaction
              </span>
            </div>

            <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/20">
              <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wide block">6. Purchasing</span>
              <h4 className="text-sm font-bold text-text-primary mt-0.5">Bulk-Buying Discounts</h4>
              <p className="text-xs text-text-secondary mt-1.5 leading-relaxed">
                Buying resources in bulk lowers average costs. Small firms also get bulk discounts, but the larger the order, the greater the discount might be.
              </p>
              <span className="inline-block text-[10px] text-emerald-800 bg-emerald-100/60 px-2 py-0.5 rounded font-medium mt-2">
                Not just bulk buying: see the Common mistake on p.67
              </span>
            </div>

            <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/20">
              <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wide block">7. Risk-Bearing</span>
              <h4 className="text-sm font-bold text-text-primary mt-0.5">Diversified Conglomerates</h4>
              <p className="text-xs text-text-secondary mt-1.5 leading-relaxed">
                Conglomerates spread fixed costs such as advertising and R&amp;D across many operations, so a loss in one area does not jeopardise the business overall.
              </p>
              <span className="inline-block text-[10px] text-emerald-800 bg-emerald-100/60 px-2 py-0.5 rounded font-medium mt-2">
                Case: Reliance Industries (Case study 5.1)
              </span>
            </div>
          </div>
        )}

        {/* Tab 2: 4 External Economies */}
        {activeTab === 'external-eco' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/20">
              <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wide block">1. Technological Progress</span>
              <h4 className="text-sm font-bold text-text-primary mt-0.5">Shared Industry Infrastructure</h4>
              <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                Technological progress raises productivity across the industry; the Internet created huge cost savings for e-commerce firms, which need not pay central business district rents.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/20">
              <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wide block">2. Transportation Networks</span>
              <h4 className="text-sm font-bold text-text-primary mt-0.5">Public Freight Infrastructure</h4>
              <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                State deepwater ports, automated freight corridors, and motorways reduce delivery lead times and transit expenses across the region.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/20">
              <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wide block">3. Skilled Labour Pool</span>
              <h4 className="text-sm font-bold text-text-primary mt-0.5">Regional Educational Hubs</h4>
              <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                Local universities and technical colleges graduate pre-trained specialists, slashing recruitment times and foundational training fees.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/20">
              <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wide block">4. Regional Specialization</span>
              <h4 className="text-sm font-bold text-text-primary mt-0.5">Industrial Agglomeration</h4>
              <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                A location with a trusted reputation for a product lets its firms charge premium prices (e.g. Murano glass in Venice).
              </p>
            </div>
          </div>
        )}

        {/* Tab 3: 5 Internal Diseconomies */}
        {activeTab === 'internal-dis' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/20">
              <span className="text-[10px] font-bold text-amber-700 uppercase tracking-wide block">1. Lack of Control & Coordination</span>
              <h4 className="text-sm font-bold text-text-primary mt-0.5">Wider Spans of Control</h4>
              <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                The span of control widens, causing communication problems and slower decisions; operations in different locations are harder to coordinate, and workers may feel alienated.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/20">
              <span className="text-[10px] font-bold text-amber-700 uppercase tracking-wide block">2. Poorer Working Relationships</span>
              <h4 className="text-sm font-bold text-text-primary mt-0.5">Detached Senior Managers</h4>
              <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                In an oversized business, senior managers become detached from staff lower down the hierarchy, damaging communication flows and motivation.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/20">
              <span className="text-[10px] font-bold text-amber-700 uppercase tracking-wide block">3. Lower Productive Efficiency</span>
              <h4 className="text-sm font-bold text-text-primary mt-0.5">Boredom & Slack</h4>
              <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                Specialization and division of labour make tasks repetitive, so workers get bored and there is scope for slack (inefficiency and procrastination).
              </p>
            </div>

            <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/20">
              <span className="text-[10px] font-bold text-amber-700 uppercase tracking-wide block">4. Bureaucracy & Red Tape</span>
              <h4 className="text-sm font-bold text-text-primary mt-0.5">Approval Paralysis & Excessive Paperwork</h4>
              <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                Multi-signature compliance forms and lengthy committee meetings add administrative overhead costs without increasing output.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/20">
              <span className="text-[10px] font-bold text-amber-700 uppercase tracking-wide block">5. Corporate Complacency</span>
              <h4 className="text-sm font-bold text-text-primary mt-0.5">Inertia & Loss of Competitive Alertness</h4>
              <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                Complacency, &ldquo;a lack of awareness of genuine risks or deficiencies&rdquo;, in large dominant firms reduces productivity and raises unit costs.
              </p>
            </div>
          </div>
        )}

        {/* Tab 4: 3 External Diseconomies */}
        {activeTab === 'external-dis' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl border border-rose-200 bg-rose-50/20">
              <span className="text-[10px] font-bold text-rose-700 uppercase tracking-wide block">1. Higher Rents</span>
              <h4 className="text-sm font-bold text-text-primary mt-0.5">Land Scarcity in Prime Hubs</h4>
              <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                Excessive demand to locate in prime business clusters (Manhattan, Shinjuku, Silicon Valley) bids up square-foot lease costs without increasing output.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-rose-200 bg-rose-50/20">
              <span className="text-[10px] font-bold text-rose-700 uppercase tracking-wide block">2. Traffic Congestion</span>
              <h4 className="text-sm font-bold text-text-primary mt-0.5">Logistical Gridlock & Delivery Delays</h4>
              <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                Overcrowded urban road arteries trap freight vans, resulting in wasted idling fuel, driver overtime pay, and missed customer delivery windows.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-rose-200 bg-rose-50/20">
              <span className="text-[10px] font-bold text-rose-700 uppercase tracking-wide block">3. Higher Pay & Financial Rewards</span>
              <h4 className="text-sm font-bold text-text-primary mt-0.5">Local Labor Shortages</h4>
              <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                With many firms in an area, workers have a greater choice of employers, so firms must offer higher pay and financial rewards to attract or retain staff, raising costs without raising output.
              </p>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}
