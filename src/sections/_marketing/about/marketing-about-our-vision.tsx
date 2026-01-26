import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/global-config';

import { Image } from 'src/components/image';
import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function MarketingAboutOurVision({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      sx={[
        {
          position: 'relative',
          textAlign: 'center',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container>
        <Typography
          variant="h2"
          sx={(theme) => ({
            mb: 5,
            mx: 'auto',
            [theme.breakpoints.up('md')]: {
              top: 80,
              zIndex: 9,
              left: '50%',
              position: 'absolute',
              color: 'common.white',
              transform: 'translateX(-50%)',
            },
          })}
        >
          Our vision
        </Typography>

        <Box
          sx={{
            borderRadius: 2,
            display: 'flex',
            overflow: 'hidden',
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Fab color="primary" size="large" sx={{ zIndex: 9, position: 'absolute' }}>
            <Iconify width={22} icon="solar:play-outline" />
          </Fab>

          <Image
            alt="Hero"
            src={`${CONFIG.assetsDir}/assets/images/marketing/marketing-large-2.webp`}
            ratio="16/9"
            slotProps={{
              overlay: {
                sx: (theme) => ({
                  backgroundImage: `linear-gradient(to bottom, transparent, ${theme.vars.palette.common.black})`,
                }),
              },
            }}
          />
        </Box>

        <Typography
          variant="h5"
          component="p"
          sx={(theme) => ({
            mt: 5,
            mx: 'auto',
            maxWidth: 564,
            [theme.breakpoints.up('md')]: {
              zIndex: 9,
              bottom: 80,
              left: '50%',
              opacity: 0.72,
              position: 'absolute',
              transform: 'translateX(-50%)',
              color: theme.vars.palette.common.white,
            },
          })}
        >
          Our vision offering the best product nulla vehicula tortor scelerisque ultrices malesuada.
        </Typography>
      </Container>
    </Box>
  );
}
