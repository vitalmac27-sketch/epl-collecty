"use client";
import { useEffect, useState } from "react";
import { Smartphone, HardDrive, Package, Battery, Signal, CreditCard, CheckCircle2, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// Получаем данные квиза через CustomEvent от QuizContainer
export default function OrderSummary() {
  const [data, setData] = useState({
    model: "", storage: "", condition: "",
    battery: "", simType: "", purchaseTiming: "", paymentMethod: "",
  });
  const [step, setStep] = useState(1);

  useEffect(() => {
    const handler = (e: CustomEvent) => {
      setData(e.detail.data);
      setStep(e.detail.step);
    };
    window.addEventListener("quiz-update" as any, handler);
    return () => window.removeEventListener("quiz-update" as any, handler);
  }, []);

  const items = [
    { Icon: Smartphone, label: "Модель",    value: data.model,      stepN: 1, color: "text-blue-500" },
    { Icon: HardDrive,  label: "Память",    value: data.storage,    stepN: 2, color: "text-purple-500" },
    { Icon: Package,    label: "Состояние", value: data.condition === "new" ? "Новый" : data.condition === "used" ? "Б/У" : "", stepN: 3, color: "text-green-500" },
    { Icon: Battery,    label: "Батарея",   value: data.condition === "used" ? `${data.battery}%` : "—", stepN: 4, color: "text-orange-500", hide: data.condition === "new" },
    { Icon: Signal,     label: "SIM",       value: data.simType,    stepN: 5, color: "text-cyan-500" },
    { Icon: Calendar,   label: "Сроки",     value: { "today-tomorrow": "Сегодня-завтра", "this-week": "На неделе", "this-month": "В месяц" }[data.purchaseTiming] || "", stepN: 6, color: "text-indigo-500" },
    { Icon: CreditCard, label: "Оплата",    value: data.paymentMethod === "cash" ? "Наличными" : data.paymentMethod === "installment" ? "Рассрочка 0%" : "", stepN: 7, color: "text-pink-500" },
  ].filter(item => !item.hide);

  return (
    <Card className="p-5 bg-gradient-to-br from-card to-muted/30 border-2 border-primary/10 sticky top-20">
      <div className="flex items-center gap-2 mb-4">
        <CheckCircle2 className="w-5 h-5 text-primary" />
        <h3 className="font-bold text-lg">Ваш выбор</h3>
      </div>

      <div className="space-y-2.5">
        {items.map(({ Icon, label, value, stepN, color }) => {
          const done    = step > stepN;
          const current = step === stepN;
          return (
            <div key={label} className={cn(
              "flex items-center gap-3 p-3 rounded-lg transition-all duration-300",
              done    && "bg-background/60 border border-primary/20",
              current && "bg-accent/10 border border-accent/50",
              !done && !current && "opacity-35"
            )}>
              <div className={cn("p-2 rounded-lg", done ? "bg-primary/10" : "bg-muted")}>
                <Icon className={cn("w-4 h-4", done ? color : "text-muted-foreground")} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted-foreground">{label}</p>
                <p className={cn("font-medium text-sm truncate", value ? "text-foreground" : "text-muted-foreground")}>
                  {value || "Не выбрано"}
                </p>
              </div>
              {done && <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />}
            </div>
          );
        })}
      </div>

      {step >= 7 && data.paymentMethod && (
        <div className="mt-4 p-3 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 text-center text-sm font-medium text-foreground">
          Все параметры выбраны! 🎉
        </div>
      )}
    </Card>
  );
}
