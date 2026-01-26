import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/global-config';

import { Image } from 'src/components/image';
import { AnimateCountUp } from 'src/components/animate';

// ----------------------------------------------------------------------

const iconPath = (name: string) => `${CONFIG.assetsDir}/assets/icons/travel/${name}`;

const SUMMARY = [
  { total: 130, description: 'Air tickets sold', icon: iconPath('ic-tickets.svg') },
  { total: 196, description: 'Tours booked', icon: iconPath('ic-booking.svg') },
  { total: 10670, description: 'Site visitors', icon: iconPath('ic-site-visitors.svg') },
  { total: 877, description: 'Verified hotels', icon: iconPath('ic-verified-hotels.svg') },
];

// ----------------------------------------------------------------------

export function TravelLandingSummary({ sx, ...other }: BoxProps) {
  const renderTexts = () => (
    <Box sx={{ mx: 'auto', maxWidth: 480, mb: { xs: 5, md: 10 } }}>
      <Typography variant="h2">Fastest way to book over 450 great tours</Typography>
      <Typography sx={{ mt: 3, color: 'text.secondary' }}>
        Since wire-frame renderings are relatively simple and fast to calculate, they are often used
        in cases
      </Typography>
    </Box>
  );

  const renderList = () => (
    <Box
      sx={{
        gap: 3,
        display: 'grid',
        gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
      }}
    >
      {SUMMARY.map((value) => (
        <Box
          key={value.description}
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            color: 'text.secondary',
          }}
        >
          <Image
            alt={value.description}
            src={value.icon}
            disablePlaceholder
            ratio="1/1"
            sx={{ mb: 3, width: 80 }}
          />

          <AnimateCountUp
            variant="h3"
            to={value.total}
            toFixed={2}
            sx={{ mb: 1, color: 'text.primary' }}
          />
          {value.description}
        </Box>
      ))}
    </Box>
  );

  return (
    <Box
      component="section"
      sx={[
        {
          textAlign: 'center',
          py: { xs: 5, md: 10 },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container>
        {renderTexts()}
        {renderList()}
      </Container>
    </Box>
  );
}
