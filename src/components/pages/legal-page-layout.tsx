import { Navbar, Footer, CTA, WhatsAppButton } from "@/components";
import { getContent } from "@/config/content";
import { type Locale } from "@/config/i18n";
import { ReactNode } from "react";

type LegalPageLayoutProps = {
    locale: Locale;
    title: string;
    pageType?: "privacy" | "terms";
    children: ReactNode;
};

const LEGAL_TITLE_BY_LOCALE = {
    privacy: {
        pt: "Politica de Privacidade",
        en: "Privacy Policy",
        es: "Politica de Privacidad",
    },
    terms: {
        pt: "Termos de Uso",
        en: "Terms of Use",
        es: "Terminos de Uso",
    },
} as const;

const LEGAL_NOTICE_BY_LOCALE = {
    en: "This is a courtesy translation. In case of divergence, the official Portuguese version prevails.",
    es: "Esta es una traduccion de cortesia. En caso de divergencia, prevalece la version oficial en portugues.",
} as const;

export function LegalPageLayout({ locale, title, pageType, children }: LegalPageLayoutProps) {
    const content = getContent(locale);
    const localizedTitle = pageType ? LEGAL_TITLE_BY_LOCALE[pageType][locale] : title;
    const localeNotice = locale === "pt" ? null : LEGAL_NOTICE_BY_LOCALE[locale];

    return (
        <div className="min-h-screen bg-warm-50 font-sans flex flex-col">
            <Navbar content={content} locale={locale} />

            <main className="flex-grow pt-32 pb-24 px-6 max-w-4xl mx-auto w-full">
                <h1 className="text-4xl font-bold text-warm-900 mb-8">{localizedTitle}</h1>
                {localeNotice ? (
                    <div className="mb-6 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
                        {localeNotice}
                    </div>
                ) : null}
                <div className="bg-white rounded-3xl p-8 shadow-soft border border-stone-200/60">
                    {children}
                </div>
            </main>

            <CTA content={content.cta} contact={content.contact} />
            <Footer content={content} />
            <WhatsAppButton href={content.contact.whatsappUrl} ariaLabel={content.ui.whatsappAriaLabel} />
        </div>
    );
}
