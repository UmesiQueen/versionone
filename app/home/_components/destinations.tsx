import { DestinationCard } from "@/components/cards/destination-card";
import { Container, Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { getFeaturedDestinations } from "@/lib/destinations";

/**
 * Homepage "Featured Destinations" grid.
 * Pulls the canonical list of featured countries from `data/destinations.json`
 * and renders each as an overlay-style card (no description).
 */
function DestinationsSection() {
  const destinations = getFeaturedDestinations();

  return (
    <Section padding="default" aria-labelledby="destinations-heading">
      <Container>
        <SectionHeading
          eyebrow="Featured Destinations"
          heading={
            <span id="destinations-heading">Where Would You Like to Go?</span>
          }
          subtitle="Explore our most in-demand destinations for immigration, work, study, and travel."
        />
        <ul className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
          {destinations.map((destination) => (
            <li key={destination.id}>
              <DestinationCard
                variant="overlay"
                country={destination.country}
                flagCode={destination.flagCode}
                image={destination.image}
                imageAlt={destination.imageAlt}
                href={destination.href}
              />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

export { DestinationsSection };
