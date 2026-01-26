import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { inputBaseClasses } from '@mui/material/InputBase';

import { _tours, _travelPosts, _testimonials } from 'src/_mock';

import { TravelNewsletter } from '../travel-newsletter';
import { TravelFilters } from '../filters/travel-filters';
import { TravelTestimonial } from '../travel-testimonial';
import { TravelLandingHero } from '../landing/travel-landing-hero';
import { TravelLandingPosts } from '../posts/travel-landing-posts';
import { TravelLandingSummary } from '../landing/travel-landing-summary';
import { TravelLandingIntroduce } from '../landing/travel-landing-introduce';
import { TravelLandingToursByCity } from '../landing/travel-landing-tours-by-city';
import { TravelLandingTourFeatured } from '../landing/travel-landing-tour-featured';
import { TravelLandingFavoriteDestinations } from '../landing/travel-landing-favorite-destinations';

// ----------------------------------------------------------------------

const heroTours = _tours.slice(0, 5);
const cityTours = _tours.slice(0, 8);
const featuredTours = _tours.slice(0, 4);
const favoriteTours = _tours.slice(0, 4);
const posts = _travelPosts.slice(5, 8);
const carouselPosts = _travelPosts.slice(0, 4);

export function TravelLandingView() {
  return (
    <>
      <Box component="section" sx={{ position: 'relative' }}>
        <TravelLandingHero tours={heroTours} />

        <Container
          sx={(theme) => ({
            pt: 3,
            [theme.breakpoints.up('md')]: {
              pt: 0,
              mb: 10,
              left: 0,
              right: 0,
              bottom: 0,
              mx: 'auto',
              position: 'absolute',
            },
          })}
        >
          <TravelFilters
            sx={(theme) => ({
              [theme.breakpoints.up('md')]: {
                color: 'common.white',
                bgcolor: varAlpha(theme.vars.palette.common.whiteChannel, 0.08),
                [`& .${inputBaseClasses.input}`]: { color: 'common.white' },
              },
            })}
          />
        </Container>
      </Box>

      <TravelLandingIntroduce />

      <TravelLandingSummary />

      <TravelLandingFavoriteDestinations tours={favoriteTours} />

      <TravelLandingTourFeatured tours={featuredTours} />

      <TravelLandingToursByCity tours={cityTours} />

      <TravelLandingPosts posts={posts} carouselPosts={carouselPosts} />

      <TravelTestimonial testimonials={_testimonials} />

      <TravelNewsletter />
    </>
  );
}
