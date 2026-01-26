import type { BoxProps } from '@mui/material/Box';

import { varAlpha } from 'minimal-shared/utils';
import { Controller, useFormContext } from 'react-hook-form';

import Box from '@mui/material/Box';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  name: string;
  options: {
    label: string;
    value: string;
    price: number;
    description: string;
  }[];
};

export function EcommerceCheckoutShippingMethod({ name, options, sx, ...other }: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange } }) => (
        <Box
          sx={[
            {
              rowGap: 3,
              columnGap: 2,
              display: 'grid',
              gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' },
            },
            ...(Array.isArray(sx) ? sx : [sx]),
          ]}
          {...other}
        >
          {options.map((option) => (
            <OptionItem
              key={option.label}
              option={option}
              selected={value === option.value}
              onClick={() => onChange(option.value)}
            />
          ))}
        </Box>
      )}
    />
  );
}

// ----------------------------------------------------------------------

type OptionItemProps = BoxProps & {
  selected: boolean;
  option: Props['options'][number];
};

function OptionItem({ option, selected, sx, ...other }: OptionItemProps) {
  return (
    <Box
      sx={[
        (theme) => ({
          px: 2,
          gap: 2,
          py: 2.5,
          display: 'flex',
          cursor: 'pointer',
          borderRadius: 1.5,
          alignItems: 'center',
          border: `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.24)}`,
          transition: theme.transitions.create(['box-shadow'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.shortest,
          }),
          ...(selected && { boxShadow: `0 0 0 2px ${theme.vars.palette.text.primary}` }),
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Iconify
        width={24}
        icon={selected ? 'solar:check-circle-bold' : 'carbon:radio-button'}
        sx={{ color: 'text.disabled', ...(selected && { color: 'primary.main' }) }}
      />
      <Box sx={{ flex: '1 1 auto' }}>
        <Box sx={{ display: 'flex', mb: 0.5, typography: 'subtitle1' }}>
          <Iconify
            width={24}
            icon={
              (option.value === 'standard' && 'carbon:delivery') ||
              (option.value === 'express' && 'carbon:rocket') ||
              'carbon:bicycle'
            }
          />
          <Box component="span" sx={{ ml: 1, flexGrow: 1 }}>
            {option.label}
          </Box>

          {`$${option.price}`}
        </Box>

        <Box component="span" sx={{ typography: 'body2', color: 'text.secondary' }}>
          {option.description}
        </Box>
      </Box>
    </Box>
  );
}
