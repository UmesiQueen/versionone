import {
  ChefHat,
  Compass,
  type LucideIcon,
  PartyPopper,
  ShoppingBag,
  TreePalm,
} from "lucide-react";

import { Container, Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";

type Experience = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const SIGNATURE_EXPERIENCES: Experience[] = [
  {
    icon: TreePalm,
    title: "Private Island Escapes",
    description:
      "Enjoy complete privacy and exclusivity on some of the world's most stunning islands — crafted for those who desire seclusion without sacrifice.",
  },
  {
    icon: Compass,
    title: "Luxury Safari Adventures",
    description:
      "Experience Africa's extraordinary wildlife from world-class lodges, luxury camps, and private reserves with expert guides and bespoke itineraries.",
  },
  {
    icon: ShoppingBag,
    title: "VIP Shopping Experiences",
    description:
      "Personal shopping tours, exclusive luxury brand appointments, and access to premium retail destinations curated to your taste.",
  },
  {
    icon: ChefHat,
    title: "Culinary Journeys",
    description:
      "Private chefs, fine dining reservations at the world's top tables, vineyard tours, and bespoke gourmet experiences crafted specifically for you.",
  },
  {
    icon: PartyPopper,
    title: "Destination Celebrations",
    description:
      "Luxury travel arrangements for honeymoons, birthdays, weddings, anniversaries, family reunions, and exclusive corporate retreats.",
  },
];

function LuxuryExperiencesSection() {
  return (
    <Section padding="default" surface="muted" aria-labelledby="luxury-experiences-heading">
      <Container>
        <SectionHeading
          eyebrow="Signature Experiences"
          heading={
            <span id="luxury-experiences-heading">
              Experiences Crafted for the Extraordinary
            </span>
          }
          subtitle="Beyond travel, we design moments. Each signature experience is a story in itself — curated with sophistication, delivered with flawless attention to detail."
        />

        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {SIGNATURE_EXPERIENCES.map(({ icon: Icon, title, description }) => (
            <li key={title} className="flex">
              <article className="flex w-full flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-primary/20 hover:shadow-md sm:p-7">
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

export { LuxuryExperiencesSection };
