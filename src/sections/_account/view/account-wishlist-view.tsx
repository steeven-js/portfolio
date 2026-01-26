import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { _products } from 'src/_mock';

import { Iconify } from 'src/components/iconify';

import { EcommerceCartList } from '../../_ecommerce/cart/ecommerce-cart-list';

// ----------------------------------------------------------------------

export function AccountWishlistView() {
  return (
    <>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Wishlist
      </Typography>

      <EcommerceCartList isWishlist products={_products.slice(0, 4)} />

      <Box
        sx={{
          mt: 3,
          width: 1,
          ml: 'auto',
          maxWidth: { sm: 240 },
        }}
      >
        <Box
          sx={{
            mb: 3,
            typography: 'h6',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box component="span" sx={{ flexGrow: 1 }}>
            Subtotal
          </Box>
          $58.07
        </Box>

        <Button
          component={RouterLink}
          href={paths.eCommerce.cart}
          fullWidth
          size="large"
          color="inherit"
          variant="contained"
          startIcon={<Iconify icon="solar:cart-3-outline" />}
        >
          Add to cart
        </Button>
      </Box>
    </>
  );
}
