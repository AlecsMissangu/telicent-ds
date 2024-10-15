import { default as React } from '../../../node_modules/react';
import { UITheme } from './colors/theme-colors';

type UIThemeProviderProps = React.PropsWithChildren & {
    theme: UITheme;
    dark?: boolean;
};
declare const UIThemeProvider: React.FC<UIThemeProviderProps>;
export default UIThemeProvider;
