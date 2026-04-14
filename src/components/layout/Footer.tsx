import Link from "next/link";
import { MapPin, Phone, Clock } from "lucide-react";
import { DEFAULT_CITY } from "@/lib/cities";
import { ALL_CATEGORIES } from "@/lib/categories";
import { getNavModels, getModelUrl } from "@/lib/models";

const city = DEFAULT_CITY;

export default function Footer() {
  // Показываем Apple-категории в футере (iphone, ipad, macbook, watch)
  const featuredCategories = ALL_CATEGORIES.filter((c) =>
    ["iphone", "ipad", "macbook", "watch"].includes(c.slug)
  );

  return (
    <footer className="border-t border-border bg-muted/30 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* ── Колонка 1: О магазине ── */}
          <div>
            <h3 className="font-bold text-base mb-4">ЭПЛ-КОЛЛЕКЦИЯ</h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Официальный магазин iPhone в Казани. Продаём оригинальные устройства
              Apple с гарантией до 1 года по выгодным ценам.
            </p>
            {/* Социальные сети */}
            <div className="flex gap-3">
              <a
                href={city.telegramChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Telegram"
              >
                <TelegramIcon className="w-5 h-5" />
              </a>
              <a
                href={city.vk}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="ВКонтакте"
              >
                <VkIcon className="w-5 h-5" />
              </a>
              <a
                href={city.avito}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Авито"
              >
                <AvitoIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* ── Колонка 2: Каталог по категориям ── */}
          <div>
            <h3 className="font-bold text-base mb-4">Каталог</h3>
            <nav aria-label="Каталог по категориям">
              <ul className="space-y-3">
                {featuredCategories.map((cat) => {
                  const topModels = getNavModels(cat.slug).slice(0, 2);
                  return (
                    <li key={cat.slug}>
                      <Link
                        href={`/${cat.slug}`}
                        className="text-sm font-semibold text-foreground hover:text-primary transition-colors flex items-center gap-1.5"
                      >
                        <span>{cat.emoji}</span> {cat.name}
                      </Link>
                      <ul className="mt-1 ml-5 space-y-1">
                        {topModels.map((model) => (
                          <li key={model.slug}>
                            <Link
                              href={getModelUrl(model)}
                              className="text-xs text-muted-foreground hover:text-primary transition-colors"
                            >
                              {model.name}
                              {model.badge && (
                                <span className="ml-1 text-[10px] bg-primary/10 text-primary px-1 rounded">
                                  {model.badge}
                                </span>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                })}
                {/* Android и PlayStation */}
                {ALL_CATEGORIES.filter((c) => ["android", "playstation"].includes(c.slug)).map((cat) => (
                  <li key={cat.slug}>
                    <Link
                      href={`/${cat.slug}`}
                      className="text-sm font-semibold text-foreground hover:text-primary transition-colors flex items-center gap-1.5"
                    >
                      <span>{cat.emoji}</span> {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* ── Колонка 3: Покупателям ── */}
          <div>
            <h3 className="font-bold text-base mb-4">Покупателям</h3>
            <nav aria-label="Информация для покупателей">
              <ul className="space-y-2">
                {[
                  { href: "/#calculator-section", label: "Подобрать iPhone" },
                  { href: "/about", label: "О магазине" },
                  { href: "/contacts", label: "Контакты" },
                  { href: "/offer", label: "Публичная оферта" },
                  { href: "/privacy", label: "Политика конфиденциальности" },
                  { href: "/legal", label: "Правовая информация" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* ── Колонка 4: Контакты ── */}
          <div>
            <h3 className="font-bold text-base mb-4">Контакты</h3>
            <address className="not-italic space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">г. Казань,</span>{" "}
                  {city.address}
                  <br />
                  <span className="text-xs">{city.metroNote}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href={`tel:${city.phone}`}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {city.phoneFormatted}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  {city.hours}
                </span>
              </div>
            </address>

            {/* CTA */}
            <a
              href={city.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <TelegramIcon className="w-4 h-4" />
              Написать в Telegram
            </a>
          </div>
        </div>

        {/* ── Нижняя строка ── */}
        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} ЭПЛ-КОЛЛЕКЦИЯ. Все права защищены.</p>
          <p>
            Магазин iPhone в Казани — купить айфон выгодно с гарантией до 1 года
          </p>
        </div>
      </div>
    </footer>
  );
}

// ── SVG иконки ───────────────────────────────────────────────────────────────
function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

function VkIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.391 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.12-5.339-3.202-2.17-3.058-2.763-5.35-2.763-5.814 0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.678.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.27-1.422 2.17-3.624 2.17-3.624.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z" />
    </svg>
  );
}

function AvitoIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
      <path d="M208 28H48A20 20 0 0 0 28 48v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20zm-4 176H52V52h152zM76 100a24 24 0 1 1 24 24 24 24 0 0 1-24-24zm28 0a4 4 0 1 0-4 4 4 4 0 0 0 4-4zm76-24a24 24 0 1 1-24 24 24 24 0 0 1 24-24zm0 40a16 16 0 1 0-16-16 16 16 0 0 0 16 16zm-52 20a24 24 0 1 1-24 24 24 24 0 0 1 24-24zm0 40a16 16 0 1 0-16-16 16 16 0 0 0 16 16z" />
    </svg>
  );
}
