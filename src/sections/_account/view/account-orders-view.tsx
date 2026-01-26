import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Table from '@mui/material/Table';
import Switch from '@mui/material/Switch';
import Divider from '@mui/material/Divider';
import TableBody from '@mui/material/TableBody';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import TableContainer from '@mui/material/TableContainer';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TablePagination from '@mui/material/TablePagination';
import FormControlLabel from '@mui/material/FormControlLabel';
import TableRow, { tableRowClasses } from '@mui/material/TableRow';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

import { _productsTable } from 'src/_mock';

import { Iconify } from 'src/components/iconify';

import { stableSort, getComparator } from '../utils';
import { AccountOrdersTableRow } from '../account-orders-table-row';
import { AccountOrdersTableHead } from '../account-orders-table-head';
import { AccountOrdersTableToolbar } from '../account-orders-table-toolbar';

// ----------------------------------------------------------------------

const TABS = ['All', 'Completed', 'To process', 'Cancelled', 'Return & refund'];

export const TABLE_HEAD = [
  { id: 'orderId', label: 'Order ID' },
  { id: 'item', label: 'Item' },
  { id: 'deliveryDate', label: 'Delivery date', width: 160 },
  { id: 'price', label: 'Price', width: 100 },
  { id: 'status', label: 'Status', width: 100 },
  { id: '' },
];

// ----------------------------------------------------------------------

export function AccountOrdersView() {
  const [page, setPage] = useState(0);
  const [tab, setTab] = useState(TABS[0]);
  const [dense, setDense] = useState(false);
  const [orderBy, setOrderBy] = useState('orderId');
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selected, setSelected] = useState<string[]>([]);
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');

  const handleChangeTab = useCallback((event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  }, []);

  const handleSort = useCallback(
    (id: string) => {
      const isAsc = orderBy === id && order === 'asc';
      if (id !== '') {
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(id);
      }
    },
    [order, orderBy]
  );

  const handleSelectAllRows = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = _productsTable.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  }, []);

  const handleSelectRow = useCallback(
    (id: string) => {
      const selectedIndex = selected.indexOf(id);
      let newSelected: string[] = [];

      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, id);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1)
        );
      }

      setSelected(newSelected);
    },
    [selected]
  );

  const handleChangePage = useCallback((event: unknown, newPage: number) => {
    setPage(newPage);
  }, []);

  const handleChangeRowsPerPage = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }, []);

  const handleChangeDense = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  }, []);

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - _productsTable.length) : 0;

  return (
    <>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Orders
      </Typography>

      <Tabs
        value={tab}
        scrollButtons="auto"
        variant="scrollable"
        allowScrollButtonsMobile
        onChange={handleChangeTab}
      >
        {TABS.map((category) => (
          <Tab key={category} value={category} label={category} />
        ))}
      </Tabs>

      <Box
        sx={{
          mt: 5,
          mb: 3,
          gap: 2,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        <TextField
          fullWidth
          hiddenLabel
          placeholder="Search..."
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <Iconify width={24} icon="carbon:search" sx={{ color: 'text.disabled' }} />
                </InputAdornment>
              ),
            },
          }}
        />

        <Box
          sx={{
            gap: 2,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          <DatePicker label="Start date" sx={{ minWidth: 180 }} />
          <DatePicker label="End date" sx={{ minWidth: 180 }} />
        </Box>
      </Box>

      <TableContainer
        sx={(theme) => ({
          [`& .${tableCellClasses.head}`]: { color: 'text.primary', bgcolor: 'transparent' },
          [`& .${tableRowClasses.root}`]: {
            [`& .${tableCellClasses.root}:first-of-type`]: { p: 0 },
            '&:last-of-type': {
              [`& .${tableCellClasses.root}`]: { borderColor: theme.vars.palette.divider },
            },
          },
        })}
      >
        {!!selected.length && (
          <AccountOrdersTableToolbar
            rowCount={_productsTable.length}
            numSelected={selected.length}
            onSelectAllRows={handleSelectAllRows}
          />
        )}

        <Table sx={{ minWidth: 720 }} size={dense ? 'small' : 'medium'}>
          <AccountOrdersTableHead
            order={order}
            orderBy={orderBy}
            onSort={handleSort}
            headCells={TABLE_HEAD}
            rowCount={_productsTable.length}
            numSelected={selected.length}
            onSelectAllRows={handleSelectAllRows}
          />

          <TableBody>
            {stableSort(_productsTable, getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <AccountOrdersTableRow
                  key={row.id}
                  row={row}
                  selected={selected.includes(row.id)}
                  onSelectRow={() => handleSelectRow(row.id)}
                />
              ))}

            {emptyRows > 0 && (
              <TableRow sx={{ height: (dense ? 36 : 57) * emptyRows }}>
                <TableCell colSpan={9} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Box sx={{ gap: 1, display: 'flex', alignItems: 'center' }}>
        <FormControlLabel
          control={
            <Switch
              checked={dense}
              onChange={handleChangeDense}
              slotProps={{
                input: { id: `dense-switch` },
              }}
            />
          }
          label="Dense"
          sx={{ flexGrow: 1 }}
        />

        <TablePagination
          page={page}
          component="div"
          count={_productsTable.length}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[5, 10, 25]}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
    </>
  );
}
