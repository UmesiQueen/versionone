import {
  Gem,
  Hotel,
  Plane,
  Ship,
} from "lucide-react";

import {
  IconCardGrid,
  type IconCardItem,
} from "@/components/sections/icon-card-grid";

const LUXURY_SERVICES: IconCardItem[] = [
  {
    icon: Gem,
    title: "Personalized Luxury Vacations",
    description:
      "Custom itineraries built around your lifestyle — romantic getaways, honeymoons, family holidays, wellness retreats, adventure expeditions, and multi-country tours.",
  },
  {
    icon: Plane,
    title: "Private Jet & Executive Travel",
    description:
      "Travel on your schedule with private jet charters, executive air travel, helicopter transfers, VIP airport fast-track services, and luxury ground transfers.",
  },
  {
    icon: Hotel,
    title: "Luxury Hotels & Resorts",
    description:
      "Access the world's most prestigious properties — five-star hotels, private villas, exclusive island retreats, boutique resorts, safari lodges, and presidential suites.",
  },
  {
    icon: Ship,
    title: "Luxury Cruises & Yacht Experiences",
    description:
      "Explore the world in style with private yacht charters, ocean cruises, Mediterranean and Caribbean sailings, river cruises, and island-hopping experiences.",
  },
];

function LuxuryServicesSection() {
  return (
    <IconCardGrid
      eyebrow="Our Services"
      headingId="luxury-services-heading"
      heading={
        <span id="luxury-services-heading">
          Exclusive Luxury Travel Services
        </span>
      }
      subtitle="From private aviation to handpicked five-star accommodations, every service is delivered with the precision, privacy, and personal attention you deserve."
      items={LUXURY_SERVICES}
      surface="muted"
      columns={4}
    />
  );
}

export { LuxuryServicesSection };
