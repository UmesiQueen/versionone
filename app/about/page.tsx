import type { Metadata } from "next";

import HeroImage from "@/app/assets/hero-img.jpg";
import { PageHero } from "@/components/layout/page-hero";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { B2BCollaborationSection } from "./_components/b2b-collaboration";
import { OurPurposeSection } from "./_components/our-purpose";
import { WhoWeAreSection } from "./_components/who-we-are";

export const metadata: Metadata = {
  title: "About",
  description:
    "VersionOne is a global mobility advisory firm built on the belief that access to opportunity should not be complicated. Meet the team behind our travel, immigration, and investment expertise.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        image={HeroImage}
        eyebrow="About Us"
        heading={
          <>
            Built on Purpose.
            <br />
            Powered by People.
          </>
        }
        description="Since our founding, VersionOne has been driven by a single belief: that access to global opportunity should not be complicated. We exist to remove the barriers between you and the world you deserve."
        headingId="about-hero-heading"
      />
      <WhoWeAreSection />
      <OurPurposeSection />
      <B2BCollaborationSection />
      <FinalCtaSection />
    </>
  );
}
