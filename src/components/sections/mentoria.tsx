import Image from "next/image";
import { Heart, MessageCircle, User, Video } from "lucide-react";
import type { ContentSchema } from "@/config/content";

const pointIcons = [Video, MessageCircle, Heart] as const;

type MentoriaProps = {
  content: ContentSchema["mentoria"];
};

export function Mentoria({ content }: MentoriaProps) {
  return (
    <section id={content.sectionId} className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-soft border border-stone-200/60">
                <Image
                  src={content.mentor.image.src}
                  alt={content.mentor.image.alt}
                  width={content.mentor.image.width}
                  height={content.mentor.image.height}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-stone-200/60">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-lime-100 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-lime-600" />
                  </div>
                  <div>
                    <p className="font-bold text-warm-900 text-lg">{content.mentor.name}</p>
                    <p className="text-stone-600">{content.mentor.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <span className="text-lime-600 font-semibold text-sm uppercase tracking-wider">
                {content.badge}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-warm-900 mt-4 leading-tight">
                {content.titlePrefix} <span className="gradient-text">{content.titleHighlight}</span>
              </h2>
            </div>
            <p className="text-lg text-stone-600 leading-relaxed">{content.description}</p>
            <div className="space-y-6">
              {content.points.map((point, index) => {
                const Icon = pointIcons[index] ?? MessageCircle;

                return (
                  <div
                    key={point.title}
                    className="group flex items-start gap-4 p-5 rounded-2xl border border-transparent hover:border-lime-200/80 hover:bg-lime-50/50 hover:shadow-hover hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-lime-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-lime-200 transition-colors">
                      <Icon className="w-5 h-5 text-lime-600 transition-colors" />
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
