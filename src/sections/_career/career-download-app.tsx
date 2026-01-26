import type { BoxProps } from '@mui/material/Box';
import type { ButtonProps } from '@mui/material/Button';

import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button, { buttonClasses } from '@mui/material/Button';

import { CONFIG } from 'src/global-config';

import { Iconify } from 'src/components/iconify';
import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

type AppStoreButtonProps = ButtonProps & {
  title: string;
  caption: string;
};

const AppStoreButton = styled((props: AppStoreButtonProps) => (
  <Button {...props}>
    <div>
      <Box component="span" sx={{ opacity: 0.72, display: 'block', typography: 'caption' }}>
        {props.caption}
      </Box>

      <Box component="span" sx={{ mt: -0.5, typography: 'h6' }}>
        {props.title}
      </Box>
    </div>
  </Button>
))(({ theme }) => ({
  flexShrink: 0,
  padding: '5px 12px',
  color: theme.vars.palette.common.white,
  border: `solid 1px ${varAlpha(theme.vars.palette.common.blackChannel, 0.24)}`,
  background: `linear-gradient(180deg, ${theme.vars.palette.grey[900]}, ${theme.vars.palette.common.black})`,
  [`& .${buttonClasses.startIcon}`]: {
    marginLeft: 0,
  },
}));

// ----------------------------------------------------------------------

export function CareerDownloadApp({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      sx={[
        (theme) => ({
          position: 'relative',
          pt: { md: 10 },
          pb: { xs: 5, md: 10 },
          '&::before': {
            ...theme.mixins.bgGradient({
              images: [`url(${CONFIG.assetsDir}/assets/background/texture-2.webp)`],
              sizes: ['auto 100%'],
              positions: ['top right -80px'],
            }),
            top: 0,
            left: 0,
            width: 1,
            height: 1,
            zIndex: -1,
            content: "''",
            opacity: 0.24,
            position: 'absolute',
          },
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container>
        <Grid container spacing={{ xs: 5, md: 3 }} sx={{ justifyContent: { md: 'space-between' } }}>
          <Grid size={{ xs: 12, md: 6, lg: 5 }}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h2"> Download app </Typography>
              <Typography sx={{ mt: 3, mb: 5 }}>
                Now finding the new job just got even easier with our new app!
              </Typography>
            </Box>

            <Box
              sx={(theme) => ({
                py: 5,
                borderRadius: 2,
                px: { xs: 3, md: 5 },
                border: `solid 1px ${theme.vars.palette.divider}`,
              })}
            >
              <Box
                sx={{
                  gap: 3,
                  display: 'flex',
                  typography: 'h6',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <SvgColor
                  src={`${CONFIG.assetsDir}/assets/icons/auth/ic-qrcode.svg`}
                  sx={{ width: 120, height: 120 }}
                />
                Scan QR code to
                <br /> install on your device
              </Box>

              <Divider sx={{ my: 5, width: 1, borderStyle: 'dashed' }} />

              <Box
                sx={{
                  gap: 2,
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                }}
              >
                <AppStoreButton
                  startIcon={<Iconify width={28} icon="custom:apple" />}
                  caption="Download on the"
                  title="Apple Store"
                />
                <AppStoreButton
                  startIcon={<Iconify width={28} icon="custom:google-play" />}
                  caption="Download from"
                  title="Google Play"
                />
              </Box>
            </Box>
          </Grid>

          <Grid sx={{ textAlign: { xs: 'center', md: 'right' } }} size={{ xs: 12, md: 6, lg: 6 }}>
            <Box
              component="img"
              loading="lazy"
              alt="Mobile app"
              src={`${CONFIG.assetsDir}/assets/images/career/download-app.webp`}
              sx={{ width: 560 }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
