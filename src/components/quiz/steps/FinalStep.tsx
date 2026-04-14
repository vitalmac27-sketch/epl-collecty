"use client";
import { useState, useRef, useEffect } from "react";
import {
  Smartphone, HardDrive, Package, Battery, Signal,
  CreditCard, Calendar, CheckCircle2, Shield, Zap,
  TrendingDown, Gift, Star, User, MessageCircle, Banknote,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/toast";
import { cn } from "@/lib/utils";
import type { QuizData } from "../QuizContainer";

// Цены на новые iPhone 17
const iphone17Prices: Record<string, Record<string, Record<string, number>>> = {
  "iPhone 17 Pro Max": { "256 ГБ": { "eSIM": 105000, "eSIM + SIM": 112000 }, "512 ГБ": { "eSIM": 116500, "eSIM + SIM": 129000 }, "1 ТБ": { "eSIM": 133000, "eSIM + SIM": 147000 } },
  "iPhone 17 Pro":     { "256 ГБ": { "eSIM": 95000,  "eSIM + SIM": 102500 }, "512 ГБ": { "eSIM": 108000, "eSIM + SIM": 118500 }, "1 ТБ": { "eSIM": 125000, "eSIM + SIM": 137000 } },
  "iPhone 17 Air":     { "256 ГБ": { "eSIM": 79000,  "eSIM + SIM": 79000 },  "512 ГБ": { "eSIM": 95000,  "eSIM + SIM": 95000 } },
  "iPhone 17":         { "256 ГБ": { "eSIM": 72000,  "eSIM + SIM": 72000, "2 SIM": 72000 } },
};

const timingMap: Record<string, string> = {
  "today-tomorrow": "Сегодня-завтра",
  "this-week": "На неделе",
  "this-month": "В течение месяца",
};

interface FinalStepProps {
  data: QuizData;
  onBack: () => void;
}

export default function FinalStep({ data, onBack }: FinalStepProps) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();
  const formRef = useRef<HTMLDivElement>(null);
  const priceRef = useRef<HTMLDivElement>(null);

  // Вычислить цену для iPhone 17
  const calcPrice = () => {
    if (data.condition !== "new" || !data.model.startsWith("iPhone 17")) return null;
    return iphone17Prices[data.model]?.[data.storage]?.[data.simType] ?? null;
  };
  const price = calcPrice();

  // Автоскролл к цене или форме
  useEffect(() => {
    const target = price ? priceRef.current : formRef.current;
    if (!target) return;
    const timer = setTimeout(() => {
      const top = target.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }, 800);
    return () => clearTimeout(timer);
  }, [price]);

  const items = [
    { Icon: Smartphone, label: "Модель",     value: data.model },
    { Icon: HardDrive,  label: "Память",     value: data.storage },
    { Icon: Package,    label: "Состояние",  value: data.condition === "new" ? "Новый" : "Б/У" },
    ...(data.condition === "used" ? [{ Icon: Battery,  label: "Батарея", value: `${data.battery}%` }] : []),
    { Icon: Signal,     label: "SIM",        value: data.simType },
    { Icon: Calendar,   label: "Когда",      value: timingMap[data.purchaseTiming] || data.purchaseTiming },
    { Icon: CreditCard, label: "Оплата",     value: data.paymentMethod === "cash" ? "Наличными" : "Рассрочка 0%" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim()) {
      toast({ title: "Ошибка", description: "Заполните имя и контакт", variant: "destructive" });
      return;
    }
    if (!agreed) {
      toast({ title: "Ошибка", description: "Примите условия оферты", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/send-telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, contact, ...data }),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
      toast({ title: "Заявка отправлена!", description: "Мы свяжемся с вами в течение 5 минут" });
    } catch {
      toast({ title: "Ошибка", description: "Не удалось отправить заявку. Попробуйте ещё раз.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12 space-y-4">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-foreground">Заявка отправлена!</h2>
        <p className="text-muted-foreground">Мы свяжемся с вами в течение 5 минут и уточним детали.</p>
        <div className="flex justify-center gap-4 pt-4">
          <a
            href="https://t.me/ac_care"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#0088cc] text-white rounded-xl font-medium hover:opacity-90 transition-opacity"
          >
            Написать в Telegram
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <div className="text-center mb-2">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-1">Проверьте ваш заказ</h2>
        <p className="text-sm text-muted-foreground">Убедитесь, что все данные верны</p>
      </div>

      {/* Конфигурация */}
      <Card className="p-4 sm:p-6 bg-gradient-to-br from-card to-muted/30 border-2 border-primary/20">
        <div className="flex items-center gap-2 mb-4">
          <CheckCircle2 className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-bold">Ваша конфигурация</h3>
        </div>
        <div className="grid gap-2 mb-4">
          {items.map(({ Icon, label, value }, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-border">
              <div className="p-2 rounded-lg bg-primary/10">
                <Icon className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted-foreground">{label}</p>
                <p className="text-sm font-semibold text-foreground truncate">{value || "—"}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Бонусы */}
        <div className="pt-3 border-t border-border">
          <p className="text-xs font-medium text-muted-foreground mb-2">Что вы получаете:</p>
          <div className="grid grid-cols-2 gap-2">
            {[
              { Icon: Shield,     text: "Гарантия до 1 года" },
              { Icon: Zap,        text: "Доставка в день заказа" },
              { Icon: CheckCircle2, text: "Проверка при получении" },
              { Icon: TrendingDown, text: "Аксессуары на 3 000 ₽" },
            ].map(({ Icon, text }) => (
              <div key={text} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50 text-xs">
                <Icon className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Цена для iPhone 17 */}
      {price && (
        <Card ref={priceRef} className="p-4 sm:p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-2 border-green-500/30">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-green-500/20">
                <Banknote className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Стоимость</p>
                <p className="text-2xl sm:text-3xl font-bold text-green-600">
                  {price.toLocaleString("ru-RU")} ₽
                </p>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-green-500 text-white text-xs font-semibold">
              Актуальная цена
            </span>
          </div>
        </Card>
      )}

      {/* Форма */}
      <Card ref={formRef} className="p-4 sm:p-6 border-2 border-primary/20">
        <div className="flex items-center gap-2 mb-1">
          <MessageCircle className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-bold">Оставьте контакты</h3>
        </div>
        <p className="text-xs text-muted-foreground mb-5">Свяжемся в течение 5 минут</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="name" className="flex items-center gap-2 text-sm font-medium">
              <User className="w-4 h-4 text-primary" /> Ваше имя <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name" type="text" placeholder="Введите ваше имя"
              value={name} onChange={(e) => setName(e.target.value)}
              required className="h-12 text-base border-2 focus-visible:ring-primary"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="contact" className="flex items-center gap-2 text-sm font-medium">
              <MessageCircle className="w-4 h-4 text-primary" /> Телефон или Telegram <span className="text-destructive">*</span>
            </Label>
            <Input
              id="contact" type="text" placeholder="@telegram_ник или +7 999 123-45-67"
              value={contact} onChange={(e) => setContact(e.target.value)}
              required className="h-12 text-base border-2 focus-visible:ring-primary"
            />
            <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
              <span className="px-2 py-1 bg-muted rounded-md">Пример: @ivan_petrov</span>
              <span className="px-2 py-1 bg-muted rounded-md">Пример: +7 999 123-45-67</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20">
            <Gift className="w-5 h-5 text-primary flex-shrink-0" />
            <p className="text-sm font-semibold">Комплект аксессуаров на 3 000 ₽ в подарок!</p>
          </div>

          <div className="flex items-start gap-2">
            <Checkbox
              id="agree" checked={agreed}
              onCheckedChange={(c) => setAgreed(c === true)}
              className="mt-0.5"
            />
            <label htmlFor="agree" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
              Я согласен с{" "}
              <a href="/offer" target="_blank" className="text-primary hover:underline">Публичной офертой</a>
              {" "}и{" "}
              <a href="/privacy" target="_blank" className="text-primary hover:underline">Политикой конфиденциальности</a>
            </label>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button type="button" variant="outline" onClick={onBack} disabled={submitting} className="sm:flex-1">
              Назад
            </Button>
            <Button
              type="submit" disabled={submitting || !agreed}
              className={cn(
                "sm:flex-1 bg-gradient-to-r from-primary to-accent text-base py-6 transition-all",
                !submitting && agreed && "animate-pulse hover:animate-none"
              )}
            >
              {submitting ? "Отправка..." : "Получить цену со скидкой"}
            </Button>
          </div>

          <div className="flex items-center justify-center gap-1 text-muted-foreground">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-medium">5/5 на основе 315+ отзывов</span>
          </div>
        </form>
      </Card>
    </div>
  );
}
