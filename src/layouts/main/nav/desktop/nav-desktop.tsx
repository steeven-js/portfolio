import type { NavMainProps } from '../types';

import { Nav, NavUl } from '../components';
import { NavList } from './nav-desktop-list';

// ----------------------------------------------------------------------

type NavDesktopProps = React.ComponentProps<typeof Nav> & NavMainProps;

export function NavDesktop({ data, sx, ...other }: NavDesktopProps) {
  return (
    <Nav sx={sx} {...other}>
      <NavUl sx={{ gap: 5, flexDirection: 'row', alignItems: 'center' }}>
        {data.map((list) => (
          <NavList key={list.title} data={list} />
        ))}
      </NavUl>
    </Nav>
  );
}
