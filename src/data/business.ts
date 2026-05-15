const address = {
  street: '1800 FM 359 Road',
  city: 'Richmond',
  state: 'TX',
  postalCode: '77406',
  country: 'US',
};

const formattedAddress = `${address.street}, ${address.city}, ${address.state} ${address.postalCode}`;
const encodedAddress = encodeURIComponent(formattedAddress);
const whatsappMessage = encodeURIComponent('Hi Smoke Valley, I have a question about your products.');

export const business = {
  publicName: 'Smoke Valley',
  seoName: 'Smoke Valley Smoke Shop',
  tagline: 'Richmond’s local stop for vapes, hookah, glass, accessories, CBD/Hemp, kratom, and more.',
  address,
  formattedAddress,
  phoneDisplay: '832-295-3150',
  phoneHref: 'tel:8322953150',
  whatsappDisplay: '346-702-0896',
  whatsappHref: `https://wa.me/13467020896?text=${whatsappMessage}`,
  email: 'smokevalleyusa@gmail.com',
  emailHref: 'mailto:smokevalleyusa@gmail.com',
  reviewUrl: 'https://share.google/Rxlu3YLNpZEbhXfua',
  directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`,
  mapEmbedUrl: `https://www.google.com/maps?q=${encodedAddress}&output=embed`,
  siteUrl: 'https://smoke-valley.pages.dev',
  hours: [
    {
      label: 'Monday-Saturday',
      days: 'Mon-Sat',
      opens: '10:00',
      closes: '22:00',
      display: '10:00 AM - 10:00 PM',
      schemaDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    },
    {
      label: 'Sunday',
      days: 'Sun',
      opens: '10:00',
      closes: '19:00',
      display: '10:00 AM - 7:00 PM',
      schemaDays: ['Sunday'],
    },
  ],
} as const;

export type Business = typeof business;
