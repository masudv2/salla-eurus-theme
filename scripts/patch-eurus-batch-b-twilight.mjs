/**
 * Replaces `fields` for batch-B Eurus components (Task 6).
 * Run once: node scripts/patch-eurus-batch-b-twilight.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const twilightPath = path.join(__dirname, '..', 'twilight.json');

const fieldsByPath = {
  'home.eurus-product-grid': [
    {
      type: 'static',
      format: 'description',
      id: 'eurus-pgrid-help',
      value: '<div class="text-sm">Carousel or grid of selected products.</div>',
    },
    {
      id: 'title',
      type: 'string',
      format: 'text',
      label: 'Section title',
      multilanguage: true,
      icon: 'sicon-format-text-alt',
      value: { en: 'The Black Friday wellness kit.', ar: 'عروض الجمعة البيضاء.' },
    },
    {
      id: 'subtitle',
      type: 'string',
      format: 'textarea',
      label: 'Subtitle',
      multilanguage: true,
      icon: 'sicon-typography',
      required: false,
      value: {
        en: 'Four travel-sized remedies for jet lag, tension, dry skin, and summer stress.',
        ar: 'أربعة حلول للعناية بالبشرة أثناء السفر.',
      },
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
      maxLength: 12,
      minLength: 1,
      value: [],
    },
  ],

  'home.eurus-countdown-sale': [
    {
      type: 'static',
      format: 'description',
      id: 'eurus-countdown-help',
      value: '<div class="text-sm">Countdown banner with end date + CTA.</div>',
    },
    {
      id: 'heading',
      type: 'string',
      format: 'text',
      label: 'Heading',
      multilanguage: true,
      icon: 'sicon-format-text-alt',
      value: { en: 'Mega Deal 70% OFF', ar: 'عرض ضخم خصم 70٪' },
    },
    {
      id: 'subheading',
      type: 'string',
      format: 'textarea',
      label: 'Sub-heading',
      multilanguage: true,
      icon: 'sicon-typography',
      required: false,
      value: {
        en: 'Going fast! Secure your order while supplies last.',
        ar: 'أسرع! احجز طلبك قبل نفاد الكمية.',
      },
    },
    {
      id: 'end_date',
      type: 'string',
      format: 'text',
      label: 'End date/time (ISO 8601)',
      icon: 'sicon-calendar-date',
      required: true,
      placeholder: '2026-12-31T23:59:59',
      value: '2026-12-31T23:59:59',
    },
    {
      id: 'cta_label',
      type: 'string',
      format: 'text',
      label: 'CTA label',
      multilanguage: true,
      icon: 'sicon-format-text-alt',
      value: { en: 'Shop sales', ar: 'تسوق العروض' },
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

  'home.eurus-bundle-builder': [
    {
      type: 'static',
      format: 'description',
      id: 'eurus-bundle-help',
      value:
        '<div class="text-sm">Multi-step bundle UI. Add steps with products; tiered discounts are UI-only — actual discounts require Salla bundles/offers configuration.</div>',
    },
    {
      id: 'heading',
      type: 'string',
      format: 'text',
      label: 'Heading',
      multilanguage: true,
      icon: 'sicon-format-text-alt',
      value: { en: 'Unbeatable prices with bundle.', ar: 'أسعار لا تُقاوم مع الحزمة.' },
    },
    {
      id: 'description',
      type: 'string',
      format: 'textarea',
      label: 'Description',
      multilanguage: true,
      icon: 'sicon-typography',
      required: false,
      value: {
        en: 'Create your personalized skincare ritual and unlock exclusive savings.',
        ar: 'صمّم روتين العناية ببشرتك واحصل على خصومات حصرية.',
      },
    },
    {
      id: 'steps',
      type: 'collection',
      format: 'collection',
      required: true,
      minLength: 1,
      maxLength: 5,
      item_label: 'Step',
      label: 'Steps',
      value: [
        {
          'steps.label': { en: 'Prep Your Skin', ar: 'حضّر بشرتك' },
          'steps.icon': 'sicon-sun',
        },
        {
          'steps.label': { en: 'Treat & Nourish', ar: 'عالج وغذّ' },
          'steps.icon': 'sicon-heart',
        },
        {
          'steps.label': { en: 'Lock the Glow', ar: 'ثبّت اللمعان' },
          'steps.icon': 'sicon-star',
        },
      ],
      fields: [
        {
          type: 'string',
          icon: 'sicon-format-text-alt',
          id: 'steps.label',
          label: 'Step label',
          multilanguage: true,
          format: 'text',
          required: true,
        },
        {
          type: 'string',
          icon: 'sicon-format-text-alt',
          id: 'steps.icon',
          label: 'Salla icon class',
          format: 'icon',
          required: false,
          value: 'sicon-star',
        },
      ],
    },
    {
      id: 'tiers',
      type: 'collection',
      format: 'collection',
      required: false,
      minLength: 1,
      maxLength: 5,
      item_label: 'Tier',
      label: 'Discount tiers (informational)',
      value: [
        { 'tiers.label': '5% off', 'tiers.min_items': 2 },
        { 'tiers.label': '10% off', 'tiers.min_items': 4 },
        { 'tiers.label': '15% off', 'tiers.min_items': 6 },
      ],
      fields: [
        {
          type: 'string',
          icon: 'sicon-format-text-alt',
          id: 'tiers.label',
          label: 'Tier label',
          format: 'text',
          required: true,
        },
        {
          type: 'number',
          icon: 'sicon-pencil-ruler',
          id: 'tiers.min_items',
          label: 'Min items',
          format: 'integer',
          required: true,
          minimum: 1,
          maximum: 20,
          value: 2,
        },
      ],
    },
  ],

  'home.eurus-trust-marquee': [
    {
      type: 'static',
      format: 'description',
      id: 'eurus-marquee-help',
      value: '<div class="text-sm">Scrolling or static badges row (Award-Winning, Plant-Powered, etc.).</div>',
    },
    {
      id: 'badges',
      type: 'collection',
      format: 'collection',
      required: true,
      minLength: 2,
      maxLength: 12,
      item_label: 'Badge',
      label: 'Badges',
      value: [
        { 'badges.icon': 'sicon-award-ribbon', 'badges.label': { en: 'AWARD-WINNING', ar: 'حائز على جوائز' } },
        { 'badges.icon': 'sicon-leaf', 'badges.label': { en: 'PLANT-POWERED', ar: 'مكونات نباتية' } },
        { 'badges.icon': 'sicon-heart', 'badges.label': { en: 'CRUELTY-FREE', ar: 'لم يُختبر على الحيوانات' } },
        { 'badges.icon': 'sicon-check-circle', 'badges.label': { en: 'ORGANIC', ar: 'عضوي' } },
      ],
      fields: [
        {
          type: 'string',
          icon: 'sicon-format-text-alt',
          id: 'badges.icon',
          label: 'Icon class',
          format: 'icon',
          required: false,
        },
        {
          type: 'string',
          icon: 'sicon-format-text-alt',
          id: 'badges.label',
          label: 'Label',
          multilanguage: true,
          format: 'text',
          required: true,
        },
      ],
    },
    {
      id: 'animate',
      type: 'boolean',
      format: 'switch',
      label: 'Animate / scroll',
      icon: 'sicon-toggle-off',
      value: true,
      selected: true,
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
console.log('Patched batch-B fields for', patched, 'components');
