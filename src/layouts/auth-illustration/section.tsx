import type { BoxProps } from '@mui/material/Box';
import type { Breakpoint } from '@mui/material/styles';

import Box from '@mui/material/Box';

import { CONFIG } from 'src/global-config';

// ----------------------------------------------------------------------

export type AuthIllustrationSectionProps = BoxProps & {
  imgUrl?: string;
  layoutQuery?: Breakpoint;
};

export function AuthIllustrationSection({
  sx,
  layoutQuery = 'md',
  imgUrl = `${CONFIG.assetsDir}/assets/illustrations/illustration-sign-in.svg`,
  ...other
}: AuthIllustrationSectionProps) {
  return (
    <Box
      sx={[
        (theme) => ({
          display: 'none',
          flex: '1 1 auto',
          [theme.breakpoints.up(layoutQuery)]: {
            display: 'block',
          },
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Box component="img" alt="Sign in" src={imgUrl} sx={{ width: 1 }} />
    </Box>
  );
}
