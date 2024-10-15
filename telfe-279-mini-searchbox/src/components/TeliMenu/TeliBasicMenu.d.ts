import { default as React } from '../../../node_modules/react';
import { PopperPlacementType } from '@mui/base';

export interface MenuItem {
    id: string;
    onClick?: (event?: Event | React.SyntheticEvent) => void;
    label?: string | React.ReactNode;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
}
export interface TeliBasicMenuProps {
    /**
     * The id of the Button element.
     */
    buttonId?: string;
    /**
     * The menu contents.
     */
    children?: React.ReactNode;
    /**
     * If true, the component is initially open. Use when the component open state
     * is not controlled (i.e. the open prop is not defined).
     */
    defaultOpen?: boolean;
    /** If true, the component will be displayed in a disabled state */
    disabled?: boolean;
    /**
     * The message to be displayed when menu items are empty.
     */
    emptyMessage?: string;
    /**
     * Element placed after the children.
     */
    endIcon?: React.ReactNode;
    /**
     * The id of the MenuList component.
     */
    listId?: string;
    /**
     * The content of the Button component.
     */
    label: string | React.ReactNode;
    /**
     * Menu content items.
     */
    menuItems?: MenuItem[];
    /**
     * If true, the menu component will be shown.
     */
    open?: boolean;
    /**
     * Callback fired when the component requests to be opened. Use it for
     * controlled mode.
     */
    onOpen?: React.MouseEventHandler<HTMLButtonElement>;
    /**
     * Callback fired when the component requests to be closed. Use it for
     * controlled mode.
     */
    onClose?: (event: MouseEvent | TouchEvent) => void;
    /**
     * Element placed before the children.
     */
    startIcon?: React.ReactNode;
    /**
     * Tooltip contents refer to [Button component](/?path=/docs/components-telibutton--docs).
     */
    tooltip?: string;
    /**
     * The variant to use.
     */
    variant?: "tertiary" | "basic";
    /**
     * Width of the menu component.
     */
    width?: number;
    /**
     * Vertical menu placement.
     */
    xPlacement?: PopperPlacementType;
    /**
     * Horizontal menu placement.
     */
    yPlacement?: PopperPlacementType;
}
declare const TeliBasicMenu: React.FC<TeliBasicMenuProps>;
export default TeliBasicMenu;
