import {
  Anchor,
  BadgeCheck,
  Home,
  Plane,
} from "lucide-react";

import {
  IconCardGrid,
  type IconCardItem,
} from "@/components/sections/icon-card-grid";

const CORPORATE_SERVICES: IconCardItem[] = [
  {
    icon: BadgeCheck,
    title: "Expatriate Visa Processing",
    description:
      "Work permits, employment visas, intra-company transfer visas, skilled worker visas, dependent and family visas, residence permits, renewals, and permanent residency pathways.",
  },
  {
    icon: Anchor,
    title: "Offshore Crew & Marine Visa Services",
    description:
      "Specialized support for offshore oil and gas personnel, marine crew, seafarers, FPSO personnel, and subsea engineers — including crew visas, transit visas, and rotation coordination.",
  },
  {
    icon: Plane,
    title: "Corporate Travel Management",
    description:
      "End-to-end international travel for organizations — flight reservations, hotel accommodation, airport transfers, VIP assistance, group travel management, and emergency travel support.",
  },
  {
    icon: Home,
    title: "Relocation & Arrival Services",
    description:
      "Pre-departure guidance, airport reception, temporary accommodation, family relocation assistance, residence permit guidance, local registration, and ongoing immigration support.",
  },
];

function CorporateServicesSection() {
  return (
    <IconCardGrid
      eyebrow="Our Services"
      headingId="corporate-services-heading"
      heading={
        <span id="corporate-services-heading">
          Global Workforce Mobility Solutions
        </span>
      }
      subtitle="Whether you need to deploy offshore workers, relocate expatriate employees, manage crew rotations, or coordinate global business travel — we handle every detail."
      items={CORPORATE_SERVICES}
      surface="muted"
      columns={4}
    />
  );
}

export { CorporateServicesSection };
