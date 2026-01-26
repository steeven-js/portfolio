import type { PaperProps } from '@mui/material/Paper';
import type { ITourProps } from 'src/types/tour';

import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { fShortenNumber } from 'src/utils/format-number';

import { _socials } from 'src/_mock';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = PaperProps & {
  tourGuide?: ITourProps['tourGuide'];
};

export function TravelReviewTourGuide({ tourGuide, sx, ...other }: Props) {
  const renderSocials = () => (
    <Box sx={{ my: 2.5, display: 'flex' }}>
      {_socials.map((social) => (
        <IconButton key={social.label}>
          {social.value === 'twitter' && <Iconify icon="socials:twitter" />}
          {social.value === 'facebook' && <Iconify icon="socials:facebook" />}
          {social.value === 'instagram' && <Iconify icon="socials:instagram" />}
          {social.value === 'linkedin' && <Iconify icon="socials:linkedin" />}
        </IconButton>
      ))}
    </Box>
  );

  return (
    <Paper
      variant="outlined"
      sx={[
        {
          p: 5,
          borderRadius: 2,
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          bgcolor: 'transparent',
          flexDirection: 'column',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeContent={
          tourGuide?.verified ? (
            <Box
              sx={{
                width: 20,
                height: 20,
                borderRadius: '50%',
                bgcolor: 'background.default',
              }}
            >
              <Iconify icon="solar:check-circle-bold" sx={{ color: 'success.main' }} />
            </Box>
          ) : null
        }
      >
        <Avatar src={tourGuide?.avatarUrl} sx={{ width: 96, height: 96 }} />
      </Badge>

      <Typography component="span" variant="h5" sx={{ mb: 1, mt: 2 }}>
        {tourGuide?.name}
      </Typography>

      <Box
        sx={{
          mb: 2,
          gap: 0.5,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Iconify icon="eva:star-fill" sx={{ color: 'warning.main' }} />
        <Box component="span" sx={{ typography: 'h6' }}>
          {Number.isInteger(tourGuide?.ratingNumber)
            ? `${tourGuide?.ratingNumber}.0`
            : tourGuide?.ratingNumber}
        </Box>

        <Box component="span" sx={{ typography: 'body2', color: 'text.secondary' }}>
          ({tourGuide?.totalReviews ? fShortenNumber(tourGuide?.totalReviews) : 0} reviews)
        </Box>
      </Box>

      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {tourGuide?.about}
      </Typography>

      {renderSocials()}

      <Typography variant="caption" sx={{ color: 'text.disabled' }}>
        {tourGuide?.quotes}
      </Typography>

      <Button color="inherit" variant="outlined" size="large" sx={{ mt: 2 }}>
        Contact
      </Button>
    </Paper>
  );
}
