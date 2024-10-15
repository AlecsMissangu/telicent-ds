import { StoryObj } from '@storybook/react';
import { MiniSearchAutocompleteProps } from './MiniSearchAutocomplete';

type LabelString = {
    id: string;
    label: string;
    isRecentSearch: boolean;
};
declare const meta: {
    title: string;
    component: (props: MiniSearchAutocompleteProps<LabelString, false, false, true>) => import("@emotion/react/jsx-runtime").JSX.Element;
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
/**
 * Recent searches will be displayed when `isRecentSearch` has been set to true in `options`
 */
export declare const RecentSearches: Story;
/**
 * This example shows how suggestions from typeahead and the user's recent
 * searches should be displayed. Recent searches should take priority over
 * typeahead suggestions. Type solo to the result.
 */
export declare const SearchResults: Story;
