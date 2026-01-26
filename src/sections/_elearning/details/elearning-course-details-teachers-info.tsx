import type { BoxProps } from '@mui/material/Box';
import type { ICourseTeacherProp } from 'src/types/course';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import { fShortenNumber } from 'src/utils/format-number';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  teachers: ICourseTeacherProp[];
};

export function ElearningCourseDetailsTeachers({ teachers, sx, ...other }: Props) {
  return (
    <>
      <Typography component="h6" variant="h4" sx={{ mb: 5 }}>
        Instructors ({teachers.length})
      </Typography>
      <Box
        sx={[
          {
            display: 'grid',
            gap: { xs: 3, md: 4 },
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
            },
          },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
        {...other}
      >
        {teachers.map((teacher) => (
          <TeacherItem key={teacher.id} teacher={teacher} />
        ))}
      </Box>
    </>
  );
}

// ----------------------------------------------------------------------

type TeacherItemProps = {
  teacher: ICourseTeacherProp;
};

function TeacherItem({ teacher }: TeacherItemProps) {
  const renderRating = () => (
    <Box
      sx={{
        gap: 0.5,
        display: 'flex',
        typography: 'h6',
        alignItems: 'center',
      }}
    >
      <Iconify icon="eva:star-fill" sx={{ color: 'warning.main' }} />

      {Number.isInteger(teacher.ratingNumber) ? `${teacher.ratingNumber}.0` : teacher.ratingNumber}

      {teacher.totalReviews && (
        <Link variant="body2" sx={{ color: 'text.secondary' }}>
          ({fShortenNumber(teacher.totalReviews)} reviews)
        </Link>
      )}
    </Box>
  );

  const renderItem = (icon: React.ReactNode, value: string | number, label: string) => (
    <Box
      sx={{
        gap: 1,
        display: 'flex',
        alignItems: 'center',
        typography: 'body2',
        color: 'text.disabled',
        '& strong': {
          fontWeight: 'fontWeightSemiBold',
        },
      }}
    >
      {icon}
      <span>
        <strong>{value}</strong>
        {` ${label}`}
      </span>
    </Box>
  );

  return (
    <Paper
      variant="outlined"
      sx={{
        p: 3,
        gap: 3,
        borderRadius: 2,
        display: 'flex',
        bgcolor: 'transparent',
      }}
    >
      <Avatar src={teacher.avatarUrl} sx={{ width: 72, height: 72 }} />

      <Box
        sx={{
          gap: 1,
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h6">{teacher.name}</Typography>

        {renderRating()}

        {renderItem(
          <Iconify icon="solar:users-group-rounded-outline" />,
          fShortenNumber(teacher.totalStudents),
          'students'
        )}

        {renderItem(
          <Iconify icon="solar:documents-minimalistic-outline" />,
          teacher.totalCourses,
          'lessons'
        )}
      </Box>
    </Paper>
  );
}
