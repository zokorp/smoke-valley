import { business } from './business';

export type SocialLink = {
  label: string;
  url: string | null;
  placeholder: boolean;
};

export const socialLinks: SocialLink[] = [
  {
    label: 'Instagram',
    url: null,
    placeholder: true,
  },
  {
    label: 'Facebook',
    url: null,
    placeholder: true,
  },
  {
    label: 'Yelp',
    url: null,
    placeholder: true,
  },
  {
    label: 'Google Business',
    url: business.reviewUrl,
    placeholder: false,
  },
];
