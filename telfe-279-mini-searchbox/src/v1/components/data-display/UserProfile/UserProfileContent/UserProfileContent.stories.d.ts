import { default as React } from '../../../../../../node_modules/react';
import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: React.FC<{
        children?: React.ReactNode | undefined;
    }>;
    tags: string[];
    decorators: (Story: import('@storybook/csf').PartialStoryFn<import('@storybook/react').ReactRenderer, {
        children?: React.ReactNode | undefined;
    }>) => import("@emotion/react/jsx-runtime").JSX.Element;
    argTypes: {
        children: {
            control: false;
            description: string;
            table: {
                type: {
                    summary: string;
                };
            };
        };
    };
};
export default meta;
export type Story = StoryObj<typeof meta>;
export declare const Basic: Story;
export declare const WithActions: Story;
