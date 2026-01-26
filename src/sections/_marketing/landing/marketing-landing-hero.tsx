import type { BoxProps } from '@mui/material/Box';

import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/global-config';

import { Iconify } from 'src/components/iconify';
import { MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

export function MarketingLandingHero({ sx, ...other }: BoxProps) {
  const renderContent = () => (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: { xs: 'center', md: 'left' },
        alignItems: { xs: 'center', md: 'flex-start' },
      }}
    >
      <Typography
        variant="overline"
        sx={(theme) => ({
          ...theme.mixins.textGradient(
            `90deg, ${theme.vars.palette.primary.main} 20%, ${theme.vars.palette.secondary.main} 100%`
          ),
        })}
      >
        Digital marketing
      </Typography>

      <Typography variant="h1" sx={{ my: 3 }}>
        Boosts your website traffic
      </Typography>

      <Typography sx={{ mb: 5, color: 'text.secondary', maxWidth: 420 }}>
        Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis
        ante odio sit amet eros.
      </Typography>

      <Box
        sx={{
          gap: 2.5,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: { xs: 'center', md: 'unset' },
        }}
      >
        <Button variant="contained" color="inherit" size="large">
          Try for free
        </Button>

        <Box
          sx={{
            gap: 1.5,
            display: 'flex',
            typography: 'h6',
            alignItems: 'center',
          }}
        >
          <Fab size="medium">
            <Iconify width={22} icon="solar:play-outline" />
          </Fab>
          See our work
        </Box>
      </Box>
    </Box>
  );

  const renderImage = () => (
    <Box
      component="img"
      alt="Marketing market"
      src={`${CONFIG.assetsDir}/assets/illustrations/illustration-marketing-market.svg`}
      sx={{ width: 720 }}
    />
  );

  return (
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
      <Container component={MotionViewport}>
        <Grid container sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
          <Grid size={{ xs: 12, md: 6, lg: 5 }}>{renderContent()}</Grid>

          <Grid sx={{ display: { xs: 'none', md: 'block' } }} size={{ xs: 12, md: 6, lg: 6 }}>
            {renderImage()}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
