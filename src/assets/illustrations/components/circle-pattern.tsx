import type { Variants } from 'framer-motion';
import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';

import { FloatDot, FloatCircle } from './float-elements';

// ----------------------------------------------------------------------

const animateRotation = (direction = 'down', duration = 60): Variants => ({
  animate: {
    rotate: direction === 'down' ? [360, 0] : [0, 360],
    transition: { duration, repeat: Infinity, ease: 'linear' },
  },
});

export function CirclePattern({ sx, ...other }: BoxProps) {
  return (
    <Box
      sx={[
        {
          width: 1,
          height: 1,
          display: 'flex',
          position: 'absolute',
          alignItems: 'center',
          justifyContent: 'center',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <FloatCircle isHidden {...animateRotation('down')}>
        <FloatDot sx={{ left: -12, top: '50%', mt: -1.5 }} />
      </FloatCircle>

      <FloatCircle isHidden {...animateRotation('up', 80)}>
        <FloatDot size={16} color="secondary" sx={{ top: 80, left: 42 }} />
      </FloatCircle>

      <FloatCircle isHidden {...animateRotation('up', 100)}>
        <FloatDot size={14} color="success" sx={{ top: 22, left: 112 }} />
      </FloatCircle>

      <FloatCircle {...animateRotation('down', 120)}>
        <FloatDot size={12} color="warning" sx={{ top: 54, right: 70 }} />
      </FloatCircle>
    </Box>
  );
}
