import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import { _tags, _mock, _travelPosts } from 'src/_mock';

import { TravelPosts } from '../posts/travel-posts';
import { Advertisement } from '../../advertisement';
import { PostSidebar } from '../../blog/post-sidebar';
import { TravelNewsletter } from '../travel-newsletter';
import { PostSearchMobile } from '../../blog/post-search-mobile';
import { TravelFeaturedPosts } from '../posts/travel-featured-posts';
import { TravelTrendingTopics } from '../posts/travel-trending-topics';

// ----------------------------------------------------------------------

const posts = _travelPosts.slice(0, 8);
const recentPosts = _travelPosts.slice(-4);
const featuredPosts = _travelPosts.slice(-5);

export function TravelPostsView() {
  return (
    <>
      <PostSearchMobile />

      <TravelFeaturedPosts largePost={featuredPosts[0]} smallPosts={featuredPosts.slice(1, 5)} />

      <TravelTrendingTopics />

      <Container sx={{ mt: { xs: 4, md: 10 } }}>
        <Grid container spacing={{ md: 8 }}>
          <Grid size={{ xs: 12, md: 8 }}>
            <TravelPosts posts={posts} />
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
                    imageUrl={_mock.image.travel(9)}
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
      <TravelNewsletter />
    </>
  );
}
