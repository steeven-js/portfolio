import type { BoxProps } from '@mui/material/Box';
import type { Theme } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { _mock, _tags } from 'src/_mock';

import { Image, imageClasses } from 'src/components/image';
import { Carousel, useCarousel, CarouselArrowBasicButtons } from 'src/components/carousel';

// ----------------------------------------------------------------------

export const TOPICS = Array.from({ length: 8 }, (_, index) => ({
  id: _mock.id(index),
  totalPost: index + 10,
  category: _tags[index],
  cover: _mock.image.travel(index + 4),
}));

// ----------------------------------------------------------------------

export function TravelTrendingTopics({ sx, ...other }: BoxProps) {
  const carousel = useCarousel({
    slidesToShow: { xs: 1, sm: 2, md: 4 },
  });

  return (
    <Box
      component="section"
      sx={[
        {
          py: 10,
          bgcolor: 'background.neutral',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 5, md: 8 } }}>
          <Typography variant="h3" sx={{ flexGrow: 1 }}>
            Trending topics
          </Typography>

          <CarouselArrowBasicButtons {...carousel.arrows} options={carousel.options} />
        </Box>

        <Carousel carousel={carousel}>
          {TOPICS.map((topic) => (
            <Box key={topic.id} sx={{ px: 1.5 }}>
              <TopicItem topic={topic} />
            </Box>
          ))}
        </Carousel>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

type TopicItemProps = BoxProps & {
  topic: (typeof TOPICS)[number];
};

const transition = (theme: Theme) =>
  theme.transitions.create(['opacity', 'transform'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.short,
  });

export function TopicItem({ topic, sx, ...other }: TopicItemProps) {
  const renderContent = () => (
    <Box
      sx={{
        py: 3,
        width: 1,
        zIndex: 9,
        bottom: 0,
        textAlign: 'center',
        position: 'absolute',
        color: 'common.white',
      }}
    >
      <Typography variant="h6">{topic.category}</Typography>
      <Typography variant="body2" sx={{ mt: 0.75, opacity: 0.72 }}>
        {topic.totalPost} posts
      </Typography>
    </Box>
  );

  return (
    <Box
      sx={[
        {
          borderRadius: 2,
          overflow: 'hidden',
          position: 'relative',
          '&:hover': {
            [`& .${imageClasses.root}`]: { transform: 'scale(1.12)' },
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      {renderContent()}

      <Image
        alt={topic.category}
        src={topic.cover}
        ratio="4/3"
        sx={{ transition }}
        slotProps={{
          overlay: {
            sx: (theme) => ({
              backgroundImage: `linear-gradient(to bottom, transparent 0%, ${theme.vars.palette.common.black} 75%)`,
            }),
          },
        }}
      />
    </Box>
  );
}
