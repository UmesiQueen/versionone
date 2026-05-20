import type { Metadata } from "next";

import HeroImage from "@/app/assets/hero-img.jpg";
import { PageHero } from "@/components/layout/page-hero";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { GlobalAccessOverviewSection } from "./_components/global-access-overview";
import { InvestmentRoutesSection } from "./_components/investment-routes";

export const metadata: Metadata = {
  title: "Investment",
  description:
    "Invest. Relocate. Belong. VersionOne advises high-net-worth individuals and families on residency-by-investment, citizenship-by-investment, and the smart capital deployment that opens both portfolios and borders.",
};

export default function InvestmentPage() {
  return (
    <>
      <PageHero
        image={HeroImage}
        eyebrow="Investment"
        heading={
          <>
            Invest. Relocate.
            <br />
            Belong.
          </>
        }
        description="VersionOne advises high-net-worth individuals and families on the full spectrum of investment-led mobility — residency, citizenship, real estate, and enterprise."
        headingId="investment-hero-heading"
      />
      <GlobalAccessOverviewSection />
      <InvestmentRoutesSection />
      <FinalCtaSection />
    </>
  );
}
