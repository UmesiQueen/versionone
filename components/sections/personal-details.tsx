"use client"

// biome-ignore assist/source/organizeImports: <explanation>
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Button } from '../ui/button'
import { type SubmitHandler, useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { type ConsultationFormData, consultationSchema, SERVICE_OPTIONS, TIMELINE_OPTIONS } from '@/lib/booking'

const PersonalDetails = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<ConsultationFormData>({
    resolver: zodResolver(consultationSchema),
  })

  const onSubmit: SubmitHandler<ConsultationFormData> = (data) => {
    console.log(data)
  }

  return (
    <form
      aria-label="Free consultation request"
      className="flex flex-col gap-5 sm:rounded-2xl bg-secondary p-6 pb-16 sm:pb-6 text-primary-foreground sm:p-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary-foreground/80">
        Personal details
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <Label
            htmlFor="first-name"
            className="text-xs font-medium uppercase tracking-[0.08em] text-primary-foreground/80"
          >
            First name
          </Label>
          <Input
            id="first-name"
            placeholder="Your first name"
            autoComplete="given-name"
            aria-invalid={!!errors.firstName}
            {...register("firstName")}
          />
          {errors.firstName && (
            <p className="text-xs text-destructive">{errors.firstName.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <Label
            htmlFor="last-name"
            className="text-xs font-medium uppercase tracking-[0.08em] text-primary-foreground/80"
          >
            Last name
          </Label>
          <Input
            id="last-name"
            placeholder="Your last name"
            autoComplete="family-name"
            aria-invalid={!!errors.lastName}
            {...register("lastName")}
          />
          {errors.lastName && (
            <p className="text-xs text-destructive">{errors.lastName.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <Label
            htmlFor="email"
            className="text-xs font-medium uppercase tracking-[0.08em] text-primary-foreground/80"
          >
            Email address
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
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
            htmlFor="phone"
            className="text-xs font-medium uppercase tracking-[0.08em] text-primary-foreground/80"
          >
            Phone number
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+1 (555) 123-4567"
            autoComplete="tel"
            aria-invalid={!!errors.phone}
            {...register("phone")}
          />
          {errors.phone && (
            <p className="text-xs text-destructive">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-primary-foreground/80">
        Your consultation type
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <Label
            htmlFor="service"
            className="text-xs font-medium uppercase tracking-[0.08em] text-primary-foreground/80"
          >
            Select a service
          </Label>
          <Controller
            control={control}
            name="service"
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger id="service" aria-invalid={!!errors.service}>
                  <SelectValue placeholder="Choose a service" />
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

        <div className="flex flex-col gap-1.5">
          <Label
            htmlFor="timeline"
            className="text-xs font-medium uppercase tracking-[0.08em] text-primary-foreground/80"
          >
            Preferred timeline
          </Label>
          <Controller
            control={control}
            name="timeline"
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger id="timeline" aria-invalid={!!errors.timeline}>
                  <SelectValue placeholder="Select a timeline" />
                </SelectTrigger>
                <SelectContent>
                  {TIMELINE_OPTIONS.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.timeline && (
            <p className="text-xs text-destructive">{errors.timeline.message}</p>
          )}
        </div>
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="mt-3 w-full rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
      >
        {isSubmitting ? "Submitting..." : "Book a Consultation"}
      </Button>
    </form>
  )
}

export default PersonalDetails