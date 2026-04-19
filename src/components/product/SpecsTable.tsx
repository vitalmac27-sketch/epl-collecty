import { type SpecRow } from "@/lib/iphone-configs";

interface Props {
  specs: SpecRow[];
  modelName: string;
}

export default function SpecsTable({ specs, modelName }: Props) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-5">
        Характеристики {modelName}
      </h2>
      <div className="rounded-2xl border border-border overflow-hidden">
        {specs.map((row, i) => (
          <div
            key={row.label}
            className={`flex gap-4 px-5 py-3.5 text-sm ${
              i % 2 === 0 ? "bg-muted/30" : "bg-card"
            }`}
          >
            <span className="text-muted-foreground min-w-[160px] shrink-0">
              {row.label}
            </span>
            <span className="font-medium text-foreground">{row.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
