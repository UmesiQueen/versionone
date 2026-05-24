import destinationsData from "@/data/destinations.json";

/**
 * Destination data + helpers.
 *
 * Source of truth: `data/destinations.json` — one canonical record per country
 * (image, alt text, flag code, href) plus an open-ended map of page-specific
 * descriptions keyed by `DestinationContext`, and rich `content` blocks used
 * by the `destinations/[country]` dynamic page.
 *
 * Pages should declare an ordered list of country IDs and the context they
 * want, then call `getDestinationsForPage` to hydrate the cards. The
 * destination detail page reads `content` + `contextLabels` to render its
 * country-specific sections.
 */

export type DestinationContext = "migrate" | "study" | "work" | "visit";

export const DESTINATION_CONTEXTS: readonly DestinationContext[] = [
  "migrate",
  "study",
  "work",
  "visit",
] as const;

export type ContextLabels = {
  aboutEyebrowTemplate: string;
  aboutHeadingTemplate: string;
  advantagesEyebrow: string;
  advantagesHeadingTemplate: string;
  advantagesSubtitleTemplate: string;
  pathwaysEyebrow: string;
  pathwaysHeadingTemplate: string;
  pathwaysSubtitleTemplate: string;
  biggerPictureEyebrow: string;
  biggerPictureHeading: string;
  biggerPictureCtaLabel: string;
  biggerPictureCtaHref: string;
  otherEyebrow: string;
  otherHeading: string;
  otherSubtitleTemplate: string;
};

export type Advantage = { title: string; description: string };
export type Pathway = { step: string; title: string };

export type ContextContent = {
  advantages: Advantage[];
  pathways: Pathway[];
  biggerPictureBody: string;
};

export type CountryContent = {
  about: {
    paragraphs: string[];
    image?: string;
    imageAlt?: string;
  };
  biggerPicture?: {
    image?: string;
    imageAlt?: string;
  };
  contexts: Partial<Record<DestinationContext, ContextContent>>;
};

export type Destination = {
  id: string;
  country: string;
  flagCode: string;
  href: string;
  image: string;
  imageAlt: string;
  featured: boolean;
  descriptions: Partial<Record<DestinationContext, string>>;
  content: CountryContent;
};

export type DestinationForPage = Omit<Destination, "descriptions" | "content"> & {
  description: string;
};

const ALL_DESTINATIONS = destinationsData.destinations as readonly Destination[];
const CONTEXT_LABELS = destinationsData.contextLabels as Record<
  DestinationContext,
  ContextLabels
>;

const DESTINATIONS_BY_ID = new Map(ALL_DESTINATIONS.map((d) => [d.id, d]));

/**
 * Append `?ctx={context}` to a destination href so the destination page opens
 * in the right context variant. If the href already has a query string we
 * append with `&`; otherwise with `?`.
 */
function withContext(href: string, context: DestinationContext): string {
  const separator = href.includes("?") ? "&" : "?";
  return `${href}${separator}ctx=${context}`;
}

function getAllDestinations(): readonly Destination[] {
  return ALL_DESTINATIONS;
}

function getDestinationById(id: string): Destination | undefined {
  return DESTINATIONS_BY_ID.get(id);
}

function getContextLabels(context: DestinationContext): ContextLabels {
  return CONTEXT_LABELS[context];
}

function formatLabel(template: string, country: string): string {
  return template.replace(/\{country\}/g, country);
}

function getDestinationsForPage(
  ids: readonly string[],
  context: DestinationContext,
): DestinationForPage[] {
  const result: DestinationForPage[] = [];

  for (const id of ids) {
    const destination = DESTINATIONS_BY_ID.get(id);

    if (!destination) {
      if (process.env.NODE_ENV !== "production") {
        console.warn(
          `[destinations] Unknown destination id "${id}" requested for context "${context}".`,
        );
      }
      continue;
    }

    const description = destination.descriptions[context];

    if (!description) {
      if (process.env.NODE_ENV !== "production") {
        console.warn(
          `[destinations] "${destination.country}" has no "${context}" description.`,
        );
      }
      continue;
    }

    const { descriptions: _d, content: _c, ...rest } = destination;
    result.push({
      ...rest,
      href: withContext(rest.href, context),
      description,
    });
  }

  return result;
}

function getFeaturedDestinations(): readonly Destination[] {
  return ALL_DESTINATIONS.filter((d) => d.featured);
}

function getOtherDestinationsForContext(
  excludeId: string,
  context: DestinationContext,
): DestinationForPage[] {
  const result: DestinationForPage[] = [];

  for (const destination of ALL_DESTINATIONS) {
    if (destination.id === excludeId) continue;
    const description = destination.descriptions[context];
    if (!description) continue;
    if (!destination.content?.contexts?.[context]) continue;

    const { descriptions: _d, content: _c, ...rest } = destination;
    result.push({
      ...rest,
      href: withContext(rest.href, context),
      description,
    });
  }

  return result;
}

function getAvailableContexts(id: string): DestinationContext[] {
  const destination = DESTINATIONS_BY_ID.get(id);
  if (!destination) return [];
  return DESTINATION_CONTEXTS.filter((ctx) => destination.content?.contexts?.[ctx]);
}

export {
  formatLabel,
  getAllDestinations,
  getAvailableContexts,
  getContextLabels,
  getDestinationById,
  getDestinationsForPage,
  getFeaturedDestinations,
  getOtherDestinationsForContext,
};
