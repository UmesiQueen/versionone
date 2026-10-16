import Image from "next/image";

import { Container, Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";

type Destination = {
  country: string;
  region: string;
  flagCode: string;
  image: string;
  imageAlt: string;
};

const LUXURY_DESTINATIONS: Destination[] = [
  {
    country: "France",
    region: "Europe",
    flagCode: "fr",
    image: "/images/destinations/france.webp",
    imageAlt: "The Eiffel Tower illuminated at dusk in Paris, France",
  },
  {
    country: "Italy",
    region: "Europe",
    flagCode: "it",
    image: "/images/destinations/italy.webp",
    imageAlt: "The Colosseum in Rome, Italy",
  },
  {
    country: "Tanzania",
    region: "Africa",
    flagCode: "tz",
    image: "/images/destinations/tanzania.webp",
    imageAlt:
      "A herd of wildebeest crossing the Serengeti plains at sunset, Tanzania",
  },
  {
    country: "Morocco",
    region: "Africa",
    flagCode: "ma",
    image: "/images/destinations/morocco.webp",
    imageAlt:
      "Vibrant souks and mosaic architecture in the medina of Marrakech, Morocco",
  },
  {
    country: "Portugal",
    region: "Europe",
    flagCode: "pt",
    image: "/images/destinations/portugal.webp",
    imageAlt: "Colourful tiled buildings in Lisbon, Portugal",
  },
  {
    country: "United Arab Emirates",
    region: "Middle East",
    flagCode: "ae",
    image: "/images/destinations/uae.webp",
    imageAlt: "Dubai Marina skyline at night, United Arab Emirates",
  },
  {
    country: "Japan",
    region: "Asia & Pacific",
    flagCode: "jp",
    image: "/images/destinations/japan.webp",
    imageAlt: "Mount Fuji reflected in a calm lake at sunrise, Japan",
  },
  {
    country: "Singapore",
    region: "Asia & Pacific",
    flagCode: "sg",
    image: "/images/destinations/singapore.webp",
    imageAlt: "Marina Bay Sands and city skyline at night in Singapore",
  },
];

const [france, italy, tanzania, morocco, portugal, uae, japan, singapore] =
  LUXURY_DESTINATIONS;

function LuxuryDestinationsSection() {
  return (
    <Section
      padding="default"
      surface="muted"
      aria-labelledby="luxury-destinations-heading"
    >
      <Container>
        <SectionHeading
          eyebrow="Popular Destinations"
          heading={
            <span id="luxury-destinations-heading">
              The World&rsquo;s Most Coveted Destinations
            </span>
          }
          subtitle="Exceptional luxury journeys across every continent — from European cultural capitals and Middle Eastern city-states to Asian sanctuaries."
        />

        <div className="mt-12 grid grid-cols-2 gap-3 auto-rows-[180px] sm:auto-rows-[210px] lg:grid-cols-4 lg:grid-rows-[280px_210px_230px] lg:auto-rows-[unset]">
          <DestPhotoCard
            destination={france}
            className="col-span-2 lg:col-span-2 lg:row-span-2"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <DestPhotoCard
            destination={italy}
            sizes="(max-width: 640px) 50vw, 25vw"
          />
          <DestPhotoCard
            destination={tanzania}
            sizes="(max-width: 640px) 50vw, 25vw"
          />
          <DestPhotoCard
            destination={morocco}
            className="col-span-2 lg:col-span-2"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <DestPhotoCard
            destination={portugal}
            sizes="(max-width: 640px) 50vw, 25vw"
          />
          <DestPhotoCard
            destination={uae}
            sizes="(max-width: 640px) 50vw, 25vw"
          />
          <DestPhotoCard
            destination={japan}
            sizes="(max-width: 640px) 50vw, 25vw"
          />
          <DestPhotoCard
            destination={singapore}
            sizes="(max-width: 640px) 50vw, 25vw"
          />
        </div>
      </Container>
    </Section>
  );
}

type DestPhotoCardProps = {
  destination: Destination;
  className?: string;
  sizes: string;
};

function DestPhotoCard({
  destination,
  className = "",
  sizes,
}: DestPhotoCardProps) {
  const { country, region, flagCode, image, imageAlt } = destination;

  return (
    <article
      className={`group relative overflow-hidden rounded-2xl bg-muted shadow-sm lg:h-full ${className}`}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      {/* gradient overlay */}
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-t from-black/70 via-black/25 to-transparent"
      />
      {/* bottom meta */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-4 sm:p-5">
        <div className="flex items-center gap-2">
          <Image
            src={`https://flagcdn.com/${flagCode.toLowerCase()}.svg`}
            width={30}
            height={23}
            alt=""
            aria-hidden="true"
            className="h-auto aspect-4/3"
          />
          <span className="text-sm font-semibold text-white drop-shadow-sm">
            {country}
          </span>
        </div>
        <span className="rounded-full bg-white/15 px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-wider text-white/80 backdrop-blur-sm">
          {region}
        </span>
      </div>
    </article>
  );
}

export { LuxuryDestinationsSection };
