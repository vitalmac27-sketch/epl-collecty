"use client";
import { Smartphone, CreditCard } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface SimStepProps { value: string; onChange: (v: string) => void; }

const simOptions = [
  { value: "eSIM + SIM", label: "eSIM + SIM", Icon: Smartphone },
  { value: "eSIM",       label: "Только eSIM", Icon: Smartphone },
  { value: "2 SIM",      label: "2 SIM",       Icon: CreditCard },
];

export default function SimStep({ value, onChange }: SimStepProps) {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">Тип SIM-карты</h2>
        <p className="text-muted-foreground">Какой тип SIM вас интересует?</p>
      </div>
      <RadioGroup value={value} onValueChange={onChange} className="grid grid-cols-2 gap-4">
        {simOptions.map(({ value: v, label, Icon }) => (
          <div key={v} className="relative">
            <RadioGroupItem value={v} id={v} className="peer sr-only" />
            <Label htmlFor={v} className={cn(
              "flex flex-col items-center justify-center gap-3 p-6 rounded-xl border-2 bg-gradient-to-br from-card to-muted/30 cursor-pointer transition-all",
              "peer-data-[state=checked]:border-primary peer-data-[state=checked]:from-primary/5 peer-data-[state=checked]:shadow-lg hover:border-primary/40"
            )}>
              <Icon className="w-8 h-8 text-primary" />
              <span className="font-bold text-lg text-foreground">{label}</span>
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}
