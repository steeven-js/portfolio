import { fAdd } from 'src/utils/format-time';

import { CONFIG } from 'src/global-config';
import { countries } from 'src/assets/data';

import { _mock } from './_mock';
import { _tags } from './assets';

// ----------------------------------------------------------------------

export const TOUR_SERVICE_OPTIONS = [
  { value: 'Audio guide', label: 'Audio guide' },
  { value: 'Food and drinks', label: 'Food and drinks' },
  { value: 'Lunch', label: 'Lunch' },
  { value: 'Private tour', label: 'Private tour' },
  { value: 'Special activities', label: 'Special activities' },
  { value: 'Entrance fees', label: 'Entrance fees' },
  { value: 'Gratuities', label: 'Gratuities' },
  { value: 'Pick-up and drop off', label: 'Pick-up and drop off' },
  { value: 'Professional guide', label: 'Professional guide' },
  {
    value: 'Transport by air-conditioned',
    label: 'Transport by air-conditioned',
  },
];

const determineContinent = (index: number) => {
  if ([1, 2].includes(index)) return 'Asia';
  if ([3, 4].includes(index)) return 'Europe';
  if ([5, 6].includes(index)) return 'Africa';
  if ([7, 8].includes(index)) return 'Australia';
  if ([9, 10].includes(index)) return 'South America';
  return 'Africa';
};

const generateServices = (index: number) => {
  if (index % 2 === 0) return ['Audio guide', 'Food and drinks'];
  if (index % 3 === 0) return ['Lunch', 'Private tour'];
  if (index % 4 === 0) return ['Special activities', 'Entrance fees'];
  return [
    'Gratuities',
    'Pick-up and drop off',
    'Professional guide',
    'Transport by air-conditioned',
  ];
};

const generateProgram = () =>
  Array.from({ length: 3 }, (_, itemIndex) => ({
    label: `Day ${itemIndex + 1}`,
    text: _mock.description(itemIndex),
  }));

const generateGallery = () => Array.from({ length: 6 }, (_, index) => _mock.image.travel(index));

const generateHighlights = () => Array.from({ length: 6 }, (_, index) => _mock.sentence(index));

const generateHeroUrl = (index: number) =>
  [
    `${CONFIG.assetsDir}/assets/images/travel/travel-large-1.webp`,
    `${CONFIG.assetsDir}/assets/images/travel/travel-large-2.webp`,
    `${CONFIG.assetsDir}/assets/images/travel/travel-large-3.webp`,
    `${CONFIG.assetsDir}/assets/images/travel/travel-large-4.webp`,
    `${CONFIG.assetsDir}/assets/images/travel/travel-large-5.webp`,
  ][index];

// ----------------------------------------------------------------------

export const _tours = Array.from({ length: 12 }, (_, index) => {
  const tourGuide = {
    verified: true,
    role: _mock.role(index),
    name: _mock.fullName(index),
    avatarUrl: _mock.image.avatar(index),
    quotes: 'Member since Mar 15, 2021',
    phoneNumber: _mock.phoneNumber(index),
    ratingNumber: _mock.number.rating(index),
    totalReviews: _mock.number.nativeL(index),
    about:
      'Integer tincidunt. Nullam dictum felis eu pede mollis pretium. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem.',
    shareLinks: {
      facebook: 'https://facebook.example.com',
      instagram: 'https://instagram.example.com',
      linkedin: 'https://linkedin.example.com',
      twitter: 'https://twitter.example.com',
    },
  };

  return {
    id: _mock.id(index),
    tourGuide,
    tags: _tags.slice(0, 5),
    gallery: generateGallery(),
    program: generateProgram(),
    slug: _mock.tourName(index),
    duration: '3 days 2 nights',
    createdAt: _mock.time(index),
    heroUrl: generateHeroUrl(index),
    favorited: _mock.boolean(index),
    highlights: generateHighlights(),
    price: _mock.number.price(index),
    services: generateServices(index),
    coverUrl: _mock.image.travel(index),
    continent: determineContinent(index),
    description: _mock.description(index),
    ratingNumber: _mock.number.rating(index),
    totalReviews: _mock.number.nativeL(index),
    languages: ['English', 'Russian', 'Spanish'],
    location: countries.map((option) => option.label)[index + 1],
    priceSale: (index === 2 && 89.99) || (index === 5 && 69.99) || 0,
    available: {
      start: fAdd({ months: 2 }),
      end: fAdd({ months: 4 }),
    },
    shareLinks: {
      facebook: 'https://facebook.example.com',
      instagram: 'https://instagram.example.com',
      linkedin: 'https://linkedin.example.com',
      twitter: 'https://twitter.example.com',
    },
  };
});
