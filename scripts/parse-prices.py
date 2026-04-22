#!/usr/bin/env python3
"""parse-prices.py — парсер прайса → TS-конфиги для iPhone, iPad, MacBook"""

from openpyxl import load_workbook
from collections import defaultdict, OrderedDict
from pathlib import Path
import re

XLSX = '/mnt/user-data/uploads/прайс_apple_collecty.xlsx'
OUT_DIR = '/home/claude/epl-collecty/src/lib/generated'

# ─── Цвета ─────────────────────────────────────────────────────────────────
COLOR_MAP = {
    'orange':     ('Оранжевый (Cosmic Orange)', '#D55A2B'),
    'blue':       ('Синий',                     '#3B5D78'),
    'silver':     ('Серебристый',               '#D8D8D8'),
    'black':      ('Чёрный',                    '#1C1C1E'),
    'white':      ('Белый',                     '#F2F1ED'),
    'sage':       ('Шалфей',                    '#A8B19E'),
    'lavender':   ('Лавандовый',                '#C9B8D4'),
    'lavander':   ('Лавандовый',                '#C9B8D4'),
    'desert':     ('Пустынный Титан',           '#C8A97E'),
    'natural':    ('Натуральный Титан',         '#B5A99A'),
    'pink':       ('Розовый',                   '#F6D6D4'),
    'teal':       ('Бирюзовый',                 '#A5C8C6'),
    'ultramarine':('Ультрамариновый',           '#5B6FB3'),
    'green':      ('Зелёный',                   '#C5D0BC'),
    'yellow':     ('Жёлтый',                    '#FAEACB'),
    'gray':       ('Серый (Space Gray)',        '#4E4E4F'),
    'starlight':  ('Сияющая Звезда',            '#F5EFE3'),
    'skyblue':    ('Небесно-голубой',           '#BDD3E0'),
    'sky blue':   ('Небесно-голубой',           '#BDD3E0'),
    'midnight':   ('Тёмная Ночь',               '#2C2D30'),
    'indigo':     ('Индиго',                    '#4B4D76'),
    'citrus':     ('Цитрусовый',                '#DDD389'),
    'purple':     ('Фиолетовый',                '#B8A8CF'),
    'violet':     ('Фиолетовый',                '#8B7AAF'),
}

SIM_MAP = {
    'eSIM':     ('esim',     'eSIM (США)',       'Только eSIM, без физической SIM. Нужна поддержка eSIM у оператора.'),
    'SIM+eSIM': ('sim-esim', 'Nano-SIM + eSIM',  'Европейская/РФ версия. Одна физическая SIM + одна eSIM.'),
    'wi-fi':    ('wifi',     'Wi-Fi',            'Только Wi-Fi, без сотовой связи.'),
    'LTE':      ('lte',      'Wi-Fi + Cellular', 'Wi-Fi и сотовая связь (LTE/5G) с eSIM.'),
}

DEFAULT_SIM_IPHONE = ('sim-esim', 'Nano-SIM + eSIM', 'Европейская/РФ версия.')
DEFAULT_SIM_WIFI   = ('wifi', 'Wi-Fi', 'Только Wi-Fi, без сотовой связи.')
DEFAULT_SIM_NONE   = ('none', 'Стандарт', 'Стандартная комплектация.')


def ts_str(s):
    if s is None: s = ""
    return '"' + str(s).replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n') + '"'


def get_color(name):
    if not name:
        return ('Стандартный', '#888888')
    key = name.strip().lower()
    if key in COLOR_MAP:
        return COLOR_MAP[key]
    for k, v in COLOR_MAP.items():
        if k in key:
            return v
    clean = re.sub(r'[^а-яА-Яa-zA-Z\s]', '', name).strip()
    return (clean.capitalize() or 'Стандартный', '#888888')


def memory_label_gb(gb):
    if gb >= 1024:
        return f"{gb // 1024} ТБ"
    return f"{gb} ГБ"


def parse_memory_gb(s):
    s = s.strip().upper()
    if 'TB' in s:
        return int(s.replace('TB', '').strip()) * 1024
    return int(s.replace('GB', '').strip())


# ─── iPhone ────────────────────────────────────────────────────────────────
def parse_iphone():
    wb = load_workbook(XLSX, data_only=True)
    data = defaultdict(list)

    ws = wb['iPhone 17']
    section = 'iphone-17-pro-max'
    for row in ws.iter_rows(min_row=4, values_only=True):
        if not row[0] or not row[6]:
            continue
        mem = parse_memory_gb(row[3])
        price = row[6]
        if mem == 256 and section == 'iphone-17-pro-max' and price < 108000:
            section = 'iphone-17-pro'
        if mem == 256 and section == 'iphone-17-pro' and price < 90000:
            section = 'iphone-17'
        data[section].append({
            'storage_id': str(mem), 'storage_label': memory_label_gb(mem),
            'color_raw': row[4], 'sim_raw': row[5], 'price': price,
        })

    slug_map_16 = {
        'iPhone 16 Pro Max': 'iphone-16-pro-max', 'iPhone 16 Pro': 'iphone-16-pro',
        'iPhone 16 Plus': 'iphone-16-plus', 'iPhone 16': 'iphone-16', 'iPhone 16E': 'iphone-16e',
    }
    ws = wb['iPhone 16']
    for row in ws.iter_rows(min_row=4, values_only=True):
        if not row[1] or not row[6]: continue
        slug = slug_map_16.get(row[1].strip())
        if not slug: continue
        mem = parse_memory_gb(row[3])
        data[slug].append({
            'storage_id': str(mem), 'storage_label': memory_label_gb(mem),
            'color_raw': row[4], 'sim_raw': row[5], 'price': row[6],
        })

    slug_map_15 = {
        'iPhone 15 Pro Max': 'iphone-15-pro-max', 'iPhone 15 Pro': 'iphone-15-pro',
        'iPhone 15 Plus': 'iphone-15-plus', 'iPhone 15': 'iphone-15',
    }
    ws = wb['iPhone 15']
    for row in ws.iter_rows(min_row=4, values_only=True):
        if not row[1] or not row[6]: continue
        slug = slug_map_15.get(row[1].strip())
        if not slug: continue
        mem = parse_memory_gb(row[3])
        data[slug].append({
            'storage_id': str(mem), 'storage_label': memory_label_gb(mem),
            'color_raw': row[4], 'sim_raw': row[5], 'price': row[6],
        })

    return data


# ─── iPad ──────────────────────────────────────────────────────────────────
def parse_ipad():
    wb = load_workbook(XLSX, data_only=True)
    ws = wb['iPad']
    data = defaultdict(list)
    slug_map = {
        'iPad 11 (2025)': 'ipad-11-2025', 'iPad Air 11 M3': 'ipad-air-11-m3',
        'iPad Air 11 M4': 'ipad-air-11-m4', 'iPad Pro 11': 'ipad-pro-11', 'iPad Pro 13': 'ipad-pro-13',
    }
    for row in ws.iter_rows(min_row=4, values_only=True):
        if not row[1] or not row[6]: continue
        slug = slug_map.get(row[1].strip())
        if not slug: continue
        color = row[4] or ''
        for prefix in ['iPad 11 2025', 'iPad Air 11 M3', 'iPad Air 11 M4', 'iPad Pro 11', 'iPad Pro 13', 'M5', 'M4', 'M3']:
            color = color.replace(prefix, '')
        color = color.strip()
        mem = parse_memory_gb(row[3])
        data[slug].append({
            'storage_id': str(mem), 'storage_label': memory_label_gb(mem),
            'color_raw': color, 'sim_raw': row[5], 'price': row[6],
        })
    return data


# ─── MacBook ───────────────────────────────────────────────────────────────
def parse_macbook():
    wb = load_workbook(XLSX, data_only=True)
    ws = wb['MacBook']
    data = defaultdict(list)

    for row in ws.iter_rows(min_row=4, values_only=True):
        if not row[1] or not row[6]: continue
        group = row[1].strip()
        variant = (row[4] or '').strip()
        mem_config = (row[3] or '').strip()
        price = row[6]

        chip_suffix = ''
        vlow = variant.lower()
        for c in ['m5 pro', 'm4 pro', 'm5', 'm4', 'm3', 'm2']:
            if c in vlow:
                chip_suffix = '-' + c.replace(' ', '-')
                break

        if group == 'Mac mini':
            slug = f'mac-mini{chip_suffix}' if chip_suffix else 'mac-mini'
        elif group == 'MacBook Neo':
            slug = 'macbook-neo'
        elif group == 'MacBook Air 13':
            slug = f'macbook-air-13{chip_suffix}'
        elif group == 'MacBook Air 15':
            slug = f'macbook-air-15{chip_suffix}'
        elif group == 'MacBook Pro':
            slug = f'macbook-pro-14{chip_suffix}'
        else:
            continue

        # Очистка цвета от чипа и размера
        color = vlow
        for x in ['m5 pro', 'm4 pro', 'm5', 'm4', 'm3', 'm2', '13", ', '14", ', '15", ', '13', '14', '15']:
            color = color.replace(x, '')
        color = color.strip('/ ').strip()

        storage_id = mem_config.replace('/', '-').replace(' ', '')
        if '/' in mem_config:
            ram, ssd = mem_config.split('/')
            ssd_u = ssd.strip().upper()
            if 'TB' in ssd_u:
                ssd_label = ssd_u.replace('TB', ' ТБ')
            else:
                ssd_label = f"{ssd_u.replace('GB', '').strip()} ГБ"
            storage_label = f"{ram.strip()} ГБ / {ssd_label} SSD"
        else:
            storage_label = mem_config

        data[slug].append({
            'storage_id': storage_id, 'storage_label': storage_label,
            'color_raw': color, 'sim_raw': None, 'price': price,
        })

    return data


def build_config(slug, records, category, default_sim):
    colors_seen = OrderedDict()
    for r in records:
        key = (r['color_raw'] or '').strip().lower()
        if key and key not in colors_seen:
            ru, hex_c = get_color(r['color_raw'])
            colors_seen[key] = {
                'id': re.sub(r'[^a-z0-9]', '-', key).strip('-') or 'default',
                'name': ru, 'hex': hex_c, 'image': slug,
            }
    if not colors_seen:
        colors_seen['default'] = {'id': 'default', 'name': 'Стандартный', 'hex': '#888888', 'image': slug}
    colors = list(colors_seen.values())

    storage_seen = OrderedDict()
    for r in records:
        if r['storage_id'] and r['storage_id'] not in storage_seen:
            storage_seen[r['storage_id']] = {'id': r['storage_id'], 'label': r['storage_label'], 'available': True}
    storage = list(storage_seen.values())

    sim_seen = OrderedDict()
    for r in records:
        if r['sim_raw'] and r['sim_raw'] in SIM_MAP:
            sid, lbl, desc = SIM_MAP[r['sim_raw']]
            if sid not in sim_seen:
                sim_seen[sid] = {'id': sid, 'label': lbl, 'description': desc}
    if not sim_seen:
        sid, lbl, desc = default_sim
        sim_seen[sid] = {'id': sid, 'label': lbl, 'description': desc}
    sims = list(sim_seen.values())

    price_map = {}
    for r in records:
        cid = re.sub(r'[^a-z0-9]', '-', (r['color_raw'] or '').strip().lower()).strip('-') or 'default'
        if r['sim_raw'] and r['sim_raw'] in SIM_MAP:
            simid = SIM_MAP[r['sim_raw']][0]
        else:
            simid = default_sim[0]
        k = (r['storage_id'], cid, simid)
        if k not in price_map or r['price'] < price_map[k]:
            price_map[k] = r['price']

    prices = [{'storageId': s, 'colorId': c, 'simId': si, 'price': p}
              for (s, c, si), p in sorted(price_map.items())]

    return {
        'slug': slug, 'category': category,
        'colors': colors, 'storage': storage, 'sim': sims, 'prices': prices,
        'defaultStorage': storage[0]['id'] if storage else '',
        'defaultColor': colors[0]['id'] if colors else '',
        'defaultSim': sims[0]['id'] if sims else '',
        'priceFrom': min(p['price'] for p in prices) if prices else 0,
    }


# ─── Мета данные ───────────────────────────────────────────────────────────
MODEL_META = {
    'iphone-17-pro-max': {'compareTitle': 'iPhone 16 Pro Max', 'specs': [
        ('Процессор', 'Apple A19 Pro (3 нм)'), ('Дисплей', '6,9" OLED, 120 Гц ProMotion'),
        ('Камера', '48 МП + 48 МП + 12 МП (5× зум)'), ('Батарея', 'до 33 ч видео'),
        ('Корпус', 'Титан, Ceramic Shield'), ('Разъём', 'USB-C (USB 3, 20 Гбит/с)'),
        ('Защита', 'IP68'), ('Camera Control', 'Да'), ('MagSafe', 'До 25 Вт'),
    ], 'compare': [('Процессор', 'A19 Pro', 'A18 Pro', True), ('Батарея', 'до 33 ч', 'до 33 ч', False)]},
    'iphone-17-pro': {'compareTitle': 'iPhone 16 Pro', 'specs': [
        ('Процессор', 'Apple A19 Pro'), ('Дисплей', '6,3" OLED, 120 Гц'),
        ('Камера', '48+48+12 МП (5× зум)'), ('Корпус', 'Титан'),
    ], 'compare': [('Процессор', 'A19 Pro', 'A18 Pro', True)]},
    'iphone-17': {'compareTitle': 'iPhone 16', 'specs': [
        ('Процессор', 'Apple A19'), ('Дисплей', '6,1" OLED, 120 Гц'),
        ('Камера', '48 МП + 12 МП'), ('Разъём', 'USB-C'),
    ], 'compare': [('Процессор', 'A19', 'A18', True), ('Дисплей', '120 Гц', '60 Гц', True)]},
    'iphone-16-pro-max': {'compareTitle': 'iPhone 15 Pro Max', 'specs': [
        ('Процессор', 'Apple A18 Pro'), ('Дисплей', '6,9" OLED, 120 Гц'),
        ('Камера', '48+48+12 МП (5×)'), ('Camera Control', 'Да'),
    ], 'compare': [('Процессор', 'A18 Pro', 'A17 Pro', True)]},
    'iphone-16-plus': {'compareTitle': 'iPhone 15 Plus', 'specs': [
        ('Процессор', 'Apple A18'), ('Дисплей', '6,7" OLED'), ('Камера', '48+12 МП'),
    ], 'compare': [('Процессор', 'A18', 'A16', True)]},
    'iphone-16': {'compareTitle': 'iPhone 15', 'specs': [
        ('Процессор', 'Apple A18'), ('Дисплей', '6,1" OLED'), ('Камера', '48+12 МП'),
    ], 'compare': [('Процессор', 'A18', 'A16', True)]},
    'iphone-16e': {'compareTitle': 'iPhone SE 3', 'specs': [
        ('Процессор', 'Apple A18'), ('Дисплей', '6,1" OLED'), ('Разъём', 'USB-C'), ('Face ID', 'Да'),
    ], 'compare': [('Разъём', 'USB-C', 'Lightning', True)]},
    'iphone-15': {'compareTitle': 'iPhone 14', 'specs': [
        ('Процессор', 'Apple A16'), ('Дисплей', '6,1" OLED'), ('Разъём', 'USB-C'), ('Dynamic Island', 'Да'),
    ], 'compare': [('Разъём', 'USB-C', 'Lightning', True)]},

    'ipad-11-2025': {'compareTitle': 'iPad 10 (2022)', 'specs': [
        ('Процессор', 'Apple A16 Bionic'), ('Дисплей', '11" Liquid Retina'),
        ('Камера', '12 МП тыл + 12 МП фронт Center Stage'), ('Разъём', 'USB-C'),
        ('Apple Pencil', 'USB-C, 1-го поколения'), ('Батарея', 'до 10 часов'),
        ('Touch ID', 'В кнопке питания'),
    ], 'compare': [('Процессор', 'A16', 'A14', True), ('Дисплей', '11"', '10,9"', True)]},
    'ipad-air-11-m3': {'compareTitle': 'iPad Air 11 M2', 'specs': [
        ('Процессор', 'Apple M3'), ('Дисплей', '11" Liquid Retina'),
        ('Apple Pencil', 'Pro + USB-C'), ('Apple Intelligence', 'Да'),
    ], 'compare': [('Процессор', 'M3', 'M2', True)]},
    'ipad-air-11-m4': {'compareTitle': 'iPad Air 11 M3', 'specs': [
        ('Процессор', 'Apple M4'), ('Дисплей', '11" Liquid Retina'),
        ('Apple Pencil', 'Pro + USB-C'), ('Apple Intelligence', 'Да'),
    ], 'compare': [('Процессор', 'M4', 'M3', True)]},
    'ipad-pro-11': {'compareTitle': 'iPad Pro 11 M4', 'specs': [
        ('Процессор', 'Apple M5'), ('Дисплей', '11" Ultra Retina XDR OLED, 120 Гц'),
        ('Разъём', 'USB-C Thunderbolt 4'), ('Apple Pencil', 'Pro'), ('Face ID', 'Да'),
    ], 'compare': [('Процессор', 'M5', 'M4', True), ('Дисплей', 'OLED 120 Гц', 'OLED 120 Гц', False)]},
    'ipad-pro-13': {'compareTitle': 'iPad Pro 13 M4', 'specs': [
        ('Процессор', 'Apple M5'), ('Дисплей', '13" Ultra Retina XDR OLED, 120 Гц'),
        ('Разъём', 'USB-C Thunderbolt 4'), ('Apple Pencil', 'Pro'), ('Face ID', 'Да'),
    ], 'compare': [('Процессор', 'M5', 'M4', True)]},

    'mac-mini-m4': {'compareTitle': 'Mac mini M2', 'specs': [
        ('Процессор', 'Apple M4'), ('Размер', '12,7 × 12,7 см'),
        ('Разъёмы', '2× Thunderbolt 4, 3× USB-C, HDMI, Ethernet'),
        ('Wi-Fi', 'Wi-Fi 6E'), ('Apple Intelligence', 'Да'),
    ], 'compare': [('Процессор', 'M4', 'M2', True), ('Размер', '12,7 см', '19,7 см', True)]},
    'macbook-neo': {'compareTitle': 'MacBook Air M2', 'specs': [
        ('Процессор', 'MediaTek Kompanio Ultra'), ('Дисплей', '13" Liquid Retina'),
        ('Батарея', 'до 18 часов'), ('ОС', 'Neo OS'), ('Разъёмы', 'USB-C, USB-A, HDMI'),
    ], 'compare': [('Цена', 'от 64 500 ₽', 'от 77 500 ₽', True)]},
    'macbook-air-13-m2': {'compareTitle': 'MacBook Air 13 M1', 'specs': [
        ('Процессор', 'Apple M2'), ('Дисплей', '13,6" Liquid Retina'),
        ('MagSafe 3', 'Да'), ('Разъёмы', '2× Thunderbolt, MagSafe 3'),
    ], 'compare': [('Процессор', 'M2', 'M1', True), ('MagSafe 3', 'Да', 'Нет', True)]},
    'macbook-air-13-m5': {'compareTitle': 'MacBook Air 13 M4', 'specs': [
        ('Процессор', 'Apple M5'), ('Дисплей', '13,6" Liquid Retina'),
        ('Батарея', 'до 18 часов'), ('Apple Intelligence', 'Да'),
    ], 'compare': [('Процессор', 'M5', 'M4', True)]},
    'macbook-air-15-m4': {'compareTitle': 'MacBook Air 15 M3', 'specs': [
        ('Процессор', 'Apple M4'), ('Дисплей', '15,3" Liquid Retina'),
        ('Apple Intelligence', 'Да'),
    ], 'compare': [('Процессор', 'M4', 'M3', True)]},
    'macbook-air-15-m5': {'compareTitle': 'MacBook Air 15 M4', 'specs': [
        ('Процессор', 'Apple M5'), ('Дисплей', '15,3" Liquid Retina'),
        ('Apple Intelligence', 'Да'),
    ], 'compare': [('Процессор', 'M5', 'M4', True)]},
    'macbook-pro-14-m5': {'compareTitle': 'MacBook Pro 14 M4', 'specs': [
        ('Процессор', 'Apple M5'), ('Дисплей', '14,2" Liquid Retina XDR, 120 Гц'),
        ('Разъёмы', '3× Thunderbolt 4, HDMI, SD, MagSafe 3'),
    ], 'compare': [('Процессор', 'M5', 'M4', True)]},
    'macbook-pro-14-m5-pro': {'compareTitle': 'MacBook Pro 14 M4 Pro', 'specs': [
        ('Процессор', 'Apple M5 Pro'), ('Дисплей', '14,2" Liquid Retina XDR, 120 Гц'),
        ('Разъёмы', '3× Thunderbolt 5, HDMI, SD, MagSafe 3'),
    ], 'compare': [('Процессор', 'M5 Pro', 'M4 Pro', True), ('Thunderbolt', 'TB5', 'TB5', False)]},
}

MODEL_NAMES = {
    'iphone-17-pro-max': 'iPhone 17 Pro Max', 'iphone-17-pro': 'iPhone 17 Pro',
    'iphone-17': 'iPhone 17', 'iphone-16-pro-max': 'iPhone 16 Pro Max',
    'iphone-16-pro': 'iPhone 16 Pro', 'iphone-16-plus': 'iPhone 16 Plus',
    'iphone-16': 'iPhone 16', 'iphone-16e': 'iPhone 16e',
    'iphone-15-pro-max': 'iPhone 15 Pro Max', 'iphone-15-pro': 'iPhone 15 Pro',
    'iphone-15-plus': 'iPhone 15 Plus', 'iphone-15': 'iPhone 15',
    'ipad-11-2025': 'iPad 11 (2025)', 'ipad-air-11-m3': 'iPad Air 11" M3',
    'ipad-air-11-m4': 'iPad Air 11" M4', 'ipad-pro-11': 'iPad Pro 11" M5',
    'ipad-pro-13': 'iPad Pro 13" M5',
    'mac-mini-m4': 'Mac mini M4', 'macbook-neo': 'MacBook Neo',
    'macbook-air-13-m2': 'MacBook Air 13" M2', 'macbook-air-13-m5': 'MacBook Air 13" M5',
    'macbook-air-15-m4': 'MacBook Air 15" M4', 'macbook-air-15-m5': 'MacBook Air 15" M5',
    'macbook-pro-14-m5': 'MacBook Pro 14" M5', 'macbook-pro-14-m5-pro': 'MacBook Pro 14" M5 Pro',
}

CAT_TITLE = {'iphone': 'смартфон', 'ipad': 'планшет', 'macbook': 'ноутбук'}

UPSELL_BY_CAT = {
    'iphone': [
        ('charger-20w',   'Блок питания Apple 20W USB-C',  'В коробке iPhone только кабель — рекомендуем оригинальный адаптер.', 2490, '🔌'),
        ('case-silicone', 'Чехол Silicone Case с MagSafe', 'Защита корпуса с первого дня. Плотная посадка.', 3490, '📱'),
        ('glass',         'Защитное стекло + установка',    'Наклеим за 5 минут в магазине.', 990, '🛡️'),
        ('cardholder',    'Картхолдер MagSafe',             'Держатель для карт на MagSafe.', 1290, '💳'),
    ],
    'ipad': [
        ('apple-pencil',  'Apple Pencil Pro',               'Для рисования, заметок, документов. Магнитная зарядка.', 14900, '✏️'),
        ('magic-keyboard','Magic Keyboard для iPad',         'Тачпад, подсветка клавиш, USB-C для зарядки.', 19900, '⌨️'),
        ('ipad-case',     'Smart Folio чехол',              'Защита экрана, функция подставки. Оригинал Apple.', 3490, '📱'),
        ('charger-30w',   'Блок питания Apple 30W USB-C',   'Быстрая зарядка для iPad.', 3490, '🔌'),
    ],
    'macbook': [
        ('magic-mouse',   'Magic Mouse',                     'Беспроводная мышь Apple. Жесты Multi-Touch.', 8990, '🖱️'),
        ('magic-keyboard','Magic Keyboard с Touch ID',       'Беспроводная клавиатура с Touch ID.', 12990, '⌨️'),
        ('usb-c-hub',     'USB-C Hub (HDMI + USB-A + SD)',   'Расширение разъёмов для MacBook.', 3490, '🔌'),
        ('macbook-sleeve','Чехол-конверт для MacBook',       'Защита от царапин.', 2490, '💼'),
    ],
}


def generate_category_ts(category, configs):
    lines = [
        f'/** {category}-configs.ts — АВТОГЕНЕРАЦИЯ (не редактировать вручную) */',
        'import type { ProductConfig, UpsellItem } from "../product-configs";',
        '',
        'const UPSELL: UpsellItem[] = [',
    ]
    for uid, name, desc, price, emoji in UPSELL_BY_CAT[category]:
        lines.append(f'  {{ id: {ts_str(uid)}, name: {ts_str(name)}, description: {ts_str(desc)}, price: {price}, emoji: {ts_str(emoji)} }},')
    lines.append('];')
    lines.append('')

    for slug, cfg in configs.items():
        meta = MODEL_META.get(slug, {})
        const_name = re.sub(r'[^A-Z0-9]', '_', slug.upper()) + '_CONFIG'
        lines.append(f'const {const_name}: ProductConfig = {{')
        lines.append(f'  slug: {ts_str(slug)},')
        lines.append(f'  category: {ts_str(category)},')
        lines.append('  colors: [')
        for c in cfg['colors']:
            lines.append(f'    {{ id: {ts_str(c["id"])}, name: {ts_str(c["name"])}, hex: {ts_str(c["hex"])}, image: {ts_str(c["image"])} }},')
        lines.append('  ],')
        lines.append('  storage: [')
        for s in cfg['storage']:
            lines.append(f'    {{ id: {ts_str(s["id"])}, label: {ts_str(s["label"])}, available: true }},')
        lines.append('  ],')
        lines.append('  sim: [')
        for s in cfg['sim']:
            lines.append(f'    {{ id: {ts_str(s["id"])}, label: {ts_str(s["label"])}, description: {ts_str(s["description"])} }},')
        lines.append('  ],')
        lines.append('  prices: [')
        for p in cfg['prices']:
            lines.append(f'    {{ storageId: {ts_str(p["storageId"])}, colorId: {ts_str(p["colorId"])}, simId: {ts_str(p["simId"])}, price: {p["price"]} }},')
        lines.append('  ],')
        lines.append(f'  defaultStorage: {ts_str(cfg["defaultStorage"])},')
        lines.append(f'  defaultColor: {ts_str(cfg["defaultColor"])},')
        lines.append(f'  defaultSim: {ts_str(cfg["defaultSim"])},')
        lines.append(f'  priceFrom: {cfg["priceFrom"]},')

        if category == 'iphone':
            lines.append('  storageLabel: "Объём памяти",')
            lines.append('  showSim: true,')
        elif category == 'ipad':
            show = len(cfg['sim']) > 1
            lines.append('  storageLabel: "Объём памяти",')
            lines.append(f'  showSim: {"true" if show else "false"},')
        else:
            lines.append('  storageLabel: "Конфигурация RAM/SSD",')
            lines.append('  showSim: false,')

        lines.append('  specs: [')
        for lbl, val in meta.get('specs', []):
            lines.append(f'    {{ label: {ts_str(lbl)}, value: {ts_str(val)} }},')
        lines.append('  ],')
        lines.append(f'  compareTitle: {ts_str(meta.get("compareTitle", ""))},')
        lines.append('  compare: [')
        for lbl, cur, prev, better in meta.get('compare', []):
            lines.append(f'    {{ label: {ts_str(lbl)}, current: {ts_str(cur)}, previous: {ts_str(prev)}, better: {"true" if better else "false"} }},')
        lines.append('  ],')
        lines.append('  upsell: UPSELL,')

        name = MODEL_NAMES.get(slug, slug)
        pf = f'{cfg["priceFrom"]:,}'.replace(',', ' ')
        ct = CAT_TITLE[category]

        seo_text = (f"{name} — популярный {ct} Apple в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. "
                    f"Цена от {pf} ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, "
                    f"бесплатная доставка в день заказа.")
        why_text = (f"В ЭПЛ-КОЛЛЕКЦИЯ каждый {name} проходит проверку перед продажей: "
                    f"тестируем все функции, проверяем серийный номер по базе Apple, "
                    f"активируем и настраиваем устройство прямо в магазине.")

        lines.append(f'  seoH2: {ts_str(f"Купить {name} в Казани")},')
        lines.append(f'  seoText: {ts_str(seo_text)},')
        lines.append(f'  seoH2Why: {ts_str(f"Почему {name} стоит купить у нас?")},')
        lines.append(f'  seoTextWhy: {ts_str(why_text)},')
        if category == 'iphone':
            lines.append(f'  seoH2Sim: {ts_str(f"Какую версию {name} выбрать?")},')
            lines.append(f'  seoTextSim: {ts_str("Nano-SIM + eSIM (Европа/РФ) подходит для большинства операторов. Версия eSIM (США) — только виртуальные SIM. Уточняйте у менеджера.")},')
        elif category == 'ipad' and any(s['id'] == 'lte' for s in cfg['sim']):
            lines.append(f'  seoH2Sim: {ts_str("Wi-Fi или Wi-Fi + Cellular?")},')
            lines.append(f'  seoTextSim: {ts_str("Wi-Fi — дешевле и для дома/офиса. Cellular (LTE) — мобильный интернет в любом месте через eSIM.")},')

        lines.append('};')
        lines.append('')

    lines.append('const configs: Record<string, ProductConfig> = {')
    for slug in configs:
        const_name = re.sub(r'[^A-Z0-9]', '_', slug.upper()) + '_CONFIG'
        lines.append(f'  {ts_str(slug)}: {const_name},')
    lines.append('};')
    lines.append('')
    cat_cap = category.capitalize()
    lines.append(f'export function get{cat_cap}Config(slug: string): ProductConfig | undefined {{')
    lines.append('  return configs[slug];')
    lines.append('}')
    lines.append('')
    lines.append(f'export const {category.upper()}_CONFIG_SLUGS = Object.keys(configs);')
    lines.append('')
    return '\n'.join(lines)


def main():
    Path(OUT_DIR).mkdir(parents=True, exist_ok=True)

    iphone_raw = parse_iphone()
    iphone_order = ['iphone-17-pro-max', 'iphone-17-pro', 'iphone-17',
                    'iphone-16-pro-max', 'iphone-16-pro', 'iphone-16-plus', 'iphone-16', 'iphone-16e',
                    'iphone-15-pro-max', 'iphone-15-pro', 'iphone-15-plus', 'iphone-15']
    iphone_cfgs = OrderedDict()
    for slug in iphone_order:
        if slug in iphone_raw and iphone_raw[slug]:
            iphone_cfgs[slug] = build_config(slug, iphone_raw[slug], 'iphone', DEFAULT_SIM_IPHONE)

    ipad_raw = parse_ipad()
    ipad_order = ['ipad-11-2025', 'ipad-air-11-m3', 'ipad-air-11-m4', 'ipad-pro-11', 'ipad-pro-13']
    ipad_cfgs = OrderedDict()
    for slug in ipad_order:
        if slug in ipad_raw and ipad_raw[slug]:
            ipad_cfgs[slug] = build_config(slug, ipad_raw[slug], 'ipad', DEFAULT_SIM_WIFI)

    mac_raw = parse_macbook()
    mac_order = ['mac-mini-m4', 'macbook-neo', 'macbook-air-13-m2', 'macbook-air-13-m5',
                 'macbook-air-15-m4', 'macbook-air-15-m5', 'macbook-pro-14-m5', 'macbook-pro-14-m5-pro']
    mac_cfgs = OrderedDict()
    for slug in mac_order:
        if slug in mac_raw and mac_raw[slug]:
            mac_cfgs[slug] = build_config(slug, mac_raw[slug], 'macbook', DEFAULT_SIM_NONE)

    Path(f'{OUT_DIR}/iphone-configs.ts').write_text(generate_category_ts('iphone', iphone_cfgs), encoding='utf-8')
    Path(f'{OUT_DIR}/ipad-configs.ts').write_text(generate_category_ts('ipad', ipad_cfgs), encoding='utf-8')
    Path(f'{OUT_DIR}/macbook-configs.ts').write_text(generate_category_ts('macbook', mac_cfgs), encoding='utf-8')

    index_lines = [
        '/** Автогенерация — индекс конфигов */',
        'import type { ProductConfig } from "../product-configs";',
        'import { getIphoneConfig } from "./iphone-configs";',
        'import { getIpadConfig } from "./ipad-configs";',
        'import { getMacbookConfig } from "./macbook-configs";',
        '',
        'export { IPHONE_CONFIG_SLUGS } from "./iphone-configs";',
        'export { IPAD_CONFIG_SLUGS } from "./ipad-configs";',
        'export { MACBOOK_CONFIG_SLUGS } from "./macbook-configs";',
        '',
        'export function getProductConfig(category: string, slug: string): ProductConfig | undefined {',
        '  if (category === "iphone")  return getIphoneConfig(slug);',
        '  if (category === "ipad")    return getIpadConfig(slug);',
        '  if (category === "macbook") return getMacbookConfig(slug);',
        '  return undefined;',
        '}',
        '',
    ]
    Path(f'{OUT_DIR}/index.ts').write_text('\n'.join(index_lines), encoding='utf-8')

    print("\n=== Результаты ===\n")
    for cat_name, cfgs in [('iPhone', iphone_cfgs), ('iPad', ipad_cfgs), ('MacBook', mac_cfgs)]:
        print(f"📱 {cat_name}: {len(cfgs)} моделей")
        for slug, cfg in cfgs.items():
            nm = MODEL_NAMES.get(slug, slug)
            pf = f'{cfg["priceFrom"]:,}'.replace(',', ' ')
            print(f"   • {nm}: {len(cfg['colors'])} цв × {len(cfg['storage'])} памяти × {len(cfg['sim'])} SIM = {len(cfg['prices'])} конфигов | от {pf} ₽")
        print()

    print(f"✅ Файлы в {OUT_DIR}/")


if __name__ == '__main__':
    main()
