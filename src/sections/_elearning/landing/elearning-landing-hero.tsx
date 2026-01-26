import type { BoxProps } from '@mui/material/Box';

import { varAlpha } from 'minimal-shared/utils';
import { useBoolean } from 'minimal-shared/hooks';

import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { fShortenNumber } from 'src/utils/format-number';

import { _mock } from 'src/_mock';
import { CONFIG } from 'src/global-config';
import ElearningHeroIllustration from 'src/assets/illustrations/elearning-hero-illustration';

import { Iconify } from 'src/components/iconify';
import { PlayerDialog } from 'src/components/player';

// ----------------------------------------------------------------------

const SUMMARY = [
  { value: 14000, label: 'Learners', color: 'warning' },
  { value: 1050, label: 'Courses', color: 'error' },
  { value: 59000, label: 'Graduates', color: 'success' },
];

export function ElearningLandingHero({ sx, ...other }: BoxProps) {
  const openVideo = useBoolean();

  const renderTexts = () => (
    <>
      <Typography variant="h1">
        Free
        <Box component="span" sx={{ color: 'text.disabled' }}>
          {` Online `}
        </Box>
        <Box component="span" sx={{ color: 'primary.main', textDecoration: 'underline' }}>
          {` Courses`}
        </Box>
        {` from the experts`}
      </Typography>

      <Typography
        sx={{
          mt: 3,
          maxWidth: 480,
          color: 'text.secondary',
          mx: { xs: 'auto', md: 'unset' },
        }}
      >
        Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis
        ante odio sit amet eros.
      </Typography>
    </>
  );

  const renderButtons = () => (
    <Box
      sx={{
        mt: 5,
        mb: 8,
        gap: 2.5,
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: { xs: 'center', md: 'unset' },
      }}
    >
      <Button color="inherit" size="large" variant="contained">
        Ready start
      </Button>

      <Box
        sx={{
          gap: 1.5,
          display: 'flex',
          typography: 'h6',
          alignItems: 'center',
        }}
      >
        <Fab size="medium" color="info" onClick={openVideo.onTrue}>
          <Iconify width={22} icon="solar:play-outline" />
        </Fab>
        Watch video
      </Box>
    </Box>
  );

  const renderItems = () => (
    <Box
      sx={{
        display: 'flex',
        gap: { xs: 5, sm: 10 },
        justifyContent: { xs: 'center', md: 'unset' },
      }}
    >
      {SUMMARY.map((item) => (
        <Box key={item.value} sx={{ position: 'relative' }}>
          <Box
            sx={{
              top: 8,
              left: -4,
              width: 24,
              height: 24,
              opacity: 0.24,
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: `${item.color}.main`,
            }}
          />
          <Typography variant="h3" sx={{ mb: 0.5 }}>
            {fShortenNumber(item.value)}+
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {item.label}
          </Typography>
        </Box>
      ))}
    </Box>
  );

  return (
    <>
      <Box
        component="section"
        sx={[
          (theme) => ({
            ...theme.mixins.bgGradient({
              images: [
                `linear-gradient(to bottom, ${varAlpha(theme.vars.palette.background.defaultChannel, 0.9)}, ${varAlpha(theme.vars.palette.background.defaultChannel, 0.9)})`,
                `url(${CONFIG.assetsDir}/assets/background/overlay-1.webp)`,
              ],
            }),
            py: 10,
            overflow: 'hidden',
            position: 'relative',
            [theme.breakpoints.up('md')]: {
              py: 15,
              minHeight: 760,
              height: '100vh',
              maxHeight: 1440,
              display: 'flex',
              alignItems: 'center',
            },
          }),
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
        {...other}
      >
        <Container>
          <Grid container sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
            <Grid size={{ xs: 12, md: 6, lg: 5 }} sx={{ textAlign: { xs: 'center', md: 'unset' } }}>
              {renderTexts()}
              {renderButtons()}
              {renderItems()}
            </Grid>

            <Grid sx={{ display: { xs: 'none', md: 'block' } }} size={{ xs: 12, md: 6, lg: 7 }}>
              <ElearningHeroIllustration />
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
