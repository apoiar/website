"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import type { ContentSchema } from "@/config/content";
import { LOCALE_COOKIE, LOCALES, type Locale } from "@/config/i18n";

type NavbarProps = {
  content: ContentSchema;
  locale: Locale;
};

const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;
const LOCALE_FLAG_SRC: Record<Locale, string> = {
  pt: "/assets/flags/brazil.png",
  en: "/assets/flags/usa.png",
  es: "/assets/flags/spain.png",
};

function persistLocaleCookie(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=${COOKIE_MAX_AGE}; samesite=lax`;
}

export function Navbar({ content, locale }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopLanguageOpen, setDesktopLanguageOpen] = useState(false);
  const [mobileLanguageOpen, setMobileLanguageOpen] = useState(false);
  const desktopLanguageRef = useRef<HTMLDivElement>(null);
  const mobileLanguageRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleLocaleChange = (nextLocale: Locale) => {
    persistLocaleCookie(nextLocale);
    setMobileMenuOpen(false);
    setDesktopLanguageOpen(false);
    setMobileLanguageOpen(false);

    const hash = typeof window !== "undefined" ? window.location.hash : "";
    router.push(`/${nextLocale}${hash}`);
  };

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as Node;

      if (desktopLanguageRef.current && !desktopLanguageRef.current.contains(target)) {
        setDesktopLanguageOpen(false);
      }

      if (mobileLanguageRef.current && !mobileLanguageRef.current.contains(target)) {
        setMobileLanguageOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDesktopLanguageOpen(false);
        setMobileLanguageOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#" className="flex items-center space-x-2">
            <Image
              src="/assets/APOIAR_sem_fundo.png"
              alt="APOIAR"
              width={220}
              height={58}
              className="h-12 w-auto"
              priority
            />
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {content.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-stone-600 hover:text-lime-600 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <div className="relative" ref={desktopLanguageRef}>
              <button
                type="button"
                onClick={() => setDesktopLanguageOpen((current) => !current)}
                className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-3 py-2 text-sm font-semibold text-stone-700 hover:border-lime-500 focus:outline-none focus:ring-2 focus:ring-lime-400"
                aria-label={content.ui.languageLabel}
                aria-expanded={desktopLanguageOpen}
                aria-haspopup="menu"
              >
                <Image
                  src={LOCALE_FLAG_SRC[locale]}
                  alt={content.ui.languageOptions[locale]}
                  width={22}
                  height={22}
                  className="h-[22px] w-[22px] rounded-full object-cover"
                />
                <ChevronDown
                  className={`h-4 w-4 text-stone-500 transition-transform ${
                    desktopLanguageOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {desktopLanguageOpen && (
                <div
                  role="menu"
                  className="absolute right-0 top-full z-50 mt-2 w-36 rounded-2xl border border-stone-200 bg-white p-2 shadow-lg"
                >
                  {LOCALES.map((optionLocale) => {
                    const isActive = optionLocale === locale;

                    return (
                      <button
                        key={optionLocale}
                        type="button"
                        role="menuitem"
                        onClick={() => handleLocaleChange(optionLocale)}
                        className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm font-semibold transition-colors ${
                          isActive
                            ? "bg-lime-100 text-lime-700"
                            : "text-stone-700 hover:bg-stone-100 hover:text-lime-700"
                        }`}
                      >
                        <span className="inline-flex items-center gap-2">
                          <Image
                            src={LOCALE_FLAG_SRC[optionLocale]}
                            alt={content.ui.languageOptions[optionLocale]}
                            width={20}
                            height={20}
                            className="h-5 w-5 rounded-full object-cover"
                          />
                          {content.ui.languageOptions[optionLocale]}
                        </span>
                        {isActive ? <span className="text-xs font-bold">●</span> : null}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
            <a
              href={`#${content.contact.sectionId}`}
              className="inline-flex bg-lime-500 hover:bg-lime-600 text-white px-6 py-3 rounded-full font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              {content.ui.navbarContactCta}
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-stone-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={content.ui.openMenuAria}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-6 space-y-4">
            {content.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-stone-600 hover:text-lime-600 transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="relative" ref={mobileLanguageRef}>
              <button
                type="button"
                onClick={() => setMobileLanguageOpen((current) => !current)}
                className="flex w-full items-center justify-between rounded-full border border-stone-200 bg-white px-4 py-3 text-sm font-semibold text-stone-700 hover:border-lime-500 focus:outline-none focus:ring-2 focus:ring-lime-400"
                aria-label={content.ui.languageLabel}
                aria-expanded={mobileLanguageOpen}
                aria-haspopup="menu"
              >
                <span className="inline-flex items-center gap-2">
                  <Image
                    src={LOCALE_FLAG_SRC[locale]}
                    alt={content.ui.languageOptions[locale]}
                    width={22}
                    height={22}
                    className="h-[22px] w-[22px] rounded-full object-cover"
                  />
                </span>
                <ChevronDown
                  className={`h-4 w-4 text-stone-500 transition-transform ${
                    mobileLanguageOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileLanguageOpen && (
                <div role="menu" className="mt-2 space-y-2 rounded-2xl border border-stone-200 bg-white p-2">
                  {LOCALES.map((optionLocale) => {
                    const isActive = optionLocale === locale;

                    return (
                      <button
                        key={optionLocale}
                        type="button"
                        role="menuitem"
                        onClick={() => handleLocaleChange(optionLocale)}
                        className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm font-semibold transition-colors ${
                          isActive
                            ? "bg-lime-100 text-lime-700"
                            : "text-stone-700 hover:bg-stone-100 hover:text-lime-700"
                        }`}
                      >
                        <span className="inline-flex items-center gap-2">
                          <Image
                            src={LOCALE_FLAG_SRC[optionLocale]}
                            alt={content.ui.languageOptions[optionLocale]}
                            width={20}
                            height={20}
                            className="h-5 w-5 rounded-full object-cover"
                          />
                          {content.ui.languageOptions[optionLocale]}
                        </span>
                        {isActive ? <span className="text-xs font-bold">●</span> : null}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
            <a
              href={`#${content.contact.sectionId}`}
              className="block bg-lime-500 hover:bg-lime-600 text-white px-6 py-3 rounded-full font-semibold text-center transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              {content.ui.navbarContactCta}
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
