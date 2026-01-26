import type { BoxProps } from '@mui/material/Box';
import type { Theme } from '@mui/material/styles';
import type { PaperProps } from '@mui/material/Paper';
import type { ITeamMemberProps } from 'src/types/team';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { _socials } from 'src/_mock';

import { Iconify } from 'src/components/iconify';
import { Image, imageClasses } from 'src/components/image';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  members: ITeamMemberProps[];
};

export function ElearningTeam({ members, sx, ...other }: Props) {
  return (
    <Box
      component="section"
      sx={[
        {
          py: { xs: 10, md: 15 },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <Box sx={{ maxWidth: 480, mx: 'auto', textAlign: 'center' }}>
          <Typography variant="h2">Meet our teachers</Typography>
          <Typography sx={{ mt: 3, color: 'text.secondary' }}>
            Since wire-frame renderings are relatively simple and fast to calculate, they are often
            used in cases
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gap: { xs: 4, md: 3 },
            my: { xs: 5, md: 10 },
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
          }}
        >
          {members.map((item) => (
            <MemberItem key={item.id} item={item} />
          ))}
        </Box>

        <Button
          variant="outlined"
          size="large"
          color="inherit"
          endIcon={<Iconify icon="carbon:chevron-right" />}
        >
          View all
        </Button>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

type MemberItemProps = PaperProps & {
  item: ITeamMemberProps;
};

const transition = (theme: Theme) =>
  theme.transitions.create(['opacity', 'transform'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.short,
  });

export function MemberItem({ item, sx, ...other }: MemberItemProps) {
  const renderSocials = () => (
    <>
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
    </>
  );

  const renderShape = () => (
    <Box
      sx={{
        top: 0,
        width: 1,
        height: 8,
        zIndex: 9,
        position: 'absolute',
        color: 'background.paper',
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="1080" height="32" viewBox="0 0 1080 32">
        <path fill="currentColor" d="M1080 32L0 0h1080v32z" />
      </svg>
    </Box>
  );

  return (
    <Paper
      variant="outlined"
      sx={[
        {
          borderRadius: 2,
          overflow: 'hidden',
          bgcolor: 'transparent',
          '&:hover': {
            '& .content': { opacity: 1 },
            [`& .${imageClasses.root}`]: { transform: 'scale(1.06)' },
            [`& .${imageClasses.overlay}`]: { opacity: 1 },
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Box sx={{ textAlign: 'center', pt: 3, pb: 1.5 }}>
        <Typography variant="h6">{item.name}</Typography>
        <Typography variant="body2" sx={{ mt: 0.5, color: 'text.disabled' }}>
          {item.role}
        </Typography>
      </Box>

      <Box sx={{ overflow: 'hidden', position: 'relative' }}>
        {renderShape()}

        <Box
          className="content"
          sx={{
            transition,
            py: 3,
            left: 0,
            width: 1,
            zIndex: 9,
            bottom: 0,
            opacity: 0,
            display: 'flex',
            position: 'absolute',
            justifyContent: 'center',
          }}
        >
          {renderSocials()}
        </Box>

        <Image
          alt={item.name}
          src={item.photoUrl}
          ratio="1/1"
          sx={{ transition }}
          slotProps={{
            overlay: {
              sx: (theme) => ({
                transition,
                opacity: 0,
                backgroundImage: `linear-gradient(to bottom, transparent 0%, ${theme.vars.palette.common.black} 75%)`,
              }),
            },
          }}
        />
      </Box>
    </Paper>
  );
}
