import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { varAlpha } from 'minimal-shared/utils';
import { useBoolean } from 'minimal-shared/hooks';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';

import { Iconify } from 'src/components/iconify';
import { Form, Field, schemaUtils } from 'src/components/hook-form';

import { UserPhoto } from 'src/sections/_account/layout';

// ----------------------------------------------------------------------

export type AccountPersonalSchemaType = z.infer<typeof AccountPersonalSchema>;

export const AccountPersonalSchema = z.object({
  firstName: z.string().min(1, { error: 'First name is required!' }),
  lastName: z.string().min(1, { error: 'Last name is required!' }),
  email: schemaUtils.email(),
  phoneNumber: z.string().min(1, { error: 'Phone number is required!' }),
  birthday: schemaUtils.date({ error: { required: 'Birthday is required!' } }),
  gender: z.string().min(1, { error: 'Gender is required!' }),
  streetAddress: z.string().min(1, { error: 'Street address is required!' }),
  city: z.string().min(1, { error: 'City is required!' }),
  country: schemaUtils.nullableInput(z.string().min(1, { error: 'Country is required!' }), {
    error: 'Country is required!',
  }),
  //
  zipCode: z.string(),
});

export type AccountPasswordSchemaType = z.infer<typeof AccountPasswordSchema>;

export const AccountPasswordSchema = z
  .object({
    oldPassword: z
      .string()
      .min(1, { error: 'Password is required!' })
      .min(6, { error: 'Password must be at least 6 characters!' }),
    newPassword: z.string().min(1, { error: 'New password is required!' }),
    confirmNewPassword: z.string().min(1, { error: 'Confirm password is required!' }),
  })
  .refine((val) => val.oldPassword !== val.newPassword, {
    error: 'New password must be different than old password',
    path: ['newPassword'],
  })
  .refine((val) => val.newPassword === val.confirmNewPassword, {
    error: 'Passwords do not match!',
    path: ['confirmNewPassword'],
  });

// ----------------------------------------------------------------------

export function AccountPersonalView() {
  const passwordShow = useBoolean();

  const personalMethods = useForm({
    resolver: zodResolver(AccountPersonalSchema),
    defaultValues: {
      firstName: 'Jayvion',
      lastName: 'Simon',
      email: 'nannie.abernathy70@yahoo.com',
      phoneNumber: '365-374-4961',
      birthday: null,
      gender: 'Male',
      streetAddress: '',
      zipCode: '',
      city: '',
      country: '',
    },
  });

  const onSubmitPersonal = personalMethods.handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      personalMethods.reset();
      console.info('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  const passwordMethods = useForm({
    resolver: zodResolver(AccountPasswordSchema),
    defaultValues: { oldPassword: '', newPassword: '', confirmNewPassword: '' },
  });

  const onSubmitPassword = passwordMethods.handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      passwordMethods.reset();
      console.info('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  const renderPersonalForm = () => (
    <>
      <Field.Text name="firstName" label="First name" />
      <Field.Text name="lastName" label="Last name" />
      <Field.Text name="email" label="Email address" />
      <Field.Text name="phoneNumber" label="Phone number" />
      <Field.DatePicker name="birthday" label="Birthday" />
      <Field.Select name="gender" label="Gender" slotProps={{ select: { native: true } }}>
        {['Male', 'Female', 'Other'].map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Field.Select>
      <Field.Text name="streetAddress" label="Street address" />
      <Field.Text name="zipCode" label="Zip/code" />
      <Field.Text name="city" label="City" />
      <Field.CountrySelect
        fullWidth
        name="country"
        label="Country"
        placeholder="Choose a country"
      />
    </>
  );

  const renderChangePasswordForm = () => (
    <>
      <Field.Text
        name="oldPassword"
        label="Old password"
        type={passwordShow.value ? 'text' : 'password'}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={passwordShow.onToggle} edge="end">
                  <Iconify
                    icon={passwordShow.value ? 'solar:eye-outline' : 'solar:eye-closed-outline'}
                  />
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />
      <Field.Text
        name="newPassword"
        label="New password"
        type={passwordShow.value ? 'text' : 'password'}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={passwordShow.onToggle} edge="end">
                  <Iconify
                    icon={passwordShow.value ? 'solar:eye-outline' : 'solar:eye-closed-outline'}
                  />
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />
      <Field.Text
        name="confirmNewPassword"
        label="Confirm password"
        type={passwordShow.value ? 'text' : 'password'}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={passwordShow.onToggle} edge="end">
                  <Iconify
                    icon={passwordShow.value ? 'solar:eye-outline' : 'solar:eye-closed-outline'}
                  />
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />
    </>
  );

  return (
    <>
      <div>
        <Typography component="h6" variant="h5">
          Personal
        </Typography>

        <UserPhoto
          sx={(theme) => ({
            p: 3,
            mt: 3,
            borderRadius: 2,
            display: { xs: 'flex', md: 'none' },
            border: `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.24)}`,
          })}
        />

        <Form methods={personalMethods} onSubmit={onSubmitPersonal}>
          <Box
            sx={{
              my: 3,
              rowGap: 2.5,
              columnGap: 2,
              display: 'grid',
              gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' },
            }}
          >
            {renderPersonalForm()}
          </Box>

          <Box sx={{ textAlign: 'right' }}>
            <Button
              color="inherit"
              type="submit"
              variant="contained"
              loading={personalMethods.formState.isSubmitting}
            >
              Save changes
            </Button>
          </Box>
        </Form>
      </div>

      <Divider sx={{ borderStyle: 'dashed', my: 5 }} />

      <div>
        <Typography component="h6" variant="h5">
          Change password
        </Typography>

        <Form methods={passwordMethods} onSubmit={onSubmitPassword}>
          <Box
            sx={{
              my: 3,
              gap: 2.5,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {renderChangePasswordForm()}
          </Box>

          <Box sx={{ textAlign: 'right' }}>
            <Button
              color="inherit"
              type="submit"
              variant="contained"
              loading={passwordMethods.formState.isSubmitting}
            >
              Save changes
            </Button>
          </Box>
        </Form>
      </div>
    </>
  );
}
