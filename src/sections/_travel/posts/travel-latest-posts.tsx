import type { BoxProps } from '@mui/material/Box';
import type { IPostProps } from 'src/types/blog';

import { Fragment } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { fDate } from 'src/utils/format-time';

import { Image } from 'src/components/image';
import { Iconify } from 'src/components/iconify';

import { PostTime } from '../../blog/post-time';
import { PostItemMobile } from '../../blog/post-item-mobile';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  posts: IPostProps[];
};

export function TravelLatestPosts({ posts, sx, ...other }: Props) {
  const renderHeader = () => (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 5, md: 8 } }}>
      <Typography variant="h3" sx={{ flexGrow: 1 }}>
        Latest posts
      </Typography>

      <Button
        component={RouterLink}
        href={paths.travel.posts}
        color="inherit"
        endIcon={<Iconify icon="carbon:chevron-right" />}
      >
        View all
      </Button>
    </Box>
  );

  const renderList = () => (
    <Box
      sx={{
        gap: 3,
        display: 'grid',
        gridTemplateColumns: {
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(4, 1fr)',
        },
      }}
    >
      {posts.map((post) => (
        <Fragment key={post.id}>
          <PostItem post={post} sx={{ display: { xs: 'none', md: 'block' } }} />
          <PostItemMobile post={post} sx={{ display: { xs: 'flex', md: 'none' } }} />
        </Fragment>
      ))}
    </Box>
  );

  return (
    <Box
      component="section"
      sx={[
        {
          py: { xs: 10, md: 15 },
          bgcolor: 'background.neutral',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container>
        {renderHeader()}
        {renderList()}
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

type PostItemProps = BoxProps & {
  post: IPostProps;
};

export function PostItem({ post, sx, ...other }: PostItemProps) {
  return (
    <Box sx={sx} {...other}>
      <Image src={post.coverUrl} alt={post.title} ratio="1/1" sx={{ borderRadius: 2 }} />

      <Box sx={{ my: 2.5 }}>
        <PostTime createdAt={fDate(post.createdAt)} duration={post.duration} sx={{ mb: 1 }} />

        <Link
          component={RouterLink}
          href={paths.travel.post}
          color="inherit"
          variant="h6"
          sx={(theme) => ({
            ...theme.mixins.maxLine({ line: 2, persistent: theme.typography.h6 }),
          })}
        >
          {post.title}
        </Link>
      </Box>

      <Box
        sx={{
          gap: 1.5,
          display: 'flex',
          typography: 'body2',
          alignItems: 'center',
        }}
      >
        <Avatar alt={post.author.name} src={post.author.avatarUrl} sx={{ width: 40, height: 40 }} />
        {post.author.name}
      </Box>
    </Box>
  );
}
