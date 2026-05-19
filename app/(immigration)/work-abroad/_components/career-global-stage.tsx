import { Check } from "lucide-react";
import { Container, Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";

type ComparisonCard = {
  title: string;
  description: string;
  bullets: string[];
};

const CARDS: ComparisonCard[] = [
  {
    title: "Work Visa",
    description:
      "Temporary authorization to live and work in a specific country, tied to employment.",
    bullets: [
      "Requires a valid job offer or employer sponsor",
      "Usually valid for 1–5 years with renewal options",
      "Tied to a specific employer or occupation",
      "First step to building an international career",
      "Often leads to permanent residency pathways",
    ],
  },
  {
    title: "Permanent Migration",
    description:
      "Long-term residency with full rights to live and work without restriction.",
    bullets: [
      "No employer tie — full freedom to change jobs",
      "Permanent or indefinite leave to remain",
      "Access to healthcare, education, and social services",
      "Pathway to citizenship in most countries",
      "Brings family members under the same status",
    ],
  },
];

function CareerGlobalStageSection() {
  return (
    <Section
      padding="default"
      aria-labelledby="career-global-stage-heading"
    >
      <Container>
        <SectionHeading
          eyebrow="Working Abroad"
          heading={
            <span id="career-global-stage-heading">
              Your Career Deserves a Global Stage
            </span>
          }
          subtitle="Working abroad is one of the most transformative career decisions you can make. Whether you're a tech professional, healthcare worker, or engineer — the world's job market is open to you, and VersionOne is here to open the door."
        />
        <ul className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
          {CARDS.map(({ title, description, bullets }) => (
            <li key={title} className="flex">
              <article className="flex w-full flex-col gap-4 rounded-2xl border border-border bg-muted/40 p-6 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-primary/20 hover:shadow-md sm:p-8">
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold leading-snug text-foreground sm:text-xl">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>
                <ul className="mt-1 flex flex-col gap-2">
                  {bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2 text-sm text-foreground/80"
                    >
                      <Check
                        aria-hidden="true"
                        className="mt-0.5 size-4 shrink-0 text-brand-light-blue"
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

export { CareerGlobalStageSection };
