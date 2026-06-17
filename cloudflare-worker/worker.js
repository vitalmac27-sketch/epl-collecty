// Cloudflare Worker — прокси заявок в Telegram + прокси API/фото с VPS
// Деплой: https://workers.cloudflare.com
// API/фото проксируются, чтобы каталог открывался в т.ч. из-под VPN
// (прямой путь к российскому IP VPS рвётся DPI, а Cloudflare доступен отовсюду).

const BOT_TOKEN = "8264534520:AAGO0VhrB51vWxf1329wmzeRw_kW2Ud29yw";
const CHAT_ID   = "5549559991";

// Источник API на VPS (punycode)
const ORIGIN = "https://api.xn----jtbjgbccazg9frdtb.xn--p1ai";

// Разрешённые источники (CORS)
const ALLOWED_ORIGINS = [
  "https://xn----jtbjgbccazg9frdtb.xn--p1ai",
  "https://эпл-коллекция.рф",
  "https://vitalmac27-sketch-epl-collecty-b816.twc1.net",
  "http://localhost:3000",
];

export default {
  async fetch(request) {
    const origin = request.headers.get("Origin") || "";
    const url = new URL(request.url);

    // CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }

    // ─── Прокси API и фото с VPS (GET) ──────────────────────────────
    if (request.method === "GET" &&
        (url.pathname.startsWith("/api/bu-iphone") || url.pathname.startsWith("/photos/"))) {
      try {
        const upstream = await fetch(ORIGIN + url.pathname + url.search, {
          method: "GET",
          headers: { Accept: request.headers.get("Accept") || "*/*" },
        });
        const headers = new Headers(upstream.headers);
        headers.set("Access-Control-Allow-Origin", "*");
        headers.set(
          "Cache-Control",
          url.pathname.startsWith("/photos/") ? "public, max-age=86400" : "no-store"
        );
        return new Response(upstream.body, { status: upstream.status, headers });
      } catch (e) {
        return new Response(JSON.stringify({ error: "upstream", detail: String(e) }), {
          status: 502,
          headers: { ...corsHeaders(origin), "Content-Type": "application/json" },
        });
      }
    }

    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405 });
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return new Response(JSON.stringify({ error: "Invalid JSON" }), {
        status: 400,
        headers: { ...corsHeaders(origin), "Content-Type": "application/json" },
      });
    }

    const text = buildMessage(body);

    const tgRes = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
          parse_mode: "Markdown",
          disable_web_page_preview: true,
        }),
      }
    );

    if (!tgRes.ok) {
      const err = await tgRes.text();
      return new Response(JSON.stringify({ error: err }), {
        status: 502,
        headers: { ...corsHeaders(origin), "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { ...corsHeaders(origin), "Content-Type": "application/json" },
    });
  },
};

// ─── Формирует читаемое сообщение ────────────────────────────────────────────

function buildMessage(d) {
  const lines = [];

  const isTradeIn  = d.model?.includes("Trade-in") || d.simType === "Trade-in";
  const isQuiz     = d.purchaseTiming && !d.model?.includes("Trade-in") && !d._formType;

  if (isTradeIn) {
    lines.push("🔄 *Заявка: Trade-in*", "");
    lines.push(`🎯 *Хочет купить:* ${clean(d.storage)}`);
    if (d._price) lines.push(`💰 *Цена новой:* ${fmt(d._price)}`);
    lines.push("");
    lines.push("📦 *Сдаёт устройство:*");
    lines.push(`• Модель: ${clean(d.simType?.replace("Сдаёт:", "").trim()) || "не указано"}`);
    if (d.battery && d.battery !== "не указано") lines.push(`• АКБ: ${d.battery}`);
    if (d._tradeInStorage) lines.push(`• Память: ${d._tradeInStorage}`);
  } else if (isQuiz) {
    lines.push("🔔 *Новая заявка с квиза!*", "");
    lines.push(`📱 *Модель:* ${clean(d.model)}`);
    lines.push(`💾 *Память:* ${clean(d.storage)}`);
    lines.push(`📦 *Состояние:* ${d.condition === "new" ? "🆕 Новый" : "📦 Б/У"}`);
    if (d.condition === "used" && d.battery) lines.push(`🔋 *Батарея:* ${d.battery}%`);
    lines.push(`📡 *SIM:* ${clean(d.simType)}`);
    lines.push(`⏱ *Когда:* ${timingLabel(d.purchaseTiming)}`);
    lines.push(`💳 *Оплата:* ${d.paymentMethod === "cash" ? "💵 Наличными" : "💳 Рассрочка 0%"}`);
  } else {
    lines.push("🛒 *Новая заявка с карточки товара!*", "");
    lines.push(`📱 *Модель:* ${clean(d.model)}`);
    if (d.storage && d.storage !== d.model) lines.push(`⚙️ *Конфигурация:* ${clean(d.storage)}`);
    if (d.paymentMethod) lines.push(`💬 *Детали:* ${clean(d.paymentMethod)}`);
  }

  lines.push("");
  lines.push(`👤 *Имя:* ${clean(d.name)}`);
  lines.push(`📞 *Контакт:* ${clean(d.contact)}`);
  lines.push("");
  lines.push("🌐 *Источник:* эпл-коллекция.рф");

  return lines.join("\n");
}

// ─── Хелперы ─────────────────────────────────────────────────────────────────

function corsHeaders(origin) {
  const allowed = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin":  allowed,
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

function clean(s) {
  return (s || "").replace(/[*_`]/g, "").trim() || "—";
}

function fmt(n) {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency", currency: "RUB", maximumFractionDigits: 0,
  }).format(Number(n));
}

function timingLabel(t) {
  const map = {
    "today-tomorrow": "⚡ Сегодня-завтра",
    "this-week":      "📅 На этой неделе",
    "this-month":     "🗓 В течение месяца",
  };
  return map[t] || t || "—";
}
