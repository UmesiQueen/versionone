import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type DestinationCardVariant = "overlay" | "detailed";

type CommonProps = {
  country: string;
  flagCode: string;
  image: string;
  imageAlt?: string;
  href: string;
  ariaLabel?: string;
  className?: string;
};

type OverlayProps = CommonProps & {
  variant?: "overlay";
  description?: never;
};

type DetailedProps = CommonProps & {
  variant: "detailed";
  description: string;
};

type DestinationCardProps = OverlayProps | DetailedProps;

function DestinationCard(props: DestinationCardProps) {
  if (props.variant === "detailed") {
    return <DetailedCard {...props} />;
  }
  return <OverlayCard {...props} />;
}

function OverlayCard({
  country,
  flagCode,
  image,
  imageAlt,
  href,
  ariaLabel,
  className,
}: CommonProps) {
  return (
    <Link
      href={href}
      aria-label={
        ariaLabel ?? `Explore travel and immigration options for ${country}`
      }
      className={cn(
        "group relative block aspect-video overflow-hidden rounded-2xl bg-muted shadow-sm outline-none transition-shadow hover:shadow-lg focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className,
      )}
    >
      <Image
        src={image}
        alt={imageAlt ?? ""}
        fill
        sizes="(min-width: 1024px) 280px, (min-width: 640px) 33vw, 50vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-t from-foreground via-foreground/20 to-transparent"
      />
      <span
        aria-hidden="true"
        className="absolute bg-secondary/25 text-white font-semibold w-full h-full inline-flex items-center justify-center gap-1 z-10 transition-opacity delay-75 duration-300 ease-out opacity-0 group-hover:opacity-100"
      >
        Learn more
        <ArrowRight className="size-3.5" />
      </span>
      <div className="absolute bottom-3 left-3 flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-white">
        <Image
          src={`https://flagcdn.com/${flagCode.toLowerCase()}.svg`}
          width={30}
          height={23}
          alt=""
          aria-hidden="true"
          className="h-auto aspect-4/3"
        />
        <span>{country}</span>
      </div>
    </Link>
  );
}

function DetailedCard({
  country,
  flagCode,
  description,
  image,
  imageAlt,
  href,
  ariaLabel,
  className,
}: CommonProps & { description: string }) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel ?? `Learn more about ${country}`}
      className={cn(
        "group flex flex-col gap-3 rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-muted shadow-sm transition-shadow duration-500 hover:shadow-md",
        className,
      )}
    >
      <div className="relative aspect-5/3 w-full overflow-hidden rounded-t-xl bg-muted">
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
            width={30}
            height={23}
            alt=""
            aria-hidden="true"
            className="h-auto aspect-4/3"
          />
          <span>{country}</span>
        </span>
      </div>

      <div className="flex flex-col gap-2 p-4 pt-0">
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

export {
  DestinationCard,
  type DestinationCardProps,
  type DestinationCardVariant,
};
