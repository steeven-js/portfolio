import type { AdvancedMarkerProps } from '@vis.gl/react-google-maps';
import type { MapLocationProps } from './types';

import { InfoWindow, AdvancedMarker, useAdvancedMarkerRef } from '@vis.gl/react-google-maps';

import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

type MarkerWithInfoProps = AdvancedMarkerProps & {
  open?: boolean;
  onClose?: () => void;
  location: MapLocationProps;
};

export function MarkerWithInfo({ open, onClose, location, ...other }: MarkerWithInfoProps) {
  const [markerRef, marker] = useAdvancedMarkerRef();

  const renderMarker = () => (
    <AdvancedMarker ref={markerRef} position={location.position} {...other}>
      <SvgIcon sx={{ color: 'error.main' }}>
        <path
          d="M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
C20.1,15.8,20.2,15.8,20.2,15.7z"
        />
      </SvgIcon>
    </AdvancedMarker>
  );

  const renderPopup = () => (
    <InfoWindow maxWidth={220} anchor={marker} minWidth={220} onCloseClick={onClose}>
      {location.photoUrl && (
        <Box
          component="img"
          loading="lazy"
          alt="Photo"
          src={location.photoUrl}
          sx={{ width: 1, aspectRatio: '4/3', objectFit: 'cover' }}
        />
      )}

      <Box
        sx={{
          p: 1.5,
          gap: 1,
          display: 'flex',
          wordBreak: 'break-all',
          flexDirection: 'column',
          ...(!location.photoUrl && { p: 2, pr: 3.5 }),
        }}
      >
        {location.country && <Typography variant="subtitle2">{location.country}</Typography>}

        {location.address && (
          <Typography component="p" variant="caption">
            {location.address}
          </Typography>
        )}

        {location.email && (
          <Box sx={{ gap: 1, display: 'flex', typography: 'caption' }}>
            <Iconify width={18} icon="solar:letter-outline" />
            {location.email}
          </Box>
        )}

        {location.phoneNumber && (
          <Box sx={{ gap: 1, display: 'flex', typography: 'caption' }}>
            <Iconify width={18} icon="solar:smartphone-outline" />
            {location.phoneNumber}
          </Box>
        )}
      </Box>
    </InfoWindow>
  );

  return (
    <>
      {renderMarker()}
      {open && renderPopup()}
    </>
  );
}
