"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { MAIN_NAV_CATEGORIES, MORE_NAV_CATEGORIES } from "@/lib/categories";
import { getNavModels, getModelUrl } from "@/lib/models";
import { DEFAULT_CITY } from "@/lib/cities";
import { cn } from "@/lib/utils";

const city = DEFAULT_CITY;

// ── Категориям иконки (эмодзи) → заменить SVG при желании ─────────────────
const CATEGORY_ICONS: Record<string, string> = {
  iphone: "📱", ipad: "🖥️", macbook: "💻",
  watch: "⌚", android: "🤖", playstation: "🎮",
};

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);         // мобильное меню
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Закрывать дропдаун по клику вне
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Закрывать мобильное меню при смене роута
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const toggleDropdown = (slug: string) => {
    setActiveDropdown((prev) => (prev === slug ? null : slug));
  };

  const isActiveCategory = (slug: string) =>
    pathname === `/${slug}` || pathname.startsWith(`/${slug}/`);

  return (
    <nav
      className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
      aria-label="Основная навигация"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* ── Логотип ── */}
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity flex-shrink-0"
            aria-label="ЭПЛ-КОЛЛЕКЦИЯ — на главную"
          >
            <Image
              src="/assets/logo.jpg"
              alt="ЭПЛ-КОЛЛЕКЦИЯ — магазин техники в Казани"
              width={40}
              height={40}
              className="rounded-full object-cover"
              priority
            />
            <span className="font-bold text-lg hidden sm:block">ЭПЛ-КОЛЛЕКЦИЯ</span>
          </Link>

          {/* ── Desktop Navigation ── */}
          <div className="hidden lg:flex items-center gap-1" ref={dropdownRef}>

            {/* Главная */}
            <Link
              href="/"
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary hover:bg-muted",
                pathname === "/" ? "text-primary bg-primary/5" : "text-foreground"
              )}
            >
              Главная
            </Link>

            {/* Основные категории с дропдауном */}
            {MAIN_NAV_CATEGORIES.map((cat) => {
              const navModels = getNavModels(cat.slug);
              const isActive = isActiveCategory(cat.slug);
              const isOpen = activeDropdown === cat.slug;

              return (
                <div key={cat.slug} className="relative">
                  <button
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary hover:bg-muted",
                      isActive ? "text-primary bg-primary/5" : "text-foreground"
                    )}
                    onClick={() => toggleDropdown(cat.slug)}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                  >
                    <span>{cat.emoji}</span>
                    {cat.name}
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-transform duration-200",
                        isOpen && "rotate-180"
                      )}
                    />
                  </button>

                  {/* Дропдаун моделей */}
                  {isOpen && (
                    <div className="absolute top-full left-0 mt-1 w-64 bg-popover border border-border rounded-xl shadow-xl py-2 z-50 animate-fade-in">

                      {/* Ссылка на весь каталог категории */}
                      <Link
                        href={`/${cat.slug}`}
                        className="flex items-center justify-between px-4 py-2.5 text-sm font-semibold text-primary hover:bg-primary/5 transition-colors border-b border-border mb-1"
                      >
                        Все {cat.name}
                        <span className="text-xs font-normal text-muted-foreground">→</span>
                      </Link>

                      {/* Список моделей с inNav: true */}
                      {navModels.map((model) => (
                        <Link
                          key={model.slug}
                          href={getModelUrl(model)}
                          className={cn(
                            "flex items-center justify-between px-4 py-2 text-sm hover:bg-muted transition-colors",
                            pathname === getModelUrl(model) && "bg-primary/5 text-primary"
                          )}
                        >
                          <span>{model.name}</span>
                          {model.badge && (
                            <span className={cn(
                              "text-[10px] px-1.5 py-0.5 rounded font-semibold",
                              model.badge === "NEW"  && "bg-primary text-primary-foreground",
                              model.badge === "SALE" && "bg-red-500 text-white",
                              model.badge === "HIT"  && "bg-amber-500 text-white",
                            )}>
                              {model.badge}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* ── "Ещё" — дропдаун для Android и PlayStation ── */}
            {MORE_NAV_CATEGORIES.length > 0 && (
              <div className="relative">
                <button
                  className={cn(
                    "flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary hover:bg-muted",
                    MORE_NAV_CATEGORIES.some((c) => isActiveCategory(c.slug))
                      ? "text-primary bg-primary/5"
                      : "text-foreground"
                  )}
                  onClick={() => toggleDropdown("__more__")}
                  aria-expanded={activeDropdown === "__more__"}
                  aria-haspopup="true"
                >
                  Ещё
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform duration-200",
                      activeDropdown === "__more__" && "rotate-180"
                    )}
                  />
                </button>

                {activeDropdown === "__more__" && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-popover border border-border rounded-xl shadow-xl py-2 z-50 animate-fade-in">
                    {MORE_NAV_CATEGORIES.map((cat) => (
                      <Link
                        key={cat.slug}
                        href={`/${cat.slug}`}
                        className={cn(
                          "flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-muted transition-colors",
                          isActiveCategory(cat.slug) && "text-primary bg-primary/5"
                        )}
                      >
                        <span className="text-base">{cat.emoji}</span>
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* О магазине / Контакты */}
            {[
              { href: "/about", label: "О магазине" },
              { href: "/contacts", label: "Контакты" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary hover:bg-muted",
                  pathname === href ? "text-primary bg-primary/5" : "text-foreground"
                )}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* ── Контакты Desktop ── */}
          <div className="hidden md:flex items-center gap-2 flex-shrink-0">
            <a
              href={`tel:${city.phone}`}
              className="flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
              aria-label={`Позвонить: ${city.phoneFormatted}`}
            >
              <Phone className="h-4 w-4" />
              <span className="hidden xl:inline">{city.phoneFormatted}</span>
            </a>
            <a
              href={city.telegramChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#0088cc] hover:bg-[#006699] text-white text-sm font-medium transition-colors"
            >
              <TelegramIcon className="h-4 w-4" />
              <span className="hidden xl:inline">Канал</span>
            </a>
          </div>

          {/* ── Mobile Menu Button ── */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* ── Mobile Navigation ── */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-1">

              <Link href="/" onClick={() => setIsOpen(false)} className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-md font-medium transition-colors",
                pathname === "/" ? "bg-primary/10 text-primary" : "hover:bg-muted"
              )}>
                🏠 Главная
              </Link>

              {/* Все категории в мобильном меню */}
              {[...MAIN_NAV_CATEGORIES, ...MORE_NAV_CATEGORIES].map((cat) => (
                <div key={cat.slug}>
                  {/* Кнопка категории */}
                  <button
                    className={cn(
                      "w-full flex items-center justify-between px-4 py-3 rounded-md font-medium transition-colors",
                      isActiveCategory(cat.slug) ? "bg-primary/10 text-primary" : "hover:bg-muted"
                    )}
                    onClick={() => toggleDropdown(cat.slug + "_m")}
                  >
                    <span className="flex items-center gap-3">
                      <span>{cat.emoji}</span>
                      {cat.name}
                    </span>
                    <ChevronDown className={cn(
                      "h-4 w-4 transition-transform",
                      activeDropdown === cat.slug + "_m" && "rotate-180"
                    )} />
                  </button>

                  {/* Список моделей */}
                  {activeDropdown === cat.slug + "_m" && (
                    <div className="ml-4 mt-1 mb-2 space-y-1">
                      <Link
                        href={`/${cat.slug}`}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/5 rounded-md"
                      >
                        Все {cat.name} →
                      </Link>
                      {getNavModels(cat.slug).map((model) => (
                        <Link
                          key={model.slug}
                          href={getModelUrl(model)}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "flex items-center justify-between px-4 py-2.5 text-sm rounded-md transition-colors",
                            pathname === getModelUrl(model)
                              ? "bg-primary/10 text-primary"
                              : "hover:bg-muted text-foreground"
                          )}
                        >
                          {model.name}
                          {model.badge && (
                            <span className="text-[10px] bg-primary text-primary-foreground px-1.5 py-0.5 rounded font-semibold">
                              {model.badge}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* О магазине / Контакты */}
              {[
                { href: "/about", label: "О магазине", emoji: "ℹ️" },
                { href: "/contacts", label: "Контакты", emoji: "📞" },
              ].map(({ href, label, emoji }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-md font-medium transition-colors",
                    pathname === href ? "bg-primary/10 text-primary" : "hover:bg-muted"
                  )}
                >
                  <span>{emoji}</span>{label}
                </Link>
              ))}

              {/* Контакты в мобильном */}
              <div className="flex flex-col gap-2 mt-3 px-4 pt-3 border-t border-border">
                <a
                  href={`tel:${city.phone}`}
                  className="flex items-center justify-center gap-2 py-3 rounded-lg bg-muted font-medium text-sm"
                >
                  <Phone className="h-4 w-4" />
                  {city.phoneFormatted}
                </a>
                <a
                  href={city.telegramChannel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-lg bg-[#0088cc] text-white font-medium text-sm"
                >
                  <TelegramIcon className="h-4 w-4" />
                  Telegram канал
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
    </svg>
  );
}
