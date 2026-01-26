import type { BoxProps } from '@mui/material/Box';
import type { IPostProps } from 'src/types/blog';

import { Fragment } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';

import { PostItem } from './elearning-posts';
import { PostItemMobile } from '../../blog/post-item-mobile';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  posts: IPostProps[];
};

export function ElearningLatestPosts({ posts, sx, ...other }: Props) {
  return (
    <Box
      component="section"
      sx={[
        {
          py: { xs: 10, md: 15 },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 5, md: 10 } }}>
          <Typography component="h6" variant="h3" sx={{ flexGrow: 1 }}>
            Latest posts
          </Typography>

          <Button
            component={RouterLink}
            href={paths.eLearning.posts}
            color="inherit"
            endIcon={<Iconify icon="carbon:chevron-right" />}
          >
            View all
          </Button>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gap: { xs: 3, md: 4 },
            gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' },
          }}
        >
          {posts.map((post) => (
            <Fragment key={post.id}>
              <PostItem post={post} sx={{ display: { xs: 'none', md: 'block' } }} />
              <PostItemMobile post={post} sx={{ display: { xs: 'flex', md: 'none' } }} />
            </Fragment>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
