import type { BoxProps } from '@mui/material/Box';
import type { ReactPlayerProps } from 'react-player/types';

import ReactPlayer from 'react-player';

import Box from '@mui/material/Box';

// ----------------------------------------------------------------------
// https://github.com/cookpete/react-player

export type PlayerProps = ReactPlayerProps & {
  fullScreen?: boolean;
  slotProps?: {
    wrapper?: BoxProps;
  };
};

export function Player({ fullScreen, slotProps, ...other }: PlayerProps) {
  return (
    <Box
      {...slotProps?.wrapper}
      sx={[
        fullScreen && { width: 1, height: 1 },
        ...(Array.isArray(slotProps?.wrapper?.sx)
          ? slotProps.wrapper.sx
          : [slotProps?.wrapper?.sx]),
      ]}
    >
      <ReactPlayer
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
        {...other}
      />
    </Box>
  );
}
