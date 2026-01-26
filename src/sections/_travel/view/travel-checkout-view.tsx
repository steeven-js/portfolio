import type { BoxProps } from '@mui/material/Box';
import type { ITourProps } from 'src/types/tour';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { useBoolean } from 'minimal-shared/hooks';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { Form } from 'src/components/hook-form';

import { TravelCheckOutSummary } from '../checkout/travel-check-out-summary';
import { TravelCheckOutPaymentForm } from '../checkout/travel-check-out-payment-form';
import { TravelCheckOutShippingForm } from '../checkout/travel-check-out-shipping-form';

// ----------------------------------------------------------------------

const BillingAddressSchema = z.object({
  firstName: z.string().min(1, { error: 'First name is required!' }),
  lastName: z.string().min(1, { error: 'Last name is required!' }),
  fullAddress: z.string().min(1, { error: 'Full address is required!' }),
  fullAddress2: z.string(),
});

const ShippingAddressSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  fullAddress: z.string(),
  fullAddress2: z.string(),
});

const PaymentMethodsSchema = z.object({
  methods: z.string(),
  card: z.object({
    number: z.string(),
    holder: z.string(),
    expired: z.string(),
    ccv: z.string(),
  }),
});

const TourDetailsSchema = z.object({
  id: z.string().optional(),
  slug: z.string().optional(),
  departureDay: z.union([z.string(), z.null()]),
  guests: z.object({ adults: z.number(), children: z.number() }),
});

export const TravelCheckoutSchema = z.object({
  billingAddress: BillingAddressSchema,
  shippingAddress: ShippingAddressSchema,
  paymentMethods: PaymentMethodsSchema,
  tourDetails: TourDetailsSchema,
});

export type TravelCheckoutSchemaType = z.infer<typeof TravelCheckoutSchema>;

// ----------------------------------------------------------------------

type ViewProps = {
  tour?: ITourProps;
};

export function TravelCheckoutView({ tour }: ViewProps) {
  const router = useRouter();

  const sameBilling = useBoolean();

  const defaultValues: TravelCheckoutSchemaType = {
    billingAddress: { firstName: '', lastName: '', fullAddress: '', fullAddress2: '' },
    shippingAddress: { firstName: '', lastName: '', fullAddress: '', fullAddress2: '' },
    paymentMethods: { methods: 'paypal', card: { number: '', holder: '', expired: '', ccv: '' } },
    tourDetails: {
      id: tour?.id,
      slug: tour?.slug,
      departureDay: null,
      guests: { adults: 2, children: 1 },
    },
  };

  const methods = useForm({
    resolver: zodResolver(TravelCheckoutSchema),
    defaultValues,
  });

  const { reset, handleSubmit } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      router.push(paths.travel.orderCompleted);
      console.info('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <Container sx={{ pb: { xs: 10, md: 15 } }}>
      <Typography component="h1" variant="h3" sx={{ my: { xs: 3, md: 5 } }}>
        Confirm and pay
      </Typography>

      <Form methods={methods} onSubmit={onSubmit}>
        <Grid container spacing={{ xs: 5, md: 8 }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <StepLabel title="Shipping information" step="1" />

            <TravelCheckOutShippingForm
              sameBilling={sameBilling.value}
              onChangeSameBilling={sameBilling.onToggle}
            />

            <Divider sx={{ my: 5, borderStyle: 'dashed' }} />

            <StepLabel title="Payment methods" step="2" />

            <TravelCheckOutPaymentForm
              name="paymentMethods.methods"
              options={[
                {
                  label: 'Paypal',
                  value: 'paypal',
                  description:
                    'You will be redirected to PayPal website to complete your purchase securely.',
                },
                {
                  label: 'Credit / debit',
                  value: 'creditcard',
                  description: 'We support Mastercard, Visa, Discover and Stripe.',
                },
              ]}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <TravelCheckOutSummary
              slug={tour?.slug || ''}
              price={tour?.price || 0}
              tourGuide={tour?.tourGuide}
              coverUrl={tour?.coverUrl || ''}
              ratingNumber={tour?.ratingNumber || 0}
              totalReviews={tour?.totalReviews || 0}
            />
          </Grid>
        </Grid>
      </Form>
    </Container>
  );
}

// ----------------------------------------------------------------------

type StepLabelProps = BoxProps & {
  step: string;
  title: string;
};

function StepLabel({ step, title, sx, ...other }: StepLabelProps) {
  return (
    <Box
      sx={[
        {
          mb: 3,
          gap: 1.5,
          display: 'flex',
          typography: 'h6',
          alignItems: 'center',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Box
        sx={{
          width: 28,
          height: 28,
          flexShrink: 0,
          display: 'flex',
          borderRadius: '50%',
          alignItems: 'center',
          typography: 'subtitle1',
          bgcolor: 'primary.main',
          justifyContent: 'center',
          color: 'primary.contrastText',
        }}
      >
        {step}
      </Box>

      {title}
    </Box>
  );
}
