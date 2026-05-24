import { DestinationCard } from "@/components/cards/destination-card";
import { Container, Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import type { DestinationForPage } from "@/lib/destinations";

type CountryOtherDestinationsProps = {
  eyebrow: string;
  heading: string;
  subtitle: string;
  destinations: readonly DestinationForPage[];
  contextLabel: string;
  headingId: string;
};

function CountryOtherDestinations({
  eyebrow,
  heading,
  subtitle,
  destinations,
  contextLabel,
  headingId,
}: CountryOtherDestinationsProps) {
  if (destinations.length === 0) return null;

  return (
    <Section padding="default" aria-labelledby={headingId}>
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          heading={<span id={headingId}>{heading}</span>}
          subtitle={subtitle}
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
                ariaLabel={`Learn more about ${contextLabel} in ${destination.country}`}
                className="w-full"
              />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

export { CountryOtherDestinations };
