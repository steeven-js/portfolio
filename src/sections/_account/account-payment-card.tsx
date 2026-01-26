import type { PaperProps } from '@mui/material/Paper';

import { useBoolean, usePopover } from 'minimal-shared/hooks';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Popover from '@mui/material/Popover';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = PaperProps & {
  card: {
    value: string;
    label: string;
    number: string;
    holder: string;
    expired: string;
    isPrimary: boolean;
  };
};

export function AccountPaymentCard({ card, sx, ...other }: Props) {
  const showNumber = useBoolean();

  const openOptions = usePopover();

  return (
    <>
      <Paper
        variant="outlined"
        sx={[
          {
            p: 3,
            pr: 1,
            gap: 3,
            borderRadius: 2,
            display: 'flex',
            bgcolor: 'transparent',
            flexDirection: 'column',
          },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
        {...other}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', typography: 'subtitle1' }}>
          {card.label}

          {card.isPrimary && (
            <Label color="info" startIcon={<Iconify icon="eva:star-fill" />} sx={{ ml: 1 }}>
              Primary
            </Label>
          )}

          <Box sx={{ flexGrow: 1 }} />

          {card.value === 'visa' && <Iconify width={36} height="auto" icon="payments:visa" />}
          {card.value === 'mastercard' && (
            <Iconify width={36} height="auto" icon="payments:mastercard" />
          )}
          {card.value === 'paypal' && <Iconify width={24} icon="payments:paypal" />}

          <IconButton onClick={openOptions.onOpen}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </Box>

        <Box
          sx={{
            gap: 1,
            typography: 'h6',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {showNumber.value ? card.number : `**** **** **** ${card.number.slice(-4)}`}
          <IconButton onClick={showNumber.onToggle}>
            <Iconify icon={showNumber.value ? 'solar:eye-outline' : 'solar:eye-closed-outline'} />
          </IconButton>
        </Box>

        <Box
          sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', typography: 'subtitle2' }}
        >
          <div>
            <Typography
              variant="caption"
              sx={{ mb: 0.5, color: 'text.disabled', display: 'block' }}
            >
              Card holder
            </Typography>
            {card.holder}
          </div>

          <div>
            <Typography
              variant="caption"
              sx={{ mb: 0.5, color: 'text.disabled', display: 'block' }}
            >
              Expiry date
            </Typography>
            {card.expired}
          </div>
        </Box>
      </Paper>

      <Popover
        open={openOptions.open}
        anchorEl={openOptions.anchorEl}
        onClose={openOptions.onClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem disabled={card.isPrimary} onClick={openOptions.onClose} sx={{ gap: 1 }}>
          <Iconify icon="eva:star-fill" /> Set primary payment
        </MenuItem>

        <MenuItem onClick={openOptions.onClose} sx={{ gap: 1 }}>
          <Iconify icon="solar:pen-2-outline" /> Edit
        </MenuItem>

        <Divider sx={{ borderStyle: 'dashed', mt: 0.5 }} />

        <MenuItem onClick={openOptions.onClose} sx={{ gap: 1, color: 'error.main' }}>
          <Iconify icon="solar:trash-bin-minimalistic-outline" /> Delete
        </MenuItem>
      </Popover>
    </>
  );
}
