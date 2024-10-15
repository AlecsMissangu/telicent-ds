declare const MENU_ITEMS: ({
    id: string;
    onClick: import('@storybook/addon-actions').HandlerFunction;
    label: string;
} | {
    id: string;
    label: string;
    onClick?: undefined;
})[];
export default MENU_ITEMS;
