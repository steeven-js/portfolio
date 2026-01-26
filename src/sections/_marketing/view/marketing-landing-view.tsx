import {
  _brands,
  _members,
  _caseStudies,
  _testimonials,
  _marketingPosts,
  _pricingMarketing,
} from 'src/_mock';

import { MarketingTeam } from '../marketing-team';
import { MarketingPricing } from './marketing-pricing';
import { MarketingNewsletter } from '../marketing-newsletter';
import { MarketingOurClients } from '../marketing-our-clients';
import { MarketingTestimonial } from '../marketing-testimonial';
import { MarketingLatestPosts } from '../posts/marketing-latest-posts';
import { MarketingLandingHero } from '../landing/marketing-landing-hero';
import { MarketingLandingFaqs } from '../landing/marketing-landing-faqs';
import { MarketingLandingAbout } from '../landing/marketing-landing-about';
import { MarketingLandingProcess } from '../landing/marketing-landing-process';
import { MarketingLandingFreeSEO } from '../landing/marketing-landing-free-seo';
import { MarketingLandingServices } from '../landing/marketing-landing-services';
import { MarketingLandingCaseStudies } from '../landing/marketing-landing-case-studies';

// ----------------------------------------------------------------------

const caseStudies = _caseStudies.slice(0, 6);
const latestPosts = _marketingPosts.slice(0, 4);

export function MarketingLandingView() {
  return (
    <>
      <MarketingLandingHero />

      <MarketingOurClients brands={_brands} />

      <MarketingLandingAbout />

      <MarketingLandingServices />

      <MarketingLandingProcess />

      <MarketingLandingCaseStudies caseStudies={caseStudies} />

      <MarketingTeam members={_members} />

      <MarketingPricing plans={_pricingMarketing} />

      <MarketingLandingFaqs />

      <MarketingTestimonial testimonials={_testimonials} />

      <MarketingLatestPosts posts={latestPosts} />

      <MarketingLandingFreeSEO />

      <MarketingNewsletter />
    </>
  );
}
