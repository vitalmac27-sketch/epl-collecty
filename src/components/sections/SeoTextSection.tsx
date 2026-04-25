import Link from "next/link";
import { MapPin } from "lucide-react";
import type { CityConfig } from "@/lib/cities";

interface SeoTextSectionProps {
  city: CityConfig;
}

export default function SeoTextSection({ city }: SeoTextSectionProps) {
  return (
    <section aria-label="Информация о магазине" className="max-w-4xl mx-auto space-y-6">
      <h2 className="text-3xl font-bold">
        Где купить iPhone в {city.namePre} недорого
      </h2>

      <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
        <p>
          <strong className="text-foreground">Купить iPhone в {city.namePre} выгодно</strong> — легко
          в магазине <strong className="text-foreground">ЭПЛ-КОЛЛЕКЦИЯ</strong>. Мы
          находимся в {city.district} по адресу:{" "}
          <strong className="text-foreground">{city.address}</strong> и работаем
          для вас {city.hours} каждый день.
        </p>

        <p>
          В нашем магазине вы можете{" "}
          <strong className="text-foreground">
            купить iPhone в {city.namePre} недорого
          </strong>{" "}
          — от проверенных временем iPhone 13, iPhone 14 Pro Max до последних
          новинок iPhone 17 Pro Max и iPhone 17 Air. Все устройства — оригинальные,
          с полным комплектом.
        </p>

        <p>
          Каждый смартфон проходит тщательную диагностику перед продажей.{" "}
          <strong className="text-foreground">Гарантия на новые — 1 год</strong>,
          на б/у — 60 дней. Покупая у нас, вы получаете оригинальный iPhone с
          гарантией по лучшей цене в {city.namePre}.
        </p>

        <h3 className="text-2xl font-bold text-foreground pt-4">
          Почему покупать iPhone у нас, а не на Авито?
        </h3>

        <p>
          На <strong className="text-foreground">Авито</strong> велик риск нарваться на
          подделку, залоченный или краденый iPhone. В{" "}
          <strong className="text-foreground">ЭПЛ-КОЛЛЕКЦИЯ</strong> каждый iPhone
          проходит полную диагностику на 30+ пунктов. Вы получаете{" "}
          <strong className="text-foreground">гарантию 1 год</strong> — чего
          ни один продавец на Авито предложить не может.
        </p>

        <p>
          По сравнению с{" "}
          <strong className="text-foreground">М.Видео и DNS</strong>, наши цены на
          iPhone ниже на 15–30%. При этом вы получаете тот же оригинальный Apple
          iPhone, ту же гарантию, но экономите от 10 000 до 40 000 ₽.
        </p>

        <h3 className="text-2xl font-bold text-foreground pt-4">
          Рассрочка 0% без переплат
        </h3>

        <p>
          <strong className="text-foreground">Купить айфон в рассрочку</strong> —
          просто: оформление онлайн за 5 минут, без похода в банк. Срок рассрочки
          до 10 месяцев, первоначальный взнос — 0 ₽. Одобрение в день обращения.
        </p>
      </div>

      {/* Ссылки на страницы моделей */}
      <div className="p-6 rounded-xl border border-border/50 bg-card/50">
        <h3 className="text-lg font-semibold mb-4">
          Популярные модели iPhone в {city.namePre}
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {[
            "iphone-17-pro-max", "iphone-17-pro", "iphone-17-air",
            "iphone-17", "iphone-16-pro-max", "iphone-16-pro", "iphone-16",
          ].map((slug) => {
            const label = slug
              .split("-")
              .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
              .join(" ");
            return (
              <Link
                key={slug}
                href={`/iphone/${slug}`}
                className="flex items-center gap-2 p-3 rounded-lg hover:bg-accent/50 transition-colors text-sm font-medium text-primary hover:underline"
              >
                → {label} {city.namePre}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Адрес */}
      <div className="space-y-2 pt-4 border-t border-border">
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
          <p className="text-sm">
            <strong className="text-foreground">
              Адрес магазина iPhone в {city.namePre}:
            </strong>{" "}
            г. {city.name}, {city.address}
          </p>
        </div>
        <p className="text-sm">
          <strong className="text-foreground">Телефон:</strong>{" "}
          <a href={`tel:${city.phone}`} className="text-primary hover:underline">
            {city.phoneFormatted}
          </a>
        </p>
      </div>
    </section>
  );
}
