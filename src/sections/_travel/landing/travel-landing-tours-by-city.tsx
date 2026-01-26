import type { BoxProps } from '@mui/material/Box';
import type { ITourProps } from 'src/types/tour';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  tours: ITourProps[];
};

export function TravelLandingToursByCity({ tours, sx, ...other }: Props) {
  return (
    <Box
      component="section"
      sx={[
        {
          pt: { xs: 5, md: 10 },
          pb: { xs: 10, md: 15 },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: { xs: 'center', md: 'space-between' },
            mb: { xs: 5, md: 10 },
          }}
        >
          <Box sx={{ textAlign: { xs: 'center', md: 'unset' } }}>
            <Typography variant="h2" sx={{ mb: 3 }}>
              Tours by city
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              {`Our Featured Tours can help you find the trip that's perfect for you!`}
            </Typography>
          </Box>

          <Button
            component={RouterLink}
            href={paths.travel.tours}
            color="inherit"
            endIcon={<Iconify icon="carbon:chevron-right" />}
            sx={{ display: { xs: 'none', md: 'inline-flex' } }}
          >
            View all
          </Button>
        </Box>

        <Box
          sx={{
            gap: 3,
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(4, 1fr)',
            },
          }}
        >
          {tours.map((tour) => (
            <TourItem key={tour.id} tour={tour} />
          ))}
        </Box>

        <Box sx={{ mt: 5, textAlign: 'center', display: { md: 'none' } }}>
          <Button
            component={RouterLink}
            href={paths.travel.tours}
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

// ----------------------------------------------------------------------

type TourItemProps = {
  tour: ITourProps;
};

function TourItem({ tour }: TourItemProps) {
  return (
    <Link component={RouterLink} href={paths.travel.tour} color="inherit" underline="none">
      <Paper
        variant="outlined"
        sx={(theme) => ({
          p: 3,
          gap: 2.5,
          borderRadius: 2,
          display: 'flex',
          cursor: 'pointer',
          alignItems: 'center',
          bgcolor: 'transparent',
          '&:hover': { bgcolor: 'background.paper', boxShadow: theme.vars.customShadows.z24 },
        })}
      >
        <Avatar src={tour.coverUrl} sx={{ width: 64, height: 64 }} />

        <div>
          <Typography
            variant="h6"
            sx={(theme) => ({ ...theme.mixins.maxLine({ line: 1 }), mb: 0.5 })}
          >
            {tour.location}
          </Typography>

          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            196 place
          </Typography>
        </div>
      </Paper>
    </Link>
  );
}
