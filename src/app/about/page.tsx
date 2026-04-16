import type { Metadata } from "next";
import Link from "next/link";
import { DEFAULT_CITY } from "@/lib/cities";
import { buildLocalBusinessSchema } from "@/lib/schema";
import {
  Shield, Star, Truck, CreditCard, Users, Award,
  CheckCircle, MapPin, Phone, Clock, MessageCircle,
} from "lucide-react";

const city = DEFAULT_CITY;

export const metadata: Metadata = {
  title: "О магазине ЭПЛ-КОЛЛЕКЦИЯ — купить iPhone в Казани с гарантией",
  description:
    "ЭПЛ-КОЛЛЕКЦИЯ — магазин Apple техники в Казани с 2019 года. Более 2000 довольных клиентов, гарантия 1 год, рассрочка 0%, официальная проверка каждого iPhone.",
  keywords: [
    "эпл коллекция казань",
    "магазин айфонов казань",
    "о магазине apple казань",
    "купить iphone казань официально",
  ],
  alternates: { canonical: `${city.siteUrl}/about` },
  openGraph: {
    title: "О магазине ЭПЛ-КОЛЛЕКЦИЯ — Apple техника в Казани",
    description: "Магазин Apple техники в Казани с 2019 года. Гарантия, рассрочка, доставка.",
    url: `${city.siteUrl}/about`,
  },
};

const schema = buildLocalBusinessSchema(city);

const advantages = [
  {
    Icon: Shield,
    title: "Гарантия 1 год",
    desc: "На все новые устройства — официальная гарантия 1 год. На б/у технику — 60 дней. При любой неисправности бесплатно устраним проблему или заменим устройство.",
  },
  {
    Icon: CheckCircle,
    title: "Проверка при получении",
    desc: "Вы можете полностью протестировать iPhone перед оплатой: экран, камера, аккумулятор, Face ID, Touch ID. Если что-то не устроит — отказывайтесь без обязательств.",
  },
  {
    Icon: CreditCard,
    title: "Рассрочка 0% на 10 месяцев",
    desc: "Оформляем рассрочку без переплат онлайн за 5 минут. Одобрение в день обращения. Нужен только паспорт. Первый взнос — 0 рублей.",
  },
  {
    Icon: Truck,
    title: "Доставка в день заказа",
    desc: "Бесплатная курьерская доставка по всей Казани в день заказа. Оплата только после проверки устройства при получении.",
  },
  {
    Icon: Award,
    title: "Trade-in",
    desc: "Принимаем старые iPhone и смартфоны любых производителей в зачёт новых. Честная и прозрачная оценка. Получите скидку на покупку прямо сейчас.",
  },
  {
    Icon: Users,
    title: "2000+ довольных клиентов",
    desc: "С 2019 года помогли более 2000 жителей Казани и Татарстана выгодно купить Apple технику. Средняя оценка 5/5 на Авито и Яндекс Картах.",
  },
];

const steps = [
  { n: "01", title: "Выберите модель", desc: "Пройдите квиз за 1 минуту — подберём модель под ваши задачи и бюджет" },
  { n: "02", title: "Получите цену", desc: "Сразу покажем актуальную цену и условия рассрочки без скрытых платежей" },
  { n: "03", title: "Оформите заявку", desc: "Оставьте контакты — перезвоним в течение 5 минут для подтверждения" },
  { n: "04", title: "Получите iPhone", desc: "Курьер привезёт в день заказа. Проверьте устройство и оплатите после проверки" },
];

export default function AboutPage() {
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
              Магазин Apple техники · Казань · с 2019 года
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
              О магазине{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                ЭПЛ-КОЛЛЕКЦИЯ
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Мы помогаем жителям Казани выгодно купить iPhone и Apple технику с гарантией,
              рассрочкой 0% и доставкой в день заказа.
            </p>
          </div>
        </section>

        {/* Факты */}
        <section className="py-12 px-4 bg-primary text-primary-foreground">
          <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { n: "2019", label: "год основания" },
              { n: "2000+", label: "довольных клиентов" },
              { n: "5/5", label: "рейтинг на Авито" },
              { n: "0%", label: "переплата в рассрочку" },
            ].map(({ n, label }) => (
              <div key={label}>
                <div className="text-4xl font-bold mb-1">{n}</div>
                <div className="text-primary-foreground/80 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 py-12 space-y-16">

          {/* О нас */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Кто мы такие
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                <strong className="text-foreground">ЭПЛ-КОЛЛЕКЦИЯ</strong> — это специализированный
                магазин Apple техники в Казани, который работает с 2019 года. Мы занимаемся
                продажей новых и б/у iPhone, iPad, MacBook, Apple Watch и аксессуаров.
              </p>
              <p>
                Наша миссия — сделать Apple технику доступной для каждого. Поэтому мы предлагаем
                честные цены, рассрочку 0% без переплат и полную проверку каждого устройства перед
                продажей. Более 2000 жителей Казани и Татарстана уже убедились в нашей честности.
              </p>
              <p>
                Мы находимся в <strong className="text-foreground">Ново-Савиновском районе</strong> по
                адресу: <strong className="text-foreground">{city.address}</strong>. Работаем каждый
                день с 13:00 до 20:00. Также доступна бесплатная доставка по всей Казани.
              </p>
            </div>
          </section>

          {/* Преимущества */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Почему выбирают нас
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map(({ Icon, title, desc }) => (
                <div
                  key={title}
                  className="p-6 rounded-2xl border-2 border-border bg-card hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Как работаем */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Как мы работаем
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map(({ n, title, desc }) => (
                <div key={n} className="relative">
                  <div className="text-5xl font-bold text-primary/10 mb-3">{n}</div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Гарантии */}
          <section className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Наши гарантии
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Каждый iPhone проходит диагностику перед продажей",
                "Проверяем аккумулятор, экран, камеру, Face ID",
                "Гарантия 1 год на новые, 60 дней на б/у",
                "Бесплатный ремонт при гарантийном случае",
                "Возврат или замена в течение 14 дней",
                "Оплата только после проверки устройства",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Отзывы ссылка */}
          <section className="text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Что говорят наши клиенты
            </h2>
            <p className="text-muted-foreground mb-6">
              Более 500 отзывов на Авито · Средняя оценка 5 из 5
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={city.avito}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl border-2 border-border hover:border-primary/40 hover:bg-muted/50 transition-all font-semibold"
              >
                Отзывы на Авито
              </a>
              <a
                href={city.vk}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl border-2 border-border hover:border-primary/40 hover:bg-muted/50 transition-all font-semibold"
              >
                ВКонтакте
              </a>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center py-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Готовы купить iPhone выгодно?
            </h2>
            <p className="text-muted-foreground mb-8">
              Пройдите квиз за 1 минуту — подберём модель и цену под ваши задачи
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
