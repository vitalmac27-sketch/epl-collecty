"use client";
import { Sparkles, Package } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface ConditionStepProps {
  value: "new" | "used" | "";
  onChange: (value: "new" | "used") => void;
}

export default function ConditionStep({ value, onChange }: ConditionStepProps) {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Состояние устройства
        </h2>
        <p className="text-muted-foreground">Новый или б/у?</p>
      </div>

      <RadioGroup
        value={value}
        onValueChange={(v) => onChange(v as "new" | "used")}
        className="grid grid-cols-2 gap-4"
      >
        {[
          { id: "new", label: "Новый", sub: "С запечатанной коробкой", Icon: Sparkles },
          { id: "used", label: "Б/У", sub: "Бывший в употреблении", Icon: Package },
        ].map(({ id, label, sub, Icon }) => (
          <div key={id} className="relative">
            <RadioGroupItem value={id} id={id} className="peer sr-only" />
            <Label
              htmlFor={id}
              className={cn(
                "flex flex-col items-center justify-center gap-4 p-8 rounded-xl border-2 bg-gradient-to-br from-card to-muted/30 cursor-pointer transition-all",
                "peer-data-[state=checked]:border-primary peer-data-[state=checked]:from-primary/5 peer-data-[state=checked]:to-accent/5 peer-data-[state=checked]:shadow-lg",
                "hover:border-primary/40"
              )}
            >
              <Icon className="w-12 h-12 text-primary" />
              <div className="text-center">
                <span className="font-bold text-xl text-foreground block">{label}</span>
                <span className="text-sm text-muted-foreground">{sub}</span>
              </div>
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}
