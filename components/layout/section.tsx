import type * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Section
 * Standard vertical-rhythm page section. Renders as a semantic <section> by default.
 */
type SectionProps<T extends React.ElementType = "section"> = {
  as?: T;
  surface?: "default" | "muted" | "navy" | "primary";
  padding?: "default" | "sm" | "lg" | "none";
} & React.ComponentPropsWithoutRef<T>;

function Section<T extends React.ElementType = "section">({
  className,
  as,
  surface = "default",
  padding = "default",
  ...props
}: SectionProps<T>) {
  const As = as || "section";
  const surfaces: Record<NonNullable<SectionProps["surface"]>, string> = {
    default: "bg-background text-foreground",
    muted: "bg-muted text-foreground",
    navy: "bg-brand-navy text-brand-navy-foreground",
    primary: "bg-primary text-primary-foreground",
  };

  const paddings: Record<NonNullable<SectionProps["padding"]>, string> = {
    none: "",
    sm: "py-12 sm:py-14",
    default: "py-16 sm:py-20 lg:py-24",
    lg: "py-20 sm:py-24 lg:py-32",
  };

  return (
    <As
      data-slot="section"
      className={cn("w-full", surfaces[surface], paddings[padding], className)}
      {...props}
    />
  );
}

/**
 * Container
 * Centered, max-width wrapper with responsive horizontal padding.
 */
function Container({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="container"
      className={cn("mx-auto w-full max-w-350 px-4 sm:px-6", className)}
      {...props}
    />
  );
}

export { Container, Section };
