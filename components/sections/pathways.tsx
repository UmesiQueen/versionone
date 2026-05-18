import { PathwayCard } from "@/components/cards/pathway-card";
import { Container, Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { cn } from "@/lib/utils";

const PATHWAYS = [
  {
    index: 1,
    eyebrow: "Pathway Highlight",
    title: "Migrate",
    description:
      "Relocate permanently to a new country. Build a future you can live in.",
    tags: ["Canada Skilled Migration", "PR & Citizenship"],
    href: "/migrate",
    image:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    index: 2,
    eyebrow: "Work Visa",
    title: "Work Abroad",
    description:
      "Build an international career. Find global opportunities and open doors to fresh experiences.",
    tags: ["UK Skilled Worker", "EU Blue Card", "US Work Permit"],
    href: "/work-abroad",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
  },
  {
    index: 3,
    eyebrow: "Student Visa",
    title: "Study Abroad",
    description:
      "Access world-class education from leading universities. We make the application process simple — for yourself and your family.",
    tags: ["UK Student Route", "US F-1", "Canada Study Permit"],
    href: "/study-abroad",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    index: 4,
    eyebrow: "Visit Visa",
    title: "Visit & Travel",
    description:
      "Explore the world hassle-free. Short-stay visas, expedited support for tourism, business travel, family visits, and more.",
    tags: ["Schengen", "ETIAS", "UK Visit Visa"],
    href: "/visit",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80",
  },
  {
    index: 5,
    eyebrow: "Investor Visa",
    title: "Invest",
    description:
      "Access exclusive global mobility through high-net-worth investment routes. Visas & residencies in your chosen country.",
    tags: ["Golden Visa", "Citizenship by Investment"],
    href: "/investment",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
  },
];

function PathwaysSection() {
  return (
    <Section padding="default" aria-labelledby="pathways-heading">
      <Container>
        <SectionHeading
          eyebrow="Five Pathways"
          align="center"
          heading={
            <span id="pathways-heading">
              Five Pathways. One Expert Partner.
            </span>
          }
          subtitle="Whether you're moving permanently, chasing a career, pursuing a degree, exploring the world, or building wealth — VersionOne has the pathway for you."
        />
        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-4 lg:grid-cols-6 sm:grid-rows-5 md:grid-rows-3 lg:grid-rows-6">
          {PATHWAYS.map((pathway, idx) => (
            <li
              key={pathway.title}
              className={cn("flex sm:col-span-2 lg:col-span-2 sm:row-span-1 lg:row-span-3 min-h-85", {
                "lg:col-span-3 ": idx <= 1,
              })}
            >
              <PathwayCard {...pathway} className="w-full" />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

export { PathwaysSection };
