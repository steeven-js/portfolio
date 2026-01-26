import { _brands, _members, _coursePosts, _testimonials } from 'src/_mock';

import { ElearningAbout } from '../about/elearning-about';
import { ElearningTeamAbout } from '../elearning-team-about';
import { ElearningNewsletter } from '../elearning-newsletter';
import { ElearningOurClients } from '../elearning-our-clients';
import { ElearningTestimonial } from '../elearning-testimonial';
import { ElearningAboutHero } from '../about/elearning-about-hero';
import { ElearningLatestPosts } from '../posts/elearning-latest-posts';
import { ElearningAboutCoreValues } from '../about/elearning-about-core-values';

// ----------------------------------------------------------------------

const latestPosts = _coursePosts.slice(3, 6);

export function ElearningAboutView() {
  return (
    <>
      <ElearningAboutHero />

      <ElearningOurClients brands={_brands} />

      <ElearningAbout />

      <ElearningAboutCoreValues />

      <ElearningTeamAbout members={_members} />

      <ElearningTestimonial testimonials={_testimonials} />

      <ElearningLatestPosts posts={latestPosts} />

      <ElearningNewsletter />
    </>
  );
}
