import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * LocationCard
 * Country-focused destination card with an image, flag chip, short description,
 * and a "Learn more →" affordance. Used on pages that present multiple
 * countries (Migrate, Study Abroad, Work Abroad, etc.).
 *
 * Distinct from `DestinationCard` (which is a single image-with-overlay tile
 * for the homepage grid). Use that for compact image grids; use this when the
 * card needs supporting copy.
 *
 * Notes
 * - The whole card is a single link. The trailing arrow is decorative.
 * - The flag is decorative; `country` text carries the accessible name.
 */
type LocationCardProps = {
  country: string;
  /** ISO-2 country code, e.g. "ca" for Canada — drives the flag image. */
  flagCode: string;
  description: string;
  image: string;
  imageAlt?: string;
  href: string;
  /** Override the default aria-label ("Learn more about {country}"). */
  ariaLabel?: string;
  className?: string;
};

function LocationCard({
  country,
  flagCode,
  description,
  image,
  imageAlt,
  href,
  ariaLabel,
  className,
}: LocationCardProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel ?? `Learn more about ${country}`}
      className={cn(
        "group flex flex-col gap-3 rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className,
      )}
    >
      <div className="relative aspect-5/3 w-full overflow-hidden rounded-xl bg-muted">
        <Image
          src={image}
          alt={imageAlt ?? ""}
          fill
          sizes="(min-width: 1024px) 240px, (min-width: 640px) 33vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-t from-foreground/60 via-foreground/10 to-transparent"
        />
        <span className="absolute bottom-3 left-3 flex items-center gap-2 text-sm font-medium text-white">
          <Image
            src={`https://flagcdn.com/${flagCode.toLowerCase()}.svg`}
            width={22}
            height={16}
            alt=""
            aria-hidden="true"
            className="h-4 w-auto rounded-xs shadow-sm"
          />
          <span>{country}</span>
        </span>
      </div>

      <div className="flex flex-col gap-2 px-1">
        <p className="text-sm text-muted-foreground leading-snug">
          {description}
        </p>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-brand-light-blue transition-colors group-hover:text-primary">
          Learn more
          <ArrowRight
            aria-hidden="true"
            className="size-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  );
}

export { LocationCard };
