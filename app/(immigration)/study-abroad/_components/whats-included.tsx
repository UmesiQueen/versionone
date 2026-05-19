import {
  Building2,
  Check,
  ClipboardCheck,
  FileText,
  GraduationCap,
  type LucideIcon,
  Plane,
  Search,
} from "lucide-react";
import { Container, Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";

type IncludedService = {
  icon: LucideIcon;
  title: string;
  description: string;
  bullets: string[];
};

const SERVICES: IncludedService[] = [
  {
    icon: Search,
    title: "University Shortlisting",
    description:
      "We match your academic profile, budget, and career goals to a curated list of universities and programs where you have the strongest chance of admission.",
    bullets: [
      "Profile-based university matching",
      "Ranked & unranked program options",
      "Budget and scholarship guidance",
    ],
  },
  {
    icon: FileText,
    title: "Application Support",
    description:
      "We guide you through every application — personal statements, CVs, reference letters, and submission to multiple institutions simultaneously within their deadlines.",
    bullets: [
      "Personal statement editing",
      "Academic reference coordination",
      "Multi-institution submission management",
    ],
  },
  {
    icon: GraduationCap,
    title: "Admission Guidance",
    description:
      "From conditional offer acceptance to fulfilling entry requirements — we help you navigate every condition placed on your offer and secure your unconditional admission.",
    bullets: [
      "Offer letter review and acceptance",
      "Conditional requirements fulfilment",
      "CAS/enrolment confirmation support",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Student Visa Processing",
    description:
      "Our visa specialists manage the entire student visa application, documents, financial evidence, embassy appointments, and biometrics.",
    bullets: [
      "Profile-based university matching",
      "Ranked & unranked program options",
      "Budget and scholarship guidance",
    ],
  },
  {
    icon: Plane,
    title: "Pre-Departure Briefing",
    description:
      "Before you travel, we prepare a comprehensive briefing covering everything from airport procedures and what to carry in your hand luggage.",
    bullets: [
      "Travel document checklist",
      "Arrival and immigration prep",
      "First week in-country orientation",
    ],
  },
  {
    icon: Building2,
    title: "Accommodation Guidance",
    description:
      "We help you navigate student housing options — university halls, private student accommodation, and shared housing — so you have somewhere safe and suitable to live on arrival.",
    bullets: [
      "University halls application support",
      "Private accommodation recommendations",
      "Lease review and tenancy guidance",
    ],
  },
];

function WhatsIncludedSection() {
  return (
    <Section
      padding="default"
      aria-labelledby="whats-included-heading"
      className="bg-background"
    >
      <Container>
        <SectionHeading
          eyebrow="What's Included"
          heading={
            <span id="whats-included-heading">
              Everything You Need, Fully Managed
            </span>
          }
          subtitle="VersionOne handles every stage of your study abroad journey — from choosing the right university to arriving at your destination ready to succeed."
        />
        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {SERVICES.map(({ icon: Icon, title, description, bullets }) => (
            <li key={title} className="flex">
              <article className="flex w-full flex-col gap-4 rounded-2xl border border-border bg-muted/40 p-6 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-primary/20 hover:shadow-md sm:p-7">
                <span
                  aria-hidden="true"
                  className="inline-flex size-11 items-center justify-center rounded-md bg-primary/10 text-brand-light-blue"
                >
                  <Icon className="size-5" />
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold leading-snug text-foreground">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>
                <ul className="mt-1 flex flex-col gap-2">
                  {bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2 text-sm text-foreground/80"
                    >
                      <Check
                        aria-hidden="true"
                        className="mt-0.5 size-4 shrink-0 text-brand-light-blue"
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

export { WhatsIncludedSection };
