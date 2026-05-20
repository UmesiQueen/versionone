"use client";

import { ArrowRight, Clock, Target, User, Video } from "lucide-react";

import { Container, Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const WHAT_TO_EXPECT = [
  { icon: Clock, title: "20–30 minute session" },
  { icon: Video, title: "Virtual or in-person" },
  { icon: User, title: "Led by an experienced advisor" },
  { icon: Target, title: "Tailored to your goals" },
] as const;

const DESTINATION_OPTIONS = [
  "United Kingdom",
  "Canada",
  "United States",
  "Australia",
  "Schengen Area",
  "United Arab Emirates",
  "Other",
] as const;

const SERVICE_OPTIONS = [
  "Work visa",
  "Study visa",
  "Family / dependant visa",
  "Tourist / visitor visa",
  "Residency by investment",
  "Citizenship by investment",
  "Not sure yet",
] as const;

/**
 * BookConsultationFormSection
 * Page-specific consultation form for /book-consultation. Differs from the
 * shared ConsultationFormSection (which uses an amber/primary surface) by
 * keeping the canvas light and pairing a small "What to Expect" sidebar with
 * a bordered card containing the form. Fields match the immigration intake
 * shown in the design: Personal Details + Immigration Needs.
 */
function BookConsultationFormSection() {
  return (
    <Section
      id="book-consultation"
      aria-labelledby="book-consultation-heading"
      surface="default"
      padding="default"
    >
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-16">
        {/* Left — intro + "What to Expect" card */}
        <div className="flex flex-col gap-6">
          <SectionHeading
            eyebrow="Free Consultation"
            heading={
              <span
                id="book-consultation-heading"
                className="font-semibold lg:text-4xl"
              >
                Book Your Free Consultation
              </span>
            }
            subtitle="Tell us about your situation and a specialist adviser will review your case and contact you with a clear, honest assessment — free of charge and with no commitment."
            align="left"
          />

          <div className="mt-2 rounded-2xl border border-border bg-muted/50 p-5 sm:p-6 lg:max-w-sm">
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
              <span aria-hidden="true" className="h-px w-6 bg-secondary/90" />
              What to Expect
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {WHAT_TO_EXPECT.map(({ icon: Icon, title }) => (
                <li
                  key={title}
                  className="flex items-center gap-3 text-sm text-muted-foreground"
                >
                  <span
                    aria-hidden="true"
                    className="inline-flex size-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-brand-light-blue"
                  >
                    <Icon className="size-4" />
                  </span>
                  <span>{title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right — form card */}
        <form
          aria-label="Book a free consultation"
          className="flex flex-col gap-6 rounded-2xl border border-border bg-primary/5 p-6 sm:p-10 [&_input,textarea]:placeholder:text-muted-foreground/60"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Personal Details */}
          <fieldset className="flex flex-col gap-4">
            <legend className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground/60 mb-5">
              Personal Details
            </legend>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <Label
                  htmlFor="bc-full-name"
                  className="text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground"
                >
                  Full Name <span aria-hidden="true">*</span>
                  <span className="sr-only">(required)</span>
                </Label>
                <Input
                  id="bc-full-name"
                  name="fullName"
                  placeholder="Your full name"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label
                  htmlFor="bc-nationality"
                  className="text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground"
                >
                  Nationality <span aria-hidden="true">*</span>
                  <span className="sr-only">(required)</span>
                </Label>
                <Input
                  id="bc-nationality"
                  name="nationality"
                  placeholder="e.g. Nigerian, Ghanaian"
                  autoComplete="country-name"
                  required
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label
                  htmlFor="bc-email"
                  className="text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground"
                >
                  Email Address <span aria-hidden="true">*</span>
                  <span className="sr-only">(required)</span>
                </Label>
                <Input
                  id="bc-email"
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label
                  htmlFor="bc-phone"
                  className="text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground"
                >
                  Phone / WhatsApp <span aria-hidden="true">*</span>
                  <span className="sr-only">(required)</span>
                </Label>
                <Input
                  id="bc-phone"
                  type="tel"
                  name="phone"
                  placeholder="+44 7000 000000"
                  autoComplete="tel"
                  required
                />
              </div>
            </div>
          </fieldset>

          <hr className="border-primary/10" />

          {/* Immigration Needs */}
          <fieldset className="flex flex-col gap-4">
            <legend className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground/60 mb-5">
              Your Immigration Needs
            </legend>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <Label
                  htmlFor="bc-destination"
                  className="text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground"
                >
                  Destination Country <span aria-hidden="true">*</span>
                  <span className="sr-only">(required)</span>
                </Label>
                <Select name="destination" required>
                  <SelectTrigger id="bc-destination">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {DESTINATION_OPTIONS.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-1.5">
                <Label
                  htmlFor="bc-service"
                  className="text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground"
                >
                  Visa / Service Type <span aria-hidden="true">*</span>
                  <span className="sr-only">(required)</span>
                </Label>
                <Select name="service" required>
                  <SelectTrigger id="bc-service">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {SERVICE_OPTIONS.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </fieldset>

          <hr className="border-primary/10" />

          <div className="flex flex-col gap-1.5">
            <Label
              htmlFor="bc-additional"
              className="text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground"
            >
              Additional Information
            </Label>
            <Textarea
              id="bc-additional"
              name="additionalInformation"
              placeholder="Tell us more about your situation — employment, family circumstances, previous visa history, or anything else relevant to your case…"
              rows={4}
              className="min-h-28"
            />
          </div>

          <Button
            type="submit"
            size="xl"
            className="mt-2 w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Book a Consultation
            <ArrowRight aria-hidden="true" className="ml-1" />
          </Button>
        </form>
      </Container>
    </Section>
  );
}

export { BookConsultationFormSection };
