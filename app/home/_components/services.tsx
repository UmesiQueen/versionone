import {
  ArrowRight,
  Briefcase,
  type LucideIcon,
  Plane,
  Settings2,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { Container, Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { cn } from "@/lib/utils";

const SERVICES = [
  {
    icon: Briefcase,
    title: "Immigration",
    description:
      "Permanent residency, skilled worker visas, and long-stay permits across Canada, UK, Germany, and 30+ other destinations.",
    href: "/services/immigration",
  },
  {
    icon: Plane,
    title: "Travel",
    description:
      "Visitor visas, tourist packages, flight booking, hotel reservations, and travel insurance — all coordinated end-to-end.",
    href: "/services/travel",
  },
  {
    icon: Settings2,
    title: "Services",
    description:
      "One-on-one consultations, application processing, embassy attestations, and pre & post-landing support.",
    href: "/services/general",
  },
  {
    icon: TrendingUp,
    title: "Investment",
    description:
      "Golden Visas, citizenship by investment, real estate and startup visas, and wealth-residency programs.",
    href: "/services/investment",
  },
] as const;

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  className?: string;
};

function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  className,
}: ServiceCardProps) {
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
        Learn more
        <ArrowRight
          aria-hidden="true"
          className="size-4 transition-transform group-hover:translate-x-0.5"
        />
        <span className="sr-only">about {title}</span>
      </Link>
    </article>
  );
}

function ServicesSection() {
  return (
    <Section padding="default" aria-labelledby="services-heading">
      <Container>
        <SectionHeading
          eyebrow="Our Services"
          heading={
            <span id="services-heading">
              Everything You Need to Move Globally
            </span>
          }
          subtitle="VersionOne is your single point of contact for every aspect of international travel, immigration, and relocation. No matter how complex your situation, we've got you covered."
        />
        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {SERVICES.map((service) => (
            <li key={service.title} className="flex">
              <ServiceCard {...service} className="w-full" />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

export { ServicesSection };

