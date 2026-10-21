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

function viewportBucket(): 'mobile' | 'tablet' | 'desktop' {
  const width = window.innerWidth;
  if (width < 640) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
}

function useSessionStart() {
  useEffect(() => {
    try {
      if (sessionStorage.getItem('telemetry-session-started')) return;
      sessionStorage.setItem('telemetry-session-started', '1');
    } catch {
      // Storage can be blocked; still record the session once per mount.
    }

    const referrer = document.referrer ? new URL(document.referrer).hostname : 'direct';

    track('Session Start', {
      language: navigator.language,
      viewport: viewportBucket(),
      color_scheme: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
      referrer_host: referrer,
      entry_path: window.location.pathname,
    });
  }, []);
}

function useClickTracking() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const el = target?.closest<HTMLElement>('a, button, [role="button"], [data-track]');
      if (!el) return;

      const text = (el.dataset.track || el.getAttribute('aria-label') || el.textContent || '')
        .replace(/\s+/g, ' ')
        .trim()
        .slice(0, CLICK_LABEL_MAX);

      const props: Record<string, string> = {
        label: text || el.tagName.toLowerCase(),
        element: el.tagName.toLowerCase(),
        path: window.location.pathname,
      };

      if (el instanceof HTMLAnchorElement && el.href) {
        const url = new URL(el.href);
        const isInternal = url.origin === window.location.origin;
        props.destination = isInternal ? `${url.pathname}${url.hash}` : url.hostname;
        props.link_type = isInternal ? 'internal' : 'external';
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
    let maxScrollPercent = 0;

    const updateScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const percent = scrollable > 0 ? Math.round((window.scrollY / scrollable) * 100) : 100;
      maxScrollPercent = Math.max(maxScrollPercent, Math.min(percent, 100));
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
      maxScrollPercent = 0;
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
