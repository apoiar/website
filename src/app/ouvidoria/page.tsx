import { OuvidoriaPage } from "@/components/pages/ouvidoria-page";
import { getServerLocale } from "@/lib/i18n/server-locale";

export default async function Page() {
  const locale = await getServerLocale();

  return <OuvidoriaPage locale={locale} />;
}
