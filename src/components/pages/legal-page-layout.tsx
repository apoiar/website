"use client";

import { Navbar, Footer, CTA, WhatsAppButton } from "@/components";
import { getContent } from "@/config/content";
import { type Locale } from "@/config/i18n";
import { getLegalContent, type LegalPageType } from "@/config/legal-content";
import { getLocaleFromCookie } from "@/lib/i18n/client-locale";
import { useEffect, useState } from "react";

type LegalPageLayoutProps = {
    locale: Locale;
    pageType: LegalPageType;
};

const LEGAL_TITLE_BY_LOCALE = {
    privacy: {
        pt: "Política de Privacidade",
        en: "Privacy Policy",
        es: "Política de Privacidad",
    },
    terms: {
        pt: "Termos de Uso",
        en: "Terms of Use",
        es: "Términos de Uso",
    },
} as const;

const LEGAL_NOTICE_BY_LOCALE = {
    en: "This is a courtesy translation. In case of divergence, the official Portuguese version prevails.",
    es: "Esta es una traducción de cortesía. En caso de divergencia, prevalece la versión oficial en portugués.",
} as const;

export function LegalPageLayout({ locale, pageType }: LegalPageLayoutProps) {
    const [activeLocale, setActiveLocale] = useState<Locale>(locale);

    useEffect(() => {
        const localeFromCookie = getLocaleFromCookie();
        if (localeFromCookie) {
            setActiveLocale(localeFromCookie);
        }
    }, []);

    const content = getContent(activeLocale);
    const localizedTitle = LEGAL_TITLE_BY_LOCALE[pageType][activeLocale];
    const localeNotice = activeLocale === "pt" ? null : LEGAL_NOTICE_BY_LOCALE[activeLocale];
    const html = getLegalContent(activeLocale, pageType);

    return (
        <div className="min-h-screen bg-warm-50 font-sans flex flex-col">
            <Navbar content={content} locale={activeLocale} onLocaleChange={setActiveLocale} />

            <main className="flex-grow pt-32 pb-24 px-6 max-w-4xl mx-auto w-full">
                <h1 className="text-4xl font-bold text-warm-900 mb-8">{localizedTitle}</h1>
                {localeNotice ? (
                    <div className="mb-6 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
                        {localeNotice}
                    </div>
                ) : null}
                <div className="bg-white rounded-3xl p-8 shadow-soft border border-stone-200/60">
                    <div className="legal-doc" dangerouslySetInnerHTML={{ __html: html }} />
                </div>
            </main>

            <CTA content={content.cta} contact={content.contact} />
            <Footer content={content} />
            <WhatsAppButton href={content.contact.whatsappUrl} ariaLabel={content.ui.whatsappAriaLabel} />
        </div>
    );
}
