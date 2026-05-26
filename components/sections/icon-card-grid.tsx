import type { LucideIcon } from "lucide-react";
import { Container, Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { cn } from "@/lib/utils";

type IconCardItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type IconCardGridProps = {
  eyebrow: string;
  heading: React.ReactNode;
  subtitle?: React.ReactNode;
  headingId: string;
  items: ReadonlyArray<IconCardItem>;
  surface?: "default" | "muted";
  columns?: 3 | 4;
  cardSurface?: "muted" | "card";
};

function IconCardGrid({
  eyebrow,
  heading,
  subtitle,
  headingId,
  items,
  surface = "default",
  columns = 3,
  cardSurface,
}: IconCardGridProps) {
  // Default: cards adopt the opposite surface so they remain visible.
  const resolvedCardSurface =
    cardSurface ?? (surface === "muted" ? "card" : "muted");

  const gridCols =
    columns === 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : "sm:grid-cols-2 lg:grid-cols-3";

  const cardBackground =
    resolvedCardSurface === "card" ? "bg-card" : "bg-muted/40";

  return (
    <Section
      padding="default"
      surface={surface}
      aria-labelledby={headingId}
    >
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          heading={heading}
          subtitle={subtitle}
        />
        <ul
          className={cn(
            "mt-12 grid grid-cols-1 gap-5 lg:gap-6",
            gridCols,
          )}
        >
          {items.map(({ icon: Icon, title, description }) => (
            <li key={title} className="flex">
              <article
                className={cn(
                  "flex w-full flex-col gap-4 rounded-2xl border border-border p-6 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-primary/20 shadow-sm hover:shadow-md sm:p-7",
                  cardBackground,
                )}
              >
                <span
                  aria-hidden="true"
                  className="inline-flex size-11 items-center justify-center rounded-md bg-primary/10 text-brand-light-blue"
                >
                  <Icon className="size-5" />
                </span>
                <div className="mt-2 flex flex-col gap-2">
                  <h3 className="text-base font-semibold leading-snug text-foreground sm:text-lg">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

export { IconCardGrid };
export type { IconCardItem };
