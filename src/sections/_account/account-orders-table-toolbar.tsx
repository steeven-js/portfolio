import type { BoxProps } from '@mui/material/Box';

import { useId } from 'react';

import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  rowCount: number;
  numSelected: number;
  onSelectAllRows: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function AccountOrdersTableToolbar({
  sx,
  rowCount,
  numSelected,
  onSelectAllRows,
  ...other
}: Props) {
  const id = useId();

  return (
    <Box
      sx={[
        {
          pr: 2,
          top: 0,
          left: 0,
          width: 1,
          zIndex: 9,
          height: 58,
          display: 'flex',
          borderRadius: 1,
          alignItems: 'center',
          position: 'absolute',
          bgcolor: 'text.primary',
          color: 'background.paper',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Checkbox
        disableRipple
        indeterminate={numSelected > 0 && numSelected < rowCount}
        checked={rowCount > 0 && numSelected === rowCount}
        onChange={onSelectAllRows}
        slotProps={{
          input: {
            id: `${id}-checkbox`,
            'aria-label': `${id} checkbox`,
          },
        }}
      />
      <Box component="span" sx={{ flexGrow: 1, typography: 'subtitle2' }}>
        {numSelected} selected
      </Box>

      <Tooltip title="Delete">
        <IconButton color="inherit">
          <Iconify icon="solar:trash-bin-minimalistic-outline" />
        </IconButton>
      </Tooltip>
    </Box>
  );
}
