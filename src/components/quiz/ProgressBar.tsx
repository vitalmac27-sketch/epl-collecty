"use client";
import { Smartphone, HardDrive, Package, Battery, Signal, Calendar, CreditCard, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  step: number;
  total: number;
  condition: string;
}

const allStepIcons = [
  { Icon: Smartphone,  label: "Модель" },
  { Icon: HardDrive,   label: "Память" },
  { Icon: Package,     label: "Состояние" },
  { Icon: Battery,     label: "Батарея" },   // index 3 — скрываем для новых
  { Icon: Signal,      label: "SIM" },
  { Icon: Calendar,    label: "Сроки" },
  { Icon: CreditCard,  label: "Оплата" },
  { Icon: CheckCircle, label: "Итог" },
];

export default function ProgressBar({ step, total, condition }: ProgressBarProps) {
  const visibleSteps = allStepIcons.filter((_, i) => {
    if (i === 3 && condition === "new") return false; // батарея для б/у
    if (i === 7) return false;                        // итог не показываем
    return true;
  });

  const progress = Math.round((step / total) * 100);

  return (
    <div className="mb-6">
      {/* Текст */}
      <div className="flex justify-between text-sm text-muted-foreground mb-3">
        <span className="font-medium">Шаг {step} из {total}</span>
        <span className="font-medium">{progress}%</span>
      </div>

      {/* Полоска */}
      <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-secondary/50 mb-4">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Иконки шагов */}
      <div className="flex justify-between">
        {visibleSteps.map(({ Icon, label }, i) => {
          const n = i + 1;
          const done    = n < step;
          const current = n === step;
          return (
            <div key={label} className="flex flex-col items-center gap-1.5">
              <div className={cn(
                "w-9 h-9 rounded-full flex items-center justify-center transition-all",
                done    && "bg-primary text-primary-foreground shadow-md shadow-primary/30",
                current && "bg-accent text-accent-foreground ring-4 ring-accent/20",
                !done && !current && "bg-secondary text-muted-foreground"
              )}>
                <Icon className="w-4 h-4" />
              </div>
              <span className={cn(
                "text-[10px] font-medium hidden sm:block transition-colors",
                (done || current) ? "text-foreground" : "text-muted-foreground"
              )}>
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
