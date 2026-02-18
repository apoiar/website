import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getContent } from "@/config/content";
import { DEFAULT_LOCALE, LOCALES, isLocale } from "@/config/i18n";
import { SITE_URL, getSiteMeta } from "@/config/site";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : DEFAULT_LOCALE;
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
          url: "/opengraph-image",
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
      images: ["/opengraph-image"],
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

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    redirect(`/${DEFAULT_LOCALE}`);
  }

  return children;
}
