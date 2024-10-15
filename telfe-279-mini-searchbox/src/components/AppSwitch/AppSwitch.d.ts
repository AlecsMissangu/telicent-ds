import { default as React, FC } from '../../../node_modules/react';

export interface IApps {
    name: string;
    url: string;
}
export interface AppSwitchProps extends React.HTMLAttributes<HTMLButtonElement> {
    /**
     * The list of applications to include in the app switcher
     * @default []
     */
    apps?: IApps[];
    isLeftAligned?: boolean;
    className?: string;
}
declare const AppSwitch: FC<AppSwitchProps>;
export default AppSwitch;
