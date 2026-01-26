import type { BoxProps } from '@mui/material/Box';
import type { ICaseStudyProps } from 'src/types/case-study';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';

import { _testimonials } from 'src/_mock';

import { Markdown } from 'src/components/markdown';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { MarketingNewsletter } from '../marketing-newsletter';
import { MarketingTestimonial } from '../marketing-testimonial';
import { MarketingLandingFreeSEO } from '../landing/marketing-landing-free-seo';
import { MarketingCaseStudyListSimilar } from '../list/marketing-case-study-list-similar';
import { MarketingCaseStudyDetailsGallery } from '../details/marketing-case-study-details-gallery';
import { MarketingCaseStudyDetailsSummary } from '../details/marketing-case-study-details-summary';

// ----------------------------------------------------------------------

type ViewProps = BoxProps & {
  caseStudy?: ICaseStudyProps;
  relatedCaseStudies?: ICaseStudyProps[];
};

export function MarketingCaseStudyView({ caseStudy, relatedCaseStudies, sx, ...other }: ViewProps) {
  return (
    <>
      <Box
        component="section"
        sx={[
          {
            pt: 3,
            pb: { xs: 10, md: 15 },
          },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
        {...other}
      >
        <Container>
          <Box
            component="img"
            alt={caseStudy?.title}
            src={caseStudy?.heroUrl}
            sx={{
              width: 1,
              borderRadius: 2,
              objectFit: 'cover',
              aspectRatio: '16/9',
            }}
          />

          <CustomBreadcrumbs
            sx={{ my: 5 }}
            links={[
              { name: 'Home', href: '/' },
              { name: 'Case studies', href: paths.marketing.caseStudies },
              { name: caseStudy?.title },
            ]}
          />

          <Grid container spacing={{ xs: 5, md: 8 }} direction={{ md: 'row-reverse' }}>
            <Grid size={{ xs: 12, md: 4 }}>
              <MarketingCaseStudyDetailsSummary
                title={caseStudy?.title || ''}
                website={caseStudy?.website || ''}
                category={caseStudy?.category || ''}
                createdAt={caseStudy?.createdAt || ''}
                description={caseStudy?.description || ''}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 8 }}>
              <Markdown content={caseStudy?.content || ''} />
              <MarketingCaseStudyDetailsGallery images={caseStudy?.galleryImgs || []} />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <MarketingTestimonial testimonials={_testimonials} />
      {!!relatedCaseStudies?.length && (
        <MarketingCaseStudyListSimilar caseStudies={relatedCaseStudies} />
      )}
      <MarketingLandingFreeSEO />
      <MarketingNewsletter />
    </>
  );
}
