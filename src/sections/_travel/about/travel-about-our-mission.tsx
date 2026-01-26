import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/global-config';

import { Image } from 'src/components/image';

// ----------------------------------------------------------------------

const VISIONS = [
  {
    name: 'Vestibulum',
    description: 'In dui magna, posuere eget, vestibulum et, tempor auctor, justo.',
  },
  {
    name: 'Fusce',
    description: 'Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.',
  },
  { name: 'Praesent', description: 'Suspendisse feugiat. Quisque id odio.' },
];

// ----------------------------------------------------------------------

export function TravelAboutOurVision({ sx, ...other }: BoxProps) {
  const renderTexts = () => (
    <Box sx={{ mb: 5, textAlign: { xs: 'center', md: 'left' } }}>
      <Typography variant="h2">Our mission</Typography>
      <Typography
        sx={{
          mt: 3,
          maxWidth: 480,
          color: 'text.secondary',
          mx: { xs: 'auto', md: 'unset' },
        }}
      >
        Curabitur ullamcorper ultricies nisi. Aenean viverra rhoncus pede.
      </Typography>
    </Box>
  );

  const renderImage = () => (
    <Image
      alt="About vision"
      src={`${CONFIG.assetsDir}/assets/illustrations/illustration-vision.svg`}
      ratio="1/1"
      disablePlaceholder
      sx={{ width: 480 }}
    />
  );

  const renderCards = () => (
    <>
      {VISIONS.map((item, index) => (
        <Card
          key={item.name}
          sx={(theme) => ({
            p: 4,
            mt: 4,
            [theme.breakpoints.up('md')]: {
              width: 'calc(50% - 16px)',
              ...(index === 0 && {
                top: 0,
                left: 0,
                bottom: 0,
                my: 'auto',
                boxShadow: 0,
                maxHeight: 304,
                display: 'flex',
                position: 'absolute',
                flexDirection: 'column',
                justifyContent: 'center',
              }),
              ...(index === 1 && { boxShadow: theme.vars.customShadows.z24 }),
              ...(index === 2 && { boxShadow: 0 }),
            },
          })}
        >
          <Typography
            variant="h1"
            component="span"
            sx={{ opacity: 0.24, display: 'block', color: 'text.disabled' }}
          >
            {`0${index + 1}`}
          </Typography>
          <Typography component="h6" variant="h5" sx={{ mb: 2, mt: 3 }}>
            {item.name}
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>{item.description}</Typography>
        </Card>
      ))}
    </>
  );

  return (
    <Box
      component="section"
      sx={[
        {
          overflow: 'hidden',
          py: { xs: 5, md: 10 },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container>
        {renderTexts()}

        <Grid
          container
          spacing={{ xs: 5, md: 3 }}
          sx={{ alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Grid size={{ xs: 12, md: 6, lg: 5 }} sx={{ textAlign: { xs: 'center', md: 'unset' } }}>
            {renderImage()}
          </Grid>

          <Grid
            size={{ xs: 12, md: 6, lg: 6 }}
            sx={{
              display: 'flex',
              position: 'relative',
              flexDirection: 'column',
              alignItems: { md: 'flex-end' },
            }}
          >
            {renderCards()}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
