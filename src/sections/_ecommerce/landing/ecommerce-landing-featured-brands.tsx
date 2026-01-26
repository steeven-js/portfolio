import type { BoxProps } from '@mui/material/Box';
import type { IProductItemProps } from 'src/types/product';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';

import { EcommerceProductItemFeaturedByBrand } from '../product/item/ecommerce-product-item-featured-by-brand';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  products: IProductItemProps[];
};

export function EcommerceLandingFeaturedBrands({ products, sx, ...other }: Props) {
  const renderBrandBox = () => (
    <Paper
      variant="outlined"
      sx={{
        p: 5,
        minHeight: 1,
        borderRadius: 2,
        textAlign: 'center',
        bgcolor: 'transparent',
      }}
    >
      <Iconify width={48} icon="custom:apple" />

      <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
        Apple
      </Typography>

      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        While most people enjoy casino gambling, sports betting, lottery and bingo playing.
      </Typography>

      <Button
        color="inherit"
        endIcon={<Iconify width={16} icon="carbon:chevron-right" sx={{ ml: -0.5 }} />}
        sx={{ mt: 5 }}
      >
        More details
      </Button>
    </Paper>
  );

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
          Featured brands
        </Typography>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 4 }}>{renderBrandBox()}</Grid>

          <Grid size={{ xs: 12, md: 8 }}>
            <Box
              sx={{
                gap: 3,
                display: 'grid',
                gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' },
              }}
            >
              {products.map((product) => (
                <EcommerceProductItemFeaturedByBrand key={product.id} product={product} />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
