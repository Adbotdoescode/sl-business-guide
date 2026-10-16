'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Bold, Italic, Underline, Highlighter, FileEdit, Eye } from 'lucide-react';
import { cn } from '@/lib/utils';
import { MarkdownRenderer } from '@/components/ui/MarkdownRenderer';

export interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  minHeight?: string;
  className?: string;
  label?: string;
  isPreview?: boolean;
  onTogglePreview?: () => void;
  id?: string;
}

/**
 * Converts legacy or user-entered markdown typography into HTML tags for the rich-text editor.
 */
export function markdownToHtml(input: string): string {
  if (!input) return '';
  let html = input;

  // Highlight ==text==
  html = html.replace(
    /==([^=\n]+)==/g,
    '<mark class="bg-amber-100 text-amber-950 px-1 py-0.5 rounded font-medium border-b border-amber-300">$1</mark>'
  );

  // Bold **text** or __text__
  html = html.replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>');
  html = html.replace(/__([^_]+)__/g, '<b>$1</b>');

  // Italic *text* or _text_
  html = html.replace(/(?<!\w)\*([^*]+)\*(?!\w)/g, '<i>$1</i>');
  html = html.replace(/(?<!\w)_([^_]+)_(?!\w)/g, '<i>$1</i>');

  // Convert standalone newlines to <br/> if no block tags present
  if (!html.includes('<p>') && !html.includes('<div>') && !html.includes('<br')) {
    html = html.replace(/\n/g, '<br/>');
  }

  return html;
}

/**
 * Strips HTML tags and entities to compute true visible character/word count.
 */
export function stripHtml(html: string): string {
  if (!html) return '';
  return html
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

export function getWordCount(textOrHtml: string): number {
  const plain = stripHtml(textOrHtml);
  return plain ? plain.split(/\s+/).filter(Boolean).length : 0;
}

export function getCharCount(textOrHtml: string): number {
  return stripHtml(textOrHtml).length;
}

export function RichTextEditor({
  value,
  onChange,
  placeholder = 'Draft your response here... Select text and use the buttons above to format bold, italic, underline, or highlight.',
  minHeight = 'min-h-[120px]',
  className,
  label = 'Format:',
  isPreview = false,
  onTogglePreview,
  id,
}: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const lastHtmlRef = useRef<string>('');
  const [isFocused, setIsFocused] = useState(false);

  // Active format states for visual feedback on buttons
  const [activeFormats, setActiveFormats] = useState({
    bold: false,
    italic: false,
    underline: false,
    highlight: false,
  });

  // Check which formatting styles are currently active at the selection/caret
  const checkActiveFormats = useCallback(() => {
    if (typeof window === 'undefined' || !editorRef.current) return;

    try {
      const isBold = document.queryCommandState('bold');
      const isItalic = document.queryCommandState('italic');
      const isUnderline = document.queryCommandState('underline');

      // Check for <mark> or highlight background in parent nodes
      let isHighlight = false;
      const selection = window.getSelection();
      if (selection && selection.rangeCount > 0) {
        let node: Node | null = selection.anchorNode;
        while (node && node !== editorRef.current) {
          if (node.nodeName === 'MARK') {
            isHighlight = true;
            break;
          }
          if (node instanceof HTMLElement) {
            const bg = node.style.backgroundColor;
            if (bg && bg !== 'transparent' && bg !== 'inherit') {
              isHighlight = true;
              break;
            }
          }
          node = node.parentNode;
        }
      }

      setActiveFormats({
        bold: isBold,
        italic: isItalic,
        underline: isUnderline,
        highlight: isHighlight,
      });
    } catch {
      // Ignore queryCommandState errors in edge cases
    }
  }, []);

  // Sync external value with editor innerHTML only when value actually differs from internal state
  useEffect(() => {
    if (!editorRef.current) return;

    const formattedValue = markdownToHtml(value || '');
    // If the stripped content or normalized HTML is distinct from what is currently loaded
    if (formattedValue !== lastHtmlRef.current) {
      editorRef.current.innerHTML = formattedValue;
      lastHtmlRef.current = formattedValue;
    }
  }, [value]);

  // Clean empty content to empty string
  const cleanHtml = (html: string): string => {
    const text = stripHtml(html);
    if (!text && !html.includes('<img')) {
      return '';
    }
    return html;
  };

  // Handle typing or direct content editing
  const handleInput = () => {
    if (!editorRef.current) return;
    const currentHtml = editorRef.current.innerHTML;
    const cleaned = cleanHtml(currentHtml);
    lastHtmlRef.current = cleaned;
    onChange(cleaned);
    checkActiveFormats();
  };

  // Execute standard formatting commands (bold, italic, underline)
  const executeCommand = (command: 'bold' | 'italic' | 'underline') => {
    if (!editorRef.current) return;
    editorRef.current.focus();

    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0 || selection.isCollapsed) {
      // If cursor is collapsed, insert placeholder formatted text and select it
      const placeholderMap: Record<string, string> = {
        bold: 'bold text',
        italic: 'italic text',
        underline: 'underlined text',
      };
      const text = placeholderMap[command] || 'text';
      document.execCommand('insertHTML', false, command === 'bold' ? `<b>${text}</b>` : command === 'italic' ? `<i>${text}</i>` : `<u>${text}</u>`);
    } else {
      document.execCommand(command, false, undefined);
    }

    handleInput();
  };

  // Toggle highlight format on current selection
  const toggleHighlight = () => {
    if (!editorRef.current) return;
    editorRef.current.focus();

    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);

    // Check if selection is already inside a <mark>
    let parentMark: HTMLElement | null = null;
    let node: Node | null = selection.anchorNode;
    while (node && node !== editorRef.current) {
      if (node.nodeName === 'MARK') {
        parentMark = node as HTMLElement;
        break;
      }
      node = node.parentNode;
    }

    if (parentMark) {
      // Remove highlight: unwrap mark contents
      const parent = parentMark.parentNode;
      if (parent) {
        while (parentMark.firstChild) {
          parent.insertBefore(parentMark.firstChild, parentMark);
        }
        parent.removeChild(parentMark);
      }
    } else if (range.collapsed) {
      // If no text selected, insert placeholder highlighted text and select it
      const mark = document.createElement('mark');
      mark.className = 'bg-amber-100 text-amber-950 px-1 py-0.5 rounded font-medium border-b border-amber-300';
      mark.textContent = 'highlighted text';
      range.insertNode(mark);

      const newRange = document.createRange();
      newRange.selectNodeContents(mark);
      selection.removeAllRanges();
      selection.addRange(newRange);
    } else {
      // Wrap selected content in <mark>
      try {
        const mark = document.createElement('mark');
        mark.className = 'bg-amber-100 text-amber-950 px-1 py-0.5 rounded font-medium border-b border-amber-300';
        mark.appendChild(range.extractContents());
        range.insertNode(mark);

        const newRange = document.createRange();
        newRange.selectNode(mark);
        selection.removeAllRanges();
        selection.addRange(newRange);
      } catch {
        // Fallback to execCommand if complex range extraction fails
        document.execCommand('hiliteColor', false, '#fef08a');
      }
    }

    handleInput();
  };

  const isEmpty = stripHtml(value || '').length === 0;

  return (
    <div className={cn('w-full flex flex-col', className)} id={id}>
      {/* Top Formatting Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-3 py-1.5 bg-stone-50 border border-b-0 border-border rounded-t-lg select-none">
        <div className="flex items-center gap-1.5 flex-wrap">
          {label && (
            <span className="text-[11px] font-bold text-text-muted uppercase tracking-wider mr-1">
              {label}
            </span>
          )}

          {/* Bold Button */}
          <button
            type="button"
            data-format="bold"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => executeCommand('bold')}
            disabled={isPreview}
            title="Bold: Select text and click B to bold"
            className={cn(
              'inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-bold border transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed',
              activeFormats.bold
                ? 'bg-blue-100 text-blue-900 border-blue-400 shadow-sm'
                : 'bg-white text-text-primary border-border hover:bg-stone-100 hover:border-stone-300'
            )}
          >
            <Bold className="w-3.5 h-3.5" />
            <span>B</span>
          </button>

          {/* Italic Button */}
          <button
            type="button"
            data-format="italic"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => executeCommand('italic')}
            disabled={isPreview}
            title="Italic: Select text and click I to italicize"
            className={cn(
              'inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-serif italic border transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed',
              activeFormats.italic
                ? 'bg-blue-100 text-blue-900 border-blue-400 shadow-sm'
                : 'bg-white text-text-primary border-border hover:bg-stone-100 hover:border-stone-300'
            )}
          >
            <Italic className="w-3.5 h-3.5" />
            <span>I</span>
          </button>

          {/* Underline Button */}
          <button
            type="button"
            data-format="underline"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => executeCommand('underline')}
            disabled={isPreview}
            title="Underline: Select text and click U to underline"
            className={cn(
              'inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs underline font-semibold border transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed',
              activeFormats.underline
                ? 'bg-blue-100 text-blue-900 border-blue-400 shadow-sm'
                : 'bg-white text-blue-600 border-border hover:bg-blue-50/60 hover:border-blue-300'
            )}
          >
            <Underline className="w-3.5 h-3.5 text-blue-600" />
            <span>U</span>
          </button>

          {/* Highlight Button */}
          <button
            type="button"
            data-format="highlight"
            onMouseDown={(e) => e.preventDefault()}
            onClick={toggleHighlight}
            disabled={isPreview}
            title="Highlight: Select text and click Highlight to highlight in amber"
            className={cn(
              'inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-medium border transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed',
              activeFormats.highlight
                ? 'bg-amber-200 text-amber-950 border-amber-500 shadow-sm font-semibold'
                : 'bg-amber-50/80 text-amber-900 border-amber-200 hover:bg-amber-100 hover:border-amber-300'
            )}
          >
            <Highlighter className="w-3.5 h-3.5 text-amber-600" />
            <span>Highlight</span>
          </button>
        </div>

        {/* Optional Write / Preview Mode Switcher */}
        {onTogglePreview && (
          <div className="inline-flex items-center p-0.5 rounded-lg bg-surface-subtle border border-border text-xs font-medium">
            <button
              type="button"
              data-format="write"
              onClick={() => isPreview && onTogglePreview()}
              className={cn(
                'inline-flex items-center gap-1 px-2.5 py-1 rounded-md transition-colors cursor-pointer',
                !isPreview
                  ? 'bg-white text-text-primary shadow-subtle font-semibold'
                  : 'text-text-muted hover:text-text-primary'
              )}
            >
              <FileEdit className="w-3 h-3 text-blue-600" />
              <span>Write</span>
            </button>
            <button
              type="button"
              data-format="preview"
              onClick={() => !isPreview && onTogglePreview()}
              className={cn(
                'inline-flex items-center gap-1 px-2.5 py-1 rounded-md transition-colors cursor-pointer',
                isPreview
                  ? 'bg-white text-text-primary shadow-subtle font-semibold'
                  : 'text-text-muted hover:text-text-primary'
              )}
            >
              <Eye className="w-3 h-3 text-emerald-600" />
              <span>Preview</span>
            </button>
          </div>
        )}
      </div>

      {/* Main Editing Surface / Preview Surface */}
      <div className="relative w-full">
        {isPreview ? (
          <div
            className={cn(
              'w-full p-3.5 rounded-b-lg border border-border text-sm text-text-primary leading-relaxed bg-surface-subtle/40 overflow-y-auto',
              minHeight
            )}
          >
            {value ? (
              <MarkdownRenderer content={value} />
            ) : (
              <p className="text-text-muted italic text-xs">
                No response written yet. Switch to Write mode to format your answer.
              </p>
            )}
          </div>
        ) : (
          <>
            {/* Direct WYSIWYG ContentEditable Surface */}
            <div
              ref={editorRef}
              contentEditable
              suppressContentEditableWarning
              role="textbox"
              aria-multiline="true"
              onInput={handleInput}
              onFocus={() => {
                setIsFocused(true);
                checkActiveFormats();
              }}
              onBlur={() => {
                setIsFocused(false);
                handleInput();
              }}
              onKeyUp={checkActiveFormats}
              onMouseUp={checkActiveFormats}
              className={cn(
                'w-full p-3.5 rounded-b-lg rounded-t-none border border-border text-sm text-text-primary leading-relaxed bg-white',
                'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
                'overflow-y-auto whitespace-pre-wrap transition-colors select-text',
                minHeight
              )}
            />

            {/* Placeholder Overlay when empty and unfocused */}
            {isEmpty && !isFocused && (
              <div
                onClick={() => editorRef.current?.focus()}
                className="absolute top-3.5 left-3.5 right-3.5 text-text-muted text-sm leading-relaxed pointer-events-none select-none"
              >
                {placeholder}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
