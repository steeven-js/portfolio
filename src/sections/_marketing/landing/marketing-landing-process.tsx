import type { BoxProps } from '@mui/material/Box';

import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/global-config';

import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const iconPath = (name: string) => `${CONFIG.assetsDir}/assets/icons/solid-64/${name}`;

const COLORS = ['primary', 'secondary', 'warning', 'success'] as const;

const STEPS = [
  { name: 'Planning', icon: iconPath('ic-sketch.svg') },
  { name: 'Research', icon: iconPath('ic-research.svg') },
  { name: 'Optimizing', icon: iconPath('ic-system-optimization.svg') },
  { name: 'Results', icon: iconPath('ic-report-results.svg') },
];

// ----------------------------------------------------------------------

export function MarketingLandingProcess({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      sx={[
        {
          py: { xs: 5, md: 10 },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container>
        <Box
          sx={{
            mb: 5,
            gap: 3,
            maxWidth: 480,
            display: 'flex',
            flexDirection: 'column',
            mx: { xs: 'auto', md: 'unset' },
            textAlign: { xs: 'center', md: 'unset' },
          }}
        >
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            Workflow
          </Typography>

          <Typography variant="h2">Working process</Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.
          </Typography>
        </Box>

        <Box
          sx={{
            gap: 4,
            display: 'grid',
            alignItems: 'flex-end',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
          }}
        >
          {STEPS.map((item, index) => (
            <ServiceItem key={item.name} item={item} index={index} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

type ServiceItemProps = {
  index: number;
  item: {
    name: string;
    icon: string;
  };
};

function ServiceItem({ item, index }: ServiceItemProps) {
  return (
    <Card
      sx={(theme) => ({
        p: 2,
        color: theme.vars.palette[COLORS[index]].darker,
        bgcolor: theme.vars.palette[COLORS[index]].light,
        boxShadow: `-8px 12px 32px 0px ${varAlpha(theme.vars.palette[COLORS[index]].mainChannel, 0.2)}`,
        ...(index > 0 && { mb: { md: index * 2.5 } }),
      })}
    >
      <SvgColor src={item.icon} sx={{ width: 64, height: 64, opacity: 0.48 }} />

      <Typography component="h6" variant="h5" sx={{ mt: 3, textAlign: 'right' }}>
        {item.name}
      </Typography>
    </Card>
  );
}
