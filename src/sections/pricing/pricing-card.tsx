import type { PaperProps } from '@mui/material/Paper';
import type { PricingCardProps } from './types';

import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/global-config';

import { Label } from 'src/components/label';

// ----------------------------------------------------------------------

type Props = PaperProps & {
  plan: PricingCardProps;
};

const iconPath = (name: string) => `${CONFIG.assetsDir}/assets/icons/plans/${name}`;

export function PricingCard({ plan, sx, ...other }: Props) {
  const isBasicLicense = plan.license === 'Basic';
  const isStarterLicense = plan.license === 'Starter';
  const isPremiumLicense = plan.license === 'Premium';

  const renderIcons = () => (
    <Box
      component="img"
      alt={plan.license}
      src={
        (isBasicLicense && iconPath('ic-plan-points-basic.svg')) ||
        (isStarterLicense && iconPath('ic-plan-points-starter.svg')) ||
        iconPath('ic-plan-points-premium.svg')
      }
      sx={{ width: 80, height: 80 }}
    />
  );

  const renderPrices = () => (
    <Box sx={{ gap: 0.5, display: 'flex', alignItems: 'center' }}>
      {!isBasicLicense && (
        <Typography component="span" variant="h5">
          $
        </Typography>
      )}

      <Typography component="span" variant="h3">
        {plan.price}
      </Typography>

      {!isBasicLicense && (
        <Typography component="span" variant="subtitle2">
          /mo
        </Typography>
      )}
    </Box>
  );

  const renderList = () => (
    <Box
      sx={{
        gap: 1,
        display: 'flex',
        textAlign: 'center',
        flexDirection: 'column',
      }}
    >
      {plan.options.map((option) => (
        <Typography
          key={option.title}
          variant="body2"
          sx={{
            fontWeight: 'fontWeightMedium',
            ...(option.disabled && { color: 'text.disabled', textDecoration: 'line-through' }),
          }}
        >
          {option.title}
        </Typography>
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
          alignItems: 'center',
          bgcolor: 'transparent',
          flexDirection: 'column',
          boxShadow: theme.vars.customShadows.card,
          [theme.breakpoints.up('md')]: { boxShadow: 'none' },
        }),
        (theme) =>
          isStarterLicense && {
            py: 8,
            [theme.breakpoints.up('md')]: {
              boxShadow: `-24px 24px 72px -8px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.24)}`,
              ...theme.applyStyles('dark', {
                boxShadow: `-24px 24px 72px -8px ${varAlpha(theme.vars.palette.common.blackChannel, 0.24)}`,
              }),
            },
          },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      {isStarterLicense && (
        <Label color="info" sx={{ position: 'absolute', top: 16, right: 16 }}>
          POPULAR
        </Label>
      )}

      <Box component="span" sx={{ color: 'text.secondary', typography: 'overline' }}>
        {plan.license}
      </Box>

      {renderIcons()}
      {renderPrices()}
      {renderList()}

      <Button
        fullWidth
        size="large"
        disabled={isBasicLicense}
        variant={isBasicLicense ? 'outlined' : 'contained'}
        color={isPremiumLicense ? 'primary' : 'inherit'}
      >
        {isBasicLicense && 'Current plan'}
        {isStarterLicense && 'Choose starter'}
        {isPremiumLicense && 'Choose premium'}
      </Button>
    </Paper>
  );
}
