import { default as React, PropsWithChildren } from '../../../../node_modules/react';
import { AppBarProps } from '../surfaces/AppBar/AppBar';

type AppChromeProps = AppBarProps & PropsWithChildren;
declare const AppChrome: React.FC<AppChromeProps>;
export default AppChrome;
