import { default as React } from '../../../node_modules/react';
import { ButtonBaseProps } from '@mui/material';

type MUIButtonBaseProps = Omit<ButtonBaseProps, "centerRipple" | "classes" | "action" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "onFocusVisible" | "TouchRippleProps" | "touchRippleRef" | "sx">;
export interface TeliButtonBaseProps extends MUIButtonBaseProps {
    /**
     * The variant to use.**Note**: Use primary instead of contained, secondary
     * instead of outline and tertiary instead of text. These variants will be
     * removed in the next version
     * @default primary
     */
    variant?: "primary" | "secondary" | "tertiary" | "link" | "basic";
    linePosition?: "left" | "right" | "center";
    /**
     * The color of the component.
     */
    color?: "danger";
    /**
     * The URL to link to when the button is clicked. If defined, an a element
     * will be used as the root node.
     */
    href?: string;
    /**
     * Element placed before the children.
     */
    startIcon?: React.ReactNode;
    /**
     * Element placed after the children.
     */
    endIcon?: React.ReactNode;
    /**
     * The size of the component.
     */
    size?: "small" | "medium" | "large";
}
declare const TeliButtonBase: React.FC<TeliButtonBaseProps>;
export default TeliButtonBase;
