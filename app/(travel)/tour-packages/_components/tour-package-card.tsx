import { Check, Star } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type TourPackageCardProps = {
  title: string;
  duration: string;
  rating: number;
  reviewCount: number;
  highlights: string[];
  price: string;
  image: string;
  imageAlt: string;
  className?: string;
};

function TourPackageCard({
  title,
  duration,
  rating,
  reviewCount,
  highlights,
  price,
  image,
  imageAlt,
  className,
}: TourPackageCardProps) {
  // Round down to fill solid stars; remaining stars are rendered with
  // muted opacity so the rough rating reads at a glance.
  const filledStars = Math.max(0, Math.min(5, Math.floor(rating)));

  return (
    <div
      className={cn(
        "group flex w-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className,
      )}
    >
      <div className="relative aspect-4/3 w-full overflow-hidden bg-muted">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-md bg-foreground/70 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
          {duration}
        </span>
      </div>

      <div className="flex flex-col gap-3 px-5 py-5">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, i) => {
            const key = `star-${i}`;
            return (
              <Star
                key={key}
                className={cn(
                  "size-4",
                  i < filledStars
                    ? "fill-secondary text-secondary"
                    : "fill-muted text-muted-foreground/40",
                )}
              />
            );
          })}
          <span className="ml-1 text-xs font-medium text-foreground">
            {rating.toFixed(1)}
          </span>
          <span className="text-xs text-muted-foreground">({reviewCount})</span>
        </div>

        <h3 className="text-lg font-semibold leading-snug text-foreground">
          {title}
        </h3>

        <ul className="flex flex-col gap-1.5">
          {highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex items-start gap-2 text-sm text-foreground/80"
            >
              <Check
                aria-hidden="true"
                className="mt-0.5 size-4 shrink-0 text-secondary"
              />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="mt-2 flex items-baseline gap-1.5 border-t border-border pt-3">
          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
            From
          </span>
          <span className="text-xl font-bold text-brand-light-blue">
            {price}
          </span>
        </div>
      </div>
    </div>
  );
}

export { TourPackageCard, type TourPackageCardProps };
