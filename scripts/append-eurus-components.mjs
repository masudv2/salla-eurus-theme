/**
 * One-shot: append Eurus homepage component definitions to twilight.json
 * Run: node scripts/append-eurus-components.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const twilightPath = path.join(root, 'twilight.json');

const fieldTitle = {
  id: 'title',
  type: 'string',
  format: 'text',
  label: 'عنوان القسم',
  multilanguage: true,
  required: false,
  icon: 'sicon-format-text-alt',
  placeholder: 'Section title',
  value: { en: 'Eurus section', ar: 'قسم يوروس' },
};

const staticDesc = (id, html) => ({
  type: 'static',
  format: 'description',
  id,
  value: `<div class="text-sm opacity-80">${html}</div>`,
});

const mk = (key, slug, titleEn, titleAr, icon, extraFields = []) => ({
  key,
  title: { en: titleEn, ar: titleAr },
  icon,
  path: `home.${slug}`,
  fields: [
    staticDesc(
      `${slug}-help`,
      `Placeholder block — replace content in theme or merchant settings.`
    ),
    fieldTitle,
    ...extraFields,
  ],
});

const newComponents = [
  mk(
    'a1111111-1111-4111-8111-111111111101',
    'eurus-hero',
    'Eurus: Hero',
    'يوروس: البطل',
    'sicon-image-carousel'
  ),
  mk(
    'a1111111-1111-4111-8111-111111111102',
    'eurus-promo-strip',
    'Eurus: Promo strip',
    'يوروس: شريط عرض',
    'sicon-discount-coupon'
  ),
  mk(
    'a1111111-1111-4111-8111-111111111103',
    'eurus-category-pills',
    'Eurus: Category pills',
    'يوروس: تصنيفات',
    'sicon-layout-grid-rearrange'
  ),
  mk(
    'a1111111-1111-4111-8111-111111111104',
    'eurus-featured-row',
    'Eurus: Featured row',
    'يوروس: صف مميز',
    'sicon-product'
  ),
  mk(
    'a1111111-1111-4111-8111-111111111105',
    'eurus-category-stats',
    'Eurus: Category stats',
    'يوروس: إحصائيات التصنيف',
    'sicon-list-add'
  ),
  mk(
    'a1111111-1111-4111-8111-111111111106',
    'eurus-split-banner',
    'Eurus: Split banner',
    'يوروس: بانر مقسوم',
    'sicon-image'
  ),
  mk(
    'a1111111-1111-4111-8111-111111111107',
    'eurus-product-grid',
    'Eurus: Product grid',
    'يوروس: شبكة منتجات',
    'sicon-product'
  ),
  mk(
    'a1111111-1111-4111-8111-111111111108',
    'eurus-countdown-sale',
    'Eurus: Countdown sale',
    'يوروس: عد تنازلي',
    'sicon-stopwatch'
  ),
  mk(
    'a1111111-1111-4111-8111-111111111109',
    'eurus-bundle-builder',
    'Eurus: Bundle builder',
    'يوروس: بناء الحزمة',
    'sicon-shopping-bag'
  ),
  mk(
    'a1111111-1111-4111-8111-111111111110',
    'eurus-trust-marquee',
    'Eurus: Trust marquee',
    'يوروس: شريط ثقة',
    'sicon-award-ribbon'
  ),
  mk(
    'a1111111-1111-4111-8111-111111111111',
    'eurus-shoppable-image',
    'Eurus: Shoppable image',
    'يوروس: صورة تفاعلية',
    'sicon-image'
  ),
  mk(
    'a1111111-1111-4111-8111-111111111112',
    'eurus-skin-tabs',
    'Eurus: Skin tabs',
    'يوروس: تبويب البشرة',
    'sicon-filter'
  ),
  mk(
    'a1111111-1111-4111-8111-111111111113',
    'eurus-before-after',
    'Eurus: Before / After',
    'يوروس: قبل وبعد',
    'sicon-image'
  ),
  mk(
    'a1111111-1111-4111-8111-111111111114',
    'eurus-video-product',
    'Eurus: Video product',
    'يوروس: فيديو منتج',
    'sicon-video-player'
  ),
  mk(
    'a1111111-1111-4111-8111-111111111115',
    'eurus-routine-steps',
    'Eurus: Routine steps',
    'يوروس: خطوات الروتين',
    'sicon-list-number'
  ),
  mk(
    'a1111111-1111-4111-8111-111111111116',
    'eurus-philosophy-split',
    'Eurus: Philosophy split',
    'يوروس: فلسفة',
    'sicon-article'
  ),
  mk(
    'a1111111-1111-4111-8111-111111111117',
    'eurus-brand-timeline',
    'Eurus: Brand timeline',
    'يوروس: الخط الزمني',
    'sicon-calendar-date'
  ),
  mk(
    'a1111111-1111-4111-8111-111111111118',
    'eurus-testimonials-block',
    'Eurus: Testimonials',
    'يوروس: آراء العملاء',
    'sicon-chat-bubbles'
  ),
  mk(
    'a1111111-1111-4111-8111-111111111119',
    'eurus-social-gallery',
    'Eurus: Social gallery',
    'يوروس: معرض اجتماعي',
    'sicon-instagram'
  ),
  mk(
    'a1111111-1111-4111-8111-111111111120',
    'eurus-newsletter',
    'Eurus: Newsletter',
    'يوروس: النشرة',
    'sicon-email-send'
  ),
];

const raw = fs.readFileSync(twilightPath, 'utf8');
const json = JSON.parse(raw);
const last = json.components[json.components.length - 1];
if (last && last.path && last.path.startsWith('home.eurus-')) {
  console.error('Eurus components already appended. Aborting.');
  process.exit(1);
}
json.components.push(...newComponents);
fs.writeFileSync(twilightPath, JSON.stringify(json, null, 4) + '\n', 'utf8');
console.log(`Appended ${newComponents.length} Eurus components to twilight.json`);
