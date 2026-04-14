"use client";
import { useEffect, useState } from "react";
import { Clock, Sparkles } from "lucide-react";

export default function UrgencyBanner() {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const calc = () => {
      const now = new Date();
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(0, 0, 0, 0);
      const diff = tomorrow.getTime() - now.getTime();
      const h = Math.floor(diff / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      setTimeLeft(`${h}ч ${m}м`);
    };
    calc();
    const id = setInterval(calc, 60000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="animate-fade-in">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 via-background to-primary/5 border border-primary/10 p-4 md:p-6">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
          <div className="flex items-start gap-3 md:gap-4">
            <div className="p-2 md:p-3 rounded-xl bg-primary/10 flex-shrink-0">
              <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="font-display font-medium text-base md:text-lg text-foreground mb-0.5">
                Бонусы на 3 000 ₽ в подарок!
              </p>
              <p className="text-xs md:text-sm text-muted-foreground font-light">
                Стильный чехол + премиум защитное стекло — только сегодня
              </p>
            </div>
          </div>
          {timeLeft && (
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-background/80 border border-primary/20 shadow-sm flex-shrink-0">
              <Clock className="w-4 h-4 text-primary" />
              <span className="font-mono font-semibold text-sm md:text-base text-primary tabular-nums">
                {timeLeft}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
