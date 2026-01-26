import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';

import { Field } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export function EcommerceCheckoutShippingDetails({ sx, ...other }: BoxProps) {
  return (
    <Box
      sx={[
        {
          rowGap: 2.5,
          columnGap: 2,
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Field.Text name="shippingDetails.streetAddress" label="Street address" />
      <Field.Text name="shippingDetails.zipCode" label="ZIP/code" />
      <Field.Text name="shippingDetails.city" label="City" />
      <Field.CountrySelect
        fullWidth
        name="shippingDetails.country"
        label="Country"
        placeholder="Choose a country"
      />
    </Box>
  );
}
