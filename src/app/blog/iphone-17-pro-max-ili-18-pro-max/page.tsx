import ArticleLayout, { articleMetadata, Callout, ArticleTable, type ArticleMeta, type Faq } from "@/components/blog/ArticleLayout";
import ProductPicks, { ModelLink, PriceFrom } from "@/components/blog/ProductPicks";
import Link from "next/link";

export const dynamic = "force-static";

const META: ArticleMeta = {
  slug: "iphone-17-pro-max-ili-18-pro-max",
  title: "iPhone 17 Pro Max или 18 Pro Max: что выбрать и стоит ли переплачивать",
  short: "17 Pro Max или 18 Pro Max",
  description: "Подробное сравнение iPhone 17 Pro Max и iPhone 18 Pro Max: камера с переменной диафрагмой, чип A20 Pro, автономность, зарядка, модем, вес, цвета и цены в Казани. Кому стоит переходить, а кому нет.",
  keywords: ["iphone 17 pro max или 18 pro max", "сравнение iphone 17 pro max и 18 pro max", "iphone 18 pro max отличия", "стоит ли менять 17 pro max на 18 pro max", "iphone 18 pro max цена казань", "iphone 18 pro max переменная диафрагма", "чем отличается iphone 18 pro max"],
  tag: "Сравнения",
  date: "2026-10-14",
  dateLabel: "14 октября 2026",
  readTime: "11 мин",
  image: "iphone-18-pro-max",
  imageAlt: "iPhone 17 Pro Max или iPhone 18 Pro Max — сравнение",
};

export const metadata = articleMetadata(META);

const FAQ: Faq[] = [
  { q: "Чем iPhone 18 Pro Max лучше 17 Pro Max?", a: "Основная камера с переменной диафрагмой ƒ/1.48–ƒ/4.0, чип A20 Pro с 7-ядерной графикой, модем Apple C2, автономность до 43 часов видео против 37 и зарядка до 50% примерно за 15 минут." },
  { q: "Стоит ли менять 17 Pro Max на 18 Pro Max?", a: "Обычно нет: экран, телевик, фронтальная камера и максимальная память у моделей одинаковые. Переход оправдан, если вы много снимаете и вам нужна переменная диафрагма." },
  { q: "Какой из них тяжелее?", a: "iPhone 18 Pro Max весит 249 г, 17 Pro Max — 231 г. Разница заметна при долгой съёмке и в кармане." },
  { q: "Стоит ли переходить с iPhone 15 Pro Max или 16 Pro Max?", a: "Да, разница ощутима в автономности, камере и скорости. Если хотите сэкономить — 17 Pro Max даст большую часть этих улучшений дешевле." },
  { q: "Одинаковые ли у них экраны?", a: "Да: 6,9 дюйма, 120 Гц с Always-On и яркостью до 3000 нит. По экрану разницы между моделями нет." },
  { q: "Есть ли iPhone 18 Pro Max только с eSIM?", a: "Да, как и у 17 Pro Max: версии для США, Канады, Японии и стран Персидского залива — только с eSIM, европейские — с Nano-SIM и eSIM. Версию выбираете в карточке товара." },
  { q: "Подешевеет ли iPhone 18 Pro Max?", a: "Обычно цены на новинки снижаются в первые месяцы продаж, когда поставки стабилизируются. Если камера не нужна срочно, можно взять 17 Pro Max сейчас или подождать снижения цены на 18 Pro Max." },
];

const CMP: Array<[string, string, string]> = [
  ["Процессор", "A20 Pro, 7-ядерный GPU", "A19 Pro, 6-ядерный GPU"],
  ["Neural Engine", "Двойной 16-ядерный", "16-ядерный"],
  ["Основная камера", "48 МП, переменная диафрагма ƒ/1.48–ƒ/4.0", "48 МП, ƒ/1.78"],
  ["Телевик", "48 МП, 4× / 8×", "48 МП, 4× / 8×"],
  ["Ultra Wide", "48 МП", "48 МП"],
  ["Фронтальная камера", "18 МП Center Stage", "18 МП Center Stage"],
  ["Видео", "4K 120 fps, ProRes RAW, Apple Log 2", "4K 120 fps, ProRes RAW, Apple Log 2"],
  ["Экран", "6,9\", 120 Гц, до 3000 нит", "6,9\", 120 Гц, до 3000 нит"],
  ["Автономность", "до 43 ч видео", "до 37 ч видео"],
  ["Быстрая зарядка", "50% примерно за 15 мин (60 Вт)", "50% за 20 мин (40 Вт)"],
  ["Модем", "Apple C2", "Qualcomm"],
  ["Память", "256 ГБ – 2 ТБ", "256 ГБ – 2 ТБ"],
  ["Вес", "249 г", "231 г"],
];

export default function Page() {
  return (
    <ArticleLayout
      meta={META}
      toc={[
        ["Главное за 30 секунд", "#korotko"],
        ["Таблица сравнения", "#tablica"],
        ["Дизайн и цвета", "#dizayn"],
        ["Камера: что даёт переменная диафрагма", "#kamera"],
        ["Видео", "#video"],
        ["Производительность", "#proizvoditelnost"],
        ["Автономность и зарядка", "#batareya"],
        ["Связь: модем Apple C2", "#svyaz"],
        ["Цена: сколько стоит разница", "#cena"],
        ["Кому что брать", "#vybor"],
      ]}
      faq={FAQ}
      related={[
        { href: "/blog/kakoy-iphone-kupit-v-2026/", label: "Какой iPhone купить в 2026" },
        { href: "/blog/kak-nastroit-kameru-iphone/", label: "Настройка камеры iPhone" },
        { href: "/blog/sim-ili-esim-iphone-v-rossii/", label: "SIM или eSIM" },
        { href: "/blog/kak-perenesti-dannye-so-starogo-iphone/", label: "Перенос данных на новый iPhone" },
        { href: "/trade-in-iphone/", label: "Trade-in iPhone" },
      ]}
    >
      <p className="text-lg">
        iPhone 18 Pro Max вышел в сентябре 2026 года, и теперь в магазинах стоят рядом два флагмана: новинка и
        прошлогодний 17 Pro Max, который стал заметно доступнее. Внешне они почти не отличаются, а цена — заметно.
      </p>
      <p>
        Разбираемся по пунктам — камера, видео, скорость, автономность, связь, вес — за что именно просят доплату и кому
        она действительно нужна. Цены в статье — актуальные цены нашего магазина в Казани, они обновляются каждый день.
      </p>

      <h2 id="korotko">Главное за 30 секунд</h2>
      <ul>
        <li><strong>18 Pro Max</strong> — для тех, кто много снимает: переменная диафрагма даёт больше света ночью и настоящее размытие фона. Плюс ещё +6 часов автономности и более быстрая зарядка.</li>
        <li><strong>17 Pro Max</strong> — тот же экран, тот же телевик, то же видео и почти такая же скорость в повседневных задачах, но заметно дешевле и на 18 г легче.</li>
        <li>Сейчас 18 Pro Max — <strong><PriceFrom model="iphone/iphone-18-pro-max" /></strong>, 17 Pro Max — <strong><PriceFrom model="iphone/iphone-17-pro-max" /></strong>.</li>
      </ul>

      <h2 id="tablica">Таблица сравнения</h2>
      <div className="overflow-x-auto -mx-1">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-border text-left text-foreground">
              <th className="py-2 pr-3"></th><th className="py-2 pr-3">18 Pro Max</th><th className="py-2">17 Pro Max</th>
            </tr>
          </thead>
          <tbody>
            {CMP.map(([k, a, b]) => (
              <tr key={k} className="border-b border-border/60 align-top">
                <td className="py-2 pr-3 font-medium text-foreground">{k}</td>
                <td className={`py-2 pr-3 ${a !== b ? "text-green-700 dark:text-green-400 font-medium" : ""}`}>{a}</td>
                <td className="py-2">{b}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm">Зелёным выделены параметры, в которых модели отличаются.</p>

      <h2 id="dizayn">Дизайн и цвета</h2>
      <p>
        Оба телефона в алюминиевом корпусе Unibody с защитным стеклом Ceramic Shield 2 и одинаковым экраном 6,9". В руке
        их почти не отличить, разница — в весе: 18 Pro Max тяжелее на 18 граммов (249 г против 231 г). При долгой съёмке
        с вытянутой руки и в кармане брюк это ощущается.
      </p>
      <ArticleTable
        head={["Модель", "Цвета"]}
        rows={[
          ["iPhone 18 Pro Max", "Glacier, серебристый, чёрный, бордовый (Burgundy)"],
          ["iPhone 17 Pro Max", "Cosmic Orange, синий, серебристый"],
        ]}
      />
      <p>
        Если вам важен узнаваемый «новый» цвет, у 17 Pro Max это оранжевый Cosmic Orange, у 18 Pro Max — бордовый. Сдержанные
        варианты есть у обеих моделей.
      </p>

      <h2 id="kamera">Камера: что даёт переменная диафрагма</h2>
      <p>
        В обычных смартфонах диафрагма фиксированная, и размытие фона создаёт программа — иногда с ошибками по краям волос
        и очков. В <ModelLink model="iphone/iphone-18-pro-max">18 Pro Max</ModelLink> диафрагма основной камеры меняется от
        ƒ/1.48 до ƒ/4.0, как в фотоаппарате:
      </p>
      <ul>
        <li><strong>ƒ/1.48</strong> — больше света вечером и в помещении, меньше шума, естественное размытие фона в портретах;</li>
        <li><strong>ƒ/4.0</strong> — всё в кадре резкое: групповые фото, пейзажи, архитектура, предметная съёмка, документы.</li>
      </ul>
      <p>
        У <ModelLink model="iphone/iphone-17-pro-max">17 Pro Max</ModelLink> диафрагма фиксированная — ƒ/1.78. Днём разницы на
        фото почти не видно. Она заметна вечером, в помещениях и в портретах, где важно аккуратное размытие фона.
      </p>
      <p>
        Остальные камеры у моделей одинаковые: Ultra Wide 48 МП и телевик 48 МП с приближением 4× и 8× без потери качества.
        Фронтальная камера — 18 МП с Center Stage у обеих.
      </p>
      <Callout tone="verdict" title="Вывод по камере">
        <p>
          Если вы снимаете в основном днём и для соцсетей, 17 Pro Max даст практически такой же результат. Переменная диафрагма —
          аргумент для тех, кто много снимает вечером, в помещениях и делает портреты.
        </p>
      </Callout>

      <h2 id="video">Видео</h2>
      <p>
        По видео модели равны: 4K Dolby Vision до 120 кадров в секунду, ProRes RAW и Apple Log 2 для цветокоррекции,
        стабилизация и запись на внешний накопитель через USB-C. Обе подходят для съёмки клипов, влогов и рекламы. Как
        настроить камеру для лучшего качества, рассказали в отдельной статье{" "}
        <Link href="/blog/kak-nastroit-kameru-iphone/" className="text-primary hover:underline">о настройке камеры iPhone</Link>.
      </p>

      <h2 id="proizvoditelnost">Производительность</h2>
      <p>
        У 18 Pro Max чип A20 Pro с 7-ядерной графикой и двойным 16-ядерным Neural Engine. 17 Pro Max работает на A19 Pro с
        6-ядерной графикой. В мессенджерах, соцсетях, браузере и камере разницы вы не заметите — оба телефона работают
        мгновенно. Запас A20 Pro проявится в тяжёлых играх, монтаже видео на телефоне и функциях Apple Intelligence, а
        также через несколько лет, когда приложения станут требовательнее.
      </p>

      <h2 id="batareya">Автономность и зарядка</h2>
      <p>
        17 Pro Max и так был самым выносливым iPhone — до 37 часов видео. 18 Pro Max добавляет ещё 6 часов и быстрее
        заряжается: до 50% примерно за 15 минут от адаптера 60 Вт против 20 минут от 40 Вт у 17 Pro Max.
      </p>
      <p>
        На практике оба телефона спокойно работают полный день при активном использовании. Запас 18 Pro Max пригодится в
        поездках, на длинной съёмке и через пару лет, когда аккумулятор немного износится. Как продлить жизнь аккумулятора,
        читайте в нашей статье{" "}
        <Link href="/blog/optimizaciya-akkumulyatora-iphone-ios-26/" className="text-primary hover:underline">об оптимизации батареи</Link>.
      </p>

      <h2 id="svyaz">Связь: модем Apple C2</h2>
      <p>
        В 18 Pro Max стоит собственный модем Apple C2, в 17 Pro Max — модем Qualcomm. Для пользователя разница незаметна:
        оба телефона поддерживают 5G и работают с российскими операторами. Оба бывают в версиях только с eSIM и с Nano-SIM —
        подробнее в статье <Link href="/blog/sim-ili-esim-iphone-v-rossii/" className="text-primary hover:underline">«SIM или eSIM»</Link>.
      </p>

      <ProductPicks
        title="Сравните вживую в магазине в Казани"
        note="Цены обновляются каждый день. Старый iPhone можно сдать в Trade-in."
        models={["iphone/iphone-18-pro-max", "iphone/iphone-17-pro-max", "iphone/iphone-18-pro", "iphone/iphone-17-pro"]}
      />

      <h2 id="cena">Цена: сколько стоит разница</h2>
      <p>
        Сейчас iPhone 18 Pro Max стоит <strong><PriceFrom model="iphone/iphone-18-pro-max" /></strong>, а 17 Pro Max —{" "}
        <strong><PriceFrom model="iphone/iphone-17-pro-max" /></strong>. Обычно цены на новинки снижаются в первые месяцы
        продаж, когда поставки стабилизируются, а прошлогодние флагманы постепенно уходят из продажи.
      </p>
      <Callout tone="tip" title="Как уменьшить разницу">
        <ul className="list-disc pl-5 space-y-1">
          <li>Сдайте старый iPhone в <Link href="/trade-in-iphone/" className="text-primary hover:underline">Trade-in</Link> — его стоимость сразу вычтем из цены.</li>
          <li>Выберите версию только с eSIM — она обычно дешевле.</li>
          <li>Оформите <Link href="/rassrochka-iphone/" className="text-primary hover:underline">рассрочку до 36 месяцев</Link> — ежемесячный платёж между моделями отличается меньше, чем полная цена.</li>
        </ul>
      </Callout>

      <h2 id="vybor">Кому что брать</h2>
      <ArticleTable
        head={["Ваша ситуация", "Что выбрать"]}
        rows={[
          ["Много снимаете вечером, портреты, контент для работы", "18 Pro Max"],
          ["Берёте телефон на 4–5 лет и хотите максимальный запас", "18 Pro Max"],
          ["Нужен большой экран и батарея, фото — для семьи и соцсетей", "17 Pro Max"],
          ["Важен вес и бюджет", "17 Pro Max"],
          ["У вас уже 17 Pro Max", "Менять не нужно"],
          ["У вас 15 Pro Max или старше", "Любой из двух — разница будет ощутимой"],
        ]}
      />
      <p>
        Не можете решить — приходите в наш магазин в Казани: сделайте одинаковые снимки на оба телефона и сравните сами.
        Обе модели можно купить в <Link href="/rassrochka-iphone/" className="text-primary hover:underline">рассрочку до 36 месяцев</Link>,
        а старый телефон зачесть в <Link href="/trade-in-iphone/" className="text-primary hover:underline">Trade-in</Link>.
      </p>
    </ArticleLayout>
  );
}
