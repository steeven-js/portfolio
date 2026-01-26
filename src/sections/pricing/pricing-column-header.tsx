import type { BoxProps } from '@mui/material/Box';
import type { PricingCardProps } from './types';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/global-config';

import { Label } from 'src/components/label';

// ----------------------------------------------------------------------

type PricingColumnHeaderProps = BoxProps & {
  plan: PricingCardProps;
};

const iconPath = (name: string) => `${CONFIG.assetsDir}/assets/icons/plans/${name}`;

export function PricingColumnHeader({ plan, sx, ...other }: PricingColumnHeaderProps) {
  const isStartLicense = plan.license === 'Start';
  const isProLicense = plan.license === 'Pro';

  const renderIcons = () => (
    <Box
      component="img"
      alt={plan.license}
      src={
        (isStartLicense && iconPath('ic-plan-box-basic.svg')) ||
        (isProLicense && iconPath('ic-plan-box-starter.svg')) ||
        iconPath('ic-plan-box-premium.svg')
      }
      sx={{ width: 80, height: 80 }}
    />
  );

  const renderPrices = () => (
    <Box
      sx={{
        gap: 0.5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...(isProLicense && { color: { md: 'primary.main' } }),
      }}
    >
      {!isStartLicense && (
        <Typography component="span" variant="h4">
          $
        </Typography>
      )}

      <Typography component="span" variant="h3">
        {plan.price}
      </Typography>

      {!isStartLicense && (
        <Typography component="span" variant="subtitle2">
          /mo
        </Typography>
      )}
    </Box>
  );

  return (
    <Box
      sx={[
        {
          px: 3,
          py: 5,
          gap: 2,
          display: 'flex',
          position: 'relative',
          flexDirection: 'column',
          alignItems: { xs: 'flex-start', md: 'center' },
        },
        isProLicense && {
          borderRadius: '16px 16px 0 0',
          bgcolor: { md: 'background.neutral' },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      {isProLicense && (
        <Label color="info" sx={{ position: 'absolute', top: 16, right: 16 }}>
          POPULAR
        </Label>
      )}

      <Typography variant="overline" sx={{ color: 'text.secondary' }}>
        {plan.license}
      </Typography>

      {renderPrices()}
      {renderIcons()}

      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {plan.caption}
      </Typography>
    </Box>
  );
}
