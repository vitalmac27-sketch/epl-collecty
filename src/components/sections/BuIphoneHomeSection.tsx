"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { fetchBuListings, type BuListing } from "@/lib/bu-api";
import BuCard from "@/components/bu-iphone/BuCard";

/**
 * Секция «Б/У iPhone с гарантией» на главной.
 * Показывает свежие объявления (4 на мобильной 2×2, 3 на десктопе) + кнопку в каталог.
 * Если объявлений нет (или API недоступен) — секция не рендерится вовсе.
 */
export default function BuIphoneHomeSection() {
  const [listings, setListings] = useState<BuListing[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBuListings().then((data) => {
      setListings(data.slice(0, 4)); // 4 для моб. сетки 2×2; на десктопе 4-я скрыта
      setLoading(false);
    });
  }, []);

  // Пока грузится или пусто — ничего не показываем, главная не дёргается
  if (loading || listings.length === 0) return null;

  return (
    <section aria-label="Б/У iPhone с гарантией">
      <div className="flex items-end justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Б/У iPhone в Казани с гарантией
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Проверенные iPhone 13–17 Max. Гарантия 60 дней, отвязаны от Apple ID.
          </p>
        </div>
        <Link
          href="/bu-iphone"
          className="hidden sm:inline-flex shrink-0 items-center px-4 py-2 rounded-xl border border-border bg-background hover:border-primary hover:text-primary transition-colors text-sm font-medium"
        >
          Все б/у iPhone →
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:[&>*:nth-child(4)]:hidden">
        {listings.map((listing) => (
          <BuCard key={listing.id} listing={listing} />
        ))}
      </div>

      <div className="mt-5 sm:hidden">
        <Link
          href="/bu-iphone"
          className="flex items-center justify-center w-full px-4 py-3 rounded-xl border border-border bg-background hover:border-primary hover:text-primary transition-colors text-sm font-medium"
        >
          Все б/у iPhone →
        </Link>
      </div>
    </section>
  );
}
