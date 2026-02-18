import { LocalizedHomePage } from "@/components/pages/localized-home-page";
import { buildLocaleMetadata } from "@/lib/seo/locale-metadata";

export const metadata = buildLocaleMetadata("en");

export default function EnPage() {
  return <LocalizedHomePage locale="en" />;
}
