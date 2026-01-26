import type { BoxProps } from '@mui/material/Box';

import { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import InputBase, { inputBaseClasses } from '@mui/material/InputBase';

import { CONFIG } from 'src/global-config';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function MarketingServicesHero({ sx, ...other }: BoxProps) {
  const [email, setEmail] = useState('');

  const [websiteURL, setWebsiteURL] = useState('');

  const renderForm = () => (
    <Box
      sx={{
        mx: 'auto',
        maxWidth: 760,
        display: 'flex',
        gap: { xs: 2.5, md: 2 },
        alignItems: { md: 'center' },
        flexDirection: { xs: 'column', md: 'row' },
        [`& .${inputBaseClasses.root}`]: {
          pl: 1.5,
          height: 56,
          borderRadius: 1,
          color: 'grey.800',
          bgcolor: 'common.white',
        },
      }}
    >
      <InputBase
        fullWidth
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        startAdornment={
          <InputAdornment position="start">
            <Iconify width={24} icon="solar:letter-outline" sx={{ color: 'text.disabled' }} />
          </InputAdornment>
        }
        placeholder="Email"
        inputProps={{ id: 'email-input' }}
      />

      <InputBase
        fullWidth
        value={websiteURL}
        onChange={(event) => setWebsiteURL(event.target.value)}
        startAdornment={
          <InputAdornment position="start">
            <Iconify width={24} icon="carbon:license-global" sx={{ color: 'text.disabled' }} />
          </InputAdornment>
        }
        placeholder="Website URL"
        inputProps={{ id: 'website-url-input' }}
      />

      <Button color="primary" size="xLarge" variant="contained" sx={{ flexShrink: 0 }}>
        Analyse
      </Button>
    </Box>
  );

  return (
    <Box
      component="section"
      sx={[
        (theme) => ({
          ...theme.mixins.bgGradient({
            images: [
              `linear-gradient(to bottom, transparent 0%, ${theme.vars.palette.common.black} 75%)`,
              `url(${CONFIG.assetsDir}/assets/images/marketing/services-hero.webp)`,
            ],
          }),
          py: { xs: 10, md: 20 },
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container>
        <Box
          sx={{
            mb: 5,
            mx: 'auto',
            maxWidth: 480,
            textAlign: 'center',
            color: 'common.white',
          }}
        >
          <Typography
            variant="h1"
            sx={(theme) => ({
              ...theme.mixins.textGradient(
                `90deg, ${theme.vars.palette.primary.main} 20%, ${theme.vars.palette.secondary.main} 100%`
              ),
              mb: 3,
              display: 'inline-flex',
            })}
          >
            Offline SEO
          </Typography>

          <Typography sx={{ opacity: 0.72 }}>
            Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis
            venenatis ante odio sit amet eros.
          </Typography>
        </Box>

        {renderForm()}
      </Container>
    </Box>
  );
}
