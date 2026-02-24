import { ArrowRight, Building2, FileBadge2, FileCheck2, ReceiptText, XCircle } from "lucide-react";
import type { ContentSchema } from "@/config/content";

const serviceIcons = [Building2, FileBadge2, ReceiptText, FileCheck2, XCircle] as const;

type ApoioMeiProps = {
  content: ContentSchema["apoioMei"];
};

export function ApoioMei({ content }: ApoioMeiProps) {
  return (
    <section id={content.sectionId} className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-stone-500 font-semibold text-sm uppercase tracking-wider">
            {content.badge}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-warm-900 mt-4">
            {content.titlePrefix} <span className="gradient-text">{content.titleHighlight}</span>
          </h2>
          <p className="text-lg text-stone-600 mt-6 leading-relaxed">{content.description}</p>
        </div>

        <div className="grid items-start gap-6 md:grid-cols-2 lg:grid-cols-6">
          {content.services.map((service, index) => {
            const Icon = serviceIcons[index] ?? FileCheck2;
            const isSecondRowFirst = content.services.length === 5 && index === 3;
            const isSecondRowSecond = content.services.length === 5 && index === 4;

            return (
              <article
                key={service.title}
                className={`group bg-warm-50 rounded-3xl p-7 border border-stone-200/70 shadow-soft hover-lift transition-all lg:col-span-2 ${isSecondRowFirst ? "lg:col-start-2" : ""
                  } ${isSecondRowSecond ? "lg:col-start-4" : ""}`}
              >
                <div className="w-12 h-12 bg-stone-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-lime-100 transition-colors">
                  <Icon className="w-6 h-6 text-stone-600 group-hover:text-lime-600 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-warm-900 mb-2">{service.title}</h3>
                <p className="text-stone-600 leading-relaxed">{service.description}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href={content.cta.href}
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-br from-[#444444] to-[#666666] hover:from-[#333333] hover:to-[#555555] px-8 py-4 text-lg font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            {content.cta.label}
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
