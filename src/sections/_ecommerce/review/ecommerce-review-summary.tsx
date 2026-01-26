import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { svgIconClasses } from '@mui/material/SvgIcon';

import { fShortenNumber } from 'src/utils/format-number';

import { Iconify } from 'src/components/iconify';

import { ReviewProgress } from '../../review/review-progress';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  reviewNumber: number;
  ratingNumber: number;
  onOpenForm: () => void;
};

export function EcommerceReviewSummary({
  sx,
  reviewNumber,
  ratingNumber,
  onOpenForm,
  ...other
}: Props) {
  return (
    <Box
      component="section"
      sx={[
        {
          py: 10,
          bgcolor: 'background.neutral',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container>
        <Grid container spacing={{ xs: 5, md: 8 }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'center', md: 'flex-start' },
              }}
            >
              <Typography variant="h3">Reviews</Typography>

              <Box
                sx={{
                  my: 3,
                  gap: 2,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Typography component="span" variant="h2">
                  {ratingNumber}
                </Typography>

                <div>
                  <Rating
                    value={ratingNumber}
                    readOnly
                    precision={0.1}
                    sx={{ mb: 0.5, [`& .${svgIconClasses.root}`]: { color: 'text.primary' } }}
                  />
                  <Typography variant="body2">{fShortenNumber(reviewNumber)} reviews</Typography>
                </div>
              </Box>

              <Button
                size="large"
                color="inherit"
                variant="contained"
                startIcon={<Iconify icon="solar:pen-2-outline" />}
                onClick={onOpenForm}
              >
                Write a review
              </Button>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <ReviewProgress />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
