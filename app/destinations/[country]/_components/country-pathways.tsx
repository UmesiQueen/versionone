import { Container, Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import type { Pathway } from "@/lib/destinations";

type CountryPathwaysProps = {
  eyebrow: string;
  heading: string;
  subtitle: string;
  items: readonly Pathway[];
  headingId: string;
};

function CountryPathways({
  eyebrow,
  heading,
  subtitle,
  items,
  headingId,
}: CountryPathwaysProps) {
  return (
    <Section padding="default" aria-labelledby={headingId}>
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          heading={<span id={headingId}>{heading}</span>}
          subtitle={subtitle}
        />
        <ol className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {items.map((item) => (
            <li key={item.step} className="flex">
              <article className="flex w-full flex-col gap-3 rounded-2xl border border-border bg-muted/40 px-6 py-7 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-primary/20 hover:shadow-md sm:px-7 sm:py-8">
                <span
                  aria-hidden="true"
                  className="text-3xl font-bold tracking-tight text-brand-light-blue sm:text-4xl"
                >
                  {item.step}
                </span>
                <h3 className="text-base font-semibold leading-snug text-foreground sm:text-lg">
                  <span className="sr-only">{`Step ${item.step}: `}</span>
                  {item.title}
                </h3>
              </article>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}

export { CountryPathways };
