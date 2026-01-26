import type { InputBaseProps } from '@mui/material/InputBase';

import { usePopover } from 'minimal-shared/hooks';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputBase, { inputBaseClasses } from '@mui/material/InputBase';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

type FilterGuestsProps = InputBaseProps & {
  value: { adults: number; children: number };
  onIncrement: (guest?: string) => void;
  onDecrease: (guest?: string) => void;
};

export function FilterGuests({ value, onIncrement, onDecrease, sx, ...other }: FilterGuestsProps) {
  const openFilter = usePopover();

  const guestCount = value.children + value.adults;

  return (
    <>
      <InputBase
        fullWidth
        value={guestCount > 0 ? `${guestCount} Guests` : ''}
        placeholder="Guests"
        startAdornment={
          <InputAdornment position="start">
            <Iconify
              width={24}
              icon="solar:users-group-rounded-outline"
              sx={{ mr: 1, color: 'text.disabled' }}
            />
          </InputAdornment>
        }
        inputProps={{ id: 'guests-input' }}
        onClick={openFilter.onOpen}
        sx={[
          {
            height: 56,
            minHeight: 28,
            [`& .${inputBaseClasses.input}`]: {
              py: 0,
              height: 1,
              typography: 'subtitle1',
            },
          },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
        {...other}
      />

      <Popover
        open={openFilter.open}
        onClose={openFilter.onClose}
        anchorEl={openFilter.anchorEl}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        slotProps={{
          paper: { sx: { width: 360, p: 3 } },
        }}
      >
        <Field
          title="Adults"
          caption="Ages 13 or above"
          total={value.adults}
          onDecrease={onDecrease}
          onIncrement={onIncrement}
        />

        <Divider sx={{ my: 2.5, borderStyle: 'dashed' }} />

        <Field
          title="Children"
          caption="Ages 2 - 12"
          total={value.children}
          onDecrease={() => onDecrease('children')}
          onIncrement={() => onIncrement('children')}
        />
      </Popover>
    </>
  );
}

// ----------------------------------------------------------------------

type FieldProps = {
  title: string;
  caption: string;
  total: number;
  onDecrease: () => void;
  onIncrement: () => void;
};

function Field({ title, caption, total, onDecrease, onIncrement }: FieldProps) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle1" sx={{ mb: 0.5 }}>
          {title}
        </Typography>
        <Typography variant="caption" sx={{ color: 'text.disabled' }}>
          {caption}
        </Typography>
      </Box>

      <Box
        sx={{
          width: 100,
          display: 'flex',
          alignItems: 'center',
          typography: 'subtitle1',
        }}
      >
        <IconButton disabled={total < 1} onClick={onDecrease} sx={{ p: 0.5 }}>
          <Iconify width={16} icon="mingcute:minimize-line" />
        </IconButton>

        <Box component="span" sx={{ flexGrow: 1, textAlign: 'center' }}>
          {total}
        </Box>

        <IconButton onClick={onIncrement} sx={{ p: 0.5 }}>
          <Iconify width={16} icon="mingcute:add-line" />
        </IconButton>
      </Box>
    </Box>
  );
}
