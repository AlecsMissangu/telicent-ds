import { default as React } from '../../../node_modules/react';
import { TableHeadProps as MUITableHeadProps } from '@mui/material';

export type TeliTableHeadProps = Omit<MUITableHeadProps, "sx" | "classes">;
declare const TeliTableHead: React.FC<TeliTableHeadProps>;
export default TeliTableHead;
