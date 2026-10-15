import Link from "next/link";
import type { ReactNode } from "react";
import type { ProductModel } from "@/lib/models";
import { getModelUrl, getModelMinStorage } from "@/lib/models";
import type { CityConfig } from "@/lib/cities";
import { formatPrice } from "@/lib/utils";
import { priceDate } from "./IphoneCategorySeo";

/* ───────────────────────────────────────────────────────────────────────────
 * Универсальный SEO-блок категории: живая таблица цен, подборка по бюджету,
 * экспертные разделы (из конфига категории), рассрочка, доставка, FAQ.
 * ─────────────────────────────────────────────────────────────────────────── */

export interface Faq {
  question: string;
  answer: string;
}

export interface CategorySeoConfig {
  /** «iPad», «MacBook», «наушники», «смартфоны Samsung» — для «Цены на … в Казани» */
  noun: string;
  /** Заголовок в выдаче; from — минимальная цена, напр. «45 500 ₽» */
  title: (from: string) => string;
  description: (from: string) => string;
  /** Порядок групп в таблице и подпись группы */
  series: Array<{ id: string; label: string }>;
  /** Модели, которые не показываем в SEO-блоке */
  exclude?: string[];
  /** Первый абзац раздела цен (после автоматической фразы о диапазоне) */
  priceIntro?: ReactNode;
  budgetH2: string;
  budgetIntro: ReactNode;
  budgets: Array<{ from: number; to: number; title: string; text: string }>;
  /** Экспертные разделы */
  sections: Array<{ id: string; nav: string; h2: string; body: ReactNode }>;
  /** Абзац про Trade-in */
  tradeIn: ReactNode;
  faq: (s: { cheapest: ProductModel | null; city: CityConfig }) => Faq[];
}

export function seoModels(models: ProductModel[], cfg: CategorySeoConfig) {
  const seen = new Set<string>();
  return models.filter((m) => {
    if (seen.has(m.slug) || cfg.exclude?.includes(m.slug)) return false;
    seen.add(m.slug);
    return true;
  });
}

export function categoryCheapest(models: ProductModel[], cfg: CategorySeoConfig) {
  return seoModels(models, cfg)
    .filter((m) => m.priceFrom > 0)
    .reduce<ProductModel | null>((a, b) => (!a || b.priceFrom < a.priceFrom ? b : a), null);
}

export function categoryFaq(models: ProductModel[], cfg: CategorySeoConfig, city: CityConfig): Faq[] {
  const cheapest = categoryCheapest(models, cfg);
  return [
    ...cfg.faq({ cheapest, city }),
    {
      question: "Какая гарантия?",
      answer:
        "На новые устройства — гарантия магазина 1 год. Срок считается со дня передачи товара. Для обращения по гарантии достаточно написать или позвонить нам.",
    },
    {
      question: "Можно купить в рассрочку?",
      answer:
        "Да, по карте «Халва» ПАО «Совкомбанк» — на срок до 36 месяцев. Срок и условия определяет банк. Менеджер подскажет, как оформить покупку.",
    },
    {
      question: `Есть ли доставка по ${city.nameGen}?`,
      answer: `Да, доставляем по ${city.nameGen} в день заказа, устройство можно проверить при получении. Самовывоз — ${city.address}, ${city.hours}.`,
    },
  ];
}

const h2 = "text-2xl font-bold text-foreground mt-12 mb-4 scroll-mt-24";
const h3 = "text-lg font-semibold text-foreground mt-6 mb-2";
const p = "text-muted-foreground leading-relaxed mb-3";
const a = "text-primary hover:underline";

export default function CategorySeo({
  models,
  city,
  cfg,
  label,
}: {
  models: ProductModel[];
  city: CityConfig;
  cfg: CategorySeoConfig;
  label: string;
}) {
  const list = seoModels(models, cfg);
  const cheapest = categoryCheapest(models, cfg);
  const priced = list.filter((m) => m.priceFrom > 0);
  const maxPrice = priced.length ? Math.max(...priced.map((m) => m.priceFrom)) : 0;
  const faq = categoryFaq(models, cfg, city);

  const groups = cfg.series
    .map((s) => ({ ...s, items: list.filter((m) => m.series === s.id) }))
    .filter((g) => g.items.length);

  const link = (m: ProductModel) => (
    <Link key={m.slug} href={getModelUrl(m)} className={a}>
      {m.name}
    </Link>
  );

  const nav: Array<[string, string]> = [
    ["#ceny", "Цены"],
    ["#vybor", "Как выбрать"],
    ...cfg.sections.map((s) => [`#${s.id}`, s.nav] as [string, string]),
    ["#rassrochka", "Рассрочка"],
    ["#dostavka", "Доставка"],
    ["#faq", "Вопросы"],
  ];

  return (
    <section className="mt-16 max-w-4xl" aria-label={label}>
      <nav aria-label="Разделы" className="flex flex-wrap gap-2 mb-2">
        {nav.map(([href, text]) => (
          <a
            key={href}
            href={href}
            className="text-sm px-3 py-1.5 rounded-full border border-border hover:border-primary/50 hover:text-primary transition-colors"
          >
            {text}
          </a>
        ))}
      </nav>

      {/* ── Цены ── */}
      <h2 id="ceny" className={h2}>
        Цены на {cfg.noun} в {city.namePre}
      </h2>
      <p className={p}>
        {cheapest ? (
          <>
            Сейчас в каталоге {list.length} моделей — от {link(cheapest)} за {formatPrice(cheapest.priceFrom)}
            {maxPrice > cheapest.priceFrom ? <> до {formatPrice(maxPrice)} за топовые версии</> : null}.{" "}
          </>
        ) : null}
        Цены обновляются каждый день по прайсу поставщиков. Цена «от» указана за базовую конфигурацию; стоимость
        других версий и цветов — на странице модели. {cfg.priceIntro}
      </p>
      <p className="text-sm text-muted-foreground mb-4">Цены актуальны на {priceDate()}</p>

      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-muted/40 text-left">
            <tr>
              <th className="px-4 py-3 font-semibold">Модель</th>
              <th className="px-4 py-3 font-semibold whitespace-nowrap">Цена от</th>
              <th className="px-4 py-3 font-semibold hidden sm:table-cell">Особенность</th>
            </tr>
          </thead>
          {groups.map((g) => (
            <tbody key={g.id}>
              {groups.length > 1 && (
                <tr className="bg-muted/20">
                  <td colSpan={3} className="px-4 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {g.label}
                  </td>
                </tr>
              )}
              {g.items.map((m) => {
                const st = m.priceFrom > 0 ? getModelMinStorage(m) : null;
                return (
                  <tr key={m.slug} className="border-t border-border">
                    <td className="px-4 py-2.5">
                      <Link href={getModelUrl(m)} className="font-medium hover:text-primary">
                        {m.name}
                      </Link>
                    </td>
                    <td className="px-4 py-2.5 whitespace-nowrap">
                      {m.priceFrom > 0 ? (
                        <>
                          <span className="font-semibold">{formatPrice(m.priceFrom)}</span>
                          {st && st !== "Стандарт" ? <span className="text-muted-foreground"> · {st}</span> : null}
                        </>
                      ) : (
                        <span className="text-muted-foreground">по запросу</span>
                      )}
                    </td>
                    <td className="px-4 py-2.5 text-muted-foreground hidden sm:table-cell">{m.subtitle}</td>
                  </tr>
                );
              })}
            </tbody>
          ))}
        </table>
      </div>

      {/* ── Подборка по бюджету ── */}
      <h2 id="vybor" className={h2}>
        {cfg.budgetH2}
      </h2>
      <div className={p}>{cfg.budgetIntro}</div>
      {cfg.budgets.map((b) => {
        const items = priced
          .filter((m) => m.priceFrom >= b.from && m.priceFrom < b.to)
          .sort((x, y) => x.priceFrom - y.priceFrom);
        if (!items.length) return null;
        return (
          <div key={b.title}>
            <h3 className={h3}>{b.title}</h3>
            <p className={p}>{b.text}</p>
            <p className="text-sm mb-3">
              <span className="text-muted-foreground">Сейчас в этом бюджете: </span>
              {items.flatMap((m, i) => (i === 0 ? [link(m)] : [<span key={m.slug + "-s"}>, </span>, link(m)]))}
            </p>
          </div>
        );
      })}

      {/* ── Экспертные разделы ── */}
      {cfg.sections.map((s) => (
        <div key={s.id}>
          <h2 id={s.id} className={h2}>
            {s.h2}
          </h2>
          {s.body}
        </div>
      ))}

      {/* ── Рассрочка и Trade-in ── */}
      <h2 id="rassrochka" className={h2}>
        Рассрочка и Trade-in
      </h2>
      <p className={p}>
        <strong className="text-foreground">Рассрочка до 36 месяцев</strong> оформляется по карте «Халва»: вы
        оплачиваете покупку картой, а банк делит сумму на равные платежи*. Подробнее —{" "}
        <Link href="/rassrochka-iphone" className={a}>
          об оформлении рассрочки
        </Link>{" "}
        и{" "}
        <Link href="/kredit-iphone" className={a}>
          покупке в кредит
        </Link>
        .
      </p>
      <p className={p}>{cfg.tradeIn}</p>

      {/* ── Доставка ── */}
      <h2 id="dostavka" className={h2}>
        Доставка по Казани и самовывоз
      </h2>
      <p className={p}>
        Доставляем по {city.nameGen} в день заказа — в том числе в районы {city.deliveryDistricts.join(", ")}. При
        получении можно включить и проверить устройство.
      </p>
      <p className={p}>
        Самовывоз — из магазина по адресу{" "}
        <strong className="text-foreground">
          г. {city.name}, {city.address}
        </strong>{" "}
        ({city.district}, {city.metroNote}), {city.hours}. Перед визитом напишите нам — отложим нужную модель.
        Телефон:{" "}
        <a href={`tel:${city.phone}`} className={a}>
          {city.phoneFormatted}
        </a>
        . Все устройства — оригинальные, магазин работает с 2023 года.{" "}
        <Link href="/offer" className={a}>
          Условия покупки, доставки и возврата
        </Link>
        .
      </p>

      {/* ── FAQ ── */}
      <h2 id="faq" className={h2}>
        Частые вопросы
      </h2>
      <div className="space-y-3">
        {faq.map((f) => (
          <details key={f.question} className="group rounded-xl border border-border p-4 open:bg-muted/20">
            <summary className="cursor-pointer list-none font-semibold text-foreground flex justify-between gap-4">
              {f.question}
              <span className="text-muted-foreground group-open:rotate-45 transition-transform">+</span>
            </summary>
            <p className="text-muted-foreground mt-3 leading-relaxed">{f.answer}</p>
          </details>
        ))}
      </div>

      <p className="text-xs text-muted-foreground mt-8">
        * Рассрочка — покупка по карте «Халва» ПАО «Совкомбанк» у партнёров банка на срок до 36 месяцев. Срок и
        условия определяет банк.
      </p>
    </section>
  );
}

/* Небольшие помощники для текстов конфигов */
export const P = ({ children }: { children: ReactNode }) => <p className={p}>{children}</p>;
export const H3 = ({ children }: { children: ReactNode }) => <h3 className={h3}>{children}</h3>;
export const B = ({ children }: { children: ReactNode }) => <strong className="text-foreground">{children}</strong>;
export const UL = ({ children }: { children: ReactNode }) => (
  <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-3">{children}</ul>
);
export const L = ({ href, children }: { href: string; children: ReactNode }) => (
  <Link href={href} className={a}>
    {children}
  </Link>
);
export const Table = ({ head, rows }: { head: string[]; rows: ReactNode[][] }) => (
  <div className="overflow-x-auto rounded-xl border border-border mb-4">
    <table className="w-full text-sm">
      <thead className="bg-muted/40 text-left">
        <tr>
          {head.map((h) => (
            <th key={h} className="px-4 py-3 font-semibold">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i} className="border-t border-border align-top">
            {r.map((c, j) => (
              <td key={j} className={`px-4 py-2.5 ${j === 0 ? "font-medium" : "text-muted-foreground"}`}>
                {c}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
