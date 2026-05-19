import type { Metadata } from "next";

import HeroImage from "@/app/assets/hero-img.jpg";
import { PageHero } from "@/components/layout/page-hero";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { CareerGlobalStageSection } from "./_components/career-global-stage";
import { VisaPathwaysSection } from "./_components/visa-pathways";
import { WorkDestinationsSection } from "./_components/work-destinations";
import { WorkProcessSection } from "./_components/work-process";

export const metadata: Metadata = {
  title: "Work Abroad",
  description:
    "From securing the right work visa to navigating employer sponsorship, VersionOne guides you through every step of your international career journey — in over 50 countries worldwide.",
};

export default function WorkAbroadPage() {
  return (
    <>
      <PageHero
        image={HeroImage}
        eyebrow="Work Abroad"
        heading={
          <>
            Build Your Career
            <br />
            Across Borders
          </>
        }
        description="From securing the right work visa to navigating employer sponsorship, VersionOne guides you through every step of your international career journey — in over 50 countries worldwide."
        headingId="work-abroad-hero-heading"
      />
      <CareerGlobalStageSection />
      <WorkDestinationsSection />
      <VisaPathwaysSection />
      <WorkProcessSection />
      <FinalCtaSection />
    </>
  );
}
