import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import { _tags, _mock, _careerPosts } from 'src/_mock';

import { CareerPosts } from '../posts/career-posts';
import { Advertisement } from '../../advertisement';
import { PostSidebar } from '../../blog/post-sidebar';
import { CareerNewsletter } from '../career-newsletter';
import { PostSearchMobile } from '../../blog/post-search-mobile';

// ----------------------------------------------------------------------

const posts = _careerPosts.slice(0, 8);
const recentPosts = _careerPosts.slice(-4);

export function CareerPostsView() {
  return (
    <>
      <PostSearchMobile />

      <Container
        sx={{
          pt: { md: 5 },
          pb: { md: 10 },
        }}
      >
        <Grid container spacing={{ xs: 5, md: 8 }}>
          <Grid size={{ xs: 12, md: 8 }}>
            <CareerPosts posts={posts} />
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
                    imageUrl={_mock.image.career(10)}
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
      <CareerNewsletter />
    </>
  );
}
