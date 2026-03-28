import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(__dirname, '../src/views/components/home');

const blocks = [
  ['eurus-hero', 'Hero'],
  ['eurus-promo-strip', 'Promo strip'],
  ['eurus-category-pills', 'Category pills'],
  ['eurus-featured-row', 'Featured row'],
  ['eurus-category-stats', 'Category stats'],
  ['eurus-split-banner', 'Split banner'],
  ['eurus-product-grid', 'Product grid'],
  ['eurus-countdown-sale', 'Countdown sale'],
  ['eurus-bundle-builder', 'Bundle builder'],
  ['eurus-trust-marquee', 'Trust marquee'],
  ['eurus-shoppable-image', 'Shoppable image'],
  ['eurus-skin-tabs', 'Skin tabs'],
  ['eurus-before-after', 'Before / After'],
  ['eurus-video-product', 'Video product'],
  ['eurus-routine-steps', 'Routine steps'],
  ['eurus-philosophy-split', 'Philosophy'],
  ['eurus-brand-timeline', 'Brand timeline'],
  ['eurus-testimonials-block', 'Testimonials'],
  ['eurus-social-gallery', 'Social gallery'],
  ['eurus-newsletter', 'Newsletter'],
];

const tpl = (slug, label) => `{#
| Variable  | Type   | Description        |
|-----------|--------|--------------------|
| component | object | Merchant fields    |
| position  | int    | Block sort index   |
#}
<section class="s-block s-block--eurus s-block--${slug} bg-[color:var(--eurus-surface)]" data-eurus="${slug}" aria-label="${label}">
    <div class="eurus-container py-10 md:py-14">
        <h2 class="text-center text-xl md:text-2xl font-bold text-[color:var(--eurus-ink)]">
            {{ component.title|default('${label}') }}
        </h2>
        <p class="mt-3 text-center text-sm text-gray-500">Eurus section — placeholder</p>
    </div>
</section>
`;

for (const [slug, label] of blocks) {
  fs.writeFileSync(path.join(dir, `${slug}.twig`), tpl(slug, label), 'utf8');
}
console.log(`Wrote ${blocks.length} twig files`);
