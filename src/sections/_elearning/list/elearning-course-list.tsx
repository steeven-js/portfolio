import type { BoxProps } from '@mui/material/Box';
import type { ICourseProps } from 'src/types/course';

import Box from '@mui/material/Box';
import Pagination, { paginationClasses } from '@mui/material/Pagination';

import { ElearningCourseItem } from './elearning-course-item';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  courses: ICourseProps[];
};

export function ElearningCourseList({ courses, sx, ...other }: Props) {
  return (
    <>
      <Box
        sx={[
          { gap: 4, display: 'flex', flexDirection: 'column' },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
        {...other}
      >
        {courses.map((course) => (
          <ElearningCourseItem key={course.id} course={course} />
        ))}
      </Box>

      <Pagination
        count={10}
        sx={{
          mb: 10,
          mt: { xs: 5, md: 10 },
          [`& .${paginationClasses.ul}`]: { justifyContent: 'center' },
        }}
      />
    </>
  );
}
