import { default as React } from '../../../node_modules/react';
import { SelectChangeEvent } from '@mui/material';

type TeliSelectOption = {
    id?: any;
    value?: any;
    label: React.ReactNode | string;
};
export interface TeliSelectProps {
    /**
     * If true, the component is initially open. Use when the component open state
     * is not controlled (i.e. the open prop is not defined). You can only use it
     * when the native prop is false (default).
     * @default false
     */
    defaultOpen?: boolean;
    /**
     * The default value. Use when the component is not controlled.
     */
    defaultValue?: any;
    /**
     * If true, the label, input and helper text should be displayed in a disabled
     * state.
     */
    disabled?: boolean;
    /**
     * If true, the label is displayed in an error state.
     */
    error?: boolean;
    /**
     * If true, the component is displayed in focused state.
     */
    focused?: boolean;
    /**
     * If true, the component will take up the full width of its container.
     */
    fullWidth?: boolean;
    /**
     * If true, the label is hidden. Be sure to add aria-label to the input
     * element.
     */
    hiddenLabel?: boolean;
    /**
     * The id of the input element.
     */
    id?: string;
    /**
     * The label of the input.
     */
    label?: string;
    /**
     * Text which will be displayed below the component. If ' ' is provided, the
     * component reserves one line height for displaying a future message.
     */
    helperText?: string;
    /**
     * If true, value must be an array and the menu will support multiple
     * selections.
     */
    multiple?: boolean;
    /**
     * Callback fired when a menu item is selected.
     * @param event The event source of the callback. You can pull out the new
     * value by accessing event.target.value (any). Warning: This is a generic
     * event, not a change event, unless the change event is caused by browser
     * autofill.
     * @returns void
     */
    onChange?: (event: SelectChangeEvent) => void;
    /**
     * Callback fired when the component requests to be closed. Use it in either
     * controlled (see the open prop), or uncontrolled mode (to detect when the
     * Select collapses).
     * @param event The event source of the callback.
     * @returns void
     */
    onClose?: (event: object) => void;
    /**
     * Callback fired when the component requests to be opened. Use it in either
     * controlled (see the open prop), or uncontrolled mode (to detect when the
     * Select expands).
     * @param event The event source of the callback.
     * @returns void
     */
    onOpen?: (event: object) => void;
    /**
     * If true, the component is shown.
     */
    open?: boolean;
    /**
     * The option elements to populate the select with
     * type TeliSelectOption = {
        id?: any;
        value?: any;
        label: React.ReactNode | string;
      };
     */
    options?: TeliSelectOption[];
    /**
     * If true, the selected option(s) cannot be changed
     */
    readOnly?: boolean;
    /**
     * If true, the label will indicate that the input is required.
     */
    required?: boolean;
    /**
     * The id of the select wrapper element
     */
    selectId?: string;
    /**
     * The width of the component
     */
    width?: number;
    /**
     * The input value. Providing an empty string will select no options. Set to
     * an empty string '' if you don't want any of the available options to be
     * selected. If the value is an object it must have reference equality with
     * the option in order to be selected. If the value is not an object, the
     * string representation must match with the string representation of the
     * option in order to be selected.
     */
    value?: any;
}
declare const TeliSelect: React.FC<TeliSelectProps>;
export default TeliSelect;
export type { SelectChangeEvent };
