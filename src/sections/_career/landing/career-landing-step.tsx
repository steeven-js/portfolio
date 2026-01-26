import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/global-config';

import { Iconify } from 'src/components/iconify';
import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const iconPath = (name: string) => `${CONFIG.assetsDir}/assets/icons/duotone/${name}`;

const STEPS = [
  {
    title: 'Create an account',
    description: 'Nunc nonummy metus. Donec elit libero.',
    icon: iconPath('ic-signup.svg'),
  },
  {
    title: 'Complete your profile',
    description: 'Nunc nonummy metus. Donec elit libero.',
    icon: iconPath('ic-job-resume.svg'),
  },
  {
    title: 'Search your job',
    description: 'Nunc nonummy metus. Donec elit libero.',
    icon: iconPath('ic-job-search.svg'),
  },
];

// ----------------------------------------------------------------------

export function CareerLandingStep({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      sx={[
        {
          textAlign: 'center',
          pb: { xs: 5, md: 10 },
          pt: { xs: 10, md: 15 },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container>
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          For candidates
        </Typography>

        <Typography variant="h2" sx={{ my: 3 }}>
          Explore thousands of jobs
        </Typography>

        <Typography sx={{ color: 'text.secondary', maxWidth: 480, mx: 'auto' }}>
          Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Morbi mattis ullamcorper
          velit.
        </Typography>

        <Box
          sx={{
            gap: 5,
            display: 'grid',
            my: { xs: 5, md: 10 },
            gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' },
          }}
        >
          {STEPS.map((value, index) => (
            <div key={value.title}>
              <SvgColor
                src={value.icon}
                sx={(theme) => ({
                  width: 80,
                  height: 80,
                  background: `linear-gradient(to bottom, ${theme.vars.palette.primary.light}, ${theme.vars.palette.primary.main})`,
                })}
              />
              <Typography
                variant="overline"
                sx={{ mt: 4, display: 'block', color: 'text.disabled' }}
              >
                Step {index + 1}
              </Typography>

              <Typography component="h6" variant="h5" sx={{ mt: 2, mb: 1 }}>
                {value.title}
              </Typography>

              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {value.description}
              </Typography>
            </div>
          ))}
        </Box>

        <Button
          variant="contained"
          size="large"
          color="inherit"
          startIcon={<Iconify icon="solar:upload-square-outline" />}
        >
          Upload your CV
        </Button>
      </Container>
    </Box>
  );
}
