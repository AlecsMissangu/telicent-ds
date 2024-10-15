import { default as React } from '../../../node_modules/react';

type TeliThemeProviderProps = {
    children?: React.ReactNode;
};
/**
 * The ThemeProvider component is responsible for providing the theme to all it's children.
 * This component should be imported in index.jsx|tsx, if the standard layout component is not being used.
 */
declare const TeliThemeProvider: React.FC<TeliThemeProviderProps>;
export default TeliThemeProvider;
