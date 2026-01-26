import type { BoxProps } from '@mui/material/Box';
import type { IPostProps } from 'src/types/blog';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { fDate } from 'src/utils/format-time';

import { _socials } from 'src/_mock';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = BoxProps & Partial<IPostProps>;

export function TravelPostHero({ heroUrl, duration, createdAt, title, sx, ...other }: Props) {
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

  return (
    <Box
      component="section"
      sx={[
        (theme) => ({
          ...theme.mixins.bgGradient({
            images: [
              `linear-gradient(to bottom, transparent 0%, ${theme.vars.palette.common.black} 75%)`,
              `url(${heroUrl})`,
            ],
          }),
          position: 'relative',
          py: { xs: 10, md: 15 },
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container>
        <Grid container spacing={3}>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              gap: 3,
              display: 'flex',
              color: 'common.white',
              flexDirection: 'column',
              textAlign: { xs: 'center', md: 'left' },
              alignItems: { xs: 'center', md: 'flex-start' },
            }}
          >
            <Typography variant="body2" sx={{ opacity: 0.72 }}>
              {duration}
            </Typography>

            <Typography variant="h2" component="h1">
              {title}
            </Typography>

            <Typography variant="caption" sx={{ opacity: 0.72 }}>
              {fDate(createdAt)}
            </Typography>

            {renderSocials()}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
