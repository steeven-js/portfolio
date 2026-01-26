import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';

import { Field } from 'src/components/hook-form';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  sameBilling: boolean;
  onChangeSameBilling: () => void;
};

export function TravelCheckOutShippingForm({
  sx,
  sameBilling,
  onChangeSameBilling,
  ...other
}: Props) {
  return (
    <Box
      sx={[
        {
          gap: 5,
          display: 'flex',
          flexDirection: 'column',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <div>
        <Typography variant="overline" sx={{ mb: 3, display: 'block', color: 'text.secondary' }}>
          Billing Address
        </Typography>

        <Box
          sx={{
            display: 'flex',
            gap: { xs: 2.5, md: 2 },
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          <Field.Text name="billingAddress.firstName" label="First name" />
          <Field.Text name="billingAddress.lastName" label="Last name" />
        </Box>
        <Field.Text name="billingAddress.fullAddress" label="Full address 1" sx={{ my: 2.5 }} />
        <Field.Text name="billingAddress.fullAddress2" label="Full address 2 (optional)" />
      </div>

      <div>
        <Box
          sx={{
            mb: 2,
            gap: 3,
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
        >
          <Typography variant="overline" sx={{ color: 'text.secondary', flexGrow: 1 }}>
            Shipping Address
          </Typography>

          <FormControlLabel
            control={
              <Switch
                checked={sameBilling}
                onClick={onChangeSameBilling}
                slotProps={{
                  input: {
                    id: 'billing-address-switch',
                  },
                }}
              />
            }
            label="Same as billing address"
            labelPlacement="start"
            sx={{ m: 0 }}
          />
        </Box>

        <Collapse in={!sameBilling}>
          <Box
            sx={{
              display: 'flex',
              gap: { xs: 2.5, md: 2 },
              flexDirection: { xs: 'column', md: 'row' },
            }}
          >
            <Field.Text name="shippingAddress.firstName" label="First name" />
            <Field.Text name="shippingAddress.lastName" label="Last name" />
          </Box>

          <Field.Text name="shippingAddress.fullAddress" label="Full address 1" sx={{ my: 2.5 }} />
          <Field.Text name="shippingAddress.fullAddress2" label="Full address 2 (optional)" />
        </Collapse>
      </div>
    </Box>
  );
}
