import type { MetadataRoute } from "next";
import { LOCALES } from "@/config/i18n";
import { SITE_URL } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = Object.fromEntries(LOCALES.map((locale) => [locale, `${SITE_URL}/${locale}`]));

  return LOCALES.map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: locale === "pt" ? 1 : 0.8,
    alternates: {
      languages: locales,
    },
  }));
}
