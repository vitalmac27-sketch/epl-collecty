"use client";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { getModelsByCategory } from "@/lib/models";

interface ModelStepProps {
  value: string;
  onChange: (value: string) => void;
}

const iPhones = getModelsByCategory("iphone").filter((m) =>
  ["17", "16", "15", "14", "13"].includes(m.series)
);

// Группируем по сериям
const grouped = iPhones.reduce<Record<string, typeof iPhones>>((acc, m) => {
  acc[m.series] = acc[m.series] ?? [];
  acc[m.series].push(m);
  return acc;
}, {});

export default function ModelStep({ value, onChange }: ModelStepProps) {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Выберите модель iPhone
        </h2>
        <p className="text-muted-foreground">
          Подберём лучшую цену под вашу модель
        </p>
      </div>

      <div className="space-y-4">
        {["17", "16", "15", "14", "13"].map((series) => {
          const models = grouped[series];
          if (!models?.length) return null;
          return (
            <div key={series}>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-1">
                iPhone {series} серия
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {models.map((model) => (
                  <button
                    key={model.slug}
                    type="button"
                    onClick={() => onChange(model.name)}
                    className={cn(
                      "relative flex flex-col items-center gap-2 p-3 rounded-xl border-2 transition-all duration-200 cursor-pointer text-left",
                      value === model.name
                        ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                        : "border-border hover:border-primary/40 hover:bg-muted/50"
                    )}
                  >
                    {model.badge && (
                      <span className="absolute top-2 right-2 bg-primary text-primary-foreground text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                        {model.badge}
                      </span>
                    )}
                    <div className="w-16 h-16 relative flex-shrink-0">
                      <Image
                        src={`/assets/${model.image}.avif`}
                        alt={model.name}
                        fill
                        className="object-contain"
                        sizes="64px"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-xs font-semibold text-foreground text-center leading-tight">
                      {model.name.replace("iPhone ", "")}
                    </span>
                    <span className="text-[10px] text-primary font-medium">
                      от {(model.priceFrom / 1000).toFixed(0)} 000 ₽
                    </span>
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
