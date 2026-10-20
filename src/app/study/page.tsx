'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { STUDY_UNITS } from '@/data/study-content';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { 
  BookOpen, 
  Clock, 
  ArrowRight, 
  ListChecks, 
  Sparkles,
  Layers,
  Briefcase,
  DollarSign,
  Compass
} from 'lucide-react';

export default function StudyGuidesIndexPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'unit1' | 'unit2' | 'bmt'>('all');

  // Helper to categorize each study unit
  const getUnitCategory = (id: string): 'unit1' | 'unit2' | 'bmt' => {
    if (id.startsWith('3.') || id.includes('finance')) return 'unit2';
    if (id.startsWith('bmt-')) return 'bmt';
    return 'unit1';
  };

  const getSectionBadgeStyle = (category: 'unit1' | 'unit2' | 'bmt') => {
    switch (category) {
      case 'unit1':
        return 'text-blue-700 bg-blue-50 border-blue-200';
      case 'unit2':
        return 'text-emerald-700 bg-emerald-50 border-emerald-200';
      case 'bmt':
        return 'text-purple-700 bg-purple-50 border-purple-200';
    }
  };

  const getSectionName = (category: 'unit1' | 'unit2' | 'bmt') => {
    switch (category) {
      case 'unit1':
        return 'Unit 1 - Business Management';
      case 'unit2':
        return 'Unit 2 - Finance';
      case 'bmt':
        return 'Business Management Toolkit';
    }
  };

  const filteredUnits = activeTab === 'all'
    ? STUDY_UNITS
    : STUDY_UNITS.filter(u => getUnitCategory(u.id) === activeTab);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-border shadow-subtle">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
            <BookOpen className="w-5 h-5" strokeWidth={1.75} />
          </div>
          <div>
            <h1 className="text-xl sm:text-3xl font-bold text-text-primary tracking-tight">
              Syllabus Study Guides & Reference Notes
            </h1>
            <p className="text-xs sm:text-sm text-text-secondary mt-0.5">
              Comprehensive academic study guides organized into Unit 1 (Business Management), Unit 2 (Finance & Final Accounts), and the Business Management Toolkit.
            </p>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setActiveTab('all')}
          className={`text-xs px-3 py-1.5 rounded-lg border transition cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'all'
              ? 'bg-blue-600 text-white border-blue-600 font-semibold shadow-subtle'
              : 'bg-white text-text-secondary border-border hover:border-stone-400 hover:text-text-primary'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>All Guides ({STUDY_UNITS.length})</span>
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

      {/* Modules List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredUnits.map((unit) => {
          const category = getUnitCategory(unit.id);
          const badgeStyle = getSectionBadgeStyle(category);
          const sectionName = getSectionName(category);

          return (
            <Card key={unit.id} hoverEffect className="p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-bold font-mono px-2.5 py-0.5 rounded-full border ${badgeStyle}`}>
                      {unit.unitCode}
                    </span>
                    <span className="text-[11px] text-text-muted font-medium">
                      {sectionName}
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-xs text-text-muted">
                    <Clock className="w-3.5 h-3.5" />
                    {unit.estimatedReadTime}
                  </span>
                </div>

                <h2 className="text-lg font-bold text-text-primary mb-1">
                  {unit.title}
                </h2>
                <p className="text-xs font-medium text-blue-900/80 mb-3">
                  {unit.subtitle}
                </p>
                <p className="text-xs text-text-secondary leading-relaxed mb-4">
                  {unit.description}
                </p>

                <div className="space-y-1.5 pt-3 border-t border-border/80 text-[11px] text-text-muted">
                  <div className="flex items-center gap-1.5">
                    <ListChecks className="w-3.5 h-3.5 text-blue-600" />
                    <span><strong>{unit.sections.length}</strong> In-Depth Syllabus Sections</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    <span><strong>{unit.highYieldTerms.length}</strong> High-Yield Terms Defined</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                <Link href={`/study/${unit.id}`} className="w-full">
                  <Button variant="primary" size="sm" className="w-full" icon={<ArrowRight className="w-4 h-4" />}>
                    Read Complete Guide
                  </Button>
                </Link>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
