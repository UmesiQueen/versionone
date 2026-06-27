import {
  Briefcase,
  FileCheck,
  Trophy,
  Users,
} from "lucide-react";

import {
  IconCardGrid,
  type IconCardItem,
} from "@/components/sections/icon-card-grid";

const SPORTS_SERVICES: IconCardItem[] = [
  {
    icon: Trophy,
    title: "International Sports Event Travel",
    description:
      "Professionally managed travel packages for football championships, tennis tournaments, athletics, basketball, rugby, cricket, golf, motorsport, and Olympic competitions.",
  },
  {
    icon: Users,
    title: "Team Travel Management",
    description:
      "Complete travel coordination for professional, amateur, school, university, and national teams — including group flights, accommodation, ground transport, and equipment logistics.",
  },
  {
    icon: FileCheck,
    title: "Athlete Mobility & Visa Services",
    description:
      "Specialized immigration support for international athletes — athlete visas, sports competition visas, training camp travel, event documentation, and multi-destination planning.",
  },
  {
    icon: Briefcase,
    title: "Corporate Sports Hospitality",
    description:
      "Premium sporting experiences for businesses, sponsors, and executives — VIP match access, corporate hospitality packages, luxury accommodation, and private transfers.",
  },
];

function SportsServicesSection() {
  return (
    <IconCardGrid
      eyebrow="Our Services"
      headingId="sports-services-heading"
      heading={
        <span id="sports-services-heading">
          Comprehensive Sports Travel Solutions
        </span>
      }
      subtitle="From organizing full team logistics to securing VIP hospitality for sponsors, we deliver seamless, end-to-end sports travel management for every type of traveler."
      items={SPORTS_SERVICES}
      surface="muted"
      columns={4}
    />
  );
}

export { SportsServicesSection };
