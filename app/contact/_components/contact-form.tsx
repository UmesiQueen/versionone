"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Controller, type SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { Container, Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import PhoneInput from "@/components/ui/phone-input";
import { Textarea } from "@/components/ui/textarea";
import { OfficeCardAside } from "./office-card";

const contactSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.email("Invalid email address"),
  phone: z.string().min(5, "Phone number is required"),
  subject: z.string(),
  message: z.string().min(5, "Message is required"),
});

type ContactForm = z.infer<typeof contactSchema>;

const defaultValues = {
  fullName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

function ContactFormSection() {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues,
  });

  const onSubmit: SubmitHandler<ContactForm> = async (data) => {
    console.log(data);
  };

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
            onSubmit={handleSubmit(onSubmit)}
          >
            <FieldGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Controller
                name="fullName"
                control={control}
                render={({ field, fieldState }) => (
                  <Field className="flex flex-col gap-1.5">
                    <FieldLabel htmlFor="contact-name">
                      Full Name <span aria-hidden="true">*</span>
                      <span className="sr-only">(required)</span>
                    </FieldLabel>
                    <Input
                      id="contact-name"
                      placeholder="e.g. Jane Doe"
                      aria-invalid={fieldState.invalid}
                      {...field}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="email"
                control={control}
                render={({ field, fieldState }) => (
                  <Field className="flex flex-col gap-1.5">
                    <FieldLabel htmlFor="contact-email">
                      Email Address <span aria-hidden="true">*</span>
                      <span className="sr-only">(required)</span>
                    </FieldLabel>
                    <Input
                      id="contact-email"
                      placeholder="you@example.com"
                      aria-invalid={fieldState.invalid}
                      {...field}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="phone"
                control={control}
                render={({ field, fieldState }) => (
                  <Field className="flex flex-col gap-1.5">
                    <FieldLabel htmlFor="contact-phone">
                      Phone<span aria-hidden="true">*</span>
                      <span className="sr-only">(required)</span>
                    </FieldLabel>
                    <PhoneInput
                      id="contact-phone"
                      aria-invalid={fieldState.invalid}
                      {...field}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="subject"
                control={control}
                render={({ field, fieldState }) => (
                  <Field className="flex flex-col gap-1.5">
                    <FieldLabel htmlFor="contact-subject">Subject</FieldLabel>
                    <Input
                      id="contact-subject"
                      placeholder="How can we help?"
                      aria-invalid={fieldState.invalid}
                      {...field}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldGroup>

            <Controller
              name="message"
              control={control}
              render={({ field, fieldState }) => (
                <Field className="flex flex-col gap-1.5">
                  <FieldLabel htmlFor="contact-message">
                    Message <span aria-hidden="true">*</span>
                    <span className="sr-only">(required)</span>
                  </FieldLabel>
                  <Textarea
                    id="contact-message"
                    placeholder="Tell us how we can help you…"
                    rows={5}
                    className="min-h-32"
                    aria-invalid={fieldState.invalid}
                    {...field}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Button
              type="submit"
              size="xl"
              disabled={isSubmitting}
              className="mt-1 self-start rounded-full bg-primary px-6 text-primary-foreground hover:bg-primary/90"
            >
              {isSubmitting ? (
                "Submitting..."
              ) : (
                <>
                  {"Send Message"}
                  <ArrowRight aria-hidden="true" className="ml-1" />
                </>
              )}
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
