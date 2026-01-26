import type { BoxProps } from '@mui/material/Box';
import type { PaperProps } from '@mui/material/Paper';
import type { Theme, SxProps } from '@mui/material/styles';
import type { MapLocationProps } from 'src/components/map';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { Image, imageClasses } from 'src/components/image';

// ----------------------------------------------------------------------

type TravelContactInfoProps = BoxProps & {
  locations: MapLocationProps[];
};

export function TravelContactInfo({ locations, sx, ...other }: TravelContactInfoProps) {
  return (
    <Box component="section" sx={sx} {...other}>
      <Container
        sx={{
          textAlign: 'center',
          pt: { xs: 3, md: 5 },
          pb: { xs: 5, md: 10 },
        }}
      >
        <Typography variant="h2">
          We work <br />
          worldwide.
        </Typography>

        <Typography sx={{ color: 'text.secondary', mt: 3 }}>
          {`We'd love to talk about how we can help you.`}
        </Typography>
      </Container>

      <Box sx={{ py: { xs: 10, md: 15 }, bgcolor: 'background.neutral' }}>
        <Container
          sx={{
            gap: 4,
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
          }}
        >
          {locations.map((location) => (
            <OfficeCard key={location.id} location={location} />
          ))}
        </Container>
      </Box>
    </Box>
  );
}

// ----------------------------------------------------------------------

type OfficeCardProps = PaperProps & {
  location: MapLocationProps;
};

const transition = (theme: Theme) =>
  theme.transitions.create(['opacity', 'transform'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.short,
  });

function OfficeCard({ location, sx, ...other }: OfficeCardProps) {
  const rowStyles: SxProps<Theme> = {
    mt: 2,
    gap: 1.5,
    display: 'flex',
    typography: 'body2',
  };

  const renderAddress = () => (
    <Box sx={rowStyles}>
      <Iconify width={22} icon="carbon:location" />
      <div>
        <Box
          component="span"
          sx={{
            gap: 1,
            mb: 0.5,
            display: 'flex',
            alignItems: 'center',
            typography: 'subtitle2',
          }}
        >
          Address
          <Link sx={{ display: 'inline-flex' }}>
            <Iconify width={16} icon="carbon:launch" />
          </Link>
        </Box>
        {location.address}
      </div>
    </Box>
  );

  const renderPhone = () => (
    <Box sx={rowStyles}>
      <Iconify width={22} icon="solar:smartphone-outline" />
      <div>
        <Box component="span" sx={{ mb: 0.5, display: 'block', typography: 'subtitle2' }}>
          Phone
        </Box>
        {location.phoneNumber}
      </div>
    </Box>
  );

  const renderEmail = () => (
    <Box sx={rowStyles}>
      <Iconify width={22} icon="solar:letter-outline" />
      <div>
        <Box component="span" sx={{ mb: 0.5, display: 'block', typography: 'subtitle2' }}>
          Email
        </Box>
        {location.email}
      </div>
    </Box>
  );

  return (
    <Paper
      sx={[
        (theme) => ({
          borderRadius: 2,
          overflow: 'hidden',
          bgcolor: 'background.default',
          '&:hover': {
            boxShadow: theme.vars.customShadows.z24,
            [`& .${imageClasses.root}`]: { transform: 'scale(1.06)' },
          },
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Box sx={{ overflow: 'hidden' }}>
        <Image alt={location.country} src={location.photoUrl} ratio="4/3" sx={{ transition }} />
      </Box>

      <Box sx={{ p: 3 }}>
        <Typography component="h6" variant="h5">
          {location.country}
        </Typography>
        {renderAddress()}
        {renderPhone()}
        {renderEmail()}
      </Box>
    </Paper>
  );
}
