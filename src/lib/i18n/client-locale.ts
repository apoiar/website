import { LOCALE_COOKIE, type Locale, isLocale } from "@/config/i18n";

export function getLocaleFromCookie(): Locale | null {
  if (typeof document === "undefined") {
    return null;
  }

  const match = document.cookie
    .split(";")
    .map((chunk) => chunk.trim())
    .find((chunk) => chunk.startsWith(`${LOCALE_COOKIE}=`));

  if (!match) {
    return null;
  }

  const value = decodeURIComponent(match.split("=")[1] ?? "");
  return isLocale(value) ? value : null;
}
