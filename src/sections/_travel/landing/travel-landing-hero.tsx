import type { BoxProps } from '@mui/material/Box';
import type { ITourProps } from 'src/types/tour';

import Fade from 'embla-carousel-fade';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { fCurrency } from 'src/utils/format-number';

import { Iconify } from 'src/components/iconify';
import { Carousel, useCarousel, CarouselThumbs, CarouselDotButtons } from 'src/components/carousel';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  tours: ITourProps[];
};

export function TravelLandingHero({ tours, sx, ...other }: Props) {
  const carousel = useCarousel(
    {
      loop: true,
      duration: 40,
      thumbs: { loop: true, axis: 'y', slideSpacing: '0px', slidesToShow: 'auto' },
    },
    [Fade()]
  );

  return (
    <Box
      sx={[{ position: 'relative', bgcolor: 'common.black' }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...other}
    >
      <Carousel carousel={carousel}>
        {tours.map((tour) => (
          <CarouselItem key={tour.id} tour={tour} />
        ))}
      </Carousel>

      <CarouselDotButtons
        variant="rounded"
        scrollSnaps={carousel.dots.scrollSnaps}
        selectedIndex={carousel.dots.selectedIndex}
        onClickDot={carousel.dots.onClickDot}
        sx={{
          left: 0,
          right: 0,
          bottom: 64,
          position: 'absolute',
          color: 'primary.main',
          justifyContent: 'center',
          display: { xs: 'inline-flex', md: 'none' },
        }}
      />

      <CarouselThumbs
        ref={carousel.thumbs.thumbsRef}
        options={carousel.options?.thumbs}
        slotProps={{ disableMask: true }}
        sx={{
          p: 0,
          zIndex: 9,
          top: '50%',
          height: 76 * 3,
          position: 'absolute',
          transform: 'translateY(-50%)',
          display: { xs: 'none', md: 'flex' },
          right: { xs: 20, lg: '6%', xl: '10%' },
        }}
      >
        {tours.map((tour, index) => (
          <ThumbnailItem
            key={tour.id}
            tour={tour}
            selected={index === carousel.thumbs.selectedIndex}
            onClick={() => carousel.thumbs.onClickThumb(index)}
          />
        ))}
      </CarouselThumbs>
    </Box>
  );
}

// ----------------------------------------------------------------------

type CarouselItemProps = BoxProps & {
  tour: ITourProps;
};

function CarouselItem({ tour, sx, ...other }: CarouselItemProps) {
  return (
    <Box
      sx={[
        (theme) => ({
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          flexDirection: 'column',
          justifyContent: 'center',
          '&::before': {
            top: 0,
            left: 0,
            width: 1,
            height: 1,
            zIndex: 8,
            content: "''",
            position: 'absolute',
            backgroundImage: `linear-gradient(to bottom, transparent 0%, ${theme.vars.palette.common.black} 75%)`,
          },
          [theme.breakpoints.up('md')]: { minHeight: 760, height: '100vh', maxHeight: 1440 },
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Box
        sx={{
          gap: 5,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          px: 2,
          py: 16,
          zIndex: 9,
          textAlign: 'center',
          position: 'relative',
          color: 'common.white',
        }}
      >
        <Typography variant="overline" sx={{ color: 'info.main' }}>
          {tour.location}
        </Typography>

        <Typography variant="h2" component="h1" sx={{ maxWidth: 480 }}>
          {tour.slug}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: { xs: 2.5, md: 5 },
          }}
        >
          <Box
            sx={{
              gap: 1,
              display: 'flex',
              alignItems: 'center',
              typography: 'subtitle2',
            }}
          >
            <Iconify width={24} icon="solar:clock-circle-outline" sx={{ color: 'primary.main' }} />
            {tour.duration}
          </Box>

          <Box
            sx={{
              gap: 1,
              display: 'flex',
              alignItems: 'center',
              typography: 'subtitle2',
            }}
          >
            <Iconify width={24} icon="eva:star-fill" sx={{ color: 'primary.main' }} />
            {`${tour.ratingNumber} reviews`}
          </Box>

          <Box
            sx={{
              gap: 1,
              display: 'flex',
              alignItems: 'center',
              typography: 'subtitle2',
            }}
          >
            <Iconify width={24} icon="carbon:currency" sx={{ color: 'primary.main' }} />
            {`Starting at ${fCurrency(tour.price)}`}
          </Box>
        </Box>

        <Button variant="contained" size="large" color="primary">
          Book now
        </Button>
      </Box>

      <Box
        component="img"
        alt={tour.slug}
        src={tour.heroUrl}
        sx={{
          top: 0,
          left: 0,
          width: 1,
          height: 1,
          zIndex: 7,
          objectFit: 'cover',
          position: 'absolute',
        }}
      />
    </Box>
  );
}

// ----------------------------------------------------------------------

type ThumbnailItemProps = BoxProps & {
  tour: ITourProps;
  selected?: boolean;
};

function ThumbnailItem({ tour, selected, sx, ...other }: ThumbnailItemProps) {
  return (
    <Box
      sx={[
        (theme) => ({
          px: 2,
          py: 1.5,
          gap: 2.5,
          width: 240,
          display: 'flex',
          borderRadius: 2,
          cursor: 'pointer',
          alignItems: 'center',
          color: 'common.white',
          ...(selected && {
            ...theme.mixins.bgBlur({
              color: varAlpha(theme.vars.palette.common.whiteChannel, 0.08),
            }),
          }),
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Box
        component="img"
        alt={tour.slug}
        src={tour.heroUrl}
        sx={{ width: 48, height: 48, borderRadius: '50%' }}
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
        <Typography variant="subtitle1" component="span" noWrap>
          {tour.location}
        </Typography>

        <Box component="span" sx={{ gap: 0.75, display: 'flex', alignItems: 'center' }}>
          <Iconify width={18} icon="carbon:location" sx={{ color: 'primary.main' }} />
          <Typography variant="caption" noWrap sx={{ opacity: 0.48 }}>
            {tour.continent}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
