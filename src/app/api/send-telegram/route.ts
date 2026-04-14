import { NextRequest, NextResponse } from "next/server";

interface LeadPayload {
  name: string;
  contact: string;
  model: string;
  storage: string;
  condition: "new" | "used";
  battery?: string;
  simType: string;
  purchaseTiming: string;
  paymentMethod: string;
}

function formatMessage(data: LeadPayload): string {
  const conditionLabel = data.condition === "new" ? "🆕 Новый" : "📦 Б/У";
  const paymentLabel =
    data.paymentMethod === "cash" ? "💵 Наличными" : "💳 Рассрочка 0%";
  const timingMap: Record<string, string> = {
    "today-tomorrow": "⚡ Сегодня-завтра",
    "this-week": "📅 На этой неделе",
    "this-month": "🗓 В течение месяца",
  };

  return [
    "🔔 *Новая заявка с сайта!*",
    "",
    `👤 *Имя:* ${data.name}`,
    `📱 *Контакт:* ${data.contact}`,
    "",
    `📱 *Модель:* ${data.model}`,
    `💾 *Память:* ${data.storage}`,
    `📦 *Состояние:* ${conditionLabel}`,
    ...(data.condition === "used" && data.battery
      ? [`🔋 *Батарея:* ${data.battery}%`]
      : []),
    `📶 *SIM:* ${data.simType}`,
    `⏱ *Срок покупки:* ${timingMap[data.purchaseTiming] ?? data.purchaseTiming}`,
    `💰 *Оплата:* ${paymentLabel}`,
    "",
    `🌐 *Источник:* timewe.claud`,
  ].join("\n");
}

export async function POST(req: NextRequest) {
  try {
    const body: LeadPayload = await req.json();

    if (!body.name?.trim() || !body.contact?.trim()) {
      return NextResponse.json(
        { error: "Имя и контакт обязательны" },
        { status: 400 }
      );
    }

    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!BOT_TOKEN || !CHAT_ID) {
      console.error("Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID");
      return NextResponse.json({ error: "Telegram не настроен" }, { status: 500 });
    }

    const tgRes = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: formatMessage(body),
          parse_mode: "Markdown",
        }),
      }
    );

    if (!tgRes.ok) {
      const err = await tgRes.text();
      console.error("Telegram API error:", err);
      return NextResponse.json({ error: "Ошибка Telegram" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("send-telegram error:", err);
    return NextResponse.json({ error: "Внутренняя ошибка" }, { status: 500 });
  }
}
