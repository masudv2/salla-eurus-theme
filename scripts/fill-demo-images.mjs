/**
 * Fills empty image fields in Eurus components with Unsplash demo images.
 * Run once: node scripts/fill-demo-images.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const twilightPath = path.join(__dirname, '..', 'twilight.json');

const img = {
  lifestyle:    'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&q=80',
  skincare1:    'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
  skincare2:    'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&q=80',
  skincare3:    'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80',
  drySkin:      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80',
  oilySkin:     'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
  sensitive:    'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80',
  beforeFace:   'https://images.unsplash.com/photo-1595959183082-7b570b7e1e6b?w=600&q=80',
  afterFace:    'https://images.unsplash.com/photo-1588006173527-b98b85da4094?w=600&q=80',
  philosophy:   'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=1000&q=80',
  milestone1:   'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&q=80',
  milestone2:   'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80',
  milestone3:   'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
  social1:      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80',
  social2:      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=80',
  social3:      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&q=80',
  social4:      'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&q=80',
  social5:      'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&q=80',
  social6:      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80',
  newsletter:   'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1200&q=80',
  shoppable:    'https://images.unsplash.com/photo-1583209814683-c023dd293cc6?w=1400&q=80',
};

const patches = {
  'home.eurus-shoppable-image': (fields) => {
    const f = fields.find(f => f.id === 'image');
    if (f) f.value = img.shoppable;
  },

  'home.eurus-skin-tabs': (fields) => {
    const tabs = fields.find(f => f.id === 'tabs');
    if (tabs?.value) {
      const images = [img.drySkin, img.oilySkin, img.sensitive];
      tabs.value.forEach((item, i) => {
        if (!item['tabs.image'] || item['tabs.image'] === '')
          item['tabs.image'] = images[i] || images[0];
      });
    }
  },

  'home.eurus-before-after': (fields) => {
    const pairs = fields.find(f => f.id === 'pairs');
    if (pairs?.value) {
      pairs.value.forEach(item => {
        if (!item['pairs.before_image'] || item['pairs.before_image'] === '')
          item['pairs.before_image'] = img.beforeFace;
        if (!item['pairs.after_image'] || item['pairs.after_image'] === '')
          item['pairs.after_image'] = img.afterFace;
      });
    }
  },

  'home.eurus-routine-steps': (fields) => {
    const steps = fields.find(f => f.id === 'steps');
    if (steps?.value) {
      const images = [img.skincare1, img.skincare2, img.skincare3];
      steps.value.forEach((item, i) => {
        if (!item['steps.image'] || item['steps.image'] === '')
          item['steps.image'] = images[i] || images[0];
      });
    }
  },

  'home.eurus-philosophy-split': (fields) => {
    const f = fields.find(f => f.id === 'image');
    if (f) f.value = img.philosophy;
  },

  'home.eurus-brand-timeline': (fields) => {
    const milestones = fields.find(f => f.id === 'milestones');
    if (milestones?.value) {
      const images = [img.milestone1, img.milestone2, img.milestone3];
      milestones.value.forEach((item, i) => {
        if (!item['milestones.image'] || item['milestones.image'] === '')
          item['milestones.image'] = images[i] || images[0];
      });
    }
  },

  'home.eurus-social-gallery': (fields) => {
    const photos = fields.find(f => f.id === 'photos');
    if (photos?.value) {
      const images = [img.social1, img.social2, img.social3, img.social4, img.social5, img.social6];
      photos.value.forEach((item, i) => {
        if (!item['photos.image'] || item['photos.image'] === '')
          item['photos.image'] = images[i] || images[0];
      });
    }
  },

  'home.eurus-newsletter': (fields) => {
    const f = fields.find(f => f.id === 'background_image');
    if (f) f.value = img.newsletter;
  },
};

const raw = fs.readFileSync(twilightPath, 'utf8');
const json = JSON.parse(raw);

let filled = 0;
for (const comp of json.components) {
  if (patches[comp.path]) {
    patches[comp.path](comp.fields);
    filled++;
  }
}

fs.writeFileSync(twilightPath, JSON.stringify(json, null, 4) + '\n', 'utf8');
console.log(`Filled demo images for ${filled} components`);
