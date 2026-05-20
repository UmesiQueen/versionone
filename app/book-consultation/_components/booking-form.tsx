"use client"

// biome-ignore assist/source/organizeImports: <explanation>
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { type BookingFormData, bookingSchema, DESTINATION_OPTIONS, SERVICE_OPTIONS } from "@/lib/booking"
import { useForm, Controller, type SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"

const BookingForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: { errors, isSubmitting },
    } = useForm<BookingFormData>({
        resolver: zodResolver(bookingSchema),
    })

    const onSubmit: SubmitHandler<BookingFormData> = async (data) => {
        try {
            const response = await fetch(
                `https://formspree.io/f/${process.env.NEXT_PUBLIC_CONTACT_FORMSPREE_ID}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify(data),
                }
            )

            if (response.ok) {
                toast.success("Your message has been sent successfully!")
                reset()
                window.location.href = "https://calendly.com/your-username/meeting"
            } else {
                throw new Error("Failed to send message")
            }
        } catch (error) {
            console.error("Form submission error:", error)
            toast.error("Something went wrong. Please try again later.")
        }
    }

    return (
        <form
            aria-label="Book a free consultation"
            className="flex flex-col gap-6 rounded-2xl border border-border bg-primary/5 p-6 sm:p-10 [&_input,textarea]:placeholder:text-muted-foreground/60"
            onSubmit={handleSubmit(onSubmit)}
        >
            {/* Personal Details */}
            <fieldset className="flex flex-col gap-4">
                <legend className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground/60 mb-5">
                    Personal Details
                </legend>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                        <Label
                            htmlFor="bc-full-name"
                            className="text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground"
                        >
                            Full Name <span aria-hidden="true">*</span>
                            <span className="sr-only">(required)</span>
                        </Label>
                        <Input
                            id="bc-full-name"
                            placeholder="Your full name"
                            autoComplete="name"
                            aria-invalid={!!errors.fullName}
                            {...register("fullName")}
                        />
                        {errors.fullName && (
                            <p className="text-xs text-destructive">{errors.fullName.message}</p>
                        )}
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <Label
                            htmlFor="bc-nationality"
                            className="text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground"
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
                            <p className="text-xs text-destructive">{errors.nationality.message}</p>
                        )}
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <Label
                            htmlFor="bc-email"
                            className="text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground"
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
                            <p className="text-xs text-destructive">{errors.email.message}</p>
                        )}
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <Label
                            htmlFor="bc-phone"
                            className="text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground"
                        >
                            Phone / WhatsApp <span aria-hidden="true">*</span>
                            <span className="sr-only">(required)</span>
                        </Label>
                        <Input
                            id="bc-phone"
                            type="tel"
                            placeholder="+44 7000 000000"
                            autoComplete="tel"
                            aria-invalid={!!errors.phone}
                            {...register("phone")}
                        />
                        {errors.phone && (
                            <p className="text-xs text-destructive">{errors.phone.message}</p>
                        )}
                    </div>
                </div>
            </fieldset>

            <hr className="border-primary/10" />

            {/* Immigration Needs */}
            <fieldset className="flex flex-col gap-4">
                <legend className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground/60 mb-5">
                    Your Immigration Needs
                </legend>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                        <Label
                            htmlFor="bc-destination"
                            className="text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground"
                        >
                            Destination Country <span aria-hidden="true">*</span>
                            <span className="sr-only">(required)</span>
                        </Label>
                        <Controller
                            control={control}
                            name="destination"
                            render={({ field }) => (
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <SelectTrigger id="bc-destination" aria-invalid={!!errors.destination}>
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {DESTINATION_OPTIONS.map((option) => (
                                            <SelectItem key={option} value={option}>
                                                {option}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            )}
                        />
                        {errors.destination && (
                            <p className="text-xs text-destructive">{errors.destination.message}</p>
                        )}
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <Label
                            htmlFor="bc-service"
                            className="text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground"
                        >
                            Visa / Service Type <span aria-hidden="true">*</span>
                            <span className="sr-only">(required)</span>
                        </Label>
                        <Controller
                            control={control}
                            name="service"
                            render={({ field }) => (
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <SelectTrigger id="bc-service" aria-invalid={!!errors.service}>
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {SERVICE_OPTIONS.map((option) => (
                                            <SelectItem key={option} value={option}>
                                                {option}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            )}
                        />
                        {errors.service && (
                            <p className="text-xs text-destructive">{errors.service.message}</p>
                        )}
                    </div>
                </div>
            </fieldset>

            <hr className="border-primary/10" />

            <div className="flex flex-col gap-1.5">
                <Label
                    htmlFor="bc-additional"
                    className="text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground"
                >
                    Additional Information
                </Label>
                <Textarea
                    id="bc-additional"
                    placeholder="Tell us more about your situation — employment, family circumstances, previous visa history, or anything else relevant to your case…"
                    rows={4}
                    className="min-h-28"
                    aria-invalid={!!errors.additionalInformation}
                    {...register("additionalInformation")}
                />
                {errors.additionalInformation && (
                    <p className="text-xs text-destructive">{errors.additionalInformation.message}</p>
                )}
            </div>

            <Button
                type="submit"
                size="xl"
                disabled={isSubmitting}
                className="mt-2 w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
                {isSubmitting ? "Submitting..." : "Book a Consultation"}
                <ArrowRight aria-hidden="true" className="ml-1" />
            </Button>
        </form>
    )
}

export default BookingForm