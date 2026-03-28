/**
 * Replaces `fields` for batch-D Eurus components (Task 8).
 * Run once: node scripts/patch-eurus-batch-d-twilight.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const twilightPath = path.join(__dirname, '..', 'twilight.json');

const fieldsByPath = {

  /* ───────── Routine Steps ───────── */
  'home.eurus-routine-steps': [
    {
      type: 'static',
      format: 'description',
      id: 'eurus-routine-help',
      value: '<div class="text-sm">Numbered skincare routine cards with icons, images, and optional product links.</div>',
    },
    {
      id: 'heading',
      type: 'string',
      format: 'text',
      label: 'Section heading',
      multilanguage: true,
      icon: 'sicon-format-text-alt',
      value: { en: 'Your 3-step ritual.', ar: 'طقوسك في 3 خطوات.' },
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
        en: 'A simple routine for radiant skin — morning and night.',
        ar: 'روتين بسيط لبشرة مشرقة — صباحًا ومساءً.',
      },
    },
    {
      id: 'steps',
      type: 'collection',
      format: 'collection',
      required: true,
      minLength: 2,
      maxLength: 6,
      item_label: 'Step',
      label: 'Routine steps',
      value: [
        {
          'steps.title': { en: 'Cleanse', ar: 'التنظيف' },
          'steps.description': { en: 'Gently remove impurities with our botanical face wash.', ar: 'أزيلي الشوائب بلطف مع غسولنا النباتي للوجه.' },
          'steps.image': '',
          'steps.icon': 'sicon-drop',
          'steps.url': '/',
        },
        {
          'steps.title': { en: 'Treat', ar: 'العلاج' },
          'steps.description': { en: 'Apply the vitamin C serum for brightening and protection.', ar: 'ضعي سيروم فيتامين سي للتفتيح والحماية.' },
          'steps.image': '',
          'steps.icon': 'sicon-flask',
          'steps.url': '/',
        },
        {
          'steps.title': { en: 'Moisturise', ar: 'الترطيب' },
          'steps.description': { en: 'Lock in hydration with our lightweight daily cream.', ar: 'حافظي على الترطيب مع كريمنا اليومي الخفيف.' },
          'steps.image': '',
          'steps.icon': 'sicon-sun',
          'steps.url': '/',
        },
      ],
      fields: [
        {
          type: 'string',
          icon: 'sicon-format-text-alt',
          id: 'steps.title',
          label: 'Step title',
          multilanguage: true,
          format: 'text',
          required: true,
        },
        {
          type: 'string',
          icon: 'sicon-typography',
          id: 'steps.description',
          label: 'Description',
          multilanguage: true,
          format: 'textarea',
          required: false,
        },
        {
          type: 'image',
          icon: 'sicon-photo',
          id: 'steps.image',
          label: 'Step image',
          format: 'image',
          required: false,
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
        {
          type: 'string',
          icon: 'sicon-link',
          id: 'steps.url',
          label: 'Link URL',
          format: 'text',
          required: false,
          value: '/',
        },
      ],
    },
  ],

  /* ───────── Philosophy Split ───────── */
  'home.eurus-philosophy-split': [
    {
      type: 'static',
      format: 'description',
      id: 'eurus-philo-help',
      value: '<div class="text-sm">Full-width split section: large image on one side, editorial brand story on the other.</div>',
    },
    {
      id: 'image',
      type: 'image',
      format: 'image',
      label: 'Section image',
      icon: 'sicon-photo',
      required: false,
      value: '',
    },
    {
      id: 'image_on_right',
      type: 'boolean',
      format: 'switch',
      label: 'Image on right',
      icon: 'sicon-toggle-off',
      value: false,
      selected: false,
    },
    {
      id: 'eyebrow',
      type: 'string',
      format: 'text',
      label: 'Eyebrow',
      multilanguage: true,
      icon: 'sicon-format-text-alt',
      required: false,
      value: { en: 'OUR PHILOSOPHY', ar: 'فلسفتنا' },
    },
    {
      id: 'title',
      type: 'string',
      format: 'text',
      label: 'Title',
      multilanguage: true,
      icon: 'sicon-format-text-alt',
      value: { en: 'Beauty rooted in nature.', ar: 'جمال متجذر في الطبيعة.' },
    },
    {
      id: 'body',
      type: 'string',
      format: 'textarea',
      label: 'Body text',
      multilanguage: true,
      icon: 'sicon-typography',
      required: false,
      value: {
        en: 'We believe in harnessing the power of botanicals, ethically sourced and crafted with care. Every formula is dermatologist-tested, cruelty-free, and designed to let your natural glow shine through.',
        ar: 'نؤمن بتسخير قوة النباتات، المصدرة بأخلاقية والمصنوعة بعناية. كل تركيبة مختبرة من أطباء الجلدية، ولم تُختبر على الحيوانات، ومصممة لإبراز توهجك الطبيعي.',
      },
    },
    {
      id: 'values',
      type: 'collection',
      format: 'collection',
      required: false,
      minLength: 1,
      maxLength: 6,
      item_label: 'Value',
      label: 'Brand values / stats',
      value: [
        { 'values.stat': '100%', 'values.label': { en: 'Vegan', ar: 'نباتي' } },
        { 'values.stat': '50+', 'values.label': { en: 'Botanicals', ar: 'نبتة' } },
        { 'values.stat': '0', 'values.label': { en: 'Parabens', ar: 'بارابين' } },
      ],
      fields: [
        {
          type: 'string',
          icon: 'sicon-pencil-ruler',
          id: 'values.stat',
          label: 'Stat / number',
          format: 'text',
          required: true,
        },
        {
          type: 'string',
          icon: 'sicon-format-text-alt',
          id: 'values.label',
          label: 'Label',
          multilanguage: true,
          format: 'text',
          required: true,
        },
      ],
    },
    {
      id: 'cta_label',
      type: 'string',
      format: 'text',
      label: 'CTA label',
      multilanguage: true,
      icon: 'sicon-format-text-alt',
      required: false,
      value: { en: 'Learn more', ar: 'اعرف المزيد' },
    },
    {
      id: 'cta_url',
      type: 'string',
      format: 'text',
      label: 'CTA URL',
      icon: 'sicon-link',
      required: false,
      value: '/',
    },
  ],

  /* ───────── Skin Tabs ───────── */
  'home.eurus-skin-tabs': [
    {
      type: 'static',
      format: 'description',
      id: 'eurus-skintabs-help',
      value: '<div class="text-sm">Tabbed section — each tab reveals a different concern / routine with image and products.</div>',
    },
    {
      id: 'heading',
      type: 'string',
      format: 'text',
      label: 'Section heading',
      multilanguage: true,
      icon: 'sicon-format-text-alt',
      value: { en: 'Find your routine.', ar: 'اعثر على روتينك.' },
    },
    {
      id: 'tabs',
      type: 'collection',
      format: 'collection',
      required: true,
      minLength: 2,
      maxLength: 6,
      item_label: 'Tab',
      label: 'Tabs',
      value: [
        {
          'tabs.label': { en: 'Dry Skin', ar: 'بشرة جافة' },
          'tabs.description': { en: 'Deep hydration formulas that replenish moisture and restore softness.', ar: 'تركيبات ترطيب عميقة تعيد النعومة والرطوبة.' },
          'tabs.image': '',
          'tabs.cta_label': { en: 'Shop dry skin', ar: 'تسوّق البشرة الجافة' },
          'tabs.cta_url': '/',
        },
        {
          'tabs.label': { en: 'Oily Skin', ar: 'بشرة دهنية' },
          'tabs.description': { en: 'Lightweight, oil-free solutions that mattify and balance.', ar: 'حلول خفيفة خالية من الزيوت لتوازن مثالي.' },
          'tabs.image': '',
          'tabs.cta_label': { en: 'Shop oily skin', ar: 'تسوّق البشرة الدهنية' },
          'tabs.cta_url': '/',
        },
        {
          'tabs.label': { en: 'Sensitive Skin', ar: 'بشرة حساسة' },
          'tabs.description': { en: 'Gentle, fragrance-free care that calms and protects delicate skin.', ar: 'عناية لطيفة بدون عطور تهدئ البشرة الحساسة وتحميها.' },
          'tabs.image': '',
          'tabs.cta_label': { en: 'Shop sensitive skin', ar: 'تسوّق البشرة الحساسة' },
          'tabs.cta_url': '/',
        },
      ],
      fields: [
        {
          type: 'string',
          icon: 'sicon-format-text-alt',
          id: 'tabs.label',
          label: 'Tab label',
          multilanguage: true,
          format: 'text',
          required: true,
        },
        {
          type: 'string',
          icon: 'sicon-typography',
          id: 'tabs.description',
          label: 'Description',
          multilanguage: true,
          format: 'textarea',
          required: false,
        },
        {
          type: 'image',
          icon: 'sicon-photo',
          id: 'tabs.image',
          label: 'Tab image',
          format: 'image',
          required: false,
        },
        {
          type: 'string',
          icon: 'sicon-format-text-alt',
          id: 'tabs.cta_label',
          label: 'CTA label',
          multilanguage: true,
          format: 'text',
          required: false,
        },
        {
          type: 'string',
          icon: 'sicon-link',
          id: 'tabs.cta_url',
          label: 'CTA URL',
          format: 'text',
          required: false,
          value: '/',
        },
      ],
    },
  ],

  /* ───────── Brand Timeline ───────── */
  'home.eurus-brand-timeline': [
    {
      type: 'static',
      format: 'description',
      id: 'eurus-timeline-help',
      value: '<div class="text-sm">Vertical timeline of brand milestones.</div>',
    },
    {
      id: 'heading',
      type: 'string',
      format: 'text',
      label: 'Section heading',
      multilanguage: true,
      icon: 'sicon-format-text-alt',
      value: { en: 'Our journey', ar: 'رحلتنا' },
    },
    {
      id: 'milestones',
      type: 'collection',
      format: 'collection',
      required: true,
      minLength: 2,
      maxLength: 12,
      item_label: 'Milestone',
      label: 'Milestones',
      value: [
        {
          'milestones.year': '2018',
          'milestones.title': { en: 'The Spark', ar: 'الشرارة' },
          'milestones.description': { en: 'Founded in a small kitchen with a dream for clean beauty.', ar: 'تأسست في مطبخ صغير بحلم لجمال نظيف.' },
          'milestones.image': '',
        },
        {
          'milestones.year': '2020',
          'milestones.title': { en: 'First 10K Customers', ar: 'أول 10 آلاف عميل' },
          'milestones.description': { en: 'Reached our first milestone thanks to word-of-mouth love.', ar: 'وصلنا لأول إنجاز بفضل توصيات العملاء.' },
          'milestones.image': '',
        },
        {
          'milestones.year': '2023',
          'milestones.title': { en: 'Global Expansion', ar: 'التوسع العالمي' },
          'milestones.description': { en: 'Now shipping to 40+ countries with a team of 50.', ar: 'نشحن الآن إلى أكثر من 40 دولة بفريق من 50 شخصًا.' },
          'milestones.image': '',
        },
      ],
      fields: [
        {
          type: 'string',
          icon: 'sicon-calendar-date',
          id: 'milestones.year',
          label: 'Year / date',
          format: 'text',
          required: true,
        },
        {
          type: 'string',
          icon: 'sicon-format-text-alt',
          id: 'milestones.title',
          label: 'Title',
          multilanguage: true,
          format: 'text',
          required: true,
        },
        {
          type: 'string',
          icon: 'sicon-typography',
          id: 'milestones.description',
          label: 'Description',
          multilanguage: true,
          format: 'textarea',
          required: false,
        },
        {
          type: 'image',
          icon: 'sicon-photo',
          id: 'milestones.image',
          label: 'Image (optional)',
          format: 'image',
          required: false,
        },
      ],
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
console.log('Patched batch-D fields for', patched, 'components');
