import type { BoxProps } from '@mui/material/Box';
import type { ITourProps } from 'src/types/tour';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';

import { TravelTourItem } from '../list/travel-tour-item';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  tours: ITourProps[];
};

export function TravelLandingTourFeatured({ tours, sx, ...other }: Props) {
  const renderTexts = () => (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h2">Featured tours</Typography>
      <Typography sx={{ mt: 3, color: 'text.secondary' }}>
        {`Our Featured Tours can help you find the trip that's perfect for you!`}
      </Typography>
    </Box>
  );

  const renderList = () => (
    <Box
      sx={{
        display: 'grid',
        gap: { xs: 4, md: 3 },
        my: { xs: 5, md: 10 },
        gridTemplateColumns: {
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(4, 1fr)',
        },
      }}
    >
      {tours.map((tour) => (
        <TravelTourItem key={tour.id} tour={tour} />
      ))}
    </Box>
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
        {renderTexts()}
        {renderList()}

        <Box sx={{ textAlign: 'center' }}>
          <Button
            component={RouterLink}
            href={paths.travel.tours}
            size="large"
            variant="outlined"
            color="inherit"
            endIcon={<Iconify icon="carbon:chevron-right" />}
          >
            View all
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
