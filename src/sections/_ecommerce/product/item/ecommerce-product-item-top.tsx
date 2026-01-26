import type { Theme, SxProps } from '@mui/material/styles';
import type { IProductItemProps } from 'src/types/product';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { Image } from 'src/components/image';
import { Iconify } from 'src/components/iconify';

import { ProductPrice } from '../../components/product-price';

// ----------------------------------------------------------------------

type Props = {
  sx?: SxProps<Theme>;
  product: IProductItemProps;
  variant?: 'small' | 'large';
};

export function EcommerceProductItemTop({ product, variant = 'small', sx }: Props) {
  const renderImage = () => <Image alt={product.name} src={product.coverUrl} ratio="1/1" />;

  const renderName = () => <Typography variant="h5">{product.name}</Typography>;

  const priceText = () => (
    <ProductPrice price={product.price} sx={{ typography: 'h5', color: 'text.disabled' }} />
  );

  const renderButton = () => (
    <Button
      component={RouterLink}
      href={paths.eCommerce.product}
      color="inherit"
      endIcon={<Iconify icon="carbon:chevron-right" />}
      sx={{
        mt: 'auto',
        flexShrink: 0,
        alignSelf: { xs: 'flex-end', sm: 'flex-start' },
      }}
    >
      More details
    </Button>
  );

  const renderLargeItem = () => (
    <Box sx={{ gap: 5, display: 'flex', flexDirection: 'column' }}>
      {renderImage()}

      <Box sx={{ gap: 5, display: 'flex', alignItems: 'flex-end' }}>
        <Box
          sx={{
            gap: 1,
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {renderName()}
          {priceText()}
        </Box>

        {renderButton()}
      </Box>
    </Box>
  );

  const renderSmallItem = () => (
    <Box
      sx={{
        gap: 3,
        height: 1,
        display: 'grid',
        gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' },
      }}
    >
      <Box sx={{ display: 'inline-flex', order: { sm: 2 } }}>{renderImage()}</Box>
      <Box sx={{ gap: 1, display: 'flex', flexDirection: 'column' }}>
        {renderName()}
        {priceText()}
        {renderButton()}
      </Box>
    </Box>
  );

  return (
    <Paper
      sx={[
        {
          p: 5,
          borderRadius: 2,
          bgcolor: 'background.neutral',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {variant === 'large' ? renderLargeItem() : renderSmallItem()}
    </Paper>
  );
}
