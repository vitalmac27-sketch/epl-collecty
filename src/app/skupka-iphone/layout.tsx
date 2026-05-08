import type { Metadata } from "next";

const URL = "https://xn----jtbjgbccazg9frdtb.xn--p1ai/skupka-iphone";

export const metadata: Metadata = {
  title: "Продать Айфон в Казани — выкуп за 2 минуты | ЭПЛ-КОЛЛЕКЦИЯ",
  description: "Скупка Айфонов от 13 модели в Казани. Оценка за 2 минуты в Телеграм. Деньги сразу — наличными или СБП. Аккумулятор от 88%. ул. Сибгата Хакима, 40а.",
  keywords: [
    "продать айфон казань", "скупка айфонов казань", "выкуп айфон казань",
    "продать айфон в казани", "скупка айфонов", "сдать айфон казань",
    "выкуп айфона", "скупка iphone казань", "продать iphone казань",
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: "Продать Айфон в Казани — выкуп за 2 минуты",
    description: "Выкупаем iPhone 13–17 Pro Max. Оценка за 2 минуты, деньги сразу.",
    url: URL,
    type: "website",
    images: [{ url: "/assets/iphone-16-pro-max-black-titanium.avif", width: 800, height: 800, alt: "Выкуп iPhone в Казани — ЭПЛ-КОЛЛЕКЦИЯ" }],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Сколько стоит iPhone 15 Pro Max при выкупе в Казани?", acceptedAnswer: { "@type": "Answer", text: "iPhone 15 Pro Max 256 ГБ в хорошем состоянии с АКБ от 88% — до 68 000 ₽. Напишите нам в Telegram — назовём точную цену за 2 минуты." } },
    { "@type": "Question", name: "Как продать iPhone в Казани быстро?", acceptedAnswer: { "@type": "Answer", text: "Напишите в Telegram или заполните форму на сайте: модель, память, Battery Health. Ответим с ценой за 2 минуты. Осмотр в офисе 5–7 минут, деньги сразу." } },
    { "@type": "Question", name: "Какой аккумулятор нужен для выкупа iPhone?", acceptedAnswer: { "@type": "Answer", text: "От 88%. Ниже — не берём. Проверьте в Настройки → Аккумулятор → Состояние аккумулятора → Максимальная ёмкость." } },
    { "@type": "Question", name: "Можно ли обменять iPhone на новый в Казани?", acceptedAnswer: { "@type": "Answer", text: "Да, это Trade-in. Сдаёте старый iPhone — получаете скидку на новый или б/у из нашего каталога." } },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "ЭПЛ-КОЛЛЕКЦИЯ — выкуп iPhone в Казани",
  description: "Скупка iPhone 13–17 в Казани. Оценка за 2 минуты, деньги сразу.",
  url: URL,
  telephone: "+79992673933",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ул. Сибгата Хакима, 40а, офис 7",
    addressLocality: "Казань",
    addressRegion: "Республика Татарстан",
    addressCountry: "RU",
  },
  openingHours: "Mo-Su 13:00-20:00",
  priceRange: "до 120 000 ₽",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://xn----jtbjgbccazg9frdtb.xn--p1ai" },
    { "@type": "ListItem", position: 2, name: "Выкуп iPhone в Казани", item: URL },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
