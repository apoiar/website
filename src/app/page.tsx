import { LocalizedHomePage } from "@/components/pages/localized-home-page";
import { getServerLocale } from "@/lib/i18n/server-locale";

export default async function RootPage() {
  const locale = await getServerLocale();

  return <LocalizedHomePage locale={locale} />;
}
