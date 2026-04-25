"use client";

import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { categories } from "@/lib/categories";
import { getNavModels, getModelUrl } from "@/lib/models";
import { DEFAULT_CITY } from "@/lib/cities";
import { cn } from "@/lib/utils";
import Link from "next/link";

const city = DEFAULT_CITY;

// Основные категории в навбаре (помещаются в строку)
const MAIN_CATS = ["iphone", "ipad", "macbook", "watch", "android"];
// Остальные — в дропдаун «Ещё»
const MORE_CATS = ["airpods", "dyson", "audio", "playstation"];
// Доп. страницы
const EXTRA_PAGES = [
  { href: "/buyout", label: "Выкуп iPhone", emoji: "💰" },
  { href: "/blog", label: "Блог", emoji: "📝" },
];

export default function Navigation() {
  const [isOpen, setIsOpen]     = useState(false);
  const [openCat, setOpenCat]   = useState<string | null>(null);
  const [moreOpen, setMoreOpen] = useState(false);
  const pathname = usePathname();

  const close = () => { setIsOpen(false); setOpenCat(null); setMoreOpen(false); };
  const go    = (href: string) => { close(); window.location.href = href; };
  const isActive = (slug: string) => pathname === `/${slug}` || pathname.startsWith(`/${slug}/`);

  const mainCats = MAIN_CATS.map(s => categories[s as keyof typeof categories]).filter(Boolean);
  const moreCats = MORE_CATS.map(s => categories[s as keyof typeof categories]).filter(Boolean);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 gap-2">

            {/* Логотип */}
            <a href="/" className="flex items-center gap-2 flex-shrink-0">
              <Image src="/assets/logo.jpg" alt="ЭПЛ-КОЛЛЕКЦИЯ" width={36} height={36} className="rounded-full object-cover" priority />
              <span className="font-bold text-base xl:hidden block lg:hidden">ЭПЛ-КОЛЛЕКЦИЯ</span>
              <span className="font-bold text-base hidden xl:block">ЭПЛ-КОЛЛЕКЦИЯ</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
              {/* Основные категории */}
              {mainCats.map((cat) => (
                <div key={cat.slug} className="relative group">
                  <Link href={`/${cat.slug}`} className={cn("flex items-center gap-1 px-2.5 py-2 rounded-md text-sm font-medium hover:text-primary hover:bg-muted whitespace-nowrap", isActive(cat.slug) && "text-primary bg-primary/5")}>
                    <span>{cat.emoji}</span>
                    <span>{cat.name}</span>
                    <ChevronDown className="h-3 w-3 opacity-60" />
                  </Link>
                  {/* Дропдаун при hover */}
                  <div className="absolute top-full left-0 mt-1 w-56 bg-popover border border-border rounded-xl shadow-xl py-2 z-50 hidden group-hover:block">
                    {getNavModels(cat.slug).map((m) => (
                      <Link key={m.slug} href={getModelUrl(m)}
                        className={cn("flex items-center justify-between px-4 py-2 text-sm hover:bg-muted", pathname === getModelUrl(m) && "text-primary")}>
                        <span>{m.name}</span>
                        {m.badge && <span className="text-[10px] bg-primary text-primary-foreground px-1.5 py-0.5 rounded">{m.badge}</span>}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              {/* Кнопка Ещё */}
              <div className="relative">
                <button
                  onClick={() => setMoreOpen(v => !v)}
                  onBlur={(e) => { if (!e.currentTarget.parentElement?.contains(e.relatedTarget as Node)) setMoreOpen(false); }}
                  className={cn("flex items-center gap-1 px-2.5 py-2 rounded-md text-sm font-medium hover:text-primary hover:bg-muted whitespace-nowrap", moreCats.some(c => isActive(c.slug)) && "text-primary bg-primary/5")}
                >
                  Ещё <ChevronDown className={cn("h-3 w-3 opacity-60 transition-transform", moreOpen && "rotate-180")} />
                </button>
                {moreOpen && (
                  <div className="absolute top-full left-0 mt-1 w-52 bg-popover border border-border rounded-xl shadow-xl py-2 z-50">
                    {moreCats.map((cat) => (
                      <Link key={cat.slug} href={`/${cat.slug}`}
                        className={cn("flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-muted", isActive(cat.slug) && "text-primary bg-primary/5")}>
                        <span>{cat.emoji}</span>{cat.name}
                      </Link>
                    ))}
                    <div className="border-t border-border mt-1 pt-1">
                      {EXTRA_PAGES.map(({ href, label, emoji }) => (
                        <Link key={href} href={href}
                          className={cn("flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-muted text-muted-foreground", pathname === href && "text-primary")}>
                          <span>{emoji}</span>{label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* О магазине / Контакты */}
              <Link href="/about" className={cn("px-2.5 py-2 rounded-md text-sm font-medium hover:text-primary hover:bg-muted whitespace-nowrap", pathname === "/about" && "text-primary bg-primary/5")}>
                О нас
              </Link>
            </div>

            {/* Контакты desktop */}
            <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
              <a href={`tel:${city.phone}`} className="flex items-center gap-1.5 text-sm font-medium hover:text-primary whitespace-nowrap">
                <Phone className="h-4 w-4" />
                <span className="hidden xl:inline">{city.phoneFormatted}</span>
              </a>
              <a href={city.telegramChannel} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#0088cc] text-white text-sm font-medium whitespace-nowrap">
                <TgIcon className="h-4 w-4" />
                <span>Канал</span>
              </a>
            </div>

            {/* Бургер */}
            <button className="lg:hidden p-2 rounded-md flex-shrink-0" onClick={() => { setIsOpen(v => !v); setOpenCat(null); }} aria-label="Меню">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Мобильное меню */}
      {isOpen && (
        <div className="fixed inset-x-0 top-16 bottom-0 z-50 bg-background overflow-y-auto lg:hidden">
          <div className="px-4 py-3 flex flex-col gap-1 pb-8">

            <a href="/" onClick={(e) => { e.preventDefault(); go("/"); }}
              className={cn("flex items-center gap-3 px-4 py-4 rounded-xl font-medium text-base", pathname === "/" ? "bg-primary/10 text-primary" : "")}>
              🏠 Главная
            </a>

            {/* Все категории */}
            {[...mainCats, ...moreCats].map((cat) => (
              <div key={cat.slug}>
                <button
                  className={cn("w-full flex items-center justify-between px-4 py-4 rounded-xl font-medium text-base text-left", isActive(cat.slug) ? "bg-primary/10 text-primary" : "")}
                  onClick={() => setOpenCat(p => p === cat.slug ? null : cat.slug)}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xl">{cat.emoji}</span>{cat.name}
                  </span>
                  <ChevronDown className={cn("h-5 w-5 transition-transform shrink-0", openCat === cat.slug && "rotate-180")} />
                </button>

                {openCat === cat.slug && (
                  <div className="mx-2 mb-2 rounded-xl bg-muted/40 overflow-hidden">
                    <a href={`/${cat.slug}`} onClick={(e) => { e.preventDefault(); go(`/${cat.slug}`); }}
                      className="flex items-center px-5 py-3.5 text-sm font-semibold text-primary border-b border-border/50">
                      Все {cat.name} →
                    </a>
                    {getNavModels(cat.slug).map((m) => (
                      <a key={m.slug} href={getModelUrl(m)} onClick={(e) => { e.preventDefault(); go(getModelUrl(m)); }}
                        className={cn("flex items-center justify-between px-5 py-3.5 text-sm border-b border-border/30 last:border-0", pathname === getModelUrl(m) ? "text-primary bg-primary/5" : "")}>
                        <span>{m.name}</span>
                        {m.badge && <span className="text-[10px] bg-primary text-primary-foreground px-1.5 py-0.5 rounded shrink-0 ml-2">{m.badge}</span>}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Доп. страницы */}
            <div className="border-t border-border mt-2 pt-2">
              {[
                { href: "/buyout", label: "Выкуп iPhone", emoji: "💰" },
                { href: "/blog",   label: "Блог",         emoji: "📝" },
                { href: "/about",  label: "О магазине",   emoji: "ℹ️" },
                { href: "/contacts", label: "Контакты",   emoji: "📞" },
              ].map(({ href, label, emoji }) => (
                <a key={href} href={href} onClick={(e) => { e.preventDefault(); go(href); }}
                  className={cn("flex items-center gap-3 px-4 py-4 rounded-xl font-medium text-base", pathname === href ? "bg-primary/10 text-primary" : "")}>
                  <span>{emoji}</span>{label}
                </a>
              ))}
            </div>

            {/* Контакты */}
            <div className="flex flex-col gap-2 mt-2 pt-3 border-t border-border">
              <a href={`tel:${city.phone}`} className="flex items-center justify-center gap-2 py-4 rounded-xl bg-muted font-medium">
                <Phone className="h-4 w-4" /> {city.phoneFormatted}
              </a>
              <a href={city.telegramChannel} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-4 rounded-xl bg-[#0088cc] text-white font-medium">
                <TgIcon className="h-4 w-4" /> Telegram канал
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function TgIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
    </svg>
  );
}
