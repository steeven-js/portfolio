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

export function EcommerceProductViewListItem({ product, sx, ...other }: Props) {
  const renderLabel = () => (
    <Box
      sx={{
        gap: 1,
        top: 8,
        left: 8,
        zIndex: 9,
        display: 'flex',
        position: 'absolute',
      }}
    >
      {product.label === 'new' && <Label color="info">NEW</Label>}
      {product.label === 'sale' && <Label color="error">SALE</Label>}
    </Box>
  );

  const renderAddToCartButton = () => (
    <Fab
      component={RouterLink}
      href={paths.eCommerce.product}
      className="add-to-cart"
      color="primary"
      size="small"
      sx={(theme) => ({
        top: 8,
        right: 8,
        zIndex: 9,
        opacity: 0,
        position: 'absolute',
        transition: theme.transitions.create('opacity', {
          easing: theme.transitions.easing.easeIn,
          duration: theme.transitions.duration.shortest,
        }),
      })}
    >
      <Iconify icon="solar:cart-3-outline" />
    </Fab>
  );

  const renderContent = () => (
    <Box
      sx={{
        gap: 1,
        minWidth: 0,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div>
        <Typography variant="caption" sx={{ mb: 0.5, display: 'block', color: 'text.disabled' }}>
          {product.category}
        </Typography>
        <Link component={RouterLink} href={paths.eCommerce.product} color="inherit" variant="h6">
          {product.name}
        </Link>
      </div>

      <ProductRating value={product.ratingNumber} label={`${product.sold} sold`} />

      <Typography variant="body2" noWrap sx={{ color: 'text.secondary' }}>
        {product.caption}
      </Typography>

      <ProductPrice price={product.price} priceSale={product.priceSale} sx={{ typography: 'h6' }} />
    </Box>
  );

  return (
    <Box
      sx={[
        {
          display: 'flex',
          position: 'relative',
          '&:hover .add-to-cart': { opacity: 1 },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      {(product.label === 'new' || product.label === 'sale') && renderLabel()}

      {renderAddToCartButton()}

      <Image
        alt={product.name}
        src={product.coverUrl}
        disablePlaceholder
        sx={{
          mr: 2.5,
          width: 160,
          flexShrink: 0,
          borderRadius: 1.5,
          bgcolor: 'background.neutral',
        }}
      />

      {renderContent()}
    </Box>
  );
}
