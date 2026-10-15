'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MCQ_QUESTIONS } from '@/data/question-bank';
import { useStudyProgress } from '@/context/StudyProgressContext';
import { Button } from '@/components/ui/Button';
import { Badge, AoBadge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { MarkdownRenderer } from '@/components/ui/MarkdownRenderer';
import { 
  CheckCircle2, 
  XCircle, 
  ChevronRight, 
  ChevronLeft, 
  RotateCcw, 
  HelpCircle,
  Filter,
  Sparkles,
  Zap
} from 'lucide-react';

import { GroupTopicSelector } from '@/components/common/GroupTopicSelector';
import { ALL_CONTENT_TOPICS, PRESET_CONTENT_GROUPS } from '@/data/content-groups';
import { SyllabusSubunit } from '@/types/curriculum';

export default function UntimedMcqPage() {
  const { state, recordMcqAttempt, resetMcqAttempt } = useStudyProgress();
  const [selectedSubunits, setSelectedSubunits] = useState<SyllabusSubunit[]>(
    ALL_CONTENT_TOPICS.map((t) => t.id)
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  const subunitSet = new Set(selectedSubunits);
  if (subunitSet.has('1.5-growth-and-evolution')) {
    subunitSet.add('1.5-economies-of-scale');
  }

  const filteredQuestions = MCQ_QUESTIONS.filter((q) => subunitSet.has(q.subunit));

  const currentQ = filteredQuestions[currentIndex] || filteredQuestions[0];
  const attempt = currentQ ? state.mcqAttempts[currentQ.id] : undefined;

  const handleSelectOption = (key: 'A' | 'B' | 'C' | 'D') => {
    if (!currentQ || attempt) return;
    const isCorrect = key === currentQ.correctAnswer;
    recordMcqAttempt(currentQ.id, key, isCorrect);
  };

  const handleNext = () => {
    if (currentIndex + 1 < filteredQuestions.length) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 sm:p-6 rounded-xl border border-border shadow-subtle">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-blue-50 text-blue-700">
              <HelpCircle className="w-5 h-5" strokeWidth={1.75} />
            </span>
            <h1 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight">
              Self-Paced MCQ Question Bank
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-text-secondary mt-1">
            Test yourself on any chosen group of content or individual topics with complete distractor analyses.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link href="/practice/custom">
            <Button variant="primary" size="sm" icon={<Sparkles className="w-3.5 h-3.5" />}>
              Custom Test Builder
            </Button>
          </Link>
          <Link href="/blitz">
            <Button variant="outline" size="sm" icon={<Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />}>
              Timed Blitz
            </Button>
          </Link>
        </div>
      </div>

      {/* Multi-Topic Group Selector */}
      <GroupTopicSelector
        selectedSubunits={selectedSubunits}
        onChange={(subunits) => {
          setSelectedSubunits(subunits);
          setCurrentIndex(0);
        }}
        filterQuestionType="mcq"
        compact={true}
      />

      {/* Question Counter and Pagination Navigation Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3.5 rounded-xl border border-border shadow-subtle">
        <div className="flex items-center gap-2 text-xs text-text-muted">
          <span>Active Group:</span>
          <strong className="text-text-primary">
            {filteredQuestions.length} MCQs matching {selectedSubunits.length} chosen topic{selectedSubunits.length === 1 ? '' : 's'}
          </strong>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            icon={<ChevronLeft className="w-3.5 h-3.5" />}
          >
            Prev
          </Button>

          <span className="text-xs font-mono font-medium text-text-primary px-2">
            {filteredQuestions.length > 0 ? `${currentIndex + 1} / ${filteredQuestions.length}` : '0 / 0'}
          </span>

          <Button
            variant="outline"
            size="sm"
            onClick={handleNext}
            disabled={currentIndex + 1 >= filteredQuestions.length}
            icon={<ChevronRight className="w-3.5 h-3.5" />}
          >
            Next
          </Button>
        </div>
      </div>

      {/* Active Question Display */}
      {currentQ && (
        <Card className="p-6 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-border">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-text-muted font-mono">{currentQ.id}</span>
              <Badge variant="neutral" size="sm">{currentQ.topicTag}</Badge>
              <AoBadge ao="AO1" />
            </div>

            {attempt && (
              <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full border ${
                attempt.isCorrect 
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-300' 
                  : 'bg-red-50 text-red-800 border-red-300'
              }`}>
                {attempt.isCorrect ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                {attempt.isCorrect ? 'Answered Correctly' : 'Answered Incorrectly'}
              </span>
            )}
          </div>

          <h2 className="text-base sm:text-lg font-semibold text-text-primary leading-snug">
            <MarkdownRenderer content={currentQ.question} inline />
          </h2>

          {/* Options Grid */}
          <div className="grid grid-cols-1 gap-3">
            {currentQ.options.map((opt) => {
              const isSelected = attempt?.selectedKey === opt.key;
              const isCorrect = opt.key === currentQ.correctAnswer;

              let optionStyle = 'border-border bg-white hover:border-stone-400 hover:bg-stone-50/50';
              if (attempt) {
                if (isCorrect) {
                  optionStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 ring-1 ring-emerald-500';
                } else if (isSelected) {
                  optionStyle = 'border-red-500 bg-red-50 text-red-950 ring-1 ring-red-500';
                } else {
                  optionStyle = 'border-border/60 opacity-60 bg-white';
                }
              }

              return (
                <button
                  key={opt.key}
                  disabled={!!attempt}
                  onClick={() => handleSelectOption(opt.key)}
                  className={`w-full text-left p-4 rounded-xl border text-sm font-medium transition flex items-start gap-3 select-none cursor-pointer ${optionStyle}`}
                >
                  <span className={`w-6 h-6 rounded-md flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5 ${
                    attempt && isCorrect 
                      ? 'bg-emerald-600 text-white' 
                      : attempt && isSelected 
                      ? 'bg-red-600 text-white' 
                      : 'bg-surface-subtle text-text-primary border border-border'
                  }`}>
                    {opt.key}
                  </span>
                  <span className="flex-1 leading-relaxed">
                    <MarkdownRenderer content={opt.text} inline />
                  </span>
                  {attempt && (
                    <span className="flex-shrink-0 mt-0.5">
                      {isCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      ) : isSelected ? (
                        <XCircle className="w-5 h-5 text-red-600" />
                      ) : null}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Detailed Explanation Reveal */}
          {attempt && (
            <div className="mt-6 pt-5 border-t border-border space-y-3 animate-in fade-in duration-200">
              <div className="p-4 rounded-xl bg-surface-subtle border border-border space-y-2 text-xs text-text-secondary leading-relaxed">
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <h4 className="text-xs font-bold text-text-primary uppercase tracking-wide">
                    Examiner Explanation
                  </h4>
                </div>
                <div className="leading-relaxed">
                  <strong className="text-emerald-700">Correct ({currentQ.correctAnswer}): </strong>
                  <MarkdownRenderer content={currentQ.explanation.correctRationale} inline />
                </div>
                <div className="leading-relaxed">
                  <strong className="text-stone-700">Distractor Analysis: </strong>
                  <MarkdownRenderer content={currentQ.explanation.distractorAnalysis} inline />
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => resetMcqAttempt(currentQ.id)}
                  icon={<RotateCcw className="w-3.5 h-3.5" />}
                >
                  Retry Question
                </Button>

                <Button
                  variant="primary"
                  size="sm"
                  onClick={handleNext}
                  disabled={currentIndex + 1 >= filteredQuestions.length}
                  icon={<ChevronRight className="w-3.5 h-3.5" />}
                >
                  Next Question
                </Button>
              </div>
            </div>
          )}
        </Card>
      )}
    </div>
  );
}
