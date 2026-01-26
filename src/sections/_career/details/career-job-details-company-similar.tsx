import type { PaperProps } from '@mui/material/Paper';
import type { IJobProps } from 'src/types/job';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { fDate } from 'src/utils/format-time';

// ----------------------------------------------------------------------

type Props = PaperProps & {
  jobs: IJobProps[];
};

export function CareerJobDetailsCompanySimilar({ jobs, sx, ...other }: Props) {
  return (
    <Paper
      variant="outlined"
      sx={[
        {
          p: 3,
          borderRadius: 2,
          bgcolor: 'background.default',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Typography variant="h5" sx={{ mb: 1 }}>
        Jobs from this company
      </Typography>

      {jobs.map((job) => (
        <Box
          key={job.id}
          sx={(theme) => ({
            py: 2,
            borderBottom: `dashed 1px ${theme.vars.palette.divider}`,
            '&:last-child': { borderBottom: 0 },
          })}
        >
          <Link component={RouterLink} href={paths.career.job} variant="subtitle1" color="inherit">
            {job.slug}
          </Link>

          <Typography variant="body2" sx={{ mt: 0.5, color: 'text.disabled' }}>
            Expiration date {fDate(job.deadline)}
          </Typography>
        </Box>
      ))}
    </Paper>
  );
}
