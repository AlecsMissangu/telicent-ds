import { default as React } from '../../../node_modules/react';
import { AutocompleteProps } from '@mui/material';

export interface TeliAutocompleteProps<Value, Multiple extends boolean = false, DisableClearable extends boolean = false, FreeSolo extends boolean = false> extends Omit<AutocompleteProps<Value, Multiple, DisableClearable, FreeSolo>, "renderInput" | "ChipProps" | "clearIcon" | "classes" | "clearText" | "closeText" | "componentsProps" | "ListboxProps" | "ListboxComponent" | "openText" | "PaperComponent" | "PopperComponent" | "popupIcon" | "size" | "slotProps" | "sx"> {
    /** If true, the component will be rendered in an error state */
    error?: boolean;
    /** Used to determine the icon elment of a given option */
    getChipIcon?: (option: Value) => any;
    /** The label content. */
    helperText?: string;
    /** The label content. */
    label?: string | React.ReactNode;
    /** Maximum height of the menu component */
    maxHeight?: number;
    /** The autocomplete mode with predefined defaults */
    mode?: "search";
    placeholder?: string;
    /** Element placed before the input element */
    startAdornment?: React.ReactNode;
    /** Width of the component. */
    width?: number;
}
declare function TeliAutocomplete<Value, Multiple extends boolean = false, DisableClearable extends boolean = false, FreeSolo extends boolean = false>({ error, fullWidth, helperText, label, loading, maxHeight, mode, placeholder, startAdornment, width, getChipIcon, getOptionLabel, ...other }: TeliAutocompleteProps<Value, Multiple, DisableClearable, FreeSolo>): import("@emotion/react/jsx-runtime").JSX.Element;
export default TeliAutocomplete;
