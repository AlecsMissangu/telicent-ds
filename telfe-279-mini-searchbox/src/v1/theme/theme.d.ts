import { UITheme } from './colors/theme-colors';
import { default as generateComponentOverrides } from './style-overrides/components';

export type ComponentOverrides = ReturnType<typeof generateComponentOverrides>;
declare const createTheme: (themeColor: UITheme, dark: boolean) => import('@mui/material/styles').Theme;
export default createTheme;
