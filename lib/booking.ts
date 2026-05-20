import { Clock, Target, User, Video } from "lucide-react";
import { z } from "zod";

export const SERVICE_OPTIONS = [
  "Work visa",
  "Study visa",
  "Family / dependant visa",
  "Tourist / visitor visa",
  "Residency by investment",
  "Citizenship by investment",
  "Not sure yet",
] as const;

export const TIMELINE_OPTIONS = [
  "As soon as possible",
  "Within 1 month",
  "1–3 months",
  "3–6 months",
  "Just exploring",
] as const;

export const WHAT_TO_EXPECT = [
  { icon: Clock, title: "20–30 minute session" },
  { icon: Video, title: "Virtual or in-person" },
  { icon: User, title: "Led by an experienced advisor" },
  { icon: Target, title: "Tailored to your goals" },
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


export const consultationSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  service: z.enum(SERVICE_OPTIONS, {
    error: () => ({ message: "Please select a service" }),
  }),
  timeline: z.enum(TIMELINE_OPTIONS, {
    error: () => ({ message: "Please select a timeline" }),
  }),
});

export const bookingSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  nationality: z.string().min(2, "Nationality is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(5, "Phone number is required"),
  destination: z.enum(DESTINATION_OPTIONS, {
    error: "Please select a destination country",
  }),
  service: z.enum(SERVICE_OPTIONS, {
    error: "Please select a service type",
  }),
  additionalInformation: z.string().optional(),
})

export type BookingFormData = z.infer<typeof bookingSchema>
export type ConsultationFormData = z.infer<typeof consultationSchema>;
