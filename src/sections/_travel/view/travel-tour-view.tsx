import type { SelectChangeEvent } from '@mui/material/Select';
import type { ITourProps } from 'src/types/tour';

import { useState, useCallback } from 'react';
import { useBoolean } from 'minimal-shared/hooks';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';

import { _socials, _reviews } from 'src/_mock';

import { Iconify } from 'src/components/iconify';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { TravelNewsletter } from '../travel-newsletter';
import { TravelReviewList } from '../review/travel-review-list';
import { ReviewCreateForm } from '../../review/review-create-form';
import { TravelReviewToolbar } from '../review/travel-review-toolbar';
import { TravelTourListSimilar } from '../list/travel-tour-list-similar';
import { TravelReviewTourGuide } from '../review/travel-review-tour-guide';
import { TravelTourDetailsHeader } from '../details/travel-tour-details-header';
import { TravelTourDetailsSummary } from '../details/travel-tour-details-summary';
import { TravelTourDetailsGallery } from '../details/travel-tour-details-gallery';
import { TravelTourDetailsReserveForm } from '../details/travel-tour-details-reserve-form';

// ----------------------------------------------------------------------

type ViewProps = {
  tour?: ITourProps;
  relatedTours?: ITourProps[];
};

export function TravelTourView({ tour, relatedTours }: ViewProps) {
  const [sort, setSort] = useState('latest');

  const openReviewForm = useBoolean();

  const handleChangeSort = useCallback((event: SelectChangeEvent) => {
    setSort(event.target.value as string);
  }, []);

  const renderSocials = () => (
    <Box sx={{ gap: 1.5, display: 'flex', mt: 5 }}>
      <Box component="span" sx={{ lineHeight: '30px', typography: 'subtitle2' }}>
        Share:
      </Box>

      <Box
        sx={{
          gap: 1,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        {_socials.map((social) => (
          <Button
            key={social.value}
            size="small"
            variant="outlined"
            startIcon={
              <>
                {social.value === 'twitter' && <Iconify icon="socials:twitter" />}
                {social.value === 'facebook' && <Iconify icon="socials:facebook" />}
                {social.value === 'instagram' && <Iconify icon="socials:instagram" />}
                {social.value === 'linkedin' && <Iconify icon="socials:linkedin" />}
              </>
            }
          >
            {social.label}
          </Button>
        ))}
      </Box>
    </Box>
  );

  const renderReview = () => (
    <>
      <Container>
        <Grid container spacing={8}>
          <Grid size={{ xs: 12, md: 5, lg: 4 }}>
            <TravelReviewTourGuide tourGuide={tour?.tourGuide} />
          </Grid>

          <Grid size={{ xs: 12, md: 7, lg: 8 }}>
            <TravelReviewToolbar
              sort={sort}
              totalReviews={_reviews.length}
              onChangeSort={handleChangeSort}
              onOpenReview={openReviewForm.onToggle}
            />

            <TravelReviewList reviews={_reviews} />
          </Grid>
        </Grid>
      </Container>

      <ReviewCreateForm open={openReviewForm.value} onClose={openReviewForm.onFalse} />
    </>
  );

  return (
    <>
      <Container>
        <CustomBreadcrumbs
          links={[
            { name: 'Home', href: '/' },
            { name: 'Tours', href: paths.travel.tours },
            { name: tour?.slug },
          ]}
          sx={{ mt: 3, mb: { xs: 3, md: 5 } }}
        />

        <TravelTourDetailsGallery images={tour?.gallery || []} />

        <Grid container spacing={{ xs: 5, md: 8 }} direction="row-reverse">
          <Grid size={{ xs: 12, md: 5, lg: 4 }}>
            <TravelTourDetailsReserveForm
              price={tour?.price || 0}
              priceSale={tour?.priceSale || 0}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 7, lg: 8 }}>
            <TravelTourDetailsHeader
              slug={tour?.slug || ''}
              tourGuide={tour?.tourGuide}
              favorited={tour?.favorited || false}
              ratingNumber={tour?.ratingNumber || 0}
              totalReviews={tour?.totalReviews || 0}
            />

            <Divider sx={{ borderStyle: 'dashed', my: 5 }} />

            <TravelTourDetailsSummary
              tourGuide={tour?.tourGuide}
              program={tour?.program || []}
              location={tour?.location || ''}
              duration={tour?.duration || ''}
              services={tour?.services || []}
              languages={tour?.languages || []}
              highlights={tour?.highlights || []}
              description={tour?.description || ''}
              available={tour?.available || { start: '', end: '' }}
            />

            {renderSocials()}
          </Grid>
        </Grid>
      </Container>

      <Divider sx={{ my: 10 }} />
      {renderReview()}
      {!!relatedTours?.length && <TravelTourListSimilar tours={relatedTours} />}
      <TravelNewsletter />
    </>
  );
}
