import { Container, Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import {
  TourPackageCard,
  type TourPackageCardProps,
} from "./tour-package-card";

const COMMON_HIGHLIGHTS = [
  "Desert Safari",
  "Burj Khalifa Visit",
  "Dubai Mall & Fountains",
];

const PACKAGES: TourPackageCardProps[] = [
  {
    title: "Dubai Luxury Escape",
    duration: "5 Days / 4 Nights",
    rating: 4.9,
    reviewCount: 214,
    highlights: COMMON_HIGHLIGHTS,
    price: "$1,299",
    image:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Dubai skyline at sunset",
  },
  {
    title: "Santorini Island Retreat",
    duration: "5 Days / 4 Nights",
    rating: 4.9,
    reviewCount: 214,
    highlights: COMMON_HIGHLIGHTS,
    price: "$1,299",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
    imageAlt: "White-washed buildings on Santorini cliffside",
  },
  {
    title: "Bali Tropical Retreat",
    duration: "5 Days / 4 Nights",
    rating: 4.9,
    reviewCount: 214,
    highlights: COMMON_HIGHLIGHTS,
    price: "$1,299",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Tropical Bali rice terraces and palms",
  },
  {
    title: "Tokyo Cultural Journey",
    duration: "5 Days / 4 Nights",
    rating: 4.9,
    reviewCount: 214,
    highlights: COMMON_HIGHLIGHTS,
    price: "$1,299",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Tokyo temple with cherry blossoms",
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
