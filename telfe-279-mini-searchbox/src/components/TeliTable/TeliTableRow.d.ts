import { default as React } from '../../../node_modules/react';
import { TableRowProps as MUITableRowProps } from '@mui/material';

type TableRowProps = Omit<MUITableRowProps, "sx" | "classes">;
export interface TeliTableRowProps extends TableRowProps {
    /**
     * If true, the last table row will have a bottom border added to the table
     * cell element
     */
    addBorderToLastRow?: boolean;
}
declare const TeliTableRow: React.FC<TeliTableRowProps>;
export default TeliTableRow;
