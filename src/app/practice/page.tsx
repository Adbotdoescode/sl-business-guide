'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ExamPractice } from '@/components/exam/ExamPractice';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { MCQ_QUESTIONS, TWO_MARK_QUESTIONS } from '@/data/question-bank';
import { FOUR_MARK_QUESTIONS, SIX_MARK_QUESTIONS } from '@/data/model-answers';
import { 
  PenTool, 
  CheckSquare, 
  Zap, 
  HelpCircle, 
  Grid, 
  Scale, 
  Compass, 
  Key, 
  Sparkles, 
  ArrowRight,
  Layers,
  FileCheck,
  Target,
  Bookmark
} from 'lucide-react';

export default function PracticeHubPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'bank' | 'interactive' | 'tests'>('all');

  const totalMCQs = MCQ_QUESTIONS.length;
  const totalTwoMarks = TWO_MARK_QUESTIONS.length;
  const totalWritten = FOUR_MARK_QUESTIONS.length + SIX_MARK_QUESTIONS.length;
  const totalPreparatory = totalTwoMarks + totalWritten;

  return (
    <div className="space-y-8 animate-in fade-in duration-150">
      {/* Editorial Practice Hub Header */}
      <div className="bg-white rounded-2xl border border-border shadow-subtle p-6 sm:p-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200 mb-4">
            <Target className="w-3.5 h-3.5 text-blue-600" />
            <span>Practice & Interactive Hub</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-text-primary tracking-tight leading-tight">
            Preparatory Question Bank, Testing Modes & Interactive Tools
          </h1>

          <p className="text-sm sm:text-base text-text-secondary mt-3 leading-relaxed">
            Everything you need for exam mastery: prioritize direct written practice in the Preparatory Question Bank, test tactical decision-making with interactive toolkit frameworks, or run timed multi-topic mock exams.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-6 pt-6 border-t border-border/80 text-xs text-text-muted">
            <span className="flex items-center gap-1.5 font-semibold text-blue-700">
              <Target className="w-4 h-4 text-blue-600" /> {totalPreparatory} Preparatory Exam Questions
            </span>
            <span className="flex items-center gap-1.5 font-medium text-text-primary">
              <CheckSquare className="w-4 h-4 text-emerald-600" /> {totalMCQs} MCQs Across All Units
            </span>
            <span className="flex items-center gap-1.5 font-medium text-text-primary">
              <Compass className="w-4 h-4 text-purple-600" /> 8 Interactive Frameworks
            </span>
          </div>
        </div>
      </div>

      {/* View Switcher Filter Pills */}
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => setActiveTab('all')}
          className={`text-xs px-3.5 py-1.5 rounded-lg border transition cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'all'
              ? 'bg-stone-900 text-white border-stone-900 font-semibold shadow-subtle'
              : 'bg-white text-text-secondary border-border hover:border-stone-400 hover:text-text-primary'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>All Overview</span>
        </button>

        <button
          onClick={() => setActiveTab('bank')}
          className={`text-xs px-3.5 py-1.5 rounded-lg border transition cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'bank'
              ? 'bg-blue-600 text-white border-blue-600 font-semibold shadow-subtle'
              : 'bg-blue-50/70 text-blue-800 border-blue-200 hover:bg-blue-100/70'
          }`}
        >
          <Target className="w-3.5 h-3.5 text-blue-600" />
          <span>Preparatory Question Bank</span>
          <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
            activeTab === 'bank' ? 'bg-blue-700 text-white' : 'bg-blue-100 text-blue-800'
          }`}>
            Priority
          </span>
        </button>

        <button
          onClick={() => setActiveTab('interactive')}
          className={`text-xs px-3.5 py-1.5 rounded-lg border transition cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'interactive'
              ? 'bg-purple-700 text-white border-purple-700 font-semibold shadow-subtle'
              : 'bg-purple-50/50 text-purple-800 border-purple-200 hover:bg-purple-100/60'
          }`}
        >
          <Compass className="w-3.5 h-3.5 text-purple-600" />
          <span>Interactive Tools & Drills (4)</span>
        </button>

        <button
          onClick={() => setActiveTab('tests')}
          className={`text-xs px-3.5 py-1.5 rounded-lg border transition cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'tests'
              ? 'bg-emerald-700 text-white border-emerald-700 font-semibold shadow-subtle'
              : 'bg-emerald-50/50 text-emerald-800 border-emerald-200 hover:bg-emerald-100/60'
          }`}
        >
          <CheckSquare className="w-3.5 h-3.5 text-emerald-600" />
          <span>Testing & Exam Modes (4)</span>
        </button>
      </div>

      {/* PRIORITY SECTION 1: Preparatory Question Bank (Direct Exam Question Runner) */}
      {(activeTab === 'all' || activeTab === 'bank') && (
        <section id="preparatory-question-bank" className="space-y-4 scroll-mt-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/80 pb-3">
            <div className="flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 rounded-full bg-blue-600 animate-pulse" />
              <h2 className="text-sm font-bold uppercase tracking-wider text-blue-800">
                Priority Section • Preparatory Question Bank
              </h2>
            </div>
            <div className="text-xs text-text-muted flex items-center gap-2">
              <span className="font-medium text-text-secondary">Official Syllabus Coverage:</span>
              <span className="px-2 py-0.5 rounded bg-surface-subtle border border-border font-mono text-[11px]">
                Unit 1 • Unit 2 Finance • BMT
              </span>
            </div>
          </div>

          {/* Embedded Direct Runner */}
          <ExamPractice 
            title="Preparatory Question Bank"
            subtitle="Direct question runner for 2-mark definitions, 4-mark applied PEEL paragraphs, and 6-mark evaluative essays with official mark schemes."
          />
        </section>
      )}

      {/* SECTION 2: Interactive Strategic Frameworks & Drills */}
      {(activeTab === 'all' || activeTab === 'interactive') && (
        <section className="space-y-4 pt-4 border-t border-border/80">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-text-primary tracking-tight flex items-center gap-2">
                <Compass className="w-5 h-5 text-purple-600" />
                <span>Interactive Strategic Frameworks & Toolkit Tools</span>
              </h2>
              <p className="text-xs text-text-secondary mt-0.5">
                Hands-on simulation drills, drag-and-drop matrix sorters, and toolkit visualizers.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* 1. BM Toolkit Hub */}
            <Card hoverEffect className="p-5 flex flex-col justify-between border-purple-200 bg-gradient-to-b from-purple-50/40 to-white">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-purple-600 text-white flex items-center justify-center shadow-subtle">
                    <Compass className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 border border-purple-300">
                    8 Tools Hub
                  </span>
                </div>
                <h3 className="text-sm font-bold text-text-primary mb-1">
                  BM Toolkit Interactive Hub
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed mb-4">
                  Interactive workspace for BCG Matrix portfolio balancing, quantitative Decision Trees, Circular Business Models (CBM), and STEEPLE audits.
                </p>
              </div>

              <div className="pt-3 border-t border-border/80">
                <Link href="/toolkit" className="w-full block">
                  <Button variant="primary" size="sm" className="w-full text-xs bg-purple-600 hover:bg-purple-700" icon={<ArrowRight className="w-3.5 h-3.5" />}>
                    Open Toolkit Hub
                  </Button>
                </Link>
              </div>
            </Card>

            {/* 2. Matrix Master Sorter */}
            <Card hoverEffect className="p-5 flex flex-col justify-between border-emerald-200 bg-gradient-to-b from-emerald-50/30 to-white">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center shadow-subtle">
                    <Grid className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                    Drag & Drop
                  </span>
                </div>
                <h3 className="text-sm font-bold text-text-primary mb-1">
                  Matrix Master Sorter
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed mb-4">
                  Interactive drag-and-drop quadrant sorter testing tactical mastery across the Ansoff Growth Matrix and SWOT Analysis.
                </p>
              </div>

              <div className="pt-3 border-t border-border/80">
                <Link href="/matrix-master" className="w-full block">
                  <Button variant="outline" size="sm" className="w-full text-xs border-emerald-300 hover:bg-emerald-50 text-emerald-900" icon={<ArrowRight className="w-3.5 h-3.5" />}>
                    Launch Sorter
                  </Button>
                </Link>
              </div>
            </Card>

            {/* 3. Entity Showdown */}
            <Card hoverEffect className="p-5 flex flex-col justify-between border-indigo-200 bg-gradient-to-b from-indigo-50/30 to-white">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-indigo-600 text-white flex items-center justify-center shadow-subtle">
                    <Scale className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800 border border-indigo-300">
                    Case Matcher
                  </span>
                </div>
                <h3 className="text-sm font-bold text-text-primary mb-1">
                  Entity Showdown Matrix
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed mb-4">
                  Head-to-head comparison tool for Sole Traders, Partnerships, Ltd, PLC, Cooperatives, and NGOs with case matchmaker drills.
                </p>
              </div>

              <div className="pt-3 border-t border-border/80">
                <Link href="/entities" className="w-full block">
                  <Button variant="outline" size="sm" className="w-full text-xs border-indigo-300 hover:bg-indigo-50 text-indigo-900" icon={<ArrowRight className="w-3.5 h-3.5" />}>
                    Open Showdown
                  </Button>
                </Link>
              </div>
            </Card>

            {/* 4. GET CASH Mnemonic Vault */}
            <Card hoverEffect className="p-5 flex flex-col justify-between border-rose-200 bg-gradient-to-b from-rose-50/30 to-white">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-rose-600 text-white flex items-center justify-center shadow-subtle">
                    <Key className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 border border-rose-300">
                    Speed Drill
                  </span>
                </div>
                <h3 className="text-sm font-bold text-text-primary mb-1">
                  GET CASH Mnemonic Vault
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed mb-4">
                  Master the 7 reasons for setting up a business (Growth, Earnings, Transference, Challenge, Autonomy, Security, Hobbies) with speed drills.
                </p>
              </div>

              <div className="pt-3 border-t border-border/80">
                <Link href="/mnemonics" className="w-full block">
                  <Button variant="outline" size="sm" className="w-full text-xs border-rose-300 hover:bg-rose-50 text-rose-900" icon={<ArrowRight className="w-3.5 h-3.5" />}>
                    Open Mnemonic Vault
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* SECTION 3: Testing & Exam Modes */}
      {(activeTab === 'all' || activeTab === 'tests') && (
        <section className="space-y-4 pt-4 border-t border-border/80">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-text-primary tracking-tight flex items-center gap-2">
                <CheckSquare className="w-5 h-5 text-emerald-600" />
                <span>Specialized Exam & Testing Modes</span>
              </h2>
              <p className="text-xs text-text-secondary mt-0.5">
                Structured assessments, timed sprints, and custom paper generators.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* 1. Custom Test Builder */}
            <Card hoverEffect className="p-5 flex flex-col justify-between border-blue-200 bg-gradient-to-b from-blue-50/40 to-white">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-subtle">
                    <CheckSquare className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 border border-blue-300">
                    Customizable
                  </span>
                </div>
                <h3 className="text-sm font-bold text-text-primary mb-1">
                  Custom Test Builder
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed mb-4">
                  Assemble tailored exam papers selecting specific modules from Unit 1, Unit 2, or BMT with flexible question counts and timers.
                </p>
              </div>

              <div className="pt-3 border-t border-border/80">
                <Link href="/practice/custom" className="w-full block">
                  <Button variant="primary" size="sm" className="w-full text-xs" icon={<ArrowRight className="w-3.5 h-3.5" />}>
                    Launch Builder
                  </Button>
                </Link>
              </div>
            </Card>

            {/* 2. Rapid Blitz Timed MCQ */}
            <Card hoverEffect className="p-5 flex flex-col justify-between border-amber-200 bg-gradient-to-b from-amber-50/30 to-white">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-500 text-white flex items-center justify-center shadow-subtle">
                    <Zap className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-300">
                    High Velocity
                  </span>
                </div>
                <h3 className="text-sm font-bold text-text-primary mb-1">
                  Timed Rapid Blitz
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed mb-4">
                  High-speed 120-second sprint, sudden-death mode, and instant rationale feedback to train rapid exam recall under pressure.
                </p>
              </div>

              <div className="pt-3 border-t border-border/80">
                <Link href="/blitz" className="w-full block">
                  <Button variant="outline" size="sm" className="w-full text-xs border-amber-300 hover:bg-amber-50 text-amber-900" icon={<ArrowRight className="w-3.5 h-3.5" />}>
                    Start Blitz
                  </Button>
                </Link>
              </div>
            </Card>

            {/* 3. Written Exam Practice & Rubrics */}
            <Card hoverEffect className="p-5 flex flex-col justify-between border-emerald-200 bg-gradient-to-b from-emerald-50/30 to-white">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center shadow-subtle">
                    <PenTool className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                    PEEL Rubrics
                  </span>
                </div>
                <h3 className="text-sm font-bold text-text-primary mb-1">
                  Written Exam Dedicated View
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed mb-4">
                  Full-screen dedicated view for 2-mark definitions, 4-mark applied PEEL stimuli, and 6-mark essays with split-screen mark schemes.
                </p>
              </div>

              <div className="pt-3 border-t border-border/80">
                <Link href="/practice/written" className="w-full block">
                  <Button variant="outline" size="sm" className="w-full text-xs border-emerald-300 hover:bg-emerald-50 text-emerald-900" icon={<ArrowRight className="w-3.5 h-3.5" />}>
                    Open Dedicated View
                  </Button>
                </Link>
              </div>
            </Card>

            {/* 4. Untimed MCQ Bank */}
            <Card hoverEffect className="p-5 flex flex-col justify-between border-stone-200 bg-white">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-surface-subtle text-text-primary border border-border flex items-center justify-center">
                    <HelpCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-stone-100 text-stone-700 border border-stone-200">
                    Self-Paced
                  </span>
                </div>
                <h3 className="text-sm font-bold text-text-primary mb-1">
                  Untimed MCQ Bank
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed mb-4">
                  Drill multiple-choice questions at your own pace with deep distractor analyses and textbook rationales for every option.
                </p>
              </div>

              <div className="pt-3 border-t border-border/80">
                <Link href="/practice/mcq" className="w-full block">
                  <Button variant="outline" size="sm" className="w-full text-xs" icon={<ArrowRight className="w-3.5 h-3.5" />}>
                    Browse Bank
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </section>
      )}
    </div>
  );
}
