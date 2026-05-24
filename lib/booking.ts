import { z } from "zod";

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
  fullName: z.string().min(2, "Full name is required"),
  nationality: z.string().min(2, "Nationality is required"),
  email: z.email("Invalid email address"),
  phone: z.string().min(5, "Phone number is required"),
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
  additionalInformation: z.string().optional(),
})

export type BookingFormData = z.infer<typeof bookingSchema>
