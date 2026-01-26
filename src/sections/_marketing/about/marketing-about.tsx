import type { BoxProps } from '@mui/material/Box';
import type { PaletteColorKey } from 'src/theme/core/palette';

import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/global-config';

import { Iconify } from 'src/components/iconify';
import { AnimateCountUp } from 'src/components/animate';

// ----------------------------------------------------------------------

const COLORS = ['primary', 'secondary', 'warning', 'success'] as const;

const SUMMARY = [
  { title: 'Years of experience', total: 12, icon: 'carbon:increase-level' },
  { title: 'Awards', total: 20, icon: 'carbon:trophy' },
  { title: 'Projects', total: 150, icon: 'carbon:data-vis-4' },
  { title: 'Happy clients', total: 32000, icon: 'carbon:user-certification' },
] as const;

// ----------------------------------------------------------------------

export function MarketingAbout({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      sx={[
        {
          pb: 10,
          pt: { xs: 3, md: 5 },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container>
        <Grid container spacing={3} sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <Grid sx={{ display: { xs: 'none', md: 'block' } }} size={{ xs: 12, md: 6, lg: 5 }}>
            <Box
              component="img"
              alt="About teams illustration"
              src={`${CONFIG.assetsDir}/assets/illustrations/illustration-teams.svg`}
              sx={{ width: 480, height: 480 }}
            />
          </Grid>

          <Grid sx={{ textAlign: { xs: 'center', md: 'left' } }} size={{ xs: 12, md: 6, lg: 6 }}>
            <Typography variant="h2">Who we are?</Typography>

            <Typography sx={{ mt: 3, mb: 5, color: 'text.secondary' }}>
              Vivamus consectetuer hendrerit lacus. Curabitur a felis in nunc fringilla tristique.
              Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit.
              <br />
              <br />
              Nam pretium turpis et arcu. Praesent porttitor, nulla vitae posuere iaculis, arcu nisl
              dignissim dolor, a pretium mi sem ut ipsum. Praesent venenatis metus at tortor
              pulvinar varius.
            </Typography>

            <Button
              variant="outlined"
              color="inherit"
              size="large"
              endIcon={<Iconify icon="carbon:chevron-right" />}
            >
              Check our work
            </Button>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 10,
            display: 'grid',
            textAlign: 'center',
            gap: { xs: 5, md: 8 },
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
          }}
        >
          {SUMMARY.map((value, index) => (
            <div key={value.title}>
              <IconWrap
                color={COLORS[index]}
                deg={
                  (index === 1 && 45 * 2) || (index === 2 && 45 * 4) || (index === 3 && 45 * 6) || 0
                }
              >
                <Iconify icon={value.icon} width={48} />
              </IconWrap>

              <AnimateCountUp variant="h2" to={value.total} sx={{ mt: 2, mb: 1 }} />

              <Typography sx={{ color: 'text.secondary' }}>{value.title}</Typography>
            </div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

const IconWrap = styled('div', {
  shouldForwardProp: (prop: string) => prop !== 'deg' && prop !== 'color',
})<{ color: PaletteColorKey; deg?: number }>(({ color, deg, theme }) => ({
  width: 160,
  height: 160,
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  position: 'relative',
  justifyContent: 'center',
  color: theme.vars.palette[color].darker,
  border: `dashed 2px ${varAlpha(theme.vars.palette[color].mainChannel, 0.24)}`,
  '&:before': {
    zIndex: 8,
    content: '""',
    borderRadius: '50%',
    position: 'absolute',
    width: 'calc(100% - 48px)',
    height: 'calc(100% - 48px)',
    background: `conic-gradient(from ${deg}deg at 50% 50%, ${theme.vars.palette[color].main} 0deg, ${theme.vars.palette[color].light} 360deg)`,
  },
  '& svg': { zIndex: 9 },
}));
