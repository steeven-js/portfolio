import type { BoxProps } from '@mui/material/Box';
import type { PaperProps } from '@mui/material/Paper';
import type { IPostProps } from 'src/types/blog';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Pagination, { paginationClasses } from '@mui/material/Pagination';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { fDate } from 'src/utils/format-time';

import { Image } from 'src/components/image';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  posts: IPostProps[];
};

export function ElearningPosts({ posts, sx, ...other }: Props) {
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

type PostItemProps = PaperProps & {
  post: IPostProps;
};

export function PostItem({ post, sx, ...other }: PostItemProps) {
  return (
    <Paper
      variant="outlined"
      sx={[
        {
          borderRadius: 2,
          overflow: 'hidden',
          bgcolor: 'transparent',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Image src={post.coverUrl} alt={post.title} ratio="1/1" />
      <Box sx={{ display: 'flex', gap: 3, p: 3 }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="subtitle2" component="span">
            {fDate(post.createdAt, 'MMM')}
          </Typography>
          <Divider sx={{ mt: 1, mb: 0.5 }} />
          <Typography variant="h3" component="span">
            {fDate(post.createdAt, 'DD')}
          </Typography>
        </Box>

        <Box
          sx={{
            gap: 1,
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
          }}
        >
          <Link
            component={RouterLink}
            href={paths.eLearning.post}
            color="inherit"
            variant="h6"
            sx={(theme) => ({
              ...theme.mixins.maxLine({ line: 2, persistent: theme.typography.h6 }),
            })}
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

          <Box
            sx={{
              pt: 1.5,
              gap: 1.5,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Avatar src={post.author.avatarUrl} />
            <Box sx={{ gap: 0.5, display: 'flex', flexDirection: 'column' }}>
              <Box component="span" sx={{ typography: 'body2' }}>
                {post.author.name}
              </Box>

              <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                {post.duration}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}
