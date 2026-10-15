"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const KEY = "cookie-notice-accepted";

/** Небольшое уведомление об использовании cookie (152-ФЗ, политика конфиденциальности). */
export default function CookieNotice() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {
      setShow(true);
    }
  }, []);

  if (!show) return null;

  const accept = () => {
    try {
      localStorage.setItem(KEY, "1");
    } catch {
      /* приватный режим — просто скрываем */
    }
    setShow(false);
  };

  return (
    <div
      role="region"
      aria-label="Уведомление о cookie"
      className="fixed z-40 bottom-3 left-3 right-3 sm:right-auto sm:max-w-sm rounded-2xl border border-border bg-background/95 backdrop-blur shadow-lg p-3 sm:p-4 text-xs sm:text-sm"
    >
      <p className="text-muted-foreground leading-snug">
        Мы используем cookie, чтобы сайт работал корректно, и для статистики посещений. Продолжая пользоваться
        сайтом, вы соглашаетесь с{" "}
        <Link href="/privacy#cookie" className="text-primary hover:underline">
          политикой конфиденциальности
        </Link>
        .
      </p>
      <button
        type="button"
        onClick={accept}
        className="mt-2 sm:mt-3 w-full sm:w-auto px-5 py-1.5 sm:py-2 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
      >
        Понятно
      </button>
    </div>
  );
}
