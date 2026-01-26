import type { BoxProps } from '@mui/material/Box';
import type { ITestimonialProps } from 'src/types/testimonial';

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { fDate } from 'src/utils/format-time';

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

export function EcommerceTestimonial({ testimonials, sx, ...other }: Props) {
  const carousel = useCarousel({
    slidesToShow: { xs: 1, sm: 2, md: 3, lg: 4 },
    slideSpacing: '24px',
  });

  return (
    <Box
      component="section"
      sx={[
        {
          pb: 10,
          pt: { xs: 5, md: 8 },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container>
        <Box
          sx={{
            mb: 5,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Typography variant="h3" sx={{ flexGrow: 1 }}>
            Popular reviews
          </Typography>

          <CarouselArrowBasicButtons {...carousel.arrows} options={carousel.options} />
        </Box>

        <Carousel carousel={carousel}>
          {testimonials.map((testimonial) => (
            <TestimonialItem key={testimonial.id} testimonial={testimonial} />
          ))}
        </Carousel>

        <CarouselDotButtons
          scrollSnaps={carousel.dots.scrollSnaps}
          selectedIndex={carousel.dots.selectedIndex}
          onClickDot={carousel.dots.onClickDot}
          sx={{
            mt: 5,
            width: 1,
            color: 'primary.main',
            justifyContent: 'center',
            display: { xs: 'inline-flex', md: 'none' },
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
          p: 3,
          gap: 1,
          display: 'flex',
          borderRadius: 2,
          flexDirection: 'column',
          bgcolor: 'background.neutral',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Typography variant="caption" sx={{ color: 'text.disabled' }}>
        {fDate(testimonial.createdAt)}
      </Typography>
      <Typography variant="subtitle2">{testimonial.name}</Typography>
      <Rating size="small" value={testimonial.ratingNumber} readOnly />
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {testimonial.content}
      </Typography>
    </Box>
  );
}
