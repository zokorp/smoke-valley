export type FeaturedBrandTile = {
  name: string;
  category: string;
  style: string;
};

export const featuredBrandTiles: FeaturedBrandTile[] = [
  {
    name: 'Geek Bar',
    category: 'Disposables',
    style: '--brand-bg:#111817; --brand-text:#ffffff; --brand-accent:#4fe0a0;',
  },
  {
    name: 'Lost Mary',
    category: 'Disposables',
    style: '--brand-bg:#fff7f2; --brand-text:#111817; --brand-accent:#ff7a45;',
  },
  {
    name: 'Fogger',
    category: 'Disposables',
    style: '--brand-bg:#f4f7ff; --brand-text:#16213f; --brand-accent:#6a8cff;',
  },
  {
    name: 'Geek Vape',
    category: 'Devices',
    style: '--brand-bg:#f2fbf7; --brand-text:#0d3c2b; --brand-accent:#166345;',
  },
  {
    name: 'Smok',
    category: 'Devices',
    style: '--brand-bg:#111817; --brand-text:#ffffff; --brand-accent:#d9dfdc;',
  },
];
