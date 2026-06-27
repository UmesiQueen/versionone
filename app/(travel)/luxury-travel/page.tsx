import type { Metadata } from "next";

import HeroImage from "@/app/assets/luxury-hero.jpg"; 
import { PageHero } from "@/components/layout/page-hero";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { buildMetadata } from "@/lib/seo";
import { LuxuryDestinationsSection } from "./_components/luxury-destinations";
import { LuxuryExperiencesSection } from "./_components/luxury-experiences";
import { LuxuryIntroSection } from "./_components/luxury-intro";
import { LuxuryServicesSection } from "./_components/luxury-services";

export const metadata: Metadata = buildMetadata({
  title: "Luxury Travel & VIP Experiences",
  path: "/luxury-travel",
  description:
    "Experience the world with elegance, exclusivity, and personalized attention. VersionOne creates extraordinary luxury journeys for discerning travelers — from private jets to private islands.",
  keywords: [
    "luxury travel",
    "VIP experiences",
    "private jet charter",
    "luxury hotels",
    "bespoke travel",
    "luxury concierge",
    "private island",
    "luxury safari",
  ],
});

export default function LuxuryTravelPage() {
  return (
    <>
      <PageHero
        image={HeroImage}
        eyebrow="Luxury Travel"
        heading={
          <>
            Travel Beyond
            <br />
            Ordinary
          </>
        }
        description="Experience the world with elegance, exclusivity, and personalized attention. Every detail designed around you — by experts who understand what extraordinary truly means."
        headingId="luxury-travel-hero-heading"
      />
      <LuxuryIntroSection />
      <LuxuryServicesSection />
      <LuxuryDestinationsSection />
      <LuxuryExperiencesSection />
      <FinalCtaSection
        heading="Start Planning Your Luxury Journey"
        subtitle="Contact our luxury travel specialists today and discover a new standard of travel where every detail is crafted with sophistication, comfort, and attention to detail."
      />
    </>
  );
}
