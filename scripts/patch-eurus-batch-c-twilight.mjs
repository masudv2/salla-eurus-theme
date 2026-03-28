/**
 * Replaces `fields` for batch-C Eurus components (Task 7).
 * Run once: node scripts/patch-eurus-batch-c-twilight.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const twilightPath = path.join(__dirname, '..', 'twilight.json');

const fieldsByPath = {

  /* ───────── Testimonials ───────── */
  'home.eurus-testimonials-block': [
    {
      type: 'static',
      format: 'description',
      id: 'eurus-test-help',
      value: '<div class="text-sm">Carousel of customer testimonials with star ratings.</div>',
    },
    {
      id: 'heading',
      type: 'string',
      format: 'text',
      label: 'Section heading',
      multilanguage: true,
      icon: 'sicon-format-text-alt',
      value: { en: 'What our customers say', ar: 'ماذا يقول عملاؤنا' },
    },
    {
      id: 'reviews',
      type: 'collection',
      format: 'collection',
      required: true,
      minLength: 2,
      maxLength: 12,
      item_label: 'Review',
      label: 'Reviews',
      value: [
        {
          'reviews.name': 'Sarah M.',
          'reviews.stars': 5,
          'reviews.text': { en: 'This changed my entire skincare routine. My skin has never felt softer!', ar: 'غيّر روتين العناية ببشرتي بالكامل. لم تكن بشرتي بهذه النعومة من قبل!' },
        },
        {
          'reviews.name': 'Emily R.',
          'reviews.stars': 5,
          'reviews.text': { en: 'Amazing quality products. Fast shipping and beautiful packaging.', ar: 'منتجات بجودة مذهلة. شحن سريع وتغليف جميل.' },
        },
        {
          'reviews.name': 'Layla K.',
          'reviews.stars': 4,
          'reviews.text': { en: 'I love the natural ingredients. Will definitely order again.', ar: 'أحب المكونات الطبيعية. سأطلب مجددًا بالتأكيد.' },
        },
      ],
      fields: [
        {
          type: 'string',
          icon: 'sicon-user',
          id: 'reviews.name',
          label: 'Customer name',
          format: 'text',
          required: true,
        },
        {
          type: 'number',
          icon: 'sicon-star',
          id: 'reviews.stars',
          label: 'Stars (1-5)',
          format: 'integer',
          required: true,
          minimum: 1,
          maximum: 5,
          value: 5,
        },
        {
          type: 'string',
          icon: 'sicon-format-text-alt',
          id: 'reviews.text',
          label: 'Review text',
          multilanguage: true,
          format: 'textarea',
          required: true,
        },
      ],
    },
  ],

  /* ───────── Shoppable Image ───────── */
  'home.eurus-shoppable-image': [
    {
      type: 'static',
      format: 'description',
      id: 'eurus-shop-img-help',
      value: '<div class="text-sm">Full-width lifestyle image with hotspot product links overlaid.</div>',
    },
    {
      id: 'image',
      type: 'image',
      format: 'image',
      label: 'Background image',
      icon: 'sicon-photo',
      required: true,
      value: '',
    },
    {
      id: 'heading',
      type: 'string',
      format: 'text',
      label: 'Heading',
      multilanguage: true,
      icon: 'sicon-format-text-alt',
      value: { en: 'Shop the look', ar: 'تسوّق الإطلالة' },
    },
    {
      id: 'hotspots',
      type: 'collection',
      format: 'collection',
      required: false,
      minLength: 1,
      maxLength: 8,
      item_label: 'Hotspot',
      label: 'Hotspots',
      value: [
        { 'hotspots.label': { en: 'Glow Serum', ar: 'سيروم التوهج' }, 'hotspots.x': '30', 'hotspots.y': '45', 'hotspots.url': '/' },
        { 'hotspots.label': { en: 'Day Cream', ar: 'كريم نهاري' }, 'hotspots.x': '65', 'hotspots.y': '55', 'hotspots.url': '/' },
      ],
      fields: [
        {
          type: 'string',
          icon: 'sicon-format-text-alt',
          id: 'hotspots.label',
          label: 'Product label',
          multilanguage: true,
          format: 'text',
          required: true,
        },
        {
          type: 'string',
          icon: 'sicon-move',
          id: 'hotspots.x',
          label: 'X position (%)',
          format: 'text',
          required: true,
          value: '50',
        },
        {
          type: 'string',
          icon: 'sicon-move',
          id: 'hotspots.y',
          label: 'Y position (%)',
          format: 'text',
          required: true,
          value: '50',
        },
        {
          type: 'string',
          icon: 'sicon-link',
          id: 'hotspots.url',
          label: 'Product URL',
          format: 'text',
          required: false,
          value: '/',
        },
      ],
    },
  ],

  /* ───────── Video + Product ───────── */
  'home.eurus-video-product': [
    {
      type: 'static',
      format: 'description',
      id: 'eurus-vidprod-help',
      value: '<div class="text-sm">Split layout: embedded video on one side, product info on the other.</div>',
    },
    {
      id: 'video_url',
      type: 'string',
      format: 'text',
      label: 'YouTube / video embed URL',
      icon: 'sicon-play-circle',
      required: true,
      placeholder: 'https://www.youtube.com/embed/...',
      value: '',
    },
    {
      id: 'video_on_right',
      type: 'boolean',
      format: 'switch',
      label: 'Video on right side',
      icon: 'sicon-toggle-off',
      value: false,
      selected: false,
    },
    {
      id: 'eyebrow',
      type: 'string',
      format: 'text',
      label: 'Eyebrow text',
      multilanguage: true,
      icon: 'sicon-format-text-alt',
      required: false,
      value: { en: 'WATCH & SHOP', ar: 'شاهد وتسوّق' },
    },
    {
      id: 'title',
      type: 'string',
      format: 'text',
      label: 'Title',
      multilanguage: true,
      icon: 'sicon-format-text-alt',
      value: { en: 'See the results for yourself.', ar: 'شاهد النتائج بنفسك.' },
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
        en: 'Our dermatologist-tested formula works in just 7 days.',
        ar: 'تركيبتنا المختبرة من أطباء الجلدية تعمل في 7 أيام فقط.',
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
      value: { en: 'Shop now', ar: 'تسوّق الآن' },
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

  /* ───────── Before / After ───────── */
  'home.eurus-before-after': [
    {
      type: 'static',
      format: 'description',
      id: 'eurus-ba-help',
      value: '<div class="text-sm">Before-and-after slider with draggable divider.</div>',
    },
    {
      id: 'heading',
      type: 'string',
      format: 'text',
      label: 'Section heading',
      multilanguage: true,
      icon: 'sicon-format-text-alt',
      value: { en: 'Real results, real people.', ar: 'نتائج حقيقية، أشخاص حقيقيون.' },
    },
    {
      id: 'pairs',
      type: 'collection',
      format: 'collection',
      required: true,
      minLength: 1,
      maxLength: 6,
      item_label: 'Pair',
      label: 'Before / After pairs',
      value: [
        {
          'pairs.before_image': '',
          'pairs.after_image': '',
          'pairs.caption': { en: '4 weeks of daily use', ar: '4 أسابيع من الاستخدام اليومي' },
        },
      ],
      fields: [
        {
          type: 'image',
          icon: 'sicon-photo',
          id: 'pairs.before_image',
          label: 'Before image',
          format: 'image',
          required: true,
        },
        {
          type: 'image',
          icon: 'sicon-photo',
          id: 'pairs.after_image',
          label: 'After image',
          format: 'image',
          required: true,
        },
        {
          type: 'string',
          icon: 'sicon-format-text-alt',
          id: 'pairs.caption',
          label: 'Caption',
          multilanguage: true,
          format: 'text',
          required: false,
        },
      ],
    },
  ],

  /* ───────── Newsletter ───────── */
  'home.eurus-newsletter': [
    {
      type: 'static',
      format: 'description',
      id: 'eurus-nl-help',
      value: '<div class="text-sm">Email capture block using Salla\'s newsletter web component.</div>',
    },
    {
      id: 'heading',
      type: 'string',
      format: 'text',
      label: 'Heading',
      multilanguage: true,
      icon: 'sicon-format-text-alt',
      value: { en: 'Join the glow club.', ar: 'انضم لنادي التألق.' },
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
        en: 'Get 10% off your first order, plus early access to new drops and exclusive tips.',
        ar: 'احصل على خصم 10٪ على طلبك الأول، مع وصول مبكر لأحدث المنتجات ونصائح حصرية.',
      },
    },
    {
      id: 'background_image',
      type: 'image',
      format: 'image',
      label: 'Background image (optional)',
      icon: 'sicon-photo',
      required: false,
      value: '',
    },
  ],

  /* ───────── Social / Instagram Gallery ───────── */
  'home.eurus-social-gallery': [
    {
      type: 'static',
      format: 'description',
      id: 'eurus-social-help',
      value: '<div class="text-sm">Grid of social/lifestyle images with Instagram-style links.</div>',
    },
    {
      id: 'heading',
      type: 'string',
      format: 'text',
      label: 'Section heading',
      multilanguage: true,
      icon: 'sicon-format-text-alt',
      value: { en: 'Follow us @yourbrand', ar: 'تابعنا @yourbrand' },
    },
    {
      id: 'social_url',
      type: 'string',
      format: 'text',
      label: 'Social profile URL',
      icon: 'sicon-link',
      required: false,
      value: 'https://instagram.com/',
    },
    {
      id: 'photos',
      type: 'collection',
      format: 'collection',
      required: true,
      minLength: 3,
      maxLength: 12,
      item_label: 'Photo',
      label: 'Gallery photos',
      value: [
        { 'photos.image': '', 'photos.url': '/' },
        { 'photos.image': '', 'photos.url': '/' },
        { 'photos.image': '', 'photos.url': '/' },
        { 'photos.image': '', 'photos.url': '/' },
        { 'photos.image': '', 'photos.url': '/' },
        { 'photos.image': '', 'photos.url': '/' },
      ],
      fields: [
        {
          type: 'image',
          icon: 'sicon-photo',
          id: 'photos.image',
          label: 'Photo',
          format: 'image',
          required: true,
        },
        {
          type: 'string',
          icon: 'sicon-link',
          id: 'photos.url',
          label: 'Link URL',
          format: 'text',
          required: false,
          value: '/',
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
console.log('Patched batch-C fields for', patched, 'components');
