import destinationsData from "@/data/destinations.json";

export type Advantage = { title: string; description: string };
export type Pathway = { step: string; title: string };

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
  advantages: Advantage[];
  pathways: Pathway[];
  biggerPictureBody: string;
};

export type Destination = {
  id: string;
  country: string;
  flagCode: string;
  href: string;
  image: string;
  imageAlt: string;
  featured: boolean;
  description: string;
  content: CountryContent;
};

export type DestinationForPage = Omit<Destination, "content">;

const ALL_DESTINATIONS = destinationsData.destinations as readonly Destination[];

const DESTINATIONS_BY_ID = new Map(ALL_DESTINATIONS.map((d) => [d.id, d]));

function getAllDestinations(): readonly Destination[] {
  return ALL_DESTINATIONS;
}

function getDestinationById(id: string): Destination | undefined {
  return DESTINATIONS_BY_ID.get(id);
}

function formatLabel(template: string, country: string): string {
  return template.replace(/\{country\}/g, country);
}

function toDestinationForPage(destination: Destination): DestinationForPage {
  const { content: _content, ...rest } = destination;
  return rest;
}

function getDestinationsForPage(
  ids: readonly string[],
): DestinationForPage[] {
  const result: DestinationForPage[] = [];

  for (const id of ids) {
    const destination = DESTINATIONS_BY_ID.get(id);

    if (!destination) {
      if (process.env.NODE_ENV !== "production") {
        console.warn(`[destinations] Unknown destination id "${id}" requested.`);
      }
      continue;
    }

    result.push(toDestinationForPage(destination));
  }

  return result;
}

function getFeaturedDestinations(): readonly Destination[] {
  return ALL_DESTINATIONS.filter((d) => d.featured);
}

function getOtherDestinations(excludeId: string): DestinationForPage[] {
  const result: DestinationForPage[] = [];

  for (const destination of ALL_DESTINATIONS) {
    if (destination.id === excludeId) continue;
    result.push(toDestinationForPage(destination));
  }

  return result;
}

export {
  formatLabel,
  getAllDestinations,
  getDestinationById,
  getDestinationsForPage,
  getFeaturedDestinations,
  getOtherDestinations,
};
