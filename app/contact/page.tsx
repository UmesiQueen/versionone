import type { Metadata } from "next";

import HeroImage from "@/app/assets/hero-img.jpg";
import { PageHero } from "@/components/layout/page-hero";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { ContactFormSection } from "./_components/contact-form";
import { FollowUsSocialSection } from "./_components/follow-us-social";
import { ReachUsDirectlySection } from "./_components/reach-us-directly";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with VersionOne. Send a message, reach us by phone, WhatsApp or email, or follow us on social — our team typically responds within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        image={HeroImage}
        eyebrow="Contact Us"
        heading="Get in Touch"
        description="Have a question, feedback, or just want to know more? We're here to help. Reach out — our team typically responds within one business day."
        headingId="contact-hero-heading"
      />
      <ContactFormSection />
      <ReachUsDirectlySection />
      <FollowUsSocialSection />
      <FinalCtaSection />
    </>
  );
}
