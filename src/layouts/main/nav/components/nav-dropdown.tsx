import type { FadeProps } from '@mui/material/Fade';

import Fade from '@mui/material/Fade';
import { styled } from '@mui/material/styles';

// ----------------------------------------------------------------------

const NavDropdownPaper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 0, 0, 5),
  boxShadow: theme.vars.customShadows.dropdown,
  backgroundColor: theme.vars.palette.background.neutral,
  ...(theme.direction === 'rtl' && {
    padding: theme.spacing(0, 5, 0, 0),
  }),
}));

// ----------------------------------------------------------------------

type NavDropdownProps = React.ComponentProps<'div'> & {
  open: FadeProps['in'];
};

export const NavDropdown = styled(({ open, children, ...other }: NavDropdownProps) => (
  <Fade in={open}>
    <div {...other}>
      <NavDropdownPaper>{children}</NavDropdownPaper>
    </div>
  </Fade>
))(({ theme }) => ({
  left: 0,
  right: 0,
  marginTop: 12,
  width: '100%',
  position: 'fixed',
  marginLeft: 'auto',
  marginRight: 'auto',
  padding: theme.spacing(1.5, 0),
  zIndex: theme.zIndex.drawer * 2,
  top: 'calc(var(--layout-header-desktop-height) / 2)',
}));
