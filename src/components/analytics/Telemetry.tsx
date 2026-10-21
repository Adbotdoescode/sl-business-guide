'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { track } from '@vercel/analytics';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

// Vercel Web Analytics records page views on every route change. The hooks
// below add the usage signals it does not record on its own: clicks, time on
// page, scroll depth, and a per-session entry event.

const CLICK_LABEL_MAX = 60;
const MIN_PAGE_TIME_MS = 1000;
const SESSION_KEY = 'telemetry-session-started';
const MAX_SESSION_WAIT_TRIES = 50;

function viewportBucket(): 'mobile' | 'tablet' | 'desktop' {
  const width = window.innerWidth;
  if (width < 640) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
}

function parseUrl(value: string): URL | null {
  try {
    return new URL(value);
  } catch {
    return null;
  }
}

function useSessionStart() {
  useEffect(() => {
    let timer: number | undefined;
    let tries = 0;

    const sendOnce = () => {
      // Analytics defines window.va when it mounts. Wait for it so the event is not dropped.
      if (!window.va && tries++ < MAX_SESSION_WAIT_TRIES) {
        timer = window.setTimeout(sendOnce, 100);
        return;
      }
      if (!window.va) return;

      try {
        if (sessionStorage.getItem(SESSION_KEY)) return;
        sessionStorage.setItem(SESSION_KEY, '1');
      } catch {
        // Storage can be blocked; record the session anyway.
      }

      const referrer = parseUrl(document.referrer)?.hostname ?? 'direct';

      track('Session Start', {
        language: navigator.language,
        viewport: viewportBucket(),
        color_scheme: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
        referrer_host: referrer,
        entry_path: window.location.pathname,
      });
    };

    sendOnce();
    return () => window.clearTimeout(timer);
  }, []);
}

function useClickTracking() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const el = target?.closest<HTMLElement>('a, button, [role="button"], [data-track]');
      if (!el) return;

      // Only developer-set labels are sent. Element text is never read, so
      // student-entered content such as answer choices cannot leak.
      const label = (el.dataset.track || el.getAttribute('aria-label') || '')
        .replace(/\s+/g, ' ')
        .trim()
        .slice(0, CLICK_LABEL_MAX);

      const props: Record<string, string> = {
        element: el.tagName.toLowerCase(),
        path: window.location.pathname,
      };
      if (label) props.label = label;

      if (el instanceof HTMLAnchorElement) {
        const url = parseUrl(el.href);
        if (url) {
          const isInternal = url.origin === window.location.origin;
          props.destination = isInternal ? `${url.pathname}${url.hash}` : url.hostname;
          props.link_type = isInternal ? 'internal' : 'external';
        }
      }

      track('Click', props);
    };

    document.addEventListener('click', onClick, { capture: true });
    return () => document.removeEventListener('click', onClick, { capture: true });
  }, []);
}

function usePageTimeTracking() {
  const pathname = usePathname();

  useEffect(() => {
    let visibleMs = 0;
    let visibleSince: number | null = document.visibilityState === 'visible' ? performance.now() : null;
    // null until the page has been scrollable, so non-scrolling pages are not reported as fully read.
    let maxScrollPercent: number | null = null;

    const updateScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const percent = Math.min(Math.round((window.scrollY / scrollable) * 100), 100);
      maxScrollPercent = Math.max(maxScrollPercent ?? 0, percent);
    };

    const pause = () => {
      if (visibleSince !== null) {
        visibleMs += performance.now() - visibleSince;
        visibleSince = null;
      }
    };

    const flush = () => {
      pause();
      if (visibleMs >= MIN_PAGE_TIME_MS) {
        track('Page Time', {
          path: pathname,
          seconds: Math.round(visibleMs / 1000),
          max_scroll_percent: maxScrollPercent,
        });
      }
      visibleMs = 0;
      maxScrollPercent = null;
      updateScroll();
    };

    const onVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        if (visibleSince === null) visibleSince = performance.now();
      } else {
        flush();
      }
    };

    updateScroll();
    window.addEventListener('scroll', updateScroll, { passive: true });
    window.addEventListener('resize', updateScroll);
    window.addEventListener('pagehide', flush);
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      window.removeEventListener('scroll', updateScroll);
      window.removeEventListener('resize', updateScroll);
      window.removeEventListener('pagehide', flush);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      // Route change: report the page that was just left.
      flush();
    };
  }, [pathname]);
}

export function Telemetry() {
  useSessionStart();
  useClickTracking();
  usePageTimeTracking();

  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
