"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Container, Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { OfficeCardAside } from "./office-card";

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
        <OfficeCardAside />
      </Container>
    </Section>
  );
}

export { ContactFormSection };
