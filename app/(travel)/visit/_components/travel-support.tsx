import {
  CalendarCheck,
  FileCheck2,
  FileText,
  Hotel,
  Plane,
  ShieldCheck,
} from "lucide-react";
import {
  IconCardGrid,
  type IconCardItem,
} from "@/components/sections/icon-card-grid";

const SUPPORT_ITEMS: IconCardItem[] = [
  {
    icon: FileText,
    title: "Visa Application & Submission",
    description:
      "Complete preparation and lodging of your visa application with every supporting document in perfect order.",
  },
  {
    icon: CalendarCheck,
    title: "Embassy Appointment Scheduling",
    description:
      "We book and confirm your embassy appointment, track slots, and send you reminders so you never miss a date.",
  },
  {
    icon: FileCheck2,
    title: "Document Preparation & Review",
    description:
      "Our checklist-driven review ensures your documents are complete, compliant, and presented for maximum approval.",
  },
  {
    icon: Plane,
    title: "Flight Booking Assistance",
    description:
      "We help you identify and book the right flights — timing, connections, and cost — aligned with your visa validity.",
  },
  {
    icon: Hotel,
    title: "Hotel Reservation Support",
    description:
      "Curated accommodation options near your destination, pre-booked to meet embassy proof-of-stay requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Travel Insurance Facilitation",
    description:
      "We connect you with compliant travel insurance policies accepted by embassies across all destinations.",
  },
];

function TravelSupportSection() {
  return (
    <IconCardGrid
      eyebrow="What's Included"
      headingId="travel-support-heading"
      heading={
        <span id="travel-support-heading">
          Complete Travel Support From Start to Finish
        </span>
      }
      subtitle="Every VersionOne travel client receives the full suite of services below — no add-ons, no hidden fees. We handle every moving part so your travel experience begins well before you board."
      items={SUPPORT_ITEMS}
      surface="muted"
      columns={3}
    />
  );
}

export { TravelSupportSection };
