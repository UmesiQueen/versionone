import {
  Bus,
  FileText,
  Hotel,
  MapPin,
  Plane,
  ShieldCheck,
} from "lucide-react";
import {
  IconCardGrid,
  type IconCardItem,
} from "@/components/sections/icon-card-grid";

const INCLUDED_ITEMS: IconCardItem[] = [
  {
    icon: FileText,
    title: "Visa Processing",
    description:
      "Full visa application support for every destination included in your package.",
  },
  {
    icon: Plane,
    title: "Return Flights",
    description:
      "Economy or business class return flights, fully booked and confirmed.",
  },
  {
    icon: Hotel,
    title: "Hotel Accommodation",
    description:
      "Hand-picked hotels from 4 star to 5 star, breakfast options available.",
  },
  {
    icon: Bus,
    title: "Airport Transfers",
    description:
      "Private airport pickup and drop-off from anywhere throughout your stay.",
  },
  {
    icon: MapPin,
    title: "Guided Tours & Excursions",
    description:
      "Curated excursions with expert local guides included in every package.",
  },
  {
    icon: ShieldCheck,
    title: "Travel Insurance",
    description:
      "Comprehensive travel insurance covering medical, delays, and cancellations.",
  },
];

function PackageIncludesSection() {
  return (
    <IconCardGrid
      eyebrow="What's Included"
      headingId="package-includes-heading"
      heading={
        <span id="package-includes-heading">
          Every Package Includes All of This
        </span>
      }
      subtitle="No hidden add-ons. Every VersionOne tour package is designed to be genuinely all-inclusive."
      items={INCLUDED_ITEMS}
      surface="default"
      columns={3}
    />
  );
}

export { PackageIncludesSection };
