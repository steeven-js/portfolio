import type { BoxProps } from '@mui/material/Box';
import type { IProductItemHeroProps } from 'src/types/product';

import Fade from 'embla-carousel-fade';
import Autoplay from 'embla-carousel-autoplay';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { CONFIG } from 'src/global-config';
import { _productsCarousel } from 'src/_mock';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';
import {
  Carousel,
  useCarousel,
  CarouselDotButtons,
  CarouselArrowBasicButtons,
} from 'src/components/carousel';

// ----------------------------------------------------------------------

export function EcommerceLandingHero({ sx, ...other }: BoxProps) {
  const carousel = useCarousel(
    {
      loop: true,
      duration: 80,
    },
    [Autoplay({ delay: 5000 }), Fade()]
  );

  return (
    <Box
      component="section"
      sx={[
        (theme) => ({
          ...theme.mixins.bgGradient({
            images: [
              `linear-gradient(to bottom, ${varAlpha(theme.vars.palette.common.blackChannel, 0.8)}, ${varAlpha(theme.vars.palette.common.blackChannel, 0.8)})`,
              `url(${CONFIG.assetsDir}/assets/background/overlay-2.webp)`,
            ],
          }),
          overflow: 'hidden',
          position: 'relative',
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Box
        component="img"
        alt="Texture"
        src={`${CONFIG.assetsDir}/assets/background/texture-2.webp`}
        sx={{
          top: 0,
          right: 0,
          height: 1,
          width: 'auto',
          position: 'absolute',
        }}
      />

      <Container sx={{ position: 'relative' }}>
        <Carousel carousel={carousel}>
          {_productsCarousel.map((product, index) => (
            <CarouselItem
              key={product.id}
              product={product}
              selected={carousel.dots.selectedIndex === index}
            />
          ))}
        </Carousel>

        <Box
          sx={{
            px: 2,
            width: 1,
            left: 0,
            bottom: 64,
            display: 'flex',
            alignItems: 'center',
            position: 'absolute',
            justifyContent: 'space-between',
          }}
        >
          <CarouselDotButtons
            variant="rounded"
            scrollSnaps={carousel.dots.scrollSnaps}
            selectedIndex={carousel.dots.selectedIndex}
            onClickDot={carousel.dots.onClickDot}
            sx={{ color: 'primary.main' }}
          />

          <CarouselArrowBasicButtons
            {...carousel.arrows}
            options={carousel.options}
            sx={{ color: 'primary.main' }}
          />
        </Box>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

type CarouselItemProps = {
  selected: boolean;
  product: IProductItemHeroProps;
};

export function CarouselItem({ product, selected }: CarouselItemProps) {
  return (
    <Box
      sx={[
        (theme) => ({
          gap: 8,
          py: 15,
          opacity: 0,
          minHeight: 720,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: { xs: 'column', md: 'row' },
          transition: theme.transitions.create(['opacity'], {
            easing: theme.transitions.easing.easeIn,
            duration: theme.transitions.duration.complex,
          }),
          ...(selected && { opacity: 1 }),
        }),
      ]}
    >
      <Box
        sx={{
          maxWidth: 440,
          color: 'common.white',
          mx: { xs: 'auto', md: 'unset' },
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        <Label variant="filled" color="warning" sx={{ mb: 2 }}>
          {product.label}
        </Label>

        <Typography component="h3" variant="h2" sx={{ mb: 2 }}>
          {product.name}
        </Typography>

        <Typography
          variant="body2"
          sx={(theme) => ({ ...theme.mixins.maxLine({ line: 2 }), mb: 5, opacity: 0.72 })}
        >
          {product.caption}
        </Typography>

        <Button
          component={RouterLink}
          href={paths.eCommerce.product}
          size="large"
          color="primary"
          variant="contained"
          endIcon={<Iconify width={16} icon="carbon:chevron-right" sx={{ ml: -0.5 }} />}
        >
          Shop now
        </Button>
      </Box>

      <Box
        component="img"
        alt={product.name}
        src={product.coverUrl}
        sx={(theme) => ({
          width: 480,
          filter: `drop-shadow(20px 20px 24px ${varAlpha(theme.vars.palette.common.blackChannel, 0.8)})`,
        })}
      />
    </Box>
  );
}
