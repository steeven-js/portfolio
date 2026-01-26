import type { DialogProps } from '@mui/material/Dialog';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

import { Form, Field, schemaUtils } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export type ReviewCreateSchemaType = z.infer<typeof ReviewCreateSchema>;

export const ReviewCreateSchema = z.object({
  rating: z.number().min(1, 'Rating must be greater than or equal to 1!'),
  name: z.string().min(1, { error: 'Name is required!' }),
  review: z.string().min(1, { error: 'Review is required!' }),
  email: schemaUtils.email(),
});

// ----------------------------------------------------------------------

type Props = DialogProps & {
  onClose: () => void;
};

export function ReviewCreateForm({ onClose, ...other }: Props) {
  const defaultValues: ReviewCreateSchemaType = {
    rating: 0,
    review: '',
    name: '',
    email: '',
  };

  const methods = useForm({
    resolver: zodResolver(ReviewCreateSchema),
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
      onClose();
      console.info('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <Dialog fullWidth maxWidth="sm" onClose={onClose} {...other}>
      <Form methods={methods} onSubmit={onSubmit}>
        <DialogTitle sx={{ typography: 'h3', pb: 3 }}>Review</DialogTitle>

        <DialogContent
          sx={{
            py: 0,
            gap: 2.5,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              Your rating:
            </Typography>
            <Field.Rating name="rating" />
          </div>

          <Field.Text multiline rows={3} name="review" label="Review *" />
          <Field.Text name="name" label="Name *" />
          <Field.Text name="email" label="Email address *" />
        </DialogContent>

        <DialogActions>
          <Button variant="outlined" onClick={onClose} color="inherit">
            Cancel
          </Button>
          <Button color="inherit" type="submit" variant="contained" loading={isSubmitting}>
            Post review
          </Button>
        </DialogActions>
      </Form>
    </Dialog>
  );
}
