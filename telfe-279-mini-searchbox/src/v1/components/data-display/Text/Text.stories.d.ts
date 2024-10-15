import { StoryObj } from '@storybook/react';
import { default as Text } from './Text';

declare const meta: {
    title: string;
    component: import('../../../../../node_modules/react').FC<import('./Text').TextProps>;
    tags: string[];
    args: {
        align: "inherit";
    };
};
export default meta;
type Story = StoryObj<typeof Text>;
export declare const Subtitle1: Story;
export declare const Subtitle2: Story;
export declare const Body1: Story;
export declare const Body2: Story;
export declare const Caption: Story;
export declare const Overline: Story;
