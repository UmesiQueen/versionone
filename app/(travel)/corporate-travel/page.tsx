import type { Metadata } from "next";

import HeroImage from "@/app/assets/corporate-hero.jpg";
import { PageHero } from "@/components/layout/page-hero";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { buildMetadata } from "@/lib/seo";
import { CorporateCountriesSection } from "./_components/corporate-countries";
import { CorporateIndustriesSection } from "./_components/corporate-industries";
import { CorporateIntroSection } from "./_components/corporate-intro";
import { CorporateServicesSection } from "./_components/corporate-services";

export const metadata: Metadata = buildMetadata({
  title: "Corporate Travel, Expatriate & Offshore Workforce Mobility",
  path: "/corporate-travel",
  description:
    "Global visa management, expatriate relocation, offshore crew travel, and corporate immigration solutions. VersionOne helps organizations deploy personnel worldwide with confidence.",
  keywords: [
    "corporate travel",
    "expatriate visa",
    "offshore crew travel",
    "workforce mobility",
    "corporate immigration",
    "work permit",
    "employee relocation",
    "offshore personnel",
    "crew rotation",
  ],
});

export default function CorporateTravelPage() {
  return (
    <>
      <PageHero
        image={HeroImage}
        eyebrow="Corporate Travel"
        heading={
          <>
            Global Workforce
            <br />
            Mobility Solutions
          </>
        }
        description="Expert visa management, expatriate relocation, offshore crew logistics, and corporate travel coordination — handled end-to-end by specialists who understand your industry."
        headingId="corporate-travel-hero-heading"
      />
      <CorporateIntroSection />
      <CorporateServicesSection />
      <CorporateIndustriesSection />
      <CorporateCountriesSection />
      <FinalCtaSection
        heading="Partner With Us for Your Global Workforce Needs"
        subtitle="Speak with our corporate mobility team today to discuss your organization's visa, immigration, expatriate relocation, and international travel requirements."
      />
    </>
  );
}
