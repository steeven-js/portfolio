import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { svgIconClasses } from '@mui/material/SvgIcon';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  value: number;
  label: string;
};

export function ProductRating({ value, label, sx, ...other }: Props) {
  return (
    <Box
      sx={[{ gap: 0.5, display: 'flex', alignItems: 'center' }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...other}
    >
      <Rating
        readOnly
        value={value}
        precision={0.5}
        sx={{ [`& .${svgIconClasses.root}`]: { width: 12, height: 12 } }}
      />
      {label && (
        <Typography variant="caption" sx={{ color: 'text.disabled' }}>
          {label}
        </Typography>
      )}
    </Box>
  );
}
