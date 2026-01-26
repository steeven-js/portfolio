import type { PaperProps } from '@mui/material/Paper';
import type { IProductItemProps } from 'src/types/product';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { Image } from 'src/components/image';

import { ProductPrice } from '../../components/product-price';

// ----------------------------------------------------------------------

type Props = PaperProps & {
  product: IProductItemProps;
};

export function EcommerceProductItemFeaturedByBrand({ product, sx, ...other }: Props) {
  return (
    <Paper
      variant="outlined"
      sx={[
        {
          p: 2,
          gap: 2,
          minWidth: 0,
          borderRadius: 2,
          display: 'flex',
          bgcolor: 'transparent',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Image
        src={product.coverUrl}
        sx={{
          width: 128,
          height: 128,
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
          flex: '1 1 auto',
          flexDirection: 'column',
        }}
      >
        <Typography variant="body2" noWrap sx={{ fontWeight: 'fontWeightMedium' }}>
          {product.name}
        </Typography>

        <Typography variant="caption" noWrap sx={{ color: 'text.disabled' }}>
          {product.category}
        </Typography>

        <ProductPrice price={product.price} priceSale={product.priceSale} />

        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
          }}
        >
          <Button
            component={RouterLink}
            href={paths.eCommerce.product}
            size="small"
            color="inherit"
            variant="outlined"
          >
            Buy now
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
