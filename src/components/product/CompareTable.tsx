import { type CompareRow } from "@/lib/product-configs";

interface Props {
  currentName: string;
  previousName: string;
  rows: CompareRow[];
}

export default function CompareTable({ currentName, previousName, rows }: Props) {
  if (!rows.length || !previousName) return null;
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-2">{currentName} vs {previousName}</h2>
      <p className="text-sm text-muted-foreground mb-5">Стоит ли переплачивать за новую модель?</p>
      <div className="rounded-2xl border border-border overflow-hidden">
        <div className="grid grid-cols-3 gap-4 px-5 py-3 bg-primary text-primary-foreground text-sm font-semibold">
          <span>Параметр</span>
          <span className="text-center">{currentName}</span>
          <span className="text-center text-primary-foreground/70">{previousName}</span>
        </div>
        {rows.map((row, i) => (
          <div
            key={row.label}
            className={`grid grid-cols-3 gap-4 px-5 py-3.5 text-sm items-center ${i % 2 === 0 ? "bg-muted/30" : "bg-card"}`}
          >
            <span className="text-muted-foreground">{row.label}</span>
            <span className={`text-center font-medium ${row.better ? "text-green-600 dark:text-green-400" : "text-foreground"}`}>
              {row.better && <span className="mr-1">⬆</span>}
              {row.current}
            </span>
            <span className="text-center text-muted-foreground">{row.previous}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
