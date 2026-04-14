"use client";
import { HardDrive } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface StorageStepProps {
  value: string;
  onChange: (value: string) => void;
}

const storageOptions = ["128 ГБ", "256 ГБ", "512 ГБ", "1 ТБ"];

export default function StorageStep({ value, onChange }: StorageStepProps) {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Объём памяти
        </h2>
        <p className="text-muted-foreground">Сколько памяти вам необходимо?</p>
      </div>

      <RadioGroup value={value} onValueChange={onChange} className="grid grid-cols-2 gap-4">
        {storageOptions.map((storage) => (
          <div key={storage} className="relative">
            <RadioGroupItem value={storage} id={storage} className="peer sr-only" />
            <Label
              htmlFor={storage}
              className={cn(
                "flex flex-col items-center justify-center gap-3 p-6 rounded-xl border-2 bg-gradient-to-br from-card to-muted/30 cursor-pointer transition-all",
                "peer-data-[state=checked]:border-primary peer-data-[state=checked]:from-primary/5 peer-data-[state=checked]:to-accent/5 peer-data-[state=checked]:shadow-lg",
                "hover:border-primary/40 hover:bg-muted/30"
              )}
            >
              <HardDrive className="w-8 h-8 text-primary" />
              <span className="font-bold text-xl text-foreground">{storage}</span>
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}
