import { FinalCtaSection } from "@/components/sections/final-cta";
import { BrandStatement } from "./_components/brand-statement";
import { ConsultationFormSection } from "./_components/consultation-form";
import { DestinationsSection } from "./_components/destinations";
import { HeroSection } from "./_components/hero";
import { PartnerLogoSection } from "./_components/partner-logo";
import { PathwaysSection } from "./_components/pathways";
import { ServicesSection } from "./_components/services";
import { StatsSection } from "./_components/stats";
import { TestimonialsSection } from "./_components/testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <DestinationsSection />
      <TestimonialsSection />
      <PartnerLogoSection />
      <PathwaysSection />
      <BrandStatement />
      <ConsultationFormSection />
      <FinalCtaSection />
    </>
  );
}
