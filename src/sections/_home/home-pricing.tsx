import type { Variants } from 'framer-motion';
import type { BoxProps } from '@mui/material/Box';
import type { Theme, SxProps } from '@mui/material/styles';

import { m } from 'framer-motion';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/global-config';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

type HomePricingProps = {
  plans: {
    license: string;
    price: string;
    commons: string[];
    options: { title: string; disabled: boolean }[];
  }[];
};

const variants: Variants = varFade('inUp', { distance: 24 });

export function HomePricing({ plans, sx, ...other }: BoxProps & HomePricingProps) {
  return (
    <Box
      component="section"
      sx={[
        {
          pt: { xs: 10, md: 15 },
          pb: { xs: 5, md: 10 },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container component={MotionViewport}>
        <Box
          sx={{
            mx: 'auto',
            maxWidth: 480,
            textAlign: 'center',
            mb: { xs: 5, md: 10 },
          }}
        >
          <m.div variants={variants}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>
              pricing plans
            </Typography>
          </m.div>

          <m.div variants={variants}>
            <Typography variant="h2" sx={{ my: 3 }}>
              Transparent pricing
            </Typography>
          </m.div>

          <m.div variants={variants}>
            <Typography sx={{ color: 'text.secondary' }}>
              Choose from flexible pricing options designed to fit your business needs and budget
              with no hidden fees.
            </Typography>
          </m.div>
        </Box>

        <Box
          sx={{
            gap: 4,
            display: 'grid',
            alignItems: 'center',
            gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' },
          }}
        >
          {plans.map((plan) => (
            <m.div key={plan.license}>
              <PricingCard plan={plan} />
            </m.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

type PricingCardProps = {
  sx?: SxProps<Theme>;
  plan: HomePricingProps['plans'][number];
};

const iconPath = (name: string) => `${CONFIG.assetsDir}/assets/icons/platforms/${name}`;

export function PricingCard({ plan, sx }: PricingCardProps) {
  const isStandardLicense = plan.license === 'Standard';
  const isPlusLicense = plan.license === 'Plus';
  const isExtendedLicense = plan.license === 'Extended';

  const renderPrices = () => (
    <Box sx={{ display: 'flex' }}>
      <Box component="span" sx={{ flexGrow: 1, typography: 'h5' }}>
        {plan.license}
      </Box>

      <Box sx={{ gap: 0.5, display: 'flex' }}>
        <Box component="span" sx={{ typography: 'h4' }}>
          $
        </Box>

        <Box component="span" sx={{ typography: 'h3' }}>
          {plan.price}
        </Box>
      </Box>
    </Box>
  );

  const renderIcons = () => (
    <Box sx={{ gap: 1.5, display: 'flex' }}>
      <Box
        component="img"
        loading="lazy"
        alt="JavaScript"
        src={iconPath('ic-js.svg')}
        sx={{ width: 24, height: 24 }}
      />
      {!isStandardLicense && (
        <>
          <Box
            component="img"
            loading="lazy"
            alt="TypeScript"
            src={iconPath('ic-ts.svg')}
            sx={{ width: 24, height: 24 }}
          />
          <Box
            component="img"
            loading="lazy"
            alt="Figma"
            src={iconPath('ic-figma.svg')}
            sx={{ width: 24, height: 24 }}
          />
        </>
      )}
    </Box>
  );

  const renderList = () => (
    <Box sx={{ gap: 2.5, display: 'flex', flexDirection: 'column' }}>
      {plan.commons.map((option) => (
        <Box
          key={option}
          sx={{
            gap: 1.5,
            display: 'flex',
            typography: 'body2',
            alignItems: 'center',
          }}
        >
          <Iconify width={20} icon="eva:checkmark-fill" sx={{ color: 'primary.main' }} />
          {option}
        </Box>
      ))}

      <Divider sx={{ borderStyle: 'dashed' }} />

      {plan.options.map((option) => (
        <Box
          key={option.title}
          sx={{
            gap: 1.5,
            display: 'flex',
            alignItems: 'center',
            typography: 'body2',
            ...(option.disabled && { color: 'text.disabled' }),
          }}
        >
          <Iconify
            width={20}
            icon={option.disabled ? 'mingcute:close-line' : 'eva:checkmark-fill'}
            sx={{ color: 'primary.main', ...(option.disabled && { color: 'currentColor' }) }}
          />
          {option.title}
        </Box>
      ))}
    </Box>
  );

  return (
    <Paper
      variant="outlined"
      sx={[
        (theme) => ({
          p: 5,
          gap: 5,
          display: 'flex',
          borderRadius: 2,
          position: 'relative',
          bgcolor: 'transparent',
          flexDirection: 'column',
          boxShadow: theme.vars.customShadows.card,
          [theme.breakpoints.up('md')]: { boxShadow: 'none' },
        }),
        (theme) =>
          isPlusLicense && {
            py: 10,
            [theme.breakpoints.up('md')]: {
              boxShadow: `-24px 24px 72px -8px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.24)}`,
              ...theme.applyStyles('dark', {
                boxShadow: `-24px 24px 72px -8px ${varAlpha(theme.vars.palette.common.blackChannel, 0.24)}`,
              }),
            },
          },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {isPlusLicense && (
        <Label color="info" sx={{ position: 'absolute', top: 40, left: 40 }}>
          POPULAR
        </Label>
      )}

      {renderPrices()}
      {renderIcons()}
      {renderList()}

      <Button
        size="large"
        fullWidth
        variant={isStandardLicense ? 'outlined' : 'contained'}
        color={isExtendedLicense ? 'primary' : 'inherit'}
        target="_blank"
        rel="noopener noreferrer"
        href={paths.zoneStore}
      >
        Choose package
      </Button>
    </Paper>
  );
}
