import type { Metadata } from "next";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://versiononetravels.com";

export const siteConfig = {
  name: "VersionOne",
  shortName: "VersionOne",
  url: SITE_URL,
  title: "VersionOne — Your Gateway to Global Opportunities",
  description:
    "VersionOne helps individuals, families, professionals, corporate organizations, and investors navigate immigration, travel, study, and investment migration — with expert guidance at every step.",
  ogImage: `${SITE_URL}/opengraph-image.png`,
  locale: "en_US",
  twitterHandle: "@version1travels",
  themeColor: "#004e99",
  keywords: [
    "immigration",
    "visa services",
    "study abroad",
    "work abroad",
    "investment migration",
    "residency by investment",
    "citizenship by investment",
    "global mobility",
    "travel services",
    "VersionOne",
  ],
  authors: [{ name: "VersionOne", url: SITE_URL }],
} as const;

export const businessInfo = {
  legalName: "VersionOne Travels",
  telephone: "+2348170000165",
  email: "ph@versiononetravels.com",
  address: {
    streetAddress: "24 Olu-Obasanjo Road",
    addressLocality: "Port Harcourt",
    addressRegion: "Rivers State",
    postalCode: "500272",
    addressCountry: "NG",
  },
  openingHours: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    { days: ["Saturday"], opens: "09:00", closes: "15:00" },
  ],
  sameAs: [
    "https://x.com/version1travels",
    "https://facebook.com/versiononetravels",
    "https://instagram.com/versiononetravels",
    "https://youtube.com/@versiononetravels7070",
  ],
  areaServed: ["Port Harcourt", "Rivers State", "Nigeria"],
} as const;

/**
 * JSON-LD for the LocalBusiness entity (schema.org TravelAgency, a
 * LocalBusiness subtype). Rendered once, site-wide, from the root layout —
 * this is what feeds Google's local relevance/prominence signals for
 * "immigration services near me"-style and Port Harcourt-specific queries.
 *
 * Note: no `geo` (lat/long) coordinates are included yet — add them once
 * available (right-click the office location on Google Maps to copy exact
 * coordinates) for a stronger local-pack signal.
 */
export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": `${siteConfig.url}/#business`,
    name: businessInfo.legalName,
    url: siteConfig.url,
    image: siteConfig.ogImage,
    description: siteConfig.description,
    telephone: businessInfo.telephone,
    email: businessInfo.email,
    address: {
      "@type": "PostalAddress",
      ...businessInfo.address,
    },
    openingHoursSpecification: businessInfo.openingHours.map((slot) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: slot.days,
      opens: slot.opens,
      closes: slot.closes,
    })),
    areaServed: businessInfo.areaServed.map((name) => ({
      "@type": "Place",
      name,
    })),
    sameAs: businessInfo.sameAs,
  };
}

/** Whether this build should be hidden from crawlers (staging). */
function isNoIndex(): boolean {
  return process.env.NEXT_PUBLIC_APP_ENV === "staging";
}

export type BuildMetadataInput = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  imageAlt?: string;
  keywords?: string[];
  type?: "website" | "article" | "profile";
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
};

export function buildMetadata({
  title,
  description,
  path = "/",
  image,
  imageAlt,
  keywords,
  type = "website",
  publishedTime,
  modifiedTime,
  noIndex,
}: BuildMetadataInput = {}): Metadata {
  const url = new URL(path, siteConfig.url).toString();
  const resolvedDescription = description ?? siteConfig.description;
  const resolvedTitle = title ?? siteConfig.title;
  const ogImage = image
    ? new URL(image, siteConfig.url).toString()
    : siteConfig.ogImage;
  const ogImageAlt = imageAlt ?? resolvedTitle;
  const shouldNoIndex = noIndex || isNoIndex();

  return {
    title: resolvedTitle,
    description: resolvedDescription,
    keywords: keywords
      ? [...siteConfig.keywords, ...keywords]
      : [...siteConfig.keywords],
    authors: [...siteConfig.authors],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    applicationName: siteConfig.name,
    referrer: "origin-when-cross-origin",
    category: "Immigration & Global Mobility Services",

    alternates: {
      canonical: url,
      languages: {
        "en-US": url,
        "x-default": url,
      },
    },

    openGraph: {
      type,
      siteName: siteConfig.name,
      title: resolvedTitle,
      description: resolvedDescription,
      url,
      locale: siteConfig.locale,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: ogImageAlt,
        },
      ],
      ...(type === "article" && (publishedTime || modifiedTime)
        ? { publishedTime, modifiedTime }
        : {}),
    },

    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description: resolvedDescription,
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
      images: [ogImage],
    },

    robots: shouldNoIndex
      ? {
        index: false,
        follow: false,
        nocache: true,
        googleBot: {
          index: false,
          follow: false,
          noimageindex: true,
        },
      }
      : {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
          index: true,
          follow: true,
          noimageindex: false,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },

    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
  };
}
