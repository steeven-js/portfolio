import type { BoxProps } from '@mui/material/Box';

import { useBoolean } from 'minimal-shared/hooks';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';

import { Field } from 'src/components/hook-form';
import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function EcommerceCheckoutPersonalDetails({ sx, ...other }: BoxProps) {
  const passwordShow = useBoolean();

  return (
    <Box sx={sx} {...other}>
      <Box
        sx={{
          mb: 4,
          gap: 1,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        <Typography variant="subtitle2">Sign in with:</Typography>

        <Button
          size="small"
          color="inherit"
          variant="outlined"
          startIcon={<Iconify icon="socials:facebook" />}
        >
          Facebook
        </Button>

        <Button
          size="small"
          color="inherit"
          variant="outlined"
          startIcon={<Iconify icon="socials:google" />}
        >
          Google
        </Button>

        <Button
          size="small"
          color="inherit"
          variant="outlined"
          startIcon={<Iconify icon="solar:letter-outline" />}
        >
          Continue with email
        </Button>
      </Box>

      <Box
        sx={{
          rowGap: 2.5,
          columnGap: 2,
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' },
        }}
      >
        <Field.Text name="personal.firstName" label="First name" />
        <Field.Text name="personal.lastName" label="Last name" />
        <Field.Text name="personal.email" label="Email address" />
        <Field.Text name="personal.phoneNumber" label="Phone number" />

        <Field.Text
          name="personal.password"
          label="Password"
          type={passwordShow.value ? 'text' : 'password'}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={passwordShow.onToggle} edge="end">
                    <Iconify
                      icon={passwordShow.value ? 'solar:eye-outline' : 'solar:eye-closed-outline'}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />

        <Field.Text
          name="personal.confirmPassword"
          label="Confirm password"
          type={passwordShow.value ? 'text' : 'password'}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={passwordShow.onToggle} edge="end">
                    <Iconify
                      icon={passwordShow.value ? 'solar:eye-outline' : 'solar:eye-closed-outline'}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
      </Box>
    </Box>
  );
}
