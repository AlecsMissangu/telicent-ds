import { default as React } from '../../../node_modules/react';
import { MenuProps } from '@mui/material';

export interface TeliUserProfileMenuProps {
    anchorEl: MenuProps["anchorEl"];
    firstName?: string;
    lastName?: string;
    open: boolean;
    onClose: () => void;
    /**
     * Callback fired when the settings menu item is clicked
     * @param event
     * @returns
     */
    onSettingsClick?: (event: React.SyntheticEvent) => void;
}
declare const TeliUserProfileMenu: React.FC<TeliUserProfileMenuProps>;
export default TeliUserProfileMenu;
