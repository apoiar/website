"use client";

import { useEffect } from "react";
import { DEFAULT_LOCALE, LOCALE_COOKIE, normalizeLocale } from "@/config/i18n";

function readLocaleCookie(): string | null {
  if (typeof document === "undefined") {
    return null;
  }

  const cookieKey = `${LOCALE_COOKIE}=`;
  const cookie = document.cookie
    .split(";")
    .map((entry) => entry.trim())
    .find((entry) => entry.startsWith(cookieKey));

  if (!cookie) {
    return null;
  }

  return cookie.slice(cookieKey.length);
}

function detectLocaleOnClient(): string {
  const cookieLocale = normalizeLocale(readLocaleCookie());

  if (cookieLocale) {
    return cookieLocale;
  }

  const browserLocale = normalizeLocale(typeof navigator !== "undefined" ? navigator.language : null);

  return browserLocale ?? DEFAULT_LOCALE;
}

export default function RootPage() {
  useEffect(() => {
    const locale = detectLocaleOnClient();
    window.location.replace(`/${locale}`);
  }, []);

  return null;
}
