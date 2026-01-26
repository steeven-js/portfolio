import type { BoxProps } from '@mui/material/Box';
import type { ITestimonialProps } from 'src/types/testimonial';

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import {
  Carousel,
  useCarousel,
  CarouselDotButtons,
  CarouselArrowFloatButtons,
} from 'src/components/carousel';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  testimonials: ITestimonialProps[];
};

export function MarketingTestimonial({ testimonials, sx, ...other }: Props) {
  const carousel = useCarousel();

  const renderTexts = () => (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="overline" sx={{ mb: 2, display: 'block', color: 'text.disabled' }}>
        Testimonials
      </Typography>

      <Typography variant="h2">Who love our work</Typography>
    </Box>
  );

  const renderCarousel = () => (
    <>
      <CarouselArrowFloatButtons
        {...carousel.arrows}
        options={carousel.options}
        sx={{
          borderRadius: '50%',
          color: 'text.primary',
          bgcolor: 'transparent',
          display: { xs: 'none', md: 'flex' },
        }}
      />

      <Carousel carousel={carousel} sx={{ my: { xs: 5, md: 10 } }}>
        {testimonials.map((testimonial) => (
          <TestimonialItem key={testimonial.id} testimonial={testimonial} />
        ))}
      </Carousel>

      <CarouselDotButtons
        scrollSnaps={carousel.dots.scrollSnaps}
        selectedIndex={carousel.dots.selectedIndex}
        onClickDot={carousel.dots.onClickDot}
        sx={{ width: 1, color: 'primary.main', justifyContent: 'center' }}
      />
    </>
  );

  return (
    <Box
      component="section"
      sx={[
        {
          py: { xs: 10, md: 15 },
          bgcolor: 'background.neutral',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container maxWidth={false} sx={{ maxWidth: 720, position: 'relative' }}>
        {renderTexts()}
        {renderCarousel()}
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
          gap: { xs: 5, md: 10 },
          flexDirection: { xs: 'column', md: 'row' },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Typography
        sx={{ lineHeight: 1.75, fontSize: { md: 20 }, textAlign: { xs: 'center', md: 'left' } }}
      >
        {testimonial.content}
      </Typography>

      <Box
        sx={{
          flexShrink: 0,
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Avatar alt={testimonial.name} src={testimonial.avatarUrl} sx={{ width: 96, height: 96 }} />

        <Typography variant="h6" sx={{ mt: 2.5, mb: 0.5 }}>
          {testimonial.name}
        </Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {testimonial.role}
        </Typography>
      </Box>
    </Box>
  );
}
