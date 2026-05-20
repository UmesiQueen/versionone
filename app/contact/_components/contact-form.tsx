"use client";

import { ArrowRight, ArrowUpRight, Clock, MapPin } from "lucide-react";
import Link from "next/link";

import { Container, Section } from "@/components/layout/section";
import { SectionEyebrow, SectionHeading } from "@/components/layout/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

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

/**
 * ContactFormSection
 * Two-column layout used on /contact. Left: section heading + general-enquiry
 * form (Full Name, Email, Phone, Subject, Message). Right: office card with
 * embedded Google Map, address, and business hours. Form is intentionally
 * lighter than the book-consultation form — this is a general enquiry, not a
 * scheduled session, so we link out to the booking flow in the supporting copy.
 */
function ContactFormSection() {
  return (
    <Section
      id="contact-form"
      aria-labelledby="contact-form-heading"
      surface="default"
      padding="default"
    >
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-12">
        {/* Left — form */}
        <div className="flex flex-col gap-6">
          <SectionHeading
            eyebrow="Send a Message"
            heading={
              <span
                id="contact-form-heading"
                className="font-semibold lg:text-4xl"
              >
                We&rsquo;d Love to Hear From You
              </span>
            }
            subtitle={
              <>
                This form is for general enquiries and feedback &mdash; not
                consultation bookings. For a scheduled session with an adviser,
                please use our{" "}
                <Link
                  href="/book-consultation"
                  className="font-medium text-primary underline underline-offset-4 hover:text-primary/80 focus-visible:text-primary/80"
                >
                  Book a Consultation
                </Link>{" "}
                page instead.
              </>
            }
            align="left"
          />

          <form
            aria-label="Contact VersionOne"
            className="flex flex-col gap-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="contact-name">
                  Full Name <span aria-hidden="true">*</span>
                  <span className="sr-only">(required)</span>
                </Label>
                <Input
                  id="contact-name"
                  name="fullName"
                  placeholder="e.g. Amara Okafor"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="contact-email">
                  Email Address <span aria-hidden="true">*</span>
                  <span className="sr-only">(required)</span>
                </Label>
                <Input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="contact-phone">Phone Number</Label>
                <Input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  placeholder="+234 800 000 0000"
                  autoComplete="tel"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="contact-subject">
                  Subject <span aria-hidden="true">*</span>
                  <span className="sr-only">(required)</span>
                </Label>
                <Input
                  id="contact-subject"
                  name="subject"
                  placeholder="How can we help?"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="contact-message">
                Message <span aria-hidden="true">*</span>
                <span className="sr-only">(required)</span>
              </Label>
              <Textarea
                id="contact-message"
                name="message"
                placeholder="Tell us how we can help you…"
                rows={5}
                className="min-h-32"
                required
              />
            </div>

            <Button
              type="submit"
              size="xl"
              className="mt-1 self-start rounded-full bg-primary px-6 text-primary-foreground hover:bg-primary/90"
            >
              Send Message
              <ArrowRight aria-hidden="true" className="ml-1" />
            </Button>
          </form>
        </div>

        {/* Right — office card */}
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
      </Container>
    </Section>
  );
}

export { ContactFormSection };
