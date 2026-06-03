"use client";

import { useState, useEffect, useMemo } from "react";
import { fetchBuListings, type BuListing } from "@/lib/bu-api";
import BuCard from "./BuCard";

export default function BuCatalog() {
  const [listings, setListings] = useState<BuListing[]>([]);
  const [loading, setLoading] = useState(true);
  const [modelFilter, setModelFilter] = useState<string>("all");
  const [conditionFilter, setConditionFilter] = useState<string>("all");

  useEffect(() => {
    fetchBuListings().then((data) => {
      setListings(data);
      setLoading(false);
    });
  }, []);

  // Уникальные модели для фильтра
  const models = useMemo(() => {
    const set = new Set<string>();
    listings.forEach((l) => l.model && set.add(l.model));
    return Array.from(set).sort();
  }, [listings]);

  const conditions = useMemo(() => {
    const set = new Set<string>();
    listings.forEach((l) => l.condition && set.add(l.condition));
    return Array.from(set);
  }, [listings]);

  // Применяем фильтры
  const filtered = useMemo(() => {
    return listings.filter((l) => {
      if (modelFilter !== "all" && l.model !== modelFilter) return false;
      if (conditionFilter !== "all" && l.condition !== conditionFilter) return false;
      return true;
    });
  }, [listings, modelFilter, conditionFilter]);

  if (loading) {
    return (
      <div className="py-12 text-center text-muted-foreground">
        <div className="inline-block w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mb-3" />
        <p>Загружаем каталог…</p>
      </div>
    );
  }

  if (listings.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="text-4xl mb-3">📭</p>
        <p className="text-lg font-semibold mb-2">Пока пусто</p>
        <p className="text-muted-foreground text-sm">
          Новые б/у iPhone скоро появятся. Загляните позже или напишите нам в Telegram.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Фильтры */}
      {(models.length > 1 || conditions.length > 1) && (
        <div className="mb-6 flex flex-wrap gap-3 p-4 bg-muted/40 border border-border rounded-2xl">
          {models.length > 1 && (
            <div className="flex-1 min-w-[200px]">
              <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                Модель
              </label>
              <select
                value={modelFilter}
                onChange={(e) => setModelFilter(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:border-primary"
              >
                <option value="all">Все модели</option>
                {models.map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>
          )}
          {conditions.length > 1 && (
            <div className="flex-1 min-w-[200px]">
              <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                Состояние
              </label>
              <select
                value={conditionFilter}
                onChange={(e) => setConditionFilter(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:border-primary"
              >
                <option value="all">Любое</option>
                {conditions.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
          )}
        </div>
      )}

      <div className="mb-4 text-sm text-muted-foreground">
        Найдено: <span className="font-semibold text-foreground">{filtered.length}</span> устройств
      </div>

      {filtered.length === 0 ? (
        <div className="py-12 text-center text-muted-foreground">
          По выбранным фильтрам ничего не найдено
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((listing) => (
            <BuCard key={listing.id} listing={listing} />
          ))}
        </div>
      )}
    </>
  );
}
