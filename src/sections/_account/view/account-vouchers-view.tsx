import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';

import { fAdd } from 'src/utils/format-time';

import { _mock } from 'src/_mock';

import { AccountVoucherItem } from '../account-voucher-item';

// ----------------------------------------------------------------------

const TABS = ['All', 'Latest', 'Popular', 'Expired'];

const VOUCHERS = [
  {
    id: _mock.id(1),
    type: 'shipping',
    label: 'Shipping',
    title: '6% off',
    description: 'Min. Spend $0',
    dueOn: fAdd({ days: 1 }),
  },
  {
    id: _mock.id(2),
    type: 'shipping',
    label: 'Shipping',
    title: '6% off',
    description: 'Min. Spend $0',
    dueOn: fAdd({ days: 2 }),
  },
  {
    id: _mock.id(3),
    type: 'all',
    label: 'All categories',
    title: '6% off',
    description: 'Min. Spend $0 Capped at $10',
    dueOn: fAdd({ days: 1 }),
  },
  {
    id: _mock.id(4),
    type: 'shipping',
    label: 'Shipping',
    title: '6% off',
    description: 'Min. Spend $0 Capped at $10',
    dueOn: fAdd({ days: 2 }),
  },
  {
    id: _mock.id(5),
    type: 'category',
    label: 'Men Clothes',
    title: 'Up to 50%',
    description: 'Min. Spend $0 Capped at $10',
    dueOn: fAdd({ days: 3 }),
  },
  {
    id: _mock.id(6),
    type: 'shipping',
    label: 'Shipping',
    title: '6% off',
    description: 'Min. Spend $0',
    dueOn: fAdd({ days: 4 }),
  },
  {
    id: _mock.id(7),
    type: 'shipping',
    label: 'Shipping',
    title: '6% off',
    description: 'Min. Spend $0',
    dueOn: fAdd({ days: 5 }),
  },
];

// ----------------------------------------------------------------------

export function AccountVouchersView() {
  const [tab, setTab] = useState(TABS[0]);

  const handleChangeTab = useCallback((event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  }, []);

  return (
    <>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Vouchers
      </Typography>
      <TextField
        fullWidth
        label="Enter voucher code"
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <Button size="large" variant="contained" color="inherit" sx={{ mr: -1 }}>
                  Redeem
                </Button>
              </InputAdornment>
            ),
          },
        }}
      />
      <Divider sx={{ my: 3, borderStyle: 'dashed' }} />
      <Tabs
        value={tab}
        scrollButtons="auto"
        variant="scrollable"
        allowScrollButtonsMobile
        onChange={handleChangeTab}
        sx={{ mb: 3 }}
      >
        {TABS.map((category) => (
          <Tab key={category} value={category} label={category} />
        ))}
      </Tabs>
      <Box
        sx={{
          gap: 3,
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' },
        }}
      >
        {VOUCHERS.map((voucher) => (
          <AccountVoucherItem key={voucher.id} voucher={voucher} />
        ))}
      </Box>
    </>
  );
}
