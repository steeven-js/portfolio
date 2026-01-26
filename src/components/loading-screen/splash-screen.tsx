import type { Theme, SxProps } from '@mui/material/styles';
import type { LogoProps } from '../logo';

import { Fragment } from 'react';
import { m } from 'framer-motion';

import Portal from '@mui/material/Portal';
import { styled } from '@mui/material/styles';

import { Logo } from '../logo';

// ----------------------------------------------------------------------

export type SplashScreenProps = React.ComponentProps<'div'> & {
  portal?: boolean;
  sx?: SxProps<Theme>;
  slots?: {
    logo?: React.ReactNode;
  };
  slotProps?: {
    wrapper?: React.ComponentProps<typeof LoadingWrapper>;
    logo?: LogoProps;
  };
};

export function SplashScreen({ portal = true, slots, slotProps, sx, ...other }: SplashScreenProps) {
  const PortalWrapper = portal ? Portal : Fragment;

  const renderLogo = () =>
    slots?.logo ?? (
      <m.div
        animate={{
          scale: [1, 0.96, 1, 0.96, 1],
          opacity: [1, 0.48, 1, 0.48, 1],
        }}
        transition={{
          duration: 2,
          repeatDelay: 1,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <Logo
          disabled
          isSingle
          {...slotProps?.logo}
          sx={[
            { width: 128, height: 128 },
            ...(Array.isArray(slotProps?.logo?.sx) ? slotProps.logo.sx : [slotProps?.logo?.sx]),
          ]}
        />
      </m.div>
    );

  return (
    <PortalWrapper>
      <LoadingWrapper {...slotProps?.wrapper}>
        <LoadingContent sx={sx} {...other}>
          {renderLogo()}
        </LoadingContent>
      </LoadingWrapper>
    </PortalWrapper>
  );
}

// ----------------------------------------------------------------------

const LoadingWrapper = styled('div')({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
});

const LoadingContent = styled('div')(({ theme }) => ({
  right: 0,
  bottom: 0,
  zIndex: 9998,
  flexGrow: 1,
  width: '100%',
  height: '100%',
  display: 'flex',
  position: 'fixed',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.vars.palette.background.default,
}));
