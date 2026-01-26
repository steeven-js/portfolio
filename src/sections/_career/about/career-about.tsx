import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/global-config';

import { AnimateCountUp } from 'src/components/animate';

// ----------------------------------------------------------------------

const SUMMARY = [
  { name: 'Jobs', number: 2230000 },
  { name: 'Successful hiring', number: 500000 },
  { name: 'Partners', number: 250 },
  { name: 'Employee', number: 1560 },
];

// ----------------------------------------------------------------------

export function CareerAbout({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      sx={[
        {
          pt: { xs: 3, md: 5 },
          pb: { xs: 5, md: 10 },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container>
        <Typography
          variant="overline"
          sx={{
            mb: 1,
            display: 'block',
            color: 'primary.main',
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          About us
        </Typography>

        <Grid
          container
          spacing={3}
          sx={{
            justifyContent: 'space-between',
            mb: { xs: 5, md: 10 },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Grid size={{ xs: 12, md: 6, lg: 5 }}>
            <Typography variant="h2">We make the best for all our customers.</Typography>
          </Grid>

          <Grid
            size={{ xs: 12, md: 6, lg: 6 }}
            sx={{
              rowGap: 3,
              columnGap: 10,
              display: 'grid',
              color: 'text.secondary',
              gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' },
            }}
          >
            <Typography>
              Curabitur ullamcorper ultricies nisi. Sed mollis, eros et ultrices tempus, mauris
              ipsum aliquam libero, non adipiscing dolor urna a orci.
            </Typography>

            <Typography>
              Donec vitae sapien ut libero venenatis faucibus. Vestibulum fringilla pede sit amet
              augue. Vivamus euismod mauris.
            </Typography>
          </Grid>
        </Grid>

        <Section />
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

function Section({ sx, ...other }: BoxProps) {
  return (
    <Box
      sx={[
        (theme) => ({
          ...theme.mixins.bgGradient({
            images: [`url(${CONFIG.assetsDir}/assets/images/career/about-team.webp)`],
          }),
          borderRadius: 2,
          overflow: 'hidden',
          position: 'relative',
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Box
        sx={(theme) => ({
          py: 10,
          ml: 'auto',
          width: { lg: 0.5 },
          textAlign: 'center',
          color: 'common.white',
          px: { xs: 2.5, md: 5 },
          backgroundImage: `linear-gradient(to bottom, transparent 0%, ${theme.vars.palette.common.black} 75%)`,
        })}
      >
        <Typography variant="h2" sx={{ mb: 3 }}>
          Our agency has been
        </Typography>

        <Typography sx={{ mb: 5, opacity: 0.72 }}>
          Hello. Our agency has been present for over 20 years. We make the best for all our
          customers.
        </Typography>

        <Box sx={{ gap: 5, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
          {SUMMARY.map((value) => (
            <Box
              key={value.name}
              sx={{
                color: 'grey.500',
                overflow: 'hidden',
                typography: 'body2',
              }}
            >
              <Box
                sx={{
                  mb: 1,
                  gap: 0.5,
                  mx: 'auto',
                  display: 'flex',
                  color: 'primary.main',
                  justifyContent: 'center',
                }}
              >
                <AnimateCountUp variant="h2" to={value.number} toFixed={2} />
                <Box component="span" sx={{ typography: 'h3' }}>
                  +
                </Box>
              </Box>
              {value.name}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
