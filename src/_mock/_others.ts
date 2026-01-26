import { CONFIG } from 'src/global-config';

import { _mock } from './_mock';

// ----------------------------------------------------------------------

export const _testimonials = Array.from({ length: 8 }, (_, index) => ({
  id: _mock.id(index),
  name: _mock.fullName(index),
  role: _mock.role(index),
  avatarUrl: _mock.image.avatar(index),
  createdAt: _mock.time(index),
  ratingNumber: 5,
  content:
    'Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.',
}));

// ----------------------------------------------------------------------

export const _socials = [
  { value: 'facebook', label: 'Facebook' },
  { value: 'instagram', label: 'Instagram' },
  { value: 'linkedin', label: 'Linkedin' },
  { value: 'twitter', label: 'Twitter' },
];

// ----------------------------------------------------------------------

export const _offices = ['Jordan', 'Canada', 'Portugal'].map((country, index) => ({
  country,
  id: _mock.id(index),
  email: _mock.email(index),
  photoUrl: _mock.image.travel(index),
  address: _mock.fullAddress(index),
  phoneNumber: _mock.phoneNumber(index),
  position: [
    { lat: 33, lng: 65 },
    { lat: -12.5, lng: 18.5 },
    { lat: 20.96, lng: 26.27 },
  ][index],
}));

// ----------------------------------------------------------------------

export const _brands = [
  'airbnb',
  'dropbox',
  'facebook',
  'google',
  'heroku',
  'lenovo',
  'microsoft',
  'netflix',
  'slack',
  'spotify',
  'tripadvisor',
  'vimeo',
].map((brand, index) => ({
  id: _mock.id(index),
  name: brand,
  image: `${CONFIG.assetsDir}/assets/icons/brands/${brand}.svg`,
}));

// ----------------------------------------------------------------------

export const _faqs = [
  'Sed augue ipsum, egestas nec, vestibulum et',
  'alesuada adipiscing, dui vestibulum suscipit nulla quis orci.',
  'Ut varius tincidunt libero',
  'In ut quam vitae odio lacinia tincidunt.',
  'Fusce vel dui Morbi nec metus.',
].map((question, index) => ({
  id: _mock.id(index),
  question,
  answer:
    'Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.',
}));

export const _faqsSupport = [
  `[Covid] Seasonal Shopping Guide`,
  'I Want To Check Where My Order Is Delivered',
  '[Shipping Information] How To Contact The Shipping Unit/Look Up Shipping Information/Delivery Exchange?',
  '[Seller] Start Selling With Shopee',
  'Why Is My Account Locked/Limited?',
  'Free Shipping Code User Guide (Freeship Code)',
  'How To Buy / Order On Shopee App',
  `Why I Didn't Receive the Verification Code (OTP)?`,
  `Frequently Asked Questions About Product Reviews / Comments`,
  `How to Login Shopee Account When Forgot/Lost Password`,
].map((question, index) => ({
  id: _mock.id(index),
  question,
  answer:
    'Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.',
}));
