import type { BoxProps } from '@mui/material/Box';

import { useState } from 'react';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { fAdd } from 'src/utils/format-time';

import { _mock } from 'src/_mock';

import { Image } from 'src/components/image';

import { ProductOptionPicker } from '../components/product-option-picker';
import { ProductCountdownBlock } from '../components/product-countdown-block';

// ----------------------------------------------------------------------

const COLOR_OPTIONS = [
  { label: '#FA541C', value: 'red' },
  { label: '#754FFE', value: 'violet' },
  { label: '#00B8D9', value: 'cyan' },
  { label: '#36B37E', value: 'green' },
];

const MEMORY_OPTIONS = [
  { label: '128GB', value: '128gb' },
  { label: '256GB', value: '256gb' },
  { label: '512GB', value: '512gb' },
  { label: '1TB', value: '1tb' },
];

// ----------------------------------------------------------------------

export function EcommerceLandingSpecialOffer({ sx, ...other }: BoxProps) {
  const [color, setColor] = useState('red');

  const [memory, setMemory] = useState('128gb');

  const renderCountdown = () => (
    <Box
      sx={(theme) => ({
        p: 5,
        display: 'flex',
        borderRadius: 2,
        textAlign: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        boxShadow: theme.vars.customShadows.z24,
      })}
    >
      <Typography variant="overline" sx={{ color: 'primary.main' }}>
        New 2022
      </Typography>

      <Typography component="h6" variant="h5" sx={{ mt: 1, mb: 3 }}>
        Apple iPhone 14
      </Typography>

      <Box
        component="span"
        sx={(theme) => ({
          px: 2,
          py: 1,
          borderRadius: 1,
          typography: 'subtitle2',
          border: `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.24)}`,
        })}
      >
        From $999
      </Box>

      <Divider sx={{ borderStyle: 'dashed', my: 3, width: 1 }} />

      <Typography variant="subtitle2" sx={{ mb: 2 }}>
        Deal ends in:
      </Typography>

      <ProductCountdownBlock
        expired={new Date(fAdd({ days: 1, hours: 8 }))}
        slotProps={{
          value: {
            sx: (theme) => ({
              color: 'text.primary',
              bgcolor: 'transparent',
              border: `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.24)}`,
            }),
          },
        }}
      />
    </Box>
  );

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
          Special offer
        </Typography>

        <Grid container spacing={{ xs: 5, md: 8 }}>
          <Grid size={{ xs: 12, md: 4 }}>{renderCountdown()}</Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Image
              alt="Apple iPhone 14"
              src={_mock.image.product(4)}
              ratio="1/1"
              sx={{ width: 1, borderRadius: 1.5, bgcolor: 'background.neutral' }}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Typography component="h6" variant="h4" sx={{ mb: 1 }}>
              Apple iPhone 14
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              While most people enjoy casino gambling, sports betting, lottery and bingo playing for
              the fun.
            </Typography>

            <ProductOptionPicker
              color={color}
              memory={memory}
              onSelectColor={(newValue) => setColor(newValue)}
              onSelectMemory={(newValue) => setMemory(newValue)}
              options={{ colors: COLOR_OPTIONS, memory: MEMORY_OPTIONS }}
              sx={{ mt: 3, mb: 5 }}
            />

            <Button size="large" color="inherit" variant="contained">
              Buy now
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
