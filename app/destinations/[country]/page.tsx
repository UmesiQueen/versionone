import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { FinalCtaSection } from "@/components/sections/final-cta";
import {
  formatLabel,
  getAllDestinations,
  getDestinationById,
  getOtherDestinations,
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
 *
 * - Content is read from `data/destinations.json` via `lib/destinations`.
 * - One general copy variant per country (no context switching).
 * - Returns notFound() for an unknown country slug.
 * - Generates static params for every country so the page is fully prerendered.
 */

/**
 * General copy templates used across every country page. `{country}` is
 * substituted via `formatLabel`.
 */
const LABELS = {
  aboutEyebrowTemplate: "About {country}",
  aboutHeadingTemplate: "Why {country}?",
  advantagesEyebrow: "Key Advantages",
  advantagesHeadingTemplate: "Why {country} Stands Out",
  advantagesSubtitleTemplate:
    "Here's what makes {country} one of the world's most rewarding destinations.",
  pathwaysEyebrow: "Pathways",
  pathwaysHeadingTemplate: "Your Pathway to {country}",
  pathwaysSubtitleTemplate:
    "{country} offers multiple structured routes to help you achieve your goals:",
  biggerPictureEyebrow: "The Bigger Picture",
  biggerPictureHeading: "More Than a Move — A Transformation",
  biggerPictureCtaLabel: "Start your Journey",
  biggerPictureCtaHref: "/book-consultation",
  otherEyebrow: "Explore More",
  otherHeading: "Other Destinations",
  otherSubtitleTemplate:
    "Not set on {country}? Explore your other options below.",
} as const;

type RouteParams = { country: string };

type PageProps = {
  params: Promise<RouteParams>;
};

export function generateStaticParams(): RouteParams[] {
  return getAllDestinations().map((destination) => ({
    country: destination.id,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { country: countryId } = await params;
  const destination = getDestinationById(countryId);

  if (!destination) return { title: "Destination not found" };

  return {
    title: destination.country,
    description:
      destination.description ||
      `Explore travel and immigration options for ${destination.country}.`,
  };
}

export default async function CountryDestinationPage({ params }: PageProps) {
  const { country: countryId } = await params;

  const destination = getDestinationById(countryId);
  if (!destination) notFound();

  const { country, image, imageAlt, content } = destination;
  const aboutImage = content.about.image ?? image;
  const aboutImageAlt = content.about.imageAlt ?? imageAlt;
  const biggerPictureImage = content.biggerPicture?.image ?? image;
  const biggerPictureImageAlt = content.biggerPicture?.imageAlt ?? imageAlt;

  const otherDestinations = getOtherDestinations(countryId);

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
        eyebrow={formatLabel(LABELS.aboutEyebrowTemplate, country)}
        heading={formatLabel(LABELS.aboutHeadingTemplate, country)}
        paragraphs={content.about.paragraphs}
        image={aboutImage}
        imageAlt={aboutImageAlt}
        headingId={aboutHeadingId}
      />

      <CountryAdvantages
        eyebrow={LABELS.advantagesEyebrow}
        heading={formatLabel(LABELS.advantagesHeadingTemplate, country)}
        subtitle={formatLabel(LABELS.advantagesSubtitleTemplate, country)}
        items={content.advantages}
        headingId={advantagesHeadingId}
      />

      <CountryPathways
        eyebrow={LABELS.pathwaysEyebrow}
        heading={formatLabel(LABELS.pathwaysHeadingTemplate, country)}
        subtitle={formatLabel(LABELS.pathwaysSubtitleTemplate, country)}
        items={content.pathways}
        headingId={pathwaysHeadingId}
      />

      <CountryBiggerPicture
        eyebrow={LABELS.biggerPictureEyebrow}
        heading={LABELS.biggerPictureHeading}
        body={content.biggerPictureBody}
        ctaLabel={LABELS.biggerPictureCtaLabel}
        ctaHref={LABELS.biggerPictureCtaHref}
        image={biggerPictureImage}
        imageAlt={biggerPictureImageAlt}
        headingId={biggerPictureHeadingId}
      />

      <CountryOtherDestinations
        eyebrow={LABELS.otherEyebrow}
        heading={LABELS.otherHeading}
        subtitle={formatLabel(LABELS.otherSubtitleTemplate, country)}
        destinations={otherDestinations}
        headingId={otherHeadingId}
      />

      <FinalCtaSection />
    </>
  );
}
