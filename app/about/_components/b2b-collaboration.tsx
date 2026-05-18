import {
  Briefcase,
  GraduationCap,
  type LucideIcon,
  Users,
} from "lucide-react";
import { Container, Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";

type Partner = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const PARTNERS: Partner[] = [
  {
    icon: Briefcase,
    title: "Corporate Travel Programs",
    description:
      "Dedicated account management, bulk visa processing, and corporate group travel packages for businesses and enterprises.",
  },
  {
    icon: Users,
    title: "Referral Partnerships",
    description:
      "Earn structured commissions by referring clients to VersionOne. Full tracking, transparency, and dedicated partner support.",
  },
  {
    icon: GraduationCap,
    title: "Educational Institutions",
    description:
      "Student visa pipelines, institutional partnerships, and study-abroad advisory for schools, universities, and consultancies and related educational institutions.",
  },
];

function B2BCollaborationSection() {
  return (
    <Section padding="default" aria-labelledby="b2b-heading">
      <Container>
        <SectionHeading
          eyebrow="B2B Collaboration"
          heading={<span id="b2b-heading">Partner With VersionOne</span>}
          subtitle="We work with travel agencies, educational institutions, HR departments, corporate organizations, and professional associations — delivering white-label immigration support, referral programs, and co-branded service packages that help your clients and your bottom line."
        />
        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:gap-6">
          {PARTNERS.map(({ icon: Icon, title, description }) => (
            <li key={title} className="flex">
              <article className="flex w-full flex-col gap-4 rounded-2xl border border-border bg-card px-6 py-8 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-primary/20 hover:shadow-md">
                <span
                  aria-hidden="true"
                  className="inline-flex size-12 items-center justify-center rounded-md bg-primary/10 text-brand-light-blue"
                >
                  <Icon className="size-5" />
                </span>
                <div className="mt-5 flex flex-col gap-2">
                  <h3 className="text-lg font-semibold leading-tight text-foreground">
                    {title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{description}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

export { B2BCollaborationSection };
