/**
 * send-telegram.ts — отправка заявок в Telegram
 *
 * Стратегия: ДВА канала доставки подряд (если первый не сработал — пробуем второй)
 *   1. Прямая отправка в Telegram Bot API (через NEXT_PUBLIC env vars)
 *   2. Supabase Edge Function (прокладка Lovable, если была настроена)
 *
 * Если ни один не сработал — выбрасываем ошибку.
 */

const BOT_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
const CHAT_ID   = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;
const SUPABASE_URL = "https://kepaooewfbztxvcknawo.supabase.co/functions/v1/send-telegram";

/**
 * Отправить готовое текстовое сообщение в Telegram.
 * Сообщение должно быть в формате Markdown (Telegram Bot API Markdown V1).
 */
export async function sendTelegramMessage(text: string, supabasePayload?: unknown): Promise<void> {
  let lastError: unknown = null;

  // Попытка 1: Прямая отправка в Telegram Bot API
  if (BOT_TOKEN && CHAT_ID) {
    try {
      const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
          parse_mode: "Markdown",
          disable_web_page_preview: true,
        }),
      });
      if (res.ok) {
        return;
      }
      lastError = new Error(`Telegram API returned ${res.status}`);
    } catch (e) {
      lastError = e;
    }
  }

  // Попытка 2: Supabase Edge Function (если настроена)
  if (supabasePayload) {
    try {
      const res = await fetch(SUPABASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(supabasePayload),
      });
      if (res.ok) {
        return;
      }
      lastError = new Error(`Supabase returned ${res.status}`);
    } catch (e) {
      lastError = e;
    }
  }

  throw lastError ?? new Error("Все каналы отправки недоступны");
}
