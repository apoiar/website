"use client";

import {
  Apoio,
  ApoioMei,
  CTA,
  Footer,
  Hero,
  Mentoria,
  Navbar,
  Resultados,
  Tecnologia,
  Testimonials,
  WhatsAppButton,
} from "@/components";
import { getContent } from "@/config/content";
import { getLangTag, type Locale } from "@/config/i18n";
import { SITE_URL, getSiteMeta } from "@/config/site";
import { getLocaleFromCookie } from "@/lib/i18n/client-locale";
import { useEffect, useState } from "react";

type LocalizedHomePageProps = {
  locale: Locale;
};

export function LocalizedHomePage({ locale }: LocalizedHomePageProps) {
  const [activeLocale, setActiveLocale] = useState<Locale>(locale);

  useEffect(() => {
    const localeFromCookie = getLocaleFromCookie();
    if (localeFromCookie) {
      setActiveLocale(localeFromCookie);
    }
  }, []);

  const content = getContent(activeLocale);
  const siteMeta = getSiteMeta(activeLocale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: content.brand.legalName,
        url: `${SITE_URL}/`,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/assets/APOIAR_sem_fundo.png`,
        },
        contactPoint: {
          "@type": "ContactPoint",
          email: content.contact.email,
          contactType: "customer service",
          availableLanguage: siteMeta.organizationAvailableLanguage,
        },
        sameAs: content.socialLinks.map((link) => link.href).filter((href) => href !== "#"),
      },
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#localbusiness`,
        name: content.brand.legalName,
        description: siteMeta.localBusinessDescription,
        url: `${SITE_URL}/`,
        email: content.contact.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: content.contact.city,
          addressRegion: content.contact.region,
          addressCountry: "BR",
        },
        priceRange: "$$",
        serviceType: siteMeta.localBusinessServiceTypes,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: siteMeta.siteName,
        description: siteMeta.websiteDescription,
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
        inLanguage: getLangTag(activeLocale),
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: `${SITE_URL}/`,
        name: siteMeta.title,
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        about: {
          "@id": `${SITE_URL}/#organization`,
        },
        description: siteMeta.description,
        inLanguage: getLangTag(activeLocale),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-warm-50 font-sans">
        <Navbar content={content} locale={activeLocale} onLocaleChange={setActiveLocale} />
        <Hero content={content.hero} />
        <Mentoria content={content.mentoria} />
        <Apoio content={content.apoio} />
        <ApoioMei content={content.apoioMei} />
        <Resultados content={content.resultados} />
        <Testimonials content={content.testimonials} />
        <Tecnologia content={content.tecnologia} ui={content.ui} />
        <CTA content={content.cta} contact={content.contact} />
        <Footer content={content} />
        <WhatsAppButton href={content.contact.whatsappUrl} ariaLabel={content.ui.whatsappAriaLabel} />
      </div>
    </>
  );
}
