import { Container, Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import {
  TourPackageCard,
  type TourPackageCardProps,
} from "./tour-package-card";

const PACKAGES: TourPackageCardProps[] = [
  {
    title: "France Escape",
    duration: "5 Days / 4 Nights",
    rating: 4.9,
    reviewCount: 214,
    highlights: [
      "Eiffel Tower Visit",
      "Louvre Museum Tour",
      "Seine River Cruise",
    ],
    price: "$699",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
    imageAlt: "The Eiffel Tower rising above Paris rooftops",
  },
  {
    title: "Qatar Discovery",
    duration: "5 Days / 4 Nights",
    rating: 4.9,
    reviewCount: 214,
    highlights: ["Desert Safari", "Souq Waqif Walk", "Museum of Islamic Art"],
    price: "$699",
    image:
      "https://images.unsplash.com/photo-1539768942893-daf53e448371?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Doha skyline at dusk seen across the bay",
  },
  {
    title: "China Cultural Journey",
    duration: "5 Days / 4 Nights",
    rating: 4.9,
    reviewCount: 214,
    highlights: [
      "Great Wall Trek",
      "Forbidden City Tour",
      "Shanghai Bund Nights",
    ],
    price: "$699",
    image:
      "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=800&q=80",
    imageAlt: "The Great Wall of China winding across green hills",
  },
  {
    title: "United Kingdom Highlights",
    duration: "5 Days / 4 Nights",
    rating: 4.9,
    reviewCount: 214,
    highlights: [
      "Tower of London",
      "Stonehenge Day Trip",
      "Thames River Cruise",
    ],
    price: "$699",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Big Ben and a red double-decker bus in central London",
  },
];

function FindYourJourneySection() {
  return (
    <Section
      padding="default"
      surface="muted"
      aria-labelledby="find-your-journey-heading"
    >
      <Container>
        <SectionHeading
          eyebrow="Our Packages"
          heading={
            <span id="find-your-journey-heading">
              Find Your Perfect Journey
            </span>
          }
          subtitle="Browse our full range of curated travel experiences — from island honeymoons to spiritual pilgrimages."
        />

        <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {PACKAGES.map((pkg) => (
            <li key={pkg.title} className="flex">
              <TourPackageCard {...pkg} className="h-full" />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

export { FindYourJourneySection };
