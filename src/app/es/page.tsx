import { LocalizedHomePage } from "@/components/pages/localized-home-page";
import { buildLocaleMetadata } from "@/lib/seo/locale-metadata";

export const metadata = buildLocaleMetadata("es");

export default function EsPage() {
  return <LocalizedHomePage locale="es" />;
}
