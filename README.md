# Smoke Valley Smoke Shop Website

This is the Phase 1 website for **Smoke Valley Smoke Shop** in Richmond, Texas.

It is a free static local-business website built with Astro, TypeScript, and Tailwind CSS. It is intentionally simple: no database, no Shopify store, no online checkout, no prices, no inventory status, no account creation, and no server-side form handling.

The site includes a 21+ age gate, local business SEO, a static catalog, contact CTAs, Google Maps directions, WhatsApp chat, rewards information, gallery placeholders, and legal disclaimers.

## Important Launch Notes

- Placeholder products must be replaced with the real catalog before launch.
- Placeholder store and product images must be replaced with real photos before launch.
- Online ordering is intentionally not enabled yet.
- Prices and inventory are intentionally hidden.
- The 21+ age gate is included, but valid government-issued ID may still be required in store.
- CBD/Hemp and kratom copy must not make medical claims.

## Local Setup

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Build the static site:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Run Astro/TypeScript checks:

```bash
npm run check
```

## Where To Update Business Info

Edit:

```text
src/data/business.ts
```

This controls the public business name, address, phone number, WhatsApp link, email, hours, Google review link, Google Maps directions link, and map embed link.

## Where To Update Products

Edit:

```text
src/data/products.ts
```

The product schema already includes future Shopify fields such as `shopifyHandle`, `shopifyProductId`, `shopifyVariantId`, `sku`, `barcode`, and `variantOptions`.

For Phase 1, keep these settings unless online commerce is intentionally added later:

- `price: null`
- `showPrice: false`
- `inStock: null`
- `showInventory: false`
- `onlineOrderEligible: false`
- `shippingEligible: false`

Do not add fake prices, fake inventory, add-to-cart buttons, checkout links, or quantity selectors.

## Where To Update Categories

Edit:

```text
src/data/categories.ts
```

Do not add cigars as a category unless the business specifically changes the Phase 1 scope.

## Where To Add Store Photos

Replace files in:

```text
public/images/store/
```

Current placeholder files:

- `storefront-placeholder.svg`
- `interior-placeholder.svg`
- `display-wall-placeholder.svg`
- `counter-placeholder.svg`

If you replace a file with a `.jpg`, `.png`, or `.webp`, update the matching image path in the Astro page or component that uses it.

## Where To Add Product Images

Replace or add files in:

```text
public/images/products/
```

Then update the `image` field for each product in:

```text
src/data/products.ts
```

## Where To Update Social Links

Edit:

```text
src/data/socials.ts
```

Instagram, Facebook, and Yelp are placeholders until real URLs are available. The Google Business/review link is already active.

## Cloudflare Pages Deployment

Recommended free deployment flow:

1. Push this repository to GitHub.
2. In Cloudflare, go to **Workers & Pages**.
3. Create a new Pages project.
4. Connect the GitHub repo.
5. Use these build settings:

```text
Framework preset: Astro
Build command: npm run build
Output directory: dist
Environment variables: none required for Phase 1
```

Cloudflare will provide a `*.pages.dev` URL. A custom domain can be added later; do not hardcode a purchased domain in this codebase until the domain is confirmed.

## Future Shopify Migration

See:

```text
docs/shopify-migration-plan.md
```

The catalog is structured so products can later be migrated or synced to Shopify, but Shopify is not implemented in Phase 1.

## Maintenance Checklist Before Launch

- Replace placeholder product data with real products.
- Replace placeholder images with real store/product photos.
- Confirm business hours and contact information.
- Add real Instagram, Facebook, and Yelp URLs.
- Confirm CBD/Hemp and kratom copy remains compliant and avoids medical claims.
- Run `npm run check` and `npm run build`.
