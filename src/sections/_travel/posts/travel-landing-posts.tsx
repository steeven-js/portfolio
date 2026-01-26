import type { BoxProps } from '@mui/material/Box';
import type { IPostProps } from 'src/types/blog';

import { Fragment } from 'react';
import Fade from 'embla-carousel-fade';

import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { fDate } from 'src/utils/format-time';

import { Image } from 'src/components/image';
import { Iconify } from 'src/components/iconify';
import {
  Carousel,
  useCarousel,
  CarouselDotButtons,
  CarouselArrowFloatButtons,
} from 'src/components/carousel';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  posts: IPostProps[];
  carouselPosts: IPostProps[];
};

export function TravelLandingPosts({ posts, carouselPosts, sx, ...other }: Props) {
  const carousel = useCarousel(
    {
      loop: true,
      duration: 40,
    },
    [Fade()]
  );

  const renderCarousel = () => (
    <Box sx={{ position: 'relative' }}>
      <CarouselArrowFloatButtons
        {...carousel.arrows}
        options={carousel.options}
        slotProps={{
          prevBtn: { sx: { left: { xs: 16, md: 24 } } },
          nextBtn: { sx: { right: { xs: 16, md: 24 } } },
        }}
        sx={{
          borderRadius: '50%',
          bgcolor: 'transparent',
          display: { xs: 'none', md: 'inline-flex' },
        }}
      />

      <Carousel carousel={carousel}>
        {carouselPosts.map((post) => (
          <PostItemCarousel key={post.id} post={post} />
        ))}
      </Carousel>

      <CarouselDotButtons
        scrollSnaps={carousel.dots.scrollSnaps}
        selectedIndex={carousel.dots.selectedIndex}
        onClickDot={carousel.dots.onClickDot}
        sx={{
          left: '50%',
          position: 'absolute',
          color: 'primary.main',
          bottom: { xs: 64, md: 80 },
          transform: 'translateX(-50%)',
        }}
      />
    </Box>
  );

  const renderContent = () => (
    <Box sx={{ px: { xs: 2.5, sm: 5, md: 8, lg: 15 } }}>
      <Typography
        variant="h2"
        sx={{ my: 10, color: 'common.white', display: { xs: 'none', md: 'block' } }}
      >
        Latest posts
      </Typography>

      <Box sx={{ gap: 3, display: 'flex', flexDirection: 'column' }}>
        {posts.map((post) => (
          <Fragment key={post.id}>
            <PostItem post={post} />
            <Divider sx={{ borderStyle: 'dashed' }} />
          </Fragment>
        ))}
      </Box>

      <Box sx={{ mt: 5, mb: 10, textAlign: { xs: 'center', md: 'right' } }}>
        <Button
          color="primary"
          component={RouterLink}
          href={paths.travel.posts}
          endIcon={<Iconify icon="carbon:chevron-right" />}
        >
          View all
        </Button>
      </Box>
    </Box>
  );

  return (
    <Box
      component="section"
      sx={[
        {
          bgcolor: 'common.black',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Typography
        variant="h2"
        sx={{
          mb: 5,
          mt: 10,
          textAlign: 'center',
          color: 'common.white',
          display: { md: 'none' },
        }}
      >
        Latest posts
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gap: { xs: 5, md: 0 },
          gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' },
        }}
      >
        {renderCarousel()}
        {renderContent()}
      </Box>
    </Box>
  );
}

// ----------------------------------------------------------------------

type PostItemProps = BoxProps & {
  post: IPostProps;
};

export function PostItem({ post, sx, ...other }: PostItemProps) {
  return (
    <Box
      sx={[{ display: 'flex', flexDirection: 'column' }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...other}
    >
      <Typography variant="caption" sx={{ color: 'primary.main' }}>
        {fDate(post.createdAt)}
      </Typography>
      <Link
        component={RouterLink}
        href={paths.travel.post}
        variant="h5"
        sx={{ mt: 1, mb: 2, color: 'common.white' }}
      >
        {post.title}
      </Link>
      <Typography
        variant="body2"
        sx={(theme) => ({
          ...theme.mixins.maxLine({ line: 2, persistent: theme.typography.body2 }),
          color: 'text.secondary',
        })}
      >
        {post.description}
      </Typography>
    </Box>
  );
}

// ----------------------------------------------------------------------

type PostItemCarouselProps = BoxProps & {
  post: IPostProps;
};

export function PostItemCarousel({ post, sx, ...other }: PostItemCarouselProps) {
  const renderImage = () => (
    <Image
      alt={post.title}
      src={post.coverUrl}
      slotProps={{
        overlay: {
          sx: (theme) => ({
            backgroundImage: `linear-gradient(to bottom, transparent 0%, ${theme.vars.palette.common.black} 75%)`,
          }),
        },
      }}
      sx={{ width: 1, height: { xs: 720, md: 960 } }}
    />
  );

  const renderContent = () => (
    <Box
      sx={{
        top: 0,
        left: 0,
        width: 1,
        right: 0,
        zIndex: 9,
        m: 'auto',
        bottom: 0,
        maxWidth: 400,
        display: 'flex',
        textAlign: 'center',
        position: 'absolute',
        alignItems: 'center',
        color: 'common.white',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Typography variant="body2" sx={{ color: 'primary.main' }}>
        {fDate(post.createdAt)}
      </Typography>

      <Typography variant="h3" sx={{ mt: 1, mb: 5 }}>
        {post.title}
      </Typography>

      <Typography sx={{ opacity: 0.72, mb: 10 }}>{post.description}</Typography>

      <Fab component={RouterLink} href={paths.travel.post}>
        <Iconify icon="carbon:chevron-right" />
      </Fab>
    </Box>
  );

  return (
    <Box sx={[{ position: 'relative' }, ...(Array.isArray(sx) ? sx : [sx])]} {...other}>
      {renderContent()}
      {renderImage()}
    </Box>
  );
}
