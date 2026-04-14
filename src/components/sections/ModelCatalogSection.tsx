import Image from "next/image";
import Link from "next/link";
import { CreditCard } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { ProductModel } from "@/lib/models";
import { getModelUrl } from "@/lib/models";
import { formatPrice as fp } from "@/lib/utils";

interface ModelCatalogSectionProps {
  title: string;
  models: ProductModel[];
}

export default function ModelCatalogSection({ title, models }: ModelCatalogSectionProps) {
  return (
    <section aria-label={title}>
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{title}</h2>
        <p className="text-muted-foreground">Новые и б/у — с гарантией и доставкой</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {models.map((model) => (
          <Card
            key={model.slug}
            className="group relative overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
          >
            {model.badge && (
              <span className="absolute top-2 right-2 z-10 bg-primary text-primary-foreground text-[10px] font-semibold px-2 py-0.5 rounded-full">
                {model.badge === "NEW" ? "Новинка" : model.badge}
              </span>
            )}

            <div className="aspect-square bg-muted/30 p-3 flex items-center justify-center">
              <Image
                src={`/assets/${model.image}.avif`}
                alt={`Купить ${model.name} в Казани`}
                width={120}
                height={120}
                className="object-contain group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>

            <div className="p-3 space-y-2">
              <h3 className="text-sm font-semibold text-foreground leading-tight">
                {model.name}
              </h3>
              <p className="text-base font-bold text-primary">
                от {fp(model.priceFrom)}
              </p>
              <div className="flex flex-col gap-1.5">
                <Link
                  href={getModelUrl(model)}
                  className="flex items-center justify-center gap-1.5 w-full h-8 rounded-md bg-primary text-primary-foreground text-xs font-medium hover:opacity-90 transition-opacity"
                >
                  Подробнее
                </Link>
                <Link
                  href={getModelUrl(model)}
                  className="flex items-center justify-center gap-1.5 w-full h-8 rounded-md border border-border text-xs font-medium hover:bg-muted transition-colors"
                >
                  <CreditCard className="w-3 h-3" />
                  Рассрочка 0%
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
