import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function PaymentSummary({ sx, ...other }: BoxProps) {
  const renderSubscription = () => (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography variant="body2" sx={{ flexGrow: 1, color: 'text.secondary' }}>
        Subscription
      </Typography>
      <Label color="error">PREMIUM</Label>
    </Box>
  );

  const renderPlanSwitch = () => (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography variant="body2" sx={{ flexGrow: 1, color: 'text.secondary' }}>
        Billed monthly
      </Typography>
      <Switch
        defaultChecked
        slotProps={{
          input: {
            id: 'plan-switch',
            'aria-label': 'Plan switch',
          },
        }}
      />
    </Box>
  );

  const renderPrices = () => (
    <Box sx={{ gap: 1, display: 'flex', justifyContent: 'flex-end' }}>
      <Box component="span" sx={{ typography: 'h5' }}>
        $
      </Box>

      <Box component="span" sx={{ typography: 'h2' }}>
        9.99
      </Box>

      <Typography component="span" sx={{ mb: 1, alignSelf: 'center', color: 'text.secondary' }}>
        /mo
      </Typography>
    </Box>
  );

  const renderTotalBilled = () => (
    <Box sx={{ display: 'flex', alignItems: 'center', typography: 'h6' }}>
      <Box component="span" sx={{ flexGrow: 1 }}>
        Total billed
      </Box>
      <Box component="span">$9.99*</Box>
    </Box>
  );

  const renderTaxCaption = () => (
    <Typography
      variant="caption"
      sx={{
        mt: 2,
        display: 'block',
        textAlign: 'right',
        color: 'text.secondary',
      }}
    >
      * Plus applicable taxes
    </Typography>
  );

  const renderPaymentNotice = () => (
    <>
      <Box
        sx={{
          mb: 1,
          gap: 1,
          display: 'flex',
          alignItems: 'center',
          typography: 'subtitle2',
          justifyContent: 'center',
        }}
      >
        <Iconify icon="solar:shield-check-outline" sx={{ color: 'success.main' }} />
        Secure credit card payment
      </Box>
      <Typography
        variant="caption"
        sx={{ display: 'block', textAlign: 'center', color: 'text.disabled' }}
      >
        This is a secure 128-bit SSL encrypted payment
      </Typography>
    </>
  );

  return (
    <Box
      sx={[
        {
          p: 5,
          borderRadius: 2,
          bgcolor: 'background.neutral',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Typography component="h6" variant="h5" sx={{ mb: { xs: 3, md: 5 } }}>
        Summary
      </Typography>

      <Box sx={{ gap: 2.5, display: 'flex', flexDirection: 'column' }}>
        {renderSubscription()}
        {renderPlanSwitch()}
        {renderPrices()}
        <Divider sx={{ borderStyle: 'dashed' }} />
        {renderTotalBilled()}
        <Divider sx={{ borderStyle: 'dashed' }} />
      </Box>

      {renderTaxCaption()}

      <Button
        fullWidth
        size="large"
        color="inherit"
        type="submit"
        variant="contained"
        sx={{ my: 3 }}
      >
        Upgrade my plan
      </Button>

      {renderPaymentNotice()}
    </Box>
  );
}
