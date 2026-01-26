import type { BoxProps } from '@mui/material/Box';

import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

const SOCIAL_LINKS = [
  { name: 'GitHub', icon: 'mdi:github', url: 'https://github.com/steeven-js' },
  { name: 'LinkedIn', icon: 'mdi:linkedin', url: 'https://www.linkedin.com/in/steevenjacques/' },
  { name: 'Email', icon: 'mdi:email', url: 'mailto:jacques.steeven@gmail.com' },
];

export function PortfolioFooter({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="footer"
      sx={[
        (theme) => ({
          py: 5,
          textAlign: 'center',
          borderTop: `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`,
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 3 }}>
          {SOCIAL_LINKS.map((link) => (
            <Box
              key={link.name}
              component="a"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={(theme) => ({
                width: 40,
                height: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                color: 'text.secondary',
                border: `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.24)}`,
                transition: theme.transitions.create(['color', 'border-color']),
                '&:hover': {
                  color: 'primary.main',
                  borderColor: 'primary.main',
                },
              })}
            >
              <Iconify icon={link.icon} width={20} />
            </Box>
          ))}
        </Box>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Steeven Jacques - Developpeur Full Stack
        </Typography>

        <Typography variant="caption" sx={{ color: 'text.disabled', display: 'block', mt: 1 }}>
          {new Date().getFullYear()} - Tous droits reserves
        </Typography>
      </Container>
    </Box>
  );
}
