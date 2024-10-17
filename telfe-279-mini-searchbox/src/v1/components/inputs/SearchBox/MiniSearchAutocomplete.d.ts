import { default as React } from '../../../../../node_modules/react';
import { UseAutocompleteProps } from '@mui/material/useAutocomplete/useAutocomplete';
import { ProgressProps } from './MiniSearchBox';

type AutocompleteOption = {
    label: string;
    isRecentSearch: boolean;
};
export interface MiniSearchAutocompleteProps<Value extends AutocompleteOption = AutocompleteOption, Multiple extends boolean = false, DisableClearable extends boolean = false, FreeSolo extends boolean = false> extends UseAutocompleteProps<Value, Multiple, DisableClearable, FreeSolo> {
    /**
     * Element placed after the search icon
     */
    endIcon?: React.ReactNode;
    /**
     * If `true`, the `input` will indicate an error.
     */
    error?: boolean;
    /**
     * The id of the `input` element.
     */
    id?: string;
    /**
     * If true, a loading indicator will be visible.
     */
    loading?: boolean;
    /**
     * Name attribute of the input element.
     */
    name?: string;
    /**
     * 	The short hint displayed in the input before the user enters a value.
     */
    placeholder?: string;
    /**
     * Props which will be applied to the circular progress indicator when loading
     * is set to true
     */
    progressProps?: ProgressProps;
    /**
     * Render the option
     * @param props The props to apply on the li element.
     * @param option The option to render.
     * @returns
     */
    renderOption?: (props: React.HTMLAttributes<HTMLLIElement> & {
        key: any;
    }, option: Value) => React.ReactNode;
    /**
     * Use this when the value is being controlled to address the bug below.
     *
     * Note: There is a bug with Material UI where if the value is being
     * controlled and the 'Enter' button is clicked while freeSolo is set to true,
     * the onChange callback will not be triggered.
     */
    onKeyDown?: React.KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    /**
     * Callback fired when the search button is clicked
     *
     * `(event: React.MouseEvent<HTMLButtonElement>) => void;`
     */
    onSearch?: React.MouseEventHandler<HTMLButtonElement>;
}
declare const MiniSearchAutocomplete: <Value extends AutocompleteOption = AutocompleteOption, Multiple extends boolean = false, DisableClearable extends boolean = false, FreeSolo extends boolean = false>(props: MiniSearchAutocompleteProps<Value, Multiple, DisableClearable, FreeSolo> & React.RefAttributes<HTMLDivElement>) => React.ReactElement | null;
export default MiniSearchAutocomplete;
