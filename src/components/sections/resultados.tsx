import Image from "next/image";
import { Check, X } from "lucide-react";
import type { ContentSchema } from "@/config/content";

type ResultadosProps = {
  content: ContentSchema["resultados"];
};

export function Resultados({ content }: ResultadosProps) {
  return (
    <section id={content.sectionId} className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-lime-600 font-semibold text-sm uppercase tracking-wider">
            {content.badge}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-warm-900 mt-4">
            {content.titlePrefix} <span className="gradient-text">{content.titleHighlight}</span>
          </h2>
          <p className="text-lg text-stone-600 mt-6">{content.description}</p>
        </div>

        <div className="grid items-stretch md:grid-cols-2 gap-8 lg:gap-12">
          <div className="relative h-full">
            <div className="absolute -top-4 left-8 bg-stone-200 text-stone-600 px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wider">
              {content.beforeLabel}
            </div>
            <div className="bg-stone-100 rounded-3xl p-8 pt-12 h-full flex flex-col">
              <div className="space-y-6">
                {content.beforeItems.map((item) => (
                  <div key={item.title} className="flex items-start gap-4 min-h-[76px]">
                    <div className="w-10 h-10 bg-stone-300 rounded-full flex items-center justify-center flex-shrink-0">
                      <X className="w-4 h-4 text-stone-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-700">{item.title}</h4>
                      <p className="text-stone-500 text-sm mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-stone-200 mt-auto">
                <Image
                  src={content.beforeImage.src}
                  alt={content.beforeImage.alt}
                  width={content.beforeImage.width}
                  height={content.beforeImage.height}
                  className="w-full h-48 object-cover rounded-2xl opacity-70 grayscale"
                />
              </div>
            </div>
          </div>

          <div className="relative h-full">
            <div className="absolute -top-4 left-8 bg-lime-500 text-white px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wider">
              {content.afterLabel}
            </div>
            <div className="bg-lime-50 rounded-3xl p-8 pt-12 h-full ring-2 ring-lime-100 flex flex-col">
              <div className="space-y-6">
                {content.afterItems.map((item) => (
                  <div key={item.title} className="flex items-start gap-4 min-h-[76px]">
                    <div className="w-10 h-10 bg-lime-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-lime-700" />
                    </div>
                    <div>
                      <h4 className="font-bold text-warm-900">{item.title}</h4>
                      <p className="text-stone-600 text-sm mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-lime-200 mt-auto">
                <Image
                  src={content.afterImage.src}
                  alt={content.afterImage.alt}
                  width={content.afterImage.width}
                  height={content.afterImage.height}
                  className="w-full h-48 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
