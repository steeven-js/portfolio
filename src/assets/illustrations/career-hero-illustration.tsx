import type { MotionValue } from 'framer-motion';
import type { BoxProps } from '@mui/material/Box';
import type { Theme, SxProps } from '@mui/material/styles';

import { memo } from 'react';
import { useSpring, useTransform } from 'framer-motion';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import { CONFIG } from 'src/global-config';

import { SvgColor } from 'src/components/svg-color';

import { Character } from './components/character';
import { CirclePattern } from './components/circle-pattern';
import { TrianglePattern } from './components/shape-pattern';
import { FloatIcon, FloatLabel } from './components/float-elements';

// ----------------------------------------------------------------------

type UseHoverParallaxReturn = {
  offsetX: (force: number) => MotionValue<number>;
  offsetY: (force: number) => MotionValue<number>;
  onMouseLeave: () => void;
  onMouseMove: (event: React.MouseEvent<HTMLInputElement>) => void;
};

function useHoverParallax(stiffness = 250, damping = 20): UseHoverParallaxReturn {
  const x = useSpring(0, { stiffness, damping });
  const y = useSpring(0, { stiffness, damping });

  const useOffsetX = (force: number) => useTransform(x, (event) => event / force);
  const useOffsetY = (force: number) => useTransform(y, (event) => event / force);

  const onMouseMove = (event: React.MouseEvent<HTMLInputElement>) => {
    x.set(event.clientX);
    y.set(event.clientY);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return {
    offsetX: useOffsetX,
    offsetY: useOffsetY,
    onMouseMove,
    onMouseLeave,
  };
}

// ----------------------------------------------------------------------

const DISTANCE = 40;

const iconPath = (name: string) => `${CONFIG.assetsDir}/assets/icons/${name}`;

function CareerHeroIllustration({ sx, ...other }: BoxProps) {
  const theme = useTheme();

  const { offsetX, offsetY, onMouseMove, onMouseLeave } = useHoverParallax(120, 16);

  const characterStyles: SxProps<Theme> = {
    bottom: 16,
    width: 300,
    position: 'absolute',
  };

  const renderShapes = () => (
    <>
      <TrianglePattern />
      <CirclePattern />
    </>
  );

  const renderLabels = () => (
    <>
      <IconLabel
        label="Accounting"
        icon={iconPath('banner/ic-accounting.svg')}
        offsetX={offsetX(-DISTANCE)}
        offsetY={offsetY(-DISTANCE)}
        sx={{ top: 170, transform: 'translateX(-125px) rotate(-15deg)' }}
      />
      <Character sx={{ ...characterStyles }} />
      <IconLabel
        label="Banking"
        icon={iconPath('banner/ic-banking.svg')}
        offsetX={offsetX(DISTANCE * 2)}
        offsetY={offsetY(DISTANCE * 2)}
        sx={{ transform: 'translate(175px, 90px) rotate(15deg)' }}
      />
      <IconLabel
        label="Health care"
        icon={iconPath('banner/ic-health-care.svg')}
        offsetX={offsetX(DISTANCE * 3)}
        offsetY={offsetY(DISTANCE * 3)}
        sx={{ transform: 'translate(170px, -110px) rotate(15deg)' }}
      />
      <IconLabel
        label="Software"
        icon={iconPath('banner/ic-software-development.svg')}
        offsetX={offsetX(DISTANCE * -4)}
        offsetY={offsetY(DISTANCE * -4)}
        sx={{ zIndex: 11, bottom: 160, transform: 'translateX(-110px)' }}
      />
    </>
  );

  const renderIcons = () => (
    <>
      <IconBox
        color={theme.vars.palette.warning.mainChannel}
        icon={iconPath('solid-64/ic-creativity.svg')}
        offsetX={offsetX(DISTANCE)}
        offsetY={offsetY(DISTANCE)}
        sx={{ top: 16, transform: 'translateX(20px)' }}
      />
      <IconBox
        color={theme.vars.palette.success.mainChannel}
        icon={iconPath('solid-64/ic-marketing-bullhorn.svg')}
        offsetX={offsetX(-DISTANCE * 2)}
        offsetY={offsetY(DISTANCE * 2)}
        sx={{ bottom: 16, transform: 'translateX(40px)' }}
      />
      <IconBox
        color={theme.vars.palette.info.mainChannel}
        icon={iconPath('solid-64/ic-customer-service.svg')}
        offsetX={offsetX(DISTANCE * 3)}
        offsetY={offsetY(DISTANCE * 3)}
        sx={{ bottom: 220, transform: 'translateX(-220px)' }}
      />
    </>
  );

  return (
    <Box
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      sx={[
        {
          width: 560,
          height: 560,
          display: 'flex',
          position: 'relative',
          alignItems: 'center',
          justifyContent: 'center',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Character isFront sx={{ ...characterStyles, zIndex: 10 }} />
      {renderLabels()}
      {renderIcons()}
      {renderShapes()}
    </Box>
  );
}

export default memo(CareerHeroIllustration);

// ----------------------------------------------------------------------

type IconProps = BoxProps & {
  label: string;
  color: string;
  icon: string;
  offsetX: MotionValue<number>;
  offsetY: MotionValue<number>;
};

const IconLabel = ({ label, icon, offsetX, offsetY, sx, ...other }: Omit<IconProps, 'color'>) => (
  <Box
    component="span"
    sx={[{ zIndex: 9, position: 'absolute' }, ...(Array.isArray(sx) ? sx : [sx])]}
    {...other}
  >
    <FloatLabel
      text={label}
      icon={<Box component="img" alt={label} src={icon} sx={{ width: 48, height: 48 }} />}
      style={{ x: offsetX, y: offsetY }}
    />
  </Box>
);

const IconBox = ({ color, icon, offsetX, offsetY, sx, ...other }: Omit<IconProps, 'label'>) => (
  <Box
    component="span"
    sx={[{ zIndex: 9, position: 'absolute' }, ...(Array.isArray(sx) ? sx : [sx])]}
    {...other}
  >
    <FloatIcon
      color={color}
      style={{ x: offsetX, y: offsetY }}
      icon={<SvgColor src={icon} sx={{ width: 40, height: 40, color: 'common.black' }} />}
    />
  </Box>
);
