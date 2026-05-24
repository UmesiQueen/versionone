import { Facebook, Instagram, X, YouTube } from "@/components/icons";
import { Container, Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { cn } from "@/lib/utils";

type SocialChannel = {
  network: string;
  handle: string;
  href: string;
  icon: React.ElementType;
  chipClass: string;
};

const SOCIALS: ReadonlyArray<SocialChannel> = [
  {
    network: "Facebook",
    handle: "@VersionOne",
    href: "https://facebook.com/versiononetravels",
    icon: Facebook,
    chipClass: "bg-blue-100 text-blue-600",
  },
  {
    network: "Instagram",
    handle: "@versiononetravels",
    href: "https://instagram.com/versiononetravels",
    icon: Instagram,
    chipClass: "bg-pink-100 text-pink-600",
  },
  {
    network: "Twitter / X",
    handle: "@version1travels",
    href: "https://x.com/version1travels",
    icon: X,
    chipClass: "bg-sky-100 text-sky-600",
  },
  {
    network: "YouTube",
    handle: "VersionOne Global",
    href: "https://youtube.com",
    icon: YouTube,
    chipClass: "bg-red-100 text-red-600",
  },
];

/**
 * FollowUsSocialSection
 * Grid of five social channel cards, each a fully clickable anchor that opens
 * the network in a new tab. Adopts the same chip + label pattern as the
 * "Reach Us Directly" section above.
 */
function FollowUsSocialSection() {
  return (
    <Section
      aria-labelledby="follow-us-social-heading"
      surface="default"
      padding="default"
    >
      <Container>
        <SectionHeading
          eyebrow="Stay Connected"
          heading={
            <span id="follow-us-social-heading">Follow Us on Social Media</span>
          }
          subtitle="Stay up to date with visa news, travel tips, success stories, and updates from VersionOne."
        />

        <ul className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
          {SOCIALS.map(({ network, handle, href, icon: Icon, chipClass }) => (
            <li key={network} className="flex">
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={`VersionOne on ${network} — ${handle}`}
                className="group flex w-full flex-col items-center gap-2 rounded-2xl border border-border bg-background p-5 text-center outline-none transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md focus-visible:ring-3 focus-visible:ring-ring/30"
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "inline-flex size-11 items-center justify-center rounded-full transition-transform group-hover:scale-105",
                    chipClass,
                  )}
                >
                  <Icon className="size-5" />
                </span>
                <p className="text-sm font-semibold text-foreground">
                  {network}
                </p>
                <p className="text-xs text-muted-foreground">{handle}</p>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

export { FollowUsSocialSection };
