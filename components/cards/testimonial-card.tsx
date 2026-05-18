import Image from "next/image"

import { cn } from "@/lib/utils"

/**
 * TestimonialCard
 * Used 3x in the "Trusted by Thousands Worldwide" section.
 */
type TestimonialCardProps = {
  quote: string
  authorName: string
  authorRole: string
  authorLocation: string
  avatarSrc: string
  className?: string
}

function TestimonialCard({
  quote,
  authorName,
  authorRole,
  authorLocation,
  avatarSrc,
  className,
}: TestimonialCardProps) {
  return (
    <figure
      className={cn(
        "flex h-full flex-col gap-6 rounded-2xl border border-border bg-card p-6 text-card-foreground",
        className
      )}
    >
      <blockquote className="flex-1 text-pretty text-base leading-relaxed text-foreground">
        <p>&ldquo;{quote}&rdquo;</p>
      </blockquote>
      <figcaption className="flex items-center gap-3">
        <Image
          src={avatarSrc}
          alt={`Photo of ${authorName}`}
          width={40}
          height={40}
          className="size-10 rounded-full object-cover"
          aria-hidden="true"
        />
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-foreground">
            {authorName}
          </span>
          <span className="text-xs text-muted-foreground">
            {authorRole} &middot; {authorLocation}
          </span>
        </div>
      </figcaption>
    </figure>
  )
}

export { TestimonialCard }
