import Link from "next/link";
import type { CityConfig } from "@/lib/cities";

interface HeroSectionProps {
  city: CityConfig;
}

const VIDEO = {
  mp4: "/video/hero-iphone-18-pro.mp4",
  webm: "/video/hero-iphone-18-pro.webm",
  poster: "/assets/hero-iphone-18-pro-poster.webp",
  width: 1280,
  height: 618,
};

export default function HeroSection({ city }: HeroSectionProps) {
  const title = `iPhone 18 Pro — купить в ${city.namePre} в ЭПЛ-КОЛЛЕКЦИЯ`;
  const description = `Видео iPhone 18 Pro в цветах чёрный, Glacier и бордовый. Купить iPhone 18 Pro и 18 Pro Max в ${city.namePre} с гарантией, в рассрочку до 36 месяцев, с доставкой в день заказа.`;

  // VideoObject — чтобы поисковики понимали, что показано в ролике
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: title,
    description,
    thumbnailUrl: `${city.siteUrl}${VIDEO.poster}`,
    contentUrl: `${city.siteUrl}${VIDEO.mp4}`,
    uploadDate: "2026-10-17",
    duration: "PT5S",
  };

  return (
    <section aria-label="Главный баннер">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />

      <div className="max-w-6xl mx-auto px-4 md:px-6 pt-6 pb-8 md:py-12 flex flex-col md:grid md:grid-cols-[1fr_auto] md:gap-x-12 text-center md:text-left">
        {/* Заголовок и подзаголовок */}
        <div className="order-1 md:col-start-1 md:row-start-1 md:self-end">
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-light tracking-tight mb-3 md:mb-6">
            <span className="block text-foreground/90 mb-1 md:mb-2">Купить Айфон в Казани</span>
            <span className="block bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent font-normal">
              выгодно, в рассрочку
            </span>
          </h1>
          <p className="text-base md:text-xl font-light text-foreground/60 mb-6 md:mb-8">
            Рассрочка до 36 мес* · Гарантия 1 год · Доставка в день заказа
          </p>
        </div>

        {/* Видео iPhone 18 Pro */}
        <div className="order-2 md:col-start-2 md:row-start-1 md:row-span-2 md:self-center flex justify-center">
          <Link href="/iphone/iphone-18-pro" aria-label="Перейти к iPhone 18 Pro" className="block">
            <video
              className="w-full max-w-[480px] md:w-[400px] md:max-w-none lg:w-[520px] h-auto rounded-2xl md:rounded-3xl bg-black"
              width={VIDEO.width}
              height={VIDEO.height}
              poster={VIDEO.poster}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              title={title}
              aria-label={description}
            >
              <source src={VIDEO.webm} type="video/webm" />
              <source src={VIDEO.mp4} type="video/mp4" />
              {description}
            </video>
          </Link>
        </div>

        {/* Кнопки */}
        <div className="order-3 md:col-start-1 md:row-start-2 md:self-start flex gap-3 md:gap-4 justify-center md:justify-start mt-6 md:mt-0">
          <Link href="#calculator-section"
            className="md:hidden px-5 py-2.5 bg-primary text-primary-foreground rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity">
            Подобрать iPhone
          </Link>
          <a href={city.telegram} target="_blank" rel="noopener noreferrer"
            className="md:hidden px-5 py-2.5 border border-border rounded-xl text-sm font-semibold hover:bg-muted transition-colors">
            Написать
          </a>
          <Link href="#calculator-section"
            className="hidden md:inline-block whitespace-nowrap px-7 py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity">
            Подобрать за 1 минуту
          </Link>
          <a href={`tel:${city.phone}`}
            className="hidden md:inline-block whitespace-nowrap px-7 py-3.5 border border-border rounded-xl font-semibold hover:bg-muted transition-colors">
            {city.phoneFormatted}
          </a>
        </div>
      </div>
    </section>
  );
}
