"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Turnstile } from "@marsidev/react-turnstile";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
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
import Modal from "@/components/ui/modal";
import PhoneInput from "@/components/ui/phone-input";
import { Textarea } from "@/components/ui/textarea";
import { OfficeCardAside } from "./office-card";

const contactSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Full name is required")
    .max(100, "Name is too long"),
  email: z.email("Invalid email address").max(254, "Email is too long"),
  phone: z
    .string()
    .trim()
    .min(5, "Phone number is required")
    .max(20, "Phone number is too long"),
  subject: z.string().trim().max(200, "Subject is too long").optional(),
  message: z.string().trim().min(1, "Message is required"),
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
  const [modal, setModal] = useState<{
    variant: "success" | "error";
    name?: string;
  } | null>(null);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  const {
    handleSubmit,
    reset,
    control,
    formState: { isSubmitting },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues,
  });

  const onSubmit: SubmitHandler<ContactForm> = async (data) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          variables: {
            client_name: data.fullName,
            client_email: data.email,
            client_phone: data.phone,
            subject:
              data.subject ||
              `${data.fullName} sent a message via the contact form`,
            message: data.message,
          },
          turnstileToken,
        }),
      });

      if (!response.ok) throw new Error("Failed to send message.");

      setModal({ variant: "success", name: data.fullName });
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
      setModal({ variant: "error", name: data.fullName });
    } finally {
      setTurnstileToken(null);
    }
  };

  return (
    <Section
      id="form-c-form"
      aria-labelledby="form-c-form-heading"
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
                id="form-c-form-heading"
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
            id="form-c"
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
                    <FieldLabel htmlFor="form-c-name">
                      Full Name <span aria-hidden="true">*</span>
                      <span className="sr-only">(required)</span>
                    </FieldLabel>
                    <Input
                      id="form-c-name"
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
                    <FieldLabel htmlFor="form-c-email">
                      Email Address <span aria-hidden="true">*</span>
                      <span className="sr-only">(required)</span>
                    </FieldLabel>
                    <Input
                      id="form-c-email"
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
                    <FieldLabel htmlFor="form-c-phone">
                      Phone<span aria-hidden="true">*</span>
                      <span className="sr-only">(required)</span>
                    </FieldLabel>
                    <PhoneInput
                      id="form-c-phone"
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
                    <FieldLabel htmlFor="form-c-subject">Subject</FieldLabel>
                    <Input
                      id="form-c-subject"
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
                  <FieldLabel htmlFor="form-c-message">
                    Message <span aria-hidden="true">*</span>
                    <span className="sr-only">(required)</span>
                  </FieldLabel>
                  <Textarea
                    id="form-c-message"
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

            <Turnstile
              siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? ""}
              onSuccess={setTurnstileToken}
              onExpire={() => setTurnstileToken(null)}
              onError={() => setTurnstileToken(null)}
              options={{ theme: "light" }}
            />

            <Button
              type="submit"
              size="xl"
              disabled={isSubmitting || !turnstileToken}
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

          {modal && (
            <Modal
              variant={modal.variant}
              name={modal.name}
              onClose={() => setModal(null)}
              duration={2500}
            />
          )}
        </div>

        {/* Right — office card */}
        <OfficeCardAside />
      </Container>
    </Section>
  );
}

export { ContactFormSection };
