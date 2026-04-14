import { MapPin, Truck } from "lucide-react";
import type { CityConfig } from "@/lib/cities";

interface DeliverySectionProps {
  city: CityConfig;
}

const districtDetails: Record<string, string> = {
  "Вахитовский":         "метро Площадь Тукая, ул. Баумана",
  "Ново-Савиновский":    "Сибгата Хакима, Ямашева, Чуйкова",
  "Приволжский (Азино)": "Азино, Проспект Победы, Амирхана",
  "Московский":          "Губкина, Декабристов, Восстания",
  "Авиастроительный":    "Королёва, Копылова, Лётная",
  "Кировский":           "Горьковское шоссе, Мавлютова",
  "Советский":           "Юдино, Залесный, Октябрьский",
  "Горки":               "Горки-1, Горки-2, Горки-3",
};

export default function DeliverySection({ city }: DeliverySectionProps) {
  return (
    <section aria-label={`Доставка по ${city.nameGen}`} className="max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10">
          <Truck className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-2xl font-bold">
          Бесплатная доставка по районам {city.nameGen}
        </h2>
      </div>

      <p className="text-muted-foreground mb-6">
        Доставим ваш iPhone{" "}
        <strong className="text-foreground">
          бесплатно в любой район {city.nameGen}
        </strong>{" "}
        в день заказа. Оплата — только после проверки при получении.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
        {city.deliveryDistricts.map((d) => (
          <div
            key={d}
            className="flex items-start gap-2 p-3 rounded-lg border border-border/50 bg-card/50"
          >
            <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-medium text-sm">{d} район</span>
              {districtDetails[d] && (
                <p className="text-xs text-muted-foreground">{districtDetails[d]}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <p className="text-sm text-muted-foreground mb-6">
        Также доставляем в пригороды: Высокая Гора, Лаишево, Зеленодольск.
        Уточняйте стоимость у менеджера.
      </p>

      {/* Яндекс карта */}
      <div>
        <p className="text-sm font-medium text-foreground mb-3">
          Наш магазин — самовывоз и консультации
        </p>
        <div className="rounded-xl overflow-hidden border border-border/50">
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=49.134648%2C55.814578&z=15&pt=49.134648%2C55.814578%2Cpm2rdm&size=650%2C400"
            width="100%"
            height="350"
            style={{ display: "block", border: 0 }}
            allowFullScreen
            title={`Магазин ЭПЛ-КОЛЛЕКЦИЯ на карте ${city.nameGen} — ${city.address}`}
            loading="lazy"
          />
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          📍 г. {city.name}, {city.address} · {city.hours} · {city.metroNote}
        </p>
      </div>
    </section>
  );
}
