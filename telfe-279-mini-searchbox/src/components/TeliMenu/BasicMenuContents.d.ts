import { default as React } from '../../../node_modules/react';
import { MenuItem } from './TeliBasicMenu';

interface TeliMenuProps1 {
    buttonId?: any;
    children?: React.ReactNode;
    emptyMessage?: string;
    listId?: any;
    menuItems?: MenuItem[];
    open?: boolean;
    onKeyDown?: React.KeyboardEventHandler<HTMLUListElement>;
    onMenuItemClick: (onClick?: (event?: Event | React.SyntheticEvent) => void) => (event: Event | React.SyntheticEvent) => void;
}
declare const BasicMenuContents: React.FC<TeliMenuProps1>;
export default BasicMenuContents;
