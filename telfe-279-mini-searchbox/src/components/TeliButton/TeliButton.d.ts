import { default as React } from '../../../node_modules/react';
import { TeliButtonBaseProps } from './TeliButtonBase';

export interface TeliButtonProps extends TeliButtonBaseProps {
    /**
     * Tooltip contents
     */
    tooltip?: string;
    /**
     * Tooltip placement.
     * @default bottom
     */
    tooltipPlacement?: "bottom-end" | "bottom-start" | "bottom" | "left-end" | "left-start" | "left" | "right-end" | "right-start" | "right" | "top-end" | "top-start" | "top";
}
declare const TeliButton: React.FC<TeliButtonProps>;
export default TeliButton;
