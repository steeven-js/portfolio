import type { BoxProps } from '@mui/material/Box';
import type { IProductItemProps } from 'src/types/product';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { Image } from 'src/components/image';

import { ProductPrice } from '../../components/product-price';
import { ProductRating } from '../../components/product-rating';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  product: IProductItemProps;
};

export function EcommerceProductItemBestSellers({ product, sx, ...other }: Props) {
  return (
    <Box sx={[{ gap: 2, display: 'flex' }, ...(Array.isArray(sx) ? sx : [sx])]} {...other}>
      <Image
        src={product.coverUrl}
        sx={{
          width: 80,
          height: 80,
          flexShrink: 0,
          borderRadius: 1.5,
          bgcolor: 'background.neutral',
        }}
      />
      <Box
        sx={{
          gap: 0.5,
          minWidth: 0,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Link
          component={RouterLink}
          href={paths.eCommerce.product}
          color="inherit"
          variant="body2"
          noWrap
          sx={{ fontWeight: 'fontWeightMedium' }}
        >
          {product.name}
        </Link>

        <ProductRating value={product.ratingNumber} label={`${product.sold} sold`} />

        <ProductPrice price={product.price} priceSale={product.priceSale} />
      </Box>
    </Box>
  );
}
