import type { BoxProps } from '@mui/material/Box';
import type { IProductItemProps } from 'src/types/product';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { fAdd } from 'src/utils/format-time';

import {
  Carousel,
  useCarousel,
  CarouselDotButtons,
  CarouselArrowBasicButtons,
} from 'src/components/carousel';

import { ProductCountdownBlock } from '../components/product-countdown-block';
import { EcommerceProductItemHot } from '../product/item/ecommerce-product-item-hot';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  products: IProductItemProps[];
};

export function EcommerceLandingHotDealToday({ products, sx, ...other }: Props) {
  const carousel = useCarousel({
    slidesToShow: { xs: 2, sm: 3, md: 4, lg: 6 },
    slidesToScroll: 2,
    slideSpacing: '24px',
  });

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
        <Box
          sx={{
            mb: 5,
            gap: 3,
            display: 'flex',
            alignItems: 'center',
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          <Typography variant="h3" sx={{ textAlign: { xs: 'center', md: 'unset' } }}>
            🔥 Hot deal today
          </Typography>

          <ProductCountdownBlock
            hideDays
            labelPlacement="inline"
            expired={new Date(fAdd({ hours: 1, minutes: 30 }))}
            width={44}
            height={32}
            slotProps={{ value: { bgcolor: 'text.primary', color: 'background.paper' } }}
          />

          <Box sx={{ flexGrow: 1 }} />

          <CarouselArrowBasicButtons
            {...carousel.arrows}
            options={carousel.options}
            sx={{ display: { xs: 'none', md: 'inline-flex' } }}
          />
        </Box>

        <Carousel carousel={carousel}>
          {products.map((product) => (
            <EcommerceProductItemHot key={product.id} product={product} isHot />
          ))}
        </Carousel>

        <CarouselDotButtons
          scrollSnaps={carousel.dots.scrollSnaps}
          selectedIndex={carousel.dots.selectedIndex}
          onClickDot={carousel.dots.onClickDot}
          sx={{
            mt: 8,
            width: 1,
            color: 'primary.main',
            justifyContent: 'center',
            display: { xs: 'inline-flex', md: 'none' },
          }}
        />
      </Container>
    </Box>
  );
}
