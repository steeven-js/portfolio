import type { BoxProps } from '@mui/material/Box';
import type { Breakpoint } from '@mui/material/styles';

import { mergeClasses } from 'minimal-shared/utils';

import Box from '@mui/material/Box';

import { layoutClasses } from '../core/classes';

// ----------------------------------------------------------------------

export type AuthCenteredContentProps = BoxProps & { layoutQuery?: Breakpoint };

export function AuthCenteredContent({
  sx,
  children,
  className,
  layoutQuery = 'md',
  ...other
}: AuthCenteredContentProps) {
  return (
    <Box
      className={mergeClasses([layoutClasses.content, className])}
      sx={[
        (theme) => ({
          py: 5,
          width: 1,
          zIndex: 2,
          borderRadius: 2,
          display: 'flex',
          flexDirection: 'column',
          px: { xs: 3, [layoutQuery]: 5 },
          boxShadow: theme.vars.customShadows.z24,
          maxWidth: 'var(--layout-auth-content-width)',
          bgcolor: theme.vars.palette.background.default,
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      {children}
    </Box>
  );
}
