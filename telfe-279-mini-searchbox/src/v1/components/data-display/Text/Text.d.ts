import { default as React } from '../../../../../node_modules/react';
import { TypographyProps } from '@mui/material/Typography';

export type BaseProps = Omit<TypographyProps, "variant" | "paragraph">;
export type HeadingProps = BaseProps & Partial<{
    /**
     * The type of text style to use.
     */
    variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}>;
export type TextProps = BaseProps & Partial<{
    /**
     * If true, the element will be a paragraph element.
     */
    paragraph: boolean;
    /**
     * The type of text style to use.
     */
    variant: "subtitle1" | "subtitle2" | "body1" | "body2" | "overline" | "caption";
}>;
declare const Text: React.FC<TextProps>;
declare const H1: React.FC<HeadingProps>;
declare const H2: React.FC<HeadingProps>;
declare const H3: React.FC<HeadingProps>;
declare const H4: React.FC<HeadingProps>;
declare const H5: React.FC<HeadingProps>;
declare const H6: React.FC<HeadingProps>;
export default Text;
export { H1, H2, H3, H4, H5, H6, Text };
