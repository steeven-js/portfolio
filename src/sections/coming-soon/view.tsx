import { useCountdownDate } from 'minimal-shared/hooks';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';

import { _socials } from 'src/_mock';
import { CONFIG } from 'src/global-config';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function ComingSoonView() {
  const countdown = useCountdownDate(new Date('2026-08-20 20:30'));

  const renderSocials = () => (
    <Box sx={{ mx: 'auto', display: 'flex' }}>
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
    <>
      <Typography variant="h3" sx={{ mb: 2 }}>
        Coming soon!
      </Typography>

      <Typography sx={{ color: 'text.secondary' }}>
        We are currently working hard on this page!
      </Typography>

      <Box
        component="img"
        alt="Coming soon"
        src={`${CONFIG.assetsDir}/assets/illustrations/illustration-comingsoon.svg`}
        sx={{
          my: 3,
          width: 320,
          maxWidth: 1,
          mx: 'auto',
          height: 'auto',
        }}
      />

      <Stack
        divider={<Box sx={{ mx: { xs: 1, sm: 2.5 } }}>:</Box>}
        sx={{
          typography: 'h2',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <TimeBlock label="days" value={countdown.days} />
        <TimeBlock label="hours" value={countdown.hours} />
        <TimeBlock label="minutes" value={countdown.minutes} />
        <TimeBlock label="seconds" value={countdown.seconds} />
      </Stack>

      <TextField
        fullWidth
        hiddenLabel
        placeholder="Enter your email"
        sx={{ my: 5 }}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <Button variant="contained" size="large" color="inherit" sx={{ mr: -1.25 }}>
                  Notify
                </Button>
              </InputAdornment>
            ),
          },
        }}
      />

      {renderSocials()}
    </>
  );
}

// ----------------------------------------------------------------------

type TimeBlockProps = {
  label: string;
  value: string;
};

function TimeBlock({ label, value }: TimeBlockProps) {
  return (
    <div>
      <div>{value} </div>
      <Box sx={{ typography: 'body1', color: 'text.secondary' }}>{label}</Box>
    </div>
  );
}
