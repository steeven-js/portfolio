import type { BoxProps } from '@mui/material/Box';
import type { Breakpoint } from '@mui/material/styles';

import { mergeClasses } from 'minimal-shared/utils';

import Box from '@mui/material/Box';

import { layoutClasses } from '../core/classes';

// ----------------------------------------------------------------------

export type AuthIllustrationContentProps = BoxProps & { layoutQuery?: Breakpoint };

export function AuthIllustrationContent({
  sx,
  children,
  className,
  layoutQuery = 'md',
  ...other
}: AuthIllustrationContentProps) {
  return (
    <Box
      className={mergeClasses([layoutClasses.content, className])}
      sx={[
        (theme) => ({
          py: 5,
          width: 1,
          borderRadius: 2,
          bgcolor: 'background.paper',
          px: { xs: 3, [layoutQuery]: 5 },
          boxShadow: theme.vars.customShadows.z24,
          maxWidth: 'var(--layout-auth-content-width)',
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      {children}
    </Box>
  );
}
