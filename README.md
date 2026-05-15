# Smoke Valley Website

This is the public launch website for **Smoke Valley** in Richmond, Texas.

It is a free static local-business website built with Astro, TypeScript, and Tailwind CSS. It is intentionally simple: no database, no Shopify store, no online checkout, no prices, no inventory status, no account creation, and no server-side form handling.

The site includes a 21+ age gate, local business SEO, inquiry-based Products page, contact CTAs, Google Maps directions, WhatsApp chat, rewards signup prompts, and legal disclaimers.

## Important Launch Notes

- The public Products page is inquiry-based until a real product list is ready.
- Store photos are not shown publicly until real photos are available.
- Online ordering is intentionally not enabled yet.
- Prices and inventory are intentionally hidden.
- The 21+ age gate is included, but valid government-issued ID may still be required in store.
- CBD/Hemp and kratom copy must not make medical claims.
- Instagram, Facebook, and Yelp links are hidden until real URLs are available.
- Rewards signup is configured for a future Remind URL. Until that URL exists, Join Rewards buttons use the store WhatsApp fallback.

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

## Where To Update Public Products

Edit:

```text
src/data/catalogInquiries.ts
```

The public Products page is inquiry-based. It should help customers ask about product areas without claiming exact inventory. Product cards can include subcategory and flavor/style examples, but should not imply an item is currently in stock.

Do not add fake prices, fake inventory, add-to-cart buttons, checkout links, or quantity selectors.

Use `newArrival: true` only for inquiry-safe “New arrivals to ask about” cards.

## Where To Update Rewards Signup

Edit:

```text
src/data/rewards.ts
```

When the real Remind signup URL is available, set `signupUrl` to that URL. The rewards popup, rewards page button, and header account icon will then use Remind automatically.

If `signupUrl` is `null`, those links use the store WhatsApp fallback.

## Future Product Data

Edit:

```text
src/data/products.ts
```

The product schema already includes future Shopify fields such as `shopifyHandle`, `shopifyProductId`, `shopifyVariantId`, `sku`, `barcode`, and `variantOptions`.

For the current static launch, keep these settings unless online commerce is intentionally added later:

- `price: null`
- `showPrice: false`
- `inStock: null`
- `showInventory: false`
- `onlineOrderEligible: false`
- `shippingEligible: false`

The future-ready product schema still exists for later Shopify or real product work. Those records are not rendered as exact product inventory in the public Products page.

## Where To Update Categories

Edit:

```text
src/data/categories.ts
```

Do not add cigars as a category unless the business specifically changes the website scope.

## Where To Add Store Photos Later

Replace files in:

```text
public/images/store/
```

Current no-photo mode graphics:

- `storefront-brand.svg`
- `interior-brand.svg`
- `display-wall-brand.svg`
- `rewards-brand.svg`

If you replace a file with a `.jpg`, `.png`, or `.webp`, update the matching image path in the Astro page or component that uses it.

When real store photos are ready, update the matching image paths in the relevant Astro components/pages and add Gallery back to `src/data/navigation.ts`.

## Where To Add Product Images Later

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

Instagram, Facebook, and Yelp are hidden until real URLs are available. The Google Business/review link is already active.

## Cloudflare Web Analytics

Analytics is disabled by default.

To enable Cloudflare Web Analytics later:

1. In Cloudflare, create or open the Web Analytics site for this project.
2. Copy the site token from the Cloudflare beacon snippet.
3. Add this Pages environment variable:

```text
PUBLIC_CLOUDFLARE_WEB_ANALYTICS_TOKEN=your_cloudflare_site_token
```

4. Redeploy the site.

If the token is not set, the analytics script is not rendered.

## Cloudflare Pages Deployment

Recommended free deployment flow through the Cloudflare dashboard:

1. Push this repository to GitHub.
2. In Cloudflare, go to **Workers & Pages**.
3. Create a new Pages project.
4. Connect the GitHub repo.
5. Use these build settings:

```text
Framework preset: Astro
Build command: npm run build
Output directory: dist
Environment variables: none required unless enabling Cloudflare Web Analytics
```

Cloudflare will provide a `*.pages.dev` URL. A custom domain can be added later; do not hardcode a purchased domain in this codebase until the domain is confirmed.

Direct Wrangler deployment is also supported after logging in:

```bash
npx wrangler login
npm run build
npx wrangler pages deploy ./dist --project-name=smoke-valley
```

If `smoke-valley` is unavailable in Cloudflare, use `smoke-valley-tx` and update both `astro.config.mjs` and `src/data/business.ts` to the final `pages.dev` URL.

## Technical SEO

The site generates a sitemap and robots file during build:

- `/sitemap-index.xml`
- `/robots.txt`

The Gallery page is hidden from navigation and marked `noindex` until real store photos are ready.

The old `/catalog/` URL redirects to `/products/` through `public/_redirects` for Cloudflare Pages.

## Future Shopify Migration

See:

```text
docs/shopify-migration-plan.md
```

The product data is structured so products can later be migrated or synced to Shopify, but Shopify is not implemented in the current public launch.

## Maintenance Checklist Before Launch

- Confirm whether the inquiry-based Products page is enough for launch.
- Add real store/product photos when available.
- Confirm business hours and contact information.
- Add the real Remind signup URL when available.
- Add real Instagram, Facebook, and Yelp URLs.
- Add Cloudflare Web Analytics token if desired.
- Confirm CBD/Hemp and kratom copy remains compliant and avoids medical claims.
- Run `npm run check` and `npm run build`.

## Contact Form Note

The Contact form intentionally remains static and free. It opens the customer’s email app with a prefilled message to `smokevalleyusa@gmail.com`; it does not store submissions on the website.
