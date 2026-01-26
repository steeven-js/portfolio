import { _products, _testimonials } from 'src/_mock';

import { EcommerceTestimonial } from '../ecommerce-testimonial';
import { EcommerceLandingHero } from '../landing/ecommerce-landing-hero';
import { EcommerceLandingCategories } from '../landing/ecommerce-landing-categories';
import { EcommerceLandingTopProducts } from '../landing/ecommerce-landing-top-products';
import { EcommerceLandingSpecialOffer } from '../landing/ecommerce-landing-special-offer';
import { EcommerceLandingHotDealToday } from '../landing/ecommerce-landing-hot-deal-today';
import { EcommerceLandingFeaturedBrands } from '../landing/ecommerce-landing-featured-brands';
import { EcommerceLandingPopularProducts } from '../landing/ecommerce-landing-popular-products';
import { EcommerceLandingFeaturedProducts } from '../landing/ecommerce-landing-featured-products';

// ----------------------------------------------------------------------

export function EcommerceLandingView() {
  return (
    <>
      <EcommerceLandingHero />

      <EcommerceLandingCategories />

      <EcommerceLandingHotDealToday products={_products} />

      <EcommerceLandingFeaturedProducts
        largeProducts={_products.slice(1, 3)}
        smallProducts={_products.slice(4, 8)}
      />

      <EcommerceLandingSpecialOffer />

      <EcommerceLandingFeaturedBrands products={_products.slice(4, 8)} />

      <EcommerceLandingPopularProducts products={_products.slice(0, 8)} />

      <EcommerceLandingTopProducts
        largeProducts={[_products[6], _products[4], _products[10]]}
        smallProducts={_products.slice(4, 8)}
      />

      <EcommerceTestimonial testimonials={_testimonials} />
    </>
  );
}
