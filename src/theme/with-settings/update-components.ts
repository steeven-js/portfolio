import type { Theme, Components } from '@mui/material/styles';
import type { SettingsState } from 'src/components/settings';

// ----------------------------------------------------------------------

export function applySettingsToComponents(settingsState?: SettingsState): {
  components: Components<Theme>;
} {
  const MuiCssBaseline: Components<Theme>['MuiCssBaseline'] = {
    styleOverrides: {
      html: {
        fontSize: settingsState?.fontSize,
      },
    },
  };

  return {
    components: {
      MuiCssBaseline,
    },
  };
}
