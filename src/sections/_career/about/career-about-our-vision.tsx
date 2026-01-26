import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/global-config';

import { Image } from 'src/components/image';

// ----------------------------------------------------------------------

export function CareerAboutOurVision({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      sx={[
        {
          overflow: 'hidden',
          py: { xs: 5, md: 10 },
          textAlign: { xs: 'center', md: 'unset' },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container>
        <Grid container spacing={{ xs: 5, md: 3 }} sx={{ justifyContent: 'space-between' }}>
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="h3" sx={{ mt: { md: 5 } }}>
              Fusce convallis metus id felis luctus
            </Typography>

            <Typography sx={{ color: 'text.secondary', mt: 3 }}>
              Fusce convallis metus id felis luctus adipiscing. Etiam imperdiet imperdiet orci.
              Vestibulum eu odio. Phasellus nec sem in justo pellentesque facilisis.
            </Typography>
          </Grid>

          <Grid sx={{ display: { xs: 'none', md: 'block' } }} size={{ xs: 12, md: 4 }}>
            <Image
              alt="About introduce"
              src={`${CONFIG.assetsDir}/assets/images/career/career-3.webp`}
              ratio="3/4"
              sx={{ borderRadius: 2 }}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="h3" sx={{ mt: { md: 5 } }}>
              Fusce convallis metus id felis luctus
            </Typography>

            <Typography sx={{ color: 'text.secondary', mt: 3 }}>
              Fusce convallis metus id felis luctus adipiscing. Etiam imperdiet imperdiet orci.
              Vestibulum eu odio. Phasellus nec sem in justo pellentesque facilisis.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
