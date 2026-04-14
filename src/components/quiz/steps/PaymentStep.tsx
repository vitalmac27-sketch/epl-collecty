"use client";
import { Banknote, CreditCard } from "lucide-react";
import { cn } from "@/lib/utils";

interface PaymentStepProps { value: string; onChange: (v: string) => void; }

const methods = [
  { id: "cash",        label: "Наличными",      desc: null,                   Icon: Banknote },
  { id: "installment", label: "Рассрочка 0%",   desc: "Оформление онлайн",    Icon: CreditCard },
];

export default function PaymentStep({ value, onChange }: PaymentStepProps) {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Форма оплаты</h2>
        <p className="text-muted-foreground mt-1">Выберите удобный способ</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {methods.map(({ id, label, desc, Icon }) => (
          <button
            key={id}
            type="button"
            onClick={() => onChange(id)}
            className={cn(
              "flex flex-col items-center gap-3 p-6 rounded-xl border-2 transition-all",
              value === id
                ? "border-primary bg-primary/5 ring-2 ring-primary shadow-lg"
                : "border-border hover:border-primary/40 hover:bg-muted/30"
            )}
          >
            <Icon className="w-8 h-8 text-primary" />
            <div className="text-center">
              <span className="font-semibold text-base block">{label}</span>
              {desc && <span className="text-xs text-muted-foreground">{desc}</span>}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
