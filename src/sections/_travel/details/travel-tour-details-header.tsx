import type { ITourProps } from 'src/types/tour';

import { useState, useCallback } from 'react';
import { usePopover } from 'minimal-shared/hooks';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import Popover from '@mui/material/Popover';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { fShortenNumber } from 'src/utils/format-number';

import { _socials } from 'src/_mock';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = Partial<ITourProps>;

export function TravelTourDetailsHeader({
  slug,
  favorited,
  tourGuide,
  ratingNumber,
  totalReviews,
}: Props) {
  const openSocial = usePopover();

  const [favorite, setFavorite] = useState(favorited);

  const handleChangeFavorite = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setFavorite(event.target.checked);
  }, []);

  const renderMenuSocials = () => (
    <Popover
      open={openSocial.open}
      anchorEl={openSocial.anchorEl}
      onClose={openSocial.onClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      slotProps={{ paper: { sx: { width: 220 } } }}
    >
      {_socials.map((social) => (
        <MenuItem key={social.value} onClick={() => openSocial.onClose()} sx={{ gap: 1 }}>
          {social.value === 'twitter' && <Iconify icon="socials:twitter" />}
          {social.value === 'facebook' && <Iconify icon="socials:facebook" />}
          {social.value === 'instagram' && <Iconify icon="socials:instagram" />}
          {social.value === 'linkedin' && <Iconify icon="socials:linkedin" />}
          Share via {social.label}
        </MenuItem>
      ))}
    </Popover>
  );

  return (
    <>
      <Box
        sx={{
          mb: 3,
          gap: 3,
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        <Typography variant="h3" component="h1" sx={{ flexGrow: 1, pr: { md: 10 } }}>
          {slug}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <IconButton onClick={openSocial.onOpen} color={openSocial.open ? 'primary' : 'default'}>
            <Iconify icon="solar:share-outline" />
          </IconButton>

          <Checkbox
            color="error"
            checked={favorite}
            onChange={handleChangeFavorite}
            icon={<Iconify icon="solar:heart-outline" />}
            checkedIcon={<Iconify icon="solar:heart-bold" />}
            slotProps={{
              input: {
                id: 'favorite-checkbox',
                'aria-label': 'Favorite checkbox',
              },
            }}
          />
        </Box>
      </Box>

      <Box sx={{ gap: 3, display: 'flex', flexWrap: 'wrap' }}>
        <Box
          sx={{
            gap: 0.5,
            display: 'flex',
            typography: 'h6',
            alignItems: 'center',
          }}
        >
          <Iconify icon="eva:star-fill" sx={{ color: 'warning.main' }} />

          {Number.isInteger(ratingNumber) ? `${ratingNumber}.0` : ratingNumber}

          <Link variant="body2" sx={{ color: 'text.secondary' }}>
            ({fShortenNumber(totalReviews)} reviews)
          </Link>
        </Box>

        <Box sx={{ gap: 0.5, display: 'flex', alignItems: 'center' }}>
          <Avatar src={tourGuide?.avatarUrl} sx={{ width: 24, height: 24 }} />

          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Guide by
          </Typography>

          <Link variant="subtitle2" color="inherit">
            {tourGuide?.name}
          </Link>
        </Box>
      </Box>

      {renderMenuSocials()}
    </>
  );
}
