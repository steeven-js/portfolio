import { _brands, _members, _travelPosts, _testimonials } from 'src/_mock';

import { TravelTeam } from '../travel-team';
import { TravelAbout } from '../about/travel-about';
import { TravelNewsletter } from '../travel-newsletter';
import { TravelOurClients } from '../travel-our-clients';
import { TravelTestimonial } from '../travel-testimonial';
import { TravelLatestPosts } from '../posts/travel-latest-posts';
import { TravelAboutOurVision } from '../about/travel-about-our-mission';

// ----------------------------------------------------------------------

const latestPosts = _travelPosts.slice(0, 4);

export function TravelAboutView() {
  return (
    <>
      <TravelAbout />

      <TravelAboutOurVision />

      <TravelTeam members={_members} />

      <TravelTestimonial testimonials={_testimonials} />

      <TravelOurClients brands={_brands} />

      <TravelLatestPosts posts={latestPosts} />

      <TravelNewsletter />
    </>
  );
}
