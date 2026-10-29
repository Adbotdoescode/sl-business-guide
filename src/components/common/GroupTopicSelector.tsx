'use client';

import React, { useState } from 'react';
import { SyllabusSubunit } from '@/types/curriculum';
import { 
  ALL_CONTENT_TOPICS, 
  PRESET_CONTENT_GROUPS, 
  getQuestionCountsForSubunits 
} from '@/data/content-groups';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { 
  CheckSquare, 
  Square, 
  Layers, 
  Check, 
  SlidersHorizontal, 
  X, 
  Sparkles,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface GroupTopicSelectorProps {
  selectedSubunits: SyllabusSubunit[];
  onChange: (subunits: SyllabusSubunit[]) => void;
  filterQuestionType?: 'mcq' | 'twoMark' | 'all';
  compact?: boolean;
  className?: string;
}

export function GroupTopicSelector({
  selectedSubunits,
  onChange,
  filterQuestionType = 'all',
  compact = false,
  className = '',
}: GroupTopicSelectorProps) {
  const [isExpanded, setIsExpanded] = useState(!compact);

  // Determine which preset matches current selection, if any
  const matchedPreset = PRESET_CONTENT_GROUPS.find((preset) => {
    if (preset.subunits.length !== selectedSubunits.length) return false;
    const currentSet = new Set(selectedSubunits);
    return preset.subunits.every((s) => currentSet.has(s));
  });

  const handleSelectPreset = (presetId: string) => {
    const preset = PRESET_CONTENT_GROUPS.find((p) => p.id === presetId);
    if (preset) {
      onChange(preset.subunits);
    }
  };

  const handleToggleSubunit = (id: SyllabusSubunit) => {
    if (selectedSubunits.includes(id)) {
      // Don't allow deselecting the last remaining one
      if (selectedSubunits.length <= 1) return;
      onChange(selectedSubunits.filter((s) => s !== id));
    } else {
      onChange([...selectedSubunits, id]);
    }
  };

  const handleSelectAll = () => {
    onChange(ALL_CONTENT_TOPICS.map((t) => t.id));
  };

  const handleClearAllExceptFirst = () => {
    onChange([ALL_CONTENT_TOPICS[0].id]);
  };

  const counts = getQuestionCountsForSubunits(selectedSubunits);
  const relevantCount = filterQuestionType === 'mcq' ? counts.mcq : filterQuestionType === 'twoMark' ? counts.twoMark : counts.total;

  const unit1Topics = ALL_CONTENT_TOPICS.filter((t) => t.category === 'unit1');
  const unit3Topics = ALL_CONTENT_TOPICS.filter((t) => t.category === 'unit3');
  const bmtTopics = ALL_CONTENT_TOPICS.filter((t) => t.category === 'bmt');

  return (
    <div className={`bg-white rounded-xl border border-border shadow-subtle p-4 sm:p-5 space-y-4 ${className}`}>
      {/* Top Bar: Active Group Overview & Preset Pills */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-blue-50 text-blue-700">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-bold text-text-primary">
                Content Group:
              </span>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-800 border border-blue-200">
                {matchedPreset ? matchedPreset.name : `Custom Group (${selectedSubunits.length} Topics)`}
              </span>
            </div>
            <p className="text-[11px] text-text-secondary mt-0.5">
              {relevantCount} questions available across {selectedSubunits.length} of {ALL_CONTENT_TOPICS.length} modules
            </p>
          </div>
        </div>

        {/* Quick Actions / Toggle view */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1.5 text-xs font-medium text-blue-600 hover:text-blue-800 px-2.5 py-1 rounded-lg hover:bg-blue-50/60 transition cursor-pointer border border-blue-200/80"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>{isExpanded ? 'Hide Topic Matrix' : 'Customize Topics'}</span>
            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Preset Group Buttons */}
      <div className="flex flex-wrap gap-1.5 pt-1">
        {PRESET_CONTENT_GROUPS.map((preset) => {
          const isSelected = matchedPreset?.id === preset.id;
          return (
            <button
              key={preset.id}
              onClick={() => handleSelectPreset(preset.id)}
              className={`text-xs px-2.5 py-1.5 rounded-lg border transition cursor-pointer flex items-center gap-1.5 ${
                isSelected
                  ? 'bg-blue-600 text-white border-blue-600 font-semibold shadow-subtle'
                  : 'bg-surface-subtle text-text-secondary border-border hover:border-stone-400 hover:text-text-primary'
              }`}
            >
              {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
              <span>{preset.shortBadge}</span>
            </button>
          );
        })}
      </div>

      {/* Expanding Matrix: Topic Checkbox Matrix */}
      {isExpanded && (
        <div className="pt-3 border-t border-border space-y-4 animate-in fade-in duration-150">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-text-secondary">
              Select any custom combination of topics:
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handleSelectAll}
                className="text-[11px] text-blue-600 hover:underline font-medium cursor-pointer"
              >
                Select All (12)
              </button>
              <span className="text-text-muted">&bull;</span>
              <button
                onClick={handleClearAllExceptFirst}
                className="text-[11px] text-text-muted hover:text-red-600 font-medium cursor-pointer"
              >
                Clear Selection
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Column 1: Unit 1 Topics */}
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-text-muted block px-1">
                Unit 1 Curriculum (Units 1.1–1.6)
              </span>
              <div className="space-y-1.5">
                {unit1Topics.map((topic) => {
                  const isChecked = selectedSubunits.includes(topic.id);
                  const topicCounts = getQuestionCountsForSubunits([topic.id]);
                  const qCount = filterQuestionType === 'mcq' ? topicCounts.mcq : filterQuestionType === 'twoMark' ? topicCounts.twoMark : topicCounts.total;

                  return (
                    <button
                      key={topic.id}
                      type="button"
                      onClick={() => handleToggleSubunit(topic.id)}
                      className={`w-full text-left p-2.5 rounded-lg border text-xs transition flex items-center justify-between gap-2.5 cursor-pointer select-none ${
                        isChecked
                          ? 'border-blue-500 bg-blue-50/40 text-blue-950 font-medium'
                          : 'border-border/80 bg-white text-text-secondary hover:border-stone-300 hover:bg-stone-50/50'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        {isChecked ? (
                          <CheckSquare className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        ) : (
                          <Square className="w-4 h-4 text-stone-400 flex-shrink-0" />
                        )}
                        <div className="truncate">
                          <span className="font-mono text-[11px] font-bold text-text-muted mr-1.5">
                            {topic.code}:
                          </span>
                          <span className="truncate">{topic.title}</span>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-surface-subtle text-text-muted flex-shrink-0">
                        {qCount} Qs
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Unit 3 Topics */}
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-text-muted block px-1">
                Unit 3 Finance (Units 3.1–3.4)
              </span>
              <div className="space-y-1.5">
                {unit3Topics.map((topic) => {
                  const isChecked = selectedSubunits.includes(topic.id);
                  const topicCounts = getQuestionCountsForSubunits([topic.id]);
                  const qCount = filterQuestionType === 'mcq' ? topicCounts.mcq : filterQuestionType === 'twoMark' ? topicCounts.twoMark : topicCounts.total;

                  return (
                    <button
                      key={topic.id}
                      type="button"
                      onClick={() => handleToggleSubunit(topic.id)}
                      className={`w-full text-left p-2.5 rounded-lg border text-xs transition flex items-center justify-between gap-2.5 cursor-pointer select-none ${
                        isChecked
                          ? 'border-blue-500 bg-blue-50/40 text-blue-950 font-medium'
                          : 'border-border/80 bg-white text-text-secondary hover:border-stone-300 hover:bg-stone-50/50'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        {isChecked ? (
                          <CheckSquare className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        ) : (
                          <Square className="w-4 h-4 text-stone-400 flex-shrink-0" />
                        )}
                        <div className="truncate">
                          <span className="font-mono text-[11px] font-bold text-text-muted mr-1.5">
                            {topic.code}:
                          </span>
                          <span className="truncate">{topic.title}</span>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-surface-subtle text-text-muted flex-shrink-0">
                        {qCount} Qs
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Column 2: BMT Toolkit Tools */}
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-text-muted block px-1">
                Business Management Toolkit (BMT)
              </span>
              <div className="space-y-1.5">
                {bmtTopics.map((topic) => {
                  const isChecked = selectedSubunits.includes(topic.id);
                  const topicCounts = getQuestionCountsForSubunits([topic.id]);
                  const qCount = filterQuestionType === 'mcq' ? topicCounts.mcq : filterQuestionType === 'twoMark' ? topicCounts.twoMark : topicCounts.total;

                  return (
                    <button
                      key={topic.id}
                      type="button"
                      onClick={() => handleToggleSubunit(topic.id)}
                      className={`w-full text-left p-2.5 rounded-lg border text-xs transition flex items-center justify-between gap-2.5 cursor-pointer select-none ${
                        isChecked
                          ? 'border-blue-500 bg-blue-50/40 text-blue-950 font-medium'
                          : 'border-border/80 bg-white text-text-secondary hover:border-stone-300 hover:bg-stone-50/50'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        {isChecked ? (
                          <CheckSquare className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        ) : (
                          <Square className="w-4 h-4 text-stone-400 flex-shrink-0" />
                        )}
                        <div className="truncate">
                          <span className="font-mono text-[11px] font-bold text-text-muted mr-1.5">
                            {topic.code.replace('BMT: ', '')}:
                          </span>
                          <span className="truncate">{topic.title.replace('BMT 1: ', '').replace('BMT 2: ', '').replace('BMT 3: ', '').replace('BMT 5: ', '').replace('BMT 7: ', '')}</span>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-surface-subtle text-text-muted flex-shrink-0">
                        {qCount} Qs
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
