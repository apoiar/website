import { getServerLocale } from "@/lib/i18n/server-locale";
import { LegalPageLayout } from "@/components/pages/legal-page-layout";
import { getLegalContent } from "@/config/legal-content";

export default async function Page() {
  const locale = await getServerLocale();
  const html = getLegalContent(locale, "privacy");

  return (
    <LegalPageLayout locale={locale} title="Política de Privacidade" pageType="privacy">
      <div className="legal-doc" dangerouslySetInnerHTML={{ __html: html }} />
    </LegalPageLayout>
  );
}
