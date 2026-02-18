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
import { BRAND, CONTACT, SOCIAL_LINKS } from "@/config/content";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "@/config/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: BRAND.legalName,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/assets/APOIAR_sem_fundo.png`,
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: CONTACT.email,
        contactType: "customer service",
        availableLanguage: "Portuguese",
      },
      sameAs: SOCIAL_LINKS.map((link) => link.href).filter((href) => href !== "#"),
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#localbusiness`,
      name: BRAND.legalName,
      description:
        "Consultoria empresarial e BPO com mentoria personalizada para empresarios. Gestao financeira, RH, administrativo e apoio operacional completo.",
      url: SITE_URL,
      email: CONTACT.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: CONTACT.city,
        addressRegion: CONTACT.region,
        addressCountry: "BR",
      },
      priceRange: "$$",
      serviceType: [
        "Consultoria Empresarial",
        "BPO - Business Process Outsourcing",
        "Mentoria para Empresarios",
        "Gestao Financeira",
        "Gestao de RH",
        "Apoio Administrativo",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description:
        "Trabalhamos pela sua qualidade de vida. Mentoria personalizada e apoio operacional para empresarios.",
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      inLanguage: "pt-BR",
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: SITE_TITLE,
      isPartOf: {
        "@id": `${SITE_URL}/#website`,
      },
      about: {
        "@id": `${SITE_URL}/#organization`,
      },
      description: SITE_DESCRIPTION,
      inLanguage: "pt-BR",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-warm-50 font-sans">
        <Navbar />
        <Hero />
        <Mentoria />
        <Apoio />
        <Resultados />
        <Testimonials />
        <CTA />
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}
