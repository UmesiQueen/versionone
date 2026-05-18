import { Crosshair, Eye, type LucideIcon } from "lucide-react";
import { Container, Section } from "@/components/layout/section";
import {
  SectionEyebrow,
  SectionHeading,
} from "@/components/layout/section-heading";

type Pillar = {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
};

const PILLARS: Pillar[] = [
  {
    icon: Crosshair,
    eyebrow: "Our Mission",
    title:
      "To make global mobility accessible, dignified, and stress-free for every client we serve.",
    description:
      "We exist to remove complexity from international movement — delivering expert guidance, transparent processes, and human-centered service to every person who walks through our doors, regardless of their background or budget.",
  },
  {
    icon: Eye,
    eyebrow: "Our Vision",
    title:
      "To be Africa's most trusted gateway to global immigration and investment opportunities.",
    description:
      "We envision a future where every Nigerian — and every African — has access to the same global opportunities that exist for anyone else in the world. VersionOne is committed to being the bridge that makes that future a reality.",
  },
];

function OurPurposeSection() {
  return (
    <Section
      surface="primary"
      padding="default"
      aria-labelledby="our-purpose-heading"
    >
      <Container>
        <SectionHeading
          eyebrow="Our Purpose"
          heading={
            <span id="our-purpose-heading">What Drives Us Every Day</span>
          }
          tone="inverse"
        />
        <ul className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">
          {PILLARS.map(({ icon: Icon, eyebrow, title, description }) => (
            <li key={eyebrow} className="flex">
              <article className="flex w-full flex-col gap-5 rounded-2xl border border-white/15 bg-white/6 p-7 backdrop-blur-sm sm:p-8">
                <span
                  aria-hidden="true"
                  className="inline-flex size-11 items-center justify-center rounded-md bg-white/15 text-primary-foreground"
                >
                  <Icon className="size-5" />
                </span>
                <div className="flex flex-col gap-3">
                  <SectionEyebrow>{eyebrow}</SectionEyebrow>
                  <h3 className="text-lg font-semibold leading-snug text-primary-foreground sm:text-xl">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-primary-foreground/80 sm:text-[0.9375rem]">
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

export { OurPurposeSection };
