import type { BoxProps } from '@mui/material/Box';

import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import InputBase from '@mui/material/InputBase';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';

import { CONFIG } from 'src/global-config';

// ----------------------------------------------------------------------

export function CareerNewsletter({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      sx={[
        (theme) => ({
          ...theme.mixins.bgGradient({
            images: [
              `radial-gradient(50% 160% at 50% 50%, ${varAlpha(theme.vars.palette.common.blackChannel, 0.4)}, ${theme.vars.palette.common.black})`,
              `url(${CONFIG.assetsDir}/assets/images/career/newsletter.webp)`,
            ],
          }),
          py: 15,
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container sx={{ textAlign: 'center', color: 'common.white' }}>
        <Typography variant="h2">Get the right job for you</Typography>

        <Typography sx={{ my: 3 }}>
          Subscribe to get updated on latest and relevant career opportunities
        </Typography>

        <InputBase
          placeholder="Enter your email"
          endAdornment={
            <InputAdornment position="end">
              <Button
                size="large"
                color="primary"
                variant="contained"
                sx={{ height: 54, borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
              >
                Subscribe
              </Button>
            </InputAdornment>
          }
          inputProps={{ id: 'email-input' }}
          sx={{
            pl: 1.5,
            width: 1,
            height: 54,
            mx: 'auto',
            maxWidth: 560,
            borderRadius: 1,
            bgcolor: 'common.white',
          }}
        />
      </Container>
    </Box>
  );
}
