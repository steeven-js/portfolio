import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';
import { varBounce, MotionContainer } from 'src/components/animate';

// ----------------------------------------------------------------------

export function EcommerceOrderCompletedView() {
  return (
    <Container component={MotionContainer} sx={{ textAlign: 'center', py: { xs: 10, md: 15 } }}>
      <m.div variants={varBounce('in')}>
        <Box sx={{ fontSize: 128 }}>🎉</Box>
      </m.div>

      <Box sx={{ my: 5 }}>
        <Typography variant="h3" sx={{ mb: 2 }}>
          Your order is complete!
        </Typography>

        <Typography sx={{ color: 'text.secondary' }}>
          You will be receiving a confirmation email with order details.
        </Typography>
      </Box>

      <Button
        component={RouterLink}
        href={paths.eCommerce.products}
        size="large"
        color="inherit"
        variant="contained"
        startIcon={<Iconify icon="carbon:chevron-left" />}
      >
        Continue shopping
      </Button>
    </Container>
  );
}
