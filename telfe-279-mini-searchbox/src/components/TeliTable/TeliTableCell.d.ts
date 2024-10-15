import { default as React } from '../../../node_modules/react';
import { TableCellProps as MUITableCellProps } from '@mui/material';

type TableCellProps = Omit<MUITableCellProps, "sx" | "classes">;
export interface TeliTableCellProps extends TableCellProps {
    /**
     * Minimum width of the table
     */
    minWidth?: number;
}
declare const TeliTableCell: React.FC<TeliTableCellProps>;
export default TeliTableCell;
