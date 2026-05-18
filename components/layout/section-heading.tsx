import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * SectionEyebrow
 * Small uppercase label rendered above a section title.
 * Used 6+ times across the homepage.
 */
type SectionEyebrowProps = ComponentProps<"span"> & {
  /** Color tone — "primary" (blue text) or "inverse" (white text for dark surfaces). */
  tone?: "primary" | "inverse";
};

function SectionEyebrow({
  className,
  tone = "primary",
  children,
  ...props
}: SectionEyebrowProps) {
  return (
    <span
      data-slot="section-eyebrow"
      className={cn(
        "inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em]",
        tone === "primary" ? "text-secondary" : "text-primary-foreground/80",
        className,
      )}
      {...props}
    >
        <span
          aria-hidden="true"
          className={cn(
            "h-px w-6",
            tone === "primary" ? "bg-secondary/90" : "bg-primary-foreground/40",
          )}
        />
      {children}
    </span>
  );
}

/**
 * SectionHeading
 * Composed eyebrow + title + (optional) subtitle stack.
 * Used at the top of every major homepage section.
 */
type SectionHeadingProps = React.ComponentProps<"div"> & {
  eyebrow?: string;
  heading: ReactNode;
  subtitle?: ReactNode;
  /** Alignment — defaults to center, which matches the Figma. */
  align?: "left" | "center";
  /** Surface tone — inverse for dark-background sections. */
  tone?: "default" | "inverse";
  /** Heading level — default h2; use h1 for the page's main hero only. */
  as?: "h1" | "h2" | "h3";
};

function SectionHeading({
  className,
  eyebrow,
  heading,
  subtitle,
  align = "center",
  tone = "default",
  as: HeadingTag = "h2",
  ...props
}: SectionHeadingProps) {
  return (
    <div
      data-slot="section-heading"
      className={cn(
        "flex flex-col gap-4",
        align === "center"
          ? "items-center text-center"
          : "items-start text-left",
        className,
      )}
      {...props}
    >
      {eyebrow ? (
        <SectionEyebrow>
          {eyebrow}
        </SectionEyebrow>
      ) : null}
      <HeadingTag
        className={cn(
          "font-bold tracking-tight text-balance",
          HeadingTag === "h1"
            ? "text-4xl sm:text-5xl lg:text-6xl"
            : "text-3xl sm:text-4xl lg:text-5xl",
          tone === "inverse" ? "text-primary-foreground" : "text-foreground",
        )}
      >
        {heading}
      </HeadingTag>
      {subtitle ? (
        <p
          className={cn(
            "max-w-3xl text-base sm:text-lg text-pretty",
            tone === "inverse"
              ? "text-primary-foreground/80"
              : "text-muted-foreground",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

export { SectionEyebrow, SectionHeading };
