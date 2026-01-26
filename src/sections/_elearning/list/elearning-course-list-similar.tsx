import type { BoxProps } from '@mui/material/Box';
import type { ICourseProps } from 'src/types/course';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';

import { ElearningCourseItem } from './elearning-course-item';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  courses: ICourseProps[];
};

export function ElearningCourseListSimilar({ courses, sx, ...other }: Props) {
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
      <Container>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 5, md: 10 } }}>
          <Typography component="h6" variant="h3" sx={{ flexGrow: 1 }}>
            Similar courses
          </Typography>

          <Button
            component={RouterLink}
            href={paths.eLearning.courses}
            color="inherit"
            endIcon={<Iconify icon="carbon:chevron-right" />}
          >
            View all
          </Button>
        </Box>

        <Box
          sx={{
            gap: 4,
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
          }}
        >
          {courses.map((course) => (
            <ElearningCourseItem key={course.id} course={course} isVertical />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
