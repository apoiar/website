"use client";

import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import type { EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  ]);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <section className="py-24 lg:py-32 bg-warm-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-stone-500 font-semibold text-sm uppercase tracking-wider">
            {content.badge}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-warm-900 mt-4">
            {content.titlePrefix} <span className="gradient-text">{content.titleHighlight}</span>
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 md:px-16 lg:px-20">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-6">
              {content.items.map((testimonial, index) => (
                <div
                  key={`${testimonial.name}-${index}`}
                  className="flex-[0_0_100%] min-w-0 pl-6 lg:flex-[0_0_50%]"
                >
                  <div className="bg-white rounded-3xl p-8 shadow-soft h-full flex flex-col border border-stone-200/60 transition-transform duration-300">
                    <Stars />
                    <p className="text-stone-600 leading-relaxed mb-6 flex-grow">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-4 mt-auto">
                      {testimonial.image ? (
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={56}
                          height={56}
                          className="h-14 w-14 rounded-full object-cover border border-stone-200"
                        />
                      ) : null}
                      <div>
                        <p className="font-bold text-warm-900">{testimonial.name}</p>
                        <p className="text-sm text-stone-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="absolute left-0 md:left-2 top-[45%] md:top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-stone-600 hover:text-stone-600 hover:scale-110 transition-all z-10 disabled:opacity-50 disabled:scale-100 hidden md:flex border border-stone-200"
            onClick={scrollPrev}
            disabled={prevBtnDisabled}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            className="absolute right-0 md:right-2 top-[45%] md:top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-stone-600 hover:text-stone-600 hover:scale-110 transition-all z-10 disabled:opacity-50 disabled:scale-100 hidden md:flex border border-stone-200"
            onClick={scrollNext}
            disabled={nextBtnDisabled}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center gap-2 mt-12">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${index === selectedIndex ? "bg-stone-600 w-6" : "bg-stone-300 hover:bg-stone-400"
                  }`}
                onClick={() => scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

