# Shopify Migration Plan

The current Smoke Valley website is a static public launch site with an inquiry-based Products page and local-business pages. It does not include Shopify, online checkout, prices, inventory status, shipping, pickup reservations, customer accounts, or payment processing.

## Why The Current Product Schema Includes Shopify Fields

Product entries in `src/data/products.ts` include fields such as:

- `sku`
- `barcode`
- `shopifyHandle`
- `shopifyProductId`
- `shopifyVariantId`
- `variantOptions`
- `price`
- `compareAtPrice`
- `showPrice`
- `inStock`
- `showInventory`
- `onlineOrderEligible`
- `pickupOnly`
- `shippingEligible`

These fields are intentionally present so product data can later migrate or sync to Shopify without rebuilding the site structure from scratch.

For the current static launch, commerce-related fields should stay disabled:

- `price` should usually be `null`
- `showPrice` should be `false`
- `inStock` should be `null`
- `showInventory` should be `false`
- `onlineOrderEligible` should be `false`
- `shippingEligible` should be `false`

## Recommended Later Steps

1. Buy and configure the final custom domain.
2. Create the Shopify store.
3. Confirm smoke, vape, CBD/Hemp, and kratom payment processor eligibility before adding checkout.
4. Configure a Shopify-compatible age verification app or service.
5. Configure pickup and shipping rules.
6. Add adult-signature and ID-verification workflow if shipping is ever enabled.
7. Import the product list from the static data source.
8. Replace catalog CTAs with Shopify product links, pickup/reservation links, or embedded buy buttons only after compliance and payment setup are complete.

## Strong Recommendation

Start with in-store pickup or reservation workflows before shipping. Shipping adult-restricted products can add compliance, carrier, age verification, payment processor, and local-law complexity.

## Do Not Implement In The Current Static Launch

- Do not add Shopify scripts or buy buttons yet.
- Do not add online checkout yet.
- Do not collect customer accounts yet.
- Do not show prices until the business is ready.
- Do not show inventory status unless it is connected to a reliable source of truth.
- Do not imply CBD/Hemp or kratom products diagnose, treat, cure, or prevent any disease.
