import type { NavListProps } from '../types';

import { useRef, useCallback } from 'react';
import { useBoolean } from 'minimal-shared/hooks';
import { isActiveLink, isExternalLink } from 'minimal-shared/utils';

import Collapse from '@mui/material/Collapse';

import { paths } from 'src/routes/paths';
import { usePathname } from 'src/routes/hooks';

import { NavSectionVertical } from 'src/components/nav-section';

import { NavLi } from '../components';
import { NavItem } from './nav-mobile-item';

// ----------------------------------------------------------------------

export function NavList({ data, sx, ...other }: NavListProps) {
  const pathname = usePathname();
  const navItemRef = useRef<HTMLButtonElement | null>(null);

  const isNotRootOrDocs = !['/', paths.docs].includes(pathname);
  const isNotComponentsPath = !pathname.startsWith(paths.components);
  const isOpenPath = !!data.children && isNotRootOrDocs && isNotComponentsPath;

  const isActive = isActiveLink(pathname, data.path, !!data.children);

  const { value: open, onToggle } = useBoolean(isOpenPath);

  const handleToggleMenu = useCallback(() => {
    if (data.children) {
      onToggle();
    }
  }, [data.children, onToggle]);

  const renderNavItem = () => (
    <NavItem
      ref={navItemRef}
      // slots
      path={data.path}
      icon={data.icon}
      title={data.title}
      // state
      open={open}
      active={isActive}
      // options
      hasChild={!!data.children}
      externalLink={isExternalLink(data.path)}
      // actions
      onClick={handleToggleMenu}
    />
  );

  const renderCollapse = () =>
    !!data.children && (
      <Collapse in={open}>
        <NavSectionVertical
          data={data.children}
          sx={{ px: 1.5 }}
          slotProps={{
            rootItem: {
              sx: [{ minHeight: 32 }],
            },
          }}
        />
      </Collapse>
    );

  return (
    <NavLi sx={sx} {...other}>
      {renderNavItem()}
      {renderCollapse()}
    </NavLi>
  );
}
