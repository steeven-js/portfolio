import type { BoxProps } from '@mui/material/Box';
import type { Theme, SxProps, Breakpoint } from '@mui/material/styles';

import Fade from 'embla-carousel-fade';
import Autoplay from 'embla-carousel-autoplay';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/global-config';

import { Carousel, useCarousel, CarouselDotButtons } from 'src/components/carousel';

// ----------------------------------------------------------------------

export type AuthSplitSectionProps = BoxProps & {
  title?: string;
  imgUrls?: string[];
  layoutQuery?: Breakpoint;
};

export function AuthSplitSection({
  sx,
  layoutQuery = 'md',
  title = 'Hi, Welcome Back',
  imgUrls = [
    `${CONFIG.assetsDir}/assets/images/auth/auth-1.webp`,
    `${CONFIG.assetsDir}/assets/images/auth/auth-2.webp`,
    `${CONFIG.assetsDir}/assets/images/auth/auth-3.webp`,
  ],
  ...other
}: AuthSplitSectionProps) {
  const carousel = useCarousel(
    {
      loop: true,
      duration: 80,
    },
    [Autoplay({ delay: 5000 }), Fade()]
  );

  const renderCarousel = () => (
    <Carousel
      carousel={carousel}
      sx={{
        top: 0,
        left: 0,
        width: 1,
        height: 1,
        zIndex: 7,
        position: 'absolute',
      }}
    >
      {imgUrls.map((img) => (
        <Box
          key={img}
          component="img"
          alt={img}
          src={img}
          sx={{ width: 1, height: '100vh', objectFit: 'cover' }}
        />
      ))}
    </Carousel>
  );

  const renderFooter = () => (
    <Box
      sx={{
        gap: 10,
        zIndex: 9,
        bottom: 80,
        left: '50%',
        display: 'flex',
        position: 'absolute',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        transform: 'translateX(-50%)',
      }}
    >
      <Typography
        variant="h2"
        sx={(theme) => ({
          ...theme.mixins.textGradient(
            `90deg, ${theme.vars.palette.primary.main} 20%, ${theme.vars.palette.secondary.main} 100%`
          ),
          whiteSpace: 'pre-line',
        })}
      >
        {title}
      </Typography>

      <CarouselDotButtons
        variant="rounded"
        scrollSnaps={carousel.dots.scrollSnaps}
        selectedIndex={carousel.dots.selectedIndex}
        onClickDot={carousel.dots.onClickDot}
        sx={{ color: 'primary.main' }}
      />
    </Box>
  );

  return (
    <Box
      sx={[
        (theme) => ({
          display: 'none',
          flex: '1 1 auto',
          position: 'relative',
          bgcolor: 'common.black',
          '&::before': overlayStyles(theme),
          [theme.breakpoints.up(layoutQuery)]: {
            display: 'flex',
          },
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      {renderCarousel()}
      {renderFooter()}
    </Box>
  );
}

// ----------------------------------------------------------------------

const overlayStyles = (theme: Theme): SxProps<Theme> => ({
  top: 0,
  left: 0,
  width: 1,
  height: 1,
  zIndex: 8,
  content: "''",
  position: 'absolute',
  backgroundImage: `linear-gradient(to bottom, transparent 0%, ${theme.vars.palette.common.black} 75%)`,
});
