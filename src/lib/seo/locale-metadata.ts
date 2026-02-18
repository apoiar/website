import type { Metadata } from "next";
import { getContent } from "@/config/content";
import type { Locale } from "@/config/i18n";
import { SITE_URL, getSiteMeta } from "@/config/site";

const OPEN_GRAPH_IMAGE = "/assets/og-image.png";

export function buildLocaleMetadata(locale: Locale): Metadata {
  const content = getContent(locale);
  const siteMeta = getSiteMeta(locale);

  return {
    metadataBase: new URL(SITE_URL),
    title: siteMeta.title,
    description: siteMeta.description,
    keywords: siteMeta.keywords,
    authors: [{ name: content.brand.legalName }],
    creator: content.brand.legalName,
    openGraph: {
      title: siteMeta.title,
      description: siteMeta.description,
      url: `${SITE_URL}/${locale}`,
      siteName: siteMeta.siteName,
      type: "website",
      locale: siteMeta.openGraphLocale,
      images: [
        {
          url: OPEN_GRAPH_IMAGE,
          width: 1200,
          height: 630,
          alt: siteMeta.ogAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteMeta.title,
      description: siteMeta.description,
      images: [OPEN_GRAPH_IMAGE],
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        "pt-BR": "/pt",
        en: "/en",
        es: "/es",
        "x-default": "/pt",
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
