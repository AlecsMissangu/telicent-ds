import { default as React } from '../../../node_modules/react';
import { InputProps } from '@mui/material';

type TeliInputProps = Omit<InputProps, "classes" | "color" | "components" | "componentsProps" | "disableUnderline" | "inputComponent" | "inputProps" | "slotProps" | "slots" | "sx"> & Partial<{
    cursor: React.CSSProperties["cursor"];
    textAlign: React.CSSProperties["textAlign"];
}>;
declare const TeliInput: React.FC<TeliInputProps>;
export default TeliInput;
