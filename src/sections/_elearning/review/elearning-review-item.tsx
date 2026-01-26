import type { Theme, SxProps } from '@mui/material/styles';
import type { IReviewItemProp } from 'src/types/review';

import { useBoolean } from 'minimal-shared/hooks';

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

import { fDate } from 'src/utils/format-time';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

const AVATAR_SIZE = 64;

const WIDTH = `calc(100% - ${AVATAR_SIZE + 20}px)`;

type Props = Partial<IReviewItemProp> & {
  tagUser?: string;
  hasReply?: boolean;
  sx?: SxProps<Theme>;
};

export function ElearningReviewItem({
  sx,
  name,
  rating,
  message,
  tagUser,
  createdAt,
  hasReply,
  avatarUrl,
  helpful = 0,
}: Props) {
  const openReply = useBoolean();

  const clickedHelpful = useBoolean();

  const renderActions = () => (
    <Box
      sx={{
        mt: 2,
        gap: 2,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <ButtonBase
        disableRipple
        onClick={clickedHelpful.onToggle}
        sx={{
          gap: 1,
          fontWeight: 'fontWeightSemiBold',
          ...(clickedHelpful.value && { color: 'primary.main' }),
        }}
      >
        <Iconify width={18} icon="solar:like-outline" /> Helpful ({helpful})
      </ButtonBase>

      <Box
        sx={{
          width: 4,
          height: 4,
          borderRadius: '50%',
          bgcolor: 'text.disabled',
        }}
      />

      <ButtonBase
        disableRipple
        onClick={openReply.onToggle}
        sx={{ fontWeight: 'fontWeightSemiBold' }}
      >
        Reply
      </ButtonBase>
    </Box>
  );

  return (
    <>
      <Box
        sx={[
          {
            py: 3,
            display: 'flex',
            alignItems: 'flex-start',
            ...(hasReply && { ml: 'auto', width: WIDTH }),
          },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
      >
        <Avatar
          alt={name}
          src={avatarUrl}
          sx={{ width: AVATAR_SIZE, height: AVATAR_SIZE, mr: 2.5 }}
        />

        <Box sx={{ flex: '1 1 auto' }}>
          <Box
            sx={{
              gap: 1,
              display: 'flex',
              alignItems: { sm: 'center' },
              justifyContent: { sm: 'space-between' },
              flexDirection: { xs: 'column', sm: 'row' },
            }}
          >
            <Typography variant="subtitle2">{name}</Typography>
            {!hasReply && <Rating size="small" value={rating} precision={0.5} readOnly />}
          </Box>

          {createdAt && (
            <Typography
              variant="body2"
              sx={{ mb: 1, mt: { xs: 1, sm: 0.5 }, color: 'text.disabled' }}
            >
              {fDate(createdAt)}
            </Typography>
          )}

          <Typography variant="body2">
            {tagUser && <strong>{`@${tagUser} `}</strong>}
            {message}
          </Typography>

          {!hasReply && renderActions()}

          {!hasReply && openReply.value && (
            <TextField
              fullWidth
              hiddenLabel
              placeholder="Write comment..."
              slotProps={{ input: { sx: { height: 48 } } }}
              sx={{ mt: 3 }}
            />
          )}
        </Box>
      </Box>

      <Divider sx={{ ml: 'auto', width: WIDTH }} />
    </>
  );
}
