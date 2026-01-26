import type { BoxProps } from '@mui/material/Box';
import type { ICourseProps } from 'src/types/course';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import {
  Carousel,
  useCarousel,
  CarouselDotButtons,
  CarouselArrowBasicButtons,
} from 'src/components/carousel';

import { ElearningCourseItem } from '../list/elearning-course-item';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  courses: ICourseProps[];
};

export function ElearningLandingFeaturedCourses({ courses, sx, ...other }: Props) {
  const carousel = useCarousel({
    slideSpacing: '32px',
    slidesToShow: { xs: 1, md: 2, lg: 3 },
  });

  return (
    <Box
      component="section"
      sx={[
        {
          pt: { xs: 5, md: 10 },
          pb: { xs: 10, md: 5 },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container>
        <Box
          sx={{
            display: 'flex',
            alignItems: { md: 'flex-end' },
            flexDirection: { xs: 'column', md: 'row' },
            textAlign: { xs: 'center', md: 'unset' },
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h2">Featured courses</Typography>
            <Typography sx={{ mt: 3, color: 'text.secondary' }}>
              Nullam accumsan lorem in dui. Praesent ac massa at ligula laoreet iaculis.
            </Typography>
          </Box>

          <CarouselArrowBasicButtons
            {...carousel.arrows}
            options={carousel.options}
            sx={{ display: { xs: 'none', md: 'inline-flex' } }}
          />
        </Box>

        <Carousel carousel={carousel} sx={{ px: 0.5, py: { xs: 5, md: 10 } }}>
          {courses.map((course) => (
            <ElearningCourseItem key={course.id} course={course} isVertical />
          ))}
        </Carousel>

        <CarouselDotButtons
          scrollSnaps={carousel.dots.scrollSnaps}
          selectedIndex={carousel.dots.selectedIndex}
          onClickDot={carousel.dots.onClickDot}
          sx={{
            color: 'primary.main',
            justifyContent: 'center',
            display: { xs: 'flex', md: 'none' },
          }}
        />
      </Container>
    </Box>
  );
}
