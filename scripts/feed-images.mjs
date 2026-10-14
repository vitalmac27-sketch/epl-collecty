// Перед сборкой: картинки товаров в JPG для товарного фида (public/feed-img). Ошибки не ломают сборку.
import fs from "fs";
try {
  const sharp = (await import("sharp")).default;
  const src = "public/assets", dst = "public/feed-img";
  fs.mkdirSync(dst, { recursive: true });
  let n = 0;
  for (const f of fs.readdirSync(src).filter((x) => x.endsWith(".avif"))) {
    const out = dst + "/" + f.replace(/\.avif$/, ".jpg");
    if (fs.existsSync(out)) continue;
    try {
      await sharp(src + "/" + f).resize({ width: 600, height: 600, fit: "contain", background: "#ffffff" })
        .flatten({ background: "#ffffff" }).jpeg({ quality: 82 }).toFile(out);
      n++;
    } catch (e) { console.warn("feed-img: пропуск", f, e.message); }
  }
  console.log("feed-img: готово, новых картинок", n);
} catch (e) {
  console.warn("feed-img: sharp недоступен, фид будет без картинок —", e.message);
}
