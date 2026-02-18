import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { GoogleAnalytics } from "@/lib/analytics/google-analytics";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${plusJakartaSans.variable} antialiased`}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
