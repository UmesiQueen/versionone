import { DestinationCard } from "@/components/cards/destination-card";
import { Container, Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";

const DESTINATIONS = [
  {
    country: "Canada",
    flagCode: "ca",
    href: "/destinations/canada",
    image:
      "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Toronto skyline featuring the CN Tower at dusk",
  },
  {
    country: "United Kingdom",
    flagCode: "gb",
    href: "/destinations/united-kingdom",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Red double-decker buses passing the London Eye",
  },
  {
    country: "United Arab Emirates",
    flagCode: "ae",
    href: "/destinations/uae",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Dubai skyline with the Burj Khalifa",
  },
  {
    country: "Germany",
    flagCode: "de",
    href: "/destinations/germany",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Aerial view of central Berlin",
  },
  {
    country: "United States",
    flagCode: "us",
    href: "/destinations/united-states",
    image:
      "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Manhattan skyline at sunset",
  },
  {
    country: "Poland",
    flagCode: "pl",
    href: "/destinations/poland",
    image:
      "https://images.unsplash.com/photo-1519197924294-4ba991a11128?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Historic Old Town square in Warsaw, Poland",
  },
  {
    country: "Australia",
    flagCode: "au",
    href: "/destinations/australia",
    image:
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Sydney Opera House at golden hour",
  },
  {
    country: "Singapore",
    flagCode: "sg",
    href: "/destinations/singapore",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Singapore's Marina Bay Sands at twilight",
  },
] as const;

function DestinationsSection() {
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
          {DESTINATIONS.map((destination) => (
            <li key={destination.country}>
              <DestinationCard {...destination} />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

export { DestinationsSection };
