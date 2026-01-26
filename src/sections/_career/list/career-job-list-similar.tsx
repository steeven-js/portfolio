import type { BoxProps } from '@mui/material/Box';
import type { IJobProps } from 'src/types/job';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';

import { CareerJobItem } from './career-job-item';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  jobs: IJobProps[];
};

export function CareerJobListSimilar({ jobs, sx, ...other }: Props) {
  return (
    <Box
      component="section"
      sx={[
        {
          bgcolor: 'background.neutral',
          py: { xs: 10, md: 15 },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 5, md: 10 } }}>
          <Typography component="h6" variant="h3" sx={{ flexGrow: 1 }}>
            Similar jobs
          </Typography>

          <Button
            component={RouterLink}
            href={paths.career.jobs}
            color="inherit"
            endIcon={<Iconify icon="carbon:chevron-right" />}
          >
            View all
          </Button>
        </Box>

        <Box
          sx={{
            gap: 4,
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
          }}
        >
          {jobs.map((job) => (
            <CareerJobItem key={job.id} job={job} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
