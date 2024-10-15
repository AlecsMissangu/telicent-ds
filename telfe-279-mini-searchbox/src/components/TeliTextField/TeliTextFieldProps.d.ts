import { TextFieldProps } from '@mui/material';

interface TeliTextFieldProps {
    ariaLabel?: string;
    /** This prop helps users to fill forms faster, especially on mobile devices.
     * The name can be confusing, as it's more like an autofill. You can learn
     * more about it [following the
     * specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
     * */
    autoComplete?: TextFieldProps["autoComplete"];
    /** If true, the input element is focused during the first mount.
     * @default false
     */
    autoFocus?: TextFieldProps["autoFocus"];
    /** The default value. Use when the component is not controlled. */
    defaultValue?: TextFieldProps["defaultValue"];
    /** If true, the component is disabled.
     *  @default false
     */
    disabled?: TextFieldProps["disabled"];
    /** If true, the label is displayed in an error state.
     *  @default false
     */
    error?: TextFieldProps["error"];
    /** End InputAdornment for this component. */
    endAdornment?: React.ReactNode | string;
    /** If true, the input will take up the full width of its container.
     * @default false
     */
    fullWidth?: TextFieldProps["fullWidth"];
    /** The helper text content. */
    helperText?: TextFieldProps["helperText"];
    /** The id of the input element. Use this prop to make label and helperText
     * accessible for screen readers. */
    id?: TextFieldProps["id"];
    /** Pass a ref to the input element. */
    inputRef?: TextFieldProps["inputRef"];
    /** The label content. */
    label?: TextFieldProps["label"];
    /** Maximum number of rows to display when multiline option is set to true. */
    maxRows?: TextFieldProps["maxRows"];
    /** Minimum number of rows to display when multiline option is set to true. */
    minRows?: TextFieldProps["minRows"];
    /** If true, a textarea element is rendered instead of an input. */
    multiline?: TextFieldProps["multiline"];
    /** Name attribute of the input element. */
    name?: TextFieldProps["name"];
    /** Callback fired when the value is changed.
     * (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
     * @param event The event source of the callback. You can pull out the new
     * value by accessing event.target.value (string).
     * @returns void
     */
    onChange?: TextFieldProps["onChange"];
    /** The short hint displayed in the input before the user enters a value. */
    placeholder?: TextFieldProps["placeholder"];
    /** If true, the label is displayed as required and the input element is required. */
    required?: TextFieldProps["required"];
    /** Number of rows to display when multiline option is set to true. */
    rows?: TextFieldProps["rows"];
    /** Start InputAdornment for this component. */
    startAdornment?: React.ReactNode | string;
    /** If true, pointer events like onClick are enabled */
    pointerEvents?: boolean;
    /** If true, the input value cannot be changed */
    readOnly?: boolean;
    /** Type of the input element. It should be a [valid HTML5 input
     * type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
     * */
    type?: TextFieldProps["type"];
    /** The value of the input element, required for a controlled component. */
    value?: TextFieldProps["value"];
}
export default TeliTextFieldProps;
