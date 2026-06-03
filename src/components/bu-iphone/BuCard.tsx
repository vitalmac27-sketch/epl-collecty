"use client";

import Link from "next/link";
import type { BuListing } from "@/lib/bu-api";
import { buPhotoUrl } from "@/lib/bu-api";

interface Props {
  listing: BuListing;
}

export default function BuCard({ listing }: Props) {
  const photo = listing.photos?.[0] ? buPhotoUrl(listing.photos[0]) : null;
  const isReserved = listing.status === "reserved";

  return (
    <Link
      href={`/bu-iphone/item?slug=${listing.slug}`}
      className="group block rounded-2xl border border-border bg-card hover:border-primary/40 transition-all overflow-hidden"
    >
      {/* Фото */}
      <div className="relative aspect-square bg-muted/30 overflow-hidden">
        {photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={photo}
            alt={listing.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground text-4xl">
            📱
          </div>
        )}
        {isReserved && (
          <div className="absolute top-2 right-2 px-2 py-1 rounded-full bg-amber-500 text-white text-xs font-semibold">
            🟡 Бронь
          </div>
        )}
        <div className="absolute top-2 left-2 px-2 py-1 rounded-full bg-green-600 text-white text-xs font-semibold">
          Б/У
        </div>
      </div>

      {/* Контент */}
      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-sm leading-tight line-clamp-2 group-hover:text-primary transition-colors">
          {listing.title}
        </h3>

        <div className="flex flex-wrap gap-1.5">
          {listing.battery && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-muted/50 text-muted-foreground">
              🔋 {listing.battery}%
            </span>
          )}
          {listing.condition && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-muted/50 text-muted-foreground">
              ✨ {listing.condition}
            </span>
          )}
        </div>

        <div className="pt-1">
          <div className="text-lg font-bold text-primary">
            {listing.price.toLocaleString("ru-RU")} ₽
          </div>
        </div>
      </div>
    </Link>
  );
}
