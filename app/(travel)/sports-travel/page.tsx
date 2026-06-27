import type { Metadata } from "next";

import HeroImage from "@/app/assets/sports-hero.jpg";
import { PageHero } from "@/components/layout/page-hero";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { buildMetadata } from "@/lib/seo";
import { SportsDestinationsSection } from "./_components/sports-destinations";
import { SportsIntroSection } from "./_components/sports-intro";
import { SportsServicesSection } from "./_components/sports-services";
import { SportsWeSupportSection } from "./_components/sports-we-support";

export const metadata: Metadata = buildMetadata({
  title: "Sports Travel & International Sporting Experiences",
  path: "/sports-travel",
  description:
    "World-class sports travel for athletes, teams, fans, and corporate sponsors. VersionOne manages every detail — from international tournaments and training camps to team logistics and fan packages.",
  keywords: [
    "sports travel",
    "team travel",
    "athlete visa",
    "sports event travel",
    "fan travel packages",
    "training camp travel",
    "corporate sports hospitality",
    "international tournaments",
  ],
});

export default function SportsTravelPage() {
  return (
    <>
      <PageHero
        image={HeroImage}
        eyebrow="Sports Travel"
        heading={
          <>
            Travel Where
            <br />
            the Action Happens
          </>
        }
        description="Whether you're an athlete, team, coach, supporter, or sponsor — VersionOne delivers world-class sports travel experiences so you can focus on the game."
        headingId="sports-travel-hero-heading"
      />
      <SportsIntroSection />
      <SportsServicesSection />
      <SportsWeSupportSection />
      <SportsDestinationsSection />
      <FinalCtaSection
        heading="Ready to Travel. Compete. Win?"
        subtitle="Speak with our sports travel team today and discover customized solutions for athletes, teams, organizations, schools, universities, and supporters worldwide."
      />
    </>
  );
}
