import type { BoxProps } from '@mui/material/Box';

import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  color: string;
  memory: string;
  onSelectColor: (newValue: string) => void;
  onSelectMemory: (newValue: string) => void;
  options: {
    colors: { label: string; value: string }[];
    memory: { label: string; value: string }[];
  };
};

export function ProductOptionPicker({
  sx,
  color,
  memory,
  options,
  onSelectColor,
  onSelectMemory,
  ...other
}: Props) {
  const renderColorOptions = () => (
    <Box sx={{ gap: 1, display: 'flex', flexWrap: 'wrap' }}>
      {options.colors.map((option) => {
        const selected = color === option.value;

        return (
          <Box
            key={option.value}
            onClick={() => onSelectColor(option.value)}
            sx={{
              width: 32,
              height: 32,
              display: 'flex',
              borderRadius: 1,
              cursor: 'pointer',
              alignItems: 'center',
              bgcolor: option.label,
              color: 'common.white',
              justifyContent: 'center',
            }}
          >
            <Iconify
              icon="eva:checkmark-fill"
              sx={(theme) => ({
                transform: selected ? 'scale(1)' : 'scale(0)',
                transition: theme.transitions.create(['transform'], {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.shortest,
                }),
              })}
            />
          </Box>
        );
      })}
    </Box>
  );

  const renderMemoryOptions = () => (
    <Box sx={{ gap: 1.5, display: 'flex', flexWrap: 'wrap' }}>
      {options.memory.map((option) => {
        const selected = memory === option.value;

        return (
          <Box
            key={option.value}
            onClick={() => onSelectMemory(option.value)}
            sx={(theme) => ({
              px: 1.5,
              py: 0.75,
              borderRadius: 1,
              cursor: 'pointer',
              typography: 'subtitle2',
              border: `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.24)}`,
              ...(selected && { boxShadow: `0 0 0 2px ${theme.vars.palette.text.primary}` }),
            })}
          >
            {option.label}
          </Box>
        );
      })}
    </Box>
  );

  return (
    <Box
      sx={[
        {
          gap: 3,
          display: 'flex',
          flexDirection: 'column',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <div>
        <Typography variant="subtitle2" sx={{ mb: 1.5 }}>
          Color
        </Typography>
        {renderColorOptions()}
      </div>

      <div>
        <Typography variant="subtitle2" sx={{ mb: 1.5 }}>
          Memory
        </Typography>
        {renderMemoryOptions()}
      </div>
    </Box>
  );
}
