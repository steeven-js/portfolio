import type { Variants } from 'framer-motion';
import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/global-config';

import { varFade, AnimateBorder, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const variants: Variants = varFade('inUp', { distance: 24 });

export function HomeAdvertisement({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      sx={[
        (theme) => ({
          ...theme.mixins.bgGradient({
            images: [
              `linear-gradient(to bottom, ${varAlpha(theme.vars.palette.common.blackChannel, 0.72)}, ${varAlpha(theme.vars.palette.common.blackChannel, 0.72)})`,
              `url(${CONFIG.assetsDir}/assets/images/home/multiple-screens.webp)`,
            ],
          }),
          py: 10,
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          color: 'common.white',
          flexDirection: 'column',
          justifyContent: 'center',
          height: { xs: 'auto', md: 880 },
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <MotionViewport>
        <m.div variants={variants}>
          <Typography variant="h1" component="h2" sx={{ mb: 5 }}>
            <Box
              component="span"
              sx={(theme) => ({
                ...theme.mixins.textGradient(
                  `90deg, ${theme.vars.palette.primary.main} 20%, ${theme.vars.palette.secondary.main} 100%`
                ),
              })}
            >
              Start now
            </Box>
            <br />
            create your
            <br />
            website today
          </Typography>
        </m.div>

        <m.div variants={variants}>{renderActionButton()}</m.div>
      </MotionViewport>
    </Box>
  );
}

// ----------------------------------------------------------------------

const renderActionButton = () => (
  <AnimateBorder
    sx={(theme) => ({
      borderRadius: 1.25,
      position: 'relative',
      display: 'inline-flex',
      bgcolor: varAlpha(theme.vars.palette.common.blackChannel, 0.4),
    })}
    duration={12}
    slotProps={{
      outlineColor: (theme) =>
        `linear-gradient(135deg, ${varAlpha(theme.vars.palette.primary.mainChannel, 0.04)}, ${varAlpha(theme.vars.palette.warning.mainChannel, 0.04)})`,
      primaryBorder: {
        size: 50,
        width: '1.5px',
        sx: (theme) => ({ color: theme.vars.palette.primary.main }),
      },
      secondaryBorder: { sx: (theme) => ({ color: theme.vars.palette.warning.main }) },
    }}
  >
    <Button
      size="large"
      variant="text"
      target="_blank"
      rel="noopener noreferrer"
      href={paths.zoneStore}
      sx={{ px: 2, borderRadius: 'inherit' }}
    >
      Purchase now
    </Button>
  </AnimateBorder>
);
