'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { QuickActions } from '@/components/dashboard/QuickActions';
import { MasteryHeatmap } from '@/components/dashboard/MasteryHeatmap';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { MCQ_QUESTIONS, TWO_MARK_QUESTIONS } from '@/data/question-bank';
import { FOUR_MARK_QUESTIONS, SIX_MARK_QUESTIONS } from '@/data/model-answers';
import { 
  GraduationCap, 
  BookOpen, 
  ArrowRight, 
  Sparkles, 
  CheckCircle,
  FileCheck,
  Target,
  Layers,
  DollarSign,
  Briefcase,
  Compass
} from 'lucide-react';

interface ModuleItem {
  id: string;
  code: string;
  title: string;
  section: 'unit1' | 'unit2' | 'bmt';
  sectionLabel: string;
  summary: string;
  mcqs: number;
  shortAnswer: number;
}

const SYLLABUS_MODULES: ModuleItem[] = [
  // ==========================================
  // Section 1: Unit 1 - Business Management
  // ==========================================
  {
    id: '1.1-what-is-a-business',
    code: 'Unit 1.1',
    title: 'What is a Business?',
    section: 'unit1',
    sectionLabel: 'Unit 1 - Business Management',
    summary: 'Inputs, transformation process, goods vs services, economic sectors, chain of production, and GET CASH startup motives.',
    mcqs: 11,
    shortAnswer: 9,
  },
  {
    id: '1.2-types-of-business-entities',
    code: 'Unit 1.2',
    title: 'Types of Business Entities',
    section: 'unit1',
    sectionLabel: 'Unit 1 - Business Management',
    summary: 'Sole traders, ordinary partnerships, Ltd, PLC, cooperatives, NGOs, limited liability, and entity choice factors.',
    mcqs: 16,
    shortAnswer: 16,
  },
  {
    id: '1.3-business-objectives',
    code: 'Unit 1.3',
    title: 'Business Objectives',
    section: 'unit1',
    sectionLabel: 'Unit 1 - Business Management',
    summary: 'Vision and mission statements, common business objectives, strategic and tactical objectives, ethics, and CSR.',
    mcqs: 13,
    shortAnswer: 13,
  },
  {
    id: '1.4-stakeholders',
    code: 'Unit 1.4',
    title: 'Stakeholders',
    section: 'unit1',
    sectionLabel: 'Unit 1 - Business Management',
    summary: 'Internal vs external stakeholders, stakeholder conflict, mutual benefits synergy, and stakeholder mapping (power-interest grid).',
    mcqs: 10,
    shortAnswer: 13,
  },
  {
    id: '1.5-growth-and-evolution',
    code: 'Unit 1.5',
    title: 'Growth & Economies of Scale',
    section: 'unit1',
    sectionLabel: 'Unit 1 - Business Management',
    summary: 'Internal and external economies and diseconomies of scale, internal vs external growth, reasons to grow or stay small, and external growth methods.',
    mcqs: 17,
    shortAnswer: 14,
  },
  {
    id: '1.6-multinational-companies',
    code: 'Unit 1.6',
    title: 'Multinational Companies',
    section: 'unit1',
    sectionLabel: 'Unit 1 - Business Management',
    summary: 'MNC and transnational definitions, reasons to go multinational, protectionist policies, and positive vs negative impacts on host countries.',
    mcqs: 9,
    shortAnswer: 4,
  },

  // ==========================================
  // Section 2: Unit 2 - Finance
  // ==========================================
  {
    id: '3.1-intro-to-finance',
    code: 'Unit 3.1',
    title: 'Introduction to Finance',
    section: 'unit2',
    sectionLabel: 'Unit 2 - Finance',
    summary: 'Role of finance, Capital expenditure (CapEx) vs revenue expenditure (RevEx), fixed assets, collateral, and business investment drivers.',
    mcqs: 6,
    shortAnswer: 4,
  },
  {
    id: '3.2-sources-of-finance',
    code: 'Unit 3.2',
    title: 'Sources of Finance',
    section: 'unit2',
    sectionLabel: 'Unit 2 - Finance',
    summary: 'Internal sources (personal funds, retained profit, asset sales) vs external sources (share capital, loan capital, overdrafts, trade credit, leasing, microfinance, business angels).',
    mcqs: 8,
    shortAnswer: 4,
  },
  {
    id: '3.3-costs-and-revenues',
    code: 'Unit 3.3',
    title: 'Costs and Revenues',
    section: 'unit2',
    sectionLabel: 'Unit 2 - Finance',
    summary: 'Fixed, variable, semi-variable, direct and indirect costs, total and unit average costs (TC = TFC + TVC, AC = TC/Q), and diverse revenue streams.',
    mcqs: 6,
    shortAnswer: 4,
  },
  {
    id: '3.4-final-accounts',
    code: 'Unit 3.4',
    title: 'Final Accounts & Circular Business Models',
    section: 'unit2',
    sectionLabel: 'Unit 2 - Finance',
    summary: 'Profit and loss accounts (income statements), balance sheets (statements of financial position), straight-line depreciation, intangible assets, window dressing, and the 5 OECD Circular Business Models (CBM).',
    mcqs: 8,
    shortAnswer: 4,
  },

  // ==========================================
  // Section 3: Business Management Toolkit (BMT)
  // ==========================================
  {
    id: 'bmt-swot-analysis',
    code: 'BMT: SWOT',
    title: 'SWOT Analysis',
    section: 'bmt',
    sectionLabel: 'Business Management Toolkit',
    summary: 'Internal strengths and weaknesses, external opportunities and threats, STEEPLE scan, and SO/WO/ST/WT strategy pairing.',
    mcqs: 8,
    shortAnswer: 6,
  },
  {
    id: 'bmt-ansoff-matrix',
    code: 'BMT: Ansoff',
    title: 'Ansoff Growth Matrix',
    section: 'bmt',
    sectionLabel: 'Business Management Toolkit',
    summary: 'Market Penetration, Product Development, Market Development, Diversification (related vs unrelated), and risk gradients.',
    mcqs: 7,
    shortAnswer: 5,
  },
  {
    id: 'bmt-steeple-analysis',
    code: 'BMT: STEEPLE',
    title: 'STEEPLE Analysis',
    section: 'bmt',
    sectionLabel: 'Business Management Toolkit',
    summary: 'External macro-environmental audit across Social, Technological, Economic, Environmental, Political, Legal, and Ethical dimensions.',
    mcqs: 13,
    shortAnswer: 8,
  },
  {
    id: 'bmt-toolkit',
    code: 'BMT: Master',
    title: 'BM Toolkit Master Guide',
    section: 'bmt',
    sectionLabel: 'Business Management Toolkit',
    summary: 'Master the 8 SL tools: BCG Matrix portfolio cash balancing, Circular Business Models, and quantitative Decision Trees.',
    mcqs: 8,
    shortAnswer: 4,
  },
  {
    id: 'bmt-business-plan',
    code: 'BMT: Plan',
    title: 'Business Plan',
    section: 'bmt',
    sectionLabel: 'Business Management Toolkit',
    summary: 'What a business plan is, the six components of a typical plan, how it reassures lenders and investors, and its limitations as a planning tool.',
    mcqs: 6,
    shortAnswer: 3,
  },
  {
    id: 'bmt-descriptive-statistics',
    code: 'BMT: Stats',
    title: 'Descriptive Statistics',
    section: 'bmt',
    sectionLabel: 'Business Management Toolkit',
    summary: 'Mean, median, and mode, quartiles and the five-point summary, box plots, interquartile range, outliers, and standard deviation.',
    mcqs: 6,
    shortAnswer: 3,
  },
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'unit1' | 'unit2' | 'bmt'>('all');

  const filteredModules = activeTab === 'all' 
    ? SYLLABUS_MODULES 
    : SYLLABUS_MODULES.filter(m => m.section === activeTab);

  const totalMCQs = MCQ_QUESTIONS.length;
  const totalTwoMarks = TWO_MARK_QUESTIONS.length;
  const totalWritten = FOUR_MARK_QUESTIONS.length + SIX_MARK_QUESTIONS.length;

  return (
    <div className="space-y-8 animate-in fade-in duration-150">
      {/* Editorial Hero Banner */}
      <div className="bg-white rounded-2xl border border-border shadow-subtle p-6 sm:p-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SL Business Guide Exam Suite</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-text-primary tracking-tight leading-tight">
            Master Unit 1 - Business Management, Unit 2 - Finance & the BM Toolkit.
          </h1>

          <p className="text-sm sm:text-base text-text-secondary mt-3 leading-relaxed">
            Engineered around the Paul Hoang 5th Edition curriculum. Organized into structured sections for seamless exam revision: Unit 1 (Business Management), Unit 2 (Finance & Final Accounts), and the Business Management Toolkit.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-6 pt-6 border-t border-border/80 text-xs text-text-muted">
            <span className="flex items-center gap-1.5 font-medium text-text-primary">
              <CheckCircle className="w-4 h-4 text-emerald-600" /> {totalMCQs} Multiple Choice Questions
            </span>
            <span className="flex items-center gap-1.5 font-medium text-text-primary">
              <FileCheck className="w-4 h-4 text-blue-600" /> {totalTwoMarks} 2-Mark Knowledge Questions
            </span>
            <span className="flex items-center gap-1.5 font-medium text-text-primary">
              <Target className="w-4 h-4 text-amber-600" /> {totalWritten} Applied 4- & 6-Mark PEEL Rubrics
            </span>
          </div>
        </div>
      </div>

      {/* Quick Launch Cards */}
      <QuickActions />

      {/* Confidence & Mastery Heatmap */}
      <MasteryHeatmap />

      {/* Syllabus Modules Directory with Section Tabs */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-bold text-text-primary tracking-tight">
              Syllabus Study Modules
            </h2>
            <p className="text-xs text-text-secondary mt-0.5">
              Read comprehensive curriculum notes and review high-yield terminology before testing.
            </p>
          </div>
          <Link href="/study" className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1">
            <span>View All Guides</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Section Filter Pills */}
        <div className="flex flex-wrap gap-2 pt-1 pb-1">
          <button
            onClick={() => setActiveTab('all')}
            className={`text-xs px-3 py-1.5 rounded-lg border transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'all'
                ? 'bg-blue-600 text-white border-blue-600 font-semibold shadow-subtle'
                : 'bg-white text-text-secondary border-border hover:border-stone-400 hover:text-text-primary'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>All Modules (16)</span>
          </button>

          <button
            onClick={() => setActiveTab('unit1')}
            className={`text-xs px-3 py-1.5 rounded-lg border transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'unit1'
                ? 'bg-blue-700 text-white border-blue-700 font-semibold shadow-subtle'
                : 'bg-blue-50/50 text-blue-800 border-blue-200 hover:bg-blue-100/60'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5 text-blue-600" />
            <span>Unit 1 - Business Management (6)</span>
          </button>

          <button
            onClick={() => setActiveTab('unit2')}
            className={`text-xs px-3 py-1.5 rounded-lg border transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'unit2'
                ? 'bg-emerald-700 text-white border-emerald-700 font-semibold shadow-subtle'
                : 'bg-emerald-50/50 text-emerald-800 border-emerald-200 hover:bg-emerald-100/60'
            }`}
          >
            <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
            <span>Unit 2 - Finance (4)</span>
          </button>

          <button
            onClick={() => setActiveTab('bmt')}
            className={`text-xs px-3 py-1.5 rounded-lg border transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'bmt'
                ? 'bg-purple-700 text-white border-purple-700 font-semibold shadow-subtle'
                : 'bg-purple-50/50 text-purple-800 border-purple-200 hover:bg-purple-100/60'
            }`}
          >
            <Compass className="w-3.5 h-3.5 text-purple-600" />
            <span>BM Toolkit (6)</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredModules.map((mod) => (
            <Link key={mod.id} href={`/study/${mod.id}`} className="group">
              <Card hoverEffect className="p-5 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5">
                      <span className={`text-xs font-bold font-mono px-2 py-0.5 rounded border ${
                        mod.section === 'unit1' 
                          ? 'text-blue-700 bg-blue-50 border-blue-200'
                          : mod.section === 'unit2'
                          ? 'text-emerald-700 bg-emerald-50 border-emerald-200'
                          : 'text-purple-700 bg-purple-50 border-purple-200'
                      }`}>
                        {mod.code}
                      </span>
                      <span className="text-[10px] text-text-muted hidden sm:inline">
                        {mod.section === 'unit1' ? 'Unit 1' : mod.section === 'unit2' ? 'Unit 2' : 'BMT'}
                      </span>
                    </div>
                    <span className="text-[11px] text-text-muted">
                      {mod.mcqs} MCQs &bull; {mod.shortAnswer} 2-Mark
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-text-primary group-hover:text-blue-600 transition mb-1">
                    {mod.title}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {mod.summary}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-border/80 flex items-center justify-between text-xs text-blue-600 font-medium group-hover:translate-x-0.5 transition-transform">
                  <span>Open Study Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
