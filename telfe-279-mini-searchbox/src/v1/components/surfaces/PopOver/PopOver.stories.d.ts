import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: (props: import('./Popover').PopOverProps) => import("@emotion/react/jsx-runtime").JSX.Element;
    tags: string[];
    args: {
        onClose: import('@vitest/spy').Mock<(...args: any[]) => any>;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Demo: Story;
