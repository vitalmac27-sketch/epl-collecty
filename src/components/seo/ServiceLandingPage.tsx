import Link from "next/link";
import type { CityConfig } from "@/lib/cities";
import { buildBreadcrumbSchema, buildFAQSchema } from "@/lib/schema";

type Step = { title: string; text: string };
type Benefit = { title: string; text: string };
type Faq = { question: string; answer: string };

export interface ServiceLandingPageProps {
  city: CityConfig;
  path: string;
  title: string;
  intro: string;
  badge: string;
  benefits: Benefit[];
  steps: Step[];
  faqs: Faq[];
  notes: string[];
  ctaLabel: string;
  ctaHref?: string;
}

export default function ServiceLandingPage({
  city,
  path,
  title,
  intro,
  badge,
  benefits,
  steps,
  faqs,
  notes,
  ctaLabel,
  ctaHref = "#contact",
}: ServiceLandingPageProps) {
  const breadcrumbs = buildBreadcrumbSchema([
    { name: "Главная", url: city.siteUrl },
    { name: title, url: `${city.siteUrl}${path}` },
  ]);
  const faqSchema = buildFAQSchema(faqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">
        <nav aria-label="Хлебные крошки" className="mb-8 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary">Главная</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground font-medium">{title}</span>
        </nav>

        <header className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-background p-6 md:p-10 mb-12">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-3">{badge}</p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-5">{title}</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-7">{intro}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href={ctaHref} className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3.5 font-semibold text-primary-foreground hover:opacity-90 transition-opacity">
              {ctaLabel}
            </Link>
            <a href={`tel:${city.phone}`} className="inline-flex items-center justify-center rounded-xl border border-border px-6 py-3.5 font-semibold hover:bg-muted transition-colors">
              {city.phoneFormatted}
            </a>
          </div>
        </header>

        <section className="mb-12" aria-labelledby="benefits-heading">
          <h2 id="benefits-heading" className="text-2xl md:text-3xl font-bold mb-6">Условия покупки в ЭПЛ-КОЛЛЕКЦИЯ</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <article key={benefit.title} className="rounded-2xl border border-border bg-card p-5">
                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-12" aria-labelledby="steps-heading">
          <h2 id="steps-heading" className="text-2xl md:text-3xl font-bold mb-6">Как оформить покупку</h2>
          <ol className="grid gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step.title} className="rounded-2xl border border-border bg-card p-5">
                <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">{index + 1}</span>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-12 rounded-2xl border border-border bg-card p-6 md:p-8" aria-labelledby="notes-heading">
          <h2 id="notes-heading" className="text-2xl font-bold mb-4">Что важно знать</h2>
          <ul className="space-y-3 text-muted-foreground list-disc pl-5">
            {notes.map((note) => <li key={note}>{note}</li>)}
          </ul>
        </section>

        <section className="mb-12" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="text-2xl md:text-3xl font-bold mb-6">Частые вопросы</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="rounded-2xl border border-border bg-card p-5">
                <summary className="cursor-pointer font-semibold">{faq.question}</summary>
                <p className="mt-3 text-muted-foreground">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="contact" className="rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-3">Поможем выбрать iPhone в Казани</h2>
          <p className="text-muted-foreground mb-5">Позвоните нам или напишите в Telegram. Менеджер уточнит наличие модели, актуальную цену и условия оформления.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={`tel:${city.phone}`} className="inline-flex justify-center rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground hover:opacity-90">Позвонить {city.phoneFormatted}</a>
            <a href={city.telegram} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center rounded-xl border border-border px-5 py-3 font-semibold hover:bg-muted">Написать в Telegram</a>
            <Link href="/iphone" className="inline-flex justify-center rounded-xl border border-border px-5 py-3 font-semibold hover:bg-muted">Смотреть каталог iPhone</Link>
          </div>
          <p className="mt-5 text-sm text-muted-foreground">Магазин: г. {city.name}, {city.address}. {city.hours}. {city.metroNote}.</p>
        </section>
      </div>
    </>
  );
}
