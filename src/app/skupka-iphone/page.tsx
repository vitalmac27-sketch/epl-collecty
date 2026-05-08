"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PROXY_URL } from "@/lib/proxy";

const CITY_PHONE = "+7 (999) 267-39-33";
const TG_LINK = "https://t.me/ac_care";
const VK_LINK = "https://vk.com/apple_collecty";
const ADDRESS = "ул. Сибгата Хакима, 40а, офис 7";
const HOURS = "Пн–Вс 13:00–20:00";

const IPHONE_MODELS = [
  "iPhone 13", "iPhone 13 Pro", "iPhone 13 Pro Max",
  "iPhone 14", "iPhone 14 Plus", "iPhone 14 Pro", "iPhone 14 Pro Max",
  "iPhone 15", "iPhone 15 Plus", "iPhone 15 Pro", "iPhone 15 Pro Max",
  "iPhone 16", "iPhone 16 Plus", "iPhone 16 Pro", "iPhone 16 Pro Max", "iPhone 16e",
  "iPhone 17", "iPhone 17 Air", "iPhone 17 Pro", "iPhone 17 Pro Max",
];

const STORAGE_OPTIONS = ["64 ГБ", "128 ГБ", "256 ГБ", "512 ГБ", "1 ТБ"];

const PRICES = [
  { model: "iPhone 13",       p128: "22 000", p256: "25 000", p512: null,    p1tb: null },
  { model: "iPhone 13 Pro",   p128: "28 000", p256: "32 000", p512: "35 000", p1tb: "38 000" },
  { model: "iPhone 13 Pro Max", p128: "32 000", p256: "36 000", p512: "40 000", p1tb: "43 000" },
  { model: "iPhone 14",       p128: "30 000", p256: "33 000", p512: null,    p1tb: null },
  { model: "iPhone 14 Pro",   p128: "40 000", p256: "45 000", p512: "50 000", p1tb: "54 000" },
  { model: "iPhone 14 Pro Max", p128: "45 000", p256: "50 000", p512: "56 000", p1tb: "60 000" },
  { model: "iPhone 15",       p128: "38 000", p256: "42 000", p512: "47 000", p1tb: null },
  { model: "iPhone 15 Pro",   p128: "52 000", p256: "58 000", p512: "64 000", p1tb: "70 000" },
  { model: "iPhone 15 Pro Max", p128: null,   p256: "68 000", p512: "76 000", p1tb: "82 000" },
  { model: "iPhone 16",       p128: "48 000", p256: "53 000", p512: "58 000", p1tb: null },
  { model: "iPhone 16 Pro",   p128: "65 000", p256: "72 000", p512: "78 000", p1tb: "85 000" },
  { model: "iPhone 16 Pro Max", p128: null,  p256: "82 000", p512: "90 000", p1tb: "98 000" },
  { model: "iPhone 17",       p128: "58 000", p256: "64 000", p512: "70 000", p1tb: null },
  { model: "iPhone 17 Pro",   p128: null,    p256: "88 000", p512: "96 000", p1tb: "105 000" },
  { model: "iPhone 17 Pro Max", p128: null,  p256: "100 000", p512: "110 000", p1tb: "120 000" },
];

export default function SkupkaIphonePage() {
  // Form state
  const [model, setModel]         = useState("");
  const [storage, setStorage]     = useState("");
  const [battery, setBattery]     = useState("");
  const [condition, setCondition] = useState("");
  const [name, setName]           = useState("");
  const [contact, setContact]     = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted]   = useState(false);
  const [error, setError]           = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!model || !storage || !battery || !name || !contact) {
      setError("Заполните все обязательные поля");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch(PROXY_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          contact,
          model: `📱 ВЫКУП: ${model} ${storage}`,
          storage: `АКБ: ${battery}% | Состояние: ${condition || "не указано"}`,
          condition: "used",
          battery,
          simType: "Выкуп iPhone",
          purchaseTiming: "today-tomorrow",
          paymentMethod: "Выкуп устройства",
        }),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError("Не удалось отправить. Напишите нам в Telegram напрямую.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">

      {/* Хлебные крошки */}
      <nav className="mb-6 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-primary">Главная</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground font-medium">Выкуп iPhone в Казани</span>
      </nav>

      {/* H1 */}
      <h1 className="text-3xl md:text-4xl font-bold mb-2 leading-tight">
        Продать iPhone в Казани — оценим за 2 минуты
      </h1>
      <p className="text-muted-foreground text-lg mb-8">
        Выкупаем iPhone 13–17 Pro Max. Деньги сразу — наличными или СБП.
      </p>

      {/* ══ ФОРМА ВВЕРХУ ══ */}
      <div className="bg-card border-2 border-primary/20 rounded-3xl p-6 mb-10 shadow-sm">
        {submitted ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-xl font-bold mb-2">Заявка отправлена!</h2>
            <p className="text-muted-foreground mb-4">Назовём точную цену в течение 2 минут в рабочее время.</p>
            <a href={TG_LINK} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90">
              ✈️ Написать в Telegram
            </a>
          </div>
        ) : (
          <>
            <h2 className="text-xl font-bold mb-1">Узнать цену за 2 минуты</h2>
            <p className="text-sm text-muted-foreground mb-5">
              Заполните форму — напишем точную цену, не диапазон
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                {/* Модель */}
                <div>
                  <label className="block text-sm font-medium mb-1">Модель iPhone *</label>
                  <select
                    value={model}
                    onChange={e => setModel(e.target.value)}
                    className="w-full px-3 py-2.5 border border-border rounded-xl bg-background focus:outline-none focus:border-primary text-sm"
                  >
                    <option value="">Выберите модель</option>
                    {IPHONE_MODELS.map(m => <option key={m} value={m}>{m}</option>)}
                  </select>
                </div>
                {/* Память */}
                <div>
                  <label className="block text-sm font-medium mb-1">Объём памяти *</label>
                  <select
                    value={storage}
                    onChange={e => setStorage(e.target.value)}
                    className="w-full px-3 py-2.5 border border-border rounded-xl bg-background focus:outline-none focus:border-primary text-sm"
                  >
                    <option value="">Выберите память</option>
                    {STORAGE_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {/* АКБ */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Ёмкость АКБ (%) *
                    <span className="text-xs text-muted-foreground ml-1 font-normal">
                      (Настройки → Аккумулятор → Состояние)
                    </span>
                  </label>
                  <input
                    type="number"
                    min="1" max="100"
                    value={battery}
                    onChange={e => setBattery(e.target.value)}
                    placeholder="Например: 92"
                    className="w-full px-3 py-2.5 border border-border rounded-xl bg-background focus:outline-none focus:border-primary text-sm"
                  />
                </div>
                {/* Состояние */}
                <div>
                  <label className="block text-sm font-medium mb-1">Состояние корпуса</label>
                  <select
                    value={condition}
                    onChange={e => setCondition(e.target.value)}
                    className="w-full px-3 py-2.5 border border-border rounded-xl bg-background focus:outline-none focus:border-primary text-sm"
                  >
                    <option value="">Выберите состояние</option>
                    <option value="Идеальное">Идеальное (без следов)</option>
                    <option value="Хорошее">Хорошее (небольшие потёртости)</option>
                    <option value="Среднее">Среднее (есть царапины)</option>
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {/* Имя */}
                <div>
                  <label className="block text-sm font-medium mb-1">Ваше имя *</label>
                  <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Максим"
                    className="w-full px-3 py-2.5 border border-border rounded-xl bg-background focus:outline-none focus:border-primary text-sm"
                  />
                </div>
                {/* Контакт */}
                <div>
                  <label className="block text-sm font-medium mb-1">Телефон или Telegram *</label>
                  <input
                    type="text"
                    value={contact}
                    onChange={e => setContact(e.target.value)}
                    placeholder="+7 (999) 123-45-67 или @username"
                    className="w-full px-3 py-2.5 border border-border rounded-xl bg-background focus:outline-none focus:border-primary text-sm"
                  />
                </div>
              </div>

              {error && (
                <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 text-sm text-red-700 dark:text-red-400">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-base hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {submitting ? "Отправка..." : "Узнать цену за 2 минуты →"}
              </button>
              <p className="text-xs text-muted-foreground text-center">
                Или напишите сразу в{" "}
                <a href={TG_LINK} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Telegram</a>
                {" "}— ответим быстрее всего
              </p>
            </form>
          </>
        )}
      </div>

      {/* Кнопки мессенджеров */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-12">
        <a href={TG_LINK} target="_blank" rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0088cc] text-white font-medium text-sm hover:opacity-90">
          ✈️ Telegram
        </a>
        <a href={`https://wa.me/79992673933`} target="_blank" rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-white font-medium text-sm hover:opacity-90">
          💬 WhatsApp
        </a>
        <a href={VK_LINK} target="_blank" rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0077FF] text-white font-medium text-sm hover:opacity-90 col-span-2 sm:col-span-1">
          📘 ВКонтакте
        </a>
      </div>

      {/* ══ SEO-КОНТЕНТ ══ */}

      {/* 4 шага */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Как продать iPhone: 4 шага за 15 минут</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { n: "1", title: "Напишите нам", text: "Отправьте модель, объём памяти и Battery Health в форму выше или в любой мессенджер." },
            { n: "2", title: "Получите цену за 2 минуты", text: "Рассчитаем стоимость и пришлём конкретную сумму — не диапазон «от и до», а точную цифру под ваш аппарат." },
            { n: "3", title: "Привезите iPhone на осмотр", text: "Осмотр 5–7 минут. Проверяем экран, камеры, Face ID, порты, аккумулятор. Если всё совпадает — цена не меняется." },
            { n: "4", title: "Получите деньги сразу", text: "Наличными или переводом через СБП — как удобнее. Никаких «перезвоним завтра»." },
          ].map(({ n, title, text }) => (
            <div key={n} className="flex gap-4 p-4 bg-card border border-border rounded-2xl">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shrink-0">
                {n}
              </div>
              <div>
                <p className="font-semibold mb-1">{title}</p>
                <p className="text-sm text-muted-foreground">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Фото iPhone */}
      <div className="my-8 rounded-2xl overflow-hidden bg-muted/20 aspect-[16/9] relative">
        <Image
          src="/assets/iphone-16-pro-max-black-titanium.avif"
          alt="Выкуп iPhone в Казани — продать айфон быстро и выгодно в ЭПЛ-КОЛЛЕКЦИЯ"
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          className="object-contain p-6 mix-blend-multiply dark:mix-blend-normal"
        />
      </div>

      {/* Таблица цен */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-2">Сколько стоит ваш iPhone</h2>
        <p className="text-muted-foreground text-sm mb-5">
          Цены за устройство в хорошем состоянии с аккумулятором от 88%. Актуальны на май 2026.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                {["Модель", "128 ГБ", "256 ГБ", "512 ГБ", "1 ТБ"].map(h => (
                  <th key={h} className="px-4 py-3 text-left font-semibold whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {PRICES.map((row, i) => (
                <tr key={row.model} className={i % 2 === 0 ? "bg-muted/30" : "bg-card"}>
                  <td className="px-4 py-3 font-semibold whitespace-nowrap">{row.model}</td>
                  {[row.p128, row.p256, row.p512, row.p1tb].map((p, j) => (
                    <td key={j} className="px-4 py-3 text-muted-foreground whitespace-nowrap">
                      {p ? <span className="text-foreground font-medium">до {p} ₽</span> : <span className="text-muted-foreground/40">—</span>}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted-foreground mt-3">
          * Цены ориентировочные. Итоговая сумма зависит от состояния и Battery Health.{" "}
          <a href={TG_LINK} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Напишите нам</a>
          {" "}— назовём точную цену за 2 минуты.
        </p>
      </section>

      {/* Требования */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-5">Требования к устройству</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {[
            { emoji: "📱", title: "От iPhone 13", text: "Принимаем iPhone 13, 14, 15, 16, 17 всех версий. Более ранние модели не выкупаем — рыночная стоимость слишком низкая." },
            { emoji: "🔋", title: "Аккумулятор от 88%", text: "Настройки → Аккумулятор → Состояние. Ниже 88% — не берём. При 88–92% цена будет ниже чем при 95–100%." },
            { emoji: "🔓", title: "Не привязан к чужому Apple ID", text: "Если в настройках чужое имя и вы не можете выйти из iCloud — выкупить не сможем." },
            { emoji: "✅", title: "Не в розыске", text: "Проверяем каждый iPhone по IMEI. Если числится утерянным или краденым — отказываем." },
          ].map(({ emoji, title, text }) => (
            <div key={title} className="flex gap-3 p-4 bg-card border border-border rounded-2xl">
              <span className="text-2xl shrink-0">{emoji}</span>
              <div>
                <p className="font-semibold mb-1">{title}</p>
                <p className="text-sm text-muted-foreground">{text}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-lg font-bold mb-4">Что влияет на цену</h3>
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/40">
                <th className="px-4 py-3 text-left font-semibold">Фактор</th>
                <th className="px-4 py-3 text-left font-semibold">Как влияет</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Аккумулятор 95–100%", "✅ Максимальная цена"],
                ["Аккумулятор 88–94%", "↓ Минус 5–15%"],
                ["Царапины на корпусе", "↓ Минус 3–10%"],
                ["Царапины на экране", "↓ Минус 5–15%"],
                ["Нет коробки", "↓ Минус 2–5%"],
                ["Полный комплект (коробка + кабель + чек)", "↑ Плюс к цене"],
                ["Есть AppleCare+", "↑ Плюс к цене"],
              ].map(([factor, impact], i) => (
                <tr key={factor} className={i % 2 === 0 ? "bg-muted/20" : "bg-card"}>
                  <td className="px-4 py-3 text-muted-foreground">{factor}</td>
                  <td className={`px-4 py-3 font-medium ${impact.startsWith("✅") || impact.startsWith("↑") ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
                    {impact}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Фото iPhone 17 */}
      <div className="my-8 rounded-2xl overflow-hidden bg-muted/20 aspect-[16/9] relative">
        <Image
          src="/assets/iphone-17-pro-max-orange.avif"
          alt="Скупка айфонов в Казани — выгодно сдать iPhone 13, 14, 15, 16, 17"
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          className="object-contain p-6 mix-blend-multiply dark:mix-blend-normal"
        />
      </div>

      {/* Сравнение с Авито */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-5">Почему продать у нас проще, чем на Авито</h2>
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="px-4 py-3 text-left font-semibold">Критерий</th>
                <th className="px-4 py-3 text-left font-semibold">ЭПЛ-КОЛЛЕКЦИЯ</th>
                <th className="px-4 py-3 text-left font-semibold">Авито</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Оценка", "2 минуты в мессенджере", "Несколько дней ожидания"],
                ["Сделка", "15 минут в офисе", "1–2 недели переписки"],
                ["Безопасность", "Офис, деньги сразу", "Незнакомцы, риск обмана"],
                ["Цена", "Конкретная до встречи", "Торг и снижение на месте"],
                ["Оплата", "Наличные или СБП", "Договорённость с покупателем"],
              ].map(([crit, us, avito], i) => (
                <tr key={crit} className={i % 2 === 0 ? "bg-muted/20" : "bg-card"}>
                  <td className="px-4 py-3 font-medium">{crit}</td>
                  <td className="px-4 py-3 text-green-600 dark:text-green-400 font-medium">{us}</td>
                  <td className="px-4 py-3 text-muted-foreground">{avito}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Контакты */}
      <section className="mb-12 bg-muted/40 border border-border rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-4">Где написать для оценки</h2>
        <p className="text-muted-foreground text-sm mb-5">
          Ответим за 2 минуты в рабочее время ({HOURS}).
        </p>
        <div className="grid sm:grid-cols-2 gap-3 mb-4">
          <a href={TG_LINK} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 rounded-xl bg-[#0088cc]/10 border border-[#0088cc]/20 hover:bg-[#0088cc]/20 transition-colors">
            <span className="text-2xl">✈️</span>
            <div>
              <p className="font-semibold text-sm">Telegram</p>
              <p className="text-xs text-muted-foreground">Быстрее всего</p>
            </div>
          </a>
          <a href={`https://wa.me/79992673933`} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/20 transition-colors">
            <span className="text-2xl">💬</span>
            <div>
              <p className="font-semibold text-sm">WhatsApp</p>
              <p className="text-xs text-muted-foreground">{CITY_PHONE}</p>
            </div>
          </a>
          <a href={VK_LINK} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 rounded-xl bg-[#0077FF]/10 border border-[#0077FF]/20 hover:bg-[#0077FF]/20 transition-colors">
            <span className="text-2xl">📘</span>
            <div>
              <p className="font-semibold text-sm">ВКонтакте</p>
              <p className="text-xs text-muted-foreground">vk.com/apple_collecty</p>
            </div>
          </a>
          <a href={`tel:+79992673933`}
            className="flex items-center gap-3 p-4 rounded-xl bg-muted/40 border border-border hover:bg-muted transition-colors">
            <span className="text-2xl">📞</span>
            <div>
              <p className="font-semibold text-sm">Позвонить</p>
              <p className="text-xs text-muted-foreground">{CITY_PHONE}</p>
            </div>
          </a>
        </div>
        <div className="flex items-start gap-2 text-sm text-muted-foreground">
          <span>📍</span>
          <span>Казань, {ADDRESS} · {HOURS}</span>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Частые вопросы о выкупе iPhone</h2>
        <div className="space-y-3">
          {[
            { q: "Сколько занимает вся сделка?", a: "Оценка — 2 минуты в мессенджере или форме. Осмотр в офисе — 5–7 минут. Выплата — сразу. Итого 15–20 минут." },
            { q: "Почему принимаете только от iPhone 13?", a: "iPhone 12 и старше стоят слишком мало на вторичном рынке. Мы не сможем предложить сумму, которая вас устроит, поэтому честно говорим: не берём." },
            { q: "Почему аккумулятор должен быть от 88%?", a: "Ниже 88% iPhone заметно теряет в автономности. Мы продаём выкупленные устройства своим клиентам и отвечаем за них — поэтому держим планку качества." },
            { q: "А если Battery Health ровно 88%?", a: "Берём. 88% — нижняя граница, она включена." },
            { q: "Нужна ли коробка?", a: "Не обязательно. Но полный комплект — это плюс к цене." },
            { q: "Деньги получу наличными?", a: "Да. Наличные или перевод через СБП — на ваш выбор. Никаких переводов «на завтра»." },
            { q: "Если цена при осмотре окажется ниже?", a: "Только если состояние хуже описанного. Если написали «идеал», а при осмотре глубокие царапины — цена снизится. Если всё совпадает — сумма та же. Не устроит — просто заберёте iPhone обратно." },
            { q: "Берёте с разбитым экраном?", a: "Нет. Выкупаем только полностью рабочие iPhone в хорошем состоянии." },
            { q: "Можно обменять старый iPhone на новый?", a: "Да, это называется Trade-in. Сдаёте старый — получаете скидку на новый или б/у из нашего каталога. Разницу доплачиваете." },
          ].map(({ q, a }, i) => (
            <details key={i} className="border border-border rounded-xl overflow-hidden group">
              <summary className="px-5 py-4 font-semibold cursor-pointer hover:bg-muted/30 list-none flex items-center justify-between text-sm">
                <span>{q}</span>
                <span className="text-muted-foreground group-open:rotate-180 transition-transform shrink-0 ml-2">▾</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed">{a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* Финальный CTA */}
      <section className="rounded-3xl bg-primary text-primary-foreground p-8 text-center mb-12">
        <h2 className="text-2xl font-bold mb-2">Готовы продать iPhone?</h2>
        <p className="opacity-90 mb-6">Напишите модель, память и Battery Health — ответим с ценой за 2 минуты</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href={TG_LINK} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-primary font-semibold hover:opacity-90 transition-opacity">
            ✈️ Написать в Telegram
          </a>
          <a href="#" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors">
            📋 Заполнить форму
          </a>
        </div>
      </section>

      {/* Перелинковка */}
      <div className="pt-6 border-t border-border">
        <p className="text-sm font-semibold text-muted-foreground mb-3">Смотрите также:</p>
        <div className="flex flex-wrap gap-2">
          {[
            { href: "/iphone", label: "Купить iPhone в Казани" },
            { href: "/iphone/iphone-17-pro-max", label: "iPhone 17 Pro Max" },
            { href: "/iphone/iphone-16-pro-max", label: "iPhone 16 Pro Max" },
            { href: "/blog/kak-proverit-bu-iphone-pered-pokupkoy", label: "Как проверить б/у iPhone" },
            { href: "/blog/kak-nastroit-kameru-iphone", label: "Настройка камеры iPhone" },
            { href: "/blog", label: "Блог" },
          ].map(({ href, label }) => (
            <Link key={href} href={href}
              className="text-sm px-3 py-1.5 rounded-lg border border-border hover:border-primary hover:text-primary transition-colors">
              {label}
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}
