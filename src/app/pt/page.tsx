import { LocalizedHomePage } from "@/components/pages/localized-home-page";
import { buildLocaleMetadata } from "@/lib/seo/locale-metadata";

export const metadata = buildLocaleMetadata("pt");

export default function PtPage() {
  return <LocalizedHomePage locale="pt" />;
}
