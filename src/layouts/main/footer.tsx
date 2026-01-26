import type { BoxProps } from '@mui/material/Box';
import type { ButtonProps } from '@mui/material/Button';
import type { Theme, SxProps, Breakpoint } from '@mui/material/styles';

import { varAlpha, isEqualPath } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Button, { buttonClasses } from '@mui/material/Button';

import { usePathname } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';

import { _socials } from 'src/_mock';

import { Logo } from 'src/components/logo';
import { Iconify } from 'src/components/iconify';

import { pageLinks as listItems } from '../nav-config-main';

// ----------------------------------------------------------------------

export type FooterProps = BoxProps & {
  layoutQuery?: Breakpoint;
};

export function Footer({ layoutQuery = 'md', sx, ...other }: FooterProps) {
  const pathname = usePathname();

  const renderInfo = () => (
    <>
      <Logo />
      <Typography variant="body2" sx={{ maxWidth: 360, color: 'text.secondary' }}>
        The starting point for your next project based on easy-to-customize Material-UI © helps you
        build apps faster and better.
      </Typography>
    </>
  );

  const renderCommunity = () => (
    <>
      <Typography variant="h6">Community</Typography>
      <Link variant="body2" color="inherit">
        Documentation
      </Link>
      <Link variant="body2" color="inherit">
        Changelog
      </Link>
      <Link variant="body2" color="inherit">
        Contributing
      </Link>
    </>
  );

  const renderSubscribe = () => (
    <>
      <div>
        <Typography variant="h6" sx={{ mb: 1 }}>
          Let’s stay in touch
        </Typography>
        <Typography
          variant="caption"
          sx={{ maxWidth: 360, display: 'block', color: 'text.secondary' }}
        >
          Ubscribe to our newsletter to receive latest articles to your inbox weekly.
        </Typography>
      </div>

      <TextField
        fullWidth
        hiddenLabel
        placeholder="Email address"
        sx={{ maxWidth: 420 }}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <Button variant="contained" color="inherit" size="large" sx={{ mr: -1.25 }}>
                  Subscribe
                </Button>
              </InputAdornment>
            ),
          },
        }}
      />
    </>
  );

  const renderSocials = () => (
    <>
      <Typography variant="h6">Social</Typography>

      <Box sx={{ display: 'flex' }}>
        {_socials.map((social) => (
          <IconButton key={social.label}>
            {social.value === 'twitter' && <Iconify icon="socials:twitter" />}
            {social.value === 'facebook' && <Iconify icon="socials:facebook" />}
            {social.value === 'instagram' && <Iconify icon="socials:instagram" />}
            {social.value === 'linkedin' && <Iconify icon="socials:linkedin" />}
          </IconButton>
        ))}
      </Box>
    </>
  );

  const renderApps = () => (
    <>
      <Typography variant="h6">Apps</Typography>
      <Box
        sx={{
          gap: 2,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <AppStoreButton
          startIcon={<Iconify width={28} icon="custom:apple" />}
          caption="Download on the"
          title="Apple Store"
        />
        <AppStoreButton
          startIcon={<Iconify width={28} icon="custom:google-play" />}
          caption="Download from"
          title="Google Play"
        />
      </Box>
    </>
  );

  const renderList = () => (
    <Box
      component="ul"
      sx={(theme) => ({
        columnGap: 2,
        display: 'none',
        columnCount: { xs: 3, lg: 4 },
        [theme.breakpoints.up(layoutQuery)]: {
          display: 'block',
        },
      })}
    >
      {listItems.map((list) => (
        <Box
          component="li"
          key={list.subheader}
          sx={{
            mb: 2,
            gap: 0.75,
            display: 'flex',
            breakInside: 'avoid',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <Typography variant="subtitle2">{list.subheader}</Typography>

          <Box component="ul" sx={{ gap: 'inherit', display: 'flex', flexDirection: 'column' }}>
            {list.items.map((item) => {
              const isActive = isEqualPath(item.path, pathname);

              return (
                <Box component="li" key={item.title} sx={{ display: 'inline-flex' }}>
                  <Link
                    component={RouterLink}
                    href={item.path}
                    variant="caption"
                    sx={{
                      color: 'text.secondary',
                      '&:hover': { color: 'text.primary' },
                      ...(isActive && { color: 'text.primary', fontWeight: 'fontWeightSemiBold' }),
                    }}
                  >
                    {item.title}
                  </Link>
                </Box>
              );
            })}
          </Box>
        </Box>
      ))}
    </Box>
  );

  const renderTop = () => (
    <Container
      sx={{
        pt: 10,
        pb: { xs: 5, md: 10 },
      }}
    >
      <Grid container spacing={3} sx={{ justifyContent: { md: 'space-between' } }}>
        <Grid
          size={{ xs: 12, md: 5, lg: 4 }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: 3, md: 5 },
          }}
        >
          <Box sx={[(theme) => ({ ...blockStyles(theme, layoutQuery) }), { gap: 3 }]}>
            {renderInfo()}
          </Box>

          <Box sx={[(theme) => ({ ...blockStyles(theme, layoutQuery) }), { gap: 1 }]}>
            {renderCommunity()}
          </Box>

          <Box sx={[(theme) => ({ ...blockStyles(theme, layoutQuery) })]}>{renderSubscribe()}</Box>

          <Box sx={[(theme) => ({ ...blockStyles(theme, layoutQuery) })]}>{renderSocials()}</Box>

          <Box sx={[(theme) => ({ ...blockStyles(theme, layoutQuery) })]}>{renderApps()}</Box>
        </Grid>

        <Grid component="nav" size={{ xs: 12, md: 6, lg: 6 }}>
          {renderList()}
        </Grid>
      </Grid>
    </Container>
  );

  const renderBottom = () => (
    <Container
      sx={{
        py: 3,
        gap: 2.5,
        display: 'flex',
        textAlign: 'center',
        color: 'text.secondary',
        justifyContent: 'space-between',
        flexDirection: { xs: 'column', md: 'row' },
      }}
    >
      <Typography variant="caption"> © All rights reserved.</Typography>

      <Box
        component="span"
        sx={{
          gap: 1.5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Link variant="caption" color="inherit">
          Help center
        </Link>
        <Box
          sx={{
            width: 3,
            height: 3,
            opacity: 0.4,
            borderRadius: '50%',
            bgcolor: 'currentColor',
          }}
        />
        <Link variant="caption" color="inherit">
          Terms of service
        </Link>
      </Box>
    </Container>
  );

  return (
    <Box
      component="footer"
      sx={[
        (theme) => ({
          borderTop: `solid 1px ${theme.vars.palette.divider}`,
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      {renderTop()}
      <Divider />
      {renderBottom()}
    </Box>
  );
}

// ----------------------------------------------------------------------

const blockStyles = (theme: Theme, layoutQuery: Breakpoint): SxProps<Theme> => ({
  gap: 2,
  display: 'flex',
  textAlign: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  [theme.breakpoints.up(layoutQuery)]: {
    textAlign: 'left',
    alignItems: 'flex-start',
  },
});

// ----------------------------------------------------------------------

type AppStoreButtonProps = ButtonProps & {
  title: string;
  caption: string;
};

const AppStoreButton = styled(({ title, caption, ...other }: AppStoreButtonProps) => (
  <Button {...other}>
    <div>
      <Box
        component="span"
        sx={{
          opacity: 0.72,
          display: 'block',
          textAlign: 'left',
          typography: 'caption',
        }}
      >
        {caption}
      </Box>

      <Box component="span" sx={{ mt: -0.5, typography: 'h6' }}>
        {title}
      </Box>
    </div>
  </Button>
))(({ theme }) => ({
  flexShrink: 0,
  padding: '5px 12px',
  color: theme.vars.palette.common.white,
  border: `solid 1px ${varAlpha(theme.vars.palette.common.blackChannel, 0.24)}`,
  background: `linear-gradient(180deg, ${theme.vars.palette.grey[900]}, ${theme.vars.palette.common.black})`,
  [`& .${buttonClasses.startIcon}`]: {
    marginLeft: 0,
  },
}));
