"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Controller, type SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PhoneInput from "@/components/ui/phone-input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SuccessModal from "@/components/ui/success-modal";
import { Textarea } from "@/components/ui/textarea";
import {
  type BookingFormData,
  bookingSchema,
  DESTINATION_OPTIONS,
  SERVICE_OPTIONS,
} from "@/lib/booking";
import { cn } from "@/lib/utils";

const FORM_SPREE_ID = process.env.NEXT_PUBLIC_CONTACT_FORMSPREE_ID;
const CALENDLY_URL = "https://calendly.com/aguhenrychuks/30min";

interface BookingFormProps {
  tone?: "default" | "invert";
}

const BookingForm = ({ tone = "default" }: BookingFormProps) => {
  const [modal, setModal] = useState<{
    open: boolean;
    name?: string;
    calendlyUrl?: string;
  }>({ open: false });

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      fullName: "",
      nationality: "",
      email: "",
      phone: "",
      destination: "",
      service: "",
    },
  });

  const buildCalendlyUrl = (data: BookingFormData) => {
    const url = new URL(CALENDLY_URL);

    url.searchParams.set("name", data.fullName);
    url.searchParams.set("email", data.email);

    const parts = [
      data.nationality && `I am from ${data.nationality.toUpperCase()}`,
      data.destination &&
        `looking to travel to ${data.destination.toUpperCase()}`,
      data.service && `I need ${data.service.toUpperCase()} assistance`,
      data.phone && `Reach me on: ${data.phone}`,
    ]
      .filter(Boolean)
      .join(", ");

    const summary = parts ? `${parts}.` : "";
    const withNotes = data.additionalInformation
      ? `${summary} Additional info: ${data.additionalInformation}`
      : summary;

    if (withNotes) url.searchParams.set("a1", withNotes);

    return url.toString();
  };

  const formatData = (data: BookingFormData) => {
    return {
      Client_Name: data.fullName,
      Client_Nationality: data.nationality,
      Client_Email: data.email,
      Client_Phone: data.phone,
      Destination: data.destination,
      Service_Type: data.service,
      ...(data.additionalInformation && {
        More_Information: data.additionalInformation,
      }),
    };
  };

  const onSubmit: SubmitHandler<BookingFormData> = async (data) => {
    const formattedData = formatData(data);

    try {
      const response = await fetch(`https://formspree.io/f/${FORM_SPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formattedData),
      });

      if (response.ok) {
        const fullCalendlyUrl = buildCalendlyUrl(data);
        setModal({
          open: true,
          name: data.fullName,
          calendlyUrl: fullCalendlyUrl,
        });
        reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast.error("Request failed. Please try again", {
        style: {
          background: "#f66d6f",
          color: "#7d0507",
          borderColor: "#f66d6f",
        },
      });
      console.error("Form submission error:", error);
    }
  };

  return (
    <>
      <SuccessModal
        open={modal.open}
        name={modal.name}
        calendlyUrl={modal.calendlyUrl}
        onClose={() => setModal({ open: false })}
      />

      <form
        aria-label="Book a free consultation"
        className={cn(
          "flex flex-col gap-6 sm:rounded-2xl border border-border bg-primary/5 px-6 py-14 sm:p-10 [&_input,textarea]:placeholder:text-muted-foreground/60",
          { "bg-secondary border-none": tone === "invert" },
        )}
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Personal Details */}
        <fieldset className="flex flex-col gap-4">
          <legend
            className={cn(
              "text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground/60 mb-5",
              { "text-white/80": tone === "invert" },
            )}
          >
            Personal Details
          </legend>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <Label
                htmlFor="bc-full-name"
                className={cn(
                  "text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground",
                  { "text-muted": tone === "invert" },
                )}
              >
                Full Name <span aria-hidden="true">*</span>
                <span className="sr-only">(required)</span>
              </Label>
              <Input
                id="bc-full-name"
                placeholder="Jane Doe"
                autoComplete="name"
                aria-invalid={!!errors.fullName}
                {...register("fullName")}
              />
              {errors.fullName && (
                <p className="text-xs text-destructive">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <Label
                htmlFor="bc-nationality"
                className={cn(
                  "text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground",
                  { "text-muted": tone === "invert" },
                )}
              >
                Nationality <span aria-hidden="true">*</span>
                <span className="sr-only">(required)</span>
              </Label>
              <Input
                id="bc-nationality"
                placeholder="e.g. Nigerian, Ghanaian"
                autoComplete="country-name"
                aria-invalid={!!errors.nationality}
                {...register("nationality")}
              />
              {errors.nationality && (
                <p className="text-xs text-destructive">
                  {errors.nationality.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <Label
                htmlFor="bc-email"
                className={cn(
                  "text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground",
                  { "text-muted": tone === "invert" },
                )}
              >
                Email Address <span aria-hidden="true">*</span>
                <span className="sr-only">(required)</span>
              </Label>
              <Input
                id="bc-email"
                type="email"
                placeholder="your@email.com"
                autoComplete="email"
                aria-invalid={!!errors.email}
                {...register("email")}
              />
              {errors.email && (
                <p className="text-xs text-destructive">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <Label
                htmlFor="bc-phone"
                className={cn(
                  "text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground",
                  { "text-muted": tone === "invert" },
                )}
              >
                Phone / WhatsApp <span aria-hidden="true">*</span>
                <span className="sr-only">(required)</span>
              </Label>
              <Controller
                control={control}
                name="phone"
                render={({ field }) => (
                  <PhoneInput
                    value={field.value}
                    onChange={field.onChange}
                    aria-invalid={!!errors.phone}
                  />
                )}
              />
              {errors.phone && (
                <p className="text-xs text-destructive">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>
        </fieldset>

        <hr className="border-primary/10" />

        {/* Immigration Needs */}
        <fieldset className="flex flex-col gap-4">
          <legend
            className={cn(
              "text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground/60 mb-5",
              { "text-white/80": tone === "invert" },
            )}
          >
            Your Immigration Needs
          </legend>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <Label
                htmlFor="bc-destination"
                className={cn(
                  "text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground",
                  { "text-muted": tone === "invert" },
                )}
              >
                Destination Country <span aria-hidden="true">*</span>
                <span className="sr-only">(required)</span>
              </Label>
              <Controller
                control={control}
                name="destination"
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger
                      id="bc-destination"
                      aria-invalid={!!errors.destination}
                      className="text-base"
                    >
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      {DESTINATION_OPTIONS.map((option) => (
                        <SelectItem
                          key={option}
                          value={option}
                          className="text-base"
                        >
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.destination && (
                <p className="text-xs text-destructive">
                  {errors.destination.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <Label
                htmlFor="bc-service"
                className={cn(
                  "text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground",
                  { "text-muted": tone === "invert" },
                )}
              >
                Visa / Service Type <span aria-hidden="true">*</span>
                <span className="sr-only">(required)</span>
              </Label>
              <Controller
                control={control}
                name="service"
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger
                      id="bc-service"
                      aria-invalid={!!errors.service}
                      className="text-base"
                    >
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      {SERVICE_OPTIONS.map((option) => (
                        <SelectItem
                          key={option}
                          value={option}
                          className="text-base"
                        >
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.service && (
                <p className="text-xs text-destructive">
                  {errors.service.message}
                </p>
              )}
            </div>
          </div>
        </fieldset>

        <hr className="border-primary/10" />

        <div className="flex flex-col gap-1.5">
          <Label
            htmlFor="bc-additional"
            className={cn(
              "text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground",
              { "text-muted": tone === "invert" },
            )}
          >
            Additional Information
          </Label>
          <Textarea
            id="bc-additional"
            placeholder="Tell us more about your situation — employment, family circumstances, previous visa history, or anything else relevant to your case…"
            rows={4}
            aria-invalid={!!errors.additionalInformation}
            className="min-h-28"
            {...register("additionalInformation")}
          />
          {errors.additionalInformation && (
            <p className="text-xs text-destructive">
              {errors.additionalInformation.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          size="xl"
          disabled={isSubmitting}
          className="mt-2 h-12 w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
        >
          {isSubmitting ? (
            "Submitting..."
          ) : (
            <>
              {"Book a Consultation"}
              <ArrowRight aria-hidden="true" className="ml-1" />
            </>
          )}
        </Button>
      </form>
    </>
  );
};

export default BookingForm;
