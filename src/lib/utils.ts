import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Мёрж Tailwind классов без конфликтов */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Форматировать число как цену: 101000 → "101 000 ₽" */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  }).format(price);
}

/** Ежемесячный платёж в рассрочку на N месяцев */
export function monthlyPayment(price: number, months: number = 36): string {
  return formatPrice(Math.ceil(price / months));
}
