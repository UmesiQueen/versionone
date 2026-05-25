import { Crosshair, Eye, Flame, type LucideIcon } from "lucide-react";
import { Container, Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";

type Pillar = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const PILLARS: Pillar[] = [
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To become the most successful, most admired, most trusted, most innovative and most sought after Travel Agency in the region.",
  },
  {
    icon: Crosshair,
    title: "Our Mission",
    description:
      "To be our customer's only choice in helping them feel the world.",
  },
  {
    icon: Flame,
    title: "Our Inspiration",
    description:
      "We draw our inspiration from the bird called The Arctic Tern, who makes the longest migration in the world without resting. The bird is powered by its own life and motivation — its emotive and meditative style is what inspires us.",
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
        <ul className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
          {PILLARS.map(({ icon: Icon, title, description }) => (
            <li key={title} className="flex">
              <article className="flex w-full flex-col gap-5 rounded-2xl border border-white/15 bg-white/6 p-7 backdrop-blur-sm sm:p-8">
                <span
                  aria-hidden="true"
                  className="inline-flex size-11 items-center justify-center rounded-md bg-white/15 text-primary-foreground"
                >
                  <Icon className="size-5" />
                </span>
                <div className="flex flex-col gap-3">
                  <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-secondary">
                    {title}
                  </h3>
                  <p className="text-base font-medium leading-snug text-primary-foreground sm:text-lg">
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
