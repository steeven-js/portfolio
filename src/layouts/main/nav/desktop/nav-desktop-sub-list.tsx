import type { NavSubListProps } from '../types';

import { isEqualPath } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import { usePathname } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';

import { NavItem } from './nav-desktop-item';
import { NavLi, NavUl } from '../components';

// ----------------------------------------------------------------------

export function NavSubList({ sx, items, coverUrl, subheader }: NavSubListProps) {
  const pathname = usePathname();

  const isCommonList = subheader === 'Common';

  const renderCover = () => (
    <Link component={RouterLink} href={items[0].path ?? ''}>
      <Box
        component="img"
        alt={coverUrl}
        src={coverUrl}
        sx={(theme) => ({
          borderRadius: 1.25,
          objectFit: 'cover',
          aspectRatio: '16/10',
          transition: theme.transitions.create(['opacity', 'box-shadow']),
          '&:hover': {
            opacity: 0.8,
            boxShadow: theme.vars.customShadows.z24,
          },
        })}
      />
    </Link>
  );

  return (
    <NavLi
      sx={[
        {
          py: 5,
          width: 1 / 6,
          ...(isCommonList && {
            px: 5,
            bgcolor: 'background.default',
            width: 'calc(100% / 6 + 80px)',
          }),
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Typography variant="h6" sx={{ mb: 2, color: 'text.primary' }}>
        {subheader}
      </Typography>

      <NavUl sx={{ gap: 0.5 }}>
        {coverUrl && <NavLi sx={{ mb: 1.5 }}>{renderCover()}</NavLi>}
        {items.map((item) => (
          <NavLi key={item.title}>
            <NavItem
              subItem
              path={item.path}
              title={item.title}
              active={isEqualPath(item.path, pathname)}
            />
          </NavLi>
        ))}
      </NavUl>
    </NavLi>
  );
}
