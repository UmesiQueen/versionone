import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";

import { Container } from "@/components/layout/section";
import { SectionEyebrow } from "@/components/layout/section-heading";
import { cn } from "@/lib/utils";

type PageHeroHeight = "full" | "part";

const HEIGHT_CLASSES: Record<PageHeroHeight, string> = {
  full: "min-h-160 lg:h-screen",
  part: "min-h-112 sm:min-h-128 lg:min-h-144",
};

type PageHeroProps = {
  /** Background image — accepts an imported static asset or a remote URL string. */
  image: StaticImageData | string;
  /** Alt text. Leave empty (default) when the image is purely decorative. */
  imageAlt?: string;
  /** Small uppercase label rendered above the heading. */
  eyebrow?: string;
  /** Heading content. Pass <br /> for explicit line breaks. */
  heading: ReactNode;
  /** Supporting paragraph rendered below the heading. */
  description?: ReactNode;
  /** Stable id used for aria-labelledby. Defaults to "page-hero-heading". */
  headingId?: string;
  /** Optional content rendered after the description (e.g. CTA buttons). */
  actions?: ReactNode;
  /**
   * Vertical size of the hero.
   * - "full" (default): fills the viewport on desktop (lg:h-screen) with a ~640px floor on smaller screens.
   * - "part": banner-style hero, ~448–576px tall, never fills the viewport.
   */
  height?: PageHeroHeight;
  /** Additional classes for the outer <section>. */
  className?: string;
  /** Additional classes for the inner <Container> — tune min-height/padding per page. */
  containerClassName?: string;
};

function PageHero({
  image,
  imageAlt = "",
  eyebrow,
  heading,
  description,
  headingId = "page-hero-heading",
  actions,
  height = "full",
  className,
  containerClassName,
}: PageHeroProps) {
  return (
    <section
      aria-labelledby={headingId}
      className={cn(
        "relative isolate overflow-hidden bg-brand-navy text-brand-navy-foreground",
        className,
      )}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-125 from-[#0B1F3A]/75 via-[#0B1F3A]/60 to-[#0B1F3A]/35"
      />

      <Container
        className={cn(
          "relative flex flex-col justify-center py-20 sm:py-24 lg:py-28",
          HEIGHT_CLASSES[height],
          containerClassName,
        )}
      >
        <div className="flex max-w-2xl flex-col gap-5">
          {eyebrow ? <SectionEyebrow>{eyebrow}</SectionEyebrow> : null}
          <h1
            id={headingId}
            className="text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            {heading}
          </h1>
          {description ? (
            <p className="max-w-xl text-base text-brand-navy-foreground/80 sm:text-lg">
              {description}
            </p>
          ) : null}
          {actions ? <div className="mt-2">{actions}</div> : null}
        </div>
      </Container>
    </section>
  );
}

export { PageHero };
