"use client";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ToastProvider } from "@/components/ui/toast";
import ModelStep from "./steps/ModelStep";
import StorageStep from "./steps/StorageStep";
import ConditionStep from "./steps/ConditionStep";
import BatteryStep from "./steps/BatteryStep";
import SimStep from "./steps/SimStep";
import TimingStep from "./steps/TimingStep";
import PaymentStep from "./steps/PaymentStep";
import FinalStep from "./steps/FinalStep";
import ProgressBar from "./ProgressBar";

export interface QuizData {
  model: string;
  storage: string;
  condition: "new" | "used" | "";
  simType: string;
  battery: string;
  paymentMethod: string;
  purchaseTiming: string;
}

const TOTAL_STEPS = 8;

export default function QuizContainer() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<QuizData>({
    model: "", storage: "", condition: "",
    simType: "", battery: "", paymentMethod: "", purchaseTiming: "",
  });

  // Авто-переход при выборе (500ms задержка для анимации)
  useEffect(() => {
    // Уведомляем OrderSummary об изменении данных
    window.dispatchEvent(new CustomEvent("quiz-update", { detail: { data, step } }));

    const timer = setTimeout(() => {
      if      (step === 1 && data.model)                               next();
      else if (step === 2 && data.storage)                            next();
      else if (step === 3 && data.condition)                          next();
      else if (step === 4 && data.battery && data.condition === "used") next();
      else if (step === 5 && data.simType)                            next();
      else if (step === 6 && data.purchaseTiming)                     next();
    }, 500);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.model, data.storage, data.condition, data.battery, data.simType, data.purchaseTiming]);

  const next = () => {
    if (step === 3 && data.condition === "new") { setStep(5); return; }
    if (step < TOTAL_STEPS) setStep((s) => s + 1);
  };

  const back = () => {
    const clear: Partial<QuizData> = {};
    if      (step === 2) clear.model = "";
    else if (step === 3) clear.storage = "";
    else if (step === 4) clear.condition = "";
    else if (step === 5) { clear.battery = ""; if (data.condition === "new") { clear.condition = ""; setData((d) => ({ ...d, ...clear })); setStep(3); return; } }
    else if (step === 6) clear.simType = "";
    else if (step === 7) clear.purchaseTiming = "";
    else if (step === 8) clear.paymentMethod = "";
    setData((d) => ({ ...d, ...clear }));
    setStep((s) => s - 1);
  };

  const update = (field: keyof QuizData) => (value: string) =>
    setData((d) => ({ ...d, [field]: value }));

  // Количество видимых шагов (без батареи если новый)
  const visibleTotal = data.condition === "new" ? TOTAL_STEPS - 1 : TOTAL_STEPS;

  return (
    <ToastProvider>
      <div>
        {/* Прогресс-бар (скрыт на финальном шаге) */}
        {step < TOTAL_STEPS && (
          <ProgressBar step={step} total={visibleTotal} condition={data.condition} />
        )}

        {/* Карточка квиза */}
        <Card className="calculator-card p-6 sm:p-8 shadow-xl bg-white/80 backdrop-blur-sm border-2 border-primary/10 animate-fade-in">
          {step === 1 && <ModelStep   value={data.model}    onChange={update("model")} />}
          {step === 2 && <StorageStep value={data.storage}  onChange={update("storage")} />}
          {step === 3 && <ConditionStep value={data.condition} onChange={(v) => setData((d) => ({ ...d, condition: v }))} />}
          {step === 4 && data.condition === "used" && <BatteryStep value={data.battery} onChange={update("battery")} />}
          {step === 5 && <SimStep     value={data.simType}  onChange={update("simType")} />}
          {step === 6 && <TimingStep  value={data.purchaseTiming} onChange={update("purchaseTiming")} />}
          {step === 7 && (
            <div className="space-y-6">
              <PaymentStep value={data.paymentMethod} onChange={update("paymentMethod")} />
              <Button
                onClick={next}
                className="w-full bg-gradient-to-r from-primary to-accent"
                disabled={!data.paymentMethod}
              >
                Продолжить
              </Button>
            </div>
          )}
          {step === TOTAL_STEPS && <FinalStep data={data} onBack={back} />}

          {/* Кнопка "Назад" */}
          {step > 1 && step < TOTAL_STEPS && (
            <div className="mt-6">
              <Button variant="outline" onClick={back} className="hover:bg-muted">
                ← Назад
              </Button>
            </div>
          )}
        </Card>

        <p className="text-center text-sm text-muted-foreground mt-4">
          {step === TOTAL_STEPS
            ? "Нажимая кнопку, вы соглашаетесь с условиями обработки данных"
            : "Выберите вариант — перейдём к следующему шагу автоматически"}
        </p>
      </div>
    </ToastProvider>
  );
}
