"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type SectionNavItem = {
  id: string;
  title: string;
  /** Display index, e.g. "01". */
  index: string;
};

type SectionSideNavProps = {
  items: ReadonlyArray<SectionNavItem>;
  /** Render style — vertical for desktop sidebar, horizontal for mobile tab strip. */
  layout: "vertical" | "horizontal";
  /** Optional eyebrow above the vertical list (e.g. "Our Services", "Investment Routes"). */
  eyebrow?: string;
  /** Accessible label for the <nav>. Defaults to "On this page". */
  ariaLabel?: string;
};

/**
 * useSectionSpy
 * Watches the DOM nodes whose ids match `ids` and reports the topmost
 * intersecting one as "active". Used to drive scroll-spy highlight in the
 * section side nav.
 *
 * The rootMargin shape (-25% top, -60% bottom) means a row becomes
 * "active" when it enters the upper-middle band of the viewport, which
 * feels right while scrolling and avoids jumpy switching.
 */
function useSectionSpy(ids: ReadonlyArray<string>) {
  const [activeId, setActiveId] = useState<string | null>(ids[0] ?? null);
  // Join ids into a stable string so the effect deps don't re-fire on
  // every render even if the parent recreates the array.
  const key = ids.join(",");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const idList = key.split(",").filter(Boolean);
    if (idList.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) return;
        const topmost = visible.reduce((a, b) =>
          a.boundingClientRect.top < b.boundingClientRect.top ? a : b,
        );
        setActiveId(topmost.target.id);
      },
      { rootMargin: "-25% 0% -60% 0%", threshold: 0 },
    );

    const elements = idList
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    elements.forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [key]);

  return activeId;
}

function handleNavClick(
  event: React.MouseEvent<HTMLAnchorElement>,
  id: string,
) {
  event.preventDefault();
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  // Update the URL hash without forcing a hard scroll jump.
  if (typeof window !== "undefined" && window.history.replaceState) {
    window.history.replaceState(null, "", `#${id}`);
  }
}

function SectionSideNav({
  items,
  layout,
  eyebrow = "On this page",
  ariaLabel = "On this page",
}: SectionSideNavProps) {
  const activeId = useSectionSpy(items.map((item) => item.id));

  if (layout === "horizontal") {
    return (
      <nav
        aria-label={ariaLabel}
        className="border-y border-border bg-background/90 backdrop-blur-md"
      >
        <ul className="mx-auto flex max-w-350 gap-2 overflow-x-auto px-4 py-3 sm:px-6 scrollbar-none [&::-webkit-scrollbar]:hidden">
          {items.map((item) => {
            const isActive = item.id === activeId;
            return (
              <li key={item.id} className="shrink-0">
                <a
                  href={`#${item.id}`}
                  onClick={(event) => handleNavClick(event, item.id)}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/70 hover:text-foreground",
                  )}
                >
                  <span className="text-[0.65rem] font-semibold tabular-nums opacity-80">
                    {item.index}
                  </span>
                  <span>{item.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }

  return (
    <nav aria-label={ariaLabel}>
      <p className="mb-3 inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-secondary">
        <span aria-hidden="true" className="h-px w-6 bg-secondary/90" />
        {eyebrow}
      </p>
      <ul className="flex flex-col gap-0.5">
        {items.map((item) => {
          const isActive = item.id === activeId;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(event) => handleNavClick(event, item.id)}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "group relative flex items-center gap-3 rounded-md py-2 pl-4 pr-3 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  isActive
                    ? "font-semibold text-primary"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute left-0 top-1/2 h-5 w-0.75 -translate-y-1/2 rounded-r-full transition-colors",
                    isActive
                      ? "bg-primary"
                      : "bg-transparent group-hover:bg-border",
                  )}
                />
                <span className="text-[0.7rem] font-semibold tabular-nums text-muted-foreground/70">
                  {item.index}
                </span>
                <span className="leading-snug">{item.title}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export { SectionSideNav };
export type { SectionNavItem };
