import { _testimonials, _marketingPosts } from 'src/_mock';

import { MarketingNewsletter } from '../marketing-newsletter';
import { MarketingTestimonial } from '../marketing-testimonial';
import { MarketingServices } from '../services/marketing-services';
import { MarketingLatestPosts } from '../posts/marketing-latest-posts';
import { MarketingServicesHero } from '../services/marketing-services-hero';
import { MarketingLandingFreeSEO } from '../landing/marketing-landing-free-seo';
import { MarketingServicesInclude } from '../services/marketing-services-include';
import { MarketingServicesBenefits } from '../services/marketing-services-benefits';
import { MarketingServicesHowItWork } from '../services/marketing-services-how-it-work';

// ----------------------------------------------------------------------

const latestPosts = _marketingPosts.slice(0, 4);

export function MarketingServicesView() {
  return (
    <>
      <MarketingServicesHero />

      <MarketingServices />

      <MarketingServicesInclude />

      <MarketingServicesBenefits />

      <MarketingServicesHowItWork />

      <MarketingTestimonial testimonials={_testimonials} />

      <MarketingLatestPosts posts={latestPosts} />

      <MarketingLandingFreeSEO />

      <MarketingNewsletter />
    </>
  );
}
