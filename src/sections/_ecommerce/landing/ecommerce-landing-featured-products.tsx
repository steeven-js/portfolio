import type { BoxProps } from '@mui/material/Box';
import type { IProductItemProps } from 'src/types/product';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { EcommerceProductItemHot } from '../product/item/ecommerce-product-item-hot';
import { EcommerceProductItemCountDown } from '../product/item/ecommerce-product-item-count-down';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  largeProducts?: IProductItemProps[];
  smallProducts?: IProductItemProps[];
};

export function EcommerceLandingFeaturedProducts({
  sx,
  largeProducts,
  smallProducts,
  ...other
}: Props) {
  return (
    <Box
      component="section"
      sx={[
        {
          py: { xs: 5, md: 8 },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container>
        <Typography
          variant="h3"
          sx={{
            mb: 5,
            textAlign: { xs: 'center', md: 'unset' },
          }}
        >
          Featured products
        </Typography>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, lg: 8 }}>
            <Box
              sx={{
                gap: 3,
                display: 'grid',
                gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' },
              }}
            >
              {largeProducts?.map((product, index) => (
                <EcommerceProductItemCountDown
                  key={product.id}
                  product={product}
                  sx={{
                    ...(index === 1 && {
                      color: 'secondary.darker',
                      bgcolor: 'secondary.lighter',
                      '&:hover': { bgcolor: 'secondary.light' },
                    }),
                  }}
                />
              ))}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, lg: 4 }}>
            <Box
              sx={{
                gap: 3,
                display: 'grid',
                gridTemplateColumns: {
                  xs: 'repeat(2, 1fr)',
                  md: 'repeat(4, 1fr)',
                  lg: 'repeat(2, 1fr)',
                },
              }}
            >
              {smallProducts?.map((product) => (
                <EcommerceProductItemHot key={product.id} product={product} />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
