import Link from "next/link";
import type { ProductModel } from "@/lib/models";
import { getModelUrl, getModelMinStorage } from "@/lib/models";
import type { CityConfig } from "@/lib/cities";
import { formatPrice } from "@/lib/utils";

/* ───────────────────────────────────────────────────────────────────────────
 * SEO-блок для каталога /iphone/
 * Цены и подборки по бюджету считаются из живых цен (обновляются ежедневно).
 * ─────────────────────────────────────────────────────────────────────────── */

const SERIES_ORDER = ["18", "17", "16", "15", "14", "13"];

const SERIES_NOTE: Record<string, string> = {
  "18": "новинка осени 2026",
  "17": "актуальная линейка 2025 года",
  "16": "A18 и кнопка управления камерой",
  "15": "USB-C и Dynamic Island",
  "14": "оптимальная цена",
  "13": "самый доступный вход в iOS",
};

function uniq(models: ProductModel[]) {
  const seen = new Set<string>();
  return models.filter((m) => (seen.has(m.slug) ? false : (seen.add(m.slug), true)));
}

export function priceDate(): string {
  return new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Moscow",
  }).format(new Date());
}

export function iphonePriceStats(models: ProductModel[]) {
  const priced = uniq(models).filter((m) => m.priceFrom > 0);
  const cheapest = priced.reduce<ProductModel | null>((a, b) => (!a || b.priceFrom < a.priceFrom ? b : a), null);
  const newest = priced.filter((m) => m.series === SERIES_ORDER[0]);
  const newestFrom = newest.length ? Math.min(...newest.map((m) => m.priceFrom)) : 0;
  return { cheapest, count: uniq(models).length, newestFrom };
}

export function getIphoneFaq(models: ProductModel[], city: CityConfig) {
  const { cheapest } = iphonePriceStats(models);
  return [
    {
      question: `Сколько стоит iPhone в ${city.namePre}?`,
      answer: cheapest
        ? `Цены в ЭПЛ-КОЛЛЕКЦИЯ начинаются от ${formatPrice(cheapest.priceFrom)} (${cheapest.name}). Актуальная таблица цен по всем моделям — на этой странице, цены обновляются ежедневно. Итоговая стоимость зависит от объёма памяти, цвета и версии SIM.`
        : "Актуальные цены по всем моделям — в таблице на этой странице, цены обновляются ежедневно.",
    },
    {
      question: "iPhone у вас оригинальные?",
      answer:
        "Да, мы продаём только оригинальные iPhone. При покупке можно сверить серийный номер и IMEI в настройках с коробкой, проверить устройство на сайте Apple и убедиться, что iPhone не привязан к чужому Apple ID.",
    },
    {
      question: "Какая гарантия на iPhone?",
      answer:
        "На новые iPhone — гарантия магазина 1 год, на б/у — 60 дней. Срок считается со дня передачи устройства. Для обращения по гарантии достаточно написать или позвонить нам.",
    },
    {
      question: "Можно купить iPhone в рассрочку?",
      answer:
        "Да, по карте «Халва» ПАО «Совкомбанк» — на срок до 36 месяцев. Срок и условия определяет банк. Менеджер подскажет, как оформить покупку выбранной модели.",
    },
    {
      question: "Можно сдать старый iPhone в зачёт нового?",
      answer:
        "Да, по программе Trade-in. Принимаем полностью исправные устройства: оцениваем модель, память, состояние корпуса и аккумулятора, а стоимость сразу вычитаем из цены нового iPhone.",
    },
    {
      question: "Есть ли доставка по Казани?",
      answer: `Да, доставляем по ${city.nameGen} в день заказа. Можно проверить iPhone при получении. Самовывоз — из магазина по адресу ${city.address}, ${city.hours}.`,
    },
    {
      question: "Чем отличается версия только с eSIM от версии с SIM-картой?",
      answer:
        "Версия только с eSIM не имеет лотка для физической SIM-карты — номер подключается электронно. Крупные российские операторы eSIM поддерживают. Такие версии обычно дешевле; если хотите пользоваться пластиковой SIM, выбирайте версию с nano-SIM + eSIM.",
    },
    {
      question: "Какой iPhone выгоднее купить сейчас?",
      answer:
        "По соотношению цены и возможностей чаще всего советуем iPhone 17 и iPhone 16 Pro. Если нужен максимум камеры и автономности — iPhone 17 Pro Max или 18 Pro Max. Если бюджет ограничен — iPhone 15 или 14 Pro. Подробный разбор — в статье «Какой iPhone купить в 2026».",
    },
  ];
}

const BUDGETS: Array<{ from: number; to: number; title: string; text: string }> = [
  {
    from: 0,
    to: 45000,
    title: "До 45 000 ₽",
    text: "Модели 13-й и 14-й серий. Они получают актуальные версии iOS, отлично снимают днём и тянут все популярные приложения. Хороший выбор в подарок, ребёнку или как второй телефон. Перед покупкой уточните у менеджера ёмкость аккумулятора — для б/у моделей это главный показатель ресурса.",
  },
  {
    from: 45000,
    to: 70000,
    title: "45 000 – 70 000 ₽",
    text: "Самый «рациональный» сегмент: iPhone 15 с USB-C и Dynamic Island, iPhone 16 с поддержкой Apple Intelligence и кнопкой камеры, iPhone 17e и Pro-модели прошлых лет. Здесь можно получить 120 Гц и телевик по цене базовой новинки.",
  },
  {
    from: 70000,
    to: 100000,
    title: "70 000 – 100 000 ₽",
    text: "Актуальные iPhone 17 и 17 Air, а также iPhone 16 Pro и 17 Pro. Экран 120 Гц ProMotion, быстрая зарядка, большой запас производительности на 5–6 лет обновлений.",
  },
  {
    from: 100000,
    to: Infinity,
    title: "От 100 000 ₽",
    text: "Флагманы: iPhone 17 Pro Max, 18 Pro и 18 Pro Max. Лучшие камеры с длиннофокусным объективом, максимальная автономность, ProRes-видео. Берут те, кто много снимает и меняет телефон раз в 3–4 года.",
  },
];

const h2 = "text-2xl font-bold text-foreground mt-12 mb-4 scroll-mt-24";
const h3 = "text-lg font-semibold text-foreground mt-6 mb-2";
const p = "text-muted-foreground leading-relaxed mb-3";
const a = "text-primary hover:underline";

export default function IphoneCategorySeo({
  models,
  city,
}: {
  models: ProductModel[];
  city: CityConfig;
}) {
  const list = uniq(models);
  const { cheapest, newestFrom } = iphonePriceStats(models);
  const date = priceDate();
  const faq = getIphoneFaq(models, city);

  const bySeries = SERIES_ORDER.map((s) => ({
    series: s,
    items: list.filter((m) => m.series === s),
  })).filter((g) => g.items.length);

  const link = (m: ProductModel) => (
    <Link key={m.slug} href={getModelUrl(m)} className={a}>
      {m.name}
    </Link>
  );

  const joinLinks = (items: ProductModel[]) =>
    items.flatMap((m, i) => (i === 0 ? [link(m)] : [<span key={m.slug + "-sep"}>, </span>, link(m)]));

  return (
    <section className="mt-16 max-w-4xl" aria-label="Как купить iPhone в Казани">
      {/* ── Навигация по разделу ── */}
      <nav aria-label="Разделы" className="flex flex-wrap gap-2 mb-2">
        {[
          ["#ceny", "Цены"],
          ["#kakoy-vybrat", "Какой выбрать"],
          ["#novyy-ili-bu", "Новый или б/у"],
          ["#versii", "Версии и eSIM"],
          ["#rassrochka", "Рассрочка и Trade-in"],
          ["#dostavka", "Доставка"],
          ["#faq", "Вопросы"],
        ].map(([href, label]) => (
          <a
            key={href}
            href={href}
            className="text-sm px-3 py-1.5 rounded-full border border-border hover:border-primary/50 hover:text-primary transition-colors"
          >
            {label}
          </a>
        ))}
      </nav>

      {/* ── Цены ── */}
      <h2 id="ceny" className={h2}>
        Цены на iPhone в {city.namePre}
      </h2>
      <p className={p}>
        В каталоге ЭПЛ-КОЛЛЕКЦИЯ — {list.length} моделей iPhone: от {cheapest ? <>{link(cheapest)} за {formatPrice(cheapest.priceFrom)}</> : "13-й серии"}
        {newestFrom ? <> до новинок 18-й серии от {formatPrice(newestFrom)}</> : null}. Цены обновляются
        каждый день по прайсу поставщиков, поэтому на сайте вы видите актуальную стоимость, а не цифры месячной давности.
        Цена «от» указана за минимальный объём памяти; стоимость других конфигураций и цветов — на странице модели.
      </p>
      <p className="text-sm text-muted-foreground mb-4">Цены актуальны на {date}</p>

      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-muted/40 text-left">
            <tr>
              <th className="px-4 py-3 font-semibold">Модель</th>
              <th className="px-4 py-3 font-semibold whitespace-nowrap">Цена от</th>
              <th className="px-4 py-3 font-semibold hidden sm:table-cell">Особенность</th>
            </tr>
          </thead>
          {bySeries.map((g) => (
            <tbody key={g.series} id={`seriya-${g.series}`}>
              <tr className="bg-muted/20">
                <td colSpan={3} className="px-4 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  iPhone {g.series} — {SERIES_NOTE[g.series]}
                </td>
              </tr>
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
                          {st ? <span className="text-muted-foreground"> · {st}</span> : null}
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

      {/* ── Какой выбрать ── */}
      <h2 id="kakoy-vybrat" className={h2}>
        Какой iPhone выбрать в 2026 году
      </h2>
      <p className={p}>
        Главный вопрос при покупке — не «какой самый новый», а «какой нужен именно вам». Разница между соседними
        поколениями в повседневных задачах часто меньше, чем разница в цене, а переплата за Pro оправдана, только если
        вы действительно пользуетесь телевиком, 120 Гц и ProRes. Ниже — подборка по бюджету по сегодняшним ценам.
      </p>
      {BUDGETS.map((b) => {
        const items = list
          .filter((m) => m.priceFrom > 0 && m.priceFrom >= b.from && m.priceFrom < b.to)
          .sort((x, y) => x.priceFrom - y.priceFrom);
        if (!items.length) return null;
        return (
          <div key={b.title}>
            <h3 className={h3}>{b.title}</h3>
            <p className={p}>{b.text}</p>
            <p className="text-sm mb-3">
              <span className="text-muted-foreground">Сейчас в этом бюджете: </span>
              {joinLinks(items)}
            </p>
          </div>
        );
      })}

      <h3 className={h3}>Pro или обычная модель</h3>
      <p className={p}>
        Pro-версии отличаются тремя вещами, которые реально заметны: экраном 120 Гц ProMotion (у обычных моделей он
        появился только в 17-й серии), длиннофокусной камерой с оптическим зумом и более ёмким аккумулятором у Max-версий.
        Если вы снимаете в основном людей и детей, телевик пригодится постоянно. Если телефон нужен для мессенджеров,
        банков и навигации, обычный iPhone 17 или 16 даст тот же комфорт заметно дешевле.
      </p>

      <h3 className={h3}>Сколько памяти брать</h3>
      <p className={p}>
        Для большинства хватает 256 ГБ: это десятки тысяч фото и несколько часов видео в 4K. 128 ГБ подойдут, если вы
        пользуетесь iCloud и не снимаете много видео. 512 ГБ и 1 ТБ имеет смысл брать тем, кто снимает в ProRes и
        хранит медиатеку на телефоне — расширить память у iPhone потом нельзя.
      </p>
      <p className={p}>
        Подробный разбор всех моделей с таблицами —{" "}
        <Link href="/blog/kakoy-iphone-kupit-v-2026" className={a}>
          в статье «Какой iPhone купить в 2026»
        </Link>
        , а сравнение флагманов —{" "}
        <Link href="/blog/iphone-17-pro-max-ili-18-pro-max" className={a}>
          «iPhone 17 Pro Max или 18 Pro Max»
        </Link>
        .
      </p>

      {/* ── Новый или б/у ── */}
      <h2 id="novyy-ili-bu" className={h2}>
        Новый или б/у iPhone
      </h2>
      <p className={p}>
        <strong className="text-foreground">Новые iPhone</strong> продаются запечатанными, с гарантией магазина 1 год.
        Это лучший вариант, если вы планируете пользоваться телефоном 4–5 лет и хотите максимальный ресурс аккумулятора.
      </p>
      <p className={p}>
        <strong className="text-foreground">Б/у iPhone</strong> позволяют взять модель классом выше за те же деньги:
        например, Pro прошлого поколения вместо базовой новинки. Каждое устройство перед продажей проходит
        диагностику: проверяем Face ID, камеры, экран и True Tone, динамики и микрофоны, ёмкость аккумулятора и то, что
        iPhone отвязан от Apple ID и «Локатора». На б/у даём гарантию 60 дней. Актуальные предложения —{" "}
        <Link href="/bu-iphone" className={a}>
          в разделе б/у iPhone
        </Link>
        , а что проверить самостоятельно — в статье{" "}
        <Link href="/blog/kak-proverit-bu-iphone-pered-pokupkoy" className={a}>
          «Как проверить б/у iPhone перед покупкой»
        </Link>
        .
      </p>

      {/* ── Версии ── */}
      <h2 id="versii" className={h2}>
        Оригинальность, версии и eSIM
      </h2>
      <p className={p}>
        Все iPhone в нашем магазине — оригинальные. Apple выпускает одни и те же модели в разных региональных версиях,
        и для покупателя в России важно одно отличие — способ подключения SIM-карты:
      </p>
      <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-3">
        <li>
          <strong className="text-foreground">nano-SIM + eSIM</strong> — привычный лоток для пластиковой карты плюс
          электронная SIM. Самый универсальный вариант.
        </li>
        <li>
          <strong className="text-foreground">только eSIM</strong> — лотка нет, номер подключается электронно. Такие
          версии продаются, например, в США и Японии, а iPhone Air выпускается только с eSIM во всех странах. Обычно они
          дешевле, и крупные российские операторы eSIM поддерживают.
        </li>
        <li>
          <strong className="text-foreground">2 nano-SIM</strong> — версии для Китая и Гонконга с двумя физическими
          картами.
        </li>
      </ul>
      <p className={p}>
        На работу iOS, камеры, Face ID и гарантию версия не влияет. Как перенести номер на eSIM и что выбрать — в статье{" "}
        <Link href="/blog/sim-ili-esim-iphone-v-rossii" className={a}>
          «SIM или eSIM в России»
        </Link>
        . При покупке у нас вы можете сверить серийный номер и IMEI в «Настройках» с коробкой и проверить устройство на
        сайте Apple.
      </p>

      {/* ── Рассрочка и Trade-in ── */}
      <h2 id="rassrochka" className={h2}>
        iPhone в рассрочку и по Trade-in
      </h2>
      <p className={p}>
        <strong className="text-foreground">Рассрочка до 36 месяцев</strong> оформляется по карте «Халва»: вы
        оплачиваете покупку картой в магазине, а банк делит сумму на равные платежи*. Если карты нет, её можно
        оформить заранее. Условия и пошаговый порядок — на странице{" "}
        <Link href="/rassrochka-iphone" className={a}>
          «iPhone в рассрочку»
        </Link>
        ; если удобнее кредит —{" "}
        <Link href="/kredit-iphone" className={a}>
          «iPhone в кредит»
        </Link>
        .
      </p>
      <p className={p}>
        <strong className="text-foreground">Trade-in</strong> — сдаёте свой исправный iPhone, его стоимость сразу
        вычитается из цены нового. Для предварительной оценки пришлите модель, объём памяти, ёмкость аккумулятора и
        фото корпуса.{" "}
        <Link href="/trade-in-iphone" className={a}>
          Подробнее о Trade-in
        </Link>
        . Если менять телефон не планируете, а нужно просто продать —{" "}
        <Link href="/skupka-iphone" className={a}>
          скупка iPhone
        </Link>
        . Trade-in можно сочетать с рассрочкой: доплату после зачёта старого телефона, как правило, можно оформить по «Халве» — уточняйте у менеджера.
      </p>
      <p className={p}>
        Как после покупки перенести фото, контакты, переписки и приложения —{" "}
        <Link href="/blog/kak-perenesti-dannye-so-starogo-iphone" className={a}>
          в нашей инструкции по переносу данных со старого iPhone
        </Link>
        .
      </p>

      {/* ── Доставка ── */}
      <h2 id="dostavka" className={h2}>
        Доставка iPhone по Казани и самовывоз
      </h2>
      <p className={p}>
        Доставляем iPhone по {city.nameGen} в день заказа — в том числе в районы{" "}
        {city.deliveryDistricts.join(", ")}. При получении можно включить и проверить устройство.
      </p>
      <p className={p}>
        Самовывоз — из магазина по адресу{" "}
        <strong className="text-foreground">
          г. {city.name}, {city.address}
        </strong>{" "}
        ({city.district}, {city.metroNote}), {city.hours}. Перед визитом напишите нам — отложим нужную модель и цвет.
        Телефон:{" "}
        <a href={`tel:${city.phone}`} className={a}>
          {city.phoneFormatted}
        </a>
        . Магазин работает с 2023 года;{" "}
        <Link href="/offer" className={a}>
          условия покупки, доставки и возврата
        </Link>{" "}
        и{" "}
        <Link href="/about" className={a}>
          информация о магазине
        </Link>{" "}
        — на отдельных страницах.
      </p>

      {/* ── FAQ ── */}
      <h2 id="faq" className={h2}>
        Частые вопросы о покупке iPhone
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
