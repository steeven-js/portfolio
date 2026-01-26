import type { TableHeadProps } from '@mui/material/TableHead';

import Box from '@mui/material/Box';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableSortLabel from '@mui/material/TableSortLabel';

import { visuallyHidden } from './utils';

// ----------------------------------------------------------------------

type Prop = TableHeadProps & {
  order: 'asc' | 'desc';
  orderBy: string;
  rowCount: number;
  headCells: any[];
  numSelected: number;
  onSort: (id: string) => void;
  onSelectAllRows: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function AccountOrdersTableHead({
  sx,
  order,
  onSort,
  orderBy,
  rowCount,
  headCells,
  numSelected,
  onSelectAllRows,
  ...other
}: Prop) {
  return (
    <TableHead sx={sx} {...other}>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllRows}
            slotProps={{
              input: {
                id: 'all-row-checkbox',
                'aria-label': 'All row Checkbox',
              },
            }}
          />
        </TableCell>

        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'normal' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{ width: headCell.width, minWidth: headCell.minWidth }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={() => onSort(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
