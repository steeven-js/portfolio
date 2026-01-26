import type { BoxProps } from '@mui/material/Box';
import type { Theme, SxProps } from '@mui/material/styles';
import type { ButtonBaseProps } from '@mui/material/ButtonBase';

import { useEffect } from 'react';
import { usePopover } from 'minimal-shared/hooks';
import { varAlpha, isActiveLink } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Popover from '@mui/material/Popover';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ButtonBase, { buttonBaseClasses } from '@mui/material/ButtonBase';

import { usePathname } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';

import { _mock } from 'src/_mock';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export type NavItemsProps = {
  sx?: SxProps<Theme>;
  data: {
    path?: string;
    title: string;
    icon: React.ReactNode;
  }[];
};

export function NavAccountDesktop({ data, sx }: NavItemsProps) {
  const renderUserInfo = () => (
    <Box sx={{ p: 3, pb: 2 }}>
      <UserPhoto sx={{ mb: 2 }} />
      <div>
        <Typography variant="subtitle1" noWrap sx={{ mb: 0.5 }}>
          Jayvion
        </Typography>
        <Typography variant="body2" noWrap sx={{ color: 'text.secondary' }}>
          nannie.abernathy70@yahoo.com
        </Typography>
      </div>
    </Box>
  );

  const renderNav = () => (
    <Box component="nav" sx={{ my: 1, px: 3, '& li': { display: 'flex' } }}>
      <ul>
        {data.map((item) => (
          <li key={item.title}>
            <NavItem title={item.title} path={item.path} icon={item.icon} />
          </li>
        ))}
      </ul>
    </Box>
  );

  const renderLogoutButton = () => (
    <Box sx={{ py: 1.5, px: 3 }}>
      <NavItem
        title="Logout"
        icon={<Iconify icon="carbon:logout" />}
        onClick={() => console.info('Logout')}
      />
    </Box>
  );

  return (
    <Stack
      divider={<Divider component="span" sx={{ borderStyle: 'dashed' }} />}
      sx={[
        (theme) => ({
          width: 280,
          flexShrink: 0,
          borderRadius: 2,
          display: { xs: 'none', md: 'flex' },
          border: `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.24)}`,
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {renderUserInfo()}
      {renderNav()}
      {renderLogoutButton()}
    </Stack>
  );
}

// ----------------------------------------------------------------------

export function NavAccountPopover({ data, sx }: NavItemsProps) {
  const { open, onClose, onOpen, anchorEl } = usePopover();

  const pathname = usePathname();

  useEffect(() => {
    if (open) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderNav = () => (
    <Box component="nav">
      <Box
        component="ul"
        sx={{
          gap: 0.5,
          display: 'flex',
          flexDirection: 'column',
          '& li': { display: 'flex' },
        }}
      >
        {data.map((item) => (
          <li key={item.title}>
            <NavItem title={item.title} path={item.path} icon={item.icon} />
          </li>
        ))}
      </Box>
    </Box>
  );

  const renderMenuActions = () => (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      slotProps={{
        paper: {
          sx: [
            {
              width: 220,
              [`& .${buttonBaseClasses.root}`]: {
                px: 1.5,
                py: 0.75,
                height: 'auto',
              },
            },
            ...(Array.isArray(sx) ? sx : [sx]),
          ],
        },
      }}
    >
      {renderNav()}
      <Divider sx={{ my: 0.5, borderStyle: 'dashed' }} />
      <NavItem title="Logout" icon={<Iconify icon="carbon:logout" />} onClick={onClose} />
    </Popover>
  );

  return (
    <>
      <IconButton disableRipple color={open ? 'primary' : 'inherit'} onClick={onOpen}>
        <Iconify width={22} icon="solar:user-rounded-outline" />
      </IconButton>
      {renderMenuActions()}
    </>
  );
}

// ----------------------------------------------------------------------

type NavItemProps = ButtonBaseProps & NavItemsProps['data'][number];

export function NavItem({ title, path = '', icon, sx, ...other }: NavItemProps) {
  const pathname = usePathname();

  const isActive = path && isActiveLink(pathname, path);

  const buttonProps = path
    ? {
        href: path,
        component: RouterLink,
      }
    : {};

  return (
    <ButtonBase
      disableRipple
      key={title}
      {...buttonProps}
      sx={[
        {
          gap: 2,
          width: 1,
          height: 44,
          borderRadius: 1,
          typography: 'body2',
          justifyContent: 'flex-start',
          ...(isActive && { color: 'primary.main', typography: 'subtitle2' }),
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      {icon}
      {title}
    </ButtonBase>
  );
}

// ----------------------------------------------------------------------

export function UserPhoto({ sx, ...other }: BoxProps) {
  return (
    <Box
      sx={[
        {
          gap: 2,
          display: 'flex',
          alignItems: 'center',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Avatar src={_mock.image.avatar(0)} sx={{ width: 64, height: 64 }} />

      <Box
        sx={{
          gap: 1,
          display: 'flex',
          cursor: 'pointer',
          alignItems: 'center',
          typography: 'body2',
          '&:hover': { opacity: 0.72 },
        }}
      >
        <Iconify icon="solar:pen-2-outline" />
        Change photo
      </Box>
    </Box>
  );
}
