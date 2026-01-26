import type { PlayerProps } from './player';

import { varAlpha } from 'minimal-shared/utils';

import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';

import { Player } from './player';
import { Iconify } from '../iconify';

// ----------------------------------------------------------------------

export interface PlayerDialogProps extends PlayerProps {
  open: boolean;
  onClose: () => void;
}

export function PlayerDialog({ open, onClose, slotProps, ...other }: PlayerDialogProps) {
  return (
    <Dialog
      fullScreen
      open={open}
      aria-hidden={!open}
      slotProps={{
        paper: {
          sx: { bgcolor: 'transparent' },
        },
      }}
    >
      <IconButton
        size="large"
        onClick={onClose}
        sx={(theme) => ({
          top: 24,
          right: 24,
          zIndex: 9,
          position: 'fixed',
          color: varAlpha(theme.vars.palette.common.whiteChannel, 0.72),
          bgcolor: varAlpha(theme.vars.palette.common.whiteChannel, 0.08),
          '&:hover': {
            bgcolor: varAlpha(theme.vars.palette.common.whiteChannel, 0.16),
          },
        })}
      >
        <Iconify icon="mingcute:close-line" />
      </IconButton>

      <Player fullScreen {...other} />
    </Dialog>
  );
}
