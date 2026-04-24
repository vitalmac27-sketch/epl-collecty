import { PROXY_URL } from "./proxy";

/**
 * Отправить заявку через прокси → Telegram.
 * payload — тот же формат что принимает Cloudflare Worker / Supabase функция.
 */
export async function sendTelegramMessage(
  _text: string,
  payload: unknown
): Promise<void> {
  const res = await fetch(PROXY_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    throw new Error(`Proxy error: ${res.status}`);
  }
}
