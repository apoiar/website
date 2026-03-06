import { OuvidoriaPage } from "@/components/pages/ouvidoria-page";
import type { Locale } from "@/config/i18n";

export default function Page() {
  const locale: Locale = "pt";

  return <OuvidoriaPage locale={locale} />;
}
