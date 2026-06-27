import {
  Cpu,
  Flame,
  HardHat,
  HeartPulse,
  type LucideIcon,
  Ship,
  Zap,
} from "lucide-react";

import { Container, Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";

type Industry = {
  icon: LucideIcon;
  name: string;
  description: string;
};

const INDUSTRIES: Industry[] = [
  {
    icon: Flame,
    name: "Oil & Gas",
    description:
      "Supporting the movement of engineers, project managers, offshore crews, drilling specialists, and technical experts to international project locations.",
  },
  {
    icon: Ship,
    name: "Marine & Shipping",
    description:
      "Visa and travel support for vessel operators, crew management companies, shipping agencies, and maritime contractors worldwide.",
  },
  {
    icon: HardHat,
    name: "Engineering & Construction",
    description:
      "Global mobility services for construction workers, supervisors, project teams, and technical specialists across international sites.",
  },
  {
    icon: Zap,
    name: "Energy & Renewables",
    description:
      "Travel and immigration support for solar, wind, power generation, and infrastructure projects across emerging energy markets.",
  },
  {
    icon: Cpu,
    name: "Information Technology",
    description:
      "International relocation solutions for software developers, consultants, cybersecurity professionals, and technology teams.",
  },
  {
    icon: HeartPulse,
    name: "Healthcare",
    description:
      "Visa support for doctors, nurses, medical specialists, and healthcare institutions recruiting internationally.",
  },
];

function CorporateIndustriesSection() {
  return (
    <Section padding="default" aria-labelledby="corporate-industries-heading">
      <Container>
        <SectionHeading
          eyebrow="Industries We Serve"
          heading={
            <span id="corporate-industries-heading">
              Expertise Across Key Global Industries
            </span>
          }
          subtitle="Our corporate mobility team has deep experience supporting workforce deployments across the industries that depend most on global talent movement."
        />

        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {INDUSTRIES.map(({ icon: Icon, name, description }) => (
            <li key={name} className="flex">
              <article className="flex w-full flex-col gap-4 rounded-2xl border border-border bg-muted/40 p-6 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-primary/20 hover:shadow-md sm:p-7">
                <span
                  aria-hidden="true"
                  className="inline-flex size-11 items-center justify-center rounded-md bg-primary/10 text-brand-light-blue"
                >
                  <Icon className="size-5" />
                </span>
                <div className="mt-2 flex flex-col gap-2">
                  <h3 className="text-base font-semibold leading-snug text-foreground sm:text-lg">
                    {name}
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

export { CorporateIndustriesSection };
