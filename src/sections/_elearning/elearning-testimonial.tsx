import type { BoxProps } from '@mui/material/Box';
import type { ITestimonialProps } from 'src/types/testimonial';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import {
  Carousel,
  useCarousel,
  CarouselThumbs,
  CarouselArrowFloatButtons,
} from 'src/components/carousel';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  testimonials: ITestimonialProps[];
};

export function ElearningTestimonial({ testimonials, sx, ...other }: Props) {
  const carousel = useCarousel({
    loop: true,
    startIndex: 1,
    thumbs: { loop: true, slidesToShow: 'auto' },
  });

  return (
    <Box
      component="section"
      sx={[
        {
          bgcolor: 'background.neutral',
          py: { xs: 10, md: 15 },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container sx={{ position: 'relative' }}>
        <CarouselArrowFloatButtons
          {...carousel.arrows}
          options={carousel.options}
          slotProps={{ prevBtn: { sx: { left: 16 } }, nextBtn: { sx: { right: 16 } } }}
          sx={{
            borderRadius: '50%',
            color: 'text.primary',
            bgcolor: 'transparent',
            display: { xs: 'none', md: 'flex' },
          }}
        />

        <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h2" sx={{ mb: 5, textAlign: 'center' }}>
              What our customer say
            </Typography>

            <Carousel carousel={carousel}>
              {testimonials.map((testimonial) => (
                <TestimonialItemContent key={testimonial.id} testimonial={testimonial} />
              ))}
            </Carousel>

            <CarouselThumbs
              ref={carousel.thumbs.thumbsRef}
              options={carousel.options?.thumbs}
              slotProps={{ disableMask: true }}
              sx={{ width: { xs: 1, sm: 480 } }}
            >
              {testimonials.map((testimonial, index) => (
                <TestimonialItemThumbnail
                  key={testimonial.id}
                  testimonial={testimonial}
                  selected={index === carousel.thumbs.selectedIndex}
                  onClick={() => carousel.thumbs.onClickThumb(index)}
                />
              ))}
            </CarouselThumbs>

            {testimonials.map(
              (testimonial, index) =>
                index === carousel.thumbs.selectedIndex && (
                  <Box key={testimonial.id} sx={{ mt: 3, textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ mb: 0.5 }}>
                      {testimonial.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {testimonial.role}
                    </Typography>
                  </Box>
                )
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

type TestimonialItemContentProps = BoxProps & {
  testimonial: ITestimonialProps;
};

export function TestimonialItemContent({ testimonial, sx, ...other }: TestimonialItemContentProps) {
  return (
    <Box sx={[{ textAlign: 'center' }, ...(Array.isArray(sx) ? sx : [sx])]} {...other}>
      <Iconify
        width={48}
        icon="carbon:quotes"
        sx={{ mx: 'auto', opacity: 0.48, color: 'primary.main' }}
      />

      <Typography
        sx={(theme) => ({
          mt: 2,
          mb: 5,
          mx: 'auto',
          maxWidth: 560,
          lineHeight: 1.75,
          fontSize: { xs: 20, md: 24 },
          fontFamily: theme.typography.h1.fontFamily,
        })}
      >
        {testimonial.content}
      </Typography>
    </Box>
  );
}

// ----------------------------------------------------------------------

type TestimonialItemThumbnailProps = BoxProps & {
  selected: boolean;
  testimonial: ITestimonialProps;
};

export function TestimonialItemThumbnail({
  sx,
  selected,
  testimonial,
  ...other
}: TestimonialItemThumbnailProps) {
  return (
    <Box
      sx={[
        {
          width: 96,
          height: 96,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Avatar
        src={testimonial.avatarUrl}
        sx={(theme) => ({
          width: 48,
          height: 48,
          opacity: 0.48,
          cursor: 'pointer',
          transition: theme.transitions.create(['width', 'height']),
          ...(selected && { width: 1, height: 1, opacity: 1 }),
        })}
      />
    </Box>
  );
}
