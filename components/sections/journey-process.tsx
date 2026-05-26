import { Container, Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { cn } from "@/lib/utils";

type JourneyStep = {
  step: string;
  title: string;
  description: string;
};

type JourneyProcessSectionProps = {
  eyebrow: string;
  heading: React.ReactNode;
  subtitle?: React.ReactNode;
  headingId: string;
  steps: ReadonlyArray<JourneyStep>;
  className?: string;
};

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
