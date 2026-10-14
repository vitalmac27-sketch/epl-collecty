// Товарный фид YML для Яндекса (Вебмастер → Товары и цены). Собирается при каждой сборке из тех же конфигов, что и сайт,
// поэтому цены в фиде всегда совпадают с ценами на страницах. В фид попадают только модели с ценой (не «Уточняйте»).
import fs from "fs";
import path from "path";
import { allModels } from "@/lib/models";
import { getProductConfig } from "@/lib/generated";
import { getConfigPrice } from "@/lib/product-configs";
import { ALL_CATEGORIES } from "@/lib/categories";
import { DEFAULT_CITY } from "@/lib/cities";
import { SELLER } from "@/lib/seller";
import { detectBrand } from "@/lib/schema";

export const dynamic = "force-static";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
const offerId = (s: string) => { let h = 5381; for (const ch of s) h = ((h * 33) ^ ch.charCodeAt(0)) >>> 0; return "e" + h.toString(36); };
const pad = (n: number) => String(n).padStart(2, "0");

export function GET() {
  const base = DEFAULT_CITY.siteUrl;
  const msk = new Date(Date.now() + 3 * 3600e3);
  const date = `${msk.getUTCFullYear()}-${pad(msk.getUTCMonth() + 1)}-${pad(msk.getUTCDate())}T${pad(msk.getUTCHours())}:${pad(msk.getUTCMinutes())}+03:00`;
  const catIds = new Map(ALL_CATEGORIES.map((c, i) => [c.slug, i + 1]));
  const imgDir = path.join(process.cwd(), "public", "feed-img");

  const offers: string[] = [];
  for (const m of allModels) {
    const cfg = getProductConfig(m.category, m.slug);
    if (!cfg || !catIds.has(m.category)) continue;
    const price = getConfigPrice(cfg, cfg.defaultStorage, cfg.defaultSim, cfg.defaultColor) ?? 0;
    if (!price) continue;
    const color = cfg.colors.find((c) => c.id === cfg.defaultColor);
    const storage = cfg.storage.find((s) => s.id === cfg.defaultStorage);
    const st = storage && !/^Стандарт$/i.test(storage.label) ? storage.label : "";
    const cl = color && color.hex !== "#888888" && !/^(Стандарт|Standard)$/i.test(color.name) ? color.name : "";
    const name = [m.name, st, cl].filter(Boolean).join(" ");
    const img = color?.image || m.image;
    const pic = fs.existsSync(path.join(imgDir, img + ".jpg")) ? `\n      <picture>${base}/feed-img/${esc(img)}.jpg</picture>` : "";
    const desc = (cfg.seoText || m.seoDescription || "").replace(/\s+/g, " ").trim().slice(0, 2900);
    const params = [
      st ? `\n      <param name="${esc(cfg.storageLabel || "Память")}">${esc(st)}</param>` : "",
      cl ? `\n      <param name="Цвет">${esc(cl)}</param>` : "",
      `\n      <param name="Гарантия">1 год</param>`,
    ].join("");
    offers.push(`    <offer id="${offerId(m.category + "/" + m.slug)}" available="true">
      <url>${base}/${m.category}/${m.slug}/</url>
      <price>${price}</price>
      <currencyId>RUR</currencyId>
      <categoryId>${catIds.get(m.category)}</categoryId>${pic}
      <store>true</store>
      <pickup>true</pickup>
      <delivery>true</delivery>
      <name>${esc(name)}</name>
      <vendor>${esc(detectBrand(m.name))}</vendor>
      <description>${esc(desc)}</description>
      <sales_notes>Рассрочка «Халва» до 36 мес. Гарантия 1 год</sales_notes>
      <manufacturer_warranty>true</manufacturer_warranty>${params}
    </offer>`);
  }

  const cats = ALL_CATEGORIES.map((c) => `      <category id="${catIds.get(c.slug)}">${esc(c.name)}</category>`).join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<yml_catalog date="${date}">
  <shop>
    <name>ЭПЛ-КОЛЛЕКЦИЯ</name>
    <company>${esc(SELLER.name)}</company>
    <url>${base}/</url>
    <currencies>
      <currency id="RUR" rate="1"/>
    </currencies>
    <categories>
${cats}
    </categories>
    <offers>
${offers.join("\n")}
    </offers>
  </shop>
</yml_catalog>
`;
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
