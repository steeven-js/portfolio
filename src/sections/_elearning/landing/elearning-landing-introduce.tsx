import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/global-config';

import { Image } from 'src/components/image';

// ----------------------------------------------------------------------

export function ElearningLandingIntroduce({ sx, ...other }: BoxProps) {
  const renderImage = () => (
    <Image
      alt="Summary"
      src={`${CONFIG.assetsDir}/assets/images/course/home-summary.webp`}
      ratio={{ xs: '4/3', md: '3/4' }}
      sx={{ borderRadius: 2 }}
    />
  );

  const renderLine = () => (
    <Box
      component="span"
      sx={{
        mb: 3,
        width: 24,
        height: 3,
        display: 'block',
        bgcolor: 'primary.main',
      }}
    />
  );

  const renderContent = () => (
    <>
      <Typography variant="h3" sx={{ mb: 3 }}>
        Phasellus gravida semper nisi. Vestibulum rutrum
      </Typography>

      <Typography sx={{ color: 'text.secondary' }}>
        Curabitur a felis in nunc fringilla tristique. Fusce egestas elit eget lorem. Etiam vitae
        tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        hymenaeos.
      </Typography>

      <Box
        sx={{
          display: 'flex',
          mt: { xs: 5, md: 10 },
          gap: { xs: 5, md: 10 },
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        <div>
          {renderLine()}
          <Typography sx={{ color: 'text.secondary' }}>
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
          </Typography>
        </div>

        <div>
          {renderLine()}
          <Typography sx={{ color: 'text.secondary' }}>
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
          </Typography>
        </div>
      </Box>
    </>
  );

  return (
    <Box
      component="section"
      sx={[
        {
          py: { xs: 5, md: 10 },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container>
        <Typography
          variant="overline"
          sx={{
            display: 'block',
            color: 'primary.main',
            mb: { xs: 5, md: 10 },
          }}
        >
          Nullam accumsan lorem in dui.
        </Typography>

        <Grid
          container
          spacing={{ xs: 5, md: 3 }}
          sx={{ alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Grid size={{ xs: 12, md: 6, lg: 5 }}>{renderImage()}</Grid>
          <Grid size={{ xs: 12, md: 6, lg: 6 }}>{renderContent()}</Grid>
        </Grid>
      </Container>
    </Box>
  );
}
