import type { BoxProps } from '@mui/material/Box';

import dayjs from 'dayjs';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { fDate } from 'src/utils/format-time';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  voucher: {
    type: string;
    dueOn: string;
    label: string;
    title: string;
    description: string;
  };
};

export function AccountVoucherItem({ voucher, sx, ...other }: Props) {
  const dayLeft = dayjs(voucher.dueOn).diff(new Date(), 'days');

  const renderTime = () => (
    <Box
      sx={{
        gap: 1,
        display: 'flex',
        alignItems: 'center',
        typography: 'caption',
        color: 'text.secondary',
        ...(dayLeft === 0 && { color: 'error.main' }),
        ...(dayLeft === 1 && { color: 'warning.main' }),
      }}
    >
      <Iconify width={16} icon="solar:clock-circle-outline" />

      {(dayLeft === 0 && `Expired`) ||
        (dayLeft === 1 && `${dayLeft} day left`) ||
        `Valid till: ${fDate(voucher.dueOn)}`}
    </Box>
  );

  return (
    <Box
      sx={[
        (theme) => ({
          display: 'flex',
          minHeight: 120,
          borderRadius: 1,
          overflow: 'hidden',
          border: `dashed 1px ${theme.vars.palette.divider}`,
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Box
        sx={[
          (theme) => ({
            px: 2,
            gap: 1,
            width: 120,
            flexShrink: 0,
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            typography: 'overline',
            flexDirection: 'column',
            justifyContent: 'center',
            borderRight: `dashed 1px ${theme.vars.palette.divider}`,
          }),
        ]}
      >
        {getIcon(voucher.type)}

        {voucher.label}
      </Box>

      <Box sx={{ p: 2.5 }}>
        <Typography variant="h6">{voucher.title}</Typography>
        <Typography variant="body2" sx={{ mt: 0.5, mb: 1 }}>
          {voucher.description}
        </Typography>

        {renderTime()}
      </Box>
    </Box>
  );
}

// ----------------------------------------------------------------------

function getIcon(type: string) {
  let icon;

  switch (type) {
    case 'shipping':
      icon = <Iconify width={32} icon="carbon:delivery" />;
      break;
    case 'category':
      icon = <Iconify width={32} icon="carbon:cut-out" />;
      break;
    default:
      icon = <Iconify width={32} icon="eva:star-outline" />;
  }

  return icon;
}
