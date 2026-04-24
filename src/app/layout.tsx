import type { Metadata, Viewport } from "next";
import "./globals.css";
import { DEFAULT_CITY } from "@/lib/cities";
import { buildLocalBusinessSchema } from "@/lib/schema";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

// ─── Viewport ────────────────────────────────────────────────────────────────
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0072e5",
};

// ─── Дефолтные метаданные сайта ──────────────────────────────────────────────
export const metadata: Metadata = {
  // Шаблон: "iPhone 17 Pro Max в Казани | ЭПЛ-КОЛЛЕКЦИЯ"
  title: {
    default:
      "Купить Айфон iPhone в Казани выгодно — ЭПЛ-КОЛЛЕКЦИЯ | Рассрочка 0%",
    template: "%s | ЭПЛ-КОЛЛЕКЦИЯ",
  },
  description:
    "Купить iPhone в Казани выгодно в магазине ЭПЛ-КОЛЛЕКЦИЯ. iPhone 13–17 с гарантией 1 год, рассрочка 0% на 10 мес, Trade-in, бесплатная доставка по Казани в день заказа.",
  keywords: [
    "купить айфон",
    "купить айфон казань",
    "где купить выгодно айфон",
    "купить айфон рассрочка",
    "купить iPhone казань",
    "магазин iPhone казань",
    "ЭПЛ-КОЛЛЕКЦИЯ",
  ],
  authors: [{ name: "ЭПЛ-КОЛЛЕКЦИЯ" }],
  creator: "ЭПЛ-КОЛЛЕКЦИЯ",
  publisher: "ЭПЛ-КОЛЛЕКЦИЯ",
  metadataBase: new URL(DEFAULT_CITY.siteUrl),

  // Canonical (каждая страница может переопределить)
  alternates: {
    canonical: DEFAULT_CITY.siteUrl,
  },

  // Open Graph
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: DEFAULT_CITY.siteUrl,
    siteName: "ЭПЛ-КОЛЛЕКЦИЯ — магазин iPhone в Казани",
    title: "Купить Айфон iPhone в Казани выгодно — ЭПЛ-КОЛЛЕКЦИЯ",
    description:
      "iPhone 13–17 с гарантией 1 год. Рассрочка 0%, Trade-in, бесплатная доставка по Казани.",
    images: [
      {
        url: "/assets/og-apple-collection.jpg",
        width: 1200,
        height: 630,
        alt: "ЭПЛ-КОЛЛЕКЦИЯ — купить iPhone в Казани выгодно",
      },
    ],
  },

  // Twitter / X cards
  twitter: {
    card: "summary_large_image",
    title: "Купить Айфон iPhone в Казани — ЭПЛ-КОЛЛЕКЦИЯ",
    description: "iPhone с гарантией 1 год. Рассрочка 0%, доставка в день заказа.",
    images: ["/assets/og-apple-collection.jpg"],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Верификация для Яндекс.Вебмастера и Google Search Console ──
  verification: {
    yandex: "72880077d2fe664a",
    google: "RgqQ2tZ9Mie_viRI716Dot5bnz48JFC8jX_wPfIvlzI",
  },

  // ── Иконки (ЭПЛ-КОЛЛЕКЦИЯ логотип) ──
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
};

// ─── Данные LocalBusiness для JSON-LD ────────────────────────────────────────
const localBusinessJsonLd = buildLocalBusinessSchema(DEFAULT_CITY);

// ─── Root Layout ─────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        {/* ── JSON-LD LocalBusiness — один раз на весь сайт ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />

        {/* ── Верификация поисковиков ── */}
        <meta name="google-site-verification" content="RgqQ2tZ9Mie_viRI716Dot5bnz48JFC8jX_wPfIvlzI" />
        <meta name="yandex-verification" content="72880077d2fe664a" />

        {/* ── Preconnect для производительности ── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased">
        {/* ── Sticky Navigation (Client Component) ── */}
        <Navigation />

        {/* ── Основной контент ── */}
        <main className="flex-1">{children}</main>

        {/* ── Footer (Server Component) ── */}
        <Footer />
      </body>
    </html>
  );
}
