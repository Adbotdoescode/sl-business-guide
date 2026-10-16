'use client';

import React from 'react';
import { Bold, Italic, Underline, Highlighter, Eye, Edit3 } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface FormattingToolbarProps {
  textareaRef: React.RefObject<HTMLTextAreaElement | null>;
  value: string;
  onChange: (value: string) => void;
  isPreview?: boolean;
  onTogglePreview?: () => void;
  className?: string;
  label?: string;
}

export const FormattingToolbar: React.FC<FormattingToolbarProps> = ({
  textareaRef,
  value,
  onChange,
  isPreview = false,
  onTogglePreview,
  className,
  label,
}) => {
  const applyFormat = (prefix: string, suffix: string, defaultPlaceholder: string) => {
    // If currently previewing, switch back to edit mode first
    if (isPreview && onTogglePreview) {
      onTogglePreview();
    }

    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart ?? 0;
    const end = textarea.selectionEnd ?? 0;
    const selectedText = value.substring(start, end);

    const hasSelection = start !== end && selectedText.length > 0;
    const textToWrap = hasSelection ? selectedText : defaultPlaceholder;
    const replacement = `${prefix}${textToWrap}${suffix}`;

    const newValue = value.substring(0, start) + replacement + value.substring(end);
    onChange(newValue);

    // Keep focus and set cursor / selection cleanly
    setTimeout(() => {
      textarea.focus();
      if (hasSelection) {
        textarea.setSelectionRange(start, start + replacement.length);
      } else {
        const newCursorStart = start + prefix.length;
        const newCursorEnd = newCursorStart + defaultPlaceholder.length;
        textarea.setSelectionRange(newCursorStart, newCursorEnd);
      }
    }, 0);
  };

  return (
    <div
      className={cn(
        'flex flex-wrap items-center justify-between gap-2 px-3 py-1.5 bg-surface-subtle border border-b-0 border-border rounded-t-lg select-none',
        className
      )}
    >
      {/* Formatting Action Buttons */}
      <div className="flex items-center gap-1">
        {label && (
          <span className="text-[11px] font-semibold text-text-muted mr-1.5 hidden sm:inline">
            {label}
          </span>
        )}

        {/* Bold Button */}
        <button
          type="button"
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => applyFormat('**', '**', 'bold text')}
          className="px-2 py-1 rounded bg-white hover:bg-stone-100 border border-border text-text-primary transition-colors flex items-center gap-1 text-xs font-bold shadow-xs active:bg-stone-200 cursor-pointer"
          title="Bold (**text**)"
          aria-label="Format bold"
        >
          <Bold className="w-3.5 h-3.5 text-text-primary" />
          <span className="text-[11px] font-bold">B</span>
        </button>

        {/* Italic Button */}
        <button
          type="button"
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => applyFormat('*', '*', 'italic text')}
          className="px-2 py-1 rounded bg-white hover:bg-stone-100 border border-border text-text-primary transition-colors flex items-center gap-1 text-xs italic shadow-xs active:bg-stone-200 cursor-pointer"
          title="Italic (*text*)"
          aria-label="Format italic"
        >
          <Italic className="w-3.5 h-3.5 text-text-primary" />
          <span className="text-[11px] italic font-serif">I</span>
        </button>

        {/* Underline Button */}
        <button
          type="button"
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => applyFormat('<u>', '</u>', 'underlined text')}
          className="px-2 py-1 rounded bg-white hover:bg-stone-100 border border-border text-text-primary transition-colors flex items-center gap-1 text-xs shadow-xs active:bg-stone-200 cursor-pointer"
          title="Underline (<u>text</u>)"
          aria-label="Format underline"
        >
          <Underline className="w-3.5 h-3.5 text-blue-600" />
          <span className="text-[11px] font-semibold underline decoration-blue-600 decoration-1.5">
            U
          </span>
        </button>

        {/* Highlight Button */}
        <button
          type="button"
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => applyFormat('==', '==', 'highlighted text')}
          className="px-2 py-1 rounded bg-amber-100 hover:bg-amber-200/90 border border-amber-300 text-amber-950 transition-colors flex items-center gap-1 text-xs font-medium shadow-xs active:bg-amber-300 cursor-pointer"
          title="Highlight (==text==)"
          aria-label="Format highlight"
        >
          <Highlighter className="w-3.5 h-3.5 text-amber-700" />
          <span className="text-[11px] font-semibold text-amber-950">Highlight</span>
        </button>
      </div>

      {/* Optional Mode Toggle (Write vs. Preview) */}
      {onTogglePreview && (
        <div className="flex items-center gap-1 bg-white p-0.5 rounded-md border border-border shadow-xs text-xs">
          <button
            type="button"
            onClick={() => {
              if (isPreview) onTogglePreview();
            }}
            className={cn(
              'px-2 py-0.5 rounded transition-colors flex items-center gap-1 cursor-pointer text-xs',
              !isPreview
                ? 'bg-blue-50 text-blue-700 font-semibold border border-blue-200'
                : 'text-text-muted hover:text-text-primary'
            )}
            title="Edit markdown text"
          >
            <Edit3 className="w-3 h-3" />
            <span>Write</span>
          </button>
          <button
            type="button"
            onClick={() => {
              if (!isPreview) onTogglePreview();
            }}
            className={cn(
              'px-2 py-0.5 rounded transition-colors flex items-center gap-1 cursor-pointer text-xs',
              isPreview
                ? 'bg-blue-50 text-blue-700 font-semibold border border-blue-200'
                : 'text-text-muted hover:text-text-primary'
            )}
            title="Preview formatted markdown"
          >
            <Eye className="w-3 h-3" />
            <span>Preview</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default FormattingToolbar;
