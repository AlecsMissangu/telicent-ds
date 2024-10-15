import { default as React } from '../../../../../node_modules/react';
import { ChipProps as MUIChipProps } from '@mui/material/Chip';

export type ChipProps = Omit<MUIChipProps, "avatar" | "children" | "classes" | "clickable" | "color" | "component" | "deleteIcon" | "icon" | "skipFocusWhenDisabled" | "sx">;
declare const Chip: React.FC<ChipProps>;
export default Chip;
