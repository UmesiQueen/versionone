import { Container, Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import type { Advantage } from "@/lib/destinations";

type CountryAdvantagesProps = {
  eyebrow: string;
  heading: string;
  subtitle: string;
  items: readonly Advantage[];
  headingId: string;
};

function CountryAdvantages({
  eyebrow,
  heading,
  subtitle,
  items,
  headingId,
}: CountryAdvantagesProps) {
  return (
    <Section padding="default" surface="muted" aria-labelledby={headingId}>
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          heading={<span id={headingId}>{heading}</span>}
          subtitle={subtitle}
        />
        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {items.map((item) => (
            <li key={item.title} className="flex">
              <article className="flex w-full flex-col gap-3 rounded-2xl border border-border bg-background p-6 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-primary/20 hover:shadow-md sm:p-7">
                <span
                  aria-hidden="true"
                  className="h-1 w-10 rounded-full bg-secondary"
                />
                <div className="mt-1 flex flex-col gap-2">
                  <h3 className="text-base font-semibold leading-snug text-foreground sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
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

export { CountryAdvantages };
