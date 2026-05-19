import { Briefcase, Building2, Clock, Repeat } from "lucide-react";
import {
  IconCardGrid,
  type IconCardItem,
} from "@/components/sections/icon-card-grid";

const PATHWAYS: IconCardItem[] = [
  {
    icon: Briefcase,
    title: "Skilled Worker Visas",
    description:
      "Designed for qualified professionals with recognized qualifications and relevant work experience. These are employer-linked pathways common in Canada.",
  },
  {
    icon: Building2,
    title: "Employer-Sponsored Visas",
    description:
      "Your employer sponsors your application directly. Ideal if you already have a job offer from a company abroad or are being recruited internationally.",
  },
  {
    icon: Repeat,
    title: "Intra-Company Transfer",
    description:
      "For employees of multinational companies moving between offices in different countries. Requires proven employment history within the same organization.",
  },
  {
    icon: Clock,
    title: "Seasonal & Temporary Work",
    description:
      "Short-term work authorizations for specific industries such as agriculture, hospitality, and tourism. Also includes working holiday visas.",
  },
];

function VisaPathwaysSection() {
  return (
    <IconCardGrid
      eyebrow="Visa Pathways"
      headingId="visa-pathways-heading"
      heading={
        <span id="visa-pathways-heading">
          Understanding Your Work Visa Options
        </span>
      }
      subtitle="Work visas come in many forms. We help you identify which category fits your profile, employer, and destination."
      items={PATHWAYS}
      surface="muted"
      columns={4}
    />
  );
}

export { VisaPathwaysSection };
