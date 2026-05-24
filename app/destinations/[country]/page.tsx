import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { FinalCtaSection } from "@/components/sections/final-cta";
import {
  DESTINATION_CONTEXTS,
  type DestinationContext,
  formatLabel,
  getAllDestinations,
  getAvailableContexts,
  getContextLabels,
  getDestinationById,
  getOtherDestinationsForContext,
} from "@/lib/destinations";

import { CountryAbout } from "./_components/country-about";
import { CountryAdvantages } from "./_components/country-advantages";
import { CountryBiggerPicture } from "./_components/country-bigger-picture";
import { CountryHero } from "./_components/country-hero";
import { CountryOtherDestinations } from "./_components/country-other-destinations";
import { CountryPathways } from "./_components/country-pathways";

/**
 * Dynamic destination page.
 *
 * Route: /destinations/[country]
 * Optional search param: ?ctx=migrate|study|work|visit
 *
 * - Content is read from `data/destinations.json` via `lib/destinations`.
 * - The `ctx` param selects which copy variant to render. If omitted or
 *   invalid, the page falls back to the first available context for the
 *   country (in canonical order migrate → study → work → visit).
 * - Returns notFound() for an unknown country slug or a country with no
 *   authored content for any context.
 * - Generates static params for every country so the page is fully prerendered.
 */

/** Friendly per-context label used in CTAs and aria-labels (e.g. "studying"). */
const CONTEXT_GERUND: Record<DestinationContext, string> = {
  migrate: "migrating",
  study: "studying",
  work: "working",
  visit: "visiting",
};

type RouteParams = { country: string };
type SearchParams = { ctx?: string };

type PageProps = {
  params: Promise<RouteParams>;
  searchParams: Promise<SearchParams>;
};

function isContext(value: string | undefined): value is DestinationContext {
  return (
    typeof value === "string" &&
    (DESTINATION_CONTEXTS as readonly string[]).includes(value)
  );
}

function resolveContext(
  countryId: string,
  requested: string | undefined,
): DestinationContext | null {
  const available = getAvailableContexts(countryId);
  if (available.length === 0) return null;
  if (isContext(requested) && available.includes(requested)) {
    return requested;
  }
  return available[0];
}

export function generateStaticParams(): RouteParams[] {
  return getAllDestinations().map((destination) => ({
    country: destination.id,
  }));
}

export async function generateMetadata({
  params,
  searchParams,
}: PageProps): Promise<Metadata> {
  const { country: countryId } = await params;
  const { ctx } = await searchParams;
  const destination = getDestinationById(countryId);

  if (!destination) return { title: "Destination not found" };

  const context = resolveContext(countryId, ctx);
  const description = context
    ? destination.descriptions[context]
    : undefined;

  return {
    title: destination.country,
    description:
      description ??
      `Explore travel and immigration options for ${destination.country}.`,
  };
}

export default async function CountryDestinationPage({
  params,
  searchParams,
}: PageProps) {
  const { country: countryId } = await params;
  const { ctx } = await searchParams;

  const destination = getDestinationById(countryId);
  if (!destination) notFound();

  const context = resolveContext(countryId, ctx);
  if (!context) notFound();

  const contextContent = destination.content.contexts[context];
  // Should always exist given resolveContext, but guard for safety.
  if (!contextContent) notFound();

  const labels = getContextLabels(context);
  const { country, image, imageAlt, content } = destination;
  const aboutImage = content.about.image ?? image;
  const aboutImageAlt = content.about.imageAlt ?? imageAlt;
  const biggerPictureImage = content.biggerPicture?.image ?? image;
  const biggerPictureImageAlt = content.biggerPicture?.imageAlt ?? imageAlt;

  const otherDestinations = getOtherDestinationsForContext(countryId, context);

  // Ids used by aria-labelledby on each section.
  const heroHeadingId = "country-hero-heading";
  const aboutHeadingId = "country-about-heading";
  const advantagesHeadingId = "country-advantages-heading";
  const pathwaysHeadingId = "country-pathways-heading";
  const biggerPictureHeadingId = "country-bigger-picture-heading";
  const otherHeadingId = "country-other-heading";

  return (
    <>
      <CountryHero
        country={country}
        image={image}
        imageAlt={imageAlt}
        headingId={heroHeadingId}
      />

      <CountryAbout
        eyebrow={formatLabel(labels.aboutEyebrowTemplate, country)}
        heading={formatLabel(labels.aboutHeadingTemplate, country)}
        paragraphs={content.about.paragraphs}
        image={aboutImage}
        imageAlt={aboutImageAlt}
        headingId={aboutHeadingId}
      />

      <CountryAdvantages
        eyebrow={labels.advantagesEyebrow}
        heading={formatLabel(labels.advantagesHeadingTemplate, country)}
        subtitle={formatLabel(labels.advantagesSubtitleTemplate, country)}
        items={contextContent.advantages}
        headingId={advantagesHeadingId}
      />

      <CountryPathways
        eyebrow={labels.pathwaysEyebrow}
        heading={formatLabel(labels.pathwaysHeadingTemplate, country)}
        subtitle={formatLabel(labels.pathwaysSubtitleTemplate, country)}
        items={contextContent.pathways}
        headingId={pathwaysHeadingId}
      />

      <CountryBiggerPicture
        eyebrow={labels.biggerPictureEyebrow}
        heading={labels.biggerPictureHeading}
        body={contextContent.biggerPictureBody}
        ctaLabel={labels.biggerPictureCtaLabel}
        ctaHref={labels.biggerPictureCtaHref}
        image={biggerPictureImage}
        imageAlt={biggerPictureImageAlt}
        headingId={biggerPictureHeadingId}
      />

      <CountryOtherDestinations
        eyebrow={labels.otherEyebrow}
        heading={labels.otherHeading}
        subtitle={formatLabel(labels.otherSubtitleTemplate, country)}
        destinations={otherDestinations}
        contextLabel={CONTEXT_GERUND[context]}
        headingId={otherHeadingId}
      />

      <FinalCtaSection />
    </>
  );
}
