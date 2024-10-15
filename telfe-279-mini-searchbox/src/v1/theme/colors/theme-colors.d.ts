import { default as zod } from 'zod';

export declare const UIThemeSchema: zod.ZodEnum<["light", "DataNavy", "DocumentPink", "GraphOrange"]>;
export type UITheme = zod.infer<typeof UIThemeSchema>;
declare const THEME_COLORS: {
    DataNavy: {
        main: string;
        light: string;
        dark: string;
        contrastText: "#fff";
        50: string;
        100: string;
        200: string;
        400: string;
        500: string;
        600: string;
    };
    light: {
        main: "#fff";
        light: string;
        dark: string;
        contrastText: "#000";
    };
    DocumentPink: {
        main: string;
        light: string;
        dark: string;
        contrastText: "#000";
        50: string;
        100: string;
        200: string;
        400: string;
        500: string;
        600: string;
    };
    GraphOrange: {
        main: string;
        light: string;
        dark: string;
        contrastText: "#000";
        50: string;
        100: string;
        200: string;
        400: string;
        500: string;
        600: string;
    };
};
export default THEME_COLORS;
