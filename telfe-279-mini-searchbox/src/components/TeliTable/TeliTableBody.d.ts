import { default as React } from '../../../node_modules/react';
import { TableBodyProps } from '@mui/material';

export type TeliTableBody = Omit<TableBodyProps, "sx" | "classes">;
declare const TeliTableBody: React.FC<TeliTableBody>;
export default TeliTableBody;
