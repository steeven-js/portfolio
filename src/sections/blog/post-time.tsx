import type { BoxProps } from '@mui/material/Box';
import type { Theme, SxProps } from '@mui/material/styles';

import Box from '@mui/material/Box';

// ----------------------------------------------------------------------

type PostTimeProps = BoxProps & {
  duration?: string;
  sx?: SxProps<Theme>;
  createdAt: string | null;
};

export function PostTime({ createdAt, duration, sx, ...other }: PostTimeProps) {
  return (
    <Box
      sx={[
        {
          flexWrap: 'wrap',
          display: 'flex',
          alignItems: 'center',
          typography: 'caption',
          color: 'text.disabled',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      {createdAt}
      {duration && (
        <>
          <Box
            component="span"
            sx={{
              mx: 1,
              width: 4,
              height: 4,
              borderRadius: '50%',
              backgroundColor: 'currentColor',
            }}
          />

          {duration}
        </>
      )}
    </Box>
  );
}
