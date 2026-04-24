"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { MAIN_NAV_CATEGORIES, MORE_NAV_CATEGORIES } from "@/lib/categories";
import { getNavModels, getModelUrl } from "@/lib/models";
import { DEFAULT_CITY } from "@/lib/cities";
import { cn } from "@/lib/utils";

const city = DEFAULT_CITY;

const CATEGORY_ICONS: Record<string, string> = {
  iphone: "📱", ipad: "🖥️", macbook: "💻",
  watch: "⌚", android: "🤖", playstation: "🎮",
};

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const toggleDropdown = (slug: string) => {
    setActiveDropdown((prev) => (prev === slug ? null : slug));
  };

  const isActiveCategory = (slug: string) =>
    pathname === `/${slug}` || pathname.startsWith(`/${slug}/`);

  // Навигация для мобильного — window.location гарантированно работает на iOS
  const navigateTo = useCallback((href: string) => {
    setIsOpen(false);
    setActiveDropdown(null);
    // window.location надёжнее router.push на статическом Next.js + iOS Safari
    window.location.href = href;
  }, []);

  return (
    <nav
      className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
      aria-label="Основная навигация"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Логотип */}
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

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
            <Link
              href="/"
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary hover:bg-muted",
                pathname === "/" ? "text-primary bg-primary/5" : "text-foreground"
              )}
            >
              Главная
            </Link>

            {MAIN_NAV_CATEGORIES.map((cat) => {
              const navModels = getNavModels(cat.slug);
              const isActive = isActiveCategory(cat.slug);
              const isOpenDrop = activeDropdown === cat.slug;

              return (
                <div key={cat.slug} className="relative">
                  <button
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary hover:bg-muted",
                      isActive ? "text-primary bg-primary/5" : "text-foreground"
                    )}
                    onClick={() => toggleDropdown(cat.slug)}
                    aria-expanded={isOpenDrop}
                    aria-haspopup="true"
                  >
                    <span>{cat.emoji}</span>
                    {cat.name}
                    <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-200", isOpenDrop && "rotate-180")} />
                  </button>

                  {isOpenDrop && (
                    <div className="absolute top-full left-0 mt-1 w-64 bg-popover border border-border rounded-xl shadow-xl py-2 z-50 animate-fade-in">
                      <Link
                        href={`/${cat.slug}`}
                        className="flex items-center justify-between px-4 py-2.5 text-sm font-semibold text-primary hover:bg-primary/5 transition-colors border-b border-border mb-1"
                      >
                        Все {cat.name}
                        <span className="text-xs font-normal text-muted-foreground">→</span>
                      </Link>
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

            {MORE_NAV_CATEGORIES.length > 0 && (
              <div className="relative">
                <button
                  className={cn(
                    "flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary hover:bg-muted",
                    MORE_NAV_CATEGORIES.some((c) => isActiveCategory(c.slug)) ? "text-primary bg-primary/5" : "text-foreground"
                  )}
                  onClick={() => toggleDropdown("__more__")}
                  aria-expanded={activeDropdown === "__more__"}
                >
                  Ещё
                  <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-200", activeDropdown === "__more__" && "rotate-180")} />
                </button>

                {activeDropdown === "__more__" && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-popover border border-border rounded-xl shadow-xl py-2 z-50 animate-fade-in">
                    {MORE_NAV_CATEGORIES.map((cat) => (
                      <Link key={cat.slug} href={`/${cat.slug}`}
                        className={cn("flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-muted transition-colors", isActiveCategory(cat.slug) && "text-primary bg-primary/5")}
                      >
                        <span className="text-base">{cat.emoji}</span>
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}

            {[{ href: "/about", label: "О магазине" }, { href: "/contacts", label: "Контакты" }].map(({ href, label }) => (
              <Link key={href} href={href}
                className={cn("px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary hover:bg-muted", pathname === href ? "text-primary bg-primary/5" : "text-foreground")}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Контакты Desktop */}
          <div className="hidden md:flex items-center gap-2 flex-shrink-0">
            <a href={`tel:${city.phone}`}
              className="flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
              aria-label={`Позвонить: ${city.phoneFormatted}`}
            >
              <Phone className="h-4 w-4" />
              <span className="hidden xl:inline">{city.phoneFormatted}</span>
            </a>
            <a href={city.telegramChannel} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#0088cc] hover:bg-[#006699] text-white text-sm font-medium transition-colors"
            >
              <TelegramIcon className="h-4 w-4" />
              <span className="hidden xl:inline">Канал</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation — вынесено как fixed overlay чтобы не конфликтовать с sticky nav */}
        {isOpen && (
          <div
            className="fixed inset-0 top-16 z-40 bg-background overflow-y-auto"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            <div className="px-4 py-4 flex flex-col gap-1">

              {/* Главная */}
              <button
                className={cn("w-full flex items-center gap-3 px-4 py-4 rounded-md font-medium text-left text-base", pathname === "/" ? "bg-primary/10 text-primary" : "hover:bg-muted")}
                onTouchEnd={(e) => { e.preventDefault(); navigateTo("/"); }}
                onClick={() => navigateTo("/")}
              >
                🏠 Главная
              </button>

              {/* Категории */}
              {[...MAIN_NAV_CATEGORIES, ...MORE_NAV_CATEGORIES].map((cat) => (
                <div key={cat.slug}>
                  <button
                    className={cn(
                      "w-full flex items-center justify-between px-4 py-4 rounded-md font-medium text-base",
                      isActiveCategory(cat.slug) ? "bg-primary/10 text-primary" : "hover:bg-muted"
                    )}
                    onClick={() => toggleDropdown(cat.slug + "_m")}
                  >
                    <span className="flex items-center gap-3">
                      <span>{cat.emoji}</span>
                      {cat.name}
                    </span>
                    <ChevronDown className={cn("h-5 w-5 transition-transform", activeDropdown === cat.slug + "_m" && "rotate-180")} />
                  </button>

                  {activeDropdown === cat.slug + "_m" && (
                    <div className="ml-4 mt-1 mb-2 space-y-0.5 border-l-2 border-primary/20 pl-2">
                      <button
                        className="w-full text-left px-4 py-3 text-sm font-semibold text-primary rounded-md"
                        onTouchEnd={(e) => { e.preventDefault(); navigateTo(`/${cat.slug}`); }}
                        onClick={() => navigateTo(`/${cat.slug}`)}
                      >
                        Все {cat.name} →
                      </button>
                      {getNavModels(cat.slug).map((model) => (
                        <button
                          key={model.slug}
                          className={cn(
                            "w-full text-left flex items-center justify-between px-4 py-3 text-sm rounded-md",
                            pathname === getModelUrl(model) ? "bg-primary/10 text-primary" : "text-foreground"
                          )}
                          onTouchEnd={(e) => { e.preventDefault(); navigateTo(getModelUrl(model)); }}
                          onClick={() => navigateTo(getModelUrl(model))}
                        >
                          <span>{model.name}</span>
                          {model.badge && (
                            <span className="text-[10px] bg-primary text-primary-foreground px-1.5 py-0.5 rounded font-semibold ml-2 shrink-0">
                              {model.badge}
                            </span>
                          )}
                        </button>
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
                <button
                  key={href}
                  className={cn("w-full text-left flex items-center gap-3 px-4 py-4 rounded-md font-medium text-base", pathname === href ? "bg-primary/10 text-primary" : "hover:bg-muted")}
                  onTouchEnd={(e) => { e.preventDefault(); navigateTo(href); }}
                  onClick={() => navigateTo(href)}
                >
                  <span>{emoji}</span>{label}
                </button>
              ))}

              {/* Контакты */}
              <div className="flex flex-col gap-2 mt-3 pt-3 border-t border-border">
                <a
                  href={`tel:${city.phone}`}
                  className="flex items-center justify-center gap-2 py-4 rounded-lg bg-muted font-medium text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone className="h-4 w-4" />
                  {city.phoneFormatted}
                </a>
                <a
                  href={city.telegramChannel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-4 rounded-lg bg-[#0088cc] text-white font-medium text-sm"
                  onClick={() => setIsOpen(false)}
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
