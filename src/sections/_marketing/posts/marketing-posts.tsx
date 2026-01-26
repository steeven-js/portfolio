import type { Theme } from '@mui/material/styles';
import type { BoxProps } from '@mui/material/Box';
import type { IPostProps } from 'src/types/blog';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import Pagination, { paginationClasses } from '@mui/material/Pagination';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { fDate } from 'src/utils/format-time';

import { Image, imageClasses } from 'src/components/image';

import { PostTime } from '../../blog/post-time';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  posts: IPostProps[];
};

export function MarketingPosts({ posts, sx, ...other }: Props) {
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

const transition = (theme: Theme) =>
  theme.transitions.create(['transform'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.short,
  });

export function PostItem({ post, sx, ...other }: PostItemProps) {
  const renderContent = () => (
    <Box
      sx={{
        p: 5,
        top: 0,
        left: 0,
        width: 1,
        height: 1,
        zIndex: 9,
        display: 'flex',
        position: 'absolute',
        color: 'common.white',
        flexDirection: 'column',
      }}
    >
      <PostTime
        createdAt={fDate(post.createdAt)}
        duration={post.duration}
        sx={{ mb: 2, color: 'inherit', opacity: 0.72 }}
      />

      <Link
        component={RouterLink}
        href={paths.marketing.post}
        variant="h5"
        color="inherit"
        underline="none"
      >
        {post.title}
      </Link>

      <Box
        sx={{
          gap: 1,
          mt: 'auto',
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

  return (
    <Box
      sx={[
        {
          borderRadius: 2,
          overflow: 'hidden',
          position: 'relative',
          '&:hover': {
            [`& .${imageClasses.root}`]: { transform: 'scale(1.06)' },
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      {renderContent()}

      <Image
        alt={post.title}
        src={post.coverUrl}
        ratio="3/4"
        sx={{ transition }}
        slotProps={{
          overlay: {
            sx: (theme) => ({
              backgroundImage: `linear-gradient(to top, transparent 0%, ${theme.vars.palette.common.black} 75%)`,
            }),
          },
        }}
      />
    </Box>
  );
}
