import type { MotionProps } from 'framer-motion';
import type { BoxProps } from '@mui/material/Box';
import type { Theme, SxProps } from '@mui/material/styles';
import type { PaletteColorKey } from 'src/theme/core';

import { m } from 'framer-motion';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

// ----------------------------------------------------------------------

const IconContent = styled('span')(({ theme }) => ({
  width: 56,
  height: 56,
  display: 'flex',
  overflow: 'hidden',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  boxShadow: `inset 0px -4px 6px rgba(0, 0, 0, 0.48)`,
  clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0 100%, 0 25%)',
}));

const TriangleTop = styled('span')({
  top: -2,
  left: -2,
  width: 16,
  zIndex: 9,
  height: 16,
  borderRadius: '5px',
  position: 'absolute',
  backgroundColor: 'inherit',
  '&:before': {
    top: 0,
    left: 0,
    width: 16,
    height: 16,
    content: '" "',
    borderRadius: '5px',
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,0.4)',
  },
});

const TriangleBottom = styled('span')(({ theme }) => ({
  top: 2,
  left: -10,
  width: 18,
  zIndex: 8,
  height: 18,
  opacity: 0.24,
  position: 'absolute',
  transform: 'rotate(45deg)',
  backgroundColor: theme.vars.palette.common.black,
}));

// ----------------------------------------------------------------------

type FloatIconProps = Omit<BoxProps, 'style'> &
  MotionProps & {
    color: string;
    icon: React.ReactNode;
  };

export function FloatIcon({ icon, color, sx, ...other }: FloatIconProps) {
  return (
    <Box
      component={m.div}
      sx={[
        {
          p: 1.5,
          borderRadius: 2.5,
          backgroundImage: `linear-gradient(to bottom, ${varAlpha(color, 0.24)} -12%, ${varAlpha(color, 0)} 88%)`,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <IconContent sx={{ bgcolor: varAlpha(color, 1) }}>
        <TriangleTop />
        <TriangleBottom />
        {icon}
      </IconContent>
    </Box>
  );
}

// ----------------------------------------------------------------------

type FloatLabelProps = Omit<BoxProps, 'style'> &
  MotionProps & {
    text: string;
    icon: React.ReactNode;
  };

export function FloatLabel({ icon, text, sx, ...other }: FloatLabelProps) {
  return (
    <Box
      component={m.div}
      sx={[
        (theme) => ({
          px: 2,
          gap: 1.5,
          py: 1.25,
          display: 'flex',
          borderRadius: 2,
          letterSpacing: -0.5,
          alignItems: 'center',
          color: 'common.black',
          bgcolor: 'common.white',
          fontWeight: 'fontWeightBold',
          fontSize: theme.typography.pxToRem(15),
          boxShadow: `0px 24px 48px rgba(0, 0, 0, 0.8), inset 0px -4px 10px ${theme.vars.palette.grey[500]}`,
          '& svg': { width: 44, height: 44 },
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      {icon}
      {text}
    </Box>
  );
}

// ----------------------------------------------------------------------

type FloatCircleProps = BoxProps & MotionProps & { isHidden?: boolean };

export function FloatCircle({ sx, children, isHidden = false, ...other }: FloatCircleProps) {
  return (
    <Box
      component={m.div}
      sx={[
        (theme) => ({
          '--stroke-opacity': 0.24,
          '--stroke-color': theme.vars.palette.grey[500],
          width: 460,
          height: 460,
          position: 'absolute',
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      {!isHidden && (
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 520 520"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="260"
            cy="260"
            r="260"
            strokeWidth="2"
            strokeDasharray="3 6"
            stroke="var(--stroke-color)"
            opacity="var(--stroke-opacity)"
          />
        </svg>
      )}
      {children}
    </Box>
  );
}

// ----------------------------------------------------------------------

type FloatDotProps = {
  size?: number;
  color?: PaletteColorKey;
  sx?: SxProps<Theme>;
};

export function FloatDot({ size = 24, color = 'primary', sx }: FloatDotProps) {
  return (
    <Box
      sx={[
        (theme) => ({
          zIndex: 10,
          width: size,
          height: size,
          borderRadius: '50%',
          position: 'absolute',
          boxShadow: `inset 0px -2px 4px ${theme.vars.palette[color].darker}`,
          backgroundImage: `linear-gradient(to bottom, ${theme.vars.palette[color].light}, ${theme.vars.palette[color].main})`,
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    />
  );
}
