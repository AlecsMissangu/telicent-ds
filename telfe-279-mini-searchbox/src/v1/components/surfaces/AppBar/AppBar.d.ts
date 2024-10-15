import { default as React } from '../../../../../node_modules/react';
import { AppBarProps as MUIAppBarProps } from '@mui/material/AppBar';
import { AppSwitchLibraryType } from '../../data-display/AppSwitch/AppSwitch';

export type AppBarProps = Partial<{
    appName: string;
    beta: boolean;
    apps: AppSwitchLibraryType;
    userProfile: React.ReactNode;
    position: MUIAppBarProps["position"];
}>;
declare const AppBar: React.FC<AppBarProps>;
export default AppBar;
