import type { Metadata } from "next";

import HeroImage from "@/app/assets/hero-img.jpg";
import { PageHero } from "@/components/layout/page-hero";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { StudyDestinationsSection } from "./_components/study-destinations";
import { StudyProcessSection } from "./_components/study-process";
import { WhatsIncludedSection } from "./_components/whats-included";
import { WhyStudyAbroadSection } from "./_components/why-study-abroad";

export const metadata: Metadata = {
  title: "Study Abroad",
  description:
    "From university shortlisting and application support to student visa processing and pre-departure guidance — VersionOne manages every step of your international education journey.",
};

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
      <FinalCtaSection />
    </>
  );
}
