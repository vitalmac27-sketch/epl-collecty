import ArticleLayout, { articleMetadata, Callout, ArticleTable, type ArticleMeta, type Faq } from "@/components/blog/ArticleLayout";
import ProductPicks, { ModelLink, PriceFrom } from "@/components/blog/ProductPicks";
import Link from "next/link";

export const dynamic = "force-static";

const META: ArticleMeta = {
  slug: "kakoy-iphone-kupit-v-2026",
  title: "Какой iPhone купить в 2026 году: гид по моделям и бюджету",
  short: "Какой iPhone купить в 2026",
  description: "Какой iPhone выбрать в 2026 году: сравнение iPhone 18 Pro, 17 Pro, 17, Air, 17e, 16 и 15 по камере, размеру, автономности и цене в Казани. Сколько памяти брать, новый или б/у, какую версию SIM.",
  keywords: ["какой айфон купить в 2026", "какой iphone выбрать", "лучший айфон 2026", "какой айфон взять", "iphone 17 или 16", "стоит ли покупать iphone 15 в 2026", "сравнение айфонов 2026", "айфон для ребенка", "айфон с лучшей камерой"],
  tag: "Советы покупателю",
  date: "2026-10-14",
  dateLabel: "14 октября 2026",
  readTime: "13 мин",
  image: "iphone-17-pro-max-orange",
  imageAlt: "Какой iPhone купить в 2026 году — сравнение моделей",
};

export const metadata = articleMetadata(META);

const FAQ: Faq[] = [
  { q: "Какой iPhone самый выгодный в 2026 году?", a: "Для большинства — iPhone 17: экран 120 Гц, 256 ГБ в базе, хорошая камера и Apple Intelligence по разумной цене. Если бюджет меньше — iPhone 17e или iPhone 16." },
  { q: "Стоит ли покупать iPhone 15 в 2026 году?", a: "Как недорогой телефон — да: Dynamic Island, камера 48 МП, USB-C. Но в нём нет Apple Intelligence, а обновления iOS он будет получать меньше лет, чем новые модели." },
  { q: "Сколько памяти брать?", a: "256 ГБ хватает большинству. Если много снимаете видео в 4K или храните фото только на телефоне — берите 512 ГБ. 1–2 ТБ нужны тем, кто снимает ProRes." },
  { q: "Чем Pro отличается от обычного iPhone 17?", a: "У Pro есть телевик 48 МП с 8× оптическим зумом, видео ProRes, 12 ГБ оперативной памяти вместо 8 и быстрый USB-C. Экран 120 Гц теперь есть у обоих." },
  { q: "Есть ли смысл брать iPhone 18 Pro сразу после выхода?", a: "Если нужна лучшая камера с переменной диафрагмой — да. Если нет — 17 Pro и 17 Pro Max сейчас заметно дешевле, а в повседневных задачах разница небольшая." },
  { q: "Какой iPhone купить ребёнку или пожилым родителям?", a: "iPhone 17e или iPhone 16: современный, с поддержкой обновлений на годы вперёд и без переплаты за Pro-камеры. Для пожилых удобнее версия с Nano-SIM — не нужно разбираться с eSIM." },
  { q: "Какой iPhone дольше всех держит заряд?", a: "Рекордсмены — iPhone 18 Pro Max (до 43 часов видео) и iPhone 17 Pro Max (до 37 часов). Среди недорогих хорошо держит iPhone 17e — до 26 часов." },
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
      toc={[
        ["Коротко: таблица с ценами", "#tablica"],
        ["5 вопросов, которые помогут выбрать", "#voprosy"],
        ["Лучший выбор для большинства", "#iphone-17"],
        ["Если важна камера", "#pro"],
        ["Размер и вес: какой удобнее", "#razmer"],
        ["Автономность: какой дольше держит", "#avtonomnost"],
        ["Недорогие iPhone", "#nedorogie"],
        ["Новинки: iPhone 18 Pro", "#18-pro"],
        ["Новый или б/у", "#bu"],
        ["Сколько памяти и какую SIM", "#pamyat"],
        ["Частые ошибки при выборе", "#oshibki"],
      ]}
      faq={FAQ}
      related={[
        { href: "/blog/iphone-17-pro-max-ili-18-pro-max/", label: "iPhone 17 Pro Max или 18 Pro Max" },
        { href: "/blog/sim-ili-esim-iphone-v-rossii/", label: "SIM или eSIM" },
        { href: "/blog/kak-proverit-bu-iphone-pered-pokupkoy/", label: "Как проверить б/у iPhone" },
        { href: "/blog/kak-perenesti-dannye-so-starogo-iphone/", label: "Перенос данных на новый iPhone" },
        { href: "/bu-iphone/", label: "Б/у iPhone с гарантией" },
        { href: "/rassrochka-iphone/", label: "iPhone в рассрочку" },
      ]}
    >
      <p className="text-lg">
        В 2026 году в продаже одновременно девять актуальных iPhone — от 15-го до новых 18 Pro. Модели похожи внешне, но
        заметно отличаются камерами, экранами, автономностью и ценой. Разбираемся, какой из них подойдёт именно вам, без
        переплаты за то, чем вы не будете пользоваться.
      </p>
      <p>
        Цены в статье — актуальные цены нашего магазина в Казани, они обновляются каждый день вместе с каталогом. Нажмите на
        название модели, чтобы посмотреть все цвета и объёмы памяти.
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

      <h2 id="voprosy">5 вопросов, которые помогут выбрать</h2>
      <ol>
        <li><strong>Какой бюджет?</strong> Помните про рассрочку: с ней разница между моделями в месяц часто меньше, чем кажется.</li>
        <li><strong>Какой размер удобен?</strong> 6,1–6,3" — для управления одной рукой, 6,5–6,9" — для видео, игр и чтения.</li>
        <li><strong>Насколько важна камера?</strong> Для соцсетей и семейных фото хватит обычного iPhone 17. Для концертов, путешествий и видео — Pro.</li>
        <li><strong>На сколько лет берёте телефон?</strong> Если на 4–5 лет — берите модель поновее и с запасом памяти.</li>
        <li><strong>Какой у вас оператор?</strong> От этого зависит, подойдёт ли версия только с eSIM — она дешевле.</li>
      </ol>

      <h2 id="iphone-17">Лучший выбор для большинства — iPhone 17</h2>
      <p>
        <ModelLink model="iphone/iphone-17">iPhone 17</ModelLink> — главный сюрприз прошлого года. Впервые у обычной модели
        экран 120 Гц с Always-On, как у Pro, базовая память выросла до 256 ГБ, а фронтальная камера стала 18-мегапиксельной
        с Center Stage: в групповом селфи она сама расширяет кадр. Чип A19 и 8 ГБ оперативной памяти тянут Apple Intelligence
        и любые игры.
      </p>
      <p>
        Если вы не снимаете профессиональное видео и вам не нужен оптический зум — это лучший баланс цены и возможностей.
        Сейчас — <strong><PriceFrom model="iphone/iphone-17" /></strong>.
      </p>
      <Callout tone="verdict" title="Кому подойдёт iPhone 17">
        <p>
          Тем, кто меняет iPhone 11–14 и хочет почувствовать разницу: плавный экран, лучшая камера, больше памяти и автономности.
          Это телефон, который не будет казаться устаревшим через 3–4 года.
        </p>
      </Callout>

      <h2 id="pro">Если важна камера — 17 Pro и 17 Pro Max</h2>
      <p>
        У <ModelLink model="iphone/iphone-17-pro">iPhone 17 Pro</ModelLink> и <ModelLink model="iphone/iphone-17-pro-max">17 Pro Max</ModelLink> три
        камеры по 48 МП и телевик с 8× оптическим приближением — можно снимать концерты, детей на сцене и архитектуру без
        потери качества. Есть видео ProRes и Apple Log 2, 12 ГБ оперативной памяти и корпус Unibody, который лучше
        отводит тепло при долгой съёмке и в играх.
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

      <h2 id="razmer">Размер и вес: какой удобнее</h2>
      <ArticleTable
        head={["Модель", "Экран", "Вес"]}
        rows={[
          ["iPhone 17e", "6,1\"", "169 г"],
          ["iPhone 16", "6,1\"", "170 г"],
          ["iPhone 17 Air", "6,5\"", "165 г"],
          ["iPhone 17", "6,3\"", "177 г"],
          ["iPhone 17 Pro", "6,3\"", "204 г"],
          ["iPhone 18 Pro", "6,3\"", "211 г"],
          ["iPhone 17 Pro Max", "6,9\"", "231 г"],
          ["iPhone 18 Pro Max", "6,9\"", "249 г"],
        ]}
      />
      <p>
        Если раньше у вас был iPhone с экраном 6,1", то 6,3" почти не ощущается крупнее — рамки стали тоньше. А вот разница между
        Pro и Pro Max заметна: Pro Max тяжелее на 25–40 граммов и хуже помещается в карман. Перед покупкой подержите обе
        модели в руке — наличие на витрине уточните у менеджера.
      </p>

      <h2 id="avtonomnost">Автономность: какой дольше держит</h2>
      <ArticleTable
        head={["Модель", "Видео до", "Комментарий"]}
        rows={[
          ["iPhone 18 Pro Max", "43 ч", "Рекордсмен"],
          ["iPhone 17 Pro Max", "37 ч", "Лучший по цене среди Pro Max"],
          ["iPhone 18 Pro", "34 ч", ""],
          ["iPhone 17 Pro", "31 ч", ""],
          ["iPhone 17", "30 ч", "Лучший среди обычных моделей"],
          ["iPhone 17e", "26 ч", ""],
          ["iPhone 16", "22 ч", ""],
        ]}
      />
      <p>
        Это данные Apple для просмотра видео — в реальной жизни со звонками, навигатором и соцсетями цифры ниже, но соотношение
        между моделями сохраняется. Как продлить автономность любого iPhone, рассказали в статье{" "}
        <Link href="/blog/optimizaciya-akkumulyatora-iphone-ios-26/" className="text-primary hover:underline">про настройку аккумулятора</Link>.
      </p>

      <h2 id="nedorogie">Недорогие iPhone</h2>
      <h3>iPhone 17e — <PriceFrom model="iphone/iphone-17e" /></h3>
      <p>
        Новый iPhone с чипом A19, Apple Intelligence, MagSafe и 256 ГБ памяти. Одна камера 48 МП с 2× приближением и экран
        60 Гц — компромиссы, но для звонков, мессенджеров, соцсетей и фото это не важно. Хороший первый iPhone или подарок родителям.
      </p>
      <h3>iPhone 16 — <PriceFrom model="iphone/iphone-16" /></h3>
      <p>
        Две камеры, Apple Intelligence, кнопки Camera Control и Action Button. Хороший вариант, если нужна вторая камера
        Ultra Wide для пейзажей и интерьеров, а бюджет меньше, чем на iPhone 17.
      </p>
      <h3>iPhone 15 — <PriceFrom model="iphone/iphone-15" /></h3>
      <p>
        Dynamic Island, камера 48 МП и USB-C. Apple Intelligence в нём нет, поэтому для покупки «на много лет» лучше
        доплатить за 16-й или 17e.
      </p>
      <Callout tone="tip" title="Как сэкономить без потери качества">
        <p>
          Выбирайте версию только с eSIM — она обычно дешевле. Сдайте старый телефон в{" "}
          <Link href="/trade-in-iphone/" className="text-primary hover:underline">Trade-in</Link> — его стоимость сразу вычтем из цены
          нового. А остаток можно разбить на <Link href="/rassrochka-iphone/" className="text-primary hover:underline">рассрочку до 36 месяцев</Link>.
        </p>
      </Callout>

      <h2 id="18-pro">Новинки: iPhone 18 Pro и 18 Pro Max</h2>
      <p>
        Главное в <ModelLink model="iphone/iphone-18-pro">18 Pro</ModelLink> и <ModelLink model="iphone/iphone-18-pro-max">18 Pro Max</ModelLink> —
        основная камера с переменной диафрагмой ƒ/1.48–ƒ/4.0, чип A20 Pro, собственный модем Apple C2 и ещё больше
        автономности: до 43 часов видео у Pro Max. Сразу после выхода новинки заметно дороже прошлогодних моделей, поэтому
        их стоит брать, если нужна лучшая камера. Подробное сравнение — в статье{" "}
        <Link href="/blog/iphone-17-pro-max-ili-18-pro-max/" className="text-primary hover:underline">«iPhone 17 Pro Max или 18 Pro Max»</Link>.
      </p>

      <h2 id="bu">Новый или б/у</h2>
      <p>
        Б/у iPhone — способ получить модель классом выше за те же деньги. Но есть риски: изношенный аккумулятор, неоригинальные
        запчасти после ремонта, привязка к чужому Apple ID. Если покупаете с рук, обязательно пройдите наш{" "}
        <Link href="/blog/kak-proverit-bu-iphone-pered-pokupkoy/" className="text-primary hover:underline">чек-лист проверки б/у iPhone</Link>.
      </p>
      <p>
        Безопаснее купить <Link href="/bu-iphone/" className="text-primary hover:underline">проверенный б/у iPhone в магазине</Link>:
        мы проверяем аккумулятор, экран, камеры и Face ID и даём гарантию. А новый iPhone в рассрочку часто обходится в
        сопоставимый ежемесячный платёж.
      </p>

      <h2 id="pamyat">Сколько памяти и какую версию SIM брать</h2>
      <ArticleTable
        head={["Объём", "Кому подойдёт"]}
        rows={[
          ["256 ГБ", "Большинству: фото выгружаются в облако или на компьютер"],
          ["512 ГБ", "Много видео в 4K, всё хранится на телефоне, телефон на 4–5 лет"],
          ["1–2 ТБ", "Съёмка в ProRes на Pro-моделях, профессиональная работа с видео"],
        ]}
      />
      <p>
        <strong>eSIM или Nano-SIM + eSIM:</strong> версии только с eSIM дешевле, в России eSIM выдают все крупные операторы.
        Для пожилых родителей и для тех, кто часто переставляет SIM-карту, удобнее версия с лотком.
      </p>

      <h2 id="oshibki">Частые ошибки при выборе</h2>
      <ul>
        <li><strong>Переплачивают за Pro ради «лучшей камеры»</strong>, а снимают только для соцсетей — iPhone 17 справится не хуже.</li>
        <li><strong>Берут минимальную память на 4–5 лет.</strong> Через пару лет место заканчивается, и телефон начинает раздражать.</li>
        <li><strong>Выбирают по старой привычке Pro Max,</strong> а потом жалуются на вес. Подержите модели в руке перед покупкой.</li>
        <li><strong>Покупают старую модель ради экономии,</strong> которая через год перестанет получать новые функции iOS.</li>
        <li><strong>Не проверяют, выдаёт ли их оператор eSIM,</strong> и покупают версию без лотка.</li>
      </ul>
      <p>
        Не можете решиться — приходите в магазин в Казани: подержите модели в руках и сравните камеры вживую. Купить можно в{" "}
        <Link href="/rassrochka-iphone/" className="text-primary hover:underline">рассрочку «Халва» до 36 месяцев</Link>, а старый
        телефон сдать в <Link href="/trade-in-iphone/" className="text-primary hover:underline">Trade-in</Link>.
      </p>
    </ArticleLayout>
  );
}
