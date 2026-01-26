import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { CONFIG } from 'src/global-config';

import { MotionContainer } from 'src/components/animate';

// ----------------------------------------------------------------------

export function MaintenanceView() {
  return (
    <MotionContainer>
      <Typography variant="h3" sx={{ mb: 2 }}>
        Website currently under maintenance
      </Typography>

      <Typography sx={{ color: 'text.secondary' }}>
        We are currently working hard on this page!
      </Typography>

      <Box
        component="img"
        alt="Maintenance"
        src={`${CONFIG.assetsDir}/assets/illustrations/illustration-maintenance.svg`}
        sx={{
          mx: 'auto',
          width: 320,
          maxWidth: 1,
          height: 'auto',
          display: 'block',
          my: { xs: 5, sm: 10 },
        }}
      />

      <Button component={RouterLink} href="/" size="large" color="inherit" variant="contained">
        Go to home
      </Button>
    </MotionContainer>
  );
}
