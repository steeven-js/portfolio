import type { ITourProps } from 'src/types/tour';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';

import { TravelOrderCompletedInfo } from '../order-completed/travel-order-completed-info';
import { TravelOrderCompletedSummary } from '../order-completed/travel-order-completed-summary';

// ----------------------------------------------------------------------

type ViewProps = {
  tour?: ITourProps;
};

export function TravelOrderCompletedView({ tour }: ViewProps) {
  return (
    <Container
      sx={{
        display: 'grid',
        pt: { xs: 3, md: 5 },
        pb: { xs: 10, md: 15 },
        gap: { xs: 5, md: 10 },
        alignItems: 'flex-start',
        gridTemplateColumns: { md: 'repeat(2, 1fr)' },
      }}
    >
      <Box
        component="img"
        alt={tour?.slug}
        src={tour?.coverUrl}
        sx={{
          borderRadius: 2,
          objectFit: 'cover',
          aspectRatio: { xs: '1/1', md: '3/4' },
        }}
      />

      <Box component="section" sx={{ gap: 5, display: 'flex', flexDirection: 'column' }}>
        <Typography component="h1" variant="h2">
          Completed 🎉
        </Typography>

        <TravelOrderCompletedInfo
          slug={tour?.slug || ''}
          tourGuide={tour?.tourGuide}
          ratingNumber={tour?.ratingNumber || 0}
          totalReviews={tour?.totalReviews || 0}
        />

        <TravelOrderCompletedSummary />

        <Box
          sx={{
            gap: 2.5,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <Button
            component={RouterLink}
            href="/"
            variant="outlined"
            size="large"
            color="inherit"
            startIcon={<Iconify icon="carbon:chevron-left" />}
          >
            Back home
          </Button>

          <Button
            variant="contained"
            size="large"
            color="inherit"
            startIcon={<Iconify icon="solar:file-download-outline" />}
          >
            Download invoice
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
