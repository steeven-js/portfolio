import type { BoxProps } from '@mui/material/Box';
import type { Theme } from '@mui/material/styles';
import type { CardProps } from '@mui/material/Card';
import type { IJobByCountryProps } from 'src/types/job';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { CONFIG } from 'src/global-config';

import { Iconify } from 'src/components/iconify';
import { SvgColor } from 'src/components/svg-color';
import { Image, imageClasses } from 'src/components/image';
import { Carousel, useCarousel, CarouselArrowBasicButtons } from 'src/components/carousel';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  countries: IJobByCountryProps[];
};

export function CareerLandingConnections({ countries, sx, ...other }: Props) {
  const carousel = useCarousel({
    slidesToShow: { xs: 1, sm: 2, md: 'auto' },
    slideSpacing: '32px',
  });

  return (
    <Box
      component="section"
      sx={[
        {
          overflow: 'hidden',
          position: 'relative',
          py: { xs: 10, md: 15 },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <SvgColor
        src={`${CONFIG.assetsDir}/assets/illustrations/illustration-map.svg`}
        sx={{
          width: 780,
          height: 646,
          left: -64,
          top: '50%',
          zIndex: -1,
          opacity: 0.64,
          position: 'absolute',
          color: 'text.disabled',
          transform: 'translateY(-50%)',
          display: { xs: 'none', md: 'block' },
        }}
      />

      <Container>
        <Grid container columnSpacing={3} sx={{ justifyContent: 'space-between' }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ textAlign: { xs: 'center', md: 'unset' } }}>
              <Typography variant="h2">Global connections</Typography>

              <Typography sx={{ mt: 3, mb: 5, color: 'text.secondary' }}>
                Vestibulum fringilla pede sit amet augue. Nam adipiscing. Nulla neque dolor,
                sagittis eget, iaculis quis.
              </Typography>

              <Button
                component={RouterLink}
                href={paths.career.jobs}
                color="inherit"
                size="large"
                variant="contained"
                endIcon={<Iconify icon="carbon:chevron-right" />}
              >
                View all
              </Button>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                width: { md: 'calc(50vw + 120px)' },
              }}
            >
              <Carousel carousel={carousel} sx={{ pb: 5, pt: { xs: 5, md: 0 } }}>
                {countries.map((country) => (
                  <Link
                    component={RouterLink}
                    key={country.id}
                    href={paths.career.jobs}
                    underline="none"
                  >
                    <JobItem country={country} />
                  </Link>
                ))}
              </Carousel>

              <CarouselArrowBasicButtons {...carousel.arrows} options={carousel.options} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

type JobItemProps = CardProps & {
  country: IJobByCountryProps;
};

const transition = (theme: Theme) =>
  theme.transitions.create(['opacity', 'transform'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.short,
  });

function JobItem({ country, sx, ...other }: JobItemProps) {
  return (
    <Card
      sx={[
        (theme) => ({
          width: { md: 280 },
          '&:hover': {
            boxShadow: theme.vars.customShadows.z16,
            [`& .${imageClasses.root}`]: { transform: 'scale(1.06)' },
          },
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Box sx={{ overflow: 'hidden' }}>
        <Image alt={country.location} src={country.coverUrl} ratio="4/5" sx={{ transition }} />
      </Box>

      <Box sx={{ textAlign: 'center', p: 2.5 }}>
        <Typography variant="h6">{country.location}</Typography>
        <Typography variant="body2" sx={{ mt: 1, color: 'text.disabled' }}>
          {country.totalJobs} jobs
        </Typography>
      </Box>
    </Card>
  );
}
