import type { Metadata } from "next";

import HeroImage from "@/app/assets/consultation-hero.jpg";
import { PageHero } from "@/components/layout/page-hero";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { JourneyProcessSection } from "@/components/sections/journey-process";
import { BookConsultationFormSection } from "./_components/book-consultation-form";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description:
    "Speak with a VersionOne advisor to get clarity on your options and the best next steps. Free, confidential, and tailored to your goals.",
};

const BOOKING_STEPS = [
  {
    step: "01",
    title: "Submit Your Details",
    description: "We review your information before your session.",
  },
  {
    step: "02",
    title: "Pick a Time",
    description: "Choose a convenient slot that works for you.",
  },
  {
    step: "03",
    title: "We Prepare",
    description: "Our team gets ready to make your session count.",
  },
  {
    step: "04",
    title: "Consultation Takes Place",
    description: "You get clear, actionable guidance — no jargon.",
  },
] as const;

export default function BookConsultationPage() {
  return (
    <>
      <PageHero
        image={HeroImage}
        eyebrow="Consultation"
        heading={<>Let&rsquo;s Find the Right Path for You</>}
        description="Speak with a VersionOne advisor to get clarity on your options and the best next steps."
        headingId="book-consultation-hero-heading"
      />
      <BookConsultationFormSection />
      <JourneyProcessSection
        eyebrow="Process"
        heading={
          <span id="booking-process-heading">Your Step-by-Step Booking</span>
        }
        subtitle="A simple, transparent process from submission to consultation."
        headingId="booking-process-heading"
        className="lg:grid-cols-4"
        steps={BOOKING_STEPS}
      />
      <FinalCtaSection />
    </>
  );
}
