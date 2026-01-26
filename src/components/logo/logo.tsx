import type { LinkProps } from '@mui/material/Link';

import { mergeClasses } from 'minimal-shared/utils';

import Link from '@mui/material/Link';
import { styled, useTheme } from '@mui/material/styles';

import { RouterLink } from 'src/routes/components';

import { logoClasses } from './classes';

// ----------------------------------------------------------------------

export type LogoProps = LinkProps & {
  isSingle?: boolean;
  disabled?: boolean;
};

export function Logo({
  sx,
  disabled,
  className,
  href = '/',
  isSingle = false,
  ...other
}: LogoProps) {
  const theme = useTheme();

  const singleLogo = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      fill="none"
      viewBox="0 0 64 64"
    >
      <rect rx="12" width="64" height="64" fill={theme.vars.palette.primary.main} />
      <text
        x="50%"
        y="50%"
        dominantBaseline="central"
        textAnchor="middle"
        fill="white"
        fontSize="24"
        fontWeight="700"
        fontFamily="Inter, sans-serif"
      >
        SJ
      </text>
    </svg>
  );

  const fullLogo = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      fill="none"
      viewBox="0 0 180 40"
    >
      <rect rx="8" width="40" height="40" fill={theme.vars.palette.primary.main} />
      <text
        x="20"
        y="20"
        dominantBaseline="central"
        textAnchor="middle"
        fill="white"
        fontSize="16"
        fontWeight="700"
        fontFamily="Inter, sans-serif"
      >
        SJ
      </text>
      <text
        x="52"
        y="20"
        dominantBaseline="central"
        fill="currentColor"
        fontSize="16"
        fontWeight="600"
        fontFamily="Inter, sans-serif"
      >
        Steeven
      </text>
    </svg>
  );

  return (
    <LogoRoot
      component={RouterLink}
      href={href}
      aria-label="Logo"
      underline="none"
      className={mergeClasses([logoClasses.root, className])}
      sx={[
        {
          width: 40,
          height: 40,
          ...(!isSingle && { width: 140, height: 32 }),
          ...(disabled && { pointerEvents: 'none' }),
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      {isSingle ? singleLogo : fullLogo}
    </LogoRoot>
  );
}

// ----------------------------------------------------------------------

const LogoRoot = styled(Link)(() => ({
  flexShrink: 0,
  color: 'inherit',
  display: 'inline-flex',
  verticalAlign: 'middle',
}));
