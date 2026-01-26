import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import InputBase from '@mui/material/InputBase';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';

import { CONFIG } from 'src/global-config';

// ----------------------------------------------------------------------

export function ElearningNewsletter({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      sx={[
        {
          overflow: 'hidden',
          position: 'relative',
          bgcolor: 'common.black',
          py: { xs: 10, md: 15 },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          my: 'auto',
          width: 760,
          height: 760,
          opacity: 0.24,
          position: 'absolute',
          transform: 'translateX(-50%)',
        }}
      >
        <Box
          component={m.img}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, ease: 'linear', repeat: Infinity }}
          alt="Texture"
          loading="lazy"
          src={`${CONFIG.assetsDir}/assets/background/texture-3.webp`}
        />
      </Box>

      <Container>
        <Box
          sx={{
            mx: 'auto',
            maxWidth: 480,
            textAlign: 'center',
            color: 'common.white',
          }}
        >
          <Box
            sx={{
              gap: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box component="span" sx={{ textAlign: 'right', typography: 'h4' }}>
              Register now for get
              <br /> discount every courses
            </Box>

            <Box
              component="span"
              sx={(theme) => ({
                ...theme.mixins.textGradient(
                  `90deg, ${theme.vars.palette.primary.main} 20%, ${theme.vars.palette.secondary.main} 100%`
                ),
                typography: 'h1',
              })}
            >
              20%
            </Box>
          </Box>

          <Typography sx={{ mt: 3, mb: 5, opacity: 0.64 }}>
            Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Sed magna purus,
            fermentum eu
          </Typography>

          <InputBase
            fullWidth
            placeholder="Enter your email"
            endAdornment={
              <InputAdornment position="end">
                <Button color="primary" size="large" variant="contained">
                  Register
                </Button>
              </InputAdornment>
            }
            inputProps={{ id: 'email-input' }}
            sx={{
              pr: 0.5,
              pl: 1.5,
              height: 56,
              borderRadius: 1,
              bgcolor: 'common.white',
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}
