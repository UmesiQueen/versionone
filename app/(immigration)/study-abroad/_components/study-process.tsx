import { JourneyProcessSection } from "@/components/sections/journey-process";

const STUDY_STEPS = [
  {
    step: "01",
    title: "Consultation",
    description:
      "We start by understanding your academic background, study goals, budget, and preferred destinations.",
  },
  {
    step: "02",
    title: "School & Program Selection",
    description:
      "Our advisors shortlist universities and programs that align with your profile, aspirations, and career path.",
  },
  {
    step: "03",
    title: "Application Submission",
    description:
      "We prepare and submit a polished, complete application — essays, transcripts, references, and all documents.",
  },
  {
    step: "04",
    title: "Admission & Offer",
    description:
      "Once offers arrive, we help you evaluate, compare, and accept the right one — and meet any conditions attached.",
  },
  {
    step: "05",
    title: "Visa Processing",
    description:
      "We manage your student visa from documentation to biometrics, keeping you informed throughout.",
  },
  {
    step: "06",
    title: "Pre-Departure Preparation",
    description:
      "Housing, orientation, travel, and cultural briefing — we make sure you arrive confident and fully prepared.",
  },
] as const;

function StudyProcessSection() {
  return (
    <JourneyProcessSection
      eyebrow="The Study Abroad Process"
      headingId="study-process-heading"
      heading={
        <span id="study-process-heading">
          Your Step-by-Step Journey to Campus
        </span>
      }
      subtitle="A transparent, structured process that removes uncertainty and puts you in control at every stage."
      steps={STUDY_STEPS}
    />
  );
}

export { StudyProcessSection };
