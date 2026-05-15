import { categories } from './categories';
import { featuredBrandTiles } from './brands';

export type CatalogInquiry = {
  id: string;
  title: string;
  type: 'Category' | 'Brand';
  category: string;
  brand: string;
  subcategory: string;
  description: string;
  image: string;
  displayImage: string;
  tags: string[];
  flavorExamples: string[];
  newArrival: boolean;
};

const categoryDetails: Record<string, Pick<CatalogInquiry, 'subcategory' | 'flavorExamples' | 'newArrival'>> = {
  Vapes: {
    subcategory: 'Devices, pods, coils',
    flavorExamples: ['Pods', 'Coils', 'Chargers'],
    newArrival: false,
  },
  Disposables: {
    subcategory: 'Disposable vape styles',
    flavorExamples: ['Fruit', 'Ice', 'Menthol'],
    newArrival: false,
  },
  'E-Liquids': {
    subcategory: 'E-liquid options',
    flavorExamples: ['Fruit', 'Dessert', 'Menthol'],
    newArrival: false,
  },
  Hookah: {
    subcategory: 'Hookah supplies',
    flavorExamples: ['Bowls', 'Hoses', 'Tips'],
    newArrival: false,
  },
  Glass: {
    subcategory: 'Glass accessories',
    flavorExamples: ['Water pipes', 'Hand pipes', 'Cleaning'],
    newArrival: false,
  },
  'Rolling Papers': {
    subcategory: 'Papers and wraps',
    flavorExamples: ['Papers', 'Wraps', 'Tips'],
    newArrival: false,
  },
  'Nicotine Pouches': {
    subcategory: 'Nicotine pouch options',
    flavorExamples: ['Mint', 'Fruit', 'Original'],
    newArrival: false,
  },
  Accessories: {
    subcategory: 'Everyday accessories',
    flavorExamples: ['Lighters', 'Chargers', 'Storage'],
    newArrival: false,
  },
  'Snacks/Drinks': {
    subcategory: 'Convenience items',
    flavorExamples: ['Drinks', 'Snacks', 'Grab-and-go'],
    newArrival: false,
  },
  'CBD/Hemp': {
    subcategory: 'CBD/Hemp products',
    flavorExamples: ['Gummies', 'Flower', 'Ask staff'],
    newArrival: false,
  },
  Kratom: {
    subcategory: 'Kratom products',
    flavorExamples: ['Capsules', 'Powder', 'Ask staff'],
    newArrival: false,
  },
};

const brandDetails: Record<string, Pick<CatalogInquiry, 'category' | 'subcategory' | 'flavorExamples' | 'newArrival'>> = {
  'Geek Bar': {
    category: 'Disposables',
    subcategory: 'Disposable vape styles',
    flavorExamples: ['Fruit', 'Ice', 'Limited drops'],
    newArrival: true,
  },
  'Lost Mary': {
    category: 'Disposables',
    subcategory: 'Disposable vape styles',
    flavorExamples: ['Fruit', 'Menthol', 'Popular blends'],
    newArrival: true,
  },
  Fogger: {
    category: 'Disposables',
    subcategory: 'Disposable vape styles',
    flavorExamples: ['Fruit', 'Ice', 'Sweet blends'],
    newArrival: true,
  },
  'Geek Vape': {
    category: 'Vapes',
    subcategory: 'Devices and accessories',
    flavorExamples: ['Devices', 'Pods', 'Coils'],
    newArrival: true,
  },
  Smok: {
    category: 'Vapes',
    subcategory: 'Devices and accessories',
    flavorExamples: ['Devices', 'Pods', 'Replacement parts'],
    newArrival: false,
  },
};

const categoryInquiries: CatalogInquiry[] = categories.map((category) => {
  const details = categoryDetails[category.name] ?? {
    subcategory: category.name,
    flavorExamples: ['Ask staff'],
    newArrival: false,
  };

  return {
    id: `category-${category.slug}`,
    title: category.name,
    type: 'Category',
    category: category.name,
    brand: 'Various Brands',
    subcategory: details.subcategory,
    description: category.description,
    image: category.image,
    displayImage: category.image,
    tags: [category.name, 'adult 21+', 'ask staff'],
    flavorExamples: details.flavorExamples,
    newArrival: details.newArrival,
  };
});

const brandInquiries: CatalogInquiry[] = featuredBrandTiles.map((brand) => {
  const details = brandDetails[brand.name] ?? {
    category: brand.category,
    subcategory: brand.category,
    flavorExamples: ['Ask staff'],
    newArrival: false,
  };

  return {
    id: `brand-${brand.name.toLowerCase().replaceAll(' ', '-')}`,
    title: brand.name,
    type: 'Brand',
    category: details.category,
    brand: brand.name,
    subcategory: details.subcategory,
    description: `Ask Smoke Valley staff about current ${brand.name} options, styles, and available selections.`,
    image: '/images/products/vape-brand.svg',
    displayImage: '/images/products/vape-brand.svg',
    tags: [brand.name, 'featured brand', 'call ahead'],
    flavorExamples: details.flavorExamples,
    newArrival: details.newArrival,
  };
});

export const catalogInquiries = [...categoryInquiries, ...brandInquiries];
export const newArrivalInquiries = catalogInquiries.filter((inquiry) => inquiry.newArrival);
