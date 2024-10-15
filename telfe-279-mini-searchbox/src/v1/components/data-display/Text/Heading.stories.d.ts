import { StoryObj } from '@storybook/react';
import { H1 } from './Text';

declare const meta: {
    title: string;
    component: import('../../../../../node_modules/react').FC<import('./Text').HeadingProps>;
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
    tags: string[];
    args: {
        align: "inherit";
    };
};
export default meta;
type Story = StoryObj<typeof H1>;
export declare const Heading1: Story;
export declare const Heading2: Story;
export declare const Heading3: Story;
export declare const Heading4: Story;
export declare const Heading5: Story;
export declare const Heading6: Story;
