import Image from "next/image";
import { ArrowRight, CheckCircle, HeartHandshake, TrendingUp } from "lucide-react";
import type { ContentSchema } from "@/config/content";

type HeroProps = {
  content: ContentSchema["hero"];
};

export function Hero({ content }: HeroProps) {
  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-stone-100/50 via-white to-warm-50" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8">
            <div className="fade-in-up">
              <span className="inline-flex items-center px-4 py-2 bg-lime-100 text-lime-700 rounded-full text-sm font-semibold mb-6">
                <HeartHandshake className="w-4 h-4 mr-2" />
                {content.badge}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-warm-900 leading-tight">
                {content.titlePrefix} <span className="gradient-text">{content.titleHighlight}</span>
              </h1>
            </div>
            <p className="text-lg md:text-xl text-stone-600 leading-relaxed fade-in-up-delay-1 max-w-xl">
              {content.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 fade-in-up-delay-2">
              <a
                href={content.primaryCta.href}
                className="inline-flex items-center justify-center bg-gradient-to-br from-[#444444] to-[#666666] hover:from-[#333333] hover:to-[#555555] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                {content.primaryCta.label}
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href={content.secondaryCta.href}
                className="inline-flex items-center justify-center bg-white border-2 border-stone-200 hover:border-lime-400 text-stone-700 hover:text-lime-600 px-8 py-4 rounded-full font-semibold text-lg transition-all"
              >
                {content.secondaryCta.label}
              </a>
            </div>
            <div className="flex items-center gap-8 pt-4 fade-in-up-delay-2">
              <div className="flex -space-x-3">
                {content.avatars.map((avatar) => (
                  <div
                    key={avatar.src}
                    className="w-12 h-12 rounded-full bg-stone-200 border-2 border-white overflow-hidden"
                  >
                    <Image
                      src={avatar.src}
                      alt={avatar.alt}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-stone-600 text-sm">
                <span className="font-bold text-warm-900">{content.transformedCount}</span>{" "}
                {content.transformedLabel}
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-stone-200/60">
              <Image
                src={content.mainImage.src}
                alt={content.mainImage.alt}
                width={content.mainImage.width}
                height={content.mainImage.height}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-soft p-6 max-w-xs hidden lg:block border border-stone-200/60">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-lime-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-lime-600" />
                </div>
                <div>
                  <p className="font-bold text-warm-900">{content.productivityStat.value}</p>
                  <p className="text-sm text-stone-600">{content.productivityStat.label}</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-lime-500 rounded-2xl shadow-lg p-4 hidden lg:block">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
