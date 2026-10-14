import ArticleLayout, { articleMetadata, type ArticleMeta, type Faq } from "@/components/blog/ArticleLayout";
import ProductPicks, { ModelLink, PriceFrom } from "@/components/blog/ProductPicks";
import Link from "next/link";

export const dynamic = "force-static";

const META: ArticleMeta = {
  slug: "iphone-17-pro-max-ili-18-pro-max",
  title: "iPhone 17 Pro Max или 18 Pro Max: что выбрать и стоит ли переплачивать",
  short: "17 Pro Max или 18 Pro Max",
  description: "Сравнение iPhone 17 Pro Max и iPhone 18 Pro Max: камера с переменной диафрагмой, чип A20 Pro, автономность, зарядка, вес и цены в Казани. Кому стоит переходить.",
  keywords: ["iphone 17 pro max или 18 pro max", "сравнение iphone 17 pro max и 18 pro max", "iphone 18 pro max отличия", "стоит ли менять 17 pro max на 18 pro max", "iphone 18 pro max цена казань"],
  tag: "Сравнения",
  date: "2026-10-14",
  dateLabel: "14 октября 2026",
  readTime: "6 мин",
  image: "iphone-18-pro-max",
  imageAlt: "iPhone 17 Pro Max или iPhone 18 Pro Max — сравнение",
};

export const metadata = articleMetadata(META);

const FAQ: Faq[] = [
  { q: "Чем iPhone 18 Pro Max лучше 17 Pro Max?", a: "Основная камера с переменной диафрагмой ƒ/1.48–ƒ/4.0, чип A20 Pro, модем Apple C2, автономность до 43 часов видео против 37 и зарядка до 50% примерно за 15 минут." },
  { q: "Стоит ли менять 17 Pro Max на 18 Pro Max?", a: "Обычно нет: экран, телевик, фронтальная камера и максимальная память у моделей одинаковые. Переход оправдан, если вы много снимаете и вам нужна переменная диафрагма." },
  { q: "Какой из них тяжелее?", a: "iPhone 18 Pro Max весит 249 г, 17 Pro Max — 231 г. Разница заметна при долгой съёмке и в кармане." },
  { q: "Стоит ли переходить с iPhone 15 Pro Max или 16 Pro Max?", a: "Да, разница ощутима в автономности, камере и скорости. Если хотите сэкономить — 17 Pro Max даст большую часть этих улучшений дешевле." },
];

const CMP: Array<[string, string, string]> = [
  ["Процессор", "A20 Pro, 7-ядерный GPU", "A19 Pro, 6-ядерный GPU"],
  ["Основная камера", "48 МП, переменная диафрагма ƒ/1.48–ƒ/4.0", "48 МП, ƒ/1.78"],
  ["Телевик", "48 МП, 4× / 8×", "48 МП, 4× / 8×"],
  ["Фронтальная камера", "18 МП Center Stage", "18 МП Center Stage"],
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
      toc={[["Главное за 30 секунд", "#korotko"], ["Таблица сравнения", "#tablica"], ["Камера: что даёт переменная диафрагма", "#kamera"], ["Автономность и зарядка", "#batareya"], ["Цена и кому что брать", "#vybor"]]}
      faq={FAQ}
      related={[
        { href: "/blog/kakoy-iphone-kupit-v-2026/", label: "Какой iPhone купить в 2026" },
        { href: "/blog/kak-nastroit-kameru-iphone/", label: "Настройка камеры iPhone" },
        { href: "/blog/kak-perenesti-dannye-so-starogo-iphone/", label: "Перенос данных на новый iPhone" },
        { href: "/trade-in-iphone/", label: "Trade-in iPhone" },
      ]}
    >
      <p className="text-lg">
        iPhone 18 Pro Max вышел в сентябре 2026 года, а 17 Pro Max после этого подешевел. Разбираемся, за что именно
        просят доплату и кому она действительно нужна.
      </p>

      <h2 id="korotko">Главное за 30 секунд</h2>
      <ul>
        <li><strong>18 Pro Max</strong> — для тех, кто много снимает: переменная диафрагма даёт больше света ночью и настоящее размытие фона. Плюс ещё +6 часов автономности.</li>
        <li><strong>17 Pro Max</strong> — тот же экран, тот же телевик и почти такая же скорость в повседневных задачах, но заметно дешевле и на 18 г легче.</li>
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

      <h2 id="kamera">Камера: что даёт переменная диафрагма</h2>
      <p>
        В обычных смартфонах диафрагма фиксированная, и размытие фона создаёт программа — иногда с ошибками по краям волос
        и очков. В <ModelLink model="iphone/iphone-18-pro-max">18 Pro Max</ModelLink> диафрагма меняется от ƒ/1.48 до ƒ/4.0, как в
        фотоаппарате:
      </p>
      <ul>
        <li><strong>ƒ/1.48</strong> — больше света вечером и в помещении, меньше шума, естественное размытие фона;</li>
        <li><strong>ƒ/4.0</strong> — всё в кадре резкое: групповые фото, пейзажи, архитектура, предметная съёмка.</li>
      </ul>
      <p>
        Телевик (до 8× без потери качества) и фронтальная камера у моделей одинаковые, видео в обоих — до 4K 120 fps, ProRes RAW и Apple Log 2.
      </p>

      <h2 id="batareya">Автономность и зарядка</h2>
      <p>
        <ModelLink model="iphone/iphone-17-pro-max">17 Pro Max</ModelLink> и так был самым выносливым iPhone — до 37 часов видео. 18 Pro Max
        добавляет ещё 6 часов и быстрее заряжается: до 50% примерно за 15 минут от адаптера 60 Вт.
      </p>

      <ProductPicks
        title="Сравните вживую в магазине в Казани"
        note="Цены обновляются каждый день. Старый iPhone можно сдать в Trade-in."
        models={["iphone/iphone-18-pro-max", "iphone/iphone-17-pro-max", "iphone/iphone-18-pro", "iphone/iphone-17-pro"]}
      />

      <h2 id="vybor">Цена и кому что брать</h2>
      <ul>
        <li><strong>Берите 18 Pro Max</strong>, если снимаете много фото и видео, часто бываете в дороге и хотите телефон на 4–5 лет.</li>
        <li><strong>Берите 17 Pro Max</strong>, если важны большой экран и батарея, а фото — для соцсетей и семьи: разницу в цене лучше потратить на память 512 ГБ или аксессуары.</li>
        <li><strong>У вас 17 Pro Max</strong> — менять нет смысла. <strong>У вас 15 Pro Max или старше</strong> — разница будет ощутимой с любой из двух моделей.</li>
      </ul>
      <p>
        Обе модели можно купить в <Link href="/rassrochka-iphone/" className="text-primary hover:underline">рассрочку до 36 месяцев</Link>,
        а старый телефон зачесть в <Link href="/trade-in-iphone/" className="text-primary hover:underline">Trade-in</Link>.
      </p>
    </ArticleLayout>
  );
}
