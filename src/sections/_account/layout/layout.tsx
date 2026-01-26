import type { ContainerProps } from '@mui/material/Container';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { navData } from './nav-config';
import { NavAccountDesktop } from './nav';

// ----------------------------------------------------------------------

type AccountLayoutProps = ContainerProps & {
  children: React.ReactNode;
};

export function AccountLayout({ children, sx, ...other }: AccountLayoutProps) {
  return (
    <Container sx={sx} {...other}>
      <Box
        sx={{
          mb: 10,
          display: 'flex',
          mt: { xs: 5, md: 10 },
          alignItems: { md: 'flex-start' },
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        <NavAccountDesktop data={navData} />

        <Box
          sx={{
            flexGrow: 1,
            pl: { md: 8 },
            width: { md: `calc(100% - ${280}px)` },
          }}
        >
          {children}
        </Box>
      </Box>
    </Container>
  );
}
