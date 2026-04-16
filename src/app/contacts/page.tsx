import type { Metadata } from "next";
import Link from "next/link";
import { DEFAULT_CITY } from "@/lib/cities";
import { buildLocalBusinessSchema } from "@/lib/schema";
import { MapPin, Phone, Clock, MessageCircle, Send, Instagram, Youtube } from "lucide-react";

const city = DEFAULT_CITY;

export const metadata: Metadata = {
  title: "Контакты ЭПЛ-КОЛЛЕКЦИЯ — адрес, телефон, режим работы в Казани",
  description:
    "Контакты магазина ЭПЛ-КОЛЛЕКЦИЯ в Казани: адрес ул. Сибгата Хакима 40а, телефон +7 (999) 267-39-33, работаем Пн–Вс 13:00–20:00. Бесплатная доставка по Казани.",
  keywords: [
    "эпл коллекция контакты",
    "магазин iphone казань адрес",
    "купить айфон казань телефон",
    "эпл коллекция адрес казань",
    "эпл коллекция режим работы",
  ],
  alternates: { canonical: `${city.siteUrl}/contacts` },
  openGraph: {
    title: "Контакты ЭПЛ-КОЛЛЕКЦИЯ в Казани",
    description: "Адрес, телефон, режим работы магазина Apple техники в Казани.",
    url: `${city.siteUrl}/contacts`,
  },
};

const schema = buildLocalBusinessSchema(city);

export default function ContactsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="min-h-screen">

        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Мы рядом · Казань
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Контакты{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                ЭПЛ-КОЛЛЕКЦИЯ
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Свяжитесь с нами удобным способом — ответим в течение 5 минут
            </p>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">

          {/* Основные контакты */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Адрес */}
            <div className="p-6 rounded-2xl border-2 border-border bg-card hover:border-primary/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-lg font-bold text-foreground mb-2">Адрес</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                г. Казань,<br />
                {city.address}<br />
                {city.district}
              </p>
              <p className="text-xs text-muted-foreground">{city.metroNote}</p>
            </div>

            {/* Телефон */}
            <div className="p-6 rounded-2xl border-2 border-border bg-card hover:border-primary/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-lg font-bold text-foreground mb-2">Телефон</h2>
              <a
                href={`tel:${city.phone}`}
                className="text-2xl font-bold text-primary hover:underline block mb-2"
              >
                {city.phoneFormatted}
              </a>
              <p className="text-sm text-muted-foreground">
                Звонки и WhatsApp<br />
                Ответим в течение 5 минут
              </p>
            </div>

            {/* Режим работы */}
            <div className="p-6 rounded-2xl border-2 border-border bg-card hover:border-primary/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-lg font-bold text-foreground mb-2">Режим работы</h2>
              <div className="space-y-1 text-sm">
                {[
                  { day: "Понедельник", time: "13:00 – 20:00" },
                  { day: "Вторник", time: "13:00 – 20:00" },
                  { day: "Среда", time: "13:00 – 20:00" },
                  { day: "Четверг", time: "13:00 – 20:00" },
                  { day: "Пятница", time: "13:00 – 20:00" },
                  { day: "Суббота", time: "13:00 – 20:00" },
                  { day: "Воскресенье", time: "13:00 – 20:00" },
                ].map(({ day, time }) => (
                  <div key={day} className="flex justify-between">
                    <span className="text-muted-foreground">{day}</span>
                    <span className="font-medium text-foreground">{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Карта */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">Как нас найти</h2>
            <div className="rounded-2xl overflow-hidden border-2 border-border h-80 bg-muted flex items-center justify-center">
              <iframe
                src={`https://yandex.ru/map-widget/v1/?ll=${city.geo.lng}%2C${city.geo.lat}&z=16&pt=${city.geo.lng}%2C${city.geo.lat},pm2rdm`}
                width="100%"
                height="100%"
                frameBorder="0"
                title={`Магазин ЭПЛ-КОЛЛЕКЦИЯ на карте — ${city.address}, Казань`}
                allowFullScreen
              />
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              📍 {city.address}, Казань · {city.metroNote}
            </p>
          </section>

          {/* Мессенджеры */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Напишите нам
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href={city.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl border-2 border-border hover:border-primary/40 hover:bg-muted/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0088cc]/10 flex items-center justify-center flex-shrink-0">
                  <Send className="w-6 h-6 text-[#0088cc]" />
                </div>
                <div>
                  <div className="font-bold text-foreground group-hover:text-primary transition-colors">Telegram</div>
                  <div className="text-sm text-muted-foreground">Ответим в течение 5 минут</div>
                </div>
              </a>

              <a
                href={`https://wa.me/${city.phone.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl border-2 border-border hover:border-primary/40 hover:bg-muted/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-[#25D366]" />
                </div>
                <div>
                  <div className="font-bold text-foreground group-hover:text-primary transition-colors">WhatsApp</div>
                  <div className="text-sm text-muted-foreground">{city.phoneFormatted}</div>
                </div>
              </a>

              <a
                href={city.telegramChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl border-2 border-border hover:border-primary/40 hover:bg-muted/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Send className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-foreground group-hover:text-primary transition-colors">Telegram канал</div>
                  <div className="text-sm text-muted-foreground">Акции и новинки</div>
                </div>
              </a>

              <a
                href={city.vk}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl border-2 border-border hover:border-primary/40 hover:bg-muted/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0077ff]/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-[#0077ff]" />
                </div>
                <div>
                  <div className="font-bold text-foreground group-hover:text-primary transition-colors">ВКонтакте</div>
                  <div className="text-sm text-muted-foreground">Отзывы и новости</div>
                </div>
              </a>
            </div>
          </section>

          {/* SEO блок */}
          <section className="bg-muted/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Магазин iPhone в Казани — ЭПЛ-КОЛЛЕКЦИЯ
            </h2>
            <div className="text-muted-foreground space-y-3 text-sm leading-relaxed">
              <p>
                Магазин <strong className="text-foreground">ЭПЛ-КОЛЛЕКЦИЯ</strong> расположен в
                Ново-Савиновском районе Казани по адресу <strong className="text-foreground">{city.address}</strong>.
                Мы работаем каждый день с 13:00 до 20:00 без выходных.
              </p>
              <p>
                Добраться до нас удобно на метро: {city.metroNote}. Также возможна
                <strong className="text-foreground"> бесплатная доставка</strong> по всей Казани в день заказа.
              </p>
              <p>
                По всем вопросам звоните: <strong className="text-foreground">{city.phoneFormatted}</strong> или
                пишите в Telegram. Консультируем по выбору модели, помогаем с оформлением рассрочки и Trade-in.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Хотите купить iPhone выгодно?
            </h2>
            <p className="text-muted-foreground mb-6">
              Пройдите квиз — подберём модель и цену за 1 минуту
            </p>
            <Link
              href="/#calculator-section"
              className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              Подобрать iPhone
            </Link>
          </section>

        </div>
      </div>
    </>
  );
}

// Нужен для страницы contacts
function Users({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}
