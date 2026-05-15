import { business } from './business';

export type SocialLink = {
  label: string;
  url: string | null;
  hiddenUntilReady: boolean;
};

export const socialLinks: SocialLink[] = [
  {
    label: 'Instagram',
    url: null,
    hiddenUntilReady: true,
  },
  {
    label: 'Facebook',
    url: null,
    hiddenUntilReady: true,
  },
  {
    label: 'Yelp',
    url: null,
    hiddenUntilReady: true,
  },
  {
    label: 'Google Business',
    url: business.reviewUrl,
    hiddenUntilReady: false,
  },
];
