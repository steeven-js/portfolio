import type { BoxProps } from '@mui/material/Box';
import type { IProductItemProps } from 'src/types/product';

import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { EcommerceProductItemBestSellers } from '../product/item/ecommerce-product-item-best-sellers';

// ----------------------------------------------------------------------

const TABS = ['Featured', 'Top rated', 'Onsale'];

type Props = BoxProps & {
  products: IProductItemProps[];
};

export function EcommerceLandingPopularProducts({ products, sx, ...other }: Props) {
  const [tab, setTab] = useState(TABS[0]);

  const handleChangeTab = useCallback((event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  }, []);

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
        <Typography variant="h3" sx={{ textAlign: { xs: 'center', md: 'unset' } }}>
          Popular products
        </Typography>

        <Tabs
          value={tab}
          scrollButtons="auto"
          variant="scrollable"
          allowScrollButtonsMobile
          onChange={handleChangeTab}
          sx={{ my: 5 }}
          slotProps={{
            list: {
              sx: {
                justifyContent: { xs: 'center', sm: 'flex-start' },
              },
            },
          }}
        >
          {TABS.map((category) => (
            <Tab key={category} value={category} label={category} />
          ))}
        </Tabs>

        <Box
          sx={{
            gap: 3,
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
          }}
        >
          {products.map((product) => (
            <EcommerceProductItemBestSellers key={product.id} product={product} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
