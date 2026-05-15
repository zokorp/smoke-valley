export type Category = {
  name: string;
  slug: string;
  description: string;
  image: string;
};

export const categories: Category[] = [
  {
    name: 'Vapes',
    slug: 'vapes',
    description: 'Devices, pods, coils, and everyday vape accessories.',
    image: '/images/products/product-placeholder-vape.svg',
  },
  {
    name: 'Disposables',
    slug: 'disposables',
    description: 'Popular disposable vape brands and styles. Selection may vary.',
    image: '/images/products/product-placeholder-vape.svg',
  },
  {
    name: 'E-Liquids',
    slug: 'e-liquids',
    description: 'Flavor options for compatible adult-use devices.',
    image: '/images/products/product-placeholder-vape.svg',
  },
  {
    name: 'Hookah',
    slug: 'hookah',
    description: 'Hookah accessories, bowls, hoses, and supplies.',
    image: '/images/products/product-placeholder-hookah.svg',
  },
  {
    name: 'Glass',
    slug: 'glass',
    description: 'Glass accessories and water pipe styles for adults 21+.',
    image: '/images/products/product-placeholder-glass.svg',
  },
  {
    name: 'Rolling Papers',
    slug: 'rolling-papers',
    description: 'Papers, wraps, tips, trays, and related accessories.',
    image: '/images/products/product-placeholder-papers.svg',
  },
  {
    name: 'Nicotine Pouches',
    slug: 'nicotine-pouches',
    description: 'Nicotine pouch options for adult nicotine users.',
    image: '/images/products/product-placeholder-pouch.svg',
  },
  {
    name: 'Accessories',
    slug: 'accessories',
    description: 'Chargers, lighters, storage, cleaning supplies, and more.',
    image: '/images/products/product-placeholder-accessories.svg',
  },
  {
    name: 'Snacks/Drinks',
    slug: 'snacks-drinks',
    description: 'Quick snacks and drinks for a convenient stop.',
    image: '/images/products/product-placeholder-snacks.svg',
  },
  {
    name: 'CBD/Hemp',
    slug: 'cbd-hemp',
    description: 'Adult hemp products with simple in-store guidance.',
    image: '/images/products/product-placeholder-cbd.svg',
  },
  {
    name: 'Kratom',
    slug: 'kratom',
    description: 'Kratom products for adults 21+. Ask staff for current selection.',
    image: '/images/products/product-placeholder-kratom.svg',
  },
];
