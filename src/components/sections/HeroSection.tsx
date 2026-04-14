import Image from "next/image";
import Link from "next/link";
import type { CityConfig } from "@/lib/cities";

interface HeroSectionProps {
  city: CityConfig;
}

export default function HeroSection({ city }: HeroSectionProps) {
  return (
    <section aria-label="Главный баннер">
      {/* Mobile */}
      <div className="md:hidden px-4 pt-6 pb-8 text-center">
        <h1 className="font-display text-3xl font-light tracking-tight mb-3">
          <span className="block text-foreground/90 mb-1">Купить Айфон iPhone</span>
          <span className="block bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent font-normal">
            {city.nameGen} выгодно
          </span>
        </h1>
        <p className="text-base font-light text-foreground/60 mb-6">
          Подберите свой Айфон за 1 минуту — рассрочка 0%, гарантия до 1 года
        </p>
        <div className="flex justify-center">
          <Image
            src="/assets/hero-iphones-collection.jpg"
            alt={`Купить iPhone ${city.namePre} выгодно — iPhone 13, 14, 15, 16, 17 в магазине ЭПЛ-КОЛЛЕКЦИЯ`}
            width={320}
            height={240}
            className="rounded-2xl bg-white object-contain"
            priority
          />
        </div>
        <div className="flex gap-3 justify-center mt-6">
          <Link
            href="#calculator-section"
            className="px-5 py-2.5 bg-primary text-primary-foreground rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Подобрать iPhone
          </Link>
          <a
            href={city.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 border border-border rounded-xl text-sm font-semibold hover:bg-muted transition-colors"
          >
            Написать
          </a>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        <div className="max-w-6xl mx-auto px-6 py-12 flex items-center justify-between gap-12">
          <div className="flex-1">
            <h1 className="font-display text-5xl lg:text-6xl font-light tracking-tight mb-6">
              <span className="block text-foreground/90 mb-2">Купить Айфон iPhone</span>
              <span className="block bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent font-normal">
                {city.nameGen} выгодно
              </span>
            </h1>
            <p className="text-xl font-light text-foreground/60 mb-8">
              Рассрочка 0% · Гарантия до 1 года · Доставка в день заказа
            </p>
            <div className="flex gap-4">
              <Link
                href="#calculator-section"
                className="px-7 py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity"
              >
                Подобрать за 1 минуту
              </Link>
              <a
                href={`tel:${city.phone}`}
                className="px-7 py-3.5 border border-border rounded-xl font-semibold hover:bg-muted transition-colors"
              >
                {city.phoneFormatted}
              </a>
            </div>
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/assets/hero-iphones-collection.jpg"
              alt={`Купить iPhone ${city.namePre} выгодно — iPhone 13, 14, 15, 16, 17 в магазине ЭПЛ-КОЛЛЕКЦИЯ`}
              width={500}
              height={375}
              className="rounded-3xl bg-white object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
