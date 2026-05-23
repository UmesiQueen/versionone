import { DestinationCard } from "@/components/cards/destination-card";
import { Container, Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { getDestinationsForPage } from "@/lib/destinations";

/**
 * Curated ordering for the Visit page. Countries are sourced from
 * `data/destinations.json` and must have a "visit" description.
 */
const VISIT_DESTINATION_IDS = [
  "france",
  "spain",
  "united-states",
  "turkey",
  "italy",
  "mexico",
  "qatar",
  "germany",
  "united-kingdom",
  "uae",
] as const;

function VisitDestinationsSection() {
  const destinations = getDestinationsForPage(VISIT_DESTINATION_IDS, "visit");

  return (
    <Section padding="default" aria-labelledby="visit-destinations-heading">
      <Container>
        <SectionHeading
          eyebrow="Travel Destinations"
          heading={
            <span id="visit-destinations-heading">
              Where Would You Like to Go?
            </span>
          }
          subtitle="Ten of the world's most popular visitor destinations — with up-to-date visa type information and what VersionOne support for every application."
        />
        <ul className="mt-12 grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-6 lg:gap-y-10">
          {destinations.map((destination) => (
            <li key={destination.id} className="flex">
              <DestinationCard
                variant="detailed"
                country={destination.country}
                flagCode={destination.flagCode}
                description={destination.description}
                image={destination.image}
                imageAlt={destination.imageAlt}
                href={destination.href}
                ariaLabel={`Learn more about visiting ${destination.country}`}
                className="w-full"
              />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

export { VisitDestinationsSection };
