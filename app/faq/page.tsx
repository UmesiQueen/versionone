import type { Metadata } from "next";

import HeroImage from "@/app/assets/faq-hero.jpg";
import { PageHero } from "@/components/layout/page-hero";
import { Container, Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { FaqTabsSection } from "./_components/faq-tabs";

export const metadata: Metadata = {
  title: "Help Center",
  description:
    "Answers to the questions we hear most often about travel, immigration, and investment migration with VersionOne — from booking and visas to residency and citizenship.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        image={HeroImage}
        eyebrow="Frequently Asked Questions"
        heading="Help Center"
        description="Everything you need to know about VersionOne."
        headingId="faq-hero-heading"
        height="part"
      />

      <Section
        id="faq"
        aria-labelledby="faq-heading"
        surface="default"
        padding="default"
      >
        <Container className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Commonly Asked"
            heading={<span id="faq-heading">Frequently Asked Questions</span>}
            subtitle="Still have questions? Reach out to our team directly via WhatsApp or the enquiry form below."
            align="left"
          />
          <FaqTabsSection />
        </Container>
      </Section>

      <FinalCtaSection
        heading="Still Need Help?"
        subtitle="Our team is available to guide you through your questions and help you choose the right path."
      />
    </>
  );
}
