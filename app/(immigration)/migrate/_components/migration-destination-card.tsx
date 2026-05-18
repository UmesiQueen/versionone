import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * MigrationDestinationCard
 * Variant of the destination card used on the Migrate page only.
 * Differs from the shared `DestinationCard` in that it shows a description
 * and a "Learn more" affordance beneath the image instead of a single overlay.
 *
 * - The whole card is a single link (the trailing "Learn more →" is purely
 *   decorative so the link target is unambiguous to screen readers).
 * - The flag is decorative; `country` text carries the accessible name.
 */
type MigrationDestinationCardProps = {
  country: string;
  /** ISO-2 country code, e.g. "ca" for Canada — drives the flag image. */
  flagCode: string;
  description: string;
  image: string;
  imageAlt?: string;
  href: string;
  className?: string;
};

function MigrationDestinationCard({
  country,
  flagCode,
  description,
  image,
  imageAlt,
  href,
  className,
}: MigrationDestinationCardProps) {
  return (
    <Link
      href={href}
      aria-label={`Learn more about migration pathways to ${country}`}
      className={cn(
        "group flex flex-col rounded-xl overflow-hidden outline-none border shadow-2xs",
        className,
      )}
    >
      <div className="relative aspect-5/3 w-full bg-muted">
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

      <div className="flex flex-col gap-2 p-5">
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

export { MigrationDestinationCard };
