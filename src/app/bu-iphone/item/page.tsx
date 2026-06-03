"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { fetchBuListing, buPhotoUrl, type BuListing } from "@/lib/bu-api";
import { PROXY_URL } from "@/lib/proxy";

function BuItemContent() {
  const searchParams = useSearchParams();
  const slug = searchParams?.get("slug") || "";

  const [listing, setListing] = useState<BuListing | null>(null);
  const [loading, setLoading] = useState(true);
  const [activePhoto, setActivePhoto] = useState(0);

  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      return;
    }
    fetchBuListing(slug).then((data) => {
      setListing(data);
      setLoading(false);
    });
  }, [slug]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    if (!name || !contact) {
      setFormError("Заполните все поля");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch(PROXY_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          contact,
          model: `🔄 Б/У iPhone #${listing?.id}: ${listing?.title}`,
          storage: `АКБ ${listing?.battery ?? "?"}% · ${listing?.condition ?? "?"}`,
          condition: "used",
          battery: String(listing?.battery ?? ""),
          simType: listing?.sim_type ?? "",
          purchaseTiming: "today-tomorrow",
          paymentMethod: `${listing?.price.toLocaleString("ru-RU")} ₽`,
        }),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setFormError("Не удалось отправить. Напишите нам в Telegram напрямую.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-16 text-center">
        <div className="inline-block w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mb-3" />
        <p className="text-muted-foreground">Загружаем карточку...</p>
      </div>
    );
  }

  if (!listing) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-16 text-center">
        <p className="text-4xl mb-3">😔</p>
        <h1 className="text-2xl font-bold mb-2">Объявление не найдено</h1>
        <p className="text-muted-foreground mb-6">
          Возможно его уже продали или сняли с публикации.
        </p>
        <Link href="/bu-iphone"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
          ← К каталогу б/у iPhone
        </Link>
      </div>
    );
  }

  const photos = listing.photos || [];
  const isReserved = listing.status === "reserved";

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-primary">Главная</Link>
        <span className="mx-2">/</span>
        <Link href="/bu-iphone" className="hover:text-primary">Б/У iPhone</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{listing.title}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Галерея */}
        <div>
          <div className="aspect-square rounded-2xl bg-muted/30 overflow-hidden mb-3 relative">
            {photos.length > 0 ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={buPhotoUrl(photos[activePhoto])}
                alt={`${listing.title} — фото ${activePhoto + 1}`}
                className="w-full h-full object-contain"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-6xl">📱</div>
            )}
            <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-green-600 text-white text-sm font-semibold">
              Б/У
            </div>
            {isReserved && (
              <div className="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-amber-500 text-white text-sm font-semibold">
                🟡 В резерве
              </div>
            )}
          </div>

          {photos.length > 1 && (
            <div className="grid grid-cols-6 gap-2">
              {photos.slice(0, 6).map((p, i) => (
                <button
                  key={i}
                  onClick={() => setActivePhoto(i)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                    i === activePhoto ? "border-primary" : "border-transparent hover:border-border"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={buPhotoUrl(p)} alt={`Фото ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Инфо */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2 leading-tight">
            {listing.title}
          </h1>
          <p className="text-sm text-muted-foreground mb-4">
            ID: {listing.id} · Б/У с гарантией 60 дней
          </p>

          <div className="mb-6">
            <div className="text-4xl font-bold text-primary mb-1">
              {listing.price.toLocaleString("ru-RU")} ₽
            </div>
            <p className="text-sm text-muted-foreground">
              или в рассрочку 0% — от {Math.round(listing.price / 12).toLocaleString("ru-RU")} ₽/мес
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-6">
            {[
              { icon: "📱", label: "Модель", value: listing.model },
              { icon: "💾", label: "Память", value: listing.storage },
              { icon: "🎨", label: "Цвет", value: listing.color },
              { icon: "📶", label: "Sim", value: listing.sim_type },
              { icon: "🔋", label: "АКБ", value: listing.battery ? `${listing.battery}%` : null },
              { icon: "🔄", label: "Циклов", value: listing.cycles?.toString() },
              { icon: "✨", label: "Состояние", value: listing.condition },
            ]
              .filter((s) => s.value)
              .map(({ icon, label, value }) => (
                <div key={label} className="flex items-start gap-2 p-3 rounded-xl bg-muted/40 border border-border">
                  <span className="text-lg shrink-0">{icon}</span>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">{label}</p>
                    <p className="font-semibold text-sm">{value}</p>
                  </div>
                </div>
              ))}
          </div>

          {!isReserved ? (
            <button
              onClick={() => setShowForm(true)}
              className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-base hover:opacity-90 transition-opacity mb-3"
            >
              🛒 Купить · {listing.price.toLocaleString("ru-RU")} ₽
            </button>
          ) : (
            <div className="w-full py-3.5 rounded-xl bg-amber-100 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-800 text-amber-800 dark:text-amber-300 font-semibold text-center mb-3">
              🟡 Этот iPhone в резерве. Напишите нам — возможно скоро освободится.
            </div>
          )}
          <a href="https://t.me/ac_care" target="_blank" rel="noopener noreferrer"
            className="block w-full py-3.5 rounded-xl border-2 border-primary text-primary font-semibold text-center hover:bg-primary/5 transition-colors">
            ✈️ Задать вопрос в Telegram
          </a>
        </div>
      </div>

      {listing.description && (
        <div className="mb-8 p-5 rounded-2xl border border-border bg-card">
          <h2 className="text-lg font-bold mb-3">📝 Описание</h2>
          <p className="text-sm whitespace-pre-line text-muted-foreground">
            {listing.description}
          </p>
        </div>
      )}

      <div className="grid sm:grid-cols-3 gap-3 mb-8">
        {[
          { icon: "🛡️", title: "Гарантия 60 дней", text: "Меняем или ремонтируем при поломке" },
          { icon: "📦", title: "Доставка", text: "По Казани в день заказа · Avito Доставка по РФ" },
          { icon: "💳", title: "Оплата", text: "Наличные · По QR · Рассрочка 0%" },
        ].map(({ icon, title, text }) => (
          <div key={title} className="flex items-start gap-3 p-4 rounded-2xl border border-border bg-muted/30">
            <span className="text-2xl shrink-0">{icon}</span>
            <div>
              <p className="font-semibold text-sm">{title}</p>
              <p className="text-xs text-muted-foreground">{text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-6 border-t border-border">
        <p className="text-sm font-semibold text-muted-foreground mb-3">Смотрите также:</p>
        <div className="flex flex-wrap gap-2">
          {[
            { href: "/bu-iphone", label: "Все б/у iPhone" },
            { href: "/iphone", label: "Новые iPhone" },
            { href: "/skupka-iphone", label: "Продать iPhone" },
            { href: "/blog/kak-proverit-bu-iphone-pered-pokupkoy", label: "Как проверить б/у" },
          ].map(({ href, label }) => (
            <Link key={href} href={href}
              className="text-sm px-3 py-1.5 rounded-lg border border-border hover:border-primary hover:text-primary transition-colors">
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* Модалка формы */}
      {showForm && !submitted && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-end sm:items-center justify-center p-0 sm:p-4"
             onClick={() => setShowForm(false)}>
          <div className="bg-background rounded-t-3xl sm:rounded-3xl border border-border max-w-md w-full p-6 max-h-[90vh] overflow-y-auto"
               onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold">Купить б/у iPhone</h3>
              <button onClick={() => setShowForm(false)}
                className="text-muted-foreground hover:text-foreground text-2xl leading-none">×</button>
            </div>

            <div className="mb-4 p-3 rounded-xl bg-muted/40 border border-border text-sm">
              <p className="font-semibold">{listing.title}</p>
              <p className="text-muted-foreground">
                {listing.battery && `АКБ ${listing.battery}% · `}
                {listing.condition} · {listing.price.toLocaleString("ru-RU")} ₽
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-sm font-medium mb-1">Ваше имя *</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                  placeholder="Максим"
                  className="w-full px-3 py-2.5 border border-border rounded-xl bg-background focus:outline-none focus:border-primary text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Телефон или Telegram *</label>
                <input type="text" value={contact} onChange={(e) => setContact(e.target.value)}
                  placeholder="+7 (999) 123-45-67 или @username"
                  className="w-full px-3 py-2.5 border border-border rounded-xl bg-background focus:outline-none focus:border-primary text-sm" />
              </div>
              {formError && (
                <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 text-sm text-red-700 dark:text-red-400">
                  {formError}
                </div>
              )}
              <button type="submit" disabled={submitting}
                className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 disabled:opacity-50">
                {submitting ? "Отправляем..." : "Отправить заявку"}
              </button>
              <p className="text-xs text-muted-foreground text-center">
                Менеджер свяжется в течение 15 минут (Пн–Вс 13:00–20:00)
              </p>
            </form>
          </div>
        </div>
      )}

      {submitted && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-end sm:items-center justify-center p-0 sm:p-4"
             onClick={() => { setShowForm(false); setSubmitted(false); }}>
          <div className="bg-background rounded-t-3xl sm:rounded-3xl border border-border max-w-md w-full p-6 text-center"
               onClick={(e) => e.stopPropagation()}>
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Заявка отправлена!</h3>
            <p className="text-muted-foreground mb-4">
              Менеджер свяжется с вами в течение 15 минут.
            </p>
            <a href="https://t.me/ac_care" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold">
              ✈️ Написать сейчас в Telegram
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default function BuItemPage() {
  return (
    <Suspense fallback={
      <div className="max-w-5xl mx-auto px-4 py-16 text-center">
        <div className="inline-block w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <BuItemContent />
    </Suspense>
  );
}
