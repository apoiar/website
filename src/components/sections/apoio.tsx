import Image from "next/image";
import { CalendarDays, FileText, Headphones, TrendingUp } from "lucide-react";
import type { ContentSchema } from "@/config/content";

const cardIcons = [CalendarDays, FileText, Headphones, TrendingUp] as const;

type ApoioProps = {
  content: ContentSchema["apoio"];
};

export function Apoio({ content }: ApoioProps) {
  return (
    <section id={content.sectionId} className="py-24 lg:py-32 bg-warm-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-stone-500 font-semibold text-sm uppercase tracking-wider">
            {content.badge}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-warm-900 mt-4">
            {content.titlePrefix} <span className="gradient-text">{content.titleHighlight}</span>
          </h2>
          <p className="text-lg text-stone-600 mt-6 leading-relaxed">{content.description}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {content.cards.map((card, index) => {
            const Icon = cardIcons[index] ?? FileText;

            return (
              <div
                key={card.title}
                className="group h-[330px] overflow-hidden bg-white rounded-3xl p-8 shadow-soft hover-lift transition-all border border-stone-200/60"
              >
                <div className="w-16 h-16 bg-stone-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-lime-100 transition-colors">
                  <Icon className="w-8 h-8 text-stone-600 group-hover:text-lime-600 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-warm-900 mb-3">{card.title}</h3>
                <p className="text-stone-600 leading-relaxed">{card.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-white rounded-3xl p-8 lg:p-12 shadow-soft border border-stone-200/60">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-warm-900 mb-4">{content.highlight.title}</h3>
              <p className="text-stone-600 leading-relaxed">{content.highlight.description}</p>
            </div>
            <div className="flex-shrink-0">
              <Image
                src={content.highlight.image.src}
                alt={content.highlight.image.alt}
                width={content.highlight.image.width}
                height={content.highlight.image.height}
                className="rounded-2xl shadow-lg w-full lg:w-80 h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
