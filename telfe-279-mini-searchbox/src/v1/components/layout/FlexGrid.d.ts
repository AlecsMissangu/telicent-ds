import { default as React } from '../../../../node_modules/react';
import { Grid2Props } from '@mui/material/Unstable_Grid2';

type FlexGridProps = Omit<Grid2Props, "container" | "classes">;
export declare const FlexGrid: React.FC<FlexGridProps>;
export declare const FlexGridItem: React.FC<FlexGridProps>;
export {};
