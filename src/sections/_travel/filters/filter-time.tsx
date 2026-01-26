import type { TextFieldProps } from '@mui/material/TextField';
import type { DatePickerProps } from '@mui/x-date-pickers/DatePicker';

import { merge } from 'es-toolkit';
import { useBoolean } from 'minimal-shared/hooks';

import InputAdornment from '@mui/material/InputAdornment';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { pickersSectionListClasses } from '@mui/x-date-pickers/PickersSectionList';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function FilterTime({ slots, slotProps, sx, ...other }: DatePickerProps) {
  const openPicker = useBoolean(false);

  const textFieldProps: TextFieldProps = {
    onClick: openPicker.onTrue,
    variant: 'standard',
    sx: [
      {
        height: 56,
        minHeight: 28,
      },
      ...(Array.isArray(sx) ? sx : [sx]),
    ],
    InputProps: {
      disableUnderline: true,
      startAdornment: (
        <InputAdornment position="start" sx={{ mr: 2, color: 'text.disabled' }}>
          <Iconify width={24} icon="solar:calendar-mark-outline" />
        </InputAdornment>
      ),
      sx: {
        height: 1,
        color: 'inherit',
        typography: 'subtitle1',
        [`& .${pickersSectionListClasses.root}`]: { p: 0 },
      },
    },
  };

  return (
    <DatePicker
      open={openPicker.value}
      onClose={openPicker.onFalse}
      slots={{
        ...slots,
        openPickerButton: () => null,
      }}
      slotProps={{
        ...slotProps,
        textField: merge(textFieldProps, slotProps?.textField ?? {}),
      }}
      {...other}
    />
  );
}
