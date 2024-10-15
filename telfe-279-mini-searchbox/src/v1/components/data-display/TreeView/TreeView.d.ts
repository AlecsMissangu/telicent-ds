import { default as React } from '../../../../../node_modules/react';
import { TreeViewBaseItem } from '@mui/x-tree-view';

type TreeViewProps<Item extends object = TreeViewBaseItem> = {
    items: Item[];
} & Partial<{
    /**
     * Force children to always be expanded
     */
    alwaysExpandedIds: string[];
    /**
     * Expanded item ids. Used when the item's expansion is not controlled.
     */
    defaultExpandedItems: string[];
    /**
     * Selected item ids. (Uncontrolled) When multiSelect is true this takes an
     * array of strings; when false (default) a string.
     */
    defaultSelectedItems: string | string[];
    /**
     * 	Expanded item ids. Used when the item's expansion is controlled.
     */
    expandedItems: string[];
    /**
     * Used to determine the id of a given item.
     * @param item The item to check.
     * @returns  The id of the item.
     * @default (item) => item.id
     */
    getItemId: (item: Item) => string;
    /**
     * Used to determine the string label for a given item.
     * @param item The item to check.
     * @returns The label of the item.
     * @default (item) => item.label
     */
    getItemLabel: (item: Item) => string;
    /**
     * This prop is used to help implement the accessibility logic. If you don't
     * provide this prop, it falls back to a randomly generated id.
     */
    id: string;
    /**
     * Used to determine if a given item should be disabled.
     * @param item  The item to check.
     * @returns true if the item should be disabled.
     */
    isItemDisabled: (item: Item) => boolean;
    /**
     * 	If true ctrl and shift will trigger multiselect.
     * @default false
     */
    multiSelect: boolean;
    /**
     * Callback fired when tree items are expanded/collapsed.
     * @param event The event source of the callback.
     * @param itemIds The ids of the expanded items.
     * @returns void
     */
    onExpandedItemsChange: (event: React.SyntheticEvent, itemIds: string[]) => void;
    /**
     * Callback fired when a tree item is expanded or collapsed.
     * @param event The event source of the callback.
     * @param itemId The itemId of the modified item.
     * @param isExpanded true if the item has just been expanded, false if it has
     * just been collapsed.
     * @returns void
     */
    onItemExpansionToggle: (event: React.SyntheticEvent, itemId: string, isExpanded: boolean) => void;
    /**
     * Callback fired when tree items are focused.
     * @param event The event source of the callback Warning: This is a generic event not a focus event.
     * @param itemId The id of the focused item.
     * @returns void
     */
    onItemFocus: (event: React.SyntheticEvent | null, itemId: string) => void;
    /**
     * Callback fired when a tree item is selected or deselected.
     * @param event The event source of the callback.
     * @param itemId The itemId of the modified item.
     * @param isSelected true if the item has just been selected, false if it has
     * just been deselected.
     * @returns void
     */
    onItemSelectionToggle: (event: React.SyntheticEvent, itemId: string, isSelected: boolean) => void;
    /**
     * Callback fired when tree items are selected/deselected.
     * @param event The event source of the callback
     * @param itemIds The ids of the selected items. When multiSelect is true,
     * this is an array of strings; when false (default) a string.
     * @returns void
     */
    onSelectedItemsChange: (event: React.SyntheticEvent, itemIds: string[] | string | null) => void;
    /**
     * Selected item ids. (Controlled) When multiSelect is true this takes an
     * array of strings; when false (default) a string.
     */
    selectedItems: string | string[];
}>;
declare const TreeView: React.FC<TreeViewProps>;
export default TreeView;
export type { TreeViewProps, TreeViewBaseItem };
