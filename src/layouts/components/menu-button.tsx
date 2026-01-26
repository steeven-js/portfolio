import type { IconButtonProps } from '@mui/material/IconButton';

import SvgIcon from '@mui/material/SvgIcon';
import IconButton from '@mui/material/IconButton';

// ----------------------------------------------------------------------

export type MenuButtonProps = IconButtonProps;

export function MenuButton({ sx, ...other }: IconButtonProps) {
  return (
    <IconButton color="inherit" sx={sx} {...other}>
      <SvgIcon>
        <path
          d="M5 18H13M5 12H19M5 6H13"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </SvgIcon>
    </IconButton>
  );
}
