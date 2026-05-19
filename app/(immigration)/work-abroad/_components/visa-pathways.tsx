import {
  Briefcase,
  Building2,
  Clock,
  type LucideIcon,
  Repeat,
} from "lucide-react";
import { Container, Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";

type Pathway = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const PATHWAYS: Pathway[] = [
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
    <Section
      padding="default"
      surface="muted"
      aria-labelledby="visa-pathways-heading"
    >
      <Container>
        <SectionHeading
          eyebrow="Visa Pathways"
          heading={
            <span id="visa-pathways-heading">
              Understanding Your Work Visa Options
            </span>
          }
          subtitle="Work visas come in many forms. We help you identify which category fits your profile, employer, and destination."
        />
        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {PATHWAYS.map(({ icon: Icon, title, description }) => (
            <li key={title} className="flex">
              <article className="flex w-full flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-primary/20 hover:shadow-md sm:p-7">
                <span
                  aria-hidden="true"
                  className="inline-flex size-11 items-center justify-center rounded-md bg-primary/10 text-brand-light-blue"
                >
                  <Icon className="size-5" />
                </span>
                <div className="mt-2 flex flex-col gap-2">
                  <h3 className="text-base font-semibold leading-snug text-foreground sm:text-lg">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

export { VisaPathwaysSection };
