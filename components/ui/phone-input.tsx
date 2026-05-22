"use client"

import Image from "next/image";
import type * as React from "react";
import { forwardRef } from "react";
import "react-phone-number-input/style.css"
import type { Country } from "react-phone-number-input"
import PhoneInputLib from "react-phone-number-input"
import {
  getCountries,
  getCountryCallingCode,
} from "react-phone-number-input/input";
import en from "react-phone-number-input/locale/en";
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils";


// ── Country Select — flag only ────────────────────────────────────────────────

interface CountrySelectProps {
    value?: Country
    onChange: (country: Country) => void
    disabled?: boolean
    className?: string
}

const CountrySelect = ({
  value,
  onChange,
  disabled,
  className,
}: CountrySelectProps) => (
  <Select
    value={value}
    onValueChange={(val) => onChange(val as Country)}
    disabled={disabled}
  >
    <SelectTrigger
      className={cn("w-fit shrink-0 px-2", className)}
      aria-label="Select country"
    >
      <SelectValue>
        {value && (
          <Image
            src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${value}.svg`}
            alt={en[value] ?? value}
            width={20}
            height={14}
            className="h-3.5 w-5 rounded-xs object-cover"
          />
        )}
      </SelectValue>
    </SelectTrigger>
    <SelectContent className="max-h-64">
      {getCountries().map((country) => (
        <SelectItem key={country} value={country}>
          <span className="flex items-center gap-2">
            <Image
              src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${country}.svg`}
              alt={en[country] ?? country}
              width={20}
              height={14}
              className="h-3.5 w-5 rounded-xs object-cover"
            />
            <span>{en[country]}</span>
            <span className="ml-auto text-muted-foreground">
              +{getCountryCallingCode(country)}
            </span>
          </span>
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
);

// ── Custom Input — stable ref, outside component ──────────────────────────────

const PhoneNumberInput = forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
    ({ className, ...rest }, ref) => (
        <Input ref={ref} {...rest} className={cn("flex-1", className)} />
    )
)
PhoneNumberInput.displayName = "PhoneNumberInput"

// ── Phone Input ───────────────────────────────────────────────────────────────

interface PhoneInputProps {
    value?: string
    onChange?: (value: string | undefined) => void
    className?: string
    inputClassName?: string
    selectClassName?: string
    disabled?: boolean
    "aria-invalid"?: boolean
}

const PhoneInput = ({
    value,
    onChange,
    className,
    selectClassName,
    disabled,
    "aria-invalid": ariaInvalid,
}: PhoneInputProps) => (
    <PhoneInputLib
        international
        defaultCountry="NG"
        countryCallingCodeEditable={false}
        value={value as string}
        onChange={(val) => onChange?.(val as string | undefined)}
        disabled={disabled}
        aria-invalid={ariaInvalid}
        className={cn("flex gap-2", className)}
        inputComponent={PhoneNumberInput}
        countrySelectComponent={({
            value: country,
            onChange: onCountryChange,
            disabled: countryDisabled,
        }) => (
            <CountrySelect
                value={country}
                onChange={onCountryChange}
                disabled={countryDisabled}
                className={selectClassName}
            />
        )}
    />
)

export default PhoneInput