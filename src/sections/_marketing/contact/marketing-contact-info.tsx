import type { BoxProps } from '@mui/material/Box';
import type { Theme, SxProps } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/global-config';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function MarketingContactInfo({ sx, ...other }: BoxProps) {
  const rowStyles: SxProps<Theme> = {
    sx: {
      gap: 2,
      display: 'flex',
      alignItems: 'flex-start',
    },
  };

  const renderImage = () => (
    <Box
      component="img"
      alt="Marketing contact"
      src={`${CONFIG.assetsDir}/assets/illustrations/illustration-marketing-contact.svg`}
      sx={{ width: 380, height: 380, display: { xs: 'none', md: 'block' } }}
    />
  );

  const renderAddress = () => (
    <Box {...rowStyles}>
      <Iconify width={24} icon="carbon:location" sx={{ mt: '2px' }} />
      <div>
        <Box
          sx={{
            gap: 1,
            mb: 0.5,
            display: 'flex',
            typography: 'h6',
            alignItems: 'center',
          }}
        >
          Visit us
          <Link>
            <Iconify inline width={18} icon="carbon:launch" />
          </Link>
        </Box>
        <Typography variant="body2">508 Bridle Avenue Newnan, GA 30263e</Typography>
      </div>
    </Box>
  );

  const renderPhone = () => (
    <Box {...rowStyles}>
      <Iconify width={24} icon="solar:smartphone-outline" sx={{ mt: '2px' }} />
      <div>
        <Typography variant="h6" sx={{ mb: 0.5 }}>
          Call us
        </Typography>
        <Typography variant="body2">+1 234 567 890</Typography>
      </div>
    </Box>
  );

  const renderEmail = () => (
    <Box {...rowStyles}>
      <Iconify width={24} icon="solar:letter-outline" sx={{ mt: '2px' }} />
      <div>
        <Typography variant="h6" sx={{ mb: 0.5 }}>
          Talk to us
        </Typography>
        <Link color="inherit" variant="body2" href="mailto:hello@example.com">
          hello@example.com
        </Link>
      </div>
    </Box>
  );

  const renderTime = () => (
    <Box {...rowStyles}>
      <Iconify width={24} icon="solar:clock-circle-outline" sx={{ mt: '2px' }} />
      <div>
        <Typography variant="h6" sx={{ mb: 0.5 }}>
          Working hours
        </Typography>
        <Typography variant="body2">Mon-Fri: 9 am — 6 pm</Typography>
      </div>
    </Box>
  );

  return (
    <Box
      sx={[
        {
          gap: 3,
          display: 'flex',
          flexDirection: 'column',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      {renderImage()}
      {renderAddress()}
      {renderPhone()}
      {renderEmail()}
      {renderTime()}
    </Box>
  );
}
