import { ArrowRight, type LucideIcon } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

/**
 * ServiceCard
 * Used 4x in the "Everything You Need to Move Globally" section.
 * Icon + title + description + "Learn more" link.
 */
type ServiceCardProps = {
  icon: LucideIcon
  title: string
  description: string
  href: string
  className?: string
}

function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  className,
}: ServiceCardProps) {
  return (
    <article
      className={cn(
        "group relative flex flex-col gap-4 rounded-2xl border border-border bg-card px-6 py-8 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-primary/20 hover:shadow-md focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
        className
      )}
    >
      <span
        aria-hidden="true"
        className="inline-flex size-12 items-center justify-center rounded-md bg-primary/10 text-brand-light-blue"
      >
        <Icon className="size-5" />
      </span>
      <div className="flex flex-col gap-2 mt-5">
        <h3 className="text-lg font-semibold leading-tight text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <Link
        href={href}
        className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-primary outline-none after:absolute after:inset-0 after:content-[''] hover:text-primary/80 focus-visible:underline"
      >
        Learn more
        <ArrowRight
          aria-hidden="true"
          className="size-4 transition-transform group-hover:translate-x-0.5"
        />
        <span className="sr-only">about {title}</span>
      </Link>
    </article>
  )
}

export { ServiceCard }
