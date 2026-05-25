import type { Metadata } from "next";

import HeroImage from "@/app/assets/immigration-hero.jpg";
import { PageHero } from "@/components/layout/page-hero";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { ImmigrationOverview } from "./_components/immigration-overview";
import { ImmigrationPathwaysSection } from "./_components/immigration-pathways";

export const metadata: Metadata = {
  title: "Immigration",
  description:
    "Migrate, work, study, or invest abroad — VersionOne pairs you with the right immigration pathway and manages every step from eligibility to arrival.",
};

export default function ImmigrationPage() {
  return (
    <>
      <PageHero
        image={HeroImage}
        eyebrow="Immigration"
        heading={
          <>
            Your Path to a
            <br />
            New Life Abroad
          </>
        }
        description="Whether you're relocating your family, advancing a career, pursuing an education, or investing for residency — VersionOne guides you to the pathway that fits, and walks it with you end to end."
        headingId="immigration-hero-heading"
        height="part"
      />
      <ImmigrationOverview />
      <ImmigrationPathwaysSection />
      <FinalCtaSection
        heading="Not Sure Which Pathway Fits?"
        subtitle="Speak with a VersionOne advisor — we'll review your profile, weigh your options across migration, work, study, and investment routes, and recommend the cleanest path forward."
      />
    </>
  );
}
