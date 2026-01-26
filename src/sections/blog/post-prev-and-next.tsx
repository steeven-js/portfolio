import type { ButtonBaseProps } from '@mui/material/ButtonBase';

import React from 'react';

import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

type PostItemProps = ButtonBaseProps & {
  href?: string;
  title?: string;
  isNext?: boolean;
  coverUrl?: string;
};

export function PrevNextButton({ coverUrl, title, isNext, href, sx, ...other }: PostItemProps) {
  return (
    <ButtonBase
      disableRipple
      component={RouterLink}
      href={href}
      sx={[
        {
          pl: 1,
          gap: 2,
          p: 2.5,
          borderRadius: 2,
          textAlign: 'left',
          ...(isNext && { pr: 1, textAlign: 'right', flexDirection: 'row-reverse' }),
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Iconify
        width={24}
        icon={isNext ? 'carbon:chevron-right' : 'carbon:chevron-left'}
        sx={{ color: 'action.active' }}
      />

      <Avatar src={coverUrl} sx={{ width: 64, height: 64 }} />

      <div>
        <Typography variant="overline" sx={{ mb: 0.5, display: 'block', color: 'text.disabled' }}>
          {isNext ? 'Next' : 'Prev'}
        </Typography>

        <Typography variant="subtitle1">{title}</Typography>
      </div>
    </ButtonBase>
  );
}
