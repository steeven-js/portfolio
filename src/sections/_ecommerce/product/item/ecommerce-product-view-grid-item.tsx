import type { BoxProps } from '@mui/material/Box';
import type { IProductItemProps } from 'src/types/product';

import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { Label } from 'src/components/label';
import { Image } from 'src/components/image';
import { Iconify } from 'src/components/iconify';

import { ProductPrice } from '../../components/product-price';
import { ProductRating } from '../../components/product-rating';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  product: IProductItemProps;
};

export function EcommerceProductViewGridItem({ product, sx, ...other }: Props) {
  return (
    <Box
      sx={[
        {
          minWidth: 0,
          position: 'relative',
          '&:hover .add-to-cart': { opacity: 1 },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      {(product.label === 'new' || product.label === 'sale') && (
        <Box
          sx={{
            gap: 1,
            top: 8,
            right: 8,
            zIndex: 9,
            display: 'flex',
            position: 'absolute',
          }}
        >
          {product.label === 'new' && <Label color="info">NEW</Label>}
          {product.label === 'sale' && <Label color="error">SALE</Label>}
        </Box>
      )}
      <Box sx={{ position: 'relative', mb: 2 }}>
        <Fab
          component={RouterLink}
          href={paths.eCommerce.product}
          className="add-to-cart"
          color="primary"
          size="small"
          sx={(theme) => ({
            right: 8,
            zIndex: 9,
            bottom: 8,
            opacity: 0,
            position: 'absolute',
            transition: theme.transitions.create('opacity'),
          })}
        >
          <Iconify icon="solar:cart-3-outline" />
        </Fab>

        <Image
          alt={product.name}
          src={product.coverUrl}
          ratio="1/1"
          sx={{ flexShrink: 0, borderRadius: 1.5, bgcolor: 'background.neutral' }}
        />
      </Box>

      <Box sx={{ gap: 0.5, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="caption" noWrap sx={{ color: 'text.disabled' }}>
          {product.category}
        </Typography>

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

        <ProductPrice price={product.price} priceSale={product.priceSale} />

        <ProductRating value={product.ratingNumber} label={`${product.sold} sold`} />
      </Box>
    </Box>
  );
}
