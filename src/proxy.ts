import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE,
  getPreferredLocaleFromAcceptLanguage,
  isLocale,
} from "@/config/i18n";

const ONE_YEAR_SECONDS = 60 * 60 * 24 * 365;

function buildLocaleCookieValue(request: NextRequest, locale: string) {
  return {
    name: LOCALE_COOKIE,
    value: locale,
    path: "/",
    maxAge: ONE_YEAR_SECONDS,
    sameSite: "lax" as const,
    secure: request.nextUrl.protocol === "https:",
  };
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/") {
    const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
    const localeFromCookie = isLocale(cookieLocale) ? cookieLocale : null;
    const locale =
      localeFromCookie ?? getPreferredLocaleFromAcceptLanguage(request.headers.get("accept-language"));

    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = `/${locale}`;

    const response = NextResponse.redirect(redirectUrl);
    response.cookies.set(buildLocaleCookieValue(request, locale));
    return response;
  }

  const firstSegment = pathname.split("/").filter(Boolean)[0];

  if (!isLocale(firstSegment)) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = `/${DEFAULT_LOCALE}`;
    return NextResponse.redirect(redirectUrl);
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", firstSegment);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  response.cookies.set(buildLocaleCookieValue(request, firstSegment));

  return response;
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
