import { default as React } from '../../../node_modules/react';
import { ChipProps } from '@mui/material';

type MUIChipProps = Omit<ChipProps, "variant" | "color" | "avatar" | "classes">;
export interface TeliChipProps extends MUIChipProps {
    href?: string;
    variant?: "primary" | "secondary" | "tertiary" | "basic";
}
declare const TeliChip: React.FC<TeliChipProps>;
export default TeliChip;
