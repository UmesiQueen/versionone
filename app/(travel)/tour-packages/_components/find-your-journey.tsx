"use client";

import { useId, useState } from "react";
import { Container, Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { cn } from "@/lib/utils";
import {
  TourPackageCard,
  type TourPackageCardProps,
} from "./tour-package-card";

type CategoryId =
  | "leisure"
  | "honeymoon"
  | "family"
  | "corporate"
  | "hajj-umrah";

type Category = {
  id: CategoryId;
  label: string;
  packages: TourPackageCardProps[];
};

const COMMON_HIGHLIGHTS = [
  "Desert Safari",
  "Burj Khalifa Visit",
  "Dubai Mall & Fountains",
];

const LEISURE_PACKAGES: TourPackageCardProps[] = [
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
    href: "/tour-packages/dubai-luxury-escape",
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
    href: "/tour-packages/santorini-island-retreat",
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
    href: "/tour-packages/bali-tropical-retreat",
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
    href: "/tour-packages/tokyo-cultural-journey",
  },
];

const HONEYMOON_PACKAGES: TourPackageCardProps[] = [
  {
    title: "Maldives Overwater Romance",
    duration: "7 Days / 6 Nights",
    rating: 5.0,
    reviewCount: 187,
    highlights: [
      "Overwater villa stay",
      "Private sunset dinner",
      "Couples spa experience",
    ],
    price: "$2,499",
    image:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Maldives overwater bungalows at sunrise",
    href: "/tour-packages/maldives-overwater-romance",
  },
  {
    title: "Paris & Loire Valley",
    duration: "6 Days / 5 Nights",
    rating: 4.8,
    reviewCount: 142,
    highlights: [
      "Seine River cruise",
      "Champagne tasting",
      "Loire château tour",
    ],
    price: "$2,199",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Paris skyline at sunset with the Eiffel Tower",
    href: "/tour-packages/paris-loire-valley",
  },
  {
    title: "Bora Bora Lagoon",
    duration: "8 Days / 7 Nights",
    rating: 4.9,
    reviewCount: 96,
    highlights: [
      "Snorkelling tour",
      "Lagoon picnic",
      "Polynesian dance evening",
    ],
    price: "$3,299",
    image:
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Bora Bora lagoon and Mount Otemanu",
    href: "/tour-packages/bora-bora-lagoon",
  },
  {
    title: "Tuscan Vineyards",
    duration: "6 Days / 5 Nights",
    rating: 4.8,
    reviewCount: 121,
    highlights: [
      "Vineyard cellar tour",
      "Cooking class for two",
      "Florence art walk",
    ],
    price: "$1,999",
    image:
      "https://images.unsplash.com/photo-1505765050516-f72dcac9c60a?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Rolling Tuscan vineyards at golden hour",
    href: "/tour-packages/tuscan-vineyards",
  },
];

const FAMILY_PACKAGES: TourPackageCardProps[] = [
  {
    title: "Orlando Theme Park Adventure",
    duration: "7 Days / 6 Nights",
    rating: 4.8,
    reviewCount: 312,
    highlights: [
      "Multi-park passes",
      "Family-friendly hotel",
      "Character dining",
    ],
    price: "$2,399",
    image:
      "https://images.unsplash.com/photo-1551649001-7a2482d98d05?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Theme park castle and fireworks",
    href: "/tour-packages/orlando-theme-park",
  },
  {
    title: "Kenya Family Safari",
    duration: "8 Days / 7 Nights",
    rating: 4.9,
    reviewCount: 158,
    highlights: [
      "Maasai Mara game drives",
      "Family lodge stay",
      "Cultural visit",
    ],
    price: "$2,799",
    image:
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Giraffes on the African savannah at sunset",
    href: "/tour-packages/kenya-family-safari",
  },
  {
    title: "Iceland Northern Lights",
    duration: "5 Days / 4 Nights",
    rating: 4.7,
    reviewCount: 204,
    highlights: [
      "Aurora hunting tour",
      "Geothermal lagoon",
      "Glacier exploration",
    ],
    price: "$1,899",
    image:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Northern lights over an Icelandic landscape",
    href: "/tour-packages/iceland-northern-lights",
  },
  {
    title: "Costa Rica Eco-Adventure",
    duration: "7 Days / 6 Nights",
    rating: 4.8,
    reviewCount: 176,
    highlights: [
      "Rainforest canopy tour",
      "Wildlife sanctuary visit",
      "Beach day with the kids",
    ],
    price: "$2,099",
    image:
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Costa Rican rainforest with morning mist",
    href: "/tour-packages/costa-rica-eco-adventure",
  },
];

const CORPORATE_PACKAGES: TourPackageCardProps[] = [
  {
    title: "Singapore Business Retreat",
    duration: "4 Days / 3 Nights",
    rating: 4.8,
    reviewCount: 88,
    highlights: [
      "Conference venue booking",
      "Team dinner planning",
      "Airport transfers",
    ],
    price: "$1,599",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Singapore's Marina Bay Sands at twilight",
    href: "/tour-packages/singapore-business-retreat",
  },
  {
    title: "London Executive Trip",
    duration: "5 Days / 4 Nights",
    rating: 4.7,
    reviewCount: 112,
    highlights: [
      "Premium hotel block",
      "Private client dinner",
      "Citywide transfers",
    ],
    price: "$2,299",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Westminster and the London Eye at dusk",
    href: "/tour-packages/london-executive-trip",
  },
  {
    title: "New York Conference Stay",
    duration: "5 Days / 4 Nights",
    rating: 4.6,
    reviewCount: 96,
    highlights: [
      "Midtown hotel block",
      "Conference registration",
      "Team excursion",
    ],
    price: "$2,499",
    image:
      "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Manhattan skyline at sunset",
    href: "/tour-packages/new-york-conference-stay",
  },
  {
    title: "Cape Town Strategy Offsite",
    duration: "6 Days / 5 Nights",
    rating: 4.9,
    reviewCount: 74,
    highlights: [
      "Boardroom-equipped lodge",
      "Wine country excursion",
      "Team-building safari",
    ],
    price: "$2,199",
    image:
      "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Cape Town and Table Mountain at sunset",
    href: "/tour-packages/cape-town-strategy-offsite",
  },
];

const HAJJ_PACKAGES: TourPackageCardProps[] = [
  {
    title: "Hajj Premium Package",
    duration: "21 Days",
    rating: 5.0,
    reviewCount: 188,
    highlights: [
      "5-star Makkah hotel",
      "Madinah accommodation",
      "Licensed Hajj guide",
    ],
    price: "$7,499",
    image:
      "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=800&q=80",
    imageAlt: "The Kaaba in Makkah's Grand Mosque",
    href: "/tour-packages/hajj-premium",
  },
  {
    title: "Umrah Standard Package",
    duration: "10 Days / 9 Nights",
    rating: 4.9,
    reviewCount: 256,
    highlights: [
      "Direct Makkah transfer",
      "Madinah Ziyarat tour",
      "Guided rituals",
    ],
    price: "$2,899",
    image:
      "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Pilgrims at the Grand Mosque in Makkah",
    href: "/tour-packages/umrah-standard",
  },
  {
    title: "Umrah Family Package",
    duration: "12 Days / 11 Nights",
    rating: 4.9,
    reviewCount: 142,
    highlights: [
      "Family-suite hotels",
      "Group Ziyarat",
      "Madinah extended stay",
    ],
    price: "$3,599",
    image:
      "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Prophet's Mosque in Madinah",
    href: "/tour-packages/umrah-family",
  },
  {
    title: "Umrah Express Package",
    duration: "7 Days / 6 Nights",
    rating: 4.8,
    reviewCount: 174,
    highlights: [
      "Short-stay convenience",
      "Hotel near Haram",
      "Pre-departure briefing",
    ],
    price: "$1,999",
    image:
      "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Worshippers around the Kaaba",
    href: "/tour-packages/umrah-express",
  },
];

const CATEGORIES: Category[] = [
  { id: "leisure", label: "Leisure / Holiday", packages: LEISURE_PACKAGES },
  {
    id: "honeymoon",
    label: "Honeymoon & Romance",
    packages: HONEYMOON_PACKAGES,
  },
  { id: "family", label: "Family Packages", packages: FAMILY_PACKAGES },
  {
    id: "corporate",
    label: "Corporate & Group Travel",
    packages: CORPORATE_PACKAGES,
  },
  { id: "hajj-umrah", label: "Hajj & Umrah Packages", packages: HAJJ_PACKAGES },
];

function FindYourJourneySection() {
  const [activeCategoryId, setActiveCategoryId] =
    useState<CategoryId>("leisure");
  const baseId = useId();

  const activeCategory =
    CATEGORIES.find((c) => c.id === activeCategoryId) ?? CATEGORIES[0];

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
            <span id="find-your-journey-heading">Find Your Perfect Journey</span>
          }
          subtitle="Browse our full range of curated travel experiences — from island honeymoons to spiritual pilgrimages."
        />

        <div
          role="tablist"
          aria-label="Tour package categories"
          className="mt-10 flex w-full flex-wrap items-center justify-center gap-2 sm:gap-3"
        >
          {CATEGORIES.map((category) => {
            const isActive = category.id === activeCategoryId;
            const tabId = `${baseId}-tab-${category.id}`;
            const panelId = `${baseId}-panel-${category.id}`;
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                id={tabId}
                aria-selected={isActive}
                aria-controls={panelId}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveCategoryId(category.id)}
                className={cn(
                  "rounded-md px-4 py-2 text-sm font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  isActive
                    ? "bg-brand-light-blue text-primary-foreground"
                    : "bg-card text-muted-foreground hover:bg-card/70 hover:text-foreground",
                )}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        <div
          id={`${baseId}-panel-${activeCategory.id}`}
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-${activeCategory.id}`}
          className="mt-10"
        >
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {activeCategory.packages.map((pkg) => (
              <li key={pkg.title} className="flex">
                <TourPackageCard {...pkg} className="h-full" />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}

export { FindYourJourneySection };
