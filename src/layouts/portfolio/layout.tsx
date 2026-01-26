import type { Breakpoint } from '@mui/material/styles';
import type { LayoutSectionProps } from '../core/layout-section';

import { useBoolean } from 'minimal-shared/hooks';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { Logo } from 'src/components/logo';
import { Iconify } from 'src/components/iconify';

import { NavMobile } from './nav-mobile';
import { MainSection } from '../core/main-section';
import { MenuButton } from '../components/menu-button';
import { LayoutSection } from '../core/layout-section';
import { HeaderSection } from '../core/header-section';
import { PortfolioFooter } from '../main/portfolio-footer';
import { SettingsButton } from '../components/settings-button';

// ----------------------------------------------------------------------

type LayoutBaseProps = Pick<LayoutSectionProps, 'sx' | 'children' | 'cssVars'>;

export type PortfolioLayoutProps = LayoutBaseProps & {
  layoutQuery?: Breakpoint;
};

const NAV_ITEMS = [
  { title: 'Accueil', href: '#' },
  { title: 'Competences', href: '#about' },
  { title: 'Projets', href: '#projects' },
  { title: 'Contact', href: '#contact' },
];

export function PortfolioLayout({
  sx,
  cssVars,
  children,
  layoutQuery = 'md',
}: PortfolioLayoutProps) {
  const { value: open, onFalse: onClose, onTrue: onOpen } = useBoolean();

  const renderHeader = () => (
    <HeaderSection
      layoutQuery={layoutQuery}
      sx={{ position: { md: 'fixed' } }}
      slots={{
        leftArea: (
          <>
            <MenuButton
              onClick={onOpen}
              sx={(theme) => ({
                mr: 1,
                ml: -1,
                [theme.breakpoints.up(layoutQuery)]: { display: 'none' },
              })}
            />
            <NavMobile data={NAV_ITEMS} open={open} onClose={onClose} />
            <Logo />
          </>
        ),
        centerArea: (
          <Box
            sx={(theme) => ({
              display: 'none',
              gap: 4,
              [theme.breakpoints.up(layoutQuery)]: { display: 'flex' },
            })}
          >
            {NAV_ITEMS.map((item) => (
              <Box
                key={item.title}
                component="a"
                href={item.href}
                sx={(theme) => ({
                  color: 'text.primary',
                  typography: 'body2',
                  fontWeight: 500,
                  textDecoration: 'none',
                  transition: theme.transitions.create('color'),
                  '&:hover': { color: 'primary.main' },
                })}
              >
                {item.title}
              </Box>
            ))}
          </Box>
        ),
        rightArea: (
          <Box sx={{ gap: 1, display: 'flex', alignItems: 'center' }}>
            <SettingsButton />
            <Button
              variant="contained"
              color="primary"
              size="small"
              startIcon={<Iconify icon="solar:letter-bold" width={18} />}
              href="mailto:jacques.steeven@gmail.com"
              sx={{ display: { xs: 'none', [layoutQuery]: 'inline-flex' } }}
            >
              Contact
            </Button>
          </Box>
        ),
      }}
    />
  );

  const renderFooter = () => <PortfolioFooter />;

  const renderMain = () => <MainSection>{children}</MainSection>;

  return (
    <LayoutSection headerSection={renderHeader()} footerSection={renderFooter()} cssVars={cssVars} sx={sx}>
      {renderMain()}
    </LayoutSection>
  );
}
