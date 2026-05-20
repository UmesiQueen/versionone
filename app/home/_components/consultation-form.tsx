"use client";
import { Check, Target, User, Video } from "lucide-react";
import { Container } from "@/components/layout/section";
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

const WHAT_TO_EXPECT = [
  { icon: Check, title: "20-30 minute session" },
  { icon: Video, title: "Virtual or in-person consultation" },
  { icon: User, title: "Led by an experienced advisor" },
  { icon: Target, title: "Tailored to your goals" },
] as const;

const SERVICE_OPTIONS = [
  "Immigration consultation",
  "Travel & visa support",
  "Study abroad planning",
  "Investment migration",
  "General inquiry",
] as const;

const TIMELINE_OPTIONS = [
  "As soon as possible",
  "Within 1 month",
  "1–3 months",
  "3–6 months",
  "Just exploring",
] as const;

function ConsultationFormSection() {
  return (
    <section
      id="consultation"
      aria-labelledby="consultation-heading"
      className="relative isolate w-full bg-primary text-brand-amber-foreground"
    >
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 -z-10 w-full bg-primary lg:w-1/2"
      />
      <Container className="grid grid-cols-1 gap-12 pt-16 sm:py-20 lg:grid-cols-2 lg:py-24 px-0">
        {/* Left panel — Amber */}
        <div className="flex flex-col gap-6 w-full lg:max-w-lg px-4 sm:px-0">
          <SectionHeading
            eyebrow="Consultation"
            heading={
              <span
                id="consultation-heading"
                className="font-semibold lg:text-4xl"
              >
                Book Your Free Consultation
              </span>
            }
            subtitle="Tell us about your situation and a specialist adviser will review your case and contact you with a clear, honest assessment — free of charge and with no commitment."
            align="left"
            tone="inverse"
          />

          <div className="mt-2 rounded-2xl bg-white p-5 w-full lg:max-w-sm">
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
              <span aria-hidden="true" className="h-px w-6 bg-secondary/90" />
              What to Expect
            </p>
            <ul className="mt-3 flex flex-col gap-3">
              {WHAT_TO_EXPECT.map(({ icon: Icon, title }) => (
                <li
                  key={title}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <span
                    aria-hidden="true"
                    className="inline-flex size-8 items-center justify-center rounded-md bg-primary/10 text-brand-light-blue"
                  >
                    <Icon className="size-4" />
                  </span>
                  <span>{title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right panel — Form */}
        <form
          aria-label="Free consultation request"
          className="flex flex-col gap-5 sm:rounded-2xl bg-secondary p-6 pb-16 sm:pb-6 text-primary-foreground sm:p-8"
          onSubmit={(e) => e.preventDefault()}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary-foreground/80">
            Personal details
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <Label
                htmlFor="first-name"
                className="text-xs font-medium uppercase tracking-[0.08em] text-primary-foreground/80"
              >
                First name
              </Label>

              <Input
                id="first-name"
                name="firstName"
                placeholder="Your first name"
                autoComplete="given-name"
                required
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label
                htmlFor="last-name"
                className="text-xs font-medium uppercase tracking-[0.08em] text-primary-foreground/80"
              >
                Last name
              </Label>

              <Input
                id="last-name"
                name="lastName"
                placeholder="Your last name"
                autoComplete="family-name"
                required
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label
                htmlFor="email"
                className="text-xs font-medium uppercase tracking-[0.08em] text-primary-foreground/80"
              >
                Email address
              </Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label
                htmlFor="phone"
                className="text-xs font-medium uppercase tracking-[0.08em] text-primary-foreground/80"
              >
                Phone number
              </Label>
              <Input
                id="phone"
                type="tel"
                name="phone"
                placeholder="+1 (555) 123-4567"
                autoComplete="tel"
              />
            </div>
          </div>

          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-primary-foreground/80">
            Your consultation type
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <Label
                htmlFor="service"
                className="text-xs font-medium uppercase tracking-[0.08em] text-primary-foreground/80"
              >
                Select a service
              </Label>
              <Select name="service">
                <SelectTrigger id="service">
                  <SelectValue placeholder="Choose a service" />
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

            <div className="flex flex-col gap-1.5">
              <Label
                htmlFor="timeline"
                className="text-xs font-medium uppercase tracking-[0.08em] text-primary-foreground/80"
              >
                Preferred timeline
              </Label>

              <Select name="timeline">
                <SelectTrigger id="timeline">
                  <SelectValue placeholder="Select a timeline" />
                </SelectTrigger>
                <SelectContent>
                  {TIMELINE_OPTIONS.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button
            type="submit"
            size="lg"
            className="mt-3 w-full rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            Book a Consultation
          </Button>
        </form>
      </Container>
    </section>
  );
}

export { ConsultationFormSection };
