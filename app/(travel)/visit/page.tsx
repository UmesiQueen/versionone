import type { Metadata } from "next";

import HeroImage from "@/app/assets/visit-hero.jpg";
import { PageHero } from "@/components/layout/page-hero";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { RightVisaIntroSection } from "./_components/right-visa-intro";
import { TravelSupportSection } from "./_components/travel-support";
import { VisitDestinationsSection } from "./_components/visit-destinations";
import { VisitProcessSection } from "./_components/visit-process";

export const metadata: Metadata = {
  title: "Visit",
  description:
    "Whether you're visiting family, exploring a new city, or attending a conference abroad — VersionOne handles your visitor visa, travel logistics, and everything in between so you can focus on the journey.",
};

export default function VisitPage() {
  return (
    <>
      <PageHero
        image={HeroImage}
        eyebrow="Visit"
        heading={
          <>
            Explore the World,
            <br />
            Stress-Free
          </>
        }
        description="Whether you're visiting family, exploring a new city, or attending a conference abroad — VersionOne handles your visitor visa, travel logistics, and everything in between so you can focus on the journey."
        headingId="visit-hero-heading"
      />
      <RightVisaIntroSection />
      <VisitDestinationsSection />
      <TravelSupportSection />
      <VisitProcessSection />
      <FinalCtaSection />
    </>
  );
}
