import ArticleLayout, { articleMetadata, type ArticleMeta, type Faq } from "@/components/blog/ArticleLayout";
import ProductPicks, { ModelLink, PriceFrom } from "@/components/blog/ProductPicks";
import Link from "next/link";

export const dynamic = "force-static";

const META: ArticleMeta = {
  slug: "kakoy-iphone-kupit-v-2026",
  title: "Какой iPhone купить в 2026 году: гид по моделям и бюджету",
  short: "Какой iPhone купить в 2026",
  description: "Какой iPhone выбрать в 2026 году: сравнение iPhone 18 Pro, 17 Pro, 17, Air, 17e, 16 и 15, актуальные цены в Казани и советы по памяти и версии SIM.",
  keywords: ["какой айфон купить в 2026", "какой iphone выбрать", "лучший айфон 2026", "айфон до 60000", "iphone 17 или 16", "стоит ли покупать iphone 15 в 2026", "сравнение айфонов 2026"],
  tag: "Советы покупателю",
  date: "2026-10-14",
  dateLabel: "14 октября 2026",
  readTime: "9 мин",
  image: "iphone-17-pro-max-orange",
  imageAlt: "Какой iPhone купить в 2026 году — сравнение моделей",
};

export const metadata = articleMetadata(META);

const FAQ: Faq[] = [
  { q: "Какой iPhone самый выгодный в 2026 году?", a: "Для большинства — iPhone 17: экран 120 Гц, 256 ГБ в базе, хорошая камера и Apple Intelligence по разумной цене. Если бюджет меньше — iPhone 17e или iPhone 16." },
  { q: "Стоит ли покупать iPhone 15 в 2026 году?", a: "Как недорогой телефон — да: Dynamic Island, камера 48 МП, USB-C. Но в нём нет Apple Intelligence, а iOS он будет получать меньше лет, чем новые модели." },
  { q: "Сколько памяти брать?", a: "256 ГБ хватает большинству. Если много снимаете видео в 4K или храните фото только на телефоне — берите 512 ГБ. 1–2 ТБ нужны тем, кто снимает ProRes." },
  { q: "Чем Pro отличается от обычного iPhone 17?", a: "У Pro есть телевик 48 МП с 8× оптическим зумом, видео ProRes, 12 ГБ оперативной памяти вместо 8 и быстрый USB-C. Экран 120 Гц теперь есть у обоих." },
  { q: "Есть ли смысл брать iPhone 18 Pro сразу после выхода?", a: "Если нужна лучшая камера с переменной диафрагмой — да. Если нет — 17 Pro и 17 Pro Max сейчас заметно дешевле, а в повседневных задачах разница небольшая." },
];

const ROWS: Array<[string, string, string]> = [
  ["iphone/iphone-18-pro-max", "Максимум: лучшая камера и автономность", "Новинка 2026"],
  ["iphone/iphone-18-pro", "Камера 18 Pro Max в компактном корпусе", "Новинка 2026"],
  ["iphone/iphone-17-pro-max", "Большой экран и рекордная батарея", "Лучший Pro по цене"],
  ["iphone/iphone-17-pro", "Pro-камера в удобном размере", ""],
  ["iphone/iphone-17-air", "Самый тонкий, только eSIM", ""],
  ["iphone/iphone-17", "Оптимальный выбор для большинства", "Хит"],
  ["iphone/iphone-17e", "Новый iPhone за минимальные деньги", ""],
  ["iphone/iphone-16", "Apple Intelligence дешевле 17-й серии", ""],
  ["iphone/iphone-15", "Недорогой iPhone без ИИ-функций", ""],
];

export default function Page() {
  return (
    <ArticleLayout
      meta={META}
      toc={[["Коротко: таблица с ценами", "#tablica"], ["Лучший выбор для большинства", "#iphone-17"], ["Если важна камера", "#pro"], ["Недорогие iPhone", "#nedorogie"], ["Новинки: iPhone 18 Pro", "#18-pro"], ["Сколько памяти и какую SIM", "#pamyat"]]}
      faq={FAQ}
      related={[
        { href: "/blog/iphone-17-pro-max-ili-18-pro-max/", label: "iPhone 17 Pro Max или 18 Pro Max" },
        { href: "/blog/sim-ili-esim-iphone-v-rossii/", label: "SIM или eSIM" },
        { href: "/blog/kak-proverit-bu-iphone-pered-pokupkoy/", label: "Как проверить б/у iPhone" },
        { href: "/bu-iphone/", label: "Б/у iPhone с гарантией" },
        { href: "/rassrochka-iphone/", label: "iPhone в рассрочку" },
      ]}
    >
      <p className="text-lg">
        В 2026 году в продаже одновременно девять актуальных iPhone — от 15-го до новых 18 Pro. Разбираемся, какой из них
        подойдёт именно вам, без переплаты за то, чем вы не будете пользоваться. Цены в статье — актуальные цены нашего
        магазина в Казани, они обновляются каждый день.
      </p>

      <h2 id="tablica">Коротко: таблица с ценами</h2>
      <div className="overflow-x-auto -mx-1">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-border text-left text-foreground">
              <th className="py-2 pr-3">Модель</th><th className="py-2 pr-3">Для кого</th><th className="py-2">Цена</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map(([m, who, badge]) => (
              <tr key={m} className="border-b border-border/60 align-top">
                <td className="py-2 pr-3 font-medium whitespace-nowrap"><ModelLink model={m} />{badge && <span className="block text-xs text-primary">{badge}</span>}</td>
                <td className="py-2 pr-3">{who}</td>
                <td className="py-2 whitespace-nowrap"><PriceFrom model={m} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="iphone-17">Лучший выбор для большинства — iPhone 17</h2>
      <p>
        <ModelLink model="iphone/iphone-17">iPhone 17</ModelLink> — главный сюрприз прошлого года. Впервые у обычной модели
        экран 120 Гц с Always-On, как у Pro, базовая память выросла до 256 ГБ, а фронтальная камера стала 18-мегапиксельной
        с Center Stage. Чип A19 и 8 ГБ оперативной памяти тянут Apple Intelligence и любые игры.
      </p>
      <p>
        Если вы не снимаете профессиональное видео и вам не нужен оптический зум — это лучший баланс цены и возможностей.
        Сейчас — <strong><PriceFrom model="iphone/iphone-17" /></strong>.
      </p>

      <h2 id="pro">Если важна камера — 17 Pro и 17 Pro Max</h2>
      <p>
        У <ModelLink model="iphone/iphone-17-pro">iPhone 17 Pro</ModelLink> и <ModelLink model="iphone/iphone-17-pro-max">17 Pro Max</ModelLink> три
        камеры по 48 МП и телевик с 8× оптическим приближением — можно снимать концерты, детей на сцене и архитектуру без
        потери качества. Есть видео ProRes и Apple Log 2, 12 ГБ оперативной памяти и корпус Unibody, который лучше
        отводит тепло.
      </p>
      <ul>
        <li><strong>17 Pro</strong> — экран 6,3", удобен одной рукой, до 31 часа видео.</li>
        <li><strong>17 Pro Max</strong> — экран 6,9" и до 37 часов видео: самый выносливый iPhone прошлого года.</li>
      </ul>
      <p>
        Хотите не камеру, а внешний вид? <ModelLink model="iphone/iphone-17-air">iPhone 17 Air</ModelLink> толщиной 5,6 мм с
        титановой рамкой — самый тонкий iPhone. Но он работает только с eSIM, подробнее — в статье{" "}
        <Link href="/blog/sim-ili-esim-iphone-v-rossii/" className="text-primary hover:underline">«SIM или eSIM»</Link>.
      </p>

      <ProductPicks
        title="Популярные модели — актуальные цены"
        models={["iphone/iphone-17", "iphone/iphone-17-pro", "iphone/iphone-17-pro-max", "iphone/iphone-17-air", "iphone/iphone-17e", "iphone/iphone-16"]}
      />

      <h2 id="nedorogie">Недорогие iPhone</h2>
      <h3>iPhone 17e — <PriceFrom model="iphone/iphone-17e" /></h3>
      <p>
        Новый iPhone с чипом A19, Apple Intelligence, MagSafe и 256 ГБ памяти. Одна камера 48 МП с 2× приближением и экран
        60 Гц — компромиссы, но для звонков, мессенджеров, соцсетей и фото это не важно. Хороший первый iPhone или подарок родителям.
      </p>
      <h3>iPhone 16 — <PriceFrom model="iphone/iphone-16" /></h3>
      <p>
        Две камеры, Apple Intelligence, кнопки Camera Control и Action Button. Хороший вариант, если нужна вторая камера
        Ultra Wide, а бюджет меньше, чем на iPhone 17.
      </p>
      <h3>iPhone 15 — <PriceFrom model="iphone/iphone-15" /></h3>
      <p>
        Dynamic Island, камера 48 МП и USB-C. Apple Intelligence в нём нет, поэтому для покупки «на много лет» лучше
        доплатить за 16-й или 17e. Ещё дешевле — <Link href="/bu-iphone/" className="text-primary hover:underline">проверенные б/у iPhone с гарантией</Link>.
      </p>

      <h2 id="18-pro">Новинки: iPhone 18 Pro и 18 Pro Max</h2>
      <p>
        Главное в <ModelLink model="iphone/iphone-18-pro">18 Pro</ModelLink> и <ModelLink model="iphone/iphone-18-pro-max">18 Pro Max</ModelLink> —
        основная камера с переменной диафрагмой ƒ/1.48–ƒ/4.0, чип A20 Pro, собственный модем Apple C2 и ещё больше
        автономности: до 43 часов видео у Pro Max. Сразу после выхода новинки заметно дороже прошлогодних моделей, поэтому
        их стоит брать, если нужна лучшая камера. Подробное сравнение — в статье{" "}
        <Link href="/blog/iphone-17-pro-max-ili-18-pro-max/" className="text-primary hover:underline">«iPhone 17 Pro Max или 18 Pro Max»</Link>.
      </p>

      <h2 id="pamyat">Сколько памяти и какую версию SIM брать</h2>
      <ul>
        <li><strong>256 ГБ</strong> — хватает большинству, если фото выгружаются в облако или на компьютер.</li>
        <li><strong>512 ГБ</strong> — если много снимаете видео в 4K и храните всё на телефоне.</li>
        <li><strong>1–2 ТБ</strong> — для съёмки в ProRes на Pro-моделях.</li>
        <li><strong>eSIM или Nano-SIM + eSIM</strong> — версии только с eSIM дешевле, в России eSIM выдают все крупные операторы.</li>
      </ul>
      <p>
        Не можете решиться — приходите в магазин в Казани: подержите модели в руках и сравните. Купить можно в{" "}
        <Link href="/rassrochka-iphone/" className="text-primary hover:underline">рассрочку «Халва» до 36 месяцев</Link>, а старый
        телефон сдать в <Link href="/trade-in-iphone/" className="text-primary hover:underline">Trade-in</Link>.
      </p>
    </ArticleLayout>
  );
}
