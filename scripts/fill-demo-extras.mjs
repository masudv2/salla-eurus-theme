/**
 * Fills remaining demo content gaps: hero slide 2, video URL, extra category pills.
 * Run once: node scripts/fill-demo-extras.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const twilightPath = path.join(__dirname, '..', 'twilight.json');

const raw = fs.readFileSync(twilightPath, 'utf8');
const json = JSON.parse(raw);

for (const comp of json.components) {

  // ── Hero: add a second slide if only 1 exists ──
  if (comp.path === 'home.eurus-hero') {
    const slides = comp.fields.find(f => f.id === 'slides');
    if (slides && slides.value && slides.value.length < 2) {
      slides.value.push({
        'slides.image': 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=1200&q=80',
        'slides.eyebrow': { en: 'NEW ARRIVAL', ar: 'وصل حديثًا' },
        'slides.title': { en: 'Glow from', ar: 'توهّجي من' },
        'slides.title_accent': { en: 'within.', ar: 'الداخل.' },
        'slides.description': { en: 'Discover our plant-powered serums for radiant, healthy skin.', ar: 'اكتشفي سيروماتنا النباتية لبشرة مشرقة وصحية.' },
        'slides.cta_primary': { en: 'Shop serums', ar: 'تسوقي السيرومات' },
        'slides.cta_primary_url': '/collections',
        'slides.cta_secondary': { en: 'Our story', ar: 'قصتنا' },
        'slides.cta_secondary_url': '/about',
        'slides.without_overlay': false,
      });
      console.log('  Added hero slide 2');
    }
  }

  // ── Video product: fill demo YouTube embed ──
  if (comp.path === 'home.eurus-video-product') {
    const f = comp.fields.find(f => f.id === 'video_url');
    if (f && (!f.value || f.value === '')) {
      f.value = 'https://www.youtube.com/embed/dQw4w9WgXcQ';
      console.log('  Filled video_url');
    }
  }

  // ── Category pills: ensure at least 4 sample pills ──
  if (comp.path === 'home.eurus-category-pills') {
    const pills = comp.fields.find(f => f.id === 'pills');
    if (pills && pills.value && pills.value.length < 4) {
      const extras = [
        {
          'pills.image': 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=200&q=80',
          'pills.label': { en: 'Moisturisers', ar: 'مرطبات' },
          'pills.url': '/',
        },
        {
          'pills.image': 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=200&q=80',
          'pills.label': { en: 'Sun Care', ar: 'حماية الشمس' },
          'pills.url': '/',
        },
        {
          'pills.image': 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=200&q=80',
          'pills.label': { en: 'Gift Sets', ar: 'طقم هدايا' },
          'pills.url': '/',
        },
        {
          'pills.image': 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200&q=80',
          'pills.label': { en: 'Best Sellers', ar: 'الأكثر مبيعًا' },
          'pills.url': '/',
        },
      ];
      // also ensure existing pills have images
      for (const p of pills.value) {
        if (!p['pills.image'] || p['pills.image'] === '') {
          p['pills.image'] = 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=200&q=80';
        }
      }
      pills.value.push(...extras);
      console.log('  Added', extras.length, 'extra category pills');
    }
  }

  // ── Category stats: ensure sample rows have images ──
  if (comp.path === 'home.eurus-category-stats') {
    const rows = comp.fields.find(f => f.id === 'rows');
    if (rows?.value) {
      const imgs = [
        'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80',
        'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80',
      ];
      rows.value.forEach((item, i) => {
        if (!item['rows.image'] || item['rows.image'] === '') {
          item['rows.image'] = imgs[i] || imgs[0];
        }
      });
      console.log('  Filled category stats images');
    }
  }
}

fs.writeFileSync(twilightPath, JSON.stringify(json, null, 4) + '\n', 'utf8');
console.log('\nDone — demo content gaps filled');
