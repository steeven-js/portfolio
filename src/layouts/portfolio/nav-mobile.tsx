import type { BoxProps } from '@mui/material/Box';

import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import { Logo } from 'src/components/logo';
import { Iconify } from 'src/components/iconify';
import { Scrollbar } from 'src/components/scrollbar';

// ----------------------------------------------------------------------

type NavItem = {
  title: string;
  href: string;
};

type NavMobileProps = BoxProps & {
  open: boolean;
  onClose: () => void;
  data: NavItem[];
};

export function NavMobile({ data, open, onClose, sx, ...other }: NavMobileProps) {
  return (
    <Drawer
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: { width: 280 },
      }}
    >
      <Box
        sx={{
          pt: 2,
          pb: 1,
          pl: 2.5,
          pr: 1.5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Logo />
        <IconButton onClick={onClose}>
          <Iconify icon="carbon:close" />
        </IconButton>
      </Box>

      <Scrollbar fillContent sx={{ pb: 3 }}>
        <Box
          component="nav"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            px: 2,
            pt: 2,
            gap: 0.5,
          }}
        >
          {data.map((item) => (
            <Box
              key={item.title}
              component="a"
              href={item.href}
              onClick={onClose}
              sx={(theme) => ({
                py: 1.5,
                px: 2,
                borderRadius: 1,
                typography: 'body2',
                fontWeight: 500,
                color: 'text.primary',
                textDecoration: 'none',
                transition: theme.transitions.create(['background-color', 'color']),
                '&:hover': {
                  bgcolor: varAlpha(theme.vars.palette.grey['500Channel'], 0.08),
                  color: 'primary.main',
                },
              })}
            >
              {item.title}
            </Box>
          ))}
        </Box>

        <Box sx={{ px: 2, mt: 3 }}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            startIcon={<Iconify icon="solar:letter-bold" />}
            href="mailto:jacques.steeven@gmail.com"
            onClick={onClose}
          >
            Me contacter
          </Button>
        </Box>
      </Scrollbar>
    </Drawer>
  );
}
