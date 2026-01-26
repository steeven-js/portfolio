import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { CONFIG } from 'src/global-config';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function MarketingServices({ sx, ...other }: BoxProps) {
  const renderImage = () => (
    <Box
      component="img"
      alt="Services"
      src={`${CONFIG.assetsDir}/assets/illustrations/illustration-services.svg`}
      sx={{ width: 480 }}
    />
  );

  const renderTexts = () => (
    <>
      <Typography variant="h2">Offline SEO</Typography>
      <Typography sx={{ my: 3, color: 'text.secondary' }}>
        Aenean commodo ligula eget dolor. Sed hendrerit. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia.
      </Typography>
    </>
  );

  const renderList = () => (
    <Box
      component="ul"
      sx={{
        mb: 5,
        gap: 1,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {[
        'First class flights',
        '5 Star accommodations',
        'Inclusive packages',
        'Latest model vehicles',
      ].map((text) => (
        <Box component="li" key={text} sx={{ gap: 2, display: 'flex', alignItems: 'center' }}>
          <Box
            component="span"
            sx={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              bgcolor: 'primary.main',
            }}
          />
          {text}
        </Box>
      ))}
    </Box>
  );

  return (
    <Box
      component="section"
      sx={[
        {
          pt: { xs: 10, md: 15 },
          pb: { xs: 5, md: 10 },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container>
        <Grid
          container
          spacing={{ xs: 5, md: 3 }}
          sx={{ alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Grid size={{ xs: 12, md: 6, lg: 5 }}>{renderImage()}</Grid>

          <Grid size={{ xs: 12, md: 6, lg: 6 }}>
            {renderTexts()}
            {renderList()}

            <Button
              component={RouterLink}
              href={paths.marketing.caseStudies}
              size="large"
              color="inherit"
              variant="outlined"
              endIcon={<Iconify icon="carbon:chevron-right" />}
            >
              Check our work
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
