import type { BoxProps } from '@mui/material/Box';
import type { IPostProps } from 'src/types/blog';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { fDate } from 'src/utils/format-time';

import { Image } from 'src/components/image';

import { PostTime } from '../../blog/post-time';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  largePost: IPostProps;
  smallPosts: IPostProps[];
};

export function TravelFeaturedPosts({ largePost, smallPosts, sx, ...other }: Props) {
  return (
    <Box
      component="section"
      sx={[
        {
          pb: 10,
          pt: { xs: 0, md: 5 },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container>
        <Box
          sx={{
            gap: 3,
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' },
          }}
        >
          <PostItem post={largePost} isLargePost />

          <Box
            sx={{
              gap: 3,
              display: 'grid',
              gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' },
            }}
          >
            {smallPosts.map((post) => (
              <PostItem key={post.id} post={post} />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

type PostItemProps = BoxProps & {
  post: IPostProps;
  isLargePost?: boolean;
};

export function PostItem({ post, isLargePost, sx, ...other }: PostItemProps) {
  const renderContent = () => (
    <Box
      sx={{
        p: 3,
        gap: 1,
        bottom: 0,
        zIndex: 9,
        display: 'flex',
        position: 'absolute',
        color: 'common.white',
        flexDirection: 'column',
        ...(isLargePost && { p: { xs: 3, md: 5 } }),
      }}
    >
      <PostTime
        createdAt={fDate(post.createdAt)}
        duration={post.duration}
        sx={{ color: 'inherit', opacity: 0.72 }}
      />

      <Link
        component={RouterLink}
        href={paths.travel.post}
        color="inherit"
        sx={(theme) => ({
          ...theme.mixins.maxLine({ line: 2 }),
          typography: 'h6',
          ...(isLargePost && { typography: { xs: 'h6', md: 'h4' } }),
        })}
      >
        {post.title}
      </Link>

      {isLargePost && (
        <Typography sx={(theme) => ({ ...theme.mixins.maxLine({ line: 2 }), opacity: 0.48 })}>
          {post.description}
        </Typography>
      )}

      <Box
        sx={{
          pt: 1.5,
          gap: 1.5,
          display: 'flex',
          typography: 'body2',
          alignItems: 'center',
        }}
      >
        <Avatar
          src={post.author.avatarUrl}
          sx={(theme) => ({
            width: 32,
            height: 32,
            ...(isLargePost && { [theme.breakpoints.up('md')]: { width: 40, height: 40 } }),
          })}
        />
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
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Image
        alt={post.title}
        src={post.coverUrl}
        ratio="1/1"
        slotProps={{
          overlay: {
            sx: (theme) => ({
              backgroundImage: `linear-gradient(to bottom, transparent 0%, ${theme.vars.palette.common.black} 75%)`,
            }),
          },
        }}
      />

      {renderContent()}
    </Box>
  );
}
