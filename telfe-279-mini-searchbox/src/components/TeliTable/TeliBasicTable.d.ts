import { default as React } from '../../../node_modules/react';
import { TeliTableContainerProps } from './TeliTableContainer';
import { TeliTableProps } from './TeliTable';
import { TeliTableRowProps } from './TeliTableRow';
import { TeliTableCellProps } from './TeliTableCell';

export interface TeliBasicTableProps {
    /**
     * Table column headers
     */
    columns?: Array<string | Record<string, string>>;
    /**
     * Table body rows
     */
    rows?: Array<Array<string>>;
    name?: TeliTableProps["name"];
    addBorderToLastRow?: TeliTableRowProps["addBorderToLastRow"];
    align?: TeliTableCellProps["align"];
    bordered?: TeliTableContainerProps["bordered"];
    /**
     * A short heading for the table content
     */
    caption?: string;
    compact?: TeliTableProps["compact"];
    maxHeight?: TeliTableContainerProps["maxHeight"];
    minWidth?: TeliTableProps["minWidth"];
    /**
     * If true, a column of numbered rows will be added at the start of table
     */
    numberRows?: boolean;
    /**
     * The heading for the numbered rows column
     */
    numberColumnHeading?: string;
    /**
     * Render column cell
     * @param column Column data
     * @param index
     * @returns JSX.Element
     */
    renderColumnCell?: (column: any, index?: number) => JSX.Element;
    stickyHeader?: TeliTableProps["stickyHeader"];
    /**
     * If true, the first column will be rendered as a table header
     */
    verticalHeader?: boolean;
}
declare const TeliBasicTable: React.FC<TeliBasicTableProps>;
export default TeliBasicTable;
