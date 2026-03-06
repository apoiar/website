import { LocalizedHomePage } from "@/components/pages/localized-home-page";
import type { Locale } from "@/config/i18n";

export default function RootPage() {
  const locale: Locale = "pt";

  return <LocalizedHomePage locale={locale} />;
}
