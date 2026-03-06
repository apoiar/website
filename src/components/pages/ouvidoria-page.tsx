"use client";

import { Footer, Navbar, WhatsAppButton, CTA } from "@/components";
import { OuvidoriaForm } from "@/components/sections/ouvidoria-form";
import { getContent } from "@/config/content";
import type { Locale } from "@/config/i18n";
import { getLocaleFromCookie } from "@/lib/i18n/client-locale";
import { useEffect, useState } from "react";

type OuvidoriaPageProps = {
  locale: Locale;
};

export function OuvidoriaPage({ locale }: OuvidoriaPageProps) {
  const [activeLocale, setActiveLocale] = useState<Locale>(locale);

  useEffect(() => {
    const localeFromCookie = getLocaleFromCookie();
    if (localeFromCookie) {
      setActiveLocale(localeFromCookie);
    }
  }, []);

  const content = getContent(activeLocale);
  const ouvidoria = content.ouvidoria;

  return (
    <div className="min-h-screen bg-warm-50 font-sans">
      <Navbar content={content} locale={activeLocale} onLocaleChange={setActiveLocale} />

      <main className="mx-auto grid w-full max-w-7xl gap-10 px-6 pb-24 pt-32 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-8">
        <section className="space-y-8">
          <div className="space-y-4">
            <span className="inline-flex rounded-full bg-lime-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-lime-700">
              {ouvidoria.badge}
            </span>
            <h1 className="text-3xl font-bold text-warm-900 md:text-5xl">{ouvidoria.title}</h1>
            <p className="max-w-3xl text-base text-stone-600 md:text-lg">{ouvidoria.description}</p>
          </div>

          <div className="rounded-[2rem] border border-stone-200/60 bg-white p-6 shadow-soft md:p-10">
            <div className="mb-8 space-y-2">
              <h2 className="text-2xl font-bold text-warm-900">{ouvidoria.formTitle}</h2>
              <p className="text-sm text-stone-600 md:text-base">{ouvidoria.formDescription}</p>
            </div>
            <OuvidoriaForm content={ouvidoria} />
          </div>
        </section>

        <aside className="h-fit space-y-4 rounded-[2rem] border border-stone-200/70 bg-white p-6 shadow-soft">
          <h3 className="text-lg font-bold text-warm-900">{ouvidoria.sidebarTitle}</h3>
          <ul className="space-y-3 text-sm text-stone-600">
            {ouvidoria.sidebarItems.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-lime-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </aside>
      </main>

      <CTA content={content.cta} contact={content.contact} />
      <Footer content={content} />
      <WhatsAppButton href={content.contact.whatsappUrl} ariaLabel={content.ui.whatsappAriaLabel} />
    </div>
  );
}
