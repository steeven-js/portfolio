import type { BoxProps } from '@mui/material/Box';
import type { IProductItemProps } from 'src/types/product';

import { useState } from 'react';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';

import { fPercent, fCurrency } from 'src/utils/format-number';

import { Image } from 'src/components/image';
import { Iconify } from 'src/components/iconify';
import { NumberInput } from 'src/components/number-input';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  tax: number;
  total: number;
  subtotal: number;
  shipping: number;
  discount: number;
  loading?: boolean;
  products?: IProductItemProps[];
};

export function EcommerceCheckoutOrderSummary({
  sx,
  tax,
  total,
  subtotal,
  shipping,
  discount,
  products,
  loading,
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
      <Typography variant="h6"> Order summary </Typography>

      {!!products?.length && (
        <>
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}

          <Divider sx={{ borderStyle: 'dashed' }} />
        </>
      )}

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
                <Button sx={{ color: 'text.primary' }}>Apply</Button>
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

      <Button size="large" variant="contained" color="inherit" type="submit" loading={loading}>
        Order now
      </Button>
    </Box>
  );
}

// ----------------------------------------------------------------------

type ProductItemProps = BoxProps & {
  product: IProductItemProps;
};

function ProductItem({ product, sx, ...other }: ProductItemProps) {
  const [quantity, setQuantity] = useState(1);

  return (
    <Box
      sx={[{ display: 'flex', alignItems: 'flex-start' }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...other}
    >
      <Image
        alt={product.name}
        src={product.coverUrl}
        disablePlaceholder
        sx={{
          mr: 2,
          width: 64,
          height: 64,
          flexShrink: 0,
          borderRadius: 1.5,
          bgcolor: 'background.neutral',
        }}
      />

      <Box sx={{ flexGrow: 1, minWidth: 0 }}>
        <Typography variant="body2" noWrap sx={{ fontWeight: 'fontWeightMedium' }}>
          {product.name}
        </Typography>

        <Typography variant="subtitle2" sx={{ mt: 0.5, mb: 1.5 }}>
          {fCurrency(product.price)}
        </Typography>

        <NumberInput
          value={quantity}
          onChange={(event, newValue) => setQuantity(newValue)}
          sx={{ width: 108 }}
        />
      </Box>

      <IconButton aria-label="Delete">
        <Iconify icon="solar:trash-bin-minimalistic-outline" />
      </IconButton>
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
          justifyContent: 'space-between',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Box component="span" sx={{ typography: 'body2' }}>
        {label}
      </Box>

      {value}
    </Box>
  );
}
