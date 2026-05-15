import { categories } from './categories';
import { featuredBrands } from './products';

export type CatalogInquiry = {
  id: string;
  title: string;
  type: 'Category' | 'Brand';
  category: string;
  brand: string;
  description: string;
  image: string;
  tags: string[];
};

const categoryInquiries: CatalogInquiry[] = categories.map((category) => ({
  id: `category-${category.slug}`,
  title: category.name,
  type: 'Category',
  category: category.name,
  brand: 'Various Brands',
  description: category.description,
  image: category.image,
  tags: [category.name, 'adult 21+', 'ask staff'],
}));

const brandInquiries: CatalogInquiry[] = featuredBrands.map((brand) => ({
  id: `brand-${brand.toLowerCase().replaceAll(' ', '-')}`,
  title: brand,
  type: 'Brand',
  category: brand === 'Geek Vape' || brand === 'Smok' ? 'Vapes' : 'Disposables',
  brand,
  description: `Ask Smoke Valley staff about current ${brand} options, styles, and available selections.`,
  image: '/images/products/vape-brand.svg',
  tags: [brand, 'featured brand', 'call ahead'],
}));

export const catalogInquiries = [...categoryInquiries, ...brandInquiries];
