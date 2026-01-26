import type { ICaseStudyProps } from 'src/types/case-study';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { _testimonials, _marketingPosts } from 'src/_mock';

import { MarketingNewsletter } from '../marketing-newsletter';
import { MarketingTestimonial } from '../marketing-testimonial';
import { MarketingLatestPosts } from '../posts/marketing-latest-posts';
import { MarketingCaseStudyList } from '../list/marketing-case-study-list';
import { MarketingLandingFreeSEO } from '../landing/marketing-landing-free-seo';

// ----------------------------------------------------------------------

type Props = {
  caseStudies: ICaseStudyProps[];
};

const latestPosts = _marketingPosts.slice(0, 4);

export function MarketingCaseStudiesView({ caseStudies }: Props) {
  const renderTexts = () => (
    <Box
      sx={{
        py: { xs: 3, md: 5 },
        textAlign: { xs: 'center', md: 'left' },
      }}
    >
      <Typography variant="h2"> Case studies</Typography>
      <Typography sx={{ mt: 3, color: 'text.secondary' }}>
        Nullam tincidunt adipiscing enim.
        <br /> Mauris sollicitudin fermentum libero.
      </Typography>
    </Box>
  );

  return (
    <>
      <Box component="section">
        <Container>
          {renderTexts()}
          <MarketingCaseStudyList caseStudies={caseStudies} />
        </Container>
      </Box>

      <MarketingTestimonial testimonials={_testimonials} />

      <MarketingLatestPosts posts={latestPosts} />

      <MarketingLandingFreeSEO />

      <MarketingNewsletter />
    </>
  );
}
