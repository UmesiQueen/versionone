import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type FeatureRowChip = {
  tag: string;
  value: string;
};

type FeatureRowProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  chips: FeatureRowChip[];
  bullets: string[];
  whoItsFor?: string;
  headingId: string;
};

function FeatureRow({
  id,
  eyebrow,
  title,
  description,
  chips,
  bullets,
  whoItsFor,
  headingId,
}: FeatureRowProps) {
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
              <p className="text-primary text-sm sm:text-base font-semibold">
                {value}
              </p>
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

        {whoItsFor ? (
          <div className="rounded-r-xl border-l-4 border-primary bg-primary/10 p-4">
            <p className="text-sm leading-relaxed text-muted-foreground tracking-wide">
              <span className="font-semibold text-primary">
                Who it&apos;s for:{" "}
              </span>
              {whoItsFor}
            </p>
          </div>
        ) : null}
        <Button
          asChild
          size="xl"
          className="group rounded-full px-5 w-fit mt-3 border border-blue-900/60 bg-linear-to-b from-blue-400 via-blue-500/70 to-blue-950/40 text-white/90 hover:text-white hover:border-blue-900/80 hover:via-blue-600 hover:to-blue-950 hover:shadow-lg transition-colors duration-300 ease-in-out"
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
    </article>
  );
}

export { FeatureRow, type FeatureRowChip, type FeatureRowProps };
