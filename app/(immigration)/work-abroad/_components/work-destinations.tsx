import { DestinationCard } from "@/components/cards/destination-card";
import { Container, Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { getDestinationsForPage } from "@/lib/destinations";

/**
 * Curated ordering for the Work Abroad page. Countries are sourced from
 * `data/destinations.json` and must have a "work" description.
 */
const WORK_DESTINATION_IDS = [
  "canada",
  "australia",
  "united-kingdom",
  "germany",
  "new-zealand",
  "netherlands",
  "ireland",
  "uae",
  "singapore",
  "united-states",
] as const;

function WorkDestinationsSection() {
  const destinations = getDestinationsForPage(WORK_DESTINATION_IDS, "work");

  return (
    <Section padding="default" aria-labelledby="work-destinations-heading">
      <Container>
        <SectionHeading
          eyebrow="Work Destinations"
          heading={
            <span id="work-destinations-heading">
              Where Will Your Career Take You?
            </span>
          }
          subtitle="Explore top employment destinations and the visa pathways available for skilled professionals in each country."
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
                ariaLabel={`Learn more about working in ${destination.country}`}
                className="w-full"
              />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

export { WorkDestinationsSection };
