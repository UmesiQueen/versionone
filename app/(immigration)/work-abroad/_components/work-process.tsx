import { JourneyProcessSection } from "@/components/sections/journey-process";

const WORK_STEPS = [
  {
    step: "01",
    title: "Consultation",
    description:
      "We learn about your career goals, background, and target countries to map out the right approach.",
  },
  {
    step: "02",
    title: "Eligibility Assessment",
    description:
      "Our specialists evaluate your qualifications, experience, and language scores against destination requirements.",
  },
  {
    step: "03",
    title: "Job & Visa Strategy",
    description:
      "We identify the best visa categories for your profile and advise on job search strategies where needed.",
  },
  {
    step: "04",
    title: "Document Preparation",
    description:
      "We guide you through gathering, certifying, and organizing every document your application requires.",
  },
  {
    step: "05",
    title: "Application Submission",
    description:
      "Your complete, error-checked application is submitted to the relevant authorities on time and correctly.",
  },
  {
    step: "06",
    title: "Follow-Up & Approval",
    description:
      "We monitor your application, respond to any queries, and support you through to final approval.",
  },
] as const;

function WorkProcessSection() {
  return (
    <JourneyProcessSection
      eyebrow="How It Works"
      headingId="work-process-heading"
      heading={
        <span id="work-process-heading">
          Your Roadmap to Working Abroad
        </span>
      }
      subtitle="A clear, structured process designed to maximize your chances of success at every stage."
      steps={WORK_STEPS}
    />
  );
}

export { WorkProcessSection };
