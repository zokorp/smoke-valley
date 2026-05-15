export type DisclaimerType = 'standard' | 'cbd-hemp' | 'kratom' | 'none';

export type Product = {
  id: string;
  name: string;
  slug: string;
  brand: string;
  category: string;
  subcategory: string;
  description: string;
  shortDescription: string;
  image: string;
  tags: string[];
  featured: boolean;
  ageRestricted: boolean;
  price: number | null;
  compareAtPrice: number | null;
  showPrice: boolean;
  inStock: boolean | null;
  showInventory: boolean;
  onlineOrderEligible: boolean;
  pickupOnly: boolean | null;
  shippingEligible: boolean;
  sku: string | null;
  barcode: string | null;
  shopifyHandle: string | null;
  shopifyProductId: string | null;
  shopifyVariantId: string | null;
  variantOptions: Record<string, string[]> | null;
  disclaimerType: DisclaimerType;
};

type ProductInput = Omit<
  Product,
  | 'featured'
  | 'ageRestricted'
  | 'price'
  | 'compareAtPrice'
  | 'showPrice'
  | 'inStock'
  | 'showInventory'
  | 'onlineOrderEligible'
  | 'pickupOnly'
  | 'shippingEligible'
  | 'sku'
  | 'barcode'
  | 'shopifyHandle'
  | 'shopifyProductId'
  | 'shopifyVariantId'
  | 'variantOptions'
  | 'disclaimerType'
> &
  Partial<
    Pick<
      Product,
      | 'featured'
      | 'ageRestricted'
      | 'pickupOnly'
      | 'sku'
      | 'barcode'
      | 'shopifyHandle'
      | 'shopifyProductId'
      | 'shopifyVariantId'
      | 'variantOptions'
      | 'disclaimerType'
    >
  >;

const sampleProduct = (product: ProductInput): Product => ({
  ...product,
  featured: product.featured ?? false,
  ageRestricted: product.ageRestricted ?? true,
  price: null,
  compareAtPrice: null,
  showPrice: false,
  inStock: null,
  showInventory: false,
  onlineOrderEligible: false,
  pickupOnly: product.pickupOnly ?? null,
  shippingEligible: false,
  sku: product.sku ?? null,
  barcode: product.barcode ?? null,
  shopifyHandle: product.shopifyHandle ?? null,
  shopifyProductId: product.shopifyProductId ?? null,
  shopifyVariantId: product.shopifyVariantId ?? null,
  variantOptions: product.variantOptions ?? null,
  disclaimerType: product.disclaimerType ?? 'standard',
});

// Future product-data examples only. These records are not rendered as public product cards in Phase 2.
// Replace them with a verified real catalog before enabling product-level pages, pricing, inventory, or Shopify sync.
export const products: Product[] = [
  sampleProduct({
    id: 'sample-geek-bar-pulse-x',
    name: 'Geek Bar Pulse X Disposable',
    slug: 'geek-bar-pulse-x-disposable',
    brand: 'Geek Bar',
    category: 'Disposables',
    subcategory: 'Disposable Vapes',
    shortDescription: 'Popular Geek Bar disposable style for adult nicotine users.',
    description: 'A sample listing for Geek Bar disposable options. Call or message the store to ask what flavors and styles are currently available.',
    image: '/images/products/vape-brand.svg',
    tags: ['disposable', 'nicotine', 'featured brand'],
    featured: true,
    variantOptions: { flavor: ['Ask in store'] },
  }),
  sampleProduct({
    id: 'sample-geek-bar-meloso',
    name: 'Geek Bar Meloso Disposable',
    slug: 'geek-bar-meloso-disposable',
    brand: 'Geek Bar',
    category: 'Disposables',
    subcategory: 'Disposable Vapes',
    shortDescription: 'Adult disposable vape option from Geek Bar.',
    description: 'A sample Geek Bar listing prepared for future Shopify migration. Selection may vary by visit.',
    image: '/images/products/vape-brand.svg',
    tags: ['disposable', 'nicotine', 'flavors'],
  }),
  sampleProduct({
    id: 'sample-lost-mary-mt15000',
    name: 'Lost Mary MT15000 Turbo Disposable',
    slug: 'lost-mary-mt15000-turbo-disposable',
    brand: 'Lost Mary',
    category: 'Disposables',
    subcategory: 'Disposable Vapes',
    shortDescription: 'Lost Mary disposable style for adult nicotine users.',
    description: 'A sample Lost Mary product card. Call Smoke Valley to ask about current Lost Mary options.',
    image: '/images/products/vape-brand.svg',
    tags: ['disposable', 'nicotine', 'featured brand'],
    featured: true,
  }),
  sampleProduct({
    id: 'sample-lost-mary-mo20000',
    name: 'Lost Mary MO20000 Pro Disposable',
    slug: 'lost-mary-mo20000-pro-disposable',
    brand: 'Lost Mary',
    category: 'Disposables',
    subcategory: 'Disposable Vapes',
    shortDescription: 'Sample Lost Mary disposable listing.',
    description: 'A sample listing for Lost Mary disposable products. Replace details with verified catalog data before product-level launch.',
    image: '/images/products/vape-brand.svg',
    tags: ['disposable', 'nicotine', 'ask staff'],
  }),
  sampleProduct({
    id: 'sample-fogger-switch-pro',
    name: 'Fogger Switch Pro Disposable',
    slug: 'fogger-switch-pro-disposable',
    brand: 'Fogger',
    category: 'Disposables',
    subcategory: 'Disposable Vapes',
    shortDescription: 'Fogger disposable option for adult nicotine users.',
    description: 'A sample Fogger listing for the static catalog. Call for current selection and flavor availability.',
    image: '/images/products/vape-brand.svg',
    tags: ['disposable', 'nicotine', 'featured brand'],
    featured: true,
  }),
  sampleProduct({
    id: 'sample-fogger-mega',
    name: 'Fogger Mega Disposable',
    slug: 'fogger-mega-disposable',
    brand: 'Fogger',
    category: 'Disposables',
    subcategory: 'Disposable Vapes',
    shortDescription: 'Sample Fogger disposable product card.',
    description: 'A sample product prepared for future catalog import. Availability is not guaranteed.',
    image: '/images/products/vape-brand.svg',
    tags: ['disposable', 'nicotine'],
  }),
  sampleProduct({
    id: 'sample-geek-vape-aegis',
    name: 'Geek Vape Aegis Device Kit',
    slug: 'geek-vape-aegis-device-kit',
    brand: 'Geek Vape',
    category: 'Vapes',
    subcategory: 'Device Kits',
    shortDescription: 'Durable device kit style from Geek Vape.',
    description: 'A sample device kit listing. Ask Smoke Valley staff about compatible coils, pods, and current device options.',
    image: '/images/products/vape-brand.svg',
    tags: ['device', 'kit', 'rechargeable'],
    featured: true,
  }),
  sampleProduct({
    id: 'sample-geek-vape-coils',
    name: 'Geek Vape Replacement Coils',
    slug: 'geek-vape-replacement-coils',
    brand: 'Geek Vape',
    category: 'Accessories',
    subcategory: 'Coils',
    shortDescription: 'Replacement coils for compatible adult-use devices.',
    description: 'Bring your device or pod to the store so staff can help identify compatible replacement parts.',
    image: '/images/products/accessories-brand.svg',
    tags: ['coils', 'replacement', 'accessories'],
  }),
  sampleProduct({
    id: 'sample-smok-novo',
    name: 'Smok Novo Pod System',
    slug: 'smok-novo-pod-system',
    brand: 'Smok',
    category: 'Vapes',
    subcategory: 'Pod Systems',
    shortDescription: 'Compact pod system style from Smok.',
    description: 'A sample Smok device listing for future catalog migration. Call for current device options.',
    image: '/images/products/vape-brand.svg',
    tags: ['pod system', 'device', 'rechargeable'],
    featured: true,
  }),
  sampleProduct({
    id: 'sample-smok-pods',
    name: 'Smok Replacement Pods',
    slug: 'smok-replacement-pods',
    brand: 'Smok',
    category: 'Accessories',
    subcategory: 'Pods',
    shortDescription: 'Replacement pods for compatible Smok devices.',
    description: 'A sample accessory listing. Compatibility varies by model, so call or visit with your device.',
    image: '/images/products/accessories-brand.svg',
    tags: ['pods', 'replacement', 'accessories'],
  }),
  sampleProduct({
    id: 'sample-eliquid-options',
    name: 'E-Liquid Flavor Options',
    slug: 'e-liquid-flavor-options',
    brand: 'Various Brands',
    category: 'E-Liquids',
    subcategory: 'E-Liquids',
    shortDescription: 'Adult e-liquid options for compatible devices.',
    description: 'A generic sample listing for future e-liquid catalog entries. Replace with real brand and flavor data before launch.',
    image: '/images/products/vape-brand.svg',
    tags: ['e-liquid', 'flavors', 'nicotine'],
  }),
  sampleProduct({
    id: 'sample-hookah-accessories',
    name: 'Hookah Bowl and Hose Accessories',
    slug: 'hookah-bowl-hose-accessories',
    brand: 'Various Brands',
    category: 'Hookah',
    subcategory: 'Accessories',
    shortDescription: 'Hookah bowls, hoses, tips, and related supplies.',
    description: 'A sample hookah accessories listing. Visit the store to see current hookah supplies.',
    image: '/images/products/hookah-brand.svg',
    tags: ['hookah', 'bowl', 'hose'],
  }),
  sampleProduct({
    id: 'sample-glass-water-pipe',
    name: 'Premium Glass Water Pipe',
    slug: 'premium-glass-water-pipe',
    brand: 'Various Brands',
    category: 'Glass',
    subcategory: 'Water Pipes',
    shortDescription: 'Glass water pipe styles for adults 21+.',
    description: 'A generic sample glass listing. Actual styles, colors, and sizes vary in store.',
    image: '/images/products/glass-brand.svg',
    tags: ['glass', 'water pipe', 'accessories'],
  }),
  sampleProduct({
    id: 'sample-rolling-papers',
    name: 'Rolling Papers Variety',
    slug: 'rolling-papers-variety',
    brand: 'Various Brands',
    category: 'Rolling Papers',
    subcategory: 'Papers and Wraps',
    shortDescription: 'Rolling papers, wraps, tips, and trays.',
    description: 'A sample category listing for rolling paper products and related accessories.',
    image: '/images/products/papers-brand.svg',
    tags: ['papers', 'wraps', 'tips'],
  }),
  sampleProduct({
    id: 'sample-nicotine-pouches',
    name: 'Nicotine Pouches',
    slug: 'nicotine-pouches',
    brand: 'Various Brands',
    category: 'Nicotine Pouches',
    subcategory: 'Pouches',
    shortDescription: 'Nicotine pouch options for adult nicotine users.',
    description: 'A sample nicotine pouch listing. Call Smoke Valley for current brands and flavors.',
    image: '/images/products/pouch-brand.svg',
    tags: ['nicotine', 'pouches', 'adult use'],
  }),
  sampleProduct({
    id: 'sample-cbd-hemp-gummies',
    name: 'CBD/Hemp Gummies',
    slug: 'cbd-hemp-gummies',
    brand: 'Various Brands',
    category: 'CBD/Hemp',
    subcategory: 'Gummies',
    shortDescription: 'Adult CBD/Hemp gummy options. No medical claims.',
    description: 'A sample CBD/Hemp listing. These products are not intended to diagnose, treat, cure, or prevent any disease.',
    image: '/images/products/cbd-hemp-brand.svg',
    tags: ['cbd', 'hemp', 'gummies'],
    disclaimerType: 'cbd-hemp',
  }),
  sampleProduct({
    id: 'sample-cbd-hemp-flower',
    name: 'CBD/Hemp Flower',
    slug: 'cbd-hemp-flower',
    brand: 'Various Brands',
    category: 'CBD/Hemp',
    subcategory: 'Flower',
    shortDescription: 'Adult CBD/Hemp flower options. Ask staff for details.',
    description: 'A sample hemp listing for future catalog replacement. Follow all applicable laws and store guidance.',
    image: '/images/products/cbd-hemp-brand.svg',
    tags: ['cbd', 'hemp', 'flower'],
    disclaimerType: 'cbd-hemp',
  }),
  sampleProduct({
    id: 'sample-kratom-capsules',
    name: 'Kratom Capsules',
    slug: 'kratom-capsules',
    brand: 'Various Brands',
    category: 'Kratom',
    subcategory: 'Capsules',
    shortDescription: 'Adult kratom capsule options. No medical claims.',
    description: 'A sample kratom listing. These products are not intended to diagnose, treat, cure, or prevent any disease.',
    image: '/images/products/kratom-brand.svg',
    tags: ['kratom', 'capsules', 'adult use'],
    disclaimerType: 'kratom',
  }),
  sampleProduct({
    id: 'sample-kratom-powder',
    name: 'Kratom Powder',
    slug: 'kratom-powder',
    brand: 'Various Brands',
    category: 'Kratom',
    subcategory: 'Powder',
    shortDescription: 'Adult kratom powder options. Ask staff for current selection.',
    description: 'A sample kratom listing for future catalog migration. Consult a qualified professional before use when appropriate.',
    image: '/images/products/kratom-brand.svg',
    tags: ['kratom', 'powder', 'adult use'],
    disclaimerType: 'kratom',
  }),
  sampleProduct({
    id: 'sample-snacks-drinks',
    name: 'Snack and Drink Grab-and-Go',
    slug: 'snack-and-drink-grab-and-go',
    brand: 'Various Brands',
    category: 'Snacks/Drinks',
    subcategory: 'Convenience',
    shortDescription: 'Quick snacks and drinks for your visit.',
    description: 'A sample convenience listing. Visit the store to see current snacks and drinks.',
    image: '/images/products/snacks-brand.svg',
    tags: ['snacks', 'drinks', 'convenience'],
    ageRestricted: false,
    disclaimerType: 'none',
  }),
];

export const featuredBrands = ['Geek Bar', 'Lost Mary', 'Fogger', 'Geek Vape', 'Smok'];
