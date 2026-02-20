"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import type { ContentSchema } from "@/config/content";
import { LOCALE_COOKIE, LOCALES, type Locale } from "@/config/i18n";

type NavbarProps = {
  content: ContentSchema;
  locale: Locale;
};

type PortfolioGroup = {
  key: string;
  label: string;
  items: NonNullable<ContentSchema["navLinks"][number]["subItems"]>;
};

type Point = { x: number; y: number };

const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;
const PORTFOLIO_CLOSE_DELAY_MS = 160;

const LOCALE_FLAG_SRC: Record<Locale, string> = {
  pt: "/assets/flags/brazil.png",
  en: "/assets/flags/usa.png",
  es: "/assets/flags/spain.png",
};

function persistLocaleCookie(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=${COOKIE_MAX_AGE}; samesite=lax`;
}

function sign(p1: Point, p2: Point, p3: Point) {
  return (p1.x - p3.x) * (p2.y - p3.y) - (p2.x - p3.x) * (p1.y - p3.y);
}

function isPointInTriangle(point: Point, a: Point, b: Point, c: Point) {
  const d1 = sign(point, a, b);
  const d2 = sign(point, b, c);
  const d3 = sign(point, c, a);

  const hasNegative = d1 < 0 || d2 < 0 || d3 < 0;
  const hasPositive = d1 > 0 || d2 > 0 || d3 > 0;

  return !(hasNegative && hasPositive);
}

export function Navbar({ content, locale }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopLanguageOpen, setDesktopLanguageOpen] = useState(false);
  const [mobileLanguageOpen, setMobileLanguageOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [activePortfolioGroup, setActivePortfolioGroup] = useState<string | null>(null);
  const [mobileActivePortfolioGroup, setMobileActivePortfolioGroup] = useState<string | null>(null);
  const [mobilePortfolioOpen, setMobilePortfolioOpen] = useState(false);

  const desktopLanguageRef = useRef<HTMLDivElement>(null);
  const mobileLanguageRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const portfolioTriggerRef = useRef<HTMLAnchorElement>(null);
  const portfolioItemsRef = useRef<HTMLDivElement>(null);
  const groupButtonRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const itemLinkRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const closePortfolioTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const safetyOriginRef = useRef<Point | null>(null);
  const triangleProtectionActiveRef = useRef(false);

  const router = useRouter();
  const pathname = usePathname();

  const formatLink = (href: string) => {
    if (href.startsWith("http") || href.startsWith("mailto")) return href;
    if (href === "#") return href;
    if (href.startsWith("#")) return pathname === "/" ? href : `/${href}`;
    return href.startsWith("/") ? href : `/${href}`;
  };

  const portfolioLink = useMemo(() => content.navLinks.find((link) => link.subItems?.length), [content.navLinks]);

  const portfolioGroups = useMemo<PortfolioGroup[]>(() => {
    if (!portfolioLink?.subItems?.length) {
      return [];
    }

    const groups = new Map<string, PortfolioGroup>();

    for (const item of portfolioLink.subItems) {
      const normalizedGroup = item.group?.trim() || "default";

      if (!groups.has(normalizedGroup)) {
        groups.set(normalizedGroup, {
          key: normalizedGroup,
          label: item.group?.trim() || "Portfolio",
          items: [],
        });
      }

      groups.get(normalizedGroup)?.items.push(item);
    }

    return Array.from(groups.values()).filter((group) => group.items.length > 0);
  }, [portfolioLink]);

  const activeGroup = useMemo(
    () => portfolioGroups.find((group) => group.key === activePortfolioGroup) ?? portfolioGroups[0],
    [portfolioGroups, activePortfolioGroup],
  );

  const activeGroupIndex = useMemo(() => {
    if (!activeGroup) {
      return -1;
    }

    return portfolioGroups.findIndex((group) => group.key === activeGroup.key);
  }, [portfolioGroups, activeGroup]);

  const resetPortfolioSafetyTracking = () => {
    safetyOriginRef.current = null;
    triangleProtectionActiveRef.current = false;
  };

  const clearPortfolioCloseTimeout = (options?: { keepSafetyTracking?: boolean }) => {
    if (closePortfolioTimeoutRef.current) {
      clearTimeout(closePortfolioTimeoutRef.current);
      closePortfolioTimeoutRef.current = null;
    }

    if (!options?.keepSafetyTracking) {
      resetPortfolioSafetyTracking();
    }
  };

  const closePortfolio = () => {
    clearPortfolioCloseTimeout();
    setIsPortfolioOpen(false);
  };

  const openPortfolio = () => {
    clearPortfolioCloseTimeout();
    setIsPortfolioOpen(true);

    if (!activePortfolioGroup && portfolioGroups.length > 0) {
      setActivePortfolioGroup(portfolioGroups[0].key);
    }
  };

  const schedulePortfolioClose = (origin?: Point) => {
    clearPortfolioCloseTimeout({ keepSafetyTracking: true });

    if (origin) {
      safetyOriginRef.current = origin;
      triangleProtectionActiveRef.current = true;
    } else {
      resetPortfolioSafetyTracking();
    }

    closePortfolioTimeoutRef.current = setTimeout(() => {
      setIsPortfolioOpen(false);
      resetPortfolioSafetyTracking();
      closePortfolioTimeoutRef.current = null;
    }, PORTFOLIO_CLOSE_DELAY_MS);
  };

  const handleLocaleChange = (nextLocale: Locale) => {
    persistLocaleCookie(nextLocale);
    setMobileMenuOpen(false);
    setDesktopLanguageOpen(false);
    setMobileLanguageOpen(false);

    router.refresh();
  };

  const focusGroupByIndex = (nextIndex: number) => {
    if (!portfolioGroups.length) {
      return;
    }

    const total = portfolioGroups.length;
    const safeIndex = ((nextIndex % total) + total) % total;
    const nextGroup = portfolioGroups[safeIndex];

    setActivePortfolioGroup(nextGroup.key);
    groupButtonRefs.current[safeIndex]?.focus();
  };

  const focusItemByIndex = (nextIndex: number) => {
    if (!activeGroup?.items.length) {
      return;
    }

    const total = activeGroup.items.length;
    const safeIndex = ((nextIndex % total) + total) % total;

    itemLinkRefs.current[safeIndex]?.focus();
  };

  useEffect(() => {
    if (!portfolioGroups.length) {
      setActivePortfolioGroup(null);
      return;
    }

    if (!activePortfolioGroup || !portfolioGroups.some((group) => group.key === activePortfolioGroup)) {
      setActivePortfolioGroup(portfolioGroups[0].key);
    }
  }, [portfolioGroups, activePortfolioGroup]);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as Node;

      if (desktopLanguageRef.current && !desktopLanguageRef.current.contains(target)) {
        setDesktopLanguageOpen(false);
      }

      if (mobileLanguageRef.current && !mobileLanguageRef.current.contains(target)) {
        setMobileLanguageOpen(false);
      }

      if (portfolioRef.current && !portfolioRef.current.contains(target)) {
        closePortfolio();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDesktopLanguageOpen(false);
        setMobileLanguageOpen(false);
        closePortfolio();
        portfolioTriggerRef.current?.focus();
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!isPortfolioOpen) {
        return;
      }

      if (!closePortfolioTimeoutRef.current && !triangleProtectionActiveRef.current) {
        return;
      }

      const menuRect = portfolioRef.current?.getBoundingClientRect();
      const itemsRect = portfolioItemsRef.current?.getBoundingClientRect();

      if (!menuRect || !itemsRect) {
        return;
      }

      const pointer = { x: event.clientX, y: event.clientY };

      const isInsideMenu =
        pointer.x >= menuRect.left &&
        pointer.x <= menuRect.right &&
        pointer.y >= menuRect.top &&
        pointer.y <= menuRect.bottom;

      if (isInsideMenu) {
        clearPortfolioCloseTimeout();
        return;
      }

      const origin = safetyOriginRef.current;
      const isTrackingTriangle = triangleProtectionActiveRef.current;

      if (!origin || !isTrackingTriangle) {
        if (!closePortfolioTimeoutRef.current) {
          schedulePortfolioClose();
        }
        return;
      }

      if (pointer.x < origin.x) {
        if (!closePortfolioTimeoutRef.current) {
          schedulePortfolioClose();
        }
        return;
      }

      const top = { x: itemsRect.left, y: itemsRect.top - 12 };
      const bottom = { x: itemsRect.left, y: itemsRect.bottom + 12 };
      const isSafePath = isPointInTriangle(pointer, origin, top, bottom);

      if (isSafePath) {
        clearPortfolioCloseTimeout({ keepSafetyTracking: true });
        return;
      }

      if (!closePortfolioTimeoutRef.current) {
        schedulePortfolioClose();
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousemove", handleMouseMove);
      clearPortfolioCloseTimeout();
    };
  }, [isPortfolioOpen, portfolioGroups.length]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-stone-100 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <a href="/" className="flex items-center space-x-2">
            <Image
              src="/assets/APOIAR_sem_fundo.png"
              alt="APOIAR"
              width={250}
              height={66}
              className="h-16 w-auto"
              priority
            />
          </a>

          <div className="hidden h-full items-center space-x-8 md:flex">
            {content.navLinks.map((link) => {
              if (link.subItems?.length) {
                return (
                  <div
                    key={link.href}
                    ref={portfolioRef}
                    className="relative flex h-full items-center"
                    onMouseEnter={openPortfolio}
                    onMouseLeave={(event) => schedulePortfolioClose({ x: event.clientX, y: event.clientY })}
                  >
                    <a
                      ref={portfolioTriggerRef}
                      href={formatLink(link.href)}
                      onFocus={openPortfolio}
                      onClick={() => {
                        setIsPortfolioOpen(false);
                      }}
                      onKeyDown={(event) => {
                        if (event.key === "ArrowDown") {
                          event.preventDefault();
                          openPortfolio();
                          focusGroupByIndex(0);
                        }

                        if (event.key === "Escape") {
                          event.preventDefault();
                          closePortfolio();
                        }
                      }}
                      className="flex items-center gap-1 font-medium text-stone-600 transition-colors hover:text-lime-600"
                      aria-expanded={isPortfolioOpen}
                      aria-haspopup="menu"
                    >
                      {link.label}
                      <ChevronDown className={`h-4 w-4 transition-transform ${isPortfolioOpen ? "rotate-180" : ""}`} />
                    </a>

                    <div
                      role="menu"
                      aria-label={link.label}
                      className={`absolute left-0 top-full mt-2 min-w-[780px] rounded-2xl border border-stone-100 bg-white p-4 shadow-xl transition-all duration-200 ${
                        isPortfolioOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
                      }`}
                    >
                      <div className="grid items-start grid-cols-[260px_minmax(0,1fr)] gap-4">
                        <div className="rounded-xl border border-stone-100 bg-stone-50 p-2">
                          <ul className="space-y-1">
                            {portfolioGroups.map((group, index) => {
                              const isActive = group.key === activeGroup?.key;

                              return (
                                <li key={group.key}>
                                  <button
                                    ref={(element) => {
                                      groupButtonRefs.current[index] = element;
                                    }}
                                    type="button"
                                    role="menuitem"
                                    onMouseEnter={() => setActivePortfolioGroup(group.key)}
                                    onFocus={() => setActivePortfolioGroup(group.key)}
                                    onKeyDown={(event) => {
                                      if (event.key === "ArrowDown") {
                                        event.preventDefault();
                                        focusGroupByIndex(index + 1);
                                      }

                                      if (event.key === "ArrowUp") {
                                        event.preventDefault();
                                        focusGroupByIndex(index - 1);
                                      }

                                      if (event.key === "ArrowRight") {
                                        event.preventDefault();
                                        focusItemByIndex(0);
                                      }

                                      if (event.key === "Escape") {
                                        event.preventDefault();
                                        closePortfolio();
                                        portfolioTriggerRef.current?.focus();
                                      }
                                    }}
                                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-semibold transition-colors ${
                                      isActive
                                        ? "bg-lime-100 text-lime-700"
                                        : "text-stone-600 hover:bg-lime-50 hover:text-lime-700"
                                    }`}
                                  >
                                    <span>{group.label}</span>
                                    <ChevronRight className="h-4 w-4" />
                                  </button>
                                </li>
                              );
                            })}
                          </ul>
                        </div>

                        <div
                          ref={portfolioItemsRef}
                          className="rounded-xl border border-stone-100 p-2"
                          onMouseEnter={() => clearPortfolioCloseTimeout()}
                        >
                          {activeGroup?.key === "BPO" ? (
                            <p className="px-3 pb-1 pt-2 text-xs font-semibold uppercase tracking-wider text-stone-500">
                              {locale === "en" ? "Modules" : locale === "es" ? "Modulos" : "Módulos"}
                            </p>
                          ) : null}
                          <ul className="space-y-1">
                            {activeGroup?.items.map((subItem, index) => (
                              <li key={`${activeGroup.key}-${subItem.label}`}>
                                <a
                                  ref={(element) => {
                                    itemLinkRefs.current[index] = element;
                                  }}
                                  href={formatLink(subItem.href)}
                                  role="menuitem"
                                  className="block rounded-lg px-3 py-2 text-sm font-medium text-stone-600 transition-colors hover:bg-lime-50 hover:text-lime-700"
                                  onKeyDown={(event) => {
                                    if (event.key === "ArrowDown") {
                                      event.preventDefault();
                                      focusItemByIndex(index + 1);
                                    }

                                    if (event.key === "ArrowUp") {
                                      event.preventDefault();
                                      focusItemByIndex(index - 1);
                                    }

                                    if (event.key === "ArrowLeft") {
                                      event.preventDefault();
                                      focusGroupByIndex(activeGroupIndex);
                                    }

                                    if (event.key === "Escape") {
                                      event.preventDefault();
                                      closePortfolio();
                                      portfolioTriggerRef.current?.focus();
                                    }
                                  }}
                                  onClick={() => {
                                    setIsPortfolioOpen(false);
                                  }}
                                >
                                  {subItem.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <a
                  key={link.href}
                  href={formatLink(link.href)}
                  className="font-medium text-stone-600 transition-colors hover:text-lime-600"
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="hidden items-center gap-3 md:flex">
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
                  className={`h-4 w-4 text-stone-500 transition-transform ${desktopLanguageOpen ? "rotate-180" : ""}`}
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
                        {isActive ? <span className="text-xs font-bold">&bull;</span> : null}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
            <a
              href="https://appapoiar.rfv.net.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border border-stone-200 bg-white px-4 py-3 text-sm font-semibold text-stone-700 transition-all hover:-translate-y-0.5 hover:border-lime-500 hover:text-lime-700"
            >
              {content.ui.restrictedAccessLabel}
            </a>
            <a
              href={`/#${content.contact.sectionId}`}
              className="inline-flex rounded-full bg-lime-500 px-6 py-3 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-lime-600 hover:shadow-lg"
            >
              {content.ui.navbarContactCta}
            </a>
          </div>

          <button
            type="button"
            className="p-2 text-stone-600 md:hidden"
            onClick={() => {
              setMobileMenuOpen((current) => !current);
              setMobilePortfolioOpen(false);
              setMobileActivePortfolioGroup(null);
            }}
            aria-label={content.ui.openMenuAria}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="space-y-4 pb-6 md:hidden">
            {content.navLinks.map((link) => {
              if (link.subItems?.length) {
                return (
                  <div key={link.href} className="rounded-2xl border border-stone-100 bg-white p-3">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between py-1 text-left font-medium text-stone-600 transition-colors hover:text-lime-600"
                      onClick={() => {
                        setMobilePortfolioOpen((current) => !current);

                        if (!mobilePortfolioOpen && portfolioGroups[0]) {
                          setMobileActivePortfolioGroup(portfolioGroups[0].key);
                        }
                      }}
                      aria-expanded={mobilePortfolioOpen}
                      aria-controls="mobile-portfolio-groups"
                    >
                      <span>{link.label}</span>
                      <ChevronDown className={`h-4 w-4 transition-transform ${mobilePortfolioOpen ? "rotate-180" : ""}`} />
                    </button>

                    {mobilePortfolioOpen && (
                      <div id="mobile-portfolio-groups" className="mt-3 space-y-2">
                        {portfolioGroups.map((group) => {
                          const isOpen = mobileActivePortfolioGroup === group.key;

                          return (
                            <div key={group.key} className="overflow-hidden rounded-xl border border-stone-100">
                              <button
                                type="button"
                                className={`flex w-full items-center justify-between px-3 py-2 text-left text-sm font-semibold transition-colors ${
                                  isOpen
                                    ? "bg-lime-100 text-lime-700"
                                    : "bg-stone-50 text-stone-700 hover:bg-lime-50 hover:text-lime-700"
                                }`}
                                onClick={() => {
                                  setMobileActivePortfolioGroup((current) =>
                                    current === group.key ? null : group.key,
                                  );
                                }}
                                aria-expanded={isOpen}
                              >
                                <span>{group.label}</span>
                                <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                              </button>

                              <div
                                className={`grid transition-all duration-200 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                              >
                                <ul className="space-y-1 overflow-hidden p-2">
                                  {group.items.map((subItem) => (
                                    <li key={`${group.key}-${subItem.label}`}>
                                      <a
                                        href={formatLink(subItem.href)}
                                        className="block rounded-lg px-2 py-2 text-sm text-stone-600 transition-colors hover:bg-lime-50 hover:text-lime-700"
                                        onClick={() => {
                                          setMobileMenuOpen(false);
                                          setMobilePortfolioOpen(false);
                                          setMobileActivePortfolioGroup(null);
                                        }}
                                      >
                                        {subItem.label}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={link.href}
                  href={formatLink(link.href)}
                  className="block py-2 font-medium text-stone-600 transition-colors hover:text-lime-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              );
            })}

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
                  className={`h-4 w-4 text-stone-500 transition-transform ${mobileLanguageOpen ? "rotate-180" : ""}`}
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
                        {isActive ? <span className="text-xs font-bold">&bull;</span> : null}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            <a
              href="https://appapoiar.rfv.net.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-full border border-stone-200 bg-white px-6 py-3 text-center text-sm font-semibold text-stone-700 transition-all hover:border-lime-500 hover:text-lime-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              {content.ui.restrictedAccessLabel}
            </a>
            <a
              href={`/#${content.contact.sectionId}`}
              className="block rounded-full bg-lime-500 px-6 py-3 text-center font-semibold text-white transition-all hover:bg-lime-600"
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
