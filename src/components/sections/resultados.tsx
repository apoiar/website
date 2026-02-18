import Image from "next/image";
import { Check, X } from "lucide-react";
import { RESULTADOS_CONTENT } from "@/config/content";

export function Resultados() {
  return (
    <section id={RESULTADOS_CONTENT.sectionId} className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-lime-600 font-semibold text-sm uppercase tracking-wider">
            {RESULTADOS_CONTENT.badge}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-warm-900 mt-4">
            {RESULTADOS_CONTENT.titlePrefix} <span className="gradient-text">{RESULTADOS_CONTENT.titleHighlight}</span>
          </h2>
          <p className="text-lg text-stone-600 mt-6">{RESULTADOS_CONTENT.description}</p>
        </div>

        <div className="grid items-stretch md:grid-cols-2 gap-8 lg:gap-12">
          <div className="relative h-full">
            <div className="absolute -top-4 left-8 bg-stone-200 text-stone-600 px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wider">
              {RESULTADOS_CONTENT.beforeLabel}
            </div>
            <div className="bg-stone-100 rounded-3xl p-8 pt-12 h-full flex flex-col">
              <div className="space-y-6">
                {RESULTADOS_CONTENT.beforeItems.map((item) => (
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
                  src={RESULTADOS_CONTENT.beforeImage.src}
                  alt={RESULTADOS_CONTENT.beforeImage.alt}
                  width={RESULTADOS_CONTENT.beforeImage.width}
                  height={RESULTADOS_CONTENT.beforeImage.height}
                  className="w-full h-48 object-cover rounded-2xl opacity-70 grayscale"
                />
              </div>
            </div>
          </div>

          <div className="relative h-full">
            <div className="absolute -top-4 left-8 bg-lime-500 text-white px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wider">
              {RESULTADOS_CONTENT.afterLabel}
            </div>
            <div className="bg-lime-50 rounded-3xl p-8 pt-12 h-full ring-2 ring-lime-100 flex flex-col">
              <div className="space-y-6">
                {RESULTADOS_CONTENT.afterItems.map((item) => (
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
                  src={RESULTADOS_CONTENT.afterImage.src}
                  alt={RESULTADOS_CONTENT.afterImage.alt}
                  width={RESULTADOS_CONTENT.afterImage.width}
                  height={RESULTADOS_CONTENT.afterImage.height}
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
