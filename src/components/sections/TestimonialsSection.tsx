import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const testimonials = [
  { name: "Камилла Минеева",  date: "1 августа",   product: "iPhone 16, 128 GB",      text: "Прекрасный, честный продавец! Договорились быстро, расположение удобное.", rating: 5 },
  { name: "Лейли",            date: "29 июля",     product: "iPhone 16 Pro, 256GB",   text: "Отличный магазин, удобный светлый офис. Есть оплата как наличными, так и переводом.", rating: 5 },
  { name: "Makar Nikolaevich",date: "8 августа",   product: "iPhone 15 Pro Max, 256GB",text: "Купил 15 Pro Max! Качество на высоте! Продавец отвечает моментально! Респект!", rating: 5 },
  { name: "Светлана",         date: "11 августа",  product: "iPhone 16 Pro Max, 256GB",text: "Легко договорились, в удобное время. Всё как в описании, даже подобрали нужный цвет.", rating: 5 },
  { name: "Тимур",            date: "3 октября",   product: "iPhone 16 Pro, 256GB",   text: "Телефон полностью как описание. Дали протестировать, плюс чехол в подарок.", rating: 5 },
  { name: "Наталья",          date: "8 октября",   product: "iPhone 16 Pro, 256GB",   text: "Отличный магазин 🔥 большой выбор, вежливый консультант! Пришла — увидела — купила 😍", rating: 5 },
];

const avatarColors = [
  "bg-blue-500","bg-emerald-500","bg-violet-500",
  "bg-rose-500","bg-amber-500","bg-cyan-500",
];

export default function TestimonialsSection() {
  return (
    <section aria-label="Отзывы клиентов">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Отзывы наших клиентов</h2>
        <div className="flex items-center justify-center gap-2 mb-1">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="text-xl font-bold">5,0</span>
        </div>
        <p className="text-muted-foreground text-sm">На основании 315+ отзывов реальных покупателей</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {testimonials.map((t, i) => (
          <Card key={i} className="p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${avatarColors[i % avatarColors.length]} flex items-center justify-center text-white font-bold flex-shrink-0`}>
                  {t.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.date}</p>
                </div>
              </div>
              <div className="flex">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            <p className="text-xs font-medium text-primary mb-2">{t.product}</p>
            <p className="text-sm text-foreground leading-relaxed">{t.text}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
