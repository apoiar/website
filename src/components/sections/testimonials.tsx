import Image from "next/image";
import { Star } from "lucide-react";
import type { ContentSchema } from "@/config/content";

function Stars() {
  return (
    <div className="flex gap-1 mb-6">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-5 h-5 text-lime-500 fill-lime-500" />
      ))}
    </div>
  );
}

type TestimonialsProps = {
  content: ContentSchema["testimonials"];
};

export function Testimonials({ content }: TestimonialsProps) {
  return (
    <section className="py-24 lg:py-32 bg-warm-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-lime-600 font-semibold text-sm uppercase tracking-wider">
            {content.badge}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-warm-900 mt-4">
            {content.titlePrefix} <span className="gradient-text">{content.titleHighlight}</span>
          </h2>
        </div>

        <div className="grid items-stretch md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.items.map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${index}`}
              className={`bg-white rounded-3xl p-8 shadow-soft h-full flex flex-col${
                index === 2 ? " md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <Stars />
              <p className="text-stone-600 leading-relaxed mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-stone-200 overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-warm-900">{testimonial.name}</p>
                  <p className="text-sm text-stone-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
