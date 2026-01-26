import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/global-config';

import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const iconPath = (name: string) => `${CONFIG.assetsDir}/assets/icons/solid-64/${name}`;

const CORE_VALUES = [
  {
    title: 'Customer satisfaction',
    description: 'Aenean urna dictum adipiscing nec, cras quisque.',
    icon: iconPath('ic-satisfaction.svg'),
  },
  {
    title: 'Transparency',
    description: 'Aenean urna dictum adipiscing nec, cras quisque.',
    icon: iconPath('ic-transparency.svg'),
  },
  {
    title: 'Reputation',
    description: 'Aenean urna dictum adipiscing nec, cras quisque.',
    icon: iconPath('ic-popularity.svg'),
  },
  {
    title: 'Cooperation',
    description: 'Aenean urna dictum adipiscing nec, cras quisque.',
    icon: iconPath('ic-cooperate.svg'),
  },
];

// ----------------------------------------------------------------------

export function MarketingAboutCoreValues({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      sx={[
        {
          textAlign: 'center',
          py: { xs: 10, md: 15 },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container>
        <Typography variant="h2" sx={{ mb: { xs: 5, md: 10 } }}>
          Core values
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gap: { xs: 5, md: 8 },
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
          }}
        >
          {CORE_VALUES.map((value) => (
            <div key={value.title}>
              <SvgColor
                src={value.icon}
                sx={(theme) => ({
                  width: 64,
                  height: 64,
                  background: `linear-gradient(to bottom, ${theme.vars.palette.primary.light}, ${theme.vars.palette.primary.main})`,
                })}
              />

              <Typography component="h6" variant="h5" sx={{ mt: 3, mb: 1 }}>
                {value.title}
              </Typography>

              <Typography sx={{ color: 'text.secondary' }}> {value.description} </Typography>
            </div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
