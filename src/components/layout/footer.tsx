import Image from "next/image";
import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import type { ContentSchema } from "@/config/content";

type FooterProps = {
  content: ContentSchema;
};

function SocialIcon({ id }: { id: ContentSchema["socialLinks"][number]["id"] }) {
  if (id === "linkedin") {
    return <Linkedin className="w-5 h-5" />;
  }

  return <Instagram className="w-5 h-5" />;
}

export function Footer({ content }: FooterProps) {
  const { brand, contact, footerLegalLinks, footerQuickLinks, socialLinks, ui } = content;

  return (
    <footer
      id={contact.sectionId}
      className="relative bg-warm-900 text-white py-16 lg:py-20 before:content-[''] before:absolute before:left-0 before:right-0 before:-top-0.5 before:h-2 before:bg-warm-900 before:pointer-events-none"
      style={{ transform: "translateZ(0)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Image
                src="/assets/APOIAR_sem_fundo.png"
                alt="APOIAR"
                width={220}
                height={58}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-stone-400 leading-relaxed mb-6 max-w-md">
              {brand.footerDescription}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-lime-500 transition-colors"
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialIcon id={link.id} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">{ui.footerQuickLinksTitle}</h4>
            <ul className="space-y-4">
              {footerQuickLinks.map((link) => (
                <li key={link.href + link.label}>
                  <a
                    href={link.href}
                    className="text-stone-400 hover:text-lime-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">{ui.footerContactTitle}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-lime-400 mt-0.5 flex-shrink-0" />
                <a
                  href={contact.mailtoUrl}
                  className="text-stone-400 hover:text-white transition-colors"
                >
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-lime-400 mt-0.5 flex-shrink-0" />
                <a
                  href={contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-400 hover:text-white transition-colors"
                >
                  {ui.whatsappText}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-lime-400 mt-0.5 flex-shrink-0" />
                <span className="text-stone-400">
                  {contact.city}, {contact.country}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-500 text-sm">
            {new Date().getFullYear()} {brand.legalName}. {ui.rightsReserved}
          </p>
          <div className="flex gap-6">
            {footerLegalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-stone-500 hover:text-white text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
