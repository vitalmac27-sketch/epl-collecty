"use client";
import { Clock, Calendar, CalendarDays } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface TimingStepProps { value: string; onChange: (v: string) => void; }

const options = [
  { value: "today-tomorrow", label: "Сегодня-завтра", desc: "Готов купить прямо сейчас",  Icon: Clock },
  { value: "this-week",      label: "На неделе",       desc: "В ближайшие 7 дней",          Icon: Calendar },
  { value: "this-month",     label: "В течение месяца",desc: "Планирую в этом месяце",      Icon: CalendarDays },
];

export default function TimingStep({ value, onChange }: TimingStepProps) {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Когда планируете покупку?</h2>
        <p className="text-muted-foreground">Выберите удобные сроки</p>
      </div>
      <RadioGroup value={value} onValueChange={onChange} className="grid gap-4">
        {options.map(({ value: v, label, desc, Icon }) => (
          <Label key={v} htmlFor={v} className={cn(
            "flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all hover:border-primary/50 hover:bg-primary/5",
            value === v ? "border-primary bg-primary/10 shadow-lg" : "border-border"
          )}>
            <RadioGroupItem value={v} id={v} className="sr-only" />
            <div className={cn("p-3 rounded-full flex-shrink-0", value === v ? "bg-primary text-primary-foreground" : "bg-muted")}>
              <Icon className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <span className="font-semibold text-lg block">{label}</span>
              <span className="text-sm text-muted-foreground">{desc}</span>
            </div>
            {value === v && (
              <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}
          </Label>
        ))}
      </RadioGroup>
    </div>
  );
}
