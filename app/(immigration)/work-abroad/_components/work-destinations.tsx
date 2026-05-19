import { LocationCard } from "@/components/cards/location-card";
import { Container, Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";

type WorkDestination = {
  country: string;
  flagCode: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
};

const DESTINATIONS: WorkDestination[] = [
  {
    country: "Canada",
    flagCode: "ca",
    description:
      "Express Entry & Provincial Nominee Program for skilled workers.",
    image:
      "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Toronto skyline at dusk",
    href: "/destinations/canada",
  },
  {
    country: "Australia",
    flagCode: "au",
    description:
      "TSS & Employer Nomination Scheme across in-demand industries.",
    image:
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Sydney Opera House at golden hour",
    href: "/destinations/australia",
  },
  {
    country: "United Kingdom",
    flagCode: "gb",
    description:
      "Skilled Worker Visa with route to indefinite leave to remain and work.",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Westminster Bridge and the London Eye",
    href: "/destinations/united-kingdom",
  },
  {
    country: "Germany",
    flagCode: "de",
    description:
      "EU Blue Card for qualified professionals with job offers on the go.",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Aerial view of central Berlin",
    href: "/destinations/germany",
  },
  {
    country: "New Zealand",
    flagCode: "nz",
    description:
      "Accredited Employer Work Visa with strong pathways to residency.",
    image:
      "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Milford Sound fjord in New Zealand",
    href: "/destinations/new-zealand",
  },
  {
    country: "Netherlands",
    flagCode: "nl",
    description:
      "Highly Skilled Migrant Programme for knowledge economy professionals.",
    image:
      "https://images.unsplash.com/photo-1534351590666-13e3e96c5017?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Canal-side buildings in Amsterdam, the Netherlands",
    href: "/destinations/netherlands",
  },
  {
    country: "Ireland",
    flagCode: "ie",
    description:
      "Critical Skills Employment Permit for people in the tech and healthcare sectors.",
    image:
      "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Trinity College Dublin's Long Room library",
    href: "/destinations/ireland",
  },
  {
    country: "United Arab Emirates",
    flagCode: "ae",
    description:
      "Golden Visa & employment sponsorship in a tax-free economy.",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Dubai skyline with the Burj Khalifa",
    href: "/destinations/uae",
  },
  {
    country: "Singapore",
    flagCode: "sg",
    description:
      "Employment Pass for professionals in Asia's premier business hub.",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Singapore's Marina Bay Sands at twilight",
    href: "/destinations/singapore",
  },
  {
    country: "United States",
    flagCode: "us",
    description:
      "H-1B, O-1, and L-1 visas for professionals, executives and managers.",
    image:
      "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Manhattan skyline at sunset",
    href: "/destinations/united-states",
  },
];

function WorkDestinationsSection() {
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
          {DESTINATIONS.map((destination) => (
            <li key={destination.country} className="flex">
              <LocationCard
                {...destination}
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
