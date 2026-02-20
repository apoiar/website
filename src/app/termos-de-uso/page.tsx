import { getServerLocale } from "@/lib/i18n/server-locale";
import { LegalPageLayout } from "@/components/pages/legal-page-layout";
import { getLegalContent } from "@/config/legal-content";

export default async function Page() {
  const locale = await getServerLocale();
  const html = getLegalContent(locale, "terms");

  return (
    <LegalPageLayout locale={locale} title="Termos de Uso" pageType="terms">
      <div className="legal-doc" dangerouslySetInnerHTML={{ __html: html }} />
    </LegalPageLayout>
  );
}
