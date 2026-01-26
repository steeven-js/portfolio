import type { BoxProps } from '@mui/material/Box';
import type { TextFieldProps } from '@mui/material/TextField';

import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MuiTextField from '@mui/material/TextField';
import { inputBaseClasses } from '@mui/material/InputBase';
import { inputLabelClasses } from '@mui/material/InputLabel';

import { CONFIG } from 'src/global-config';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function MarketingLandingFreeSEO({ sx, ...other }: BoxProps) {
  const renderEmail = () => (
    <Box
      sx={{
        mb: 2,
        gap: 1.5,
        display: 'flex',
        alignItems: 'center',
        color: 'common.white',
        justifyContent: { xs: 'center', md: 'flex-start' },
      }}
    >
      <Iconify width={24} icon="solar:letter-outline" />

      <Link color="inherit" href="mailto:hello@example.com">
        hello@example.com
      </Link>
    </Box>
  );

  const renderAddress = () => (
    <Box
      sx={{
        gap: 1.5,
        display: 'flex',
        alignItems: 'center',
        color: 'common.white',
        justifyContent: { xs: 'center', md: 'flex-start' },
      }}
    >
      <Iconify width={24} icon="carbon:location" />
      508 Bridle Avenue Newnan, GA 30263
    </Box>
  );

  const renderForm = () => (
    <>
      <TextField label="Name" />
      <TextField label="Email" />
      <TextField label="Phone" />
      <TextField label="Website URL" />
      <Button
        size="large"
        color="primary"
        variant="contained"
        sx={{ mr: 'auto', ml: { xs: 'auto', md: 'unset' } }}
      >
        Send request
      </Button>
    </>
  );

  return (
    <Box
      component="section"
      sx={[
        (theme) => ({
          ...theme.mixins.bgGradient({
            images: [`url(${CONFIG.assetsDir}/assets/images/marketing/get-free-seo.webp)`],
          }),
          py: { xs: 10, md: 15 },
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container>
        <Grid container spacing={{ xs: 5, md: 3 }} sx={{ justifyContent: 'space-between' }}>
          <Grid sx={{ textAlign: { xs: 'center', md: 'left' } }} size={{ xs: 12, md: 5 }}>
            <Typography
              variant="h1"
              component="h2"
              sx={(theme) => ({
                ...theme.mixins.textGradient(
                  `90deg, ${theme.vars.palette.primary.main} 20%, ${theme.vars.palette.secondary.main} 100%`
                ),
                mb: { xs: 3, md: 5 },
                display: 'inline-flex',
              })}
            >
              Get free
              <br /> SEO analysis
            </Typography>

            {renderEmail()}
            {renderAddress()}
          </Grid>

          <Grid size={{ xs: 12, md: 5 }} sx={{ gap: 3, display: 'flex', flexDirection: 'column' }}>
            {renderForm()}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

const TextField = styled((props: TextFieldProps) => <MuiTextField fullWidth {...props} />)(
  ({ theme }) => ({
    [`& .${inputBaseClasses.root}`]: {
      backgroundColor: varAlpha(theme.vars.palette.grey['500Channel'], 0.16),
    },
    [`& .${inputBaseClasses.input}`]: { color: theme.vars.palette.common.white },
    [`& .${inputLabelClasses.root}.${inputLabelClasses.shrink}`]: {
      color: theme.vars.palette.grey[500],
      [`&.${inputLabelClasses.focused}`]: { color: theme.vars.palette.grey[500] },
    },
  })
);
