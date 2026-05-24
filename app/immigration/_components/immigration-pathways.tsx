import {
  ArrowRight,
  Briefcase,
  GraduationCap,
  Globe2,
  type LucideIcon,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

import { Container, Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { cn } from "@/lib/utils";

type Pathway = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
};

const PATHWAYS: Pathway[] = [
  {
    icon: Globe2,
    title: "Migrate",
    description:
      "Permanent residency, family reunification, and long-stay permits — the cleanest route to a new home abroad.",
    href: "/migrate",
  },
  {
    icon: Briefcase,
    title: "Work Abroad",
    description:
      "Skilled-worker visas, employer sponsorship, and global talent pathways across 50+ destinations.",
    href: "/work-abroad",
  },
  {
    icon: GraduationCap,
    title: "Study Abroad",
    description:
      "University shortlisting, student visa processing, and pre-departure guidance at the world's leading institutions.",
    href: "/study-abroad",
  },
  {
    icon: TrendingUp,
    title: "Investment",
    description:
      "Golden Visas, citizenship by investment, and residency-led capital strategies for high-net-worth clients.",
    href: "/investment",
  },
];

type PathwayCardProps = Pathway & {
  className?: string;
};

function PathwayCard({
  icon: Icon,
  title,
  description,
  href,
  className,
}: PathwayCardProps) {
  return (
    <article
      className={cn(
        "group relative flex flex-col gap-4 rounded-2xl border border-border bg-card px-6 py-8 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-primary/20 hover:shadow-md focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="inline-flex size-12 items-center justify-center rounded-md bg-primary/10 text-brand-light-blue"
      >
        <Icon className="size-5" />
      </span>
      <div className="flex flex-col gap-2 mt-5">
        <h3 className="text-lg font-semibold leading-tight text-foreground">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <Link
        href={href}
        className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-primary outline-none after:absolute after:inset-0 after:content-[''] hover:text-primary/80 focus-visible:underline"
      >
        Explore {title}
        <ArrowRight
          aria-hidden="true"
          className="size-4 transition-transform group-hover:translate-x-0.5"
        />
        <span className="sr-only">pathway</span>
      </Link>
    </article>
  );
}

function ImmigrationPathwaysSection() {
  return (
    <Section padding="default" aria-labelledby="immigration-pathways-heading">
      <Container>
        <SectionHeading
          eyebrow="Choose Your Pathway"
          heading={
            <span id="immigration-pathways-heading">
              Where Do You Want to Go Next?
            </span>
          }
          subtitle="Pick the pathway that matches your goal. Each one opens into a dedicated guide with destinations, requirements, and the exact steps we'll take together."
        />
        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {PATHWAYS.map((pathway) => (
            <li key={pathway.title} className="flex">
              <PathwayCard {...pathway} className="w-full" />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

export { ImmigrationPathwaysSection };
