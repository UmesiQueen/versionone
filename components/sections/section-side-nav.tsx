"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type SectionNavItem = {
  id: string;
  title: string;
  index: string;
};

type SectionSideNavProps = {
  items: ReadonlyArray<SectionNavItem>;
  eyebrow?: string;
  ariaLabel?: string;
};

function useSectionSpy(ids: ReadonlyArray<string>) {
  const [activeId, setActiveId] = useState<string | null>(ids[0] ?? null);
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
  eyebrow = "On this page",
  ariaLabel = "On this page",
}: SectionSideNavProps) {
  const activeId = useSectionSpy(items.map((item) => item.id));

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

export { type SectionNavItem, SectionSideNav };
