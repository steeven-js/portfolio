import type { BoxProps } from '@mui/material/Box';
import type { Theme, SxProps } from '@mui/material/styles';

import { memo } from 'react';
import { m } from 'framer-motion';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import { CONFIG } from 'src/global-config';

import { Shape } from './components/shape';
import { CirclePattern } from './components/circle-pattern';
import { TrianglePattern } from './components/shape-pattern';
import { FloatIcon, FloatLabel } from './components/float-elements';

// ----------------------------------------------------------------------

const varUp = {
  animate: { y: [-8, 8, -8], x: [-4, 4, -4] },
  transition: { duration: 8, repeat: Infinity },
};

const varDown = {
  animate: { y: [8, -8, 8], x: [4, -4, 4] },
  transition: { duration: 8, repeat: Infinity },
};

const varLeft = {
  animate: { x: [8, -8, 8], y: [4, -4, 4] },
  transition: { duration: 7, repeat: Infinity },
};

const varRight = {
  animate: { x: [8, -8, 8], y: [4, -4, 4] },
  transition: { duration: 7, repeat: Infinity },
};

// ----------------------------------------------------------------------

const iconPath = (name: string) => `${CONFIG.assetsDir}/assets/icons/banner/${name}`;

function ElearningHeroIllustration({ sx, ...other }: BoxProps) {
  const theme = useTheme();

  const GREEN = theme.vars.palette.success.mainChannel;
  const YELLOW = theme.vars.palette.warning.mainChannel;
  const BLUE = '53 94 201';
  const PURPLE = '155 58 177';

  const textStyles: SxProps<Theme> = {
    color: 'common.black',
    fontWeight: 'fontWeightBold',
    fontSize: theme.typography.pxToRem(22),
  };

  const baseStyles: SxProps<Theme> = {
    zIndex: 8,
    position: 'absolute',
  };

  const renderCharacter = () => (
    <Box
      component="img"
      alt="Teacher hero"
      src={`${CONFIG.assetsDir}/assets/images/course/teacher-hero.webp`}
      sx={{
        ...baseStyles,
        right: 18,
        width: 546,
        bottom: 24,
        height: 650,
      }}
    />
  );

  const renderShapes = () => (
    <>
      <TrianglePattern sx={{ left: 0, top: 0 }} />
      <CirclePattern sx={{ top: 0, left: 0, opacity: 0.48, transform: 'scale(1.2)' }} />
      <Shape sx={{ position: 'absolute', right: 32, bottom: 32 }} />
    </>
  );

  const renderIcons = () => (
    <>
      <Box {...varDown} component={m.div} sx={{ ...baseStyles, left: 115, bottom: 115 }}>
        <Box
          component="img"
          alt="Book icon"
          src={iconPath('ic-book.png')}
          sx={{ width: 52, height: 62 }}
        />
      </Box>

      <Box {...varRight} component={m.div} sx={{ ...baseStyles, left: 18, top: 220 }}>
        <Box
          component="img"
          alt="Pencil icon"
          src={iconPath('ic-pencil.png')}
          sx={{ width: 60, height: 77 }}
        />
      </Box>

      <Box {...varLeft} component={m.div} sx={{ ...baseStyles, ...textStyles, top: 88, right: 72 }}>
        <FloatIcon color={GREEN} icon="Dw" sx={{ transform: 'scale(1.2) rotate(15deg)' }} />
      </Box>

      <Box {...varRight} component={m.div} sx={{ ...baseStyles, ...textStyles, bottom: 160 }}>
        <FloatIcon
          color={YELLOW}
          icon="Ai"
          sx={{ transform: 'translateX(40px) scale(1.2) rotate(-15deg)' }}
        />
      </Box>

      <Box
        {...varUp}
        component={m.div}
        sx={{ ...baseStyles, ...textStyles, color: 'common.white', right: 90 }}
      >
        <FloatIcon
          color={PURPLE}
          icon="Ae"
          sx={{ transform: 'scale(1.2) translateY(20px) rotate(15deg)' }}
        />
      </Box>

      <Box
        {...varDown}
        component={m.div}
        sx={{ ...baseStyles, ...textStyles, color: 'common.white' }}
      >
        <FloatIcon
          color={BLUE}
          icon="Ps"
          sx={{ transform: 'scale(1.2) translate(-135px, -75px) rotate(15deg)' }}
        />
      </Box>
    </>
  );

  const renderLabels = () => (
    <Box
      {...varUp}
      component={m.div}
      sx={{ zIndex: 9, left: 120, bottom: 168, position: 'absolute' }}
    >
      <FloatLabel
        text="Python"
        icon={
          <Box
            component="img"
            alt="Python"
            src={iconPath('ic-python.svg')}
            sx={{ width: 56, height: 56 }}
          />
        }
        sx={{
          py: 1.75,
          typography: 'h3',
          color: '#2994FF',
          fontWeight: 'fontWeightBold',
          boxShadow: `0px 24px 48px rgba(0, 0, 0, 0.24), inset 0px -4px 10px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.48)}`,
        }}
      />
    </Box>
  );

  return (
    <Box
      sx={[
        {
          width: 670,
          height: 670,
          display: 'flex',
          position: 'relative',
          alignItems: 'center',
          justifyContent: 'center',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      {renderCharacter()}
      {renderLabels()}
      {renderIcons()}
      {renderShapes()}
    </Box>
  );
}

export default memo(ElearningHeroIllustration);
