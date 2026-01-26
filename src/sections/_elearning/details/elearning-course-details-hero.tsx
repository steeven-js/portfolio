import type { BoxProps } from '@mui/material/Box';
import type { ICourseProps } from 'src/types/course';

import { useBoolean } from 'minimal-shared/hooks';

import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';

import { fShortenNumber } from 'src/utils/format-number';

import { _mock } from 'src/_mock';

import { Label } from 'src/components/label';
import { Image } from 'src/components/image';
import { Iconify } from 'src/components/iconify';
import { PlayerDialog } from 'src/components/player';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

// ----------------------------------------------------------------------

type Props = BoxProps & Partial<ICourseProps> & { totalLessons: number };

export function ElearningCourseDetailsHero({
  sx,
  slug,
  level,
  teachers,
  category,
  coverUrl,
  languages,
  totalHours,
  description,
  isBestSeller,
  ratingNumber,
  totalReviews,
  totalQuizzes,
  totalLessons,
  totalStudents,
  ...other
}: Props) {
  const openVideo = useBoolean();

  const renderInfo = () => (
    <Box
      sx={{
        gap: 1.5,
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
      }}
    >
      <Box sx={{ gap: 0.5, display: 'flex', alignItems: 'center' }}>
        <Iconify icon="eva:star-fill" sx={{ color: 'warning.main' }} />
        <Box sx={{ typography: 'h6' }}>
          {Number.isInteger(ratingNumber) ? `${ratingNumber}.0` : ratingNumber}
        </Box>

        {totalReviews && (
          <Link variant="body2" sx={{ color: 'text.secondary' }}>
            ({fShortenNumber(totalReviews)} reviews)
          </Link>
        )}
      </Box>

      <Divider orientation="vertical" sx={{ height: 20, my: 'auto' }} />

      <Box sx={{ display: 'flex', typography: 'subtitle2' }}>
        {fShortenNumber(totalStudents)}
        <Box component="span" sx={{ typography: 'body2', ml: 0.5 }}>
          students
        </Box>
      </Box>
    </Box>
  );

  const renderTeacher = () => (
    <Box sx={{ gap: 1.5, display: 'flex', alignItems: 'center' }}>
      <Avatar src={teachers?.[0]?.avatarUrl} />

      <Box
        sx={{
          gap: 0.75,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        <Typography variant="body2">{teachers?.[0]?.name}</Typography>

        {Number(teachers?.length) - 1 > 0 && (
          <Box component="span" sx={{ typography: 'body2', color: 'text.secondary' }}>
            + {Number(teachers?.length) - 1}
            <Link underline="always" color="inherit" sx={{ ml: 0.25 }}>
              teachers
            </Link>
          </Box>
        )}
      </Box>
    </Box>
  );

  const renderTexts = () => (
    <Box
      sx={{
        gap: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
    >
      {isBestSeller && (
        <Label color="warning" variant="filled" sx={{ textTransform: 'uppercase' }}>
          Best Seller
        </Label>
      )}

      <Typography variant="overline" sx={{ color: 'secondary.main' }}>
        {category}
      </Typography>

      <Typography variant="h3" component="h1">
        {slug}
      </Typography>

      <Typography sx={{ color: 'text.secondary' }}>{description}</Typography>
    </Box>
  );

  const renderVideo = () => (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        justifyContent: 'center',
      }}
    >
      <Fab color="primary" onClick={openVideo.onTrue} sx={{ zIndex: 9, position: 'absolute' }}>
        <Iconify width={24} icon="solar:play-outline" />
      </Fab>

      <Image
        alt="Cover"
        src={coverUrl}
        ratio={{ xs: '4/3', md: '3/4' }}
        sx={{ borderRadius: 2 }}
        slotProps={{
          overlay: {
            sx: (theme) => ({
              backgroundImage: `linear-gradient(to bottom, transparent 0%, ${theme.vars.palette.common.black} 75%)`,
            }),
          },
        }}
      />
    </Box>
  );

  const renderSummary = () => (
    <Box
      sx={{
        rowGap: 3,
        columnGap: 5,
        maxWidth: 480,
        display: 'flex',
        flexWrap: 'wrap',
        typography: 'body2',
        '& > div': {
          gap: 1,
          display: 'flex',
          alignItems: 'center',
        },
      }}
    >
      <div>
        <Iconify icon="solar:clock-circle-outline" /> {`${totalHours} hours`}
      </div>

      <div>
        <Iconify icon="solar:documents-minimalistic-outline" />
        {totalLessons} lessons
      </div>

      <div>
        <Iconify
          icon={
            (level === 'Beginner' && 'carbon:skill-level-basic') ||
            (level === 'Intermediate' && 'carbon:skill-level-intermediate') ||
            'carbon:skill-level-advanced'
          }
        />
        {level}
      </div>

      <div>
        <Iconify icon="carbon:translate" />
        {typeof languages === 'string' ? languages : languages?.join(', ')}
      </div>

      <div>
        <Iconify icon="solar:question-circle-outline" />
        {`${totalQuizzes} Quizzes`}
      </div>
    </Box>
  );
  return (
    <>
      <Box
        component="section"
        sx={[{ pt: 5, pb: 10, bgcolor: 'background.neutral' }, ...(Array.isArray(sx) ? sx : [sx])]}
        {...other}
      >
        <Container sx={{ overflow: 'hidden' }}>
          <CustomBreadcrumbs
            links={[
              { name: 'Home', href: '/' },
              { name: 'Courses', href: paths.eLearning.courses },
              { name: slug },
            ]}
            sx={{ mb: { xs: 5, md: 10 } }}
          />

          <Grid container spacing={{ xs: 5, md: 10 }} direction="row-reverse">
            <Grid size={{ xs: 12, md: 5 }}>{renderVideo()}</Grid>

            <Grid
              size={{ xs: 12, md: 7 }}
              sx={{ gap: 3, display: 'flex', flexDirection: 'column' }}
            >
              {renderTexts()}
              {renderInfo()}
              {renderTeacher()}
              <Divider sx={{ borderStyle: 'dashed' }} />
              {renderSummary()}
            </Grid>
          </Grid>
        </Container>
      </Box>

      <PlayerDialog
        src={_mock.video(0)}
        playing={openVideo.value}
        open={openVideo.value}
        onClose={openVideo.onFalse}
      />
    </>
  );
}
