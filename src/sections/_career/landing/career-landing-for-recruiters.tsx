import type { BoxProps } from '@mui/material/Box';

import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/global-config';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function CareerLandingForRecruiters({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      sx={[
        (theme) => ({
          ...theme.mixins.bgGradient({
            images: [
              `linear-gradient(to bottom, ${varAlpha(theme.vars.palette.common.blackChannel, 0.8)}, ${varAlpha(theme.vars.palette.common.blackChannel, 0.8)})`,
              `url(${CONFIG.assetsDir}/assets/background/overlay-2.webp)`,
            ],
          }),
          py: 10,
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container sx={{ color: 'common.white', textAlign: { xs: 'center', md: 'left' } }}>
        <Grid container spacing={3} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
          <Grid size={{ xs: 12, md: 6, lg: 5 }}>
            <Typography variant="overline" sx={{ color: 'primary.main', mb: 2, display: 'block' }}>
              FOR RECRUITERS
            </Typography>

            <Typography variant="h2">Do you have a position to post job? </Typography>

            <Typography sx={{ mt: 3, mb: 5, opacity: 0.72 }}>
              Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Morbi mattis
              ullamcorper velit.
            </Typography>

            <Button
              variant="contained"
              size="large"
              color="primary"
              startIcon={<Iconify icon="solar:file-send-outline" />}
            >
              Post a job
            </Button>
          </Grid>

          <Grid size={{ xs: 12, md: 6, lg: 5 }}>
            <Box
              component="img"
              alt="Recruitment illustration"
              src={`${CONFIG.assetsDir}/assets/illustrations/illustration-recruitment.svg`}
              sx={{ width: 480, height: 480 }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
