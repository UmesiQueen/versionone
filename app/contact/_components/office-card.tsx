import { ArrowUpRight, Clock, MapPin } from "lucide-react";

import { SectionEyebrow } from "@/components/layout/section-heading";

const BUSINESS_HOURS = [
  { day: "Monday – Friday", hours: "8:00 AM – 6:00 PM", isClosed: false },
  { day: "Saturday", hours: "9:00 AM – 3:00 PM", isClosed: false },
  { day: "Sunday", hours: "Closed", isClosed: true },
] as const;

const OFFICE_ADDRESS = {
  name: "VersionOne Advisory",
  lines: ["12 Aba Road, GRA Phase 2", "Port Harcourt, Rivers State", "Nigeria"],
  // Embed URL using the address — no API key required.
  mapEmbedSrc:
    "https://www.google.com/maps?q=12+Aba+Road+GRA+Phase+2+Port+Harcourt+Rivers+State+Nigeria&output=embed",
  directionsHref:
    "https://www.google.com/maps/dir/?api=1&destination=12+Aba+Road+GRA+Phase+2+Port+Harcourt+Rivers+State+Nigeria",
} as const;

function OfficeCardAside() {
  return (
    <aside
      aria-label="VersionOne office details"
      className="flex h-fit flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-sm"
    >
      <div className="aspect-4/3 w-full bg-muted">
        <iframe
          src={OFFICE_ADDRESS.mapEmbedSrc}
          title={`Map showing ${OFFICE_ADDRESS.name} location`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-full w-full border-0"
        />
      </div>

      <div className="flex flex-col gap-5 p-6">
        <div className="flex flex-col gap-3">
          <SectionEyebrow>Our Office</SectionEyebrow>
          <h3 className="text-lg font-semibold text-foreground">
            {OFFICE_ADDRESS.name}
          </h3>
          <p className="flex items-start gap-2 text-sm text-muted-foreground">
            <MapPin
              aria-hidden="true"
              className="mt-0.5 size-4 shrink-0 text-secondary"
            />
            <span>
              {OFFICE_ADDRESS.lines.map((line, i) => (
                <span key={line} className="block">
                  {line}
                  {i < OFFICE_ADDRESS.lines.length - 1 ? null : null}
                </span>
              ))}
            </span>
          </p>
        </div>

        <div className="flex flex-col gap-3 border-t border-border pt-5">
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
            <Clock
              aria-hidden="true"
              className="size-4 shrink-0 text-secondary"
            />
            Business Hours
          </p>
          <dl className="flex flex-col gap-2 text-sm">
            {BUSINESS_HOURS.map(({ day, hours, isClosed }) => (
              <div
                key={day}
                className="flex items-center justify-between gap-4"
              >
                <dt className="text-muted-foreground">{day}</dt>
                <dd
                  className={
                    isClosed
                      ? "font-medium text-destructive"
                      : "font-medium text-foreground"
                  }
                >
                  {hours}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <a
          href={OFFICE_ADDRESS.directionsHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 self-start text-sm font-medium text-primary outline-none transition-colors hover:text-primary/80 focus-visible:underline"
        >
          Get directions
          <ArrowUpRight aria-hidden="true" className="size-4" />
        </a>
      </div>
    </aside>
  );
}

export { OfficeCardAside };
