import Link from "next/link";
import Image from "next/image";
import { allModels, getModelUrl } from "@/lib/models";
import { formatPrice } from "@/lib/utils";

/** Модель по ключу "категория/slug" */
function findModel(key: string) {
  const [category, slug] = key.split("/");
  return allModels.find((m) => m.category === category && m.slug === slug);
}

/** Актуальная цена «от» для текста статьи — берётся из того же прайса, что и каталог (обновляется каждый день) */
export function PriceFrom({ model }: { model: string }) {
  const m = findModel(model);
  if (!m || !m.priceFrom) return <>цену уточняйте у менеджера</>;
  return <>от {formatPrice(m.priceFrom)}</>;
}

/** Ссылка на модель с актуальным названием */
export function ModelLink({ model, children }: { model: string; children?: React.ReactNode }) {
  const m = findModel(model);
  if (!m) return <>{children}</>;
  return (
    <Link href={getModelUrl(m) + "/"} className="text-primary hover:underline">
      {children ?? m.name}
    </Link>
  );
}

/** Блок карточек товаров внутри статьи: фото, название, цена «от», ссылка в каталог */
export default function ProductPicks({ title, models, note }: { title: string; models: string[]; note?: string }) {
  const items = models.map(findModel).filter((m): m is NonNullable<typeof m> => Boolean(m));
  if (!items.length) return null;
  return (
    <aside className="my-10 rounded-2xl border border-primary/20 bg-primary/5 p-5" aria-label={title}>
      <p className="font-bold text-lg mb-1">{title}</p>
      {note && <p className="text-sm text-muted-foreground mb-4">{note}</p>}
      <div className={`grid gap-3 ${items.length > 2 ? "grid-cols-2 sm:grid-cols-3" : "grid-cols-2"} ${note ? "" : "mt-4"}`}>
        {items.map((m) => (
          <Link
            key={m.slug}
            href={getModelUrl(m) + "/"}
            className="group bg-card border border-border rounded-xl p-3 flex flex-col hover:border-primary/50 hover:shadow-md transition-all"
          >
            <div className="relative aspect-square mb-2">
              <Image
                src={`/assets/${m.image}.avif`}
                alt={`Купить ${m.name} в Казани`}
                fill
                sizes="(max-width: 640px) 45vw, 220px"
                className="object-contain mix-blend-multiply dark:mix-blend-normal group-hover:scale-105 transition-transform"
              />
            </div>
            <span className="text-sm font-semibold leading-tight">{m.name}</span>
            <span className="text-sm text-primary font-bold mt-1">
              {m.priceFrom ? `от ${formatPrice(m.priceFrom)}` : "Цена — у менеджера"}
            </span>
            <span className="text-xs text-muted-foreground mt-auto pt-1">Рассрочка до 36 мес →</span>
          </Link>
        ))}
      </div>
    </aside>
  );
}
