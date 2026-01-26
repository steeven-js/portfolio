import type { BoxProps } from '@mui/material/Box';
import type { Theme, SxProps } from '@mui/material/styles';
import type { IProductItemProps } from 'src/types/product';

import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { fAdd } from 'src/utils/format-time';
import { fCurrency } from 'src/utils/format-number';

import { Image } from 'src/components/image';

import { ProductCountdownBlock } from '../../components/product-countdown-block';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  sx?: SxProps<Theme>;
  product: IProductItemProps;
};

export function EcommerceProductItemCountDown({ product, sx, ...other }: Props) {
  return (
    <Box
      sx={[
        (theme) => ({
          p: 3,
          minWidth: 0,
          borderRadius: 2,
          color: 'primary.darker',
          bgcolor: 'primary.lighter',
          transition: theme.transitions.create('background-color', {
            easing: theme.transitions.easing.easeIn,
            duration: theme.transitions.duration.shortest,
          }),
          '&:hover': { bgcolor: 'primary.light' },
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Image
        alt={product.name}
        src={product.coverUrl}
        ratio="1/1"
        disablePlaceholder
        sx={(theme) => ({
          filter: `drop-shadow(20px 20px 24px ${varAlpha(theme.vars.palette.common.blackChannel, 0.16)})`,
        })}
      />

      <Box
        sx={{
          my: 3,
          display: 'flex',
          textAlign: 'center',
          flexDirection: 'column',
        }}
      >
        <Link
          component={RouterLink}
          href={paths.eCommerce.product}
          color="inherit"
          underline="none"
          variant="subtitle2"
          noWrap
          sx={{ mb: 1, opacity: 0.72 }}
        >
          {product.name}
        </Link>

        <Typography variant="h5">{`From ${fCurrency(product.price)}`}</Typography>
      </Box>

      <ProductCountdownBlock expired={new Date(fAdd({ days: 1, hours: 8 }))} />
    </Box>
  );
}
