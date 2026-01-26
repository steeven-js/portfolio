import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import { _mock, _tags, _marketingPosts } from 'src/_mock';

import { Advertisement } from '../../advertisement';
import { PostSidebar } from '../../blog/post-sidebar';
import { MarketingPosts } from '../posts/marketing-posts';
import { MarketingNewsletter } from '../marketing-newsletter';
import { PostSearchMobile } from '../../blog/post-search-mobile';
import { MarketingFeaturedPosts } from '../posts/marketing-featured-posts';
import { MarketingLandingFreeSEO } from '../landing/marketing-landing-free-seo';

// ----------------------------------------------------------------------

const posts = _marketingPosts.slice(0, 8);
const recentPosts = _marketingPosts.slice(-4);
const featuredPosts = _marketingPosts.slice(0, 5);

export function MarketingPostsView() {
  return (
    <>
      <PostSearchMobile />

      <MarketingFeaturedPosts posts={featuredPosts} />

      <Container component="section" sx={{ mt: 10 }}>
        <Grid container spacing={{ md: 8 }}>
          <Grid size={{ xs: 12, md: 8 }}>
            <MarketingPosts posts={posts} />
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
                    imageUrl={_mock.image.marketing(9)}
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

      <MarketingLandingFreeSEO />

      <MarketingNewsletter />
    </>
  );
}
