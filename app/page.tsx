import { BrandStatement } from "@/components/sections/brand-statement";
import { ConsultationFormSection } from "@/components/sections/consultation-form";
import { DestinationsSection } from "@/components/sections/destinations";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { HeroSection } from "@/components/sections/hero";
import { PartnerLogoSection } from "@/components/sections/partner-logo";
import { PathwaysSection } from "@/components/sections/pathways";
import { ServicesSection } from "@/components/sections/services";
import { StatsSection } from "@/components/sections/stats";
import { TestimonialsSection } from "@/components/sections/testimonials";

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
      <ConsultationFormSection />
      <BrandStatement />
      <FinalCtaSection />
    </>
  );
}
