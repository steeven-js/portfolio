import type { BoxProps } from '@mui/material/Box';
import type { PricingCardProps } from './types';

import { useBoolean } from 'minimal-shared/hooks';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Collapse, { collapseClasses } from '@mui/material/Collapse';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

type PricingColumnContentProps = BoxProps & {
  plan: PricingCardProps;
};

export function PricingColumnContentMobile({ plan, sx, ...other }: PricingColumnContentProps) {
  const openContent = useBoolean();

  const isStartLicense = plan.license === 'Start';
  const isProLicense = plan.license === 'Pro';
  const isBusinessLicense = plan.license === 'Business';

  const renderButton = () => (
    <Link
      variant="subtitle2"
      color={openContent.value ? 'primary' : 'inherit'}
      onClick={openContent.onToggle}
      sx={{
        gap: 1,
        display: 'flex',
        cursor: 'pointer',
        alignItems: 'center',
      }}
    >
      {openContent.value ? 'Hide' : 'Show'} all feature
      <Iconify icon={openContent.value ? 'carbon:chevron-up' : 'carbon:chevron-down'} />
    </Link>
  );

  const renderList = () => (
    <Collapse
      in={openContent.value}
      sx={{
        [`& .${collapseClasses.wrapperInner}`]: {
          pt: 3,
          gap: 2,
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
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
            icon={option.disabled ? 'mingcute:close-line' : 'eva:checkmark-fill'}
            sx={{ color: option.disabled ? 'inherit' : 'primary.main' }}
          />
          {option.title}
        </Box>
      ))}
    </Collapse>
  );

  return (
    <Box
      sx={[
        {
          px: 3,
          pb: 5,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <div>
        {renderButton()}
        {renderList()}
      </div>

      <Button
        fullWidth
        size="large"
        color="inherit"
        variant={isProLicense ? 'contained' : 'outlined'}
        sx={{ mt: 5 }}
      >
        {isStartLicense && 'Start free trial'}
        {isProLicense && 'Choose pro'}
        {isBusinessLicense && 'Contact sale'}
      </Button>
    </Box>
  );
}

// ----------------------------------------------------------------------

export function PricingColumnContentDesktop({ plan, sx, ...other }: PricingColumnContentProps) {
  const isStartLicense = plan.license === 'Start';
  const isProLicense = plan.license === 'Pro';
  const isBusinessLicense = plan.license === 'Business';

  return (
    <Box sx={sx} {...other}>
      {plan.options.map((item) => (
        <Box
          key={item.title}
          sx={(theme) => ({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'text.secondary',
            height: 'var(--row-height)',
            borderBottom: `solid 1px ${theme.vars.palette.divider}`,
            ...(isProLicense && { bgcolor: 'background.neutral' }),
          })}
        >
          {item.disabled ? (
            '-'
          ) : (
            <Iconify width={24} icon="eva:checkmark-fill" sx={{ color: 'primary.main' }} />
          )}
        </Box>
      ))}

      <Box
        sx={{
          py: 5,
          textAlign: 'center',
          ...(isProLicense && {
            bgcolor: 'background.neutral',
            borderRadius: '0 0 16px 16px',
          }),
        }}
      >
        <Button size="large" variant={isProLicense ? 'contained' : 'outlined'} color="inherit">
          {isStartLicense && 'Start free trial'}
          {isProLicense && 'Choose pro'}
          {isBusinessLicense && 'Contact sale'}
        </Button>
      </Box>
    </Box>
  );
}
