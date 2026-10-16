import Image from "next/image";

import { Container, Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";

type Destination = {
  country: string;
  sport: string;
  flagCode: string;
  image: string;
  imageAlt: string;
};

const SPORTS_DESTINATIONS: Destination[] = [
  {
    country: "United Kingdom",
    sport: "Football · Tennis · Rugby",
    flagCode: "gb",
    image: "/images/destinations/united-kingdom.webp",
    imageAlt: "London skyline at dusk, home of Wembley Stadium and Wimbledon",
  },
  {
    country: "United States",
    sport: "NFL · NBA · Olympics",
    flagCode: "us",
    image: "/images/destinations/united-states.webp",
    imageAlt: "New York City skyline, host city of major US sporting events",
  },
  {
    country: "Qatar",
    sport: "FIFA World Cup",
    flagCode: "qa",
    image: "/images/destinations/qatar-night.webp",
    imageAlt: "Doha skyline at night, Qatar — host of the 2022 FIFA World Cup",
  },
  {
    country: "Brazil",
    sport: "Football · Olympics",
    flagCode: "br",
    image: "/images/destinations/brazil.webp",
    imageAlt: "Rio de Janeiro with Christ the Redeemer overlooking the city, Brazil",
  },
  {
    country: "Germany",
    sport: "Football · Formula 1",
    flagCode: "de",
    image: "/images/destinations/germany.webp",
    imageAlt: "Brandenburg Gate in Berlin, Germany — home of top-flight football and motorsport",
  },
  {
    country: "France",
    sport: "Tennis · Cycling · Football",
    flagCode: "fr",
    image: "/images/destinations/france.webp",
    imageAlt: "Paris at dusk — home of Roland-Garros, the Tour de France and Ligue 1",
  },
  {
    country: "Japan",
    sport: "Olympics · Rugby · Martial Arts",
    flagCode: "jp",
    image: "/images/destinations/japan.webp",
    imageAlt: "Mount Fuji at sunrise, Japan — host of the 2020 Summer Olympics",
  },
  {
    country: "Australia",
    sport: "Tennis · Cricket · Rugby",
    flagCode: "au",
    image: "/images/destinations/australia.webp",
    imageAlt: "Sydney Opera House and Harbour Bridge, Australia — home of the Australian Open",
  },
];

const [uk, usa, qatar, brazil, germany, france, japan, australia] =
  SPORTS_DESTINATIONS;

function SportsDestinationsSection() {
  return (
    <Section
      padding="default"
      surface="muted"
      aria-labelledby="sports-destinations-heading"
    >
      <Container>
        <SectionHeading
          eyebrow="Major Sporting Destinations"
          heading={
            <span id="sports-destinations-heading">
              We Travel Everywhere the Game Is Played
            </span>
          }
          subtitle="From Wembley to the World Cup, from Roland-Garros to the Olympics — VersionOne connects you to the world's greatest sporting stages."
        />

        <div
          className="mt-12 grid grid-cols-2 gap-3 auto-rows-[180px] sm:grid-auto-rows-[210px] lg:grid-cols-4 lg:grid-rows-[280px_210px_230px] lg:grid-auto-rows-[unset]"
        >
          {/* UK — 2 cols wide × 2 rows tall (featured anchor) */}
          <DestPhotoCard
            destination={uk}
            className="col-span-2 lg:col-span-2 lg:row-span-2"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

          {/* USA — top-right, row 1 */}
          <DestPhotoCard
            destination={usa}
            sizes="(max-width: 640px) 50vw, 25vw"
          />

          {/* Qatar — top-right, row 1 */}
          <DestPhotoCard
            destination={qatar}
            sizes="(max-width: 640px) 50vw, 25vw"
          />

          {/* Brazil — 2 cols wide, row 2 (sits beside UK) */}
          <DestPhotoCard
            destination={brazil}
            className="col-span-2 lg:col-span-2"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

          {/* Bottom 4 — equal quarter-width cards, row 3 */}
          <DestPhotoCard destination={germany} sizes="(max-width: 640px) 50vw, 25vw" />
          <DestPhotoCard destination={france} sizes="(max-width: 640px) 50vw, 25vw" />
          <DestPhotoCard destination={japan} sizes="(max-width: 640px) 50vw, 25vw" />
          <DestPhotoCard destination={australia} sizes="(max-width: 640px) 50vw, 25vw" />
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

function DestPhotoCard({ destination, className = "", sizes }: DestPhotoCardProps) {
  const { country, sport, flagCode, image, imageAlt } = destination;

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
          {sport}
        </span>
      </div>
    </article>
  );
}

export { SportsDestinationsSection };
