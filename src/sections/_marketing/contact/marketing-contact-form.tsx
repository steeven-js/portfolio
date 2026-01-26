import type { BoxProps } from '@mui/material/Box';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { varAlpha } from 'minimal-shared/utils';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import FormHelperText from '@mui/material/FormHelperText';

import { fCurrency } from 'src/utils/format-number';

import { _tags } from 'src/_mock';

import { Form, Field, schemaUtils } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export type MarketingContactSchemaType = z.infer<typeof MarketingContactSchema>;

export const MarketingContactSchema = z.object({
  services: z.string().array().min(2, { error: 'Must have at least 2 items!' }),
  email: schemaUtils.email(),
  compnany: z.string().min(1, { error: 'Full name is required!' }),
  website: z.string().min(1, { error: 'Full name is required!' }),
  message: z.string().min(1, { error: 'Full name is required!' }),
  // Not required
  firstName: z.string(),
  lastName: z.string(),
  phoneNumber: z.string(),
  budget: z.number().array(),
});

// ----------------------------------------------------------------------

export function MarketingContactForm({ sx, ...other }: BoxProps) {
  const defaultValues: MarketingContactSchemaType = {
    email: '',
    website: '',
    message: '',
    services: [],
    compnany: '',
    lastName: '',
    firstName: '',
    phoneNumber: '',
    budget: [2000, 10000],
  };

  const methods = useForm({
    resolver: zodResolver(MarketingContactSchema),
    defaultValues,
  });

  const {
    watch,
    reset,
    setValue,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = methods;

  const values = watch();

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      console.info('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  const getSelected = (selectedItems: string[], item: string) =>
    selectedItems.includes(item)
      ? selectedItems.filter((value) => value !== item)
      : [...selectedItems, item];

  const renderServiceOptions = () => (
    <div>
      <Box sx={{ gap: 1, display: 'flex', flexWrap: 'wrap' }}>
        {_tags.slice(0, 5).map((service) => (
          <ButtonBase
            disableRipple
            key={service}
            onClick={() =>
              setValue('services', getSelected(values.services, service), {
                shouldValidate: true,
              })
            }
            sx={(theme) => ({
              py: 0.5,
              px: 1.25,
              borderRadius: 1,
              typography: 'body2',
              color: 'text.secondary',
              border: `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.2)}`,
              ...(values.services.includes(service) && {
                bgcolor: 'text.primary',
                color: 'background.paper',
              }),
            })}
          >
            {service}
          </ButtonBase>
        ))}
      </Box>

      {!!errors.services && (
        <FormHelperText error sx={{ px: 2 }}>
          {errors.services.message}
        </FormHelperText>
      )}
    </div>
  );

  const renderName = () => (
    <Box
      sx={{
        width: 1,
        display: 'flex',
        gap: { xs: 2.5, md: 2 },
        flexDirection: { xs: 'column', md: 'row' },
      }}
    >
      <Field.Text name="firstName" label="First name" />
      <Field.Text name="lastName" label="Last name" />
    </Box>
  );

  const renderCompnany = () => (
    <Box
      sx={{
        width: 1,
        display: 'flex',
        gap: { xs: 2.5, md: 2 },
        flexDirection: { xs: 'column', md: 'row' },
      }}
    >
      <Field.Text name="compnany" label="Compnany" />
      <Field.Text name="website" label="Website" />
    </Box>
  );

  const renderBudget = () => (
    <Box sx={{ py: 2, width: 1 }}>
      <Typography variant="overline" sx={{ color: 'text.disabled' }}>
        Your Budget
      </Typography>
      <Field.Slider
        name="budget"
        valueLabelDisplay="on"
        max={20000}
        step={1000}
        valueLabelFormat={(value) => fCurrency(value)}
        sx={{ mt: 5 }}
      />
    </Box>
  );

  return (
    <Box sx={sx} {...other}>
      <Form methods={methods} onSubmit={onSubmit}>
        <Box
          sx={{
            gap: 2.5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          {renderServiceOptions()}
          {renderName()}
          <Field.Text name="email" label="Email" />
          <Field.Text name="phoneNumber" label="Phone number" />
          {renderCompnany()}
          {renderBudget()}
          <Field.Text name="message" label="Message" multiline rows={4} />
        </Box>

        <Button
          size="large"
          color="inherit"
          type="submit"
          variant="contained"
          loading={isSubmitting}
          sx={{ mt: 3 }}
        >
          Send request
        </Button>
      </Form>
    </Box>
  );
}
