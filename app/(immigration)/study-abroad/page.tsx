import type { Metadata } from "next";

import HeroImage from "@/app/assets/study-hero.jpg";
import { PageHero } from "@/components/layout/page-hero";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { buildMetadata } from "@/lib/seo";
import { StudyDestinationsSection } from "./_components/study-destinations";
import { StudyProcessSection } from "./_components/study-process";
import { WhatsIncludedSection } from "./_components/whats-included";
import { WhyStudyAbroadSection } from "./_components/why-study-abroad";

export const metadata: Metadata = buildMetadata({
  title: "Study Abroad",
  path: "/study-abroad",
  description:
    "From university shortlisting and application support to student visa processing and pre-departure guidance — VersionOne manages every step of your international education journey.",
  keywords: [
    "study abroad",
    "international education",
    "student visa",
    "university application",
  ],
});

export default function StudyAbroadPage() {
  return (
    <>
      <PageHero
        image={HeroImage}
        eyebrow="Study Abroad"
        heading={
          <>
            Study at the World&rsquo;s
            <br />
            Best Institutions
          </>
        }
        description="From university shortlisting and application support to student visa processing and pre-departure guidance — VersionOne manages every step of your international education journey."
        headingId="study-abroad-hero-heading"
      />
      <WhyStudyAbroadSection />
      <StudyDestinationsSection />
      <WhatsIncludedSection />
      <StudyProcessSection />
      <FinalCtaSection
        heading="Ready to Start Your Study Abroad Journey?"
        subtitle="Speak with one of our education advisors — we'll review your academic profile, explore your destination options, and map out a clear path from application to arrival. No pressure, just honest guidance."
      />
    </>
  );
}
