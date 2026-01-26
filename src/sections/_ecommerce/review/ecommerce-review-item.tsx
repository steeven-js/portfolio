import type { Theme, SxProps } from '@mui/material/styles';
import type { IReviewItemProp } from 'src/types/review';

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { svgIconClasses } from '@mui/material/SvgIcon';

import { fDate } from 'src/utils/format-time';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = Partial<IReviewItemProp> & {
  sx?: SxProps<Theme>;
};

export function EcommerceReviewItem({ name, rating, message, createdAt, avatarUrl, sx }: Props) {
  const renderContent = () => (
    <Box sx={{ gap: 1, display: 'flex', flexDirection: 'column' }}>
      <Rating
        size="small"
        value={rating}
        precision={0.5}
        readOnly
        sx={{ [`& .${svgIconClasses.root}`]: { color: 'text.primary' } }}
      />

      <Typography variant="subtitle1">{name}</Typography>

      {createdAt && (
        <Typography variant="caption" sx={{ color: 'text.disabled' }}>
          {fDate(createdAt)}
        </Typography>
      )}

      <Typography variant="body2">{message}</Typography>

      <Box
        sx={{
          gap: 1.5,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        <Typography variant="subtitle2">Was this review helpful?</Typography>

        <ButtonBase disableRipple sx={{ gap: 0.5, fontWeight: 'fontWeightSemiBold' }}>
          <Iconify width={18} icon="solar:like-outline" /> Yes
        </ButtonBase>

        <ButtonBase disableRipple sx={{ gap: 0.5, fontWeight: 'fontWeightSemiBold' }}>
          <Iconify width={18} icon="solar:like-outline" sx={{ transform: 'scale(-1, -1)' }} />
          No
        </ButtonBase>
      </Box>
    </Box>
  );

  return (
    <Box
      sx={[
        (theme) => ({
          py: 4,
          display: 'flex',
          borderBottom: `solid 1px ${theme.vars.palette.divider}`,
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Avatar alt={name} src={avatarUrl} sx={{ width: 64, height: 64, mr: 2.5 }} />

      {renderContent()}
    </Box>
  );
}
