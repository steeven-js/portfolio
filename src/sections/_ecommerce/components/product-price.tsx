import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';

import { fCurrency } from 'src/utils/format-number';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  price: number;
  priceSale?: number;
};

export function ProductPrice({ price, priceSale = 0, sx, ...other }: Props) {
  return (
    <Box
      component="span"
      sx={[
        {
          gap: 0.5,
          display: 'flex',
          typography: 'subtitle2',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      {fCurrency(price)}

      {priceSale > 0 && (
        <Box
          component="span"
          sx={{
            color: 'text.disabled',
            textDecoration: 'line-through',
            fontWeight: 'fontWeightMedium',
          }}
        >
          {fCurrency(priceSale)}
        </Box>
      )}
    </Box>
  );
}
