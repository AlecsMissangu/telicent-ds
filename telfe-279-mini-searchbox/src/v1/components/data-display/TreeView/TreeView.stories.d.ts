import { StoryObj } from '@storybook/react';
import { TreeViewBaseItem } from './TreeView';

declare const meta: {
    title: string;
    component: import('../../../../../node_modules/react').FC<import('./TreeView').TreeViewProps<TreeViewBaseItem>>;
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
    tags: string[];
    args: {
        items: TreeViewBaseItem[];
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Example: Story;
