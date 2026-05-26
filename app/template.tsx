import type { ReactNode } from "react";

/**
 * Route transition wrapper.
 *
 * App Router re-mounts a template's children on every navigation, which lets
 * the CSS animation below retrigger on each route change. The result is a
 * gentle fade + tiny upward slide as new pages enter — applied site-wide
 * without per-page boilerplate.
 *
 * Accessibility: the `motion-safe:` prefix ensures users with
 * `prefers-reduced-motion: reduce` see an instant cut, satisfying WCAG 2.3.3.
 *
 * Sits inside <main> (set in app/layout.tsx), so the header and footer remain
 * persistent across navigations and do not flash on route change.
 */
export default function Template({ children }: { children: ReactNode }) {
  return (
    <div className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3 motion-safe:duration-400 motion-safe:ease-out">
      {children}
    </div>
  );
}
