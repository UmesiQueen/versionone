import type { Metadata } from "next";

import HeroImage from "@/app/assets/hero-img.jpg";
import { PageHero } from "@/components/layout/page-hero";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { ServicesGridSection } from "./_components/services-grid";
import { SupportOverviewSection } from "./_components/support-overview";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-spectrum support, every step of the way. From expert consultation to post-landing assistance — VersionOne offers a complete suite of travel, visa, and relocation services tailored to your journey.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        image={HeroImage}
        eyebrow="Services"
        heading={
          <>
            Full-Spectrum Support,
            <br />
            Every Step of the Way
          </>
        }
        description="From expert consultation to post-landing assistance, VersionOne offers a complete suite of travel, visa, and relocation services — tailored to your goals and managed end to end."
        headingId="services-hero-heading"
      />
      <SupportOverviewSection />
      <ServicesGridSection />
      <FinalCtaSection />
    </>
  );
}
