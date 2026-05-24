import { ArrowRight, type LucideIcon, Mail, Phone } from "lucide-react";

import { WhatsApp } from "@/components/icons";
import { Container, Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { cn } from "@/lib/utils";

type DirectChannel = {
  label: string;
  value: string;
  helper: string;
  href: string;
  cta: string;
  icon: LucideIcon | React.ElementType;
  chipClass: string;
  ctaClass: string;
};

const CHANNELS: ReadonlyArray<DirectChannel> = [
  {
    label: "Call Us",
    value: "+234 817 000 0165",
    helper: "Mon–Fri, 8am – 6pm WAT",
    href: "tel:+2348170000165",
    cta: "Call now",
    icon: Phone,
    chipClass: "bg-blue-100 text-blue-600",
    ctaClass: "text-blue-600 hover:text-blue-700",
  },
  {
    label: "WhatsApp",
    value: "+234 817 000 0169",
    helper: "Quick replies within minutes",
    href: "https://wa.me/2348170000169",
    cta: "Chat now",
    icon: WhatsApp,
    chipClass: "bg-emerald-100 text-emerald-600",
    ctaClass: "text-emerald-600 hover:text-emerald-700",
  },
  {
    label: "Email Us",
    value: "ph@versiononetravels.com",
    helper: "We respond within 24 hours",
    href: "mailto:ph@versiononetravels.com",
    cta: "Send email",
    icon: Mail,
    chipClass: "bg-amber-100 text-amber-600",
    ctaClass: "text-amber-600 hover:text-amber-700",
  },
];

function ReachUsDirectlySection() {
  return (
    <Section
      aria-labelledby="reach-us-directly-heading"
      surface="muted"
      padding="default"
    >
      <Container>
        <SectionHeading
          eyebrow="Direct Contacts"
          heading={
            <span id="reach-us-directly-heading">Reach Us Directly</span>
          }
          subtitle="Prefer a more direct line? Reach us by phone, WhatsApp, or email — whatever works best for you."
        />

        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {CHANNELS.map(
            ({
              label,
              value,
              helper,
              href,
              cta,
              icon: Icon,
              chipClass,
              ctaClass,
            }) => (
              <li key={label} className="flex">
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={`${label}: ${value}`}
                  className="group flex w-full flex-col items-center gap-3 rounded-2xl border border-border bg-background p-6 text-center outline-none transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md focus-visible:ring-3 focus-visible:ring-ring/30 sm:p-8"
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "inline-flex size-12 items-center justify-center rounded-full",
                      chipClass,
                    )}
                  >
                    <Icon className="size-5" />
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    {label}
                  </p>
                  <p className="text-base font-semibold text-foreground">
                    {value}
                  </p>
                  <p className="text-sm text-muted-foreground">{helper}</p>
                  <span
                    className={cn(
                      "mt-2 inline-flex items-center gap-1 text-sm font-medium transition-colors",
                      ctaClass,
                    )}
                  >
                    {cta}
                    <ArrowRight
                      aria-hidden="true"
                      className="size-4 transition-transform group-hover:translate-x-0.5"
                    />
                  </span>
                </a>
              </li>
            ),
          )}
        </ul>
      </Container>
    </Section>
  );
}

export { ReachUsDirectlySection };
