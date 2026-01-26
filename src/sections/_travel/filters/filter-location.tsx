import type { Theme, SxProps } from '@mui/material/styles';

import Box from '@mui/material/Box';
import { inputBaseClasses } from '@mui/material/InputBase';
import { inputAdornmentClasses } from '@mui/material/InputAdornment';

import { Iconify } from 'src/components/iconify';
import { CountrySelect } from 'src/components/country-select';

// ----------------------------------------------------------------------

type FilterLocationProps = {
  sx?: SxProps<Theme>;
};

export function FilterLocation({ sx }: FilterLocationProps) {
  return (
    <Box
      sx={[
        {
          gap: 2,
          width: 1,
          display: 'flex',
          alignItems: 'center',
          color: 'text.disabled',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Iconify width={24} icon="carbon:location" />

      <CountrySelect
        fullWidth
        hiddenLabel
        popupIcon={null}
        placeholder="Where we go?"
        sx={{
          [`& .${inputBaseClasses.root}`]: {
            px: 0,
            bgcolor: 'transparent',
            '&:hover': { bgcolor: 'transparent' },
            [`&.${inputBaseClasses.focused}`]: { bgcolor: 'transparent' },
            [`& .${inputBaseClasses.input}`]: { typography: 'subtitle1' },
            [`& .${inputAdornmentClasses.positionStart}`]: { ml: 0 },
          },
        }}
      />
    </Box>
  );
}
