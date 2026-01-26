import type { BoxProps } from '@mui/material/Box';
import type { Theme, SxProps } from '@mui/material/styles';

import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/global-config';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

type MarketingPricingProps = BoxProps & {
  plans: {
    license: string;
    price: string;
    caption: string;
    options: string[];
  }[];
};

export function MarketingPricing({ plans, sx, ...other }: MarketingPricingProps) {
  const renderTexts = () => (
    <Box
      sx={{
        gap: 3,
        maxWidth: 480,
        display: 'flex',
        flexDirection: 'column',
        mx: { xs: 'auto', md: 'unset' },
        textAlign: { xs: 'center', md: 'unset' },
      }}
    >
      <Typography variant="overline" sx={{ color: 'text.disabled' }}>
        Pricing
      </Typography>

      <Typography variant="h2"> Our pricing</Typography>

      <Typography sx={{ color: 'text.secondary' }}>
        Choose your plan and make modern online conversation magic.
      </Typography>
    </Box>
  );

  const renderSwitch = () => (
    <Box sx={{ display: 'flex', alignItems: 'center', typography: 'overline' }}>
      MONTHLY
      <Switch
        defaultChecked
        slotProps={{
          input: {
            id: 'plan-checkbox',
            'aria-label': 'Plan checkbox',
          },
        }}
      />
      YEARLY (save 10%)
    </Box>
  );

  const renderCards = () => (
    <Box
      sx={{
        gap: 4,
        display: 'grid',
        alignItems: 'center',
        gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' },
      }}
    >
      {plans.map((plan) => (
        <PricingCard key={plan.license} plan={plan} />
      ))}
    </Box>
  );

  return (
    <Box
      component="section"
      sx={[
        {
          pt: 10,
          pb: { xs: 5, md: 10 },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container>
        <Box
          sx={{
            gap: 5,
            display: 'flex',
            mb: { xs: 5, md: 10 },
            justifyContent: { md: 'space-between' },
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'center', md: 'flex-end' },
          }}
        >
          {renderTexts()}
          {renderSwitch()}
        </Box>

        {renderCards()}
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

type PricingCardProps = {
  sx?: SxProps<Theme>;
  plan: MarketingPricingProps['plans'][number];
};

const iconPath = (name: string) => `${CONFIG.assetsDir}/assets/icons/plans/${name}`;

export function PricingCard({ plan, sx }: PricingCardProps) {
  const isBasicLicense = plan.license === 'Basic';
  const isStarterLicense = plan.license === 'Starter';
  const isPremiumLicense = plan.license === 'Premium';

  const renderIcon = () => (
    <Box
      component="img"
      loading="lazy"
      alt={plan.license}
      src={
        (isBasicLicense && iconPath('ic-plan-rocket-basic.svg')) ||
        (isStarterLicense && iconPath('ic-plan-rocket-starter.svg')) ||
        iconPath('ic-plan-rocket-premium.svg')
      }
      sx={{ width: 64, height: 64 }}
    />
  );

  const renderPrices = () => (
    <Box sx={{ flexGrow: 1 }}>
      <Typography component="h6" variant="h5" sx={{ color: 'primary.main', mb: 2 }}>
        {plan.license}
      </Typography>

      <Box sx={{ gap: 0.5, display: 'flex', alignItems: 'center' }}>
        <Typography component="span" variant="h3">{`$${plan.price}`}</Typography>
        <Typography component="span" variant="h5" sx={{ color: 'text.disabled' }}>
          /mo
        </Typography>
      </Box>
    </Box>
  );

  const renderList = () => (
    <Box
      sx={{
        my: 5,
        gap: 2,
        display: 'flex',
        typography: 'body2',
        flexDirection: 'column',
      }}
    >
      {plan.options.map((option) => (
        <Box key={option} sx={{ gap: 1.5, display: 'flex', alignItems: 'center' }}>
          <Iconify icon="eva:checkmark-fill" sx={{ color: 'primary.main' }} /> {option}
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
          pt: 8,
          borderRadius: 2,
          position: 'relative',
          bgcolor: 'transparent',
          boxShadow: theme.vars.customShadows.card,
          [theme.breakpoints.up('md')]: {
            boxShadow: 'none',
            ...(isStarterLicense && {
              boxShadow: `-24px 24px 72px -8px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.24)}`,
              ...theme.applyStyles('dark', {
                boxShadow: `-24px 24px 72px -8px ${varAlpha(theme.vars.palette.common.blackChannel, 0.24)}`,
              }),
            }),
          },
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {isStarterLicense && (
        <Label color="info" sx={{ position: 'absolute', top: 24, left: 32 }}>
          POPULAR
        </Label>
      )}

      <Box sx={{ display: 'flex' }}>
        {renderPrices()}
        {renderIcon()}
      </Box>

      <Typography variant="body2" sx={{ color: 'text.secondary', mt: 3 }}>
        {plan.caption}
      </Typography>

      {renderList()}

      <Button
        fullWidth
        size="large"
        color={(isPremiumLicense && 'primary') || 'inherit'}
        variant={(isBasicLicense && 'outlined') || 'contained'}
      >
        Choose package
      </Button>
    </Paper>
  );
}
