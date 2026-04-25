/** Автогенерация — индекс конфигов всех категорий */
import type { ProductConfig } from "../product-configs";
import { getIphoneConfig }  from "./iphone-configs";
import { getIpadConfig }    from "./ipad-configs";
import { getMacbookConfig } from "./macbook-configs";
import { getWatchConfig }   from "./watch-configs";
import { getAirpodsConfig } from "./airpods-configs";
import { getAndroidConfig } from "./android-configs";
import { getDysonConfig }   from "./dyson-configs";
import { getAudioConfig }   from "./audio-configs";
import { getPlaystationConfig } from "./playstation-configs";

export { IPHONE_CONFIG_SLUGS }  from "./iphone-configs";
export { IPAD_CONFIG_SLUGS }    from "./ipad-configs";
export { MACBOOK_CONFIG_SLUGS } from "./macbook-configs";
export { WATCH_CONFIG_SLUGS }   from "./watch-configs";
export { AIRPODS_CONFIG_SLUGS } from "./airpods-configs";
export { ANDROID_CONFIG_SLUGS } from "./android-configs";
export { DYSON_CONFIG_SLUGS }   from "./dyson-configs";
export { AUDIO_CONFIG_SLUGS }   from "./audio-configs";
export { PLAYSTATION_CONFIG_SLUGS } from "./playstation-configs";

export function getProductConfig(category: string, slug: string): ProductConfig | undefined {
  if (category === "iphone")  return getIphoneConfig(slug);
  if (category === "ipad")    return getIpadConfig(slug);
  if (category === "macbook") return getMacbookConfig(slug);
  if (category === "watch")   return getWatchConfig(slug);
  if (category === "airpods") return getAirpodsConfig(slug);
  if (category === "android") return getAndroidConfig(slug);
  if (category === "dyson")   return getDysonConfig(slug);
  if (category === "audio")   return getAudioConfig(slug);
  if (category === "playstation") return getPlaystationConfig(slug);
  return undefined;
}
