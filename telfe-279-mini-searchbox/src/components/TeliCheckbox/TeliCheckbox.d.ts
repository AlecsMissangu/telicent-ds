import { FC } from '../../../node_modules/react';
import { CheckboxProps } from '@mui/material';

export interface TeliCheckboxProps extends CheckboxProps {
    label?: string;
}
/**
 * Checkboxes can be used to turn one or more options on or off.
 * If you have multiple options appearing in a list, you can preserve space by using checkboxes instead of on/off switches.
 * If you have a single option, avoid using a checkbox and use an on/off switch instead.
 * More information about this component can be found [here](https://mui.com/material-ui/react-checkbox/)
 */
declare const TeliCheckbox: FC<TeliCheckboxProps>;
export default TeliCheckbox;
