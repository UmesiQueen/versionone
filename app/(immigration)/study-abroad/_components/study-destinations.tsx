import { LocationCard } from "@/components/cards/location-card";
import { Container, Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";

type StudyDestination = {
  country: string;
  flagCode: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
};

const DESTINATIONS: StudyDestination[] = [
  {
    country: "United States",
    flagCode: "us",
    description: "Ivy League & top-ranked programs across every discipline.",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
    imageAlt: "An American university campus quad",
    href: "/destinations/united-states",
  },
  {
    country: "Canada",
    flagCode: "ca",
    description: "Post-graduate work permits & pathways to permanent residency.",
    image:
      "https://images.unsplash.com/photo-1569936210-986a89db5d50?auto=format&fit=crop&w=800&q=80",
    imageAlt: "A Canadian university building in autumn",
    href: "/destinations/canada",
  },
  {
    country: "United Kingdom",
    flagCode: "gb",
    description: "Oxford, Cambridge & Russell Group universities with prestige.",
    image:
      "https://images.unsplash.com/photo-1543071220-6ee5bf71a54e?auto=format&fit=crop&w=800&q=80",
    imageAlt: "King's College Cambridge across the River Cam",
    href: "/destinations/united-kingdom",
  },
  {
    country: "Australia",
    flagCode: "au",
    description: "Group of universities with strong graduate employment outcomes.",
    image:
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=800&q=80",
    imageAlt: "University of Sydney sandstone quadrangle",
    href: "/destinations/australia",
  },
  {
    country: "Germany",
    flagCode: "de",
    description: "Tuition-free public universities with world-class STEM programs.",
    image:
      "https://images.unsplash.com/photo-1554072675-66db59dba46f?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Heidelberg University old building",
    href: "/destinations/germany",
  },
  {
    country: "France",
    flagCode: "fr",
    description: "Grandes Écoles, Sorbonne & affordable EU tuition fees.",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Paris cityscape with the Eiffel Tower at sunset",
    href: "/destinations/france",
  },
  {
    country: "Netherlands",
    flagCode: "nl",
    description: "Top-ranked Dutch universities with extensive English-taught programs.",
    image:
      "https://images.unsplash.com/photo-1534351590666-13e3e96c5017?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Canal-side buildings in Amsterdam, the Netherlands",
    href: "/destinations/netherlands",
  },
  {
    country: "Ireland",
    flagCode: "ie",
    description: "English-language education with strong tech industry links.",
    image:
      "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Trinity College Dublin's Long Room library",
    href: "/destinations/ireland",
  },
  {
    country: "New Zealand",
    flagCode: "nz",
    description: "Welcoming study environment with post-study work rights.",
    image:
      "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Milford Sound fjord in New Zealand",
    href: "/destinations/new-zealand",
  },
  {
    country: "Japan",
    flagCode: "jp",
    description: "World-renowned institutions with government scholarship programs.",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Cherry blossoms framing a Japanese temple",
    href: "/destinations/japan",
  },
];

function StudyDestinationsSection() {
  return (
    <Section padding="default" aria-labelledby="study-destinations-heading">
      <Container>
        <SectionHeading
          eyebrow="Study Destinations"
          heading={
            <span id="study-destinations-heading">Where Do You Want to Study?</span>
          }
          subtitle="Explore ten world-class study destinations, each offering unique academic cultures, career prospects, and lifestyle experiences."
        />
        <ul className="mt-12 grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-6 lg:gap-y-10">
          {DESTINATIONS.map((destination) => (
            <li key={destination.country} className="flex">
              <LocationCard
                {...destination}
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
