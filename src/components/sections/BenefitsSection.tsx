import { Shield, Zap, CheckCircle, TrendingUp, BadgePercent } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  { Icon: Shield,       title: "Гарантия до 1 года",  desc: "Новые — 1 год, б/у — 60 дней" },
  { Icon: Zap,          title: "Быстрая доставка",    desc: "В день заказа по всей Казани" },
  { Icon: CheckCircle,  title: "Проверка при получении", desc: "Убедитесь в качестве сами" },
  { Icon: TrendingUp,   title: "Trade-in",            desc: "Обменяйте старый на новый" },
  { Icon: BadgePercent, title: "Выгода до 30%",       desc: "Дешевле М.Видео и DNS" },
];

export default function BenefitsSection() {
  return (
    <section aria-label="Преимущества магазина">
      <h2 className="text-2xl font-bold text-center mb-8">
        Почему выбирают ЭПЛ-КОЛЛЕКЦИЯ?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {benefits.map(({ Icon, title, desc }, i) => (
          <Card
            key={title}
            className="p-6 text-center card-glow hover:border-primary/30 transition-all"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 mb-4">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-1 text-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground">{desc}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
