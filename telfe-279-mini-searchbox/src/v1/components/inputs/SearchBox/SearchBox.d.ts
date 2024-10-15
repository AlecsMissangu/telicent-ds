import { default as React } from '../../../../../node_modules/react';
import { InputBaseProps } from '@mui/material/InputBase';

export interface SearchBoxProps<Value = string> {
    /**
     * If true, the input element is focused during the first mount.
     */
    autoFocus?: boolean;
    /**
     * 	Pass a ref to the input element.
     */
    inputRef?: React.ForwardedRef<HTMLInputElement> | React.RefObject<HTMLInputElement>;
    /**
     * Callback fired when the input looses focus (i.e. blurred).
     * Notice that the first argument (event) might be undefined.
     * @param event
     * @returns void
     */
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    /**
     * Callback fired when the value is changed.
     * @param event The event source of the callback. You can pull out the new value by accessing event.target.value (string).
     * @returns void
     */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * Callback fired when the search button is clicked.
     * @param event
     * @returns
     */
    onSearch?: (event: React.MouseEvent<HTMLFormElement>) => void;
    /**
     * Name attribute of the input element.
     */
    name?: InputBaseProps["name"];
    /**
     * The short hint displayed in the input before the user enters a value.
     */
    placeholder?: InputBaseProps["placeholder"];
    /**
     * The value of the input element, required for a controlled component.
     */
    value?: Value;
}
declare const SearchBox: React.FC<SearchBoxProps>;
export default SearchBox;
