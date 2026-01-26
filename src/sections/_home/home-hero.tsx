import type { Variants } from 'framer-motion';
import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/global-config';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const variants: Variants = varFade('inUp', { distance: 24 });

export function HomeHero({ sx, ...other }: BoxProps) {
  const renderTexts = () => (
    <>
      <m.div variants={variants}>
        <Typography variant="h1">
          Create your <br /> website today with
          <Box
            component="span"
            sx={(theme) => ({
              ...theme.mixins.textGradient(
                `90deg, ${theme.vars.palette.primary.main} 20%, ${theme.vars.palette.secondary.main} 100%`
              ),
            })}
          >
            {` ZONE`}
          </Box>
        </Typography>
      </m.div>

      <m.div variants={variants}>
        <Typography sx={{ maxWidth: 480 }}>
          The ZONE UI is built on top of MUI, a powerful library that provides flexible,
          customizable, and easy-to-use components.
        </Typography>
      </m.div>
    </>
  );

  const renderLabel = () => (
    <m.div variants={variants}>
      <Box
        component="span"
        sx={{
          gap: 0.75,
          display: 'flex',
          alignItems: 'center',
          justifyContent: { xs: 'center', md: 'flex-start' },
        }}
      >
        <Box component="span" sx={{ opacity: 0.48, typography: 'overline' }}>
          Available for
        </Box>

        <Box
          component="span"
          sx={(theme) => ({
            px: '5px',
            lineHeight: '18px',
            borderRadius: '18px',
            bgcolor: 'background.paper',
            fontWeight: 'fontWeightSemiBold',
            fontSize: theme.typography.pxToRem(11),
            border: `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.24)}`,
          })}
        >
          v{CONFIG.appVersion}
        </Box>
      </Box>
    </m.div>
  );

  const renderPlatformIcons = () => (
    <Box sx={{ mt: 3, gap: 2.5, display: 'flex' }}>
      {['js', 'ts', 'nextjs', 'vite', 'figma'].map((platform) => (
        <m.div key={platform} variants={variants}>
          <Box
            component="img"
            alt={platform}
            src={`${CONFIG.assetsDir}/assets/icons/platforms/ic-${platform}.svg`}
            sx={[
              (theme) => ({
                width: 24,
                height: 24,
                ...theme.applyStyles('dark', {
                  ...(platform === 'nextjs' && { filter: 'invert(1)' }),
                }),
              }),
            ]}
          />
        </m.div>
      ))}
    </Box>
  );

  const renderContent = () => (
    <MotionViewport
      sx={{
        gap: 5,
        maxWidth: 480,
        display: 'flex',
        flexDirection: 'column',
        alignItems: { xs: 'center', md: 'flex-start' },
        textAlign: { xs: 'center', md: 'left' },
      }}
    >
      {renderTexts()}

      <m.div variants={variants}>
        <Button
          color="inherit"
          size="large"
          variant="contained"
          endIcon={<Iconify icon="carbon:launch" />}
          target="_blank"
          rel="noopener noreferrer"
          href={paths.figmaUrl}
        >
          Figma workspace
        </Button>
      </m.div>

      <div>
        {renderLabel()}
        {renderPlatformIcons()}
      </div>
    </MotionViewport>
  );

  const renderImage = () => (
    <Box
      component={MotionViewport}
      sx={{ flex: '1 1 auto', position: 'relative', display: { xs: 'none', md: 'block' } }}
    >
      {Array.from({ length: 7 }, (_, index) => (
        <Box
          key={index}
          component={m.img}
          variants={varFade('inDown', { distance: 40 })}
          alt="Home hero"
          src={`${CONFIG.assetsDir}/assets/images/home/hero-${index + 1}.webp`}
          sx={{
            top: 0,
            left: 0,
            m: 'auto',
            bottom: 0,
            width: 800,
            maxWidth: 'unset',
            zIndex: 9 - index,
            position: 'absolute',
          }}
        />
      ))}
    </Box>
  );

  return (
    <Box
      component="section"
      sx={[
        (theme) => ({
          ...theme.mixins.bgGradient({
            images: [
              `linear-gradient(to bottom, ${varAlpha(theme.vars.palette.background.defaultChannel, 0.9)}, ${varAlpha(theme.vars.palette.background.defaultChannel, 0.9)})`,
              `url(${CONFIG.assetsDir}/assets/background/overlay-1.webp)`,
            ],
          }),
          py: 10,
          overflow: 'hidden',
          position: 'relative',
          [theme.breakpoints.up('md')]: {
            py: 15,
            minHeight: 760,
            height: '100vh',
            maxHeight: 1440,
            display: 'flex',
            alignItems: 'center',
          },
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container
        sx={(theme) => ({
          display: 'flex',
          justifyContent: 'center',
          [theme.breakpoints.up('md')]: {
            columnGap: 10,
            alignItems: 'center',
            justifyContent: 'unset',
          },
        })}
      >
        {renderContent()}
        {renderImage()}
      </Container>
    </Box>
  );
}
