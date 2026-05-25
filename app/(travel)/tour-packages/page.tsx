import type { Metadata } from "next";

import HeroImage from "@/app/assets/tour-hero.jpg";
import { PageHero } from "@/components/layout/page-hero";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { FindYourJourneySection } from "./_components/find-your-journey";
import { OurPhilosophySection } from "./_components/our-philosophy";
import { PackageIncludesSection } from "./_components/package-includes";

export const metadata: Metadata = {
  title: "Tour Packages",
  description:
    "Immersive, premium travel experiences designed around you. From honeymoon escapes to group adventures — every detail handled by our expert travel team.",
};

export default function TourPackagesPage() {
  return (
    <>
      <PageHero
        image={HeroImage}
        eyebrow="Tour"
        heading={
          <>
            Curated Experiences,
            <br />
            Expertly Planned
          </>
        }
        description="Immersive, premium travel experiences designed around you. From honeymoon escapes to group adventures — every detail handled by our expert travel team."
        headingId="tour-packages-hero-heading"
      />
      <OurPhilosophySection />
      <FindYourJourneySection />
      <PackageIncludesSection />
      <FinalCtaSection
        heading="Ready to Plan Your Next Adventure?"
        subtitle="Let our travel experts craft the perfect itinerary for you. Whether it's a spontaneous escape or a milestone trip — we're ready to make it extraordinary."
      />
    </>
  );
}
