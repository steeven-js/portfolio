import type { IJobProps } from 'src/types/job';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';

import { _mock, _socials } from 'src/_mock';

import { Iconify } from 'src/components/iconify';

import { Advertisement } from '../../advertisement';
import { CareerNewsletter } from '../career-newsletter';
import { CareerJobListSimilar } from '../list/career-job-list-similar';
import { CareerJobDetailsInfo } from '../details/career-job-details-info';
import { CareerJobDetailsHero } from '../details/career-job-details-hero';
import { CareerJobDetailsSummary } from '../details/career-job-details-summary';
import { CareerJobDetailsCompanyInfo } from '../details/career-job-details-company-info';
import { CareerJobDetailsCompanySimilar } from '../details/career-job-details-company-similar';

// ----------------------------------------------------------------------

type ViewProps = {
  job?: IJobProps;
  relatedJobs?: IJobProps[];
  jobsFromCompany?: IJobProps[];
};

export function CareerJobView({ job, relatedJobs, jobsFromCompany }: ViewProps) {
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

  return (
    <>
      <CareerJobDetailsHero
        slug={job?.slug || ''}
        category={job?.category || ''}
        location={job?.location || ''}
        deadline={job?.deadline || ''}
        favorited={job?.favorited || false}
        totalViews={job?.totalViews || 0}
      />
      <Container sx={{ pb: 10, mt: { xs: 5, md: 10 } }}>
        <Grid container spacing={{ xs: 5, md: 8 }}>
          <Grid size={{ xs: 12, md: 7, lg: 8 }}>
            <CareerJobDetailsSummary
              content={job?.content || ''}
              skills={job?.skills || []}
              benefits={job?.benefits || []}
              locationMap={job?.locationMap || []}
            />

            <Divider sx={{ mt: 5 }} />

            {renderSocials()}
          </Grid>

          <Grid
            sx={{ gap: 5, display: 'flex', flexDirection: 'column' }}
            size={{ xs: 12, md: 5, lg: 4 }}
          >
            <CareerJobDetailsInfo
              level={job?.level || ''}
              deadline={job?.deadline || ''}
              createdAt={job?.createdAt || ''}
              languages={job?.languages || []}
              experience={job?.experience || ''}
            />

            <CareerJobDetailsCompanyInfo company={job?.company} />

            {!!jobsFromCompany?.length && <CareerJobDetailsCompanySimilar jobs={jobsFromCompany} />}

            <Advertisement
              title="Advertisement"
              description="Duis leo. Donec orci lectus, aliquam ut, faucibus non"
              imageUrl={_mock.image.career(2)}
              action={
                <Button variant="contained" color="primary">
                  Go now
                </Button>
              }
            />
          </Grid>
        </Grid>
      </Container>
      {!!relatedJobs?.length && <CareerJobListSimilar jobs={relatedJobs} />}
      <CareerNewsletter />
    </>
  );
}
