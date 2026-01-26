import type { BoxProps } from '@mui/material/Box';
import type { IPostProps } from 'src/types/blog';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
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
  largePost: IPostProps;
  smallPosts: IPostProps[];
};

export function CareerLatestPosts({ largePost, smallPosts, sx, ...other }: Props) {
  const renderDesktopList = () => (
    <Box
      sx={{
        gap: 4,
        display: { xs: 'none', md: 'grid' },
        gridTemplateColumns: 'repeat(2, 1fr)',
      }}
    >
      <PostItem post={largePost} largePost />

      <Box sx={{ columnGap: 4, columnCount: 2 }}>
        {smallPosts.map((post, index) => (
          <PostItem
            key={post.id}
            post={post}
            order={index % 3}
            sx={{ breakInside: 'avoid', mb: 4 }}
          />
        ))}
      </Box>
    </Box>
  );

  const renderMobileList = () => (
    <>
      <Box
        sx={{
          gap: 3,
          flexDirection: 'column',
          display: { xs: 'flex', md: 'none' },
        }}
      >
        {[largePost, ...smallPosts].map((post) => (
          <PostItemMobile key={post.id} post={post} />
        ))}
      </Box>

      <Box sx={{ mt: 5, textAlign: 'center', display: { md: 'none' } }}>
        <Button
          component={RouterLink}
          href={paths.career.posts}
          color="inherit"
          endIcon={<Iconify icon="carbon:chevron-right" />}
        >
          View all
        </Button>
      </Box>
    </>
  );

  return (
    <Box
      component="section"
      sx={[
        {
          pt: { xs: 5, md: 10 },
          pb: { xs: 10, md: 15 },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            mb: { xs: 5, md: 10 },
            textAlign: { xs: 'center', md: 'left' },
            justifyContent: { xs: 'center', md: 'space-between' },
          }}
        >
          <Box sx={{ maxWidth: { md: 460 } }}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>
              Blog
            </Typography>

            <Typography variant="h2" sx={{ my: 3 }}>
              Read our latest news
            </Typography>

            <Typography sx={{ color: 'text.secondary' }}>
              Aenean vulputate eleifend tellus. Mauris turpis nunc, blandit et, volutpat molestie,
              porta ut, ligula.
            </Typography>
          </Box>

          <Button
            component={RouterLink}
            href={paths.career.posts}
            color="inherit"
            endIcon={<Iconify icon="carbon:chevron-right" />}
            sx={{ display: { xs: 'none', md: 'inline-flex' } }}
          >
            View all
          </Button>
        </Box>

        {renderDesktopList()}
        {renderMobileList()}
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

type PostItemProps = BoxProps & {
  post: IPostProps;
  order?: number;
  largePost?: boolean;
};

export function PostItem({ sx, post, order, largePost, ...other }: PostItemProps) {
  return (
    <Box
      sx={[
        {
          gap: 2,
          display: 'flex',
          flexDirection: 'column',
        },
        largePost && {
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
        ratio={(largePost && '3/4') || (order && '4/3') || '1/1'}
        slotProps={{
          overlay: {
            sx: (theme) => ({
              ...(largePost && {
                backgroundImage: `linear-gradient(to bottom, transparent, ${theme.vars.palette.common.black})`,
              }),
            }),
          },
        }}
        sx={{ borderRadius: 2 }}
      />

      <Box
        sx={{
          gap: 1,
          display: 'flex',
          flexDirection: 'column',
          ...(largePost && {
            p: 5,
            gap: 2,
            bottom: 0,
            zIndex: 9,
            position: 'absolute',
            color: 'common.white',
          }),
        }}
      >
        <PostTime
          createdAt={fDate(post.createdAt)}
          duration={post.duration}
          sx={{ ...(largePost && { opacity: 0.72, color: 'inherit' }) }}
        />

        <Link
          component={RouterLink}
          href={paths.career.post}
          color="inherit"
          variant={largePost ? 'h4' : 'h6'}
          sx={(theme) => ({ ...theme.mixins.maxLine({ line: 2 }) })}
        >
          {post.title}
        </Link>

        {largePost && (
          <Typography
            sx={(theme) => ({
              ...theme.mixins.maxLine({ line: 2 }),
              opacity: 0.48,
            })}
          >
            {post.description}
          </Typography>
        )}
      </Box>
    </Box>
  );
}
