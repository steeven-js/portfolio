import type { BoxProps } from '@mui/material/Box';
import type { IPostProps } from 'src/types/blog';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { fDate } from 'src/utils/format-time';

import { Image } from 'src/components/image';
import {
  Carousel,
  useCarousel,
  CarouselDotButtons,
  CarouselArrowFloatButtons,
} from 'src/components/carousel';

import { PostTime } from '../../blog/post-time';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  posts: IPostProps[];
};

export function MarketingFeaturedPosts({ posts, sx, ...other }: Props) {
  const carousel = useCarousel();

  return (
    <Box
      component="section"
      sx={[
        {
          pb: 10,
          position: 'relative',
          pt: { xs: 10, md: 15 },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container>
        <Box sx={{ position: 'relative' }}>
          <CarouselArrowFloatButtons
            {...carousel.arrows}
            options={carousel.options}
            sx={(theme) => ({
              borderRadius: '50%',
              bgcolor: 'primary.main',
              color: 'primary.contrastText',
              display: { xs: 'none', md: 'flex' },
              ...theme.applyStyles('dark', { color: 'primary.contrastText' }),
            })}
          />
          <Carousel carousel={carousel} sx={{ borderRadius: 2, bgcolor: 'background.default' }}>
            {posts.map((post) => (
              <PostItem key={post.id} post={post} />
            ))}
          </Carousel>
        </Box>

        <CarouselDotButtons
          variant="rounded"
          scrollSnaps={carousel.dots.scrollSnaps}
          selectedIndex={carousel.dots.selectedIndex}
          onClickDot={carousel.dots.onClickDot}
          sx={{
            mt: 5,
            width: 1,
            color: 'primary.main',
            justifyContent: 'center',
          }}
        />
      </Container>

      {posts.map(
        (post, index) =>
          index === carousel.dots.selectedIndex && (
            <Image
              key={post.id}
              alt="Post cover"
              src={post.coverUrl}
              slotProps={{
                overlay: {
                  sx: (theme) => ({
                    backgroundImage: `linear-gradient(to bottom, transparent 0%, ${theme.vars.palette.common.black} 75%)`,
                  }),
                },
              }}
              sx={{
                top: 0,
                width: 1,
                height: 1,
                zIndex: -1,
                position: 'absolute',
              }}
            />
          )
      )}
    </Box>
  );
}

// ----------------------------------------------------------------------

type PostItemProps = {
  post: IPostProps;
};

export function PostItem({ post }: PostItemProps) {
  return (
    <Grid container>
      <Grid size={{ xs: 12, md: 8 }}>
        <Box
          component="img"
          alt={post.title}
          src={post.coverUrl}
          sx={{ width: 1, objectFit: 'cover', aspectRatio: '4/3' }}
        />
      </Grid>

      <Grid
        size={{ xs: 12, md: 4 }}
        sx={{ display: 'flex', flexDirection: 'column', p: { xs: 3, md: 5 } }}
      >
        <Box
          sx={{
            gap: 1,
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <PostTime createdAt={fDate(post.createdAt)} duration={post.duration} />

          <Link
            component={RouterLink}
            href={paths.marketing.post}
            color="inherit"
            variant="h4"
            sx={(theme) => ({ ...theme.mixins.maxLine({ line: 3 }) })}
          >
            {post.title}
          </Link>

          <Typography
            variant="body2"
            sx={(theme) => ({
              ...theme.mixins.maxLine({ line: 3, persistent: theme.typography.body2 }),
              color: 'text.secondary',
            })}
          >
            {post.description}
          </Typography>
        </Box>

        <Box
          sx={{
            pt: 2,
            gap: 1.5,
            display: 'flex',
            typography: 'body2',
            alignItems: 'center',
          }}
        >
          <Avatar src={post.author.avatarUrl} />
          {post.author.name}
        </Box>
      </Grid>
    </Grid>
  );
}
