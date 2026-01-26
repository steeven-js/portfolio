import type { ThemeOptions } from './types';

// ----------------------------------------------------------------------

export const themeOverrides: ThemeOptions = {
  components: {
    MuiFormControl: {
      defaultProps: { variant: 'filled' },
    },
    MuiTextField: {
      defaultProps: { variant: 'filled' },
    },
    MuiPickersTextField: {
      defaultProps: { variant: 'filled' },
    },
  },
};
