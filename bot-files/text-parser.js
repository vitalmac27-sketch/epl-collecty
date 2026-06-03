// text-parser.js — распознаёт характеристики iPhone из произвольного текста

const COLORS = [
  // iPhone 17 Pro / Pro Max
  'Silver', 'Cosmic Orange', 'Deep Blue',
  // iPhone 17 / 17 Air
  'Black', 'Sage', 'Mist Blue', 'Lavender', 'White',
  // iPhone 16 Pro / Pro Max — Titanium
  'Natural Titanium', 'Blue Titanium', 'White Titanium', 'Black Titanium', 'Desert Titanium',
  // iPhone 16 / 16 Plus / 16e
  'Ultramarine', 'Teal', 'Pink',
  // iPhone 15 / 15 Plus
  'Yellow', 'Green', 'Orange',
  // iPhone 14 / 13
  'Midnight', 'Starlight', 'Red', 'Purple', 'Alpine Green', 'Sierra Blue',
  // Базовые
  'Gold', 'Graphite', 'Blue',
];

COLORS.sort((a, b) => b.length - a.length);

const STORAGES_NUMERIC = [64, 128, 256, 512, 1024];

export function parseListingText(text) {
  if (!text || typeof text !== 'string') {
    return { errors: ['Пустой текст'] };
  }

  const original = text;
  const errors = [];

  // === МОДЕЛЬ ===
  let model = null;
  let modelMatchText = null;
  const modelMatch = text.match(/iphone\s*(\d{1,2})\s*(pro\s*max|pro|plus|mini|air|e)?/i);
  if (modelMatch) {
    const num = modelMatch[1];
    const variant = (modelMatch[2] || '').trim().toLowerCase().replace(/\s+/g, ' ');
    if (variant === 'pro max') model = `iPhone ${num} Pro Max`;
    else if (variant === 'pro') model = `iPhone ${num} Pro`;
    else if (variant === 'plus') model = `iPhone ${num} Plus`;
    else if (variant === 'mini') model = `iPhone ${num} mini`;
    else if (variant === 'air') model = `iPhone ${num} Air`;
    else if (variant === 'e') model = `iPhone ${num}e`;
    else model = `iPhone ${num}`;
    modelMatchText = modelMatch[0];
  } else {
    errors.push('Не указана модель iPhone');
  }

  // === ПАМЯТЬ ===
  let storage = null;
  let storageMatchText = null;
  // Сначала ищем с явным указанием единиц
  const storageMatch = text.match(/(\d{2,4})\s*(гб|gb|тб|tb)(?![а-яёa-z0-9])/i);
  if (storageMatch) {
    const num = parseInt(storageMatch[1]);
    const isTB = /т/i.test(storageMatch[2]) || /tb/i.test(storageMatch[2]);
    storage = isTB ? `${num} ТБ` : `${num} ГБ`;
    storageMatchText = storageMatch[0];
  } else {
    // Без единиц — число сразу после модели
    const altStorage = text.match(/iphone\s*\d+\s*(?:pro\s*max|pro|plus|mini|air|e)?\s+(\d{2,4})\b/i);
    if (altStorage) {
      const num = parseInt(altStorage[1]);
      if (STORAGES_NUMERIC.includes(num)) {
        storage = num === 1024 ? `1 ТБ` : `${num} ГБ`;
        storageMatchText = altStorage[1];
      }
    }
  }
  if (!storage) errors.push('Не указан объём памяти (например: 256 ГБ)');

  // === ЦВЕТ ===
  let color = null;
  for (const c of COLORS) {
    const re = new RegExp(`\\b${c.replace(/\s+/g, '\\s+')}\\b`, 'i');
    if (re.test(text)) {
      color = c;
      break;
    }
  }

  // === SIM ===
  let simType = null;
  if (/sim\s*\+\s*esim|sim\+esim/i.test(text)) simType = 'Sim+eSim';
  else if (/dual\s*sim/i.test(text)) simType = 'Dual Sim';
  else if (/\besim\b/i.test(text)) simType = 'eSim';
  else if (/\bsim\b/i.test(text)) simType = 'Sim';

  // === АКБ % ===
  let battery = null;
  const batteryMatch = text.match(/(?:акб|аккумулятор|battery|емкост[ьи]|батаре[яи])\D{0,15}(\d{2,3})\s*%/i);
  if (batteryMatch) {
    const val = parseInt(batteryMatch[1]);
    if (val >= 50 && val <= 100) battery = val;
  }
  if (!battery) {
    // Любое NN% в диапазоне 80-100 — почти точно АКБ
    const altBat = text.match(/(\d{2,3})\s*%/);
    if (altBat) {
      const val = parseInt(altBat[1]);
      if (val >= 80 && val <= 100) battery = val;
    }
  }

  // === ЦИКЛЫ ===
  let cycles = null;
  const cyclesMatch = text.match(/(\d{1,4})\s*цикл/i);
  if (cyclesMatch) cycles = parseInt(cyclesMatch[1]);

  // === СОСТОЯНИЕ ===
  let condition = null;
  if (/идеал/i.test(text)) condition = 'Идеальное';
  else if (/отличн/i.test(text)) condition = 'Отличное';
  else if (/хорош/i.test(text)) condition = 'Хорошее';
  else if (/\bнов[ыйаяое]\b/i.test(text) && !/новост/i.test(text)) condition = 'Новый';

  // === ЦЕНА ===
  // Сначала чистим текст от того что точно не цена: модель, память
  let priceSearchText = original;
  if (modelMatchText) priceSearchText = priceSearchText.replace(new RegExp(modelMatchText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'), ' ');
  if (storageMatchText) priceSearchText = priceSearchText.replace(new RegExp(storageMatchText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'), ' ');

  let price = null;
  const priceCandidates = [];

  // 1. Явное указание "цена X"
  const explicitPrice = priceSearchText.match(/цена[:\s]+(\d{2,3}[\s\.]?\d{3})/i);
  if (explicitPrice) {
    const num = parseInt(explicitPrice[1].replace(/[\s\.]/g, ''));
    if (num >= 10000 && num <= 300000) priceCandidates.push({ num, score: 100 });
  }

  // 2. Число + ₽ или руб
  const withCurrency = [...priceSearchText.matchAll(/(\d{2,3}[\s\.]?\d{3})\s*(?:₽|руб|р\.)/gi)];
  for (const m of withCurrency) {
    const num = parseInt(m[1].replace(/[\s\.]/g, ''));
    if (num >= 10000 && num <= 300000) priceCandidates.push({ num, score: 50 });
  }

  // 3. Все большие числа в подходящем диапазоне
  const allNumbers = [...priceSearchText.matchAll(/\b(\d{4,6})\b/g)];
  for (const m of allNumbers) {
    const numStr = m[0];
    const num = parseInt(numStr);
    // Цена обычно от 15 000 до 200 000 ₽
    if (num >= 15000 && num <= 250000) {
      priceCandidates.push({ num, score: 10 });
    }
  }

  // Также пробуем числа с пробелами: "101 900"
  const numbersWithSpace = [...priceSearchText.matchAll(/\b(\d{2,3})\s+(\d{3})\b/g)];
  for (const m of numbersWithSpace) {
    const num = parseInt(m[1] + m[2]);
    if (num >= 15000 && num <= 250000) {
      priceCandidates.push({ num, score: 30 });
    }
  }

  if (priceCandidates.length > 0) {
    // Группируем дубликаты, суммируем score
    const grouped = new Map();
    for (const { num, score } of priceCandidates) {
      grouped.set(num, (grouped.get(num) || 0) + score);
    }
    const entries = [...grouped.entries()].sort((a, b) => b[1] - a[1] || b[0] - a[0]);
    price = entries[0][0];
  } else {
    errors.push('Не указана цена');
  }

  // === ОПИСАНИЕ ===
  let description = original;

  // Удаляем распознанные блоки
  if (modelMatchText) description = description.replace(new RegExp(modelMatchText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'), '');
  if (storageMatchText) description = description.replace(new RegExp(`\\b${storageMatchText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi'), '');
  description = description.replace(/\d{2,4}\s*(?:гб|gb|тб|tb)(?![а-яёa-z0-9])/gi, '');
  description = description.replace(/(?:акб|аккумулятор|battery|емкост[ьи]|батаре[яи])\D{0,15}\d{2,3}\s*%/gi, '');
  description = description.replace(/\b\d{2,3}\s*%/g, '');
  description = description.replace(/(?:всего\s+)?\d{1,4}\s*цикл[а-яё]*/gi, '');
  description = description.replace(/sim\s*\+\s*esim|dual\s*sim|\besim\b|\bsim\b/gi, '');
  // Слово состояния вырезаем ТОЛЬКО если оно стоит отдельной строкой
  // (формат /add). В связном предложении ("Состояние идеальное, ...") — оставляем.
  description = description.replace(/^[\s🔥]*(?:идеальн[а-яё]*|идеал|отличн[а-яё]*|хорош[а-яё]*)[\s.,!]*$/gim, '');
  description = description.replace(/цена[:\s]*/gi, '');

  if (price) {
    const p = String(price);
    // Удаляем число с пробелом или без (не трогая переносы строк)
    description = description.replace(new RegExp(`\\b${p}\\b[ \\t]*(?:₽|руб|р\\.)?`, 'gi'), '');
    if (p.length >= 5) {
      const withSpace = `${p.slice(0, p.length - 3)}[ \\t]*${p.slice(p.length - 3)}`;
      description = description.replace(new RegExp(`\\b${withSpace}\\b[ \\t]*(?:₽|руб|р\\.)?`, 'gi'), '');
    }
  }

  if (color) {
    description = description.replace(new RegExp(`\\b${color.replace(/\s+/g, '\\s+')}\\b`, 'gi'), '');
  }

  // Чистим: пустые скобки, отдельные знаки препинания
  description = description.replace(/\(\s*\)/g, '');
  description = description.replace(/\[\s*\]/g, '');

  // Чистим артефакты после вырезания распознанных блоков (в пределах строки)
  description = description.replace(/[ \t]{2,}/g, ' ');           // двойные пробелы → один
  description = description.replace(/[ \t]+([,.;:!?])/g, '$1');    // пробел перед знаком
  description = description.replace(/(?:[ \t]*[,.;:][ \t]*){2,}/g, '. '); // слипшиеся знаки → '. '

  // Построчная чистка с сохранением абзацев (пустые строки = разделители)
  const _kept = [];
  for (const raw of description.split('\n')) {
    let line = raw.trim();
    // Срезаем висячие запятые/точки с запятой/двоеточия в конце строки
    line = line.replace(/[\s,;]+$/u, '');
    if (line === '') {
      // пустую строку держим как разделитель абзаца, но не дублируем
      if (_kept.length && _kept[_kept.length - 1] !== '') _kept.push('');
      continue;
    }
    // Отбрасываем строки-огрызки из знаков препинания / эмодзи (мало букв)
    const lettersOnly = line.replace(/[^\p{L}\p{N}]/gu, '');
    if (lettersOnly.length < 3) continue;
    // Строка ровно из одного слова-состояния — отбрасываем
    if (/^[\s🔥]*(?:идеальн[а-яё]*|идеал|отличн[а-яё]*|хорош[а-яё]*)[\s.,!]*$/iu.test(line)) continue;
    // Строка-огрызок «📱 Оригинальный» (модель/память/цвет уже вырезаны) — отбрасываем
    if (/^[\s📱🔋✨]*оригинальн[а-яё]*[\s.,!]*$/iu.test(line)) continue;
    // Лишний заголовок «Характеристики:» (реальные характеристики уже в полях карточки)
    if (/^[\s📋]*характеристик[аи][\s.:!]*$/iu.test(line)) continue;
    _kept.push(line);
  }
  // Убираем пустые строки по краям
  while (_kept.length && _kept[0] === '') _kept.shift();
  while (_kept.length && _kept[_kept.length - 1] === '') _kept.pop();
  description = _kept.join('\n');

  return {
    model,
    storage,
    color,
    simType,
    battery,
    cycles,
    condition,
    price,
    description: description || null,
    errors,
  };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const tests = [
    `iPhone 17 Pro 512 Orange Sim+eSim
АКБ 100%, 35 циклов
Идеал
101900
В комплекте коробка и кабель`,

    `iPhone 16 Pro Max 256 Natural Titanium АКБ 95% идеал 87000 ₽`,

    `📱 Оригинальный iPhone 17 Pro 512GB Orange (Sim+eSim)
🔥 Состояние идеальное, без царапин и дефектов
🔋 Батарея: 100%, 35 цикл
Цена: 101 900 ₽
Активирован: апрель 2026`,

    `iPhone 15 256 Pink идеал АКБ 100% 47000
Куплен в августе, был в чехле, есть коробка`,

    `iPhone 14 Pro Max 256 Deep Purple
АКБ 88%
Хорошее, есть небольшие потёртости на углах
75000 руб`,

    `📱 Оригинальный iPhone 16 Pro Max 512GB Black (Sim+eSim)
Цена 80900₽
 Гарантия, рассрочка +6% (заявку можно подать удаленно, период до 36 месяцев)
Активирован: май 2025.
 🔥 Состояние идеальное, без царапин и дефектов. Всё оригинальное, не разбирался и не ремонтировался.
 🔋 Батарея: 100%, 58 цикл
📦 Комплект: коробка, кабель, чек
🔓 Отвязан от всех аккаунтов
🛡️ Гарантия: 60 дней
⚙️ Любые проверки приветствуются`,
  ];

  for (const t of tests) {
    console.log('═══════════════════');
    console.log('ВХОД:', t.slice(0, 50).replace(/\n/g, ' | '));
    console.log('РЕЗУЛЬТАТ:', JSON.stringify(parseListingText(t), null, 2));
  }
}
