import type { CardProps } from '@mui/material/Card';
import type { ICourseProps } from 'src/types/course';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { fCurrency } from 'src/utils/format-number';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = CardProps &
  Partial<ICourseProps> & {
    totalLessons: number;
  };

export function ElearningCourseDetailsInfo({
  sx,
  price,
  priceSale,
  totalLessons,
  resources,
  ...other
}: Props) {
  return (
    <Card
      sx={[
        {
          p: 3,
          gap: 2,
          borderRadius: 2,
          display: 'flex',
          flexDirection: 'column',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Box sx={{ display: 'flex', typography: 'h3' }}>
        {!!priceSale && (
          <Box
            component="span"
            sx={{
              mr: 1,
              typography: 'h4',
              color: 'text.disabled',
              textDecoration: 'line-through',
            }}
          >
            {fCurrency(priceSale)}
          </Box>
        )}
        {fCurrency(price)}
      </Box>

      <Typography>This course includes:</Typography>
      <Box
        sx={{
          gap: 1,
          display: 'flex',
          typography: 'body2',
          alignItems: 'center',
        }}
      >
        <Iconify icon="solar:documents-minimalistic-outline" />
        <span>
          <strong>{totalLessons}</strong>
          {` Lessons`}
        </span>
      </Box>

      <Box
        sx={{
          gap: 1,
          display: 'flex',
          typography: 'body2',
          alignItems: 'center',
        }}
      >
        <Iconify icon="solar:file-download-outline" />
        <span>
          <strong>{resources}</strong>
          {` Resources`}
        </span>
      </Box>

      <Box
        sx={{
          gap: 1,
          display: 'flex',
          typography: 'body2',
          alignItems: 'center',
        }}
      >
        <Iconify icon="carbon:data-accessor" />
        Full lifetime access
      </Box>

      <Box
        sx={{
          gap: 1,
          display: 'flex',
          typography: 'body2',
          alignItems: 'center',
        }}
      >
        <Iconify icon="solar:monitor-smartphone-outline" />
        Access on desktops, tablets, mobile
      </Box>

      <Box
        sx={{
          gap: 1,
          display: 'flex',
          typography: 'body2',
          alignItems: 'center',
        }}
      >
        <Iconify icon="carbon:certificate" />
        Certificate of completion
      </Box>

      <Button variant="contained" size="large" color="inherit" sx={{ mt: 1 }}>
        Enrol now
      </Button>
    </Card>
  );
}
