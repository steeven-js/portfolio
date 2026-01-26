import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { fShortenNumber } from 'src/utils/format-number';

import { CONFIG } from 'src/global-config';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

const ITEMS = [
  {
    label: 'projects',
    total: 20,
    content: 'Praesent turpis. Praesent blandit laoreet nibh. Nunc nonummy metus.',
  },
  {
    label: 'Happy clients',
    total: 32000,
    content: 'Praesent turpis. Praesent blandit laoreet nibh. Nunc nonummy metus.',
  },
  {
    label: 'years of experience',
    total: 20,
    content: 'Praesent turpis. Praesent blandit laoreet nibh. Nunc nonummy metus.',
  },
];

// ----------------------------------------------------------------------

export function MarketingLandingAbout({ sx, ...other }: BoxProps) {
  const renderImage = () => (
    <Box
      component="img"
      alt="Landing about"
      src={`${CONFIG.assetsDir}/assets/images/marketing/marketing-large-1.webp`}
      sx={{ borderRadius: 1.5, mb: { xs: 5, md: 10 } }}
    />
  );

  const renderTexts = () => (
    <>
      <Typography variant="overline" sx={{ color: 'text.disabled', display: 'block' }}>
        About us
      </Typography>

      <Typography variant="h2" sx={{ my: 3 }}>
        Who we are
      </Typography>

      <Typography sx={{ color: 'text.secondary' }}>
        In hac habitasse platea dictumst. Aliquam lobortis. Lorem ipsum dolor sit amet, consectetuer
        adipiscing elit. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas.
      </Typography>
    </>
  );

  const renderItems = () =>
    ITEMS.map((item) => (
      <Box key={item.label} sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: 1, maxWidth: 100 }}>
          <Box
            sx={{
              mb: 1,
              gap: 0.5,
              display: 'flex',
              typography: 'h2',
            }}
          >
            {fShortenNumber(item.total)}
            <Box component="span" sx={{ typography: 'h4', color: 'primary.main' }}>
              +
            </Box>
          </Box>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            {item.label}
          </Typography>
        </Box>

        <Divider flexItem orientation="vertical" sx={{ ml: 3, mr: 5, borderStyle: 'dashed' }} />

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {item.content}
        </Typography>
      </Box>
    ));

  return (
    <Box
      component="section"
      sx={[
        {
          pb: { xs: 5, md: 10 },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container>
        {renderImage()}

        <Grid container spacing={{ xs: 5, md: 3 }} sx={{ justifyContent: 'space-between' }}>
          <Grid sx={{ textAlign: { xs: 'center', md: 'right' } }} size={{ xs: 12, md: 5 }}>
            {renderTexts()}
            <Button
              size="large"
              color="inherit"
              endIcon={<Iconify icon="carbon:chevron-right" />}
              sx={{ my: 5 }}
            >
              Lean more
            </Button>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }} sx={{ gap: 5, display: 'flex', flexDirection: 'column' }}>
            {renderItems()}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
