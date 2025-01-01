/*
 * Copyright 2020 The Devtools Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type {
  Theme as MuiTheme,
  ThemeOptions as MuiThemeOptions,
} from '@material-ui/core/styles/createTheme';
import type {
  PaletteOptions as MuiPaletteOptions,
  Palette as MuiPalette,
} from '@material-ui/core/styles/createPalette';
import {
  DevtoolsPaletteAdditions,
  DevtoolsThemeAdditions,
  DevtoolsTypography,
  PageTheme,
  PageThemeSelector,
} from '../base/types';

/**
 * The full Devtools palette.
 *
 * @public
 * @deprecated This type is deprecated, the Material UI Palette type is now always extended instead.
 */
export type DevtoolsPalette = MuiPalette & DevtoolsPaletteAdditions;

/**
 * The full Devtools palette options.
 *
 * @public
 * @deprecated This type is deprecated, the Material UI PaletteOptions type is now always extended instead.
 */
export type DevtoolsPaletteOptions = MuiPaletteOptions &
  DevtoolsPaletteAdditions;

/**
 * Devtools theme options.
 *
 * @public
 * @deprecated This type is deprecated, the Material UI ThemeOptions type is now always extended instead.
 * @remarks
 *
 * This is essentially a partial theme definition made by the user, that then
 * gets merged together with defaults and other values to form the final
 * {@link DevtoolsTheme}.
 *
 */
export interface DevtoolsThemeOptions extends MuiThemeOptions {
  palette: DevtoolsPaletteOptions;
  page: PageTheme;
  getPageTheme: (selector: PageThemeSelector) => PageTheme;
}

/**
 * A Devtools theme.
 *
 * @public
 * @deprecated This type is deprecated, the Material UI Theme type is now always extended instead.
 */
export interface DevtoolsTheme extends MuiTheme {
  palette: DevtoolsPalette;
  page: PageTheme;
  getPageTheme: (selector: PageThemeSelector) => PageTheme;
}

/**
 * A simpler configuration for creating a new theme that just tweaks some parts
 * of the devtools one.
 *
 * @public
 * @deprecated Use {@link BaseThemeOptionsInput} instead.
 */
export type SimpleThemeOptions = {
  palette: MuiPaletteOptions;
  defaultPageTheme?: string;
  pageTheme?: Record<string, PageTheme>;
  fontFamily?: string;
  htmlFontSize?: number;
  typography?: DevtoolsTypography;
};

declare module '@material-ui/core/styles/createPalette' {
  interface Palette extends DevtoolsPaletteAdditions {}

  interface PaletteOptions extends Partial<DevtoolsPaletteAdditions> {}
}

declare module '@material-ui/core/styles/createTheme' {
  interface Theme extends DevtoolsThemeAdditions {}

  interface ThemeOptions extends Partial<DevtoolsThemeAdditions> {}
}
