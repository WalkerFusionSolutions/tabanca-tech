import { useEffect, useRef } from 'react';

/**
 * Initialises StringTune once across the React app lifetime.
 * Uses dynamic import + CDN fallback so the build never breaks if
 * string-tune-3d isn't resolvable by the bundler.
 */
export function useStringTune() {
  const tuneRef = useRef<unknown>(null);

  useEffect(() => {
    let destroyed = false;

    async function init() {
      // ── Core library ─────────────────────────────────────────
      let StringTuneLib: Record<string, unknown>;
      try {
        StringTuneLib = await import('@fiddle-digital/string-tune') as Record<string, unknown>;
      } catch {
        console.warn('[TabancaTech] @fiddle-digital/string-tune not available.');
        return;
      }

      const { StringTune, StringProgress, StringParallax, StringLerpTracker,
              StringGlide, StringMagnetic, StringSplit } = StringTuneLib as {
        StringTune: { getInstance: () => { use: (m: unknown) => void; start: (fps: number) => void; stopModule: (n: string) => void; startModule: (n: string) => void; destroy: () => void; scan?: () => void };
        };
        StringProgress: unknown; StringParallax: unknown; StringLerpTracker: unknown;
        StringGlide: unknown; StringMagnetic: unknown; StringSplit: unknown;
      };

      if (destroyed || !StringTune) return;

      const tune = StringTune.getInstance();
      if (StringProgress)    tune.use(StringProgress);
      if (StringParallax)    tune.use(StringParallax);
      if (StringLerpTracker) tune.use(StringLerpTracker);
      if (StringGlide)       tune.use(StringGlide);
      // if (StringCursor)      tune.use(StringCursor);
      if (StringMagnetic)    tune.use(StringMagnetic);
      if (StringSplit)       tune.use(StringSplit);

      // ── 3D module ────────────────────────────────────────────
      try {
        const [st3dModule, THREE] = await Promise.all([
          import('string-tune-3d') as Promise<Record<string, unknown>>,
          import('three'),
        ]);
        const { String3D, ThreeJSProvider } = st3dModule as {
          String3D: { setProvider: (p: unknown) => void } | undefined;
          ThreeJSProvider: new (three: unknown) => unknown;
        };
        if (String3D && ThreeJSProvider) {
          String3D.setProvider(new ThreeJSProvider(THREE));
          tune.use(String3D as unknown);
        }
      } catch {
        console.warn('[TabancaTech] string-tune-3d not available – 3D effects disabled.');
      }

      if (destroyed) return;
      tune.start(0);
      tuneRef.current = tune;

      // ── Mobile cursor handling ───────────────────────────────
      const handleResize = () => {
        if (window.innerWidth <= 768) {
          try { tune.stopModule('StringCursor'); } catch { /* noop */ }
          try { tune.stopModule('StringLerpTracker'); } catch { /* noop */ }
        } else {
          try { tune.startModule('StringLerpTracker'); } catch { /* noop */ }
        }
      };
      handleResize();
      window.addEventListener('resize', handleResize, { passive: true });

      // ── Re-scan on route change (new DOM nodes) ──────────────
      const observer = new MutationObserver(() => {
        if (typeof tune.scan === 'function') tune.scan();
      });
      observer.observe(document.body, { childList: true, subtree: true });

      // Store cleanup refs
      (tuneRef as { current: unknown; _cleanup?: () => void })._cleanup = () => {
        observer.disconnect();
        window.removeEventListener('resize', handleResize);
      };
    }

    init();

    return () => {
      destroyed = true;
      const ref = tuneRef as { current: unknown; _cleanup?: () => void };
      if (ref._cleanup) ref._cleanup();
      // StringTune is a singleton – don't destroy on route unmount,
      // only on true app teardown. Commented out to avoid re-init loops:
      // if (ref.current) (ref.current as { destroy: () => void }).destroy();
    };
  }, []);

  return tuneRef;
}
