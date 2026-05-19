import { LocationCard } from "@/components/cards/location-card";
import { Container, Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";

type VisitDestination = {
  country: string;
  flagCode: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
};

const DESTINATIONS: VisitDestination[] = [
  {
    country: "France",
    flagCode: "fr",
    description: "Embassy visa — Schengen zone covers 26 countries.",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Paris cityscape with the Eiffel Tower at sunset",
    href: "/destinations/france",
  },
  {
    country: "Spain",
    flagCode: "es",
    description: "Schengen visa — tourist & business visits.",
    image:
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Park Güell in Barcelona, Spain",
    href: "/destinations/spain",
  },
  {
    country: "United States",
    flagCode: "us",
    description: "B-1/B-2 tourist & business visa required.",
    image:
      "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Manhattan skyline at sunset",
    href: "/destinations/united-states",
  },
  {
    country: "Turkey",
    flagCode: "tr",
    description: "e-visa available — fast online approval.",
    image:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Blue Mosque domes in Istanbul, Turkey",
    href: "/destinations/turkey",
  },
  {
    country: "Italy",
    flagCode: "it",
    description: "Schengen visa for tourism and culture.",
    image:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80",
    imageAlt: "The Colosseum in Rome on a sunny day",
    href: "/destinations/italy",
  },
  {
    country: "Mexico",
    flagCode: "mx",
    description: "No visa required for most nationalities.",
    image:
      "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Tulum beach with palm trees and turquoise sea",
    href: "/destinations/mexico",
  },
  {
    country: "Qatar",
    flagCode: "qa",
    description: "Visa on arrival for eligible passport holders.",
    image:
      "https://images.unsplash.com/photo-1568322445389-f64ac2515020?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Doha skyline along the Corniche at dusk",
    href: "/destinations/qatar",
  },
  {
    country: "Germany",
    flagCode: "de",
    description: "Schengen visa — tourism & business.",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Aerial view of central Berlin",
    href: "/destinations/germany",
  },
  {
    country: "United Kingdom",
    flagCode: "gb",
    description: "UK Standard Visitor Visa — embassy required.",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Westminster Bridge and the London Eye",
    href: "/destinations/united-kingdom",
  },
  {
    country: "United Arab Emirates",
    flagCode: "ae",
    description: "Visa on arrival — Dubai, Abu Dhabi, Sharjah.",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Dubai skyline with the Burj Khalifa",
    href: "/destinations/uae",
  },
];

function VisitDestinationsSection() {
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
          {DESTINATIONS.map((destination) => (
            <li key={destination.country} className="flex">
              <LocationCard
                {...destination}
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
