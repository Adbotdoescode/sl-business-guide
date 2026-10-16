'use client';

import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import Link from 'next/link';
import { SyllabusSubunit, MCQQuestion, TwoMarkQuestion } from '@/types/curriculum';
import { MCQ_QUESTIONS, TWO_MARK_QUESTIONS } from '@/data/question-bank';
import { 
  ALL_CONTENT_TOPICS, 
  PRESET_CONTENT_GROUPS, 
  getQuestionCountsForSubunits, 
  getTopicMeta 
} from '@/data/content-groups';
import { GroupTopicSelector } from '@/components/common/GroupTopicSelector';
import { useStudyProgress } from '@/context/StudyProgressContext';
import { triggerCelebration, triggerConfetti } from '@/lib/confetti';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge, AoBadge } from '@/components/ui/Badge';
import { Modal } from '@/components/ui/Modal';
import { MarkdownRenderer } from '@/components/ui/MarkdownRenderer';
import { FormattingToolbar } from '@/components/ui/FormattingToolbar';
import { formatTime } from '@/lib/utils';
import { 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  Timer, 
  RotateCcw, 
  Flag, 
  ChevronRight, 
  ChevronLeft, 
  Layers, 
  Play, 
  Trophy, 
  Sliders, 
  Award, 
  CheckSquare, 
  HelpCircle,
  ArrowRight,
  BookOpen,
  Filter
} from 'lucide-react';

export type QuestionFormat = 'mcq' | 'twoMark' | 'mixed';
export type TestMode = 'practice' | 'exam';

export interface TestItem {
  id: string;
  type: 'mcq' | 'twoMark';
  subunit: SyllabusSubunit;
  topicTag: string;
  question: string;
  // MCQ specific
  options?: { key: 'A' | 'B' | 'C' | 'D'; text: string }[];
  correctAnswer?: 'A' | 'B' | 'C' | 'D';
  explanation?: {
    correctRationale: string;
    distractorAnalysis: string;
  };
  // 2-mark specific
  modelAnswer?: string;
  markBreakdown?: [{ mark: 1; criterion: string }, { mark: 1; criterion: string }];
  examinerTips?: string;
}

export interface UserResponse {
  selectedKey?: 'A' | 'B' | 'C' | 'D';
  isCorrect?: boolean;
  writtenAnswer?: string;
  selfMarks?: number; // 0, 1, or 2 for 2-mark
  isFlagged?: boolean;
}

export function CustomTestRunner() {
  const { recordMcqAttempt } = useStudyProgress();

  // 1. Setup Configuration State
  const [selectedSubunits, setSelectedSubunits] = useState<SyllabusSubunit[]>([
    '1.1-what-is-a-business',
    '1.2-types-of-business-entities',
    '1.3-business-objectives',
  ]);
  const [questionFormat, setQuestionFormat] = useState<QuestionFormat>('mcq');
  const [questionCountLimit, setQuestionCountLimit] = useState<number>(10);
  const [testMode, setTestMode] = useState<TestMode>('practice');
  const [timeLimitMinutes, setTimeLimitMinutes] = useState<number>(0); // 0 = untimed

  // 2. Active Test State
  const [isTestActive, setIsTestActive] = useState(false);
  const [isTestCompleted, setIsTestCompleted] = useState(false);
  const [testItems, setTestItems] = useState<TestItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [responses, setResponses] = useState<Record<number, UserResponse>>({});
  const customTestTextareaRef = useRef<HTMLTextAreaElement>(null);
  const [isCustomTestPreview, setIsCustomTestPreview] = useState(false);

  useEffect(() => {
    setIsCustomTestPreview(false);
  }, [currentIndex]);
  
  // Timer state
  const [secondsRemaining, setSecondsRemaining] = useState<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const testStartTimeRef = useRef<number>(0);
  const [totalTimeSpentSeconds, setTotalTimeSpentSeconds] = useState(0);

  // Review & Submit Confirmation Modal
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [reviewFilter, setReviewFilter] = useState<'all' | 'missed' | 'flagged'>('all');

  // Calculate available counts for chosen subunits
  const availableCounts = useMemo(() => {
    return getQuestionCountsForSubunits(selectedSubunits);
  }, [selectedSubunits]);

  // Max available questions for the selected format
  const maxAvailableForFormat = useMemo(() => {
    if (questionFormat === 'mcq') return availableCounts.mcq;
    if (questionFormat === 'twoMark') return availableCounts.twoMark;
    return availableCounts.mcq + availableCounts.twoMark;
  }, [questionFormat, availableCounts]);

  // Build and start the custom test
  const handleStartTest = (customItems?: TestItem[]) => {
    let itemsToUse: TestItem[] = [];

    if (customItems && customItems.length > 0) {
      itemsToUse = customItems;
    } else {
      const subunitSet = new Set<string>(selectedSubunits);
      if (subunitSet.has('1.5-growth-and-evolution')) {
        subunitSet.add('1.5-economies-of-scale');
      }

      let pool: TestItem[] = [];

      if (questionFormat === 'mcq' || questionFormat === 'mixed') {
        const mcqFiltered = MCQ_QUESTIONS.filter((q) => subunitSet.has(q.subunit)).map((q) => ({
          id: q.id,
          type: 'mcq' as const,
          subunit: q.subunit,
          topicTag: q.topicTag,
          question: q.question,
          options: q.options,
          correctAnswer: q.correctAnswer,
          explanation: q.explanation,
        }));
        pool.push(...mcqFiltered);
      }

      if (questionFormat === 'twoMark' || questionFormat === 'mixed') {
        const twoMarkFiltered = TWO_MARK_QUESTIONS.filter((q) => subunitSet.has(q.subunit)).map((q) => ({
          id: q.id,
          type: 'twoMark' as const,
          subunit: q.subunit,
          topicTag: q.commandTerm,
          question: q.question,
          modelAnswer: q.modelAnswer,
          markBreakdown: q.markBreakdown,
          examinerTips: q.examinerTips,
        }));
        pool.push(...twoMarkFiltered);
      }

      // Fisher-Yates shuffle
      for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
      }

      // Slice to count
      const targetCount = questionCountLimit > 0 ? Math.min(questionCountLimit, pool.length) : pool.length;
      itemsToUse = pool.slice(0, targetCount);
    }

    if (itemsToUse.length === 0) return;

    setTestItems(itemsToUse);
    setCurrentIndex(0);
    setResponses({});
    setIsTestActive(true);
    setIsTestCompleted(false);
    testStartTimeRef.current = Date.now();

    if (timeLimitMinutes > 0) {
      setSecondsRemaining(timeLimitMinutes * 60);
    } else {
      setSecondsRemaining(0);
    }
  };

  const handleFinishTestRef = useRef<() => void>(() => {});

  // Finish test callback
  const handleFinishTest = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    const duration = Math.round((Date.now() - testStartTimeRef.current) / 1000);
    setTotalTimeSpentSeconds(duration);
    setIsTestActive(false);
    setIsTestCompleted(true);
    setShowSubmitModal(false);

    // Compute score for celebration
    let correctCount = 0;
    testItems.forEach((item, idx) => {
      const resp = responses[idx];
      if (item.type === 'mcq' && resp?.isCorrect) correctCount += 1;
      if (item.type === 'twoMark' && (resp?.selfMarks || 0) >= 1) correctCount += (resp?.selfMarks || 0) / 2;
    });

    const pct = testItems.length > 0 ? (correctCount / testItems.length) * 100 : 0;
    if (pct >= 80) {
      triggerCelebration();
    } else if (pct >= 60) {
      triggerConfetti({ particleCount: 30 });
    }
  }, [testItems, responses]);

  handleFinishTestRef.current = handleFinishTest;

  // Timer countdown loop
  useEffect(() => {
    if (!isTestActive || isTestCompleted || timeLimitMinutes === 0) return;

    timerRef.current = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          handleFinishTestRef.current();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isTestActive, isTestCompleted, timeLimitMinutes]);

  // Handle MCQ Selection
  const handleSelectMcq = (key: 'A' | 'B' | 'C' | 'D') => {
    const item = testItems[currentIndex];
    if (!item || item.type !== 'mcq') return;

    const isCorrect = key === item.correctAnswer;
    const existing = responses[currentIndex] || {};

    // In practice mode, lock once chosen. In exam mode, can change answer.
    if (testMode === 'practice' && existing.selectedKey) return;

    setResponses((prev) => ({
      ...prev,
      [currentIndex]: {
        ...existing,
        selectedKey: key,
        isCorrect,
      },
    }));

    // Record attempt in global context
    recordMcqAttempt(item.id, key, isCorrect);
  };

  // Toggle Flag
  const handleToggleFlag = () => {
    const existing = responses[currentIndex] || {};
    setResponses((prev) => ({
      ...prev,
      [currentIndex]: {
        ...existing,
        isFlagged: !existing.isFlagged,
      },
    }));
  };

  // 2-Mark Self assessment
  const handleSetSelfMark = (marks: number) => {
    const existing = responses[currentIndex] || {};
    setResponses((prev) => ({
      ...prev,
      [currentIndex]: {
        ...existing,
        selfMarks: marks,
        isCorrect: marks === 2,
      },
    }));
  };

  const handleSelectMcqRef = useRef(handleSelectMcq);
  handleSelectMcqRef.current = handleSelectMcq;

  // Keyboard navigation accelerators
  useEffect(() => {
    if (!isTestActive || isTestCompleted) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      const key = e.key.toUpperCase();
      if (['A', 'B', 'C', 'D'].includes(key)) {
        handleSelectMcqRef.current(key as 'A' | 'B' | 'C' | 'D');
      } else if (['1', '2', '3', '4'].includes(e.key)) {
        const keyMap: Record<string, 'A' | 'B' | 'C' | 'D'> = {
          '1': 'A',
          '2': 'B',
          '3': 'C',
          '4': 'D',
        };
        handleSelectMcqRef.current(keyMap[e.key]);
      } else if (e.key === 'ArrowRight' || e.key === 'Enter') {
        if (currentIndex + 1 < testItems.length) {
          setCurrentIndex((prev) => prev + 1);
        }
      } else if (e.key === 'ArrowLeft') {
        if (currentIndex > 0) {
          setCurrentIndex((prev) => prev - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isTestActive, isTestCompleted, currentIndex, testItems.length]);

  // Calculate results statistics
  const results = useMemo(() => {
    let earnedPoints = 0;
    let totalPoints = 0;
    const subunitBreakdown: Record<string, { correct: number; total: number; title: string }> = {};

    testItems.forEach((item, idx) => {
      const resp = responses[idx];
      const maxPts = item.type === 'twoMark' ? 2 : 1;
      totalPoints += maxPts;

      if (!subunitBreakdown[item.subunit]) {
        const meta = getTopicMeta(item.subunit);
        subunitBreakdown[item.subunit] = {
          correct: 0,
          total: 0,
          title: meta ? `${meta.code}: ${meta.title}` : item.subunit,
        };
      }
      subunitBreakdown[item.subunit].total += maxPts;

      if (item.type === 'mcq') {
        if (resp?.isCorrect) {
          earnedPoints += 1;
          subunitBreakdown[item.subunit].correct += 1;
        }
      } else {
        const marks = resp?.selfMarks ?? 0;
        earnedPoints += marks;
        subunitBreakdown[item.subunit].correct += marks;
      }
    });

    const percentage = totalPoints > 0 ? Math.round((earnedPoints / totalPoints) * 100) : 0;

    let ibGrade = 1;
    let gradeLabel = 'Needs Urgent Review';
    if (percentage >= 80) {
      ibGrade = 7;
      gradeLabel = 'Exceptional Mastery (Grade 7)';
    } else if (percentage >= 70) {
      ibGrade = 6;
      gradeLabel = 'High Mastery (Grade 6)';
    } else if (percentage >= 60) {
      ibGrade = 5;
      gradeLabel = 'Good Understanding (Grade 5)';
    } else if (percentage >= 50) {
      ibGrade = 4;
      gradeLabel = 'Satisfactory Pass (Grade 4)';
    } else if (percentage >= 38) {
      ibGrade = 3;
      gradeLabel = 'Developing / Elementary (Grade 3)';
    } else {
      ibGrade = 2;
      gradeLabel = 'Below Passing Standard';
    }

    return {
      earnedPoints,
      totalPoints,
      percentage,
      ibGrade,
      gradeLabel,
      subunitBreakdown,
    };
  }, [testItems, responses]);

  // Restart testing only missed questions
  const handleRetestMissed = () => {
    const missedItems = testItems.filter((_, idx) => {
      const resp = responses[idx];
      return !resp || !resp.isCorrect;
    });
    if (missedItems.length > 0) {
      handleStartTest(missedItems);
    }
  };

  // -------------------------------------------------------------
  // RENDER 1: SETUP SCREEN
  // -------------------------------------------------------------
  if (!isTestActive && !isTestCompleted) {
    return (
      <div className="space-y-6 max-w-4xl mx-auto">
        {/* Header Hero */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-border shadow-subtle space-y-3">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-blue-50 text-blue-700">
              <CheckSquare className="w-6 h-6" strokeWidth={1.75} />
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-extrabold text-text-primary tracking-tight">
                  Custom Content Test Builder
                </h1>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">Multi-Topic</span>
              </div>
              <p className="text-xs sm:text-sm text-text-secondary mt-0.5">
                Test yourself with questions from a chosen group of content — not just all or only one topic.
              </p>
            </div>
          </div>
        </div>

        {/* Step 1: Group & Topic Selector */}
        <div className="space-y-2">
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-bold uppercase tracking-wider text-text-muted">
              Step 1: Choose Your Content Group
            </span>
            <span className="text-xs text-blue-700 font-semibold">
              {selectedSubunits.length} of {ALL_CONTENT_TOPICS.length} Topics Selected
            </span>
          </div>

          <GroupTopicSelector
            selectedSubunits={selectedSubunits}
            onChange={(subunits) => setSelectedSubunits(subunits)}
            filterQuestionType={questionFormat === 'mixed' ? 'all' : questionFormat}
          />
        </div>

        {/* Step 2: Test Parameters */}
        <div className="bg-white p-5 sm:p-6 rounded-xl border border-border shadow-subtle space-y-6">
          <span className="text-xs font-bold uppercase tracking-wider text-text-muted block">
            Step 2: Configure Test Format & Challenge
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {/* Question Format */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-text-primary block">
                Question Type
              </label>
              <div className="grid grid-cols-1 gap-1.5">
                {[
                  { id: 'mcq', label: 'Multiple Choice (MCQ)', count: availableCounts.mcq },
                  { id: 'twoMark', label: '2-Mark Definitions (AO1)', count: availableCounts.twoMark },
                  { id: 'mixed', label: 'Mixed (MCQ + 2-Mark)', count: availableCounts.mcq + availableCounts.twoMark },
                ].map((fmt) => (
                  <button
                    key={fmt.id}
                    type="button"
                    onClick={() => setQuestionFormat(fmt.id as QuestionFormat)}
                    className={`text-left p-2.5 rounded-lg border text-xs transition flex items-center justify-between cursor-pointer ${
                      questionFormat === fmt.id
                        ? 'border-blue-600 bg-blue-50/50 text-blue-900 font-semibold ring-1 ring-blue-600'
                        : 'border-border text-text-secondary hover:border-stone-400 bg-white'
                    }`}
                  >
                    <span>{fmt.label}</span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-surface-subtle text-text-muted">
                      {fmt.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Question Count */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-text-primary block">
                Number of Questions
              </label>
              <div className="grid grid-cols-2 gap-1.5">
                {[5, 10, 15, 20].map((num) => {
                  const isDisabled = maxAvailableForFormat < num && maxAvailableForFormat > 0;
                  return (
                    <button
                      key={num}
                      type="button"
                      disabled={isDisabled}
                      onClick={() => setQuestionCountLimit(num)}
                      className={`p-2.5 rounded-lg border text-xs text-center transition cursor-pointer font-medium ${
                        questionCountLimit === num
                          ? 'border-blue-600 bg-blue-50/50 text-blue-900 font-semibold ring-1 ring-blue-600'
                          : isDisabled
                          ? 'border-border/40 opacity-40 text-text-muted cursor-not-allowed'
                          : 'border-border text-text-secondary hover:border-stone-400 bg-white'
                      }`}
                    >
                      {num} Questions
                    </button>
                  );
                })}
              </div>
              <button
                type="button"
                onClick={() => setQuestionCountLimit(0)}
                className={`w-full p-2 rounded-lg border text-xs text-center transition cursor-pointer font-medium ${
                  questionCountLimit === 0
                    ? 'border-blue-600 bg-blue-50/50 text-blue-900 font-semibold ring-1 ring-blue-600'
                    : 'border-border text-text-secondary hover:border-stone-400 bg-white'
                }`}
              >
                All Available ({maxAvailableForFormat} Qs)
              </button>
            </div>

            {/* Test Mode & Timer */}
            <div className="space-y-3">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-text-primary block">
                  Feedback Style
                </label>
                <div className="grid grid-cols-2 gap-1.5">
                  <button
                    type="button"
                    onClick={() => setTestMode('practice')}
                    className={`p-2 rounded-lg border text-xs text-center transition cursor-pointer ${
                      testMode === 'practice'
                        ? 'border-blue-600 bg-blue-50/50 text-blue-900 font-semibold ring-1 ring-blue-600'
                        : 'border-border text-text-secondary hover:border-stone-400 bg-white'
                    }`}
                  >
                    Practice Mode
                    <span className="block text-[10px] text-text-muted mt-0.5">Instant rationales</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setTestMode('exam')}
                    className={`p-2 rounded-lg border text-xs text-center transition cursor-pointer ${
                      testMode === 'exam'
                        ? 'border-blue-600 bg-blue-50/50 text-blue-900 font-semibold ring-1 ring-blue-600'
                        : 'border-border text-text-secondary hover:border-stone-400 bg-white'
                    }`}
                  >
                    Exam Mode
                    <span className="block text-[10px] text-text-muted mt-0.5">Score at end</span>
                  </button>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-text-primary block">
                  Timer Limit
                </label>
                <select
                  value={timeLimitMinutes}
                  onChange={(e) => setTimeLimitMinutes(Number(e.target.value))}
                  className="w-full text-xs bg-white border border-border rounded-lg px-2.5 py-2 text-text-primary focus:ring-2 focus:ring-blue-500 cursor-pointer"
                >
                  <option value={0}>Untimed (Relaxed Study)</option>
                  <option value={5}>5 Minutes (Sprint)</option>
                  <option value={10}>10 Minutes (Standard)</option>
                  <option value={15}>15 Minutes (Extended)</option>
                  <option value={20}>20 Minutes (Full Exam Simulation)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Launch Action */}
          <div className="pt-4 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-xs text-text-muted">
              Ready to test on <strong className="text-text-primary">{selectedSubunits.length} chosen topics</strong>.
            </div>

            <Button
              variant="primary"
              size="lg"
              disabled={maxAvailableForFormat === 0}
              onClick={() => handleStartTest()}
              icon={<Play className="w-4 h-4 fill-white" />}
              className="w-full sm:w-auto"
            >
              Start Custom Test ({questionCountLimit === 0 ? maxAvailableForFormat : Math.min(questionCountLimit, maxAvailableForFormat)} Questions)
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // RENDER 2: END-OF-TEST RESULTS SCREEN
  // -------------------------------------------------------------
  if (isTestCompleted) {
    const missedCount = testItems.filter((_, idx) => !responses[idx]?.isCorrect).length;
    const flaggedCount = testItems.filter((_, idx) => responses[idx]?.isFlagged).length;

    const filteredReviewItems = testItems.filter((_, idx) => {
      if (reviewFilter === 'missed') return !responses[idx]?.isCorrect;
      if (reviewFilter === 'flagged') return responses[idx]?.isFlagged;
      return true;
    });

    return (
      <div className="space-y-6 max-w-4xl mx-auto">
        {/* Scorecard Hero */}
        <Card className="p-6 sm:p-8 text-center space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-2">
            <Trophy className="w-8 h-8" />
          </div>

          <div>
            <span className="text-xs uppercase font-bold text-text-muted tracking-wider">
              Custom Group Test Complete
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight mt-1">
              {results.percentage}% Score
            </h1>
            <p className="text-sm font-semibold text-blue-700 mt-1">
              {results.gradeLabel} &bull; {results.earnedPoints} / {results.totalPoints} Marks
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto pt-2">
            <div className="p-3 rounded-xl bg-surface-subtle border border-border">
              <span className="text-[10px] uppercase font-bold text-text-muted block">Questions</span>
              <span className="text-lg font-bold font-mono text-text-primary">{testItems.length}</span>
            </div>
            <div className="p-3 rounded-xl bg-surface-subtle border border-border">
              <span className="text-[10px] uppercase font-bold text-text-muted block">IB Grade Band</span>
              <span className="text-lg font-bold font-mono text-blue-700">Level {results.ibGrade}</span>
            </div>
            <div className="p-3 rounded-xl bg-surface-subtle border border-border">
              <span className="text-[10px] uppercase font-bold text-text-muted block">Time Taken</span>
              <span className="text-lg font-bold font-mono text-text-primary">{formatTime(totalTimeSpentSeconds)}</span>
            </div>
            <div className="p-3 rounded-xl bg-surface-subtle border border-border">
              <span className="text-[10px] uppercase font-bold text-text-muted block">Content Group</span>
              <span className="text-sm font-bold text-text-primary truncate block mt-0.5">
                {selectedSubunits.length} Topics
              </span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4 border-t border-border">
            {missedCount > 0 && (
              <Button
                variant="primary"
                onClick={handleRetestMissed}
                icon={<RotateCcw className="w-4 h-4" />}
              >
                Retest Missed Questions ({missedCount})
              </Button>
            )}

            <Button
              variant="outline"
              onClick={() => handleStartTest()}
              icon={<RotateCcw className="w-4 h-4" />}
            >
              Retest Same Chosen Group
            </Button>

            <Button
              variant="outline"
              onClick={() => {
                setIsTestActive(false);
                setIsTestCompleted(false);
              }}
              icon={<Sliders className="w-4 h-4" />}
            >
              Configure New Group Test
            </Button>
          </div>
        </Card>

        {/* Breakdown by Topic in Chosen Group */}
        <Card className="p-5 sm:p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-blue-600" />
            <h3 className="text-sm font-bold text-text-primary uppercase tracking-wide">
              Performance Breakdown Across Chosen Topics
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {Object.entries(results.subunitBreakdown).map(([subunitId, data]) => {
              const pct = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
              const isHigh = pct >= 70;
              const isMed = pct >= 50 && pct < 70;

              return (
                <div
                  key={subunitId}
                  className="p-3.5 rounded-xl border border-border bg-surface-subtle space-y-2"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-text-primary truncate max-w-[200px]" title={data.title}>
                      {data.title}
                    </span>
                    <span className={`font-mono font-bold ${
                      isHigh ? 'text-emerald-700' : isMed ? 'text-amber-700' : 'text-red-700'
                    }`}>
                      {data.correct}/{data.total} ({pct}%)
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-stone-200 h-1.5 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-300 ${
                        isHigh ? 'bg-emerald-500' : isMed ? 'bg-amber-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Detailed Question Review */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-1">
            <h3 className="text-base font-bold text-text-primary tracking-tight">
              Question-by-Question Review ({filteredReviewItems.length})
            </h3>

            {/* Filter review buttons */}
            <div className="flex items-center gap-1.5 p-1 bg-surface-subtle rounded-lg border border-border self-start">
              <button
                onClick={() => setReviewFilter('all')}
                className={`text-xs px-2.5 py-1 rounded-md font-medium transition cursor-pointer ${
                  reviewFilter === 'all' ? 'bg-white shadow-subtle text-text-primary font-bold' : 'text-text-muted hover:text-text-primary'
                }`}
              >
                All ({testItems.length})
              </button>
              <button
                onClick={() => setReviewFilter('missed')}
                className={`text-xs px-2.5 py-1 rounded-md font-medium transition cursor-pointer ${
                  reviewFilter === 'missed' ? 'bg-white shadow-subtle text-red-700 font-bold' : 'text-text-muted hover:text-red-600'
                }`}
              >
                Missed ({missedCount})
              </button>
              <button
                onClick={() => setReviewFilter('flagged')}
                className={`text-xs px-2.5 py-1 rounded-md font-medium transition cursor-pointer ${
                  reviewFilter === 'flagged' ? 'bg-white shadow-subtle text-amber-700 font-bold' : 'text-text-muted hover:text-amber-600'
                }`}
              >
                Flagged ({flaggedCount})
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {filteredReviewItems.map((item) => {
              // find actual index in original testItems array
              const origIdx = testItems.findIndex((t) => t.id === item.id);
              const resp = responses[origIdx];
              const meta = getTopicMeta(item.subunit);

              return (
                <Card key={item.id} className="p-5 sm:p-6 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-border text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-text-muted">Q{origIdx + 1}</span>
                      <span className="font-mono text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                        {meta?.code || item.subunit}
                      </span>
                      <Badge variant="neutral" size="sm">{item.topicTag}</Badge>
                      {resp?.isFlagged && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                          <Flag className="w-3 h-3 fill-amber-500" /> Flagged
                        </span>
                      )}
                    </div>

                    <span className={`inline-flex items-center gap-1 font-semibold px-2 py-0.5 rounded-full border text-[11px] ${
                      resp?.isCorrect
                        ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                        : 'bg-red-50 text-red-800 border-red-300'
                    }`}>
                      {resp?.isCorrect ? <CheckCircle2 className="w-3 h-3" /> : <XCircle className="w-3 h-3" />}
                      {resp?.isCorrect ? 'Correct' : 'Needs Review'}
                    </span>
                  </div>

                  <h4 className="text-sm sm:text-base font-semibold text-text-primary leading-snug">
                    <MarkdownRenderer content={item.question} inline />
                  </h4>

                  {/* MCQ Options Display */}
                  {item.type === 'mcq' && item.options && (
                    <div className="grid grid-cols-1 gap-2 pt-1">
                      {item.options.map((opt) => {
                        const isSelected = resp?.selectedKey === opt.key;
                        const isCorrect = opt.key === item.correctAnswer;

                        let style = 'border-border/70 bg-white text-text-secondary';
                        if (isCorrect) {
                          style = 'border-emerald-500 bg-emerald-50/80 text-emerald-950 font-semibold ring-1 ring-emerald-500';
                        } else if (isSelected) {
                          style = 'border-red-500 bg-red-50/80 text-red-950 font-semibold ring-1 ring-red-500';
                        }

                        return (
                          <div
                            key={opt.key}
                            className={`p-3 rounded-lg border text-xs flex items-start gap-2.5 ${style}`}
                          >
                            <span className={`w-5 h-5 rounded flex items-center justify-center font-bold text-[11px] flex-shrink-0 ${
                              isCorrect ? 'bg-emerald-600 text-white' : isSelected ? 'bg-red-600 text-white' : 'bg-surface-subtle text-text-muted border border-border'
                            }`}>
                              {opt.key}
                            </span>
                            <span className="flex-1 leading-relaxed">
                              <MarkdownRenderer content={opt.text} inline />
                            </span>
                            {isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />}
                            {isSelected && !isCorrect && <XCircle className="w-4 h-4 text-red-600 flex-shrink-0" />}
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* 2-Mark Review */}
                  {item.type === 'twoMark' && (
                    <div className="space-y-3 pt-2">
                      {resp?.writtenAnswer && (
                        <div className="p-3.5 rounded-lg bg-surface-subtle/70 border border-border text-xs space-y-1">
                          <span className="font-bold text-text-primary block">Your Submitted Response:</span>
                          <div className="text-text-secondary leading-relaxed">
                            <MarkdownRenderer content={resp.writtenAnswer} />
                          </div>
                        </div>
                      )}

                      <div className="p-3.5 rounded-lg bg-surface-subtle border border-border text-xs space-y-2">
                        <span className="font-bold text-text-primary block">Official Model Answer (2 Marks):</span>
                        <p className="text-text-secondary leading-relaxed">
                          <MarkdownRenderer content={item.modelAnswer || ''} inline />
                        </p>
                      </div>

                      {item.markBreakdown && (
                        <div className="p-3 rounded-lg bg-emerald-50/60 border border-emerald-200 text-xs space-y-1.5 text-emerald-950">
                          <span className="font-bold block">Assessment Mark Breakdown:</span>
                          <ul className="list-disc list-inside space-y-1 text-[11px]">
                            {item.markBreakdown.map((mb, mIdx) => (
                              <li key={mIdx}>[1 Mark] <MarkdownRenderer content={mb.criterion} inline /></li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Examiner Explanation for MCQ */}
                  {item.explanation && (
                    <div className="p-3.5 rounded-xl bg-surface-subtle border border-border space-y-2 text-xs leading-relaxed text-text-secondary">
                      <div>
                        <strong className="text-emerald-700">Rationale ({item.correctAnswer}): </strong>
                        <MarkdownRenderer content={item.explanation.correctRationale} inline />
                      </div>
                      <div>
                        <strong className="text-stone-700">Distractor Breakdown: </strong>
                        <MarkdownRenderer content={item.explanation.distractorAnalysis} inline />
                      </div>
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // RENDER 3: ACTIVE TEST SESSION SCREEN
  // -------------------------------------------------------------
  const currentItem = testItems[currentIndex];
  const currentResp = responses[currentIndex] || {};
  const currentMeta = currentItem ? getTopicMeta(currentItem.subunit) : undefined;
  const answeredCount = Object.keys(responses).length;

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Top Test Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 sm:p-5 rounded-xl border border-border shadow-subtle">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-blue-50 text-blue-700">
            <CheckSquare className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                Question {currentIndex + 1} of {testItems.length}
              </span>
              <span className="text-xs text-text-muted">
                &bull; {answeredCount} Answered
              </span>
            </div>
            <p className="text-[11px] text-text-secondary mt-0.5">
              Testing on <strong className="text-text-primary">{selectedSubunits.length} chosen content topics</strong>
            </p>
          </div>
        </div>

        {/* Right side: Timer & Actions */}
        <div className="flex items-center gap-3">
          {timeLimitMinutes > 0 && (
            <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-mono text-xs font-bold ${
              secondsRemaining < 60
                ? 'bg-red-50 text-red-700 border-red-300 animate-pulse'
                : 'bg-surface-subtle text-text-primary border-border'
            }`}>
              <Timer className="w-4 h-4 text-blue-600" />
              <span>{formatTime(secondsRemaining)}</span>
            </div>
          )}

          <button
            onClick={handleToggleFlag}
            className={`p-2 rounded-lg border text-xs font-medium transition cursor-pointer flex items-center gap-1 ${
              currentResp.isFlagged
                ? 'bg-amber-50 text-amber-700 border-amber-300 font-semibold'
                : 'bg-white text-text-muted border-border hover:border-stone-400'
            }`}
            title="Flag question for review"
          >
            <Flag className={`w-4 h-4 ${currentResp.isFlagged ? 'fill-amber-500' : ''}`} />
            <span className="hidden sm:inline">Flag</span>
          </button>

          <Button
            variant="primary"
            size="sm"
            onClick={() => setShowSubmitModal(true)}
          >
            Finish Test
          </Button>
        </div>
      </div>

      {/* Question Jump Palette */}
      <div className="flex flex-wrap gap-1.5 p-3 rounded-xl bg-white border border-border shadow-subtle">
        {testItems.map((item, idx) => {
          const resp = responses[idx];
          const isCurrent = idx === currentIndex;
          const isAnswered = resp && (resp.selectedKey || resp.selfMarks !== undefined);

          let style = 'bg-surface-subtle text-text-secondary border-border hover:border-stone-400';
          if (isCurrent) {
            style = 'bg-blue-600 text-white border-blue-600 font-bold shadow-subtle ring-2 ring-blue-300';
          } else if (resp?.isFlagged) {
            style = 'bg-amber-100 text-amber-900 border-amber-300 font-bold';
          } else if (isAnswered) {
            style = 'bg-emerald-100 text-emerald-900 border-emerald-300 font-semibold';
          }

          return (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg text-xs font-mono transition flex items-center justify-center border cursor-pointer relative ${style}`}
            >
              {idx + 1}
              {resp?.isFlagged && (
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-500" />
              )}
            </button>
          );
        })}
      </div>

      {/* Main Active Question Card */}
      {currentItem && (
        <Card className="p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-border text-xs">
            <div className="flex items-center gap-2">
              <span className="font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                {currentMeta?.code || currentItem.subunit}
              </span>
              <span className="text-text-secondary font-medium">{currentMeta?.title}</span>
              <AoBadge ao={currentItem.type === 'twoMark' ? 'AO1' : 'AO1'} />
            </div>

            {testMode === 'practice' && currentResp.selectedKey && (
              <span className={`inline-flex items-center gap-1.5 font-semibold px-2.5 py-0.5 rounded-full border text-xs ${
                currentResp.isCorrect
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                  : 'bg-red-50 text-red-800 border-red-300'
              }`}>
                {currentResp.isCorrect ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                {currentResp.isCorrect ? 'Correct!' : 'Incorrect'}
              </span>
            )}
          </div>

          {/* Question Text */}
          <h2 className="text-base sm:text-lg font-semibold text-text-primary leading-relaxed">
            <MarkdownRenderer content={currentItem.question} inline />
          </h2>

          {/* MCQ Options */}
          {currentItem.type === 'mcq' && currentItem.options && (
            <div className="grid grid-cols-1 gap-3 pt-2">
              {currentItem.options.map((opt) => {
                const isSelected = currentResp.selectedKey === opt.key;
                const isCorrect = opt.key === currentItem.correctAnswer;

                let optionStyle = 'border-border bg-white hover:border-stone-400 hover:bg-stone-50/50';
                if (testMode === 'practice' && currentResp.selectedKey) {
                  if (isCorrect) {
                    optionStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 ring-1 ring-emerald-500';
                  } else if (isSelected) {
                    optionStyle = 'border-red-500 bg-red-50 text-red-950 ring-1 ring-red-500';
                  } else {
                    optionStyle = 'border-border/60 opacity-60 bg-white';
                  }
                } else if (testMode === 'exam' && isSelected) {
                  optionStyle = 'border-blue-600 bg-blue-50/70 text-blue-950 font-semibold ring-1 ring-blue-600';
                }

                return (
                  <button
                    key={opt.key}
                    type="button"
                    onClick={() => handleSelectMcq(opt.key)}
                    className={`w-full text-left p-4 rounded-xl border text-sm font-medium transition flex items-start gap-3 select-none cursor-pointer ${optionStyle}`}
                  >
                    <span className={`w-6 h-6 rounded-md flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5 ${
                      testMode === 'practice' && currentResp.selectedKey && isCorrect
                        ? 'bg-emerald-600 text-white'
                        : testMode === 'practice' && currentResp.selectedKey && isSelected
                        ? 'bg-red-600 text-white'
                        : isSelected
                        ? 'bg-blue-600 text-white'
                        : 'bg-surface-subtle text-text-primary border border-border'
                    }`}>
                      {opt.key}
                    </span>
                    <span className="flex-1 leading-relaxed">
                      <MarkdownRenderer content={opt.text} inline />
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          {/* 2-Mark Question Interface */}
          {currentItem.type === 'twoMark' && (
            <div className="space-y-4 pt-2">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-text-secondary flex items-center justify-between">
                  <span>Draft Your 2-Mark Response:</span>
                  <span className="text-[11px] font-mono text-text-muted">
                    {(currentResp.writtenAnswer || '').length} characters
                  </span>
                </label>

                {/* Formatting Toolbar with Bold, Italic, Underline, Highlight buttons */}
                <FormattingToolbar
                  textareaRef={customTestTextareaRef}
                  value={currentResp.writtenAnswer || ''}
                  onChange={(val) => {
                    setResponses((prev) => ({
                      ...prev,
                      [currentIndex]: {
                        ...prev[currentIndex],
                        writtenAnswer: val,
                      },
                    }));
                  }}
                  isPreview={isCustomTestPreview}
                  onTogglePreview={() => setIsCustomTestPreview((prev) => !prev)}
                  label="Format:"
                />

                {isCustomTestPreview ? (
                  <div className="min-h-[80px] p-3 rounded-b-xl border border-border bg-surface-subtle/50 text-sm text-text-primary leading-relaxed">
                    <MarkdownRenderer
                      content={currentResp.writtenAnswer || '*No response written yet. Switch to Write mode to format.*'}
                    />
                  </div>
                ) : (
                  <textarea
                    ref={customTestTextareaRef}
                    value={currentResp.writtenAnswer || ''}
                    onChange={(e) => {
                      const val = e.target.value;
                      setResponses((prev) => ({
                        ...prev,
                        [currentIndex]: {
                          ...prev[currentIndex],
                          writtenAnswer: val,
                        },
                      }));
                    }}
                    placeholder="State the textbook definition or two distinct characteristics... Use the buttons above to format bold, italic, underline, or highlight."
                    rows={3}
                    className="w-full text-sm p-3 rounded-b-xl rounded-t-none border border-border focus:ring-2 focus:ring-blue-500 bg-surface-subtle/50 text-text-primary resize-y min-h-[80px]"
                  />
                )}
              </div>

              {/* Reveal & Self-Evaluation */}
              <div className="p-4 rounded-xl bg-surface-subtle border border-border space-y-3 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-text-primary">Official Model Definition:</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-text-muted">Self-Award Marks:</span>
                    {[0, 1, 2].map((m) => (
                      <button
                        key={m}
                        type="button"
                        onClick={() => handleSetSelfMark(m)}
                        className={`w-6 h-6 rounded font-mono font-bold text-xs transition cursor-pointer ${
                          currentResp.selfMarks === m
                            ? 'bg-blue-600 text-white'
                            : 'bg-white border border-border text-text-secondary hover:border-stone-400'
                        }`}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </div>
                <p className="text-text-secondary leading-relaxed bg-white p-3 rounded-lg border border-border/80">
                  <MarkdownRenderer content={currentItem.modelAnswer || ''} inline />
                </p>
                {currentItem.markBreakdown && (
                  <div className="text-[11px] text-text-muted space-y-1">
                    <span className="font-semibold block text-text-primary">Checklist:</span>
                    {currentItem.markBreakdown.map((mb, mIdx) => (
                      <div key={mIdx}>&bull; [1 Mark] <MarkdownRenderer content={mb.criterion} inline /></div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* In Practice Mode: Reveal detailed explanations for MCQ */}
          {testMode === 'practice' && currentResp.selectedKey && currentItem.explanation && (
            <div className="mt-4 pt-4 border-t border-border space-y-2 text-xs text-text-secondary animate-in fade-in duration-150">
              <div className="p-4 rounded-xl bg-surface-subtle border border-border space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-text-primary">
                  <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                  <span>Examiner Syllabus Rationale:</span>
                </div>
                <div>
                  <strong className="text-emerald-700">Correct ({currentItem.correctAnswer}): </strong>
                  <MarkdownRenderer content={currentItem.explanation.correctRationale} inline />
                </div>
                <div>
                  <strong className="text-stone-700">Distractor Analysis: </strong>
                  <MarkdownRenderer content={currentItem.explanation.distractorAnalysis} inline />
                </div>
              </div>
            </div>
          )}

          {/* Bottom Navigation Buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <Button
              variant="outline"
              size="sm"
              disabled={currentIndex === 0}
              onClick={() => setCurrentIndex((prev) => prev - 1)}
              icon={<ChevronLeft className="w-3.5 h-3.5" />}
            >
              Previous
            </Button>

            <span className="text-xs font-mono font-medium text-text-muted">
              {currentIndex + 1} / {testItems.length}
            </span>

            {currentIndex + 1 < testItems.length ? (
              <Button
                variant="primary"
                size="sm"
                onClick={() => setCurrentIndex((prev) => prev + 1)}
                icon={<ChevronRight className="w-3.5 h-3.5" />}
              >
                Next
              </Button>
            ) : (
              <Button
                variant="primary"
                size="sm"
                onClick={() => setShowSubmitModal(true)}
              >
                Submit & Grade
              </Button>
            )}
          </div>
        </Card>
      )}

      {/* Confirmation Modal when finishing test */}
      <Modal
        isOpen={showSubmitModal}
        onClose={() => setShowSubmitModal(false)}
        title="Submit Custom Test?"
        description="Verify your responses before finalizing and generating your detailed performance scorecard."
      >
        <div className="space-y-4 pt-2 text-xs text-text-secondary">
          <div className="p-3 rounded-xl bg-surface-subtle border border-border space-y-1 font-medium">
            <div className="flex justify-between">
              <span>Total Questions:</span>
              <strong className="text-text-primary font-mono">{testItems.length}</strong>
            </div>
            <div className="flex justify-between">
              <span>Answered:</span>
              <strong className="text-emerald-700 font-mono">{answeredCount}</strong>
            </div>
            {testItems.length - answeredCount > 0 && (
              <div className="flex justify-between text-amber-700 font-semibold">
                <span>Unanswered:</span>
                <span className="font-mono">{testItems.length - answeredCount}</span>
              </div>
            )}
          </div>

          <p>
            Once submitted, you will receive your IB grade equivalent, topic-by-topic analysis for your chosen group, and distractor breakdowns.
          </p>

          <div className="flex justify-end gap-2.5 pt-2">
            <Button variant="outline" size="sm" onClick={() => setShowSubmitModal(false)}>
              Keep Working
            </Button>
            <Button variant="primary" size="sm" onClick={handleFinishTest}>
              Submit & View Scorecard
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
