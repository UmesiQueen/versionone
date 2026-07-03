import type { Metadata } from "next";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "";

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
  /** Article publish date (ISO 8601) for og:type=article. */
  publishedTime?: string;
  /** Article last-modified date (ISO 8601) for og:type=article. */
  modifiedTime?: string;
  /** Force noindex regardless of env (e.g. internal pages). */
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
