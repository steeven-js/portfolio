import type { Theme, SxProps } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { fShortenNumber } from 'src/utils/format-number';

import { Iconify } from 'src/components/iconify';

import { ReviewProgress } from './review-progress';

// ----------------------------------------------------------------------

type ReviewSummaryProps = {
  reviewNumber: number;
  ratingNumber: number;
  onOpenForm: () => void;
  sx?: SxProps<Theme>;
};

export function ReviewSummary({ reviewNumber, ratingNumber, onOpenForm, sx }: ReviewSummaryProps) {
  return (
    <Paper
      variant="outlined"
      sx={[
        {
          p: 4,
          pr: 3,
          gap: 3,
          borderRadius: 2,
          display: 'flex',
          bgcolor: 'transparent',
          flexDirection: 'column',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Box sx={{ gap: 2, display: 'flex', alignItems: 'center' }}>
        <Typography component="span" variant="h2">
          {ratingNumber}
        </Typography>

        <div>
          <Rating value={ratingNumber} readOnly precision={0.1} sx={{ mb: 0.5 }} />
          <Typography
            component="span"
            variant="body2"
            sx={{ display: 'block', color: 'text.secondary' }}
          >
            {fShortenNumber(reviewNumber)} reviews
          </Typography>
        </div>
      </Box>

      <ReviewProgress />
      <Button
        size="large"
        fullWidth
        startIcon={<Iconify width={24} icon="solar:pen-2-outline" />}
        onClick={onOpenForm}
      >
        Write a review
      </Button>
    </Paper>
  );
}
