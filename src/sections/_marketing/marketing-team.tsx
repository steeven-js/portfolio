import type { BoxProps } from '@mui/material/Box';
import type { Theme } from '@mui/material/styles';
import type { ITeamMemberProps } from 'src/types/team';

import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { _socials } from 'src/_mock';
import { CONFIG } from 'src/global-config';

import { Iconify } from 'src/components/iconify';
import { Image, imageClasses } from 'src/components/image';
import {
  Carousel,
  useCarousel,
  CarouselDotButtons,
  CarouselArrowBasicButtons,
} from 'src/components/carousel';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  members: ITeamMemberProps[];
};

export function MarketingTeam({ members, sx, ...other }: Props) {
  const carousel = useCarousel({
    slideSpacing: '32px',
    slidesToShow: { xs: 1, sm: 2, lg: 3, xl: 4 },
  });

  return (
    <Box
      component="section"
      sx={[
        (theme) => ({
          ...theme.mixins.bgGradient({
            images: [
              `linear-gradient(to bottom, ${varAlpha(theme.vars.palette.common.blackChannel, 0.8)}, ${varAlpha(theme.vars.palette.common.blackChannel, 0.8)})`,
              `url(${CONFIG.assetsDir}/assets/background/overlay-2.webp)`,
            ],
          }),
          overflow: 'hidden',
          position: 'relative',
          py: { xs: 10, md: 15 },
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container>
        <Grid container spacing={{ xs: 5, md: 3 }} sx={{ justifyContent: { md: 'space-between' } }}>
          <Grid
            size={{ xs: 12, md: 4 }}
            sx={{
              gap: 3,
              display: 'flex',
              flexDirection: 'column',
              textAlign: { xs: 'center', md: 'unset' },
            }}
          >
            <Typography variant="overline" sx={{ color: 'grey.600' }}>
              Team
            </Typography>

            <Typography
              variant="h2"
              sx={(theme) => ({
                ...theme.mixins.textGradient(
                  `90deg, ${theme.vars.palette.primary.main} 20%, ${theme.vars.palette.secondary.main} 100%`
                ),
              })}
            >
              Meet our team
            </Typography>

            <Typography sx={{ color: 'common.white' }}>
              Since wire-frame renderings are relatively simple and fast to calculate, they are
              often used in cases
            </Typography>

            <CarouselArrowBasicButtons
              {...carousel.arrows}
              options={carousel.options}
              sx={{
                mt: 'auto',
                color: 'primary.main',
                display: { xs: 'none', md: 'flex' },
              }}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Box sx={{ width: { md: 'calc(50vw + 120px)' } }}>
              <Carousel carousel={carousel}>
                {members.map((item) => (
                  <MemberItem key={item.id} item={item} sx={{ color: 'common.white' }} />
                ))}
              </Carousel>
            </Box>
          </Grid>
        </Grid>

        <CarouselDotButtons
          scrollSnaps={carousel.dots.scrollSnaps}
          selectedIndex={carousel.dots.selectedIndex}
          onClickDot={carousel.dots.onClickDot}
          sx={{
            mt: 5,
            color: 'primary.main',
            justifyContent: 'center',
            display: { xs: 'flex', md: 'none' },
          }}
        />
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

type MemberItemProps = BoxProps & {
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

  return (
    <Box sx={sx} {...other}>
      <Box
        sx={{
          borderRadius: 2,
          overflow: 'hidden',
          position: 'relative',
          '&:hover': {
            '& .content': { opacity: 1 },
            [`& .${imageClasses.root}`]: { transform: 'scale(1.06)' },
            [`& .${imageClasses.overlay}`]: { opacity: 1 },
          },
        }}
      >
        <Box
          className="content"
          sx={{
            py: 3,
            left: 0,
            width: 1,
            zIndex: 9,
            bottom: 0,
            opacity: 0,
            transition,
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
          ratio="3/4"
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

      <Typography variant="h6" sx={{ mt: 2.5, mb: 0.5, textAlign: 'center' }}>
        {item.name}
      </Typography>

      <Typography variant="body2" sx={{ color: 'text.disabled', textAlign: 'center' }}>
        {item.role}
      </Typography>
    </Box>
  );
}
