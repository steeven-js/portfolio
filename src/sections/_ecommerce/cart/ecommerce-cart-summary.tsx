import type { BoxProps } from '@mui/material/Box';

import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { fPercent, fCurrency } from 'src/utils/format-number';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  tax: number;
  total: number;
  subtotal: number;
  shipping: number;
  discount: number;
};

export function EcommerceCartSummary({
  sx,
  tax,
  total,
  subtotal,
  shipping,
  discount,
  ...other
}: Props) {
  return (
    <Box
      sx={[
        (theme) => ({
          p: 4,
          gap: 3,
          display: 'flex',
          borderRadius: 2,
          flexDirection: 'column',
          border: `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.24)}`,
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Typography variant="h6"> Summary </Typography>

      <Box sx={{ gap: 2, display: 'flex', flexDirection: 'column' }}>
        <Row label="Subtotal" value={fCurrency(subtotal)} />
        <Row label="Shipping" value={fCurrency(shipping)} />
        <Row label="Discount (15%)" value={`-${fCurrency(discount)}`} />
        <Row label="Tax" value={fPercent(tax)} />
      </Box>

      <TextField
        hiddenLabel
        placeholder="Discount code"
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <Button sx={{ mr: -0.25, color: 'text.primary' }}>Apply</Button>
              </InputAdornment>
            ),
          },
        }}
      />

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Row
        label="Total"
        value={fCurrency(total)}
        sx={{ typography: 'h6', '& span': { typography: 'h6' } }}
      />

      <Button
        component={RouterLink}
        href={paths.eCommerce.checkout}
        size="large"
        variant="contained"
        color="inherit"
      >
        Checkout
      </Button>
    </Box>
  );
}

// ----------------------------------------------------------------------

type RowProps = BoxProps & {
  label: string;
  value: string;
};

function Row({ label, value, sx, ...other }: RowProps) {
  return (
    <Box
      sx={[
        {
          display: 'flex',
          alignItems: 'center',
          typography: 'subtitle2',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Box component="span" sx={{ typography: 'body2', flexGrow: 1 }}>
        {label}
      </Box>

      {value}
    </Box>
  );
}
