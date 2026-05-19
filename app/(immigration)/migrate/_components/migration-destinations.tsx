import { LocationCard } from "@/components/cards/location-card";
import { Container, Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";

type MigrationDestination = {
  country: string;
  flagCode: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
};

const DESTINATIONS: MigrationDestination[] = [
  {
    country: "Canada",
    flagCode: "ca",
    description: "Permanent Residency through Express Entry.",
    image:
      "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Toronto skyline at dusk",
    href: "/destinations/canada",
  },
  {
    country: "Australia",
    flagCode: "au",
    description: "Skilled migration pathways for professionals and families.",
    image:
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Sydney Opera House at golden hour",
    href: "/destinations/australia",
  },
  {
    country: "United States",
    flagCode: "us",
    description: "Employment, family-sponsored routes.",
    image:
      "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Statue of Liberty on a clear day",
    href: "/destinations/united-states",
  },
  {
    country: "Germany",
    flagCode: "de",
    description: "Strong opportunities for skilled professionals.",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Aerial view of central Berlin",
    href: "/destinations/germany",
  },
  {
    country: "Spain",
    flagCode: "es",
    description: "Residency options for professionals and families.",
    image:
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Park Güell in Barcelona, Spain",
    href: "/destinations/spain",
  },
  {
    country: "Switzerland",
    flagCode: "ch",
    description: "Premium relocation opportunities in Europe.",
    image:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Swiss Alps with a mountain village",
    href: "/destinations/switzerland",
  },
  {
    country: "Netherlands",
    flagCode: "nl",
    description: "Excellent pathways for skilled workers and families.",
    image:
      "https://images.unsplash.com/photo-1576924542622-772579b85b41?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Canal houses in Amsterdam",
    href: "/destinations/netherlands",
  },
  {
    country: "New Zealand",
    flagCode: "nz",
    description: "A high-quality lifestyle with skilled migration programs.",
    image:
      "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Milford Sound fjord in New Zealand",
    href: "/destinations/new-zealand",
  },
  {
    country: "United Arab Emirates",
    flagCode: "ae",
    description: "Long-term residency options for professionals & investors.",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Dubai skyline with the Burj Khalifa",
    href: "/destinations/uae",
  },
  {
    country: "Luxembourg",
    flagCode: "lu",
    description: "Access to Europe with attractive residency pathways.",
    image:
      "https://images.unsplash.com/photo-1605108042834-7d4d83be0d63?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Old town of Luxembourg City at sunset",
    href: "/destinations/luxembourg",
  },
];

function MigrationDestinationsSection() {
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
          {DESTINATIONS.map((destination) => (
            <li key={destination.country} className="flex">
              <LocationCard
                {...destination}
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
