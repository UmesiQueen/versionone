import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Button } from '../ui/button';


const SERVICE_OPTIONS = [
  "Immigration consultation",
  "Travel & visa support",
  "Study abroad planning",
  "Investment migration",
  "General inquiry",
] as const;

const TIMELINE_OPTIONS = [
  "As soon as possible",
  "Within 1 month",
  "1–3 months",
  "3–6 months",
  "Just exploring",
] as const;

const PersonalDetails = () => {
  return (
        <form
          aria-label="Free consultation request"
          className="flex flex-col gap-5 sm:rounded-2xl bg-secondary p-6 pb-16 sm:pb-6 text-primary-foreground sm:p-8"
          onSubmit={(e) => e.preventDefault()}
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
                name="firstName"
                placeholder="Your first name"
                autoComplete="given-name"
                required
              />
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
                name="lastName"
                placeholder="Your last name"
                autoComplete="family-name"
                required
              />
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
                name="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
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
                name="phone"
                placeholder="+1 (555) 123-4567"
                autoComplete="tel"
              />
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
              <Select name="service">
                <SelectTrigger id="service">
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
            </div>

            <div className="flex flex-col gap-1.5">
              <Label
                htmlFor="timeline"
                className="text-xs font-medium uppercase tracking-[0.08em] text-primary-foreground/80"
              >
                Preferred timeline
              </Label>

              <Select name="timeline">
                <SelectTrigger id="timeline">
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
            </div>
          </div>

          <Button
            type="submit"
            size="lg"
            className="mt-3 w-full rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            Book a Consultation
          </Button>
        </form>
  )
}

export default PersonalDetails
