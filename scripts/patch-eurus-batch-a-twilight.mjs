/**
 * Replaces `fields` for batch-A Eurus components (Task 5).
 * Run once: node scripts/patch-eurus-batch-a-twilight.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const twilightPath = path.join(__dirname, '..', 'twilight.json');

const fieldsByPath = {
  'home.eurus-hero': [
    {
      type: 'static',
      format: 'description',
      id: 'eurus-hero-desc',
      value:
        '<div class="text-sm">Eurus hero: image + editorial text + two CTAs per slide.</div>',
    },
    {
      id: 'slides',
      type: 'collection',
      format: 'collection',
      required: true,
      minLength: 1,
      maxLength: 10,
      item_label: 'Slide',
      label: null,
      value: [
        {
          'slides.image':
            'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1200&q=80',
          'slides.eyebrow': { en: 'UP TO 50% OFF', ar: 'خصم حتى 50٪' },
          'slides.title': { en: 'Mastering the', ar: 'إتقان' },
          'slides.title_accent': { en: 'art of skin care.', ar: 'فن العناية بالبشرة.' },
          'slides.description': {
            en: 'Discover curated routines for radiant skin.',
            ar: 'اكتشف روتينات مختارة لبشرة مشرقة.',
          },
          'slides.cta_primary': { en: 'New Arrival', ar: 'وصل حديثاً' },
          'slides.cta_secondary': { en: 'Shop All', ar: 'تسوق الكل' },
          'slides.cta_primary_url': '/',
          'slides.cta_secondary_url': '/',
          'slides.without_overlay': true,
        },
      ],
      fields: [
        {
          type: 'string',
          icon: 'sicon-image',
          id: 'slides.image',
          label: 'Slide image',
          format: 'image',
          required: true,
        },
        {
          type: 'string',
          icon: 'sicon-format-text-alt',
          id: 'slides.eyebrow',
          label: 'Eyebrow',
          multilanguage: true,
          format: 'text',
          required: false,
        },
        {
          type: 'string',
          icon: 'sicon-format-text-alt',
          id: 'slides.title',
          label: 'Heading line 1',
          multilanguage: true,
          format: 'text',
          required: false,
        },
        {
          type: 'string',
          icon: 'sicon-format-text-alt',
          id: 'slides.title_accent',
          label: 'Heading line 2 (accent)',
          multilanguage: true,
          format: 'text',
          required: false,
        },
        {
          type: 'string',
          icon: 'sicon-typography',
          id: 'slides.description',
          label: 'Description',
          multilanguage: true,
          format: 'textarea',
          required: false,
        },
        {
          type: 'string',
          icon: 'sicon-format-text-alt',
          id: 'slides.cta_primary',
          label: 'Primary CTA label',
          multilanguage: true,
          format: 'text',
          required: false,
        },
        {
          type: 'string',
          icon: 'sicon-link',
          id: 'slides.cta_primary_url',
          label: 'Primary CTA URL',
          format: 'text',
          required: false,
          placeholder: '/',
        },
        {
          type: 'string',
          icon: 'sicon-format-text-alt',
          id: 'slides.cta_secondary',
          label: 'Secondary CTA label',
          multilanguage: true,
          format: 'text',
          required: false,
        },
        {
          type: 'string',
          icon: 'sicon-link',
          id: 'slides.cta_secondary_url',
          label: 'Secondary CTA URL',
          format: 'text',
          required: false,
          placeholder: '/',
        },
        {
          type: 'boolean',
          icon: 'sicon-toggle-off',
          id: 'slides.without_overlay',
          label: 'No dark overlay on image',
          format: 'switch',
          value: true,
          selected: true,
        },
      ],
    },
  ],

  'home.eurus-promo-strip': [
    {
      type: 'static',
      format: 'description',
      id: 'eurus-promo-help',
      value: '<div class="text-sm">Promo block: eyebrow + title + accent + body + optional CTA.</div>',
    },
    {
      id: 'eyebrow',
      type: 'string',
      format: 'text',
      label: 'Eyebrow',
      multilanguage: true,
      icon: 'sicon-format-text-alt',
      value: { en: 'BFCM 25 – GIFT MORE, GET MORE', ar: 'عروض الموسم' },
    },
    {
      id: 'heading',
      type: 'string',
      format: 'text',
      label: 'Heading',
      multilanguage: true,
      icon: 'sicon-format-text-alt',
      value: { en: 'Cyber week', ar: 'أسبوع التخفيضات' },
    },
    {
      id: 'heading_accent',
      type: 'string',
      format: 'text',
      label: 'Accent line (italic)',
      multilanguage: true,
      icon: 'sicon-format-text-alt',
      value: { en: '70% off', ar: 'خصم 70٪' },
    },
    {
      id: 'body',
      type: 'string',
      format: 'textarea',
      label: 'Body',
      multilanguage: true,
      icon: 'sicon-typography',
      value: {
        en: 'Enjoy a complimentary gift with your order. Limited time.',
        ar: 'احصل على هدية مع طلبك لفترة محدودة.',
      },
    },
    {
      id: 'cta_label',
      type: 'string',
      format: 'text',
      label: 'CTA label',
      multilanguage: true,
      icon: 'sicon-format-text-alt',
      value: { en: 'Claim the deals', ar: 'استفد من العروض' },
    },
    {
      id: 'cta_url',
      type: 'string',
      format: 'text',
      label: 'CTA URL',
      icon: 'sicon-link',
      value: '/',
    },
  ],

  'home.eurus-category-pills': [
    {
      type: 'static',
      format: 'description',
      id: 'eurus-pills-help',
      value: '<div class="text-sm">Horizontal category chips with image + label.</div>',
    },
    {
      id: 'section_title',
      type: 'string',
      format: 'text',
      label: 'Section title',
      multilanguage: true,
      icon: 'sicon-format-text-alt',
      value: { en: 'Our holiday picks.', ar: 'اختياراتنا للموسم.' },
    },
    {
      id: 'pills',
      type: 'collection',
      format: 'collection',
      required: true,
      minLength: 2,
      maxLength: 12,
      item_label: 'Category',
      label: 'Items',
      value: [
        {
          'pills.image':
            'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200&q=80',
          'pills.label': { en: 'Saje kits', ar: 'مجموعات' },
          'pills.url': '/',
        },
        {
          'pills.image':
            'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=200&q=80',
          'pills.label': { en: 'Lipstick', ar: 'أحمر شفاه' },
          'pills.url': '/',
        },
      ],
      fields: [
        {
          type: 'string',
          icon: 'sicon-image',
          id: 'pills.image',
          label: 'Image',
          format: 'image',
          required: true,
        },
        {
          type: 'string',
          icon: 'sicon-format-text-alt',
          id: 'pills.label',
          label: 'Label',
          multilanguage: true,
          format: 'text',
          required: true,
        },
        {
          type: 'string',
          icon: 'sicon-link',
          id: 'pills.url',
          label: 'Link URL',
          format: 'text',
          required: true,
          placeholder: '/',
        },
      ],
    },
  ],

  'home.eurus-featured-row': [
    {
      type: 'static',
      format: 'description',
      id: 'eurus-featured-help',
      value: '<div class="text-sm">Product grid from selected products.</div>',
    },
    {
      id: 'title',
      type: 'string',
      format: 'text',
      label: 'Title',
      multilanguage: true,
      icon: 'sicon-format-text-alt',
      value: { en: 'Featured', ar: 'مختارات' },
    },
    {
      id: 'subtitle',
      type: 'string',
      format: 'textarea',
      label: 'Subtitle',
      multilanguage: true,
      icon: 'sicon-typography',
      required: false,
      value: null,
    },
    {
      type: 'items',
      icon: 'sicon-keyboard_arrow_down',
      label: 'Products',
      id: 'products',
      format: 'dropdown-list',
      selected: [],
      options: [],
      required: true,
      multichoice: true,
      source: 'products',
      searchable: true,
      maxLength: 8,
      minLength: 1,
      value: [],
    },
  ],

  'home.eurus-category-stats': [
    {
      type: 'static',
      format: 'description',
      id: 'eurus-stats-help',
      value: '<div class="text-sm">Large category rows with count + oval image.</div>',
    },
    {
      id: 'section_title',
      type: 'string',
      format: 'text',
      label: 'Section title',
      multilanguage: true,
      icon: 'sicon-format-text-alt',
      value: { en: 'Shop by category', ar: 'تسوق حسب التصنيف' },
    },
    {
      id: 'rows',
      type: 'collection',
      format: 'collection',
      required: true,
      minLength: 1,
      maxLength: 12,
      item_label: 'Row',
      label: 'Rows',
      value: [
        {
          'rows.title': { en: 'Cleansers', ar: 'منظفات' },
          'rows.count_text': { en: '65 products', ar: '65 منتجاً' },
          'rows.image':
            'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&q=80',
          'rows.url': '/',
        },
        {
          'rows.title': { en: 'Serums', ar: 'سيروم' },
          'rows.count_text': { en: '41 products', ar: '41 منتجاً' },
          'rows.image':
            'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&q=80',
          'rows.url': '/',
        },
      ],
      fields: [
        {
          type: 'string',
          icon: 'sicon-format-text-alt',
          id: 'rows.title',
          label: 'Category name',
          multilanguage: true,
          format: 'text',
          required: true,
        },
        {
          type: 'string',
          icon: 'sicon-format-text-alt',
          id: 'rows.count_text',
          label: 'Count label',
          multilanguage: true,
          format: 'text',
          required: false,
        },
        {
          type: 'string',
          icon: 'sicon-image',
          id: 'rows.image',
          label: 'Image',
          format: 'image',
          required: true,
        },
        {
          type: 'string',
          icon: 'sicon-link',
          id: 'rows.url',
          label: 'URL',
          format: 'text',
          required: true,
          placeholder: '/',
        },
      ],
    },
  ],

  'home.eurus-split-banner': [
    {
      type: 'static',
      format: 'description',
      id: 'eurus-split-help',
      value: '<div class="text-sm">Image + text split (responsive stack).</div>',
    },
    {
      id: 'image',
      type: 'string',
      format: 'image',
      label: 'Image',
      icon: 'sicon-image',
      required: true,
      value:
        'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=900&q=80',
    },
    {
      id: 'image_on_right',
      type: 'boolean',
      format: 'switch',
      label: 'Image on right (desktop)',
      icon: 'sicon-toggle-off',
      value: false,
      selected: false,
    },
    {
      id: 'title',
      type: 'string',
      format: 'text',
      label: 'Title',
      multilanguage: true,
      icon: 'sicon-format-text-alt',
      value: { en: 'The Black Friday wellness kit.', ar: 'مجموعة العافية.' },
    },
    {
      id: 'description',
      type: 'string',
      format: 'textarea',
      label: 'Description',
      multilanguage: true,
      icon: 'sicon-typography',
      value: {
        en: 'Four travel-sized remedies for jet lag, tension, and dry skin.',
        ar: 'أربع وصفات عملية للعناية أثناء السفر.',
      },
    },
    {
      id: 'cta_label',
      type: 'string',
      format: 'text',
      label: 'CTA label',
      multilanguage: true,
      icon: 'sicon-format-text-alt',
      required: false,
      value: null,
    },
    {
      id: 'cta_url',
      type: 'string',
      format: 'text',
      label: 'CTA URL',
      icon: 'sicon-link',
      required: false,
      value: null,
    },
  ],
};

const raw = fs.readFileSync(twilightPath, 'utf8');
const json = JSON.parse(raw);

let patched = 0;
for (const comp of json.components) {
  if (fieldsByPath[comp.path]) {
    comp.fields = fieldsByPath[comp.path];
    patched++;
  }
}

if (patched !== Object.keys(fieldsByPath).length) {
  console.error('Expected', Object.keys(fieldsByPath).length, 'components, patched', patched);
  process.exit(1);
}

fs.writeFileSync(twilightPath, JSON.stringify(json, null, 4) + '\n', 'utf8');
console.log('Patched batch-A fields for', patched, 'components');
