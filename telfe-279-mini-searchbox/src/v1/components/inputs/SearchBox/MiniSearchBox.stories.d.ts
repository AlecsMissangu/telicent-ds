import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: (props: import('./MiniSearchBox').MiniSearchBoxProps) => import("@emotion/react/jsx-runtime").JSX.Element;
    tags: string[];
    args: {
        onSearch: import('@vitest/spy').Mock<(...args: any[]) => any>;
        onTogglePopOver: import('@vitest/spy').Mock<(...args: any[]) => any>;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Demo: Story;
export declare const WithDownArrow: Story;
/**
 * For asynchronous events, display a loader to inform the user that an action
 * is in progress. To implement this, simply set the `loading` prop to `true`.
 */
export declare const Loading: Story;
