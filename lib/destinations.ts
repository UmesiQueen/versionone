import destinationsData from "@/data/destinations.json";

/**
 * Destination data + helpers.
 *
 * Source of truth: `data/destinations.json` — one canonical record per country
 * (image, alt text, flag code, href) plus an open-ended map of page-specific
 * descriptions keyed by `DestinationContext`.
 *
 * Pages should declare an ordered list of country IDs and the context they
 * want, then call `getDestinationsForPage` to hydrate the cards. This keeps
 * page-level ordering explicit while the substantive content lives in JSON.
 */

/** Pages that surface a copy variant for each destination. */
export type DestinationContext = "migrate" | "study" | "work" | "visit";

/** Raw record as stored in `data/destinations.json`. */
export type Destination = {
  /** Stable slug — used to look up destinations by ID. */
  id: string;
  /** Display name, e.g. "United Kingdom". */
  country: string;
  /** ISO-2 country code used to fetch the flag, e.g. "gb". */
  flagCode: string;
  /** Canonical link to this destination's page. */
  href: string;
  /** Canonical hero image used across all pages. */
  image: string;
  /** Accessible alt text describing the image. */
  imageAlt: string;
  /** Surfaced on the homepage "Featured Destinations" grid when true. */
  featured: boolean;
  /** Page-specific copy. A missing key means the country is not surfaced on that page. */
  descriptions: Partial<Record<DestinationContext, string>>;
};

/**
 * A destination hydrated with the description for a specific page context.
 * Returned by `getDestinationsForPage`. The optional `descriptions` map is
 * intentionally omitted so consumers can spread the object straight into
 * `<DestinationCard {...destination} />` without leaking unused data.
 */
export type DestinationForPage = Omit<Destination, "descriptions"> & {
  description: string;
};

const ALL_DESTINATIONS = destinationsData.destinations as readonly Destination[];

const DESTINATIONS_BY_ID = new Map(ALL_DESTINATIONS.map((d) => [d.id, d]));

/** Get every destination as stored in JSON. */
function getAllDestinations(): readonly Destination[] {
  return ALL_DESTINATIONS;
}

/** Look up a single destination by ID (returns undefined if not found). */
function getDestinationById(id: string): Destination | undefined {
  return DESTINATIONS_BY_ID.get(id);
}

/**
 * Hydrate an ordered list of destinations for a page.
 *
 * - Preserves the order of `ids` (this is the page's editorial choice).
 * - Skips IDs that don't exist or that have no copy for `context` — and logs
 *   a dev-only warning so missing copy fails loudly during development.
 * - Returns a new shape with a single `description` string in place of the
 *   full descriptions map.
 */
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

    const { descriptions: _descriptions, ...rest } = destination;
    result.push({ ...rest, description });
  }

  return result;
}

/** Featured destinations, in the order declared in JSON. */
function getFeaturedDestinations(): readonly Destination[] {
  return ALL_DESTINATIONS.filter((d) => d.featured);
}

export {
  getAllDestinations,
  getDestinationById,
  getDestinationsForPage,
  getFeaturedDestinations,
};
