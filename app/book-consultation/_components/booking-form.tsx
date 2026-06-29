"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Controller, type SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Modal from "@/components/ui/modal";
import PhoneInput from "@/components/ui/phone-input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  type BookingFormData,
  bookingSchema,
  COUNTRY_LIST,
  DESTINATION_OPTIONS,
  SERVICE_OPTIONS,
} from "@/lib/booking";
import { cn } from "@/lib/utils";

const CALENDLY_URL = "https://calendly.com/queenumesi01/30min";

// const CALENDLY_URL =
//   "https://calendly.com/versiononetravels/book-appointment-with-us";

const buildCalendlyUrl = (data: BookingFormData) => {
  const url = new URL(CALENDLY_URL);

  url.searchParams.set("name", data.fullName);
  url.searchParams.set("email", data.email);

  const parts = [
    data.nationality && `I am from ${data.nationality.toUpperCase()}`,
    data.destination &&
      `looking to travel to ${data.destination.toUpperCase()}`,
    data.service && `I need ${data.service.toUpperCase()} assistance`,
    data.phone && `Phone: ${data.phone}`,
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
    client_name: data.fullName,
    client_nationality: data.nationality,
    client_phone: data.phone,
    destination: data.destination,
    service_type: data.service,
    more_information:
      data.additionalInformation ?? "No additional information provided.",
  };
};
interface BookingFormProps {
  tone?: "default" | "invert";
}

const BookingForm = ({ tone = "default" }: BookingFormProps) => {
  const [modal, setModal] = useState<{
    variant: "success" | "error";
    name?: string;
    calendlyUrl?: string;
  } | null>(null);

  const {
    handleSubmit,
    reset,
    control,
    formState: { isSubmitting },
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

  const onSubmit: SubmitHandler<BookingFormData> = async (data) => {
    const formattedData = formatData(data);
    const calendly_url = buildCalendlyUrl(data);

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          variables: { ...formattedData, calendly_url },
        }),
      });

      if (!response.ok) throw new Error("Failed to create booking request.");

      setModal({
        variant: "success",
        name: data.fullName,
        calendlyUrl: calendly_url,
      });
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
      setModal({ variant: "error", name: data.fullName });
    }
  };

  return (
    <>
      {modal && (
        <Modal
          variant={modal.variant}
          name={modal.name}
          calendlyUrl={modal.calendlyUrl}
          onClose={() => setModal(null)}
        />
      )}

      <form
        id="form-bc"
        aria-label="Book a free consultation"
        className={cn(
          "flex flex-col gap-6 sm:rounded-2xl border border-border bg-primary/5 px-6 py-14 sm:p-10 [&_input,textarea]:placeholder:text-muted-foreground/60",
          { "bg-secondary border-none": tone === "invert" },
        )}
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Personal Details */}
        <FieldSet className="flex flex-col gap-4">
          <FieldLegend
            className={cn(
              "text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground/60 mb-5",
              { "text-white/80": tone === "invert" },
            )}
          >
            Personal Details
          </FieldLegend>

          <FieldGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Controller
              name="fullName"
              control={control}
              render={({ field, fieldState }) => (
                <Field className="flex flex-col gap-1.5">
                  <FieldLabel
                    htmlFor="form-bc-full-name"
                    className={cn(
                      "text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground",
                      { "text-muted": tone === "invert" },
                    )}
                  >
                    Full Name <span aria-hidden="true">*</span>
                    <span className="sr-only">(required)</span>
                  </FieldLabel>
                  <Input
                    id="form-bc-full-name"
                    placeholder="Jane Doe"
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
              name="nationality"
              control={control}
              render={({ field, fieldState }) => {
                const selectedCountry = COUNTRY_LIST.find(
                  (lang: string) => lang === field.value,
                );
                return (
                  <Field className="flex flex-col gap-1.5">
                    <FieldLabel
                      htmlFor="form-bc-nationality"
                      className={cn(
                        "text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground",
                        { "text-muted": tone === "invert" },
                      )}
                    >
                      Nationality <span aria-hidden="true">*</span>
                      <span className="sr-only">(required)</span>
                    </FieldLabel>
                    <Combobox
                      items={COUNTRY_LIST}
                      itemToStringValue={(country) => country}
                      value={selectedCountry ?? null}
                      onValueChange={(item) => {
                        field.onChange(item ?? "");
                      }}
                    >
                      <ComboboxInput
                        id="form-bc-nationality"
                        placeholder="Select nationality..."
                        aria-invalid={fieldState.invalid}
                        className="overflow-hidden h-10 bg-white"
                        showClear
                        {...field}
                      />
                      <ComboboxContent>
                        <ComboboxEmpty>Country not found.</ComboboxEmpty>
                        <ComboboxList>
                          {(item) => (
                            <ComboboxItem key={item} value={item}>
                              {item}
                            </ComboboxItem>
                          )}
                        </ComboboxList>
                      </ComboboxContent>
                    </Combobox>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                );
              }}
            />

            <Controller
              name="email"
              control={control}
              render={({ field, fieldState }) => (
                <Field className="flex flex-col gap-1.5">
                  <FieldLabel
                    htmlFor="form-bc-email"
                    className={cn(
                      "text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground",
                      { "text-muted": tone === "invert" },
                    )}
                  >
                    Email Address <span aria-hidden="true">*</span>
                    <span className="sr-only">(required)</span>
                  </FieldLabel>
                  <Input
                    id="form-bc-email"
                    type="email"
                    placeholder="your@email.com"
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
                  <FieldLabel
                    htmlFor="form-bc-phone"
                    className={cn(
                      "text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground",
                      { "text-muted": tone === "invert" },
                    )}
                  >
                    Phone / WhatsApp <span aria-hidden="true">*</span>
                    <span className="sr-only">(required)</span>
                  </FieldLabel>
                  <PhoneInput
                    id="form-bc-phone"
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
        </FieldSet>

        <FieldSeparator />

        {/* Immigration Needs */}
        <FieldSet className="flex flex-col gap-4">
          <FieldLegend
            className={cn(
              "text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground/60 mb-5",
              { "text-white/80": tone === "invert" },
            )}
          >
            Your Immigration Needs
          </FieldLegend>

          <FieldGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Controller
              name="destination"
              control={control}
              render={({ field, fieldState }) => (
                <Field className="flex flex-col gap-1.5">
                  <FieldLabel
                    htmlFor="form-bc-destination"
                    className={cn(
                      "text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground",
                      { "text-muted": tone === "invert" },
                    )}
                  >
                    Destination Country <span aria-hidden="true">*</span>
                    <span className="sr-only">(required)</span>
                  </FieldLabel>

                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger
                      id="form-bc-destination"
                      aria-invalid={fieldState.invalid}
                      {...field}
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
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="service"
              control={control}
              render={({ field, fieldState }) => (
                <Field className="flex flex-col gap-1.5">
                  <FieldLabel
                    htmlFor="form-bc-service"
                    className={cn(
                      "text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground",
                      { "text-muted": tone === "invert" },
                    )}
                  >
                    Visa / Service Type <span aria-hidden="true">*</span>
                    <span className="sr-only">(required)</span>
                  </FieldLabel>

                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger
                      id="form-bc-service"
                      aria-invalid={fieldState.invalid}
                      {...field}
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
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </FieldSet>

        <FieldSeparator />

        <Controller
          name="additionalInformation"
          control={control}
          render={({ field, fieldState }) => (
            <Field className="flex flex-col gap-1.5">
              <FieldLabel
                htmlFor="form-bc-additional"
                className={cn(
                  "text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground",
                  { "text-muted": tone === "invert" },
                )}
              >
                Additional Information
              </FieldLabel>
              <Textarea
                id="form-bc-additional"
                placeholder="Tell us more about your situation — employment, family circumstances, previous visa history, or anything else relevant to your case…"
                aria-invalid={fieldState.invalid}
                {...field}
                rows={4}
                className="min-h-28"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

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
