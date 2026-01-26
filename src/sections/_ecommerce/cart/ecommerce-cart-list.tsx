import type { BoxProps } from '@mui/material/Box';
import type { IProductItemProps } from 'src/types/product';

import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';

import { EcommerceCartItem } from './ecommerce-cart-item';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  isWishlist?: boolean;
  products: IProductItemProps[];
};

export function EcommerceCartList({ products, isWishlist = false, sx, ...other }: Props) {
  return (
    <Box
      sx={[
        (theme) => ({
          overflowY: 'hidden',
          scrollbarWidth: 'thin',
          scrollbarColor: `${varAlpha(theme.vars.palette.text.disabledChannel, 0.4)} ${varAlpha(theme.vars.palette.text.disabledChannel, 0.08)}`,
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Box
        sx={(theme) => ({
          py: 2,
          minWidth: 720,
          display: 'flex',
          alignItems: 'center',
          typography: 'subtitle2',
          borderBottom: `solid 1px ${theme.vars.palette.divider}`,
        })}
      >
        <Box sx={{ flexGrow: 1 }}>Items</Box>
        <Box sx={{ width: 160 }}>Qty</Box>
        <Box sx={{ width: 120 }}>Subtotal</Box>
        <Box sx={{ width: 36 }} />
        {isWishlist && <Box sx={{ width: 36 }} />}
      </Box>

      {products.map((product) => (
        <EcommerceCartItem key={product.id} product={product} isWishlist={isWishlist} />
      ))}
    </Box>
  );
}
