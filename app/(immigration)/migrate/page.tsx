import type { Metadata } from "next";

import HeroImage from "@/app/assets/hero-img.jpg";
import { PageHero } from "@/components/layout/page-hero";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { MigrationDestinationsSection } from "./_components/migration-destinations";
import { MigrationOverview } from "./_components/migration-overview";
import { MigrationProcessSection } from "./_components/migration-process";

export const metadata: Metadata = {
  title: "Migrate",
  description:
    "Whether you're seeking permanent residency, citizenship by investment, or a fresh start in a new country — VersionOne is your expert guide to international relocation. We handle complexity so you can focus on the future.",
};

export default function MigratePage() {
  return (
    <>
      <PageHero
        image={HeroImage}
        eyebrow="Migrate"
        heading={
          <>
            Start Your New
            <br />
            Life Abroad
          </>
        }
        description="Whether you're seeking permanent residency, citizenship by investment, or a fresh start in a new country — VersionOne is your expert guide to international relocation. We handle complexity so you can focus on the future."
        headingId="migrate-hero-heading"
      />
      <MigrationOverview />
      <MigrationDestinationsSection />
      <MigrationProcessSection />
      <FinalCtaSection />
    </>
  );
}
