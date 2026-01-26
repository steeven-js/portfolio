import type { BoxProps } from '@mui/material/Box';
import type { ITourProps } from 'src/types/tour';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';

import { TravelTourItem } from './travel-tour-item';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  tours: ITourProps[];
};

export function TravelTourListSimilar({ tours, sx, ...other }: Props) {
  return (
    <Box
      component="section"
      sx={[
        {
          bgcolor: 'background.neutral',
          py: { xs: 10, md: 15 },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 5, md: 10 } }}>
          <Typography component="h6" variant="h3" sx={{ flexGrow: 1 }}>
            You might like
          </Typography>

          <Button
            component={RouterLink}
            href={paths.travel.tours}
            color="inherit"
            endIcon={<Iconify icon="carbon:chevron-right" />}
          >
            View all
          </Button>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gap: { xs: 4, md: 3 },

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
      </Container>
    </Box>
  );
}
