import type { Theme, SxProps } from '@mui/material/styles';
import type { NavItemData } from './nav-config-components';

import { isEqualPath, mergeClasses } from 'minimal-shared/utils';

import { styled } from '@mui/material/styles';

import { usePathname } from 'src/routes/hooks';

import { NavItem } from './component-nav-item';
import { componentLayoutClasses } from './classes';

// ----------------------------------------------------------------------

type NavRootProps = React.ComponentProps<typeof NavRoot>;

const NavRoot = styled('div')(({ theme }) => ({
  maxHeight: 800,
  display: 'none',
  position: 'sticky',
  alignSelf: 'start',
  flexDirection: 'column',
  padding: theme.spacing(0, 'var(--nav-gutters)'),
  top: 'calc(var(--layout-header-desktop-height) + 24px)',
}));

const NavSection = styled('nav')({
  minHeight: 0,
  display: 'flex',
  flexDirection: 'column',
});

const NavUl = styled('ul')({
  display: 'flex',
  flexDirection: 'column',
});

const NavLi = styled('li')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

// ----------------------------------------------------------------------

type PrimaryNavProps = NavRootProps & {
  navData?: NavItemData[];
};

export function PrimaryNav({ sx, navData, className, ...other }: PrimaryNavProps) {
  return (
    <NavRoot
      className={mergeClasses([componentLayoutClasses.primaryNav, className])}
      sx={sx}
      {...other}
    >
      <NavSection>
        <NavUl
          sx={[
            (theme) => ({
              ...theme.mixins.hideScrollY,
              '--arrow-size': '7px',
              '--arrow-offset-left': '-14px',
              gap: 'var(--primary-nav-list-gap)',
            }),
          ]}
        >
          <PrimaryNavList items={navData ?? []} />
        </NavUl>
      </NavSection>
    </NavRoot>
  );
}

// ----------------------------------------------------------------------

type NavListProps = {
  items: NavItemData[];
};

function PrimaryNavList({ items }: NavListProps) {
  const pathname = usePathname();

  const borderStyles: SxProps<Theme> = {
    top: 0,
    left: 3,
    bottom: 0,
    my: 'auto',
    width: '1px',
    content: '""',
    bgcolor: 'divider',
    position: 'absolute',
    height: 'calc(100% - 12px)',
  };

  return (
    <NavLi>
      <NavUl
        sx={{
          pl: '21px',
          position: 'relative',
          gap: 'var(--primary-nav-item-gap)',
          '&::before': borderStyles,
        }}
      >
        {items.map((item) => (
          <NavLi key={item.name}>
            <NavItem
              href={item.href}
              isActive={isEqualPath(item.href, pathname)}
              autoFocus={isEqualPath(item.href, pathname)}
            >
              {item.name}
            </NavItem>
          </NavLi>
        ))}
      </NavUl>
    </NavLi>
  );
}

// ----------------------------------------------------------------------

type SecondaryNavProps = NavRootProps & {
  activeItem: number | null;
  onClickItem: (index: number) => void;
  navData?: {
    name: string;
    description?: React.ReactNode;
    component: React.ReactNode;
  }[];
};

export function SecondaryNav({
  sx,
  navData,
  className,
  onClickItem,
  activeItem,
  ...other
}: SecondaryNavProps) {
  return (
    <NavRoot
      className={mergeClasses([componentLayoutClasses.secondaryNav, className])}
      sx={sx}
      {...other}
    >
      <NavSection>
        <NavUl sx={{ gap: 'var(--secondary-nav-item-gap)' }}>
          <NavLi sx={{ mb: 1, typography: 'overline' }}>On this page</NavLi>

          {navData?.map((item, index) => (
            <NavLi key={item.name}>
              <NavItem isActive={activeItem === index} onClick={() => onClickItem(index)}>
                {index + 1} - {item.name}
              </NavItem>
            </NavLi>
          ))}
        </NavUl>
      </NavSection>
    </NavRoot>
  );
}
