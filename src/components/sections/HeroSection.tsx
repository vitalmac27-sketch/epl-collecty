import Image from "next/image";
import Link from "next/link";
import type { CityConfig } from "@/lib/cities";

interface HeroSectionProps {
  city: CityConfig;
}

export default function HeroSection({ city }: HeroSectionProps) {
  const alt = `iPhone, iPad, Apple Watch и AirPods — купить в ${city.namePre} в магазине ЭПЛ-КОЛЛЕКЦИЯ`;
  return (
    <section aria-label="Главный баннер">
      <div className="max-w-6xl mx-auto px-4 md:px-6 pt-6 pb-8 md:py-12 md:flex md:items-center md:justify-between md:gap-12 text-center md:text-left">
        <div className="md:flex-1">
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-light tracking-tight mb-3 md:mb-6">
            <span className="block text-foreground/90 mb-1 md:mb-2">Купить Айфон в Казани</span>
            <span className="block bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent font-normal">
              выгодно, в рассрочку
            </span>
          </h1>
          <p className="text-base md:text-xl font-light text-foreground/60 mb-6 md:mb-8">
            Рассрочка до 36 мес* · Гарантия 1 год · Доставка в день заказа
          </p>
          <div className="md:hidden flex justify-center">
            <Image src="/assets/hero-apple-lineup-mobile.webp" alt={alt} width={800} height={420}
              className="w-full max-w-[480px] h-auto rounded-2xl" priority />
          </div>
          <div className="flex gap-3 md:gap-4 justify-center md:justify-start mt-6 md:mt-0">
            <Link href="#calculator-section"
              className="md:hidden px-5 py-2.5 bg-primary text-primary-foreground rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity">
              Подобрать iPhone
            </Link>
            <a href={city.telegram} target="_blank" rel="noopener noreferrer"
              className="md:hidden px-5 py-2.5 border border-border rounded-xl text-sm font-semibold hover:bg-muted transition-colors">
              Написать
            </a>
            <Link href="#calculator-section"
              className="hidden md:inline-block px-7 py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity">
              Подобрать за 1 минуту
            </Link>
            <a href={`tel:${city.phone}`}
              className="hidden md:inline-block px-7 py-3.5 border border-border rounded-xl font-semibold hover:bg-muted transition-colors">
              {city.phoneFormatted}
            </a>
          </div>
        </div>
        <div className="hidden md:block flex-shrink-0">
          <Image src="/assets/hero-apple-lineup.webp" alt={alt} width={1200} height={630}
            className="w-[420px] lg:w-[560px] h-auto rounded-3xl" priority />
        </div>
      </div>
    </section>
  );
}
