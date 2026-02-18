import Image from "next/image";
import { Heart, MessageCircle, User, Video } from "lucide-react";
import { MENTORIA_CONTENT } from "@/config/content";

const pointIcons = [Video, MessageCircle, Heart] as const;

export function Mentoria() {
  return (
    <section id={MENTORIA_CONTENT.sectionId} className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-soft">
                <Image
                  src={MENTORIA_CONTENT.mentor.image.src}
                  alt={MENTORIA_CONTENT.mentor.image.alt}
                  width={MENTORIA_CONTENT.mentor.image.width}
                  height={MENTORIA_CONTENT.mentor.image.height}
                  className="w-full h-auto object-cover"
                />
                <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 w-[190%] -translate-x-1/2 -translate-y-1/2 rotate-[48deg] bg-warm-900/85 py-20 text-center">
                  <span className="px-4 text-lg font-semibold uppercase tracking-[0.2em] text-white md:text-2xl">
                    Sua foto
                  </span>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-lime-100 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-lime-600" />
                  </div>
                  <div>
                    <p className="font-bold text-warm-900 text-lg">{MENTORIA_CONTENT.mentor.name}</p>
                    <p className="text-stone-600">{MENTORIA_CONTENT.mentor.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <span className="text-lime-600 font-semibold text-sm uppercase tracking-wider">
                {MENTORIA_CONTENT.badge}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-warm-900 mt-4 leading-tight">
                {MENTORIA_CONTENT.titlePrefix}{" "}
                <span className="gradient-text">{MENTORIA_CONTENT.titleHighlight}</span>
              </h2>
            </div>
            <p className="text-lg text-stone-600 leading-relaxed">{MENTORIA_CONTENT.description}</p>
            <div className="space-y-6">
              {MENTORIA_CONTENT.points.map((point, index) => {
                const Icon = pointIcons[index] ?? MessageCircle;

                return (
                  <div
                    key={point.title}
                    className="flex items-start gap-4 hover-lift p-4 rounded-2xl hover:bg-lime-50/50 transition-colors cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-lime-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-lime-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-warm-900 text-lg">{point.title}</h3>
                      <p className="text-stone-600 mt-1">{point.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
