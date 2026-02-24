"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";

type TecnologiaScreenshotsCarouselProps = {
  appName: string;
  screenshots: string[];
};

export function TecnologiaScreenshotsCarousel({
  appName,
  screenshots,
}: TecnologiaScreenshotsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const total = screenshots.length;

  const currentSrc = useMemo(() => screenshots[activeIndex], [screenshots, activeIndex]);

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + total) % total);
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % total);
  };

  useEffect(() => {
    if (!isLightboxOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsLightboxOpen(false);
      }
    };

    window.addEventListener("keydown", onEscape);

    return () => {
      window.removeEventListener("keydown", onEscape);
      document.body.style.overflow = previousOverflow;
    };
  }, [isLightboxOpen]);

  const lightbox = typeof document !== "undefined" && isLightboxOpen
    ? createPortal(
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`Visualização ampliada do ${appName}`}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setIsLightboxOpen(false);
            }
          }}
        >
          <div className="w-full max-w-6xl rounded-2xl bg-white p-4 sm:p-6">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-semibold text-stone-700">
                {appName} · imagem {activeIndex + 1} de {total}
              </p>
              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                className="rounded-full border border-stone-200 p-2 text-stone-700 transition hover:bg-stone-100"
                aria-label="Fechar visualização"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="relative overflow-hidden rounded-xl border border-stone-200 bg-stone-100">
              <Image
                src={currentSrc}
                alt={`${appName} screenshot ${activeIndex + 1}`}
                width={1400}
                height={900}
                className="max-h-[74vh] w-full select-none object-contain"
                draggable={false}
              />
            </div>

            {total > 1 ? (
              <div className="mt-4 flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={goToPrevious}
                  className="rounded-full border border-stone-200 bg-white p-2 text-stone-700 transition hover:bg-stone-100"
                  aria-label={`Imagem anterior do ${appName}`}
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <div className="flex gap-2">
                  {screenshots.map((_, index) => (
                    <button
                      key={`${appName}-lightbox-dot-${index}`}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={`h-2.5 rounded-full transition-all ${
                        index === activeIndex ? "w-6 bg-lime-600" : "w-2.5 bg-stone-300 hover:bg-stone-400"
                      }`}
                      aria-label={`Ir para imagem ${index + 1}`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={goToNext}
                  className="rounded-full border border-stone-200 bg-white p-2 text-stone-700 transition hover:bg-stone-100"
                  aria-label={`Próxima imagem do ${appName}`}
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            ) : null}
          </div>
        </div>,
        document.body,
      )
    : null;

  return (
    <>
      <div className="mx-auto w-full max-w-[380px] shrink-0">
        {total > 1 ? (
          <div className="mb-3 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={goToPrevious}
              className="rounded-full border border-stone-200 bg-white p-1.5 text-stone-700 shadow-sm transition hover:bg-stone-50"
              aria-label={`Imagem anterior do ${appName}`}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={goToNext}
              className="rounded-full border border-stone-200 bg-white p-1.5 text-stone-700 shadow-sm transition hover:bg-stone-50"
              aria-label={`Próxima imagem do ${appName}`}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        ) : null}

        <button
          type="button"
          onClick={() => setIsLightboxOpen(true)}
          className="block w-full cursor-zoom-in"
          aria-label={`Expandir imagem do ${appName}`}
        >
          <div className="relative overflow-hidden rounded-2xl border border-stone-200 bg-stone-50">
            <Image
              src={currentSrc}
              alt={`${appName} screenshot ${activeIndex + 1}`}
              width={720}
              height={420}
              className="h-52 w-full select-none object-cover"
              draggable={false}
            />
          </div>
        </button>

        {total > 1 ? (
          <div className="mt-3 flex justify-center gap-2">
            {screenshots.map((_, index) => (
              <button
                key={`${appName}-dot-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeIndex ? "w-6 bg-lime-600" : "w-2.5 bg-stone-300 hover:bg-stone-400"
                }`}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>
        ) : null}
      </div>

      {lightbox}
    </>
  );
}
