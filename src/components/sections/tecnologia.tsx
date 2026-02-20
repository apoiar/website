import Image from "next/image";
import { Apple, BookOpenText, MessageSquareMore, Play, Smartphone } from "lucide-react";
import type { ContentSchema } from "@/config/content";

type TecnologiaProps = {
  content: ContentSchema["tecnologia"];
};

export function Tecnologia({ content }: TecnologiaProps) {
  return (
    <section id={content.sectionId} className="py-24 lg:py-32 bg-warm-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-lime-600 font-semibold text-sm uppercase tracking-wider">
            {content.badge}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-warm-900 mt-4">
            {content.titlePrefix} <span className="gradient-text">{content.titleHighlight}</span>
          </h2>
          <p className="text-lg text-stone-600 mt-6 leading-relaxed">{content.description}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {content.apps.map((app) => {
            const AppMark = app.name.toLowerCase().includes("kito") ? BookOpenText : MessageSquareMore;
            const appIconImage = app.icon.startsWith("/") ? app.icon : null;

            return (
              <article
                key={app.name}
                className="rounded-3xl border border-stone-200/70 bg-white p-8 shadow-soft transition-all hover-lift"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-100">
                      <Smartphone className="h-7 w-7 text-lime-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-warm-900">{app.name}</h3>
                    <p className="mt-3 text-stone-600 leading-relaxed">{app.description}</p>
                  </div>

                  <div className="shrink-0 h-24 w-24 overflow-hidden rounded-xl border border-stone-200">
                    {appIconImage ? (
                      <Image
                        src={appIconImage}
                        alt={`${app.name} icon`}
                        width={96}
                        height={96}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-lime-50">
                        <AppMark className="h-8 w-8 text-lime-600" />
                      </div>
                    )}
                  </div>
                </div>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={app.appStoreUrl}
                  aria-label={`${app.name} na App Store`}
                  className="inline-flex items-center justify-center rounded-full border border-stone-200 bg-white px-6 py-3 font-semibold text-stone-700 transition-colors hover:border-lime-400 hover:text-lime-700"
                >
                  <Apple className="mr-2 h-5 w-5" />
                  App Store
                </a>
                <a
                  href={app.playStoreUrl}
                  aria-label={`${app.name} no Google Play`}
                  className="inline-flex items-center justify-center rounded-full bg-lime-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-lime-600"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Google Play
                </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
