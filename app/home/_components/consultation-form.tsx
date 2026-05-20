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
import PersonalDetails from "@/components/sections/personal-details";

const WHAT_TO_EXPECT = [
  { icon: Check, title: "20-30 minute session" },
  { icon: Video, title: "Virtual or in-person consultation" },
  { icon: User, title: "Led by an experienced advisor" },
  { icon: Target, title: "Tailored to your goals" },
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
        <PersonalDetails />
      </Container>
    </section>
  );
}

export { ConsultationFormSection };
