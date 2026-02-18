export const LOCALES = ["pt", "en", "es"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "pt";
export const LOCALE_COOKIE = "locale";

const LOCALE_TO_LANG_TAG: Record<Locale, string> = {
  pt: "pt-BR",
  en: "en",
  es: "es",
};

export function isLocale(value: string | null | undefined): value is Locale {
  return LOCALES.includes(value as Locale);
}

export function normalizeLocale(value: string | null | undefined): Locale | null {
  if (!value) {
    return null;
  }

  const lowered = value.toLowerCase();

  for (const locale of LOCALES) {
    if (lowered === locale || lowered.startsWith(`${locale}-`)) {
      return locale;
    }
  }

  return null;
}

export function getPreferredLocaleFromAcceptLanguage(
  acceptLanguage: string | null | undefined
): Locale {
  if (!acceptLanguage) {
    return DEFAULT_LOCALE;
  }

  const languages = acceptLanguage
    .split(",")
    .map((part) => part.split(";")[0]?.trim())
    .filter(Boolean);

  for (const language of languages) {
    const locale = normalizeLocale(language);

    if (locale) {
      return locale;
    }
  }

  return DEFAULT_LOCALE;
}

export function getLangTag(locale: Locale): string {
  return LOCALE_TO_LANG_TAG[locale];
}
