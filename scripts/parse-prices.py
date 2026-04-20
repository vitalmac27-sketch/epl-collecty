#!/usr/bin/env python3
"""
Парсер прайса apple_collecty.xlsx → iphone-configs.ts
Генерирует data-файл для iPhone с полным набором конфигураций.
"""

from openpyxl import load_workbook
from collections import defaultdict
from pathlib import Path

XLSX = '/mnt/user-data/uploads/прайс_apple_collecty.xlsx'
OUT = '/home/claude/epl-collecty/src/lib/iphone-configs.ts'

# ─── Справочник цветов: русское имя + HEX для кружков ────────────────────────
COLOR_MAP = {
    # iPhone 17 Pro Max / 17 Pro (Orange/Blue/Silver)
    'orange':       ('Оранжевый (Cosmic Orange)', '#D55A2B'),
    'blue':         ('Синий (Deep Blue)',         '#3B5D78'),
    'silver':       ('Серебристый',                '#D8D8D8'),
    # iPhone 17 (Black/White/Blue/Sage/Lavender)
    'black':        ('Чёрный',                     '#1C1C1E'),
    'white':        ('Белый',                      '#F2F1ED'),
    'sage':         ('Шалфей (Sage)',              '#A8B19E'),
    'lavender':     ('Лавандовый',                 '#C9B8D4'),
    'lavander':     ('Лавандовый',                 '#C9B8D4'),
    # iPhone 16 Pro Max / 16 Pro (титан)
    'desert':       ('Пустынный Титан',            '#C8A97E'),
    'natural':      ('Натуральный Титан',          '#B5A99A'),
    'black titanium': ('Чёрный Титан',             '#3D3731'),
    'white titanium': ('Белый Титан',              '#E8E4DE'),
    # iPhone 16 / 16 Plus (цветные)
    'pink':         ('Розовый',                    '#F6D6D4'),
    'teal':         ('Бирюзовый',                  '#A5C8C6'),
    'ultramarine':  ('Ультрамариновый',            '#5B6FB3'),
    # iPhone 15 (Pink/Blue/Green/Black/Yellow)
    'green':        ('Зелёный',                    '#C5D0BC'),
    'yellow':       ('Жёлтый',                     '#FAEACB'),
}

# ─── SIM варианты ────────────────────────────────────────────────────────────
SIM_MAP = {
    'eSIM':     ('esim',      'eSIM (США)',          'Только eSIM, без физической SIM. Нужна поддержка eSIM у оператора.'),
    'SIM+eSIM': ('sim-esim',  'Nano-SIM + eSIM',     'Европейская/РФ версия. Одна физическая SIM + одна eSIM.'),
}

# Для старых моделей (16/15) в прайсе SIM не указан → ставим по умолчанию
DEFAULT_SIM = ('sim-esim', 'Nano-SIM + eSIM', 'Европейская/РФ версия. Одна физическая SIM + одна eSIM.')


def parse_memory(s: str) -> int:
    """'256 GB' → 256, '1 TB' → 1024, '2 TB' → 2048"""
    s = s.strip().upper()
    if 'TB' in s:
        return int(s.replace('TB', '').strip()) * 1024
    return int(s.replace('GB', '').strip())


def memory_label(gb: int) -> str:
    if gb >= 1024:
        tb = gb // 1024
        return f"{tb} ТБ"
    return f"{gb} ГБ"


def get_color(name: str) -> tuple:
    """Найти цвет по имени (case-insensitive)"""
    key = (name or '').strip().lower()
    if key in COLOR_MAP:
        return COLOR_MAP[key]
    # Fallback: возвращаем как есть
    return (name, '#888888')


def parse_xlsx():
    """Возвращает dict: slug → список записей {memory, color, sim, price}"""
    wb = load_workbook(XLSX, data_only=True)

    data = defaultdict(list)

    # ─── iPhone 17 лист ── 3 модели по порядку: Pro Max → Pro → 17
    ws = wb['iPhone 17']
    section = None
    sections_done = []

    for i, row in enumerate(ws.iter_rows(min_row=4, values_only=True), start=4):
        if not row[0] or not row[6]:
            continue

        mem = parse_memory(row[3])
        color = row[4]
        sim = row[5]
        price = row[6]

        # Определяем секцию по переходам цены/памяти:
        # Pro Max: максимум 2TB, цены от 108K
        # Pro: максимум 1TB, цены от 101K, нет 2TB
        # 17: максимум 512GB, цены от 66K

        # Простой способ: отслеживаем момент когда цены "откатываются вниз"
        if not section:
            section = 'iphone-17-pro-max'

        # Переход Pro Max → Pro: память снова падает до 256GB после 2TB
        if mem == 256 and section == 'iphone-17-pro-max' and price < 108000:
            section = 'iphone-17-pro'

        # Переход Pro → 17: цена падает до 70K зоны
        if mem == 256 and section == 'iphone-17-pro' and price < 90000:
            section = 'iphone-17'

        data[section].append({
            'memory_gb': mem,
            'color_raw': color,
            'sim_raw': sim,
            'price': price,
        })

    # ─── iPhone 16 лист ──
    ws = wb['iPhone 16']
    for row in ws.iter_rows(min_row=4, values_only=True):
        if not row[1] or not row[6]:
            continue  # нет группы или цены — пропуск

        group = row[1].strip()
        slug_map = {
            'iPhone 16 Pro Max': 'iphone-16-pro-max',
            'iPhone 16 Pro':     'iphone-16-pro',
            'iPhone 16 Plus':    'iphone-16-plus',
            'iPhone 16':         'iphone-16',
            'iPhone 16E':        'iphone-16e',
        }
        slug = slug_map.get(group)
        if not slug:
            continue

        data[slug].append({
            'memory_gb': parse_memory(row[3]),
            'color_raw': row[4],
            'sim_raw':   row[5],  # может быть None
            'price':     row[6],
        })

    # ─── iPhone 15 лист ──
    ws = wb['iPhone 15']
    for row in ws.iter_rows(min_row=4, values_only=True):
        if not row[1] or not row[6]:
            continue
        group = row[1].strip()
        slug_map = {
            'iPhone 15 Pro Max': 'iphone-15-pro-max',
            'iPhone 15 Pro':     'iphone-15-pro',
            'iPhone 15 Plus':    'iphone-15-plus',
            'iPhone 15':         'iphone-15',
        }
        slug = slug_map.get(group)
        if not slug:
            continue
        data[slug].append({
            'memory_gb': parse_memory(row[3]),
            'color_raw': row[4],
            'sim_raw':   row[5],
            'price':     row[6],
        })

    return data


def build_config(slug: str, records: list) -> dict:
    """Строит объект конфига для одной модели"""
    # Уникальные цвета
    colors_seen = {}
    for r in records:
        key = (r['color_raw'] or '').strip().lower()
        if key and key not in colors_seen:
            ru_name, hex_color = get_color(r['color_raw'])
            colors_seen[key] = {
                'id': key.replace(' ', '-'),
                'name': ru_name,
                'hex': hex_color,
                'image': slug,
            }
    colors = list(colors_seen.values())

    # Уникальные объёмы памяти
    mem_seen = sorted(set(r['memory_gb'] for r in records))
    storage = [{'gb': gb, 'label': memory_label(gb), 'available': True} for gb in mem_seen]

    # Уникальные SIM
    sim_seen = {}
    has_sim_data = any(r['sim_raw'] for r in records)
    if has_sim_data:
        for r in records:
            if r['sim_raw'] and r['sim_raw'] in SIM_MAP:
                sid, label, desc = SIM_MAP[r['sim_raw']]
                sim_seen[sid] = {'id': sid, 'label': label, 'description': desc}
        sims = list(sim_seen.values())
    else:
        # Старые модели: ставим дефолтный SIM
        sid, label, desc = DEFAULT_SIM
        sims = [{'id': sid, 'label': label, 'description': desc}]

    # Цены (берём минимальную для дубликатов)
    prices_by_combo = {}
    for r in records:
        color_id = (r['color_raw'] or '').strip().lower().replace(' ', '-')
        if r['sim_raw'] and r['sim_raw'] in SIM_MAP:
            sim_id = SIM_MAP[r['sim_raw']][0]
        else:
            sim_id = DEFAULT_SIM[0]
        key = (r['memory_gb'], color_id, sim_id)
        if key not in prices_by_combo or r['price'] < prices_by_combo[key]:
            prices_by_combo[key] = r['price']

    prices = []
    for (mem, col, sim), price in sorted(prices_by_combo.items()):
        prices.append({
            'storageGb': mem,
            'colorId':   col,
            'simId':     sim,
            'price':     price,
        })

    # Стартовая цена
    price_from = min(p['price'] for p in prices) if prices else 0

    # Дефолтные значения
    default_storage = min(mem_seen) if mem_seen else 256
    default_color = colors[0]['id'] if colors else ''
    default_sim = sims[0]['id'] if sims else ''

    return {
        'slug': slug,
        'colors': colors,
        'storage': storage,
        'sim': sims,
        'prices': prices,
        'defaultStorage': default_storage,
        'defaultColor': default_color,
        'defaultSim': default_sim,
        'priceFrom': price_from,
    }


# ─── Справочник характеристик и сравнений для каждой модели ──────────────────

MODEL_META = {
    'iphone-17-pro-max': {
        'compareTitle': 'iPhone 16 Pro Max',
        'specs': [
            ('Процессор',        'Apple A19 Pro (3 нм)'),
            ('Дисплей',          '6,9" Super Retina XDR OLED, 120 Гц ProMotion'),
            ('Основная камера',  '48 МП + 48 МП ультраширокая + 12 МП (5× зум)'),
            ('Фронтальная',      '12 МП, автофокус'),
            ('Батарея',          'до 33 часов видео'),
            ('Корпус',           'Титан, Ceramic Shield'),
            ('Разъём',           'USB-C (USB 3, до 20 Гбит/с)'),
            ('Защита',           'IP68 (6 м, 30 мин)'),
            ('Camera Control',   'Да'),
            ('MagSafe',          'До 25 Вт'),
            ('5G',               'Да'),
        ],
        'compare': [
            ('Процессор',       'A19 Pro (3 нм)',        'A18 Pro (3 нм)',       True),
            ('Дисплей',         '6,9" 120 Гц OLED',      '6,9" 120 Гц OLED',     False),
            ('Зум',             '5× оптический',          '5× оптический',         False),
            ('MagSafe',         'до 25 Вт',               'до 25 Вт',              False),
            ('Батарея',         'до 33 ч видео',          'до 33 ч видео',         False),
            ('Camera Control',  'Да',                     'Да',                    False),
        ],
    },
    'iphone-17-pro': {
        'compareTitle': 'iPhone 16 Pro',
        'specs': [
            ('Процессор',        'Apple A19 Pro (3 нм)'),
            ('Дисплей',          '6,3" Super Retina XDR OLED, 120 Гц ProMotion'),
            ('Основная камера',  '48 МП + 48 МП ультраширокая + 12 МП (5× зум)'),
            ('Фронтальная',      '12 МП, автофокус'),
            ('Батарея',          'до 27 часов видео'),
            ('Корпус',           'Титан, Ceramic Shield'),
            ('Разъём',           'USB-C (USB 3, до 20 Гбит/с)'),
            ('Защита',           'IP68 (6 м, 30 мин)'),
            ('Camera Control',   'Да'),
            ('MagSafe',          'До 25 Вт'),
            ('5G',               'Да'),
        ],
        'compare': [
            ('Процессор',       'A19 Pro (3 нм)',        'A18 Pro (3 нм)',       True),
            ('Дисплей',         '6,3" 120 Гц OLED',      '6,3" 120 Гц OLED',     False),
            ('Зум',             '5× оптический',          '5× оптический',         False),
            ('MagSafe',         'до 25 Вт',               'до 25 Вт',              False),
            ('Батарея',         'до 27 ч видео',          'до 27 ч видео',         False),
            ('Camera Control',  'Да',                     'Да',                    False),
        ],
    },
    'iphone-17': {
        'compareTitle': 'iPhone 16',
        'specs': [
            ('Процессор',        'Apple A19'),
            ('Дисплей',          '6,1" Super Retina XDR OLED, 120 Гц ProMotion'),
            ('Основная камера',  '48 МП + 12 МП ультраширокая'),
            ('Фронтальная',      '12 МП'),
            ('Батарея',          'до 24 часов видео'),
            ('Корпус',           'Алюминий, Ceramic Shield'),
            ('Разъём',           'USB-C'),
            ('Защита',           'IP68'),
            ('Camera Control',   'Да'),
            ('MagSafe',          'До 25 Вт'),
            ('5G',               'Да'),
        ],
        'compare': [
            ('Процессор',       'A19',                    'A18',                   True),
            ('Дисплей',         '6,1" 120 Гц OLED',      '6,1" 60 Гц OLED',       True),
            ('Камера',          '48 МП + 12 МП',          '48 МП + 12 МП',         False),
            ('Camera Control',  'Да',                     'Да',                    False),
        ],
    },
    'iphone-16-pro-max': {
        'compareTitle': 'iPhone 15 Pro Max',
        'specs': [
            ('Процессор',        'Apple A18 Pro (3 нм)'),
            ('Дисплей',          '6,9" Super Retina XDR OLED, 120 Гц ProMotion'),
            ('Основная камера',  '48 МП + 48 МП ультраширокая + 12 МП (5× зум)'),
            ('Фронтальная',      '12 МП'),
            ('Батарея',          'до 33 часов видео'),
            ('Корпус',           'Титан'),
            ('Разъём',           'USB-C (USB 3)'),
            ('Защита',           'IP68'),
            ('Camera Control',   'Да'),
            ('MagSafe',          'До 25 Вт'),
        ],
        'compare': [
            ('Процессор',       'A18 Pro',                'A17 Pro',               True),
            ('Дисплей',         '6,9" 120 Гц',            '6,7" 120 Гц',           True),
            ('Camera Control',  'Да',                     'Нет',                   True),
            ('Apple Intelligence', 'Да',                  'Ограниченно',           True),
        ],
    },
    'iphone-16-pro': {
        'compareTitle': 'iPhone 15 Pro',
        'specs': [
            ('Процессор',        'Apple A18 Pro (3 нм)'),
            ('Дисплей',          '6,3" Super Retina XDR OLED, 120 Гц ProMotion'),
            ('Основная камера',  '48 МП + 48 МП ультраширокая + 12 МП (5× зум)'),
            ('Фронтальная',      '12 МП'),
            ('Батарея',          'до 27 часов видео'),
            ('Корпус',           'Титан'),
            ('Разъём',           'USB-C (USB 3)'),
            ('Защита',           'IP68'),
            ('Camera Control',   'Да'),
            ('MagSafe',          'До 25 Вт'),
        ],
        'compare': [
            ('Процессор',       'A18 Pro',                'A17 Pro',               True),
            ('Дисплей',         '6,3" 120 Гц',            '6,1" 120 Гц',           True),
            ('Зум',             '5× оптический',          '3× оптический',         True),
            ('Camera Control',  'Да',                     'Нет',                   True),
        ],
    },
    'iphone-16-plus': {
        'compareTitle': 'iPhone 15 Plus',
        'specs': [
            ('Процессор',        'Apple A18'),
            ('Дисплей',          '6,7" Super Retina XDR OLED'),
            ('Основная камера',  '48 МП + 12 МП ультраширокая'),
            ('Фронтальная',      '12 МП'),
            ('Батарея',          'до 27 часов видео'),
            ('Корпус',           'Алюминий'),
            ('Разъём',           'USB-C'),
            ('Camera Control',   'Да'),
            ('MagSafe',          'До 25 Вт'),
        ],
        'compare': [
            ('Процессор',       'A18',                    'A16 Bionic',            True),
            ('Camera Control',  'Да',                     'Нет',                   True),
            ('Apple Intelligence', 'Да',                  'Нет',                   True),
            ('MagSafe',         'до 25 Вт',               'до 15 Вт',              True),
        ],
    },
    'iphone-16': {
        'compareTitle': 'iPhone 15',
        'specs': [
            ('Процессор',        'Apple A18'),
            ('Дисплей',          '6,1" Super Retina XDR OLED'),
            ('Основная камера',  '48 МП + 12 МП ультраширокая'),
            ('Фронтальная',      '12 МП'),
            ('Батарея',          'до 22 часов видео'),
            ('Корпус',           'Алюминий'),
            ('Разъём',           'USB-C'),
            ('Camera Control',   'Да'),
            ('MagSafe',          'До 25 Вт'),
        ],
        'compare': [
            ('Процессор',       'A18',                    'A16 Bionic',            True),
            ('Camera Control',  'Да',                     'Нет',                   True),
            ('Apple Intelligence', 'Да',                  'Нет',                   True),
            ('MagSafe',         'до 25 Вт',               'до 15 Вт',              True),
        ],
    },
    'iphone-16e': {
        'compareTitle': 'iPhone SE 3',
        'specs': [
            ('Процессор',        'Apple A18'),
            ('Дисплей',          '6,1" Super Retina XDR OLED'),
            ('Основная камера',  '48 МП'),
            ('Фронтальная',      '12 МП'),
            ('Батарея',          'до 26 часов видео'),
            ('Корпус',           'Алюминий'),
            ('Разъём',           'USB-C'),
            ('Face ID',          'Да'),
        ],
        'compare': [
            ('Процессор',       'A18',                    'A15 Bionic',            True),
            ('Дисплей',         '6,1" OLED',              '4,7" LCD',              True),
            ('Разъём',          'USB-C',                  'Lightning',             True),
            ('Face ID',         'Да',                     'Нет (Touch ID)',        True),
        ],
    },
    'iphone-15-pro-max': {
        'compareTitle': 'iPhone 14 Pro Max',
        'specs': [
            ('Процессор',        'Apple A17 Pro (3 нм)'),
            ('Дисплей',          '6,7" Super Retina XDR OLED, 120 Гц'),
            ('Основная камера',  '48 МП + 12 МП + 12 МП (5× зум)'),
            ('Фронтальная',      '12 МП'),
            ('Батарея',          'до 29 часов видео'),
            ('Корпус',           'Титан'),
            ('Разъём',           'USB-C'),
            ('Action Button',    'Да'),
        ],
        'compare': [
            ('Процессор',       'A17 Pro (3 нм)',        'A16 Bionic',            True),
            ('Корпус',          'Титан',                  'Нерж. сталь',           True),
            ('Разъём',          'USB-C',                  'Lightning',             True),
            ('Зум',             '5×',                     '3×',                    True),
        ],
    },
    'iphone-15-pro': {
        'compareTitle': 'iPhone 14 Pro',
        'specs': [
            ('Процессор',        'Apple A17 Pro (3 нм)'),
            ('Дисплей',          '6,1" Super Retina XDR OLED, 120 Гц'),
            ('Основная камера',  '48 МП + 12 МП ультраширокая + 12 МП (3× зум)'),
            ('Фронтальная',      '12 МП'),
            ('Батарея',          'до 23 часов видео'),
            ('Корпус',           'Титан'),
            ('Разъём',           'USB-C'),
            ('Action Button',    'Да'),
        ],
        'compare': [
            ('Процессор',       'A17 Pro',                'A16 Bionic',            True),
            ('Корпус',          'Титан',                  'Нерж. сталь',           True),
            ('Разъём',          'USB-C',                  'Lightning',             True),
            ('Action Button',   'Да',                     'Нет',                   True),
        ],
    },
    'iphone-15-plus': {
        'compareTitle': 'iPhone 14 Plus',
        'specs': [
            ('Процессор',        'Apple A16 Bionic'),
            ('Дисплей',          '6,7" Super Retina XDR OLED'),
            ('Основная камера',  '48 МП + 12 МП ультраширокая'),
            ('Фронтальная',      '12 МП'),
            ('Батарея',          'до 26 часов видео'),
            ('Корпус',           'Алюминий'),
            ('Разъём',           'USB-C'),
            ('Dynamic Island',   'Да'),
        ],
        'compare': [
            ('Процессор',       'A16 Bionic',             'A15 Bionic',            True),
            ('Dynamic Island',  'Да',                     'Нет',                   True),
            ('Разъём',          'USB-C',                  'Lightning',             True),
            ('Камера',          '48 МП',                  '12 МП',                 True),
        ],
    },
    'iphone-15': {
        'compareTitle': 'iPhone 14',
        'specs': [
            ('Процессор',        'Apple A16 Bionic'),
            ('Дисплей',          '6,1" Super Retina XDR OLED'),
            ('Основная камера',  '48 МП + 12 МП ультраширокая'),
            ('Фронтальная',      '12 МП'),
            ('Батарея',          'до 20 часов видео'),
            ('Корпус',           'Алюминий'),
            ('Разъём',           'USB-C'),
            ('Dynamic Island',   'Да'),
        ],
        'compare': [
            ('Процессор',       'A16 Bionic',             'A15 Bionic',            True),
            ('Dynamic Island',  'Да',                     'Нет',                   True),
            ('Разъём',          'USB-C',                  'Lightning',             True),
            ('Камера',          '48 МП',                  '12 МП',                 True),
        ],
    },
}


def ts_str(s: str) -> str:
    """Escape строки для TypeScript"""
    return '"' + str(s).replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n') + '"'


def generate_ts():
    """Генерирует содержимое iphone-configs.ts"""
    data = parse_xlsx()

    # Упорядоченный список моделей
    order = [
        'iphone-17-pro-max', 'iphone-17-pro', 'iphone-17',
        'iphone-16-pro-max', 'iphone-16-pro', 'iphone-16-plus', 'iphone-16', 'iphone-16e',
        'iphone-15-pro-max', 'iphone-15-pro', 'iphone-15-plus', 'iphone-15',
    ]

    configs = {}
    for slug in order:
        if slug in data and data[slug]:
            configs[slug] = build_config(slug, data[slug])

    # Выводим статистику
    print("\n=== Результаты парсинга ===")
    for slug, cfg in configs.items():
        print(f"  {slug}: {len(cfg['colors'])} цветов, {len(cfg['storage'])} памяти, "
              f"{len(cfg['prices'])} конфигов, от {cfg['priceFrom']} ₽")

    # ─── Генерируем TS ─────────────────────────────────────────────────────
    ts_lines = []
    ts_lines.append('/**')
    ts_lines.append(' * iphone-configs.ts — АВТОГЕНЕРИРОВАННЫЙ файл из прайса apple_collecty.xlsx')
    ts_lines.append(' * НЕ редактируйте вручную — изменения вносите в Excel и запускайте scripts/parse-prices.py')
    ts_lines.append(' */')
    ts_lines.append('')

    # Типы — те же что были
    ts_lines.append('export interface ColorOption { id: string; name: string; hex: string; image: string; }')
    ts_lines.append('export interface StorageOption { gb: number; label: string; available: boolean; }')
    ts_lines.append('export interface SimOption { id: string; label: string; description: string; }')
    ts_lines.append('export interface ConfigPrice { storageGb: number; colorId: string; simId: string; price: number; }')
    ts_lines.append('export interface SpecRow { label: string; value: string; }')
    ts_lines.append('export interface CompareRow { label: string; current: string; previous: string; better?: boolean; }')
    ts_lines.append('export interface UpsellItem { id: string; name: string; description: string; price: number; emoji: string; }')
    ts_lines.append('')
    ts_lines.append('export interface IPhoneConfig {')
    ts_lines.append('  slug: string;')
    ts_lines.append('  colors: ColorOption[];')
    ts_lines.append('  storage: StorageOption[];')
    ts_lines.append('  sim: SimOption[];')
    ts_lines.append('  prices: ConfigPrice[];')
    ts_lines.append('  defaultStorage: number;')
    ts_lines.append('  defaultColor: string;')
    ts_lines.append('  defaultSim: string;')
    ts_lines.append('  priceFrom: number;')
    ts_lines.append('  specs: SpecRow[];')
    ts_lines.append('  compareTitle: string;')
    ts_lines.append('  compare: CompareRow[];')
    ts_lines.append('  upsell: UpsellItem[];')
    ts_lines.append('  seoH2: string; seoText: string;')
    ts_lines.append('  seoH2Why: string; seoTextWhy: string;')
    ts_lines.append('  seoH2Sim: string; seoTextSim: string;')
    ts_lines.append('}')
    ts_lines.append('')

    # Upsell — общий
    ts_lines.append('const IPHONE_UPSELL: UpsellItem[] = [')
    ts_lines.append('  { id: "charger-20w", name: "Блок питания Apple 20W USB-C", description: "В коробке iPhone только кабель — рекомендуем оригинальный адаптер.", price: 2490, emoji: "🔌" },')
    ts_lines.append('  { id: "case-silicone", name: "Чехол Silicone Case с MagSafe", description: "Защита корпуса с первого дня. Плотная посадка, приятный материал.", price: 3490, emoji: "📱" },')
    ts_lines.append('  { id: "glass", name: "Защитное стекло + установка", description: "Наклеим за 5 минут прямо в магазине. Полное закрытие экрана.", price: 990, emoji: "🛡️" },')
    ts_lines.append('  { id: "cardholder", name: "Картхолдер MagSafe", description: "Держатель для карт на MagSafe. Кошелёк и телефон всегда вместе.", price: 1290, emoji: "💳" },')
    ts_lines.append('];')
    ts_lines.append('')

    # Генерируем каждый конфиг
    for slug, cfg in configs.items():
        meta = MODEL_META.get(slug, {})
        const_name = slug.replace('-', '_').upper() + '_CONFIG'

        ts_lines.append(f'const {const_name}: IPhoneConfig = {{')
        ts_lines.append(f'  slug: "{slug}",')

        # Цвета
        ts_lines.append('  colors: [')
        for c in cfg['colors']:
            ts_lines.append(f'    {{ id: {ts_str(c["id"])}, name: {ts_str(c["name"])}, hex: {ts_str(c["hex"])}, image: {ts_str(c["image"])} }},')
        ts_lines.append('  ],')

        # Память
        ts_lines.append('  storage: [')
        for s in cfg['storage']:
            ts_lines.append(f'    {{ gb: {s["gb"]}, label: {ts_str(s["label"])}, available: true }},')
        ts_lines.append('  ],')

        # SIM
        ts_lines.append('  sim: [')
        for s in cfg['sim']:
            ts_lines.append(f'    {{ id: {ts_str(s["id"])}, label: {ts_str(s["label"])}, description: {ts_str(s["description"])} }},')
        ts_lines.append('  ],')

        # Цены
        ts_lines.append('  prices: [')
        for p in cfg['prices']:
            ts_lines.append(f'    {{ storageGb: {p["storageGb"]}, colorId: {ts_str(p["colorId"])}, simId: {ts_str(p["simId"])}, price: {p["price"]} }},')
        ts_lines.append('  ],')

        ts_lines.append(f'  defaultStorage: {cfg["defaultStorage"]},')
        ts_lines.append(f'  defaultColor: {ts_str(cfg["defaultColor"])},')
        ts_lines.append(f'  defaultSim: {ts_str(cfg["defaultSim"])},')
        ts_lines.append(f'  priceFrom: {cfg["priceFrom"]},')

        # Specs
        specs = meta.get('specs', [])
        ts_lines.append('  specs: [')
        for label, val in specs:
            ts_lines.append(f'    {{ label: {ts_str(label)}, value: {ts_str(val)} }},')
        ts_lines.append('  ],')

        # Compare
        compare_title = meta.get('compareTitle', '')
        ts_lines.append(f'  compareTitle: {ts_str(compare_title)},')
        ts_lines.append('  compare: [')
        for row in meta.get('compare', []):
            label, cur, prev, better = row
            better_str = 'true' if better else 'false'
            ts_lines.append(f'    {{ label: {ts_str(label)}, current: {ts_str(cur)}, previous: {ts_str(prev)}, better: {better_str} }},')
        ts_lines.append('  ],')

        ts_lines.append('  upsell: IPHONE_UPSELL,')

        # SEO тексты (унифицированные шаблоны)
        model_name = slug.replace('-', ' ').title().replace('Iphone', 'iPhone').replace('Pro Max', 'Pro Max').replace('16E', '16e')
        # Корректируем спец-случаи
        model_name_map = {
            'iphone-17-pro-max': 'iPhone 17 Pro Max',
            'iphone-17-pro':     'iPhone 17 Pro',
            'iphone-17':         'iPhone 17',
            'iphone-16-pro-max': 'iPhone 16 Pro Max',
            'iphone-16-pro':     'iPhone 16 Pro',
            'iphone-16-plus':    'iPhone 16 Plus',
            'iphone-16':         'iPhone 16',
            'iphone-16e':        'iPhone 16e',
            'iphone-15-pro-max': 'iPhone 15 Pro Max',
            'iphone-15-pro':     'iPhone 15 Pro',
            'iphone-15-plus':    'iPhone 15 Plus',
            'iphone-15':         'iPhone 15',
        }
        model_name = model_name_map.get(slug, model_name)
        pf = cfg['priceFrom']

        seo_text = (f"{model_name} — один из самых востребованных смартфонов Apple. "
                    f"В магазине ЭПЛ-КОЛЛЕКЦИЯ вы можете купить {model_name} в Казани по цене от {pf:,} ₽ "
                    f"с гарантией 1 год и бесплатной доставкой в день заказа.\\n"
                    f"Рассрочка 0% на 10 месяцев — оформление онлайн за 5 минут, одобрение в день обращения.").replace(',', ' ')

        ts_lines.append(f'  seoH2: {ts_str(f"Купить {model_name} в Казани")},')
        ts_lines.append(f'  seoText: {ts_str(seo_text)},')
        ts_lines.append(f'  seoH2Why: {ts_str(f"Почему стоит выбрать {model_name}?")},')
        ts_lines.append(f'  seoTextWhy: {ts_str(f"{model_name} сочетает топовые технологии Apple, надёжность и лучшее соотношение цены и качества в своём классе. В ЭПЛ-КОЛЛЕКЦИЯ каждый смартфон проходит полную диагностику на 30+ пунктов перед продажей.")},')
        ts_lines.append(f'  seoH2Sim: {ts_str(f"Какую версию {model_name} выбрать?")},')
        ts_lines.append(f'  seoTextSim: {ts_str("В Казани чаще всего берут версию Nano-SIM + eSIM (Европа/РФ) — работает со всеми операторами. Версия eSIM (США) подходит только при поддержке eSIM у вашего оператора. Уточните наличие у менеджера в Telegram.")},')
        ts_lines.append('};')
        ts_lines.append('')

    # Реестр
    ts_lines.append('const configs: Record<string, IPhoneConfig> = {')
    for slug in configs:
        const_name = slug.replace('-', '_').upper() + '_CONFIG'
        ts_lines.append(f'  {ts_str(slug)}: {const_name},')
    ts_lines.append('};')
    ts_lines.append('')
    ts_lines.append('export function getIPhoneConfig(slug: string): IPhoneConfig | undefined {')
    ts_lines.append('  return configs[slug];')
    ts_lines.append('}')
    ts_lines.append('')
    ts_lines.append('export function getConfigPrice(')
    ts_lines.append('  config: IPhoneConfig,')
    ts_lines.append('  storageGb: number,')
    ts_lines.append('  simId: string,')
    ts_lines.append('  colorId?: string,')
    ts_lines.append('): number | undefined {')
    ts_lines.append('  if (colorId) {')
    ts_lines.append('    const exact = config.prices.find(p => p.storageGb === storageGb && p.simId === simId && p.colorId === colorId);')
    ts_lines.append('    if (exact) return exact.price;')
    ts_lines.append('  }')
    ts_lines.append('  const matching = config.prices.filter(p => p.storageGb === storageGb && p.simId === simId);')
    ts_lines.append('  if (matching.length === 0) return undefined;')
    ts_lines.append('  return Math.min(...matching.map(p => p.price));')
    ts_lines.append('}')
    ts_lines.append('')

    return '\n'.join(ts_lines)


if __name__ == '__main__':
    ts = generate_ts()
    Path(OUT).write_text(ts, encoding='utf-8')
    print(f"\n✅ Записан файл: {OUT}")
    print(f"   Размер: {len(ts):,} байт")
