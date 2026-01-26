import type { BoxProps } from '@mui/material/Box';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Form, Field, schemaUtils } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export type CareerContactSchemaType = z.infer<typeof CareerContactSchema>;

export const CareerContactSchema = z.object({
  fullName: z.string().min(1, { error: 'Full name is required!' }),
  subject: z.string().min(1, { error: 'Subject is required!' }),
  message: z.string().min(1, { error: 'Message is required!' }),
  email: schemaUtils.email(),
});

// ----------------------------------------------------------------------

export function CareerContactForm({ sx, ...other }: BoxProps) {
  const defaultValues: CareerContactSchemaType = {
    fullName: '',
    subject: '',
    email: '',
    message: '',
  };

  const methods = useForm({
    resolver: zodResolver(CareerContactSchema),
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
      console.info('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  const renderTexts = () => (
    <>
      <Typography variant="h3">Drop us a line</Typography>
      <Typography sx={{ mt: 2, mb: 5, color: 'text.secondary' }}>
        We normally respond within 2 business days.
      </Typography>
    </>
  );

  const renderForm = () => (
    <Box sx={{ gap: 2.5, display: 'flex', flexDirection: 'column' }}>
      <Field.Text name="fullName" label="Full name" />
      <Field.Text name="email" label="Email" />
      <Field.Text name="subject" label="Subject" />
      <Field.Text name="message" multiline rows={4} label="Message" />

      <Button
        size="large"
        type="submit"
        variant="contained"
        color="inherit"
        loading={isSubmitting}
        sx={{ mx: 'auto' }}
      >
        Send message
      </Button>
    </Box>
  );

  return (
    <Box
      component="section"
      sx={[
        {
          py: 10,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container>
        <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
          <Grid size={{ xs: 12, md: 8 }} sx={{ textAlign: 'center' }}>
            {renderTexts()}

            <Form methods={methods} onSubmit={onSubmit}>
              {renderForm()}
            </Form>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
