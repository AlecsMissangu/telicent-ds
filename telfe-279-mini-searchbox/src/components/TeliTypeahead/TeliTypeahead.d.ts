import { TeliAutocompleteProps } from '../TeliAutocomplete/TeliAutocomplete';

export interface TeliTypeaheadProps<Value, Multiple extends boolean = false, DisableClearable extends boolean = false, FreeSolo extends boolean = false> extends Omit<TeliAutocompleteProps<Value, Multiple, DisableClearable, FreeSolo>, "options"> {
    errorMessage?: string;
    queryParamKey: string;
    url: string;
    onTransform?: (data: any) => any;
}
declare function TeliTypeahead<Value, Multiple extends boolean = false, DisableClearable extends boolean = false, FreeSolo extends boolean = false>({ errorMessage, helperText, queryParamKey, url, noOptionsText, onTransform, ...otherProps }: TeliTypeaheadProps<Value, Multiple, DisableClearable, FreeSolo>): import("@emotion/react/jsx-runtime").JSX.Element;
export default TeliTypeahead;
