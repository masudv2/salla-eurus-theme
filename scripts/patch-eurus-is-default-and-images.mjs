/**
 * Adds is_default + preview image to each Eurus home component (Twilight 1.189+).
 * Run: node scripts/patch-eurus-is-default-and-images.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const twilightPath = path.join(__dirname, '../twilight.json');

const previewImages = [
  'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=360&fit=crop&q=80',
  'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&h=360&fit=crop&q=80',
  'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=360&fit=crop&q=80',
  'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=360&fit=crop&q=80',
  'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&h=360&fit=crop&q=80',
  'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=360&fit=crop&q=80',
  'https://images.unsplash.com/photo-1556228578-0d85b1a4e571?w=600&h=360&fit=crop&q=80',
  'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=600&h=360&fit=crop&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=360&fit=crop&q=80',
  'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=360&fit=crop&q=80',
  'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=600&h=360&fit=crop&q=80',
  'https://images.unsplash.com/photo-1608248543803-62b8efe4a963?w=600&h=360&fit=crop&q=80',
  'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&h=360&fit=crop&q=80',
  'https://images.unsplash.com/photo-1596755094514-f87e40ce8f9c?w=600&h=360&fit=crop&q=80',
  'https://images.unsplash.com/photo-1505944270255-72ee478505c3?w=600&h=360&fit=crop&q=80',
  'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&h=360&fit=crop&q=80',
  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=600&h=360&fit=crop&q=80',
  'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=600&h=360&fit=crop&q=80',
  'https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=600&h=360&fit=crop&q=80',
  'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=360&fit=crop&q=80',
];

const raw = fs.readFileSync(twilightPath, 'utf8');
const j = JSON.parse(raw);

let n = 0;
for (const c of j.components) {
  if (c.path && String(c.path).startsWith('home.eurus-')) {
    c.is_default = true;
    c.image = previewImages[n % previewImages.length];
    n++;
  }
}

fs.writeFileSync(twilightPath, JSON.stringify(j, null, 4) + '\n');
console.log(`Patched ${n} Eurus components with is_default + image.`);
