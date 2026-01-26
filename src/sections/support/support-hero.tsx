import type { BoxProps } from '@mui/material/Box';

import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';

import { CONFIG } from 'src/global-config';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function SupportHero({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      sx={[
        (theme) => ({
          ...theme.mixins.bgGradient({
            images: [
              `linear-gradient(to bottom, ${varAlpha(theme.vars.palette.common.blackChannel, 0.8)}, ${varAlpha(theme.vars.palette.common.blackChannel, 0.8)})`,
              `url(${CONFIG.assetsDir}/assets/background/overlay-2.webp)`,
            ],
          }),
          px: 2.5,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          py: { xs: 10, md: 15 },
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Typography variant="h2" sx={{ textAlign: 'center', color: 'common.white', mb: 5 }}>
        Welcome to <br />
        <Box component="span" sx={{ color: 'primary.main' }}>
          {`ZONE `}
        </Box>
        support
      </Typography>

      <TextField
        fullWidth
        hiddenLabel
        placeholder="Search..."
        sx={{ maxWidth: 360 }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <Iconify width={24} icon="carbon:search" sx={{ color: 'text.disabled' }} />
              </InputAdornment>
            ),
            sx: (theme) => ({
              color: 'common.white',
              bgcolor: varAlpha(theme.vars.palette.grey['500Channel'], 0.16),
            }),
          },
        }}
      />
    </Box>
  );
}
