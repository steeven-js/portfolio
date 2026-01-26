import type { Variants } from 'framer-motion';
import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/global-config';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const variants: Variants = varFade('inDown', { distance: 24 });

export function HomeMinimalUI({ sx, ...other }: BoxProps) {
  const renderContent = () => (
    <Box sx={{ p: { md: 10 }, textAlign: { xs: 'center', md: 'left' } }}>
      <m.div variants={variants}>
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          Looking For a
        </Typography>
      </m.div>

      <m.div variants={variants}>
        <Typography variant="h3" sx={{ my: 3 }}>
          Dashboard template?
        </Typography>
      </m.div>

      <m.div variants={variants}>
        <Typography
          sx={{ maxWidth: 360, color: 'text.secondary', mx: { xs: 'auto', md: 'unset' } }}
        >
          Minimal UI Kit is a professional dashboard used by many of our clients.
        </Typography>
      </m.div>

      <m.div variants={variants}>
        <Button
          size="large"
          color="inherit"
          variant="outlined"
          target="_blank"
          rel="noopener noreferrer"
          href={paths.minimalStore}
          endIcon={<Iconify width={16} icon="carbon:chevron-right" />}
          sx={{ mt: 5, mb: { xs: 5, md: 0 } }}
        >
          Visit Minimal UI
        </Button>
      </m.div>
    </Box>
  );

  const renderImage = () => (
    <m.div variants={varFade('in')}>
      <Box
        component="img"
        loading="lazy"
        alt="Minimal dashboard"
        src={`${CONFIG.assetsDir}/assets/images/home/minimal-dashboard.webp`}
        sx={(theme) => ({
          width: 480,
          borderRadius: 2,
          filter: `drop-shadow(0px 48px 80px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.24)})`,
          ...theme.applyStyles('dark', {
            filter: `drop-shadow(0px 48px 80px ${varAlpha(theme.vars.palette.common.blackChannel, 0.48)})`,
          }),
          [theme.breakpoints.up('md')]: {
            top: 0,
            left: 0,
            bottom: 0,
            my: 'auto',
            width: '108%',
            maxWidth: 'unset',
            position: 'absolute',
          },
        })}
      />
    </m.div>
  );

  return (
    <Box
      component="section"
      sx={[
        {
          overflow: 'hidden',
          pt: { xs: 5, md: 10 },
          pb: { xs: 10, md: 15 },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container component={MotionViewport}>
        <Grid
          container
          sx={[
            (theme) => ({
              borderRadius: 3,
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundImage: {
                md: `linear-gradient(to right, transparent 25%, ${varAlpha(theme.vars.palette.grey['500Channel'], 0.16)} 100%)`,
              },
            }),
          ]}
        >
          <Grid size={{ xs: 12, md: 6, lg: 5 }}>{renderContent()}</Grid>

          <Grid
            size={{ xs: 12, md: 6, lg: 6 }}
            sx={{ position: 'relative', textAlign: { xs: 'center', md: 'unset' } }}
          >
            {renderImage()}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
