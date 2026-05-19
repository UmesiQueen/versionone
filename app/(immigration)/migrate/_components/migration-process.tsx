import { JourneyProcessSection } from "@/components/sections/journey-process";

const MIGRATION_STEPS = [
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
] as const;

function MigrationProcessSection() {
  return (
    <JourneyProcessSection
      eyebrow="Our Process"
      headingId="migration-process-heading"
      heading={
        <span id="migration-process-heading">
          A Proven Path to Your New Beginning
        </span>
      }
      subtitle="Our structured process ensures clarity, confidence, and expert support at every stage of your migration journey."
      steps={MIGRATION_STEPS}
    />
  );
}

export { MigrationProcessSection };
