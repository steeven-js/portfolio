import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/global-config';

// ----------------------------------------------------------------------

const iconPath = (name: string) => `${CONFIG.assetsDir}/assets/icons/ecommerce/${name}`;

const CATEGORIES = [
  { label: 'Men clothes', icon: iconPath('ic-men-clothes.svg'), path: '#' },
  { label: 'Women clothes', icon: iconPath('ic-women-clothes.svg'), path: '#' },
  { label: 'Watches', icon: iconPath('ic-watches.svg'), path: '#' },
  { label: 'Home appliances', icon: iconPath('ic-home-appliances.svg'), path: '#' },
  { label: 'Sport & outdoor', icon: iconPath('ic-sport.svg'), path: '#' },
  { label: 'Books & stationery', icon: iconPath('ic-book.svg'), path: '#' },
  { label: 'Home & living', icon: iconPath('ic-home-living.svg'), path: '#' },
  { label: 'Health', icon: iconPath('ic-health.svg'), path: '#' },
  { label: 'Mobile', icon: iconPath('ic-mobile.svg'), path: '#' },
  { label: 'Laptop', icon: iconPath('ic-laptop.svg'), path: '#' },
  { label: 'Tablet', icon: iconPath('ic-tablet.svg'), path: '#' },
  { label: 'Headphones', icon: iconPath('ic-headphones.svg'), path: '#' },
];

// ----------------------------------------------------------------------

export function EcommerceLandingCategories({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      sx={[
        {
          py: { xs: 5, md: 8 },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container>
        <Typography
          variant="h3"
          sx={{
            mb: 5,
            textAlign: { xs: 'center', md: 'unset' },
          }}
        >
          Categories
        </Typography>

        <Box
          sx={{
            gap: 3,
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(2, 1fr)',
              sm: 'repeat(4, 1fr)',
              md: 'repeat(6, 1fr)',
            },
          }}
        >
          {CATEGORIES.map((category) => (
            <Paper
              key={category.label}
              variant="outlined"
              sx={{
                px: 1,
                py: 3,
                minWidth: 0,
                borderRadius: 2,
                display: 'flex',
                cursor: 'pointer',
                alignItems: 'center',
                bgcolor: 'transparent',
                flexDirection: 'column',
                justifyContent: 'center',
                '&:hover': { bgcolor: 'action.hover' },
              }}
            >
              <Box
                sx={{
                  mb: 2,
                  p: 1.5,
                  borderRadius: '50%',
                  bgcolor: 'background.neutral',
                }}
              >
                <Box
                  component="img"
                  loading="lazy"
                  alt={category.label}
                  src={category.icon}
                  sx={{ width: 40, height: 40 }}
                />
              </Box>

              <Typography variant="subtitle2" noWrap sx={{ width: 1, textAlign: 'center' }}>
                {category.label}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
