import Box from '@mui/material/Box';

import { _brands, _members, _careerPosts, _testimonials } from 'src/_mock';

import { CareerTeam } from '../career-team';
import { CareerAbout } from '../about/career-about';
import { CareerNewsletter } from '../career-newsletter';
import { CareerOurClients } from '../career-our-clients';
import { CareerTestimonial } from '../career-testimonial';
import { CareerLatestPosts } from '../posts/career-latest-posts';
import { CareerAboutOurVision } from '../about/career-about-our-vision';

// ----------------------------------------------------------------------

const latestPosts = _careerPosts.slice(0, 5);

export function CareerAboutView() {
  return (
    <>
      <CareerAbout />

      <CareerAboutOurVision />

      <Box
        component="span"
        sx={(theme) => ({
          height: 80,
          mx: 'auto',
          width: '1px',
          bgcolor: theme.vars.palette.divider,
        })}
      />

      <CareerTeam members={_members} />

      <CareerTestimonial testimonials={_testimonials} />

      <CareerOurClients brands={_brands} />

      <CareerLatestPosts largePost={latestPosts[0]} smallPosts={latestPosts.slice(1, 5)} />

      <CareerNewsletter />
    </>
  );
}
