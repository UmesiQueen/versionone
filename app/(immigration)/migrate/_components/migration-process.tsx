import { Container, Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";

type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Initial Consultation",
    description:
      "We understand your goals, background, and preferred destinations.",
  },
  {
    step: "02",
    title: "Eligibility Assessment",
    description:
      "We understand your goals, background, and preferred destinations.",
  },
  {
    step: "03",
    title: "Document Preparation",
    description:
      "We help you gather, review, and organize all required documentation.",
  },
  {
    step: "04",
    title: "Application Submission",
    description:
      "Your application is prepared accurately and submitted to the relevant authorities.",
  },
  {
    step: "05",
    title: "Follow-Up",
    description:
      "We track progress, manage updates, and respond to any additional requests.",
  },
  {
    step: "06",
    title: "Approval",
    description:
      "Once approved, we guide you through the next steps toward your relocation.",
  },
];

function MigrationProcessSection() {
  return (
    <Section
      padding="default"
      aria-labelledby="migration-process-heading"
      className="bg-background"
    >
      <Container>
        <SectionHeading
          eyebrow="Our Process"
          heading={
            <span id="migration-process-heading">
              A Proven Path to Your New Beginning
            </span>
          }
          subtitle="Our structured process ensures clarity, confidence, and expert support at every stage of your migration journey."
        />
        <ol className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {PROCESS_STEPS.map(({ step, title, description }) => (
            <li key={step} className="flex">
              <article className="flex w-full flex-col gap-3 rounded-2xl border bg-card px-6 py-7 sm:px-7 sm:py-8 shadow-xs">
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

export { MigrationProcessSection };
