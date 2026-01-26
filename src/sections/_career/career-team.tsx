import type { BoxProps } from '@mui/material/Box';
import type { Theme } from '@mui/material/styles';
import type { ITeamMemberProps } from 'src/types/team';

import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { _socials } from 'src/_mock';

import { Iconify } from 'src/components/iconify';
import { Image, imageClasses } from 'src/components/image';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  members: ITeamMemberProps[];
};

export function CareerTeam({ members, sx, ...other }: Props) {
  return (
    <Box
      component="section"
      sx={[
        {
          pt: { xs: 5, md: 10 },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Box
        sx={{
          mx: 'auto',
          maxWidth: 480,
          textAlign: 'center',
          mb: { xs: 5, md: 10 },
        }}
      >
        <Typography variant="h2" sx={{ mb: 3 }}>
          Our team
        </Typography>
        <Typography sx={{ color: 'text.secondary' }}>
          Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis
          ante odio sit amet eros.
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)' },
        }}
      >
        {members.map((item) => (
          <MemberItem key={item.id} item={item} />
        ))}
      </Box>
    </Box>
  );
}

// ----------------------------------------------------------------------

type MemberItemProps = BoxProps & {
  item: ITeamMemberProps;
};

const transition = (theme: Theme) =>
  theme.transitions.create(['opacity', 'filter', 'transform'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.short,
  });

export function MemberItem({ item, sx, ...other }: MemberItemProps) {
  const renderSocials = () => (
    <Box sx={{ display: 'flex' }}>
      {_socials.map((social) => (
        <IconButton key={social.label}>
          {social.value === 'twitter' && (
            <Iconify
              icon="socials:twitter"
              sx={(theme) => ({ '--color': theme.vars.palette.common.white })}
            />
          )}
          {social.value === 'facebook' && <Iconify icon="socials:facebook" />}
          {social.value === 'instagram' && <Iconify icon="socials:instagram" />}
          {social.value === 'linkedin' && <Iconify icon="socials:linkedin" />}
        </IconButton>
      ))}
    </Box>
  );

  const renderContent = () => (
    <Box
      className="content"
      sx={{
        pb: 5,
        top: 0,
        left: 0,
        width: 1,
        height: 1,
        zIndex: 9,
        opacity: 0,
        transition,
        display: 'flex',
        alignItems: 'center',
        position: 'absolute',
        color: 'common.white',
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}
    >
      <Typography variant="h6">{item.name}</Typography>
      <Typography variant="body2" sx={{ opacity: 0.72, mt: 1, mb: 2 }}>
        {item.role}
      </Typography>
      {renderSocials()}
    </Box>
  );

  return (
    <Box
      sx={[
        {
          overflow: 'hidden',
          position: 'relative',
          '&:hover': {
            '& .content': { opacity: 1 },
            [`& .${imageClasses.root}`]: { filter: 'grayscale(0)', transform: 'scale(1.06)' },
            [`& .${imageClasses.overlay}`]: { opacity: 1 },
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      {renderContent()}

      <Image
        alt={item.name}
        src={item.photoUrl}
        ratio="1/1"
        sx={{ filter: 'grayscale(1)', transition }}
        slotProps={{
          overlay: {
            sx: (theme) => ({
              transition,
              opacity: 0,
              bgcolor: varAlpha(theme.vars.palette.common.blackChannel, 0.48),
            }),
          },
        }}
      />
    </Box>
  );
}
