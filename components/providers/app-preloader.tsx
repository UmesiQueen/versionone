"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type Phase = "loading" | "exiting" | "done";

/** How long the splash is guaranteed to be visible, even on a fast connection. */
const MIN_DISPLAY_MS = 900;
/** Duration of the exit (fade + scale) animation. Must match the CSS below. */
const EXIT_MS = 500;
/** Class on <html> that triggers the scroll-lock CSS in globals.css. */
const LOCK_CLASS = "v1-preloading";

/**
 * AppPreloader
 *
 * Branded full-screen splash shown while the page is still loading.
 *
 * Lock strategy (layered):
 *   1. globals.css holds the lock CSS (overflow:hidden + scrollbar hidden).
 *   2. layout.tsx bootstraps `v1-preloading` on <html> via <Script
 *      strategy="beforeInteractive"> — runs before first paint, no flash.
 *   3. This component sets `inert` on <main> so keyboard focus + screen
 *      readers can't reach underlying content.
 *   4. The overlay div blocks wheel + touchmove events with preventDefault
 *      (catches iOS momentum scroll and any input the CSS lock misses).
 *   5. When loading resolves, the component removes the lock class, drops
 *      inert, and fades out before unmounting.
 *
 * Resolves when BOTH:
 *   - `window.load` has fired (fonts / images / scripts settled), AND
 *   - at least MIN_DISPLAY_MS has elapsed (prevents a jarring flash).
 *
 * Respects `prefers-reduced-motion`.
 */
export function AppPreloader() {
  const [phase, setPhase] = useState<Phase>("loading");
  const overlayRef = useRef<HTMLDivElement>(null);

  // Drive the loading → exiting → done state machine.
  useEffect(() => {
    const waitForLoad = new Promise<void>((resolve) => {
      if (document.readyState === "complete") {
        resolve();
        return;
      }
      window.addEventListener("load", () => resolve(), { once: true });
    });

    const waitForMinTime = new Promise<void>((resolve) => {
      window.setTimeout(resolve, MIN_DISPLAY_MS);
    });

    let exitTimer: number | undefined;
    let unmountTimer: number | undefined;

    Promise.all([waitForLoad, waitForMinTime]).then(() => {
      exitTimer = window.setTimeout(() => setPhase("exiting"), 0);
      unmountTimer = window.setTimeout(() => setPhase("done"), EXIT_MS);
    });

    return () => {
      if (exitTimer) window.clearTimeout(exitTimer);
      if (unmountTimer) window.clearTimeout(unmountTimer);
    };
  }, []);

  // Set `inert` on <main> so keyboard focus + screen readers skip it.
  useEffect(() => {
    if (phase === "done") return;
    const main = document.getElementById("main");
    if (!main) return;
    main.setAttribute("inert", "");
    return () => {
      main.removeAttribute("inert");
    };
  }, [phase]);

  // Remove the lock class from <html> ONLY when fully done — the class is
  // bootstrapped server-side, so we never add it here.
  useEffect(() => {
    if (phase !== "done") return;
    document.documentElement.classList.remove(LOCK_CLASS);
  }, [phase]);

  // Block wheel + touchmove on the overlay (non-passive — preventDefault needs it).
  useEffect(() => {
    const el = overlayRef.current;
    if (!el || phase === "done") return;

    const block = (e: Event) => {
      e.preventDefault();
    };
    el.addEventListener("wheel", block, { passive: false });
    el.addEventListener("touchmove", block, { passive: false });

    return () => {
      el.removeEventListener("wheel", block);
      el.removeEventListener("touchmove", block);
    };
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div
      ref={overlayRef}
      role="status"
      aria-live="polite"
      aria-label="Loading VersionOne"
      className={cn(
        "fixed inset-0 z-100 flex items-center justify-center bg-primary",
        "transition-[opacity,transform] duration-500 ease-out will-change-[opacity,transform]",
        phase === "exiting"
          ? "pointer-events-none opacity-0 scale-[1.02]"
          : "opacity-100 scale-100",
      )}
    >
      <style>{`
        .v1-loader {
          width: 48px;
          height: 48px;
          display: inline-block;
          position: relative;
        }
        .v1-loader::before,
        .v1-loader::after {
          content: "";
          box-sizing: border-box;
          width: 48px;
          height: 48px;
          border: 2px solid #FFF;
          position: absolute;
          left: 0;
          top: 0;
          animation: v1-loader-rotation 2s ease-in-out infinite alternate;
        }
        .v1-loader::after {
          border-color: #ff9d2b;
          animation-direction: alternate-reverse;
        }

        @keyframes v1-loader-rotation {
          0%   { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @media (prefers-reduced-motion: reduce) {
          .v1-loader::before,
          .v1-loader::after {
            animation: none;
          }
        }
      `}</style>

      <span className="v1-loader" aria-hidden="true" />

      <span className="sr-only">Loading VersionOne, please wait.</span>
    </div>
  );
}
