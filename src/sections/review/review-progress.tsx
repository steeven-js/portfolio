import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';

import { fShortenNumber } from 'src/utils/format-number';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

const RATINGS = [
  { value: '5start', number: 5212 },
  { value: '4start', number: 2442 },
  { value: '3start', number: 523 },
  { value: '2start', number: 423 },
  { value: '1start', number: 80 },
];

// ----------------------------------------------------------------------

export function ReviewProgress({ sx, ...other }: BoxProps) {
  const totals = RATINGS.map((rating) => rating.number).reduce(
    (accumulator: number, curr: number) => accumulator + curr
  );

  return (
    <Box
      sx={[
        {
          gap: 2,
          display: 'flex',
          flexDirection: 'column',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      {RATINGS.map((rating, index) => (
        <Box key={rating.value} sx={{ display: 'flex', alignItems: 'center' }}>
          <Box
            sx={{
              mr: 0.5,
              width: 12,
              textAlign: 'center',
              typography: 'subtitle2',
            }}
          >
            {5 - index}
          </Box>

          <Iconify width={16} icon="eva:star-fill" />

          <LinearProgress
            color="inherit"
            variant="determinate"
            value={(rating.number / totals) * 100}
            sx={{ mx: 2, width: 1, height: 6 }}
          />

          <Typography variant="body2" sx={{ minWidth: 40, color: 'text.disabled' }}>
            {fShortenNumber(rating.number)}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
