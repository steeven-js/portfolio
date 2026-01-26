import type { BoxProps } from '@mui/material/Box';
import type { IPostProps } from 'src/types/blog';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import Pagination, { paginationClasses } from '@mui/material/Pagination';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { fDate } from 'src/utils/format-time';

import { Image } from 'src/components/image';

import { PostTime } from '../../blog/post-time';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  posts: IPostProps[];
};

export function TravelPosts({ posts, sx, ...other }: Props) {
  return (
    <>
      <Box
        sx={[
          {
            display: 'grid',
            columnGap: 4,
            rowGap: { xs: 4, md: 5 },
            gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' },
          },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
        {...other}
      >
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </Box>

      <Pagination
        count={10}
        sx={{
          my: { xs: 5, md: 10 },
          [`& .${paginationClasses.ul}`]: { justifyContent: 'center' },
        }}
      />
    </>
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
          variant="h5"
          sx={(theme) => ({
            ...theme.mixins.maxLine({ line: 2, persistent: theme.typography.h5 }),
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
        <Avatar src={post.author.avatarUrl} />
        {post.author.name}
      </Box>
    </Box>
  );
}
