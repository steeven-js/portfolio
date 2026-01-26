import type { BoxProps } from '@mui/material/Box';

import AutoScroll from 'embla-carousel-auto-scroll';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { SvgColor } from 'src/components/svg-color';
import { Carousel, useCarousel } from 'src/components/carousel';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  brands: {
    id: string;
    name: string;
    image: string;
  }[];
};

export function ElearningOurClients({ brands, sx, ...other }: Props) {
  const carousel = useCarousel(
    {
      loop: true,
      slidesToShow: 'auto',
      slideSpacing: '80px',
    },
    [AutoScroll({ playOnInit: true, speed: 0.5 })]
  );

  return (
    <Box
      component="section"
      sx={[
        {
          pt: 10,
          pb: { xs: 5, md: 10 },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container>
        <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 10 } }}>
          <Typography variant="h2" sx={{ mb: 3 }}>
            We work with
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Quisque aliquet, libero consequat elementum convallis.
          </Typography>
        </Box>

        <Carousel carousel={carousel}>
          {brands.map((brand) => (
            <SvgColor
              key={brand.id}
              src={brand.image}
              sx={{
                width: 106,
                height: 32,
                display: 'flex',
                color: 'text.primary',
              }}
            />
          ))}
        </Carousel>
      </Container>
    </Box>
  );
}
