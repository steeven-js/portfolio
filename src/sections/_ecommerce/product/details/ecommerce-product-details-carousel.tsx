import type { BoxProps } from '@mui/material/Box';

import { useEffect } from 'react';

import Box from '@mui/material/Box';

import { Image } from 'src/components/image';
import { Lightbox, useLightbox } from 'src/components/lightbox';
import {
  Carousel,
  useCarousel,
  CarouselThumb,
  CarouselThumbs,
  CarouselArrowFloatButtons,
} from 'src/components/carousel';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  images: string[];
};

export function EcommerceProductDetailsCarousel({ images, sx, ...other }: Props) {
  const carousel = useCarousel({
    thumbs: { slidesToShow: 'auto' },
  });

  const slides = images?.map((img) => ({ src: img })) || [];

  const lightbox = useLightbox(slides);

  useEffect(() => {
    if (lightbox.open) {
      carousel.mainApi?.scrollTo(lightbox.selected, true);
    }
  }, [carousel.mainApi, lightbox.open, lightbox.selected]);

  return (
    <>
      <Box
        sx={[
          {
            mb: 2.5,
            borderRadius: 2,
            position: 'relative',
            bgcolor: 'background.neutral',
          },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
        {...other}
      >
        <CarouselArrowFloatButtons
          {...carousel.arrows}
          options={carousel.options}
          slotProps={{
            prevBtn: { sx: { left: 24 } },
            nextBtn: { sx: { right: 24 } },
          }}
          sx={{
            borderRadius: '50%',
            color: 'action.active',
            bgcolor: 'transparent',
          }}
        />

        <Carousel
          carousel={carousel}
          sx={{ borderRadius: 2 }}
          slotProps={{ slide: { display: 'flex' } }}
        >
          {slides.map((slide) => (
            <Image
              key={slide.src}
              alt={slide.src}
              src={slide.src}
              ratio="1/1"
              disablePlaceholder
              onClick={() => lightbox.onOpen(slide.src)}
              sx={{ cursor: 'zoom-in', minWidth: 320 }}
            />
          ))}
        </Carousel>
      </Box>

      <CarouselThumbs
        ref={carousel.thumbs.thumbsRef}
        options={carousel.options?.thumbs}
        slotProps={{ disableMask: true }}
        sx={{ width: { xs: 1, sm: 360 } }}
      >
        {slides.map((item, index) => (
          <CarouselThumb
            key={item.src}
            index={index}
            src={item.src}
            selected={index === carousel.thumbs.selectedIndex}
            onClick={() => carousel.thumbs.onClickThumb(index)}
          />
        ))}
      </CarouselThumbs>

      <Lightbox
        index={lightbox.selected}
        slides={slides}
        open={lightbox.open}
        close={lightbox.onClose}
        onGetCurrentIndex={(index) => lightbox.setSelected(index)}
      />
    </>
  );
}
