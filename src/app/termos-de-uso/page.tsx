import { LegalPageLayout } from "@/components/pages/legal-page-layout";
import type { Locale } from "@/config/i18n";

export default function Page() {
  const locale: Locale = "pt";

  return <LegalPageLayout locale={locale} pageType="terms" />;
}
