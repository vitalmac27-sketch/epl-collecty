/** Автогенерация — индекс конфигов */
import type { ProductConfig } from "../product-configs";
import { getIphoneConfig } from "./iphone-configs";
import { getIpadConfig } from "./ipad-configs";
import { getMacbookConfig } from "./macbook-configs";

export { IPHONE_CONFIG_SLUGS } from "./iphone-configs";
export { IPAD_CONFIG_SLUGS } from "./ipad-configs";
export { MACBOOK_CONFIG_SLUGS } from "./macbook-configs";

export function getProductConfig(category: string, slug: string): ProductConfig | undefined {
  if (category === "iphone")  return getIphoneConfig(slug);
  if (category === "ipad")    return getIpadConfig(slug);
  if (category === "macbook") return getMacbookConfig(slug);
  return undefined;
}
