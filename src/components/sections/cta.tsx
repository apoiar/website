import { Mail, MessageCircle } from "lucide-react";
import type { ContentSchema } from "@/config/content";

type CTAProps = {
  content: ContentSchema["cta"];
  contact: ContentSchema["contact"];
};

export function CTA({ content, contact }: CTAProps) {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="bg-gradient-to-br from-lime-500 to-lime-600 rounded-[2.5rem] p-12 lg:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{content.title}</h2>
            <p className="text-lg md:text-xl text-lime-100 mb-10 max-w-2xl mx-auto">{content.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-lime-600 px-8 py-4 rounded-full font-bold text-lg transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                {content.whatsappLabel}
              </a>
              <a
                href={contact.mailtoUrl}
                className="inline-flex items-center justify-center bg-lime-600 border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:bg-lime-700"
              >
                <Mail className="w-5 h-5 mr-2" />
                {content.emailLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
