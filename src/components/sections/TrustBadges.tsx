import { Shield, CheckCircle, Users, CreditCard } from "lucide-react";

const badges = [
  { Icon: Shield,      text: "Официальная гарантия" },
  { Icon: CheckCircle, text: "Проверка при получении" },
  { Icon: Users,       text: "2 000+ довольных клиентов" },
  { Icon: CreditCard,  text: "Оплата частями, без переплат" },
];

export default function TrustBadges() {
  return (
    <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-center gap-2 md:gap-4 animate-fade-in">
      {badges.map(({ Icon, text }) => (
        <div
          key={text}
          className="group flex items-center gap-2 md:gap-3 px-3 md:px-5 py-2 md:py-3 rounded-xl bg-background/60 border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
        >
          <div className="p-1 md:p-1.5 rounded-lg bg-primary/10 group-hover:bg-primary/15 transition-colors flex-shrink-0">
            <Icon className="w-3 h-3 md:w-4 md:h-4 text-primary" />
          </div>
          <span className="text-[10px] md:text-sm font-light text-foreground/80 group-hover:text-foreground transition-colors leading-tight">
            {text}
          </span>
        </div>
      ))}
    </div>
  );
}
