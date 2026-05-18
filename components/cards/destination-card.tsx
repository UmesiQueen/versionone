import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * DestinationCard
 * Used 8x in the "Where Would You Like to Go?" grid.
 * Image background + flag + country name overlay.
 */
type DestinationCardProps = {
  country: string;
  image: string;
  imageAlt?: string;
  /** ISO-2 country code, e.g. "ca" for Canada — drives the flag image. */
  flagCode: string;
  href: string;
  className?: string;
};

function DestinationCard({
  country,
  image,
  imageAlt,
  flagCode,
  href,
  className,
}: DestinationCardProps) {
  return (
    <Link
      href={href}
      aria-label={`Explore travel and immigration options for ${country}`}
      className={cn(
        "group relative block aspect-video overflow-hidden rounded-2xl bg-muted shadow-sm outline-none transition-shadow hover:shadow-lg focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className,
      )}
    >
      <Image
        src={image}
        alt={imageAlt ?? "destination country"}
        fill
        sizes="(min-width: 1024px) 280px, (min-width: 640px) 33vw, 50vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-t from-foreground via-foreground/20 to-transparent"
      />
      <div className="absolute bottom-3 left-3 flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-white">
        <Image
          src={`https://flagcdn.com/${flagCode.toLowerCase()}.svg`}
          width="30"
          height="20"
          alt={country}
          aria-hidden="true"
        />
        <span>{country}</span>
      </div>
    </Link>
  );
}

export { DestinationCard };
