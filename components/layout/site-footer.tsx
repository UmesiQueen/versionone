import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/app/assets/VersionOne-2.png";
import { Facebook, Instagram, X, YouTube } from "@/components/icons";
import { Container } from "@/components/layout/section";
import { cn } from "@/lib/utils";

type FooterColumn = {
  title: string;
  links: { label: string; href: string }[];
};

const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Investment", href: "/investment" },
    ],
  },
  {
    title: "Immigration",
    links: [
      { label: "Migrate", href: "/migrate" },
      { label: "Work Abroad", href: "/work-abroad" },
      { label: "Study Abroad", href: "/study-abroad" },
    ],
  },
  {
    title: "Travel",
    links: [
      { label: "Visit & Travel", href: "/visit" },
      { label: "Tour Packages", href: "/tour-packages" },
    ],
  },
  {
    title: "Get help",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "Contact Us", href: "/contact" },
      { label: "Book a Consultation", href: "/book-consultation" },
    ],
  },
];

const SOCIAL_LINKS = [
  { label: "Twitter / X", href: "https://x.com/version1travels", icon: X },
  {
    label: "Facebook",
    href: "https://facebook.com/versiononetravels",
    icon: Facebook,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/versiononetravels",
    icon: Instagram,
  },
  { label: "YouTube", href: "https://youtube.com", icon: YouTube },
] as const;

function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      data-slot="site-footer"
      className="border-t border-brand-navy-foreground/10 bg-brand-navy text-brand-navy-foreground"
    >
      <Container className="py-10 md:py-16">
        <div className="grid grid-cols-1 justify-between gap-y-20 gap-x-30 md:grid-cols-2 lg:grid-cols-10">
          <div className="flex flex-col gap-4 lg:col-span-4">
            <Link href="/" className="flex items-center h-14 md:h-20">
              <Image
                src={Logo}
                alt="VersionOne logo"
                className="h-full w-auto object-contain filter-[drop-shadow(0_0_0.4px_currentColor)]"
              />
            </Link>
            <p className="max-w-sm text-sm text-brand-navy-foreground/70">
              A full-service travel and immigration advisory firm. Port
              Harcourt, Nigeria — serving clients across 40+ countries.
            </p>
            <ul className="mt-2 flex flex-col gap-3 text-sm">
              <li className="flex items-start gap-2 text-brand-navy-foreground/80">
                <Phone
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0 text-secondary"
                />
                <a
                  href="tel:+2348170000165"
                  className="hover:text-brand-navy-foreground focus-visible:underline"
                >
                  +234 817&ndash;000&ndash;0165
                </a>
              </li>
              <li className="flex items-start gap-2 text-brand-navy-foreground/80">
                <Mail
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0 text-secondary"
                />
                <a
                  href="mailto:ph@versiononetravels.com"
                  className="hover:text-brand-navy-foreground focus-visible:underline"
                >
                  ph@versiononetravels.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-brand-navy-foreground/80">
                <MapPin
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0 text-secondary"
                />
                <span>
                  129/131 Olu-Obasanjo Road,
                  <br />
                  Port Harcourt, Nigeria 500272
                </span>
              </li>
            </ul>
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:col-span-6"
          >
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.title} className="flex flex-col gap-3">
                <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-navy-foreground/50">
                  {column.title}
                </h2>
                <ul className="flex flex-col gap-2">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="block w-fit text-sm text-brand-navy-foreground/75 outline-none transition-all duration-300 ease-in-out hover:translate-x-1 hover:text-secondary/80 focus-visible:text-brand-navy-foreground focus-visible:underline"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-brand-navy-foreground/10 pt-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={`VersionOne on ${label}`}
                className={cn(
                  "inline-flex size-9 items-center justify-center rounded-full bg-brand-navy-foreground/10 text-brand-navy-foreground outline-none transition-all duration-300 ease-in-out",
                  "hover:bg-secondary/50 hover:-translate-y-1",
                  "focus-visible:ring-2 focus-visible:ring-primary-foreground/70",
                )}
              >
                <Icon className="size-4" aria-hidden="true" />
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-2 text-sm sm:text-xs text-brand-navy-foreground/60 sm:flex-row sm:items-center sm:gap-6">
            <span>&copy; {year} VersionOne. All rights reserved.</span>
            <Link
              href="/privacy-policy"
              className="hover:text-brand-navy-foreground focus-visible:underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-brand-navy-foreground focus-visible:underline"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export { SiteFooter };
