import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type ServiceFeatureRowProps = {
  /** Stable id used as the anchor target for scroll-spy / hash links. */
  id?: string;
  /** Eyebrow chip, e.g. "Service 01: Consultation". */
  eyebrow: string;
  title: string;
  description: string;
  /** Three short meta-info chips rendered above the bullet list. */
  chips: { tag: "format" | "duration" | "follow-up"; value: string }[];
  /** Short, scannable highlight bullets. */
  bullets: string[];
  /** id used by aria-labelledby on the row. The heading carries the same id. */
  headingId: string;
};

/**
 * ServiceFeatureRow
 * Image + content row used in the services list. Layout alternates
 * left/right via the `reverse` prop. Each row is an <article> labelled
 * by its own heading id so screen readers can navigate between services.
 *
 * Notes
 * - `chips` is typed as a 3-tuple so the design's three-up info row is
 *   structurally enforced.
 * - The CTA renders with the same gradient pill treatment used elsewhere
 *   on the site for primary actions.
 */
function ServiceFeatureRow({
  id,
  eyebrow,
  title,
  description,
  chips,
  bullets,
  headingId,
}: ServiceFeatureRowProps) {
  return (
    <article
      id={id}
      aria-labelledby={headingId}
      className="scroll-mt-28 w-full lg:max-w-4xl py-8 sm:p-10 lg:px-10 lg:pt-0 lg:py-26"
    >
      <div className="flex flex-col gap-5">
        <span className="inline-flex w-fit items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-secondary">
          <span aria-hidden="true" className="h-px w-6 bg-secondary/90" />
          {eyebrow}
        </span>

        <h3
          id={headingId}
          className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
        >
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          {description}
        </p>

        <ul className="w-full grid grid-cols-3 items-end p-5 gap-2 bg-primary/10 rounded-xl border border-primary/20">
          {chips.map(({ tag, value }) => (
            <li key={tag}>
              <p className="text-primary text-sm sm:text-base font-semibold">{value}</p>
              <p className="uppercase text-muted-foreground/90 text-xs tracking-wide">
                {tag}
              </p>
            </li>
          ))}
        </ul>

        <ul className="flex flex-col gap-2">
          {bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex items-start gap-2 text-sm text-foreground/80"
            >
              <Check
                aria-hidden="true"
                className="mt-0.5 size-4 shrink-0 text-secondary"
              />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="rounded-r-xl border-l-4 border-primary bg-primary/10 p-4">
          <p className="text-sm leading-relaxed text-muted-foreground tracking-wide">
            <span className="font-semibold text-primary">
              Who it&apos;s for:{" "}
            </span>
            Anyone starting their journey, unsure of their options, or stuck at
            a difficult decision point.
          </p>
        </div>

        <div className="group rounded-full w-fit mt-3 bg-[#004E99]/40 hover:bg-white/20 transition-colors duration-300 ease-in-out">
          <Button
            asChild
            size="xl"
            className="rounded-full px-5 bg-linear-to-b from-[#004E99]/60 to-[#004E99] text-white group-hover:to-blue-950/80 transition-colors duration-300 ease-in-out"
          >
            <Link href="/book-consultation">
              Book a Consultation
              <ArrowRight
                aria-hidden="true"
                className="size-4 group-hover:translate-x-1 transition-transform duration-300 ease-in-out"
              />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}

export { ServiceFeatureRow, type ServiceFeatureRowProps };
