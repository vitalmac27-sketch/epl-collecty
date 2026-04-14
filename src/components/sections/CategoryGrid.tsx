import Link from "next/link";
import type { CategoryConfig } from "@/lib/categories";

interface CategoryGridProps {
  categories: CategoryConfig[];
}

export default function CategoryGrid({ categories }: CategoryGridProps) {
  return (
    <section aria-label="Категории товаров">
      <h2 className="text-xl font-bold text-foreground mb-4">Каталог техники</h2>
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/${cat.slug}`}
            className="flex flex-col items-center gap-2 p-4 rounded-2xl border border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 group"
          >
            <span className="text-3xl group-hover:scale-110 transition-transform duration-200">
              {cat.emoji}
            </span>
            <span className="text-xs font-semibold text-foreground/80 group-hover:text-primary transition-colors text-center leading-tight">
              {cat.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
