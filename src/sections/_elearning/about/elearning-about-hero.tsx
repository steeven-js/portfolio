import type { BoxProps } from '@mui/material/Box';

import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/global-config';

// ----------------------------------------------------------------------

export function ElearningAboutHero({ sx, ...other }: BoxProps) {
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

          overflow: 'hidden',
          position: 'relative',
          py: { xs: 10, md: 20 },
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Box
        component="img"
        alt="Texture"
        src={`${CONFIG.assetsDir}/assets/background/texture-1.webp`}
        sx={{
          top: 0,
          right: 0,
          zIndex: 8,
          opacity: 0.24,
          position: 'absolute',
          height: `calc(100% + 80px)`,
        }}
      />
      <Container sx={{ position: 'relative', zIndex: 9 }}>
        <Grid
          container
          spacing={{ xs: 5, md: 3 }}
          sx={{ justifyContent: 'space-between', textAlign: { xs: 'center', md: 'left' } }}
        >
          <Grid
            sx={{
              display: 'flex',
              color: 'grey.800',
              flexDirection: 'column',
              alignItems: { xs: 'center', md: 'flex-start' },
            }}
            size={{ xs: 12, md: 6, lg: 5 }}
          >
            <Typography variant="h1">Online courses</Typography>

            <Typography sx={{ mt: 3, mb: 6, maxWidth: 480 }}>
              Nunc nulla. Ut leo. Pellentesque commodo eros a enim. Nunc egestas, augue at
              pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede.
            </Typography>

            <Button variant="contained" size="large" color="primary">
              Browse courses
            </Button>
          </Grid>

          <Grid size={{ xs: 12, md: 6, lg: 6 }}>
            <Box
              component="img"
              alt="Courses online"
              src={`${CONFIG.assetsDir}/assets/illustrations/illustration-courses-hero.svg`}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
