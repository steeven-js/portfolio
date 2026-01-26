import type { BoxProps } from '@mui/material/Box';

import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { CONFIG } from 'src/global-config';

import { Iconify } from 'src/components/iconify';
import { MegaMenuMobile, MegaMenuHorizontal } from 'src/components/mega-menu';

import { navData } from './nav-config';
import { NavAccountPopover, navData as navDataAccount } from '../../_account/layout';

// ----------------------------------------------------------------------

export function Header({ sx, ...other }: BoxProps) {
  const renderActions = () => (
    <Box sx={{ gap: 3, display: 'flex', alignItems: 'center' }}>
      <Badge badgeContent={2} color="info">
        <IconButton
          disableRipple
          component={RouterLink}
          href={paths.eCommerce.wishlist}
          color="inherit"
          sx={{ p: 0 }}
        >
          <Iconify width={22} icon="solar:heart-outline" />
        </IconButton>
      </Badge>

      <Badge badgeContent={4} color="error">
        <IconButton
          disableRipple
          component={RouterLink}
          href={paths.eCommerce.cart}
          color="inherit"
          sx={{ p: 0 }}
        >
          <Iconify width={22} icon="solar:cart-3-outline" />
        </IconButton>
      </Badge>

      <NavAccountPopover data={navDataAccount} />
    </Box>
  );

  const renderNavDesktop = () => (
    <MegaMenuHorizontal data={navData} sx={{ display: { xs: 'none', md: 'flex' } }} />
  );

  const renderNavMobile = () => (
    <MegaMenuMobile
      data={navData}
      slots={{
        button: (
          <Button
            color="inherit"
            startIcon={<Iconify icon="carbon:menu" />}
            sx={{ display: { md: 'none' }, fontWeight: 'fontWeightMedium' }}
          >
            Categories
          </Button>
        ),
      }}
    />
  );

  return (
    <Box
      component="section"
      sx={[
        (theme) => ({
          ...theme.mixins.bgGradient({
            images: [
              `linear-gradient(to bottom, ${varAlpha(theme.vars.palette.background.defaultChannel, 0.9)}, ${varAlpha(theme.vars.palette.background.defaultChannel, 0.9)})`,
              `url(${CONFIG.assetsDir}/assets/background/overlay-1.webp)`,
            ],
          }),
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container
        sx={{
          height: 64,
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        {renderNavDesktop()}
        {renderNavMobile()}
        <Box component="span" sx={{ flexGrow: 1 }} />
        {renderActions()}
      </Container>
    </Box>
  );
}
