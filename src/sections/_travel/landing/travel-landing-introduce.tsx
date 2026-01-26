import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/global-config';

import { Iconify } from 'src/components/iconify';
import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const iconPath = (name: string) => `${CONFIG.assetsDir}/assets/icons/solid-64/${name}`;

const SUMMARY = [
  {
    title: 'Professional tour guides',
    description: 'Nunc nonummy metus. Donec elit libero',
    icon: iconPath('ic-popularity.svg'),
  },
  {
    title: 'Customer satisfaction',
    description: 'Nunc nonummy metus. Donec elit libero',
    icon: iconPath('ic-satisfaction.svg'),
  },
  {
    title: 'Secure payment',
    description: 'Nunc nonummy metus. Donec elit libero',
    icon: iconPath('ic-secure-payment.svg'),
  },
];

// ----------------------------------------------------------------------

export function TravelLandingIntroduce({ sx, ...other }: BoxProps) {
  const containerOffset = 'calc((100vw - 1200px) / 2)';

  const renderList = () => (
    <Container sx={{ textAlign: 'center' }}>
      <Box
        sx={{
          display: 'grid',
          gap: { xs: 5, md: 3 },
          gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' },
        }}
      >
        {SUMMARY.map((value) => (
          <div key={value.title}>
            <SvgColor
              src={value.icon}
              sx={(theme) => ({
                width: 64,
                height: 64,
                background: `linear-gradient(to bottom, ${theme.vars.palette.primary.light}, ${theme.vars.palette.primary.main})`,
              })}
            />

            <Typography component="h6" variant="h5" sx={{ mt: 3, mb: 1 }}>
              {value.title}
            </Typography>

            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {value.description}
            </Typography>
          </div>
        ))}
      </Box>
    </Container>
  );

  const renderTexts = () => (
    <Container>
      <Box
        sx={{
          maxWidth: 480,
          mx: { xs: 'auto', md: 'unset' },
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        <Typography variant="h2" sx={{ mb: 3 }}>
          Explore a different way to travel
        </Typography>
        <Typography sx={{ color: 'text.secondary' }}>
          Cras ultricies mi eu turpis hendrerit fringilla. Nulla consequat massa quis enim.
        </Typography>
      </Box>
    </Container>
  );

  const renderCard = () => (
    <Card
      sx={(theme) => ({
        p: 5,
        top: 24,
        left: 24,
        zIndex: 9,
        right: 24,
        bottom: 24,
        display: 'flex',
        textAlign: 'center',
        position: 'absolute',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        [theme.breakpoints.up('sm')]: {
          right: 'auto',
          bottom: 'auto',
          textAlign: 'unset',
          alignItems: 'unset',
          justifyContent: 'unset',
        },
        [theme.breakpoints.up('md')]: { top: 40, left: 40, maxWidth: 360 },
        [theme.breakpoints.up('lg')]: { top: 64, left: 64 },
      })}
    >
      <Typography variant="overline" sx={{ color: 'text.disabled' }}>
        Device
      </Typography>

      <Typography component="h6" variant="h4" sx={{ my: 3 }}>
        The more important the work
      </Typography>

      <Box
        sx={{
          gap: 1,
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          color: 'primary.main',
          typography: 'subtitle1',
          '&:hover': { opacity: 0.72 },
        }}
      >
        <Iconify width={22} icon="solar:play-outline" /> Watch video
      </Box>
    </Card>
  );

  const renderImage = () => (
    <Container
      sx={(theme) => ({
        px: 0,
        my: { xs: 5, md: 10 },
        position: 'relative',
        [theme.breakpoints.up('sm')]: { px: 0 },
        [theme.breakpoints.up('md')]: { my: 10 },
        [theme.breakpoints.up('lg')]: { px: 3 },
      })}
    >
      {renderCard()}

      <Box
        component="img"
        loading="lazy"
        alt="Travel cover"
        src={`${CONFIG.assetsDir}/assets/images/travel/travel-large-1.webp`}
        sx={(theme) => ({
          minHeight: 320,
          objectFit: 'cover',
          [theme.breakpoints.up('lg')]: {
            maxWidth: 'unset',
            width: `calc(100vw - ${containerOffset})`,
          },
        })}
      />
    </Container>
  );

  return (
    <Box
      component="section"
      sx={[
        {
          overflow: 'hidden',
          pt: { xs: 10, md: 15 },
          pb: { xs: 5, md: 10 },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      {renderTexts()}
      {renderImage()}
      {renderList()}
    </Box>
  );
}
