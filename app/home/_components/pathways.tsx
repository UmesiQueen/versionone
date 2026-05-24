import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Container, Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Badge } from "@/components/ui/badge";
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

type PathwayCardProps = {
  index: number;
  eyebrow: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  imageAlt?: string;
  href: string;
  className?: string;
};

function PathwayCard({
  index,
  eyebrow,
  title,
  description,
  tags,
  image,
  imageAlt,
  href,
  className,
}: PathwayCardProps) {
  const formattedIndex = String(index).padStart(2, "0");

  return (
    <Link
      href={href}
      className={cn(
        "group relative isolate flex min-h-70 flex-col justify-end overflow-hidden rounded-2xl bg-brand-navy text-brand-navy-foreground shadow-sm border hover:border-secondary transition-all duration-300 ease-in-out",
        className,
      )}
    >
      <Image
        src={image}
        alt={imageAlt ?? "visa pathway"}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="-z-10 object-cover opacity-60 transition-transform duration-500 ease-in-out group-hover:scale-105"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-125 from-[#0B1F3A]/50 via-[#0B1F3A]/30 to-[#0B1F3A]/15 group-hover:via-brand-navy/20 transition-colors duration-500 ease-in-out"
      />

      <span
        className={cn(
          "absolute top-4 right-5 text-6xl font-bold text-brand-navy-foreground/30 group-hover:text-brand-navy-foreground/50 transition-colors duration-500 ease-in-out",
          {
            "lg:text-9xl": index <= 2,
          },
        )}
        aria-hidden="true"
      >
        {formattedIndex}
      </span>

      <div className="flex flex-col gap-10 p-5 h-full">
        <span className="text-[0.65rem] w-fit py-1 px-3 rounded-full font-semibold uppercase tracking-[0.18em] text-secondary bg-secondary/10 group-hover:bg-secondary/20 transition-colors duration-500 ease-in-out border border-secondary/50 backdrop-blur-md">
          {eyebrow}
        </span>
        <div className="flex flex-col gap-3 mt-auto">
          <h3 className="text-2xl font-bold leading-tight">{title}</h3>
          <p className="text-sm text-brand-navy-foreground/80 w-full lg:max-w-md">
            {description}
          </p>
          {tags.length > 0 ? (
            <ul
              className="flex flex-wrap gap-1.5 pt-1"
              aria-label={`${title} options`}
            >
              {tags.map((tag) => (
                <li key={tag}>
                  <Badge
                    variant="outline"
                    className="py-1 border-brand-navy-foreground/30 bg-white/10 text-brand-navy-foreground/90"
                  >
                    {tag}
                  </Badge>
                </li>
              ))}
            </ul>
          ) : null}
          <div className="mt-3 relative">
            <span className="block h-px w-full bg-white/20" />
            <span className="absolute top-0 left-0 h-px w-0 bg-white/50 group-hover:w-full transition-all duration-500 ease-in-out" />
          </div>
          <div className="flex items-center gap-2 justify-between">
            <p className="text-xs leading-none tracking-wide text-brand-navy-foreground/50 uppercase">
              3 Pathways
            </p>
            <div className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-white/70 group-hover:text-secondary transition-colors duration-500 ease-in-out">
              Explore
              <ArrowRight
                aria-hidden="true"
                className="size-4 group-hover:translate-x-1 transition-transform duration-500 ease-in-out"
              />
              <span className="sr-only">{title}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

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
              className={cn(
                "flex sm:col-span-2 lg:col-span-2 sm:row-span-1 lg:row-span-3 min-h-85",
                {
                  "lg:col-span-3 ": idx <= 1,
                },
              )}
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
