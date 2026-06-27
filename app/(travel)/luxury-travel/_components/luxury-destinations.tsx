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
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "The Eiffel Tower illuminated at dusk in Paris, France",
  },
  {
    country: "Italy",
    region: "Europe",
    flagCode: "it",
    image:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80",
    imageAlt: "The Colosseum in Rome, Italy",
  },
  {
    country: "Tanzania",
    region: "Africa",
    flagCode: "tz",
    image:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=800&q=80",
    imageAlt: "A herd of wildebeest crossing the Serengeti plains at sunset, Tanzania",
  },
  {
    country: "Morocco",
    region: "Africa",
    flagCode: "ma",
    image:
      "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Vibrant souks and mosaic architecture in the medina of Marrakech, Morocco",
  },
  {
    country: "Portugal",
    region: "Europe",
    flagCode: "pt",
    image:
      "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Colourful tiled buildings in Lisbon, Portugal",
  },
  {
    country: "United Arab Emirates",
    region: "Middle East",
    flagCode: "ae",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Dubai Marina skyline at night, United Arab Emirates",
  },
  {
    country: "Japan",
    region: "Asia & Pacific",
    flagCode: "jp",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Mount Fuji reflected in a calm lake at sunrise, Japan",
  },
  {
    country: "Singapore",
    region: "Asia & Pacific",
    flagCode: "sg",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80",
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
          {/* France — 2 cols wide × 2 rows tall (featured anchor) */}
          <DestPhotoCard
            destination={france}
            className="col-span-2 lg:col-span-2 lg:row-span-2"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

          {/* Italy — top-right, row 1 */}
          <DestPhotoCard
            destination={italy}
            sizes="(max-width: 640px) 50vw, 25vw"
          />

          {/* Tanzania — top-right, row 1 */}
          <DestPhotoCard
            destination={tanzania}
            sizes="(max-width: 640px) 50vw, 25vw"
          />

          {/* Morocco — 2 cols wide, row 2 (sits beside France) */}
          <DestPhotoCard
            destination={morocco}
            className="col-span-2 lg:col-span-2"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

          {/* Bottom 4 — equal quarter-width cards, row 3 */}
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

/* ── Internal card ────────────────────────────────────────────────────────── */

type DestPhotoCardProps = {
  destination: Destination;
  className?: string;
  sizes: string;
};

function DestPhotoCard({ destination, className = "", sizes }: DestPhotoCardProps) {
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
