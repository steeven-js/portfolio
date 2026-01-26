import type { Theme, SxProps } from '@mui/material/styles';
import type { IProductItemProps } from 'src/types/product';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { Image } from 'src/components/image';

import { ProductPrice } from '../../components/product-price';

// ----------------------------------------------------------------------

type Props = {
  sx?: SxProps<Theme>;
  isHot?: boolean;
  product: IProductItemProps;
};

export function EcommerceProductItemHot({ product, isHot = false, sx }: Props) {
  return (
    <Link component={RouterLink} href={paths.eCommerce.product} color="inherit" underline="none">
      <Paper
        variant="outlined"
        sx={[
          (theme) => ({
            p: 2,
            borderRadius: 2,
            bgcolor: 'transparent',
            transition: theme.transitions.create('background-color', {
              easing: theme.transitions.easing.easeIn,
              duration: theme.transitions.duration.shortest,
            }),
            '&:hover': { bgcolor: 'background.neutral' },
          }),
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
      >
        <Image
          alt={product.name}
          src={product.coverUrl}
          ratio="1/1"
          sx={{ mb: 2, borderRadius: 1.5, bgcolor: 'background.neutral' }}
        />

        <div>
          <Typography variant="body2" noWrap sx={{ mb: 0.5, fontWeight: 'fontWeightMedium' }}>
            {product.name}
          </Typography>

          <ProductPrice price={product.price} sx={{ ...(isHot && { color: 'error.main' }) }} />
        </div>

        {isHot && (
          <Box
            sx={{
              mt: 1,
              gap: 1,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <LinearProgress
              color="inherit"
              variant="determinate"
              value={(product.sold / product.stock) * 100}
              sx={{ flex: '1 1 auto' }}
            />

            <Typography
              variant="caption"
              sx={{ flexShrink: 0, color: 'text.disabled' }}
            >{`🔥 ${product.sold} sold`}</Typography>
          </Box>
        )}
      </Paper>
    </Link>
  );
}
