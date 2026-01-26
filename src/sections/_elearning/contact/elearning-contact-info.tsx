import type { BoxProps } from '@mui/material/Box';
import type { Theme, SxProps } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { _offices, _socials } from 'src/_mock';

import { Map } from 'src/components/map';
import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function ElearningContactInfo({ sx, ...other }: BoxProps) {
  const renderSocials = () => (
    <Box sx={{ display: 'flex' }}>
      {_socials.map((social) => (
        <IconButton key={social.label}>
          {social.value === 'twitter' && <Iconify icon="socials:twitter" />}
          {social.value === 'facebook' && <Iconify icon="socials:facebook" />}
          {social.value === 'instagram' && <Iconify icon="socials:instagram" />}
          {social.value === 'linkedin' && <Iconify icon="socials:linkedin" />}
        </IconButton>
      ))}
    </Box>
  );

  const rowStyles: SxProps<Theme> = {
    mb: 3,
    gap: 1.5,
    display: 'flex',
  };

  const renderEmail = () => (
    <Box sx={rowStyles}>
      <Iconify width={22} icon="solar:letter-outline" />
      <div>
        <Box component="span" sx={{ mb: 0.5, typography: 'subtitle2', display: 'block' }}>
          Email
        </Box>

        <Link color="inherit" variant="body2" href="mailto:hello@example.com">
          hello@example.com
        </Link>
      </div>
    </Box>
  );

  const renderPhone = () => (
    <Box sx={rowStyles}>
      <Iconify width={22} icon="solar:smartphone-outline" />
      <div>
        <Box component="span" sx={{ mb: 0.5, typography: 'subtitle2', display: 'block' }}>
          Phone
        </Box>
        <Typography variant="body2">(907) 555-0101</Typography>
      </div>
    </Box>
  );

  const renderAddress = () => (
    <Box sx={rowStyles}>
      <Iconify width={22} icon="carbon:location" />
      <div>
        <Box component="span" sx={{ mb: 0.5, typography: 'subtitle2', display: 'block' }}>
          Address
        </Box>
        <Typography variant="body2">3891 Ranchview Dr. Richardson, California 62639</Typography>
      </div>
    </Box>
  );

  return (
    <Box
      component="section"
      sx={[
        {
          pt: { xs: 3, md: 5 },
          pb: { xs: 10, md: 15 },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container>
        <Grid container spacing={3} sx={{ justifyContent: { md: 'space-between' } }}>
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <Typography variant="h2" sx={{ mb: 5, textAlign: { xs: 'center', md: 'left' } }}>
              Get in touch
            </Typography>

            {renderEmail()}
            {renderPhone()}
            {renderAddress()}

            <Divider sx={{ mb: 3, width: 1, borderStyle: 'dashed' }} />

            <div>
              <Typography variant="overline" sx={{ mb: 1, display: 'block' }}>
                Follow us
              </Typography>
              {renderSocials()}
            </div>
          </Grid>

          <Grid size={{ xs: 12, md: 6, lg: 7 }}>
            <Map locations={_offices} sx={{ borderRadius: 2 }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
