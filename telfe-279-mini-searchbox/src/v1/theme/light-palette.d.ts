import { ThemeOptions } from '@mui/material';
import { UITheme } from './colors/theme-colors';

declare const createLightPalette: (themeColor: UITheme) => ThemeOptions["palette"];
export default createLightPalette;
