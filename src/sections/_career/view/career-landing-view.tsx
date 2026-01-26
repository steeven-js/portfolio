import {
  _jobs,
  _brands,
  _careerPosts,
  _testimonials,
  _jobsByCompanies,
  _jobsByCountries,
  _jobsByCategories,
} from 'src/_mock';

import { CareerNewsletter } from '../career-newsletter';
import { CareerOurClients } from '../career-our-clients';
import { CareerTestimonial } from '../career-testimonial';
import { CareerDownloadApp } from '../career-download-app';
import { CareerLatestPosts } from '../posts/career-latest-posts';
import { CareerLandingHero } from '../landing/career-landing-hero';
import { CareerLandingStep } from '../landing/career-landing-step';
import { CareerLandingConnections } from '../landing/career-landing-connections';
import { CareerLandingFeaturedJobs } from '../landing/career-landing-featured-jobs';
import { CareerLandingTopCompanies } from '../landing/career-landing-top-companies';
import { CareerLandingHotCategories } from '../landing/career-landing-hot-categories';
import { CareerLandingForRecruiters } from '../landing/career-landing-for-recruiters';

// ----------------------------------------------------------------------

const featuredJobs = _jobs.slice(-6);
const latestPosts = _careerPosts.slice(0, 5);

export function CareerLandingView() {
  return (
    <>
      <CareerLandingHero />

      <CareerLandingStep />

      <CareerLandingFeaturedJobs jobs={featuredJobs} />

      <CareerLandingTopCompanies companies={_jobsByCompanies} />

      <CareerLandingHotCategories categories={_jobsByCategories} />

      <CareerLandingConnections countries={_jobsByCountries} />

      <CareerLandingForRecruiters />

      <CareerTestimonial testimonials={_testimonials} />

      <CareerOurClients brands={_brands} />

      <CareerLatestPosts largePost={latestPosts[0]} smallPosts={latestPosts.slice(1, 5)} />

      <CareerDownloadApp />

      <CareerNewsletter />
    </>
  );
}
