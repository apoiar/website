"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { CONTACT, NAV_LINKS } from "@/config/content";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-stone-600 hover:text-lime-600 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href={`#${CONTACT.sectionId}`}
            className="hidden md:inline-flex bg-lime-500 hover:bg-lime-600 text-white px-6 py-3 rounded-full font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            Fale Conosco
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-stone-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menu"
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
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-stone-600 hover:text-lime-600 transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`#${CONTACT.sectionId}`}
              className="block bg-lime-500 hover:bg-lime-600 text-white px-6 py-3 rounded-full font-semibold text-center transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              Fale Conosco
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
