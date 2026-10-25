'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useStudyProgress } from '@/context/StudyProgressContext';
import { 
  GraduationCap, 
  PenTool, 
  BookOpen, 
  Clock, 
  RotateCcw,
  Menu,
  X,
  CheckSquare,
  Zap,
  Grid,
  Scale,
  Compass,
  Key,
  Layers,
  Target,
  Calculator
} from 'lucide-react';

const NAV_LINKS = [
  { href: '/', label: 'Overview', icon: GraduationCap },
  { href: '/study', label: 'Study Guides', icon: BookOpen },
  { href: '/practice', label: 'Practice & Tools', icon: PenTool },
  { href: '/cram', label: '10-Min Cram', icon: Clock },
];

const PRACTICE_SUB_LINKS = [
  { href: '/practice#preparatory-question-bank', label: 'Preparatory Question Bank', icon: Target },
  { href: '/practice/custom', label: 'Custom Test Builder', icon: CheckSquare },
  { href: '/blitz', label: 'Rapid MCQ Blitz', icon: Zap },
  { href: '/practice/written', label: 'Written Exam & Rubrics', icon: PenTool },
  { href: '/toolkit', label: 'BM Toolkit Interactive', icon: Compass },
  { href: '/matrix-master', label: 'Matrix Master Sorter', icon: Grid },
  { href: '/entities', label: 'Entity Showdown Matrix', icon: Scale },
  { href: '/practice/profit-loss', label: 'Profit & Loss Lab', icon: Calculator },
  { href: '/mnemonics', label: 'GET CASH Vault', icon: Key },
];

export function Navigation() {
  const pathname = usePathname();
  const { resetAllProgress } = useStudyProgress();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-subtle group-hover:bg-blue-700 transition">
                <GraduationCap className="w-4 h-4" strokeWidth={2} />
              </div>
              <div>
                <span className="font-semibold text-text-primary text-sm sm:text-base tracking-tight block">
                  SL Business Guide
                </span>
                <span className="text-[10px] uppercase font-bold text-text-muted tracking-wider block -mt-1">
                  Unit 1: Business Mgt &bull; Unit 2: Finance &bull; BMT
                </span>
              </div>
            </Link>
          </div>

          {/* Streamlined Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const Icon = link.icon;
              const isActive = link.href === '/'
                ? pathname === '/'
                : link.href === '/practice'
                ? pathname.startsWith('/practice') || 
                  pathname === '/blitz' || 
                  pathname === '/toolkit' || 
                  pathname === '/matrix-master' || 
                  pathname === '/entities' || 
                  pathname === '/mnemonics'
                : pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  data-track={`Nav: ${link.label}`}
                  className={cn(
                    'flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors',
                    isActive
                      ? 'bg-blue-50 text-blue-700 font-semibold'
                      : 'text-text-secondary hover:text-text-primary hover:bg-surface-subtle'
                  )}
                >
                  <Icon className="w-3.5 h-3.5" strokeWidth={1.75} />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Quick Actions / Reset */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={resetAllProgress}
              title="Reset test and revision progress"
              className="flex items-center gap-1 text-xs text-text-muted hover:text-red-600 px-2.5 py-1.5 rounded-lg hover:bg-red-50/60 transition cursor-pointer border border-transparent hover:border-red-200"
            >
              <RotateCcw className="w-3.5 h-3.5" strokeWidth={1.75} />
              <span>Reset</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface-subtle transition"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" strokeWidth={1.75} />
              ) : (
                <Menu className="w-5 h-5" strokeWidth={1.75} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-white px-4 pt-2 pb-4 space-y-1 animate-in slide-in-from-top-2">
          {NAV_LINKS.map((link) => {
            const Icon = link.icon;
            const isActive = link.href === '/'
              ? pathname === '/'
              : link.href === '/practice'
              ? pathname.startsWith('/practice') || 
                pathname === '/blitz' || 
                pathname === '/toolkit' || 
                pathname === '/matrix-master' || 
                pathname === '/entities' || 
                pathname === '/mnemonics'
              : pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));

            return (
              <React.Fragment key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  data-track={`Nav: ${link.label}`}
                  className={cn(
                    'flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition',
                    isActive
                      ? 'bg-blue-50 text-blue-700 font-semibold'
                      : 'text-text-secondary hover:text-text-primary hover:bg-surface-subtle'
                  )}
                >
                  <Icon className="w-4 h-4" strokeWidth={1.75} />
                  <span>{link.label}</span>
                </Link>

                {/* Nested links for Practice & Tools */}
                {link.href === '/practice' && (
                  <div className="pl-6 space-y-1 py-1 border-l-2 border-blue-100 ml-4 my-1">
                    {PRACTICE_SUB_LINKS.map((sub) => {
                      const SubIcon = sub.icon;
                      const isSubActive = pathname === sub.href;
                      return (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          data-track={`Nav: ${sub.label}`}
                          className={cn(
                            'flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-medium transition',
                            isSubActive
                              ? 'text-blue-700 font-semibold bg-blue-50'
                              : 'text-text-secondary hover:text-text-primary hover:bg-stone-50'
                          )}
                        >
                          <SubIcon className="w-3.5 h-3.5 text-text-muted" />
                          <span>{sub.label}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </React.Fragment>
            );
          })}
          <div className="pt-2 border-t border-border mt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                resetAllProgress();
              }}
              className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition"
            >
              <RotateCcw className="w-4 h-4" strokeWidth={1.75} />
              <span>Reset All Study Progress</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
