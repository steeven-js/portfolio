import type { BoxProps } from '@mui/material/Box';
import type { IPostProps } from 'src/types/blog';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { fDate } from 'src/utils/format-time';

import { Image } from 'src/components/image';
import { Iconify } from 'src/components/iconify';

import { PostTime } from '../../blog/post-time';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  posts: IPostProps[];
};

export function CareerPosts({ posts, sx, ...other }: Props) {
  return (
    <>
      <Box
        sx={[
          {
            columnGap: 4,
            columnCount: { xs: 1, md: 2 },
            mb: { xs: 1, md: 5 },
          },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
        {...other}
      >
        {posts.map((post, index) => (
          <PostItem key={post.id} post={post} index={index} sx={{ breakInside: 'avoid', mb: 4 }} />
        ))}
      </Box>

      <Box sx={{ textAlign: 'center' }}>
        <Button
          size="large"
          color="inherit"
          variant="outlined"
          endIcon={<Iconify icon="carbon:arrow-down" />}
        >
          Load more
        </Button>
      </Box>
    </>
  );
}

// ----------------------------------------------------------------------

type PostItemProps = BoxProps & {
  index: number;
  post: IPostProps;
};

export function PostItem({ post, index, sx, ...other }: PostItemProps) {
  const isImageNotVisible = index === 1 || index === 4;
  const isSmallImage = index === 2 || index === 7;

  const renderContent = () => (
    <Box
      sx={{
        p: 3,
        gap: 1,
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'background.neutral',
        ...(isImageNotVisible && { bgcolor: 'primary.lighter' }),
      }}
    >
      <PostTime
        createdAt={fDate(post.createdAt)}
        duration={post.duration}
        sx={{ ...(isImageNotVisible && { color: 'grey.500' }) }}
      />

      <Link
        component={RouterLink}
        href={paths.career.post}
        color="inherit"
        variant="h5"
        sx={{ ...(isImageNotVisible && { color: 'grey.800' }) }}
      >
        {post.title}
      </Link>

      <Typography
        variant="body2"
        sx={{ color: 'text.secondary', ...(isImageNotVisible && { color: 'grey.600' }) }}
      >
        {post.description}
      </Typography>

      <Box
        sx={{
          pt: 1.5,
          gap: 1.5,
          display: 'flex',
          typography: 'body2',
          alignItems: 'center',
          ...(isImageNotVisible && { color: 'grey.800' }),
        }}
      >
        <Avatar src={post.author?.avatarUrl} />
        {post.author?.name}
      </Box>
    </Box>
  );

  return (
    <Box
      sx={[
        {
          borderRadius: 2,
          overflow: 'hidden',
          position: 'relative',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      {!isImageNotVisible && (
        <Image src={post.coverUrl} alt={post.title} ratio={isSmallImage ? '4/3' : '1/1'} />
      )}

      {renderContent()}
    </Box>
  );
}
