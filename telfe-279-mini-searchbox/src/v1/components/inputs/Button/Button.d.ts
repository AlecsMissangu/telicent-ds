import { default as React } from '../../../../../node_modules/react';
import { ButtonProps as MUIButtonProps } from '@mui/material/Button';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    /**
     * The color of the component.
     * @default 'primary'
     */
    color?: "primary" | "inherit";
    /**
     * If `true`, the component is disabled.
     * @default false
     */
    disabled?: boolean;
    /**
     * If `true`, no elevation is used.
     * @default false
     */
    disableElevation?: boolean;
    /**
     * Element placed after the children.
     */
    endIcon?: React.ReactNode;
    /**
     * If `true`, the button will take up the full width of its container.
     * @default false
     */
    fullWidth?: boolean;
    /**
     * The size of the component.
     * `small` is equivalent to the dense button styling.
     * @default 'medium'
     */
    size?: MUIButtonProps['size'];
    /**
     * Element placed before the children.
     */
    startIcon?: React.ReactNode;
    /**
     * The variant to use.
     * @default 'primary'
     */
    variant?: "primary" | "secondary" | "tertiary" | "link" | "text";
}
declare const Button: React.FC<ButtonProps>;
export default Button;
