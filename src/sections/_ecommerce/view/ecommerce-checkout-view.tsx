import type { IProductItemProps } from 'src/types/product';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { useBoolean } from 'minimal-shared/hooks';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Collapse, { collapseClasses } from '@mui/material/Collapse';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { Iconify } from 'src/components/iconify';
import { Form, schemaUtils } from 'src/components/hook-form';

import { PaymentCardCreateForm } from 'src/sections/payment/payment-card-create-form';

import { EcommerceCheckoutOrderSummary } from '../checkout/ecommerce-checkout-order-summary';
import { EcommerceCheckoutPaymentMethod } from '../checkout/ecommerce-checkout-payment-method';
import { EcommerceCheckoutShippingMethod } from '../checkout/ecommerce-checkout-shipping-method';
import { EcommerceCheckoutShippingDetails } from '../checkout/ecommerce-checkout-shipping-details';
import { EcommerceCheckoutPersonalDetails } from '../checkout/ecommerce-checkout-personal-details';

// ----------------------------------------------------------------------

const SHIPPING_OPTIONS = [
  { label: 'Free', value: 'free', description: '5-7 days delivery', price: 0 },
  { label: 'Standard', value: 'standard', description: '3-5 days delivery', price: 10 },
  { label: 'Express', value: 'express', description: '2-3 days delivery', price: 20 },
];

const PAYMENT_OPTIONS = [
  { label: 'Paypal', value: 'paypal', description: '**** **** **** 1234' },
  { label: 'Mastercard', value: 'mastercard', description: '**** **** **** 3456' },
  { label: 'Visa', value: 'visa', description: '**** **** **** 6789' },
];

// ----------------------------------------------------------------------

const PersonalDetailsSchema = z.object({
  firstName: z.string().min(1, { error: 'First name is required!' }),
  lastName: z.string().min(1, { error: 'Last name is required!' }),
  email: schemaUtils.email(),
  phoneNumber: z.string().min(1, { error: 'Phone number is required!' }),
  password: z
    .string()
    .min(1, { error: 'Password is required!' })
    .min(6, { error: 'Password must be at least 6 characters!' }),
  confirmPassword: z.string().min(1, { error: 'Confirm password is required!' }),
});

const ShippingDetailsSchema = z.object({
  streetAddress: z.string().min(1, { error: 'Street address is required!' }),
  city: z.string().min(1, { error: 'City is required!' }),
  country: schemaUtils.nullableInput(z.string().min(1, { error: 'Country is required!' }), {
    error: 'Country is required!',
  }),
  zipCode: z.string(),
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

export const EcommerceCheckoutSchema = z.object({
  personal: PersonalDetailsSchema,
  shippingDetails: ShippingDetailsSchema,
  shippingMethod: z.string(),
  paymentMethods: PaymentMethodsSchema,
});

type EcommerceCheckoutSchemaType = z.infer<typeof EcommerceCheckoutSchema>;

// ----------------------------------------------------------------------

type ViewProps = {
  products?: IProductItemProps[];
};

export function EcommerceCheckoutView({ products }: ViewProps) {
  const router = useRouter();

  const openForm = useBoolean();

  const defaultValues: EcommerceCheckoutSchemaType = {
    personal: {
      firstName: 'Jayvion',
      lastName: 'Simon',
      email: 'nannie.abernathy70@yahoo.com',
      phoneNumber: '365-374-4961',
      password: '',
      confirmPassword: '',
    },
    shippingDetails: { city: '', zipCode: '', streetAddress: '', country: 'United States' },
    shippingMethod: 'free',
    paymentMethods: { methods: 'paypal', card: { number: '', holder: '', expired: '', ccv: '' } },
  };

  const methods = useForm({
    resolver: zodResolver(EcommerceCheckoutSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      router.push(paths.eCommerce.orderCompleted);
      console.info('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  const renderPersonal = () => (
    <div>
      <StepLabel title="Personal details" step="1" />
      <EcommerceCheckoutPersonalDetails />
    </div>
  );

  const renderShippingDetails = () => (
    <div>
      <StepLabel title="Shipping details" step="2" />
      <EcommerceCheckoutShippingDetails />
    </div>
  );

  const renderShippingMethod = () => (
    <div>
      <StepLabel title="Shipping method" step="3" />
      <EcommerceCheckoutShippingMethod name="shippingMethod" options={SHIPPING_OPTIONS} />
    </div>
  );

  const renderPaymentMethods = () => (
    <>
      <StepLabel title="Payment method" step="4" />
      <EcommerceCheckoutPaymentMethod name="paymentMethods.methods" options={PAYMENT_OPTIONS} />
    </>
  );

  const renderAddNewCard = () => (
    <>
      <Box sx={{ textAlign: 'right' }}>
        <Button
          color={openForm.value ? 'error' : 'inherit'}
          startIcon={openForm.value ? null : <Iconify width={24} icon="mingcute:add-line" />}
          onClick={openForm.onToggle}
        >
          {openForm.value ? 'Cancel' : 'Add card'}
        </Button>
      </Box>

      <Collapse
        in={openForm.value}
        unmountOnExit
        sx={{
          [`& .${collapseClasses.wrapperInner}`]: {
            pt: 3,
            gap: 2.5,
            display: 'flex',
            alignItems: 'flex-end',
            flexDirection: 'column',
          },
        }}
      >
        <PaymentCardCreateForm
          isRHF
          numberField={{ name: 'paymentMethods.card.number' }}
          holderField={{ name: 'paymentMethods.card.holder' }}
          dateField={{ name: 'paymentMethods.card.expired' }}
          cvvField={{ name: 'paymentMethods.card.ccv' }}
        />
        <Button variant="contained">Apply</Button>
      </Collapse>
    </>
  );

  return (
    <Container sx={{ pb: 10 }}>
      <Typography variant="h3" sx={{ my: { xs: 3, md: 5 } }}>
        Checkout
      </Typography>

      <Form methods={methods} onSubmit={onSubmit}>
        <Grid container spacing={{ xs: 5, md: 8 }}>
          <Grid size={{ xs: 12, md: 8 }}>
            {renderPersonal()}
            <Divider sx={{ my: 5 }} />

            {renderShippingDetails()}
            <Divider sx={{ my: 5 }} />

            {renderShippingMethod()}
            <Divider sx={{ my: 5 }} />

            {renderPaymentMethods()}
            <Divider sx={{ my: 3 }} />

            {renderAddNewCard()}
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <EcommerceCheckoutOrderSummary
              tax={7}
              total={357.09}
              subtotal={89.09}
              shipping={55.47}
              discount={16.17}
              products={products}
              loading={isSubmitting}
            />
          </Grid>
        </Grid>
      </Form>
    </Container>
  );
}

// ----------------------------------------------------------------------

type StepLabelProps = {
  step: string;
  title: string;
};

function StepLabel({ step, title }: StepLabelProps) {
  return (
    <Box
      sx={{
        mb: 3,
        gap: 1.5,
        display: 'flex',
        typography: 'h6',
        alignItems: 'center',
      }}
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
