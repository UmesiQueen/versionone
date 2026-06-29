import { getNames } from "country-list";
import { z } from "zod";

export const COUNTRY_LIST = getNames();

export const SERVICE_OPTIONS = [
  "Work visa",
  "Study visa",
  "Family / dependant visa",
  "Tourist / visitor visa",
  "Residency by investment",
  "Citizenship by investment",
  "Not sure yet",
  "Other"
] as const;

export const DESTINATION_OPTIONS = [
  "United Kingdom",
  "Canada",
  "United States",
  "Australia",
  "Schengen Area",
  "United Arab Emirates",
  "Other",
] as const;

export const bookingSchema = z.object({
  fullName: z.string().trim().min(2, "Full name is required").max(100, "Name is too long"),
  nationality: z.string()
    .refine((val) => COUNTRY_LIST.includes(val as typeof DESTINATION_OPTIONS[number]), {
      message: "Please select your nationality",
    }),
  email: z.email("Invalid email address").max(254, "Email is too long"),
  phone: z.string("Invalid phone number").trim().min(5, "Phone number is required").max(20, "Phone number is too long"),
  destination: z
    .string()
    .refine((val) => DESTINATION_OPTIONS.includes(val as typeof DESTINATION_OPTIONS[number]), {
      message: "Please select a destination country",
    }),
  service: z
    .string()
    .refine((val) => SERVICE_OPTIONS.includes(val as typeof SERVICE_OPTIONS[number]), {
      message: "Please select a service type",
    }),
  additionalInformation: z.string().trim().max(2000, "Message is too long").optional(),
})

export type BookingFormData = z.infer<typeof bookingSchema>
