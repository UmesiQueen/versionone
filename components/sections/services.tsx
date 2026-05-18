import { Briefcase, Plane, Settings2, TrendingUp } from "lucide-react";
import { ServiceCard } from "@/components/cards/service-card";
import { Container, Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";

const SERVICES = [
  {
    icon: Briefcase,
    title: "Immigration",
    description:
      "Permanent residency, skilled worker visas, and long-stay permits across Canada, UK, Germany, and 30+ other destinations.",
    href: "/services/immigration",
  },
  {
    icon: Plane,
    title: "Travel",
    description:
      "Visitor visas, tourist packages, flight booking, hotel reservations, and travel insurance — all coordinated end-to-end.",
    href: "/services/travel",
  },
  {
    icon: Settings2,
    title: "Services",
    description:
      "One-on-one consultations, application processing, embassy attestations, and pre & post-landing support.",
    href: "/services/general",
  },
  {
    icon: TrendingUp,
    title: "Investment",
    description:
      "Golden Visas, citizenship by investment, real estate and startup visas, and wealth-residency programs.",
    href: "/services/investment",
  },
] as const;

function ServicesSection() {
  return (
    <Section padding="default" aria-labelledby="services-heading">
      <Container>
        <SectionHeading
          eyebrow="Our Services"
          heading={
            <span id="services-heading">
              Everything You Need to Move Globally
            </span>
          }
          subtitle="VersionOne is your single point of contact for every aspect of international travel, immigration, and relocation. No matter how complex your situation, we've got you covered."
        />
        <ul
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
        >
          {SERVICES.map((service) => (
            <li key={service.title} className="flex">
              <ServiceCard {...service} className="w-full" />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

export { ServicesSection };
