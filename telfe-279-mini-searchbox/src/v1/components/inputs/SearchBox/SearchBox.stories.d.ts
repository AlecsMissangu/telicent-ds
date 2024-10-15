import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: import('../../../../../node_modules/react').FC<import('./SearchBox').SearchBoxProps<string>>;
    tags: string[];
    args: {
        onSearch: import('@vitest/spy').Mock<(...args: any[]) => any>;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Example: Story;
