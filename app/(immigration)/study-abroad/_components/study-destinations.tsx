import { DestinationCard } from "@/components/cards/destination-card";
import { Container, Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { getDestinationsForPage } from "@/lib/destinations";

/**
 * Curated ordering for the Study Abroad page. Countries are sourced from
 * `data/destinations.json` and must have a "study" description.
 */
const STUDY_DESTINATION_IDS = [
  "united-states",
  "canada",
  "united-kingdom",
  "australia",
  "germany",
  "france",
  "netherlands",
  "ireland",
  "new-zealand",
  "japan",
] as const;

function StudyDestinationsSection() {
  const destinations = getDestinationsForPage(STUDY_DESTINATION_IDS, "study");

  return (
    <Section padding="default" aria-labelledby="study-destinations-heading">
      <Container>
        <SectionHeading
          eyebrow="Study Destinations"
          heading={
            <span id="study-destinations-heading">
              Where Do You Want to Study?
            </span>
          }
          subtitle="Explore ten world-class study destinations, each offering unique academic cultures, career prospects, and lifestyle experiences."
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
                ariaLabel={`Learn more about studying in ${destination.country}`}
                className="w-full"
              />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

export { StudyDestinationsSection };
