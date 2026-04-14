"use client";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Battery } from "lucide-react";
import { cn } from "@/lib/utils";

interface BatteryStepProps {
  value: string;
  onChange: (value: string) => void;
}

const batteryOptions = [
  { value: "100",   label: "100%",   color: "text-green-500",  desc: "Как новый" },
  { value: "95-99", label: "95–99%", color: "text-green-500",  desc: "Отличное" },
  { value: "90-94", label: "90–94%", color: "text-green-400",  desc: "Хорошее" },
  { value: "87-89", label: "87–89%", color: "text-blue-500",   desc: "Норма" },
];

export default function BatteryStep({ value, onChange }: BatteryStepProps) {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Ёмкость аккумулятора
        </h2>
        <p className="text-muted-foreground">
          Какой процент батареи вас интересует?
        </p>
      </div>

      <RadioGroup value={value} onValueChange={onChange} className="grid grid-cols-2 gap-4">
        {batteryOptions.map((opt) => (
          <div key={opt.value} className="relative">
            <RadioGroupItem value={opt.value} id={opt.value} className="peer sr-only" />
            <Label
              htmlFor={opt.value}
              className={cn(
                "flex flex-col items-center justify-center gap-3 p-6 rounded-xl border-2 bg-gradient-to-br from-card to-muted/30 cursor-pointer transition-all",
                "peer-data-[state=checked]:border-primary peer-data-[state=checked]:from-primary/5 peer-data-[state=checked]:to-accent/5 peer-data-[state=checked]:shadow-lg",
                "hover:border-primary/40"
              )}
            >
              <Battery className={cn("w-8 h-8", opt.color)} />
              <span className="font-bold text-xl text-foreground">{opt.label}</span>
              <span className="text-xs text-muted-foreground">{opt.desc}</span>
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}
