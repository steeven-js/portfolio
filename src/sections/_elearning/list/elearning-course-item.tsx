import type { ICourseProps } from 'src/types/course';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { fCurrency, fShortenNumber } from 'src/utils/format-number';

import { Label } from 'src/components/label';
import { Image } from 'src/components/image';
import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = {
  course: ICourseProps;
  isVertical?: boolean;
};

export function ElearningCourseItem({ course, isVertical }: Props) {
  const renderImage = () => (
    <Image
      alt={course.slug}
      src={course.coverUrl}
      ratio={isVertical ? '1/1' : { xs: '1/1', sm: '3/4' }}
      sx={{
        width: 1,
        flexShrink: 0,
        maxWidth: isVertical ? 1 : { xs: 1, sm: 260 },
      }}
    />
  );

  const renderTop = () => (
    <Box
      sx={{
        gap: 1,
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
      }}
    >
      <Typography variant="overline" sx={{ color: 'primary.main', flexGrow: 1 }}>
        {course.category}
      </Typography>

      <Box component="span" sx={{ gap: 0.5, display: 'flex', typography: 'h5' }}>
        {course.priceSale > 0 && (
          <Box component="span" sx={{ color: 'text.disabled', textDecoration: 'line-through' }}>
            {fCurrency(course.priceSale)}
          </Box>
        )}
        {fCurrency(course.price)}
      </Box>
    </Box>
  );

  const renderBottom = () => (
    <Box
      sx={{
        gap: 2.5,
        display: 'flex',
        typography: 'body2',
        color: 'text.disabled',
      }}
    >
      <Box sx={{ gap: 1, display: 'flex', alignItems: 'center' }}>
        <Iconify icon="solar:clock-circle-outline" /> {`${course.totalHours} hours`}
      </Box>

      <Box sx={{ gap: 1, display: 'flex', alignItems: 'center' }}>
        <Iconify
          icon={
            (course.level === 'Beginner' && 'carbon:skill-level-basic') ||
            (course.level === 'Intermediate' && 'carbon:skill-level-intermediate') ||
            'carbon:skill-level-advanced'
          }
        />
        {course.level}
      </Box>
    </Box>
  );

  const renderTexts = () => (
    <Box sx={{ minWidth: 0 }}>
      <Link
        component={RouterLink}
        href={paths.eLearning.course}
        color="inherit"
        variant="h6"
        noWrap
      >
        {course.slug}
      </Link>

      <Typography
        variant="body2"
        sx={(theme) => ({
          mt: 1,
          color: 'text.secondary',
          ...theme.mixins.maxLine({ line: 2 }),
          ...(isVertical && { display: { sm: 'none' } }),
        })}
      >
        {course.description}
      </Typography>
    </Box>
  );

  const renderTeacher = () => (
    <Box sx={{ gap: 1.5, display: 'flex', alignItems: 'center' }}>
      <Avatar src={course.teachers[0]?.avatarUrl} />

      <Box
        sx={{
          gap: 0.75,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        <Typography variant="body2">{course.teachers[0]?.name}</Typography>

        {Number(course.teachers?.length) - 1 > 0 && (
          <Box component="span" sx={{ typography: 'body2', color: 'text.secondary' }}>
            + {Number(course.teachers?.length) - 1}
            <Link underline="always" color="inherit" sx={{ ml: 0.25 }}>
              teachers
            </Link>
          </Box>
        )}
      </Box>
    </Box>
  );

  const renderInfo = () => (
    <Stack
      divider={<Divider orientation="vertical" sx={{ height: 20, my: 'auto' }} />}
      sx={{
        gap: 1.5,
        flexWrap: 'wrap',
        alignItems: 'center',
        flexDirection: 'row',
      }}
    >
      <Box sx={{ gap: 0.5, display: 'flex', alignItems: 'center' }}>
        <Iconify icon="eva:star-fill" sx={{ color: 'warning.main' }} />
        <Box sx={{ typography: 'h6' }}>
          {Number.isInteger(course.ratingNumber) ? `${course.ratingNumber}.0` : course.ratingNumber}
        </Box>

        {course.totalReviews && (
          <Link variant="body2" sx={{ color: 'text.secondary' }}>
            ({fShortenNumber(course.totalReviews)} reviews)
          </Link>
        )}
      </Box>

      <Box sx={{ display: 'flex', typography: 'subtitle2' }}>
        {fShortenNumber(course.totalStudents)}
        <Box component="span" sx={{ typography: 'body2', ml: 0.5 }}>
          students
        </Box>
      </Box>
    </Stack>
  );

  const renderContent = () => (
    <Box
      sx={{
        p: 3,
        gap: 3,
        minWidth: 0,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: 3, sm: isVertical ? 3 : 1 },
        }}
      >
        {renderTop()}
        {renderTexts()}
      </Box>

      {renderInfo()}
      {renderTeacher()}

      <Divider
        sx={{
          borderStyle: 'dashed',
          display: { sm: 'none' },
          ...(isVertical && { display: 'block' }),
        }}
      />
      {renderBottom()}
    </Box>
  );

  return (
    <Card
      sx={(theme) => ({
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        '&:hover': { boxShadow: theme.vars.customShadows.z24 },
        ...(isVertical && { flexDirection: 'column' }),
      })}
    >
      {course.isBestSeller && (
        <Label color="warning" variant="filled" sx={{ top: 12, left: 12, position: 'absolute' }}>
          Best seller
        </Label>
      )}

      {renderImage()}
      {renderContent()}
    </Card>
  );
}
