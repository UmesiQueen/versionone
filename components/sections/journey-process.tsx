import { Container, Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { cn } from "@/lib/utils";

type JourneyStep = {
  /** Display label, e.g. "01". Also used as a key — must be unique. */
  step: string;
  title: string;
  description: string;
};

type JourneyProcessSectionProps = {
  /** Eyebrow chip above the heading. */
  eyebrow: string;
  /** Section heading (string or pre-rendered node, e.g. a <span> with an id). */
  heading: React.ReactNode;
  /** Optional subtitle below the heading. */
  subtitle?: React.ReactNode;
  /** id used by aria-labelledby on the section. The heading should carry the same id. */
  headingId: string;
  /** Ordered list of steps. Typically 4–6 items. */
  steps: ReadonlyArray<JourneyStep>;
  className?: string;
};

/**
 * JourneyProcessSection
 * Reusable numbered process / journey section. Used on flow pages
 * (Migrate, Study Abroad, etc.) to show a 4–6 step path with large
 * numbered tiles in a responsive grid.
 *
 * Semantics:
 * - The container renders as <ol> so that ordering is exposed to assistive tech.
 * - Each tile prefixes its title with an sr-only "Step N:" string.
 */
function JourneyProcessSection({
  eyebrow,
  heading,
  subtitle,
  headingId,
  steps,
  className,
}: JourneyProcessSectionProps) {
  return (
    <Section
      padding="default"
      aria-labelledby={headingId}
      className="bg-background"
    >
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          heading={heading}
          subtitle={subtitle}
        />
        <ol className={cn("mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6", className)}>
          {steps.map(({ step, title, description }) => (
            <li key={step} className="flex">
              <article className="flex w-full flex-col gap-3 rounded-2xl border border-border bg-muted/40 px-6 py-7 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-primary/20 hover:shadow-md sm:px-7 sm:py-8">
                <span
                  aria-hidden="true"
                  className="text-3xl font-bold tracking-tight text-brand-light-blue sm:text-4xl"
                >
                  {step}
                </span>
                <div className="mt-2 flex flex-col gap-2">
                  <h3 className="text-base font-semibold leading-snug text-foreground sm:text-lg">
                    <span className="sr-only">{`Step ${step}: `}</span>
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}

export { JourneyProcessSection };
