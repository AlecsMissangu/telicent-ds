import { AutocompleteProps } from '@mui/material';

type DefaultOption = {
    label: string;
};
type MUIAutocompleteProps<Option> = AutocompleteProps<Option, false, false, true>;
export type SearchAutocompleteProps<Option = DefaultOption> = {
    /**
     * Array of options.
     */
    options: MUIAutocompleteProps<Option>["options"];
} & Partial<{
    autoHighlight: MUIAutocompleteProps<Option>["autoHighlight"];
    /**
     * If true, the input element is focused during the first mount.
     */
    autoFocus: boolean;
    /**
     * 	If true, the component will indicate an error.
     */
    error: boolean;
    /**
     * If true, the component will take up the full width of its container.
     */
    fullWidth: boolean;
    /**
     * Can be used to give context. If ' ' is provided, the component reserves one
     * line height for displaying a future message.
     */
    helperText: string;
    id: MUIAutocompleteProps<Option>["id"];
    inputValue: MUIAutocompleteProps<Option>["inputValue"];
    /**
     * The label content
     */
    label: string;
    /**
     * The maximum height of the autocomplete list box
     */
    listboxMaxHeight: number;
    loading: MUIAutocompleteProps<Option>["loading"];
    loadingText: MUIAutocompleteProps<Option>["loadingText"];
    openOnFocus: MUIAutocompleteProps<Option>["openOnFocus"];
    /**
     * 	The short hint displayed in the input before the user enters a value.
     */
    placeholder: string;
    /**
     * The width of the component
     */
    width: number;
    getOptionLabel: MUIAutocompleteProps<Option>["getOptionLabel"];
    getOptionKey: MUIAutocompleteProps<Option>["getOptionKey"];
    isOptionEqualToValue: MUIAutocompleteProps<Option>["isOptionEqualToValue"];
    onChange: MUIAutocompleteProps<Option>["onChange"];
    onInputChange: MUIAutocompleteProps<Option>["onInputChange"];
}>;
declare const SearchAutocomplete: <Option>({ autoFocus, autoHighlight, error, fullWidth, getOptionKey, getOptionLabel, helperText, id, inputValue, isOptionEqualToValue, label, listboxMaxHeight, loading, loadingText, onChange, onInputChange, openOnFocus, options, placeholder, width, }: SearchAutocompleteProps<Option>) => import("@emotion/react/jsx-runtime").JSX.Element;
export default SearchAutocomplete;
