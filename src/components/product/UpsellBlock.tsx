import { type UpsellItem } from "@/lib/product-configs";
import { formatPrice } from "@/lib/utils";

interface Props {
  items: UpsellItem[];
  telegramLink: string;
  title?: string;
}

export default function UpsellBlock({ items, telegramLink, title = "Популярные аксессуары" }: Props) {
  if (!items.length) return null;
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-sm text-muted-foreground mb-5">Часто берут вместе — соберите полный комплект</p>
      <div className="grid sm:grid-cols-2 gap-4">
        {items.map((item) => (
          <a
            key={item.id}
            href={telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex gap-4 items-start p-4 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-md transition-all"
          >
            <span className="text-3xl mt-0.5 shrink-0">{item.emoji}</span>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm group-hover:text-primary transition-colors leading-tight mb-1">
                {item.name}
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed mb-2">{item.description}</p>
              <p className="text-sm font-bold text-primary">{formatPrice(item.price)}</p>
            </div>
          </a>
        ))}
      </div>
      <p className="text-xs text-muted-foreground mt-3">
        Актуальные цены и наличие уточняйте у менеджера в Telegram
      </p>
    </section>
  );
}
