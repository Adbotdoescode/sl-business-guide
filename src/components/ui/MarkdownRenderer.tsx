'use client';

import React from 'react';
import ReactMarkdown, { type Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { cn } from '@/lib/utils';

export interface MarkdownRendererProps {
  content: string;
  className?: string;
  inline?: boolean;
  components?: Components;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
  content,
  className,
  inline = false,
  components: customComponents = {},
}) => {
  // Preprocess formula blocks and math/LaTeX syntax into clean editorial callouts and unicode symbols
  const processedContent = React.useMemo(() => {
    if (!content) return '';
    let result = content;

    // Helper to clean LaTeX math expressions into readable text
    const cleanMathExpression = (expr: string): string => {
      let f = expr;
      // Strip \text{...} iteratively
      while (/\\text\{([^{}]*)\}/.test(f)) {
        f = f.replace(/\\text\{([^{}]*)\}/g, '$1');
      }
      // Unpack \frac{num}{den} iteratively with whitespace tolerance
      while (/\\frac\s*\{([^{}]*)\}\s*\{([^{}]*)\}/.test(f)) {
        f = f.replace(/\\frac\s*\{([^{}]*)\}\s*\{([^{}]*)\}/g, '($1) / ($2)');
      }
      // Clean up redundant parens around single tokens: (A) / (B) -> A / B
      f = f.replace(/\(([A-Za-z0-9_]+)\)\s*\/\s*\(([A-Za-z0-9_]+)\)/g, '$1 / $2');
      f = f.replace(/\(([A-Za-z0-9_]+)\)\s*\/\s*([A-Za-z0-9_]+)/g, '$1 / $2');
      f = f.replace(/([A-Za-z0-9_]+)\s*\/\s*\(([A-Za-z0-9_]+)\)/g, '$1 / $2');

      // Arrows with labels: \xrightarrow{label} or \xrightarrow[sub]{label}
      f = f.replace(/\\xrightarrow\[(.*?)\]\{(.*?)\}/g, ' —[$2 ($1)]→ ');
      f = f.replace(/\\xrightarrow\{(.*?)\}/g, ' —[$1]→ ');
      f = f.replace(/\\xleftarrow\[(.*?)\]\{(.*?)\}/g, ' ←[$2 ($1)]— ');
      f = f.replace(/\\xleftarrow\{(.*?)\}/g, ' ←[$1]— ');

      // Common LaTeX symbols & math commands
      f = f
        .replace(/\\longrightarrow/gi, ' → ')
        .replace(/\\rightarrow/gi, ' → ')
        .replace(/\\longleftarrow/gi, ' ← ')
        .replace(/\\leftarrow/gi, ' ← ')
        .replace(/\\leftrightarrow/gi, ' ↔ ')
        .replace(/\\uparrow/gi, ' ↑ ')
        .replace(/\\downarrow/gi, ' ↓ ')
        .replace(/\\times/gi, ' × ')
        .replace(/\\cdot/gi, ' · ')
        .replace(/\\sum\b/gi, '∑ ')
        .replace(/\\square\b/gi, '□')
        .replace(/\\bigcirc\b/gi, '○')
        .replace(/\\mathbf\{([^}]+)\}/gi, '$1')
        .replace(/\\le\b/gi, '≤')
        .replace(/\\ge\b/gi, '≥')
        .replace(/\\neq\b/gi, '≠')
        .replace(/\\approx\b/gi, '≈')
        .replace(/\\pm\b/gi, '±')
        .replace(/\\left\(/g, '(')
        .replace(/\\right\)/g, ')')
        .replace(/\\left\[/g, '[')
        .replace(/\\right\]/g, ']')
        .replace(/\\left\\\{/g, '{')
        .replace(/\\right\\\}/g, '}')
        .replace(/\\,/g, ' ')
        .replace(/\\;/g, ' ')
        .replace(/\\quad/g, '   ')
        .replace(/\\qquad/g, '      ')
        .replace(/\\%/g, '%')
        .replace(/\\_/g, '_')
        .replace(/\\\$/g, '$')
        .replace(/\\&/g, '&');

      return f;
    };

    // 1. Convert display formula blocks ($$...$$) into clean editorial callouts
    // If consecutive display blocks exist, group them neatly under a single callout
    result = result.replace(/(?:\$\$([\s\S]*?)\$\$\s*)+/g, (match) => {
      const formulas = Array.from(match.matchAll(/\$\$([\s\S]*?)\$\$/g))
        .map((m) => cleanMathExpression(m[1]).replace(/\s+/g, ' ').trim())
        .filter(Boolean);
      if (formulas.length === 0) return '';
      if (formulas.length === 1) {
        return `\n\n> **Formula:** \`${formulas[0]}\`\n\n`;
      }
      return `\n\n> **Key Formulas:**\n${formulas.map((formula) => `> • \`${formula}\``).join('\n')}\n\n`;
    });

    // 2. Protect inline code & code blocks so formulas/currency inside backticks are never mutilated
    const codeTokens: string[] = [];
    result = result.replace(/(`+)([\s\S]*?)\1/g, (match) => {
      codeTokens.push(match);
      return `__CODE_TOKEN_${codeTokens.length - 1}__`;
    });

    // 3. Normalize escaped currency like \$460,000 -> $460,000
    result = result.replace(/\\\$([0-9])/g, '$$$1');

    // 4. Clean inline LaTeX math symbols ($...$)
    result = result
      .replace(/\$\s*\\square\s*\$/gi, '□')
      .replace(/\$\s*\\bigcirc\s*\$/gi, '○')
      .replace(/\$\s*\\rightarrow\s*\$/gi, '→')
      .replace(/\$\s*\\longrightarrow\s*\$/gi, '→')
      .replace(/\$\s*\\leftarrow\s*\$/gi, '←')
      .replace(/\$\s*\\longleftarrow\s*\$/gi, '←')
      .replace(/\$\s*\\leftrightarrow\s*\$/gi, '↔')
      .replace(/\$\s*\\times\s*\$/gi, '×')
      .replace(/\$\s*\\le\s*\$/gi, '≤')
      .replace(/\$\s*\\ge\s*\$/gi, '≥')
      .replace(/\$\s*\\neq\s*\$/gi, '≠')
      .replace(/\$\s*\\approx\s*\$/gi, '≈');

    // 5. Clean remaining inline math $...$ that contain formulas or variables
    // Crucial: $ cannot be immediately followed by a digit (which is currency)
    result = result.replace(/\$(?!\d)([^\$\n]+?)(?<!\s)\$/g, (match, inner) => {
      const trimmed = inner.trim();
      // Keep pure currencies like "$120,000" or "$25" or "$3bn" intact
      if (/^[\d,.]+(\s*(?:m|bn|k|million|billion|trillion))?$/i.test(trimmed)) {
        return match;
      }
      // If it contains LaTeX commands, comparisons, math symbols, or economics/math variable names
      if (/\\|[\=<>\+\^\/×÷±≤≥≠≈∑□○·]|\b(?:Q|ATC|AFC|AVC|TC|TFC|TVC|EMV|EV|p)\b/i.test(trimmed)) {
        const cleaned = cleanMathExpression(trimmed)
          .replace(/Q\*/g, 'Q\\*')
          .replace(/ATC\*/g, 'ATC\\*');
        return `*${cleaned}*`;
      }
      return match;
    });

    // 6. Support extended markdown highlighting ==text== -> <mark>text</mark>
    result = result.replace(/==([^=\n]+)==/g, '<mark>$1</mark>');

    // 7. Support extended markdown underlining ++text++ -> <u>text</u>
    result = result.replace(/\+\+([^\+\n]+)\+\+/g, '<u>$1</u>');

    // 8. Catch any lingering LaTeX commands in body text
    result = cleanMathExpression(result);

    // 9. Restore protected code spans and blocks
    result = result.replace(/__CODE_TOKEN_(\d+)__/g, (_, idx) => codeTokens[Number(idx)]);

    return result;
  }, [content]);

  if (!content) return null;

  const defaultComponents: Components = {
    // Inline mode maps p to span to avoid invalid HTML nesting in buttons/headings
    p: ({ children }) => {
      if (inline) {
        return <span className="inline">{children}</span>;
      }
      return <p className="leading-relaxed mb-3 last:mb-0 whitespace-pre-line">{children}</p>;
    },
    h1: ({ children }) => (
      <h1 className="text-xl font-bold tracking-tight text-text-primary mt-6 mb-3 first:mt-0">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-lg font-semibold tracking-tight text-text-primary mt-5 mb-2 first:mt-0">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-base font-semibold tracking-tight text-text-primary mt-4 mb-1.5 first:mt-0">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-sm font-semibold tracking-tight text-text-primary mt-3 mb-1 first:mt-0">
        {children}
      </h4>
    ),
    ul: ({ children }) => (
      <ul className="list-disc pl-5 space-y-1 my-2 text-inherit">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal pl-5 space-y-1 my-2 text-inherit">{children}</ol>
    ),
    li: ({ children }) => (
      <li className="leading-relaxed pl-0.5">{children}</li>
    ),
    table: ({ children }) => (
      <div className="my-4 overflow-x-auto rounded-xl border border-border shadow-subtle">
        <table className="min-w-full border-collapse text-xs sm:text-sm">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="bg-surface-subtle border-b border-border">{children}</thead>
    ),
    tbody: ({ children }) => (
      <tbody className="divide-y divide-border/60">{children}</tbody>
    ),
    tr: ({ children }) => (
      <tr className="hover:bg-surface-subtle/40 transition-colors">{children}</tr>
    ),
    th: ({ children }) => (
      <th className="py-2.5 px-3.5 text-left font-semibold text-text-primary uppercase tracking-wider text-[11px] border-r border-border last:border-r-0">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="py-2.5 px-3.5 text-text-secondary border-r border-border last:border-r-0 align-top">
        {children}
      </td>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-brand-600 bg-surface-subtle/50 px-4 py-2.5 my-3 rounded-r-lg italic text-text-secondary">
        {children}
      </blockquote>
    ),
    // Markdown wraps images in a paragraph, so the wrapper must be inline-safe (span, not div).
    img: ({ src, alt, title }) => (
      <span className="my-4 block space-y-2">
        {/* Markdown images have no fixed size, so next/image cannot size them up front. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt ?? ''}
          loading="lazy"
          className="block w-full h-auto rounded-xl border border-border bg-white shadow-subtle"
        />
        {title && <span className="block text-xs text-text-muted italic">{title}</span>}
      </span>
    ),
    details: ({ children }) => (
      <details className="my-3 rounded-xl border border-blue-200 bg-blue-50/50 px-4 py-3 open:bg-white space-y-2">
        {children}
      </details>
    ),
    summary: ({ children }) => (
      <summary className="cursor-pointer select-none text-sm font-semibold text-blue-700">
        {children}
      </summary>
    ),
    code: ({ className: codeClassName, children, ...props }) => {
      const match = /language-(\w+)/.exec(codeClassName || '');
      const isCodeBlock = Boolean(match) || String(children).includes('\n');
      if (!isCodeBlock) {
        return (
          <code
            className={cn(
              'font-mono text-xs bg-surface-subtle text-brand-700 px-1.5 py-0.5 rounded border border-border',
              codeClassName
            )}
            {...props}
          >
            {children}
          </code>
        );
      }
      return (
        <code className={cn('font-mono text-xs text-text-primary', codeClassName)} {...props}>
          {children}
        </code>
      );
    },
    pre: ({ children }) => (
      <pre className="my-3 overflow-x-auto rounded-xl bg-surface-subtle p-4 border border-border font-mono text-xs sm:text-[13px] text-text-primary leading-snug whitespace-pre">
        {children}
      </pre>
    ),
    a: ({ href, children, ...props }) => (
      <a
        href={href}
        className="text-brand-600 hover:text-brand-700 underline underline-offset-2 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    ),
    strong: ({ children }) => (
      <strong className="font-bold text-text-primary">{children}</strong>
    ),
    b: ({ children }) => (
      <b className="font-bold text-text-primary">{children}</b>
    ),
    em: ({ children }) => <em className="italic text-inherit">{children}</em>,
    i: ({ children }) => <i className="italic text-inherit">{children}</i>,
    u: ({ children }) => (
      <u className="underline underline-offset-[3px] decoration-1.5 decoration-blue-600/70 font-medium text-inherit">
        {children}
      </u>
    ),
    ins: ({ children }) => (
      <ins className="underline underline-offset-[3px] decoration-1.5 decoration-emerald-600/70 font-medium no-underline-skip text-inherit">
        {children}
      </ins>
    ),
    mark: ({ children }) => (
      <mark className="bg-amber-100/95 text-amber-950 px-1 py-0.5 rounded-[3px] font-medium border-b border-amber-300">
        {children}
      </mark>
    ),
    hr: () => <hr className="my-4 border-t border-border" />,
    ...customComponents,
  };

  if (inline) {
    return (
      <span className={cn('inline', className)}>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={defaultComponents}
        >
          {processedContent}
        </ReactMarkdown>
      </span>
    );
  }

  return (
    <div
      className={cn(
        'markdown-content text-xs sm:text-sm text-text-secondary leading-relaxed space-y-3 font-normal',
        className
      )}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={defaultComponents}
      >
        {processedContent}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
