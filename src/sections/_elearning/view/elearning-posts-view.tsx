import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import { _tags, _mock, _coursePosts } from 'src/_mock';

import { Advertisement } from '../../advertisement';
import { PostSidebar } from '../../blog/post-sidebar';
import { ElearningPosts } from '../posts/elearning-posts';
import { ElearningNewsletter } from '../elearning-newsletter';
import { PostSearchMobile } from '../../blog/post-search-mobile';
import { ElearningFeaturedPost } from '../posts/elearning-featured-post';

// ----------------------------------------------------------------------

const posts = _coursePosts.slice(0, 8);
const featuredPost = _coursePosts[3];
const recentPosts = _coursePosts.slice(-4);

export function ElearningPostsView() {
  return (
    <>
      <PostSearchMobile />

      <ElearningFeaturedPost post={featuredPost} />

      <Container sx={{ pt: 10 }}>
        <Grid container spacing={{ md: 8 }}>
          <Grid size={{ xs: 12, md: 8 }}>
            <ElearningPosts posts={posts} />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <PostSidebar
              tags={_tags.slice(0, 8)}
              categories={[
                { label: 'Marketing', path: '' },
                { label: 'Community', path: '' },
                { label: 'Tutorials', path: '' },
                { label: 'Business', path: '' },
                { label: 'Management', path: '' },
              ]}
              recentPosts={recentPosts}
              slots={{
                bottomNode: (
                  <Advertisement
                    title="Advertisement"
                    description="Duis leo. Donec orci lectus, aliquam ut, faucibus non"
                    imageUrl={_mock.image.course(6)}
                    action={
                      <Button variant="contained" color="primary">
                        Go now
                      </Button>
                    }
                  />
                ),
              }}
            />
          </Grid>
        </Grid>
      </Container>
      <ElearningNewsletter />
    </>
  );
}
