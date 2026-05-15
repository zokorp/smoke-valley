import { business } from './business';
import { socialLinks } from './socials';

export const getLocalBusinessSchema = () => {
  const sameAs = socialLinks
    .map((social) => social.url)
    .filter((url): url is string => Boolean(url && url.startsWith('https://')));

  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'Store'],
    name: business.seoName,
    url: business.siteUrl,
    telephone: business.phoneDisplay,
    email: business.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    openingHoursSpecification: business.hours.flatMap((hour) =>
      hour.schemaDays.map((day) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: day,
        opens: hour.opens,
        closes: hour.closes,
      })),
    ),
    sameAs,
  };
};
