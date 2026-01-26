import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { PaymentSummary } from '../payment-summary';
import { PaymentMethods } from '../payment-methods';

// ----------------------------------------------------------------------

export function PaymentView() {
  return (
    <Container sx={{ pb: 10, pt: { xs: 3, md: 5 } }}>
      <Typography variant="h3" sx={{ mb: 2, textAlign: 'center' }}>
        {`Let's finish powering you up!`}
      </Typography>

      <Typography sx={{ textAlign: 'center', color: 'text.secondary', mb: 5 }}>
        Professional plan is right for you.
      </Typography>

      <Grid container spacing={{ xs: 5, md: 3 }}>
        <Grid
          size={{ xs: 12, md: 8 }}
          sx={(theme) => ({
            gap: 5,
            borderRadius: 2,
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            [theme.breakpoints.up('md')]: {
              p: 5,
              gridTemplateColumns: 'repeat(2, 1fr)',
              border: `dashed 1px ${theme.vars.palette.divider}`,
            },
          })}
        >
          <div>
            <Typography component="h6" variant="h5" sx={{ mb: { xs: 3, md: 5 } }}>
              Billing address
            </Typography>

            <Box sx={{ gap: 3, display: 'flex', flexDirection: 'column' }}>
              <TextField fullWidth label="Person name" />
              <TextField fullWidth label="Phone number" />
              <TextField fullWidth label="Email" />
              <TextField fullWidth label="Address" />
            </Box>
          </div>

          <PaymentMethods />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <PaymentSummary />
        </Grid>
      </Grid>
    </Container>
  );
}
