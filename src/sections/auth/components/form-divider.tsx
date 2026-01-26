import type { Theme, SxProps } from '@mui/material/styles';

import Divider from '@mui/material/Divider';

// ----------------------------------------------------------------------

type FormDividerProps = {
  sx?: SxProps<Theme>;
  label: React.ReactNode;
};

export function FormDivider({ sx, label }: FormDividerProps) {
  return (
    <Divider
      sx={[
        {
          my: 3,
          typography: 'body2',
          color: 'text.disabled',
          fontWeight: 'fontWeightMedium',
          '&::before, &::after': { borderTopStyle: 'dashed' },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {label}
    </Divider>
  );
}
