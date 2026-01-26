import type { BoxProps } from '@mui/material/Box';
import type { SettingsState } from '../types';

import Box from '@mui/material/Box';

import { OptionButton } from './styles';

// ----------------------------------------------------------------------

export type PresetsOptionsProps = BoxProps & {
  value: SettingsState['primaryColor'];
  options: { name: SettingsState['primaryColor']; value: string[] }[];
  onChangeOption: (newOption: SettingsState['primaryColor']) => void;
};

export function PresetsOptions({
  sx,
  value,
  options,
  onChangeOption,
  ...other
}: PresetsOptionsProps) {
  const renderIcon = (primaryColor: string, secondaryColor: string, selected: boolean) => (
    <Box
      sx={{
        width: 44,
        height: 44,
        overflow: 'hidden',
        borderRadius: '50%',
        position: 'relative',
        bgcolor: primaryColor,
      }}
    >
      <Box
        sx={(theme) => ({
          top: 0,
          right: 0,
          bottom: 0,
          m: 'auto',
          width: 0.5,
          height: '120%',
          position: 'absolute',
          borderRadius: 'inherit',
          bgcolor: secondaryColor,
          transition: theme.transitions.create(['transform'], {
            duration: theme.transitions.duration.complex,
            easing: theme.transitions.easing.sharp,
          }),
          ...(selected && {
            transformOrigin: 'left',
            transform: 'rotate(45deg)',
          }),
        })}
      />
    </Box>
  );

  return (
    <Box
      sx={[
        {
          gap: 1.5,
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      {options.map((option) => {
        const primaryColor = option.value[0];
        const secondaryColor = option.value[1];
        const selected = value === option.name;

        return (
          <OptionButton
            key={option.name}
            selected={selected}
            onClick={() => onChangeOption(option.name)}
            sx={{ py: 2.5 }}
          >
            {renderIcon(primaryColor, secondaryColor, selected)}
          </OptionButton>
        );
      })}
    </Box>
  );
}
