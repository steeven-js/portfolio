import type { TableRowProps } from '@mui/material/TableRow';
import type { IProductOrderProps } from 'src/types/product';

import { usePopover } from 'minimal-shared/hooks';

import Divider from '@mui/material/Divider';
import Popover from '@mui/material/Popover';
import Checkbox from '@mui/material/Checkbox';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import MenuItem, { menuItemClasses } from '@mui/material/MenuItem';
import InputBase, { inputBaseClasses } from '@mui/material/InputBase';

import { fDate } from 'src/utils/format-time';
import { fCurrency } from 'src/utils/format-number';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = TableRowProps & {
  row: IProductOrderProps;
  onSelectRow: () => void;
};

export function AccountOrdersTableRow({ row, onSelectRow, selected, sx, ...other }: Props) {
  const openOptions = usePopover();

  const inputStyles = {
    borderRadius: 0.75,
    [`& .${inputBaseClasses.input}`]: { pl: 1, typography: 'body2' },
    [`&.${inputBaseClasses.focused}`]: { bgcolor: 'action.selected' },
  };

  return (
    <>
      <TableRow hover selected={selected} sx={sx} {...other}>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            checked={selected}
            onClick={onSelectRow}
            slotProps={{
              input: {
                id: `${row.item}-checkbox`,
                'aria-label': `${row.item} checkbox`,
              },
            }}
          />
        </TableCell>

        <TableCell>{row.orderId}</TableCell>

        <TableCell sx={{ px: 1 }}>
          <InputBase
            value={row.item}
            sx={inputStyles}
            inputProps={{ id: `item-${row.item}-input` }}
          />
        </TableCell>

        <TableCell>{fDate(row.deliveryDate)}</TableCell>

        <TableCell sx={{ px: 1 }}>
          <InputBase
            value={fCurrency(row.price)}
            sx={inputStyles}
            inputProps={{ id: `date-${row.item}-input` }}
          />
        </TableCell>

        <TableCell>
          <Label
            color={
              (row.status === 'Completed' && 'success') ||
              (row.status === 'To process' && 'warning') ||
              (row.status === 'Cancelled' && 'error') ||
              'default'
            }
          >
            {row.status}
          </Label>
        </TableCell>

        <TableCell align="right" padding="none">
          <IconButton onClick={openOptions.onOpen}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell>
      </TableRow>

      <Popover
        open={openOptions.open}
        anchorEl={openOptions.anchorEl}
        onClose={openOptions.onClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        slotProps={{ paper: { sx: { width: 160, [`& .${menuItemClasses.root}`]: { gap: 1 } } } }}
      >
        <MenuItem onClick={openOptions.onClose}>
          <Iconify icon="solar:eye-outline" /> View
        </MenuItem>

        <MenuItem onClick={openOptions.onClose}>
          <Iconify icon="solar:pen-2-outline" /> Edit
        </MenuItem>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem onClick={openOptions.onClose} sx={{ color: 'error.main' }}>
          <Iconify icon="solar:trash-bin-minimalistic-outline" /> Delete
        </MenuItem>
      </Popover>
    </>
  );
}
