import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

/**
 * PathwayCard
 * Used 5x in the "Five Pathways. One Expert Partner." grid.
 * Image background + step number + title + description + tags + Explore button.
 */
type PathwayCardProps = {
  index: number
  /** Eyebrow label, e.g. "PATHWAY HIGHLIGHT" or "WORK VISA". */
  eyebrow: string
  title: string
  description: string
  tags: string[]
  image: string
  imageAlt?: string
  href: string
  className?: string
}

function PathwayCard({
  index,
  eyebrow,
  title,
  description,
  tags,
  image,
  imageAlt,
  href,
  className,
}: PathwayCardProps) {
  const formattedIndex = String(index).padStart(2, "0")

  return (
    <Link
      href={href}
      className={cn(
        "group relative isolate flex min-h-70 flex-col justify-end overflow-hidden rounded-2xl bg-brand-navy text-brand-navy-foreground shadow-sm border hover:border-secondary transition-all duration-300 ease-in-out",
        className,
      )}
    >
      <Image
        src={image}
        alt={imageAlt ?? "visa pathway"}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="-z-10 object-cover opacity-60 transition-transform duration-500 ease-in-out group-hover:scale-105"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-t from-brand-navy via-brand-navy/50 to-brand-navy/10 group-hover:via-brand-navy/20 transition-colors duration-500 ease-in-out"
      />

      <span
        className={cn(
          "absolute top-4 right-5 text-6xl font-bold text-brand-navy-foreground/30 group-hover:text-brand-navy-foreground/50 transition-colors duration-500 ease-in-out",
          {
            "lg:text-9xl": index <= 2,
          },
        )}
        aria-hidden="true"
      >
        {formattedIndex}
      </span>

      <div className="flex flex-col gap-10 p-5 h-full">
        <span className="text-[0.65rem] w-fit py-1 px-3 rounded-full font-semibold uppercase tracking-[0.18em] text-secondary bg-secondary/10 group-hover:bg-secondary/20 transition-colors duration-500 ease-in-out border border-secondary/50 backdrop-blur-md">
          {eyebrow}
        </span>
        <div className="flex flex-col gap-3 mt-auto">
          <h3 className="text-2xl font-bold leading-tight">{title}</h3>
          <p className="text-sm text-brand-navy-foreground/80 w-full lg:max-w-md">
            {description}
          </p>
          {tags.length > 0 ? (
            <ul
              className="flex flex-wrap gap-1.5 pt-1"
              aria-label={`${title} options`}
            >
              {tags.map((tag) => (
                <li key={tag}>
                  <Badge
                    variant="outline"
                    className="py-1 border-brand-navy-foreground/30 bg-white/10 text-brand-navy-foreground/90"
                  >
                    {tag}
                  </Badge>
                </li>
              ))}
            </ul>
          ) : null}
          <div className="mt-3 relative">
            <span className="block h-px w-full bg-white/20" />
            <span className="absolute top-0 left-0 h-px w-0 bg-white/50 group-hover:w-full transition-all duration-500 ease-in-out" />
          </div>
          <div className="flex items-center gap-2 justify-between">
            <p className="text-xs leading-none tracking-wide text-brand-navy-foreground/50 uppercase">
              3 Pathways
            </p>
            <div className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-white/70 group-hover:text-secondary transition-colors duration-500 ease-in-out">
              Explore
              <ArrowRight
                aria-hidden="true"
                className="size-4 group-hover:translate-x-1 transition-transform duration-500 ease-in-out"
              />
              <span className="sr-only">{title}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export { PathwayCard }
