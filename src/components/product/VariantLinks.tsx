import Link from "next/link";
import type { Variant } from "@/lib/variants";
import { variantWord } from "@/lib/variants";
import { formatPrice } from "@/lib/utils";

/** Блок «Популярные конфигурации» — ссылки на страницы памяти и цветов */
export default function VariantLinks({
  base,
  modelName,
  variants,
  current,
}: {
  base: string; // "/iphone/iphone-18-pro-max"
  modelName: string;
  variants: Variant[];
  current?: string;
}) {
  if (!variants.length) return null;
  const groups: Array<[string, Variant[]]> = [
    ["По объёму памяти", variants.filter((v) => v.kind === "storage")],
    ["По цвету", variants.filter((v) => v.kind === "color")],
  ];
  return (
    <section className="mb-12" aria-label={`Конфигурации ${modelName}`}>
      <h2 className="text-2xl font-bold mb-4">Популярные конфигурации {modelName}</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {groups.map(([title, list]) => (
          <div key={title}>
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">{title}</p>
            <div className="flex flex-wrap gap-2">
              {list.map((v) => {
                const active = v.slug === current;
                const text = `${modelName} ${variantWord(v)}`;
                return active ? (
                  <span
                    key={v.slug}
                    className="text-sm px-3.5 py-2 rounded-xl border-2 border-primary text-primary font-medium"
                  >
                    {text}
                  </span>
                ) : (
                  <Link
                    key={v.slug}
                    href={`${base}/${v.slug}`}
                    className="text-sm px-3.5 py-2 rounded-xl border border-border hover:border-primary/50 hover:text-primary transition-colors"
                  >
                    {text}
                    <span className="text-muted-foreground"> · {v.price ? `от ${formatPrice(v.price)}` : "под заказ"}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
