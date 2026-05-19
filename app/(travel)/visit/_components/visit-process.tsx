import { JourneyProcessSection } from "@/components/sections/journey-process";

const VISIT_STEPS = [
  {
    step: "01",
    title: "Enquiry & Consultation",
    description:
      "Tell us where you want to go, when, and why — we assess your eligibility and map out the right visa route.",
  },
  {
    step: "02",
    title: "Document Submission",
    description:
      "We send you a tailored document checklist and guide you through every form needed for a complete application.",
  },
  {
    step: "03",
    title: "Application Processing",
    description:
      "We submit your application, monitor its progress, and respond to any embassy queries on your behalf.",
  },
  {
    step: "04",
    title: "Visa Collection",
    description:
      "Once approved, we coordinate passport collection or e-visa delivery — fast, secure, and confirmed.",
  },
  {
    step: "05",
    title: "Travel Preparation",
    description:
      "Pre-departure briefing, itinerary review, insurance, and any last-mile logistics to make sure you travel with total confidence.",
  },
] as const;

function VisitProcessSection() {
  return (
    <JourneyProcessSection
      eyebrow="The Travel Visa Process"
      headingId="visit-process-heading"
      heading={
        <span id="visit-process-heading">
          Five Steps to a Stress-Free Trip
        </span>
      }
      subtitle="A clear, stress-free journey — from your first enquiry with us to boarding your flight with confidence."
      steps={VISIT_STEPS}
    />
  );
}

export { VisitProcessSection };
