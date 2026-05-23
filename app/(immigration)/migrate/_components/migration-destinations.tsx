import { DestinationCard } from "@/components/cards/destination-card";
import { Container, Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { getDestinationsForPage } from "@/lib/destinations";

/**
 * Curated ordering for the Migrate page. Countries are sourced from
 * `data/destinations.json` and must have a "migrate" description.
 */
const MIGRATE_DESTINATION_IDS = [
  "canada",
  "australia",
  "united-states",
  "germany",
  "spain",
  "switzerland",
  "netherlands",
  "new-zealand",
  "uae",
  "luxembourg",
] as const;

function MigrationDestinationsSection() {
  const destinations = getDestinationsForPage(MIGRATE_DESTINATION_IDS, "migrate");

  return (
    <Section padding="default" aria-labelledby="migration-destinations-heading">
      <Container>
        <SectionHeading
          eyebrow="Destinations"
          heading={
            <span id="migration-destinations-heading">
              Explore Your Migration Options
            </span>
          }
          subtitle="Choose from some of the world's most sought-after migration destinations, each offering unique pathways, lifestyle benefits, and long-term opportunities."
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
                ariaLabel={`Learn more about migration pathways to ${destination.country}`}
                className="w-full"
              />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

export { MigrationDestinationsSection };
