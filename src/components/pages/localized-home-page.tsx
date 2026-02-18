import {
  Apoio,
  CTA,
  Footer,
  Hero,
  Mentoria,
  Navbar,
  Resultados,
  Testimonials,
  WhatsAppButton,
} from "@/components";
import { getContent } from "@/config/content";
import { getLangTag, type Locale } from "@/config/i18n";
import { SITE_URL, getSiteMeta } from "@/config/site";

type LocalizedHomePageProps = {
  locale: Locale;
};

export function LocalizedHomePage({ locale }: LocalizedHomePageProps) {
  const content = getContent(locale);
  const siteMeta = getSiteMeta(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/${locale}/#organization`,
        name: content.brand.legalName,
        url: `${SITE_URL}/${locale}`,
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
        "@id": `${SITE_URL}/${locale}/#localbusiness`,
        name: content.brand.legalName,
        description: siteMeta.localBusinessDescription,
        url: `${SITE_URL}/${locale}`,
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
        "@id": `${SITE_URL}/${locale}/#website`,
        url: `${SITE_URL}/${locale}`,
        name: siteMeta.siteName,
        description: siteMeta.websiteDescription,
        publisher: {
          "@id": `${SITE_URL}/${locale}/#organization`,
        },
        inLanguage: getLangTag(locale),
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/${locale}/#webpage`,
        url: `${SITE_URL}/${locale}`,
        name: siteMeta.title,
        isPartOf: {
          "@id": `${SITE_URL}/${locale}/#website`,
        },
        about: {
          "@id": `${SITE_URL}/${locale}/#organization`,
        },
        description: siteMeta.description,
        inLanguage: getLangTag(locale),
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
        <Navbar content={content} locale={locale} />
        <Hero content={content.hero} />
        <Mentoria content={content.mentoria} mentorImageOverlay={content.ui.mentorImageOverlay} />
        <Apoio content={content.apoio} />
        <Resultados content={content.resultados} />
        <Testimonials content={content.testimonials} />
        <CTA content={content.cta} contact={content.contact} />
        <Footer content={content} />
        <WhatsAppButton href={content.contact.whatsappUrl} ariaLabel={content.ui.whatsappAriaLabel} />
      </div>
    </>
  );
}
