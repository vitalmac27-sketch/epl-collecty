"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface BuyFormProps {
  isOpen: boolean;
  onClose: () => void;
  modelName: string;
  configLabel: string;  // "iPhone 17 Pro Max · 256 ГБ · Чёрный"
  price: number | null;
  /** "buy" — обычный заказ, "tradein" — оценка Trade-in */
  mode: "buy" | "tradein";
}

// Прокладка Supabase → Telegram (та же что для квиза)
import { PROXY_URL } from "@/lib/proxy";

export default function BuyForm({
  isOpen,
  onClose,
  modelName,
  configLabel,
  price,
  mode,
}: BuyFormProps) {
  const [name, setName]             = useState("");
  const [phone, setPhone]           = useState("");
  const [comment, setComment]       = useState("");
  const [tradeInModel, setTIModel]  = useState("");
  const [tradeInStorage, setTIStor] = useState("");
  const [tradeInBattery, setTIBat]  = useState("");
  const [agreed, setAgreed]         = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted]   = useState(false);
  const [error, setError]           = useState<string | null>(null);

  if (!isOpen) return null;

  const title       = mode === "buy" ? "Оформить заказ" : "Оценить Trade-in";
  const submitText  = mode === "buy" ? "Отправить заявку" : "Отправить на оценку";
  const description = mode === "buy"
    ? "Менеджер перезвонит в течение 5 минут и подтвердит заказ"
    : "Менеджер оценит ваше устройство и рассчитает доплату на новую модель";

  const formatMoney = (p: number) =>
    new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
      maximumFractionDigits: 0,
    }).format(p);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim() || !phone.trim()) {
      setError("Заполните имя и телефон");
      return;
    }
    if (!agreed) {
      setError("Примите условия обработки данных");
      return;
    }
    if (mode === "tradein" && !tradeInModel.trim()) {
      setError("Укажите модель, которую хотите сдать");
      return;
    }

    setSubmitting(true);

    // Формируем payload для Supabase функции — в том же формате что квиз,
    // но с нашими полями (Trade-in или покупка)
    const payload = (() => {
      if (mode === "buy") {
        return {
          name,
          contact: phone,
          model: modelName,
          storage: configLabel,
          condition: "new" as const,
          battery: "",
          simType: "Заказ с карточки товара",
          purchaseTiming: "today-tomorrow",
          paymentMethod: price
            ? `Заказ: ${formatMoney(price)}${comment ? ` | Коммент: ${comment}` : ""}`
            : `Заказ (цену уточнит менеджер)${comment ? ` | Коммент: ${comment}` : ""}`,
        };
      } else {
        return {
          name,
          contact: phone,
          model: `🔄 TRADE-IN → ${modelName}`,
          storage: `Хочет купить: ${configLabel}${price ? ` (${formatMoney(price)})` : ""}`,
          condition: "used" as const,
          battery: tradeInBattery || "не указано",
          simType: `Сдаёт: ${tradeInModel}${tradeInStorage ? ` ${tradeInStorage}` : ""}`,
          purchaseTiming: "this-week",
          paymentMethod: `Trade-in оценка${comment ? ` | Коммент: ${comment}` : ""}`,
        };
      }
    })();

    try {
      const res = await fetch(PROXY_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError("Не удалось отправить. Попробуйте написать нам в Telegram напрямую.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="bg-background border border-border rounded-3xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {submitted ? (
          <div className="p-8 text-center">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-2">Заявка отправлена!</h2>
            <p className="text-muted-foreground mb-6">
              Мы свяжемся с вами в течение 5 минут и уточним детали.
            </p>
            <button
              onClick={onClose}
              className="px-8 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Закрыть
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6">
            <div className="flex items-start justify-between mb-1">
              <h2 className="text-xl font-bold">{title}</h2>
              <button
                type="button"
                onClick={onClose}
                className="text-muted-foreground hover:text-foreground text-2xl leading-none"
                aria-label="Закрыть"
              >
                ×
              </button>
            </div>
            <p className="text-sm text-muted-foreground mb-5">{description}</p>

            {/* Выбранная модель */}
            <div className="bg-muted/40 border border-border rounded-xl p-3 mb-5">
              <p className="text-xs text-muted-foreground mb-1">
                {mode === "buy" ? "Выбранная модель" : "Хотите купить"}
              </p>
              <p className="text-sm font-semibold">{configLabel}</p>
              {price && (
                <p className="text-lg font-bold text-primary mt-1">{formatMoney(price)}</p>
              )}
            </div>

            {/* Поля Trade-in: что сдаёт */}
            {mode === "tradein" && (
              <div className="mb-4 space-y-3">
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                  Ваше устройство для сдачи
                </p>
                <div>
                  <label className="block text-xs text-muted-foreground mb-1">Модель *</label>
                  <input
                    type="text"
                    value={tradeInModel}
                    onChange={(e) => setTIModel(e.target.value)}
                    placeholder="Например: iPhone 14 Pro"
                    className="w-full px-3 py-2.5 border border-border rounded-xl bg-background focus:outline-none focus:border-primary"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-muted-foreground mb-1">Память</label>
                    <input
                      type="text"
                      value={tradeInStorage}
                      onChange={(e) => setTIStor(e.target.value)}
                      placeholder="128 ГБ"
                      className="w-full px-3 py-2.5 border border-border rounded-xl bg-background focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-muted-foreground mb-1">Ёмкость АКБ</label>
                    <input
                      type="text"
                      value={tradeInBattery}
                      onChange={(e) => setTIBat(e.target.value)}
                      placeholder="89%"
                      className="w-full px-3 py-2.5 border border-border rounded-xl bg-background focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Контакты */}
            <div className="space-y-3 mb-4">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                Контактные данные
              </p>
              <div>
                <label className="block text-xs text-muted-foreground mb-1">Ваше имя *</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Иван"
                  className="w-full px-3 py-2.5 border border-border rounded-xl bg-background focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-xs text-muted-foreground mb-1">Телефон *</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+7 (999) 123-45-67"
                  className="w-full px-3 py-2.5 border border-border rounded-xl bg-background focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-xs text-muted-foreground mb-1">
                  Комментарий (необязательно)
                </label>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Дополнительные пожелания"
                  rows={2}
                  className="w-full px-3 py-2.5 border border-border rounded-xl bg-background focus:outline-none focus:border-primary resize-none"
                />
              </div>
            </div>

            {/* Согласие */}
            <label className="flex items-start gap-2 mb-4 cursor-pointer">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-0.5 w-4 h-4 cursor-pointer"
              />
              <span className="text-xs text-muted-foreground leading-relaxed">
                Согласен на обработку персональных данных в соответствии с{" "}
                <a href="/privacy" target="_blank" className="text-primary underline">
                  политикой конфиденциальности
                </a>
              </span>
            </label>

            {error && (
              <div className="mb-4 p-3 rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 text-sm text-red-700 dark:text-red-400">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className={cn(
                "w-full px-6 py-3.5 rounded-xl font-semibold transition-opacity",
                "bg-primary text-primary-foreground hover:opacity-90",
                "disabled:opacity-50 disabled:cursor-not-allowed"
              )}
            >
              {submitting ? "Отправка..." : submitText}
            </button>

            <p className="text-xs text-muted-foreground text-center mt-3">
              Или напишите нам в{" "}
              <a href="https://t.me/ac_care" target="_blank" className="text-primary underline">
                Telegram
              </a>
              {" "}— ответим за 5 минут
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
