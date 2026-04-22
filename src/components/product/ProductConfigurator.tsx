"use client";

import { useState, useCallback, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { type ProductConfig, getConfigPrice } from "@/lib/product-configs";
import { formatPrice, monthlyPayment, cn } from "@/lib/utils";

interface Props {
  config: ProductConfig;
  modelName: string;
  cityName: string;
  telegramLink: string;
}

export default function ProductConfigurator({
  config,
  modelName,
  cityName,
  telegramLink,
}: Props) {
  const [selectedColor,   setSelectedColor]   = useState(config.defaultColor);
  const [selectedStorage, setSelectedStorage] = useState(config.defaultStorage);
  const [selectedSim,     setSelectedSim]     = useState(config.defaultSim);

  const currentColor   = config.colors.find((c) => c.id === selectedColor) ?? config.colors[0];
  const currentStorage = config.storage.find((s) => s.id === selectedStorage);
  const currentSim     = config.sim.find((s) => s.id === selectedSim);

  const price = useMemo(
    () => getConfigPrice(config, selectedStorage, selectedSim, selectedColor),
    [config, selectedStorage, selectedSim, selectedColor]
  );

  // Текст конфигурации для H1 и сообщения в Telegram
  const configLabel = [
    modelName,
    currentStorage?.label,
    currentColor?.name,
    config.showSim ? currentSim?.label : "",
  ].filter(Boolean).join(" · ");

  const telegramQuery = encodeURIComponent(
    `Здравствуйте! Интересует ${configLabel} — подскажите наличие и актуальную цену.`
  );
  const telegramUrl = `${telegramLink}?text=${telegramQuery}`;

  // Доступность памяти для текущего SIM/цвета (хотя бы одна цена)
  const isStorageAvailable = useCallback((sid: string) => {
    return config.prices.some((p) => p.storageId === sid);
  }, [config]);

  return (
    <section className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-16">

      {/* Фото */}
      <div className="relative">
        <div className="bg-muted/20 rounded-3xl p-6 flex items-center justify-center aspect-square max-w-md mx-auto sticky top-24">
          <Image
            src={`/assets/${currentColor.image}.avif`}
            alt={`Купить ${configLabel} в ${cityName}`}
            width={500}
            height={500}
            className="object-contain drop-shadow-xl transition-all duration-300"
            priority
            onError={(e) => {
              // Фолбэк на webp если avif нет
              const img = e.currentTarget as HTMLImageElement;
              if (!img.src.endsWith('.webp')) {
                img.src = `/assets/${currentColor.image}.webp`;
              }
            }}
          />
        </div>
      </div>

      {/* Конфигуратор */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold mb-1 leading-tight">
          Купить <span className="text-primary">{modelName}</span>
          {currentStorage && <span className="text-foreground"> {currentStorage.label}</span>}
          {currentColor && <span className="text-foreground"> {currentColor.name}</span>}
          <span className="text-muted-foreground"> в {cityName}</span>
        </h1>
        <p className="text-sm text-muted-foreground mb-4">
          Оригинал · Гарантия 1 год · Рассрочка 0%
        </p>

        {/* Цена */}
        <div className="bg-card border border-border rounded-2xl p-5 my-5">
          {price ? (
            <>
              <p className="text-sm text-muted-foreground mb-1">Цена</p>
              <p className="text-4xl font-bold text-primary mb-1">{formatPrice(price)}</p>
              <p className="text-sm text-muted-foreground">
                или {monthlyPayment(price)} / мес при рассрочке 0% × 10 мес
              </p>
            </>
          ) : (
            <>
              <p className="text-sm text-muted-foreground mb-1">Цена</p>
              <p className="text-2xl font-bold text-foreground mb-1">Уточняйте у менеджера</p>
              <p className="text-sm text-muted-foreground">
                Напишите в Telegram — ответим с актуальной ценой в течение 5 минут
              </p>
            </>
          )}
        </div>

        {/* Память / Конфигурация */}
        {config.storage.length > 1 && (
          <div className="mb-5">
            <p className="text-sm font-semibold mb-2 text-muted-foreground uppercase tracking-wide">
              {config.storageLabel}
            </p>
            <div className="flex flex-wrap gap-2">
              {config.storage.map((opt) => {
                const available = isStorageAvailable(opt.id);
                return (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedStorage(opt.id)}
                    className={cn(
                      "py-2.5 px-5 rounded-xl text-sm font-medium border-2 transition-all",
                      selectedStorage === opt.id
                        ? "border-primary bg-primary text-primary-foreground"
                        : available
                        ? "border-border bg-card hover:border-primary/40"
                        : "border-border bg-card text-muted-foreground hover:border-primary/40"
                    )}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Цвет */}
        {config.colors.length > 1 && (
          <div className="mb-5">
            <p className="text-sm font-semibold mb-2 text-muted-foreground uppercase tracking-wide">
              Цвет — <span className="text-foreground normal-case font-normal">{currentColor.name}</span>
            </p>
            <div className="flex gap-3 flex-wrap">
              {config.colors.map((color) => (
                <button
                  key={color.id}
                  onClick={() => setSelectedColor(color.id)}
                  title={color.name}
                  aria-label={color.name}
                  className={cn(
                    "w-10 h-10 rounded-full border-2 transition-all hover:scale-110",
                    selectedColor === color.id
                      ? "border-primary scale-110 shadow-lg ring-2 ring-primary/20 ring-offset-2"
                      : "border-border/60"
                  )}
                  style={{ background: color.hex }}
                />
              ))}
            </div>
          </div>
        )}

        {/* SIM */}
        {config.showSim && config.sim.length > 1 && (
          <div className="mb-6">
            <p className="text-sm font-semibold mb-2 text-muted-foreground uppercase tracking-wide">
              Тип связи
            </p>
            <div className="flex flex-col gap-2">
              {config.sim.map((sim) => (
                <button
                  key={sim.id}
                  onClick={() => setSelectedSim(sim.id)}
                  className={cn(
                    "text-left p-3 rounded-xl border-2 transition-all",
                    selectedSim === sim.id
                      ? "border-primary bg-primary/5"
                      : "border-border bg-card hover:border-primary/30"
                  )}
                >
                  <p className={cn("text-sm font-semibold",
                    selectedSim === sim.id ? "text-primary" : "text-foreground")}>
                    {sim.label}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">{sim.description}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Гарантии */}
        <ul className="grid grid-cols-2 gap-2 mb-6 text-sm">
          {[
            { icon: "🛡️", text: "Гарантия 1 год" },
            { icon: "🚚", text: "Доставка в день заказа" },
            { icon: "✅", text: "Проверка при получении" },
            { icon: "🔄", text: "Trade-in до 70%" },
          ].map(({ icon, text }) => (
            <li key={text} className="flex items-center gap-2">
              <span>{icon}</span>
              <span className="text-muted-foreground">{text}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            ✈️ {price ? "Купить в Telegram" : "Узнать цену"}
          </a>
          <Link
            href="/#calculator-section"
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border-2 border-primary text-primary font-semibold hover:bg-primary/5 transition-colors"
          >
            🔄 Калькулятор с Trade-in
          </Link>
        </div>

        {!price && (
          <p className="text-xs text-muted-foreground mt-3 text-center">
            💡 Этой комбинации сейчас нет в прайсе — уточняйте наличие у менеджера
          </p>
        )}
      </div>
    </section>
  );
}
