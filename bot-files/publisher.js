// publisher.js — публикация карточек в Telegram-канал и ВК группу
import 'dotenv/config';
import axios from 'axios';
import fs from 'fs';
import FormData from 'form-data';

const TG_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TG_CHANNEL_ID = process.env.TG_CHANNEL_ID; // -1003862359021
const VK_TOKEN = process.env.VK_TOKEN;
const VK_GROUP_ID = process.env.VK_GROUP_ID;
const VK_API_VERSION = '5.199';
const SITE_URL = process.env.SITE_URL || 'https://xn----jtbjgbccazg9frdtb.xn--p1ai';

/**
 * Формирует красивый текст карточки для публикации
 */
export function formatCard(listing, { withSiteLink = true, withSoldMark = false } = {}) {
  const lines = [];

  if (withSoldMark) lines.push('🔴 ПРОДАНО', '');

  // Заголовок
  const titleParts = [listing.model];
  if (listing.storage) titleParts.push(listing.storage);
  if (listing.color) titleParts.push(listing.color);
  lines.push('📱 ' + titleParts.join(' • '));
  lines.push('');

  // Цена
  if (listing.price && !withSoldMark) {
    lines.push(`💰 ${listing.price.toLocaleString('ru-RU')} ₽`);
    lines.push('');
  }

  // Характеристики
  if (listing.simType) lines.push(`📶 ${listing.simType}`);
  if (listing.battery) lines.push(`🔋 АКБ ${listing.battery}%${listing.cycles ? `, ${listing.cycles} циклов` : ''}`);
  if (listing.condition) lines.push(`✨ Состояние: ${listing.condition}`);

  if (listing.description) {
    lines.push('');
    lines.push(listing.description);
  }

  if (withSiteLink && listing.slug && !withSoldMark) {
    lines.push('');
    lines.push(`🛒 Купить: ${SITE_URL}/bu-iphone/item?slug=${listing.slug}`);
  }

  if (!withSoldMark) {
    lines.push('');
    lines.push('💬 ЭПЛ-КОЛЛЕКЦИЯ Казань · @ac_care');
  }

  return lines.join('\n');
}

/**
 * Публикует в Telegram-канал (фото + подпись)
 * @returns {Promise<{message_id: number, chat_id: number}>}
 */
export async function publishToTelegram(listing, photoPaths) {
  if (!TG_CHANNEL_ID) throw new Error('TG_CHANNEL_ID не указан в .env');
  if (!photoPaths || photoPaths.length === 0) throw new Error('Нет фото для публикации');

  const caption = formatCard(listing);

  // Если 1 фото — отправляем как sendPhoto
  if (photoPaths.length === 1) {
    const form = new FormData();
    form.append('chat_id', TG_CHANNEL_ID);
    form.append('caption', caption);
    form.append('photo', fs.createReadStream(photoPaths[0]));

    const res = await axios.post(
      `https://api.telegram.org/bot${TG_BOT_TOKEN}/sendPhoto`,
      form,
      { headers: form.getHeaders(), timeout: 30000, maxContentLength: Infinity, maxBodyLength: Infinity }
    );

    if (!res.data.ok) throw new Error(`TG: ${res.data.description}`);
    return { message_id: res.data.result.message_id, chat_id: res.data.result.chat.id };
  }

  // Несколько фото — sendMediaGroup, подпись только у первого
  const media = photoPaths.map((p, i) => ({
    type: 'photo',
    media: `attach://photo${i}`,
    ...(i === 0 ? { caption } : {}),
  }));

  const form = new FormData();
  form.append('chat_id', TG_CHANNEL_ID);
  form.append('media', JSON.stringify(media));
  photoPaths.forEach((p, i) => {
    form.append(`photo${i}`, fs.createReadStream(p));
  });

  const res = await axios.post(
    `https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMediaGroup`,
    form,
    { headers: form.getHeaders(), timeout: 60000, maxContentLength: Infinity, maxBodyLength: Infinity }
  );

  if (!res.data.ok) throw new Error(`TG: ${res.data.description}`);
  // sendMediaGroup возвращает массив — берём первый message_id
  return { message_id: res.data.result[0].message_id, chat_id: res.data.result[0].chat.id };
}

/**
 * Отметить пост в Telegram как проданный (редактирует подпись)
 */
export async function markTelegramSold(messageId, listing) {
  if (!TG_CHANNEL_ID) return;
  const caption = formatCard(listing, { withSoldMark: true });

  try {
    await axios.post(`https://api.telegram.org/bot${TG_BOT_TOKEN}/editMessageCaption`, {
      chat_id: TG_CHANNEL_ID,
      message_id: messageId,
      caption,
    });
  } catch (e) {
    console.error('[publisher] editMessageCaption error:', e.response?.data?.description || e.message);
  }
}

/**
 * Удалить пост в Telegram
 */
export async function deleteTelegramPost(messageId) {
  if (!TG_CHANNEL_ID) return;
  try {
    await axios.post(`https://api.telegram.org/bot${TG_BOT_TOKEN}/deleteMessage`, {
      chat_id: TG_CHANNEL_ID,
      message_id: messageId,
    });
  } catch (e) {
    console.error('[publisher] deleteMessage error:', e.response?.data?.description || e.message);
  }
}

/**
 * Загружает фото на ВК-сервер для стены группы
 * @returns {Promise<string>} строка для attachments вида "photo-XXX_YYY"
 */
async function uploadPhotoToVK(photoPath) {
  // Шаг 1: получить upload URL для стены
  const serverRes = await axios.get('https://api.vk.com/method/photos.getWallUploadServer', {
    params: { group_id: VK_GROUP_ID, access_token: VK_TOKEN, v: VK_API_VERSION },
    timeout: 30000,
  });
  if (serverRes.data.error) throw new Error(`VK getWallUploadServer: ${serverRes.data.error.error_msg}`);
  const uploadUrl = serverRes.data.response.upload_url;

  // Шаг 2: загрузить файл
  const form = new FormData();
  form.append('photo', fs.createReadStream(photoPath));
  const uploadRes = await axios.post(uploadUrl, form, {
    headers: form.getHeaders(), timeout: 60000,
    maxContentLength: Infinity, maxBodyLength: Infinity,
  });

  const { server, photo, hash } = uploadRes.data;
  if (!photo || photo === '[]') throw new Error('VK upload: пустой ответ');

  // Шаг 3: сохранить фото в альбоме группы
  const saveRes = await axios.get('https://api.vk.com/method/photos.saveWallPhoto', {
    params: {
      group_id: VK_GROUP_ID,
      server, photo, hash,
      access_token: VK_TOKEN, v: VK_API_VERSION,
    },
    timeout: 30000,
  });
  if (saveRes.data.error) throw new Error(`VK saveWallPhoto: ${saveRes.data.error.error_msg}`);

  const saved = saveRes.data.response[0];
  return `photo${saved.owner_id}_${saved.id}`;
}

/**
 * Публикует в ВК на стену группы
 * @returns {Promise<{post_id: number}>}
 */
export async function publishToVK(listing, photoPaths) {
  if (!VK_TOKEN || !VK_GROUP_ID) throw new Error('VK_TOKEN или VK_GROUP_ID не указан');
  if (!photoPaths || photoPaths.length === 0) throw new Error('Нет фото для публикации');

  // Загружаем все фото на ВК
  const attachments = [];
  for (const path of photoPaths.slice(0, 10)) { // ВК максимум 10 attachments
    try {
      const att = await uploadPhotoToVK(path);
      attachments.push(att);
    } catch (e) {
      console.error('[publisher] VK upload photo error:', e.message);
    }
  }

  if (attachments.length === 0) throw new Error('Не удалось загрузить ни одного фото в ВК');

  const message = formatCard(listing, { withSiteLink: true });

  const postRes = await axios.post('https://api.vk.com/method/wall.post', null, {
    params: {
      owner_id: `-${VK_GROUP_ID}`,
      from_group: 1,
      message,
      attachments: attachments.join(','),
      access_token: VK_TOKEN,
      v: VK_API_VERSION,
    },
    timeout: 30000,
  });

  if (postRes.data.error) throw new Error(`VK wall.post: ${postRes.data.error.error_msg}`);
  return { post_id: postRes.data.response.post_id };
}

/**
 * Отметить пост ВК как проданный (редактирует текст)
 */
export async function markVKSold(postId, listing) {
  if (!VK_TOKEN || !VK_GROUP_ID) return;
  const message = formatCard(listing, { withSoldMark: true, withSiteLink: false });

  try {
    await axios.post('https://api.vk.com/method/wall.edit', null, {
      params: {
        owner_id: `-${VK_GROUP_ID}`,
        post_id: postId,
        message,
        access_token: VK_TOKEN,
        v: VK_API_VERSION,
      },
      timeout: 30000,
    });
  } catch (e) {
    console.error('[publisher] VK edit error:', e.message);
  }
}

/**
 * Удалить пост ВК
 */
export async function deleteVKPost(postId) {
  if (!VK_TOKEN || !VK_GROUP_ID) return;
  try {
    await axios.post('https://api.vk.com/method/wall.delete', null, {
      params: {
        owner_id: `-${VK_GROUP_ID}`,
        post_id: postId,
        access_token: VK_TOKEN,
        v: VK_API_VERSION,
      },
      timeout: 30000,
    });
  } catch (e) {
    console.error('[publisher] VK delete error:', e.message);
  }
}
