import { z } from "zod";

export const SERVICE_OPTIONS = [
  "Immigration consultation",
  "Travel & visa support",
  "Study abroad planning",
  "Investment migration",
  "General inquiry",
] as const;

export const TIMELINE_OPTIONS = [
  "As soon as possible",
  "Within 1 month",
  "1–3 months",
  "3–6 months",
  "Just exploring",
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

export type ConsultationFormData = z.infer<typeof consultationSchema>;
