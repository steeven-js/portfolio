import type { BoxProps } from '@mui/material/Box';
import type { ITestimonialProps } from 'src/types/testimonial';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/global-config';

import { Iconify } from 'src/components/iconify';
import {
  Carousel,
  useCarousel,
  CarouselDotButtons,
  CarouselArrowBasicButtons,
} from 'src/components/carousel';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  testimonials: ITestimonialProps[];
};

export function TravelTestimonial({ testimonials, sx, ...other }: Props) {
  const carousel = useCarousel();

  return (
    <Box
      component="section"
      sx={[
        {
          py: { xs: 10, md: 15 },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container>
        <Grid container spacing={3} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h2" sx={{ mb: 5, textAlign: { xs: 'center', md: 'left' } }}>
              What our customer say
            </Typography>

            <Carousel carousel={carousel}>
              {testimonials.map((testimonial) => (
                <TestimonialItem key={testimonial.id} testimonial={testimonial} />
              ))}
            </Carousel>
          </Grid>

          <Grid
            sx={{ textAlign: { md: 'right' }, display: { xs: 'none', md: 'block' } }}
            size={{ xs: 12, md: 6 }}
          >
            <Box
              component="img"
              loading="lazy"
              alt="Travel testimonial"
              src={`${CONFIG.assetsDir}/assets/illustrations/illustration-customer.svg`}
              sx={{ width: 320 }}
            />
          </Grid>
        </Grid>

        <CarouselDotButtons
          scrollSnaps={carousel.dots.scrollSnaps}
          selectedIndex={carousel.dots.selectedIndex}
          onClickDot={carousel.dots.onClickDot}
          sx={{
            mt: 8,
            width: 1,
            color: 'primary.main',
            justifyContent: 'center',
            display: { xs: 'inline-flex', md: 'none' },
          }}
        />

        <CarouselArrowBasicButtons
          {...carousel.arrows}
          options={carousel.options}
          sx={{
            mt: 10,
            justifyContent: 'center',
            display: { xs: 'none', md: 'inline-flex' },
          }}
        />
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

type TestimonialItemProps = BoxProps & {
  testimonial: ITestimonialProps;
};

function TestimonialItem({ testimonial, sx, ...other }: TestimonialItemProps) {
  return (
    <Box
      sx={[
        {
          display: 'flex',
          flexDirection: 'column',
          textAlign: { xs: 'center', md: 'left' },
          alignItems: { xs: 'center', md: 'flex-start' },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Iconify width={48} icon="carbon:quotes" sx={{ opacity: 0.48, color: 'primary.main' }} />
      <Typography
        sx={{
          mt: 2,
          mb: 5,
          lineHeight: 1.75,
          fontSize: { md: 20 },
        }}
      >
        {testimonial.content}
      </Typography>
      <Box
        sx={{
          gap: 1.5,
          display: 'flex',
          typography: 'h6',
          alignItems: 'center',
        }}
      >
        <Box
          component="span"
          sx={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            bgcolor: 'primary.main',
          }}
        />
        {testimonial.name}
      </Box>
    </Box>
  );
}
