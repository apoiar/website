import { DEFAULT_LOCALE, type Locale, isLocale } from "@/config/i18n";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://apoiar.com.br";

export type SiteMetaSchema = {
  siteName: string;
  title: string;
  description: string;
  keywords: string[];
  openGraphLocale: string;
  organizationAvailableLanguage: string;
  localBusinessDescription: string;
  localBusinessServiceTypes: string[];
  websiteDescription: string;
  ogAlt: string;
  ogHeadline: string;
  ogSubheadline: string;
};

const SITE_META_BY_LOCALE: Record<Locale, SiteMetaSchema> = {
  pt: {
    siteName: "APOIAR - Consultoria & BPO",
    title: "APOIAR - Consultoria & BPO | Trabalhamos pela sua Qualidade de Vida",
    description:
      "A gestão eficiente permite que você saia da caixa e invista tempo no que realmente importa. Mentoria personalizada e apoio operacional para empresários.",
    keywords: [
      "consultoria empresarial",
      "BPO",
      "mentoria empresarial",
      "gestão de negócios",
      "apoio operacional",
      "gestão financeira",
      "terceirização",
      "qualidade de vida empresário",
      "mentoria para empresários",
      "consultoria São Paulo",
      "gestão de pessoas",
      "APOIAR",
    ],
    openGraphLocale: "pt_BR",
    organizationAvailableLanguage: "Portuguese",
    localBusinessDescription:
      "Consultoria empresarial e BPO com mentoria personalizada para empresários. Gestão financeira, RH, administrativo e apoio operacional completo.",
    localBusinessServiceTypes: [
      "Consultoria Empresarial",
      "BPO - Business Process Outsourcing",
      "Mentoria para Empresários",
      "Gestão Financeira",
      "Gestão de RH",
      "Apoio Administrativo",
    ],
    websiteDescription:
      "Trabalhamos pela sua qualidade de vida. Mentoria personalizada e apoio operacional para empresários.",
    ogAlt: "APOIAR - Consultoria & BPO",
    ogHeadline: "Consulting & BPO",
    ogSubheadline: "Business mentorship and operations support",
  },
  en: {
    siteName: "APOIAR - Consulting & BPO",
    title: "APOIAR - Consulting & BPO | We work for your Quality of Life",
    description:
      "Efficient management helps you step back from daily operations and invest time in what matters most. Personalized mentorship and operational support for business owners.",
    keywords: [
      "business consulting",
      "BPO",
      "business mentorship",
      "business management",
      "operational support",
      "financial management",
      "outsourcing",
      "entrepreneur quality of life",
      "mentorship for business owners",
      "Sao Paulo consulting",
      "people management",
      "APOIAR",
    ],
    openGraphLocale: "en_US",
    organizationAvailableLanguage: "English",
    localBusinessDescription:
      "Business consulting and BPO with personalized mentorship for entrepreneurs. Financial, HR, administrative, and full operations support.",
    localBusinessServiceTypes: [
      "Business Consulting",
      "BPO - Business Process Outsourcing",
      "Entrepreneur Mentorship",
      "Financial Management",
      "HR Management",
      "Administrative Support",
    ],
    websiteDescription:
      "We work for your quality of life. Personalized mentorship and operational support for business owners.",
    ogAlt: "APOIAR - Consulting & BPO",
    ogHeadline: "Consulting & BPO",
    ogSubheadline: "Business mentorship and operations support",
  },
  es: {
    siteName: "APOIAR - Consultoria & BPO",
    title: "APOIAR - Consultoria & BPO | Trabajamos por tu Calidad de Vida",
    description:
      "La gestion eficiente te ayuda a salir de la operacion diaria e invertir tiempo en lo que mas importa. Mentoria personalizada y apoyo operativo para empresarios.",
    keywords: [
      "consultoria empresarial",
      "BPO",
      "mentoria empresarial",
      "gestion de negocios",
      "apoyo operativo",
      "gestion financiera",
      "tercerizacion",
      "calidad de vida empresario",
      "mentoria para empresarios",
      "consultoria Sao Paulo",
      "gestion de personas",
      "APOIAR",
    ],
    openGraphLocale: "es_ES",
    organizationAvailableLanguage: "Spanish",
    localBusinessDescription:
      "Consultoria empresarial y BPO con mentoria personalizada para empresarios. Gestion financiera, RRHH, administrativo y apoyo operativo completo.",
    localBusinessServiceTypes: [
      "Consultoria Empresarial",
      "BPO - Business Process Outsourcing",
      "Mentoria para Empresarios",
      "Gestion Financiera",
      "Gestion de RRHH",
      "Apoyo Administrativo",
    ],
    websiteDescription:
      "Trabajamos por tu calidad de vida. Mentoria personalizada y apoyo operativo para empresarios.",
    ogAlt: "APOIAR - Consultoria & BPO",
    ogHeadline: "Consulting & BPO",
    ogSubheadline: "Business mentorship and operations support",
  },
};

export function getSiteMeta(locale: string | Locale): SiteMetaSchema {
  if (isLocale(locale)) {
    return SITE_META_BY_LOCALE[locale];
  }

  return SITE_META_BY_LOCALE[DEFAULT_LOCALE];
}
