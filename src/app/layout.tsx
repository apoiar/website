import type { Metadata } from "next";
import { headers } from "next/headers";
import { Plus_Jakarta_Sans } from "next/font/google";
import { GoogleAnalytics } from "@/lib/analytics/google-analytics";
import { DEFAULT_LOCALE, getLangTag, isLocale } from "@/config/i18n";
import { SITE_URL } from "@/config/site";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: [{ url: "/assets/APOIAR_LOGO.png", type: "image/png" }],
    shortcut: ["/assets/APOIAR_LOGO.png"],
    apple: [{ url: "/assets/APOIAR_LOGO.png" }],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const requestHeaders = await headers();
  const localeHeader = requestHeaders.get("x-locale");
  const locale = isLocale(localeHeader) ? localeHeader : DEFAULT_LOCALE;

  return (
    <html lang={getLangTag(locale)}>
      <body className={`${plusJakartaSans.variable} antialiased`}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
