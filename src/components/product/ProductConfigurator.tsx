"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { type IPhoneConfig, getConfigPrice } from "@/lib/iphone-configs";
import { formatPrice, monthlyPayment, cn } from "@/lib/utils";

interface Props {
  config: IPhoneConfig;
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
  const [condition,       setCondition]       = useState<"new" | "used">("new");

  const currentColor = config.colors.find((c) => c.id === selectedColor) ?? config.colors[0];

  const price = getConfigPrice(config, selectedStorage, selectedSim, condition);
  const storageLabel = config.storage.find((s) => s.gb === selectedStorage)?.label ?? "";
  const simLabel = config.sim.find((s) => s.id === selectedSim)?.label ?? "";

  // Собираем полное название конфигурации для H1 / заголовка
  const configTitle = `${modelName} ${storageLabel} ${currentColor.name} (${simLabel})`;

  const handleStorageChange = useCallback((gb: number) => {
    setSelectedStorage(gb);
    // если текущей цены нет — сбрасываем SIM на дефолт
    if (!getConfigPrice(config, gb, selectedSim, condition)) {
      setSelectedSim(config.defaultSim);
    }
  }, [config, selectedSim, condition]);

  return (
    <section className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-16">

      {/* ── Левая колонка: фото ── */}
      <div className="relative">
        <div className="bg-muted/20 rounded-3xl p-6 flex items-center justify-center aspect-square max-w-md mx-auto sticky top-24">
          <Image
            src={`/assets/${currentColor.image}.avif`}
            alt={`Купить ${configTitle} в ${cityName}`}
            width={500}
            height={500}
            className="object-contain drop-shadow-xl transition-all duration-300"
            priority
          />
        </div>
      </div>

      {/* ── Правая колонка: конфигуратор ── */}
      <div>
        {/* Заголовок */}
        <h1 className="text-2xl md:text-3xl font-bold mb-1 leading-tight">
          {condition === "new" ? "Купить " : "Купить б/у "}
          <span className="text-primary">{configTitle}</span>
          <span className="text-muted-foreground"> в {cityName}</span>
        </h1>

        {/* Цена */}
        <div className="bg-card border border-border rounded-2xl p-5 my-5">
          {price ? (
            <>
              <p className="text-sm text-muted-foreground mb-1">Цена</p>
              <p className="text-4xl font-bold text-primary mb-1">
                {formatPrice(price)}
              </p>
              <p className="text-sm text-muted-foreground">
                или {monthlyPayment(price)} / мес при рассрочке 0% × 10 мес
              </p>
            </>
          ) : (
            <p className="text-muted-foreground">Цену уточняйте у менеджера</p>
          )}
        </div>

        {/* ── Новый / Б/у ── */}
        <div className="mb-5">
          <p className="text-sm font-semibold mb-2 text-muted-foreground uppercase tracking-wide">
            Состояние
          </p>
          <div className="flex gap-2">
            {(["new", "used"] as const).map((cond) => (
              <button
                key={cond}
                onClick={() => setCondition(cond)}
                className={cn(
                  "flex-1 py-2.5 px-4 rounded-xl text-sm font-medium border-2 transition-all",
                  condition === cond
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card hover:border-primary/40"
                )}
              >
                {cond === "new" ? "✨ Новый" : "♻️ Б/у"}
              </button>
            ))}
          </div>
          {condition === "used" && (
            <p className="text-xs text-muted-foreground mt-2">
              Б/у — гарантия 60 дней. Диагностика на 30+ пунктов перед продажей.
            </p>
          )}
        </div>

        {/* ── Выбор памяти ── */}
        <div className="mb-5">
          <p className="text-sm font-semibold mb-2 text-muted-foreground uppercase tracking-wide">
            Объём памяти
          </p>
          <div className="flex flex-wrap gap-2">
            {config.storage.map((opt) => {
              const available = getConfigPrice(config, opt.gb, selectedSim, condition) !== undefined;
              return (
                <button
                  key={opt.gb}
                  onClick={() => available && handleStorageChange(opt.gb)}
                  disabled={!available}
                  className={cn(
                    "py-2.5 px-5 rounded-xl text-sm font-medium border-2 transition-all",
                    !available
                      ? "border-border text-muted-foreground/40 cursor-not-allowed bg-muted/20"
                      : selectedStorage === opt.gb
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card hover:border-primary/40"
                  )}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Выбор цвета ── */}
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
                className={cn(
                  "w-9 h-9 rounded-full border-2 transition-all hover:scale-110",
                  selectedColor === color.id
                    ? "border-primary scale-110 shadow-lg"
                    : "border-border/60"
                )}
                style={{ background: color.hex }}
              />
            ))}
          </div>
        </div>

        {/* ── Выбор SIM ── */}
        <div className="mb-6">
          <p className="text-sm font-semibold mb-2 text-muted-foreground uppercase tracking-wide">
            Тип SIM
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
                <p className={cn(
                  "text-sm font-semibold",
                  selectedSim === sim.id ? "text-primary" : "text-foreground"
                )}>
                  {sim.label}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">{sim.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* ── Гарантии ── */}
        <ul className="grid grid-cols-2 gap-2 mb-6 text-sm">
          {[
            { icon: "🛡️", text: condition === "new" ? "Гарантия 1 год" : "Гарантия 60 дней" },
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

        {/* ── CTA ── */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            ✈️ Написать в Telegram
          </a>
          <Link
            href="/#calculator-section"
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border-2 border-primary text-primary font-semibold hover:bg-primary/5 transition-colors"
          >
            🔄 Рассчитать с Trade-in
          </Link>
        </div>
      </div>
    </section>
  );
}
