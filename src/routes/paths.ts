export const paths = {
  /**
   * Marketing
   */
  marketing: {
    root: '/marketing',
    services: '/marketing/services',
    caseStudies: '/marketing/case-studies',
    caseStudy: (id: string) => `/marketing/case-studies/${id}`,
    posts: '/marketing/posts',
    post: '/marketing/posts/details',
    about: '/marketing/about',
    contact: '/marketing/contact',
  },
  /**
   * Travel
   */
  travel: {
    root: '/travel',
    tours: '/travel/tours',
    tour: '/travel/tours/details',
    checkout: '/travel/checkout',
    orderCompleted: '/travel/order-completed',
    posts: '/travel/posts',
    post: '/travel/posts/details',
    about: '/travel/about',
    contact: '/travel/contact',
  },
  /**
   * Career
   */
  career: {
    root: '/career',
    jobs: '/career/jobs',
    job: '/career/jobs/details',
    posts: '/career/posts',
    post: '/career/posts/details',
    about: '/career/about',
    contact: '/career/contact',
  },
  /**
   * E-learning
   */
  eLearning: {
    root: '/e-learning',
    courses: '/e-learning/courses',
    course: '/e-learning/courses/details',
    posts: '/e-learning/posts',
    post: '/e-learning/posts/details',
    about: '/e-learning/about',
    contact: '/e-learning/contact',
  },
  /**
   * E-commerce
   */
  eCommerce: {
    root: '/e-commerce',
    products: '/e-commerce/products',
    product: '/e-commerce/products/details',
    cart: '/e-commerce/cart',
    checkout: '/e-commerce/checkout',
    orderCompleted: '/e-commerce/order-completed',
    wishlist: '/e-commerce/wishlist',
    compare: '/e-commerce/compare',
  },
  /**
   * Account
   */
  account: {
    root: '/account',
    personal: '/account/personal',
    wishlist: '/account/wishlist',
    vouchers: '/account/vouchers',
    orders: '/account/orders',
    payment: '/account/payment',
  },
  /**
   * Auth
   */
  split: {
    signIn: '/split/sign-in',
    signUp: '/split/sign-up',
  },
  centered: {
    signIn: '/centered/sign-in',
    signUp: '/centered/sign-up',
  },
  illustration: {
    signIn: '/illustration/sign-in',
    signUp: '/illustration/sign-up',
  },
  verify: '/verify',
  resetPassword: '/reset-password',
  updatePassword: '/update-password',
  /**
   * Common
   */
  maintenance: '/maintenance',
  comingsoon: '/coming-soon',
  pricingCards: '/pricing-cards',
  pricingColumns: '/pricing-columns',
  payment: '/payment',
  support: '/support',
  page404: '/error/404',
  page500: '/error/500',
  /**
   * Others
   */
  components: '/components',
  pages: '/pages',
  docs: 'https://zone-docs.vercel.app',
  license: 'https://material-ui.com/store/license/#i-standard-license',
  minimalStore: 'https://material-ui.com/store/items/minimal-dashboard',
  zoneStore: 'https://mui.com/store/items/zone-landing-page/',
  figmaUrl: 'https://www.figma.com/design/i0ssoAvNd4QmsdhgUTDAKC/-Preview--Zone-Web.v4.2.0',
};
