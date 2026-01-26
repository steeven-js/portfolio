import { paths } from 'src/routes/paths';

import { _caseStudies } from 'src/_mock';
import { CONFIG } from 'src/global-config';

// ----------------------------------------------------------------------

const imagePath = (name: string) => `${CONFIG.assetsDir}/assets/images/menu/${name}`;

export const pageLinks = [
  {
    subheader: 'Marketing',
    coverUrl: imagePath('marketing.webp'),
    items: [
      { title: 'Landing', path: paths.marketing.root },
      { title: 'Services', path: paths.marketing.services },
      { title: 'Case studies', path: paths.marketing.caseStudies },
      { title: 'Case study', path: paths.marketing.caseStudy(_caseStudies[0].id) },
      { title: 'Posts', path: paths.marketing.posts },
      { title: 'Post', path: paths.marketing.post },
      { title: 'About', path: paths.marketing.about },
      { title: 'Contact', path: paths.marketing.contact },
    ],
  },
  {
    subheader: 'Travel',
    coverUrl: imagePath('travel.webp'),
    items: [
      { title: 'Landing', path: paths.travel.root },
      { title: 'Tours', path: paths.travel.tours },
      { title: 'Tour', path: paths.travel.tour },
      { title: 'Checkout', path: paths.travel.checkout },
      { title: 'Order completed', path: paths.travel.orderCompleted },
      { title: 'Posts', path: paths.travel.posts },
      { title: 'Post', path: paths.travel.post },
      { title: 'About', path: paths.travel.about },
      { title: 'Contact', path: paths.travel.contact },
    ],
  },
  {
    subheader: 'Career',
    coverUrl: imagePath('career.webp'),
    items: [
      { title: 'Landing', path: paths.career.root },
      { title: 'Jobs', path: paths.career.jobs },
      { title: 'Job', path: paths.career.job },
      { title: 'Posts', path: paths.career.posts },
      { title: 'Post', path: paths.career.post },
      { title: 'About', path: paths.career.about },
      { title: 'Contact', path: paths.career.contact },
    ],
  },
  {
    subheader: 'E-learning',
    coverUrl: imagePath('e-learning.webp'),
    items: [
      { title: 'Landing', path: paths.eLearning.root },
      { title: 'Courses', path: paths.eLearning.courses },
      { title: 'Course', path: paths.eLearning.course },
      { title: 'Posts', path: paths.eLearning.posts },
      { title: 'Post', path: paths.eLearning.post },
      { title: 'About', path: paths.eLearning.about },
      { title: 'Contact', path: paths.eLearning.contact },
    ],
  },
  {
    subheader: 'E-commerce',
    coverUrl: imagePath('e-commerce.webp'),
    items: [
      { title: 'Landing', path: paths.eCommerce.root },
      { title: 'Products', path: paths.eCommerce.products },
      { title: 'Product', path: paths.eCommerce.product },
      { title: 'Cart', path: paths.eCommerce.cart },
      { title: 'Checkout', path: paths.eCommerce.checkout },
      { title: 'Order completed', path: paths.eCommerce.orderCompleted },
      { title: 'Wishlist', path: paths.eCommerce.wishlist },
      { title: 'Compare', path: paths.eCommerce.compare },
      { title: 'Account personal', path: paths.account.personal },
      { title: 'Account wishlist', path: paths.account.wishlist },
      { title: 'Account vouchers', path: paths.account.vouchers },
      { title: 'Account orders', path: paths.account.orders },
      { title: 'Account payment', path: paths.account.payment },
    ],
  },
  {
    subheader: 'Common',
    items: [
      { title: 'Sign in (split)', path: paths.split.signIn },
      { title: 'Sign up (split)', path: paths.split.signUp },
      { title: 'Sign in (centered)', path: paths.centered.signIn },
      { title: 'Sign up (centered)', path: paths.centered.signUp },
      { title: 'Sign in (illustration)', path: paths.illustration.signIn },
      { title: 'Sign up (illustration)', path: paths.illustration.signUp },
      { title: 'Reset password', path: paths.resetPassword },
      { title: 'Update password', path: paths.updatePassword },
      { title: 'Verify', path: paths.verify },
      { title: '404 error', path: paths.page404 },
      { title: '500 error', path: paths.page500 },
      { title: 'Maintenance', path: paths.maintenance },
      { title: 'Coming soon', path: paths.comingsoon },
      { title: 'Pricing cards', path: paths.pricingCards },
      { title: 'Pricing columns', path: paths.pricingColumns },
      { title: 'Payment', path: paths.payment },
      { title: 'Support', path: paths.support },
    ],
  },
];

export const navData = [
  { title: 'Home', path: '/' },
  { title: 'Components', path: paths.components },
  { title: 'Pages', path: paths.pages, children: pageLinks },
  { title: 'Docs', path: paths.docs },
];
