import { default as React } from '../../../node_modules/react';
import { TableContainerProps as MUITableContainerProps } from '@mui/material';

type TableContainerProps = Omit<MUITableContainerProps, "sx" | "classes">;
export interface TeliTableContainerProps extends TableContainerProps {
    /**
     * If true, the table element will be bordered
     */
    bordered?: boolean;
    /**
     * Maximum height of the component
     */
    maxHeight?: number;
}
declare const TeliTableContainer: React.FC<TeliTableContainerProps>;
export default TeliTableContainer;
