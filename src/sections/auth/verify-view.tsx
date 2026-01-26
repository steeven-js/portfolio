import type { VerifySchemaType } from './components/schema';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/global-config';

import { Form, Field } from 'src/components/hook-form';

import { FormHead } from './components/form-head';
import { VerifySchema } from './components/schema';
import { FormReturnLink } from './components/form-return-link';
import { FormResendCode } from './components/form-resend-code';

// ----------------------------------------------------------------------

export function VerifyView() {
  const defaultValues: VerifySchemaType = {
    code: '',
  };

  const methods = useForm({
    mode: 'onChange',
    resolver: zodResolver(VerifySchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      console.info('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  const renderForm = () => (
    <Box sx={{ gap: 3, display: 'flex', flexDirection: 'column' }}>
      <Field.Code name="code" />

      <Button
        fullWidth
        size="large"
        color="inherit"
        type="submit"
        variant="contained"
        loading={isSubmitting}
      >
        Verify
      </Button>
    </Box>
  );

  return (
    <>
      <FormHead
        icon={
          <Box
            component="img"
            alt="Email inbox"
            src={`${CONFIG.assetsDir}/assets/icons/auth/ic-email-inbox.svg`}
            sx={{ width: 96, height: 96 }}
          />
        }
        title="Check your email"
        description={`We've emailed a 6-digit confirmation code. Please enter the code in below box to verify your email.`}
      />

      <Form methods={methods} onSubmit={onSubmit}>
        {renderForm()}
      </Form>

      <FormResendCode onResendCode={() => {}} value={0} disabled={false} />

      <FormReturnLink href={paths.centered.signIn} />
    </>
  );
}
