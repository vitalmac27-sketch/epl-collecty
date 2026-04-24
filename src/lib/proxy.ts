/**
 * proxy.ts — URL прокси для отправки заявок в Telegram.
 *
 * Изначально: Supabase Edge Function (Lovable) — заморожена.
 * Теперь: Cloudflare Worker (не замерзает, работает в РФ).
 *
 * После деплоя воркера замените PROXY_URL на ваш URL вида:
 *   https://epl-proxy.ВАШЕ_ИМЯ.workers.dev
 */
export const PROXY_URL =
  process.env.NEXT_PUBLIC_PROXY_URL ||
  "https://black-tree-eb8a.vitalmac27.workers.dev";
