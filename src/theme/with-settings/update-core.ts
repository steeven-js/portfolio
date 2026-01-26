import type { SettingsState } from 'src/components/settings';
import type { ThemeOptions, ThemeColorScheme, ColorSchemeOptionsExtended } from '../types';

import { setFont, createPaletteChannel } from 'minimal-shared/utils';

import { createShadowColor } from '../core/custom-shadows';
import { primaryColorPresets, secondaryColorPresets } from './color-presets';

// ----------------------------------------------------------------------

/**
 * Updates the core theme with the provided settings state.
 * @param theme - The base theme options to update.
 * @param settingsState - The settings state containing direction, fontFamily, contrast, and primaryColor.
 * @returns Updated theme options with applied settings.
 */

export function applySettingsToTheme(
  theme: ThemeOptions,
  settingsState?: SettingsState
): ThemeOptions {
  const { direction, fontFamily, primaryColor = 'default' } = settingsState ?? {};

  const isDefaultPrimaryColor = primaryColor === 'default';

  const primaryColorPalette = createPaletteChannel(primaryColorPresets[primaryColor]);
  const secondaryColorPalette = createPaletteChannel(secondaryColorPresets[primaryColor]);

  const updateColorScheme = (schemeName: ThemeColorScheme) => {
    const currentScheme: ColorSchemeOptionsExtended = theme.colorSchemes?.[schemeName] ?? {};

    const updatedPalette = {
      ...currentScheme?.palette,
      ...(!isDefaultPrimaryColor && {
        primary: primaryColorPalette,
        secondary: secondaryColorPalette,
      }),
    };

    const updatedCustomShadows = {
      ...currentScheme?.customShadows,
      ...(!isDefaultPrimaryColor && {
        primary: createShadowColor(primaryColorPalette.mainChannel),
        secondary: createShadowColor(secondaryColorPalette.mainChannel),
      }),
    };

    return {
      ...currentScheme,
      palette: updatedPalette,
      customShadows: updatedCustomShadows,
    };
  };

  return {
    ...theme,
    direction,
    colorSchemes: {
      light: updateColorScheme('light'),
      dark: updateColorScheme('dark'),
    },
    typography: {
      ...theme.typography,
      fontFamily: setFont(fontFamily),
    },
  };
}
