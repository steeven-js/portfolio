import type { BoxProps } from '@mui/material/Box';

import { useEffect } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { Image } from 'src/components/image';
import { Lightbox, useLightbox } from 'src/components/lightbox';
import { Carousel, useCarousel, CarouselArrowBasicButtons } from 'src/components/carousel';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  images: string[];
};

export function MarketingCaseStudyDetailsGallery({ images, sx, ...other }: Props) {
  const slides = images.map((slide) => ({ src: slide }));

  const lightbox = useLightbox(slides);

  const carousel = useCarousel({
    slidesToShow: { xs: 1, sm: 2, md: 3 },
    slideSpacing: '16px',
  });

  useEffect(() => {
    if (lightbox.open) {
      carousel.mainApi?.scrollTo(lightbox.selected, true);
    }
  }, [carousel.mainApi, lightbox.open, lightbox.selected]);

  return (
    <>
      <Box sx={[{ mt: 3 }, ...(Array.isArray(sx) ? sx : [sx])]} {...other}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 5 }}>
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            Gallery
          </Typography>
          <CarouselArrowBasicButtons {...carousel.arrows} options={carousel.options} />
        </Box>

        <Carousel carousel={carousel}>
          {slides.map((slide) => (
            <Image
              key={slide.src}
              alt={slide.src}
              src={slide.src}
              ratio="4/3"
              onClick={() => lightbox.onOpen(slide.src)}
              sx={{ borderRadius: 2, cursor: 'pointer' }}
            />
          ))}
        </Carousel>
      </Box>

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
