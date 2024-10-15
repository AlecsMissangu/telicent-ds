import { default as React } from '../../../node_modules/react';
import { TeliBrandProps } from '../TeliBrand/TeliBrand';
import { AppSwitchProps } from '../AppSwitch/AppSwitch';

export interface TeliStandardLayoutHeaderProps {
    /**
     * The list of applications to include in the app switcher
     */
    apps?: AppSwitchProps["apps"];
    /**
     * The telicent application name
     */
    appName: TeliBrandProps["appName"];
    /**
     * Has the application moved into its second phase of testing and is ready for external use by customers or clients?
     * @default false
     */
    beta?: TeliBrandProps["beta"];
    /**
     * TeliUserProfile component
     */
    userProfile?: React.ReactNode;
}
declare const TeliStandardLayoutHeader: React.FC<TeliStandardLayoutHeaderProps>;
export default TeliStandardLayoutHeader;
