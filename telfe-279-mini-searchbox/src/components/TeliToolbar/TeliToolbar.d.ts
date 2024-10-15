import { default as React, HTMLAttributes } from '../../../node_modules/react';

export interface TeliToolbarProps extends HTMLAttributes<HTMLUListElement> {
    /**
     * @default true
     */
    defaultControls?: boolean;
    /**
     * @default false
     */
    vertical?: boolean;
    position?: "bottom-start" | "bottom-end" | "top-start" | "top-end";
    variant?: "tertiary" | "basic";
    onZoomIn?: () => void;
    onZoomOut?: () => void;
    children?: React.ReactNode;
}
declare const TeliToolbar: React.FC<TeliToolbarProps>;
export default TeliToolbar;
