import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { Image } from 'src/components/image';

// ----------------------------------------------------------------------

type AdvertisementProps = BoxProps & {
  title: string;
  imageUrl: string;
  description?: string;
  action?: React.ReactNode;
};

export function Advertisement({
  sx,
  title,
  action,
  imageUrl,
  description,
  ...other
}: AdvertisementProps) {
  const renderContent = () => (
    <Box
      sx={{
        p: 5,
        width: 1,
        bottom: 0,
        zIndex: 9,
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        position: 'absolute',
        flexDirection: 'column',
      }}
    >
      <Typography component="h6" variant="h5" sx={{ color: 'primary.main' }}>
        {title}
      </Typography>
      {description && (
        <Typography variant="body2" sx={{ mt: 1, mb: 3, color: 'common.white' }}>
          {description}
        </Typography>
      )}
      {action}
    </Box>
  );

  return (
    <Box
      sx={[
        {
          borderRadius: 2,
          overflow: 'hidden',
          position: 'relative',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      {renderContent()}

      <Image
        alt="Advertisement"
        src={imageUrl}
        ratio="1/1"
        slotProps={{
          overlay: {
            sx: (theme) => ({
              backgroundImage: `linear-gradient(to bottom, transparent, ${theme.vars.palette.common.black})`,
            }),
          },
        }}
      />
    </Box>
  );
}
