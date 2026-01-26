import type { BoxProps } from '@mui/material/Box';
import type { StackProps } from '@mui/material/Stack';
import type { Theme, SxProps } from '@mui/material/styles';
import type { IProductItemCompareProps } from 'src/types/product';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import { svgIconClasses } from '@mui/material/SvgIcon';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { fCurrency } from 'src/utils/format-number';

import { Image } from 'src/components/image';

// ----------------------------------------------------------------------

type Props = StackProps & {
  products: IProductItemCompareProps[];
};

export function EcommerceCompareList({ products, sx, ...other }: Props) {
  return (
    <Box
      sx={[
        {
          '--column-gap': '48px',
          rowGap: 3,
          display: 'grid',
          columnGap: 'var(--column-gap)',
          gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(3, 1fr)' },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      {products.map((product) => (
        <EcommerceCompareItem key={product.id} product={product} />
      ))}
    </Box>
  );
}

// ----------------------------------------------------------------------

type EcommerceCompareItemProps = BoxProps & {
  product: IProductItemCompareProps;
};

const dividerStyles = (theme: Theme): SxProps<Theme> => ({
  top: 0,
  width: '1px',
  content: "''",
  height: '100%',
  position: 'absolute',
  display: { xs: 'none', sm: 'block' },
  right: 'calc(var(--column-gap) / -2)',
  borderRight: `1px dashed ${theme.vars.palette.divider}`,
});

export function EcommerceCompareItem({ product, sx, ...other }: EcommerceCompareItemProps) {
  return (
    <Box
      sx={[
        (theme) => ({
          gap: 3,
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          position: 'relative',
          '&:not(:last-of-type)::before': dividerStyles(theme),
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Image
        alt={product.name}
        src={product.coverUrl}
        ratio="1/1"
        sx={{ borderRadius: 1.5, bgcolor: 'background.neutral' }}
      />

      <div>
        <Box component="span" sx={{ display: 'block', typography: 'subtitle2' }}>
          {product.name}
        </Box>
        <Box
          component="span"
          sx={{ my: 1, display: 'block', typography: { xs: 'subtitle2', md: 'h6' } }}
        >
          {fCurrency(product.price)}
        </Box>
        <Rating
          readOnly
          size="small"
          precision={0.5}
          value={product.ratingNumber}
          sx={{
            [`& .${svgIconClasses.root}`]: {
              width: { xs: 12, md: 20 },
              height: { xs: 12, md: 20 },
            },
          }}
        />
      </div>

      <Button
        component={RouterLink}
        href={paths.eCommerce.cart}
        fullWidth
        size="large"
        color="inherit"
        variant="contained"
        sx={{ px: 0 }}
      >
        Buy now
      </Button>

      {product.details.map((feature, index) => (
        <Box key={index} sx={{ typography: { xs: 'caption', md: 'body2' } }}>
          {feature || '-'}
        </Box>
      ))}
    </Box>
  );
}
