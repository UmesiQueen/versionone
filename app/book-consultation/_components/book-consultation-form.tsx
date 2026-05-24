"use client";
import { Clock, Target, User, Video } from "lucide-react";

import { Container, Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import BookingForm from "./booking-form";

export const WHAT_TO_EXPECT = [
  { icon: Clock, title: "20–30 minute session" },
  { icon: Video, title: "Virtual or in-person" },
  { icon: User, title: "Led by an experienced advisor" },
  { icon: Target, title: "Tailored to your goals" },
] as const;

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
        <BookingForm />
      </Container>
    </Section>
  );
}

export { BookConsultationFormSection };
