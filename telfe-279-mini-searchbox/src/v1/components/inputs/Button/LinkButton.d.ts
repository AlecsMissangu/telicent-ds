import { default as React } from '../../../../../node_modules/react';
import { ButtonProps as MUIButtonProps } from '@mui/material/Button';

type LinkButtonProps = Omit<MUIButtonProps, "variant" | "color">;
declare const LinkButton: React.FC<LinkButtonProps>;
export default LinkButton;
