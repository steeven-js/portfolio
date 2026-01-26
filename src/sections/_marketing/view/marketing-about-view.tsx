import { _brands, _members, _testimonials } from 'src/_mock';

import { MarketingAbout } from '../about/marketing-about';
import { MarketingTeamAbout } from '../marketing-team-about';
import { MarketingNewsletter } from '../marketing-newsletter';
import { MarketingTestimonial } from '../marketing-testimonial';
import { MarketingAboutStory } from '../about/marketing-about-story';
import { MarketingLandingFaqs } from '../landing/marketing-landing-faqs';
import { MarketingAboutOurClients } from '../marketing-about-our-clients';
import { MarketingAboutOurVision } from '../about/marketing-about-our-vision';
import { MarketingLandingFreeSEO } from '../landing/marketing-landing-free-seo';
import { MarketingAboutCoreValues } from '../about/marketing-about-core-values';

// ----------------------------------------------------------------------

export function MarketingAboutView() {
  return (
    <>
      <MarketingAbout />

      <MarketingAboutOurVision />

      <MarketingAboutCoreValues />

      <MarketingAboutStory />

      <MarketingTeamAbout members={_members} />

      <MarketingAboutOurClients brands={_brands.slice(0, 8)} />

      <MarketingTestimonial testimonials={_testimonials} />

      <MarketingLandingFaqs />

      <MarketingLandingFreeSEO />

      <MarketingNewsletter />
    </>
  );
}
